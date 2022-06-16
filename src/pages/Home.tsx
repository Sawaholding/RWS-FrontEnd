import { useEffect, useState } from "react";
import { TopBanner, CategoryCard, CategoryNavBar } from "../components";
import { Category } from "../types";
import { fetchCategories } from "../api";
import "../styles/Home.css";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [categories, setCategories] = useState<Category[]>([]);
  const [adminMode, setAdminMode] = useState<boolean>();
  const [addingMode, setaddingMode] = useState<boolean>();

  useEffect(() => {
    fetchCategories().then(setCategories);
    setAdminMode(false);
    setAdminMode(false);
  }, []);

  return (
    <>
      <TopBanner />

      <div className="home-container">
        <CategoryNavBar />

        <h1>Categories</h1>

        <div className="home-category-grid">
          {adminMode ? (
            <a className="category-card-container add" href={"/editform?addingMode=" + addingMode}>
              Add new
            </a>
          ) : null}

          {categories?.map((category) => {
            return <CategoryCard key={category.id} category={category} link={adminMode ? "/editform?category=" + category.id : null} />;
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            !adminMode ? setAdminMode(true) : setAdminMode(false);
          }}
        >
          Admin
        </button>
      </div>
    </>
  );
}
