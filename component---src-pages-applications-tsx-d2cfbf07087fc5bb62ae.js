(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{E9rf:function(e,t,a){"use strict";var r=a("q1tI"),n=a("9eSz"),c=a.n(n),i=a("6/os"),o=a("mqSF"),l=a.n(o),s=a("Wbzz"),d=a("zLVn"),u=a("ttfG"),f=a("Sk91"),p=a("oEq0"),m=function(e){var t=e.to,a=e.locale,n=Object(d.a)(e,["to","locale"]),c=r.useContext(u.a).activeLocale,i=a?f.a[a]:f.a[c],o="/"===t,l=i.default?t:"/"+i.path+(o?"":""+t);return r.createElement(p.AnchorLink,Object.assign({},n,{to:l}))},b=(t.a=function(){var e=Object(s.useStaticQuery)(b),t=Object(i.a)().formatMessage;return r.createElement("div",{className:"inner"},r.createElement("div",{className:l.a.feed},e.applications.sections.map((function(e){return r.createElement("article",{key:e.id,className:l.a.card,id:e.id},r.createElement(c.a,{className:l.a.cardImg,fluid:e.image.childImageSharp.fluid}),r.createElement("div",{className:l.a.cardContent},r.createElement("div",{className:l.a.cardContentLink},r.createElement("header",{className:l.a.cardHeader},r.createElement("h2",{className:l.a.cardTitle},t(e.id+".title"))),r.createElement("section",{className:l.a.cardExcerpt},t(e.id+".desc"),e.links.map((function(e){return r.createElement("p",{className:l.a.cardLink,key:e.id},r.createElement(m,{to:e.link,stripHash:!0},t(e.id)))}))))))}))))},"2138508730")},F0uZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=u;var r,n=(r=a("q1tI"))&&r.__esModule?r:{default:r},c=a("Wbzz"),i=a("dj5g"),o=a("PDH8");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){var t=e.to,a=e.title,r=e.children,o=e.className,l=e.stripHash,d=void 0!==l&&l,u=e.gatsbyLinkProps,f=void 0===u?{}:u,p=e.onAnchorLinkClick,m=d?i.handleStrippedLinkClick:i.handleLinkClick,b=s(s({},f),{},{to:d?(0,i.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,p)}});return a&&(b.title=a),o&&(b.className=o),n.default.createElement(c.Link,b,Boolean(r)?r:a)}u.propTypes=o.anchorLinkTypes},PDH8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var r,n=(r=a("17x9"))&&r.__esModule?r:{default:r};var c={to:n.default.string.isRequired,title:n.default.string,className:n.default.string,stripHash:n.default.bool,gatsbyLinkProps:n.default.object,onAnchorLinkClick:n.default.func,children:n.default.node};t.anchorLinkTypes=c},mqSF:function(e,t,a){e.exports={title:"f_b",productsPageHeader:"f_k",feed:"f_c",card:"f_l",cardImgLink:"f_f",cardImg:"f_g",cardContent:"f_m",cardContentLink:"f_n",cardHeader:"f_p",cardTitle:"f_h",cardExcerpt:"f_j",cardLink:"f_q"}},oEq0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=a("F0uZ")},ulVM:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a("4Qsy"),c=a("6/os"),i=a("E9rf");t.default=function(){var e=Object(c.a)().formatMessage;return r.createElement(n.a,{template:"page"},r.createElement("div",{className:"inner "},r.createElement("header",{className:"site-archive-header"},r.createElement("h1",{className:"site-title  no-image"},e("applications.title"))),r.createElement(i.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-applications-tsx-d2cfbf07087fc5bb62ae.js.map