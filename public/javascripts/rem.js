 (function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
// [ע]:chrome�²�֧��10px����ǰ�ߵ�100����1rem = 100px;��ߵ�750������Ƹ�Ŀ��
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };

  if (!doc.addEventListener) return;recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);