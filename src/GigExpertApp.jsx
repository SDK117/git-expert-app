import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GigExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>GigExpertApp</div>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
