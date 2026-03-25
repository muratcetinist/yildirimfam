try {
  (function() {
    function initCarousel(trackId, prevId, nextId) {
      var track = document.getElementById(trackId);
      var prevBtn = document.getElementById(prevId);
      var nextBtn = document.getElementById(nextId);
      if (!track || !prevBtn || !nextBtn) return;

      var wrapper = track.parentElement;
      var pos = 0;
      var dragging = false;
      var startX = 0;
      var startPos = 0;
      var moved = false;

      function getMax() {
        return Math.max(0, track.scrollWidth - wrapper.offsetWidth);
      }

      function clamp(val) {
        return Math.max(0, Math.min(val, getMax()));
      }

      function apply(animate) {
        if (animate !== false) track.classList.remove('dragging');
        track.style.transform = 'translateX(' + (-pos) + 'px)';
        prevBtn.disabled = pos <= 0;
        nextBtn.disabled = pos >= getMax();
      }

      function step() {
        return Math.min(wrapper.offsetWidth * 0.7, 500);
      }

      prevBtn.addEventListener('click', function() {
        pos = clamp(pos - step());
        apply();
      });

      nextBtn.addEventListener('click', function() {
        pos = clamp(pos + step());
        apply();
      });

      // Drag support
      function onStart(x) {
        dragging = true;
        moved = false;
        startX = x;
        startPos = pos;
        track.classList.add('dragging');
      }

      function onMove(x) {
        if (!dragging) return;
        var diff = startX - x;
        if (Math.abs(diff) > 5) moved = true;
        pos = clamp(startPos + diff);
        track.style.transform = 'translateX(' + (-pos) + 'px)';
      }

      function onEnd() {
        if (!dragging) return;
        dragging = false;
        track.classList.remove('dragging');
        apply();
      }

      // Mouse
      track.addEventListener('mousedown', function(e) {
        e.preventDefault();
        onStart(e.clientX);
      });
      window.addEventListener('mousemove', function(e) { onMove(e.clientX); });
      window.addEventListener('mouseup', onEnd);

      // Touch
      track.addEventListener('touchstart', function(e) {
        onStart(e.touches[0].clientX);
      }, { passive: true });
      track.addEventListener('touchmove', function(e) {
        onMove(e.touches[0].clientX);
      }, { passive: true });
      track.addEventListener('touchend', onEnd);

      // Prevent click on gallery items after drag
      track.addEventListener('click', function(e) {
        if (moved) {
          e.stopPropagation();
          e.preventDefault();
        }
      }, true);

      // Init
      apply();
      window.addEventListener('resize', function() {
        pos = clamp(pos);
        apply();
      });
    }

    initCarousel('timelineTrack', 'tlPrev', 'tlNext');
    initCarousel('galleryTrack', 'galPrev', 'galNext');
  })();
} catch(e) { console.warn('Carousel error:', e); }
