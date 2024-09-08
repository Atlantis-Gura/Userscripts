// ==UserScript==
// @name         Bilibili 稍后再看简单重定向
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  将稍后再看的链接直接重定向到普通视频页面
// @author       Atlantis-Gura
// @homepageURL    https://github.com/Atlantis-Gura/Userscripts
// @match        https://www.bilibili.com/list/watchlater*
// @license      MIT
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;
    const watchlaterPattern = /https:\/\/www\.bilibili\.com\/list\/watchlater\?bvid=([A-Za-z0-9]+)/;
    const match = currentUrl.match(watchlaterPattern);

    if (match) {
        const bvid = match[1];
        const newUrl = `https://www.bilibili.com/video/${bvid}/`;
        window.location.replace(newUrl);
    }
})();