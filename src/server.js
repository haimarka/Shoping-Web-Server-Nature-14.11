console.log("app is loading");
const express = require("express"),
app = express(),
path = require("path"),
publicPath = path.join(__dirname,"..","public"),
PORT = process.env.PORT || 8080,
exportition = require("./functionsPage");
// app.set("view engine","html")
require("dotenv").config();
app.use(express.json());
app.use(express.static(publicPath));

let freeId  = 0;
// prodacts rouths
app.get("/prodacts",(req,res)=>{
    exportition.showDocsArray(req,res)
});

app.get("/prodacts/:id",(req,res)=>{
    exportition.findDocById(req,res)
});

app.post("/prodacts",(req,res)=>{
    exportition.createProdactToArray(req,res)
});

app.delete("/prodacts/:id",(req,res)=>{
    exportition.deleteDocById(req,res)
});

app.patch("/prodacts/:id",(req,res)=>{
    exportition.updateDocById(req,res)
});


// categories rouths

app.get("/flowers",(req,res)=>{
    exportition.getflowersCtegorey(req,res)
})

app.delete("/flowers/:id",(req,res)=>{
    exportition.deleteDocById(req,res)
});

app.get("/cactus",(req,res)=>{
    exportition.getCactusCtegorey(req,res)
})

app.delete("/cactus/:id",(req,res)=>{
    exportition.deleteDocById(req,res)
});

app.get("/Trees",(req,res)=>{
    exportition.getTreesCtegorey(req,res)
})

app.delete("/Trees/:id",(req,res)=>{
    exportition.deleteDocById(req,res)
});

app.get("/Mushroom",(req,res)=>{
    exportition.getMushroomCtegorey(req,res)
})

app.delete("/Mushroom/:id",(req,res)=>{
    exportition.deleteDocById(req,res)
});


// carts rouths

app.post("/carts",(req,res)=>{
    exportition.postNewCart(req,res)
});

app.get("/carts",(req,res)=>{
    exportition.getCartDocsArray(req,res)
})

app.get("/carts/:id",(req,res)=>{
    exportition.getCartById(req,res)
});

app.patch("/carts/update/:id",(req,res)=>{
    req.body.cartId = freeId++;
    exportition.updateCartsDocById(req,res)
    console.log(req.body);
});

app.patch("/carts/delete/:id",(req,res)=>{
    exportition.deleteCartsDocById(req,res)
});


//contacts rouths
app.post("/contacts",(req,res)=>{
    exportition.createNewMessage(req,res)
})

app.get("/contacts",(req,res)=>{
    exportition.findAllMessages(req,res)
})


app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});