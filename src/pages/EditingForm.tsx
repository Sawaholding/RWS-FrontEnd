import { useEffect, useRef, useState } from 'react';
// import { CategoryNavBar, TopBanner, CategoryCard, EditCategoryForm } from '../components'
import { Category } from '../types';
import { useSearchParams } from 'react-router-dom'
import { fetchOneCategory, postCategory, deleteCategory, putCategory } from '../api'
import { v4 as uuid } from 'uuid';



export default function EditingForm() {

    const [searchParams, _] = useSearchParams()
    const categoryId = searchParams.get('category') as string
    const addingMode = searchParams.get('addingMode') as string
    const [currentCategory, setCategory] = useState<Category>();


    const nameRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        fetchOneCategory(categoryId).then(setCategory);
        console.log(typeof (categoryId))
        console.log(categoryId)
        console.log(typeof (Boolean(addingMode)))
    }, [])

    async function createCategory() {
        const newCategory: Category = {
            id: uuid(),
            dateTimeCreated: new Date().toString(),
            name: nameRef.current.value,
            image: imageRef.current.value
        }
        await postCategory(newCategory)
        console.log(newCategory)
    }

    async function deleteCat() {
        console.log(currentCategory)
        await deleteCategory(currentCategory)
    }

    async function updateCategory() {
        const newCategory: Category = {
            id: currentCategory.id,
            dateTimeCreated: currentCategory.dateTimeCreated,
            name: nameRef.current.value,
            image: imageRef.current.value
        }
        console.log(newCategory)
        await putCategory(newCategory)
    }

    return (
        <div>
            <p>Name</p>
            <input type="text" ref={nameRef} id="name" defaultValue={currentCategory?.name} />
            <p>Image URL</p>
            <input type="text" ref={imageRef} id="image" defaultValue={currentCategory?.image} />
            <div>
                <br />
                {categoryId ?
                    <>
                        <button onClick={updateCategory}>Edit category</button>
                        <button onClick={deleteCat}>Delete category</button>
                    </>
                    :
                    <button onClick={createCategory}>Create category</button>
                }
                <button>Cancel</button>
            </div>
        </div>
    )
}