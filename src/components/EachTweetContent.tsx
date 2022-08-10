type Props = {
    EachTweet: any
}


export function EachTweetContent({ EachTweet }: Props) {
    return (
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
    )
}