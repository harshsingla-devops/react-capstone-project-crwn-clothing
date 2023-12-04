import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home.component";
import Navigation from "./components/routes/navigation.component";
const Shop = () => {
  return (
    <div>
      <h1>I am shop component.</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
