import { useState } from "react"

export function Home() {

    const [newTweets, setNewTweet] = useState([])
    return (
        <div>
            <div className="post-tweet">
                <div className="post-new-tweet">
                    <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <form className="post-new-tweet-form"
                        onSubmit={event => {
                            event.preventDefault()

                            let newtweet = {
                                tweet: event.target.text.value
                            }

                            setNewTweet([...newTweets, newtweet])
                        }}
                    >
                        <input type="text" placeholder="What's happening?" name='text' />
                        <button>
                            Tweet
                        </button>
                    </form>
                </div>
                <div className="post-new-tweet-icons">
                    <img src="https://cdn-icons-png.flaticon.com/128/2065/2065064.png" />
                    <img src="https://cdn-icons.flaticon.com/png/128/739/premium/739272.png?token=exp=1659995803~hmac=b461490a6ccbb9c49a55580406d03560" />
                    <img src="https://cdn-icons.flaticon.com/png/128/4495/premium/4495935.png?token=exp=1659995834~hmac=4b0259988f724aa67f7b5e898eee1bc7" />
                    <img src="https://cdn-icons.flaticon.com/png/128/907/premium/907717.png?token=exp=1659995863~hmac=c8f90290f6f2d5b7cc7a66102c3ee40b" />
                    <img src="https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1659995901~hmac=ec17cac118ffadf7c8a90a4ff5486e65" />
                    <img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" />
                </div>
            </div>
            <div>
                <div className="my-new-tweet">
                    <ul>
                        {newTweets.map(tweets => (
                            <li>
                                <div className="my-new-tweet-post-part">
                                    <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                    <p>{tweets.tweet}</p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/463/463292.png" />
                                </div>
                                <div className="my-new-tweet-like">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2462/2462719.png" />
                                    <img src="https://cdn-icons.flaticon.com/png/128/2734/premium/2734827.png?token=exp=1659998863~hmac=2efca6a9bb15a2bdfc24cc0ce3d5d6a9" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828959.png" />
                                    <img src="https://cdn-icons.flaticon.com/png/128/2567/premium/2567943.png?token=exp=1659998946~hmac=6ce9b386f96663f8ec8b8651a872f663" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}