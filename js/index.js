let attempts = 0;
let index = 0;

function appStart() {
    const handleKeydown = (event) =>{
        const handleEventKey = () => {
            //정답확인용 코드
        };
        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.bord-block[data-index='${attempts}${index}'`);
        if (event.key === 'Enter'){
            handleEventKey();}
            else if(index===5) return;
            else if(65 <= keyCode && keyCode <= 90) {
                thisBlock.innerText = key;
                index = index + 1;
            };
    };
    window.addEventListener("keydown",handleKeydown);
};


appStart();