import { TweerRepliesLikes } from "./TweetRepliesLikes";

type Props = {
    replies: any
}

export function TweetReplies({ replies }: Props) {
    return (
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
    )
}