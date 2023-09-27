import { useState } from "react"
import { Input, TextArea } from "../ui"
const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')

    return (
        <div className="w-75 mx-auto">
            <h2 className="text-center">CreateArticle</h2>
            <form>
                <Input type="text" label={'Title'} state={title} setState={setTitle} />
                <TextArea label={'Description'} state={description} setState={setDescription} />
                <TextArea label={'Body'} state={body} setState={setBody} height="300px" />
                <button type="submit"  className=" w-100 btn btn-primary btn-lg mt-2">
                    Create
                </button>
            </form>
        </div>
    )
}

export default CreateArticle