import { useEffect, useState } from "react";
import { TopBanner, CategoryCard, CategoryNavBar } from "../components";
import { Category } from "../types";
import { fetchCategories } from "../api";
import "../styles/Home.css";

export default function Home() {
  const bannerImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8acff337505429.57430a053a549.jpg';
  const [categories, setCategories] = useState<Category[]>([]);
  const [adminMode, setAdminMode] = useState<boolean>();
  const [addingMode, setaddingMode] = useState<boolean>();

  useEffect(() => {
    fetchCategories().then(setCategories);
    setAdminMode(false);
    setAdminMode(false);
  }, [])

  return (
    < div className='app-Container'>
      <div className='top-Banner'>
        <TopBanner imageUrl={bannerImage} />
        <h1></h1>
      </div>
      <div className='middle-content'>
        {adminMode ?
          <>
            <a id='adding-cat-button'
              onClick={
                () => {
                  setaddingMode(true)
                  // setAdminMode(true)
                }
              }
              href={'/editform?category=' + '&addingMode=' + 'true'}

            >adding</a>
          </> : null
        }

        {categories.length &&
          categories.map((c) => {
            return <CategoryCard key={c.id} {...c} category={c} adminMode={adminMode} addingMode={addingMode} />

            // return CategoryCard();
          })}
      </div>
      <h1></h1>
      <div className='down-Banner'>
        <h1></h1>
      </div>

      <div className='btn'>
        <button type="button" onClick=

          {() => { !adminMode ? setAdminMode(true) : setAdminMode(false); }}>
          Admin Edit
        </button>
      </div>
    </div >
  )
}
