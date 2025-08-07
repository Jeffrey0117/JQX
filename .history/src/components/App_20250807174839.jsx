/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import Demo from './Demo.jsx';
import Footer from './Footer.jsx';

// 主應用程式組件
const App = () => (
    <div>
        <Header />
        <Hero />
        <Features />
        <Demo />
        <Footer />
    </div>
);

export default App;
