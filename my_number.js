var board = document.querySelector('#slot');
var form = document.createElement('form');
var button = document.createElement('button');

for(let i =0;i<6;i++){
    let input = document.createElement('input');
    input.style.width = "30px";
    input.style.height = "20px";
    input.style.marginRight = "1em";
    input.type = "number";
    input.id = "my_number_"+i;
    form.append(input);
}

button.textContent = "CHECK";

form.append(button);
board.append(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let my_board = document.createElement('h4');
    let arr = [];
    for(let i = 0 ;i<6;i++){
        let n = document.querySelector("#my_number_"+i);
        console.log(n);
        if(n.value<=0 || n.value>45){
            alert('wrong number');
            window.location.reload();
            return;
        }
        arr.push(n.value);
    }
    my_board.textContent = "my number are "+arr.join('  ');
    board.appendChild(my_board);
    
    let script = document.createElement('script');
    script.src = "not_perfect_simple_lottery.js";
    document.body.append(script);
});

