(this["webpackJsonpforex-clock"]=this["webpackJsonpforex-clock"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(5),i=t.n(o),l=(t(15),t(6)),c=t(7),u=t(9),m=t(8),s=t(1),p=t.n(s),E=t(2);t(19);var v=function(e){return r.a.createElement("div",{className:"session-grid-header-cell "+(e.currentHour?"current-hour":"")},e.hour)};t(20);var A=function(e){return r.a.createElement("div",{className:"session-grid-header"},function(e){for(var a=[],t=0;t<24;t++)a.push(r.a.createElement(v,{key:t,hour:t,currentHour:t===e}));return a}(e.currentHour))};function d(e,a){return e.map((function(e){return function(e,a){var t=p.a.tz.zone(a).utcOffset(p()())/60;if(t<0)for(var n=0;n<-1*t;n++)e=++e>23?0:e;else if(t>0)for(var r=0;r<t;r++)e=--e<0?23:e;return e}(e,a)}))}function f(e){return p()().tz(e).hour()}t(21);var h=function(e){return r.a.createElement("div",{className:"session-grid-cell "+(e.currentHour?"current-hour ":"")},"\xa0\xa0",r.a.createElement("div",{className:"session-grid-cell-inner "+(e.marketClosed?"market-closed ":"")+(e.sessionOpen?"session-open ":"")+(e.firstHour?"first-hour ":"")+(e.lastHour?"last-hour ":"")}))};t(22);function g(e,a){var t=p()().tz(e).hour(a).tz("UTC");return 6===t.day()||(5===t.day()&&t.hour()>=21||0===t.day()&&t.hour()<21)}var k=function(e){return r.a.createElement("div",{className:"session-grid-row "+e.theme},function(e){for(var a=[],t=0;t<24;t++)a.push(r.a.createElement(h,{key:t,currentHour:e.currentHour===t,firstHour:e.hours[0]===t,lastHour:e.hours[e.hours.length-1]===t,marketClosed:g(e.timezone,t),sessionOpen:e.hours.includes(t)}));return a}(e),r.a.createElement("span",{className:"session-name"},e.name))};t(23);var b=function(e){return r.a.createElement("div",{className:"clock"},r.a.createElement("div",null,"Local time:"," ",p()().tz(e.timezone).format("dddd, MMMM Do YYYY, h:mm:ss a")),r.a.createElement("div",null,"UTC: ",p()().utc().format("dddd, MMMM Do YYYY, h:mm:ss a")))};function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function M(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var z=r.a.createElement("path",{fillRule:"evenodd",d:"M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z",clipRule:"evenodd"}),P=function(e){var a=e.svgRef,t=e.title,n=M(e,["svgRef","title"]);return r.a.createElement("svg",y({className:"bi bi-moon",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"#212121",ref:a},n),t?r.a.createElement("title",null,t):null,z)},C=r.a.forwardRef((function(e,a){return r.a.createElement(P,y({svgRef:a},e))}));t.p;function w(){return(w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function H(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var O=r.a.createElement("path",{d:"M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"}),S=r.a.createElement("path",{fillRule:"evenodd",d:"M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z",clipRule:"evenodd"}),_=function(e){var a=e.svgRef,t=e.title,n=H(e,["svgRef","title"]);return r.a.createElement("svg",w({className:"bi bi-sun",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"#FAFAFA",ref:a},n),t?r.a.createElement("title",null,t):null,O,S)},j=r.a.forwardRef((function(e,a){return r.a.createElement(_,w({svgRef:a},e))}));t.p,t(24);var T=function(e){var a;return a=e.darkModeEnabled?r.a.createElement(j,{title:"Disable dark mode"}):r.a.createElement(C,{title:"Enable dark mode"}),r.a.createElement("button",{type:"button",className:"dark-mode-button",onClick:e.onChangeDarkMode},a)};t(25);var D=function(e){return r.a.createElement("select",{className:"timezone-select",title:"Select a timezone",value:e.timezone,onChange:e.onChangeTimezone},r.a.createElement("option",{value:"Africa/Abidjan"},"Africa/Abidjan"),r.a.createElement("option",{value:"Africa/Cairo"},"Africa/Cairo"),r.a.createElement("option",{value:"Africa/Johannesburg"},"Africa/Johannesburg"),r.a.createElement("option",{value:"Africa/Lagos"},"Africa/Lagos"),r.a.createElement("option",{value:"Africa/Maputo"},"Africa/Maputo"),r.a.createElement("option",{value:"Africa/Nairobi"},"Africa/Nairobi"),r.a.createElement("option",{value:"Africa/Tripoli"},"Africa/Tripoli"),r.a.createElement("option",{value:"America/Adak"},"America/Adak"),r.a.createElement("option",{value:"America/Anchorage"},"America/Anchorage"),r.a.createElement("option",{value:"America/Argentina/Buenos_Aires"},"America/Argentina/Buenos_Aires"),r.a.createElement("option",{value:"America/Atikokan"},"America/Atikokan"),r.a.createElement("option",{value:"America/Cancun"},"America/Cancun"),r.a.createElement("option",{value:"America/Chicago"},"America/Chicago"),r.a.createElement("option",{value:"America/Curacao"},"America/Curacao"),r.a.createElement("option",{value:"America/Denver"},"America/Denver"),r.a.createElement("option",{value:"America/Detroit"},"America/Detroit"),r.a.createElement("option",{value:"America/Edmonton"},"America/Edmonton"),r.a.createElement("option",{value:"America/Halifax"},"America/Halifax"),r.a.createElement("option",{value:"America/Havana"},"America/Havana"),r.a.createElement("option",{value:"America/Indiana/Indianapolis"},"America/Indiana/Indianapolis"),r.a.createElement("option",{value:"America/Jamaica"},"America/Jamaica"),r.a.createElement("option",{value:"America/Kentucky/Louisville"},"America/Kentucky/Louisville"),r.a.createElement("option",{value:"America/Los_Angeles"},"America/Los_Angeles"),r.a.createElement("option",{value:"America/Manaus"},"America/Manaus"),r.a.createElement("option",{value:"America/Mazatlan"},"America/Mazatlan"),r.a.createElement("option",{value:"America/Mexico_City"},"America/Mexico_City"),r.a.createElement("option",{value:"America/New_York"},"America/New_York"),r.a.createElement("option",{value:"America/Noronha"},"America/Noronha"),r.a.createElement("option",{value:"America/Panama"},"America/Panama"),r.a.createElement("option",{value:"America/Phoenix"},"America/Phoenix"),r.a.createElement("option",{value:"America/Port_of_Spain"},"America/Port_of_Spain"),r.a.createElement("option",{value:"America/Regina"},"America/Regina"),r.a.createElement("option",{value:"America/Rio_Branco"},"America/Rio_Branco"),r.a.createElement("option",{value:"America/Santiago"},"America/Santiago"),r.a.createElement("option",{value:"America/Sao_Paulo"},"America/Sao_Paulo"),r.a.createElement("option",{value:"America/St_Johns"},"America/St_Johns"),r.a.createElement("option",{value:"America/Tijuana"},"America/Tijuana"),r.a.createElement("option",{value:"America/Toronto"},"America/Toronto"),r.a.createElement("option",{value:"America/Vancouver"},"America/Vancouver"),r.a.createElement("option",{value:"America/Whitehorse"},"America/Whitehorse"),r.a.createElement("option",{value:"America/Winnipeg"},"America/Winnipeg"),r.a.createElement("option",{value:"Asia/Ashgabat"},"Asia/Ashgabat"),r.a.createElement("option",{value:"Asia/Bangkok"},"Asia/Bangkok"),r.a.createElement("option",{value:"Asia/Dhaka"},"Asia/Dhaka"),r.a.createElement("option",{value:"Asia/Dubai"},"Asia/Dubai"),r.a.createElement("option",{value:"Asia/Ho_Chi_Minh"},"Asia/Ho_Chi_Minh"),r.a.createElement("option",{value:"Asia/Jerusalem"},"Asia/Jerusalem"),r.a.createElement("option",{value:"Asia/Kathmandu"},"Asia/Kathmandu"),r.a.createElement("option",{value:"Asia/Kolkata"},"Asia/Kolkata"),r.a.createElement("option",{value:"Asia/Macau"},"Asia/Macau"),r.a.createElement("option",{value:"Asia/Makassar"},"Asia/Makassar"),r.a.createElement("option",{value:"Asia/Riyadh"},"Asia/Riyadh"),r.a.createElement("option",{value:"Asia/Seoul"},"Asia/Seoul"),r.a.createElement("option",{value:"Asia/Shanghai"},"Asia/Shanghai"),r.a.createElement("option",{value:"Asia/Singapore"},"Asia/Singapore"),r.a.createElement("option",{value:"Asia/Taipei"},"Asia/Taipei"),r.a.createElement("option",{value:"Asia/Tehran"},"Asia/Tehran"),r.a.createElement("option",{value:"Asia/Thimphu"},"Asia/Thimphu"),r.a.createElement("option",{value:"Asia/Tokyo"},"Asia/Tokyo"),r.a.createElement("option",{value:"Asia/Ulaanbaatar"},"Asia/Ulaanbaatar"),r.a.createElement("option",{value:"Asia/Urumqi"},"Asia/Urumqi"),r.a.createElement("option",{value:"Asia/Yangon"},"Asia/Yangon"),r.a.createElement("option",{value:"Atlantic/Azores"},"Atlantic/Azores"),r.a.createElement("option",{value:"Atlantic/Cape_Verde"},"Atlantic/Cape_Verde"),r.a.createElement("option",{value:"Atlantic/Faroe"},"Atlantic/Faroe"),r.a.createElement("option",{value:"Atlantic/Reykjavik"},"Atlantic/Reykjavik"),r.a.createElement("option",{value:"Australia/Adelaide"},"Australia/Adelaide"),r.a.createElement("option",{value:"Australia/Brisbane"},"Australia/Brisbane"),r.a.createElement("option",{value:"Australia/Broken_Hill"},"Australia/Broken_Hill"),r.a.createElement("option",{value:"Australia/Darwin"},"Australia/Darwin"),r.a.createElement("option",{value:"Australia/Hobart"},"Australia/Hobart"),r.a.createElement("option",{value:"Australia/Lord_Howe"},"Australia/Lord_Howe"),r.a.createElement("option",{value:"Australia/Melbourne"},"Australia/Melbourne"),r.a.createElement("option",{value:"Australia/Perth"},"Australia/Perth"),r.a.createElement("option",{value:"Australia/Sydney"},"Australia/Sydney"),r.a.createElement("option",{value:"Europe/Belgrade"},"Europe/Belgrade"),r.a.createElement("option",{value:"Europe/Chisinau"},"Europe/Chisinau"),r.a.createElement("option",{value:"Europe/Dublin"},"Europe/Dublin"),r.a.createElement("option",{value:"Europe/Helsinki"},"Europe/Helsinki"),r.a.createElement("option",{value:"Europe/Istanbul"},"Europe/Istanbul"),r.a.createElement("option",{value:"Europe/London"},"Europe/London"),r.a.createElement("option",{value:"Europe/Moscow"},"Europe/Moscow"),r.a.createElement("option",{value:"Europe/Oslo"},"Europe/Oslo"),r.a.createElement("option",{value:"Europe/Prague"},"Europe/Prague"),r.a.createElement("option",{value:"Europe/Rome"},"Europe/Rome"),r.a.createElement("option",{value:"Europe/Warsaw"},"Europe/Warsaw"),r.a.createElement("option",{value:"Europe/Zurich"},"Europe/Zurich"),r.a.createElement("option",{value:"Pacific/Auckland"},"Pacific/Auckland"),r.a.createElement("option",{value:"Pacific/Chatham"},"Pacific/Chatham"),r.a.createElement("option",{value:"Pacific/Chuuk"},"Pacific/Chuuk"),r.a.createElement("option",{value:"Pacific/Easter"},"Pacific/Easter"),r.a.createElement("option",{value:"Pacific/Enderbury"},"Pacific/Enderbury"),r.a.createElement("option",{value:"Pacific/Gambier"},"Pacific/Gambier"),r.a.createElement("option",{value:"Pacific/Guam"},"Pacific/Guam"),r.a.createElement("option",{value:"Pacific/Honolulu"},"Pacific/Honolulu"),r.a.createElement("option",{value:"Pacific/Kiritimati"},"Pacific/Kiritimati"),r.a.createElement("option",{value:"Pacific/Kwajalein"},"Pacific/Kwajalein"),r.a.createElement("option",{value:"Pacific/Marquesas"},"Pacific/Marquesas"),r.a.createElement("option",{value:"Pacific/Pago_Pago"},"Pacific/Pago_Pago"),r.a.createElement("option",{value:"Pacific/Pohnpei"},"Pacific/Pohnpei"))};t(26);var N,R=function(e){return r.a.createElement("div",{className:"session-grid-footer"},r.a.createElement(b,{timezone:e.timezone}),r.a.createElement(D,{onChangeTimezone:e.onChangeTimezone,timezone:e.timezone}),r.a.createElement(T,{darkModeEnabled:e.darkModeEnabled,onChangeDarkMode:e.onChangeDarkMode}))},L=(t(27),N={},Object(E.a)(N,"London",[7,8,9,10,11,12,13,14,15]),Object(E.a)(N,"New York",[12,13,14,15,16,17,18,19,20]),Object(E.a)(N,"Sydney",[21,22,23,0,1,2,3,4,5]),Object(E.a)(N,"Tokyo",[23,0,1,2,3,4,5,6,7]),N);function B(e,a){return d(L[e],a)}var x=function(e){return r.a.createElement("div",{className:"session-grid"},r.a.createElement(A,{currentHour:e.currentHour}),r.a.createElement(k,{currentHour:e.currentHour,name:"London",hours:B("London",e.timezone),theme:"green",timezone:e.timezone}),r.a.createElement(k,{currentHour:e.currentHour,name:"New York",hours:B("New York",e.timezone),theme:"orange",timezone:e.timezone}),r.a.createElement(k,{currentHour:e.currentHour,name:"Sydney",hours:B("Sydney",e.timezone),theme:"blue",timezone:e.timezone}),r.a.createElement(k,{currentHour:e.currentHour,name:"Tokyo",hours:B("Tokyo",e.timezone),theme:"yellow",timezone:e.timezone}),r.a.createElement(R,{darkModeEnabled:e.darkModeEnabled,onChangeDarkMode:e.onChangeDarkMode,onChangeTimezone:e.onChangeTimezone,timezone:e.timezone}))},I=(t(28),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).onChangeDarkMode=function(){e.setState((function(e){return window.localStorage.setItem("darkModeEnabled",!e.darkModeEnabled),{darkModeEnabled:!e.darkModeEnabled}}))},e.onChangeTimezone=function(a){var t=a.target.value;e.setState({currentHour:f(t),timezone:t})},e.state={darkModeEnabled:"true"===window.localStorage.getItem("darkModeEnabled"),timezone:p.a.tz.guess()},e.state.currentHour=f(e.state.timezone),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.setState((function(e){return{currentHour:f(e.timezone)}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app "+(this.state.darkModeEnabled?"dark-mode":"")},r.a.createElement(x,{currentHour:this.state.currentHour,darkModeEnabled:this.state.darkModeEnabled,onChangeDarkMode:this.onChangeDarkMode,onChangeTimezone:this.onChangeTimezone,timezone:this.state.timezone}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f850b721.chunk.js.map