require("dotenv").config();
const Ably = require("ably");

console.log("initiating test file");

(async () => {
  try {
    const ably = new Ably.Realtime.Promise(process.env.ABLY_KEY);
    console.log("connecting to Ably...");
    await ably.connection.once("connected");
    console.log("successfully connected to Ably");

    const channelTest = ably.channels.get("test-channel");

    await channelTest.publish("test-msg", "worlds! hi there!");
    console.log("published a message to 'test-msg'");
  } catch (error) {
    console.log(error);
  }
  process.exit();
})();
