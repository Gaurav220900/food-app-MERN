import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
