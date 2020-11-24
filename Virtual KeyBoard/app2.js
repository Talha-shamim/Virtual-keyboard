const buttons_2 = ['invisible','Q','W','E','R','T','Y','U','I','I','O','P'];
const buttons_1 = ['capslock','A','S','D','F','G','H','J','K','L'];
const buttons_3 = ['done','Z','X','C','V','B','N','M',',','.','?'];
const buttons_4 = ['1','2','3','4','5','6','7','8','9','0','backspace'];
const row_1 = document.querySelector('.rows-1');
const row_2 = document.querySelector('.rows-2');
const row_3 = document.querySelector('.rows-3');
const row_4 = document.querySelector('.rows-4');
const text = document.querySelector('.input');


// rendering btns 
window.addEventListener('DOMContentLoaded',function(){
    let row2 = buttons_2.map(function(letters){
        if(letters.localeCompare("invisible")==0){
            return `<button class="btn small" #id="invisible"></button>`;
        }
        else if(letters.localeCompare("capslock")==0){
            return `<button class="btn-outline-success btn  mr-1" data-id=${letters}>${letters}</button>`;
        }else{
            return `<button class="btn-outline-success btn mr-1" data-id=${letters}>${letters}</button>`;
        }
    });
    row2 = row2.join('');
    row_2.innerHTML = row2;
    
    let row3 = buttons_1.map(function(letters){
        if(letters.localeCompare("capslock")==0){
            return `<button class="btn-outline-success btn capslock s-long mr-1" data-id=${letters}>${letters}</button>`;
        }else{
            return `<button class="btn-outline-success btn mr-1" data-id=${letters}>${letters}</button>`;
        }
    });
    row3 = row3.join('');
    row_3.innerHTML = row3;
    
    let row4 = buttons_3.map(function(letters){
        if(letters.localeCompare("done")==0){
            return `<button class="btn-outline-success btn done l-long mr-1" data-id=${letters}>${letters}</button>`;
        }else{
            return `<button class="btn-outline-success btn mr-1" data-id=${letters}>${letters}</button>`;
        }
    });
    row4 = row4.join('');
    row_4.innerHTML = row4;
    
    let row1 = buttons_4.map(function(letters){
        if(letters.localeCompare("backspace")==0){
            return `<button class="btn-outline-success btn backspace long mr-1" data-id=${letters}>${letters}</button>`;
        }else{
            return `<button class="btn-outline-success btn mr-1" data-id=${letters}>${letters}</button>`;
        }
    });
    row1 = row1.join('');
    row_1.innerHTML = row1;


    // selecting btns after rendering 
    const allbtns = document.querySelectorAll('.btn');

    allbtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            if(e.currentTarget.dataset.id.localeCompare("done")==0){
                keyboard.classList.remove('hide');
                wrapper.classList.add('hide');
            }
            else if(e.currentTarget.dataset.id.localeCompare("capslock")==0){

            }
            else if(e.currentTarget.dataset.id.localeCompare("backspace")==0){
                text.innerHTML = text.value.slice(0,-1);
            } 
            else if(e.currentTarget.dataset.id.localeCompare("space")==0){
                text.innerHTML = text.value+ " ";
            }  
            else{
                text.innerHTML += e.currentTarget.dataset.id;
            }
        });
    });
    
});

// keyboard btn
const keyboard = document.querySelector('.keyboard-btn');
const wrapper = document.querySelector('.btn-wrapper');

keyboard.addEventListener('click',function(){
    keyboard.classList.add('hide');
    wrapper.classList.remove('hide');
});

// btns functions


