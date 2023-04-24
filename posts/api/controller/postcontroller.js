const postservice = require('../services/postservice');
const { CreateChannel,ReceiveFromqueue } = require('../utils')

class postcontroller {
    // constructor() { 
    //     async function ReceiveData  () {
    //         const channel = await CreateChannel();
    //         ReceiveFromqueue(channel,"post-queue")
    //     }
    //     ReceiveData()
    // }
    
    async createPost (req,res) {
        try{
            postservice.createPost(req.body).then((data)=>{
                if(data)
                    res.json({
                        message : "Post Created",
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

    async GetPost (req,res) {
        try{
            postservice.GetPost().then((data)=>{
                if(data)
                    res.json({
                        message : "Post Data",
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

    async GetAllPost(req,res){
        try{
            let msgarr=[];
            const channel = await CreateChannel();
            await channel.consume("post-queue",async (data) => {
                const { msg }=JSON.parse(data.content);
                msgarr.push(msg);
                channel.ack(data);
            });
           
                postservice.GetAllPost(req.params.id,msgarr).then((datas)=>{
                        res.json({
                            message : "Post Data",
                            data : datas
                        })
                }).catch((error)=>{
                    res.json({
                        message : "something went wrong",
                        error : error.message
                    })
                });
                
            }
            
            
            catch(error){
                res.json({
                    message : "Intenal Server Error"
                })
            }
       
    }
}

module.exports = new postcontroller();