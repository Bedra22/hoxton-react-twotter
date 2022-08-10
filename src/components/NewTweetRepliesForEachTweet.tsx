import { TweerRepliesLikes } from "./TweetRepliesLikes"

type Props = {
    newreplies: any,
    setNewReplies: any,
    setAnswer: any,
    answer: any
}

export function NewTweetRepliesForEachTweet({ newreplies, setNewReplies, setAnswer, answer }: Props) {
    return (
        <div>
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
        </div>
    )
}