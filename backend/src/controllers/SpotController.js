const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech })

        return res.json(spots);
    },

    async store(req, res){
        const  filename  = req.file.filename;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        if(!user){
            return res
            .status(400)
            .json("User does not exist,");
        }

        const newSpot = await Spot.create({
            user: user_id,
            company,
            price,
            thumbnail: filename,
            techs: techs.split(',').map(x => x.trim()),
        })

        return res.json({ newSpot })
    }
};