parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i0aF":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){"function"==typeof e&&e.amd?e([],o):"undefined"!=typeof exports?o():(o(),t.FileSaver={})}(this,function(){"use strict";function e(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){i(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t&&t.global===t?t:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,i,r){var c=a.URL||a.webkitURL,s=document.createElement("a");i=i||t.name||"download",s.download=i,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?n(s):o(s.href)?e(t,i,r):n(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(s.href)},4e4),setTimeout(function(){n(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(t,i),a);else if(o(t))e(t,a,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){n(r)})}}:function(t,o,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,n);var r="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},l.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,f=u.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});a.saveAs=i.saveAs=i,"undefined"!=typeof module&&(module.exports=i)});
},{}],"EwkZ":[function(require,module,exports) {
module.exports=function(o){return atob(o)};
},{}],"ZYml":[function(require,module,exports) {
var define;
var e;!function(n){"use strict";function t(e,n){if(e instanceof Boolean||"boolean"==typeof e)return!1;if(n instanceof Object||(n={}),n.hasOwnProperty("allowBlank")&&!n.allowBlank&&""===e)return!1;var t="(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";return n.mime&&(t="(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)?"+t),!1===n.paddingRequired&&(t="(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?"),new RegExp("^"+t+"$","gi").test(e)}"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=t),exports.isBase64=t):"function"==typeof e&&e.amd?e([],function(){return t}):n.isBase64=t}(this);
},{}],"z1Kv":[function(require,module,exports) {
"use strict";var r=require("atob-lite"),e=require("is-base64");function t(r){for(var e=new Uint8Array(r.length),t=0;t<r.length;t++)e[t]=r.charCodeAt(t);return e.buffer}function n(e){var n=(e=e.replace(/\r?\n/g,"")).indexOf(",");if(-1===n||n<=4)throw new TypeError("malformed data-URI");for(var a=e.substring(5,n).split(";"),i=!1,s="US-ASCII",u=0;u<a.length;u++)"base64"==a[u]?i=!0:0==a[u].indexOf("charset=")&&(s=a[u].substring(8));var o=unescape(e.substring(n+1));i&&(o=r(o));var f=t(o);return f.type=a[0]||"text/plain",f.charset=s,f}module.exports=function(a){if("string"!=typeof a)throw Error("Argument should be a string");return/^data\:/i.test(a)?n(a):(e(a)&&(a=r(a)),t(a))};
},{"atob-lite":"EwkZ","is-base64":"ZYml"}],"sMXx":[function(require,module,exports) {
module.exports=function(r){switch(r){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}};
},{}],"StL8":[function(require,module,exports) {
var e=require("dtype");function r(r,t,n){if(!r)throw new TypeError("must specify data as first parameter");if(n=0|+(n||0),Array.isArray(r)&&r[0]&&"number"==typeof r[0][0]){var a,l,o,s,f=r[0].length,i=r.length*f;t&&"string"!=typeof t||(t=new(e(t||"float32"))(i+n));var h=t.length-n;if(i!==h)throw new Error("source length "+i+" ("+f+"x"+r.length+") does not match destination length "+h);for(a=0,o=n;a<r.length;a++)for(l=0;l<f;l++)t[o++]=null===r[a][l]?NaN:r[a][l]}else if(t&&"string"!=typeof t)t.set(r,n);else{var g=e(t||"float32");if(Array.isArray(r)||"array"===t)for(a=0,o=n,s=(t=new g(r.length+n)).length;o<s;o++,a++)t[o]=null===r[a]?NaN:r[a];else 0===n?t=new g(r):(t=new g(r.length+n)).set(r,n)}return t}module.exports=r;
},{"dtype":"sMXx"}],"sn8N":[function(require,module,exports) {
"use strict";var r=require("string-to-arraybuffer"),e=require("flatten-vertex-data");module.exports=function t(f){if(!f)return null;if(f instanceof ArrayBuffer)return f;if("string"==typeof f)return r(f);if(ArrayBuffer.isView(f))return f.byteOffset?f.buffer.slice(f.byteOffset,f.byteOffset+f.byteLength):f.buffer;var a;if(f.buffer||f.data||f._data)return a=t(f.buffer||f.data||f._data);if(Array.isArray(f))for(var n=0;n<f.length;n++)if(null!=f[n].length){f=e(f);break}return(a=new Uint8Array(f)).length?a.buffer:null};
},{"string-to-arraybuffer":"z1Kv","flatten-vertex-data":"StL8"}],"W65t":[function(require,module,exports) {
var t;module.exports=function(a){return function(i){var p=(i=i.toLowerCase().trim()).lastIndexOf("/");return p>=0&&(i=i.substr(p+1)),(p=i.lastIndexOf("."))>=0&&(i=i.substr(p+1)),t[i]||a}},t={"3gp":"video/3gpp",a:"application/octet-stream",ai:"application/postscript",aif:"audio/x-aiff",aiff:"audio/x-aiff",asc:"application/pgp-signature",asf:"video/x-ms-asf",asm:"text/x-asm",asx:"video/x-ms-asf",atom:"application/atom+xml",au:"audio/basic",avi:"video/x-msvideo",bat:"application/x-msdownload",bin:"application/octet-stream",bmp:"image/bmp",bz2:"application/x-bzip2",c:"text/x-csrc",cab:"application/vnd.ms-cab-compressed",can:"application/candor",cc:"text/x-c++src",chm:"application/vnd.ms-htmlhelp",class:"application/octet-stream",com:"application/x-msdownload",conf:"text/plain",cpp:"text/x-c",crt:"application/x-x509-ca-cert",css:"text/css",csv:"text/csv",cxx:"text/x-c",deb:"application/x-debian-package",der:"application/x-x509-ca-cert",diff:"text/x-diff",djv:"image/vnd.djvu",djvu:"image/vnd.djvu",dll:"application/x-msdownload",dmg:"application/octet-stream",doc:"application/msword",dot:"application/msword",dtd:"application/xml-dtd",dvi:"application/x-dvi",ear:"application/java-archive",eml:"message/rfc822",eps:"application/postscript",exe:"application/x-msdownload",f:"text/x-fortran",f77:"text/x-fortran",f90:"text/x-fortran",flv:"video/x-flv",for:"text/x-fortran",gem:"application/octet-stream",gemspec:"text/x-script.ruby",gif:"image/gif",gyp:"text/x-script.python",gypi:"text/x-script.python",gz:"application/x-gzip",h:"text/x-chdr",hh:"text/x-c++hdr",htm:"text/html",html:"text/html",ico:"image/vnd.microsoft.icon",ics:"text/calendar",ifb:"text/calendar",iso:"application/octet-stream",jar:"application/java-archive",java:"text/x-java-source",jnlp:"application/x-java-jnlp-file",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",less:"text/css",log:"text/plain",lua:"text/x-script.lua",luac:"application/x-bytecode.lua",makefile:"text/x-makefile",m3u:"audio/x-mpegurl",m4v:"video/mp4",man:"text/troff",manifest:"text/cache-manifest",markdown:"text/x-markdown",mathml:"application/mathml+xml",mbox:"application/mbox",mdoc:"text/troff",md:"text/x-markdown",me:"text/troff",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mml:"application/mathml+xml",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mp4v:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ms:"text/troff",msi:"application/x-msdownload",odp:"application/vnd.oasis.opendocument.presentation",ods:"application/vnd.oasis.opendocument.spreadsheet",odt:"application/vnd.oasis.opendocument.text",ogg:"application/ogg",p:"text/x-pascal",pas:"text/x-pascal",pbm:"image/x-portable-bitmap",pdf:"application/pdf",pem:"application/x-x509-ca-cert",pgm:"image/x-portable-graymap",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pl:"text/x-script.perl",pm:"text/x-script.perl-module",png:"image/png",pnm:"image/x-portable-anymap",ppm:"image/x-portable-pixmap",pps:"application/vnd.ms-powerpoint",ppt:"application/vnd.ms-powerpoint",ps:"application/postscript",psd:"image/vnd.adobe.photoshop",py:"text/x-script.python",qt:"video/quicktime",ra:"audio/x-pn-realaudio",rake:"text/x-script.ruby",ram:"audio/x-pn-realaudio",rar:"application/x-rar-compressed",rb:"text/x-script.ruby",rdf:"application/rdf+xml",roff:"text/troff",rpm:"application/x-redhat-package-manager",rss:"application/rss+xml",rtf:"application/rtf",ru:"text/x-script.ruby",s:"text/x-asm",sgm:"text/sgml",sgml:"text/sgml",sh:"application/x-sh",sig:"application/pgp-signature",snd:"audio/basic",so:"application/octet-stream",svg:"image/svg+xml",svgz:"image/svg+xml",swf:"application/x-shockwave-flash",t:"text/troff",tar:"application/x-tar",tbz:"application/x-bzip-compressed-tar",tci:"application/x-topcloud",tcl:"application/x-tcl",tex:"application/x-tex",texi:"application/x-texinfo",texinfo:"application/x-texinfo",text:"text/plain",tif:"image/tiff",tiff:"image/tiff",torrent:"application/x-bittorrent",tr:"text/troff",ttf:"application/x-font-ttf",txt:"text/plain",vcf:"text/x-vcard",vcs:"text/x-vcalendar",vrml:"model/vrml",war:"application/java-archive",wav:"audio/x-wav",webapp:"application/x-web-app-manifest+json",webm:"video/webm",wma:"audio/x-ms-wma",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",wrl:"model/vrml",wsdl:"application/wsdl+xml",xbm:"image/x-xbitmap",xhtml:"application/xhtml+xml",xls:"application/vnd.ms-excel",xml:"application/xml",xpm:"image/x-xpixmap",xsl:"application/xml",xslt:"application/xslt+xml",yaml:"text/yaml",yml:"text/yaml",zip:"application/zip"};
},{}],"Fr4I":[function(require,module,exports) {
"use strict";var t=Object.prototype.toString;module.exports=function(o){return o instanceof Blob||"[object Blob]"===t.call(o)};
},{}],"dynX":[function(require,module,exports) {
"use strict";var e=require("to-array-buffer"),r=require("simple-mime")("application/octect-stream"),i=require("is-blob");module.exports=function(t,o){if(!(i(t)||t instanceof File)){t=e(t);var a=r(o||"");t=new Blob([t],{type:a})}return t};
},{"to-array-buffer":"sn8N","simple-mime":"W65t","is-blob":"Fr4I"}],"NPZX":[function(require,module,exports) {
"use strict";var e=require("file-saver").saveAs,n=require("src/to-blob"),r=null;function t(o,s){if("string"==typeof o&&("string"!=typeof s||s.length>o.length)){var u=s;s=o,o=u}var i=n(o,s);return r?r.then(function(){return r=t(o,s)}):r=new Promise(function(n,t){e(i,s),window.addEventListener("focus",function e(){r=null,window.removeEventListener("focus",e),n()})})}function o(r,t){return e(n(r,t),t)}module.exports=t,module.exports.save=t,module.exports.saveSync=o;
},{"file-saver":"i0aF","src/to-blob":"dynX"}],"Yf0o":[function(require,module,exports) {
module.exports=fetch;
},{}],"B0HW":[function(require,module,exports) {
const e=require("node-fetch");async function t(t,r){return(await e(`https://api.github.com/repos/${t}`,{headers:r?{Authorization:`Bearer ${r}`}:void 0})).json()}async function r({user:e,repository:o,ref:s="HEAD",directory:a,token:i,getFullData:n=!1}){const u=[],p=[],c=await t(`${e}/${o}/contents/${a}?ref=${s}`,i);if("Not Found"===c.message)return[];if(c.message)throw new Error(c.message);for(const t of c)"file"===t.type?u.push(n?t:t.path):"dir"===t.type&&p.push(r({user:e,repository:o,ref:s,directory:t.path,token:i,getFullData:n}));return u.concat(...await Promise.all(p))}async function o({user:e,repository:r,ref:o="HEAD",directory:s,token:a,getFullData:i=!1}){s.endsWith("/")||(s+="/");const n=[],u=await t(`${e}/${r}/git/trees/${o}?recursive=1`,a);if(u.message)throw new Error(u.message);for(const t of u.tree)"blob"===t.type&&t.path.startsWith(s)&&n.push(i?t:t.path);return n.truncated=u.truncated,n}module.exports.viaContentsApi=r,module.exports.viaContentApi=r,module.exports.viaTreesApi=o,module.exports.viaTreeApi=o;
},{"node-fetch":"Yf0o"}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("save-file")),t=o(require("list-github-dir-content"));function o(e){return e&&e.__esModule?e:{default:e}}const n=/^[/]([^/]+)[/]([^/]+)[/]tree[/]([^/]+)[/](.*)/;function a(e,...t){const o=document.querySelector(".status");o.innerHTML=e||'\n\t\t<strong>download-directory • github • io</strong>\n\t\t<form>\n\t\t\t<input name="url" type="url" size="38" placeholder="Paste GitHub.com folder URL + press Enter">\n\t\t</form>\n\t',console.log(o.textContent,...t)}async function r(){const e=document.querySelector("#token");if(e.addEventListener("input",()=>{e.checkValidity()&&(localStorage.token=e.value)}),localStorage.token)e.value=localStorage.token;else{const t=document.querySelector("#token-toggle");t.checked=!0,a("Waiting for token..."),await new Promise(o=>{e.addEventListener("input",function n(){e.checkValidity()&&(t.checked=!1,o(),e.removeEventListener("input",n))})})}}async function i(e){const t=await fetch(`https://api.github.com/repos/${e}`,localStorage.token?{headers:{Authorization:`Bearer ${localStorage.token}`}}:{});switch(t.status){case 401:throw a("⚠ The token provided is invalid or has been revoked.",{token:localStorage.token}),new Error("Invalid token");case 403:if("0"===t.headers.get("X-RateLimit-Remaining"))throw a("⚠ Your token rate limit has been exceeded.",{token:localStorage.token}),new Error("Rate limit exceeded");break;case 404:throw a("⚠ Repository was not found.",{repo:e}),new Error("Repository not found")}if(!t.ok)throw a("⚠ Could not obtain repository data from the GitHub API.",{repo:e,response:t}),new Error("Fetch error");return t.json()}async function s(){const{default:e}=await import("https://cdn.skypack.dev/jszip@^3.4.0");return new e}async function c(){const o=s();let c,l,d,u;try{const e=new URLSearchParams(location.search),t=new URL(e.get("trantiendat"));[,c,l,d,u]=n.exec(t.pathname),console.log("Source:",{user:c,repository:l,ref:d,dir:u})}catch{return a()}if(!navigator.onLine)throw a("⚠ You are offline."),new Error("You are offline");a("Retrieving directory info…");const{private:h}=await i(`${c}/${l}`),w=await t.default.viaTreesApi({user:c,repository:l,ref:d,directory:decodeURIComponent(u),token:localStorage.token,getFullData:!0});if(0===w.length)return void a("No files to download");a(`Downloading (0/${w.length}) files…`,"\n• "+w.map(e=>e.path).join("\n• "));const f=new AbortController;let p=0;const g=async e=>{const t=h?await(async e=>{const t=await fetch(e.url,{headers:{Authorization:`Bearer ${localStorage.token}`},signal:f.signal});if(!t.ok)throw new Error(`HTTP ${t.statusText} for ${e.path}`);const{content:o}=await t.json();return(await fetch(`data:application/octet-stream;base64,${o}`)).blob()})(e):await(async e=>{const t=await fetch(`https://raw.githubusercontent.com/${c}/${l}/${d}/${e.path}`,{signal:f.signal});if(!t.ok)throw new Error(`HTTP ${t.statusText} for ${e.path}`);return t.blob()})(e);a(`Downloading (${++p}/${w.length}) files…`,e.path),(await o).file(e.path.replace(u+"/",""),t,{binary:!0})};h&&await r();try{await Promise.all(w.map(g))}catch(y){throw f.abort(),navigator.onLine?y.message.startsWith("HTTP ")?a("⚠ Could not download all files."):a("⚠ Some files were blocked from downloading, try to disable any ad blockers and refresh the page."):a("⚠ Could not download all files, network connection lost."),y}a(`Zipping ${p} files…`);const k=await(await o).generateAsync({type:"blob"});await(0,e.default)(k,`${c} ${l} ${d} ${u}.zip`.replace(/\//,"-")),a(`
Đang tải về ${p} tập tin`)}c(),window.addEventListener("load",()=>{navigator.serviceWorker.register("service-worker.js")});
},{"save-file":"NPZX","list-github-dir-content":"B0HW","service-worker.js":[["service-worker.js","AaGI"],"service-worker.js.map","AaGI"]}]},{},["Focm"], null)
//# sourceMappingURL=download-directory.github.io.0e2b0391.js.map
