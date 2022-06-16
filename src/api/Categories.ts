import axios from 'axios'
import { Category } from '../types'

export async function fetchCategories(): Promise<Category[]> {
    return await axios
        .get('http://localhost:8080/categories')
        .then((res) => res.data)
        .catch(console.log)

}

export async function fetchOneCategory(id: string): Promise<Category> {
    return await axios
        .get('http://localhost:8080/categories/' + id)
        .then((res) => res.data)
        .catch(console.log)
}

export async function deleteCategory(category: Category) {
    await axios
        .delete('http://localhost:8080/categories/' + category.id)
        .catch(console.log)
}

export async function postCategory(category: Category) {
    await axios
        .post('http://localhost:8080/categories', category, {
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(console.log)
}


export async function putCategory(category: Category) {
    await axios
        .put('http://localhost:8080/categories', category, {
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(console.log)
}