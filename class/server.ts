import { SERVER_PORT } from './../global/enviroment';
import socketIO from 'socket.io';
import express from 'express';
import http from 'http';
import * as socket from '../sockets/socket';



export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {

        this.app =  express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);

        this.io = socketIO(this.httpServer);

        this.listenerSockets();

    }

    public static get instance() { // Patron singleton
        return this._instance || (this._instance = new this());
    }

    private listenerSockets() {
        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', client => {

            console.log('Client connnected');

            socket.message(client, this.io);

            socket.disconnect(client);
        });
    }

    start(callback: Function) {
        this.httpServer.listen(this.port, callback)
    }
}