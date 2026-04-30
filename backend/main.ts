import SocketService from "./services/socket";
import express from "express";
import { createServer } from "http";
import { Lunar } from "../lunar/src/lunardesign";
import https from "https";

const htmx = new Lunar();
const server = express();
const httpServer = createServer(server);

const socket = new SocketService(httpServer);

server.use("/");
server.use("/chat");
server.use("/me");
server.use("/user/{userId}");