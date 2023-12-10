import { useState } from "react"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
    }

    return <>
    <form onSubmit={handleSubmit} id="loginForm">
        <div>LOG IN</div>
        <div id='username'>
            <label>Username</label>
            <input 
                value={username}
                placeholder="USERNAME"
                onChange={e => setUsername(e.target.value)} 
                type="text"
            />
        </div>
        <div id='password'>
            <label>Password</label>
            <input 
                value={password}
                placeholder="PASSWORD"
                onChange={e => setPassword(e.target.value)}
                type="text"
            />
        </div>
        <button>Submit</button>
    </form>
    </>
}