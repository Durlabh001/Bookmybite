// Data For Book My Bite //

const restaurantsData = [
  {
    title: "The Spice Garden",
    description:
      "A cozy spot serving authentic North Indian curries and tandoori dishes.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/3/100253/8bd806c90513918b590ad15cfa3a0a28.jpg",
      filename: "Image",
    },
    price: 1200,
    location: "Jaipur",
    country: "India",
    category: "Indian",
  },
  {
    title: "Sakura Sushi House",
    description:
      "Traditional Japanese sushi and ramen prepared with fresh local ingredients.",
    image: {
      url: "https://japanrestaurant.net/wp/wp-content/uploads/2023/12/TYOTO_Sushi_RESTAURANT-scaled.jpg",
      filename: "Image",
    },
    price: 1800,
    location: "Tokyo",
    country: "Japan",
    category: "Chinese",
  },
  {
    title: "Bella Italia",
    description:
      "Homemade pastas, wood-fired pizzas, and Italian desserts in a warm ambiance.",
    image: {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/22/84/d7/23/bella-italia-queensway.jpg",
      filename: "Image",
    },
    price: 1500,
    location: "Rome",
    country: "Italy",
    category: "Italian",
  },
  {
    title: "Le Petit Paris",
    description:
      "A French café offering croissants, pastries, and classic Parisian meals.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/0b/8f/29/caption.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 1000,
    location: "Paris",
    country: "France",
    category: "Mexican",
  },
  {
    title: "The Royal Thali",
    description:
      "Experience the flavors of Rajasthan with traditional thalis and sweets.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/2/21568562/fb804bca7efe42ed54eca2573b92cecd.jpeg?fit=around|960:500&crop=960:500;*,*",
      filename: "Image",
    },
    price: 900,
    location: "Udaipur",
    country: "India",
    category: "Indian",
  },
  {
    title: "Ocean Breeze Diner",
    description: "Seafood and grill specialties with oceanfront views.",
    image: {
      url: "https://ychef.files.bbci.co.uk/1280x720/p0jpm5lr.jpg",
      filename: "Image",
    },
    price: 2000,
    location: "Sydney",
    country: "Australia",
    category: "Italian",
  },
  {
    title: "Taco Fiesta",
    description:
      "Colorful Mexican restaurant serving tacos, nachos, and margaritas.",
    image: {
      url: "https://static.where-e.com/United_States/Nevada/Nye_County/El-Jefes-Restaurant_bb68f915b6be1455e81cc63cb1c2aa7f.jpg",
      filename: "Image",
    },
    price: 700,
    location: "Mexico City",
    country: "Mexico",
    category: "Mexican",
  },
  {
    title: "The Green Bowl",
    description:
      "Healthy vegan and vegetarian dishes with organic ingredients.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/11/05/e5/beautiful-interior-of.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 850,
    location: "Bangalore",
    country: "India",
    category: "Japanese",
  },
  {
    title: "Kabab King",
    description: "Middle Eastern kababs, shawarma, and hummus platters.",
    image: {
      url: "https://kabab-king.shop/public/media/kabab-king-shop/5.jpg",
      filename: "Image",
    },
    price: 1100,
    location: "Istanbul",
    country: "Turkey",
    category: "Indian",
  },
  {
    title: "Burger Hub",
    description: "American-style burgers and fries with house-made sauces.",
    image: {
      url: "https://static.where-e.com/United_States/Burger-Hub_06035d1109abb331790feeff77fdde8a.jpg",
      filename: "Image",
    },
    price: 600,
    location: "New York",
    country: "USA",
    category: "Japanese",
  },
  {
    title: "Mountain View Café",
    description:
      "Rustic café offering coffee, pastries, and scenic mountain views.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/8/20435348/73390f8f8bb314833b0e19eee833f3a1.jpg?fit=around|960:500&crop=960:500;*,*",
      filename: "Image",
    },
    price: 500,
    location: "Manali",
    country: "India",
    category: "Indian",
  },
  {
    title: "Casa del Mar",
    description:
      "Mediterranean cuisine featuring seafood and refreshing cocktails.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/18/bd/72/nuestra-terraza.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 1900,
    location: "Barcelona",
    country: "Spain",
    category: "Chinese",
  },
  {
    title: "The Great Wall Dine",
    description: "Authentic Chinese flavors — dim sums, noodles, and soups.",
    image: {
      url: "https://www.theleela.com/prod/content/assets/aio-banner/dekstop/The%20Great%20wall_2_1920x950.webp?VersionId=Xulv3CPAz.ItEJfn8kfH_yq4OGCCzouV",
      filename: "Image",
    },
    price: 1300,
    location: "Beijing",
    country: "China",
    category: "Chinese",
  },
  {
    title: "Urban Eatery",
    description: "Trendy urban dining with fusion food and live music.",
    image: {
      url: "https://media.licdn.com/dms/image/v2/C4D1BAQHTuSKCDUge9w/company-background_10000/company-background_10000/0/1598735389312/urbaneaterynbo_cover?e=2147483647&v=beta&t=JYd4XRqVy6PQByrlb5akHRL87ILqj_Trt4Uuw0XzlMk",
      filename: "Image",
    },
    price: 1400,
    location: "Mumbai",
    country: "India",
    category: "Indian",
  },
  {
    title: "The Morning Brew",
    description:
      "Chill café with specialty coffees, pancakes, and breakfast bowls.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/51/91/0b/retail-coffee-bags-logo.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 650,
    location: "Toronto",
    country: "Canada",
    category: "Japanese",
  },
  {
    title: "Curry Leaf",
    description:
      "South Indian restaurant known for dosas, idlis, and filter coffee.",
    image: {
      url: "https://content3.jdmagicbox.com/v2/comp/ayodhya/k2/9999px527.x527.220620150147.n2k2/catalogue/currry-leaf-south-indian-kitchen-ayodhya-city-ayodhya-restaurants-kz60gqec7v.jpg",
      filename: "Image",
    },
    price: 800,
    location: "Chennai",
    country: "India",
    category: "Italian",
  },
  {
    title: "Golden Dragon",
    description: "Pan-Asian fine dining with a luxurious ambience.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/b0/e4/f6/photo0jpg.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 2200,
    location: "Singapore",
    country: "Singapore",
    category: "Mexican",
  },
  {
    title: "Mama Mia Trattoria",
    description:
      "Family-owned Italian restaurant serving classic comfort dishes.",
    image: {
      url: "https://static.spotapps.co/web/mamamiatrattoria--com/custom/about_us_page_slide_3.jpg",
      filename: "Image",
    },
    price: 1600,
    location: "Naples",
    country: "Italy",
    category: "Italian",
  },
  {
    title: "The Grill House",
    description: "Steakhouse offering perfectly grilled meats and wines.",
    image: {
      url: "https://resizer.otstatic.com/v3/photos/68732885-3?width=1280&height=720&webp=true",
      filename: "Image",
    },
    price: 2500,
    location: "Chicago",
    country: "USA",
    category: "Mexican",
  },
  {
    title: "The Tea Leaf",
    description: "Peaceful tea lounge offering global tea blends and snacks.",
    image: {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/06/43/50/f8/the-coffee-bean-and-tea.jpg",
      filename: "Image",
    },
    price: 400,
    location: "Kolkata",
    country: "India",
    category: "Indian",
  },
  {
    title: "Saffron & Silk",
    description:
      "Luxury Indian restaurant blending modern presentation with classic flavors.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b6/bc/60/getlstd-property-photo.jpg?w=900&h=500&s=1",
      filename: "Image",
    },
    price: 2400,
    location: "Delhi",
    country: "India",
    category: "Indian",
  },
  {
    title: "The Garden Grill",
    description: "Outdoor restaurant with grilled dishes and ambient lighting.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/1/18616941/e7827f0f029ea37eb599be37dac1ea6e_featured_v2.jpg",
      filename: "Image",
    },
    price: 1300,
    location: "Goa",
    country: "India",
    category: "Chinese",
  },
  {
    title: "Cafe Mirage",
    description: "Modern café with coffee, wraps, and relaxed interiors.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/8/21886838/2675f5c7b9073206f0c545df72f79fc8.jpg?fit=around|960:500&crop=960:500;*,*",
      filename: "Image",
    },
    price: 700,
    location: "Pune",
    country: "India",
    category: "Italian",
  },
  {
    title: "Bento House",
    description: "Japanese bento boxes and miso soups in a minimalist setting.",
    image: {
      url: "https://i0.wp.com/twentysomethingsa.com/wp-content/uploads/2015/07/osaka-.jpg?ssl=1",
      filename: "Image",
    },
    price: 1200,
    location: "Osaka",
    country: "Japan",
    category: "Japanese",
  },
  {
    title: "Royal Feast",
    description: "Mughlai cuisine with kebabs, biryanis, and rich curries.",
    image: {
      url: "https://media.assettype.com/knocksense%2F2024-09-26%2F1hl2amyp%2F6M26026.jpg?rect=0%2C625%2C6000%2C3375",
      filename: "Image",
    },
    price: 1800,
    location: "Lucknow",
    country: "India",
    category: "Mexican",
  },
  {
    title: "The Olive Tree",
    description: "Greek restaurant offering souvlaki, moussaka, and tzatziki.",
    image: {
      url: "https://www.olive-tree.gr/wp-content/uploads/2020/12/DSC0877.jpg",
      filename: "Image",
    },
    price: 1400,
    location: "Athens",
    country: "Greece",
    category: "Indian",
  },
  {
    title: "Moonlight Lounge",
    description:
      "Rooftop lounge serving cocktails and fusion food under city lights.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/2/204452/9faa1d7998e4c6c90cea53ec0e9afb44_featured_v2.jpg",
      filename: "Image",
    },
    price: 2000,
    location: "Dubai",
    country: "UAE",
    category: "Italian",
  },
  {
    title: "Cafe Solace",
    description: "Peaceful corner café with artisan breads and desserts.",
    image: {
      url: "https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/activities/m_activities_shimla_cafe_sol_l_297_640.jpg",
      filename: "Image",
    },
    price: 600,
    location: "Shimla",
    country: "India",
    category: "Chinese",
  },
  {
    title: "Tandoor Tales",
    description: "Authentic Punjabi tandoori dishes and buttery naan.",
    image: {
      url: "https://content3.jdmagicbox.com/v2/comp/bardhaman/d4/9999px342.x342.250128222032.g9d4/catalogue/tandoor-tales-khosbagan-bardhaman-restaurants-wt1liuenzo.jpg",
      filename: "Image",
    },
    price: 1300,
    location: "Amritsar",
    country: "India",
    category: "Indian",
  },
  {
    title: "The Food Factory",
    description: "Multi-cuisine restaurant with open kitchen and casual vibes.",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/3/20826013/8d5a8d40bcec95388c80ddba2c223baf_featured_v2.jpg",
      filename: "Image",
    },
    price: 1000,
    location: "Hyderabad",
    country: "India",
    category: "Mexican",
  },
];

// Exporting The Data //

module.exports = restaurantsData;
