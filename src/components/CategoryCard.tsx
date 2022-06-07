import { Category } from '../types'
import '../styles/CategoryCard.css'

export default function CategoryCard(props: { category: Category, adminMode: boolean, addingMode: boolean }) {

    !props.adminMode ? console.log('catagory admin mode false') :
        console.log('catagory admin mode true');

    !props.addingMode ? console.log("not ADDING Mode") :
        console.log('adding true');

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
                <a href={'/editform?category=' + props.category.id + '&addingMode=' + props.addingMode}>
                    <div className="big-category-card">{props.category.name}</div>
                </a>
                {/* {console.log(typeof (props.addingMode.toString()) + "typ of ADDING")} */}
            </div>
        )
    }

}

