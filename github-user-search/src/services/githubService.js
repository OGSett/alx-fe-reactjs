import axios from "axios"

const token = import.meta.env.VITE_APP_GITHUB_API_KEY

const fetchUserData = async (username, location, minRepos, page = 1, perPage = 30) => {
    const queryPart = []
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    if (username) queryPart.push(`${username} in:login`)
    if (location) queryPart.push(`location:${location}`)
    if (minRepos) queryPart.push(`repos:>${minRepos}`)

    const query = queryPart.join('+')

    const res = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=${perPage}&page=${page}`, config)
    return res.data.items
}

export {fetchUserData}