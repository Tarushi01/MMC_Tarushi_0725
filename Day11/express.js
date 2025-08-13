const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(bodyParser.json());

// MongoDB connection URI
const uri = "mongodb://localhost:27017"; // Change to your MongoDB URL
const client = new MongoClient(uri);

// Database and collection
let db, usersCollection;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('shoppingDB');
        usersCollection = db.collection('productList');
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ DB connection failed", error);
    }
}
connectDB();

// CREATE - Add new user
app.post('/productList', async (req, res) => {
    try {
        const result = await usersCollection.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - Get all users
app.get('/productList', async (req, res) => {
    try {
        const users = await usersCollection.find().toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// READ - Get all users by Id
app.get('/productList/:_id', async (req, res) => {
    try {
        const id = parseInt(req.params._id); // Convert string to number
        const product = await usersCollection.findOne({ _id: id });

        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// UPDATE - Update user by ID
app.put('/productList/:_id', async (req, res) => {
    try {
        const id = parseInt(req.params._id);
        const result = await usersCollection.updateOne(
            { _id: id },
            { $set: req.body }
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE - Remove user by ID
app.delete('/productList/:_id', async (req, res) => {
    try {
        const result = await usersCollection.deleteOne({ _id: parseInt(req.params._id) });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});