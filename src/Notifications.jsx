import './Notifications.css'
import { getLatestNotification } from './utils';
import xMark from "./xmark-solid.svg";

export default function Notifications () {
    function handleClick() {
        console.log("Close button has been clicked");
    }
    return (
    <div className="Notifications">
        <button
        aria-label="Close"
        onClick={handleClick}
        style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            background: "none",
            border: "none",
            padding: "0",
        }}>
            <img src={xMark} alt="close" width="20" height="20" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification()}}
            ></li>
        </ul>
    </div>
    );
}