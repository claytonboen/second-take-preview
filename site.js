(()=>{
const $=(s,r=document)=>r.querySelector(s);
const v=$('.reel'),pb=$('.pause');
if(v&&pb){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const setP=p=>{pb.setAttribute('aria-pressed',p);pb.setAttribute('aria-label',p?'Play the reel':'Pause the reel')};
  if(reduce.matches){v.removeAttribute('autoplay');v.pause();setP(true)}
  pb.addEventListener('click',()=>{if(v.paused){v.play();setP(false)}else{v.pause();setP(true)}});
  const mq=matchMedia('(max-width: 700px)');
  mq.addEventListener('change',()=>{const t=v.currentTime;v.load();v.currentTime=t;if(!reduce.matches)v.play().catch(()=>{})});
}

const bar=$('.bar'),btn=$('.menu'),nav=$('#nav');
if(btn&&nav){
  const set=o=>{bar.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)};
  btn.addEventListener('click',()=>set(btn.getAttribute('aria-expanded')!=='true'));
  nav.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){set(false);btn.focus()}});
  document.addEventListener('click',e=>{if(!bar.contains(e.target))set(false)});
  matchMedia('(min-width: 1101px)').addEventListener('change',e=>{if(e.matches)set(false)});
}

const yr=$('#yr'); if(yr) yr.textContent=new Date().getFullYear();
})();
