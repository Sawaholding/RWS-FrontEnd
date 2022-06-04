import { Category } from '../types'
import '../styles/CategoryCard.css'
import EditCategoryForm from './EditCategoryForm'

export default function CategoryCard(props: { category: Category, adminMode: boolean }) {

    !props.adminMode ? console.log('false') :
        console.log('true')

    if (!props.adminMode) {
        return (
            <>
                <div className="category-card-container"
                    style={{
                        backgroundImage: `url(${props.category.image})`,
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>

                    <a href={`/products?category=${props.category.id}`}>
                        <div className="big-category-card">{props.category.name}</div>
                    </a>
                </div>
            </>
        )

    } else {
        return (
            <div className="category-card-container"
                style={{
                    backgroundImage: `url(${props.category.image})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'
                }}>

                <a href={'/editform?category=' + props.category.id}>
                    <div className="big-category-card">{props.category.name}</div>
                </a>



                {/* < EditCategoryForm key={props.category.id} categorry={props.category} /> */}
            </div>
        )
    }

}

