import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setUserData(null)

        try {
            const data = await fetchUserData(inputValue)
            setUserData(data)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    

    return ( 
        <>
        <div>
            <h2>Username</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
        {loading && <p>loeading...</p> }
        {error && <p>Looks like we cant find the user</p> }
        {userData && (
            <div>
                <img src={userData.avatar_url} alt="User avatar" width="100" />
                <h3>{userData.name || "No name provided"}</h3>
                <a href={userData.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </div>
        )}
        </>
     );
}
 
export default Search;
