import { RequestHandler } from 'express';
import * as asyncHandler from 'express-async-handler';
import { MtgService } from './services/mtg.service';
import { Config } from './config';

export class RouteDefintion {
    constructor(public path: string, public method: string, public handler: RequestHandler) { }
}

export class AppRoutes {
    public static getRoutes(config: Config): RouteDefintion[] {
        return [
            {
                path: '/mtg/cards/random',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService(config);
                    const card = await mtgService.getRandomCard();

                    response.send(card);
                }),
            },
            {
                path: '/mtg/cards/query/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService(config);
                    const cards = await mtgService.search(request.params.query);

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
