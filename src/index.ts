import { Config } from './config';
import { Server } from './server';

console.log('enviro', process.env.NODE_ENV);
const server = new Server(new Config());
server.start();
