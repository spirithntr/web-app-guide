'use strict';

importScripts('/web-app-guide/sw-toolbox.js');

toolbox.precache(["/web-app-guide/index.html","/web-app-guide/style/style.css", "/web-app-guide/intersection.png"]);

toolbox.router.get('/web-app-guide/images/*', toolbox.cacheFirst);

toolbox.router.get('/web-app-guide/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
