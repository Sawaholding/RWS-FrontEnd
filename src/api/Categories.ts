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