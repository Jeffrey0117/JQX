/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from './createElement.js';
import './styles.css';

// 全域變數
let clickCount = 0;

// Header 組件
const Header = () => (
    <header className="header">
        <nav className="nav container">
            <a href="#" className="logo">JQX</a>
            <ul className="nav-links">
                <li><a href="#guide">指南</a></li>
                <li><a href="#demo">示例</a></li>
                <li><a href="https://github.com">GitHub</a></li>
            </ul>
        </nav>
    </header>
);

// Hero 組件
const Hero = () => (
    <section className="hero">
        <div className="hero-content container">
            <h1 className="fade-in">JQX</h1>
            <p className="hero-tagline fade-in">用 JSX 語法操作 jQuery DOM</p>
            <div className="hero-buttons fade-in">
                <a href="#demo" className="btn btn-primary">開始使用</a>
                <a href="https://github.com" className="btn btn-outline">GitHub</a>
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

// Features 組件
const Features = () => (
    <section id="guide" className="features">
        <div className="container">
            <div className="section-header fade-in">
                <h2 className="section-title">為什麼選擇 JQX？</h2>
                <p className="section-desc">結合現代前端開發體驗與 jQuery 的強大生態系統</p>
            </div>
            <div className="features-grid">
                <div className="feature fade-in">
                    <div className="feature-icon">⚡</div>
                    <h3>直觀語法</h3>
                    <p>使用熟悉的 JSX 語法創建組件，讓 DOM 操作變得直觀且易於維護。</p>
                </div>
                <div className="feature fade-in">
                    <div className="feature-icon">🔧</div>
                    <h3>完美整合</h3>
                    <p>無縫整合 jQuery 生態系統，可以使用所有現有的 jQuery 插件和方法。</p>
                </div>
                <div className="feature fade-in">
                    <div className="feature-icon">📦</div>
                    <h3>輕量高效</h3>
                    <p>核心代碼精簡，學習成本低，專注於提供最佳的開發體驗。</p>
                </div>
            </div>
        </div>
    </section>
);

// Demo 組件
const Demo = () => (
    <section id="demo" className="demo">
        <div className="container">
            <div className="demo-container">
                <div className="section-header fade-in">
                    <h2 className="section-title">實時演示</h2>
                    <p className="section-desc">體驗 JQX 的強大功能</p>
                </div>
                <div className="demo-playground">
                    <div className="demo-controls">
                        <button 
                            className="btn btn-primary"
                            onClick={() => {
                                clickCount++;
                                $('#demo-output').addClass('active')
                                    .text(`太棒了！你點擊了 ${clickCount} 次`);
                            }}
                        >
                            點擊計數
                        </button>
                        <button 
                            className="btn btn-outline"
                            onClick={() => {
                                $('#demo-output').addClass('active')
                                    .text('Hello from JQX! 🎉')
                                    .fadeOut(200).fadeIn(200);
                            }}
                        >
                            顯示消息
                        </button>
                        <button 
                            className="btn btn-outline"
                            onClick={() => {
                                $('#demo-output').removeClass('active')
                                    .text('點擊上面的按鈕開始體驗...');
                                clickCount = 0;
                            }}
                        >
                            重置
                        </button>
                    </div>
                    <div id="demo-output" className="demo-output">
                        點擊上面的按鈕開始體驗...
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Footer 組件
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>
                Made with ❤️ | {' '}
                <a href="https://github.com">View on GitHub</a>
            </p>
        </div>
    </footer>
);

// 主應用程式
const App = () => (
    <div>
        <Header />
        <Hero />
        <Features />
        <Demo />
        <Footer />
    </div>
);

// 渲染應用程式
$('#root').append(<App />);

// 平滑滾動功能
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 60
        }, 500);
    }
});

// 滾動動畫處理
function handleScroll() {
    $('.fade-in').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < (viewportBottom - 100)) {
            $(this).addClass('visible');
        }
    });
}

// 頭部滾動效果
function handleHeader() {
    if ($(window).scrollTop() > 20) {
        $('.header').css('background', 'rgba(255, 255, 255, 0.95)');
    } else {
        $('.header').css('background', 'rgba(255, 255, 255, 0.9)');
    }
}

// 滾動事件監聽
$(window).on('scroll', function() {
    handleScroll();
    handleHeader();
});

// 初始化動畫
handleScroll();
