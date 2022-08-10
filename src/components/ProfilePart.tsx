export function ProfilePart() {
    return (
        <div className="profile-part">
            <div className="main-pic">
                <img src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            </div>
            <div className="profile-more">
                <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <button>Edit Profile</button>
            </div>
            <div className="username">
                <h3>Bed</h3>
                <p>@BedraKraja</p>
            </div>
            <div className="likes-tweets-replies">
                <a>Tweets</a>
                <a>Tweets & Replies</a>
                <a>Media</a>
                <a>Likes</a>
            </div>

        </div>
    )
}