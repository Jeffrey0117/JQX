/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../createElement.js';

// 全域變數
let clickCount = 0;

// Demo 組件
const Demo = (props = {}) => (
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

export default Demo;
