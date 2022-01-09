import { ChatEngine } from 'react-chat-engine';

import './App.css'
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="bdf89637-86dc-4232-a46f-33b949caaf6f"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;