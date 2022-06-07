import { useEffect, useRef, useState } from 'react';
import { CategoryNavBar, TopBanner, CategoryCard, EditCategoryForm } from '../components'
import { Category } from '../types';
import { Link, useSearchParams } from 'react-router-dom'
import { fetchCategories, fetchOneCategory, postCategory, deleteCategory, putCategory } from '../api'
import { v4 as uuid } from 'uuid';



export default function EditingForm() {
    const [searchParams, _] = useSearchParams()
    const categoryId = searchParams.get('category') as string
    const [currentCategory, setCategory] = useState<Category>();

    // Reference input
    const nameRef = useRef(null);
    const imageRef = useRef(null);
    // fetch ref input using `nameRef.current.value`
    // add `ref={nameRef}` to inputs

    useEffect(() => {
        fetchOneCategory(categoryId).then(setCategory);
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
        // call API here
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
        // console.log(newCategory)
        // call API here
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
                    <button onClick={() => createCategory}>Create category</button>
                }
                <button>Cancel</button>
            </div>
        </div>
    )
}