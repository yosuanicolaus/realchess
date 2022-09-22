require("dotenv").config();
import * as Ably from "ably";

(async () => {
  const ably = new Ably.Realtime.Promise(process.env.ABLY_KEY!);
  console.log("connecting to Ably...");
  await ably.connection.once("connected");
  console.log("successfully connected to Ably");

  const channelTest = ably.channels.get("test-channel");

  await channelTest.subscribe("test-msg", (message) => {
    console.log("recieved message:", message.data);
    console.log(message);
  });
  console.log("subscribing for 'test-msg' inside 'test-channel'");
})();
