//let Parser = require('rss-parser');
import Parser from 'rss-parser';
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UClH-KpveOLJszChWRfFmPfQ&x=1');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();