import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './post.css'
import { addPost,deletePost,editPost } from './redux/postsSlice'

const Posts = () => {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    const [updatedTitle,setUpdateTitle]=useState("")
    const [updatedDescription,setUpdatedDescription]=useState("")

    const [edit,setEdit]=useState(false)
    const [id,setId]=useState(null)


    const dispatch=useDispatch()
    
    const posts=useSelector((state)=>state.posts.posts)
  return (
    <div className="container">
        <input type="text" placeholder="enter post title" onChange={(e)=>setTitle(e.target.value)} value={title} />        
        <input type="text" placeholder="enter post description" onChange={(e)=>setDescription(e.target.value)} value={description} />
        <button 
        disabled={title==="" ||description==="" }

        onClick={()=>{
            dispatch(addPost( {id:posts.length+1,title,description}))
            setTitle("")
            setDescription("")

        }} > Add Post</button>

        <div className="post">
            {posts.length>0 ?posts.map(post=>
            <div key={post.id}>
            <p> {post.title} </p>
            <p> {post.description} </p>
            <button onClick={()=>{setEdit(true)
                setId(post.id)
            }}> edit Post</button>
            <button onClick={()=>{
                dispatch(deletePost(post.id))
            }}> delete Post</button>
            <br />
            {edit&&id===post.id&&
                (<>
                <input type="text" placeholder="enter post title" onChange={(e)=>setUpdateTitle(e.target.value)} />        
                <input type="text" placeholder="enter post description" onChange={(e)=>setUpdatedDescription(e.target.value)}/>
                <button onClick={()=>{
                    dispatch(editPost({id:post.id,title:updatedTitle,description:updatedDescription}))
                    setEdit(false)
                }}> update Post</button>

                </>)}
            
            
            </div>)
        :<div> There is no Posts</div>    
        }
        </div>
        
    </div>
  )
}

export default Posts