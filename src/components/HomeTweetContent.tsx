import { Link } from "react-router-dom";

type Props = {
    ListOfTweets: any
}

export function HomeTweetContent({ ListOfTweets }: Props) {
    return (
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
    )
}