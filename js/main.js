            // calculator JS function Start

(function(){
    let screen = document.querySelector('.screen');
    let clear = document.querySelector('.btn-clear');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');

                // number button JS 

    buttons.forEach(function(button) {
        button.addEventListener('click' , function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
               
            // Equal button JS 

    equal.addEventListener('click' , function(e){
        if (screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer
        }
    })

            // clear button JS 

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });


})();


