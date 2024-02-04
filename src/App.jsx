import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default App;
