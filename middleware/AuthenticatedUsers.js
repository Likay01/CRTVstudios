require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

function createToken(user) {
    return sign({
        email: user.email,
        userPass: user.Psswrd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}

function verifyAToken(req, res, next){
    try{
        const token = req.cookies["LegitUser"]!== null ? req.cookies["LegitUser"]: "Please Sign up";
        if(token !== "Please Sign up") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            }else{
                res.status(400).json({err:"Please Sign up"})
            }
        }else{
            res.status(400).json({err:"Please Sign up"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
     
    }
}
module.exports= {createToken, verifyAToken};