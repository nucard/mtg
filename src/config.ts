export class Config {
    public algoliaApiKey = process.env.algoliaApiKey;
    public algoliaAppId = process.env.algoliaAppId;
    public baseUrl = process.env.NODE_ENV === 'production' ? 'https://nucard-mtg.herokuapp.com' : 'http://localhost:/5223';
    public port = process.env.PORT || 5223;
}
