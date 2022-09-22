"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const Ably = require("ably");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const ably = new Ably.Realtime.Promise(process.env.ABLY_KEY);
    console.log("connecting to Ably...");
    yield ably.connection.once("connected");
    console.log("successfully connected to Ably");
    const channelTest = ably.channels.get("test-channel");
    yield channelTest.subscribe("test-msg", (message) => {
        console.log("recieved message:", message.data);
        console.log(message);
    });
    console.log("subscribing for 'test-msg' inside 'test-channel'");
}))();
