(() => {
  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Snow BG */
  const bg = document.getElementById('bg-snow');
  const bctx = bg.getContext('2d');
  let flakes = [];
  let snowPaused = false;
  let animationId = null;

  // Pause/Play button functionality
  const pauseBtn = document.getElementById('pauseSnow');
  const pauseIcon = document.getElementById('pauseIcon');
  const pauseText = document.getElementById('pauseText');

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

  function resizeBg(){
    bg.width = innerWidth;
    bg.height = innerHeight;
    const n = prefersReducedMotion ? 0 : Math.max(200, Math.round(bg.width * bg.height / 10000));
    flakes = Array.from({length:n}, () => ({
      x: Math.random()*bg.width,
      y: Math.random()*bg.height,
      r: Math.random()*2.2+1.2,
      s: Math.random()*.8+.3,
      o: Math.random()*.5+.35
    }));
  }

  function loopBg(){
    bctx.clearRect(0,0,bg.width,bg.height);
    if(prefersReducedMotion || snowPaused){
      return;
    }
    bctx.fillStyle='#fff';
    for(const f of flakes){
      bctx.globalAlpha=f.o;
      bctx.beginPath();
      bctx.arc(f.x,f.y,f.r,0,Math.PI*2);
      bctx.fill();
      f.y+=f.s+.28;
      f.x+=Math.sin(f.y*0.015)*0.5;
      if(f.y>bg.height+10){
        f.y=-12;
        f.x=Math.random()*bg.width;
      }
    }
    bctx.globalAlpha=1;
    animationId = requestAnimationFrame(loopBg);
  }

  /* Scale the whole scene to fit viewport */
  const sceneShell = document.getElementById('sceneShell');
  const envelopeScene = document.getElementById('envelopeScene');
  const LOGICAL_W = 860;
  const LOGICAL_H = 560;

  function resizeScene(){
    const vw = window.innerWidth;
    const shellPadding = 32;
    const available = vw - shellPadding*2;
    const scale = Math.min(1, available / LOGICAL_W);

    envelopeScene.style.transform =
      `translateX(-50%) scale(${scale})`;

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

  /* Elements */
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

  /* Helper: activation by click or Enter/Space */
  function isActivationEvent(e){
    if(e.type === 'click') return true;
    if(e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
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

  // Track card state
  let cardIsOpen = false;

  // single-click / single-activation flow
  let started = false;

  function riseFromBehind(){
    if(prefersReducedMotion){
      cardScene.classList.add('on-top');
      cardScene.style.opacity = '1';
      cardScene.style.transform = 'translateY(0)';
      env.style.animationPlayState='running';
      env.setAttribute('aria-expanded','true');
      
      coverR.setAttribute('aria-label', 'Holiday card is now visible. Press Enter to open and read the message inside.');
      coverR.focus();
      return;
    }

    cardScene.classList.remove('on-top','settle-front');
    cardScene.classList.add('rise-behind');
    greet.classList.add('greet-in');
    env.style.animationPlayState='paused';

    cardScene.addEventListener('animationend', function phaseAEnd(e){
      if(e.animationName!=='riseBehind') return;
      cardScene.removeEventListener('animationend', phaseAEnd);

      cardScene.classList.add('on-top');

      void cardScene.offsetWidth;
      cardScene.classList.add('settle-front');

      cardScene.addEventListener('animationend', function phaseBEnd(ev){
        if(ev.animationName!=='settleFront') return;
        cardScene.removeEventListener('animationend', phaseBEnd);
        env.style.animationPlayState='running';
        env.setAttribute('aria-expanded','true');
        
        coverR.setAttribute('aria-label', 'Holiday card is now visible. Press Enter to open and read the message inside.');
        coverR.focus();
      }, { once:true });
    }, { once:true });
  }

  function handleEnvelopeActivate(e){
    if(!isActivationEvent(e)) return;
    if(started) return;
    started = true;

    lid.classList.add('lid-open');
    note.textContent='Opening card…';

    const delay = prefersReducedMotion ? 0 : 620;
    setTimeout(() => {
      riseFromBehind();
    }, delay);
  }

  env.addEventListener('click', handleEnvelopeActivate);
  env.addEventListener('keydown', handleEnvelopeActivate);

  function toggleCard(e){
    if(!isActivationEvent(e)) return;
    if(!cardScene.classList.contains('on-top')) return;
    
    const wasOpen = cardIsOpen;
    cardIsOpen = !cardIsOpen;
    
    const isOpen = cardScene.classList.toggle('open');
    coverR.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    
    if (isOpen) {
      coverR.setAttribute('aria-label', 'Card is open. Press Enter to close card.');
      setTimeout(() => {
        const fullMessage = `${cardTitle.textContent} ${cardMessage.textContent} Signed by Illinois Human Resources.`;
        announceToScreenReader(fullMessage);
        inside.focus();
      }, 500);
      
    } else {
      coverR.setAttribute('aria-label', 'Card is closed. Press Enter to open and read the message inside.');
      announceToScreenReader('Card closed.');
    }
  }

  coverR.addEventListener('click', toggleCard);
  coverR.addEventListener('keydown', toggleCard);

  inside.addEventListener('click', (e) => {
  });
})();