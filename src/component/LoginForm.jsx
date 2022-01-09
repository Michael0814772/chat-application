import React, { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': "bdf89637-86dc-4232-a46f-33b949caaf6f", 'User-Name': username, 'User-Secret': password };

        try {
            //username / password => chatengine -> give messages
            axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

            //works out -> logged in
        } catch (error) {
            //error -> try with new username ...
            setError('Oops, incorrect credentails.');          
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{ error }</h2>
                </form>
            </div>            
        </div>
    )
}

export default LoginForm
