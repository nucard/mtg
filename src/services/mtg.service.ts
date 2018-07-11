import { NcCard } from '@nucard/models';
import { Config } from '../config';

export class MtgService {
    private _cards: NcCard[] = [
        {
            name: "Geist of Saint Traft",
            rarity: "Mythic Rare",
            cost: [
                `${this.config.baseUrl}/assets/images/cost-1.png`,
                `${this.config.baseUrl}/assets/images/cost-w.png`,
                `${this.config.baseUrl}/assets/images/cost-u.png`,
            ],
            types: ["Legendary", "Creature"],
            subtypes: ["Spirit", "Cleric"],
            thumbnail: "./assets/images/geist.jpg",
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
                `${this.config.baseUrl}/assets/images/cost-1.png`,
                `${this.config.baseUrl}/assets/images/cost-w.png`,
            ],
            types: ["Creature"],
            subtypes: ["Spirit"],
            thumbnail: "./assets/images/apothecary-geist.png",
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
                `${this.config.baseUrl}/assets/images/cost-1.png`,
                `${this.config.baseUrl}/assets/images/cost-u.png`,
                `${this.config.baseUrl}/assets/images/cost-u.png`,
            ],
            types: ["Instant"],
            subtypes: ["Spirit", "Cleric"],
            thumbnail: "./assets/images/geist-snatch.jpg",
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
                `${this.config.baseUrl}/assets/images/cost-1.png`,
                `${this.config.baseUrl}/assets/images/cost-g.png`,
            ],
            types: ["Creature"],
            subtypes: ["Spirit", "Wolf"],
            thumbnail: "./assets/images/howlgeist.jpg",
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
                `${this.config.baseUrl}/assets/images/cost-1.png`,
            ],
            types: ["Artifact", "Creature"],
            subtypes: ["Construct"],
            thumbnail: "./assets/images/geistcatchers-rig.jpg",
            printings: [
                {
                    image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=234445&type=card',
                },
            ],
        },
    ];

    constructor(private config: Config) { }

    public async search(query: string): Promise<NcCard[]> {
        return new Promise<NcCard[]>((resolve, reject) => {
            if (!query || query.length < 2) {
                resolve([]);
                return;
            }

            const cards = this._cards.filter(c => {
                return c.name && c.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
            });

            resolve(cards);
        });
    }

    public async getRandomCard(): Promise<NcCard> {
        const index = Math.floor(Math.random() * Math.floor(this._cards.length));
        return this._cards[index];
    }
}