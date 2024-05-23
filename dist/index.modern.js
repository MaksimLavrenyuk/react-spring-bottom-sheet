import*as e from"@radix-ui/react-portal";import n,{useRef as t,useDebugValue as r,useEffect as a,useLayoutEffect as o,useState as i,useCallback as c,useMemo as s,useImperativeHandle as l,forwardRef as u}from"react";import{useMachine as d}from"@xstate/react";import{useSpring as p,interpolate as y,animated as g,config as m}from"react-spring";import{useDrag as v,rubberbandIfOutOfBounds as S}from"react-use-gesture";import{createFocusTrap as f}from"focus-trap";import{disableBodyScroll as h,enableBodyScroll as E}from"body-scroll-lock";import{ResizeObserver as b}from"@juggle/resize-observer";import{Machine as R,assign as w}from"xstate";function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(a[t]=e[t]);return a}const O="undefined"!=typeof window?o:a;function N(e,n,t){return n=(n=+n)==n?n:0,t=(t=+t)==t?t:0,(e=+e)==e&&(e=(e=e<=t?e:t)>=n?e:n),e}function H(e){const n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}const D={box:"border-box"};function k(e,{label:n,enabled:t,resizeSourceRef:a}){let[o,s]=i(0);r(`${n}: ${o}`);const l=c(e=>{s(e[0].borderBoxSize[0].blockSize),a.current="element"},[a]);return O(()=>{if(!e.current||!t)return;const n=new b(l);return n.observe(e.current,D),()=>{n.disconnect()}},[e,l,t]),t?o:0}function z(e=1e3){return new Promise(n=>setTimeout(n,e))}const P={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},A={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},L=R({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:x({},P,A)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:x({},P,A)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:x({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[w({y:(e,{payload:{y:n}})=>n,velocity:(e,{payload:{velocity:n}})=>n,snapSource:(e,{payload:{source:n="custom"}})=>n})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:(e,n)=>{},onSnapCancel:(e,n)=>{},onResizeCancel:(e,n)=>{},onCloseCancel:(e,n)=>{},onOpenEnd:(e,n)=>{},onSnapEnd:(e,n)=>{},onRezizeEnd:(e,n)=>{}},services:{onSnapStart:async()=>{await z()},onOpenStart:async()=>{await z()},onCloseStart:async()=>{await z()},onResizeStart:async()=>{await z()},onSnapEnd:async()=>{await z()},onOpenEnd:async()=>{await z()},onCloseEnd:async()=>{await z()},onResizeEnd:async()=>{await z()},renderVisuallyHidden:async(e,n)=>{await z()},activate:async(e,n)=>{await z()},deactivate:async(e,n)=>{await z()},openSmoothly:async(e,n)=>{await z()},openImmediately:async(e,n)=>{await z()},snapSmoothly:async(e,n)=>{await z()},resizeSmoothly:async(e,n)=>{await z()},closeSmoothly:async(e,n)=>{await z()}},guards:{initiallyClosed:({initialState:e})=>"CLOSED"===e,initiallyOpen:({initialState:e})=>"OPEN"===e}}),T=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","expandOnContentDrag","springConfig"],M=["velocity"],I=["onRest","config"],{tension:F,friction:G}=m.default,Z=n.forwardRef(function(e,o){let{children:u,sibling:m,className:b,footer:R,header:w,open:D,initialState:z,lastSnapRef:P,initialFocusRef:A,onDismiss:Z,maxHeight:q,defaultSnap:V=$,snapPoints:K=j,blocking:J=!0,scrollLocking:Q=!0,style:U,onSpringStart:W,onSpringCancel:X,onSpringEnd:Y,reserveScrollBarGap:_=J,expandOnContentDrag:ee=!1,springConfig:ne}=e,te=C(e,T);const{ready:re,registerReady:ae}=function(){const[e,n]=i(!1),[t,r]=i({}),o=c(e=>(r(n=>x({},n,{[e]:!1})),()=>{r(n=>x({},n,{[e]:!0}))}),[]);return a(()=>{const e=Object.values(t);0!==e.length&&e.every(Boolean)&&n(!0)},[t]),{ready:e,registerReady:o}}(),oe=t(!1),ie=t(W),ce=t(X),se=t(Y);a(()=>{ie.current=W,ce.current=X,se.current=Y},[X,W,Y]);const[le,ue]=p(()=>({y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0})),de=t(null),pe=t(null),ye=t(null),ge=t(null),me=t(null),ve=t(null),Se=t(0),fe=t(),he=t(!1),Ee=function(){const e=s(()=>"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null,[]),n=t(null==e?void 0:e.matches);return r(n.current?"reduce":"no-preference"),a(()=>{const t=e=>{n.current=e.matches};return null==e||e.addListener(t),()=>null==e?void 0:e.removeListener(t)},[e]),n}(),be=function({targetRef:e,enabled:n,reserveScrollBarGap:o}){const i=t({activate:()=>{throw new TypeError("Tried to activate scroll lock too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),a(()=>{if(!n)return i.current.deactivate(),void(i.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1;i.current={activate:()=>{r||(r=!0,h(t,{allowTouchMove:e=>e.closest("[data-body-scroll-lock-ignore]"),reserveScrollBarGap:o}))},deactivate:()=>{r&&(r=!1,E(t))}}},[n,e,o]),i}({targetRef:pe,enabled:re&&Q,reserveScrollBarGap:_}),Re=function({targetRef:e,enabled:n}){const o=t({activate:()=>{throw new TypeError("Tried to activate aria hider too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),a(()=>{if(!n)return o.current.deactivate(),void(o.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1,a=[],i=[];o.current={activate:()=>{if(r)return;r=!0;const e=t.parentNode;document.querySelectorAll("body > *").forEach(n=>{if(n===e)return;let t=n.getAttribute("aria-hidden");null!==t&&"false"!==t||(a.push(t),i.push(n),n.setAttribute("aria-hidden","true"))})},deactivate:()=>{r&&(r=!1,i.forEach((e,n)=>{let t=a[n];null===t?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t)}),a=[],i=[])}}},[e,n]),o}({targetRef:de,enabled:re&&J}),we=function({targetRef:e,fallbackRef:n,initialFocusRef:o,enabled:i}){const c=t({activate:()=>{throw new TypeError("Tried to activate focus trap too early")},deactivate:()=>{}});return r(i?"Enabled":"Disabled"),a(()=>{if(!i)return c.current.deactivate(),void(c.current={activate:()=>{},deactivate:()=>{}});const t=n.current,r=f(e.current,{onActivate:void 0,initialFocus:o?()=>(null==o?void 0:o.current)||t:void 0,fallbackFocus:t,escapeDeactivates:!1,clickOutsideDeactivates:!1});let a=!1;c.current={activate:async()=>{a||(a=!0,await r.activate(),await new Promise(e=>setTimeout(()=>e(void 0),0)))},deactivate:()=>{a&&(a=!1,r.deactivate())}}},[i,n,o,e]),c}({targetRef:de,fallbackRef:ve,initialFocusRef:A||void 0,enabled:re&&J&&!1!==A}),{minSnap:xe,maxSnap:Ce,maxHeight:Oe,findSnap:Ne}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,getSnapPoints:l,headerEnabled:u,headerRef:d,heightRef:p,lastSnapRef:y,ready:g,registerReady:m,resizeSourceRef:v}){const{maxHeight:S,minHeight:f,headerHeight:h,footerHeight:E}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,headerEnabled:l,headerRef:u,registerReady:d,resizeSourceRef:p}){const y=s(()=>d("contentHeight"),[d]),g=function(e,n,o){const c=s(()=>n("maxHeight"),[n]),[l,u]=i(()=>H(e)||"undefined"!=typeof window?window.innerHeight:0),d=l>0,p=t(0);return r(e?"controlled":"auto"),a(()=>{d&&c()},[d,c]),O(()=>{if(e)return u(H(e)),void(o.current="maxheightprop");const n=()=>{p.current||(p.current=requestAnimationFrame(()=>{u(window.innerHeight),o.current="window",p.current=0}))};return window.addEventListener("resize",n),u(window.innerHeight),o.current="window",c(),()=>{window.removeEventListener("resize",n),cancelAnimationFrame(p.current)}},[e,c,o]),l}(n,d,p),m=k(u,{label:"headerHeight",enabled:l,resizeSourceRef:p}),v=k(e,{label:"contentHeight",enabled:!0,resizeSourceRef:p}),S=k(c,{label:"footerHeight",enabled:o,resizeSourceRef:p}),f=Math.min(g-m-S,v)+m+S;r(`minHeight: ${f}`);const h=v>0;return a(()=>{h&&y()},[h,y]),{maxHeight:g,minHeight:f,headerHeight:m,footerHeight:S}}({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,headerEnabled:u,headerRef:d,registerReady:m,resizeSourceRef:v}),{snapPoints:b,minSnap:R,maxSnap:w}=function(e,n){const t=[].concat(e).map(H).reduce((e,t)=>(e.add(N(t,0,n)),e),new Set),r=Array.from(t),a=Math.min(...r);if(Number.isNaN(a))throw new TypeError("minSnap is NaN");const o=Math.max(...r);if(Number.isNaN(o))throw new TypeError("maxSnap is NaN");return{snapPoints:r,minSnap:a,maxSnap:o}}(g?l({height:p.current,footerHeight:E,headerHeight:h,minHeight:f,maxHeight:S}):[0],S);return r(`minSnap: ${R}, maxSnap:${w}`),{minSnap:R,maxSnap:w,findSnap:function(e){let n;n="function"==typeof e?e({footerHeight:E,headerHeight:h,height:p.current,minHeight:f,maxHeight:S,snapPoints:b,lastSnap:y.current}):e;const t=H(n);return b.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e,R)},maxHeight:S}}({contentRef:ye,controlledMaxHeight:q,footerEnabled:!!R,footerRef:me,getSnapPoints:K,headerEnabled:!1!==w,headerRef:ge,heightRef:Se,lastSnapRef:P,ready:re,registerReady:ae,resizeSourceRef:fe}),He=t(Oe),De=t(xe),ke=t(Ce),ze=t(Ne),Pe=t(0);O(()=>{He.current=Oe,ke.current=Ce,De.current=xe,ze.current=Ne,Pe.current=Ne(V)},[Ne,V,Oe,Ce,xe]);const Ae=c(e=>{let{onRest:n,config:{velocity:t=1}={}}=e,r=C(e.config,M),a=C(e,I);return new Promise(e=>ue(x({},a,{config:x({velocity:t},r,{mass:1,tension:F,friction:Math.max(G,G+(G-G*t))},ne),onRest:(...t)=>{e(...t),null==n||n(...t)}})))},[ue,ne]),[Le,Te]=d(L,{devTools:!1,actions:{onOpenCancel:c(()=>null==ce.current?void 0:ce.current({type:"OPEN"}),[]),onSnapCancel:c(e=>null==ce.current?void 0:ce.current({type:"SNAP",source:e.snapSource}),[]),onCloseCancel:c(()=>null==ce.current?void 0:ce.current({type:"CLOSE"}),[]),onResizeCancel:c(()=>null==ce.current?void 0:ce.current({type:"RESIZE",source:fe.current}),[]),onOpenEnd:c(()=>null==se.current?void 0:se.current({type:"OPEN"}),[]),onSnapEnd:c((e,n)=>null==se.current?void 0:se.current({type:"SNAP",source:e.snapSource}),[]),onResizeEnd:c(()=>null==se.current?void 0:se.current({type:"RESIZE",source:fe.current}),[])},context:{initialState:z},services:{onSnapStart:c(async(e,n)=>null==ie.current?void 0:ie.current({type:"SNAP",source:n.payload.source||"custom"}),[]),onOpenStart:c(async()=>null==ie.current?void 0:ie.current({type:"OPEN"}),[]),onCloseStart:c(async()=>null==ie.current?void 0:ie.current({type:"CLOSE"}),[]),onResizeStart:c(async()=>null==ie.current?void 0:ie.current({type:"RESIZE",source:fe.current}),[]),onSnapEnd:c(async(e,n)=>null==se.current?void 0:se.current({type:"SNAP",source:e.snapSource}),[]),onOpenEnd:c(async()=>null==se.current?void 0:se.current({type:"OPEN"}),[]),onCloseEnd:c(async()=>null==se.current?void 0:se.current({type:"CLOSE"}),[]),onResizeEnd:c(async()=>null==se.current?void 0:se.current({type:"RESIZE",source:fe.current}),[]),renderVisuallyHidden:c(async(e,n)=>{await Ae({y:Pe.current,ready:0,maxHeight:He.current,maxSnap:ke.current,minSnap:Pe.current,immediate:!0})},[Ae]),activate:c(async(e,n)=>{oe.current=!0,await Promise.all([be.current.activate(),we.current.activate(),Re.current.activate()])},[Re,we,be]),deactivate:c(async()=>{be.current.deactivate(),we.current.deactivate(),Re.current.deactivate(),oe.current=!1},[Re,we,be]),openImmediately:c(async()=>{Se.current=Pe.current,await Ae({y:Pe.current,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:Pe.current,immediate:!0})},[Ae]),openSmoothly:c(async()=>{await Ae({y:0,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:Pe.current,immediate:!0}),Se.current=Pe.current,await Ae({y:Pe.current,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:Pe.current,immediate:Ee.current})},[Ae,Ee]),snapSmoothly:c(async(e,n)=>{const t=ze.current(e.y);Se.current=t,P.current=t,await Ae({y:t,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:De.current,immediate:Ee.current,config:{velocity:e.velocity}})},[Ae,P,Ee]),resizeSmoothly:c(async()=>{const e=ze.current(Se.current);Se.current=e,P.current=e,await Ae({y:e,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:De.current,immediate:"element"!==fe.current||Ee.current})},[Ae,P,Ee]),closeSmoothly:c(async(e,n)=>{Ae({minSnap:Se.current,immediate:!0}),Se.current=0,await Ae({y:0,maxHeight:He.current,maxSnap:ke.current,immediate:Ee.current}),await Ae({ready:0,immediate:!0})},[Ae,Ee])}});a(()=>{re&&Te(D?"OPEN":"CLOSE")},[D,Te,re]),O(()=>{(Oe||Ce||xe)&&Te("RESIZE")},[Oe,Ce,xe,Te]),a(()=>()=>{be.current.deactivate(),we.current.deactivate(),Re.current.deactivate()},[Re,we,be]),l(o,()=>({snapTo:(e,{velocity:n=1,source:t="custom"}={})=>{Te("SNAP",{payload:{y:ze.current(e),velocity:n,source:t}})},get height(){return Se.current}}),[Te]),a(()=>{const e=pe.current,n=e=>{he.current&&e.cancelable&&e.preventDefault()},t=n=>{e.scrollTop<0&&(requestAnimationFrame(()=>{e.style.overflow="hidden",e.scrollTop=0,e.style.removeProperty("overflow")}),n.cancelable&&n.preventDefault())};return ee&&(e.addEventListener("scroll",n),e.addEventListener("touchmove",n),e.addEventListener("touchstart",t)),()=>{e.removeEventListener("scroll",n),e.removeEventListener("touchmove",n),e.removeEventListener("touchstart",t)}},[ee,pe]);const Me=v(({args:[{closeOnTap:e=!1,isContentDragging:n=!1}={}]=[],cancel:t,direction:[,r],down:a,first:o,last:i,memo:c=le.y.getValue(),movement:[,s],tap:l,velocity:u})=>{const d=-1*s;if(!oe.current)return t(),c;if(Z&&e&&l)return t(),setTimeout(()=>Z(),0),c;if(l)return c;const p=c+d,y=d*u,g=Math.max(De.current,Math.min(ke.current,p+2*y));if(!a&&Z&&r>0&&p+y<De.current/2)return t(),Z(),c;let m=a?Z||De.current!==ke.current?S(p,Z?0:De.current,ke.current,.55):p<De.current?S(p,De.current,2*ke.current,.55):S(p,De.current/2,ke.current,.55):g;return ee&&n?(m>=ke.current&&(m=ke.current),c===ke.current&&pe.current.scrollTop>0&&(m=ke.current),he.current=m<ke.current):he.current=!1,o&&Te("DRAG"),i?(Te("SNAP",{payload:{y:m,velocity:u>.05?u:1,source:"dragging"}}),c):(ue({y:m,ready:1,maxHeight:He.current,maxSnap:ke.current,minSnap:De.current,immediate:!0,config:{velocity:u}}),c)},{filterTaps:!0});if(Number.isNaN(ke.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(De.current))throw new TypeError("minSnapRef is NaN!!");const Ie=function({spring:e}){const n=y([e.y,e.maxHeight],(e,n)=>`${Math.round(N(n-e,0,16))}px`),t=y([e.y,e.minSnap,e.maxSnap],(e,n,t)=>`${N(e,n,t)}px`),r=y([e.y,e.minSnap,e.maxSnap],(e,n,t)=>e<n?n-e+"px":e>t?t-e+"px":"0px"),a=y([e.y,e.maxSnap],(e,n)=>e>=n?Math.ceil(e-n):0);return{"--rsbs-content-opacity":y([e.y,e.minSnap],(e,n)=>{if(!n)return 0;const t=Math.max(n/2-45,0);return N((e-t)*(1/(Math.min(n/2+45,n)-t)+0),0,1)}),"--rsbs-backdrop-opacity":y([e.y,e.minSnap],(e,n)=>n?N(e/n,0,1):0),"--rsbs-antigap-scale-y":a,"--rsbs-overlay-translate-y":r,"--rsbs-overlay-rounded":n,"--rsbs-overlay-h":t}}({spring:le});/*#__PURE__*/return n.createElement(g.div,x({},te,{"data-rsbs-root":!0,"data-rsbs-state":B.find(Le.matches),"data-rsbs-is-blocking":J,"data-rsbs-is-dismissable":!!Z,"data-rsbs-has-header":!!w,"data-rsbs-has-footer":!!R,className:b,ref:de,style:x({},Ie,U,{opacity:le.ready})}),m,J&&/*#__PURE__*/n.createElement("div",x({key:"backdrop","data-rsbs-backdrop":!0},Me({closeOnTap:!0}))),/*#__PURE__*/n.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:ve,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),Z&&Z())}},!1!==w&&/*#__PURE__*/n.createElement("div",x({key:"header","data-rsbs-header":!0,ref:ge},Me()),w),/*#__PURE__*/n.createElement("div",x({key:"scroll","data-rsbs-scroll":!0,ref:pe},ee?Me({isContentDragging:!0}):{}),/*#__PURE__*/n.createElement("div",{"data-rsbs-content":!0,ref:ye},u)),R&&/*#__PURE__*/n.createElement("div",x({key:"footer",ref:me,"data-rsbs-footer":!0},Me()),R)))}),B=["closed","opening","open","closing","dragging","snapping","resizing"];function $({snapPoints:e,lastSnap:n}){return null!=n?n:Math.min(...e)}function j({minHeight:e}){return e}const q=["onSpringStart","onSpringEnd","skipInitialTransition"],V=u(function(r,a){let{onSpringStart:o,onSpringEnd:s,skipInitialTransition:l}=r,u=C(r,q);const[d,p]=i(!1),y=t(),g=t(null),m=t(l&&u.open?"OPEN":"CLOSED");O(()=>{if(u.open)return cancelAnimationFrame(y.current),p(!0),()=>{m.current="CLOSED"}},[u.open]);const v=c(async function(e){await(null==o?void 0:o(e)),"OPEN"===e.type&&cancelAnimationFrame(y.current)},[o]),S=c(async function(e){await(null==s?void 0:s(e)),"CLOSE"===e.type&&(y.current=requestAnimationFrame(()=>p(!1)))},[s]);return d?/*#__PURE__*/n.createElement(e.Root,{"data-rsbs-portal":!0},/*#__PURE__*/n.createElement(Z,x({},u,{lastSnapRef:g,ref:a,initialState:m.current,onSpringStart:v,onSpringEnd:S}))):null});export{V as BottomSheet};
//# sourceMappingURL=index.modern.js.map
