import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState([])
    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos] = useState('')
    const [page, setPage] = useState(1)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setUserData([])

        try {
            const data = await fetchUserData(inputValue, location, minRepos,page)
            setUserData(data)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        const moreUsers = await fetchUserData(inputValue, location, minRepos, nextPage);
        setUserData(prev => [...prev, ...moreUsers]);
        setPage(nextPage);
    };
    

    return ( 
        <div className="bg-blue-200 w-full h-svh flex items-center flex-col">
            <div className="min-w-[700px]">
                <h1  className="text-3xl font-bold text-gray-700 py-3">GitHub search engine</h1>
                <form onSubmit={handleSubmit} className="flex flex-row gap-2">
                    <input className="px-4 py-2 bg-white  rounded-md hover:bg-gray-300 transition duration-200 outline-none" placeholder="Enter a unsername" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <input className="px-4 py-2 bg-white  rounded-md hover:bg-gray-300 transition duration-200 outline-none" placeholder="Enter a location" type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <input className="px-4 py-2 bg-white  rounded-md hover:bg-gray-300 transition duration-200 outline-none" placeholder="Enter a number of repos" type="number" value={minRepos} onChange={(e) => setMinRepos(e.target.value)}/>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200" type="submit">Search</button>
                </form>
            </div>
            {loading && <p className="my-3 text-blue-600">Loading...</p> }
            {error && <p className="my-3 text-red-600">Looks like we cant find the user</p> }
            {userData.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 max-h-[85vh] scroll-hidden overflow-scroll">
                    {userData.map((user) => (
                    <div key={user.id} className="bg-white shadow-md rounded-lg p-4 text-center">
                        <img
                        src={user.avatar_url}
                        alt={`${user.login}'s avatar`}
                        className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h3 className="text-lg font-semibold mt-2">{user.login}</h3>
                        <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        >
                        View Profile
                        </a>

                    </div>
                    
                ))}
                </div>
            )}
            {userData.length > 20 && (
                <button onClick={handleLoadMore} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"> Load More </button>
            )}
        </div>
    );
}
 
export default Search;
