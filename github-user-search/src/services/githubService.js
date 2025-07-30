import axios from "axios"

const token = import.meta.env.VITE_APP_GITHUB_API_KEY

const fetchUserData = async (username) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.get(`https://api.github.com/users/${username}`, config)
    return res.data
}

export {fetchUserData}