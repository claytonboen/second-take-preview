(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const v=$('.reel'),pb=$('.pause');
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
if(reduce.matches){v.removeAttribute('autoplay');v.pause()}
const setP=p=>{pb.setAttribute('aria-pressed',p);pb.setAttribute('aria-label',p?'Play the reel':'Pause the reel')};
if(reduce.matches)setP(true);
pb.addEventListener('click',()=>{if(v.paused){v.play();setP(false)}else{v.pause();setP(true)}});
// mobile/desktop source swap if viewport crosses the breakpoint
const mq=matchMedia('(max-width: 700px)');
mq.addEventListener('change',()=>{const t=v.currentTime;v.load();v.currentTime=t;if(!reduce.matches)v.play().catch(()=>{})});

const d=$('#book'),f=$('#bookform'),minor=$('.minor',f),adult=$('.adult',f),err=$('.err',f),done=$('.done',d);
const sync=()=>{const l=f.lesson.value,m=l!=='adults';minor.hidden=!m;adult.hidden=m;
 $$('input',minor).forEach(i=>i.disabled=!m)};
$$('input[name=lesson]',f).forEach(i=>i.addEventListener('change',sync));
const open=l=>{if(l){f.lesson.value=l}f.hidden=false;done.hidden=true;err.hidden=true;sync();d.showModal();
 const c=$('.clap i');c.style.animation='none';c.offsetWidth;c.style.animation=''};
$$('[data-book]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();open(a.dataset.book)}));
if(location.hash==='#book')open();
d.addEventListener('click',e=>{if(e.target===d)d.close()});
f.addEventListener('submit',e=>{e.preventDefault();
 const bad=$$('input',f).filter(i=>!i.disabled&&!i.checkValidity());
 const age=f.aage&&!f.aage.disabled?+f.aage.value:null;
 if(bad.length){err.textContent='Please complete the highlighted items.';err.hidden=false;bad.forEach(i=>i.setAttribute('aria-invalid','true'));bad[0].focus();return}
 if(age!==null&&(age<1||age>17)){err.textContent='For actors 18 and over, choose the Adults lesson.';err.hidden=false;f.aage.focus();return}
 // PLACEHOLDER: hand off to Square Appointments here (no account connected).
 f.hidden=true;done.hidden=false});
$$('input',f).forEach(i=>i.addEventListener('input',()=>i.removeAttribute('aria-invalid')));

const t=$('#take');
if(t){const s=()=>t.classList.toggle('minor',t.tage.value==='minor');$$('input[name=tage]',t).forEach(i=>i.addEventListener('change',s));s()}
$('#yr').textContent=new Date().getFullYear();
})();
