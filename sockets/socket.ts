import { Socket } from 'socket.io';
import socketIO from 'socket.io';






export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log('Client disconnect');
    });

}

export const message = (client: Socket, io: socketIO.Server) => {

    client.on('message', (payload: { de: string, message: string }) => {
        console.log('Received message', payload);

        io.emit('new-message', payload);
    });


}

