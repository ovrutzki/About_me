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

let food = ['ice cream', 'steak', 'hamburger', 'krembo', 'coffee'];
function listMaker(array){
    let food = '<p>food that i love:</p><ul class="foodList">'
    for (let i = 0; i < array.length; i++) {
        food += `<li class = "food">${array[i]}</li>`;
        
    }
    food += '</ul>'
    document.getElementById("listOfFood").outerHTML = food;
}
listMaker(food);


const gallery =[
    {name: 'image1', class: "image", src: "/about_me1/assets/landscape.jpg", alt: "landscape", description:'Yosemite National Park in Mariposa County is home to majestic attractions and premier lodging. A must see for any trip to California'},
    {name: 'image2', class: "image", src: "/about_me1/assets/arbel cliff.jpg",  alt: "different landscape", description: "Mount Arbel is a mountain in The Lower Galilee near Tiberias in Israel, with high cliffs, views of Mount Hermon and the Golan Heights"},
    {name: 'image3', class: "image", src: "/about_me1/assets/sea of galilee.jpg",  alt: "and another one", description: 'The Sea of Galilee (the Kinneret) is a magnificent geographical marvel surrounded by pretty rural agricultural settlements.'}
];

function pushgallery(array){
    const idGallery = document.getElementById("idGallery");
    for (let i = 0; i < array.length; i++) {
        const divGallery = document.createElement('div');
        divGallery.className = 'photos';
        let imgGallery = document.createElement('img');
        let descri = document.createElement('p');
        imgGallery.className = 'image';
        imgGallery.src = gallery[i].src;
        descri.innerText = gallery[i].description
        // imgGallery. = gallery[i].description;  
        divGallery.appendChild(imgGallery);
        divGallery.append(descri);
        idGallery.appendChild(divGallery);
    }
}

pushgallery(gallery);







