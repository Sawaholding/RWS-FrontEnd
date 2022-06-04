import { useEffect, useState, useRef } from 'react'
import { CategoryNavBar, TopBanner, CategoryCard, EditCategoryForm } from '../components'
import { Category } from '../types'
import { fetchCategories, fetchOneCategory } from '../api'
import '../styles/Home.css'
import Cookies from 'universal-cookie'

export default function Home() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [adminMode, setAdminMode] = useState<boolean>(false)
    useEffect(() => {
        fetchCategories().then(setCategories);
    }, [])


    const bannerImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8acff337505429.57430a053a549.jpg';

    return (
        <>
            {
                < div className='app-Container'>

                    <div className='top-Banner'>
                        <TopBanner imageUrl={bannerImage} />
                        <h1></h1>
                    </div>
                    <div className='middle-content'>
                        {
                            categories.length &&
                            categories.map((c) => {
                                return <CategoryCard key={c.id} {...c} category={c} adminMode={adminMode} />
                                // return CategoryCard();
                            })
                        }
                    </div>
                    <h1></h1>
                    <div className='down-Banner'>
                        <h1></h1>
                    </div>
                    <div className='btn'>
                        <button type="button" onClick=
                            {
                                () => { !adminMode ? setAdminMode(true) : setAdminMode(false) }
                            }>
                            Admin Edit

                        </button>
                    </div>
                </div>

            }
        </>
    )
}

