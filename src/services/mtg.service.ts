import { NcCard } from '@nucard/models';
import { Config } from '../config';
import { FirebaseService } from './firebase.service';
import * as algoliasearch from 'algoliasearch';

export class MtgService {
    private _cards: NcCard[] = [
        {
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
        },
        {
            name: "Apothecary Geist",
            rarity: "Common",
            cost: [
                'https://i.imgur.com/NBSZQvc.png',
                'https://i.imgur.com/xLyb6ri.png',
            ],
            types: ["Creature"],
            subtypes: ["Spirit"],
            thumbnail: "https://i.imgur.com/26NSZGk.png",
            printings: [
                {
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409740&type=card',
                },
            ],
        },
        {
            name: "Geist Snatch",
            rarity: "Common",
            cost: [
                'https://i.imgur.com/NBSZQvc.png',
                'https://i.imgur.com/QrGKXbz.png',
                'https://i.imgur.com/QrGKXbz.png',
            ],
            types: ["Instant"],
            subtypes: ["Spirit", "Cleric"],
            thumbnail: "https://i.imgur.com/X4gtxsw.png",
            printings: [
                {
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240021&type=card',
                },
            ],
        },
        {
            name: "Howlgeist",
            rarity: "Uncommon",
            cost: [
                'https://i.imgur.com/NBSZQvc.png',
                'https://i.imgur.com/YjaF6Wa.png',
            ],
            types: ["Creature"],
            subtypes: ["Spirit", "Wolf"],
            thumbnail: "https://i.imgur.com/eemUGZJ.png",
            text: `Creatures with power less than Howlgeist's power can't block it.

    Undying _(When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield under its owner's control with a +1/+1 counter on it.)_`,
            printings: [
                {
                    artist: "David Rapoza",
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240102&type=card',
                },
            ],
        },
        {
            name: "Geistcatcher's Rig",
            rarity: "Rare",
            cost: [
                'https://i.imgur.com/NBSZQvc.png',
            ],
            types: ["Artifact", "Creature"],
            subtypes: ["Construct"],
            thumbnail: "https://i.imgur.com/Mx8j6Gr.png",
            printings: [
                {
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=234445&type=card',
                },
            ],
        },
    ];

    constructor(
        private config: Config,
        private firebaseService: FirebaseService) { }

    public async search(query: string): Promise<NcCard[]> {
        return new Promise<NcCard[]>((resolve, reject) => {
            const results = [];
            const algoliaClient = algoliasearch('LEUAE3WAEY', 'd7e0086333ddb5cb86625a50f727b427');
            const index = algoliaClient.initIndex('cards');

            index.search({ query }, (err: any, content: any) => {
                if (err) {
                    throw err;
                }

                console.log(content.hits);
                resolve(this._cards);
            });

            // const snapshot = await this
            //     .firebaseService
            //     .getFirebaseClient()
            //     .collection('cards')
            //     .where('name', '==', query);

            // snpashot.forEach(doc => {
            //     results.push(doc.data());
            // });
        });
    }

    public async getRandomCard(): Promise<NcCard> {
        const index = Math.floor(Math.random() * Math.floor(this._cards.length));
        return this._cards[index];
    }
}
