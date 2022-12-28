import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const LoginForm = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': '9a3e9b95-fb35-45b9-9053-5ab8956772b8',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('chatengineusername', username);
            localStorage.setItem('chatenginepassword', password);

            window.location.reload();

        } catch (error) {
            seterror('Oops, incorrect Details')
        }
    }

    return (
        <>
            <div className='wrapper'>

                <div className="form">
                    <h1 className="title">Kaam ki Baat</h1>
                    <h1 className="title" style={{ fontSize: 'large' }}>Chat Application</h1>


                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className='input' placeholder='Username' required />
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className='input' placeholder='Password' required />
                        <div align='center'>
                            <button type='submit' className='button'>
                                <span>Start Chatting</span>
                            </button>
                        </div>
                        <h2 className='error'>{error}</h2>
                    </form>
                </div>

            </div>
            <div className='madewithlove' >
                <p >Made With <span>❤</span> By <span><a href="https://www.linkedin.com/in/digitaldk/"
                    target={'_blank'} rel="noreferrer" >Dheeraj Bhandadri</a></span></p>
            </div>
        </>
    )
}

export default LoginForm