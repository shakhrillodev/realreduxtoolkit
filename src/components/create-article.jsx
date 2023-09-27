import { useState } from "react"
import { ArticleForm } from "./"
import { ArticleService } from "../service/article"
import { useDispatch } from "react-redux"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/articleSlice"
import { useNavigate } from "react-router-dom"

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const articleData = {title, body, description}
    const navigate = useNavigate()

    const postArticle = async()=>{
        try {
            const data = await ArticleService.postArticle(articleData)
            dispatch(postArticleSuccess)
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }
    const onSubmitArticle = (e)=>{
        e.preventDefault()
        dispatch(postArticleStart())
        postArticle()
    }
    const props = {title, setTitle, body, setBody, description, setDescription, onSubmitArticle}
    
    return (
        <div className="w-75 mx-auto">
            <h2 className="text-center">CreateArticle</h2>
            <ArticleForm {...props} />
        </div>
    )
}

export default CreateArticle