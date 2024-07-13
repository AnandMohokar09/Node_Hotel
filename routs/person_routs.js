const express = require('express');
const router = express.Router();

const Person = require('../models/person');
const { json } = require('body-parser');
const { message } = require('prompt');

//Post rout to person
router.post('/', async (req, res) => {
    try {
     const data = req.body ;
 
     //creating a new person document using the mongoose model
     const newPerson = new Person(data);
 
     //save the new person to the database
    const response = await newPerson.save();
    console.log('data saved')
    res.status(200).json(response);
    } catch (error) {
     console.log("error")
     res.status(500).json({error: 'Internal Server Error'});
    }
    
 });

 //Get rout to person
 router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:work', async (req, res) => {
    try {
    const workType = req.params.work; // Extract the work type from the URL parameter
    // Assuming you already have a Person model and MongoDB connection set up
    const persons = await Person.find({ work: workType });
    // Send the list of persons with the specified work type as a JSON response
    res.json(persons);
    } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });

    router.put('/:id', async (req, res) => {
        try {
            const person_is = req.params.id;
            const updated_id = req.body;

            const responce = await Person.findByIdAndUpdate(person_is, updated_id, {
                new: true,
                runValidators: true,

            });

            if(!responce){
                return res.status(404).json({error: 'not found'})
            }

            console.log("data_updated");
            res.status(200).json(responce);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'internal serval error'});
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            const person_id = req.params.id;

            const responce = await Person.findByIdAndDelete(person_id);
            if(!responce){
                res.status(404).json({message: "deleted successfully"});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "internal error"});
        }
    });
    
module.exports = router;