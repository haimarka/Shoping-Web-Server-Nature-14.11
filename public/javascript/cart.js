

// var cartArray = [
//     {
//         id: 1,
//         name: "גפן הירקן - (Strongylodon macrobotrys) 🌼",
//         price: 12000,
//         Description: "הציערות באזור מוצאם, הפיליפינים",
//         Categories: "flowers",
//         imgArray: ["https://pbs.twimg.com/media/ENdACknXYAAE609.jpg",
//             "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/strongylodon-macrobotrys-rosita-so-image.jpg"
//         ],
//     },
//     {
//         id: 20,
//         name: "כיסא החותנת - (Echinocactus grusonii) 🌵",
//         price: 7000,
//         Description: " הוא נמצא בסכנת הכחדה.",
//         Categories: "cacti",
//         imgArray: ["https://i.pinimg.com/originals/30/f1/9e/30f19e60a9a693a02efd86a8105d5633.jpg",
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Echinocactus_grusonii_%28aka%29.jpg/1024px-Echinocactus_grusonii_%28aka%29.jpg"
//         ],
//     },
//     {
//         id: 56,
//         name: "הוואה ברזילאית - (Hevea brasiliens)🌴",
//         price: 205000,
//         Description: "א ברזילאית (Hevea brasiliens). מעץ הגומי מפיקים כבר שנים רבות נוזל חלבי שהוא החומר שממנו מייצרים את הגומי שאנו מכירים. תאילנד למשל, היא מהארצות הטרופיות שבהן מגדלים את עצי הגומי.",
//         Categories: "Trees",
//         imgArray: ["https://previews.123rf.com/images/somprasong0042/somprasong00421906/somprasong0042190600059/127397994-rubber-seeds-hevea-brasiliensis-isolated-on-white-background-thailand-.jpg",
//             "https://cdn.shopify.com/s/files/1/1390/2279/articles/hevea_brasiliensis.jpeg?v=1571080397"
//         ],
//     },
// ];





// for (let i = 0; i < cartArray.length; i++) {
//     diva12.innerHTML += `
//     <div class="trClass">
//     <table>
//         <tr>
//             <th></th>
//             <th>id</th>
//             <th>name</th>
//             <th>price</th>
//             </tr>
//             <th>prodact</th>
//             <td>${cartArray[i].id}</td>
//             <td>${cartArray[i].name}</td>
//             <td>${cartArray[i].price}</td>
//         </tr>
// </table>
// <button class="cartBtnAdd">Add</button>
// <button class="cartBtnDelate">Delate</button>
// </div>`
// }


// let sum = 0;
// for (let i = 0; i < cartArray.length; i++) {
//     sum += cartArray[i].price
// }
// para.innerHTML += `sum: ${sum} $`;



// var cartBtnDelate = document.getElementsByClassName("cartBtnDelate");
// var tableRowDelate = document.getElementsByClassName("trClass");

// for (let i = 0; i < cartArray.length; i++) {
//     cartBtnDelate[i].onclick = () => {
//         tableRowDelate[i].innerHTML = "";
//         cartArray.splice(i, 1);
//     }
// }


// var cartBtnAdd = document.getElementsByClassName("cartBtnAdd");
// var tableRowAdd = document.getElementsByClassName("trClass");
// var click = document.getElementById("click");

// for (let i = 0; i < cartArray.length; i++) {
//     cartBtnAdd[i].onclick = () => {
//         tableRowAdd[i].innerHTML += "<h2>cent add yet</h2>";

//     }
// }
// console.log(cartArray);
    
        let userCart;
        axios
        .get("/carts")
        .then((response)=>{
            userCart = response.data[0].cart;
            console.log(response);
            userCart.forEach((element,index) => {
                divim.innerHTML += `
                <div class="trClass">
                <table>
                    <tr>
                    <th></th>
                    <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>Categories</th>
                        <th>imgArray</th>
                    </tr>
                    <tr>
                    <td>${element.id}</td>
                        <td></td>
                        <td>${element.name}</td>
                        <td>${element.price}</td>
                        <td>${element.Categories}</td>
                        <td><img style="height: 100px; width: 100px;" src="${element.imgArray}"></td>
                     </tr>
            </table>
            <button onclick="deleteCartsDocById(${index})" class="cartBtnDelate">Delate</button>
            </div>`
                
            });
            
        })
        .catch((err)=>{
            throw err
        })
        

        function deleteCartsDocById(i){
            // console.log(userCart[i].id);
            axios
            .patch(`/carts/delete/618e65f94333f29626a9188d`,{id:userCart[i].id})
            .then((response)=>{
                console.log(response);
                
            })
            .catch((err)=>{
                throw err
            })
        }


// <button class="cartBtnAdd">Add</button>

// const deleteBtn = document.getElementsByClassName("cartBtnDelate");

// for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].onclick = () => {
//         tableRowDelate[i].innerHTML = "";
//         carts.splice(i, 1);
//     }
// }


// for (let i = 0; i < addBtn.length; i++) {
//     addBtn[i].onclick = () => {
//         tableRowAdd[i].innerHTML += 
//         `
//         <div class="trClass">
//         <table>
//             <tr>
//                 <th>name</th>
//                 <th>price</th>
//                 <th>categories</th>
//                 <th>imgArray</th>
//             </tr>
//             <tr>
//                 <td>${iterator.name}</td>
//                 <td>${iterator.price}</td>
//                 <td>${iterator.categories}</td>
//                 <td><img style="height: 100px; width: 100px;" src="${iterator.imgArray[0]}"></td>
//              </tr>
//     </table>
//     <button class="cartBtnAdd">Add</button>
//     <button class="cartBtnDelate">Delate</button>
//     </div>`
//     }
// }




