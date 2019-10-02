const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const  filename  = req.file.filename;
        const { company, techs, price } = req.body;
        const { userid } = req.headers;


        const user = await User.findById(userid);
        if(!user){
            return res
            .status(400)
            .json("User does not exist,");
        }

        const newSpot = await Spot.create({
            user: userid,
            company,
            price,
            thumbnail: filename,
            techs: techs.split(',').map(x => x.trim()),
        })

        return res.json({ newSpot })
    }
};