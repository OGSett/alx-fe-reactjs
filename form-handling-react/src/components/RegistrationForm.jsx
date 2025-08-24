import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    
    const submit = (e) => {
        e.preventDefault()
        setLoading(true)    
        if(!userName || !email || !password) {
            setLoading(false)
            setError('Error accured during registration')
        } else {
            setLoading(false)
            setError('')
            console.log('this is the registration :', email, password, userName)
        }
    }

    return ( 
        <>
        <form onSubmit={submit}>
            <label htmlFor="username">Username :</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password :</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" disabled={loading}>{ loading ? 'Loading...' : 'Register' }</button>
            {error && <div style={{color:'red'}}>{error}</div> }
        </form>
        </>
     );
}
 
export default RegistrationForm;


