const PostModel = require('../database/postmodel');
const { CreateChannel,ReceiveFromqueue } = require('../utils')


class postservice {
    async createPost (data) {
        const p=new PostModel(data);
        const res = await p.save();

        return res;
    }

    async GetPost () {
        return PostModel.find({});
    }
    
    async GetAllPost(postId,data) {
        try {
            console.log(data);
            const post = await PostModel.findOne({_id:postId});
            
            if(post)
            {
                let comments = post.comments;
                data.map((d)=>{
                    if(comments.length>0)
                    {
                        const objres = comments.find(o=>o._id === d._id);
                        if(!objres)
                            comments.push(d)
                    }
                    else
                    {
                        comments.push(d)
                    }

                    post.comments=comments;
                })
                const res=await post.save();
                
                return res;
            //     let comment_obj={
            //         _id:data._id,
            //         title: data.title,
            //         postId:data.postId,
            //     };
                
            //     if(comments.length>0)
            //     {
            //         let isExist = false;
            //         comments.map((c)=>{
            //             if(c._id!=data._id)
            //             {   
            //                 isExist=true;
            //             }
            //         });

            //         if(isExist)
            //         {
            //             comments.push(comment_obj)
            //         }
            //     }
            //     else
            //     {
            //         comments.push(comment_obj)
            //     }
            //     post.comments=comments;
                
            //     await post.save();
                
            //     return post;
            }
            else
            {
                return post;
            }
           
        }catch(error)
        {
            throw error;
        }
    }
}

module.exports = new postservice();