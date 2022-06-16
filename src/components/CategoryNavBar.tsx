import "../styles/CategoryNavBar.css";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api";
import { Category } from "../types";
import CategoryCard from "./CategoryCard";

export default function CategoryNavBar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="category-nav-container">
      {categories?.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
}
