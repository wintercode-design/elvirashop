export interface ProductVariant {
  color: string;
  colorCode: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  careInstructions: string[];
  variants: ProductVariant[];
  lengths: string[];
  capSizes: string[];
  badge?: "New" | "Bestseller" | "Sale";
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Press Straight Wig",
    price: 289,
    originalPrice: 349,
    category: "Straight",
    description:
      "Achieve the perfect silk press look with this ultra-realistic straight wig. Made from 100% virgin human hair, this wig features a natural-looking hairline with baby hairs and a breathable cap construction for all-day comfort.",
    careInstructions: [
      "Wash with sulfate-free shampoo every 7-10 wears",
      "Deep condition weekly for optimal softness",
      "Store on a wig stand to maintain shape",
      "Use heat protectant before styling",
      "Avoid sleeping in your wig",
    ],
    variants: [
      {
        color: "Natural Black",
        colorCode: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Dark Brown",
        colorCode: "#3d2314",
        images: [
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Honey Blonde",
        colorCode: "#b8860b",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
    ],
    lengths: ['14"', '16"', '18"', '20"', '22"', '24"'],
    capSizes: ["Small", "Medium", "Large"],
    badge: "Sale",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Deep Wave Lace Front",
    price: 329,
    category: "Wavy",
    description:
      "Embrace your natural beauty with our stunning deep wave lace front wig. The voluminous waves create a glamorous look perfect for any occasion, from everyday wear to special events.",
    careInstructions: [
      "Detangle gently from ends to roots",
      "Use curl-defining products to enhance waves",
      "Air dry or use diffuser on low heat",
      "Sleep with a silk bonnet to preserve curls",
      "Refresh with water and leave-in conditioner",
    ],
    variants: [
      {
        color: "Jet Black",
        colorCode: "#0a0a0a",
        images: [
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Off Black",
        colorCode: "#2d2d2d",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    capSizes: ["Small", "Medium", "Large"],
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 256,
  },
  {
    id: "3",
    name: "Kinky Curly Full Lace",
    price: 379,
    category: "Curly",
    description:
      "Celebrate your crown with this gorgeous kinky curly full lace wig. Each curl is perfectly defined to give you that natural, head-turning look that celebrates textured hair in all its glory.",
    careInstructions: [
      "Co-wash between regular shampoos",
      "Apply curl cream while damp",
      "Scrunch to define curls",
      "Use satin pillowcase for nighttime care",
      "Avoid brushing when dry",
    ],
    variants: [
      {
        color: "Natural Black",
        colorCode: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
      {
        color: "Burgundy",
        colorCode: "#722f37",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
    ],
    lengths: ['14"', '16"', '18"', '20"'],
    capSizes: ["Small", "Medium", "Large"],
    badge: "New",
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "4",
    name: "Body Wave HD Lace",
    price: 349,
    category: "Wavy",
    description:
      "Our body wave HD lace wig offers the perfect blend of elegance and versatility. The invisible HD lace melts seamlessly into your skin for an undetectable hairline.",
    careInstructions: [
      "Wash with lukewarm water only",
      "Apply leave-in conditioner after washing",
      "Use wide-tooth comb for detangling",
      "Style with flexi rods for enhanced waves",
      "Store flat or on mannequin head",
    ],
    variants: [
      {
        color: "Natural Black",
        colorCode: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Chestnut Brown",
        colorCode: "#954535",
        images: [
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Ombre Blonde",
        colorCode: "#daa520",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
    ],
    lengths: ['18"', '20"', '22"', '24"', '26"', '28"'],
    capSizes: ["Small", "Medium", "Large"],
    rating: 4.8,
    reviewCount: 178,
  },
  {
    id: "5",
    name: "Pixie Cut Lace Front",
    price: 199,
    category: "Short",
    description:
      "Make a bold statement with our chic pixie cut lace front wig. Perfect for those who love low-maintenance styles without compromising on glamour.",
    careInstructions: [
      "Finger style for best results",
      "Use light holding spray for shape",
      "Wash every 5-7 wears",
      "Apply edge control for sleek look",
      "Easy to maintain on the go",
    ],
    variants: [
      {
        color: "Jet Black",
        colorCode: "#0a0a0a",
        images: [
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
      {
        color: "Platinum",
        colorCode: "#e5e4e2",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
        ],
      },
    ],
    lengths: ['6"', '8"'],
    capSizes: ["Small", "Medium", "Large"],
    badge: "New",
    rating: 4.6,
    reviewCount: 45,
  },
  {
    id: "6",
    name: "Loose Wave Closure Wig",
    price: 269,
    category: "Wavy",
    description:
      "Effortless elegance meets everyday wearability with our loose wave closure wig. The natural-looking closure provides a realistic part that blends with any skin tone.",
    careInstructions: [
      "Brush gently before washing",
      "Use moisturizing shampoo and conditioner",
      "Air dry on wig stand",
      "Apply argan oil for shine",
      "Avoid excessive heat styling",
    ],
    variants: [
      {
        color: "Natural Black",
        colorCode: "#1a1a1a",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
      {
        color: "Dark Brown",
        colorCode: "#3d2314",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
          "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=800",
        ],
      },
    ],
    lengths: ['16"', '18"', '20"', '22"'],
    capSizes: ["Small", "Medium", "Large"],
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 312,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
