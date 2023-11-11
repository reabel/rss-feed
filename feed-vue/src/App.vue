<script setup>
  import { onMounted, ref } from 'vue';
  import { praseRSS } from 'utils';
  const parser = new Parser();
  const rssItems = ref();
  const fetchRssFeed = async () => {
    console.log('parsing');
    
  const feed = await parser.parseURL('https://www.reddit.com/.rss'); // Replace with your RSS feed URL
    //Update the component data with the fetched items
    //console.log('items', feed);
    rssItems.value = feed.items;
    rssItems.value = [{ title: 'test', contentSnippet: 'Lorem Ipsum'}]
  };

  onMounted(() => {
    fetchRssFeed();
  })
</script>

<template>
  <div>
    <h1>RSS Feed Reader</h1>
    <ul>
      <li v-for="item in rssItems" :key="item.guid">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
        <p>{{ item.contentSnippet }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
