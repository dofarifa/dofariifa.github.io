const coverColor=()=>{const e=PAGE_CONFIG.color;if(e)return void setThemeColors(e);const o=document.getElementById("post-cover")?.src;o?handleApiColor(o):setDefaultThemeColors()};function handleApiColor(e){const o=JSON.parse(localStorage.getItem("Solitude"))||{};o.postcolor&&o.postcolor[e]?setThemeColors(o.postcolor[e].value):img2color(e)}function img2color(e){fetch(coverColorConfig.api+encodeURIComponent(e)).then((e=>e.json())).then((o=>{setThemeColors(o.RGB),cacheColor(e,o.RGB)})).catch(console.error)}function setThemeColors(e){if(e){const[o,t,n]=e.match(/\w\w/g).map((e=>parseInt(e,16)));document.documentElement.style.setProperty("--efu-main",e),document.documentElement.style.setProperty("--efu-main-op",e+"23"),document.documentElement.style.setProperty("--efu-main-op-deep",e+"dd"),document.documentElement.style.setProperty("--efu-main-none",e+"00"),adjustBrightness(o,t,n),document.getElementById("coverdiv").classList.add("loaded"),initThemeColor()}else setDefaultThemeColors()}function setDefaultThemeColors(){document.documentElement.style.setProperty("--efu-main","var(--efu-theme)"),document.documentElement.style.setProperty("--efu-main-op","var(--efu-theme-op)"),document.documentElement.style.setProperty("--efu-main-op-deep","var(--efu-theme-op-deep)"),document.documentElement.style.setProperty("--efu-main-none","var(--efu-theme-none)"),initThemeColor()}function cacheColor(e,o){const t=JSON.parse(localStorage.getItem("Solitude"))||{};t.postcolor=t.postcolor||{},t.postcolor[e]={value:o,expiration:Date.now()+coverColorConfig.time},localStorage.setItem("Solitude",JSON.stringify(t))}function adjustBrightness(e,o,t){Math.round((299*e+587*o+114*t)/1e3)<125&&([...document.getElementsByClassName("card-content")].forEach((e=>e.style.setProperty("--efu-card-bg","var(--efu-white)"))),[...document.getElementsByClassName("author-info__sayhi")].forEach((e=>{e.style.setProperty("background","var(--efu-white-op)"),e.style.setProperty("color","var(--efu-white)")})))}