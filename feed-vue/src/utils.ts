import { rssFeed } from "./types"e
const parseRSS = (url: string) => {
    let feed: rssFeed = {items: [ {id: '1'} ]};
    return feed; 
}

export = parseRSS;