try{
(()=>{var V=Object.create;var O=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var Q=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var k=(e,o)=>()=>(e&&(o=e(e=0)),o);var Z=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var X=(e,o,r,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of z(o))!J.call(e,n)&&n!==r&&O(e,n,{get:()=>o[n],enumerable:!(s=K(o,n))||s.enumerable});return e};var oo=(e,o,r)=>(r=e!=null?V(Q(e)):{},X(o||!e||!e.__esModule?O(r,"default",{value:e,enumerable:!0}):r,e));var a=k(()=>{});var c=k(()=>{});var i=k(()=>{});var M=Z((Lc,T)=>{a();c();i();(function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n="",p=0;p<arguments.length;p++){var m=arguments[p];m&&(n=s(n,r(m)))}return n}function r(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return o.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var p="";for(var m in n)e.call(n,m)&&n[m]&&(p=s(p,m));return p}function s(n,p){return p?n?n+" "+p:n+p:n}typeof T<"u"&&T.exports?(o.default=o,T.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});a();c();i();a();c();i();a();c();i();a();c();i();var fo=__STORYBOOK_API__,{ActiveTabs:So,Consumer:yo,ManagerContext:Co,Provider:go,RequestResponseError:bo,addons:_,combineParameters:_o,controlOrMetaKey:Ao,controlOrMetaSymbol:xo,eventMatchesShortcut:To,eventToShortcut:Po,experimental_requestResponse:ko,isMacLike:vo,isShortcutTaken:No,keyToSymbol:Do,merge:wo,mockChannel:Oo,optionOrAltSymbol:Eo,shortcutMatchesShortcut:Bo,shortcutToHumanString:Lo,types:v,useAddonState:Ro,useArgTypes:Fo,useArgs:Ho,useChannel:Mo,useGlobalTypes:Uo,useGlobals:A,useParameter:Go,useSharedState:$o,useStoryPrepared:qo,useStorybookApi:jo,useStorybookState:Wo}=__STORYBOOK_API__;a();c();i();var t=__REACT__,{Children:Qo,Component:Jo,Fragment:Zo,Profiler:Xo,PureComponent:oe,StrictMode:ee,Suspense:te,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ne,cloneElement:re,createContext:se,createElement:ae,createFactory:ce,createRef:ie,forwardRef:le,isValidElement:pe,lazy:me,memo:Ie,startTransition:ue,unstable_act:de,useCallback:he,useContext:fe,useDebugValue:Se,useDeferredValue:ye,useEffect:Ce,useId:ge,useImperativeHandle:be,useInsertionEffect:_e,useLayoutEffect:Ae,useMemo:xe,useReducer:Te,useRef:Pe,useState:ke,useSyncExternalStore:ve,useTransition:Ne,version:De}=__REACT__;a();c();i();a();c();i();var Le=__STORYBOOK_COMPONENTS__,{A:Re,ActionBar:Fe,AddonPanel:E,Badge:He,Bar:Me,Blockquote:Ue,Button:B,ClipboardCode:Ge,Code:$e,DL:qe,Div:je,DocumentWrapper:We,EmptyTabContent:Ye,ErrorFormatter:Ve,FlexBar:Ke,Form:ze,H1:Qe,H2:Je,H3:Ze,H4:Xe,H5:ot,H6:et,HR:tt,IconButton:L,IconButtonSkeleton:nt,Icons:rt,Img:st,LI:at,Link:ct,ListItem:it,Loader:lt,Modal:pt,OL:mt,P:It,Placeholder:ut,Pre:dt,ResetWrapper:ht,ScrollArea:ft,Separator:St,Spaced:yt,Span:Ct,StorybookIcon:gt,StorybookLogo:bt,Symbols:_t,SyntaxHighlighter:At,TT:xt,TabBar:Tt,TabButton:Pt,TabWrapper:kt,Table:vt,Tabs:Nt,TabsState:Dt,TooltipLinkList:wt,TooltipMessage:Ot,TooltipNote:Et,UL:Bt,WithTooltip:Lt,WithTooltipPure:Rt,Zoom:Ft,codeCommon:Ht,components:Mt,createCopyToClipboardFunction:Ut,getStoryHref:Gt,icons:$t,interleaveSeparators:qt,nameSpaceClassNames:jt,resetComponents:Wt,withReset:Yt}=__STORYBOOK_COMPONENTS__;a();c();i();var Jt=__STORYBOOK_ICONS__,{AccessibilityAltIcon:Zt,AccessibilityIcon:Xt,AddIcon:on,AdminIcon:en,AlertAltIcon:tn,AlertIcon:nn,AlignLeftIcon:rn,AlignRightIcon:sn,AppleIcon:an,ArrowDownIcon:cn,ArrowLeftIcon:ln,ArrowRightIcon:pn,ArrowSolidDownIcon:mn,ArrowSolidLeftIcon:In,ArrowSolidRightIcon:un,ArrowSolidUpIcon:dn,ArrowUpIcon:hn,AzureDevOpsIcon:fn,BackIcon:Sn,BasketIcon:yn,BatchAcceptIcon:Cn,BatchDenyIcon:gn,BeakerIcon:bn,BellIcon:_n,BitbucketIcon:An,BoldIcon:xn,BookIcon:Tn,BookmarkHollowIcon:Pn,BookmarkIcon:kn,BottomBarIcon:vn,BottomBarToggleIcon:Nn,BoxIcon:Dn,BranchIcon:wn,BrowserIcon:On,ButtonIcon:En,CPUIcon:Bn,CalendarIcon:Ln,CameraIcon:Rn,CategoryIcon:Fn,CertificateIcon:Hn,ChangedIcon:Mn,ChatIcon:Un,CheckIcon:Gn,ChevronDownIcon:$n,ChevronLeftIcon:qn,ChevronRightIcon:jn,ChevronSmallDownIcon:Wn,ChevronSmallLeftIcon:Yn,ChevronSmallRightIcon:Vn,ChevronSmallUpIcon:Kn,ChevronUpIcon:zn,ChromaticIcon:Qn,ChromeIcon:Jn,CircleHollowIcon:Zn,CircleIcon:Xn,ClearIcon:or,CloseAltIcon:er,CloseIcon:tr,CloudHollowIcon:nr,CloudIcon:rr,CogIcon:sr,CollapseIcon:ar,CommandIcon:cr,CommentAddIcon:ir,CommentIcon:lr,CommentsIcon:pr,CommitIcon:mr,CompassIcon:Ir,ComponentDrivenIcon:ur,ComponentIcon:dr,ContrastIcon:hr,ControlsIcon:fr,CopyIcon:Sr,CreditIcon:yr,CrossIcon:Cr,DashboardIcon:gr,DatabaseIcon:br,DeleteIcon:_r,DiamondIcon:Ar,DirectionIcon:xr,DiscordIcon:Tr,DocChartIcon:Pr,DocListIcon:kr,DocumentIcon:vr,DownloadIcon:Nr,DragIcon:Dr,EditIcon:wr,EllipsisIcon:Or,EmailIcon:Er,ExpandAltIcon:Br,ExpandIcon:Lr,EyeCloseIcon:Rr,EyeIcon:Fr,FaceHappyIcon:Hr,FaceNeutralIcon:Mr,FaceSadIcon:Ur,FacebookIcon:Gr,FailedIcon:$r,FastForwardIcon:qr,FigmaIcon:jr,FilterIcon:Wr,FlagIcon:Yr,FolderIcon:Vr,FormIcon:Kr,GDriveIcon:zr,GithubIcon:Qr,GitlabIcon:Jr,GlobeIcon:Zr,GoogleIcon:Xr,GraphBarIcon:os,GraphLineIcon:es,GraphqlIcon:ts,GridAltIcon:ns,GridIcon:rs,GrowIcon:ss,HeartHollowIcon:as,HeartIcon:cs,HomeIcon:is,HourglassIcon:ls,InfoIcon:ps,ItalicIcon:ms,JumpToIcon:Is,KeyIcon:us,LightningIcon:ds,LightningOffIcon:hs,LinkBrokenIcon:fs,LinkIcon:Ss,LinkedinIcon:ys,LinuxIcon:Cs,ListOrderedIcon:gs,ListUnorderedIcon:bs,LocationIcon:_s,LockIcon:As,MarkdownIcon:xs,MarkupIcon:Ts,MediumIcon:Ps,MemoryIcon:ks,MenuIcon:vs,MergeIcon:Ns,MirrorIcon:Ds,MobileIcon:ws,MoonIcon:Os,NutIcon:Es,OutboxIcon:Bs,OutlineIcon:Ls,PaintBrushIcon:Rs,PaperClipIcon:Fs,ParagraphIcon:Hs,PassedIcon:Ms,PhoneIcon:Us,PhotoDragIcon:R,PhotoIcon:Gs,PinAltIcon:$s,PinIcon:qs,PlayBackIcon:js,PlayIcon:Ws,PlayNextIcon:Ys,PlusIcon:Vs,PointerDefaultIcon:Ks,PointerHandIcon:zs,PowerIcon:Qs,PrintIcon:Js,ProceedIcon:Zs,ProfileIcon:Xs,PullRequestIcon:oa,QuestionIcon:ea,RSSIcon:ta,RedirectIcon:na,ReduxIcon:ra,RefreshIcon:sa,ReplyIcon:aa,RepoIcon:ca,RequestChangeIcon:ia,RewindIcon:la,RulerIcon:pa,SearchIcon:ma,ShareAltIcon:Ia,ShareIcon:ua,ShieldIcon:da,SideBySideIcon:ha,SidebarAltIcon:fa,SidebarAltToggleIcon:Sa,SidebarIcon:ya,SidebarToggleIcon:Ca,SpeakerIcon:ga,StackedIcon:ba,StarHollowIcon:_a,StarIcon:Aa,StickerIcon:xa,StopAltIcon:Ta,StopIcon:Pa,StorybookIcon:ka,StructureIcon:va,SubtractIcon:Na,SunIcon:Da,SupportIcon:wa,SwitchAltIcon:Oa,SyncIcon:Ea,TabletIcon:Ba,ThumbsUpIcon:La,TimeIcon:Ra,TimerIcon:Fa,TransferIcon:Ha,TrashIcon:Ma,TwitterIcon:Ua,TypeIcon:Ga,UbuntuIcon:$a,UndoIcon:qa,UnfoldIcon:ja,UnlockIcon:Wa,UnpinIcon:Ya,UploadIcon:Va,UserAddIcon:Ka,UserAltIcon:za,UserIcon:Qa,UsersIcon:Ja,VSCodeIcon:Za,VerifiedIcon:Xa,VideoIcon:oc,WandIcon:ec,WatchIcon:tc,WindowsIcon:nc,WrenchIcon:rc,YoutubeIcon:sc,ZoomIcon:ac,ZoomOutIcon:cc,ZoomResetIcon:ic,iconList:lc}=__STORYBOOK_ICONS__;a();c();i();a();c();i();async function F(){let e=new URL(window.location.href),o=await fetch(`${e.origin}${e.pathname}screenshots/report.json`);if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u0435\u0441\u0442\u0430\u0445: ${o.status}: ${o.statusText}`);return o.json()}function eo(e){return e.split("").map((o,r)=>o.toUpperCase()===o?`${r!==0?"-":""}${o.toLowerCase()}`:o).join("")}function x(e){let[o,r]=t.useState({status:"idle",stories:[],error:null,isLoading:!1});return t.useEffect(()=>{r({status:"loading",isLoading:!0,stories:[],error:null}),F().then(s=>{let p=s.testResults.filter(m=>m.status==="passed"?!1:m.name.includes("/screenshot/")||m.name.includes("\\screenshot\\")).flatMap(m=>m.assertionResults.map(I=>{let y=I.ancestorTitles[0].toLowerCase().replaceAll("/","-"),l=I.ancestorTitles[1],S=eo(l),C=y+"--"+S,g=e.getData(C).name;return{path:y,name:l,id:S,key:y,title:g}}));r({status:"success",isLoading:!1,stories:p,error:null})}).catch(s=>{r({status:"error",isLoading:!1,stories:[],error:s})})},[e]),o}function H({api:e}){let[o,r]=A(),{stories:s}=x(e),n=t.useCallback(()=>{r({screenshotsComparatorActive:!o.screenshotsComparatorActive})},[o.screenshotsComparatorActive,r]),p=e.getCurrentStoryData();if(!p)return;if(!s.some(I=>{let y=I.path+"--"+I.id;return p.id===y})){o.screenshotsComparatorActive&&r({screenshotsComparatorActive:!1});return}return t.createElement(L,{active:!!o.screenshotsComparatorActive,title:"Compare screenshots",onClick:n},t.createElement(R,null))}a();c();i();a();c();i();var $=oo(M());var f={panel:"t",tr:"o",thead:"n",approved:"i",th:"r",td:"e",button:"a",checkbox:"s"};a();c();i();a();c();i();var P=null;async function U(e){if(P!==null)return P;let o=`https://api.github.com/repos/${e.repositoryOwner}/${e.repositoryName}/issues/${e.pullRequestNumber}/comments`;return P=await(await fetch(o)).json(),P}var no="\u041D\u0435 \u043D\u0430\u0448\u0435\u043B body \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043E\u0432",ro="\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0430\u043F\u0440\u0443\u0432\u043D\u0443\u0442\u044B\u0445 \u0442\u0435\u0441\u0442\u043E\u0432";function so(e){if(!e.length)return[];let o=e.find(p=>p.body.includes("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u0430\u0445"));if(!o)return[];let{body:r}=o;if(!r)throw new Error(no);let s=r.replace(/\s+/g," ").trim().match(/<pre id="screenshots-data">(.*?)<\/pre>/);if(!s||!s.length||!s[1])throw new Error(ro);let n=s[1];return JSON.parse(n)}function N(e,o){return e.some(r=>r.name===o.name&&r.path===o.path)}async function G(e){let o=Number(e.pullRequestNumber);if(!o||isNaN(o))return[];let r=await U(e);return so(r)}function q({storiesToApprove:e,stories:o,api:r,onChange:s,approvedStories:n}){let p=t.useCallback(l=>()=>r.selectStory(l.path,l.id),[r]),m=t.useCallback(l=>{let S=e.findIndex(g=>l.path===g.path&&l.name===g.name),C=[...e];C.splice(S,1),s(C)},[s,e]),I=t.useCallback(l=>{let S=[...e,l];s(S)},[s,e]),y=t.useCallback(l=>S=>{S.target.checked?I(l):m(l)},[I,m]);return t.createElement("table",{className:f.panel},t.createElement("thead",{className:f.thead},t.createElement("tr",{className:f.tr},t.createElement("th",{className:f.th}),t.createElement("th",{className:f.th},"Name"),t.createElement("th",{className:f.th},"Title"))),t.createElement("tbody",null,o.map(l=>t.createElement("tr",{key:l.path+l.name,className:(0,$.default)(f.tr,{[f.approved]:N(n,l)})},t.createElement("td",{className:f.td},t.createElement("input",{disabled:N(n,l),className:f.checkbox,onChange:y(l),type:"checkbox"})),t.createElement("td",{className:f.td},l.name),t.createElement("td",{className:f.td},t.createElement("button",{className:f.button,onClick:p(l)},l.title))))))}function j({active:e,api:o}){let[r]=A(),s=r.sauronEye,{status:n,stories:p,error:m}=x(o),[I,y]=t.useState([]),[l,S]=t.useState([]),[C,g]=t.useState("");t.useEffect(()=>{G(s).then(S).catch(b=>g(b.message))},[s]);let Y=t.useCallback(async()=>{let b=await fetch(`https://api.github.com/repos/${s.repositoryOwner}/${s.repositoryName}/actions/workflows/screenshot-approve.yml/dispatches`,{method:"POST",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify({ref:s.branchName,inputs:{"pull-request-number":s.pullRequestNumber,"approved-screenshots":JSON.stringify([...l,...I],null,2)}})});if(b.ok)S(l.concat(I)),y([]);else{let w=await b.json();g(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043F\u043F\u0440\u0443\u0432\u0430. ${w.status}: ${w.message}`)}},[s,l,I]);return e?n==="error"||C?t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__text"},"\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E \u043D\u0435\u043B\u0430\u0434\u043D\u043E\u0435: "),t.createElement("pre",{className:"screenshot-panel__text"},m?.message||C)):n==="loading"?t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__loading-text"},"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0441\u0442\u043E\u0440\u0438\u0441\u0430\u0445...")):p.length?t.createElement(E,{active:e},t.createElement("div",{className:"screenshot-panel"},!!I.length&&t.createElement(B,{size:"medium",onClick:Y},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),t.createElement("p",{className:"screenshot-panel__text"},"\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: "),t.createElement(q,{stories:p,api:o,storiesToApprove:I,approvedStories:l,onChange:y}))):t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__success-text"},"\u0412\u0441\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!")):null}var D="@colibrijs/screenshots",ao=`${D}/panel`,co=`${D}/screenshots-diff-tool`;function W(){_.register(D,e=>{_.add(ao,{type:v.PANEL,title:"Screenshots",render:({active:o})=>t.createElement(j,{active:!!o,api:e})}),_.add(co,{type:v.TOOL,title:"Compare sheet",render:()=>t.createElement(H,{api:e})})})}W();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }