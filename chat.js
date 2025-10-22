// CaruCore AI Chat loader (externalized)
(function () {
  // 1) Config must be on window BEFORE loading the loader script
  window.ChatConfig = {
    api_key: '82878be5-d561-48d3-9c3c-8fc967755e61',
  };

  // 2) Append the remote loader after DOM is ready
  function loadChat() {
    // Avoid double-inject
    if (document.getElementById('carucore-chat-loader')) return;

    var s = document.createElement('script');
    s.id = 'carucore-chat-loader';
    s.src = 'https://carucore-frontend-dot-carussel-dwt.ew.r.appspot.com/chat-loader.js';
    s.async = true;

    s.onload = function () {
      console.log('[CaruCore] loader loaded');
    };
    s.onerror = function () {
      console.error('[CaruCore] failed to load chat-loader.js');
    };

    document.body.appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadChat);
  } else {
    loadChat();
  }
})();
