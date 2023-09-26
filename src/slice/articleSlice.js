import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    articleDetail: [],
    isLoading: false
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers:{
        getArticleStart: (state)=>{
            state.isLoading = true
        },
        getArticleSuccess: (state, action)=>{
            state.articles = action.payload
            state.isLoading = false
        },
        getArticleDetailStart: (state)=>{
            state.isLoading = false
        },
        getArticleDetailSuccess: (state, action)=>{
            state.articleDetail = action.payload
            state.isLoading = false
        },
        getArticleDetailFailure: (state)=>{
            state.isLoading = false
        }
    }
})

export const { getArticleStart, getArticleSuccess, getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } = ArticleSlice.actions
export default ArticleSlice.reducer