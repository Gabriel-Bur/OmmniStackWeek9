const UserContext = require('../models/User');

module.exports = {
    async store(req, res){
        const email = req.body.email;
        
        let user = await UserContext.findOne({ email })
        
        if(!user){
            user = await UserContext.create({ email });
        }

        return res.json(user);
    }
};