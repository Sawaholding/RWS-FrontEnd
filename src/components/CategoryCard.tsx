import { Category } from "../types";
import "../styles/CategoryCard.css";

export default function CategoryCard({ category, link }: { category: Category; link?: string }) {
  return (
    <a ref={link ?? null}>
      <div className="category-card-container" style={{ backgroundImage: `url(${category.image})` }}>
        <div className="big-category-card">{category.name}</div>
      </div>
    </a>
  );
}
