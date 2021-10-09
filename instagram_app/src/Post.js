import React, { useState,useEffect } from 'react';
import "./Post.css";
import firebase from './Firebase';
import Avatar from "@mui/material/Avatar";


function Post({ postId, user, username, caption, imageUrl }) {

    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');

    useEffect(()=>{ 
        let unsubscribe;
        if(postId){
            unsubscribe=firebase.firestore().collection("posts")
                    .doc(postId)
                    .collection("comments")
                    .orderBy('timestamp','desc')
                    .onSnapshot((snapshot)=>{
                        setComments(snapshot.docs.map((doc)=>doc.data()));
                    });
        }
        return ()=>{
            unsubscribe();
        };
    },[postId]);


    const postComment=(event)=>{
            event.preventDefault();
            firebase.firestore().collection("posts")
            .doc(postId).collection("comments")
            .add({
                text:comment,
                username:user.displayName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),

            });
            setComment('');
    }

    return (
        
        <div className="post">
        
        <div className="post_header">
        {/*Avatar is used for the Round image display on page(like instgram DP) */}
        <Avatar className="post_avatar"
        alt={username}    
        src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F225012915_290791075889299_1412597477399631020_n.jpg%3Fccb%3D11-4%26oh%3Df9fb32bbcaa8e6aed5ac12c7e5e97f4a%26oe%3D61605EB2&t=l&u=919078395871%40c.us&i=1632907226&n=ELOaNhDpw%2B%2BipK599QVo%2BYcyoBqXl42pY0NVQmsjBLQ%3D"
        />
        <h3>{username}</h3>
        {/*header*/}
        </div>
       

            <img className="post_image" src={imageUrl}
                alt=""
            />
             {/*image*/}


            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
              {/*username:caption*/}


             <div className="post_comments"> 
            {
                comments.map((comment)=>(
                   <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))
            }
            </div>


            {user && (
                <form className="post_commentbox">
                <input 
                   className="post_input"
                   type="text"
                   placeholder="Add a comment..."
                   value={comment}
                   onChange={(e)=> setComment(e.target.value)} 
                />  
                <button
                className="post_button"
                disabled={!comment}
                type="submit"
                onClick={postComment}    
                >
                  Post  
                </button>
             </form>
            )}
              
        </div>
    )
}

export default Post
