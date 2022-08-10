import { useEffect, useState } from "react"
import { HomeTweetContent } from "../components/HomeTweetContent"
import { NewTweet } from "../components/NewTweet"

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
            <NewTweet newTweets={newTweets} setNewTweet={setNewTweet} setTwetPublikuar={setTwetPublikuar} tweetpublikuar={tweetpublikuar} />

            <HomeTweetContent ListOfTweets={ListOfTweets} />

        </div >
    )
}


