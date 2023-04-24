const CommentsModel = require('../database/commentmodel');
const { CreateChannel,sendToqueue } = require('../utils');

class commentservices {
    async createComments (data) {
        const c=new CommentsModel(data);
        const res = await c.save();
        const channel  = await CreateChannel();
        sendToqueue(channel,"post-queue",res);
        // const channel = await CreateChannel();
        // channel.sendToQueue(
        //     "post-queue",
        //     Buffer.from(
        //       JSON.stringify({
        //         res
        //       })
        //     )
        // );

        return res;
        
    }

    async GetComments () {
        return await CommentsModel.find({});
    }
}

module.exports = new commentservices();