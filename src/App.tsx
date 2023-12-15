import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderPage from "./routes/HeaderPage/Index";
import Home from "./routes/HeaderPage/Home/Index";
import About from "./routes/HeaderPage/About/Index";
import NotFound from "./routes/HeaderPage/NotFound/Index";
import Computers from "./routes/HeaderPage/Products/computers/Index";
import Books from "./routes/HeaderPage/Products/books/Index";
import Eltetronics from "./routes/HeaderPage/Products/electronics/Index";
import Products from "./routes/HeaderPage/Products/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderPage />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
            <Route path="products/" element={<Products />}>
              <Route index element={<Computers />} />
              <Route path="computers" element={<Computers />} />
              <Route path="books" element={<Books />} />
              <Route path="eletronics" element={<Eltetronics />} />
            </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
