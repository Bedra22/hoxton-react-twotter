
import { Link } from "react-router-dom";

export function Sidemenu() {
    return (
        <div className="sidemenu">
            <ul className="sidemenu-bar">
                <li>
                    <Link to='/home'>
                        <div className="Icon">
                            <img src="https://cdn-icons.flaticon.com/png/128/3128/premium/3128310.png?token=exp=1659978462~hmac=b0efc5fd67115a39b30996047c6b8eae" />
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <Link to='/home'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" />
                            Home
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827975.png" />
                            Explore
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <a href="#">
                            <img src="https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1659981872~hmac=826b5cc772e1d4682e347fa4dc194523" />
                            Notifications
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <a href="#">
                            <img src="https://cdn-icons.flaticon.com/png/128/542/premium/542638.png?token=exp=1659981947~hmac=363caa709f3e98b9b5156b828e996793" />
                            Messages
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/128/25/25667.png" />
                            Booksmarks
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/128/507/507205.png" />
                            Lists
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sidebar-li-div">
                        <Link to='/profile'>
                            <img src="https://cdn-icons-png.flaticon.com/128/747/747376.png" />
                            Profile
                        </Link>
                    </div>
                </li>
                <li>
                    <button className="sidebar-button">
                        More
                    </button>
                </li>
            </ul>

            <Link to='/profile'>
                <div className="profile-in-side">
                    <img src="https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <h3>Yippies</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" />
                </div>
            </Link>
        </div >
    )
}