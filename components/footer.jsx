import { GitHub, LinkedIn, Twitter } from '../public/media/icons/svg-icons'


export default function Footer() {

    return (
        <div className="footer-wrapper">
            <div className="footer-separator"></div>
            <div className="footer-container">
                <div className="footer-header">
                    <p className="footer-header-text">See an issue with this page?
                        <span className="footer-hyperlink">
                            <a id="footer-link"
                            href="https://github.com/jakelequire/Portfolio">
                            View on GitHub
                            </a>
                        </span>
                    </p>
                    <p className="footer-header-subtext">Need to contact me? Email: 
                        <span className="footer-hyperlink">
                            <a id="footer-link" type="email"
                            href="mailto:inquire@jakelequire.dev">
                            inquire@jakelequire.dev
                            </a>
                        </span>
                    </p>
                </div>
                <div className="footer-links">
                    <a href="" className="footer-icon"> <GitHub /> </a>
                    <a href="" className="footer-icon"> <LinkedIn /> </a>
                    <a href="" className="footer-icon"> <Twitter /> </a>
                </div>
            </div>
        </div>
    )
}