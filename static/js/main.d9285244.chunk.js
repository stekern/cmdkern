(this.webpackJsonpcmdkern=this.webpackJsonpcmdkern||[]).push([[0],{10:function(M,e,t){M.exports=t(16)},15:function(M,e,t){},16:function(M,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),l=t(9),s=t(5),a=t(1),d=t(2),m=t(4),c=t(3),h=["bold","email","green","blue","italic","underscore","url"],u=function M(e){for(var t=e,r=0;r<h.length;r++){var i=h[r],o=new RegExp("^(.*)(\\[".concat(i,"\\])(.*)(\\[/").concat(i,"\\])(.*)$")),l=e.match(o);if(l&&6===l.length){var s=M(l[1]),a=M(l[3]),d=M(l[5]);"bold"===i?t=n.createElement(n.Fragment,null,s,n.createElement("strong",null,a),d):"url"===i?t=n.createElement(n.Fragment,null,s,n.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:l[3]},a),d):"email"===i?t=n.createElement(n.Fragment,null,s,n.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:".concat(l[3])},a),d):"italic"===i?t=n.createElement(n.Fragment,null,s,n.createElement("i",null,a),d):"underscore"===i?t=n.createElement(n.Fragment,null,s,n.createElement("u",null,a),d):"green"===i?t=n.createElement(n.Fragment,null,s,n.createElement("font",{color:"#20C20E"},a),d):"blue"===i&&(t=n.createElement(n.Fragment,null,s,n.createElement("font",{color:"#3399ff"},a),d))}}return t},N=function(M){return"".concat(M,"_").concat((new Date).getTime())},p=t(6),y=function(M){Object(m.a)(t,M);var e=Object(c.a)(t);function t(){var M;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(M=e.call.apply(e,[this].concat(i))).timeoutId=void 0,M.linePrefix=u("[green][bold]\u279c[/bold][/green] [blue][bold]~[/bold][/blue] "),M.state={charIndex:0},M.nextLetter=function(){var e=M.state,t=e.charIndex,r=e.formattedLine,i=M.props,o=i.line,l=i.handleFinish,s=i.prefix;"".concat(s?"> ":"").concat(o);o.length?t<o.length-1?M.setState((function(e){return Object(p.a)({charIndex:e.charIndex+1},Object(p.a)({},0===t&&{formattedLine:s?n.createElement(n.Fragment,null,M.linePrefix,3===o.split(/^(\s*)/).length&&o.split(/^(\s*)/)[1].split("").map((function(M){return n.createElement("span",null,"\xa0")})),u(o)):n.createElement(n.Fragment,null,3===o.split(/^(\s*)/).length&&o.split(/^(\s*)/)[1].split("").map((function(M){return n.createElement("span",null,"\xa0")})),u(o))}))})):(M.setState({charIndex:0,formattedLine:void 0}),l(r)):l(n.createElement(n.Fragment,null,s&&M.linePrefix,3===o.split(/^(\s*)/).length&&o.split(/^(\s*)/)[1].split("").map((function(M){return n.createElement("span",null,"\xa0")})),u(o)))},M}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var M=this,e=this.props.speed;this.timeoutId=setInterval((function(){return M.nextLetter()}),e)}},{key:"componentDidUpdate",value:function(M,e){var t=this,n=this.props,r=n.handleFinish,i=n.line,o=n.speed,l=this.state.charIndex;0===o?r(u(i)):i.length?M.line.length||0!==l?o!==M.speed||e.charIndex===M.line.length-1?(clearInterval(this.timeoutId),this.timeoutId=setInterval((function(){return t.nextLetter()}),o)):l===i.length-1&&(clearInterval(this.timeoutId),this.timeoutId=setInterval((function(){return t.nextLetter()}),0)):(clearInterval(this.timeoutId),this.timeoutId=setInterval((function(){return t.nextLetter()}),o)):(clearInterval(this.timeoutId),this.timeoutId=setInterval((function(){return t.nextLetter()}),200))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeoutId)}},{key:"render",value:function(){var M=this.state.charIndex,e=this.props,t=e.cursor,r=e.line,i=e.prefix,o=function(M){for(var e=M,t=0;t<h.length;t++){var n=new RegExp("\\[/?".concat(h[t],"\\]"),"gi");e=e.replace(n,"")}return e}(r),l=3===o.split(/^(\s*)/).length;return n.createElement("div",{className:"terminal__line"},i&&this.linePrefix,l&&o.split(/^(\s*)/)[1].split("").map((function(M){return n.createElement("span",null,"\xa0")})),"".concat(o.substr(0,M)),t&&n.createElement("span",{className:"cursor"},"\xa0"))}}]),t}(n.Component),f=function(M){Object(m.a)(t,M);var e=Object(c.a)(t);function t(){var M;Object(a.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(M=e.call.apply(e,[this].concat(r))).timeoutId=void 0,M.prefix="> ",M.speedDivider=1,M.state={finished:!1,sectionIndex:0,lineIndex:0,writtenLines:[]},M.handleFinish=function(e){var t=M.state,n=t.lineIndex,r=t.sectionIndex,i=M.props.sections,o=i[r].lines;n<o.length-1?M.setState((function(M){return{writtenLines:[].concat(Object(s.a)(M.writtenLines),[e]),lineIndex:M.lineIndex+1}})):r<i.length-1?M.setState((function(M){return{writtenLines:[].concat(Object(s.a)(M.writtenLines),[e]),lineIndex:0,sectionIndex:M.sectionIndex+1}})):r===i.length-1&&n===o.length-1&&M.setState((function(M){return{finished:!0,writtenLines:[].concat(Object(s.a)(M.writtenLines),[e])}}))},M.handleTouchEnd=function(e){M.speedDivider>.0625&&(M.speedDivider=.5*M.speedDivider)},M.handleKeyPress=function(e){"Enter"===e.key&&M.speedDivider>.0625&&(M.speedDivider=.5*M.speedDivider)},M}return Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress,!1),document.addEventListener("touchend",this.handleTouchEnd,!1)}},{key:"render",value:function(){var M=this.props.sections,e=this.state,t=e.finished,r=e.lineIndex,i=e.sectionIndex,o=e.writtenLines,l=M[i],s=l.lines,a=l.speed,d=s[r],m="prefix"in l&&l.prefix;return n.createElement("div",{className:"terminal"},o.map((function(M,e){return n.createElement("div",{key:N("".concat(M,"_").concat(e)),className:"terminal__line"},M)})),!t&&n.createElement(y,{cursor:!("cursor"in l)||l.cursor,handleFinish:this.handleFinish,line:d,speed:a>0?Math.floor(this.speedDivider*a):a,prefix:m}))}}]),t}(n.Component),v=function(M){var e=M.url;return n.createElement("a",{href:e,"aria-label":"View source on GitHub"},n.createElement("svg",{className:"topbar__logo__svg",viewBox:"0 0 250 250","aria-hidden":"true"},n.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}),n.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"})))},g=function(M){var e=M.title,t=void 0===e?"ekern.me":e,r=M.showLogo,i=M.logoUrl;return n.createElement("div",{className:"topbar"},n.createElement("div",{className:"topbar__title"},t),r&&i&&n.createElement("div",{className:"topbar__logo"},n.createElement(v,{url:i})))},b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g,{title:"ekern.me",showLogo:!0,logoUrl:"https://github.com/stekern/cmdkern"}),r.a.createElement(f,{sections:l.filter((function(M){return(!("minScreenWidth"in M)||M.minScreenWidth<=window.innerWidth)&&(!("maxScreenWidth"in M)||M.maxScreenWidth>=window.innerWidth)}))}))};t(15);o.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(M){M.exports=JSON.parse('[{"prefix":true,"speed":35,"lines":["open [green]bio[/green].txt"]},{"speed":8,"cursor":false,"lines":["Hey!","My name is [bold]Erlend Gjesteland Ekern[/bold].","I like using [bold]technology[/bold] to solve problems.","I obtained my M.Sc. in [bold]Computer Science[/bold] from the Norwegian University of Science and Technology in 2019.","Currently I dabble in [bold]AWS[/bold], [bold]DevOps[/bold], [bold]AI[/bold], [bold]full-stack web development[/bold], and whatever technologies I find interesting."]},{"prefix":true,"speed":35,"lines":["","","open [blue]contact[/blue].txt"]},{"cursor":false,"speed":8,"lines":["Email: [email]erlend@ekern.me[/email]","LinkedIn: [url]https://linkedin.com/in/erlendekern[/url]","Twitter: [url]https://twitter.com/erlendekern[/url]","---","GitHub: [url]https://github.com/stekern[/url]","Keybase: [url]https://keybase.io/ekern[/url]"]},{"prefix":true,"minScreenWidth":768,"speed":35,"lines":["","","./png_to_ascii.sh [green]picture[/green].png"]},{"cursor":false,"minScreenWidth":768,"speed":0,"lines":["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmNmmdmdmNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMNmmdhyo//+ssosoohdmmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMd::/+o::os/-:++:-//oohyhMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMh-....----:/:.----..--:/oMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+.`````..---....-://:://:/dMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMm+-.``...-:/+oosyhdmmddhhddhsmMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMmy-.`.//+osyhmmNNMMNNNmmmmmdyyNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMy..:+syyhhdmmmmmmmmmmddmmmyoyMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMh../syhhhhhddddddmmmdddddho//mMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMd../syhdddmmmmmmmmmmmmNmmho:.sMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNh..+oyhdhysoossyssoosyhhhdy+-+hNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMh+/-sso+/:----:+s+:--..-:/sdh/+oNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+//ys+/:::::-:yNh/::/+osyhdmy+hMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNs/ssyhhhysssssdMmhyhhdmmmmddyhdMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMhyooyddmNNNdyymNNdhhmNNmmmdyohNMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMNds+syhhdddyosoyyososyhysosodNMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMy++ooosoo+:-:--:ss/+++/+oMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMN+++++/:/+-.---://-:o++/sMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMh//++:-:::::///++++++/-dMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMy:/++++++////osyys+:-/mMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMd/:/ossssossyhhs+:.:sdNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMd:-://++/////:---/shdmMdmNMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMNs/:-.........-/+syhmNMy/oyhhdmmNNNNMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMNNds++//::--:/+oosyhmNMMm-::::://+oosyhhdmNNNNNM","MMMMMMMMMMMMMMMMMMMMMMMMNmy/hmmhs++++++oooosydNNMNNm.-:::-.--:::///+ooosyyh","MMMMMMMMMMMMMMMMMMMMNmhs/-.`-hdmmdys+++++oydNNNNNmNm---:::-..-----::::::::/","MMMMMMMMMMMMMMMMNmhs+:-...```+mddmmmmh+-omNNNNNNNNmm/.-::::-....-----------","MMMMMMMMMMMMMNdy+:--......```-hmmmmmh-..-/yNNNNMNNMMs...--...........---...","MMMMMMMMMNmhs+:--........````-ydNNmd:-.-::-odNMMNMMMh......--..`....``.....","MMMMMNmdyo/:---.......`.`````-NNNNmyys:-.-/dhhdNNNNNm....-..-...`...````...","MMMMd+----...............```..dNNddNm+-..-/oNNNNMMMMN-.-...........`````...","MMMM+-....................``..hNNNNNh/-`-+/:NNMMMMMMN/..............`````.."]}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.d9285244.chunk.js.map