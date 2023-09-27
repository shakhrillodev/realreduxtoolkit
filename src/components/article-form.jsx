import { useSelector } from "react-redux"
import { Input, TextArea } from "../ui"

const ArticleForm = ({title, setTitle, body, setBody, description, setDescription, onSubmitArticle}) => {
  const {isLoading} = useSelector( state => state.article )
  return (
    <form onSubmit={onSubmitArticle}>
        <Input type="text" label={'Title'} state={title} setState={setTitle} />
        <TextArea label={'Description'} state={description} setState={setDescription} />
        <TextArea label={'Body'} state={body} setState={setBody} height="300px" />
        <button type="submit" disabled={isLoading} className=" w-100 btn btn-primary btn-lg mt-2">
            {isLoading ? 'Loading...' : 'Create'}
        </button>
    </form>
  )
}

export default ArticleForm