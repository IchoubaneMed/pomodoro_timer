import { BsGithub } from "react-icons/bs";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            Created by
            <span className="creator">
                <a href="https://www.linkedin.com/in/mohamed-ichoubane/" target="_blank" rel="noreferrer">
                    Mohamed Ichoubane
                </a>
            </span>
            <a href="https://github.com/IchoubaneMed/pomodoro_timer" target="_blank" rel="noreferrer">
                <span className="github"><BsGithub /></span>
            </a>
        </div>
    );
}

export default Footer;