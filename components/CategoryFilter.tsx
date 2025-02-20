"use client";

import { Categories } from "@/constant";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

interface Filters {
  category: string;
  gender: string[];
  kids: string[];
  price: [number, number][];
}

interface Props {
  showFilter: boolean;
  onFilterChange: (newFilter: Filters) => void;
  filters: Filters;
  className?: string;
}

export function CategoryFilter({
  showFilter,
  onFilterChange,
  filters,
  className,
}: Props) {
  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };
  const handleCheckboxChange = (type: string, value: string) => {
    const updated = [type].includes(value)
      ? [type].filter((v) => v !== value)
      : [...[type], value];
    onFilterChange({ ...filters, [type]: updated });
  };

  const handlePriceChange = (range: [number, number]) => {
    const updated = filters.price.includes(range)
      ? filters.price.filter((r) => r !== range)
      : [...filters.price, range];
    onFilterChange({ ...filters, price: updated });
  };
  return (
    <div className=" hidden lg:flex">
      {showFilter && (
        <div className={cn("w-60 flex-shrink-0 px-3", className)}>
          <div className="space-y-2">
            {/* Category Filter */}
            <div className="space-y-2 border-b-2 border-[#E5E5E5] py-4">
              {Categories.map((category) => (
                <div
                  key={category.title}
                  className="flex items-center space-x-2"
                >
                  <label
                    onClick={() => handleCategoryChange(category.title)}
                    className="text-md text-[#111111] cursor-pointer font-medium hover:text-[#000000]"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
            <Collapsible className="border-b-2 border-[#E5E5E5] py-2">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="font-medium text-[#111111]">Gender</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {["male", "female"].map((gender) => (
                  <div
                    key={gender}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleCheckboxChange("gender", gender)}
                  >
                    <Checkbox checked={filters.gender.includes(gender)} />
                    <label className="text-sm text-[#111111] capitalize hover:text-[#000000]">
                      {gender}
                    </label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="border-b-2 border-[#E5E5E5] py-2">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="font-medium">Kids</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {["Boys", "Girls"].map((type) => (
                  <div
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleCheckboxChange("kids", type)}
                  >
                    <Checkbox checked={filters.kids.includes(type)} />
                    <label className="text-sm text-[#111111] hover:text-[#000000]">
                      {type}
                    </label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="border-b-2 border-[#E5E5E5] py-2">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="font-medium">Price</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {[0, 2500, 5000, 10000].map((price, index, arr) => {
                  const range: [number, number] = [
                    arr[index],
                    arr[index + 1] || arr[index],
                  ];
                  if (index === arr.length - 1) return null;
                  return (
                    <div
                      key={range.join("-")}
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => handlePriceChange(range)}
                    >
                      <Checkbox checked={filters.price.includes(range)} />
                      <label className="text-sm text-[#111111] hover:text-[#000000]">
                        PKR {range[0]} - PKR {range[1]}
                      </label>
                    </div>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
