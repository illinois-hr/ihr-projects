(() => {
  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Snow BG */
  const bg = document.getElementById('bg-snow');
  const bctx = bg.getContext('2d');
  let flakes = [];

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
    if(prefersReducedMotion){
      return; // draw once, no animation
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
    requestAnimationFrame(loopBg);
  }

  /* Scale the whole scene to fit viewport */
  const sceneShell = document.getElementById('sceneShell');
  const envelopeScene = document.getElementById('envelopeScene');
  const LOGICAL_W = 860;
  const LOGICAL_H = 560; // a bit taller to allow card rise

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
  requestAnimationFrame(loopBg);

  /* Elements */
  const env = document.getElementById('envelope');
  const lid = document.getElementById('lid');
  const note = document.getElementById('miniNote');
  const cardScene = document.getElementById('cardScene');
  const coverR = document.getElementById('coverR');
  const inside = document.getElementById('inside');
  const greet = document.getElementById('greetTitle');

  /* Helper: activation by click or Enter/Space */
  function isActivationEvent(e){
    if(e.type === 'click') return true;
    if(e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault(); // Prevent Space from scrolling
      return true;
    }
    return false;
  }

  // single-click / single-activation flow
  let started = false;

  function riseFromBehind(){
    if(prefersReducedMotion){
      // Skip animation, just show card in front
      cardScene.classList.add('on-top');
      cardScene.style.opacity = '1';
      cardScene.style.transform = 'translateY(0)';
      env.style.animationPlayState='running';
      env.setAttribute('aria-expanded','true');
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

    const delay = prefersReducedMotion ? 0 : 620; // match lid animation
    setTimeout(() => {
      riseFromBehind();
    }, delay);
  }

  env.addEventListener('click', handleEnvelopeActivate);
  env.addEventListener('keydown', handleEnvelopeActivate);

  function toggleCard(e){
    if(!isActivationEvent(e)) return;
    if(!cardScene.classList.contains('on-top')) return;
    const isOpen = cardScene.classList.toggle('open');
    coverR.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  coverR.addEventListener('click', toggleCard);
  coverR.addEventListener('keydown', toggleCard);

  // Inside panel with full keyboard support
  function toggleCardFromInside(e){
    if(!isActivationEvent(e)) return;
    if(!cardScene.classList.contains('on-top')) return;
    const isOpen = cardScene.classList.toggle('open');
    coverR.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  
  inside.addEventListener('click', toggleCardFromInside);
  inside.addEventListener('keydown', toggleCardFromInside);
})();
