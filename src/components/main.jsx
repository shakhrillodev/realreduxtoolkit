import { useSelector } from "react-redux"
import { Loader } from "../ui"
import { useEffect } from "react"
import AuthService from "../service/auth"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "../slice/authSlice"
import { getItem } from "../helpers/persistent-localstorage"
import { ArticleService } from "../service/article"
import { getArticleStart, getArticleSuccess } from "../slice/articleSlice"
import { ArticleCard } from "./"


const Main = () => {
  const {articles, isLoading} = useSelector(state => state.article)
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

  const deleteArticle = async(slug)=>{
    try {
      await ArticleService.deleteArticle(slug)
      getArticle()
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
    <div className="album py-5 ">
    <div>
      { isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        { articles.map((item, idx )=> (
          <ArticleCard deleteArticle={deleteArticle} item={item}  key={idx} />
        )) }
      </div>
    </div>
  </div>
  )
}

export default Main