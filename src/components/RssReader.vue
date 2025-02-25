<template>
    <TopNav title="Pulse" iconClass="bi bi-activity">
    </TopNav>
    <div class="container">
        <div ref="parseHtmlContainer" v-show="false"></div>
        <div v-if="items.length>0">
            <div v-for="item in sortedItems" :key="item.entry.id" class="card shadow mb-2">
                <img :src="getThumbnail(item)" class="card-img-top" style="max-height: 200px;object-fit: cover;object-position: 50% 20%;">
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap mb-1">
                        <span class="badge text-truncate text-bg-primary m-1">{{ getFeedTitle(item) }}</span>
                        <span class="badge text-bg-warning m-1">{{ getCategory(item) }}</span>
                        <span class="text-muted m-1">{{ Calendar.formatRelativeTime(getDate(item)) }}</span>
                    </div>
                    <a :href="item.entry.link || '#'" target="_blank" class="card-title fs-5 fw-semibold link-underline-secondary">{{ item.entry.title }}</a>
                    <div v-html="getSummary(item)" class="card-text"></div>
                    <div class="text-muted">{{ getFeedDomain(item) }}</div>
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
import { ref, onMounted, computed, useTemplateRef } from 'vue';
import TopNav from './TopNav.vue';
import FixedBottom from './FixedBottom.vue';
import { Calendar } from '@/Tools';

// REACTIVE PROPERTIES
// -------------------
const feeds = ref([]);
const items = ref([]);
const scrollTop = ref(0);
const parseHtmlContainer = useTemplateRef("parseHtmlContainer");

// COMPUTED PROPERTIES
// -------------------
const sortedItems = computed(()=>{
    return [...items.value].sort((a,b) => Calendar.new(getDate(b))-Calendar.new(getDate(a)));
})

const scrollActive = computed(()=>{
    return scrollTop.value > 200;
})

// METHODS
// -------
const loadFeeds = async () => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/thedatag33k/b8651d3082627e7d485e09cbea714952/raw/feed_data.json");
        const data = await response.json();
        feeds.value = JSON.parse(data);
        items.value = feeds.value.flatMap((feed, index) => feed.entries.map(entry => ({entry, feedIndex:index})));
    } catch (err) {
        console.log("Error fetching gist data:",err);
    }
    //feeds.value = JSON.parse(localStorage.getItem("rssFeeds")) || defaultFeeds;
}

const scrollToTop = () => {
    window.scrollTo(0,0);
}

const getThumbnail = (item) => {
    const t = item.entry.media_thumbnail;
    if (t) {
        return t[0].url;
    } else {
        const p = /<img[^>]+src="([^">]+)/;
        const match = p.exec(item.entry.summary);
        if (match) {
            return match.at(1);
        }
    }
    return "";
}

const getDate = (item) => {
    return item.entry.published || item.entry.updated;
}

const getCategory = (item) => {
    const t = item.entry.tags;
    if (t) {
        return t[0].term;
    }
    return null;
}

const getSummary = (item) => {
    parseHtmlContainer.value.innerHTML = item.entry.summary || null;
    return parseHtmlContainer.value.innerText;
}

const getFeedTitle = (item) => {
    return feeds.value.at(item.feedIndex).feed.title;
}

const getFeedDomain = (item) => {
    const url = new URL(feeds.value.at(item.feedIndex).feed.link);
    return url.hostname;
}

// LIFECYCLE HOOKS
// ---------------
onMounted(()=>{
    loadFeeds();
    window.addEventListener("scroll", () => {
        scrollTop.value = window.scrollY;
    })
})

</script>
<style>
img {
    width: 100% !important;
    max-height: 200px !important;
    object-fit: cover;
    object-position: 50% 20%;
}
</style>

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