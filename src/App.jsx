import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/cart" Component={Cart}></Route>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
