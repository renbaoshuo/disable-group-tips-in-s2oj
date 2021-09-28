// ==UserScript==
// @name         Disable Group Tips in S2OJ
// @namespace    https://baoshuo.ren/
// @version      0.1.1
// @description  Disable Group Tips in S2OJ
// @author       Ren Baoshuo <i@baoshuo.ren>
// @match        *://sjzezoj.com/*
// @match        *://www.sjzezoj.com/*
// @match        *://sjzezoj.com:9280/*
// @match        *://www.sjzezoj.com:9280/*
// @icon         https://sjzezoj.com/images/logo_small.png
// @grant        none
// @license      GPL-3.0-only
// @homepageURL   https://baoshuo.ren/
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('#user-group > div > p:nth-child(1)')[0].innerHTML += `<a href="javascript:;" id="closeGroupTips" style="float: right;"></a><style>.no-display { display: none; }</style>`;
    if(typeof localStorage.displayGroupTips !== "undefined" && localStorage.displayGroupTips === "false") {
        document.getElementById('closeGroupTips').innerHTML = `[显示]`;
        Array.from(document.querySelectorAll('#user-group > div > :not(:first-child)')).forEach(elem => {
            elem.classList.add('no-display');
        });
        localStorage.displayGroupTips = "false";
        document.getElementById('closeGroupTips').onclick = () => {
            localStorage.displayGroupTips = "true";
            document.getElementById('closeGroupTips').innerHTML = `应用设置中...`;
            location.reload();
        };
    } else {
        localStorage.displayGroupTips = "true";
            document.getElementById('closeGroupTips').innerHTML = `[隐藏]`;
            Array.from(document.querySelectorAll('#user-group > div > :not(:first-child)')).forEach(elem => {
            elem.classList.remove('no-display');
        });
        localStorage.displayGroupTips = "true";
        document.getElementById('closeGroupTips').onclick = () => {
            localStorage.displayGroupTips = "false";
            document.getElementById('closeGroupTips').innerHTML = `应用设置中...`;
            location.reload();
        };
    }
    console.log('Successfuly loaded `Disable Group Tips in S2OJ` user script.\n', '* Author: Ren Baoshuo <i@baoshuo.ren>\n', '* Website: https://baoshuo.ren\n', '* GitHub: https://github.com/renbaoshuo/disable-group-tips-in-s2oj\n');
})();
