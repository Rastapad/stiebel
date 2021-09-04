/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/favicon.png",
    "revision": "33f58dea1cae26fe58ae067fcc16f863"
  },
  {
    "url": "static/icons/favicon.png"
  },
  {
    "url": "styles.be95068f0c7c525fcc90.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-2674486bf225d6eb4cc9.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-1611da20b6d998dd3799.js"
  },
  {
    "url": "app-88300184a761529fc9d7.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fcbb2f3be922488d723d91d3e4a98b42"
  },
  {
    "url": "webpack-runtime-1995bd4129138d12ae4d.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js"
  },
  {
    "url": "polyfill-5385e0275d5c3f70828b.js"
  },
  {
    "url": "05d954cf-16232f76d59922a33469.js"
  },
  {
    "url": "d9767e8d66c69e6fcaeb98c2efb439ee68a2a67e-9ec6758e04734f02ed63.js"
  },
  {
    "url": "component---src-pages-index-tsx-3710406f88916c221914.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b86747692fa60cb6efd95118cc237369"
  },
  {
    "url": "page-data/sq/d/1103940997.json",
    "revision": "a614ce392eefd9f94ce8f3b7508dedfd"
  },
  {
    "url": "page-data/sq/d/2138508730.json",
    "revision": "7e36b930db4ed3aa26e28385857e9e68"
  },
  {
    "url": "page-data/sq/d/2387023508.json",
    "revision": "613fe0ffad8fe9ed1679668657f5657f"
  },
  {
    "url": "page-data/sq/d/918294318.json",
    "revision": "0914a660e40a5e533c166a11543f359b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a1b2838f96cd0bdc3724db3d48faf71c"
  },
  {
    "url": "component---src-templates-page-tsx-aef72d69e9c7efdabb4a.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "8821c71068d0f04f0c8287f860873ede"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e7dfc88b8fd299473877bedd551daacd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-88300184a761529fc9d7.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
