for (let i = 0; i < prodactsArray.length; i++) {

    if (prodactsArray[i].Categories == "cacti" || "flowers" || "Trees" || "Mushroom") {
        diva.innerHTML += `<div id="divs">
        <div class="pics">
        <img src="${prodactsArray[i].imgArray[0]}" class="a">
    <img src="${prodactsArray[i].imgArray[1]}" class="b">
    </div>
     </div>`
    }


}