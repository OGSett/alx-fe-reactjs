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
        <div className="bg-blue-200 w-full h-svh flex justify-center items-center flex-col">
        <div>
            <h1  className="text-3xl font-bold text-gray-700 py-3">GitHub search engine</h1>
            <form onSubmit={handleSubmit}>
                <input className="px-4 py-2 bg-white  rounded-md hover:bg-gray-300 transition duration-200 outline-none" placeholder="Enter a unsername" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200" type="submit">Search</button>
            </form>
        </div>
        {loading && <p className="my-3 text-blue-600">Loading...</p> }
        {error && <p className="my-3 text-red-600">Looks like we cant find the user</p> }
        {userData && (
           <div className="my-3 max-w-sm w-full bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center space-y-3">
                <img
                    src={userData.avatar_url}
                    alt="User avatar"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                    {userData.name || "No name provided"}
                </h3>
                <p className="text-sm text-gray-600">Username: {userData.login}</p>
                <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    View Profile
                </a>
            </div>
        )}
        </div>
     );
}
 
export default Search;
