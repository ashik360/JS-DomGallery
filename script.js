// Looping Elements By Using JS DOM
//List
const ul = document.getElementById('ul')

for (let i = 1; i < 11; i++) 
{
    const li = document.createElement('li');
    li.innerHTML= "Hello World "+ (i);
    ul.appendChild(li);
}


//Flower Gallary
const Gal = document.getElementById('Gallery');

for (let i = 1; i < 11; i++) {
    const img = document.createElement('img');
    img.innerHTML= img.setAttribute('src',"images/img" + (i) + ".jpg");
    Gal.appendChild(img);
}


//
const head = document.getElementById('G-head');
const ht = document.createElement('h1');
ht.innerHTML = "Gallery Section";
head.appendChild(ht);