(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{304:function(e,t,n){"use strict";n.r(t),function(e){var r=n(34),o=n.n(r),a=n(1),s=n(318),i=n.n(s),c=n(309),l=n(310),u=n(313),p=n(312),f=n(437),d=function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.location;return t.data,e.createElement(u.a,{location:n},e.createElement(i.a,null,e.createElement("title",null,"Newsletter")),e.createElement(p.a,{hasSideBar:!1,css:{display:"flex",flexDirection:"column"}},e.createElement("h1",{id:"introduction",style:{marginTop:0}},"Newsletter"),e.createElement("div",null,"Sign up for the Gatsby newsletter to keep up with the latest from the Gatsby community! Hear about new features, tips & tricks, and what people are building."),e.createElement(f.a,{signupMessage:"Sign up for the Gatsby Newsletter",confirmMessage:"Success! You have been subscribed to the Gatsby newsletter. Expect to see a newsletter in your inbox each Wednesday (or the equivalent of US Wednesday in your time zone)!",containerCss:{marginTop:Object(c.c)(1),paddingTop:Object(c.c)(.5),borderTop:"2px solid "+l.colors.lilac}})))},n}(a.Component);t.default=d}.call(this,n(87))},312:function(e,t,n){"use strict";(function(e){n(88),n(1);var r=n(310),o=n.n(r),a=n(309);t.a=function(t){var n,r=t.children,s=t.className,i=t.hasSideBar,c=void 0===i||i,l=t.css,u=void 0===l?{}:l;return e.createElement("div",{css:Object.assign((n={maxWidth:c?Object(a.c)(o.a.maxWidthWithSidebar):Object(a.c)(o.a.maxWidth),margin:"0 auto",padding:Object(a.c)(1.5)+" "+Object(a.c)(a.b.blockMarginBottom),paddingBottom:Object(a.c)(3.5),position:"relative"},n[o.a.Tablet]={paddingBottom:Object(a.c)(1.5)},n),u),className:s},r)}}).call(this,n(87))},343:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=Object({NODE_ENV:"production",PUBLIC_DIR:"/Users/swyx/gatsby/starterShowcaseSecondTry/gatsby/www/public",BUILD_STAGE:"build-javascript"}).DEBUG),e}(t=e.exports=n(379)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(a=++o)}),e.splice(a,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,n(353))},353:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,p=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):p=-1,l.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++p<t;)c&&c[p].run();p=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},379:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var a=s[c];n=o.call(e,a),s.splice(c,1),c--}return n}),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(380),t.names=[],t.skips=[],t.formatters={}},380:function(e,t){var n=1e3,r=6e4,o=36e5,a=24*o;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*o;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===c&&!1===isNaN(e))return t.long?s(i=e,a,"day")||s(i,o,"hour")||s(i,r,"minute")||s(i,n,"second")||i+" ms":function(e){return e>=a?Math.round(e/a)+"d":e>=o?Math.round(e/o)+"h":e>=r?Math.round(e/r)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},437:function(e,t,n){"use strict";(function(e){n(88);var r=n(34),o=n.n(r),a=n(1),s=n.n(a),i=n(309),c=n(310),l=n.n(c),u=n(89),p=n(338),f=n.n(p),d=n(438),m=n.n(d),g=u.css.keyframes({"0%":{backgroundPosition:"0 0"},"100%":{backgroundPosition:"30px 60px"}}),h={backgroundColor:"#fff",border:"1px solid "+c.colors.ui.bright,borderRadius:l.a.radius,color:c.colors.brand,fontFamily:i.b.headerFontFamily.join(","),padding:Object(i.c)(.5),verticalAlign:"middle",transition:"all "+l.a.animation.speedDefault+" "+l.a.animation.curveDefault,"::placeholder":{color:c.colors.lilac,opacity:1}},b={margin:0},y=function(t){function n(){var e;return(e=t.call(this)||this)._handleEmailChange=function(t){e.setState({email:t.target.value})},e._postEmailToMailchimp=function(t,n){m()(t,n).then(function(t){"success"!==t.result?e.setState({status:"error",msg:t.msg}):e.setState({status:"success",msg:t.msg})}).catch(function(t){e.setState({status:"error",msg:t})})},e._handleFormSubmit=function(t){t.preventDefault(),t.stopPropagation(),e.setState({status:"sending",msg:null},e._postEmailToMailchimp(e.state.email,{pathname:document.location.pathname}))},e.state={email:""},e}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.signupMessage,r=t.confirmMessage,o=t.containerCss;return e.createElement("div",{css:Object.assign({borderTop:"2px solid "+c.colors.lilac,marginTop:Object(i.c)(3),paddingTop:""+Object(i.c)(1)},o)},"success"===this.state.status?e.createElement("div",null,r):e.createElement("div",null,e.createElement("p",null,n),e.createElement("form",{id:"email-capture",method:"post",noValidate:!0,css:b},e.createElement("div",null,e.createElement("input",{type:"email",name:"email",placeholder:"you@email.com",onChange:this._handleEmailChange,css:Object.assign({},h,{width:"250px",":focus":{borderColor:c.colors.gatsby,outline:0,boxShadow:"0 0 0 0.2rem "+f()(c.colors.lilac,.25)}})}),e.createElement("button",{type:"submit",onClick:this._handleFormSubmit,css:Object.assign({},h,{borderColor:c.colors.gatsby,color:c.colors.gatsby,cursor:"pointer",fontWeight:"bold",marginLeft:Object(i.c)(.5),":hover, &:focus":{backgroundSize:"30px 30px",backgroundColor:c.colors.gatsby,backgroundImage:"linear-gradient(45deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)",color:"#fff",animation:g+" 2.8s linear infinite"},":focus":{outline:0,boxShadow:"0 0 0 0.2rem "+f()(c.colors.lilac,.25)}})},"Subscribe"),"error"===this.state.status&&e.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.msg},css:{marginTop:""+Object(i.c)(.5)}})))))},n}(s.a.Component);y.defaultProps={signupMessage:"Enjoyed this post? Receive the next one in your inbox!",confirmMessage:"Thank you! Youʼll receive your first email shortly.",containerCss:{}},t.a=y}).call(this,n(87))},438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(439)),o=s(n(440)),a=n(441);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var n=(0,a.validate)(e),s=encodeURIComponent(e);if(!n)throw"gatsy-plugin-mailchimp: email must be of type string and a valid email address. See README for more information.";var i=function(){var e=r.default.plugins.find(function(e){return"gatsby-plugin-mailchimp"===e.resolve}).options;if("string"!=typeof e.endpoint)throw"Mailchimp endpoint required and must be of type string. See repo README for more info.";return e}().endpoint;return function(e){return new Promise(function(t,n){return(0,o.default)(e,{param:"c"},function(e,r){e&&n(e),r&&t(r)})})}((i=i.replace(/\/post/g,"/post-json"))+"&EMAIL="+s+function(e){var t="";for(var n in e)t=t.concat("&"+n.toUpperCase()+"="+e[n]);return t}(t))}},439:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatsby",siteUrl:"https://www.gatsbyjs.org",description:"Blazing-fast static site generator for React"},mapping:{"MarkdownRemark.frontmatter.author":"AuthorYaml"},plugins:[{resolve:"gatsby-source-npm-package-search",options:{keywords:["gatsby-plugin","gatsby-component"]}},{resolve:"gatsby-source-filesystem",options:{name:"docs",path:t+"/../docs/"}},{resolve:"gatsby-source-filesystem",options:{name:"packages",path:t+"/../packages/"}},{resolve:"gatsby-source-filesystem",options:{name:"StarterShowcaseImages",path:t+"/src/data/StarterShowcase/generatedScreenshots"}},{resolve:"gatsby-source-filesystem",options:{name:"StarterShowcaseData",path:t+"/src/data/StarterShowcase/startersData"}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/starter-showcase/*"]}},{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}},"gatsby-transformer-documentationjs","gatsby-transformer-yaml",{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:786,backgroundColor:"#ffffff"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.05rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-autolink-headers","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-nprogress",options:{color:"#9D7CBF",showSpinner:!1}},"gatsby-plugin-glamor","gatsby-transformer-sharp","gatsby-plugin-sharp","gatsby-plugin-catch-links","gatsby-plugin-lodash",{resolve:"gatsby-plugin-manifest",options:{name:"GatsbyJS",short_name:"GatsbyJS",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"src/assets/gatsby-icon.png"}},{resolve:"gatsby-plugin-offline",options:{navigateFallback:null,navigateFallbackWhitelist:[]}},"gatsby-transformer-csv","gatsby-plugin-twitter","gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-93349937-1"}},{resolve:"gatsby-plugin-google-tagmanager",options:{id:"GTM-KLZLVML"}},{resolve:"gatsby-plugin-fullstory",options:{fs_org:"B2TRP"}},"gatsby-plugin-sitemap",{resolve:"gatsby-plugin-feed",options:{feeds:[{query:'\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                  filter: {\n                    frontmatter: { draft: { ne: true } }\n                    fileAbsolutePath: { regex: "/docs.blog/" }\n                  }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      frontmatter {\n                        title\n                        date\n                        excerpt\n                        author {\n                          id\n                        }\n                      }\n                      fields {\n                        slug\n                      }\n                    }\n                  }\n                }\n              }\n            ',output:"/blog/rss.xml",setup:function(e){var t=e.query.site.siteMetadata;return{title:t.title,description:t.description,feed_url:t.siteUrl+"/blog/rss.xml",site_url:t.siteUrl,generator:"GatsbyJS"}},serialize:function(e){var t=e.query,n=t.site;return t.allMarkdownRemark.edges.map(function(e){var t=e.node;return{title:t.frontmatter.title,description:t.frontmatter.excerpt||t.excerpt,url:n.siteMetadata.siteUrl+t.fields.slug,guid:n.siteMetadata.siteUrl+t.fields.slug,custom_elements:[{"content:encoded":t.html}],author:t.frontmatter.author.id}})}}]}},"gatsby-plugin-netlify","gatsby-plugin-netlify-cache",{resolve:"gatsby-plugin-mailchimp",options:{endpoint:"https://gatsbyjs.us17.list-manage.com/subscribe/post?u=1dc33f19eb115f7ebe4afe5ee&amp;id=f366064ba7"}},"gatsby-transformer-screenshot"]}}).call(this,"/")},440:function(e,t,n){var r=n(343)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={}),t||(t={});var s,i,c=t.prefix||"__jp",l=t.name||c+o++,u=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;function m(){s.parentNode&&s.parentNode.removeChild(s),window[l]=a,i&&clearTimeout(i)}return p&&(i=setTimeout(function(){m(),n&&n(new Error("Timeout"))},p)),window[l]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+f(l)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,d.parentNode.insertBefore(s,d),function(){window[l]&&m()}};var o=0;function a(){}},441:function(e,t,n){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64||t[1].split(".").some(function(e){return e.length>63}))}}}]);
//# sourceMappingURL=component---src-pages-newsletter-js-cfed7f8547d87b005603.js.map