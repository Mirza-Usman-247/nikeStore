import { title } from "process";

export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "productName"
      }
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image", // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: 'tags',
      title: 'Product Tags',
      type: 'string',
      options: {
        list: [
          {title: 'Shoes', value: 'Shoes'},
          {title: 'Tops & T-Shirts', value: 'Tops & T-Shirts'},
          {title: 'Sports Bras', value: 'Sports Bras'},
          {title: 'Jackets', value: 'Jackets'},
          {title: 'Shorts', value: 'Shorts'},
          {title: 'Jersey', value: 'Jersey'},
        ],
      }
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {value: 'male', title: 'Male'},
          {value: 'female', title: 'Female'},
          {value: 'none', title: 'none'},
        ]
      }
    },
    {
      name: 'kids',
      title: 'Kids',
      type: 'string',
      options: {
        list: [
          {value: 'boys', title: 'Boys'},
          {value: 'girls', title: 'Girls'},
          {value: 'none', title: 'none'},
          {value: 'kids', title: 'Kids'},
          
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'string',
      options: {
        list: [
          {value: 'new', title: 'New'},
          {value: 'men', title: 'Men'},
          {value: 'women', title: 'Women'},
          {value: 'kids', title: 'Kids'},
          {value: 'sale', title: 'Sale'},
          {value: 'snkrs', title: 'SNKRS'},
        ]
      }
    },
  ],
};
