import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Navbarx from "./components/Navbar";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Gallery from "./components/Gallery/Gallery";
import Blog from "./components/Blog/Blog";
import Team from "./components/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarx />

        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/team" component={Team} />
      </div>
    </BrowserRouter>
  );
}

export default App;
