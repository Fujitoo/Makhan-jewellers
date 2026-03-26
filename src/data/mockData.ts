export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isHallmarked: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  featured?: boolean;
  description?: string;
  createdAt?: string;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export const businessInfo = {
  name: "Makhan Jewellers",
  phone: "09956484670",
  whatsapp: "919956484670",
  address: "Near Halima Hospital, Munshi Pura, Mau, Uttar Pradesh 275101",
  rating: 5.0,
  reviewCount: 27,
  established: 1994,
  hours: "Mon-Sat: 10:00 AM - 9:00 PM",
  email: "contact@makhanjewellers.com"
};

export const products: Product[] = [
  {
    id: 1,
    name: "Traditional Gold Necklace",
    category: "Necklaces",
    price: "₹1,50,000",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    featured: true,
    description: "Exquisite traditional gold necklace with intricate craftsmanship"
  },
  {
    id: 2,
    name: "Bridal Gold Choker",
    category: "Necklaces",
    price: "₹2,25,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    featured: true,
    description: "Elegant bridal choker with traditional motifs"
  },
  {
    id: 3,
    name: "Temple Jewellery Necklace",
    category: "Necklaces",
    price: "₹3,10,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: false,
    featured: true,
    description: "Authentic temple jewellery with deity motifs"
  },
  {
    id: 4,
    name: "Gold Diamond Ring",
    category: "Rings",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    featured: true,
    description: "Elegant gold ring with certified diamond"
  },
  {
    id: 5,
    name: "Traditional Wedding Ring",
    category: "Rings",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a0a9?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: false,
    featured: true,
    description: "Classic wedding band with traditional patterns"
  },
  {
    id: 6,
    name: "Gold Bangles Set",
    category: "Bracelets",
    price: "₹1,80,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    featured: true,
    description: "Set of 4 traditional gold bangles"
  },
  {
    id: 7,
    name: "Kada Bracelet",
    category: "Bracelets",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: false,
    description: "Elegant gold kada with modern design"
  },
  {
    id: 8,
    name: "Jhumka Earrings",
    category: "Earrings",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    description: "Traditional jhumka earrings with intricate work"
  },
  {
    id: 9,
    name: "Gold Stud Earrings",
    category: "Earrings",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: false,
    description: "Elegant diamond stud earrings in gold setting"
  },
  {
    id: 10,
    name: "Mangalsutra",
    category: "Necklaces",
    price: "₹1,15,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    description: "Traditional mangalsutra with black beads and gold pendant"
  },
  {
    id: 11,
    name: "Gold Chain",
    category: "Chains",
    price: "₹75,000",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: false,
    description: "Classic gold chain with durable links"
  },
  {
    id: 12,
    name: "Antique Gold Pendant",
    category: "Pendants",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    isHallmarked: true,
    isNew: true,
    description: "Antique finish pendant with traditional design"
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    user: "Rahul Singh",
    rating: 5,
    text: "Best jewellery shop in Mau. Pure gold and great designs. The staff is very knowledgeable and helped me choose the perfect wedding jewellery.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    user: "Priya Gupta",
    rating: 5,
    text: "Excellent quality and craftsmanship. I bought a bridal set for my daughter's wedding and it was absolutely stunning. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 3,
    user: "Amit Verma",
    rating: 5,
    text: "Trustworthy jeweller with fair pricing. The hallmarked gold gives peace of mind. Been a customer for over 10 years.",
    date: "3 weeks ago"
  }
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges: TrustBadge[] = [
  {
    icon: "award",
    title: "Hallmarked Gold",
    subtitle: "100% Pure & Certified"
  },
  {
    icon: "shield",
    title: "Trusted Since 1994",
    subtitle: "30+ Years of Excellence"
  },
  {
    icon: "gem",
    title: "Premium Quality",
    subtitle: "Finest Craftsmanship"
  },
  {
    icon: "heart",
    title: "Customer First",
    subtitle: "Lifetime Trust"
  }
];
