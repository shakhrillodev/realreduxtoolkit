import {Routes, Route } from "react-router-dom"
import { ArticleDetail, Login, Main, Navbar, Register, CreateArticle } from "./components"
import { useEffect } from "react"
import AuthService from "./service/auth"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/authSlice"
import { getItem } from "./helpers/persistent-localstorage"
import { ArticleService } from "./service/article"
import { getArticleStart, getArticleSuccess } from "./slice/articleSlice"


const App = () => {
  const dispatch = useDispatch()
  const getUser = async()=>{
    try {
      const data = await AuthService.getUserData()
      dispatch(signUserSuccess(data.data.user))
    } catch (error) {
      console.log(error);
    }
  }

  const getArticle = async()=>{
    dispatch(getArticleStart())
    try {
      const { articles } = await ArticleService.getArticle()
      dispatch(getArticleSuccess(articles))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const token = getItem('token')    
    if(token){
      getUser()
    }
    getArticle()
  }, [])

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