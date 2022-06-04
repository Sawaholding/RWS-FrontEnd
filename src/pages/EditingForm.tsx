import { useEffect, useRef, useState } from 'react';
import { CategoryNavBar, TopBanner, CategoryCard, EditCategoryForm } from '../components'
import { Category } from '../types';
import { Link, useSearchParams } from 'react-router-dom'
import { fetchCategories, fetchOneCategory, postCategory } from '../api'
import { v4 as uuid } from 'uuid';



export default function EditingForm() {
    const [searchParams, _] = useSearchParams()
    const categoryId = searchParams.get('category') as string
    const [category, setCategory] = useState<Category>();

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
    async function deleteCategory() {
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
    return (
        <div>
            <p>Name</p>
            <input ref={nameRef} type="text" id="name" value={category?.name} />
            <p>Image URL</p>
            <input type="text" ref={imageRef} id="name" value={category?.image} />

            <div>
                <br />

                {categoryId ?
                    <>
                        <button>Edit category</button>
                        <button>Delete category</button>
                    </>
                    :
                    <button onClick={() => createCategory}>Create category</button>
                }
                <button>Cancel</button>
            </div>
        </div>
    )
}