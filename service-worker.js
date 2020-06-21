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
    "url": "2020/06/16/how-to-read-paper/index.html",
    "revision": "47cea72a11c79b98dea9303e40897d57"
  },
  {
    "url": "404.html",
    "revision": "472d1ee7201d8b24645b4977bf8aa8ff"
  },
  {
    "url": "about.html",
    "revision": "7f0bdccfb7f182a2b92a73a5b3128643"
  },
  {
    "url": "assets/css/0.styles.02d5e74b.css",
    "revision": "58291ca9e95efee908cc0b917ffde1e8"
  },
  {
    "url": "assets/js/1.8765c18d.js",
    "revision": "8140cf8e08f479534728271c8682a188"
  },
  {
    "url": "assets/js/10.66d758b6.js",
    "revision": "0d43c2cd060e344cda8f827fd0e6d8b2"
  },
  {
    "url": "assets/js/11.e85a381a.js",
    "revision": "5bb3ab03b6b041e619acb8a7a3b900de"
  },
  {
    "url": "assets/js/3.9b23ef01.js",
    "revision": "7774464dd8b1fe5341c904d2f0ecca7f"
  },
  {
    "url": "assets/js/4.bab7c262.js",
    "revision": "1cff6fda2c20ba1bf1f54f1b8bb38fdc"
  },
  {
    "url": "assets/js/5.43789dce.js",
    "revision": "9c38f74a31d7a8ebf00a0a8cc7668942"
  },
  {
    "url": "assets/js/6.892c64b4.js",
    "revision": "57339a5ac8b57d9436250396e8c116b9"
  },
  {
    "url": "assets/js/7.b14ca48a.js",
    "revision": "478cfa0c28e71dbbf21125a9e8096d99"
  },
  {
    "url": "assets/js/8.ff8c9d2e.js",
    "revision": "c7bf7aac7fd2eb317716f2c1ebfdec84"
  },
  {
    "url": "assets/js/9.43bf5de7.js",
    "revision": "2a4f5c77545b27f0544410998a347d34"
  },
  {
    "url": "assets/js/app.c762986a.js",
    "revision": "ce55957ac6e8e8123caaed35f91788cd"
  },
  {
    "url": "category/index.html",
    "revision": "2b076247a887c3ff50fa205e404afd56"
  },
  {
    "url": "index.html",
    "revision": "c8a3a5471ff91f79023be22e171fe498"
  },
  {
    "url": "tag/index.html",
    "revision": "d2f9df0503cbb4f240226a3e490b2a15"
  },
  {
    "url": "tag/Method.html",
    "revision": "748a36f0b5ffe3645b7af9d3c7e60b4d"
  },
  {
    "url": "tag/Paper.html",
    "revision": "0220d3a6ad9c0ea6dabb639d4bcc636f"
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
