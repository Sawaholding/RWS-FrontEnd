import { useEffect, useState } from 'react'
import { CategoryNavBar, TopBanner, CategoryCard } from '../components'
import { Category } from '../types'
import { fetchCategories } from '../api'
import '../styles/Home.css'



// const [categories, setCategories] = useState<Category[]>([])

// console.log("waloooooooooooooo");
// useEffect(() => {
//     fetchCategories().then(setCategories)
// }, [])


export default function Home() {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        fetchCategories().then(setCategories)
    }, [])
    const bannerImage = 'https://www.nestleprofessionalmena.com/sites/default/files/2020-05/Vision%20banner.png'
    // const bannerImage = ""
    return (
        <>{

            < div className='app-Container'>
                <div className='top-Banner'>
                    <TopBanner imageUrl={bannerImage} />
                    <h1></h1>
                </div>
                <div className='middle-content'>
                    {categories.length &&
                        categories.map((c) => {
                            return <CategoryCard key={c.id} {...c} />
                        })
                    }

                </div>
                <h1></h1>
                <div className='down-Banner'>
                    <h1></h1>
                </div>
            </div>
        }
        </>
    )
}

