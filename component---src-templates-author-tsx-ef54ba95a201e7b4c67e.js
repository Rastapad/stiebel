(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7X66":function(e,t,a){e.exports={authorList:"k_V",authorListItem:"k_W",staticAvatar:"k_X",authorAvatar:"k_Y",authorNameTooptip:"k_Z",authorProfileImage:"k_0",authorCard:"k_1",hovered:"k_2",authorInfo:"k_3",bio:"k_4",postFullByline:"k_5",postFullBylineMeta:"k_6",noImage:"k_H",authorSocialLink:"k_7"}},EJ3M:function(e,t,a){"use strict";var r=a("zLVn"),n=a("q1tI"),s=a("9eSz"),o=a.n(s);t.a=function(e){var t=e.className,a=e.fixed,s=e.fluid,i=e.src,l=e.alt,c=Object(r.a)(e,["className","fixed","fluid","src","alt"]);return n.createElement(n.Fragment,null,a?n.createElement(o.a,Object.assign({className:t,fixed:a,alt:l},c)):s?n.createElement(o.a,Object.assign({className:t,fluid:s,alt:l},c)):i&&n.createElement("img",Object.assign({className:t,src:i,alt:l},c)))}},ay3d:function(e,t,a){"use strict";var r=a("q1tI"),n=a("dDsW"),s=a("cTBv"),o=a("PPe0"),i=a("EJ3M"),l=a("xZxy"),c=a.n(l),m={year:"numeric",month:"short",day:"numeric"};t.a=function(e){var t=e.post,a=e.i,l=e.isHome,u=Object(n.a)(),d=t.frontmatter.featured;return r.createElement("article",{className:c.a.postCard+" "+(l&&d&&0==a%6&&c.a.postCardLarge||"")},r.createElement(o.a,{className:c.a.postCardImageLink,to:"/"+t.frontmatter.category+"/"+t.fields.slug},r.createElement(i.a,{className:c.a.postCardImage,alt:t.frontmatter.title,fluid:t.frontmatter.image.childImageSharp.fluid})),r.createElement("div",{className:c.a.postCardContent},r.createElement(o.a,{className:c.a.postCardContentLink,to:"/"+t.frontmatter.category+"/"+t.fields.slug},r.createElement("header",{className:c.a.postCardHeader},r.createElement("div",{className:c.a.postCardPrimaryTag},void 0!==t.frontmatter.tags[0]&&u.formatMessage({id:"tags."+t.frontmatter.tags[0]+".title"})),r.createElement("h2",{className:c.a.postCardTitle},t.frontmatter.title)),r.createElement("section",{className:c.a.postCardExcerpt},r.createElement("p",null,t.excerpt))),r.createElement("footer",{className:c.a.postCardMeta},r.createElement(s.a,{authors:t.frontmatter.authors}),r.createElement("div",{className:c.a.postCardBylineContent},r.createElement("span",null,u.formatMessage({id:"authors."+t.frontmatter.authors[0].id+".title"})),r.createElement("span",{className:c.a.postCardBylineDate},r.createElement("time",{dateTime:"2018-08-20"},u.formatDate(t.frontmatter.date,m))," ",r.createElement("span",{className:"bull"},"•")," ",u.formatNumber(t.timeToRead)," ",u.formatMessage({id:"post.timeToRead"}))))))}},cTBv:function(e,t,a){"use strict";var r=a("q1tI"),n=a("EJ3M");var s=a("dI71"),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).onHoverIn=function(){clearTimeout(a.hoverTimeout),a.setState({currentClass:a.activeClass})},a.onHoverOut=function(){var e=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a);a.hoverTimeout=setTimeout((function(){e.setState({currentClass:""})}),200)},a.anchorRef=r.createRef(),a.activeClass=a.props.activeClass,a.hoverTimeout=null,a.state={},a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.anchorRef.current&&this.anchorRef.current.addEventListener("mouseout",this.onHoverOut,{passive:!0}),this.anchorRef.current&&this.anchorRef.current.addEventListener("mouseover",this.onHoverIn,{passive:!0})},a.componentWillUnmount=function(){clearTimeout(this.hoverTimeout),this.anchorRef.current.removeEventListener("mouseover",this.onHoverIn),this.anchorRef.current.removeEventListener("mouseout",this.onHoverOut)},a.render=function(){return this.props.children(this)},t}(r.Component),i=a("aa8Z"),l=a("dDsW"),c=a("7X66"),m=a.n(c);t.a=function(e){var t=e.authors,a=e.isPost,s=Object(l.a)();return r.createElement("ul",{className:m.a.authorList},t.map((function(e,t){return r.createElement(o,{key:t,activeClass:m.a.hovered},(function(o){return r.createElement("li",{key:t,ref:o.anchorRef,className:m.a.authorListItem},!a&&r.createElement("div",{className:m.a.authorNameTooptip},s.formatMessage({id:"authors."+e.id+".title"})),a&&r.createElement("div",{className:m.a.authorCard+" "+o.state.currentClass},e.avatar?r.createElement(n.a,{className:m.a.authorProfileImage,fixed:e.avatar.childImageSharp.fixed,fluid:e.avatar.childImageSharp.fluid,alt:e.title}):r.createElement("div",{className:m.a.authorProfileImage},r.createElement(i.a,null)),r.createElement("div",{className:m.a.authorInfo},e.bio?r.createElement("div",{className:m.a.bio},r.createElement("h2",null,s.formatMessage({id:"authors."+e.id+".title"})),r.createElement("p",null,s.formatMessage({id:"authors."+e.id+".bio"}))):r.createElement(r.Fragment,null,r.createElement("h2",null,s.formatMessage({id:"authors."+e.id+".title"}))))),e.avatar?r.createElement("span",{className:(a?m.a.authorAvatar:m.a.staticAvatar)+" "+m.a.authorProfileImage},r.createElement(n.a,{className:m.a.authorProfileImage,fixed:e.avatar.childImageSharp.fixed,fluid:e.avatar.childImageSharp.fluid,alt:e.id})):r.createElement("span",{className:(a?m.a.authorAvatar:m.a.staticAvatar)+" "+m.a.authorProfileImage},r.createElement(i.a,null)))}))})))}},qPpN:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a("4Qsy"),s=a("ay3d");t.default=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(n.a,{template:"author",data:t},r.createElement("div",{className:"inner"},r.createElement("div",{className:" posts"},r.createElement("div",{className:"post-feed"},t.posts.edges.map((function(e,t){return r.createElement(s.a,{post:e.node,i:t,key:t})})))))))}},xZxy:function(e,t,a){e.exports={postCard:"j_z",postCardImageLink:"j_B",postCardImage:"j_C",postCardContentLink:"j_D",postCardHeader:"j_F",postFeed:"j_G",noImage:"j_H",postCardPrimaryTag:"j_J",postCardTitle:"j_K",postCardContent:"j_L",postCardExcerpt:"j_M",postCardMeta:"j_N",postCardBylineContent:"j_P",postCardBylineDate:"j_Q",bull:"j_R",postCardLarge:"j_S",authorProfileImage:"j_T"}}}]);
//# sourceMappingURL=component---src-templates-author-tsx-ef54ba95a201e7b4c67e.js.map