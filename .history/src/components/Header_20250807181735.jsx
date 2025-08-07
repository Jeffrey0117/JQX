/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';

// Header 組件
const Header = () => (
    <header className="header">
        <nav className="nav container">
            <a href="#" className="logo">JQX</a>
            <ul className="nav-links">
                <li><a href="#guide">指南</a></li>
                <li><a href="#demo">示例</a></li>
                <li><a href="https://github.com/Jeffrey0117/JQX">GitHub</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
