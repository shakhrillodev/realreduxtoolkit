import { useSelector } from "react-redux"
import { Loader } from "../ui"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import AuthService from "../service/auth"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "../slice/authSlice"
import { getItem } from "../helpers/persistent-localstorage"
import { ArticleService } from "../service/article"
import { getArticleStart, getArticleSuccess } from "../slice/articleSlice"


const Main = () => {
  const {articles, isLoading} = useSelector(state => state.article)
  const {user, loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()
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
          <div className="col " key={idx}>
            <div className="card shadow-sm h-100">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
              <div className="card-body">
                <p className="card-text fw-bold ">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
              <div className=" card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onClick={ ()=> navigate(`/articles/${item.slug}`)} className="btn btn-sm btn-outline-success">View</button>
                  { loggedIn && user.username === item.author.username &&  
                    <>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{deleteArticle(item.slug)}}>Delete</button>
                    </>
                  }
                </div>
                <small className="text-body-secondary">{item.author.username}</small>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  </div>
  )
}

export default Main