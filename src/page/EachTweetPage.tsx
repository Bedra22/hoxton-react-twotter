import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

type TweetsInTwotter = {
    id: number,
    profileImage: string,
    username: string,
    tweetImage: string
    content: string,
    retweets: number,
    QouteTwweets: number,
    likes: number
}

export function EachTweetPage() {

    const [EachTweet, setEachTweet] = useState<null | TweetsInTwotter>(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/tweets/${params.id}`)
            .then(resp => resp.json())
            .then(EachTweetFromserver => setEachTweet(EachTweetFromserver))
    }, [])
    console.log('params:', params)

    if (EachTweet === null) return (
        <div>Loading...</div>
    )
    return (
        <div>
            <div className="each-tweets-content">
                <div className="user-profile">
                    <img src={EachTweet.profileImage} />
                    <h3>{EachTweet.username}</h3>
                </div>
                <div className="each-tweet-holder">
                    <img src={EachTweet.tweetImage} />
                    <p>{EachTweet.content}</p>
                </div>
                <div className="each-interation-section">
                    <a>{EachTweet.retweets}</a>
                    <a>{EachTweet.QouteTwweets}</a>
                    <a>{EachTweet.likes}</a>
                </div>
            </div>
            <div className="tweet-replies">
                <div className="profili-i-perdoruesit">
                    <img src="https://images.pexels.com/photos/13095218/pexels-photo-13095218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <h3>CoffeLover</h3>
                </div>
                <div className="replies-content">
                    <p>OH MY GOD YOU ARE KIDDING 🤯🤯🤯</p>
                </div>
                <div className="tweet-replies-new-tweet-like">
                    <img src="https://cdn-icons-png.flaticon.com/128/2462/2462719.png" />
                    <img src="https://cdn-icons.flaticon.com/png/128/2734/premium/2734827.png?token=exp=1659998863~hmac=2efca6a9bb15a2bdfc24cc0ce3d5d6a9" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828959.png" />
                    <img src="https://cdn-icons.flaticon.com/png/128/2567/premium/2567943.png?token=exp=1659998946~hmac=6ce9b386f96663f8ec8b8651a872f663" />
                </div>
            </div>
        </div>
    )
}

// <Link to={`/home/${komente.id}`}></Link>

