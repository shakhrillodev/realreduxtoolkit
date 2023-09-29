import { useNavigate, useParams } from "react-router-dom"
import ArticleForm from "./article-form"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleStart, postArticleSuccess, postArticleFailure } from "../slice/articleSlice"
import { ArticleService } from "../service/article"

const EditArticle = () => {
    const {slug} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const getArticle = async()=>{
        try {
            const {article} = await ArticleService.getArticleDetail(slug)
            setTitle(article.title)
            setBody(article.body)
            setDescription(article.description)
            dispatch(getArticleDetailSuccess(article))
        } catch (error) {
            dispatch(getArticleDetailFailure())
        }
    }
    const editedArticle = {title, description, body}

    const onSubmitArticle = (e)=>{
    e.preventDefault()
    dispatch(postArticleStart())
    const asyncFunc = async()=>{
        try {
            const {article} = await ArticleService.editArticle(slug, editedArticle )
            dispatch(postArticleSuccess(article))
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }
    asyncFunc()
    }
    

    const props = {title, setTitle, body, setBody, description, setDescription, onSubmitArticle}

    useEffect(()=>{
        dispatch(getArticleDetailStart())
        getArticle()
    }, [slug])
    
    return (
        <div className="w-75 mx-auto">
            <h2 className="text-center">CreateArticle</h2>
            <ArticleForm {...props} />
        </div>
    )
}

export default EditArticle