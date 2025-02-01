import macbooks from "@/data/macbooks.json";

export default function handler(req, res) {

    
  res.status(200).json(macbooks);
}


[
    {
        "category": {
          "id": 1,
          "name": "MacBook Pro 2019",
          "slug": "macbook-pro-2019",
          "description": "High-performance MacBook Pro lineup released in 2019 with Retina Display, Touch Bar, and powerful processors."
        },
        "products": [
          {
            "id": 101,
            "categoryId": 1,
            "title": "Apple MacBook Pro 16-inch (2019)",
            "slug": "macbook-pro-16-2019",
            "short": "16-inch Retina display, Intel Core i9, 16GB RAM, 1TB SSD",
            "description": "The 16-inch MacBook Pro is designed for power users with a stunning Retina display, Intel Core i9 processor, and a new Magic Keyboard.",
            "detailedDescription": "Apple's MacBook Pro 16-inch (2019) features an immersive Retina display, a powerful 9th Gen Intel Core i9 processor, AMD Radeon Pro 5500M graphics, and an improved thermal design for sustained performance.",
            "image": "https://example.com/macbook-pro-16-2019.jpg",
            "images": [
              "https://example.com/macbook-pro-16-front.jpg",
              "https://example.com/macbook-pro-16-back.jpg",
              "https://example.com/macbook-pro-16-side.jpg"
            ],
            "isFeatured": true,
            "isTrending": false,
            "brand": "Apple",
            "keywords": ["MacBook Pro", "16-inch", "Retina Display", "Intel Core i9", "Apple Laptop"],
            "initialPrice": 2799,
            "currentPrice": 2499
          },
          {
            "id": 102,
            "categoryId": 1,
            "title": "Apple MacBook Pro 13-inch (2019)",
            "slug": "macbook-pro-13-2019",
            "short": "13-inch Retina display, Intel Core i5, 8GB RAM, 512GB SSD",
            "description": "A powerful and compact MacBook Pro with a stunning Retina display and Touch Bar.",
            "detailedDescription": "The MacBook Pro 13-inch (2019) delivers high performance in a compact design, featuring an Intel Core i5 processor, True Tone Retina display, and Thunderbolt 3 connectivity.",
            "image": "https://example.com/macbook-pro-13-2019.jpg",
            "images": [
              "https://example.com/macbook-pro-13-front.jpg",
              "https://example.com/macbook-pro-13-back.jpg",
              "https://example.com/macbook-pro-13-side.jpg"
            ],
            "isFeatured": false,
            "isTrending": true,
            "brand": "Apple",
            "keywords": ["MacBook Pro", "13-inch", "Retina Display", "Intel Core i5", "Apple Laptop"],
            "initialPrice": 1999,
            "currentPrice": 1799
          }
        ]
      }
      
]