import { Category } from "../types";
import "../styles/CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ category, link }: { category: Category; link?: string }) {
  return (
    <Link to={link ?? null}>
      <div className="category-card-container" style={{ backgroundImage: `url(${category.image})` }}>
        <div className="big-category-card">{category.name}</div>
      </div>
    </Link>
  );
}
