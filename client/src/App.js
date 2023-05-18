import './App.css';
import Header from './Header';
import Post from './Post';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import CreatePost from './CreatePost';

function App() {
  // const [posts, setPosts] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(2)
  // const [modalActive, setModalActive] = React.useState(true)
  const [posts, setPosts] = useState([]);
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    axios.get('/posts').then((resp) => {
      setPosts(resp.data);
    });
  }, [setPosts]);

  const updateData = (auth) => {
    setAuthed(auth)
  }



  return (
    <div className="wrapper">
      <Header authChange={updateData} />
      <CreatePost active={authed} />
      <div className="content">
        {posts && posts.map((post) => 
          <Post user={post.user.email} time={post.createdAt} text={post.text} key={post._id}/> 
          /* console.log(post.text, post.user.email, post.createdAt) */
        )}
      </div>

    </div>
  );
}

export default App;
