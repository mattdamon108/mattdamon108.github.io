(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{15:function(t,e,n){"use strict";var r=n(2),a=n.n(r),i=n(6),s=n.n(i),o=n(9),u=n.n(o),c=n(0),l=n.n(c);e.a=function(t){var e=t.post;return l.a.createElement("div",{key:e.title,className:"jsx-2496144457 post-container"},l.a.createElement("div",{style:{backgroundImage:e.thumb?"url(/static/images/post_img/".concat(e.thumb,")"):"url(/static/images/post_img/dummy_thumb.jpg)"},className:"jsx-2496144457 post-img-container"}),l.a.createElement("div",{className:"jsx-2496144457 post-body"},l.a.createElement("div",{className:"jsx-2496144457 post-title"},l.a.createElement(u.a,{href:"/post/".concat(e.filename)},l.a.createElement("a",{className:"jsx-2496144457"},e.title))),l.a.createElement("div",{className:"jsx-2496144457 post-subtitle"},e.slug),l.a.createElement("div",{className:"jsx-2496144457 post-createdAt"},s()(e.createdAt).format("MMM D, YYYY"))),l.a.createElement(a.a,{styleId:"2496144457",css:[".post-container.jsx-2496144457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}",".post-img-container.jsx-2496144457{min-width:150px;height:150px;background-size:cover;background-repeat:no-repeat;background-position:center;}",".post-body.jsx-2496144457{display:inline-block;margin:0 1rem;}",'.post-title.jsx-2496144457{font-family:"Ubuntu","Helvetica Neue",Helvetica,Arial, sans-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}',".post-subtitle.jsx-2496144457{color:grey;}",".post-createdAt.jsx-2496144457{margin:1rem 0 0 0;}","@media (max-width:576px){.post-container.jsx-2496144457{display:block;margin:1rem;}}"]}))}},26:function(t,e,n){"use strict";var r=n(22),a=n(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(27)),s=a(n(34)),o=a(n(10)),u=a(n(11)),c=a(n(18)),l=a(n(19)),d=a(n(20)),f=a(n(32)),h=a(n(14)),m=n(46),p=r(n(0)),v=(a(n(25)),r(n(21))),g=n(23);var y=function(t){function e(){var t,n,r,a,i,u;(0,o.default)(this,e);for(var d=arguments.length,p=new Array(d),y=0;y<d;y++)p[y]=arguments[y];return n=(0,c.default)(this,(t=(0,l.default)(e)).call.apply(t,[this].concat(p))),(0,h.default)((0,f.default)((0,f.default)(n)),"formatUrls",(r=function(t,e){return{href:t&&"object"===(0,s.default)(t)?(0,m.format)(t):t,as:e&&"object"===(0,s.default)(e)?(0,m.format)(e):e}},a=null,i=null,u=null,function(t,e){if(t===a&&e===i)return u;var n=r(t,e);return a=t,i=e,u=n,n})),(0,h.default)((0,f.default)((0,f.default)(n)),"linkClicked",function(t){var e=t.currentTarget,r=e.nodeName,a=e.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,o=i.as;if(function(t){var e=(0,m.parse)(t,!1,!0),n=(0,m.parse)((0,g.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var u=window.location.pathname;s=(0,m.resolve)(u,s),o=o?(0,m.resolve)(u,o):s,t.preventDefault();var c=n.props.scroll;null==c&&(c=o.indexOf("#")<0);var l=n.props.replace?"replace":"push";v.default[l](s,o,{shallow:n.props.shallow}).then(function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){n.props.onError&&n.props.onError(t)})}}}),n}return(0,d.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(t,e);v.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={onClick:function(e){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=a||r),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=(0,v._rewriteUrlForNextExport)(s.href)),p.default.cloneElement(i,s)}}]),e}(p.Component);e.default=y},27:function(t,e,n){t.exports=n(28)},28:function(t,e,n){var r=n(3),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},298:function(t,e,n){__NEXT_REGISTER_PAGE("/tag/tagPresenter",function(){return t.exports=n(54),{page:t.exports.default}})},4:function(t,e,n){"use strict";var r=n(2),a=n.n(r),i=n(0),s=n.n(i);e.a=function(){return s.a.createElement("div",{id:"header",className:"jsx-583156192"},s.a.createElement("div",{className:"jsx-583156192 container"},s.a.createElement("div",{className:"jsx-583156192 header-container"},s.a.createElement("div",{id:"header-title",className:"jsx-583156192"},s.a.createElement("a",{href:"/",className:"jsx-583156192"},"Build the Codes")),s.a.createElement("div",{id:"header-body",className:"jsx-583156192"},s.a.createElement("div",{id:"avatar-img",style:{backgroundImage:'url("/static/images/avatar/moondaddi_avatar.jpg")'},className:"jsx-583156192"}),s.a.createElement("div",{id:"profile",className:"jsx-583156192"},s.a.createElement("div",{id:"name",className:"jsx-583156192"},s.a.createElement("a",{href:"/",className:"jsx-583156192"},"moondaddi")),s.a.createElement("div",{className:"jsx-583156192"},"My dreams with Codes")),s.a.createElement("div",{id:"menu",className:"jsx-583156192"},s.a.createElement("div",{id:"header-tag",className:"jsx-583156192"},s.a.createElement("a",{href:"/tag",className:"jsx-583156192"},"Tags")))))),s.a.createElement(a.a,{styleId:"583156192",css:["#header.jsx-583156192{background-color:var(--background-color);color:white;}",".header-container.jsx-583156192{margin:0 1rem;padding:1rem 0;}","#header-title.jsx-583156192{display:block;position:relative;font-family:var(--text-san-serif);font-size:1.7rem;margin:1rem auto;font-weight:bold;}","#header-title.jsx-583156192 a.jsx-583156192{color:white;-webkit-text-decoration:none;text-decoration:none;}","#avatar-img.jsx-583156192{display:inline-block;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;width:50px;height:50px;background-size:contain;background-repeat:no-repeat;background-position:center center;vertical-align:middle;}","#profile.jsx-583156192{display:inline-block;vertical-align:middle;padding-left:1rem;font-family:$font-serif;color:$text-normal-color;font-size:0.9rem;}","#header-body.jsx-583156192{position:relative;}","#menu.jsx-583156192{display:inline-block;position:absolute;right:0;font-family:$font-serif;font-size:0.9rem;margin-top:1rem;}","#menu.jsx-583156192 #header-tag.jsx-583156192{display:inline-block;margin:auto 1rem;}"]}))}},54:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),i=n(0),s=n.n(i),o=n(5),u=n(4),c=n(15);e.default=function(t){var e=t.posts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement("div",{id:"content",className:"jsx-3186059871"},s.a.createElement("div",{className:"jsx-3186059871 container"},s.a.createElement("div",{className:"jsx-3186059871 post-list"},e.length>0?e.map(function(t){return s.a.createElement(c.a,{key:t.title,post:t})}):s.a.createElement("div",{className:"jsx-3186059871"},"No result..."))),s.a.createElement(a.a,{styleId:"3186059871",css:["#content.jsx-3186059871{min-height:100vh;}"]})),s.a.createElement(o.a,null))}},6:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",s="month",o="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),a=e-r<0,i=t.clone().add(n+(a?-1:1),s);return Number(-(n+(e-r)/(a?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:s,y:u,w:i,d:a,h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",p={};p[m]=h;var v=function(t){return t instanceof x},g=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var a=t.name;p[a]=t,r=a}return n||(m=r),r},y=function(t,e,n){if(v(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new x(r)},$=f;$.l=g,$.i=v,$.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u})};var x=function(){function d(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",u)},f.month=function(t){return this.$g(t,"$M",s)},f.day=function(t){return this.$g(t,"$W",a)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var c=this,l=!!$.u(o)||o,d=$.p(t),f=function(t,e){var n=$.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(a)},h=function(t,e){return $.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case u:return l?f(1,0):f(31,11);case s:return l?f(1,p):f(0,p+1);case i:var y=this.$locale().weekStart||0,x=(m<y?m+7:m)-y;return f(l?v-x:v+(6-x),p);case a:case"date":return h(g+"Hours",0);case r:return h(g+"Minutes",1);case n:return h(g+"Seconds",2);case e:return h(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,o){var c,l=$.p(i),d="set"+(this.$u?"UTC":""),f=(c={},c[a]=d+"Date",c.date=d+"Date",c[s]=d+"Month",c[u]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[l],h=l===a?this.$D+(o-this.$W):o;if(l===s||l===u){var m=this.clone().set("date",1);m.$d[f](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[$.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var d=$.p(o),f=function(e){var n=y(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(d===s)return this.set(s,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===a)return f(1);if(d===i)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.valueOf()+t*h;return $.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),a=this.$locale(),i=this.$H,s=this.$m,o=this.$M,u=a.weekdays,c=a.months,d=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},f=function(t){return $.s(i%12||12,t,"0")},h=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(a.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,u,2),ddd:d(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:$.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(l,function(t,e){return e||m[t]||r.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,f=$.p(c),h=y(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,v=$.m(this,h);return v=(d={},d[u]=v/12,d[s]=v,d[o]=v/3,d[i]=(p-m)/6048e5,d[a]=(p-m)/864e5,d[r]=p/36e5,d[n]=p/6e4,d[e]=p/1e3,d)[f]||p,l?v:$.a(v)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=g(t,e,!0),n},f.clone=function(){return $.w(this.toDate(),this)},f.toDate=function(){return new Date(this.$d)},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return y.prototype=x.prototype,y.extend=function(t,e){return t(e,x,y),y},y.locale=g,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=p[m],y.Ls=p,y}()},9:function(t,e,n){t.exports=n(26)}},[[298,1,0]]]);