import { createRouter, createWebHashHistory } from 'vue-router'
import TodoListView from '@/components/TodoListView.vue'
import NotesView from '@/components/NotesView.vue'
import RssReader from '@/components/RssReader.vue'

const routes = [
  {path: '/',name: 'Home',component: TodoListView},
  {path: '/todolist',name: 'Tasks',component: TodoListView},
  {path: '/notes',name: 'Notes',component: NotesView},
  {path: '/rss',name: 'RSS Reader',component: RssReader}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
