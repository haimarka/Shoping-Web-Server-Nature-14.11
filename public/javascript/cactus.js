// for (let i = 0; i < prodactsArray.length; i++) {



//     if (prodactsArray[i].Categories == "cacti") {
//         diva.innerHTML += `<div id="divs">
//         <div class="pics">
//         <img src="${prodactsArray[i].imgArray[0]}" class="a">
//     <img src="${prodactsArray[i].imgArray[1]}" class="b"><br>
//     </div>
//     <p class="Description">${prodactsArray[i].id}<br>
//     ${prodactsArray[i].name}<br>
//     ${prodactsArray[i].price}<br>
//     ${prodactsArray[i].Description}<br>
//     ${prodactsArray[i].Categories}<br>
//     <button style="background-color : greenyellow"class="btn">הוסף</button>
//     </p>
//     </div>`
//     }


// }


// var btn = document.getElementsByClassName("btn");
// var iconCounter = document.getElementById("iconCounter");

// iconCounter.innerText = cartArray.length;

// for (let i = 0; i < prodactsArray.length; i++) {
//     if (prodactsArray[i].Categories == "cacti") {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].onclick = () => {
//                 newObject = {
//                     id: prodactsArray[i].id,
//                     name: prodactsArray[i].name,
//                 }
//                 iconCounter.innerText = response.data.length;
//                 cartArray.push(newObject)

//             }
//         }


//     }
// }

// console.log(cartArray);

let cactus;
axios
.get("/cactus")
.then((response)=>{
    console.log(response);
    cactus = response.data;
    cactus.forEach((element,index) => {
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
})
.catch((err)=>{
    throw err
})

    let cartId = 0;
function addToCart(i){
    axios
    .patch(`/carts/update/618e65f94333f29626a9188d`,{cartId: cartId, id: cactus[i].id,name: cactus[i].name,
        price: cactus[i].price,imgArray: cactus[i].imgArray[0],Categories: cactus[i].Categories})
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
    .delete(`/cactus/${id}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            throw err
        })
}

// axios
// .get("/cactus")
// .then((response)=>{
//     for (const key of response.data) {
//         btn.onclick = () => {
//             newObject = {
//                 id: key.name,
//                 name: key.price,
//                 name: key.Description,
//                 name: key.Categories,

//             }
//             // iconCounter.innerText = cartArray.length;
//             console.log(newObject);
//             response.data[0].cart.push(newObject)
    
//         }    
//     }
// })
// .catch((err)=>{
//     throw err
// })


// let btn = document.getElementsByClassName("btn");
// let iconCounter = document.getElementById("iconCounter");

// for (let i = 0; i < diva.length; i++) {
//     btn[j].onclick = () => {
//         newObject = {
//             id: prodactsArray[i].id,
//             name: prodactsArray[i].name,
//         }
//         iconCounter.innerText = cartArray.length;
//         cartArray.push(newObject)

//     }    
// }


// var btn = document.getElementsByClassName("btn");
// var iconCounter = document.getElementById("iconCounter");

// iconCounter.innerText = cartArray.length;

// for (const iterator of response.data) {
//     if (response.data.Categories == "cacti") {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].onclick = () => {
//                 newObject = {
//                     id: prodactsArray[j].id,
//                     name: prodactsArray[j].name,
//                 }
//                 iconCounter.innerText = cartArray.length;
//                 cartArray.push(newObject)

//             }
//         }


//     }
// }
  



