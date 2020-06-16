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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/06/16/helloworld/index.html",
    "revision": "362392a17ac16fd296f99772f43f1c17"
  },
  {
    "url": "404.html",
    "revision": "cecbee5070d562b864069d9deb636af4"
  },
  {
    "url": "about.html",
    "revision": "b6779f7c16919128b79a02632611d3bf"
  },
  {
    "url": "assets/css/0.styles.f2a50273.css",
    "revision": "eae8f87cd2ff917dd78b1f6fc29db401"
  },
  {
    "url": "assets/js/1.43eac19c.js",
    "revision": "f7cbf1d8a1cfdc9ba5efe918ba0ebf0a"
  },
  {
    "url": "assets/js/10.2b7fff9a.js",
    "revision": "54f26bfa161b7f3b0d25020f8e60381f"
  },
  {
    "url": "assets/js/3.75f42b34.js",
    "revision": "0305d76c96cd0b2408b1a5f2ca5c5fc4"
  },
  {
    "url": "assets/js/4.8782275e.js",
    "revision": "1aa00ac7241b096f16e5c7cb09436bb7"
  },
  {
    "url": "assets/js/5.55cfc330.js",
    "revision": "2692cc994167c1c246ff675e4e2fddb6"
  },
  {
    "url": "assets/js/6.5c876e2b.js",
    "revision": "28b3b1db1c977da25547e856939badbb"
  },
  {
    "url": "assets/js/7.47500662.js",
    "revision": "d5f76036d4e4b4b9043ae49eb19cf3ce"
  },
  {
    "url": "assets/js/8.4650ea33.js",
    "revision": "771816ede693a749fb09626c5f24543c"
  },
  {
    "url": "assets/js/9.25bbd9cd.js",
    "revision": "8658bd1ea7f14b514ffb7de73dd1ece0"
  },
  {
    "url": "assets/js/app.c8be578f.js",
    "revision": "2428be891db3266ba833a1157c05b7b9"
  },
  {
    "url": "category/index.html",
    "revision": "771a7f990817e591b8df8340444ca4c0"
  },
  {
    "url": "index.html",
    "revision": "31526404ef7993ba8dabf304cf18532e"
  },
  {
    "url": "tag/index.html",
    "revision": "6a28d913cef37c0233698d2a8805696a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
