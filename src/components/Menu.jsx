import { useState } from "react";
import MenuItem from "./MenuItem";
import SearchFilter from "./SearchFilter";
import BannerCarousel from "./BannerCarousel";

const menuData = [
  
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 260,
    category: "Main Course",
    featured: true,
    image: "images/paneer-butter-masala.jpg",///images/banner1.jpg
  },
  {
    id: 2,
    name: "Veg Biryani",
    price: 240,
    category: "Main Course",
    featured: true,
    image: "images/veg biryani.jpg",
  },

  //  STARTERS
  {
    id: 3,
    name: "Spring Rolls",
    price: 120,
    category: "Starters",
    featured: false,
    image: "images/spring roll.jpg",
  },
  {
    id: 4,
    name: "Crispy Corn",
    price: 140,
    category: "Starters",
    featured: false,
    image: "images/crispy corn.jpg",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    price: 180,
    category: "Starters",
    featured: false,
    image: "images/paneer tika.jpg",
  },

  //  MAIN COURSE
  {
    id: 6,
    name: "Dal Tadka",
    price: 190,
    category: "Main Course",
    featured: false,
    image: "images/dal tadka.jpg",
  },
  {
    id: 7,
    name: "Mix Veg Curry",
    price: 200,
    category: "Main Course",
    featured: false,
    image: "images/mix veg curry.jpg",
  },
  {
    id: 8,
    name: "Butter Naan",
    price: 40,
    category: "Main Course",
    featured: false,
    image: "images/butter nan.jpg",
  },

  //  DRINKS
  {
    id: 9,
    name: "Cold Coffee",
    price: 90,
    category: "Drinks",
    featured: false,
    image: "images/cold coffee.jpg",
  },
  {
    id: 10,
    name: "Fresh Lime Soda",
    price: 70,
    category: "Drinks",
    featured: false,
    image: "images/limbu soda.jpg",
  },

  //  DESSERT
  {
    id: 11,
    name: "Gulab Jamun",
    price: 80,
    category: "Dessert",
    featured: false,
    image: "/images/gulab-jamun.jpg",
  },
  {
    id: 12,
    name: "Ice Cream",
    price: 100,
    category: "Dessert",
    featured: false,
    image: "images/ice cream.jpg",
  },
];

export default function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMenu = menuData.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  const groupedMenu = filteredMenu.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const featuredItems = filteredMenu.filter((item) => item.featured);

  return (
    <div className="p-6">

      {/* NEW SLIDER BANNER */}
      <BannerCarousel />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Chef Specials */}
      {featuredItems.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">⭐ Chef's Specials</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {/*  By Category */}
      {Object.keys(groupedMenu).map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{cat}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedMenu[cat].map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
