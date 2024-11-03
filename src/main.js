import './styles/main.css'

import { createApp } from 'vue'
import moment from 'moment';
import App from './App.vue'
import router from './router'

function fromNow(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
  return '';
}

function fileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const app = createApp(App)

app.use(router)

app.config.globalProperties.$filters = { fromNow, fileSize };

// Add meta handling for pages
router.beforeEach((to, from, next) => {
  // Update page title
  document.title = to.meta.title || 'Home Tutoring Service'
  
  // Update meta description
  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', to.meta.description || 'Professional home tutoring services')
  
  next()
})

app.mount('#app')
