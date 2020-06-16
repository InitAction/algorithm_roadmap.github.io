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
    "url": "2020/06/16/helloworld-copy-2/index.html",
    "revision": "3ebaa21e38f94015d41bd5b678c9f03a"
  },
  {
    "url": "2020/06/16/helloworld-copy/index.html",
    "revision": "7cb98581b430c217a9513b735fd505d5"
  },
  {
    "url": "2020/06/16/helloworld/index.html",
    "revision": "565035c4ec3807161266b953d8c7fe2a"
  },
  {
    "url": "404.html",
    "revision": "181baf1b607d8034f08b01134b643c03"
  },
  {
    "url": "about.html",
    "revision": "62b49da45c5c0aac2d829074d71a67f1"
  },
  {
    "url": "assets/css/0.styles.02d5e74b.css",
    "revision": "58291ca9e95efee908cc0b917ffde1e8"
  },
  {
    "url": "assets/js/1.8779fc22.js",
    "revision": "dcba76ac3b288e2f5a2c2ed5d73d0c6b"
  },
  {
    "url": "assets/js/10.dc92e99a.js",
    "revision": "2445867d7eea6b4f12556d90237f147f"
  },
  {
    "url": "assets/js/11.da416944.js",
    "revision": "a26ea9d7710ea4621cdafdd8d0bf0a3e"
  },
  {
    "url": "assets/js/12.903beebb.js",
    "revision": "b9e88208d1be69d27f4bc591dc199561"
  },
  {
    "url": "assets/js/13.52c4ea03.js",
    "revision": "3f944323ec74b83d6a87226e03408f71"
  },
  {
    "url": "assets/js/3.f3b6389b.js",
    "revision": "e0faf2bfb1522c1d39d9b2341fff8913"
  },
  {
    "url": "assets/js/4.21a96f13.js",
    "revision": "4bd268622af24683f282fbe0f2ce7f42"
  },
  {
    "url": "assets/js/5.1ca0aa5d.js",
    "revision": "a60c8faa9fdf1d078067b85c6abb7f1d"
  },
  {
    "url": "assets/js/6.892c64b4.js",
    "revision": "57339a5ac8b57d9436250396e8c116b9"
  },
  {
    "url": "assets/js/7.5e61792c.js",
    "revision": "45e00a42eca926e053dba3e74decf3d0"
  },
  {
    "url": "assets/js/8.d58d12b7.js",
    "revision": "d6e515852032a004726a6aecc0b08a54"
  },
  {
    "url": "assets/js/9.f25193f7.js",
    "revision": "effffdd85f0d214f96a4aadf5a09a5f6"
  },
  {
    "url": "assets/js/app.6e14ccf4.js",
    "revision": "ed71143c70e0fbf5a420d2157ee43204"
  },
  {
    "url": "category/index.html",
    "revision": "32834554cf7fca4f7af0c00afb924dc8"
  },
  {
    "url": "index.html",
    "revision": "aa90320f762bf8b17b5cf7f3bbbf895c"
  },
  {
    "url": "tag/index.html",
    "revision": "7fc7e4ea1a306940a33415ef07424958"
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
