(() => {
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =============================
   *  Snow background
   * ============================= */
  const bg = document.getElementById('bg-snow');
  const bctx = bg.getContext('2d');
  let flakes = [];
  let snowPaused = false;
  let animationId = null;

  const pauseBtn = document.getElementById('pauseSnow');
  const pauseIcon = document.getElementById('pauseIcon');
  const pauseText = document.getElementById('pauseText');

  function resizeBg() {
    bg.width = window.innerWidth;
    bg.height = window.innerHeight;

    const n = prefersReducedMotion
      ? 0
      : Math.max(200, Math.round((bg.width * bg.height) / 10000));

    flakes = Array.from({ length: n }, () => ({
      x: Math.random() * bg.width,
      y: Math.random() * bg.height,
      r: Math.random() * 2.2 + 1.2,
      s: Math.random() * 0.8 + 0.3,
      o: Math.random() * 0.5 + 0.35
    }));
  }

  function loopBg() {
    if (prefersReducedMotion || snowPaused) return;

    bctx.clearRect(0, 0, bg.width, bg.height);
    bctx.fillStyle = '#fff';

    for (const f of flakes) {
      bctx.globalAlpha = f.o;
      bctx.beginPath();
      bctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      bctx.fill();

      f.y += f.s + 0.28;
      f.x += Math.sin(f.y * 0.015) * 0.5;

      if (f.y > bg.height + 10) {
        f.y = -12;
        f.x = Math.random() * bg.width;
      }
    }

    bctx.globalAlpha = 1;
    animationId = requestAnimationFrame(loopBg);
  }

  pauseBtn.addEventListener('click', () => {
    snowPaused = !snowPaused;

    if (snowPaused) {
      pauseIcon.textContent = '▶';
      pauseText.textContent = 'Play Snow';
      pauseBtn.setAttribute('aria-label', 'Play falling snow animation');
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    } else {
      pauseIcon.textContent = '⏸';
      pauseText.textContent = 'Pause Snow';
      pauseBtn.setAttribute('aria-label', 'Pause falling snow animation');
      if (!prefersReducedMotion) {
        loopBg();
      }
    }
  });

  /* =============================
   *  Scene scaling
   * ============================= */
  const sceneShell = document.getElementById('sceneShell');
  const envelopeScene = document.getElementById('envelopeScene');
  const LOGICAL_W = 860;
  const LOGICAL_H = 560;

  function resizeScene() {
    const vw = window.innerWidth;
    const shellPadding = 32;
    const available = vw - shellPadding * 2;
    const scale = Math.min(1, available / LOGICAL_W);

    envelopeScene.style.transform = `translateX(-50%) scale(${scale})`;

    const extraRise = 220;
    sceneShell.style.height = (LOGICAL_H + extraRise) * scale + 'px';
  }

  window.addEventListener('resize', () => {
    resizeBg();
    resizeScene();
  });

  resizeBg();
  resizeScene();

  if (!prefersReducedMotion && !snowPaused) {
    loopBg();
  }

  /* =============================
   *  Elements
   * ============================= */
  const env = document.getElementById('envelope');
  const lid = document.getElementById('lid');
  const note = document.getElementById('miniNote');
  const cardScene = document.getElementById('cardScene');
  const coverR = document.getElementById('coverR');
  const inside = document.getElementById('inside');
  const greet = document.getElementById('greetTitle');
  const srCardContent = document.getElementById('srCardContent');
  const cardTitle = document.getElementById('cardTitle');
  const cardMessage = document.getElementById('cardMessage');

  /* =============================
   *  Helpers
   * ============================= */
  function isActivationEvent(e) {
    if (!e) return true;
    if (e.type === 'click') return true;
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      return true;
    }
    return false;
  }

  function announceToScreenReader(message) {
    srCardContent.textContent = '';
    setTimeout(() => {
      srCardContent.textContent = message;
    }, 100);
  }

  let started = false;
  let cardIsOpen = false;

  /* =============================
   *  Card open / close
   * ============================= */
  function openCard() {
    if (cardIsOpen) return;

    // Make sure the card is interactable
    cardScene.classList.add('on-top');
    cardIsOpen = true;
    cardScene.classList.add('open');
    coverR.setAttribute('aria-expanded', 'true');
    coverR.setAttribute('aria-label', 'Card is open. Press Enter to close card.');

    setTimeout(() => {
      const fullMessage = `${cardTitle.textContent} ${cardMessage.textContent} Signed by Illinois Human Resources.`;
      announceToScreenReader(fullMessage);
      inside.focus();
    }, 500);
  }

  function closeCard() {
    if (!cardIsOpen) return;

    cardIsOpen = false;
    cardScene.classList.remove('open');
    coverR.setAttribute('aria-expanded', 'false');
    coverR.setAttribute(
      'aria-label',
      'Card is closed. Press Enter to open and read the message inside.'
    );
    announceToScreenReader('Card closed.');
  }

  // Keep toggle for keyboard users if they want to close/reopen
  function toggleCard(e) {
    if (!isActivationEvent(e)) return;
    if (!cardScene.classList.contains('on-top')) return;

    if (cardIsOpen) {
      closeCard();
    } else {
      openCard();
    }
  }

  coverR.addEventListener('click', toggleCard);
  coverR.addEventListener('keydown', toggleCard);

  /* =============================
   *  Card rise and timed auto-open
   * ============================= */

  function showCardFrontAnimatedWithTimeouts() {
    // Reset state
    cardScene.classList.remove('on-top', 'settle-front', 'open');
    cardScene.classList.add('rise-behind');
    greet.classList.add('greet-in');
    env.style.animationPlayState = 'paused';

    // Timing that matches your CSS:
    // rise-behind: 700ms
    // settle-front: 600ms
    const riseDuration = 700;
    const settleDuration = 600;
    const frontHold = 2000; // show front for 3 seconds

    // After rise-behind finishes
    setTimeout(() => {
      cardScene.classList.add('on-top');

      // Trigger settle-front
      cardScene.classList.add('settle-front');

      // After settle-front finishes
      setTimeout(() => {
        env.style.animationPlayState = 'running';
        env.setAttribute('aria-expanded', 'true');

        coverR.setAttribute(
          'aria-label',
          'Holiday card is now visible. The inside message will open shortly.'
        );
        coverR.focus();

        // Wait 3 seconds with front visible, then open inside
        setTimeout(() => {
          openCard();
        }, frontHold);
      }, settleDuration);
    }, riseDuration);
  }

  function showCardFrontReducedWithTimeout() {
    // Reduced motion: no fancy rise, just place card and then auto open
    cardScene.classList.add('on-top');
    cardScene.style.opacity = '1';
    cardScene.style.transform = 'translateY(0)';
    env.style.animationPlayState = 'running';
    env.setAttribute('aria-expanded', 'true');

    coverR.setAttribute(
      'aria-label',
      'Holiday card is now visible. The inside message will open shortly.'
    );
    coverR.focus();

    // Still honor the 3 second hold before opening
    setTimeout(() => {
      openCard();
    }, 2000);
  }

  /* =============================
   *  Envelope activation
   * ============================= */
  function handleEnvelopeActivate(e) {
    if (!isActivationEvent(e)) return;
    if (started) return;
    started = true;

    lid.classList.add('lid-open');
    note.textContent = 'Opening card…';

    const delay = prefersReducedMotion ? 0 : 620;

    setTimeout(() => {
      if (prefersReducedMotion) {
        showCardFrontReducedWithTimeout();
      } else {
        showCardFrontAnimatedWithTimeouts();
      }
    }, delay);
  }

  env.addEventListener('click', handleEnvelopeActivate);
  env.addEventListener('keydown', handleEnvelopeActivate);

  inside.addEventListener('click', () => {});
})();
