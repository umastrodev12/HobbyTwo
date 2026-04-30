import { Server as HTTPServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

export default class socketService {
  private io: SocketIOServer;

  constructor(server: HTTPServer) {
    this.io = new SocketIOServer(server);
  }
}