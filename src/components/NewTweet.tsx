import { useState } from "react"
import { TweetIcon } from "./TweetIcon"
import { TweerRepliesLikes } from "./TweetRepliesLikes"

type Props = {
    newTweets: any,
    setNewTweet: any,
    setTwetPublikuar: any,
    tweetpublikuar: any
}

export function NewTweet({ newTweets, setNewTweet, setTwetPublikuar, tweetpublikuar }: Props) {
    return (
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
    )
}