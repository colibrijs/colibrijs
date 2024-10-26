try{
(()=>{var H=__STORYBOOK_COMPONENTS__,{A:w,ActionBar:F,AddonPanel:_,Badge:$,Bar:U,Blockquote:W,Button:S,ClipboardCode:j,Code:K,DL:Y,Div:q,DocumentWrapper:z,EmptyTabContent:V,ErrorFormatter:G,FlexBar:Z,Form:J,H1:Q,H2:X,H3:ee,H4:te,H5:oe,H6:se,HR:re,IconButton:ne,IconButtonSkeleton:ae,Icons:le,Img:ie,LI:ce,Link:pe,ListItem:ue,Loader:me,Modal:de,OL:_e,P:Se,Placeholder:he,Pre:Te,ResetWrapper:fe,ScrollArea:ye,Separator:Ce,Spaced:be,Span:ge,StorybookIcon:Oe,StorybookLogo:Ee,Symbols:Pe,SyntaxHighlighter:Ae,TT:Le,TabBar:Ne,TabButton:xe,TabWrapper:Re,Table:ke,Tabs:Be,TabsState:Ie,TooltipLinkList:ve,TooltipMessage:De,TooltipNote:Me,UL:He,WithTooltip:we,WithTooltipPure:Fe,Zoom:$e,codeCommon:Ue,components:We,createCopyToClipboardFunction:je,getStoryHref:Ke,icons:Ye,interleaveSeparators:qe,nameSpaceClassNames:ze,resetComponents:Ve,withReset:Ge}=__STORYBOOK_COMPONENTS__;var et=__STORYBOOK_API__,{ActiveTabs:tt,Consumer:ot,ManagerContext:st,Provider:rt,RequestResponseError:nt,addons:u,combineParameters:at,controlOrMetaKey:lt,controlOrMetaSymbol:it,eventMatchesShortcut:ct,eventToShortcut:pt,experimental_requestResponse:ut,isMacLike:mt,isShortcutTaken:dt,keyToSymbol:_t,merge:St,mockChannel:ht,optionOrAltSymbol:Tt,shortcutMatchesShortcut:ft,shortcutToHumanString:yt,types:h,useAddonState:Ct,useArgTypes:bt,useArgs:gt,useChannel:Ot,useGlobalTypes:Et,useGlobals:Pt,useParameter:At,useSharedState:Lt,useStoryPrepared:Nt,useStorybookApi:xt,useStorybookState:Rt}=__STORYBOOK_API__;var e=__REACT__,{Children:Ht,Component:wt,Fragment:Ft,Profiler:$t,PureComponent:Ut,StrictMode:Wt,Suspense:jt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Kt,cloneElement:Yt,createContext:qt,createElement:zt,createFactory:Vt,createRef:Gt,forwardRef:Zt,isValidElement:Jt,lazy:Qt,memo:Xt,startTransition:eo,unstable_act:to,useCallback:T,useContext:oo,useDebugValue:so,useDeferredValue:ro,useEffect:f,useId:no,useImperativeHandle:ao,useInsertionEffect:lo,useLayoutEffect:io,useMemo:co,useReducer:po,useRef:uo,useState:mo,useSyncExternalStore:_o,useTransition:So,version:ho}=__REACT__;var y="@colibrijs/screenshots",L=`${y}/panel`;function N(s){return s.split("").map((o,i)=>o.toUpperCase()===o?`${i!==0?"-":""}${o.toLowerCase()}`:o).join("")}function x({active:s,api:o}){let[i,b]=e.useState([]),[m,g]=e.useState("");f(()=>{let t=new URL(window.location.href);console.log(t,`${t.origin}${t.pathname}screenshots/report.json`),fetch(`${t.origin}${t.pathname}screenshots/report.json`).then(r=>r.json()).then(r=>{let E=r.testResults.filter(c=>new URL(c.name).pathname.includes("/screenshot/")).flatMap(c=>c.assertionResults.map(p=>{let P=p.ancestorTitles[0].toLowerCase().replaceAll("/","-"),d=p.ancestorTitles[1],A=N(d);return{path:P,name:d,id:A}}));b(E)}).catch(r=>{g(r.message)})},[]);let O=T(t=>()=>{o.selectStory(t.path,t.id)},[o]);return m?e.createElement("div",{className:"screenshot-panel"},e.createElement("p",{className:"screenshot-panel__text"},"\u041D\u0430 \u0432\u043E\u0442, \u043D\u0430\u0432\u0435\u0440\u043D\u0438: "),e.createElement("p",{className:"screenshot-panel__text"},m)):!s||!i.length?null:e.createElement("div",{className:"screenshot-panel"},e.createElement("p",{className:"screenshot-panel__text"},"\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: "),e.createElement("ul",{className:"screenshot-panel__list"},i.map(t=>e.createElement("li",{className:"screenshot-panel__item",key:t.name},e.createElement(S,{size:"medium",onClick:O(t)},t.name)))))}function C(){u.register(y,s=>{u.add(L,{type:h.PANEL,title:"Screenshots",render:({active:o})=>e.createElement(_,{active:!!o},e.createElement(x,{active:!!o,api:s}))})})}C();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
