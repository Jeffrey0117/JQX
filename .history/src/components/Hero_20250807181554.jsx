/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';

// Hero 組件
const Hero = () => (
    <section className="hero">
        <div className="hero-content container">
            <h1 className="fade-in">JQX</h1>
            <p className="hero-tagline fade-in">用 JSX 語法操作 jQuery DOM</p>
            <div className="hero-buttons fade-in">
                <a href="#demo" className="btn btn-primary">開始使用</a>
                <a href="https://github.com/Jeffrey0117/JQX" className="btn btn-outline">GitHub</a>
            </div>
            <div className="code-preview fade-in">
                <div>
                    <span className="keyword">const</span>{' '}
                    <span className="function">App</span>{' = () => (\n'}
                    {'  '}<span className="tag">{'<div'}</span>{' className='}<span className="string">{'"container"'}</span><span className="tag">{'>'}</span>{'\n'}
                    {'    '}<span className="tag">{'<h2>'}</span>{'Hello JQX!'}<span className="tag">{'</h2>'}</span>{'\n'}
                    {'    '}<span className="tag">{'<button'}</span>{' onClick={() => alert('}<span className="string">{'"點擊成功!"'}</span>{')}'}
                    <span className="tag">{'>'}</span>{'\n'}
                    {'      點擊我\n'}
                    {'    '}<span className="tag">{'</button>'}</span>{'\n'}
                    {'  '}<span className="tag">{'</div>'}</span>{'\n'}
                    {');\n\n'}
                    <span className="function">{'$('}</span><span className="string">{"'#root'"}</span>{').'}
                    <span className="function">{'append'}</span>{'('}<span className="tag">{'<App />'}</span>{');'}
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
