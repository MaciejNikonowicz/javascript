import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const PostForm = ({ addPost, editingPost }) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({ title: '', body: ''});

    useEffect(() => {
        setPost(editingPost)
    })

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        if(post.id){
            axios.put(`/post/${post.id}`, post)
            .then(res => {
                addPost(res.data);
                setPost({ title: '', body: ''});
                setLoading(false);
            })
            .catch(err => console.log(err));
        } else {
            axios.post('/post', post)
            .then(res => {
                addPost(res.data);
                setPost({ title: '', body: ''});
                setLoading(false);
            })
            .catch(err => console.log(err));
        }
    }


    return (
        <Fragment>
            {!loading ? (
                <form className="push-in" onSubmit={onSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={post.title} onChange={onChange} className="validate" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="body">Body</label>
                        <input type="text" name="body" value={post.body} onChange={onChange} className="validate" />
                    </div>
                    <button type="submit" className="waves-effect waves-light btn">{post.id ? 'Update' : 'Add'}</button>
                </form>
            ) : (
                <div className="progress">
                    <div className="indeterminate">
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default PostForm;
