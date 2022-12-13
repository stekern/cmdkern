function M(M){return M&&M.__esModule?M.default:M}const e=["bold","email","green","red","blue","italic","underscore","url"],o=M=>{for(let o=0;o<e.length;o++){const s=e[o],n=new RegExp(`^(.*)(\\[${s}\\])(.*)(\\[/${s}\\])(.*)$`),r=M.match(n);if(r&&6===r.length)return!0}return!1},s=M=>{let o=M;for(let M=0;M<e.length;M++){const s=new RegExp(`\\[/?${e[M]}\\]`,"gi");o=o.replace(s,"")}return o},n=M=>{let o=M;for(let s=0;s<e.length;s++){const r=e[s],m=new RegExp(`^(.*)(\\[${r}\\])(.*)(\\[/${r}\\])(.*)$`),t=M.match(m);if(t&&6===t.length){const M=n(t[1]),e=n(t[3]),s=n(t[5]);"bold"===r?o=`${M}<strong>${e}</strong>${s}`:"url"===r?o=`${M}<a rel="noopener noreferrer" target="_blank" href="${e}">${e}</a>${s}`:"email"===r?o=`${M}<a rel="noopener noreferrer" target="_blank" href="mailto:${e}">${e}</a>${s}`:"green"===r?o=`${M}<font color='lightgreen'>${e}</font>${s}`:"blue"===r?o=`${M}<font color='lightblue'>${e}</font>${s}`:"red"===r?o=`${M}<font color='lightpink'>${e}</font>${s}`:"underscore"===r&&(o=`${M}<u>${e}</u>${s}`)}}return o};var r;r=JSON.parse('[{"lines":["open [green]bio[/green].txt"]},{"endDelay":750,"showPrompt":false,"lines":[" "]},{"charDelay":7,"endDelay":150,"showCursor":false,"lines":["[green]-----[/green]","Hey 👋 I\'m [bold]Erlend[/bold].","I have a wide span of technical interests, experience and expertise, but technology wise I\'m currently mostly focused on [bold]Amazon Web Services (AWS)[/bold], [bold]serverless[/bold] and [bold]platform engineering[/bold] 👷","... With that said, technology is \\"just\\" an implementation detail. I first and foremost enjoy solving problems, helping people and creating value."],"showPrompt":false},{"showPrompt":false,"lines":["",""]},{"lines":["open [red]contact[/red].txt"]},{"endDelay":750,"showPrompt":false,"lines":[" "]},{"showPrompt":false,"showCursor":false,"charDelay":7,"endDelay":150,"lines":["[red]-----[/red]","Email: [email]erlend@ekern.me[/email]","GitHub: [url]https://github.com/stekern[/url]","Twitter: [url]https://twitter.com/erlendekern[/url]","Keybase: [url]https://keybase.io/ekern[/url]","LinkedIn: [url]https://linkedin.com/in/erlendekern[/url]"]},{"showPrompt":false,"minScreenWidth":768,"lines":["",""]},{"minScreenWidth":768,"lines":["./png_to_ascii.sh [green]picture[/green].png"]},{"minScreenWidth":768,"endDelay":750,"showPrompt":false,"lines":[" "]},{"minScreenWidth":768,"showPrompt":false,"charDelay":0,"endDelay":0,"lines":["[green]-----[/green]","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmNmmdmdmNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMNmmdhyo//+ssosoohdmmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMd::/+o::os/-:++:-//oohyhMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMh-....----:/:.----..--:/oMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+.`````..---....-://:://:/dMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMm+-.``...-:/+oosyhdmmddhhddhsmMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMmy-.`.//+osyhmmNNMMNNNmmmmmdyyNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMy..:+syyhhdmmmmmmmmmmddmmmyoyMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMh../syhhhhhddddddmmmdddddho//mMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMd../syhdddmmmmmmmmmmmmNmmho:.sMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNh..+oyhdhysoossyssoosyhhhdy+-+hNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMh+/-sso+/:----:+s+:--..-:/sdh/+oNMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMm+//ys+/:::::-:yNh/::/+osyhdmy+hMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMNs/ssyhhhysssssdMmhyhhdmmmmddyhdMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMhyooyddmNNNdyymNNdhhmNNmmmdyohNMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMNds+syhhdddyosoyyososyhysosodNMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMy++ooosoo+:-:--:ss/+++/+oMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMN+++++/:/+-.---://-:o++/sMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMh//++:-:::::///++++++/-dMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMy:/++++++////osyys+:-/mMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMd/:/ossssossyhhs+:.:sdNMMMMMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMd:-://++/////:---/shdmMdmNMMMMMMMMMMMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMMNs/:-.........-/+syhmNMy/oyhhdmmNNNNMMMMMMMMMMM","MMMMMMMMMMMMMMMMMMMMMMMMMMMNNds++//::--:/+oosyhmNMMm-::::://+oosyhhdmNNNNNM","MMMMMMMMMMMMMMMMMMMMMMMMNmy/hmmhs++++++oooosydNNMNNm.-:::-.--:::///+ooosyyh","MMMMMMMMMMMMMMMMMMMMNmhs/-.`-hdmmdys+++++oydNNNNNmNm---:::-..-----::::::::/","MMMMMMMMMMMMMMMMNmhs+:-...```+mddmmmmh+-omNNNNNNNNmm/.-::::-....-----------","MMMMMMMMMMMMMNdy+:--......```-hmmmmmh-..-/yNNNNMNNMMs...--...........---...","MMMMMMMMMNmhs+:--........````-ydNNmd:-.-::-odNMMNMMMh......--..`....``.....","MMMMMNmdyo/:---.......`.`````-NNNNmyys:-.-/dhhdNNNNNm....-..-...`...````...","MMMMd+----...............```..dNNddNm+-..-/oNNNNMMMMN-.-...........`````...","MMMM+-....................``..hNNNNNh/-`-+/:NNMMMMMMN/..............`````.."]}]');const m=Number.NEGATIVE_INFINITY;document.addEventListener("DOMContentLoaded",(e=>{const t=document.getElementById("terminal"),d=window.innerWidth,l=M(r).filter((M=>d>=(M.minScreenWidth??m))).map((M=>M.lines.map((e=>({...M,displayText:e,formattedText:e||(M.showPrompt??true)?e:"&nbsp",...o(e)?{displayText:s(e),formattedText:n(e)}:{}}))))).flat(1),h=M=>{if(l[M]){const e=document.createElement("p");e.innerHTML=l[M].showPrompt??true?l[M].prompt??"<font color='white'><strong>🚀 ~  </strong>":"",t.appendChild(e);const o=s=>{l[M].displayText[s]||0===s?(l[M].showCursor??true?e.innerHTML=e.innerHTML.replace('<span class="cursor"></span>',"")+(l[M].displayText[s]||"")+'<span class="cursor"></span>':e.innerHTML+=l[M].displayText[s]||"",setTimeout((()=>o(s+1)),l[M].charDelay??20)):setTimeout((()=>{l[M].showCursor??true?e.innerHTML=e.innerHTML.replace('<span class="cursor"></span>',"").replace(l[M].displayText,l[M].formattedText):e.innerHTML=e.innerHTML.replace(l[M].displayText,l[M].formattedText),h(M+1)}),(l[M].startDelay??0)+(l[M].endDelay??300))};0===l[M].endDelay&&0===l[M].charDelay?(e.innerHTML=e.innerHTML+l[M].formattedText,h(M+1)):o(0)}};h(0)}));
//# sourceMappingURL=index.4eea7c10.js.map
