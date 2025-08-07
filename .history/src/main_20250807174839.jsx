/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from './createElement.js';
import './styles.css';
import App from './components/App.jsx';
import { initializeApp } from './utils/appUtils.js';

// 渲染應用程式
$('#root').append(<App />);

// 初始化應用程式功能
initializeApp();
