function handleClick() {
    console.log('Element Clicked');
    document.getElementById('places').style.color = 'red';
    document.getElementById('contact').style.color = 'red';
}
function delayedHandleClick() {
    setTimeout(handleClick,3000);
}
delayedHandleClick();




