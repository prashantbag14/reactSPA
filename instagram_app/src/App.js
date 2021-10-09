import './App.css';
import React,{useState,useEffect} from 'react'
import firebase from './Firebase';
import Post from './Post';
// import makeStyles  from "@mui/styled-engine";
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { Input } from '@mui/material';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';

// function getModalStyle(){
//   const top= 0;
//   const left= 60;

//   return{
//     top:`${top}%`,
//     left:`${left}%`,
//     transform:`translate(${top}%,${left}%)`,
//   };
// }


// const useStyles= makeStyles((theme)=>({
//   paper:{
//     position: 'absolute',
//     width:400,
//     backgroundColor: theme.palette.background.paper,
//     border: ' 2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding:theme.spacing(2,4,3),
    
//   },
// }));



function App() {
const ref=firebase.firestore().collection("posts");
console.log(ref);

// const classes=useStyles();
// const [modalStyle]=React.useState(getModalStyle);


const [data,setdata]=useState([]);
const [loader,setloader]=useState(true);
const [open,setOpen]=useState(false);
const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [user,setUser]=useState(null);
const [openSignIn,setOpenSignIn]=useState(false);

useEffect(()=>{
   const unsubscribe =firebase.auth().onAuthStateChanged((authuser)=>{
      if(authuser){
        //user has logged in
        console.log(authuser);
          setUser(authuser);
         
      }
      else{
        //user has logged out
        setUser(null);
      }
    })
    return()=>{
      //perform some cleanup action
      unsubscribe();
    }
},[user,username])


function getData(){
    ref.orderBy('timestamp','desc').onSnapshot((querySnapshot)=>{
        // const items=[]
        
        // querySnapshot.forEach((doc)=>{
        //   items.push(doc.data())
         
        // })
        
        setdata(querySnapshot.docs.map(doc=>({
          id:doc.id,
          post:doc.data()
        })))
        setloader(false)
    })
}



useEffect(()=>{
    getData()
   
},[])


const signUp=(event)=>{
  event.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((authuser)=>{
    return authuser.user.updateProfile({
      displayName:username
    })
  })
  .catch((error)=>alert(error.message))
  setOpen(false);
}


const signIn=(event)=>{
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
    setOpenSignIn(false);
}


  return (
    <div className="App">
  
      <Modal
      open={open}
      onClose={()=>setOpen(false)}
      >
      
      <div className='modal-content'>
          <form className="app_signup">
          <center>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            className="app_headerImage"
            width="30%" height="40%"
            alt=""
          />
      </center>    
          <Input 
          placeholder="username"
          type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />    

      <Input 
        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <Input 
        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />

      <Button onClick={signUp}>Sign Up</Button>

          </form>
        
      
      </div>
      </Modal>



      <Modal
      open={openSignIn}
      onClose={()=>setOpenSignIn(false)}
      >
      
      <div className='modal-content'>
          <form className="app_signup">
          <center>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            className="app_headerImage"
            width="30%" height="40%"
            alt=""
          />
      </center>    
             

      <Input 
        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <Input 
        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />

      <Button onClick={signIn}>Sign In</Button>

          </form>
        
      
      </div>
      </Modal>


    <div className='app_header'>
     <img className="app_headerImage"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
       width="20%" height="30%"
       alt="instagram_logo"
     />

     {user ?(
      //to logout
      <Button onClick={()=>firebase.auth().signOut()}>Logout</Button>
    ):(
      //otherwise stay logged in
      <div className="app_loginContainer">
      <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>

      <Button onClick={()=>setOpen(true)}>Sign Up</Button>

      </div>
    )}
    </div>

    
    <div className="app_posts">
    <div className="app_postleft">
    {
      loader===false &&
      data.map(({id,post}) =>(
        <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
      ))
    }
    </div>
    
    <div className="app_postright">
    <InstagramEmbed 
      url='https://www.instagram.com/p/CHuc68elJMu/'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={()=>{}}
      onSuccess={()=>{}}
      onAfterRender={()=>{}}
      onFailure={()=>{}}
    />
    </div>
    </div>

    

   

   {user?.displayName ?(
    <ImageUpload newusername={user.displayName}/>
      //says that ,login to upload
  ):
(
 <h3>Sorry you need to login to upload</h3> 
)}

    
   
   </div>
  );
}

export default App;
