function handleClick(id) {
    console.log('Element Clicked');
    document.getElementById(id).style.color = 'red';
}
function delayedHandleClick(id) {
    setTimeout(handleClick(id),3000);
}
const form = document.getElementById('')
const btn = document.getElementById("dark");
      btn.addEventListener("click", changeToDark);

function changeToDark(){
    let flag = document.getElementById("dark").value;
    if(flag === 'off'){
       document.getElementById("dark").value='on';
       document.body.setAttribute("class", "dark-mode");
       document.getElementById("header").setAttribute("class", "dark-mode-header");
    } else if (flag === 'on'){
        document.getElementById("dark").value = 'off';
        document.body.setAttribute("class", "body");
        document.getElementById("header").setAttribute("class", "header");
    }
}




