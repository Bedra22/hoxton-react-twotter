import { useEffect, useState } from "react"

export function ProfilePage() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(resp => resp.json())
            .then(userFromServer => setUser(userFromServer))
    }, [])
    return (
        <div>
            <div className="profile-part">
                <div className="main-pic">
                    <img src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
                <div className="profile-more">
                    <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <button>Edit Profile</button>
                </div>
                <div className="username">
                    <h3>Bed</h3>
                    <p>@BedraKraja</p>
                </div>
                <div className="likes-tweets-replies">
                    <a>Tweets</a>
                    <a>Tweets & Replies</a>
                    <a>Media</a>
                    <a>Likes</a>
                </div>

            </div>
            <div className="tweets-content">
                <ul>
                    {user.map(content => (
                        <li>
                            <div className="user-profile">
                                <img src={content.userimage} />
                                <h3>@{content.username}</h3>
                            </div>
                            <div className="tweet-holder">
                                <img src={content.tweetImage} />
                                <p>{content.content}</p>
                            </div>
                            <div className="interation-section">
                                <a>{content.retweets}</a>
                                <a>{content.QouteTwweets}</a>
                                <a>{content.likes}</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}