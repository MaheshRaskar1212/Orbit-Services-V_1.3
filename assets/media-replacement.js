(function () {
  function ensureVideosPlay() {
    document.querySelectorAll('video.media-replacement').forEach((video) => {
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureVideosPlay);
  } else {
    ensureVideosPlay();
  }

  window.addEventListener('load', ensureVideosPlay);
  new MutationObserver(ensureVideosPlay).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
