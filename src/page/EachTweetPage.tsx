import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { EachTweetContent } from "../components/EachTweetContent"
import { NewTweetRepliesForEachTweet } from "../components/NewTweetRepliesForEachTweet"
import { TweetReplies } from "../components/TweetReplies"
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

    if (EachTweet.id === undefined) return <Navigate to='/Error' />
    return (
        <div>
            <EachTweetContent EachTweet={EachTweet} />

            <NewTweetRepliesForEachTweet newreplies={newreplies} setNewReplies={setNewReplies} setAnswer={setAnswer} answer={answer} />

            <TweetReplies replies={replies} />
        </div >
    )
}
