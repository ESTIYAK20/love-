console.log("i love you");
alert('estiyak');
const wespp = document.querySelector('.wespp')
const qus = document.querySelector('.qus')
const yes = document.querySelector('.yes')
const no = document.querySelector('.no')

const wesppRect =wespp.getBoundingClientRect();
const noRect =no.getBoundingClientRect();

yes.addEventListener('click',()=>{
    qus.innerHTML = ' I LOVE YOU TOO :)';
});
no.addEventListener('click',()=>{
   const i = Math.floor(Math.random()*(wesppRect.width- noRect.width))
   const j = Math.floor(Math.random()*(wesppRect.height- noRect.height))
   no.style.left=i+'px';
   no.style.top=j+'px';
});