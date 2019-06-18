import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../compontents/PostForm';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [editingPost, setEditingPost] = useState({
      title: '',
      body: '',
      id: null
  });

  useEffect(() => {
    axios
      .get('/posts')
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const editPost = (post) => {
    setEditingPost(post);
  }

  const deletePost = (id) => {
      axios.delete(`/post/${id}`)
        .then(() => {
            const postsUpdated = posts.filter(p => p.id !== id);
            setPosts(postsUpdated);
        });
  }

  const addPost = (post) => {
      const postsUpdated = [post, ...posts];
      setPosts(postsUpdated);
  }
  
  const getNumberOfPosts = () => {
      axios.get(`/posts/${limit}`)
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
  }

  return (
    <div>
        <div className="row">
            <div className="col s6">
                <PostForm addPost={addPost} editingPost={editingPost} />
            </div>
            <div className="col s3 push-in">
                <p>Limit number of posts</p>
                <input type="number" value={limit} onChange={event => setLimit(event.target.value)} />
                <button onClick={getNumberOfPosts} className="waves-effect waves-light btn">Set</button>
            </div>
        </div>
      <div className='row'>
        {posts.map(post => (
          <div className='col s6' key={post.id}>
            <div className='card'>
              <div className='card-content'>
                <div className='card-title'>{post.title}</div>
                <p className='timestamp'>{post.createdAt}</p>
                <p>{post.body}</p>
              </div>
              <div className='card-action'>
                <a href='#' onClick={editPost.bind(null, post)}>Edit</a>
                <a href='#' className='delete-btn' onClick={deletePost.bind(null, post.id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
