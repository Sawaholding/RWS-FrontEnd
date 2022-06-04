import axios from 'axios'
import { Category } from '../types'

export async function fetchCategories(): Promise<Category[]> {
    // return await axios
    //     .get('https://menuapi.tycho.dev/Category')
    //     .then((res) => res.data)
    //     .catch(console.log)

    return await axios
        .get('http://localhost:8080/categories')
        .then((res) => res.data)
        .catch(console.log)


    // export async function fetchCategories(): Promise<Category[]> {
    //     return await axios
    //         .get('https://menuapi.tycho.dev/Category')
    //         .then((res) => res.data)
    //         .catch(console.log)

}


export async function fetchOneCategory(id: string): Promise<Category> {
    return await axios
        .get('http://localhost:8080/categories/' + id)
        .then((res) => res.data)
        .catch(console.log)
}


export async function postCategory(category: Category) {
    await axios
        .post('http://localhost:8080/categories', category, {
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(console.log)
}

export async function deleteCategory(category: Category) {
    await axios.delete('http://localhost:8080/Category', { data: category }).catch(console.log)
}

export async function putCategory(category: Category) {
    await axios
        .put('https://menuapi.tycho.dev/Category', category, {
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(console.log)
}