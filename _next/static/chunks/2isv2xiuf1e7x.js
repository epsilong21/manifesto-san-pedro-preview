(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,a,t)=>{"use strict";e.i(47167),Object.defineProperty(t,"__esModule",{value:!0});var r={default:function(){return b},useLinkStatus:function(){return x}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(90809),s=e.r(43476),i=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),m=e.r(5550),p=e.r(88540),f=e.r(91949),h=e.r(73668),v=e.r(9396);function b(a){var t;let r,o,n,[b,x]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,i.useRef)(null),{href:j,as:M,children:z,prefetch:w=null,passHref:C,replace:L,shallow:E,scroll:A,onClick:N,onMouseEnter:S,onTouchStart:R,legacyBehavior:q=!1,onNavigate:P,transitionTypes:F,ref:_,unstable_dynamicOnHover:U,...O}=a;r=z,q&&("string"==typeof r||"number"==typeof r)&&(r=(0,s.jsx)("a",{children:r}));let I=i.default.useContext(c.AppRouterContext),k=!1!==w,V=!1===w?"none":!0===w?"full":"auto",D="none"!==V?"auto"===V?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,T="string"==typeof(t=M||j)?t:(0,l.formatUrl)(t);if(q){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=i.default.Children.only(r)}let B=q?o&&"object"==typeof o&&o.ref:_,$,H=i.default.useCallback(e=>(null!==I&&(y.current=(0,f.mountLinkInstance)(e,T,I,D,k,x,$)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[k,T,I,D,x,$]),G={ref:(0,u.useMergedRef)(H,B),onClick(a){q||"function"!=typeof N||N(a),q&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(a),!I||a.defaultPrevented||function(a,t,r,o,n,s,i,l="none"){if("u">typeof window){let c,{nodeName:u}=a.currentTarget;if("A"===u.toUpperCase()&&((c=a.currentTarget.getAttribute("target"))&&"_self"!==c||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(t)){o&&(a.preventDefault(),location.replace(t));return}if(a.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{navigate:d}=e.r(32916);d(t,o?"replace":"push",!1===n?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,i,l)}}(a,T,y,L,A,P,F,V)},onMouseEnter(e){q||"function"!=typeof S||S(e),q&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&k&&(0,f.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){q||"function"!=typeof R||R(e),q&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&k&&(0,f.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,d.isAbsoluteUrl)(T)?G.href=T:q&&!C&&("a"!==o.type||"href"in o.props)||(G.href=(0,m.addBasePath)(T)),n=q?i.default.cloneElement(o,G):(0,s.jsx)("a",{...O,...G,children:r}),(0,s.jsx)(g.Provider,{value:b,children:n})}let g=(0,i.createContext)(f.IDLE_LINK_STATUS),x=()=>(0,i.useContext)(g);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},18581,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,a){let t=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=t.current;e&&(t.current=null,e());let a=o.current;a&&(o.current=null,a())}else e&&(t.current=n(e,r)),a&&(o.current=n(a,r))},[e,a])}function n(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let t=e(a);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},95057,(e,a,t)=>{"use strict";e.i(47167),Object.defineProperty(t,"__esModule",{value:!0});var r={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function i(e){let{auth:a,hostname:t}=e,r=e.protocol||"",o=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?c=a+e.host:t&&(c=a+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||s.test(r))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${r}${c}${o}${u}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},73668,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return n}});let r=e.r(18967),o=e.r(52817);function n(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let a=(0,r.getLocationOrigin)(),t=new URL(e,a);return t.origin===a&&(0,o.hasBasePath)(t.pathname)}catch(e){return!1}}},18967,(e,a,t)=>{"use strict";e.i(47167),Object.defineProperty(t,"__esModule",{value:!0});var r={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return x},SP:function(){return h},ST:function(){return v},WEB_VITALS:function(){return n},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return m},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return M}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=["CLS","FCP","INP","LCP","TTFB"];function s(e){let a,t=!1;return(...r)=>(t||(t=!0,a=e(...r)),a)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let a=e.charCodeAt(0);return!!(a>=65&&a<=90||a>=97&&a<=122)&&i.test(e)};function c(){let{protocol:e,hostname:a,port:t}=window.location;return`${e}//${a}${t?":"+t:""}`}function u(){let{href:e}=window.location,a=c();return e.substring(a.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function m(e){return e.finished||e.headersSent}function p(e){let a=e.split("?");return a[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?`?${a.slice(1).join("?")}`:"")}async function f(e,a){let t=a.res||a.ctx&&a.ctx.res;if(!e.getInitialProps)return a.ctx&&a.Component?{pageProps:await f(a.Component,a.ctx)}:{};let r=await e.getInitialProps(a);if(t&&m(t))return r;if(!r)throw Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let h="u">typeof performance,v=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,a){super(),this.message=`Failed to load static file for page: ${e} ${a}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function M(e){return JSON.stringify({message:e.message,stack:e.stack})}},99734,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(71645);let o=[{slug:"medusa",acento:"#b62632",numero:"01",titulo:"Medusa",corto:"Medusa",autor:"Caravaggio",anio:"hacia 1597–1598",idea:"La mirada, el miedo y la transformación",pregunta:"¿Te atreverías a sostenerle la mirada?",gesto:"Inclinar",interaccion:"Inclina el escudo. Desafía su mirada.",descripcion:"Un escudo de madera con una cabeza que grita. Muévelo, abre sus cinco expedientes y descubre por qué nadie debía mirarla de frente."},{slug:"noche-estrellada",acento:"#e0aa45",numero:"02",titulo:"La noche estrellada",corto:"La noche estrellada",autor:"Vincent van Gogh",anio:"1889",idea:"Movimiento, contemplación y naturaleza",pregunta:"¿Qué vio Van Gogh desde su ventana y qué imaginó?",gesto:"Observar",interaccion:"Observa cómo respira el cielo.",descripcion:"Un cielo que se mueve bajo tu dedo. Separa lo que el pintor observó en Saint-Rémy de lo que añadió su imaginación."},{slug:"los-elefantes",acento:"#dc9b65",numero:"03",titulo:"Los elefantes",corto:"Los elefantes",autor:"Salvador Dalí",anio:"1948",idea:"Simbolismo, contradicción, peso y fragilidad",pregunta:"¿Cómo se sostiene lo que no debería sostenerse?",gesto:"Descifrar",interaccion:"Descifra sus cinco misterios.",descripcion:"Toneladas sobre patas de alambre. Recorre la pintura en cinco capítulos: escala, equilibrio, obeliscos, peso y vacío."},{slug:"basquiat-untitled",acento:"#e8c33a",numero:"04",titulo:"Untitled",corto:"Untitled",autor:"Jean-Michel Basquiat",anio:"1981",idea:"Identidad, anatomía y ruido",pregunta:"¿Es un cráneo, un rostro o una máscara?",gesto:"Examinar",interaccion:"Examina la cabeza capa a capa.",descripcion:"Una cabeza llena de ruido. Separa sus cuatro capas, abre cinco hallazgos y decide cuál de las tres lecturas te convence.",relacionada:"glenn"},{slug:"glenn",acento:"#d9482f",numero:"05",titulo:"Glenn",corto:"Glenn",autor:"Jean-Michel Basquiat",anio:"1984–1985",idea:"Máscara, copia y archivo",pregunta:"¿Es un retrato, una máscara o un archivo?",gesto:"Ampliar",interaccion:"Amplía la máscara y fotocopia el muro.",descripcion:"Una máscara negra sobre un muro de fotocopias. Abre cinco hallazgos, separa figura y fondo, pásala por la fotocopiadora y elige entre tres lecturas.",relacionada:"basquiat-untitled"},{slug:"ascension-al-empireo",acento:"#f1d7a0",numero:"06",titulo:"La ascensión al Empíreo",corto:"El Empíreo",autor:"El Bosco",anio:"hacia 1505–1515",idea:"Luz, ascenso y tránsito",pregunta:"¿Cuánta luz hace falta para llegar?",gesto:"Subir",interaccion:"Sube estación a estación y mide la luz.",descripcion:"Un túnel de luz al final de una subida en silencio. Cinco estaciones, de abajo arriba, para ver cuánta luz tiene cada tramo."},{slug:"el-descendimiento-de-la-cruz",acento:"#c8372d",numero:"07",titulo:"El descendimiento de la cruz",corto:"El descendimiento",autor:"Peter Paul Rubens",anio:"1611–1614",idea:"Peso, diagonal y luz",pregunta:"¿Cuánto pesa la luz?",gesto:"Leer",interaccion:"Lee el cuadro por su diagonal, sus manos y su luz.",descripcion:"Un cuerpo baja sobre un paño blanco y toda la escena se ordena para sostenerlo. Tres lecturas: la línea, las manos y la luz."},{slug:"la-loca-meg",acento:"#e0793a",numero:"08",titulo:"La loca Meg",corto:"La loca Meg",autor:"Pieter Bruegel el Viejo",anio:"1563",idea:"Caos, guerra y avaricia",pregunta:"¿Dónde mirar primero?",gesto:"Recorrer",interaccion:"Recorre cinco territorios y sigue las pistas.",descripcion:"Una mujer armada avanza hacia la boca del infierno mientras el cuadro se desordena. Cinco territorios, tres pistas y un cielo recuperado."},{slug:"los-siete-pecados-capitales",acento:"#e0bb55",numero:"09",titulo:"Los siete pecados capitales",corto:"Los siete pecados",autor:"Atribuida a El Bosco",anio:"hacia 1505–1510",idea:"Vigilancia, pecado y juicio",pregunta:"¿Qué ve el ojo que todo lo ve?",gesto:"Mirar",interaccion:"Mira la mesa sector a sector, hasta el ojo.",descripcion:"Un ojo enorme, con Cristo en la pupila, vigila siete pecados y cuatro destinos. Recorre la mesa, los medallones y el ojo central."},{slug:"cristo-de-san-juan-de-la-cruz",acento:"#dcb85c",numero:"10",titulo:"Cristo de San Juan de la Cruz",corto:"Cristo de San Juan",autor:"Salvador Dalí",anio:"1951",idea:"Vértigo, perspectiva y lo divino",pregunta:"¿Desde dónde miramos?",gesto:"Entrar",interaccion:"Cambia de punto de vista y entra en el cuadro.",descripcion:"Un crucificado sin rostro flota sobre una bahía tranquila. Una perspectiva imposible, dos mundos de luz y la geometría de un núcleo."}];e.s(["ObrasMenu",0,function({actual:e}){let n=(0,r.useRef)(null),[s,i]=(0,r.useState)(!1),l=o.find(a=>a.slug===e),c=(e=!1)=>{let a=n.current;a?.open&&(a.open=!1,e&&a.querySelector("summary")?.focus())};return(0,r.useEffect)(()=>{if(!s)return;let e=e=>{let a=n.current;a&&!a.contains(e.target)&&(a.open=!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[s]),(0,a.jsxs)("details",{ref:n,className:"mf-obras",onToggle:e=>i(e.currentTarget.open),onKeyDown:e=>{"Escape"===e.key&&n.current?.open&&(e.preventDefault(),e.nativeEvent.stopImmediatePropagation(),c(!0))},onBlur:e=>{let a=e.relatedTarget;a&&!e.currentTarget.contains(a)&&c()},children:[(0,a.jsxs)("summary",{className:"mf-obras__btn",children:[l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"sr-only",children:"Obra "}),(0,a.jsxs)("span",{className:"mf-obras__n",children:[l.numero,(0,a.jsx)("span",{"aria-hidden":"true",children:" / "}),(0,a.jsx)("span",{className:"sr-only",children:" de "}),String(o.length).padStart(2,"0")]}),(0,a.jsx)("span",{className:"mf-obras__t",children:l.corto}),(0,a.jsx)("span",{className:"sr-only",children:". Cambiar de obra"})]}):(0,a.jsx)("span",{className:"mf-obras__t",children:"Las obras"}),(0,a.jsx)("span",{className:"mf-obras__ico","aria-hidden":"true"})]}),(0,a.jsxs)("nav",{className:"mf-obras__panel","aria-label":"Obras de MANIFESTO",children:[(0,a.jsx)("ol",{className:"mf-obras__lista",children:o.map(r=>(0,a.jsx)("li",{children:(0,a.jsxs)(t.default,{href:`/conceptos/${r.slug}`,prefetch:!1,className:"mf-obras__obra","data-obra":r.slug,style:{"--o-accent":r.acento},"aria-current":r.slug===e?"page":void 0,onClick:()=>c(),children:[(0,a.jsx)("span",{className:"mf-obras__num","aria-hidden":"true",children:r.numero}),(0,a.jsx)("span",{className:"mf-obras__titulo",children:r.titulo}),(0,a.jsxs)("span",{className:"mf-obras__meta",children:[r.autor,", ",r.anio]})]})},r.slug))}),(0,a.jsxs)("ul",{className:"mf-obras__extra",children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.default,{href:"/conceptos",prefetch:!1,onClick:()=>c(),children:"Ver las diez obras"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.default,{href:"/",prefetch:!1,onClick:()=>c(),children:"Portada"})})]})]})]})}],99734)},22586,e=>{"use strict";e.i(47167);var a=e.i(43476),t=e.i(71645),r=e.i(26980);e.s(["Contemplar",0,function(){let e=(0,t.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",className:"mf-btn",onClick:()=>e.current?.showModal(),children:"Contemplar"}),(0,a.jsxs)("dialog",{ref:e,className:"vd-contemp","aria-label":"Contemplación de la pintura",onClick:a=>{a.target===a.currentTarget&&e.current?.close()},children:[(0,a.jsx)("button",{type:"button",className:"vd-contemp__cerrar",onClick:()=>e.current?.close(),"aria-label":"Cerrar la contemplación",autoFocus:!0,children:"×"}),(0,a.jsx)("img",{src:`/manifesto-san-pedro-preview${r.x.base}-${r.x.anchos[1]}.webp`,width:r.x.width,height:r.x.height,alt:r.x.alt,decoding:"async",onClick:()=>e.current?.close()})]})]})}])},4168,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(26980);let o=100*r.x.ratio,n=`/manifesto-san-pedro-preview${r.x.base}-${r.x.anchos[1]}.webp`,s=e=>r.d[Math.min(r.d.length-1,Math.max(0,Math.floor(e*r.d.length)))],i=e=>r.V.pasos.findIndex(a=>a.id===e);function l({paso:e,fundido:t}){let s=e=>(100*e).toFixed(2),c=e=>(e*o).toFixed(2),u=r.V.cabeza,d=`M${s(r.V.manoIzq.x)},${c(r.V.manoIzq.y)} L${s(r.V.manoDer.x)},${c(r.V.manoDer.y)} L${s(r.V.pies.x)},${c(r.V.pies.y)}Z`,m=100*u.x,p=u.y*o,f=100*u.r,h=e>=i("ejes"),v=e>=i("triangulo"),b=e>=i("circulo"),g=e>=i("nucleo");return(0,a.jsxs)("div",{className:"vd-nucleo",role:"img","aria-label":e<0?"La pintura, sin guías":`La pintura con ${["los ejes","el triángulo","el círculo","el núcleo"][e]} dibujado encima`,children:[(0,a.jsx)("img",{className:"vd-img",src:n,width:r.x.width,height:r.x.height,alt:"",loading:"lazy",decoding:"async",draggable:!1,style:{filter:`brightness(${(1-.78*t).toFixed(3)}) saturate(${(1-.5*t).toFixed(2)})`}}),(0,a.jsxs)("svg",{className:"vd-svg vd-svg--geo",viewBox:`0 0 100 ${o}`,"aria-hidden":"true",preserveAspectRatio:"none",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("radialGradient",{id:"vd-nuc",cx:"0.5",cy:"0.5",r:"0.5",children:[(0,a.jsx)("stop",{offset:"0",stopColor:"#fff6d8",stopOpacity:"0.95"}),(0,a.jsx)("stop",{offset:"0.45",stopColor:"#e0b95a",stopOpacity:"0.5"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#e0b95a",stopOpacity:"0"})]})}),(0,a.jsxs)("g",{className:"vd-geo","data-on":h,children:[(0,a.jsx)("line",{x1:s(r.V.ejeX),x2:s(r.V.ejeX),y1:"0",y2:o,className:"vd-eje"}),(0,a.jsx)("line",{x1:"0",x2:"100",y1:c(r.V.ejeY),y2:c(r.V.ejeY),className:"vd-eje"})]}),(0,a.jsx)("path",{d:d,className:"vd-geo vd-tri","data-on":v}),(0,a.jsx)("circle",{cx:m,cy:p,r:f,className:"vd-geo vd-circ","data-on":b}),(0,a.jsxs)("g",{className:"vd-geo","data-on":g,children:[[r.V.manoIzq,r.V.manoDer,r.V.pies].map((e,t)=>(0,a.jsx)("line",{x1:s(e.x),y1:c(e.y),x2:m,y2:p,className:"vd-conv"},t)),(0,a.jsx)("circle",{cx:m,cy:p,r:1.9*f,fill:"url(#vd-nuc)"}),(0,a.jsx)("circle",{cx:m,cy:p,r:"1.3",fill:"#fff6d8"})]})]})]})}let c=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,u=`#version 300 es
precision highp float;
uniform vec2 uRes;
uniform vec3 aPos, aFwd, aRight, aUp;
uniform vec3 bPos, bFwd, bRight, bUp;
uniform float uDual;
uniform float uCostura;
uniform float uMundo;
uniform vec4 uGeo;
uniform float uFoco;
out vec4 color;

// Luz clave cenital y fr\xeda; contraluz \xe1mbar desde el horizonte, al fondo de la bah\xeda
const vec3 L = normalize(vec3(-0.22, 1.0, 0.18));
const vec3 RIM = normalize(vec3(0.12, 0.1, -1.0));
const vec3 FRIO = vec3(0.86, 0.92, 1.0);
const vec3 AMBAR = vec3(1.0, 0.6, 0.28);
const vec3 NOCHE = vec3(0.012, 0.018, 0.04);
const float NUBES = -9.0;
const float VELOS = -5.2;
const float MAR = -16.0;
const vec3 MA = vec3(-2.2, 1.0, 0.24);
const vec3 MB = vec3(2.2, 1.0, 0.24);
const vec3 MC = vec3(0.0, -3.0, 0.24);
const vec3 S = vec3(0.0, 0.48, 0.34);
const mat2 GIRO = mat2(0.8, 0.6, -0.6, 0.8);

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
// fbm con giro entre octavas: sin rejilla visible
float fbm(vec2 p, int n) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    if (i >= n) break;
    v += a * ruido(p);
    p = GIRO * p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

float sdCaja(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b; return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r; }
float sdCapsula(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h) - r; }

// x: distancia, y: material (1 bronce, 3 esfera pulida). Las varillas del tri\xe1ngulo (2) se dibujan aparte

vec2 mapa(vec3 p) {
  // Vigas biseladas y un nudo en el cruce
  float dv = sdCaja(p - vec3(0.0, -1.0, 0.0), vec3(0.075, 2.75, 0.075), 0.032);
  float dh = sdCaja(p - vec3(0.0, 1.0, 0.0), vec3(2.38, 0.065, 0.065), 0.032);
  float dn = sdCaja(p - vec3(0.0, 1.0, 0.0), vec3(0.125, 0.125, 0.125), 0.025);
  vec2 r = vec2(min(min(dv, dh), dn), 1.0);
  float ds = length(p - S) - 0.27;
  if (ds < r.x) r = vec2(ds, 3.0);
  return r;
}

vec3 normal(vec3 p) {
  const vec2 e = vec2(0.0012, -0.0012);
  return normalize(e.xyy * mapa(p + e.xyy).x + e.yyx * mapa(p + e.yyx).x + e.yxy * mapa(p + e.yxy).x + e.xxx * mapa(p + e.xxx).x);
}

bool toca(vec3 ro, vec3 rd, out float t0, out float t1) {
  vec3 oc = ro - vec3(0.0, -0.9, 0.0);
  float b = dot(oc, rd), c = dot(oc, oc) - 19.0;
  float h = b * b - c;
  if (h < 0.0) return false;
  h = sqrt(h);
  t0 = max(0.0, -b - h);
  t1 = -b + h;
  return t1 > 0.0;
}

float sombra(vec3 ro, vec3 rd, float k) {
  float t0, t1;
  if (!toca(ro, rd, t0, t1)) return 1.0;
  float res = 1.0, t = max(t0, 0.02);
  for (int i = 0; i < 26; i++) {
    float h = mapa(ro + rd * t).x;
    res = min(res, k * h / t);
    t += clamp(h, 0.02, 0.45);
    if (res < 0.003 || t > t1) break;
  }
  return clamp(res, 0.0, 1.0);
}

float oclusion(vec3 p, vec3 n) {
  float o = 0.0, s = 1.0;
  for (int i = 1; i <= 4; i++) {
    float h = 0.05 * float(i);
    o += (h - mapa(p + n * h).x) * s;
    s *= 0.6;
  }
  return clamp(1.0 - 3.2 * o, 0.0, 1.0);
}

// Cielo: vac\xedo profundo arriba, con variaci\xf3n tonal lenta, y un ocaso suave en el horizonte
vec3 cielo(vec3 rd) {
  float y = rd.y;
  vec3 c = mix(NOCHE * 0.5, NOCHE * 1.5, smoothstep(-0.2, 0.6, y));
  c *= 0.75 + 0.5 * fbm(rd.xz / (abs(y) + 0.25) * 1.3, 3);
  float cerca = exp(-abs(y + 0.006) * 34.0);
  float lejos = exp(-abs(y + 0.01) * (7.0 - 2.5 * uMundo));
  c += AMBAR * (cerca * (0.32 + 0.38 * uMundo) + lejos * (0.06 + 0.14 * uMundo));
  c += vec3(0.04, 0.06, 0.14) * exp(-abs(y - 0.1) * 5.0) * (0.25 + 0.35 * uMundo);
  vec2 q = rd.xz / max(0.05, rd.y + 0.3) * 60.0;
  float estrella = step(0.996, hash(floor(q))) * smoothstep(0.12, 0.0, length(fract(q) - 0.5));
  c += estrella * smoothstep(0.3, 0.75, y) * 0.5;
  return c;
}

// Cielo sin estrellas ni ruido, para los reflejos de los metales (evita puntos sobre las varillas)
vec3 cieloLiso(vec3 rd) {
  float y = rd.y;
  vec3 c = mix(NOCHE * 0.5, NOCHE * 1.5, smoothstep(-0.2, 0.6, y));
  c += AMBAR * (exp(-abs(y + 0.006) * 34.0) * (0.32 + 0.38 * uMundo) + exp(-abs(y + 0.01) * 7.0) * (0.06 + 0.14 * uMundo));
  return c + FRIO * 0.05 * smoothstep(0.6, 1.0, dot(rd, L));
}

// Sierra al fondo de la bah\xeda: siluetas lejanas con bruma y borde \xe1mbar
vec3 fondo(vec3 rd) {
  vec3 c = cielo(rd);
  float az = atan(rd.x, -rd.z);
  float cresta = 0.004 + 0.022 * fbm(vec2(az * 7.0, 3.1), 3) * smoothstep(0.9, 0.2, abs(az + 0.35));
  if (rd.y > -0.004 && rd.y < cresta) {
    float b = smoothstep(cresta, cresta - 0.003, rd.y);
    vec3 roca = mix(vec3(0.03, 0.03, 0.05), AMBAR * 0.18, 0.35 + 0.3 * uMundo);
    roca += AMBAR * 0.35 * exp(-(cresta - rd.y) * 600.0);
    c = mix(c, roca, b);
  }
  return c;
}

// Niebla por alturas: m\xe1s densa cerca del mar, casi nula en el vac\xedo
float nieblaAltura(vec3 ro, vec3 rd, float t) {
  const float k = 0.16, d = 0.05;
  float h0 = ro.y - MAR, h1 = ro.y + rd.y * t - MAR;
  float dy = rd.y * t;
  float f = abs(dy) < 1e-3 ? exp(-k * h0) * t : (exp(-k * h0) - exp(-k * h1)) / (k * rd.y);
  return 1.0 - exp(-d * max(0.0, f));
}

// Agua: oscura, con el reflejo del ocaso en un camino estrecho; costa y barcas
vec3 agua(vec3 ro, vec3 rd, float t) {
  vec3 p = ro + rd * t;
  vec2 w = p.xz * 0.5;
  vec3 n = normalize(vec3((ruido(w * 3.0) - 0.5) * 0.1, 1.0, (ruido(w * 3.0 + 7.0) - 0.5) * 0.1));
  vec3 r = reflect(rd, n);
  float fres = 0.03 + 0.97 * pow(1.0 - max(0.0, dot(-rd, n)), 5.0);
  vec3 c = vec3(0.004, 0.011, 0.026) * (1.0 + 1.2 * uMundo) + cielo(r) * fres * 0.5;
  vec3 sol = normalize(vec3(0.08, 0.012, -1.0));
  float g = max(0.0, dot(r, sol));
  c += AMBAR * (pow(g, 900.0) * 2.6 + pow(g, 50.0) * 0.08) * (0.55 + 0.6 * uMundo);
  // Costa a la izquierda: roca oscura con una l\xednea de espuma
  // Solo se lee desde cerca del agua; desde el vac\xedo queda fundida en la bruma
  float cerca = smoothstep(-4.0, -11.0, ro.y);
  float tierra = fbm(p.xz * 0.045 + vec2(4.0, 2.0), 4) + smoothstep(6.0, -22.0, p.x) * 0.35 - 0.62;
  if (tierra > 0.0) c = mix(c, mix(vec3(0.016, 0.014, 0.018), vec3(0.05, 0.035, 0.03), fbm(p.xz * 0.6, 2)) * (0.7 + 0.6 * uMundo), cerca);
  c += vec3(0.5, 0.45, 0.4) * exp(-abs(tierra) * 60.0) * 0.08 * (0.5 + uMundo) * cerca;
  // Barcas: cascos oscuros
  return c;
}

// Una barca: silueta en el plano que la contiene (casco bajo y una vela triangular)
float barca(vec3 ro, vec3 rd, vec2 c, float k, float tMar) {
  float t = (c.y - ro.z) / rd.z;
  if (t <= 0.0 || t > tMar + 0.5) return 0.0;
  vec3 q = ro + rd * t;
  float x = q.x - c.x, y = q.y - MAR;
  float aa = 0.0015 * t;
  float casco = smoothstep(aa, -aa, abs(x) - (0.75 - max(0.0, -y) * 2.0) * k) * smoothstep(-0.04 * k - aa, -0.04 * k, y) * smoothstep(0.12 * k + aa, 0.12 * k, y);
  float h = (y - 0.12 * k) / (0.95 * k);
  float vela = step(0.0, h) * step(h, 1.0) * smoothstep(aa, -aa, x - 0.55 * k * (1.0 - h)) * smoothstep(-aa, aa, x + 0.04 * k);
  return max(casco, vela);
}

vec4 nubes(vec3 ro, vec3 rd, float t, float altura, float escala, int oct, float fuerza) {
  vec3 p = ro + rd * t;
  float d = fbm(p.xz * escala + vec2(3.0, 1.0) * altura, oct);
  float a = smoothstep(0.42, 0.78, d) * fuerza;
  // Se disuelven a lo lejos: sin bandas en el horizonte
  a *= exp(-t * 0.011);
  if (a < 0.01) return vec4(0.0);
  float s = altura < -7.0 ? sombra(p + vec3(0.0, 0.05, 0.0), L, 22.0) : 1.0;
  vec3 c = mix(vec3(0.006, 0.009, 0.018), vec3(0.07, 0.078, 0.1), smoothstep(0.45, 0.9, d) * s * (0.5 + 0.5 * uMundo));
  if (rd.y > 0.0) c = mix(vec3(0.012, 0.016, 0.03), AMBAR * 0.18, (0.1 + 0.55 * uMundo) * (1.0 - d));
  return vec4(c, a);
}

float aSegmento(vec3 ro, vec3 rd, vec3 a, vec3 b, out float tr) {
  vec3 d = b - a, w = ro - a;
  float rdd = dot(rd, d), dd = dot(d, d), den = max(1e-5, dd - rdd * rdd);
  float s = clamp((dot(d, w) - dot(rd, w) * rdd) / den, 0.0, 1.0);
  vec3 q = a + d * s;
  tr = max(0.0, dot(q - ro, rd));
  return length(ro + rd * tr - q);
}
float linea(vec3 ro, vec3 rd, vec3 a, vec3 b, float tHit) {
  float tr;
  float d = aSegmento(ro, rd, a, b, tr);
  float w = 0.0016 * tr + 0.0015;
  float g = exp(-d * d / (w * w)) + 0.18 * exp(-d * d / (36.0 * w * w));
  return g * (tr < tHit ? 1.0 : 0.25);
}

// Bronce, metal fr\xedo y esfera pulida: metales con reflejo tintado, rugosidad y contraluz
vec3 material(vec3 p, vec3 n, vec3 rd, float id, float t) {
  float sh = sombra(p + n * 0.012, L, 10.0);
  float ao = oclusion(p, n);
  float nv = max(0.0, dot(n, -rd));
  vec3 hv = normalize(L - rd), hr = normalize(RIM - rd);
  float dif = max(0.0, dot(n, L));
  vec3 f0;
  float rug, kd;
  if (id < 1.5) {
    // P\xe1tina: zonas mates y oscuras sobre el bronce
    float pat = smoothstep(0.45, 0.8, fbm(p.xy * 2.6 + p.z * 4.0, 3));
    f0 = mix(vec3(0.62, 0.42, 0.22), vec3(0.16, 0.14, 0.1), pat * 0.75);
    rug = mix(0.32, 0.7, pat);
    kd = 0.12 + 0.2 * pat;
  } else if (id < 2.5) {
    f0 = vec3(0.78, 0.8, 0.84); rug = 0.22; kd = 0.08;
  } else {
    f0 = vec3(0.86, 0.88, 0.92); rug = 0.06; kd = 0.18;
  }
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - nv, 5.0);
  float e = mix(220.0, 14.0, rug);
  float sKey = pow(max(0.0, dot(n, hv)), e) * (e + 8.0) / 40.0;
  float sRim = pow(max(0.0, dot(n, hr)), e * 0.6) * (e + 8.0) / 60.0;
  vec3 r = reflect(rd, n);
  vec3 env = mix(cieloLiso(r), NOCHE * 2.0, rug * 0.6);
  // Rebote \xe1mbar desde abajo, cielo nocturno desde arriba
  vec3 amb = mix(AMBAR * (0.05 + 0.1 * uMundo), NOCHE * 2.2, n.y * 0.5 + 0.5) * ao;
  vec3 c = f0 * kd * (FRIO * dif * sh * 2.0 + amb * 2.0);
  c += F * FRIO * sKey * sh * 2.4;
  c += F * AMBAR * sRim * (0.9 + 0.6 * uMundo);
  c += F * env * (1.0 - rug * 0.7) * ao;
  // Contorno: el borde que mira al horizonte se enciende
  float contorno = pow(1.0 - nv, 3.0) * max(0.0, dot(n, RIM) + 0.35);
  c += AMBAR * contorno * 0.22 * ao;
  return c;
}

vec3 escena(vec3 ro, vec3 rd) {
  vec3 col = fondo(rd);
  float tMar = rd.y < 0.0 ? (MAR - ro.y) / rd.y : -1.0;
  if (tMar > 0.0) {
    vec3 a = agua(ro, rd, tMar);
    vec3 bruma = vec3(0.02, 0.03, 0.06) + AMBAR * (0.03 + 0.07 * uMundo) * smoothstep(-0.25, 0.0, rd.y);
    col = mix(a, bruma, nieblaAltura(ro, rd, tMar));
  }
  // Dos capas: el manto de nubes y velos altos m\xe1s tenues
  float tN = (NUBES - ro.y) / rd.y;
  if (tN > 0.0 && (tMar < 0.0 || tN < tMar)) {
    vec4 n = nubes(ro, rd, tN, NUBES, 0.075, 4, 0.92);
    col = mix(col, n.rgb, n.a);
  }
  float tV = (VELOS - ro.y) / rd.y;
  if (tV > 0.0 && (tMar < 0.0 || tV < tMar)) {
    vec4 n = nubes(ro, rd, tV, VELOS, 0.05, 3, 0.22);
    col = mix(col, n.rgb, n.a);
  }
  // Barcas: casco y vela recortados a contraluz sobre el camino de luz
  // Solo desde cerca del agua: desde el vac\xedo quedan bajo la bruma y las nubes
  float cercaMar = smoothstep(-4.0, -11.0, ro.y);
  if (tMar > 0.0 && cercaMar > 0.0) {
    col = mix(col, vec3(0.012, 0.01, 0.01), barca(ro, rd, vec2(3.3, -24.0), 1.0, tMar) * cercaMar);
    col = mix(col, vec3(0.012, 0.01, 0.01), barca(ro, rd, vec2(-6.5, -46.0), 1.25, tMar) * 0.85 * cercaMar);
  }

  // El haz cenital: luz fr\xeda que cae sobre la estructura atravesando el vac\xedo
  float tr;
  // Se desvanece hacia los dos extremos: sin bordes circulares
  vec3 ha = S + L * 7.0, hb = S - L * 4.0, hd = hb - ha, hw = ro - ha;
  float hrd = dot(rd, hd), hs = clamp((dot(hd, hw) - dot(rd, hw) * hrd) / max(1e-5, dot(hd, hd) - hrd * hrd), 0.0, 1.0);
  vec3 hq = ha + hd * hs;
  tr = max(0.0, dot(hq - ro, rd));
  float dh = length(ro + rd * tr - hq);
  float haz = (exp(-dh * dh / 1.4) * 0.05 + exp(-dh * dh / 0.25) * 0.035) * pow(sin(3.14159 * hs), 2.0) * smoothstep(2.5, 6.0, tr);

  float tHit = 1e5, t0, t1;
  if (toca(ro, rd, t0, t1)) {
    float t = t0;
    vec2 h = vec2(1.0, 0.0);
    for (int i = 0; i < 90; i++) {
      h = mapa(ro + rd * t);
      if (h.x < 0.00035 * t || t > t1) break;
      t += h.x;
    }
    // Solo cuenta como superficie si la marcha ha convergido de verdad
    if (t < t1 && h.x < 0.002 * t) {
      tHit = t;
      vec3 p = ro + rd * t, n = normal(p);
      vec3 c = material(p, n, rd, h.y, t);
      col = mix(c, NOCHE, 1.0 - exp(-t * 0.012));
    }
  }
  // Varillas del tri\xe1ngulo: cobertura anal\xedtica seg\xfan el tama\xf1o del p\xedxel (sin dientes de sierra)
  for (int i = 0; i < 3; i++) {
    vec3 va = i == 0 ? MA : (i == 1 ? MB : MC);
    vec3 vb = i == 0 ? MB : (i == 1 ? MC : MA);
    float tv;
    float dv = aSegmento(ro, rd, va, vb, tv);
    const float RV = 0.021;
    float pix = 1.2 * tv / (uRes.y * uFoco);
    float cov = smoothstep(RV + pix, RV - pix, dv);
    if (cov > 0.002 && tv < tHit) {
      vec3 q = ro + rd * tv;
      vec3 ab = vb - va;
      vec3 cq = va + ab * clamp(dot(q - va, ab) / dot(ab, ab), 0.0, 1.0);
      vec3 nv = normalize(q - cq + rd * -0.0001);
      vec3 cr = material(cq + nv * RV, nv, rd, 2.0, tv);
      col = mix(col, mix(cr, NOCHE, 1.0 - exp(-tv * 0.012)), cov);
    }
  }
  col += FRIO * haz * (tr < tHit ? 1.0 : 0.5) * (1.0 - 0.6 * uMundo);

  if (uGeo.x + uGeo.y + uGeo.z + uGeo.w > 0.001) {
    vec3 oro = vec3(1.0, 0.82, 0.48);
    float g = 0.0;
    g += uGeo.x * (linea(ro, rd, vec3(0.0, 4.2, 0.0), vec3(0.0, -5.6, 0.0), tHit) + linea(ro, rd, vec3(-3.6, 1.0, 0.0), vec3(3.6, 1.0, 0.0), tHit));
    g += uGeo.y * (linea(ro, rd, MA, MB, tHit) + linea(ro, rd, MB, MC, tHit) + linea(ro, rd, MC, MA, tHit));
    float tz = (S.z + 0.02 - ro.z) / rd.z;
    if (tz > 0.0) {
      vec3 q = ro + rd * tz;
      float d = abs(length(q.xy - S.xy) - 0.5);
      float w = 0.0016 * tz + 0.0015;
      g += uGeo.z * (exp(-d * d / (w * w)) + 0.18 * exp(-d * d / (36.0 * w * w))) * (tz < tHit ? 1.0 : 0.25);
    }
    g += uGeo.w * (linea(ro, rd, MA, S, tHit) + linea(ro, rd, MB, S, tHit) + linea(ro, rd, MC, S, tHit));
    float dn = aSegmento(ro, rd, S, S, tr);
    g += uGeo.w * exp(-dn * dn / 0.03) * 0.7;
    col += oro * g * 1.3;
  }
  return col;
}

vec3 rayo(vec3 f, vec3 r, vec3 u, vec2 uv) { return normalize(f * uFoco + r * uv.x + u * uv.y); }

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float v = gl_FragCoord.y / uRes.y;
  float banda = 0.1;
  float wA = mix(1.0, smoothstep(uCostura - banda, uCostura + banda, v), uDual);
  vec3 col = vec3(0.0);
  if (wA > 0.001) col += wA * escena(aPos, rayo(aFwd, aRight, aUp, uv));
  if (wA < 0.999) col += (1.0 - wA) * escena(bPos, rayo(bFwd, bRight, bUp, uv));
  col *= 1.0 - 0.42 * dot(uv * vec2(0.75, 0.9), uv * vec2(0.75, 0.9));
  col = col * (2.51 * col + 0.03) / (col * (2.43 * col + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(1.0 / 2.2));
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.01;
  color = vec4(col, 1.0);
}`,d=e=>{let a=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/a,e[1]/a,e[2]/a]},m=(e,a)=>[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]];function p(e,a){let t=d([a[0]-e[0],a[1]-e[1],a[2]-e[2]]),r=d(m(t,[0,1,0])),o=m(r,t);return{pos:e,fwd:t,right:r,up:o}}function f(e,a,t){let r=e.createShader(a);if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??"shader");return r}let h=["El punto imposible","Dos mundos","La geometría del silencio"],v=["El punto","Dos mundos","Geometría"],b=["I","II","III"],g=[0,-.6,0],x=(e,a,t)=>Math.min(t,Math.max(a,e)),y=e=>e*Math.PI/180,j=(e,a,t)=>[e[0]+(a[0]-e[0])*t,e[1]+(a[1]-e[1])*t,e[2]+(a[2]-e[2])*t],M=(e,a,t=1)=>[[g[0]+8.4*t*Math.cos(y(a))*Math.sin(y(e)),g[1]+8.4*t*Math.sin(y(a)),g[2]+8.4*t*Math.cos(y(a))*Math.cos(y(e))],g],z=e=>{let a=[0,-13.8,18],t=Math.atan(.378/e);return[a,[0,a[1]+20*Math.sin(t),a[2]-20*Math.cos(t)]]},w=[[[0,8,5.8],[0,-1,0]],[[0,.4,10.5],[0,-1.3,0]],[[0,-7.9,15],[0,-3.4,-6]],z(1.6)],C=r.g.dali,L=r.g.max;e.s(["Imposible",0,function(){let[e,o]=(0,t.useState)(0),[n,i]=(0,t.useState)(C),[d,m]=(0,t.useState)(!0),[y,E]=(0,t.useState)(0),[A,N]=(0,t.useState)(0),[S,R]=(0,t.useState)(!0),[q,P]=(0,t.useState)(null),F=(0,t.useRef)(null),_=(0,t.useRef)(null),U=(0,t.useRef)({momento:0,az:0,el:C,dual:1,m:0,paso:0,geo:1,elF:C,mF:0,pos:M(0,C)[0],obj:g,dualV:1,mundoV:0,geoV:[0,0,0,0],quieto:!1,visible:!1,raf:0,ultimo:0,escala:1,lentos:0,arrastre:null});(0,t.useEffect)(()=>{let e=U.current,a=F.current,t=function(e){let a,t=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!t)return null;try{if(a=t.createProgram(),t.attachShader(a,f(t,t.VERTEX_SHADER,c)),t.attachShader(a,f(t,t.FRAGMENT_SHADER,u)),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))return null}catch{return null}t.useProgram(a);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(a,"p");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let n={res:t.getUniformLocation(a,"uRes"),dual:t.getUniformLocation(a,"uDual"),costura:t.getUniformLocation(a,"uCostura"),mundo:t.getUniformLocation(a,"uMundo"),geo:t.getUniformLocation(a,"uGeo"),foco:t.getUniformLocation(a,"uFoco"),aPos:t.getUniformLocation(a,"aPos"),aFwd:t.getUniformLocation(a,"aFwd"),aRight:t.getUniformLocation(a,"aRight"),aUp:t.getUniformLocation(a,"aUp"),bPos:t.getUniformLocation(a,"bPos"),bFwd:t.getUniformLocation(a,"bFwd"),bRight:t.getUniformLocation(a,"bRight"),bUp:t.getUniformLocation(a,"bUp")};return{medir(a){let r=Math.max(1,Math.round(e.clientWidth*a)),o=Math.max(1,Math.round(e.clientHeight*a));(e.width!==r||e.height!==o)&&(e.width=r,e.height=o),t.viewport(0,0,r,o)},pintar(a){t.uniform2f(n.res,e.width,e.height),t.uniform3fv(n.aPos,a.a.pos),t.uniform3fv(n.aFwd,a.a.fwd),t.uniform3fv(n.aRight,a.a.right),t.uniform3fv(n.aUp,a.a.up),t.uniform3fv(n.bPos,a.b.pos),t.uniform3fv(n.bFwd,a.b.fwd),t.uniform3fv(n.bRight,a.b.right),t.uniform3fv(n.bUp,a.b.up),t.uniform1f(n.dual,a.dual),t.uniform1f(n.costura,a.costura),t.uniform1f(n.mundo,a.mundo),t.uniform4fv(n.geo,a.geo),t.uniform1f(n.foco,a.foco),t.drawArrays(t.TRIANGLES,0,3)},liberar(){t.deleteBuffer(r),t.deleteProgram(a),t.getExtension("WEBGL_lose_context")?.loseContext()}}}(a),r=matchMedia("(prefers-reduced-motion: reduce)");e.quieto=r.matches;let o=()=>Math.min(Math.min(devicePixelRatio||1,2),Math.sqrt(45e4/Math.max(1,a.clientWidth*a.clientHeight)));e.escala=o(),P(!!t);let n=()=>{if(!t)return;let r=1.6*Math.min(1,a.clientWidth/Math.max(1,a.clientHeight)/1.5),o=p(e.pos,e.obj),n=z(r),s=p(n[0],n[1]);t.pintar({a:o,b:s,dual:e.dualV,costura:.38,mundo:e.mundoV,geo:e.geoV,foco:r})},s=a=>{e.raf=0;let r=e.ultimo?Math.min(.1,(a-e.ultimo)/1e3):1/60;e.ultimo=a;let o=e.quieto?1:1-Math.exp(-(3.2*r)),i=0,l=(e,a,t=o)=>{let r=a-e;return 1e-4>Math.abs(r)?a:(i=Math.max(i,Math.abs(r)),e+r*t)},[c,u]=(()=>{if(1===e.momento){let a,t,r,o;return a=x(e.m,0,1)*(w.length-1),t=Math.min(w.length-2,Math.floor(a)),o=(r=a-t)*r*(3-2*r),[j(w[t][0],w[t+1][0],o),j(w[t][1],w[t+1][1],o)]}return 2===e.momento?M(e.az,Math.min(e.el,24),1.18):M(e.az,e.el)})();e.pos=[l(e.pos[0],c[0]),l(e.pos[1],c[1]),l(e.pos[2],c[2])],e.obj=[l(e.obj[0],u[0]),l(e.obj[1],u[1]),l(e.obj[2],u[2])],e.dualV=l(e.dualV,0===e.momento&&e.dual?1:0),e.mundoV=l(e.mundoV,1===e.momento?e.m:0===e.momento?.35:.2);let d=2===e.momento&&e.geo?e.paso:-1;e.geoV=[0,1,2,3].map(a=>l(e.geoV[a],+(d>=a),e.quieto?1:1-Math.exp(-(2.2*r)))),r>.028&&!e.quieto?++e.lentos>8&&e.escala>.5&&(e.escala*=.82,e.lentos=0,t?.medir(e.escala)):e.lentos=Math.max(0,e.lentos-1),n(),i>0&&e.visible&&(e.raf=requestAnimationFrame(s))},i=()=>{!e.raf&&e.visible&&(e.ultimo=0,e.raf=requestAnimationFrame(s))};_.current={despertar:i};let l=()=>{e.escala=o(),t?.medir(e.escala),n()};l();let d=new ResizeObserver(l);d.observe(a);let m=new IntersectionObserver(([a])=>{e.visible=a.isIntersecting,e.visible&&i()});m.observe(a);let h=()=>{e.quieto=r.matches,i()};r.addEventListener("change",h);let v=e=>{e.preventDefault(),P(!1)};return a.addEventListener("webglcontextlost",v),()=>{d.disconnect(),m.disconnect(),r.removeEventListener("change",h),a.removeEventListener("webglcontextlost",v),cancelAnimationFrame(e.raf),e.raf=0,_.current=null,t?.liberar()}},[]),(0,t.useEffect)(()=>{Object.assign(U.current,{momento:e,el:n,dual:+!!d,m:y,paso:A,geo:+!!S}),_.current?.despertar()},[e,n,d,y,A,S]);let O=()=>{U.current.az=0,i(C),m(!0),E(0),N(0),R(!0),_.current?.despertar()},I=()=>U.current.arrastre=null,k=a=>1===e?E(x(a,0,1)):i(x(a,0,1)*L),V=(0,t.useRef)(!1),D=a=>{if("pointerdown"===a.type){V.current=!0;try{a.currentTarget.setPointerCapture(a.pointerId)}catch{}}else if(!V.current)return;let t=a.currentTarget.getBoundingClientRect(),r=(a.clientY-t.top)/t.height;k(1===e?r:1-r)},T=r.g.tramos.find(e=>n<=e.hasta)??r.g.tramos[r.g.tramos.length-1],B=Math.round(n-3),$=.08+.87*y,H=r.w.find(e=>$<e.hasta),G=r.V.pasos[A],K=1===e?`${H.nombre}, luz ${s($)} por ciento`:`${Math.round(n)} grados sobre la estructura`,W=0===e?`Estructura suspendida vista desde ${Math.round(n)} grados${d?"; la bahía, abajo, casi de frente":"; toda la escena con la misma mirada"}.`:1===e?`Descenso de la mirada: ${H.nombre.toLowerCase()}.`:`Geometr\xeda de la estructura: ${S?r.V.pasos.slice(0,A+1).map(e=>e.nombre.toLowerCase()).join(", "):"sin líneas"}.`;return(0,a.jsxs)("section",{id:"perspectiva-imposible",className:"pi-sala","data-momento":e,"data-gl":!1===q?"no":"si","aria-labelledby":"pi-titulo","aria-roledescription":"instalación",children:[(0,a.jsxs)("div",{className:"pi-escena",children:[(0,a.jsx)("canvas",{ref:F,className:"pi-lienzo",tabIndex:0,role:"img","aria-label":`${W} Flechas para cambiar el punto de vista; Inicio para restablecerlo.`,onKeyDown:a=>{let t={ArrowUp:1,ArrowDown:-1}[a.key],r={ArrowLeft:-1,ArrowRight:1}[a.key];if(t)1===e?E(e=>x(e-.05*t,0,1)):i(e=>x(e+4*t,0,L));else if(r&&1!==e)U.current.az=x(U.current.az+8*r,-70,70),_.current?.despertar();else{if("Home"!==a.key&&"0"!==a.key)return;O()}a.preventDefault()},onPointerDown:e=>{Object.assign(U.current,{elF:n,mF:y}),U.current.arrastre={x:e.clientX,y:e.clientY,tipo:e.pointerType};try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}},onPointerMove:a=>{let t=U.current.arrastre;if(!t)return;let r=a.clientX-t.x,o=a.clientY-t.y;t.x=a.clientX,t.y=a.clientY;let n=a.currentTarget.clientHeight||500;if(1!==e&&(U.current.az=x(U.current.az-.25*r,-70,70)),"mouse"===t.tipo){let a=U.current;1===e?(a.mF=x(a.mF+o/(1.4*n),0,1),E(Math.round(100*a.mF)/100)):(a.elF=x(a.elF+o/n*90,0,L),i(Math.round(a.elF)))}_.current?.despertar()},onPointerUp:I,onPointerCancel:I}),(0,a.jsx)("div",{className:"pi-alternativa","aria-hidden":"true",children:(0,a.jsx)("svg",{viewBox:"-50 -40 100 80",preserveAspectRatio:"xMidYMid slice",children:(0,a.jsxs)("g",{className:"pi-alt-cruz",children:[(0,a.jsx)("path",{d:"M-26 -10 L26 -10 M0 -22 L0 18"}),(0,a.jsx)("path",{d:"M-25 -9 L25 -9 L0 16 Z",className:"pi-alt-tri"}),(0,a.jsx)("circle",{cx:"0",cy:"-12",r:"3.4",className:"pi-alt-esf"})]})})}),(0,a.jsx)("div",{className:"pi-costura","aria-hidden":"true","data-on":0===e&&d}),(0,a.jsxs)("header",{className:"pi-cabeza",children:[(0,a.jsx)("p",{className:"pi-ante",children:"Instalación · escena 3D"}),(0,a.jsx)("h2",{id:"pi-titulo",children:"La perspectiva imposible"}),(0,a.jsx)("div",{className:"pi-momentos",role:"group","aria-label":"Momento",children:h.map((t,r)=>(0,a.jsxs)("button",{type:"button","aria-label":t,"aria-pressed":e===r,onClick:()=>o(r),children:[(0,a.jsx)("span",{"aria-hidden":"true",children:b[r]})," ",(0,a.jsx)("b",{className:"pi-largo",children:t}),(0,a.jsx)("b",{className:"pi-corto","aria-hidden":"true",children:v[r]})]},t))})]}),2!==e?(0,a.jsxs)("div",{className:"pi-rail",role:"slider",tabIndex:0,"aria-orientation":"vertical","aria-label":1===e?"Descenso de la mirada, del vacío a la bahía":"Elevación de la mirada","aria-valuemin":0,"aria-valuemax":1===e?100:L,"aria-valuenow":1===e?Math.round(100*y):Math.round(n),"aria-valuetext":K,onPointerDown:D,onPointerMove:D,onPointerUp:()=>V.current=!1,onPointerCancel:()=>V.current=!1,onKeyDown:a=>{let t={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1}[a.key];if(t&&1===e)E(e=>x(e-.05*t,0,1));else if(t)i(e=>x(e+4*t,0,L));else if("Home"===a.key)k(+(1!==e));else{if("End"!==a.key)return;k(+(1===e))}a.preventDefault()},children:[(0,a.jsx)("span",{className:"pi-rail__via"}),0===e?(0,a.jsx)("span",{className:"pi-rail__dali",style:{top:`${(1-C/L)*100}%`},title:"Mirada de Dalí"}):null,(0,a.jsx)("span",{className:"pi-rail__asa",style:{top:`${(1===e?y:1-n/L)*100}%`},children:(0,a.jsx)("i",{children:1===e?H.nombre:`${Math.round(n)}\xb0`})})]}):null,(0,a.jsxs)("div",{className:"pi-acciones",children:[0===e?(0,a.jsx)("button",{type:"button","aria-pressed":!d,onClick:()=>m(!d),children:d?"Una sola mirada":"Como en el cuadro"}):null,2===e?(0,a.jsx)("button",{type:"button","aria-pressed":S,onClick:()=>R(!S),children:S?"Ocultar la geometría":"Mostrar la geometría"}):null,(0,a.jsxs)("button",{type:"button",className:"pi-restablecer",onClick:O,"aria-label":"Restablecer la vista",children:[(0,a.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4"})}),(0,a.jsx)("span",{children:"Vista original"})]})]})]}),(0,a.jsxs)("div",{className:"pi-cartela",children:[(0,a.jsxs)("div",{className:"pi-texto","aria-live":"polite",children:[(0,a.jsxs)("p",{className:"pi-n",children:[b[e]," · ",h[e]]}),0===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:B>10&&d?`La estructura a ${Math.round(n)}\xb0, la bah\xeda a 3\xb0`:d?"Las dos miradas coinciden":`Una sola mirada, a ${Math.round(n)}\xb0`}),(0,a.jsx)("p",{children:T.texto}),d?(0,a.jsx)("p",{className:"pi-dato",children:B>10?"Imposible: ningún punto de vista ve así las dos cosas a la vez. Pulsa «Una sola mirada» para unirlas.":"Con la mirada baja, la escena vuelve a ser posible."}):(0,a.jsx)("p",{className:"pi-dato",children:"Con una sola cámara, la bahía también se ve desde arriba: el cuadro no lo hace."})]}):null,1===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:H.nombre}),(0,a.jsx)("p",{children:H.texto}),(0,a.jsxs)("p",{className:"pi-dato",children:["Luz medida en la franja equivalente de la reproducción: ",(0,a.jsxs)("b",{children:[s($)," ","%"]})," · media arriba ",r.a.arriba," ","%, abajo ",r.a.abajo," ","%"]})]}):null,2===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:G.nombre}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"pi-etiqueta","data-tipo":G.tipo,children:"documentado"===G.tipo?"Documentado":"Interpretación"})," ",G.texto]}),A===r.V.pasos.length-1?(0,a.jsxs)("blockquote",{className:"pi-cita",children:[(0,a.jsx)("p",{children:r.V.cita}),(0,a.jsx)("footer",{children:r.V.citaFuente})]}):null]}):null]}),2===e?(0,a.jsx)("div",{className:"pi-pasos",role:"group","aria-label":"Geometría, paso a paso",children:r.V.pasos.map((e,t)=>(0,a.jsxs)("button",{type:"button","aria-pressed":A===t,onClick:()=>N(t),children:[(0,a.jsx)("span",{"aria-hidden":"true",children:t+1})," ",e.nombre]},e.id))}):null,2===e?(0,a.jsxs)("figure",{className:"pi-lamina",children:[(0,a.jsx)(l,{paso:S?A:-1,fundido:.35*!!S}),(0,a.jsxs)("figcaption",{children:["Las mismas guías sobre la pintura",S?"":" (ocultas)","."]})]}):null,(0,a.jsxs)("details",{className:"pi-notas",children:[(0,a.jsx)("summary",{children:"Documentado e interpretación"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Documentado."})," ",0===e?r.g.documentado:1===e?r.f:"En un boceto del cuadro, un triángulo representa el cuerpo de Cristo y un círculo ocupa el lugar de la cabeza; Dalí relacionó la imagen con el núcleo del átomo."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Interpretación."})," ",0===e?r.g.interpretacion:1===e?r.e:r.V.interpretacion]}),(0,a.jsx)("p",{children:"La escena 3D es una abstracción original de MANIFESTO: dos vigas, el triángulo y la esfera del boceto. No representa el cuerpo de Cristo."})]})]})]})}],4168)},82731,e=>{"use strict";var a=e.i(71645);e.s(["FundidoEstados",0,function(){return(0,a.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=document.querySelectorAll(".mu-sala [aria-live]"),a=new WeakSet,t=new MutationObserver(e=>{for(let t of e){let e=(t.target instanceof HTMLElement?t.target:t.target.parentElement)?.closest(".mu-sala [aria-live]");!e||a.has(e)||(a.add(e),requestAnimationFrame(()=>{a.delete(e),e.classList.remove("mu-fundido"),e.offsetWidth,e.classList.add("mu-fundido")}))}});return e.forEach(e=>t.observe(e,{childList:!0,subtree:!0,characterData:!0})),()=>t.disconnect()},[]),null}])},26980,e=>{"use strict";e.s(["x",0,{base:"/cristo-dali/cristo",anchos:[400,800],width:800,height:1426,ratio:1.7825,alt:"Cristo de San Juan de la Cruz, de Dalí: un Cristo crucificado visto desde arriba, con la cabeza inclinada y sin rostro visible, flota sobre una bahía de Port Lligat con una barca y dos pescadores bajo un cielo de nubes."},"a",0,{arriba:11,abajo:24},"w",0,[{hasta:.4,nombre:"El espacio oscuro",texto:"Arriba, la cruz flota en un negro casi total. La única luz cae sobre el cuerpo y el travesaño; no hay suelo ni cielo."},{hasta:.64,nombre:"El umbral",texto:"El tronco se apaga justo donde empiezan las nubes. Allí termina la sombra y empieza el mundo que se puede habitar."},{hasta:1.01,nombre:"La bahía de Port Lligat",texto:"Abajo, una bahía con una barca y dos pescadores, a una luz tranquila de atardecer. Es un lugar real, mirado desde muy arriba."}],"f",0,"Glasgow Life señala que el espectador mira a la vez hacia el agua y hacia abajo, sobre Cristo. Las figuras de los pescadores se basan en dos obras: un cuadro de Louis Le Nain y un estudio de Velázquez.","e",0,"Que el cuadro sean «dos mundos» (el oscuro, el luminoso) es una lectura de esta página; el brillo es medido sobre la reproducción, no sobre el lienzo.","V",0,{manoIzq:{x:.125,y:.112},manoDer:{x:.875,y:.109},pies:{x:.504,y:.393},cabeza:{x:.52,y:.302,r:.07},ejeX:.5,ejeY:.112,pasos:[{id:"ejes",nombre:"Los ejes",texto:"Dos líneas se cruzan: el eje vertical del tronco y el horizontal de los brazos. Es la cruz reducida a su esquema.",tipo:"interpretacion"},{id:"triangulo",nombre:"El triángulo",texto:"En un boceto preparatorio, un triángulo representa el cuerpo de Cristo. Aquí se apoya en las dos manos y en los pies.",tipo:"documentado"},{id:"circulo",nombre:"El círculo",texto:"En el mismo boceto, un círculo ocupa el lugar de la cabeza. Aquí se traza sobre la cabeza inclinada, la única parte del rostro que no vemos.",tipo:"documentado"},{id:"nucleo",nombre:"El núcleo",texto:"Dalí creía que Cristo representaba el núcleo del átomo y lo llamó «misticismo nuclear». Triángulo, círculo y ejes se reúnen en un solo punto.",tipo:"documentado"}],cita:"Dalí anotó bajo el boceto que en 1950 tuvo un «sueño cósmico» en el que vio esta imagen en color y que, en el sueño, representaba el núcleo del átomo. Después ese núcleo cobró para él un sentido metafísico: la unidad misma del universo, el Cristo.",citaFuente:"Paráfrasis de MANIFESTO a partir de la transcripción en inglés que da Glasgow Life de la nota de Dalí en el boceto PR.1980.18. No se ha localizado el texto original.",interpretacion:"El boceto es un documento; las líneas que se trazan sobre el cuadro acabado son de MANIFESTO. Dalí no marcó estas guías en la obra final, y la posición exacta del triángulo y del círculo sobre ella es una medida nuestra, no suya."},"d",0,[12,13,15,31,35,22,22,17,17,14,10,8,9,9,8,7,6,5,5,5,4,4,4,6,8,10,20,21,23,30,32,35,32,27,26,34,33,15,19,21],"g",0,{min:0,max:74,dali:58,tramos:[{hasta:18,texto:"A ras de la cruz, es un crucificado de frente: dos brazos y un tronco vertical, como en cualquier cruz."},{hasta:48,texto:"Al subir la mirada, el travesaño se aplana y el tronco empieza a alejarse: sus bordes convergen hacia abajo."},{hasta:75,texto:"Casi desde arriba, el travesaño queda ancho y cercano, y el tronco huye hacia un punto de fuga bajo: es la mirada que elige el cuadro."}],documentado:"Dalí contó que el cuadro nació de un dibujo de la crucifixión de San Juan de la Cruz, visto desde arriba, y de un sueño en el que Cristo flotaba sobre la bahía de Port Lligat. Según Glasgow, el modelo, un especialista de cine, posó colgado del techo.",interpretacion:"Esta escena es un modelo geométrico de MANIFESTO: una cruz de bloques vista desde distintas alturas. No reconstruye la figura ni calcula la perspectiva exacta del cuadro; sirve para ver por qué la mirada «desde arriba» hace caer el tronco y concentra la luz en el travesaño."}])}]);