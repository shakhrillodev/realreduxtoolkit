import { useParams } from "react-router-dom"
import { ArticleService } from "../service/article"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/articleSlice"
import moment from "moment/moment"
import { Loader } from "../ui"

const ArticleDetail = () => {
    const {slug} = useParams()
    const dispatch = useDispatch()
    const {articleDetail, isLoading} = useSelector(state => state.article)
    const getArticle = async()=>{
        try {
            const {article} = await ArticleService.getArticleDetail(slug)
            dispatch(getArticleDetailSuccess(article))
        } catch (error) {
            dispatch(getArticleDetailFailure())
        }
    }

    useEffect(()=>{
        dispatch(getArticleDetailStart())
        getArticle()
    }, [slug])

    return isLoading ? <Loader /> : <div>
        { articleDetail !== null ? <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-7 fw-bold">{articleDetail.title}</h1>
                <p className="col-md-8 fs-4">{articleDetail.description}</p>
                <p><span className="fw-bold text-opacity-60" >Created at </span> {moment(articleDetail.createdAt).format('DD MMM, YYYY')}</p>
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">{articleDetail.author?.username && articleDetail.author?.username}</strong>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <p>{articleDetail.body}</p>
            </div>
        </div> : null }
    </div>
}

export default ArticleDetail