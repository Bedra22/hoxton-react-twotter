import { useEffect, useState } from "react"
import { ProfilePart } from "../components/ProfilePart"
import { ProfileTweetContent } from "../components/ProfileTweetContent"

export function ProfilePage() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(resp => resp.json())
            .then(userFromServer => setUser(userFromServer))
    }, [])
    return (
        <div>

            <ProfilePart />

            <ProfileTweetContent user={user} />
        </div>
    )
}