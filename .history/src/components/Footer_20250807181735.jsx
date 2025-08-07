/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';

// Footer 組件
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>
                Made with ❤️ | {' '}
                <a href="https://github.com/Jeffrey0117/JQX">View on GitHub</a>
            </p>
        </div>
    </footer>
);

export default Footer;
