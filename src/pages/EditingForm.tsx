import { useEffect, useRef, useState } from "react";
import { Category } from "../types";
import { useSearchParams } from "react-router-dom";
import { fetchOneCategory, postCategory, deleteCategory, putCategory } from "../api";
import { v4 as uuid } from "uuid";
import "../styles/EditingForm.css";

export default function EditingForm() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [searchParams, _] = useSearchParams();
  const categoryId = searchParams.get("category") as string;
  const addingMode = searchParams.get("addingMode") as string;
  const [currentCategory, setCategory] = useState<Category>();

  const nameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    fetchOneCategory(categoryId).then(setCategory);
    console.log(typeof categoryId);
    console.log(categoryId);
    console.log(typeof Boolean(addingMode));
  }, []);

  async function createCategory() {
    const newCategory: Category = {
      id: uuid(),
      dateTimeCreated: new Date().toString(),
      name: nameRef.current.value,
      image: imageRef.current.value,
    };
    await postCategory(newCategory);
    window.location.replace("/");
  }

  async function deleteCat() {
    await deleteCategory(currentCategory);
    window.location.replace("/");
  }

  async function updateCategory() {
    const newCategory: Category = {
      id: currentCategory.id,
      dateTimeCreated: currentCategory.dateTimeCreated,
      name: nameRef.current.value,
      image: imageRef.current.value,
    };
    await putCategory(newCategory);
    window.location.replace("/");
  }

  return (
    <div className="edit-form-container">
      <h1>Category</h1>

      <p>Name</p>
      <input type="text" ref={nameRef} id="name" defaultValue={currentCategory?.name} />
      <p>Image URL</p>
      <input type="text" ref={imageRef} id="image" defaultValue={currentCategory?.image} />

      <div className="edit-form-btns">
        {categoryId ? (
          <>
            <button onClick={updateCategory}>Edit category</button>
            <button onClick={deleteCat}>Delete category</button>
          </>
        ) : (
          <button onClick={createCategory}>Create category</button>
        )}
        <button onClick={() => window.location.replace("/")}>Cancel</button>
      </div>
    </div>
  );
}
