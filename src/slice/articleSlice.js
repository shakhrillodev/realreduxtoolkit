import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
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
        }
    }
})

export const { getArticleStart, getArticleSuccess } = ArticleSlice.actions
export default ArticleSlice.reducer