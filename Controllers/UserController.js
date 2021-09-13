class UserController {

    index(req, res, next) {
        res.json({ users: [] });
    }

    register(req, res, next) {
        res.json({
            success: true,
            data: [],
            message: "User successfully registered"
        })
    }


    login(req, res, next) {
        res.json({
            success: true,
            data: [],
            message: "login successfully, you will be redirected to your account shortly"
        })
    }

    logout(req,res,next){
        res.json({
        success: true,
        message:"User logged out"
        })
    }

    account(req, res, next) {
        res.json({
            message: "Welcome to your dashboard",
            accountID: String,
            balance: {
                available: Number,
                current: Number,
                iso_currency_code: String,
                limit: null,
                verificationStatus:true 
            }
        })
    }
  
}

module.exports = new UserController()
