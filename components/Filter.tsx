"use client";
import { Image as IImage } from "sanity";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { BiLoaderAlt } from "react-icons/bi";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import ProductGrid from "./ProductGrid";

interface productType {
  productName: string;
  price: string;
  image: IImage;
  category: string;
  _id: number;
  gender: string;
  kids: string;
  description: string;
  status: string;
  tags: string;
  slug: {
    current: string;
  };
  featured: string;
}

interface Filters {
  category: string;
  gender: string[];
  kids: string[];
  price: [number, number][];
}
interface Props {
  featured?: string;
}

const query = `*[_type == 'product']`;

const Filter = ({ featured }: Props) => {
  const [showFilters, setshowFilter] = useState(true);
  const [isProducts, setProducts] = useState<productType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [showFiltered, setShowFiltered] = useState<productType[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: "All",
    gender: [],
    kids: [],
    price: [],
  });

  // Fetch products on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(query);
        if (featured) {
          const update = data.filter((val: productType) => val.featured === featured);
          setProducts(update);
          setShowFiltered(update);
        } else {
          setProducts(data);
          setShowFiltered(data);
        }
      } catch (error) {
        console.error("Error while fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  // Apply filters
  const filterChange = (newFilters: Filters) => {
    setFilters(newFilters);

    let filtered = isProducts;

    // **Apply filters correctly**
    if (newFilters.category !== "All") {
      filtered = filtered.filter((p) => p.tags === newFilters.category);
    }

    if (newFilters.gender.length) {
      filtered = filtered.filter((p) => newFilters.gender.includes(p.gender));
    }

    if (newFilters.kids.length) {
      filtered = filtered.filter((p) => newFilters.kids.includes(p.kids));
    }

    if (newFilters.price.length) {
      filtered = filtered.filter((p) => {
        const price = parseInt(p.price, 10);
        return newFilters.price.some(
          ([min, max]) => price >= min && price <= max
        );
      });
    }

    setShowFiltered(filtered);
  };
  return (
    <div className="mx-auto">
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex flex-col xl:text-4xl lg:text-3xl md:text-xl text-lg font-medium capitalize ml-8">
            {featured} ({showFiltered.length})
          </div>
        </div>
        {/* Filter and Sort Buttons */}
        <div className="hidden lg:flex">
          <div className="flex items-center mr-10">
            <Button
              variant="ghost"
              className="flex items-center gap-2 hoverEffect rounded-none"
              onClick={() => setshowFilter(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <CategoryFilter
          filters={filters}
          showFilter={showFilters}
          onFilterChange={filterChange}
          className="px-3"
        />
        {!isLoading ? (
          <ProductGrid products={showFiltered} />
        ) : (
          <div className="flex justify-center items-center gap-2 w-full text-2xl font-medium">
            <BiLoaderAlt className="w-5 h-5 animate-spin" />
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
