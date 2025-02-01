export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; name: string; description: string; price: number; image: string; keyword: string[]; }[]): void; new(): any; }; }; }) {
    const categories = [
      {
        id: 1,
        name: "MacBook pro 2019",
        description: "High-performance Apple MacBook laptops with sleek design and powerful features.",
        price: 1299.99,
        image: "/categories/macbook.webp",
        keyword: ["Apple", "MacBook", "Laptop", "MacOS", "Retina Display"]
      },
      {
        id: 2,
        name: " Hp EliteBook 1030 G5",
        description: "Wide range of high-quality laptops for work, gaming, and everyday use.",
        price: 899.99,
        image: "/categories/hp1030.jpeg",
        keyword: ["Laptop", "Windows", "Ultrabook", "Notebook", "Portable Computer"]
      },
      {
        id: 3,
        name: "Hp EliteBook 1030 G3",
        description: "Reliable and powerful HP laptops for business and personal use.",
        price: 749.99,
        image: "/categories/hp1030.jpeg",
        keyword: ["HP", "Laptop", "Windows", "Workstation", "Business Laptop"]
      },
      {
        id: 4,
        name: "Apple Devices",
        description: "Explore a variety of Apple devices, including iPads, iPhones, and MacBooks.",
        price: 999.99,
        image: "/categories/imac.jpeg",
        keyword: ["Apple", "iPhone", "iPad", "Mac", "iOS", "MacOS"]
      }
    ];
  
    res.status(200).json(categories);
  }
  