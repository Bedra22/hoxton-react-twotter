import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TweetIcon } from "../components/TweetIcon"
import { TweerRepliesLikes } from "../components/TweetRepliesLikes"

export function Home() {

    const [ListOfTweets, setListOfTweets] = useState([])
    const [newTweets, setNewTweet] = useState([])
    const [tweetpublikuar, setTwetPublikuar] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
            .then(resp => resp.json())
            .then(TweetsFromserver => setListOfTweets(TweetsFromserver))
    }, [])

    return (
        <div>
            <div className="my-tweets">
                <div className="post-tweet">
                    <div className="post-new-tweet">
                        <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <form className="post-new-tweet-form"
                            onSubmit={event => {
                                event.preventDefault()

                                let newtweet = {
                                    newTweets
                                }
                                setNewTweet('')
                                setTwetPublikuar([...tweetpublikuar, newtweet])
                            }}
                        >
                            <input
                                type="text"
                                placeholder="What's happening?"
                                name='text'
                                onChange={event => {
                                    setNewTweet(event.target.value)
                                }}
                                value={newTweets}
                                autoComplete='off'
                            />
                            <button>
                                Tweet
                            </button>
                        </form>
                    </div>
                    <TweetIcon />
                </div>
                <div className="my-new-tweet">
                    <ul>
                        {tweetpublikuar.map(tweets => (
                            <li>
                                <div>
                                    <div className="my-new-tweet-post-part">
                                        <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        <p>{tweets.newTweets}</p>
                                        <img src="https://cdn-icons-png.flaticon.com/512/463/463292.png" />
                                    </div>
                                    <TweerRepliesLikes />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="tweets-content">
                <ul>
                    {ListOfTweets.map(tweets => (
                        <li>
                            <Link to={`/home/${tweets.id}`} style={{ textDecoration: 'none' }}>
                                <div className="user-profile">
                                    <img src={tweets.profileImage} />
                                    <h3>@{tweets.username}</h3>
                                </div>
                                <div className="tweet-holder">
                                    <p>{tweets.content}</p>
                                    <img src={tweets.tweetImage} />
                                </div>
                                <div className="interation-section">
                                    <a> {tweets.retweets} Retweets</a>
                                    <a> {tweets.QouteTwweets} Tweets</a>
                                    <a> {tweets.likes} Likes</a>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div >
    )
}


