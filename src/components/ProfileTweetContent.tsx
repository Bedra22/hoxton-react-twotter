
type Props = {
    user: any
}

export function ProfileTweetContent({ user }: Props) {
    return (
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
    )
}