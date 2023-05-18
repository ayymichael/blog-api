import { useState } from 'react';
import axios from './axios'


function CreatePost(props) {
    const [textValue, setTextValue] = useState('')

    const sendPost = () => {
        const token = localStorage.getItem('token')
        console.log(token)
        axios.post('http://localhost:5000/posts', {
            text: textValue,
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
        }},)
            .then((resp) => {
                console.log(resp)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className="postcreator d-flex j-center f-col a-center">

            <form>
                <textarea type="text" className="postcreator" placeholder="Введите текст" defaultValue={props.textvalue || ''} onChange={(event) => setTextValue(event.target.value)}></textarea>
            </form>
            <div className='info d-flex j-between'>
                <button disabled={!props.active} onClick={sendPost}>Опубликовать</button>
            </div>

        </div>
    )
}

export default CreatePost