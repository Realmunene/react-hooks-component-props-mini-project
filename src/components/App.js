import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image={blogData.image}
      blogalt="blog logo"
      about={blogData.about}
      />
      <ArticleList/>
    </div>
  );
}

export default App;
