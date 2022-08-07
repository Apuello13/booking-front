import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Houses from "./pages/Houses/Houses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="houses" element={<Houses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
