browser-tools
=============

Suite of favelets, chrome extensions, audits and snippets to help test and debug the uSwitch website in the browser.

favelet: grid overlay
---------------------

Displays the 12 column grid used by the page, overlaid ontop of the content (content is still clickable through the grid in webkit). Also shows the type and version of stylesheet running (ie, because the grid changed in 4.0.1 onwards). Doesn't work in many comms pages as they use a different stylesheet system.

Below is the URL to the favelet, create a bookmark - preferably in you bookmark bar - and add this as it's URL:

javascript:function loadScript(scriptURL){ var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('language', 'JavaScript'); scriptElem.setAttribute('src', scriptURL); document.body.appendChild(scriptElem)}loadScript('https://raw.github.com/uswitch/browser-tools/master/favelet-grid/grid.js');




