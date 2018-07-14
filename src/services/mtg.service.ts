import { NcCard } from '@nucard/models';
import { Config } from '../config';
import { FirebaseService } from './firebase.service';
import * as algoliasearch from 'algoliasearch';

export class MtgService {
    constructor(
        private config: Config,
        private firebaseService: FirebaseService) { }

    public async search(query: string): Promise<NcCard[]> {
        return new Promise<NcCard[]>((resolve, reject) => {
            const results = [];
            const algoliaClient = algoliasearch(this.config.algoliaAppId, this.config.algoliaApiKey);
            const index = algoliaClient.initIndex('cards');

            index.search({ query }, (err: any, content: any) => {
                if (err) {
                    throw err;
                }

                resolve(this._cards);
            });
        });
    }

    public async getRandomCard(): Promise<NcCard> {
        return Promise.resolve({
            name: "Geist of Saint Traft",
            rarity: "Mythic Rare",
            cost: [
                'https://i.imgur.com/NBSZQvc.png',
                'https://i.imgur.com/xLyb6ri.png',
                'https://i.imgur.com/QrGKXbz.png',
            ],
            types: ["Legendary", "Creature"],
            subtypes: ["Spirit", "Cleric"],
            thumbnail: "https://i.imgur.com/rhfXhgn.png",
            text: `Hexproof _(This creature can't be the target of spells or abilities your opponents control.)_

    Whenever Geist of Saint Traft attacks, put a 4/4 white Angel creature token with flying on the battlefield tapped and attacking.
    Exile that token at the end of combat.`,
            printings: [
                {
                    artist: 'Igor Kieryluk',
                    collectorsNumber: "213",
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=247236&type=card',
                    printingIcon: 'http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=ISD&size=medium&rarity=M',
                    printedIn: 'ISD',
                    viewOn: [
                        {
                            name: 'Gatherer',
                            icon: './assets/images/gatherer.ico',
                            url: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=247236',
                            price: undefined,
                        },
                        {
                            name: 'magiccards.info',
                            icon: './assets/images/magiccardsinfo.ico',
                            url: 'https://magiccards.info/isd/en/213.html',
                            price: undefined,
                        },
                    ],
                    buyAt: [
                        {
                            name: 'Amazon.com',
                            icon: './assets/images/amazon.ico',
                            url: 'https://www.amazon.com/Magic-Gathering-Geist-Saint-Innistrad/dp/B005N60STO/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1531110228&sr=1-1&keywords=geist+of+saint+traft',
                            price: '$10.79',
                        },
                        {
                            name: 'tcgplayer.com',
                            icon: './assets/images/tcgplayer.ico',
                            url: 'https://shop.tcgplayer.com/magic/product/show?ProductName=Geist+of+Saint+Traft&newSearch=false&ProductType=All&IsProductNameExact=true',
                            price: '$8.98',
                        },
                    ],
                },
                {
                    artist: 'Daarken',
                    collectorsNumber: "1",
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409577&type=card',
                    printingIcon: 'http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=DDQ&size=medium&rarity=M',
                    printedIn: 'DDQ',
                    viewOn: [
                        {
                            name: 'Gatherer',
                            icon: './assets/images/gatherer.ico',
                            url: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=409577',
                            price: undefined,
                        },
                        {
                            name: 'magiccards.info',
                            icon: './assets/images/magiccardsinfo.ico',
                            url: 'https://magiccards.info/ddq/en/1.html',
                            price: undefined,
                        },
                    ],
                    buyAt: [
                        {
                            name: 'Amazon.com',
                            icon: './assets/images/amazon.ico',
                            url: 'https://www.amazon.com/Magic-Gathering-Geist-Saint-Innistrad/dp/B005N60STO/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1531110228&sr=1-1&keywords=geist+of+saint+traft',
                            price: '$11.71',
                        },
                        {
                            name: 'tcgplayer.com',
                            icon: './assets/images/tcgplayer.ico',
                            url: 'https://shop.tcgplayer.com/magic/product/show?ProductName=Geist+of+Saint+Traft&newSearch=false&ProductType=All&IsProductNameExact=true',
                            price: '$5.44',
                        },
                    ],
                },
            ],
        });
    }
}
