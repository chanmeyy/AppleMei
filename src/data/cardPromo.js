 // Card Promo Data - Single Card
export const cardPromoData = {
  eyebrow: "iPhone",
  title: "Meet the latest iPhone lineup.",
  imageUrl: "https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_largetall_2x.jpg",
  links: [
    { label: "Learn more", href: "/iphone", variant: "text" },
    { label: "Shop iPhone", href: "/shop/iphone", variant: "primary" }
  ],
  className: "",
  aspectRatio: "16/9",
  minHeight: "400px"
};

// Multiple Card Promo Data for grid display
export const cardPromoSlides = [
  {
    id: 1,
    eyebrow: "iPhone 16 Pro",
    title: "Hello, Apple Intelligence.",
    imageUrl: "https://www.apple.com/v/iphone-16-pro/a/images/overview/hero/iphone_16pro_hero__e5l2jlbjv3ye_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/iphone-16-pro" },
      { label: "Buy", href: "/shop/iphone-16-pro", variant: "primary" }
    ]
  },
  {
    id: 2,
    eyebrow: "iPad Air",
    title: "Supercharged by the M3 chip.",
    imageUrl: "https://www.apple.com/v/ipad-air/a/images/overview/hero/ipad_air_hero__g3jqx1au52q2_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/ipad-air" },
      { label: "Buy", href: "/shop/ipad-air", variant: "primary" }
    ]
  },
  {
    id: 3,
    eyebrow: "Apple Watch",
    title: "Smarter. Brighter. Mightier.",
    imageUrl: "https://www.apple.com/v/apple-watch-series-9/a/images/overview/hero/hero_apple_watch_series_9__d5f2f7b6e8a3_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/watch" },
      { label: "Buy", href: "/shop/watch", variant: "primary" }
    ]
  },
  {
    id: 4,
    eyebrow: "AirPods Pro",
    title: "Adaptive Audio. Now playing.",
    imageUrl: "https://www.apple.com/v/airpods-pro/a/images/overview/hero/hero_airpods_pro__e4g7k9m2n6q8_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/airpods-pro" },
      { label: "Buy", href: "/shop/airpods-pro", variant: "primary" }
    ]
  },
  {
    id: 5,
    eyebrow: "MacBook Pro",
    title: "The most powerful Mac ever.",
    imageUrl: "https://www.apple.com/v/macbook-pro/a/images/overview/hero/hero_macbook_pro__b3f5g7h9j1k3_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/macbook-pro" },
      { label: "Buy", href: "/shop/macbook-pro", variant: "primary" }
    ]
  },
  {
    id: 6,
    eyebrow: "HomePod",
    title: "Room-filling sound. Now in two sizes.",
    imageUrl: "https://www.apple.com/v/homepod/a/images/overview/hero/hero_homepod__c6e8g0j2l4n6_largetall_2x.jpg",
    links: [
      { label: "Learn more", href: "/homepod" },
      { label: "Buy", href: "/shop/homepod", variant: "primary" }
    ]
  }
];

// You can also have different categories of data
export const featuredPromo = {
  eyebrow: "Featured",
  title: "The best of Apple.",
  imageUrl: "https://www.apple.com/v/home/images/hero/featured_hero__d4f6h8j0l2n4_largetall_2x.jpg",
  links: [
    { label: "View all", href: "/products" }
  ]
};

export const holidayPromo = {
  eyebrow: "Holiday Gift Guide",
  title: "Find the perfect gift.",
  imageUrl: "https://www.apple.com/v/home/images/hero/holiday_hero__a1c3e5g7i9k1_largetall_2x.jpg",
  links: [
    { label: "Shop gifts", href: "/gifts", variant: "primary" }
  ]
};