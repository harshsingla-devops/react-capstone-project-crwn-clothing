import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../routes/categories-previews/categories-preview.component";
import "./shop.styles.scss";
import Category from "../routes/category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
