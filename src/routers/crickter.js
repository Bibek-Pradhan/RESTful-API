const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/batsman");


// insert data in database

router.post("/batsman", async(req, res) => {
    try {
        const player = new MensRanking(req.body);
        const createPlayer = await player.save();
        res.status(201).send(createPlayer);

    } catch (error) {
        res.status(404).send(error);
    }
});

// read the data of the database
router.get("/batsman", async(req, res) => {
    try {
        const player = await MensRanking.find().sort({ "ranking": 1 });
        res.send(player)
    } catch (error) {
        res.status(404).send(error);
    }
});

// read the individual data with id
router.get("/batsman/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const player = await MensRanking.findById(_id);

        if (!player) {
            res.status(404).send(error);
        } else {
            res.send(player);
        }

    } catch (error) {
        res.status(404).send(error);
    }
});

// update the data with the help of id
router.patch("/batsman/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updatePlayer = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updatePlayer);
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete the data with the help of id
router.delete("/batsman/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const deletePlayer = await MensRanking.findByIdAndDelete(_id);
        res.send(deletePlayer);
    } catch (error) {

    }
});

module.exports = router;