(function() {
  var countikWidget = document.createElement('script');
  countikWidget.src = 'https://countik.com/widget.js';
  countikWidget.async = true;
  countikWidget.onload = function() {
    if (typeof window.initializeCountikWidget === 'function') {
      window.initializeCountikWidget({
        container: '#countik-widget',
        themeColor: '#444444',
        uniqueId: 'simplygav',  // no dot prefix
        language: 'en'
      });
    }
  };
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(countikWidget, firstScript);
})();
