import { useParams } from "react-router-dom"
import { ArticleService } from "../service/article"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/articleSlice"

const ArticleDetail = () => {
    const {slug} = useParams()
    const dispatch = useDispatch()
    const getArticle = async()=>{
        dispatch(getArticleDetailStart())
        try {
            const {article} = await ArticleService.getArticleDetail(slug)
            dispatch(getArticleDetailSuccess(article))
        } catch (error) {
            dispatch(getArticleDetailFailure())
        }
    }

    useEffect(()=>{
        getArticle()
    }, [slug])

    return (
        <div>{slug}</div>
    )
}

export default ArticleDetail