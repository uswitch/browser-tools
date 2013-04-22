browser-tools
=============

Suite of favelets, chrome extensions, audits and snippets to help test and debug the uSwitch website in the browser.

uSwitch grid overlay favelet
----------------------------

Displays the grid used by the page, overlaid ontop of the content. Also shows the type and version of stylesheet running. Doesn't work in many comms pages as they use a different stylesheet system.

This is the link to the favelet, drag it to your bookmark bar: > [uSwitch grid](javascript:function loadScript\(scriptURL\){ var scriptElem = document.createElement\('SCRIPT'\); scriptElem.setAttribute\('language', 'JavaScript'\); scriptElem.setAttribute\('src', scriptURL\); document.body.appendChild\(scriptElem\)}loadScript\('https://raw.github.com/uswitch/browser-tools/master/favelet-grid/grid.js'\);) <