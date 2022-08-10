import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TweerRepliesLikes } from "../components/TweetRepliesLikes"

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
    const [replies, setreplies] = useState([])
    const [newreplies, setNewReplies] = useState([])
    const [answer, setAnswer] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/tweets/${params.id}`)
            .then(resp => resp.json())
            .then(EachTweetFromserver => setEachTweet(EachTweetFromserver))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/replies`)
            .then(resp => resp.json())
            .then(RepliesFromServer => setreplies(RepliesFromServer))
    }, [])


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


            <div className="post-new-tweet">
                <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <form className="post-new-tweet-form"
                    onSubmit={event => {
                        event.preventDefault()

                        let newreply = {
                            newreplies
                        }

                        setNewReplies('')
                        console.log(event.target.text.value)

                        setAnswer([...answer, newreply])
                    }}>
                    <input
                        type="text"
                        name='text'
                        placeholder="Tweet your reply"
                        onChange={event => {
                            setNewReplies(event.target.value)
                        }}
                        value={newreplies}
                        autoComplete='off'
                    />
                    <button>
                        Reply
                    </button>
                </form>
            </div>

            <div className="my-new-tweet">
                <ul>
                    {answer.map(reply => (
                        <li>
                            <div className="my-new-tweet-post-part">
                                <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                <p>{reply.newreplies}</p>
                            </div>
                            <TweerRepliesLikes />
                        </li>
                    ))}
                </ul>

            </div>





            <div className="tweet-replies">
                <ul>
                    {replies.map(replay => (
                        <li>
                            <div className="profili-i-perdoruesit">
                                <img src={replay.profilePic} />
                                <h3>@{replay.username}</h3>
                            </div>
                            <div className="replies-content">
                                <p>{replay.content}</p>
                            </div>
                            <TweerRepliesLikes />
                        </li>
                    ))}
                </ul>


            </div>
        </div >
    )
}
