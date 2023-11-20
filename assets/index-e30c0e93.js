(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function m(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=m(s);fetch(s.href,e)}})();const d=["bold","email","green","red","blue","italic","underscore","url"],f=l=>{for(let o=0;o<d.length;o++){const m=d[o],r=new RegExp(`^(.*)(\\[${m}\\])(.*)(\\[/${m}\\])(.*)$`),s=l.match(r);if(s&&s.length===6)return!0}return!1},p=l=>{let o=l;for(let m=0;m<d.length;m++){const r=d[m],s=new RegExp(`\\[/?${r}\\]`,"gi");o=o.replace(s,"")}return o},i=l=>{let o=l;for(let m=0;m<d.length;m++){const r=d[m],s=new RegExp(`^(.*)(\\[${r}\\])(.*)(\\[/${r}\\])(.*)$`),e=l.match(s);if(e&&e.length===6){const n=i(e[1]),M=i(e[3]),t=i(e[5]);r==="bold"?o=`${n}<strong>${M}</strong>${t}`:r==="italic"?o=`${n}<i>${M}</i>${t}`:r==="url"?o=`${n}<a rel="noopener noreferrer" target="_blank" href="${M}">${M}</a>${t}`:r==="email"?o=`${n}<a rel="noopener noreferrer" target="_blank" href="mailto:${M}">${M}</a>${t}`:r==="green"?o=`${n}<font color='lightgreen'>${M}</font>${t}`:r==="blue"?o=`${n}<font color='lightblue'>${M}</font>${t}`:r==="red"?o=`${n}<font color='lightpink'>${M}</font>${t}`:r==="underscore"&&(o=`${n}<u>${M}</u>${t}`)}}return o},u=[{lines:["open [green]bio[/green].txt"]},{endDelay:750,showPrompt:!1,lines:[" "]},{charDelay:7,endDelay:150,showCursor:!1,lines:["Hey 👋 I'm [bold]Erlend Ekern[/bold].","I'm a [bold]cloud architect[/bold] with a wide span of technical interests, experience and expertise, and I'm especially passionate about being a force multiplier for others.","I'm currently mostly focused on [bold]Amazon Web Services (AWS)[/bold] and building [bold]internal developer platforms[/bold] that enable developers to autonomously solve business problems better, faster and more securely."],showPrompt:!1},{showPrompt:!1,lines:["",""]},{lines:["open [red]contact[/red].txt"]},{endDelay:750,showPrompt:!1,lines:[" "]},{showPrompt:!1,showCursor:!1,charDelay:7,endDelay:150,lines:["Email: [email]erlend@ekern.me[/email]","GitHub: [url]https://github.com/stekern[/url]","Twitter: [url]https://twitter.com/erlendekern[/url]","LinkedIn: [url]https://linkedin.com/in/erlendekern[/url]"]},{showPrompt:!1,minScreenWidth:768,lines:["",""]},{minScreenWidth:768,lines:["./png_to_ascii.sh [green]picture[/green].png"]},{minScreenWidth:768,endDelay:750,showPrompt:!1,lines:[" "]},{minScreenWidth:768,showPrompt:!1,charDelay:0,endDelay:0,lines:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmNmmdmdmNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMNmmdhyo//+ssosoohdmmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMd::/+o::os/-:++:-//oohyhMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMh-....----:/:.----..--:/oMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+.`````..---....-://:://:/dMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMm+-.``...-:/+oosyhdmmddhhddhsmMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMmy-.`.//+osyhmmNNMMNNNmmmmmdyyNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMy..:+syyhhdmmmmmmmmmmddmmmyoyMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMh../syhhhhhddddddmmmdddddho//mMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMd../syhdddmmmmmmmmmmmmNmmho:.sMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNh..+oyhdhysoossyssoosyhhhdy+-+hNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMh+/-sso+/:----:+s+:--..-:/sdh/+oNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+//ys+/:::::-:yNh/::/+osyhdmy+hMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNs/ssyhhhysssssdMmhyhhdmmmmddyhdMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMhyooyddmNNNdyymNNdhhmNNmmmdyohNMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMNds+syhhdddyosoyyososyhysosodNMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMy++ooosoo+:-:--:ss/+++/+oMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMN+++++/:/+-.---://-:o++/sMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMh//++:-:::::///++++++/-dMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMy:/++++++////osyys+:-/mMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMd/:/ossssossyhhs+:.:sdNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMd:-://++/////:---/shdmMdmNMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMNs/:-.........-/+syhmNMy/oyhhdmmNNNNMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMNNds++//::--:/+oosyhmNMMm-::::://+oosyhhdmNNNNNM","MMMMMMMMMMMMMMMMMMMMMMMMNmy/hmmhs++++++oooosydNNMNNm.-:::-.--:::///+ooosyyh","MMMMMMMMMMMMMMMMMMMMNmhs/-.`-hdmmdys+++++oydNNNNNmNm---:::-..-----::::::::/","MMMMMMMMMMMMMMMMNmhs+:-...```+mddmmmmh+-omNNNNNNNNmm/.-::::-....-----------","MMMMMMMMMMMMMNdy+:--......```-hmmmmmh-..-/yNNNNMNNMMs...--...........---...","MMMMMMMMMNmhs+:--........````-ydNNmd:-.-::-odNMMNMMMh......--..`....``.....","MMMMMNmdyo/:---.......`.`````-NNNNmyys:-.-/dhhdNNNNNm....-..-...`...````...","MMMMd+----...............```..dNNddNm+-..-/oNNNNMMMMN-.-...........`````...","MMMM+-....................``..hNNNNNh/-`-+/:NNMMMMMMN/..............`````.."]}],h="previousRunDate",g=20,T=0,$=300,N=!0,y=!0,b=Number.NEGATIVE_INFINITY,w="<font color='white'><strong>🚀 ~  </strong>";document.addEventListener("DOMContentLoaded",l=>{const o=localStorage.getItem(h);let m=!0;o?new Date().getTime()-Date.parse(o)<15*60*1e3?m=!1:localStorage.setItem(h,new Date().toISOString()):localStorage.setItem(h,new Date().toISOString());const r=document.getElementById("terminal"),s=window.innerWidth,e=u.filter(M=>s>=(M.minScreenWidth??b)).map(M=>M.lines.map(t=>({...M,displayText:t,formattedText:t||(M.showPrompt??N)?t:"&nbsp",...f(t)?{displayText:p(t),formattedText:i(t)}:{}}))).flat(1),n=M=>{if(e[M]){const t=document.createElement("p");t.innerHTML=e[M].showPrompt??N?e[M].prompt??w:"",r.appendChild(t);const c=a=>{e[M].displayText[a]||a===0?(e[M].showCursor??y?t.innerHTML=t.innerHTML.replace('<span class="cursor"></span>',"")+(e[M].displayText[a]||"")+'<span class="cursor"></span>':t.innerHTML+=e[M].displayText[a]||"",setTimeout(()=>c(a+1),e[M].charDelay??g)):setTimeout(()=>{e[M].showCursor??y?t.innerHTML=t.innerHTML.replace('<span class="cursor"></span>',"").replace(e[M].displayText,e[M].formattedText):t.innerHTML=t.innerHTML.replace(e[M].displayText,e[M].formattedText),n(M+1)},(e[M].startDelay??T)+(e[M].endDelay??$))};!m||e[M].endDelay===0&&e[M].charDelay===0?(t.innerHTML=t.innerHTML+e[M].formattedText,n(M+1)):c(0)}};n(0)});