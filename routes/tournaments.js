const express = require('express')
// const tournament = require('../models/tournament.js');
const tournament = require('../models/Tournament');
const router = require("express").Router();



router.get("/", async (req, res) => {
	try{
        await tournament.aggregate([
            {
                $lookup: {
                    from: "teams",
                    localField:"_id",
                    foreignField:"TourId",
                    as: "allTeams",
                },
            }
        ])
        .exec()
        .then((doc)=>{
            res.status(200).send(doc);
        })
        .catch(err => res.status(500).send({
            status: false,
            message: "Unable to get the team details",
          }) )
    }catch(err){
        res.status(400).send('Error ' + err)
    }
});


router.post("/", async (req, res) => {
    const {Mode, Server, Date, Time} = req.body;
    let tour;
	try{
           tour = new tournament({Mode, Server, Date, Time});
           await tour.save();
           res.send({tour})
    }catch(err){
        res.send('Error ' + err)
    }
});
module.exports = router;