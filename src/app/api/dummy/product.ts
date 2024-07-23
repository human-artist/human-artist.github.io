// Define the base structure for identifiable objects
interface Identifiable {
    _id: string;
    _type: string;
  }
  
  // Define the structure for a slug
  interface Slug {
    _type: 'slug';
    current: string;
  }
  
  // Define the structure for an asset reference
  interface AssetReference {
    _ref: string;
    _type: 'reference';
  }
  
  // Define the structure for an image
  interface Image {
    _type: 'image';
    asset: AssetReference;
  }
  
  // Define the structure for a product
  interface Product extends Identifiable {
    title: string;
    slug: Slug;
    price: number;
    description: string;
    images: Image[];
  }
  
  // Define the structure for a category
  interface Category extends Identifiable {
    title: string;
    slug: Slug;
    description: string;
  }
  
  // Union type for items that can be either a Product or a Category
  type Item = Product | Category;
  
  // Example usage:
  const items: Item[] = [
    {
      _id: "product-1",
      _type: "product",
      title: "Sample Product 1",
      slug: {
        _type: "slug",
        current: "sample-product-1"
      },
      price: 19.99,
      description: "This is a description for Sample Product 1.",
      images: [
        {
          _type: "image",
          asset: {
            _ref: "image-abc123-800x600-jpg",
            _type: "reference"
          }
        }
      ]
    },
    {
      _id: "product-2",
      _type: "product",
      title: "Sample Product 2",
      slug: {
        _type: "slug",
        current: "sample-product-2"
      },
      price: 29.99,
      description: "This is a description for Sample Product 2.",
      images: [
        {
          _type: "image",
          asset: {
            _ref: "image-def456-800x600-jpg",
            _type: "reference"
          }
        }
      ]
    },
    {
      _id: "category-1",
      _type: "category",
      title: "Category 1",
      slug: {
        _type: "slug",
        current: "category-1"
      },
      description: "This is a description for Category 1."
    }
  ];
  
  // This setup ensures that TypeScript can help enforce the correct structure and types across the application.
export type {Item};
export default items;
