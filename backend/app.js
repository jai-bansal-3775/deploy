const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// const app = express();
app.use(express.static('frontend'));


mongoose.connect('mongodb://127.0.0.1:27017/propertydb', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

app.use('/auth', authRoutes);
app.use('/api', itemRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
