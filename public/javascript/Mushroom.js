// for (let i = 0; i < prodactsArray.length; i++) {


//     if (prodactsArray[i].Categories == "Mushroom") {
//         diva.innerHTML += `<div id="divs">
//         <div class="pics">
//         <img src="${prodactsArray[i].imgArray[0]}" class="a">
//     <img src="${prodactsArray[i].imgArray[1]}" class="b"><br>
//     </div id="objectDiv">
//     <p class="Description">${prodactsArray[i].id}<br>
//     ${prodactsArray[i].name}<br>
//     ${prodactsArray[i].price}<br>
//     ${prodactsArray[i].Description}<br>
//     ${prodactsArray[i].Categories}<br>
//     <button style="background-color : greenyellow"class="btn">הוסף</button></p>
//     </div>`
//     }
// }

// var btn = document.getElementsByClassName("btn");
// var iconCounter = document.getElementById("iconCounter");

// iconCounter.innerText = cartArray.length;

// for (let i = 0; i < prodactsArray.length; i++) {
//     if (prodactsArray[i].Categories == "Mushroom") {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].onclick = () => {
//                 newObject = {
//                     id: prodactsArray[i].id,
//                     name: prodactsArray[i].name,


//                 }
//                 iconCounter.innerText = cartArray.length;
//                 cartArray.push(newObject)

//             }
//         }


//     }
// }

// console.log(cartArray);

let Mushroom;
axios
.get("/Mushroom")
.then((response)=>{
    console.log(response);
    Mushroom = response.data;
    Mushroom.forEach((element,index) => {
        console.log(element.Categories);
        diva.innerHTML += `<div id="divs">
        <div class="pics">
        <img src="${element.imgArray[0]}" class="a">
    <img src="${element.imgArray[1]}" class="b"><br>
    </div>
    <p class="Description">${element.id}<br>
    ${element.name}<br>
    ${element.price}<br>
    ${element.Description}<br>
    ${element.Categories}<br>
    <button onclick="addToCart(${index})" style="background-color : greenyellow"class="btn">הוסף</button><br><br>
    <button onclick="removeFromProdacts('${element._id}')" style="background-color : red"class="btn">הסר</button>
    </p>
    </div>` 
        
    });
        // console.log(iterator);
    
    
})
.catch((err)=>{
    throw err
})

    let cartId = 0;
function addToCart(i){
    console.log(Mushroom[i].id);
    axios
    .patch(`/carts/update/618e65f94333f29626a9188d`,{cartId: cartId, id: Mushroom[i].id,name: Mushroom[i].name,
        price: Mushroom[i].price,imgArray: Mushroom[i].imgArray[0],Categories: Mushroom[i].Categories})
    .then((response)=>{
        console.log(response);
        
    })
    .catch((err)=>{
        throw err
    })
}

function removeFromProdacts(id){
    console.log(id);

    axios
    .delete(`/Mushroom/${id}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            throw err
        })
}