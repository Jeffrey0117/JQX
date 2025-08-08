import $ from 'jquery';

export function jCreateElement(tag, props = {}, ...children) {
  console.log('JQX createElement v1.2 - Updated!', { tag: typeof tag === 'function' ? tag.name : tag, props, children });
  
  // 處理函數組件
  if (typeof tag === 'function') {
    try {
      // 完全確保 props 不會是 null，即使在函數參數中也是如此
      const safeProps = props === null || props === undefined ? {} : { ...props };
      const safeChildren = children && children.length > 0 ? children : [];
      
      console.log('Calling component:', tag.name, 'with props:', safeProps, 'children:', safeChildren);
      
      // 重新調用函數，確保不傳遞任何 null 值
      const result = tag.call(null, { ...safeProps, children: safeChildren.length > 0 ? safeChildren : undefined });
      return result;
    } catch (error) {
      console.error('Error rendering component:', tag.name, error);
      return $('<div>').text('Component Error: ' + error.message);
    }
  }

  // 創建 DOM 元素
  const $el = $(`<${tag}>`);

  // 處理 props
  for (const [key, value] of Object.entries(props || {})) {
    if (key === 'children') {
      // 跳過 children，後面統一處理
      continue;
    } else if (key === 'style') {
      // 處理樣式
      if (typeof value === 'object') {
        $el.css(value);
      } else {
        $el.attr('style', value);
      }
    } else if (key === 'className') {
      // 處理 className
      $el.addClass(value);
    } else if (key.startsWith('on')) {
      // 處理事件
      const eventName = key.slice(2).toLowerCase();
      $el.on(eventName, value);
    } else if (key === 'dangerouslySetInnerHTML') {
      // 處理 innerHTML（類似 React）
      $el.html(value.__html);
    } else {
      // 處理其他屬性
      if (value === true) {
        $el.attr(key, key); // 布林屬性
      } else if (value !== false && value != null) {
        $el.attr(key, value);
      }
    }
  }

  // 處理子元素
  const allChildren = [...children, ...(props.children ? [].concat(props.children) : [])];
  
  allChildren.flat().forEach((child) => {
    if (child == null || child === false) {
      // 跳過 null, undefined, false
      return;
    } else if (typeof child === 'string' || typeof child === 'number') {
      // 文字節點
      $el.append(document.createTextNode(String(child)));
    } else if (child && child.jquery) {
      // jQuery 對象
      $el.append(child);
    } else if (child && typeof child === 'object' && child.nodeType) {
      // DOM 節點
      $el.append(child);
    } else if (Array.isArray(child)) {
      // 數組展開
      child.forEach(c => $el.append(c));
    }
  });

  return $el;
}