import axios from "./api"

export const ArticleService = {
    getArticle: async()=>{
        const {data} = await axios.get('/articles')
        return data
    },
    getArticleDetail: async (slug)=>{
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    }
}