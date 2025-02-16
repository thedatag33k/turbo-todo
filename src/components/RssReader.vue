<template>
    <TopNav title="Pulse" iconClass="bi bi-activity">
    </TopNav>
    <div class="container">
        <div v-if="items.length>0">
            <div v-for="item in sortedItems" :key="item.uniqueId" class="card shadow mb-2">
                <img :src="item.imageUrl" class="card-img-top" style="max-height: 200px;object-fit: cover;object-position: 50% 20%;">
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap mb-1">
                        <span class="badge text-truncate text-bg-primary m-1">{{ item.feedName }}</span>
                        <span class="badge text-bg-warning m-1">{{ item.category }}</span>
                        <span class="text-muted m-1">{{ Calendar.formatRelativeTime(item.date) }}</span>
                    </div>
                    <a :href="item.link || '#'" target="_blank" class="card-title fs-5">{{ item.title }}</a>
                    <p class="card-text">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <!-- PLACEHOLDERS -->
        <div v-if="items.length===0">
            <div v-for="index in 10" :key="index" class="card shadow mb-2">
                <img src="" class="card-img-top placeholder">
                <div class="card-body">
                    <a class="btn btn-primary disabled placeholder col-1 mb-2" aria-disabled="true" style="height: 10px;"></a>
                    <a class="btn btn-warning disabled placeholder col-1 ms-2 mb-2" aria-disabled="true" style="height: 10px;"></a>
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    </div>
    <FixedBottom>
        <button v-if="scrollActive" @click="scrollToTop" :style="buttonStyle" :class="buttonClass" class="ms-2 btn-secondary" type="button">
            <i class="bi bi-chevron-up"></i>
        </button>
    </FixedBottom>
</template>

<script>
const buttonClass = "btn rounded-circle fs-5 shadow"
const buttonStyle = {
    height:"50px",
    width:"50px"
}
</script>

<script setup>
// IMPORTS
// -------
import { ref, onMounted, computed } from 'vue';
import TopNav from './TopNav.vue';
import FixedBottom from './FixedBottom.vue';
import { Calendar } from '@/Tools';
import { fetchAllItems } from '@/Rss'

// STATIC PROPERTIES
// -----------------
const defaultFeeds = [
    {url: "https://www.wired.com/feed/rss", category:"Tech"},
    {url: "https://www.theverge.com/rss/index.xml", category:"Tech"},
    {url: "https://feeds.bbci.co.uk/news/world/rss.xml", category:"News"},
    {url: "https://www.dr.dk/nyheder/service/feeds/senestenyt", category:"News"},
    {url: "https://www.dr.dk/nyheder/service/feeds/indland", category:"News"},
    {url: "https://www.aljazeera.com/xml/rss/all.xml", category:"News"},
    {url: "https://techcrunch.com/feed/", category:"Tech"},
    {url: "https://www.nature.com/nature.rss", category:"Science"}
];

// REACTIVE PROPERTIES
// -------------------
const feeds = ref([]);
const items = ref([]);
const scrollTop = ref(0);

// COMPUTED PROPERTIES
// -------------------
const sortedItems = computed(()=>{
    return [...items.value].sort((a,b) => Calendar.new(b.date)-Calendar.new(a.date));
})

// METHODS
// -------
const loadFeeds = () => {
    feeds.value = JSON.parse(localStorage.getItem("rssFeeds")) || defaultFeeds;
}

const fetchAll = async () => {
    items.value = [];
    const result = await fetchAllItems(feeds.value.map(feed => feed.url));
    if (result) {
        result.forEach(feedResult => {
            items.value.push(...feedResult.items);
        })
    }
}

const scrollActive = computed(()=>{
    return scrollTop.value > 200;
})

const scrollToTop = () => {
    window.scrollTo(0,0);
}

// LIFECYCLE HOOKS
// ---------------
onMounted(()=>{
    loadFeeds();
    fetchAll();
    window.addEventListener("scroll", () => {
        scrollTop.value = window.scrollY;
    })
})

</script>

<style scoped>
img.placeholder {
    height: 200px;
    width: 100%;
    background-color: var(--bs-gray-100);
    border-width: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.badge {
    overflow: hidden;
}
</style>