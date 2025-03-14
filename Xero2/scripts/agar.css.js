// ==UserScript==
// @name         Xero-Bots Beta | .io Bots 2025
// @namespace    https://xerobots.github.io/
// @description  Best bots for agar.io clones and more
// @author       Tatsuya & Enes & Neobots-dev/Slxsher & xviizenn
// @match        *://oceanar.io/*
// @match        *://agar.cc/*
// @match        *://happyagar.online/*
// @match        *://aquar.io/*
// @match        *://gota.io/*
// @match        *://easyagario.icu/*
// @match        *://agarprivateservers.org/*
// @match        *://cellsbox.io/*
// @match        *://inciagario.net/*
// @match        *://agariott.com/*
// @match        *://bubleroyal.com/*
// @match        *://agarioio.com/*
// @match        *://agario.onl/*
// @match        *://agario.org.uk/*
// @match        *://agariomoddedserver.com/*
// @match        *://agariomodded.com/*
// @match        *://agarioonline.org/*
// @match        *://agar.boston/*
// @version      14/03/2025
// @run-at       document-start
// @grant        none
// @license      MIT
// @icon         https://xerobots.github.io/Xero.png
// ==/UserScript==

// require      //https://xerobots.github.io/Client.js
// updateURL    https://xerobots.github.io/Xero-Bots.user.js
// downloadURL  https://xerobots.github.io/Xero-Bots.user.js
(() => {
  const scripts = {
    "oceanar.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    // "agar.cc": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agar.cc":
      "//github.com/ViciousJS/escuelamodx/blob/main/Xero2/scripts/agar.css.js",
    "happyagar.online": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "aquar.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    "gota.io": "//xerobots.github.io/Gota.js",
    "easyagario.icu": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agarprivateservers.org": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "cellsbox.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    "inciagario.net": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    "agariott.com": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    "bubleroyal.com": "//xerobots.github.io/OceanarAndBubleAndMore.js",
    "agarioio.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agario.onl": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agario.org.uk": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agariomoddedserver.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agariomodded.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agarioonline.org": "//xerobots.github.io/Agar.cc-And-Clones.js",
    "agar.boston": "//xerobots.github.io/Agar.cc-And-Clones.js",
  };

  const hostname = window.location.hostname;

  if (scripts[hostname]) {
    function injectScript(retries = 5) {
      if (document.querySelector(`script[src='${scripts[hostname]}']`)) {
        console.log("Script already injected successfully.");
        return;
      }

      const script = document.createElement("script");
      script.src = scripts[hostname];
      script.async = true;
      script.onload = () =>
        console.log(`Successfully injected script: ${script.src}`);
      script.onerror = () => {
        console.error(`Failed to load script: ${script.src}`);
        if (retries > 0) {
          console.log(`Retrying injection... (${retries} attempts left)`);
          injectScript(retries - 1);
        } else {
          console.error("Script injection failed after multiple attempts.");
        }
      };

      document.head.appendChild(script);
    }

    injectScript();
  }
})();
