
const amqp = require("amqplib");
module.exports.CreateChannel = async () => {
    try {
        const connection = await amqp.connect(process.env.amqpServer);
        const channel = await connection.createChannel();
        await channel.assertQueue("comments-queue", "direct", { durable: true });
        return channel;
      } catch (err) {
        throw err;
    }
}


module.exports.sendToqueue = async (channel,queuename,msg) => {
  try {
      channel.sendToQueue(
          queuename,
          Buffer.from(
            JSON.stringify({
              msg
            })
          )
      );
  } catch (err) {
      throw err;
  }
}
