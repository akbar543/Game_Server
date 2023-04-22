const router = require("express").Router();
const TeamDb = require("../models/Team");
const TournamentDb = require('../models/Tournament.js');

router.get("/" , async(req,res) => {
    try {
        const team = await TeamDb.find();
        res.status(200).send({team});
    } catch (error) {
        res.status(400).send({error})
    }
})

router.post("/:id" , async(req,res) => {
    const TourId = req.params.id;
    const {TeamName, Player1, Player1TagLine,Player2, Player2TagLine,Player3, Player3TagLine,Player4, Player4TagLine,Player5, Player5TagLine} = req.body;
    try {
        const tour = await TournamentDb.findById(TourId);
        const teamNo = tour.teams.length
        if(teamNo<2){
            const team = new TeamDb({TeamName, Player1, Player1TagLine,Player2, Player2TagLine,Player3, Player3TagLine,Player4, Player4TagLine,Player5, Player5TagLine, TourId});
            // console.log(team)
            // const session = await mongoose.startSession();
            // session.startTransaction();
            await team.save();
            // tournament.teams.push(team);
            // await tornament.save();
            // await session.commitTransaction();
            res.status(200).send({team});

        }
        else{
            res.status(400).send({message:"Teams full"});
        }

    } catch (error) {
        res.status(400).send(error);
        // console.log(error);
    }
})

module.exports = router;