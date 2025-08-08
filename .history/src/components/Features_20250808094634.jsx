/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';

// Features 組件
const Features = (props = {}) => (
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

export default Features;
