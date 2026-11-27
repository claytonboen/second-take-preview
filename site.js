(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const v=$('.reel'),pb=$('.pause');
if(v&&pb){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  if(reduce.matches){v.removeAttribute('autoplay');v.pause()}
  const setP=p=>{pb.setAttribute('aria-pressed',p);pb.setAttribute('aria-label',p?'Play the reel':'Pause the reel')};
  if(reduce.matches)setP(true);
  pb.addEventListener('click',()=>{if(v.paused){v.play();setP(false)}else{v.pause();setP(true)}});
  const mq=matchMedia('(max-width: 700px)');
  mq.addEventListener('change',()=>{const t=v.currentTime;v.load();v.currentTime=t;if(!reduce.matches)v.play().catch(()=>{})});
}

const d=$('#book');
if(d){
  const minor=$('.minor',d);
  const sync=()=>{
    const l=(d.querySelector('input[name=lesson]:checked')||{}).value;
    if(minor) minor.hidden=l==='adults';
  };
  $$('input[name=lesson]',d).forEach(i=>i.addEventListener('change',sync));
  const open=l=>{
    if(l){const r=d.querySelector('input[name=lesson][value="'+l+'"]'); if(r) r.checked=true}
    sync();
    d.showModal();
    const c=$('.clap i',d);
    if(c){c.style.animation='none';c.offsetWidth;c.style.animation=''}
  };
  $$('[data-book]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    open(a.dataset.book);
  }));
  if(location.hash==='#book')open();
  d.addEventListener('click',e=>{if(e.target===d)d.close()});
}

const yr=$('#yr'); if(yr) yr.textContent=new Date().getFullYear();
})();
