/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from './createElement.js';
import './styles.css';
import App from './components/App.jsx';
import { initializeApp } from './utils/appUtils.js';

// 確保 DOM 載入完成後再渲染
$(document).ready(function() {
    // 渲染應用程式
    $('#root').append(<App />);
    
    // 初始化應用程式功能
    initializeApp();
});
