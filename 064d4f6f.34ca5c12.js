(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(96)),o={id:"home-assistant",title:"Integration with Home Assistant",sidebar_label:"Home Assistant"},s={unversionedId:"usage/home-assistant",id:"usage/home-assistant",isDocsHomePage:!1,title:"Integration with Home Assistant",description:"The best way to integrate with HomeAssistant is to use the official integration. When configuring the integration, you will be asked for the Host of your frigate instance. This value should be the url you use to access Frigate in the browser and will look like http5000/. If you are using HassOS with the addon, the host should be http5000 (or http5000 if your are using the beta version of the addon). HomeAssistant needs access to port 5000 (api) and 1935 (rtmp) for all features. The integration will setup the following entities within HomeAssistant:",source:"@site/docs/usage/home-assistant.md",slug:"/usage/home-assistant",permalink:"/frigate/usage/home-assistant",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/usage/home-assistant.md",version:"current",sidebar_label:"Home Assistant",sidebar:"docs",previous:{title:"Advanced",permalink:"/frigate/configuration/advanced"},next:{title:"Web Interface",permalink:"/frigate/usage/web"}},l=[{value:"Sensors:",id:"sensors",children:[]},{value:"Cameras:",id:"cameras",children:[]},{value:"Media Browser:",id:"media-browser",children:[]},{value:"API:",id:"api",children:[{value:"Notifications",id:"notifications",children:[]}]}],c={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The best way to integrate with HomeAssistant is to use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/blakeblackshear/frigate-hass-integration"}),"official integration"),". When configuring the integration, you will be asked for the ",Object(r.b)("inlineCode",{parentName:"p"},"Host")," of your frigate instance. This value should be the url you use to access Frigate in the browser and will look like ",Object(r.b)("inlineCode",{parentName:"p"},"http://<host>:5000/"),". If you are using HassOS with the addon, the host should be ",Object(r.b)("inlineCode",{parentName:"p"},"http://ccab4aaf-frigate:5000")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"http://ccab4aaf-frigate-beta:5000")," if your are using the beta version of the addon). HomeAssistant needs access to port 5000 (api) and 1935 (rtmp) for all features. The integration will setup the following entities within HomeAssistant:"),Object(r.b)("h2",{id:"sensors"},"Sensors:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stats to monitor frigate performance"),Object(r.b)("li",{parentName:"ul"},"Object counts for all zones and cameras")),Object(r.b)("h2",{id:"cameras"},"Cameras:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cameras for image of the last detected object for each camera"),Object(r.b)("li",{parentName:"ul"},"Camera entities with stream support (requires RTMP)")),Object(r.b)("h2",{id:"media-browser"},"Media Browser:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rich UI with thumbnails for browsing event clips"),Object(r.b)("li",{parentName:"ul"},"Rich UI for browsing 24/7 recordings by month, day, camera, time")),Object(r.b)("h2",{id:"api"},"API:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Notification API with public facing endpoints for images in notifications")),Object(r.b)("h3",{id:"notifications"},"Notifications"),Object(r.b)("p",null,"Frigate publishes event information in the form of a change feed via MQTT. This allows lots of customization for notifications to meet your needs. Event changes are published with ",Object(r.b)("inlineCode",{parentName:"p"},"before")," and ",Object(r.b)("inlineCode",{parentName:"p"},"after")," information as shown ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#frigateevents"}),"here"),".\nNote that some people may not want to expose frigate to the web, so you can leverage the HA API that frigate custom_integration ties into (which is exposed to the web, and thus can be used for mobile notifications etc):"),Object(r.b)("p",null,"To load an image taken by frigate from HomeAssistants API see below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"https://HA_URL/api/frigate/notifications/<event-id>/thumbnail.jpg\n")),Object(r.b)("p",null,"To load a video clip taken by frigate from HomeAssistants API :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"https://HA_URL/api/frigate/notifications/<event-id>/<camera>/clip.mp4\n")),Object(r.b)("p",null,'Here is a simple example of a notification automation of events which will update the existing notification for each change. This means the image you see in the notification will update as frigate finds a "better" image. '),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'automation:\n  - alias: Notify of events\n    trigger:\n      platform: mqtt\n      topic: frigate/events\n    action:\n      - service: notify.mobile_app_pixel_3\n        data_template:\n          message: \'A {{trigger.payload_json["after"]["label"]}} was detected.\'\n          data:\n            image: \'https://your.public.hass.address.com/api/frigate/notifications/{{trigger.payload_json["after"]["id"]}}/thumbnail.jpg?format=android\'\n            tag: \'{{trigger.payload_json["after"]["id"]}}\'\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"automation:\n  - alias: When a person enters a zone named yard\n    trigger:\n      platform: mqtt\n      topic: frigate/events\n    condition:\n      - \"{{ trigger.payload_json['after']['label'] == 'person' }}\"\n      - \"{{ 'yard' in trigger.payload_json['after']['entered_zones'] }}\"\n    action:\n      - service: notify.mobile_app_pixel_3\n        data_template:\n          message: \"A {{trigger.payload_json['after']['label']}} has entered the yard.\"\n          data:\n            image: \"https://url.com/api/frigate/notifications/{{trigger.payload_json['after']['id']}}/thumbnail.jpg\"\n            tag: \"{{trigger.payload_json['after']['id']}}\"\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- alias: When a person leaves a zone named yard\n  trigger:\n    platform: mqtt\n    topic: frigate/events\n  condition:\n    - \"{{ trigger.payload_json['after']['label'] == 'person' }}\"\n    - \"{{ 'yard' in trigger.payload_json['before']['current_zones'] }}\"\n    - \"{{ not 'yard' in trigger.payload_json['after']['current_zones'] }}\"\n  action:\n    - service: notify.mobile_app_pixel_3\n      data_template:\n        message: \"A {{trigger.payload_json['after']['label']}} has left the yard.\"\n        data:\n          image: \"https://url.com/api/frigate/notifications/{{trigger.payload_json['after']['id']}}/thumbnail.jpg\"\n          tag: \"{{trigger.payload_json['after']['id']}}\"\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- alias: Notify for dogs in the front with a high top score\n  trigger:\n    platform: mqtt\n    topic: frigate/events\n  condition:\n    - \"{{ trigger.payload_json['after']['label'] == 'dog' }}\"\n    - \"{{ trigger.payload_json['after']['camera'] == 'front' }}\"\n    - \"{{ trigger.payload_json['after']['top_score'] > 0.98 }}\"\n  action:\n    - service: notify.mobile_app_pixel_3\n      data_template:\n        message: 'High confidence dog detection.'\n        data:\n          image: \"https://url.com/api/frigate/notifications/{{trigger.payload_json['after']['id']}}/thumbnail.jpg\"\n          tag: \"{{trigger.payload_json['after']['id']}}\"\n")),Object(r.b)("p",null,"If you are using telegram, you can fetch the image directly from Frigate:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'automation:\n  - alias: Notify of events\n    trigger:\n      platform: mqtt\n      topic: frigate/events\n    action:\n      - service: notify.telegram_full\n        data_template:\n          message: \'A {{trigger.payload_json["after"]["label"]}} was detected.\'\n          data:\n            photo:\n              # this url should work for addon users\n              - url: \'http://ccab4aaf-frigate:5000/api/events/{{trigger.payload_json["after"]["id"]}}/thumbnail.jpg\'\n                caption: \'A {{trigger.payload_json["after"]["label"]}} was detected on {{ trigger.payload_json["after"]["camera"] }} camera\'\n')))}p.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},f=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(a),d=n,g=f["".concat(o,".").concat(d)]||f[d]||b[d]||r;return a?i.a.createElement(g,s(s({ref:t},c),{},{components:a})):i.a.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);