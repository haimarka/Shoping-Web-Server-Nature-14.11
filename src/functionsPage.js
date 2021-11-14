// require("dotenv").config();
const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    ObjectId = MongoDB.ObjectId,
    MongoUrl = process.env.MONGOURL || "/mongodb://localhost:27017/",
    dbName = "e-commerce",
    collectionName = "prodacts";


function showDocsArray(req, res) {
    MongoClient.connect(MongoUrl)
        .then((db) => {
            dbo = db.db(dbName);
            dbo.collection(collectionName)
                .find({}).toArray()
                .then((array) => {
                    res.send(array).status(200);
                })
        })
        .catch((err) => {
            throw err
        })
}

function findDocById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id;
        dbo = db.db(dbName)
        dbo.collection(collectionName).findOne({ _id: ObjectId(ID) }).then((doc) => {
            if (doc) {
                res.send(doc).status(200);
            }
            else {
                res.sendStatus(404)
            }
        })
    })
        .catch((err) => {
            throw err
        })
}

function createProdactToArray(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const createDoc = req.body;
        // console.log(createDoc);
        dbo = db.db(dbName)
        dbo.collection(collectionName).insertOne(createDoc).then((doc) => {
            res.send(doc).status(201);
        })
    })
        .catch((err) => {
            throw err
        })
}

function deleteDocById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id;
        // if(ID == undefined){
        //     return res.sendStatus(404)
        // }
        dbo = db.db(dbName)
        dbo.collection(collectionName).findOneAndDelete({ _id: ObjectId(ID) }).then((docId) => {
            if (docId.value) {
                res.send(docId).status(200)
                console.log(docId);
            }
            else {
                res.sendStatus(404)
            }
        })
    })
        .catch((err) => {
            throw err
        })
}

function updateDocById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id,
            update = req.body;
        if (update.name == undefined || update.name.length == 0) {
            return res.sendStatus(400)
        }
        dbo = db.db(dbName)
        dbo.collection(collectionName).updateOne({ _id: ObjectId(ID) }, { $set: update }).then((updatedDoc) => {
            if (updatedDoc.matchedCount == 1) {
                res.send(updatedDoc).status(200)
                console.log(updatedDoc);
            }
            else {
                res.sendStatus(404)
            }
        })
    })
        .catch((err) => {
            throw err
        })
}

function getTreesCtegorey(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection(collectionName).find({ "Categories": "Trees" }).toArray().then((trees) => {
            res.send(trees).status(200);
        })
    })
        .catch((err) => {
            throw err
        })
}

function getflowersCtegorey(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection(collectionName)
            .find({ "Categories": "flowers" })
            .toArray()
            .then((flowers) => {
                res.status(200).send(flowers);
            })
    }).catch((err) => {
        throw err
    })
}

function getCactusCtegorey(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection(collectionName).find({ "Categories": "cacti" }).toArray().then((cactus) => {
            res.send(cactus).status(200);
        })
    })
        .catch((err) => {
            throw err
        })
    // console.log(MongoUrl);
}

function getMushroomCtegorey(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection(collectionName).find({ "Categories": "Mushroom" }).toArray().then((Mushrooms) => {
            res.send(Mushrooms).status(200);
        })
    })
        .catch((err) => {
            throw err
        })
}

function postNewCart(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const createCart = req.body;
        dbo = db.db(dbName)
        dbo.collection("carts").insertOne({ cart: [] }).then((newcart) => {
            res.send(newcart).status(201);
        })
    })
        .catch((err) => {
            throw err
        })
}

function getCartDocsArray(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection("carts").find({}).toArray().then((cartArray) => {
            res.send(cartArray).status(200);
        })
    })
        .catch((err) => {
            throw err
        })
}

function getCartById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id;
        dbo = db.db(dbName)
        dbo.collection("carts")
        .findOne({ _id: ObjectId(ID) })
        .then((cartId) => {
            if (cartId) {
                res.send(cartId).status(200);
            }
            else {
                res.sendStatus(404)
            }
        })
    })
        .catch((err) => {
            throw err
        })
}

function updateCartsDocById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id,
            update = req.body;
        if (update.name == undefined || update.name.length == 0) {
            return res.sendStatus(400)
        }
        dbo = db.db(dbName)
        dbo.collection("carts").updateOne({ _id: ObjectId(ID) }, { $push: { cart: update } }).then((updatedCartDoc) => {
            // if(updatedCartDoc.matchedCount == 1){
            res.send(updatedCartDoc).status(200)
            console.log(updatedCartDoc);
            // }
            // else{
            //     res.sendStatus(404)
            // }
        })
    })
        .catch((err) => {
            throw err
        })
}

function deleteCartsDocById(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const ID = req.params.id;
        dbo = db.db(dbName)
        dbo.collection("carts")
        .findOneAndUpdate({ _id: ObjectId(ID) }, { $pull: { cart: req.body } })
        .then((deletedId) => {
            res.send(deletedId).status(200)
        })
    })
        .catch((err) => {
            throw err
        })
}

function createNewMessage(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const createMessage = req.body;
        dbo = db.db(dbName)
        dbo.collection("contacts").insertOne(createMessage).then((message) => {
            res.send(message).status(201);
        })
    })
        .catch((err) => {
            throw err
        })
}

function findAllMessages(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection("contacts").find({}).toArray().then((messages) => {
            res.send(messages).status(200)
        })
    })
        .catch((err) => {
            throw err
        })
}

function createNewProdact(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        const createprodact = req.body;
        dbo = db.db(dbName)
        dbo.collection(collectionName).insertOne({ createprodact }).then((prodact) => {
            res.send(prodact).status(201);
        })
    })
        .catch((err) => {
            throw err
        })
}

function showAllNewProdacts(req, res) {
    MongoClient.connect(MongoUrl).then((db) => {
        dbo = db.db(dbName)
        dbo.collection(collectionName).find({}).toArray().then((newProdacts) => {
            res.send(newProdacts).status(200);
        })
    })
        .catch((err) => {
            throw err
        })
}


module.exports = {
    showDocsArray, findDocById, createProdactToArray, deleteDocById, updateDocById,
    getTreesCtegorey, getflowersCtegorey, getCactusCtegorey, getMushroomCtegorey,
    postNewCart, getCartById, getCartDocsArray, updateCartsDocById, deleteCartsDocById,
    createNewMessage, findAllMessages, createNewProdact, showAllNewProdacts
}