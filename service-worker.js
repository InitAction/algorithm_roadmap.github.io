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
    "revision": "e5602bd805cb07708fdec92ab76de67c"
  },
  {
    "url": "404.html",
    "revision": "2b3fc5bb875f68d228dd5ff240128e1c"
  },
  {
    "url": "about.html",
    "revision": "9faed139ca275a4e5c5888b06f10d01c"
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
    "url": "assets/js/7.bfef7ec7.js",
    "revision": "45e00a42eca926e053dba3e74decf3d0"
  },
  {
    "url": "assets/js/8.efb73895.js",
    "revision": "b2a3e9ec82209cb4215bf0e39870c745"
  },
  {
    "url": "assets/js/9.43bf5de7.js",
    "revision": "2a4f5c77545b27f0544410998a347d34"
  },
  {
    "url": "assets/js/app.32bf52ee.js",
    "revision": "8c5391e74d2087be6914b7e8badc35c0"
  },
  {
    "url": "category/index.html",
    "revision": "fe0e421d93e92211d29821c105ef1a9e"
  },
  {
    "url": "index.html",
    "revision": "69145522459ba50c48bdd36c796ffe9d"
  },
  {
    "url": "tag/index.html",
    "revision": "554093870eb269caf95798c3879734f8"
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
