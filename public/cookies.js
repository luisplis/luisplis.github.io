/*
 CookieConsent v2.5.1
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(){function ta(Ia){function ua(a,b){return a.classList?a.classList.contains(b):!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function ia(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ")}function E(a,b){a.classList?a.classList.add(b):ua(a,b)||(a.className+=" "+b)}function aa(a){if("object"===typeof a){var b=[],d=0;for(b[d++]in a);return b}}function F(a,b,d,e){a.addEventListener?e?a.addEventListener(b,d,{passive:!0}):a.addEventListener(b,
    d,!1):a.attachEvent("on"+b,d)}function va(a,b,d){b=b?b:"/";for(var e=0;e<a.length;e++)for(var c=0;c<d.length;c++)document.cookie=a[e]+"=; path="+b+(-1<d[c].indexOf(".")?"; domain="+d[c]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function ea(a,b,d){if("one"===b)var e=(e=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?d?e.pop():a:"";else if("all"===b)for(a=document.cookie.split(/;\s*/),e=[],b=0;b<a.length;b++)e.push(a[b].split("=")[0]);return e}function wa(){if(xa){var a=document.querySelectorAll("script[data-cookiecategory]"),
    b=ya,d=JSON.parse(C).level||[],e=function(c,h){if(h<c.length){var k=c[h],l=k.getAttribute("data-cookiecategory");if(-1<G(d,l)){k.type="text/javascript";k.removeAttribute("data-cookiecategory");l=k.getAttribute("data-src");var m=f("script");m.textContent=k.innerHTML;(function(p,t){for(var u=t.attributes,v=u.length,g=0;g<v;g++)t=u[g],p.setAttribute(t.nodeName,t.nodeValue)})(m,k);l?m.src=l:l=k.src;l&&(b?m.readyState?m.onload=function(){if("loaded"===m.readyState||"complete"===m.readyState)m.onload=
    null,e(c,++h)}:m.onload=function(){m.onload=null;e(c,++h)}:l=!1);k.parentNode.replaceChild(m,k);if(l)return}e(c,++h)}};e(a,0)}}function Ja(a){function b(e,c,h,k,l,m,p){m=m&&m.split(" ")||[];if(-1<G(c,l)&&(E(e,l),-1<G(h,m[0])))for(c=0;c<m.length;c++)E(e,m[c]);-1<G(k,p)&&E(e,p)}if("object"===typeof a){var d=a.consent_modal;a=a.settings_modal;U&&d&&b(w,["box","bar","cloud"],["top","bottom"],["zoom","slide"],d.layout,d.position,d.transition);a&&b(H,["bar"],["left","right"],["zoom","slide"],a.layout,a.position,
    a.transition)}}function Ka(){var a=!1,b=!1;F(document,"keydown",function(d){d=d||window.event;"Tab"===d.key&&(r&&(d.shiftKey?document.activeElement===r[0]&&(r[1].focus(),d.preventDefault()):document.activeElement===r[1]&&(r[0].focus(),d.preventDefault()),b||ba||(b=!0,!a&&d.preventDefault(),d.shiftKey?r[3]?r[2]?r[2].focus():r[0].focus():r[1].focus():r[3]?r[3].focus():r[0].focus())),!b&&(a=!0))});document.contains&&F(L,"click",function(d){d=d||window.event;ja?M.contains(d.target)?ba=!0:(n.hideSettings(0),
    ba=!1):ca&&w.contains(d.target)&&(ba=!0)},!0)}function f(a){var b=document.createElement(a);"button"===a&&b.setAttribute("type",a);return b}function G(a,b){for(var d=a.length,e=0;e<d;e++)if(a[e]==b)return e;return-1}function La(a,b){if("string"!==typeof a||""==a||document.getElementById("cc--style"))b();else{var d=f("style");d.id="cc--style";var e=new XMLHttpRequest;e.onload=function(){4==this.readyState&&200==this.status&&(d.setAttribute("type","text/css"),d.styleSheet?d.styleSheet.cssText=
    this.responseText:d.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(d),b())};e.open("GET",a);e.send()}}function Ma(a){var b=document.querySelectorAll(".c-tgl")||[],d=[],e=!1;if(0<b.length){for(var c=0;c<b.length;c++)-1!==G(a,K[c])?(b[c].checked=!0,N[c]||(d.push(K[c]),N[c]=!0)):(b[c].checked=!1,N[c]&&(d.push(K[c]),N[c]=!1));if(za&&V&&0<d.length){b=x.length;c=-1;var h=ea("","all"),k=[P,"."+P];if("www."===P.slice(0,4)){var l=P.substr(4);k.push(l);
    k.push("."+l)}for(l=0;l<b;l++){var m=x[l];if(m.hasOwnProperty("toggle")&&!N[++c]&&m.hasOwnProperty("cookie_table")&&-1<G(d,m.toggle.value)){var p=m.cookie_table,t=aa(Q[0])[0],u=p.length;"on_disable"===m.toggle.reload&&(e=!0);for(var v=0;v<u;v++){var g=p[v],R=[],I=g[t],y=g.is_regex||!1,q=g.domain||null;g=g.path||!1;q&&(k=[q,"."+q]);if(y)for(y=0;y<h.length;y++)h[y].match(I)&&R.push(h[y]);else I=G(h,I),-1<I&&R.push(h[I]);0<R.length&&(va(R,g,k),"on_clear"===m.toggle.reload&&(e=!0))}}}}}C=JSON.stringify({level:a,
    revision:ka});if(!V||0<d.length||!da)a=fa,b=C,c=new Date,c.setTime(c.getTime()+864E5*Aa),a=a+"="+(b||"")+("; expires="+c.toUTCString())+"; Path="+Ba+";",a+=" SameSite="+Ca+";",-1<location.hostname.indexOf(".")&&(a+=" Domain="+P+";"),"https:"===location.protocol&&(a+=" Secure;"),document.cookie=a;wa();if("function"===typeof la&&!V)return V=!0,la(JSON.parse(C));"function"===typeof ma&&0<d.length&&ma(JSON.parse(C),d);e&&window.location.reload()}function Na(a,b){L=f("div");L.id="cc--main";L.style.position=
    "fixed";L.style.zIndex="1000000";L.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';var d=L.children[0],e=J,c="string"===typeof W.textContent?"textContent":"innerText";if(!a){w=f("div");var h=f("div"),k=f("div"),l=f("div"),m=f("div"),p=f("div"),t=f("button"),u=f("button"),v=f("div");w.id="cm";h.id="c-inr";k.id="c-inr-i";l.id="c-ttl";m.id="c-txt";p.id="c-bns";
    t.id="c-p-bn";u.id="c-s-bn";v.id="cm-ov";t.className="c-bn";u.className="c-bn c_link";l.setAttribute("role","heading");l.setAttribute("aria-level","2");w.setAttribute("role","dialog");w.setAttribute("aria-modal","true");w.setAttribute("aria-hidden","false");w.setAttribute("aria-labelledby","c-ttl");w.setAttribute("aria-describedby","c-txt");w.style.visibility=v.style.visibility="hidden";v.style.opacity=0;l.insertAdjacentHTML("beforeend",b.languages[e].consent_modal.title);var g=b.languages[e].consent_modal.description;
    Da&&(g=da?g.replace("{{revision_message}}",""):g.replace("{{revision_message}}",b.languages[e].consent_modal.revision_message||""));m.insertAdjacentHTML("beforeend",g);t[c]=b.languages[e].consent_modal.primary_btn.text;u[c]=b.languages[e].consent_modal.secondary_btn.text;var R;"accept_all"==b.languages[e].consent_modal.primary_btn.role&&(R="all");F(t,"click",function(){n.hide();n.accept(R)});"accept_necessary"==b.languages[e].consent_modal.secondary_btn.role?F(u,"click",function(){n.hide();n.accept([])}):
    F(u,"click",function(){n.showSettings(0)});k.appendChild(l);k.appendChild(m);p.appendChild(t);p.appendChild(u);h.appendChild(k);h.appendChild(p);w.appendChild(h);d.appendChild(w);d.appendChild(v)}H=f("div");h=f("div");k=f("div");l=f("div");M=f("div");m=f("div");p=f("div");g=f("button");t=f("div");u=f("div");v=f("div");H.id="s-cnt";h.id="c-vln";l.id="c-s-in";k.id="cs";m.id="s-ttl";M.id="s-inr";p.id="s-hdr";u.id="s-bl";g.id="s-c-bn";v.id="cs-ov";t.id="s-c-bnc";g.className="c-bn";g.setAttribute("aria-label",
    b.languages[e].settings_modal.close_btn_label||"Close");H.setAttribute("role","dialog");H.setAttribute("aria-modal","true");H.setAttribute("aria-hidden","true");H.setAttribute("aria-labelledby","s-ttl");m.setAttribute("role","heading");H.style.visibility=v.style.visibility="hidden";v.style.opacity=0;t.appendChild(g);F(h,"keydown",function(X){X=X||window.event;27==X.keyCode&&n.hideSettings(0)},!0);F(g,"click",function(){n.hideSettings(0)});x=b.languages[J].settings_modal.blocks;e=x.length;m.insertAdjacentHTML("beforeend",
    b.languages[J].settings_modal.title);for(g=0;g<e;++g){var I=f("div"),y=f("div"),q=f("div"),B=f("div");I.className="c-bl";y.className="desc";q.className="p";B.className="title";q.insertAdjacentHTML("beforeend",x[g].description);if("undefined"!==typeof x[g].toggle){var z="c-ac-"+g,S=f("button"),D=f("label"),A=f("input"),O=f("span"),T=f("span"),Y=f("span"),Ea=f("span");S.className="b-tl";D.className="b-tg";A.className="c-tgl";Y.className="on-i";Ea.className="off-i";O.className="c-tg";T.className="t-lb";
    S.setAttribute("aria-expanded","false");S.setAttribute("aria-controls",z);A.type="checkbox";O.setAttribute("aria-hidden","true");var na=x[g].toggle.value;A.value=na;T[c]=x[g].title;S.insertAdjacentHTML("beforeend",x[g].title);B.appendChild(S);O.appendChild(Y);O.appendChild(Ea);a?-1<G(JSON.parse(C).level,na)?(A.checked=!0,N.push(!0)):N.push(!1):x[g].toggle.enabled?(A.checked=!0,N.push(!0)):N.push(!1);K.push(na);x[g].toggle.readonly?(A.disabled=!0,E(O,"c-ro"),oa.push(!0)):oa.push(!1);E(y,"b-acc");E(B,
    "b-bn");E(I,"b-ex");y.id=z;y.setAttribute("aria-hidden","true");D.appendChild(A);D.appendChild(O);D.appendChild(T);B.appendChild(D);(function(X,pa,Fa){F(S,"click",function(){ua(pa,"act")?(ia(pa,"act"),Fa.setAttribute("aria-expanded","false"),X.setAttribute("aria-hidden","true")):(E(pa,"act"),Fa.setAttribute("aria-expanded","true"),X.setAttribute("aria-hidden","false"))},!1)})(y,I,S)}else z=f("div"),z.className="b-tl",z.setAttribute("role","heading"),z.setAttribute("aria-level","3"),z.insertAdjacentHTML("beforeend",
    x[g].title),B.appendChild(z);I.appendChild(B);y.appendChild(q);if(!0!==b.remove_cookie_tables&&"undefined"!==typeof x[g].cookie_table){z=document.createDocumentFragment();Q=b.languages[J].settings_modal.cookie_table_headers;for(D=0;D<Q.length;++D)A=f("th"),q=Q[D],A.setAttribute("scope","col"),q&&(B=q&&aa(q)[0],A[c]=Q[D][B],z.appendChild(A));q=f("tr");q.appendChild(z);B=f("thead");B.appendChild(q);z=f("table");z.appendChild(B);D=document.createDocumentFragment();for(A=0;A<x[g].cookie_table.length;A++){O=
    f("tr");for(T=0;T<Q.length;++T)if(q=Q[T])B=aa(q)[0],Y=f("td"),Y.insertAdjacentHTML("beforeend",x[g].cookie_table[A][B]),Y.setAttribute("data-column",q[B]),O.appendChild(Y);D.appendChild(O)}q=f("tbody");q.appendChild(D);z.appendChild(q);y.appendChild(z)}I.appendChild(y);u.appendChild(I)}a=f("div");c=f("button");e=f("button");a.id="s-bns";c.id="s-sv-bn";e.id="s-all-bn";c.className="c-bn";e.className="c-bn";c.insertAdjacentHTML("beforeend",b.languages[J].settings_modal.save_settings_btn);e.insertAdjacentHTML("beforeend",
    b.languages[J].settings_modal.accept_all_btn);a.appendChild(e);if(b=b.languages[J].settings_modal.reject_all_btn)g=f("button"),g.id="s-rall-bn",g.className="c-bn",g.insertAdjacentHTML("beforeend",b),F(g,"click",function(){n.hideSettings();n.hide();n.accept([])}),M.className="bns-t",a.appendChild(g);a.appendChild(c);F(c,"click",function(){n.hideSettings();n.hide();n.accept()});F(e,"click",function(){n.hideSettings();n.hide();n.accept("all")});p.appendChild(m);p.appendChild(t);M.appendChild(p);M.appendChild(u);
    M.appendChild(a);l.appendChild(M);k.appendChild(l);h.appendChild(k);H.appendChild(h);d.appendChild(H);d.appendChild(v);(Ia||document.body).appendChild(L)}function Oa(){function a(d,e){var c=!1,h=!1;try{for(var k=d.querySelectorAll(b.join(':not([tabindex="-1"]), ')),l,m=k.length,p=0;p<m;)l=k[p].getAttribute("data-focus"),h||"1"!==l?"0"===l&&(c=k[p],h||"0"===k[p+1].getAttribute("data-focus")||(h=k[p+1])):h=k[p],p++}catch(t){return d.querySelectorAll(b.join(", "))}e[0]=k[0];e[1]=k[k.length-1];e[2]=c;
    e[3]=h}var b=["[href]","button","input","details",'[tabindex="0"]'];a(M,Z);U&&a(w,qa)}function Ga(a,b){if(b.hasOwnProperty(a))return a;if(0<aa(b).length)return b.hasOwnProperty(J)?J:aa(b)[0]}function Pa(){for(var a=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),b=0;b<a.length;b++)a[b].setAttribute("aria-haspopup","dialog"),F(a[b],"click",function(d){n.showSettings(0);d.preventDefault?d.preventDefault():d.returnValue=!1})}function Qa(a){"number"===typeof a.cookie_expiration&&
    (Aa=a.cookie_expiration);"boolean"===typeof a.autorun&&(Ha=a.autorun);"string"===typeof a.cookie_domain&&(P=a.cookie_domain);"string"===typeof a.cookie_same_site&&(Ca=a.cookie_same_site);"string"===typeof a.cookie_path&&(Ba=a.cookie_path);"string"===typeof a.cookie_name&&(fa=a.cookie_name);"function"===typeof a.onAccept&&(la=a.onAccept);"function"===typeof a.onChange&&(ma=a.onChange);"number"===typeof a.revision&&(ka=a.revision,Da=!0);!0===a.autoclear_cookies&&(za=!0);xa=!0===a.page_scripts;ya=!1!==
    a.page_scripts_order;if(!0===a.auto_language){var b=navigator.language||navigator.browserLanguage;2<b.length&&(b=b[0]+b[1]);J=Ga(b.toLowerCase(),a.languages)}else"string"===typeof a.current_lang&&(J=Ga(a.current_lang,a.languages));!0===a.force_consent&&E(W,"force--consent")}var J="en",Ha=!0,fa="cc_cookie",Aa=182,P=location.hostname,Ba="/",Ca="Lax",za=!0,ka=0,xa,ya,n={},C,U=!1,V=!1,ca=!1,ja=!1,ba=!1,r,Q,x,la,ma,da=!0,Da=!1,ha,ra,qa=[],Z=[],N=[],K=[],oa=[],W=document.documentElement,L,w,H,M;n.allowedCategory=
    function(a){return-1<G(JSON.parse(ea(fa,"one",!0)||"{}").level||[],a)};n.run=function(a){if(!document.getElementById("cc_div")&&(Qa(a),C=ea(fa,"one",!0),da="number"===typeof a.revision?C?JSON.parse(C||"{}").revision===ka:!0:!0,U=!da||""===C,Na(!U,a),La(a.theme_css,function(){Oa();Ja(a.gui_options);Pa();!Ha||C&&da||n.show(a.delay||0);setTimeout(function(){E(L,"c--anim")},30);setTimeout(function(){Ka()},100)}),C&&(V=!0),V&&(wa(),"function"===typeof a.onAccept)))a.onAccept(JSON.parse(C||"{}"))};n.showSettings=
    function(a){setTimeout(function(){E(W,"show--settings");H.setAttribute("aria-hidden","false");ja=!0;setTimeout(function(){ca?ra=document.activeElement:ha=document.activeElement;0!==Z.length&&(Z[3]?Z[3].focus():Z[0].focus(),r=Z)},200)},0<a?a:0)};n.loadScript=function(a,b,d){var e="function"===typeof b;if(document.querySelector('script[src="'+a+'"]'))e&&b();else{var c=f("script");if(d&&0<d.length)for(var h=0;h<d.length;++h)d[h]&&c.setAttribute(d[h].name,d[h].value);e&&(c.readyState?c.onload=
    function(){if("loaded"===c.readyState||"complete"===c.readyState)c.onload=null,b()}:c.onload=b);c.src=a;(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(c)}};n.show=function(a){U&&setTimeout(function(){E(W,"show--consent");w.setAttribute("aria-hidden","false");ca=!0;setTimeout(function(){ha=document.activeElement;r=qa},200)},0<a?a:0)};n.hide=function(){U&&(ia(W,"show--consent"),w.setAttribute("aria-hidden","true"),ca=!1,setTimeout(function(){ha.focus();
    r=null},200))};n.hideSettings=function(){ia(W,"show--settings");ja=!1;H.setAttribute("aria-hidden","true");setTimeout(function(){ca?(ra&&ra.focus(),r=qa):(ha.focus(),r=null);ba=!1},200)};n.accept=function(a,b){function d(){for(var h=document.querySelectorAll(".c-tgl")||[],k=[],l=0;l<h.length;l++)h[l].checked&&k.push(h[l].value);return k}a=a||void 0;var e=b||[];b=[];if(a)if("object"===typeof a&&"number"===typeof a.length)for(var c=0;c<a.length;c++)-1!==G(K,a[c])&&b.push(a[c]);else"string"===typeof a&&
    ("all"===a?b=K.slice():-1!==G(K,a)&&b.push(a));else b=d();if(1<=e.length)for(c=0;c<e.length;c++)b=b.filter(function(h){return h!==e[c]});for(c=0;c<K.length;c++)!0===oa[c]&&-1===G(b,K[c])&&b.push(K[c]);Ma(b)};n.eraseCookies=function(a,b,d){var e=[];d=d?[d,"."+d]:[P,"."+P];if("object"===typeof a&&0<a.length)for(var c=0;c<a.length;c++)this.validCookie(a[c])&&e.push(a[c]);else this.validCookie(a)&&e.push(a);va(e,b,d)};n.validCookie=function(a){return""!=ea(a,"one",!0)};ta=window[sa]=void 0;return n}var sa=
    "initCookieConsent";"function"!==typeof window[sa]&&(window[sa]=ta)})();

/*
** Cookies Consent --> <script type="text/plain" data-cookiecategory="necessary|experience|analytics|marketing|...">
*/

var cookieconsent = initCookieConsent();

/*
**  Cookies Theme --> theme_css: '/css/cookies.css',
*/
document.body.classList.toggle('theme_custom'); // theme_custom | theme_turquoise | theme_funky 

/*
** Cookies Manager --> plugin configuration
*  <button type="button" data-cc="c-settings" class="cc-link">Uso de Cookies</button>
*  <a href="#cookies" data-cc="c-settings" class="link cc-link">Uso de Cookies</a>
*/
cookieconsent.run({
    revision: 1, 
 // theme_css: '/css/cookies.css',
    force_consent: false, // true | false
    page_scripts: true,
    cookie_expiration: 365,
    autoclear_cookies: true, 
    gui_options: {
        consent_modal : {
            layout : 'cloud',               // box/cloud/bar
            position : 'bottom center',     // bottom/top + left/right/center
            transition: 'slide'             // zoom/slide
        },
        settings_modal : {
            layout : 'box',                 // box/bar
            position : 'left',           // left/right
            transition: 'zoom'             // zoom/slide
        }
    },
    auto_language: true, 
    current_lang : 'es',
    languages : {
        'es' : {
            consent_modal : {
                title:  'Aviso de Privacidad',
                description: 'Usamos cookies para procesar datos personales y tus preferencias durante la navegación. '+
                        //   'Asímismo, empleamos tus datos de navegación sobre contenidos y clicks para mostrarle publicidad personalizada. '+
                             'Informarte y acepta o rechaza el uso de cookies antes de seguir navegando por esta web: <br/>'+
                             '<button type="button" data-cc="c-settings" class="cc-link">Uso de Cookies</button>', 
                primary_btn: {
                    text: 'Aceptar',
                    role: 'accept_all'  //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rechazar',
                    role: 'accept_necessary'   //'settings' or 'accept_necessary'
                }
            },
            settings_modal : {
                title : 'Uso de Cookies',
                save_settings_btn : "Guardar Configuración",
                accept_all_btn : "Aceptar Todo",
                reject_all_btn : "Rechazar Todo", // optional, [v.2.5.0 +]
                close_btn_label: "Cerrar",   
                cookie_table_headers : [
                    {coli: "Cookie" }, 
                    {cold: "Dominio" }, 
                    {colt: "Caducidad" }, 
                    {colf: "Finalidad" }
                ],
                blocks : [
                    {
                        title : '<div class="text-center text-primary">Política de Cookies</div>', 
                        description: 'Las cookies son pequeños archivos de texto que las páginas web pueden almacenar en tu dispositivo y utilizar durante la navegación. '+
                                     'Algunas cookies son estrictamente necesarias para el correcto funcionamiento de "<strong><u>'+window.location.hostname+'</u></strong>" y otras cookies sirven para recopilar tus preferencias de navegación y adaptar el contenido a tu perfil de usuario. <br/>'+
                                     'A continuación, puedes <strong>informarte</strong> y </u>aceptar</u> o <u>rechazar</u> tu consentimiento sobre las cookies que empleamos, clasificadas y explicadas según su tipología, origen, caducidad, finalidad: '
                    },
                    {
                        title : "Esenciales",
                        description: 'Las cookies de esenciales son extrictamente necesarias durante la navegación para personalizar contenido y recordar el acceso en áreas privadas del sitio web.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                coli: 'ng',
                                cold: window.location.hostname,
                                colt: 'sesión de usuario',
                                colf: 'identificar sesión de usuario activa'
                            },
                            {
                                coli: 'cc-cookie',
                                cold: window.location.hostname,
                                colt: 'privacidad en cookies',
                                colf: 'mostrar banner y panel de cookies'
                            }
                        ]
                    },
                    /*
                    {
                        title : "Preferencias",
                        description: 'Las cookies de preferencias permiten recordar información durante la navegación para adecuar el comportamiento del sitio web a tu perfil de usuario, idioma y región.',
                        toggle : {
                            value : 'experience',
                            enabled : false,
                            readonly: false
                        }
                    },
                    */
                    {
                        title : "Estadísticas",
                        description: 'Las cookies estadísticas ayudan al propietario a saber cómo interactúan los usuarios con el sitio web recopilando información anónima de su navegación y comportamiento.',
                        toggle : {
                            value : 'analytics',
                            enabled : false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                coli: '_ga',
                                cold: 'google.com',
                                colt: '2 años',
                                colf: 'identificar y contar visitas en páginas'
                            },
                            {
                                coli: '_gat',
                                cold: 'google.com',
                                colt: '1 minuto',
                                colf: 'identificar y contar visitas en páginas'
                            },
                            {
                                coli: '_gid',
                                cold: 'google.com',
                                colt: '24 horas',
                                colf: 'identificar y contar visitas en páginas'
                            }
                        ]
                    },
                    
                    {
                        title : "Marketing",
                        description: 'Las cookies de marketing se utilizan para rastrear visitas y mostrar anuncios personalizados, ofrecen servicios de terceros que se muestran en nuestra web como herramientas de Google y vídeos de Youtube.',
                        toggle : {
                            value : 'marketing',
                            enabled : false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                coli: 'ID',
                                cold: 'doubleclick.net',
                                colt: '1 año',
                                colf: 'preferencias y orientación publicitaria'
                            },
                            {
                                coli: 'DSID',
                                cold: 'doubleclick.net',
                                colt: '1 hora',
                                colf: 'Preferencias y orientación publicitaria'
                            },
                            {
                                coli: 'CONSENT',
                                cold: 'google.com',
                                colt: '2 años',
                                colf: 'medición de interactividad del usuario'
                            },
                            {
                                coli: 'VISITOR_INFO1_LIVE',
                                cold: 'google.com',
                                colt: '6 meses',
                                colf: 'seguimiento de vídeos visitados'
                            },
                            {
                                coli: 'YSC',
                                cold: 'google.com',
                                colt: 'sesión de usuario',
                                colf: 'medición de interactividad del usuario'
                            }
                        ]
                    },
                    {
                        title : "Controlar Cookies", 
                        description: 'Puedes permitir y bloquear o eliminar cada una de las cookies instaladas en su equipo mediante la configuración de tu navegador, '+
                                     'normalmente puedes hacerlo desde el menú <strong>Herramientas</strong> u <strong>Opciones</strong>, aunque al desactivar cookies, '+
                                     'algunos de los servicios disponibles durante la navegación podrían dejar de estar operativos o no funcionar correctamente.'
                    },
                    {
                        title : "Navegación Privada", 
                        description: 'El modo de navegación privada del navegador ignora el historial de navegación, contraseñas, cookies y otra información personal, '+
                                     'normalmente puedes hacerlo desde el menú <strong>Herramientas</strong> u <strong>Opciones</strong>, aunque al ocultar su perfil, '+
                                     'durante la navegación podrían funcionar de forma general sin tener en cuenta sus preferencias algunos servicios personalizados.'
                    },
                    {
                        title : "Más Información",
                        description: 'Para más información sobre cómo procesamos los datos de carácter personal visita nuestra <a class="cc-link" rel="nofollow" href="./privacidad" target="_blank">Política de Privacidad</a> y '+
                                     'para cualquier otro motivo de información, términos y condiciones legales o contacto con el responsable de "<strong><u>'+window.location.hostname+'</u></strong>" <a class="cc-link" rel="nofollow" href="./legal" target="_blank">Aviso Legal</a>.'
                    }
                ]
            }
        }
    }
});
