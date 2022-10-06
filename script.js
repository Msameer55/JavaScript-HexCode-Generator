const container = document.querySelector('.container');
const clrbtn= document.querySelector('.clr-btn');
const clrCode = document.querySelector('.clr-code');

const chars = '0123456789abcdef';

const generateColor = () => {
    let clr = "#";

    for(let i=0; i< 6; i++){
        const randChar = chars[Math.floor(Math.random() * 16 )]  ;
         clr += randChar;

        
    }
    container.setAttribute('style', `background: ${clr}`);
    clrCode.innerHTML = clr;
   
}

window.addEventListener('DOMContentLoaded', () =>{
    generateColor();
});

clrbtn.addEventListener('click', () =>{
    generateColor();
})