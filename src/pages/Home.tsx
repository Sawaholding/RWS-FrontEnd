import { useEffect, useState } from 'react'
import { CategoryNavBar, TopBanner, CategoryCard } from '../components'
import { Category } from '../types'
import { fetchCategories } from '../api'




const [categories, setCategories] = useState<Category[]>([])


useEffect(() => {
    fetchCategories().then(setCategories)
}, [])

export default function Home() {
    return (
        <>{
            <div className='app-Container'>
                <div className='top-Banner'>
                    <TopBanner />

                </div>
                <div className='prducts-content'>
                    {
                        categories.map((c) => {
                            return <CategoryCard key={c.id} {...c} />
                        })}
                </div>
                <div className='down-Banner'>
                </div>
            </div>
        }
        </>
    )
}

