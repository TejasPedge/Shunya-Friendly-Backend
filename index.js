const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const {connect} = require('./config/database'); 
const {UserRouter} = require('./Routes/User.routes');

app.use(cors());
app.use('/users', UserRouter);

app.listen(PORT, async () => {
    try {
        //Makes Connection to the Database
        await connect; 
        console.log('\n------------------------------------------------------------------------\n');
        console.log('   🍾 🥳 Connected To The Server and The Database Successfully 🍾 🥳');
        console.log('\n------------------------------------------------------------------------\n');
    } catch (error) {
        console.log('\n***********************************************************************************\n');
        console.log('❌ ⚠️  UNABLE TO CONNECT TO THE DATABASE OR THE SERVER DUE TO FOLLOWING ERROR ❌ ⚠️');
        console.log('\n***********************************************************************************\n');
        console.error(error);
    }
});