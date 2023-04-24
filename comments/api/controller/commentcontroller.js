const commentservices = require('../services/commentservice');
class postcontroller {
    async createComments (req,res) {
        try{
            commentservices.createComments(req.body).then((data)=>{
                    res.json({
                        message : "Comments Created",
                        data : data
                    })
            }).catch((error)=>{
                res.json({
                    message : "something went wrong",
                    error : error.message
                })
            })
        }
        catch(error){
            res.json({
                message : "Intenal Server Error"
            })
        }
    }

    async GetComments (req,res) {
        try{
            commentservices.GetComments().then((data)=>{
                if(data)
                    res.json({
                        message : "Comments Data",
                        data : data
                    })
            }).catch((error)=>{
                res.json({
                    message : "something went wrong",
                    error : error.message
                })
            })
        }
        catch(error){
            res.json({
                message : "Intenal Server Error"
            })
        }
    }
}

module.exports = new postcontroller();