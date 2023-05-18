
function CreatePost(props) {
    return (
        <div className="postcreator d-flex j-center f-col a-center">

            <form>
                <textarea type="text" className="postcreator" placeholder="Введите текст" defaultValue={props.textvalue || ''}></textarea>
            </form>
            <div className='info d-flex j-between'>
                <button disabled={!props.active}>Опубликовать</button>
            </div>

        </div>
    )
}

export default CreatePost