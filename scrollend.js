/*!
 * scrollend
 * Fire a callback while the scroll event is done
 * @author: xovel
 * @license: MIT
 */
;(function (root, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define('scrollend', [], factory);
  } else if (typeof exports === 'object') {
    exports['scrollend'] = factory();
  } else {
    root['scrollend'] = factory();
  }
})(this, function () {
  function scrollend(cb) {
    if (typeof cb !== 'function') {
      return;
    }
    if ('onscrollend' in window) {
      window.onscrollend = cb;
      return;
    }
    var scrollTimer = null;
    window.onscroll = e => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(cb, 200);
    }
  }
  return scrollend;
});
