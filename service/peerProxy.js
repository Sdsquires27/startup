import { WebSocketServer, WebSocket } from 'ws';

function peerProxy(httpServer)
{
    const socketServer = new WebSocketServer({ server: httpServer });
}