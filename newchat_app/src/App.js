import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>


    return (
        <ChatEngine
            height="100vh"
            projectID="94c330ca-e7d8-4a1f-8d3d-d315dd430c66
            "
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />

    )


}

export default App;