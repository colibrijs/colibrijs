try{
(()=>{var Y=Object.create;var w=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var P=(e,o)=>()=>(e&&(o=e(e=0)),o);var J=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var Z=(e,o,r,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of K(o))!Q.call(e,n)&&n!==r&&w(e,n,{get:()=>o[n],enumerable:!(p=V(o,n))||p.enumerable});return e};var X=(e,o,r)=>(r=e!=null?Y(z(e)):{},Z(o||!e||!e.__esModule?w(r,"default",{value:e,enumerable:!0}):r,e));var s=P(()=>{});var c=P(()=>{});var a=P(()=>{});var H=J((Ba,x)=>{s();c();a();(function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n="",i=0;i<arguments.length;i++){var I=arguments[i];I&&(n=p(n,r(I)))}return n}function r(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return o.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var i="";for(var I in n)e.call(n,I)&&n[I]&&(i=p(i,I));return i}function p(n,i){return i?n?n+" "+i:n+i:n}typeof x<"u"&&x.exports?(o.default=o,x.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});s();c();a();s();c();a();s();c();a();s();c();a();var ho=__STORYBOOK_API__,{ActiveTabs:fo,Consumer:So,ManagerContext:yo,Provider:Co,RequestResponseError:go,addons:_,combineParameters:bo,controlOrMetaKey:_o,controlOrMetaSymbol:Ao,eventMatchesShortcut:xo,eventToShortcut:To,experimental_requestResponse:Po,isMacLike:vo,isShortcutTaken:No,keyToSymbol:ko,merge:Do,mockChannel:wo,optionOrAltSymbol:Oo,shortcutMatchesShortcut:Eo,shortcutToHumanString:Bo,types:v,useAddonState:Lo,useArgTypes:Ro,useArgs:Fo,useChannel:Uo,useGlobalTypes:Ho,useGlobals:O,useParameter:Mo,useSharedState:jo,useStoryPrepared:Go,useStorybookApi:qo,useStorybookState:$o}=__STORYBOOK_API__;s();c();a();var t=__REACT__,{Children:zo,Component:Qo,Fragment:Jo,Profiler:Zo,PureComponent:Xo,StrictMode:oe,Suspense:ee,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:te,cloneElement:ne,createContext:re,createElement:se,createFactory:ce,createRef:ae,forwardRef:ie,isValidElement:le,lazy:pe,memo:Ie,startTransition:de,unstable_act:me,useCallback:ue,useContext:he,useDebugValue:fe,useDeferredValue:Se,useEffect:ye,useId:Ce,useImperativeHandle:ge,useInsertionEffect:be,useLayoutEffect:_e,useMemo:Ae,useReducer:xe,useRef:Te,useState:Pe,useSyncExternalStore:ve,useTransition:Ne,version:ke}=__REACT__;s();c();a();s();c();a();var Be=__STORYBOOK_COMPONENTS__,{A:Le,ActionBar:Re,AddonPanel:E,Badge:Fe,Bar:Ue,Blockquote:He,Button:B,ClipboardCode:Me,Code:je,DL:Ge,Div:qe,DocumentWrapper:$e,EmptyTabContent:We,ErrorFormatter:Ye,FlexBar:Ve,Form:Ke,H1:ze,H2:Qe,H3:Je,H4:Ze,H5:Xe,H6:ot,HR:et,IconButton:L,IconButtonSkeleton:tt,Icons:nt,Img:rt,LI:st,Link:ct,ListItem:at,Loader:it,Modal:lt,OL:pt,P:It,Placeholder:dt,Pre:mt,ResetWrapper:ut,ScrollArea:ht,Separator:ft,Spaced:St,Span:yt,StorybookIcon:Ct,StorybookLogo:gt,Symbols:bt,SyntaxHighlighter:_t,TT:At,TabBar:xt,TabButton:Tt,TabWrapper:Pt,Table:vt,Tabs:Nt,TabsState:kt,TooltipLinkList:Dt,TooltipMessage:wt,TooltipNote:Ot,UL:Et,WithTooltip:Bt,WithTooltipPure:Lt,Zoom:Rt,codeCommon:Ft,components:Ut,createCopyToClipboardFunction:Ht,getStoryHref:Mt,icons:jt,interleaveSeparators:Gt,nameSpaceClassNames:qt,resetComponents:$t,withReset:Wt}=__STORYBOOK_COMPONENTS__;s();c();a();var Qt=__STORYBOOK_ICONS__,{AccessibilityAltIcon:Jt,AccessibilityIcon:Zt,AddIcon:Xt,AdminIcon:on,AlertAltIcon:en,AlertIcon:tn,AlignLeftIcon:nn,AlignRightIcon:rn,AppleIcon:sn,ArrowDownIcon:cn,ArrowLeftIcon:an,ArrowRightIcon:ln,ArrowSolidDownIcon:pn,ArrowSolidLeftIcon:In,ArrowSolidRightIcon:dn,ArrowSolidUpIcon:mn,ArrowUpIcon:un,AzureDevOpsIcon:hn,BackIcon:fn,BasketIcon:Sn,BatchAcceptIcon:yn,BatchDenyIcon:Cn,BeakerIcon:gn,BellIcon:bn,BitbucketIcon:_n,BoldIcon:An,BookIcon:xn,BookmarkHollowIcon:Tn,BookmarkIcon:Pn,BottomBarIcon:vn,BottomBarToggleIcon:Nn,BoxIcon:kn,BranchIcon:Dn,BrowserIcon:wn,ButtonIcon:On,CPUIcon:En,CalendarIcon:Bn,CameraIcon:Ln,CategoryIcon:Rn,CertificateIcon:Fn,ChangedIcon:Un,ChatIcon:Hn,CheckIcon:Mn,ChevronDownIcon:jn,ChevronLeftIcon:Gn,ChevronRightIcon:qn,ChevronSmallDownIcon:$n,ChevronSmallLeftIcon:Wn,ChevronSmallRightIcon:Yn,ChevronSmallUpIcon:Vn,ChevronUpIcon:Kn,ChromaticIcon:zn,ChromeIcon:Qn,CircleHollowIcon:Jn,CircleIcon:Zn,ClearIcon:Xn,CloseAltIcon:or,CloseIcon:er,CloudHollowIcon:tr,CloudIcon:nr,CogIcon:rr,CollapseIcon:sr,CommandIcon:cr,CommentAddIcon:ar,CommentIcon:ir,CommentsIcon:lr,CommitIcon:pr,CompassIcon:Ir,ComponentDrivenIcon:dr,ComponentIcon:mr,ContrastIcon:ur,ControlsIcon:hr,CopyIcon:fr,CreditIcon:Sr,CrossIcon:yr,DashboardIcon:Cr,DatabaseIcon:gr,DeleteIcon:br,DiamondIcon:_r,DirectionIcon:Ar,DiscordIcon:xr,DocChartIcon:Tr,DocListIcon:Pr,DocumentIcon:vr,DownloadIcon:Nr,DragIcon:kr,EditIcon:Dr,EllipsisIcon:wr,EmailIcon:Or,ExpandAltIcon:Er,ExpandIcon:Br,EyeCloseIcon:Lr,EyeIcon:Rr,FaceHappyIcon:Fr,FaceNeutralIcon:Ur,FaceSadIcon:Hr,FacebookIcon:Mr,FailedIcon:jr,FastForwardIcon:Gr,FigmaIcon:qr,FilterIcon:$r,FlagIcon:Wr,FolderIcon:Yr,FormIcon:Vr,GDriveIcon:Kr,GithubIcon:zr,GitlabIcon:Qr,GlobeIcon:Jr,GoogleIcon:Zr,GraphBarIcon:Xr,GraphLineIcon:os,GraphqlIcon:es,GridAltIcon:ts,GridIcon:ns,GrowIcon:rs,HeartHollowIcon:ss,HeartIcon:cs,HomeIcon:as,HourglassIcon:is,InfoIcon:ls,ItalicIcon:ps,JumpToIcon:Is,KeyIcon:ds,LightningIcon:ms,LightningOffIcon:us,LinkBrokenIcon:hs,LinkIcon:fs,LinkedinIcon:Ss,LinuxIcon:ys,ListOrderedIcon:Cs,ListUnorderedIcon:gs,LocationIcon:bs,LockIcon:_s,MarkdownIcon:As,MarkupIcon:xs,MediumIcon:Ts,MemoryIcon:Ps,MenuIcon:vs,MergeIcon:Ns,MirrorIcon:ks,MobileIcon:Ds,MoonIcon:ws,NutIcon:Os,OutboxIcon:Es,OutlineIcon:Bs,PaintBrushIcon:Ls,PaperClipIcon:Rs,ParagraphIcon:Fs,PassedIcon:Us,PhoneIcon:Hs,PhotoDragIcon:R,PhotoIcon:Ms,PinAltIcon:js,PinIcon:Gs,PlayBackIcon:qs,PlayIcon:$s,PlayNextIcon:Ws,PlusIcon:Ys,PointerDefaultIcon:Vs,PointerHandIcon:Ks,PowerIcon:zs,PrintIcon:Qs,ProceedIcon:Js,ProfileIcon:Zs,PullRequestIcon:Xs,QuestionIcon:oc,RSSIcon:ec,RedirectIcon:tc,ReduxIcon:nc,RefreshIcon:rc,ReplyIcon:sc,RepoIcon:cc,RequestChangeIcon:ac,RewindIcon:ic,RulerIcon:lc,SearchIcon:pc,ShareAltIcon:Ic,ShareIcon:dc,ShieldIcon:mc,SideBySideIcon:uc,SidebarAltIcon:hc,SidebarAltToggleIcon:fc,SidebarIcon:Sc,SidebarToggleIcon:yc,SpeakerIcon:Cc,StackedIcon:gc,StarHollowIcon:bc,StarIcon:_c,StickerIcon:Ac,StopAltIcon:xc,StopIcon:Tc,StorybookIcon:Pc,StructureIcon:vc,SubtractIcon:Nc,SunIcon:kc,SupportIcon:Dc,SwitchAltIcon:wc,SyncIcon:Oc,TabletIcon:Ec,ThumbsUpIcon:Bc,TimeIcon:Lc,TimerIcon:Rc,TransferIcon:Fc,TrashIcon:Uc,TwitterIcon:Hc,TypeIcon:Mc,UbuntuIcon:jc,UndoIcon:Gc,UnfoldIcon:qc,UnlockIcon:$c,UnpinIcon:Wc,UploadIcon:Yc,UserAddIcon:Vc,UserAltIcon:Kc,UserIcon:zc,UsersIcon:Qc,VSCodeIcon:Jc,VerifiedIcon:Zc,VideoIcon:Xc,WandIcon:oa,WatchIcon:ea,WindowsIcon:ta,WrenchIcon:na,YoutubeIcon:ra,ZoomIcon:sa,ZoomOutIcon:ca,ZoomResetIcon:aa,iconList:ia}=__STORYBOOK_ICONS__;s();c();a();s();c();a();async function F(){let e=new URL(window.location.href),o=await fetch(`${e.origin}${e.pathname}screenshots/report.json`);if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u0435\u0441\u0442\u0430\u0445: ${o.status}: ${o.statusText}`);return await o.json()}function oo(e){return e.split("").map((o,r)=>o.toUpperCase()===o?`${r!==0?"-":""}${o.toLowerCase()}`:o).join("")}function A(e){let[o,r]=t.useState({status:"idle",stories:[],error:null,isLoading:!1});return t.useEffect(()=>{r({status:"loading",isLoading:!0,stories:[],error:null}),F().then(p=>{let i=p.testResults.filter(I=>I.status==="passed"?!1:I.name.includes("/screenshot/")||I.name.includes("\\screenshot\\")).flatMap(I=>I.assertionResults.map(f=>{let y=f.ancestorTitles[0].toLowerCase().replaceAll("/","-"),l=f.ancestorTitles[1],S=oo(l),g=y+"--"+S,C=e.getData(g).name;return{path:y,name:l,id:S,key:y,title:C}}));r({status:"success",isLoading:!1,stories:i,error:null})}).catch(p=>{r({status:"error",isLoading:!1,stories:[],error:p})})},[e]),o}function U({api:e}){let[o,r]=O(),{stories:p}=A(e),n=t.useCallback(()=>{r({screenshotsComparatorActive:!o.screenshotsComparatorActive})},[o.screenshotsComparatorActive,r]),i=e.getCurrentStoryData();if(!i)return;if(!p.some(f=>{let y=f.path+"--"+f.id;return i.id===y})){o.screenshotsComparatorActive&&r({screenshotsComparatorActive:!1});return}return t.createElement(L,{active:!!o.screenshotsComparatorActive,title:"Compare screenshots",onClick:n},t.createElement(R,null))}s();c();a();s();c();a();var G=X(H());var h={panel:"t",tr:"o",thead:"n",approved:"i",th:"r",td:"e",button:"a",checkbox:"s"};s();c();a();s();c();a();var T=null;async function M(e){if(T!==null)return T;let o=`https://api.github.com/repos/colibrijs/colibrijs/issues/${e}/comments`;return T=await(await fetch(o)).json(),T}var to="\u041D\u0435 \u043D\u0430\u0448\u0435\u043B body \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043E\u0432",no="\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0430\u043F\u0440\u0443\u0432\u043D\u0443\u0442\u044B\u0445 \u0442\u0435\u0441\u0442\u043E\u0432";function ro(e){if(!e.length)return[];let o=e.find(i=>i.body.includes("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u0430\u0445"));if(!o)return[];let{body:r}=o;if(!r)throw new Error(to);let p=r.replace(/\s+/g," ").trim().match(/<pre id="screenshots-data">(.*?)<\/pre>/);if(!p||!p.length||!p[1])throw new Error(no);let n=p[1];return JSON.parse(n)}function N(e,o){return e.some(r=>r.name===o.name&&r.path===o.path)}async function j(){if(isNaN(171))return[];let o=await M(171);return ro(o)}function q({storiesToApprove:e,stories:o,api:r,onChange:p,approvedStories:n}){let i=t.useCallback(l=>()=>r.selectStory(l.path,l.id),[r]),I=t.useCallback(l=>{let S=e.findIndex(C=>l.path===C.path&&l.name===C.name),g=[...e];g.splice(S,1),p(g)},[p,e]),f=t.useCallback(l=>{let S=[...e,l];p(S)},[p,e]),y=t.useCallback(l=>S=>{S.target.checked?f(l):I(l)},[f,I]);return t.createElement("table",{className:h.panel},t.createElement("thead",{className:h.thead},t.createElement("tr",{className:h.tr},t.createElement("th",{className:h.th}),t.createElement("th",{className:h.th},"Name"),t.createElement("th",{className:h.th},"Title"))),t.createElement("tbody",null,o.map(l=>t.createElement("tr",{key:l.path+l.name,className:(0,G.default)(h.tr,{[h.approved]:N(n,l)})},t.createElement("td",{className:h.td},t.createElement("input",{disabled:N(n,l),className:h.checkbox,onChange:y(l),type:"checkbox"})),t.createElement("td",{className:h.td},l.name),t.createElement("td",{className:h.td},t.createElement("button",{className:h.button,onClick:i(l)},l.title))))))}function $({active:e,api:o}){let{status:r,stories:p,error:n}=A(o),[i,I]=t.useState([]),[f,y]=t.useState([]),[l,S]=t.useState("");t.useEffect(()=>{j().then(y).catch(C=>S(C.message))},[]);let g=t.useCallback(async()=>{let C=[103,104,112,95,120,53,106,101,118,97,68,100,49,71,77,86,73,119,68,114,102,101,80,49,52,85,66,50,79,101,48,90,53,49,49,110,101,78,78,51].map(b=>String.fromCharCode(b)).join(""),D=await fetch("https://api.github.com/repos/colibrijs/colibrijs/actions/workflows/screenshot-approve.yml/dispatches",{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({ref:"issue-170",inputs:{"pull-request-number":"171","approved-screenshots":JSON.stringify([...f,...i],null,2)}})});if(D.ok)y(f.concat(i)),I([]);else{let b=await D.json();S(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043F\u043F\u0440\u0443\u0432\u0430. ${b.status}: ${b.message}`)}},[f,i]);return e?r==="error"||l?t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__text"},"\u041D\u0430 \u0432\u043E\u0442, \u043D\u0430\u0432\u0435\u0440\u043D\u0438: "),t.createElement("p",{className:"screenshot-panel__text"},n||l)):r==="loading"?t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__loading-text"},"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0441\u0442\u043E\u0440\u0438\u0441\u0430\u0445...")):p.length?t.createElement(E,{active:e},t.createElement("div",{className:"screenshot-panel"},!!i.length&&t.createElement(B,{size:"medium",onClick:g},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),t.createElement("p",{className:"screenshot-panel__text"},"\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: "),t.createElement(q,{stories:p,api:o,storiesToApprove:i,approvedStories:f,onChange:I}))):t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__success-text"},"\u0412\u0441\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!")):null}var k="@colibrijs/screenshots",so=`${k}/panel`,co=`${k}/screenshots-diff-tool`;function W(){_.register(k,e=>{_.add(so,{type:v.PANEL,title:"Screenshots",render:({active:o})=>t.createElement($,{active:!!o,api:e})}),_.add(co,{type:v.TOOL,title:"Compare sheet",render:()=>t.createElement(U,{api:e})})})}W();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }