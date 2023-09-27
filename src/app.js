import {Routes, Route } from "react-router-dom"
import { ArticleDetail, Login, Main, Navbar, Register, CreateArticle } from "./components"

const App = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>  
    </div>
    </div>
  )
}

export default App