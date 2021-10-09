import { Button } from '@mui/material'
import React,{useState} from 'react'
import firebase from './Firebase'
import './imageUpload.css';

function ImageUpload(newusername) {
    const [image,setImage]=useState(null)
    const [progress,setProgress]=useState(0)
    const [caption,setCaption]=useState('')


    const handleChange=(e)=>{
        if(e.target.files[0]){ //get the 1st file that is selected
            setImage(e.target.files[0]);
        }
    }


    const handleUpload=()=>{
        const uploadTask=firebase.storage().ref(`images/${image.name}`).put(image);
      

        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                // progress function
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error)=>{
                //error function...
                console.log(error);
                alert(error.message);
            },
            ()=>{
                //complete function
                firebase.storage().ref("images")
                .child(image.name)
                .getDownloadURL() 
                .then(url=>{
                    //post image inside DB
                    firebase.firestore().collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        imageUrl:url,
                        username:newusername.newusername
                    });
                    setProgress(0);
                    setCaption("")
                    setImage(null);
                });
                //go to the img name child and get the download URL 
            }
        );
    };

    return (
        <div className="imageupload">
        <progress className="imageUpload_progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption..." onChange={event=>setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
            Upload
            </Button>
        </div>
    )
}

export default ImageUpload


