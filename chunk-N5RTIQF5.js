import{c as L}from"./chunk-EELTRDD7.js";import{P as k,Q as _,V as z,X as w,ea as F}from"./chunk-TVUSQONS.js";import{Aa as h,Gb as C,Hb as I,I as g,Ib as S,Ja as v,Lb as M,Lc as $,M as b,Ma as d,Oc as r,Sb as E,Zb as B,ea as y,ga as l,hc as T,ic as A,kc as j,mb as s,mc as R,na as c,nc as O,q as f,rb as u,tb as N,ub as p,vb as D,w as m}from"./chunk-4AXDEFAJ.js";var J=(()=>{class i{setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(n,e){this.elementRef=n,this.renderer=e,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static{this.\u0275fac=function(e){return new(e||i)(s(d),s(u))}}static{this.\u0275dir=D({type:i,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[h]})}}return i})(),G=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=p({type:i})}static{this.\u0275inj=c({})}}return i})();var Q=["nz-button",""],Z=["*"];function W(i,q){i&1&&B(0,"span",0)}var P="button",U=(()=>{class i{insertSpan(n,e){n.forEach(t=>{if(t.nodeName==="#text"){let o=e.createElement("span"),a=e.parentNode(t);e.insertBefore(a,o,t),e.appendChild(o,t)}})}get iconOnly(){let n=Array.from(this.elementRef?.nativeElement?.childNodes||[]),e=n.every(o=>o.nodeName!=="#text"),t=n.filter(o=>!(o.nodeName==="#comment"||o?.attributes?.getNamedItem("nz-icon"))).length==0;return!!this.nzIconDirectiveElement&&t&&e}constructor(n,e,t,o,a,H){this.ngZone=n,this.elementRef=e,this.cdr=t,this.renderer=o,this.nzConfigService=a,this.directionality=H,this._nzModuleName=P,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.dir="ltr",this.destroy$=new f,this.loading$=new f,this.nzConfigService.getConfigChangeEventForComponent(P).pipe(l(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(l(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{g(this.elementRef.nativeElement,"click",{capture:!0}).pipe(l(this.destroy$)).subscribe(n=>{(this.disabled&&n.target?.tagName==="A"||this.nzLoading)&&(n.preventDefault(),n.stopImmediatePropagation())})})}ngOnChanges(n){let{nzLoading:e}=n;e&&this.loading$.next(this.nzLoading)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(y(this.nzLoading),b(()=>!!this.nzIconDirectiveElement),l(this.destroy$)).subscribe(n=>{let e=this.nzIconDirectiveElement.nativeElement;n?this.renderer.setStyle(e,"display","none"):this.renderer.removeStyle(e,"display")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(e){return new(e||i)(s(v),s(d),s($),s(u),s(k),s(F))}}static{this.\u0275cmp=N({type:i,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(e,t,o){if(e&1&&j(o,z,5,d),e&2){let a;R(a=O())&&(t.nzIconDirectiveElement=a.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(e,t){e&2&&(S("tabindex",t.disabled?-1:t.tabIndex===null?null:t.tabIndex)("disabled",t.disabled||null),M("ant-btn-default",t.nzType==="default")("ant-btn-primary",t.nzType==="primary")("ant-btn-dashed",t.nzType==="dashed")("ant-btn-link",t.nzType==="link")("ant-btn-text",t.nzType==="text")("ant-btn-circle",t.nzShape==="circle")("ant-btn-round",t.nzShape==="round")("ant-btn-lg",t.nzSize==="large")("ant-btn-sm",t.nzSize==="small")("ant-btn-dangerous",t.nzDanger)("ant-btn-loading",t.nzLoading)("ant-btn-background-ghost",t.nzGhost)("ant-btn-block",t.nzBlock)("ant-input-search-button",t.nzSearch)("ant-btn-rtl",t.dir==="rtl")("ant-btn-icon-only",t.iconOnly))},inputs:{nzBlock:[2,"nzBlock","nzBlock",r],nzGhost:[2,"nzGhost","nzGhost",r],nzSearch:[2,"nzSearch","nzSearch",r],nzLoading:[2,"nzLoading","nzLoading",r],nzDanger:[2,"nzDanger","nzDanger",r],disabled:[2,"disabled","disabled",r],tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[C,h],attrs:Q,ngContentSelectors:Z,decls:2,vars:1,consts:[["nz-icon","","nzType","loading"]],template:function(e,t){e&1&&(T(),I(0,W,1,0,"span",0),A(1)),e&2&&E(t.nzLoading?0:-1)},dependencies:[w,z],encapsulation:2,changeDetection:0})}}return m([_()],i.prototype,"nzSize",void 0),i})();var zt=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=p({type:i})}static{this.\u0275inj=c({imports:[U,G,L]})}}return i})();export{J as a,U as b,zt as c};
