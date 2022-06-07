import { useEffect, useState, useRef } from 'react'
import { CategoryNavBar, TopBanner, CategoryCard, EditCategoryForm } from '../components'
import { Category } from '../types'
import { fetchCategories, fetchOneCategory } from '../api'
import '../styles/Home.css'
import Cookies from 'universal-cookie'

export default function Home() {
    const bannerImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8acff337505429.57430a053a549.jpg';
    const [categories, setCategories] = useState<Category[]>([]);
    const [adminMode, setAdminMode] = useState<boolean>();

    const cookies = new Cookies();

    useEffect(() => {
        fetchCategories().then(setCategories);
        setAdminMode(false);
        // setAdmin(cookies.get('admin') as boolean)
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
                        <div id='adding-cat-button'>adding</div>
                    </> : null
                }

                {categories.length &&
                    categories.map((c) => {
                        return <CategoryCard key={c.id} {...c} category={c} adminMode={adminMode} />
                        // return CategoryCard();
                    })}
            </div>
            <h1></h1>
            <div className='down-Banner'>
                <h1></h1>
            </div>

            <div className='btn'>
                <button type="button" onClick=
                    {
                        () => {
                            console.log(typeof adminMode)
                            let s = adminMode
                            let ss = s.toString()
                            console.log("type of ss    " + typeof ss + "  " + ss)
                            cookies.remove('admin')
                            cookies.set('admin', ss)
                            cookies.set('admin', adminMode)
                            let c = cookies.get('admin')
                            c = Boolean(c)
                            console.log(typeof c)
                            console.log("cookie boolean value  " + c)
                            !adminMode ? setAdminMode(true) : setAdminMode(false);

                        }

                        // () => {
                        //  cookies.set('admin', cookies.get('admin') === 'false' ? false : true)
                        // console.log(cookies.get('admin') === 'false' ? true : false)
                        // cookies.remove('admin')
                        // cookies.set('admin', cookies.get('admin') === 'false' ? true : false)
                        // window.location.reload()}
                    }>
                    Admin Edit
                </button>
            </div>
        </div >
    )
}

