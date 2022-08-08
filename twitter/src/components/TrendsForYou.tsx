import { useState } from "react"

export function TrendsForyou() {

    const [trends, setTrends] = useState([
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        },
        {
            topic: 'Politics - Trendsing',
            hashtag: 'China',
            tweet: '389K tweets'
        }
    ])
    return (
        <div className="rightside">
            <div className="search-sidebar">
                <input type="text" placeholder=" 🔍    Search twitter" />
            </div>
            <div className="trends-for-you">
                <h2>Trends for you</h2>
                <ul className="">
                    {trends.map(item => (
                        <div className="trends-section">
                            <li>
                                <p>{item.topic}</p>
                                <h4>{item.hashtag}</h4>
                                <p>{item.tweet}</p>
                            </li>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828805.png" />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}