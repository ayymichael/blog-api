function Post(props) {
    return (
        <div className="posts">
          <div className='post'>
            <div className='message media'>{props.text}</div>
            <div className='info d-flex j-between'>
              <b>{props.time}</b>
              <b>{props.user}</b>
            </div>
          </div>
        </div>
    )
}

export default Post