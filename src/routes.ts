import { RequestHandler } from 'express';
import * as asyncHandler from 'express-async-handler';
import { MtgService } from './services/mtg.service';
import { Config } from './config';
import { FirebaseService } from './services/firebase.service';

export class RouteDefintion {
    constructor(public path: string, public method: string, public handler: RequestHandler) { }
}

export class AppRoutes {
    public static getRoutes(config: Config): RouteDefintion[] {
        return [
            {
                path: '/cards/random',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService(config, new FirebaseService());
                    const card = await mtgService.getRandomCard();

                    response.type('application/json');
                    response.send(card);
                }),
            },
            {
                path: '/cards/query/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService(config, new FirebaseService());
                    const cards = await mtgService.search(request.params.query);

                    response.type('application/json');
                    response.send(cards);
                }),
            },
            {
                path: '/',
                method: 'GET',
                handler: (request, response) => {
                    response.send("Hello, friend. Who's your favorite walker?");
                },
            },
        ];
    }
}
