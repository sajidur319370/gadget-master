import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/Pages/AddItem/AddItem";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home/Home";
import Inventory from "./Components/Pages/Inventory/Inventory";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import ManageInventory from "./Components/Pages/ManageInventory/ManageInventory";
import MyItems from "./Components/Pages/MyItems/MyItems";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Header from "./Components/Pages/Shared/Header/Header";
import Loading from "./Components/Pages/Shared/Loading/Loading";
import NotFound from "./Components/Pages/Shared/NotFound/NotFound";
import UserItems from "./Components/Pages/UserItems/UserItems";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route
          path="/cart/:id"
          element={
            <RequireAuth>
              <UserItems></UserItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myitem" element={<MyItems></MyItems>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
