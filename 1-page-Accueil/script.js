    //anime un titre avec aparition
function animateTitle(selector){
    // je selectionne mon titre
    const title = document.querySelector(selector)
    //si aucun element n'est trouver un erreur et bloque l'éxecution et l'animation ne se fait pas
    if(title === null){
    console.error("impossible de trouver l'element " + selector)
    return
    }
    //1 construire un tableau avec les nouveaux elements
    //trouver tous les enfants de title
    //array.from sert a faire le tableau
    const children = Array.from (title.childNodes)
    // nouvelle constante qui détient les elements
    let elements =[]

    //prendre en parametre chaque enfant
    children.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            // separer mot par mot
            const words = child.textContent.trim(" ").split(" ")
            //entourer mes mots de span
            let spans = words.map(wrapWord)
            
            //on va rajouter dans le tableau
            elements = elements.concat(injectElementBetweenItems(spans, document.createTextNode(" ")))
        } else {
            elements.push(child)
        }
    })
        console.log(elements)
  


    //2 se servir du tableau pour completer title
    title.innerHTML = ""
    elements.forEach(el => {
        title.appendChild(el)
    })
    Array.from(title.querySelectorAll("span span")).forEach((span, K) =>{
        span.style.animationDelay = (K * .1) + "s"
    })
}

function wrapWord (word) {
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    //ajoute span 2 a 1
    span.appendChild(span2);
    span2.innerHTML = word
    return span
}
function injectElementBetweenItems(arr, element){
    // return node
    return arr.map((item, K) => {
        if (K === arr.length - 1){
            return[item]
        }
       return [item, element.cloneNode()]
   }).reduce((acc, pair) => {
       acc = acc.concat(pair);
       return acc
   })
}
animateTitle(".title");

//1-clique icon ouvre le menu déroulant
//on selectionne les elements pour les stocker dans une variable
const icon = document.querySelector(".logo");
const list = document.querySelector(".nav-list-mob")
console.log(list);

//2- créer l'action
 icon.addEventListener("click", function(){
    //instruction
    list.classList.toggle("list-visible");
    icon.classList.toggle("icon-visible")
    console.log(icon);

})