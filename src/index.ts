import { Config } from './config';
import { Server } from './server';

console.log('algolia', process.env);
const server = new Server(new Config());
server.start();
