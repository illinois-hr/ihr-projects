"use strict";(self.wpRiseJsonp=self.wpRiseJsonp||[]).push([["vendors-node_modules_pnpm_articulate_design-system_1_10_0__articulate_design-system-tokens_1_-204222"],{81049:(nc,na,fe)=>{fe.r(na),fe.d(na,{Arc:()=>wi,ArcAbstractFlexLayouts:()=>Ct,ArcAbstractGapSizes:()=>la,ArcAbstractIconSizes:()=>Me,ArcAbstractPopoverActions:()=>be,ArcAbstractPopoverModes:()=>Re,ArcAbstractTextLayouts:()=>zt,ArcAbstractTextOverflows:()=>da,ArcAbstractTextSizes:()=>kt,ArcAvatar:()=>qe,ArcAvatarColors:()=>Ma,ArcAvatarColorsReserved:()=>Yt,ArcAvatarOverflow:()=>un,ArcAvatarOverflowSizes:()=>Gt,ArcAvatarPile:()=>so,ArcAvatarPileSizes:()=>Kt,ArcAvatarSizes:()=>Zt,ArcAvatarText:()=>We,ArcAvatarTextGapSizes:()=>Xt,ArcAvatarTextOverflows:()=>qt,ArcAvatarTextSizes:()=>Wt,ArcBadge:()=>bn,ArcBadgeContrasts:()=>gn,ArcBadgeCount:()=>An,ArcBadgeCountShapes:()=>wn,ArcBadgeCountSizes:()=>$n,ArcBadgeCountVariants:()=>yn,ArcBadgeLayouts:()=>mn,ArcBadgeSizes:()=>vn,ArcBadgeVariants:()=>fn,ArcButton:()=>Cr,ArcButtonDeprecatedVariants:()=>dt,ArcButtonHierarchies:()=>Ho,ArcButtonLayouts:()=>Oo,ArcButtonPopoverActions:()=>No,ArcButtonShapes:()=>Ro,ArcButtonSizes:()=>Mo,ArcButtonVariants:()=>Bo,ArcCheckbox:()=>vt,ArcCheckboxBar:()=>On,ArcCheckboxBarLayouts:()=>Ln,ArcCheckboxBarOption:()=>Mn,ArcCheckboxBarSizes:()=>Rn,ArcCheckboxLayouts:()=>jn,ArcCheckboxSizes:()=>Tn,ArcCheckboxVariants:()=>In,ArcDropdownMenu:()=>ea,ArcIcon:()=>I,ArcIconText:()=>cr,ArcIconTextVariants:()=>yo,ArcInputAction:()=>Xn,ArcLabel:()=>Sr,ArcLabelContent:()=>_r,ArcLabelLayouts:()=>zn,ArcLink:()=>Kn,ArcLinkVariants:()=>Wn,ArcPopover:()=>de,ArcPopoverActions:()=>po,ArcPopoverAnchors:()=>qa,ArcPopoverBoundaries:()=>Wa,ArcPopoverButton:()=>se,ArcPopoverDefaults:()=>tr,ArcPopoverModes:()=>Xa,ArcPopoverVariants:()=>Ke,ArcPopoverVariantsWithOutline:()=>uo,ArcRadio:()=>ft,ArcRadioBar:()=>oi,ArcRadioBarLayouts:()=>ei,ArcRadioBarOption:()=>ti,ArcRadioBarSizes:()=>ai,ArcRadioLayouts:()=>Jn,ArcRadioSizes:()=>Qn,ArcSwitch:()=>si,ArcSwitchLabelPositions:()=>Dr,ArcSwitchSizes:()=>ni,ArcSwitchStates:()=>H,ArcSystemAlignments:()=>ca,ArcSystemColors:()=>Le,ArcSystemHierarchies:()=>ia,ArcSystemLayouts:()=>sr,ArcSystemLineHeights:()=>sa,ArcSystemShapes:()=>Pe,ArcSystemSizes:()=>er,ArcSystemVariants:()=>q,ArcTextAlignments:()=>gi,ArcTextBodyElements:()=>xt,ArcTextBodySizes:()=>vi,ArcTextBodyVariants:()=>mi,ArcTextElements:()=>$t,ArcTextHeadingElements:()=>bt,ArcTextHeadingSizes:()=>pi,ArcTextHeadingVariants:()=>hi,ArcTextInput:()=>Zi,ArcTextInputLayouts:()=>Di,ArcTextInputSizes:()=>Fi,ArcTextInputTypes:()=>Yi,ArcTextInputVariants:()=>Ui,ArcTextKinds:()=>li,ArcTextLineHeights:()=>fi,ArcTextSubheadingSizes:()=>ui,ArcTextTitleSizes:()=>di,ArcToast:()=>At,ArcToastPlacements:()=>ac,ArcToastPopoverActions:()=>ec,ArcToastPopoverModes:()=>rc,ArcToastProgressBarVariants:()=>tc,ArcToastSeverities:()=>Gi,ArcToastSizes:()=>Ji,ArcToastVariants:()=>Qi,ArcTooltip:()=>lt,ArcTooltipDefaults:()=>gr,LogoArticulate:()=>Ba,LogoProductAI:()=>Ha,LogoProductPeek:()=>Na,LogoProductReach:()=>Va,LogoProductReview:()=>Da,LogoProductRise:()=>Fa,LogoProductStoryline:()=>Ua,adoptStyles:()=>S,assignRef:()=>pa,bindDelegatedEvents:()=>st,clamp:()=>ua,css:()=>p,didElementRectChange:()=>ha,extractTextFromReactNode:()=>Qr,getPopoverId:()=>ze,getPreferredAnchorForTooltipId:()=>Qe,isDifferent:()=>yr,isSame:()=>xe,joinArray:()=>nt,makeHtmlId:()=>dr,mapDeprecated:()=>St,pickFromList:()=>k,unbindDelegatedEvents:()=>Po,updatePopoverPosition:()=>Ge});const Pe=["circle","square","narrow"],q=["inherit","common","disabled","neutral","outline","solid","critical","ai","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning"],ia=["primary","secondary","tertiary","plain"],sr=["hug","fill","icon","gutter","inline"],ca=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],sa=["inherit","tight","standard","loose"],er=["inherit","xxl","xl","lg","md","sm","xs","xxs"],Le=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black"],Re=["","auto","manual"],be=["toggle","show","hide"],Me=["inherit","xl","lg","md","sm","xs"],la=["inherit","lg","md","sm"],kt=["inherit","md","sm"],da=["inherit","wrap","truncate"],zt=["gutter","inline"],Ct=["hug","fill"],St=(r,e)=>e[r]||r,k=(r,e)=>r.filter(a=>e.includes(a)),pa=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},ua=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),yr=(r,e)=>r!==e,xe=(r,e)=>r===e,ha=({a:r,b:e})=>yr(r?.top,e?.top)||yr(r?.left,e?.left)||yr(r?.width,e?.width)||yr(r?.height,e?.height);var n=fe(39291),b=fe(63820);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=globalThis,Oe=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),va=new WeakMap;class ma{constructor(e,a,o){if(this._$cssResult$=!0,o!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(Oe&&e===void 0){const o=a!==void 0&&a.length===1;o&&(e=va.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&va.set(a,e))}return e}toString(){return this.cssText}}const _t=r=>new ma(typeof r=="string"?r:r+"",void 0,Be),p=(r,...e)=>{const a=r.length===1?r[0]:e.reduce((o,i,c)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[c+1],r[0]);return new ma(a,r,Be)},Et=(r,e)=>{if(Oe)r.adoptedStyleSheets=e.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of e){const o=document.createElement("style"),i=$e.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=a.cssText,r.appendChild(o)}},ga=Oe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const o of e.cssRules)a+=o.cssText;return _t(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jt,defineProperty:Tt,getOwnPropertyDescriptor:It,getOwnPropertyNames:Pt,getOwnPropertySymbols:Lt,getPrototypeOf:Rt}=Object,ye=globalThis,fa=ye.trustedTypes,Mt=fa?fa.emptyScript:"",Ot=ye.reactiveElementPolyfillSupport,Xr=(r,e)=>r,He={toAttribute(r,e){switch(e){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},ba=(r,e)=>!jt(r,e),xa={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:ba};Symbol.metadata??=Symbol("metadata"),ye.litPropertyMetadata??=new WeakMap;class Lr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=xa){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,a);i!==void 0&&Tt(this.prototype,e,i)}}static getPropertyDescriptor(e,a,o){const{get:i,set:c}=It(this.prototype,e)??{get(){return this[a]},set(s){this[a]=s}};return{get:i,set(s){const v=i?.call(this);c?.call(this,s),this.requestUpdate(e,v,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xa}static _$Ei(){if(this.hasOwnProperty(Xr("elementProperties")))return;const e=Rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xr("properties"))){const a=this.properties,o=[...Pt(a),...Lt(a)];for(const i of o)this.createProperty(i,a[i])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[o,i]of a)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[a,o]of this.elementProperties){const i=this._$Eu(a,o);i!==void 0&&this._$Eh.set(i,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)a.unshift(ga(i))}else e!==void 0&&a.push(ga(e));return a}static _$Eu(e,a){const o=a.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const o of a.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,a,o){this._$AK(e,o)}_$ET(e,a){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const c=(o.converter?.toAttribute!==void 0?o.converter:He).toAttribute(a,o.type);this._$Em=e,c==null?this.removeAttribute(i):this.setAttribute(i,c),this._$Em=null}}_$AK(e,a){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=o.getPropertyOptions(i),s=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:He;this._$Em=i;const v=s.fromAttribute(a,c.type);this[i]=v??this._$Ej?.get(i)??v,this._$Em=null}}requestUpdate(e,a,o){if(e!==void 0){const i=this.constructor,c=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??ba)(c,a)||o.useDefault&&o.reflect&&c===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,a,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:o,reflect:i,wrapped:c},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??a??this[e]),c!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(a=void 0),this._$AL.set(e,a)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,c]of this._$Ep)this[i]=c;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,c]of o){const{wrapped:s}=c,v=this[i];s!==!0||this._$AL.has(i)||v===void 0||this.C(i,void 0,c,v)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(a)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(a=>this._$ET(a,this[a])),this._$EM()}updated(e){}firstUpdated(e){}}Lr.elementStyles=[],Lr.shadowRootOptions={mode:"open"},Lr[Xr("elementProperties")]=new Map,Lr[Xr("finalized")]=new Map,Ot?.({ReactiveElement:Lr}),(ye.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis,we=Ne.trustedTypes,$a=we?we.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ve="$lit$",lr=`lit$${Math.random().toFixed(9).slice(2)}$`,De="?"+lr,Bt=`<${De}>`,wr=document,qr=()=>wr.createComment(""),Wr=r=>r===null||typeof r!="object"&&typeof r!="function",Fe=Array.isArray,ya=r=>Fe(r)||typeof r?.[Symbol.iterator]=="function",Ue=`[ 	
\f\r]`,Kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wa=/-->/g,Aa=/>/g,Ar=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ka=/'/g,za=/"/g,Ca=/^(?:script|style|textarea|title)$/i,Ye=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),ic=Ye(1),cc=Ye(2),sc=Ye(3),Rr=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Sa=new WeakMap,kr=wr.createTreeWalker(wr,129);function _a(r,e){if(!Fe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $a!==void 0?$a.createHTML(e):e}const Ea=(r,e)=>{const a=r.length-1,o=[];let i,c=e===2?"<svg>":e===3?"<math>":"",s=Kr;for(let v=0;v<a;v++){const l=r[v];let d,g,m=-1,f=0;for(;f<l.length&&(s.lastIndex=f,g=s.exec(l),g!==null);)f=s.lastIndex,s===Kr?g[1]==="!--"?s=wa:g[1]!==void 0?s=Aa:g[2]!==void 0?(Ca.test(g[2])&&(i=RegExp("</"+g[2],"g")),s=Ar):g[3]!==void 0&&(s=Ar):s===Ar?g[0]===">"?(s=i??Kr,m=-1):g[1]===void 0?m=-2:(m=s.lastIndex-g[2].length,d=g[1],s=g[3]===void 0?Ar:g[3]==='"'?za:ka):s===za||s===ka?s=Ar:s===wa||s===Aa?s=Kr:(s=Ar,i=void 0);const y=s===Ar&&r[v+1].startsWith("/>")?" ":"";c+=s===Kr?l+Bt:m>=0?(o.push(d),l.slice(0,m)+Ve+l.slice(m)+lr+y):l+lr+(m===-2?v:y)}return[_a(r,c+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Gr{constructor({strings:e,_$litType$:a},o){let i;this.parts=[];let c=0,s=0;const v=e.length-1,l=this.parts,[d,g]=Ea(e,a);if(this.el=Gr.createElement(d,o),kr.currentNode=this.el.content,a===2||a===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=kr.nextNode())!==null&&l.length<v;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(Ve)){const f=g[s++],y=i.getAttribute(m).split(lr),A=/([.?@])?(.*)/.exec(f);l.push({type:1,index:c,name:A[2],strings:y,ctor:A[1]==="."?Ta:A[1]==="?"?Ia:A[1]==="@"?Pa:Jr}),i.removeAttribute(m)}else m.startsWith(lr)&&(l.push({type:6,index:c}),i.removeAttribute(m));if(Ca.test(i.tagName)){const m=i.textContent.split(lr),f=m.length-1;if(f>0){i.textContent=we?we.emptyScript:"";for(let y=0;y<f;y++)i.append(m[y],qr()),kr.nextNode(),l.push({type:2,index:++c});i.append(m[f],qr())}}}else if(i.nodeType===8)if(i.data===De)l.push({type:2,index:c});else{let m=-1;for(;(m=i.data.indexOf(lr,m+1))!==-1;)l.push({type:7,index:c}),m+=lr.length-1}c++}}static createElement(e,a){const o=wr.createElement("template");return o.innerHTML=e,o}}function zr(r,e,a=r,o){if(e===Rr)return e;let i=o!==void 0?a._$Co?.[o]:a._$Cl;const c=Wr(e)?void 0:e._$litDirective$;return i?.constructor!==c&&(i?._$AO?.(!1),c===void 0?i=void 0:(i=new c(r),i._$AT(r,a,o)),o!==void 0?(a._$Co??=[])[o]=i:a._$Cl=i),i!==void 0&&(e=zr(r,i._$AS(r,e.values),i,o)),e}class ja{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:o}=this._$AD,i=(e?.creationScope??wr).importNode(a,!0);kr.currentNode=i;let c=kr.nextNode(),s=0,v=0,l=o[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new Mr(c,c.nextSibling,this,e):l.type===1?d=new l.ctor(c,l.name,l.strings,this,e):l.type===6&&(d=new La(c,this,e)),this._$AV.push(d),l=o[++v]}s!==l?.index&&(c=kr.nextNode(),s++)}return kr.currentNode=wr,i}p(e){let a=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,a),a+=o.strings.length-2):o._$AI(e[a])),a++}}class Mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,o,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=zr(this,e,a),Wr(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Rr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ya(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&Wr(this._$AH)?this._$AA.nextSibling.data=e:this.T(wr.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Gr.createElement(_a(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(a);else{const c=new ja(i,this),s=c.u(this.options);c.p(a),this.T(s),this._$AH=c}}_$AC(e){let a=Sa.get(e.strings);return a===void 0&&Sa.set(e.strings,a=new Gr(e)),a}k(e){Fe(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let o,i=0;for(const c of e)i===a.length?a.push(o=new Mr(this.O(qr()),this.O(qr()),this,this.options)):o=a[i],o._$AI(c),i++;i<a.length&&(this._$AR(o&&o._$AB.nextSibling,i),a.length=i)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Jr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,o,i,c){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=a,this._$AM=i,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}_$AI(e,a=this,o,i){const c=this.strings;let s=!1;if(c===void 0)e=zr(this,e,a,0),s=!Wr(e)||e!==this._$AH&&e!==Rr,s&&(this._$AH=e);else{const v=e;let l,d;for(e=c[0],l=0;l<c.length-1;l++)d=zr(this,v[o+l],a,l),d===Rr&&(d=this._$AH[l]),s||=!Wr(d)||d!==this._$AH[l],d===B?e=B:e!==B&&(e+=(d??"")+c[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ta extends Jr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class Ia extends Jr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class Pa extends Jr{constructor(e,a,o,i,c){super(e,a,o,i,c),this.type=5}_$AI(e,a=this){if((e=zr(this,e,a,0)??B)===Rr)return;const o=this._$AH,i=e===B&&o!==B||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,c=e!==B&&(o===B||i);i&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class La{constructor(e,a,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){zr(this,e)}}const lc={M:Ve,P:lr,A:De,C:1,L:Ea,R:ja,D:ya,V:zr,I:Mr,H:Jr,N:Ia,U:Pa,B:Ta,F:La},Ht=Ne.litHtmlPolyfillSupport;Ht?.(Gr,Mr),(Ne.litHtmlVersions??=[]).push("3.3.1");const Nt=(r,e,a)=>{const o=a?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const c=a?.renderBefore??null;o._$litPart$=i=new Mr(e.insertBefore(qr(),c),c,void 0,a??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=globalThis;class Ae extends Lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Rr}}Ae._$litElement$=!0,Ae.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:Ae});const Vt=Ze.litElementPolyfillSupport;Vt?.({LitElement:Ae});const dc={_$AK:(r,e,a)=>{r._$AK(e,a)},_$AL:r=>r._$AL};(Ze.litElementVersions??=[]).push("4.2.1");const Ra={};function S(r,e){if(typeof document<"u"&&e?.styleSheet){const a=Ra[r];Ra[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==a),e.styleSheet]}}const x=p`arc•avatar`,L=p`arc•modifier`,V=p`${x}•computed`,ir=p`${x}•mask`,Dt=r=>r?.trim().charAt(0)??void 0,Ft=(r,e)=>{let a=0;const o=Math.min(r.length,50);for(let i=0;i<o;i+=1)a=(a+r.charCodeAt(i))%(e??33);return a},Ut=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[Ft(r,e.length)]||a||e[0]:a,Ma=k(Le,["blue","orange","mint","red","yellow","green","maroon","purple"]),Yt=k(Le,["neutral","white","black"]),ke=k(er,["lg","md","sm","xs"]),Zt=[...ke,"profile-sm","profile-md","profile-lg"],Xt=la,qt=da,Wt=ke,Kt=ke,Gt=ke,Xe=p`

  &[data-size=xs] {
    --${L}: 10; /* unitless, desired size at 100% */
    --${x}-num-size-1: 10;
    --${x}-num-size-2: 8;
    --${x}-num-size-3: 6;
    --${x}-size: 20;
  }

  &[data-size=sm] {
    --${L}: 12; /* unitless, desired size at 100% */
    --${x}-num-size-1: 12;
    --${x}-num-size-2: 10;
    --${x}-num-size-3: 8;
    --${x}-size: 24;
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    --${L}: 14; /* unitless, desired size at 100% */
    --${x}-num-size-1: 14;
    --${x}-num-size-2: 12;
    --${x}-num-size-3: 10;
    --${x}-size: 32;
  }

  &[data-size=lg] {
    --${L}: 16; /* unitless, desired size at 100% */
    --${x}-num-size-1: 16;
    --${x}-num-size-2: 14;
    --${x}-num-size-3: 12;
    --${x}-size: 40;
  }

`,Oa=p`
  [arc-avatar] {
    --${L}: inherit;
    --${x}-num-size-1: inherit;
    --${x}-num-size-2: inherit;
    --${x}-num-size-3: inherit;
    --${x}-size: inherit;
  }
`,Jt=p`
@layer arc-components {

[arc-avatar] {

  /* Colors --------------------------------------------------------• */

  --${x}-color: var(--arc-avatar-color, var(--arc-color-text-inverse));

  &:has([data-color=blue]) { /* @default color */
    --${x}-background: var(--arc-color-blue-400);
  }
  &:has([data-color=purple]) {
    --${x}-background: var(--arc-color-purple-400);
  }
  &:has([data-color=red]) {
    --${x}-background: var(--arc-color-red-400);
  }
  &:has([data-color=yellow]) {
    --${x}-background: var(--arc-color-yellow-400);
  }
  &:has([data-color=green]) {
    --${x}-background: var(--arc-color-green-400);
  }
  &:has([data-color=maroon]) {
    --${x}-background: var(--arc-color-maroon-400);
  }
  &:has([data-color=orange]) {
    --${x}-background: var(--arc-color-orange-400);
  }
  &:has([data-color=mint]) {
    --${x}-background: var(--arc-color-mint-400);
  }


  /* RESERVED COLORS -----------------------------------------------• */

  &:has([data-color=black]) {
    --${x}-background: var(--arc-color-mono-black);
  }

  &:has([data-color=neutral]) { /* @default anonymous */
    --${x}-color: var(--${x}-neutral-color, var(--arc-color-icon-secondary));
    --${x}-background: var(--${x}-neutral-background, var(--arc-color-alpha-black-10));
  }

  &:has([data-color=white]) {
    --${x}-color: var(--arc-color-text-primary);
    --${x}-background: var(--arc-color-mono-white);
  }


  /* SIZES ---------------------------------------------------------• */

  ${Xe}


  /* PROFILE SIZES -------------------------------------------------• */

  &[data-size=profile-sm] {
    --${L}: 28; /* unitless, desired size at 100% */
    --${x}-size: 64;
  }

  &[data-size=profile-md] {
    --${L}: 32; /* unitless, desired size at 100% */
    --${x}-size: 96;
  }

  &[data-size=profile-lg] {
    --${L}: 40; /* unitless, desired size at 100% */
    --${x}-size: 160;
  }


  /* COMPUTED -------------------------------------------------------• */

  --${L}-px: var(--${L}) * 1px;
  --${L}-em: var(--${L}) * 1em;

  --${V}-font-size: calc(var(--${L}-px));
  --${V}-size: calc(var(--${x}-size) / var(--${L}-em));
  --${V}-num-size-1: calc(var(--${x}-num-size-1) / var(--${L}-em));
  --${V}-num-size-2: calc(var(--${x}-num-size-2) / var(--${L}-em));
  --${V}-num-size-3: calc(var(--${x}-num-size-3) / var(--${L}-em));
}

/* CORE AVATAR STYLES ----------------------------------------------• */

[arc-avatar] {
  font-size: var(--arc-avatar-font-size, var(--${V}-font-size));

  flex: none;
  align-self: center;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--${V}-size);
  aspect-ratio: 1 / 1;
  line-height: normal;

  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--arc-border-radius-circle);

  &[data-is-inactive] {
    opacity: var(--arc-alpha-50);
  }

  [data-num-length] {
    --arc-button-font-size: var(--${V}-num-size-1);
  }

  [data-num-length='2'] {
    --arc-button-font-size: var(--${V}-num-size-2);
  }

  [data-num-length='3'] {
    --arc-button-font-size: var(--${V}-num-size-3);
  }


  /* INNER ELEMENTS ------------------------------------------------• */

  [data-element=counter] {
    --${x}-pointer-events: all;

    /* Inter-Component Communication • ArcButton --------------------• */
    --arc-button-width: 100%;
    --arc-button-height: auto;
    --arc-button-aspect-ratio: 1 /1;
    --arc-button-padding: 0;
    --arc-button-background: var(--arc-avatar-background, var(--${x}-background));
    --arc-button-color: var(--arc-avatar-color, var(--${x}-color));
    /* --arc-button-content-pointer-events: all; */

    &:disabled {
      --arc-button-cursor: default;
    }
  }

  [data-element=image] {
    object-fit: cover;

    /* Hides problematic image */
    &:is([data-not-loaded], [data-has-error]) {
      --${x}-visibility: hidden;
    }

    /* Hides subsequent elements with valid image */
    &:not([data-has-error]) ~ [data-element] {
      --${x}-color: transparent;
      --${x}-background: none;
    }
  }

  :is(
    [data-element=counter],
    [data-element=initial],
    [data-element=anonymous]
   ) {
    background: var(--${x}-background);
    color: var(--${x}-color);
  }

  [data-element] {
    flex: none;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    border-radius: inherit;
    font-weight: var(--arc-font-weight-600);
    visibility: var(--${x}-visibility, unset);

    transition-property: visibility, background-color, color;
    transition-behavior: allow-discrete;
    transition-duration: 200ms;
    transition-timing-function: linear;

    pointer-events: var(--${x}-pointer-events, none);
    user-select: none;
    -webkit-user-select: none;
  }
}

}
`,Qt=({children:r,initial:e,color:a,...o})=>(0,n.jsx)("span",{...o,"data-element":"initial","data-color":a,children:r||e}),ro=({isLoaded:r,hasError:e,onLoad:a,onError:o,...i})=>{const c=!r&&""||void 0,s=e&&""||void 0,v=!r||e||void 0;return(0,n.jsx)("img",{...i,hidden:v,"data-element":"image","data-not-loaded":c,"data-has-error":s,onLoad:a,onError:o})},Ba=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Ha=r=>(0,n.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),Na=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Va=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Da=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Fa=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Ua=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),eo=p`
@layer arc-components {

[arc-icon] {
  color: var(--arc-icon-color, currentcolor);
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, currentcolor);
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
[arc-icon]:not([hidden]) > [arc-icon] { display: contents; }

}
`,ao=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,I=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:o,style:i,...c})=>{const s={...i,"--arc-icon-size":ao(o),"--arc-icon-color":a},v=!!(c["aria-label"]||c["aria-labelledby"]),l=typeof e=="string"&&e.length>0?(0,n.jsx)("span",{className:e}):e;return(0,n.jsx)("span",{"aria-hidden":!v||void 0,...c,"arc-icon":"",style:s,children:r||l})};I.Articulate=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Ba,{})}),I.AI=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Ha,{})}),I.Peek=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Na,{})}),I.Reach=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Va,{})}),I.Review=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Da,{})}),I.Rise=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Fa,{})}),I.Storyline=r=>(0,n.jsx)(I,{...r,icon:(0,n.jsx)(Ua,{})}),S("ArcIcon",eo);const to=({children:r,icon:e,color:a,...o})=>(0,n.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:r||(0,n.jsx)(I,{icon:e})}),Ya="blue",Za="neutral",oo="fa-solid fa-user",qe=(0,b.forwardRef)(({children:r,size:e,color:a,isActive:o=!0,isAnonymous:i,alt:c,src:s,name:v,email:l,...d},g)=>{const[m,f]=(0,b.useState)(!1),[y,A]=(0,b.useState)(!1),C=X=>{f(!0),A(!1),d.onLoad?.(X)},T=X=>{f(!1),A(!0),d.onError?.(X)},O=Dt(v||l),$=!!O,w=i||(!m||y)&&!$,E=!w&&!!s&&!y||void 0,N=(w&&Za||void 0)??(a||void 0)??Ut(String(l||v||void 0),Ma,Ya)??Ya,Y={src:s,alt:c,isLoaded:m,hasError:y,onLoad:C,onError:T};return(0,b.useEffect)(()=>{w&&f(!1)},[w]),(0,n.jsx)("span",{...d,ref:g,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":e,"aria-label":(d.title??v??l)||void 0,children:r||(w?(0,n.jsx)(to,{icon:oo,color:Za}):(0,n.jsxs)(n.Fragment,{children:[E&&(0,n.jsx)(ro,{...Y}),$&&(0,n.jsx)(Qt,{initial:O,color:N})]}))})});S("ArcAvatar",Jt);const Z=p`${x}•text`,mr=p`${x}•subtext`,Or=p`${x}•gap`,no=p`
@layer arc-components {

  [arc-avatar-text] {
    --${Z}-font-size: max(var(--arc-font-size-14), 0.875em); /* 14px @ 100% */
    --${mr}-font-size: max(var(--arc-font-size-12), 0.75em); /* 12px @ 100% */
    --${Or}: max(var(--arc-space-1), 0.5em); /* 8px @ 100% */

    --${Z}-overflow: unset;
    --${Z}-text-overflow: unset;
    --${Z}-white-space: unset;

    &[data-overflow=truncate] {
      --${Z}-overflow: hidden;
      --${Z}-text-overflow: ellipsis;
      --${Z}-white-space: nowrap;
    }

    /* @default size: md */

    &:has([data-size=inherit]) {
      --${Z}-font-size: 1em;
      --${mr}-font-size: 0.875em;
      --${Or}: 0.5em;
    }

    &:has([data-size=lg]) {
      --${Z}-font-size: var(--arc-font-size-14);
      --${mr}-font-size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) {
      --${Z}-font-size: var(--arc-font-size-14);
      --${mr}-font-size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      --${Z}-font-size: var(--arc-font-size-14);
      --${mr}-font-size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      --${Z}-font-size: var(--arc-font-size-12);
      --${mr}-font-size: var(--arc-font-size-12);
      --${Or}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { --${Or}: var(--arc-space-1-5); }
    &[data-gap=sm] { --${Or}: var(--arc-space-0-5); }
  }

  [arc-avatar-text] {
    font-size: var(--${Z}-font-size, inherit);
    display: inline-flex;
    align-items: center;
    gap: var(--${Or});
    line-height: normal;

    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: block;
      font-size: var(--arc-avatar-subtext-font-size, var(--${mr}-font-size));
      color: var(--arc-avatar-subtext-color, var(--${mr}-color, color-mix(in srgb, currentcolor 61%, transparent)));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(--${Z}-overflow);
      text-overflow: var(--${Z}-text-overflow);
      white-space: var(--${Z}-white-space);
    }
  }

}
`,io="Anonymous",We=({children:r,avatar:e={},subtext:a,size:o,gapSize:i,overflow:c,isStrong:s,...v})=>{const l=e.anonymousName||io,d=e.name||e.email||e.src,g=e.name||e.email,m=e.isAnonymous||!d,f=r||m?l:g,y=i!=="inherit"?i:void 0,A=c!=="inherit"?c:void 0;return(0,n.jsxs)("span",{...v,"arc-avatar-text":"","data-gap":y,"data-overflow":A,"is-strong":s?"":void 0,children:[(0,n.jsx)(qe,{...e,isAnonymous:m,size:o}),(0,n.jsxs)("span",{"data-element":"text",children:[f,a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};S("ArcAvatarText",no);const co=p`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Xe}
    ${Oa}

    /* OVERLAP MASK --------------------------------------------------•
       --${L} comes from avatarSizesShared
    */

    --${L}-em: var(--${L}) * 1em;
    --${V}-offset: calc(2 / var(--${L}-em));
    --${V}-mask-shift: calc(-2 / var(--${L}-em));

    --${ir}-position: 50% 50% at calc(-50% + var(--${V}-offset)) 50%;
    --${ir}-sharpness: min(var(--${V}-offset), 0.015em);
    --${ir}-hide: transparent calc(100% + var(--${V}-offset));
    --${ir}-show: black calc(100% + var(--${ir}-sharpness) + var(--${V}-offset));

    --${ir}: radial-gradient(
      var(--${ir}-position),
      var(--${ir}-hide),
      var(--${ir}-show)
    ) padding-box;

    /* Cutout (mask) a portion of subsequent avatars -----------------• */

    [arc-avatar]+[arc-avatar] {
      margin-left: var(--${V}-mask-shift);
      mask: var(--${ir}); /* magic! */
    }

  }

}
`,so=({size:r="md",...e})=>(0,n.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});S("ArcAvatarPile",co);const Qr=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Qr).join(""):(0,b.isValidElement)(r)?Qr(r.props.children):"",lo=()=>Math.random().toString(16).slice(-6),dr=r=>`${r||"id"}-${lo()}`,Xa=[...Re],po=[...be],Ke=k(q,["common"]),uo=k(q,["ai","brand"]),qa=["top-start","top-center","top-end","left-start","right-start","left-center","center","right-center","left-end","right-end","bottom-start","bottom-center","bottom-end"],Wa=["ignore","flip"],z={Threshold:0,StartX:{align:"start",y:"y1",oY:"ch",xMod:-1,yMod:1},StartY:{align:"start",x:"x1",oX:"cw",xMod:-1,yMod:1},CenterX:{align:"center",y:"cy",oY:"z",xMod:-1,yMod:1},CenterY:{align:"center",x:"cx",oX:"z",xMod:1,yMod:-1},EndX:{align:"end",y:"y2",oY:"ch",xMod:1,yMod:-1},EndY:{align:"end",x:"x2",oX:"cw",xMod:1,yMod:-1},Top:{edge:"top",y:"top",pX:"z",pY:"ch",oY:"z",pMod:-1},Bottom:{edge:"bottom",y:"bottom",pX:"z",pY:"ch",oY:"z",pMod:1},Right:{edge:"right",x:"right",pX:"cw",pY:"z",oX:"z",pMod:1},Left:{edge:"left",x:"left",pX:"cw",pY:"z",oX:"z",pMod:-1},Center:{edge:"center",pX:"cw",pY:"ch",pMod:0}},ar=(r,e,a)=>a==="left"&&r.a.left>=r.v.threshold&&r.a.left-r.p.width+e.x>=r.v.threshold||a==="top"&&r.a.top>=r.v.threshold&&r.a.top-r.p.height+e.y>=r.v.threshold||a==="right"&&r.a.right<=r.v.width-r.v.threshold&&r.a.right+r.p.width+e.x<=r.v.width-r.v.threshold||a==="bottom"&&r.a.bottom<=r.v.height-r.v.threshold&&r.a.bottom+r.p.height+e.y<=r.v.height-r.v.threshold,Ka=(r,e)=>r.a.top+r.p.height+e.y<=r.v.height-r.v.threshold&&r.a.top>=r.v.threshold,Ga=(r,e)=>r.a.left+r.p.width+e.x<=r.v.width-r.v.threshold&&r.a.left>=r.v.threshold,Ja=(r,e)=>r.a.cy+r.p.ch+e.y<=r.v.height-r.v.threshold&&r.a.cy-r.p.ch+e.y>=r.v.threshold,Qa=(r,e)=>r.a.cx+r.p.cw+e.x<=r.v.width-r.v.threshold&&r.a.cx-r.p.cw+e.x>=r.v.threshold,rt=(r,e)=>r.a.bottom<=r.v.height-r.v.threshold&&r.a.bottom-r.p.height+e.y>=r.v.threshold,et=(r,e)=>r.a.right<=r.v.width-r.v.threshold&&r.a.right-r.p.width+e.x>=r.v.threshold,re={"top-start":{...z.Top,...z.StartY,fitCheck:(r,e)=>ar(r,e,z.Top.edge)&&Ga(r,e),flip:"bottom-start"},"top-center":{...z.Top,...z.CenterY,fitCheck:(r,e)=>ar(r,e,z.Top.edge)&&Qa(r,e),flip:"bottom-center"},"top-end":{...z.Top,...z.EndY,fitCheck:(r,e)=>ar(r,e,z.Top.edge)&&et(r,e),flip:"bottom-end"},"right-start":{...z.Right,...z.StartX,fitCheck:(r,e)=>ar(r,e,z.Right.edge)&&Ka(r,e),flip:"left-start"},"right-center":{...z.Right,...z.CenterX,fitCheck:(r,e)=>ar(r,e,z.Right.edge)&&Ja(r,e),flip:"left-center"},"right-end":{...z.Right,...z.EndX,fitCheck:(r,e)=>ar(r,e,z.Right.edge)&&rt(r,e),flip:"left-end"},center:{...z.Center,...z.CenterX,...z.CenterY,fitCheck:(r,e)=>r.a.cx-r.p.cw+e.x>=r.v.threshold&&r.a.cx+r.p.cw+e.x<=r.v.width-r.v.threshold&&r.a.cy-r.p.ch+e.y>=r.v.threshold&&r.a.cy+r.p.ch+e.y<=r.v.height-r.v.threshold,flip:"center"},"bottom-start":{...z.Bottom,...z.StartY,fitCheck:(r,e)=>ar(r,e,z.Bottom.edge)&&Ga(r,e),flip:"top-start"},"bottom-center":{...z.Bottom,...z.CenterY,fitCheck:(r,e)=>ar(r,e,z.Bottom.edge)&&Qa(r,e),flip:"top-center"},"bottom-end":{...z.Bottom,...z.EndY,fitCheck:(r,e)=>ar(r,e,z.Bottom.edge)&&et(r,e),flip:"top-end"},"left-start":{...z.Left,...z.StartX,fitCheck:(r,e)=>ar(r,e,z.Left.edge)&&Ka(r,e),flip:"right-start"},"left-center":{...z.Left,...z.CenterX,fitCheck:(r,e)=>ar(r,e,z.Left.edge)&&Ja(r,e),flip:"right-center"},"left-end":{...z.Left,...z.EndX,fitCheck:(r,e)=>ar(r,e,z.Left.edge)&&rt(r,e),flip:"right-end"}},tr={popover:Xa[0],anchorAt:qa[10],boundary:Wa[0],variant:Ke[0],isInverse:!1,hasTail:!1,tailSize:10,threshold:0,offset:0},ze=(r,e="arc-popover")=>r||dr(e),ho=(r=tr.threshold)=>({threshold:r,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,scrollX:window.scrollX,scrollY:window.scrollY,left:window.scrollX,top:window.scrollY,right:window.scrollX+document.documentElement.clientWidth,bottom:window.scrollY+document.documentElement.clientHeight}),at=r=>({...JSON.parse(JSON.stringify(r)),cw:r.width/2,ch:r.height/2,cx:r.left+r.width/2,cy:r.top+r.height/2,x1:r.left,x2:r.left+r.width,y1:r.top,y2:r.top+r.height,z:0}),vo=(r,e,a=tr.offset,o=tr.tailSize,i=tr.threshold)=>({a:at(r?.getBoundingClientRect()??new DOMRect),p:at(e?.getBoundingClientRect()??new DOMRect),o:a,v:ho(i),t:o}),tt=(r,e,a)=>({x:["left","right"].includes(r)?e*a:0,y:["top","bottom"].includes(r)?e*a:0}),mo=(r,e)=>[...Object.keys(re)].filter(a=>yr(a,r)&&yr(e.align,"center")?!a.includes("center"):a).sort((a,o)=>{const i=xe(re[a].edge,e.edge),c=xe(re[o].edge,e.edge),s=i?-1:1;return xe(i,c)?0:s}),ot=({anchorAt:r,measurements:e})=>{const a=re[r],o=tt(a.edge,e.o,a.pMod);return{cx:e.a.cx,cy:e.a.cy,offsets:o,config:a}},go=({anchorAt:r,measurements:e})=>{const{offsets:a,config:o}=ot({anchorAt:r,measurements:e});return o.fitCheck(e,a)?r:[o.flip,...mo(r,o)].find(i=>{const c=re[i],s=tt(c.edge,e.o,c.pMod);return c.fitCheck(e,s)})??r},pr=(r,e="px")=>`${r}${e}`,Ge=({anchorElement:r,popoverElement:e,anchorAt:a=tr.anchorAt,boundary:o,offset:i,tailSize:c,threshold:s=z.Threshold})=>{const v=a,l=vo(r,e,i,c,s),d=o==="flip"?go({anchorAt:v,measurements:l}):v,{cx:g,cy:m}=ot({anchorAt:d,measurements:l}),f={cx:g,cy:m},y=r?.dataset?.layout==="icon"||l.t>0||!a?.includes("-center")&&(a?.includes("left-")||a?.includes("right-"));return{anchorAt:d,vars:{"--js-cx":pr((f.cx+window.scrollX).toFixed(2)),"--js-cy":pr((f.cy+window.scrollY).toFixed(2)),"--js-w":pr(l.a.width.toFixed(2)),"--js-h":pr(l.a.height.toFixed(2)),"--js-cw":pr(l.a.cw.toFixed(2)),"--js-ch":pr(l.a.ch.toFixed(2)),"--js-o":pr(l.o.toFixed(2)),"--js-t":pr(l.t,""),"--js-i":y?"1":"0","--js-m":pr(ua(l.t,l.a.height,l.a.cw).toFixed(2))}}},nt=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),ur=p`arc•icon•text`,R=p`${ur}•icon`,P=p`${ur}•text`,Br=p`${ur}•subtext`,hr=p`${ur}•gap`,fo=p`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    --${P}-color: currentcolor;
    --${R}-color: currentcolor;
  }

  &[data-variant=primary] {
    --${P}-color: var(--arc-color-text-primary);
    --${R}-color: var(--arc-color-icon-primary);
  }

  &[data-variant=secondary] {
    --${P}-color: var(--arc-color-text-secondary);
    --${R}-color: var(--arc-color-icon-secondary);
  }

  &[data-variant=inverse] {
    --${P}-color: var(--arc-color-text-inverse);
    --${R}-color: var(--arc-color-icon-inverse);
  }

  &[data-variant=brand] {
    --${P}-color: var(--arc-color-text-brand);
    --${R}-color: var(--arc-color-icon-brand);
  }

  &[data-variant=info] {
    --${P}-color: var(--arc-color-text-info);
    --${R}-color: var(--arc-color-icon-info);
  }

  &[data-variant=success] {
    --${P}-color: var(--arc-color-text-success);
    --${R}-color: var(--arc-color-icon-success);
  }

  &[data-variant=warning] {
    --${P}-color: var(--arc-color-text-warning);
    --${R}-color: var(--arc-color-icon-warning);
  }

  &[data-variant=critical] {
    --${P}-color: var(--arc-color-text-critical);
    --${R}-color: var(--arc-color-icon-critical);
  }

`,bo=p`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    --${ur}-font-size: 1em;
    --${Br}-font-size: 0.75em;
    --${R}-size: 1em;
    --${hr}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    --${ur}-font-size: var(--arc-font-size-14);
    --${Br}-font-size: var(--arc-font-size-12);
    --${hr}: var(--arc-space-0-5);
  }

  &[data-size=sm] {
    --${ur}-font-size: var(--arc-font-size-12);
    --${Br}-font-size: var(--arc-font-size-12);
    --${hr}: var(--arc-space-0-5);
  }

  /* Gap Sizes */

  &[data-gap=lg] { --${hr}: max(var(--arc-space-1-5), 0.75em); } /* 12px @ 100% */
  &[data-gap=md] { --${hr}: max(var(--arc-space-1), 0.5em); }    /* 8px @ 100% */
  &[data-gap=sm] { --${hr}: max(var(--arc-space-0-5), 0.25em); } /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { --${R}-size: max(var(--arc-font-size-24), 1.5em); }
  &[icon-size=lg] { --${R}-size: max(var(--arc-font-size-20), 1.25em); }
  &[icon-size=md] { --${R}-size: max(var(--arc-font-size-16), 1em); }
  &[icon-size=sm] { --${R}-size: max(var(--arc-font-size-14), 0.75em); }
  &[icon-size=xs] { --${R}-size: max(var(--arc-font-size-12), 0.625em); }
`,xo=p`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  --${Br}-color: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(--${R}-color));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(--${R}-size));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    --${P}-overflow: unset;
    --${P}-text-overflow: unset;
    --${P}-white-space: unset;

    --${R}-vertical-align: calc((var(--${R}-size) - var(--${ur}-font-size)) / -2);

    &:has(svg) { --${R}-vertical-align: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    --${P}-overflow: visible;
    --${P}-text-overflow: unset;
    --${P}-white-space: normal;

    &[data-overflow=truncate] {
      --${P}-overflow: hidden;
      --${P}-text-overflow: ellipsis;
      --${P}-white-space: nowrap;
    }
  }

`,$o=p`
@layer arc-components {

  [arc-icon-text] {
    ${fo}
    ${bo}
    ${xo}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(--${ur}-font-size));
    color: var(--arc-icon-text-text-color, var(--${P}-color));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(--${hr}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(--${P}-overflow));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=icon] { line-height: 1lh; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: block;
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(--${Br}-font-size));
        color: var(--arc-icon-text-subtext-color, var(--${Br}-color));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(--${P}-overflow));
        text-overflow: var(--arc-icon-text-text-overflow, var(--${P}-text-overflow));
        white-space: var(--arc-icon-text-white-space, var(--${P}-white-space));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(--${R}-vertical-align));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(--${hr})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(--${hr})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        --${R}-vertical-align: text-bottom;
      }
    }
  }
}

`,yo=k(q,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),cr=({children:r,layout:e="gutter",size:a="inherit",variant:o="inherit",tag:i="span",icon:c,text:s,subtext:v,overflow:l,iconSize:d,gapSize:g,isFlipped:m=!1,isStrong:f=!1,...y})=>{const A=r||s,C=!!c,T=!!A,O=e==="gutter",$=e==="inline",w=C&&(!m||O),E=C&&T&&m&&$,N=!!d&&d!=="inherit",Y=N&&Me.includes(d)?d:void 0,X=N&&!Me.includes(d)?d:void 0,or=g!=="inherit"?g:void 0,rr=l!=="inherit"?l:void 0;return(0,n.jsxs)(i,{...y,"arc-icon-text":"","data-variant":o,"data-layout":e,"data-overflow":rr,"data-size":a,"data-gap":or,"icon-size":Y,"is-flipped":m?"":void 0,"is-strong":f?"":void 0,children:[w&&(0,n.jsx)(I,{"data-element":"icon",icon:c,size:X}),T&&(0,n.jsxs)("span",{"data-element":"text",children:[A,!!v&&(O?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:v})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:v})]}))]}),E&&(0,n.jsx)(I,{"data-element":"icon",icon:c,size:X})]})};S("ArcIconText",$o);const gr={...tr,popover:"manual",anchorAt:"top-center",boundary:"flip",variant:"common",tailSize:8,offset:4,isInverse:!0,isStrong:!0};let Ce=!1;const wo=100,Ao=100;let Je=!1;const Se=new WeakMap,_e=new WeakMap,Hr=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},it=(r,e,a,o)=>{const i=window.setTimeout(()=>{o(),r.delete(e)},a);r.set(e,i)},ct="[aria-describedby]",ko=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,zo=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Qe=r=>{if(typeof document>"u")return null;const e=document.querySelector(`[aria-describedby="${r}"]`);return e?e.closest("label,[arc-label]")??e:null},Co=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(ct);if(e){const o=e.getAttribute("aria-describedby")??"";if(o)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:o}}let a=r;for(;a;){if(zo(a)){const o=a.querySelector?.(ct),i=o?.getAttribute?.("aria-describedby")??"";if(o&&i)return{anchor:a,tooltipId:i}}a=a.parentElement}return null},So=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"]')??null;return e instanceof HTMLElement?e:null},_o=r=>r?.id?Qe(r.id):null,Eo=r=>{const e=So(r),a=Co(r);if(!a&&e){const s=_o(e);return!s||!e.id?null:{anchor:s,tooltip:e}}if(!a)return null;const{anchor:o,tooltipId:i}=a;if(!i)return null;const c=e??document.getElementById(i);return!(c instanceof HTMLElement)||c.getAttribute("role")!=="tooltip"||!ko(c)?null:{anchor:o,tooltip:c}},jo=(r,e,a)=>{const o=a instanceof Element?a:null;if(!o)return!1;const i=r===o||r.contains(o),c=e===o||e.contains(o);return i||c},To=(r,e)=>{if(Hr(_e,r),!e){Hr(Se,r),r.showPopover?.();return}Hr(Se,r),it(Se,r,wo,()=>{r.showPopover?.()})},Io=(r,e)=>{if(Hr(Se,r),!e){Hr(_e,r),r.hidePopover?.();return}Hr(_e,r),it(_e,r,Ao,()=>{r.hidePopover?.()})},ee=(r,e,a,o)=>{const i=Eo(e);if(!i)return;const{anchor:c,tooltip:s}=i;if(r){To(s,o);return}jo(c,s,a)||Io(s,o)};let ae=null,te=null,oe=null,ne=null,ie=null,ce=null,fr=null;const st=()=>{Ce||typeof document>"u"||(ce=()=>{Je=!0},fr=()=>{Je=!1},ae=r=>ee(!0,r.target,void 0,!0),te=r=>ee(!0,r.target,void 0,!1),oe=r=>ee(!1,r.target,r.relatedTarget,!0),ne=r=>{Je||ee(!1,r.target,r.relatedTarget,!1)},ie=r=>{r.key==="Escape"&&ee(!1,r.target,void 0,!1)},document.addEventListener("pointerdown",ce),document.addEventListener("pointerup",fr),document.addEventListener("pointercancel",fr),document.addEventListener("pointerover",ae),document.addEventListener("focusin",te),document.addEventListener("pointerout",oe),document.addEventListener("focusout",ne),document.addEventListener("keydown",ie),Ce=!0)},Po=()=>{Ce&&(typeof document>"u"||(ce&&document.removeEventListener("pointerdown",ce),fr&&document.removeEventListener("pointerup",fr),fr&&document.removeEventListener("pointercancel",fr),ae&&document.removeEventListener("pointerover",ae),te&&document.removeEventListener("focusin",te),oe&&document.removeEventListener("pointerout",oe),ne&&document.removeEventListener("focusout",ne),ie&&document.removeEventListener("keydown",ie),ae=null,te=null,oe=null,ne=null,ie=null,ce=null,fr=null,Ce=!1))},Lo=p`
@layer arc-components {
  [arc-tooltip] {
    --arc-tooltip-max-width: calc(16rem - var(--arc-space-0-5));
    --arc-tooltip-subtext-spacing: var(--arc-space-0-75);

    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-max-width: var(--arc-tooltip-max-width);
    --arc-popover-border: 0;
    --arc-popover-footer-flex-direction: row;
    --arc-popover-font-size: var(--arc-font-size-body-sm);
    --arc-popover-padding: var(--arc-space-1-25);

    [arc-tooltip-content] {
      --arc-icon-text-subtext-font-size: var(--arc-font-size-body-sm);
      --arc-icon-text-hyphens: none;
      --arc-icon-text-line-height: var(--arc-line-height-tight);
      --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing);

      +[arc-tooltip-slot-content] {
        margin-top: var(--arc-space-1);
      }
    }
  }
}
`,lt=(0,b.forwardRef)(({id:r,children:e,slot:a,anchorAt:o=gr.anchorAt,boundary:i=gr.boundary,tailSize:c=gr.tailSize,offset:s=gr.offset,isStrong:v=gr.isStrong,text:l,subtext:d,icon:g,isFlipped:m,...f},y)=>{try{st()}catch{}const A=(0,b.useMemo)(()=>ze(r,"arc-tooltip"),[r]),C=E=>typeof E=="object"&&E!==null&&"tabIndex"in E,T=e,O=!!f.alternateAnchor;let $=null;(0,b.isValidElement)(T)?$=(0,b.cloneElement)(T,{"aria-describedby":A,...C(T.props)&&T.props.tabIndex!=null?{}:{tabIndex:0}}):!O&&typeof console<"u"&&console.warn("ArcTooltip expects a single ReactElement child as the trigger.");const w=(0,b.useMemo)(()=>()=>Qe(A),[A]);return(0,n.jsxs)(n.Fragment,{children:[$,(0,n.jsxs)(de,{...f,"arc-tooltip":"",role:"tooltip",id:A,ref:y,popover:gr.popover,anchorAt:o,boundary:i,variant:gr.variant,isInverse:!0,hasTail:!0,tailSize:c,offset:s,hidePopoverButton:!0,alternateAnchor:f.alternateAnchor??w,children:[l&&(0,n.jsx)(cr,{"arc-tooltip-content":"",text:l,subtext:d,icon:g,isFlipped:m,isStrong:v,size:"inherit",variant:"inherit"}),a&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});S("ArcTooltip",Lo);const Ro=k(Pe,["circle","square","narrow"]),Mo=k(er,["xxl","xl","lg","md","sm"]),Oo=k(sr,["hug","fill","icon"]),Bo=k(q,["common","ai","critical"]),dt=k(q,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Ho=k(ia,["primary","secondary","tertiary","plain"]),No=[...be],t=p`arc•button`,M=p`arc•modifier`,_=p`${t}•computed`,Vo=p`
  &[data-size=xxl] {
    --${M}: 16; /* unitless, desired font size at 100% */
    --${t}-icon-size: 20;
    --${t}-spinner-size: 32;
    --${t}-height: 56;
    --${t}-gap: 10;
    --${t}-padding-inline: 32;
  }

  &[data-size=xl] {
    --${M}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 16;
    --${t}-spinner-size: 16;
    --${t}-height: 48;
    --${t}-gap: 8;
    --${t}-padding-inline: 32;
  }

  &[data-size=lg] { /** @default */
    --${M}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 16;
    --${t}-spinner-size: 16;
    --${t}-height: 40;
    --${t}-gap: 8;
    --${t}-padding-inline: 20;
  }

  &[data-size=md] {
    --${M}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 14;
    --${t}-spinner-size: 16;
    --${t}-height: 32;
    --${t}-gap: 8;
    --${t}-padding-inline: 16;
  }

  &[data-size=sm] {
    --${M}: 12; /* unitless, desired font size at 100% */
    --${t}-icon-size: 12;
    --${t}-spinner-size: 14;
    --${t}-height: 24;
    --${t}-gap: 4;
    --${t}-padding-inline: 12;
  }

`,Do=p`
  &[data-layout=hug] {
    --${t}-width: auto;
    --${t}-content-width: fit-content;
  }

  &[data-layout=fill] {
    --${t}-display: flex;
    --${t}-width: 100%;
    --${t}-content-width: 0;
  }

  &[data-layout=icon] {
    --${t}-aspect-ratio: 1 / 1;
    --${t}-flex: none;
    --${t}-min-width: min-content;
    --${t}-max-width: none;
    --${t}-padding-inline: 0;

    &[data-shape=narrow] {
      --${t}-aspect-ratio: auto;
      --${t}-padding-inline: 2;
    }
  }

`,Fo=p`
  &[data-variant=common],&[data-variant=primary] { /** @default */
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-color-mono-black);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-neutral-800);
    --${t}-fill-active: var(--arc-color-neutral-600);
    --${t}-fill-processing: var(--arc-color-neutral-800);
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=secondary] { /** @default - when icon-only */
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: var(--arc-color-mono-white);
    --${t}-edge: var(--arc-color-border-full);

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-neutral-100);
    --${t}-fill-active: var(--arc-color-neutral-200);
    --${t}-fill-processing: var(--arc-color-alpha-white-30);
    --${t}-fill-disabled: var(--arc-color-alpha-white-60);

    --${t}-edge-active: var(--arc-color-border-stark);
    --${t}-edge-processing: var(--arc-color-border-stark);
    --${t}-edge-disabled: var(--arc-color-border-standard);

    &[data-layout=icon] {
      --${t}-edge: var(--arc-color-border-standard);
      --${t}-edge-hover: var(--arc-color-border-stark);
      --${t}-edge-focus: var(--arc-color-border-standard);
    }
  }

  &[data-variant=tertiary] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-alpha-black-05);
    --${t}-fill-focus: var(--arc-color-alpha-white-05);
    --${t}-fill-active: var(--arc-color-alpha-black-10);
    --${t}-fill-processing: var(--arc-color-alpha-black-03);
  }

  &[data-variant=plain] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-hover: var(--arc-color-neutral-700);
    --${t}-text-active: var(--arc-color-alpha-black-40);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-neutral-300);

    --${t}-fill-hover: transparent;
    --${t}-fill-focus: var(--arc-color-alpha-white-05);
    --${t}-fill-active: transparent;
    --${t}-fill-processing: transparent;
  }

`,Uo=p`
  &[data-variant=primary-inverse] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: var(--arc-color-mono-white);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-black-80);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-80);
    --${t}-fill-active: var(--arc-color-alpha-white-60);
    --${t}-fill-processing: var(--arc-color-alpha-white-30);
    --${t}-fill-disabled: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-fill-hover: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant=secondary-inverse] {
    --${t}-text: var(--arc-color-alpha-white-95);
    --${t}-fill: transparent;
    --${t}-edge: var(--arc-color-alpha-white-60);

    --${t}-text-active: var(--arc-color-alpha-white-95);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-20);
    --${t}-fill-focus: var(--arc-color-alpha-black-05);
    --${t}-fill-active: var(--arc-color-alpha-white-40);
    --${t}-fill-processing: transparent;

    --${t}-edge-hover: var(--arc-color-alpha-white-80);
    --${t}-edge-focus: var(--arc-color-alpha-white-60);
    --${t}-edge-active: var(--arc-color-alpha-white-50);
    --${t}-edge-processing: var(--arc-color-alpha-white-60);
    --${t}-edge-disabled: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-text: var(--arc-color-alpha-white-80);

      --${t}-text-hover: var(--arc-color-alpha-white-100);
      --${t}-text-focus: var(--arc-color-alpha-white-100);
      --${t}-text-active: var(--arc-color-alpha-white-80);

      --${t}-fill-hover: var(--arc-color-alpha-white-30);
      --${t}-fill-focus: var(--arc-color-alpha-black-05);
      --${t}-fill-active: var(--arc-color-alpha-white-30);

      --${t}-edge-focus: var(--arc-color-alpha-white-60);
      --${t}-edge-active: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant=tertiary-inverse] {
    --${t}-text: var(--arc-color-alpha-white-95);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-white-80);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-20);
    --${t}-fill-active: var(--arc-color-alpha-white-40);
    --${t}-fill-processing: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-text: var(--arc-color-alpha-white-80);

      --${t}-text-hover: var(--arc-color-alpha-white-100);
      --${t}-text-focus: var(--arc-color-alpha-white-100);
      --${t}-text-active: var(--arc-color-alpha-white-80);

      --${t}-fill-hover: var(--arc-color-alpha-white-30);
      --${t}-fill-focus: var(--arc-color-alpha-black-05);
      --${t}-fill-active: var(--arc-color-alpha-white-30);
    }
  }

  &[data-variant=plain-inverse] {
    --${t}-text: var(--arc-color-alpha-white-95);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-hover: var(--arc-color-alpha-white-60);
    --${t}-text-active: var(--arc-color-alpha-white-40);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-30);

    --${t}-fill-hover: transparent;
    --${t}-fill-focus: var(--arc-color-alpha-black-05);
    --${t}-fill-active: transparent;
    --${t}-fill-processing: transparent;

    &[data-layout=icon] {
      --${t}-text: var(--arc-color-alpha-white-80);

      --${t}-text-hover: var(--arc-color-alpha-white-95);
      --${t}-text-focus: var(--arc-color-alpha-white-95);
      --${t}-text-active: var(--arc-color-alpha-white-60);

      --${t}-fill-hover: transparent;
      --${t}-fill-focus: transparent;
      --${t}-fill-active: transparent;
    }
  }

`,Yo=p`
  &[data-variant=ai-primary] {
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    --${t}-text-active: var(--arc-color-alpha-white-80);
    --${t}-text-processing: var(--arc-color-alpha-white-70);

    --${t}-fill-hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    --${t}-fill-active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    --${t}-fill-processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=ai-secondary] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);

    --${t}-fill-hover: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-300) border-box;
    --${t}-fill-active: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-processing: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=ai-] {
    --${t}-edge: transparent;

    --${t}-text-disabled: var(--arc-color-alpha-black-30);
    --${t}-edge-disabled: var(--arc-color-border-standard);
  }

`,Zo=p`
  &[data-variant=critical-primary] {
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-color-critical-dark);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-critical-medium);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-critical-heavy);
    --${t}-fill-active: var(--arc-color-critical-heavy);
    --${t}-fill-processing: var(--arc-color-critical-heavy);
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=critical-secondary] {
    --${t}-text: var(--arc-color-critical-dark);
    --${t}-fill: transparent;
    --${t}-edge: var(--arc-color-critical-dark);

    --${t}-text-active: var(--arc-color-red-300);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-critical-light);
    --${t}-fill-focus: var(--arc-color-alpha-white-100);
    --${t}-fill-active: var(--arc-color-red-100);
    --${t}-fill-disabled: var(--arc-color-alpha-white-30);

    --${t}-edge-active: var(--arc-color-critical-medium);
    --${t}-edge-processing: var(--arc-color-critical-medium);
    --${t}-edge-disabled: var(--arc-color-border-standard);
  }

  &[data-variant=critical-plain] {
    --${t}-text: var(--arc-color-critical-dark);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-hover: var(--arc-color-red-500);
    --${t}-text-active: var(--arc-color-red-300);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-neutral-300);

    --${t}-fill-hover: transparent;
    --${t}-fill-focus: var(--arc-color-alpha-white-03);
    --${t}-fill-active: transparent;
    --${t}-fill-processing: transparent;
  }

`,Xo=p`
  --${t}-color: var(--${t}-text);
  --${t}-background: var(--${t}-fill);
  --${t}-border-color: var(--${t}-edge);
  --${t}-cursor: var(--arc-button-cursor, pointer);
  --${t}-font-weight: var(--arc-font-weight-600);
  --${t}-transition: 0.2s ease-out;

  /* MODIFIERS */

  --${M}-base: var(--${M}) * var(--${M}-unit, 1px);
  --${M}-em: var(--${M}) * 1em;

  /* COMPUTED */

  --${_}-font-size: calc(var(--${M}-base));
  --${_}-icon-size: calc(var(--${t}-icon-size) / var(--${M}-em));
  --${_}-border-size: max(var(--arc-border-width-sm), calc(1 / var(--${M}-em)));
  --${_}-outline-size: max(var(--arc-border-width-md), calc(2 / var(--${M}-em)));
  --${_}-border-radius-md: max(var(--arc-border-radius-md), calc(4 / var(--${M}-em)));
  --${_}-height: calc(var(--${t}-height) / var(--${M}-em));
  --${_}-padding: 0 calc(var(--${t}-padding-inline) / var(--${M}-em));
  --${_}-spinner-size: calc(var(--${t}-spinner-size) / var(--${M}-em));
  --${_}-gap: max(var(--arc-space-0-5), calc(var(--${t}-gap) / var(--${M}-em)));

  --${_}-border: var(--${_}-border-size) solid var(--${t}-border-color, transparent);
  --${_}-outline: var(--${_}-outline-size) solid var(--arc-button-outline-color, var(--arc-color-border-focus));

  /* CONTEXT OVERRIDES */

  &[data-variant^=ai-] {
    --${_}-border-size: max(var(--arc-border-width-md), calc(2 / var(--${M}-em)));
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    --${_}-border-radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    --${_}-border-radius: var(--${_}-border-radius-md);
  }

  /* Inter-Component Communication */

  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(--${_}-icon-size); /** ArcIcon */

`,qo=p`
  &:is([is-processing], :has(input)) {
    --${t}-position: relative;
  }

  &:is([is-disabled]) {
    --${t}-color: var(--${t}-text-disabled, var(--${t}-text));
    --${t}-background: var(--${t}-fill-disabled, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-disabled, var(--${t}-edge));
    --${t}-opacity: var(--arc-button-disabled-opacity, unset);
    --${t}-cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not([is-disabled], [is-processing]) {
    &:where(:hover, [data-simulate=hover]) {
      --${t}-color: var(--${t}-text-hover, var(--${t}-text));
      --${t}-background: var(--${t}-fill-hover, var(--${t}-fill));
      --${t}-border-color: var(--${t}-edge-hover, var(--${t}-edge));
    }

    &:is(:active, [is-active], [data-simulate=active]) {
      --${t}-color: var(--${t}-text-active, var(--${t}-text));
      --${t}-background: var(--${t}-fill-active, var(--${t}-fill));
      --${t}-border-color: var(--${t}-edge-active, var(--${t}-edge));
    }
  }

  &[is-processing] {
    --${t}-content-visibility: hidden;
    --${t}-content-opacity: 0;
    --${t}-opacity: var(--arc-button-processing-opacity, unset);
    --${t}-cursor: var(--arc-button-processing-cursor, default);

    --${t}-color: var(--${t}-text-processing, var(--${t}-text));
    --${t}-background: var(--${t}-fill-processing, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-processing, var(--${t}-edge));

    /* spinner svg style controls */
    --${t}-spinner-opacity: var(--arc-alpha-30);
    --${t}-spinner-circle-color: var(--arc-button-color, var(--${t}-color, currentcolor));
    --${t}-spinner-progress-color: var(--arc-button-progress-color, var(--${t}-color, currentcolor));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-variant*=plain],
      [data-variant^=ai-],
      [data-variant$=-inverse]
    ) {
      --${t}-spinner-opacity: var(--arc-alpha-100);
      --${t}-spinner-progress-color: var(--arc-color-brand-root);
    }
  }

  &:is(:where(:focus, :focus-within):focus-visible, [data-simulate=focus]) {
    --${t}-color: var(--${t}-text-focus, var(--${t}-text));
    --${t}-background: var(--${t}-fill-focus, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-focus, var(--${t}-edge));
    --${t}-outline-color: var(--arc-color-border-focus);


    &[data-variant$=-inverse] {
      --${t}-outline-color: var(--arc-color-border-focus-inverse);
    }

    --${t}-outline: var(--arc-button-outline, var(--${_}-outline));
    --${t}-outline-offset: var(--arc-button-outline-offset, var(--${_}-outline-size));

    * {
      outline: none;
    }
  }

`,Wo=p`
  :where([arc-button]) {
    ${Vo}
    ${Do}

    /* VARIANTS */
    ${Fo}
    ${Uo}
    ${Yo}
    ${Zo}

    /* CORE */
    ${Xo}
    ${qo}

    appearance: none;
    cursor: var(--arc-button-cursor, var(--${t}-cursor));
    position: var(--arc-button-position, var(--${t}-position, unset));
    transition: var(--arc-button-transition, var(--${t}-transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(--${t}-font-weight));
    font-size: var(--arc-button-font-size, var(--${_}-font-size, inherit));
    height: var(--arc-button-height, var(--${_}-height, auto));
    width: var(--arc-button-width, var(--${t}-width, auto));
    min-width: var(--arc-button-min-width, var(--${t}-min-width, unset));
    max-width: var(--arc-button-max-width, var(--${t}-max-width, 100%));
    aspect-ratio: var(--arc-button-aspect-ratio, var(--${t}-aspect-ratio, unset));

    padding: var(--arc-button-padding, var(--${_}-padding));

    /* VARIANT THEME APPLIED */

    color: var(--arc-button-color, var(--${t}-color));
    background: var(--arc-button-background, var(--${t}-background));
    border: var(--arc-button-border, var(--${_}-border));
    border-radius: var(--arc-button-border-radius, var(--${_}-border-radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(--${t}-outline));
    outline-offset: var(--arc-button-outline-offset, var(--${t}-outline-offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS */

    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(--${_}-gap));

      opacity: var(--arc-button-content-opacity, unset);
      visibility: var(--arc-button-content-visibility, var(--${t}-content-visibility));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(--${t}-content-width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, hidden);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      transition: var(--arc-button-label-transition, var(--${t}-transition));
    }

    [arc-button-icon] {
      transition: var(--arc-button-icon-transition, var(--${t}-transition));
    }

    :is([arc-spinner], input) {
      position: absolute;
      inset: var(--arc-spinner-inset, 50% auto auto 50%);
      translate: var(--arc-spinner-translate, -50% -50%);
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    /* PROCESSING SPINNER */

    [arc-spinner] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(--arc-spinner-size, var(--${_}-spinner-size));
      aspect-ratio: 1 / 1;

      [arc-spinner-circle] {
        fill: none;
        stroke: var(--arc-button-spinner-circle-color, currentcolor);
        opacity: var(--arc-button-spinner-opacity, var(--${t}-spinner-opacity, var(--arc-alpha-40)));
      }

      [arc-spinner-progress] {
        fill: none;
        stroke: var(--arc-button-spinner-progress-color, var(--${t}-spinner-progress-color));
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  /* SPECIAL CASES */
  [arc-button=custom] {
    --${t}-font-weight: normal;
    --${t}-disabled-opacity: var(--arc-alpha-30);

    /* Default size matches [data-size=lg] */
    --${M}: 14; /* unitless, desired font size at 100% */
    --${M}-unit: 0.0625em; /* 1/16th of an em for the computed calcs */
    --${t}-icon-size: 16;
    --${t}-gap: 8;
    --${t}-padding-inline: 4; /* results in 24x24 for icon button @ 100% font size */
    --${t}-spinner-size: 16;
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(--${t}-display, inline-flex));
    align-items: center;
    justify-content: center;
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`,Ko=(0,n.jsxs)("svg",{viewBox:"0 0 100 100","arc-spinner":"",children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}),Cr=(0,b.forwardRef)(({children:r,...e},a)=>{const o=(0,b.useRef)(null),{iconEnd:i,iconStart:c,icon:s,text:v,isActive:l,isDisabled:d,isProcessing:g,tag:m,href:f,type:y,title:A,layout:C,shape:T,size:O="lg",variant:$="common",hierarchy:w="primary",isInverse:E=!1,_isCustom:N,...Y}=e,X=$&&dt.includes($),or=(()=>{if(X||!["common","critical","ai"].includes($))return $;const Zr=w||"primary";return $==="common"?E?`${Zr}-inverse`:Zr:`${$}-${Zr}`})(),rr=C==="icon",Ur=m??(f?"a":"button"),br=Ur==="button"?y||"button":void 0,Ie=g||d||e.disabled,he=c||s,Er=!rr&&(r||v),ta=!rr&&i,{tooltip:jr,...oa}=Y,ve=typeof jr=="string"?jr:void 0,Tr=e.tooltip??ve,xr=!!Tr,Ir=typeof Tr=="string"?{text:Tr}:Tr,$r=(0,b.useRef)(void 0);xr&&!$r.current&&($r.current=e.id?`${e.id}-tooltip`:ze(void 0,"arc-tooltip"));const K=$r.current,nr=Y["aria-describedby"],{popoverTarget:vr,popoverTargetAction:Pr,...Yr}=oa;let ge={popoverTarget:vr||void 0,popoverTargetAction:Pr||void 0};return b.version.startsWith("18")&&(ge={popovertarget:vr||void 0,popovertargetaction:Pr||void 0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Ur,{...Yr,...ge,ref:Zr=>{o.current=Zr,pa(a,Zr)},"arc-button":N?"custom":"",href:f||void 0,title:xr?void 0:A||void 0,type:br,"data-layout":C,"data-shape":N?void 0:T,"data-size":N?void 0:O,"data-variant":N?void 0:or,"is-active":l?"":void 0,"is-processing":g?"":void 0,"is-disabled":Ie?"":void 0,"aria-disabled":Ie||void 0,"aria-describedby":xr?nt([nr,K]):nr,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[!!he&&(0,n.jsx)(I,{"arc-button-icon":"",icon:he}),!!Er&&(0,n.jsx)("span",{"arc-button-label":"",children:Er}),!!ta&&(0,n.jsx)(I,{"arc-button-icon":"",icon:i})]}),g&&Ko]}),xr&&(0,n.jsx)(lt,{...Ir,id:K,alternateAnchor:Ir?.alternateAnchor??(()=>o.current)})]})});Cr.displayName="ArcButton",S("ArcButton",Wo);const se=(0,b.forwardRef)((r,e)=>(0,n.jsx)(Cr,{...r,ref:e,"arc-popover-button":""})),pt=({isInverse:r=!1,isOpen:e,...a})=>(0,n.jsx)(Cr,{...a,icon:"fa-regular fa-xmark fa-fw",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),Go=({children:r,showDismiss:e,dismissProps:a,tag:o="header",...i})=>(0,n.jsxs)(o,{...i,"arc-popover-header":"",children:[r,e&&(0,n.jsx)(pt,{...a})]}),Jo=({tag:r="article",...e})=>(0,n.jsx)(r,{...e,"arc-popover-body":""}),Qo=({showDivider:r,tag:e="footer",...a})=>(0,n.jsx)(e,{...a,"arc-popover-footer":"","has-divider":r?"":void 0}),rn=r=>(0,n.jsx)("span",{...r,"arc-popover-tail":""});se.displayName="ArcPopoverButton";const u=p`arc•popover`,j=p`${u}•space`,G=p`${u}•shift`,Nr=p`${u}•offset`,W=p`${u}•outline`,ut=p`${u}•header`,Ee=p`${u}•body`,le=p`${u}•footer`,h=p`${u}•tail`,en=p`
  --${u}-border-radius: var(--arc-popover-border-radius, var(--arc-border-radius-lg));
  --${u}-inner-border-radius: calc(var(--${u}-border-radius) - var(--${W}-size));

  /* mix ratio for tail's outline color gradient along popover's perimeter, e.g.: dropdown[variant=ai-outline] */
  --${u}-trail-mix: 50%;

  /* local spacing 16px base @ 100% */
  --${j}-1: max(1px, 0.0625em);
  --${j}-2: max(2px, 0.125em);
  --${j}-3: max(3px, 0.1875em);
  --${j}-4: max(4px, 0.25em);
  --${j}-6: max(6px, 0.375em);
  --${j}-8: max(8px, 0.5em);
  --${j}-10: max(10px, 0.625em);
  --${j}-12: max(12px, 0.75em);
  --${j}-16: max(16px, 1em);
  --${j}-20: max(20px, 1.25em);
  --${j}-24: max(24px, 1.5em);

  --${W}-size: var(--arc-popover-outline-size, var(--${j}-2));

  /* tail metrics */
  --${h}-base: max(var(--js-t, 10) * 1px, 0.625em);
  --${h}-size: (var(--${h}-base) + var(--${W}-size));

  /* 0.707 = sqrt(2)/2 = multiplier for half of rotated tail size (used in offset calcs) */
  --${h}-shift: (var(--${h}-base) * 0.707 * var(--js-i));

  /* offset */
  --${Nr}-x: calc(var(--js-cw) + var(--js-o) + var(--arc-popover-nudge, 0em));
  --${Nr}-y: calc(var(--js-ch) + var(--js-o) + var(--arc-popover-nudge, 0em));
  --${G}-x: calc(var(--js-cw) + var(--${h}-shift));
  --${G}-y: calc(var(--js-ch) + var(--${h}-shift));

  /* padding */
  --${u}-padding: var(--${j}-12);
  --${ut}-gap: var(--${j}-12);
  --${le}-gap: var(--${j}-12);

  &:has([arc-popover-body]) {
    --${u}-padding: 0;
    &:has([arc-popover-header]) { --${Ee}-padding-block-start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { --${Ee}-padding-block-end: 0; }
  }

  &:has([arc-popover-tail]) {
    --${h}-nudge: var(--${W}-size);
    --${h}-radius: var(--${W}-size);
    --${h}-clamp: clamp(
      var(--${h}-shift),
      var(--js-h) - (var(--${h}-shift) * 2),
      var(--js-cw) - (var(--${W}-size) * 2)
    );
  }
`,an=p`
  &:where([arc-popover*=top], [arc-popover*=bottom]) {
    --${u}-min-width: calc(var(--js-w) + ((var(--${h}-shift) - var(--${W}-size)) * 2));
    --${u}-min-height: auto;
  }

  &:where([arc-popover*=right], [arc-popover*=left]) {
    --${u}-min-width: auto;
    --${u}-min-height: auto;
  }

  &:where([arc-popover=center]) {
    --${u}-min-width: auto;
    --${u}-min-height: auto;
  }

  &:where([arc-popover*=top]) {
    --${u}-tr: var(--${h}-radius) 0;
    --${u}-ty: calc(-100% - var(--${Nr}-y));
    --${h}-ty: 50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 87.5%;
      --${u}-tx: calc(0% - var(--${G}-x));
      --${h}-inset: auto auto var(--${h}-nudge) calc(0% + var(--${h}-clamp));
      --${h}-tx: 50%;
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 75%;
      --${u}-tx: -50%;
      --${h}-inset: auto auto var(--${h}-nudge) 50%;
      --${h}-tx: -50%;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 62.5%;
      --${u}-tx: calc(-100% + var(--${G}-x));
      --${h}-inset: auto auto var(--${h}-nudge) calc(100% - var(--${h}-clamp));
      --${h}-tx: -150%;
    }
  }

  &:where([arc-popover*=right]) {
    --${u}-tr: 0 var(--${h}-radius);
    --${u}-tx: calc(0% + var(--${Nr}-x));
    --${h}-tx: -50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 62.5%;
      --${u}-ty: calc(0% - var(--${G}-y));
      --${h}-ty: calc(50% + var(--${G}-y));
      --${h}-inset: auto auto 100% var(--${h}-nudge);
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 75%;
      --${u}-ty: -50%;
      --${h}-ty: 50%;
      --${h}-inset: auto auto 50% var(--${h}-nudge);
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 87.5%;
      --${u}-ty: calc(-100% + var(--${G}-y));
      --${h}-ty: calc(50% - var(--${G}-y));
      --${h}-inset: auto auto 0% var(--${h}-nudge);
    }
  }

  &:where([arc-popover=center]) {
    --${u}-trail-mix: 50%;
    --${u}-tx: -50%;
    --${u}-ty: -50%;
    --${h}-size: 0em;
    --${h}-display: none;
    --${h}-display-duration: 0ms;
  }

  &:where([arc-popover*=bottom]) {
    --${u}-tr: var(--${h}-radius) 0;
    --${u}-ty: calc(0% + var(--${Nr}-y));
    --${h}-ty: -50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 37.5%;
      --${u}-tx: calc(0% - var(--${G}-x));
      --${h}-tx: 50%;
      --${h}-inset: var(--${h}-nudge) auto auto calc(0% + var(--${h}-clamp));
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 25%;
      --${u}-tx: -50%;
      --${h}-tx: -50%;
      --${h}-inset: var(--${h}-nudge) auto auto 50%;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 12.5%;
      --${u}-tx: calc(-100% + var(--${G}-x));
      --${h}-tx: -150%;
      --${h}-inset: var(--${h}-nudge) auto auto calc(100% - var(--${h}-clamp));
    }
  }

  &:where([arc-popover*=left]) {
    --${u}-tr: 0 var(--${h}-radius);
    --${u}-tx: calc(-100% - var(--${Nr}-x));
    --${h}-tx: 50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 12.5%;
      --${u}-ty: calc(0% - var(--${G}-y));
      --${h}-ty: calc(50% + var(--${G}-y));
      --${h}-inset: auto var(--${h}-nudge) 100% auto;
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 25%;
      --${u}-ty: -50%;
      --${h}-ty: 50%;
      --${h}-inset: auto var(--${h}-nudge) 50% auto;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 37.5%;
      --${u}-ty: calc(-100% + var(--${G}-y));
      --${h}-ty: calc(50% - var(--${G}-y));
      --${h}-inset: auto var(--${h}-nudge) 0% auto;
    }
  }

`,tn=p`
  /* default variant: common */
  &[variant] {
    --${u}-color: var(--arc-color-text-primary);
    --${u}-background: var(--arc-color-background-primary);
    --${le}-divider-color: var(--arc-color-border-standard);
    --${W}-color: var(--${u}-background);
    --${h}-background: var(--${W}-color);
    --${h}-outline-color: var(--${W}-color);
    --${h}-border: solid var(--${W}-size) var(--${h}-outline-color);
    --${u}-shadow: var(--arc-shadow-light-lg);
  }

  &[variant=common][is-inverse] {
    --${u}-color: var(--arc-color-text-inverse);
    --${u}-background: var(--arc-color-background-inverse);
    --${u}-shadow: var(--arc-shadow-dark-lg);
    --${le}-divider-color: var(--arc-color-alpha-white-20);
  }

  &[variant=brand] {
    --${u}-background: var(--arc-color-brand-light);
    --${h}-background: var(--arc-color-brand-light);
    --${W}-color: var(--arc-color-border-brand);
  }

  &[variant=ai] {
    --${u}-background: var(--arc-color-ai-blue-050) var(--arc-gradient-ai-050);
    --${W}-color: var(--arc-gradient-ai-200);
    --${h}-background: color-mix(in srgb,
      var(--arc-color-ai-purple-050) var(--${u}-trail-mix, 37.5%),
      var(--arc-color-ai-blue-050) clamp(0%, 100% - var(--${u}-trail-mix, 37.5%), 100%)
    );
    --${h}-outline-color: color-mix(in srgb,
      var(--arc-color-ai-purple-200) var(--${u}-trail-mix, 37.5%),
      var(--arc-color-ai-blue-200) clamp(0%, 100% - var(--${u}-trail-mix, 37.5%), 100%)
    );
  }
`,on=p`
  [arc-popover] {
    position: absolute;
    inset: var(--js-cy, 50%) auto auto var(--js-cx, 50%);
    translate: var(--${u}-tx) var(--${u}-ty) 0;
    will-change: translate, opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /*
    This font-size is not intended to be altered;
    it is locked in as a sort of reset for various popover calculations.
    The effective popover font size is set on '[arc-popover-content]'.
    */
    font-size: max(var(--arc-font-size-16), 1em);

    padding: var(--${W}-size);
    background: var(--arc-popover-outline-color, var(--${W}-color));
    border-radius: var(--${u}-border-radius);
    border: none;
    box-shadow: var(--arc-popover-shadow, var(--${u}-shadow));
    margin: 0;

    &::backdrop {
      background: var(--arc-popover-backdrop, transparent);
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-popover-dismiss-margin: 0;
      inset: var(--arc-popover-dismiss-inset, 0.5em 0.5em auto auto);
    }

    [arc-popover-content] {
      flex: var(--arc-popover-flex, 1);
      position: relative;
      display: var(--arc-popover-content-display, flex);
      flex-direction: var(--arc-popover-content-flex-direction, column);
      gap: var(--arc-popover-content-gap, 0);

      overflow: var(--arc-popover-overflow, auto);
      overscroll-behavior: var(--arc-popover-overscroll-behavior, contain);

      color: var(--arc-popover-color, var(--${u}-color));
      padding: var(--arc-popover-padding, var(--${u}-padding));
      background: var(--arc-popover-background, var(--${u}-background));
      border-radius: var(--${u}-inner-border-radius);
      border: var(--arc-popover-border, var(--${j}-2) solid transparent);

      width: var(--arc-popover-width, fit-content);
      height: var(--arc-popover-height, fit-content);
      min-width: var(--arc-popover-min-width, var(--${u}-min-width));
      min-height: var(--arc-popover-min-height, var(--${u}-min-height));
      max-width: var(--arc-popover-max-width, 100vw);
      max-height: var(--arc-popover-max-height, 65vh);
      resize: var(--arc-popover-resize, none);
      font-size: var(--arc-popover-font-size, max(12px, 0.75em));
    }

    [arc-popover-dismiss] {
      align-self: var(--arc-popover-dismiss-align-self, auto);
      display: var(--arc-popover-dismiss-display, inline-flex);
      align-items: var(--arc-popover-dismiss-align-items, center);
      justify-content: var(--arc-popover-dismiss-justify-content, center);
      margin:  var(--arc-popover-dismiss-margin, calc(-1 * var(--${j}-6)) 0);
    }

    [arc-popover-header] {
      flex: var(--arc-popover-header-flex, none);
      display: var(--arc-popover-header-display, flex);
      justify-content: var(--arc-popover-header-justify-content, space-between);
      align-items: var(--arc-popover-header-align-items, baseline);
      gap: var(--arc-popover-header-gap, var(--${ut}-gap));

      padding: var(--arc-popover-header-padding, var(--${j}-12));

      color: var(--arc-popover-header-color, inherit);
      background: var(--arc-popover-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(--${j}-12);
      }
    }

    [arc-popover-body] {
      flex: var(--arc-popover-body-flex, 1);
      display: var(--arc-popover-body-display, block);
      flex-direction: var(--arc-popover-body-flex-direction, unset);

      padding: var(--arc-popover-body-padding,
        var(--${Ee}-padding-block-start, var(--${j}-12))
        var(--${j}-12)
        var(--${Ee}-padding-block-end, var(--${j}-12))
        var(--${j}-12)
      );
    }

    [arc-popover-footer] {
      flex: var(--arc-popover-footer-flex, none);
      display: var(--arc-popover-footer-display, flex);
      flex-direction: var(--arc-popover-footer-flex-direction, row-reverse);
      justify-content: var(--arc-popover-footer-justify-content, space-between);
      align-items: var(--arc-popover-footer-align-items, center);
      gap: var(--arc-popover-footer-gap, var(--${le}-gap));

      padding: var(--arc-popover-footer-padding, var(--${j}-12));

      background: var(--arc-popover-footer-background, none);
      color: var(--arc-popover-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(--arc-popover-footer-border-top, var(--${j}-1) solid var(--${le}-divider-color));
      }
    }

    [arc-popover-tail] {
      position: absolute;
      display: var(--${h}-display, block);
      width: calc(var(--${h}-size));
      height: calc(var(--${h}-size));
      inset: var(--${h}-inset);
      translate: var(--${h}-tx) var(--${h}-ty);
      rotate: 45deg;

      background: var(--${h}-background);
      border: var(--${h}-border, none);
      border-radius: var(--${u}-tr);
    }
  }

`,je={SETUP:en,POSITION:an,VARIANTS:tn,ELEMENTS:on},nn=p`
@layer arc-components {
  [arc-popover] {
    ${je.SETUP}
    ${je.POSITION}
    ${je.VARIANTS}
  }

  ${je.ELEMENTS}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-popover] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }

  /* POPOVER State -------------------------------------------------• */

  [arc-popover] {
    opacity: 0;

    &::backdrop {
      opacity: 0;
    }

    &:popover-open {
      opacity: 1;
    }

    &:popover-open::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-popover]:popover-open {
      opacity: 0;
    }

    [arc-popover]:popover-open::backdrop {
      opacity: 0;
    }
  }
}

`,cn=(r,e)=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e??"toggle"]()},ht=(0,b.forwardRef)(({children:r,popover:e=tr.popover,alternateAnchor:a,anchorProps:o,anchorAt:i,boundary:c,variant:s=tr.variant,isInverse:v,hasTail:l,tailSize:d=tr.tailSize,offset:g=tr.offset,hidePopoverButton:m,headerSlot:f,showDismiss:y,dismissProps:A,footerSlot:C,showFooterDivider:T,tag:O="div",contentTag:$="div",onToggle:w,...E},N)=>{const Y=(0,b.useRef)(null),X=(0,b.useRef)(null);(0,b.useImperativeHandle)(N,()=>X.current);const[or,rr]=(0,b.useState)(!1),[Ur,br]=(0,b.useState)(i||tr.anchorAt),[Ie,he]=(0,b.useState)({}),[Er,ta]=(0,b.useState)(0),[jr,oa]=(0,b.useState)(l?g??0:0),ve=(0,b.useMemo)(()=>v&&[...Ke].includes(s),[s,v]),me=(0,b.useMemo)(()=>({popoverTarget:E.id,"aria-haspopup":!0,"aria-controls":E.id,"aria-expanded":or}),[E.id,or]),Tr=(0,b.useMemo)(()=>({isInverse:ve,isOpen:or,"aria-label":"Dismiss",...me,...A}),[A,ve,or,me]),xr=(0,b.useMemo)(()=>({ref:Y,...me,...o}),[Y,o,me]),Ir=(0,b.useCallback)(()=>typeof a=="function"?a(xr):typeof a=="string"?document.getElementById(a):Y.current,[a,xr]),$r=(0,b.useCallback)(({...K})=>{br(K.anchorAt),he(K.vars)},[br,he]);return(0,b.useEffect)(()=>{const K=l?d??0:0,nr=Number(g??0)+K*(Math.sqrt(2)/2);ta(K),oa(nr)},[l,d,g]),(0,b.useEffect)(()=>{const K=X?.current,nr=Ir();if(!nr)return;let vr=null,Pr=null,Yr=null;const ge=()=>{vr=nr?.getBoundingClientRect()??{},Yr&&ha({a:vr,b:Pr})?(Pr=vr,$r(Ge({anchorElement:nr,popoverElement:K,anchorAt:i,boundary:c,offset:jr,tailSize:Er}))):Yr=null,Yr=requestAnimationFrame(ge)};Yr=requestAnimationFrame(ge)},[Ir,or,i,c,jr,Er,$r]),(0,b.useEffect)(()=>{const K=X.current;if(!K)return;const nr=vr=>{const{newState:Pr}=vr;rr(Pr==="open"),$r(Ge({anchorElement:Ir(),popoverElement:K,anchorAt:i,boundary:c,offset:jr,tailSize:Er})),w?.(vr)};return K.addEventListener("toggle",nr),()=>{K.removeEventListener("toggle",nr)}},[X,w,Ir,i,c,jr,Er,$r]),(0,n.jsxs)(n.Fragment,{children:[!(a&&m)&&(0,n.jsx)(se,{...xr}),(0,n.jsxs)(O,{...E,role:E.role??"dialog","arc-popover":Ur,ref:X,popover:e,boundary:c,variant:s,"is-inverse":ve?"":void 0,"has-tail":l?"":void 0,style:{...E.style,...Ie},children:[l&&(0,n.jsx)(rn,{}),(0,n.jsxs)($,{"arc-popover-content":"",children:[!!f&&(0,n.jsx)(Go,{showDismiss:y,dismissProps:Tr,children:f}),f||C?(0,n.jsx)(Jo,{children:r}):r,!!C&&(0,n.jsx)(Qo,{showDivider:T,children:C})]}),y&&!f&&(0,n.jsx)(pt,{...Tr})]})]})});ht.displayName="ArcPopover";const ra=ht;ra.handlePopover=cn,ra.Button=se;const de=ra;S("ArcPopover",nn);const sn=p`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;
    --arc-popover-outline-color: var(--arc-color-alpha-black-80);
    --arc-popover-background: var(--arc-color-alpha-black-10);
    --arc-popover-color: var(--arc-color-text-inverse);

    backdrop-filter: blur(0.375em);

    /* For Neutral/Anonymous avatars -------------------------------• */

    --${x}-neutral-color: var(--arc-color-alpha-white-70);
    --${x}-neutral-background: var(--arc-color-alpha-white-20);

    [data-element=list] {
      margin: 0;
      padding: var(--arc-space-0-5) var(--arc-space-0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(--arc-space-0-75);
      padding: var(--arc-space-0-5) var(--arc-space-1);
    }

    ${Xe}
    ${Oa}

  }

}
`,ln=r=>(0,n.jsx)("ul",{...r,"data-element":"list"}),dn=r=>(0,n.jsx)("li",{...r,"data-element":"list-item"}),pn=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:o,...i})=>(0,n.jsx)(qe,{title:`+${r}`,children:(0,n.jsx)(de.Button,{...i,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),un=({children:r,id:e,size:a="sm",overflowCount:o=0,shouldShowOverflow:i=!1,anchorAt:c="bottom-end",boundary:s="flip",...v})=>{const l=Math.min(o,999),d=(0,b.useMemo)(()=>ze(e,"arc-avatar-overflow"),[e]),g=(0,b.useMemo)(()=>`${d}-anchor`,[d]),m=(0,b.useMemo)(()=>b.Children.toArray(r),[r]);return(0,n.jsxs)(n.Fragment,{children:[l>0&&(0,n.jsx)(pn,{count:l,anchorId:g,overflowId:d,shouldShowOverflow:i}),i&&l>0&&(0,n.jsx)(de,{...v,"arc-avatar-overflow":"",id:d,anchorAt:c,boundary:s,alternateAnchor:g,hidePopoverButton:!0,variant:"common",isInverse:!0,"data-size":a,children:(0,n.jsx)(ln,{children:m.map((f,y)=>(0,n.jsx)(dn,{children:f},y))})})]})};S("ArcAvatarOverflow",sn);const hn=p`
@layer arc-components {

[arc-badge-wrapper] {

  /* VARIANTS ------------------------------------------------------• */

  &:has(>[data-variant=brand-black]) {
    --arc-internal-badge-background-high: var(--arc-color-mono-black);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-primary);
  }

  /** @default */
  &:has(>[data-variant=brand-blue]) {
    --arc-internal-badge-background-high: var(--arc-color-blue-500);
    --arc-internal-badge-background-low: var(--arc-color-blue-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-blue-700);
  }

  &:has(>[data-variant=neutral]) {
    --arc-internal-badge-background-high: var(--arc-color-neutral-600);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-neutral-800);
  }

  &:has(>[data-variant=info]) {
    --arc-internal-badge-background-high: var(--arc-color-info-dark);
    --arc-internal-badge-background-low: var(--arc-color-purple-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-info-heavy);
  }

  &:has(>[data-variant=success]) {
    --arc-internal-badge-background-high: var(--arc-color-success-dark);
    --arc-internal-badge-background-low: var(--arc-color-green-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-success-heavy);
  }

  &:has(>[data-variant=warning]) {
    --arc-internal-badge-background-high: var(--arc-color-warning-root);
    --arc-internal-badge-background-low: var(--arc-color-yellow-100);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-warning-heavy);
  }

  &:has(>[data-variant=critical]) {
    --arc-internal-badge-background-high: var(--arc-color-critical-root);
    --arc-internal-badge-background-low: var(--arc-color-red-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-critical-heavy);
  }

  &:has(>[data-variant=ai]) {
    --arc-internal-badge-background-high: var(--arc-gradient-ai-200);
    --arc-internal-badge-background-low: var(--arc-gradient-ai-200);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
    --arc-internal-badge-mix-blend-mode-high: normal;
  }

  &:has(>[data-variant=overlay-light]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-white-80);
    --arc-internal-badge-background-low: var(--arc-color-alpha-white-20);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }

  &:has(>[data-variant=overlay-dark]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-black-70);
    --arc-internal-badge-background-low: var(--arc-color-alpha-black-40);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }


  /* CONTRASTS -----------------------------------------------------• */

  &:has(>[data-contrast=high]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-high);
    --arc-internal-badge-background: var(--arc-internal-badge-background-high);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-high, normal);
  }

  &:has(>[data-contrast=low]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-low);
    --arc-internal-badge-background: var(--arc-internal-badge-background-low);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-low, multiply);
  }


  /* SIZES ---------------------------------------------------------• */

  &:has(>[data-size=lg]) {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 12;
    --arc-internal-badge-size: 24;
    --arc-internal-badge-min-size: 30;
    --arc-internal-badge-padding-inline: 8;
    --arc-internal-badge-border-radius: 4;
  }

  &:has(>[data-size=md], >[data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 10;
    --arc-internal-badge-size: 20;
    --arc-internal-badge-min-size: 24;
    --arc-internal-badge-padding-inline: 6;
    --arc-internal-badge-border-radius: 4;
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    --arc-inherit-badge-font-size: 0.75em;
    --arc-inherit-badge-min-size: 1.5em;
  }

  &:has(>[data-size=sm]) {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 8;
    --arc-internal-badge-size: 16;
    --arc-internal-badge-min-size: 18;
    --arc-internal-badge-padding-inline: 4;
    --arc-internal-badge-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badge-font-size: var(--arc-inherit-badge-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badge-font-size-uppercase: calc(var(--arc-internal-badge-font-size-uppercase) / var(--arc-modifier-em));
    --arc-computed-badge-size: calc(var(--arc-internal-badge-size) / var(--arc-modifier-em));
    --arc-computed-badge-padding-inline: calc(var(--arc-internal-badge-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badge-border-radius: calc(var(--arc-internal-badge-border-radius) / var(--arc-modifier-em));
    --arc-computed-badge-min-width: var(--arc-inherit-badge-min-size, calc(var(--arc-internal-badge-min-size) * 1px));

    --arc-internal-badge-min-width: min-content;

    /* Inter-Component Communication • ArcIconText -------------------• */

    --arc-icon-text-modifier: var(--arc-modifier);
    --arc-icon-text-align-items: center;
  }


  /* LAYOUTS -------------------------------------------------------• */

  &:has(>[data-layout=fill]) {
    --arc-internal-badge-flex: 1;
    --arc-internal-badge-display: flex;
    --arc-internal-badge-min-width: var(--arc-computed-badge-min-width);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-badge-wrapper]:not([hidden]) {
  flex: var(--arc-badge-flex, var(--arc-internal-badge-flex, unset));
  align-self: var(--arc-badge-align-self, flex-start);
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;

  &:has(>[data-is-flexible]) {
    min-width: var(--arc-badge-min-width, var(--arc-internal-badge-min-width));
  }
}


[arc-badge] {
  font-size: var(--arc-badge-font-size, var(--arc-computed-badge-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: 1;
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badge-size); /** @computed • height */
  padding-inline: var(--arc-computed-badge-padding-inline); /** @computed • padding-inline */

  overflow: hidden;
  white-space: nowrap;
  line-height: 2;

  color: var(--arc-badge-color, var(--arc-internal-badge-color));
  background: var(--arc-badge-background, var(--arc-internal-badge-background));
  border-radius: var(--arc-computed-badge-border-radius); /** @computed • border-radius */
  mix-blend-mode: var(--arc-badge-mix-blend-mode, var(--arc-internal-badge-mix-blend-mode));

  &[data-is-uppercase] [data-element=text] {
    text-transform: uppercase;
    font-size: var(--arc-computed-badge-font-size-uppercase); /** @computed • font-size */
  }
}

}
`,vn=k(er,["inherit","lg","md","sm"]),mn=k(sr,["hug","fill"]),gn=["high","low"],fn=k(q,["brand-black","brand-blue","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),bn=({children:r,icon:e,text:a,isFlipped:o,isFlexible:i,isUppercase:c,variant:s="brand-blue",size:v="inherit",layout:l="hug",contrast:d="high",...g})=>{const m=r||(0,n.jsx)(cr,{icon:e,text:a,isFlipped:o,layout:"gutter"}),f=l==="fill"&&i;return(0,n.jsx)("span",{...g,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":d,"data-variant":s,"data-layout":l,"data-size":v,"data-is-flexible":f?"":void 0,"data-is-uppercase":c?"":void 0,children:m})})};S("ArcBadge",hn);const xn=p`
@layer arc-components {

[arc-badge-count] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=neutral] { /** @default */
    --arc-internal-badgecount-color: var(--arc-color-neutral-800);
    --arc-internal-badgecount-background: var(--arc-color-neutral-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=brand] {
    --arc-internal-badgecount-color: var(--arc-color-blue-700);
    --arc-internal-badgecount-background: var(--arc-color-blue-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=success] {
    --arc-internal-badgecount-color: var(--arc-color-success-heavy);
    --arc-internal-badgecount-background: var(--arc-color-green-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=warning] {
    --arc-internal-badgecount-color: var(--arc-color-warning-heavy);
    --arc-internal-badgecount-background: var(--arc-color-yellow-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=critical] {
    --arc-internal-badgecount-color: var(--arc-color-text-inverse);
    --arc-internal-badgecount-background: var(--arc-color-critical-root);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }

  &[data-variant=inverse] {
    --arc-internal-badgecount-color: var(--arc-color-text-primary);
    --arc-internal-badgecount-background: var(--arc-color-mono-white);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 24;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &:is([data-size=md], [data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 20;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=sm] {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 16;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=inherit] { /** @default • scalable based on 'md' size */
    --arc-inherit-badgecount-font-size: 0.75em;
  }


  /* SHAPES ------------------------------------------------------• */

  &[data-shape=square] {
    --arc-internal-badgecount-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badgecount-font-size: var(--arc-inherit-badgecount-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badgecount-size: calc(var(--arc-internal-badgecount-size) / var(--arc-modifier-em));
    --arc-computed-badgecount-padding-inline: calc(var(--arc-internal-badgecount-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badgecount-border-radius: calc(var(--arc-internal-badgecount-border-radius) / var(--arc-modifier-em));
  }

  &[data-shape=circle] {
    --arc-computed-badgecount-border-radius: var(--arc-border-radius-pill);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, var(--arc-internal-badgecount-mix-blend-mode));
  font-size: var(--arc-badge-count-font-size, var(--arc-computed-badgecount-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badgecount-size); /** @computed • height */
  min-width: var(--arc-computed-badgecount-size); /** @computed • min-width */
  padding-inline: var(--arc-computed-badgecount-padding-inline); /** @computed • padding-inline */

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(--arc-internal-badgecount-color));
  background: var(--arc-badge-count-background, var(--arc-internal-badgecount-background));
  border-radius: var(--arc-computed-badgecount-border-radius); /** @computed • border-radius */
}

`,$n=k(er,["inherit","lg","md","sm"]),yn=k(q,["neutral","brand","critical","warning","success","inverse"]),wn=k(Pe,["square","circle"]),An=({children:r,text:e,variant:a="neutral",size:o="inherit",shape:i="square",...c})=>{const s=r||e;return(0,n.jsx)("span",{...c,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-variant":a,"data-shape":i,"data-size":o,children:s})})};S("ArcBadgeCount",xn);const kn=p`
@layer arc-components {

[arc-label] {

  /* Inter-Component Communication ---------------------------------• */

  /* also to: ArcLabelContent */
  --arc-internal-label-opacity: var(--arc-label-opacity, unset);
  --arc-internal-label-opacity-disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-60));


  /* Internal STYLES -----------------------------------------------• */

  --arc-internal-label-cursor: var(--arc-label-cursor, pointer);
  --arc-internal-label-cursor-disabled: var(--arc-label-cursor-disabled, not-allowed);

  &:has(:disabled) {
    --arc-internal-label-cursor: var(--arc-internal-label-cursor-disabled);
    --arc-internal-label-opacity: var(--arc-internal-label-opacity-disabled);
  }

  &[data-layout=fill] {
    --arc-internal-label-display: flex;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-label]:not([hidden]) {
  display: var(--arc-internal-label-display, inline-flex);
  align-items: var(--arc-label-align-items, baseline);
  gap: var(--arc-label-gap, max(var(--arc-space-1), 0.5em));
  cursor: var(--arc-internal-label-cursor);
}

}
`,zn=k(sr,["hug","fill"]),Sr=({layout:r,...e})=>(0,n.jsx)("label",{...e,"arc-label":"","data-layout":r});S("ArcLabel",kn);const Cn=p`
@layer arc-components {

[arc-label-content] {
  opacity: var(--arc-label-opacity, var(--arc-internal-label-opacity, unset));
  transition: var(--arc-label-transition, opacity 100ms ease-out);
  user-select: var(--arc-label-user-select, none);
  -webkit-user-select: var(--arc-label-user-select, none);
}

}
`,_r=r=>(0,n.jsx)("span",{...r,"arc-label-content":""});S("LabelContent",Cn);const Sn={checkbox:"checkbox",radio:"radio",switch:"radio"},pe=({id:r,indeterminate:e,type:a,onChange:o,...i})=>{const c=a==="checkbox"&&!!e,s=(0,b.useRef)(null),v=(0,b.useMemo)(()=>r||dr(`arc-${a}`),[r]),l=d=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const m={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:i?.value};d?.(m,g)};return(0,b.useEffect)(()=>{s.current?.type==="checkbox"&&(s.current.indeterminate=!!e)},[e]),(0,n.jsx)("input",{...i,id:v,ref:s,type:Sn[a],"arc-input-type":a,"aria-disabled":i?.disabled||void 0,"data-is-disabled":i?.disabled||void 0,"data-is-checked":i?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:l(o)})},_n=p`
@layer arc-components {

[arc-input-mask] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-icon-size: var(--arc-internal-inputmask-icon-size); /* ArcIcon */


  /* --arc-internal- Tokens • NOT FOR CONSUMER USE -----------------• */

  --arc-internal-inputmask-border-width: max(var(--arc-border-width-sm), 0.0625em);
  --arc-internal-inputmask-border: var(--arc-internal-inputmask-border-width) solid var(--arc-internal-inputmask-border-color);


  &:has(:disabled) {
    --arc-internal-inputmask-cursor: not-allowed;
  }

  &:has(:focus:focus-visible) {
    --arc-internal-inputmask-outline: var(--arc-internal-inputmask-border-width) solid var(--arc-color-border-focus);
  }
}

[arc-input-mask-wrapper] {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 1lh;
}

[arc-input-mask] {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--arc-internal-inputmask-width);
  height: var(--arc-internal-inputmask-height);
  opacity: var(--arc-internal-inputmask-opacity, var(--arc-alpha-100));

  color: var(--arc-internal-inputmask-color, transparent);
  background: var(--arc-internal-inputmask-background);
  border: var(--arc-internal-inputmask-border);
  border-radius: var(--arc-internal-inputmask-border-radius);
  text-shadow: var(--arc-internal-inputmask-text-shadow, unset);
  translate: var(--arc-internal-inputmask-translate, unset);

  outline: var(--arc-internal-inputmask-outline, none);
  outline-offset: var(--arc-internal-inputmask-border-width);

  transition-property: opacity, background, color, border-color, outline;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  transition-behavior: allow-discrete;

  [arc-input-type] {
    flex: none;
    outline: none;
    appearance: none;
    position: absolute;
    inset: calc(var(--arc-internal-inputmask-border-width) * -1);
    cursor: var(--arc-internal-inputmask-cursor, pointer);
    margin: 0;
    padding: 0;
    border: 0;
    z-index: var(--arc-internal-input-z-index, unset);
  }

}

}
`,Te=({type:r,...e})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...e,"arc-input-mask":r})});S("ArcBooleanInputMask",_n);const En=p`
@layer arc-components {

[arc-checkbox] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-checkbox-font-size: 1em;
    --arc-inherit-checkbox-gap: 0.5em;
    --arc-inherit-checkbox-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-checkbox-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 8;
    --arc-internal-checkbox-size: 18;
    --arc-internal-checkbox-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 6;
    --arc-internal-checkbox-size: 16;
    --arc-internal-checkbox-icon-size: 10;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-checkbox-font-size: var(--arc-inherit-checkbox-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-checkbox-gap:  var(--arc-inherit-checkbox-gap, calc(var(--arc-internal-checkbox-gap) / var(--arc-modifier-em)));
    --arc-computed-checkbox-size:  var(--arc-inherit-checkbox-size, calc(var(--arc-internal-checkbox-size) / var(--arc-modifier-em)));
    --arc-computed-checkbox-icon-size:  var(--arc-inherit-checkbox-icon-size, calc(var(--arc-internal-checkbox-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: 0.25em; /* 4px @ 100% */
    --arc-internal-inputmask-size: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-checkbox-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-height: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */
    --arc-internal-inputmask-text-shadow: 0 0.025em 0 currentcolor;

    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-checkbox-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-checkbox]:not([hidden]) {
  display: var(--arc-checkbox-display, inline-flex);
  font-size: var(--arc-computed-checkbox-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked, :indeterminate)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked, :indeterminate)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked, :indeterminate) {
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &[data-variant=primary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);

      &:has(:disabled) {
        --arc-internal-inputmask-opacity: var(--arc-alpha-30);
      }
    }

    &[data-variant=secondary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-black-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);

      &:has(:disabled) {
        --arc-internal-inputmask-color: var(--arc-color-alpha-black-30);
        --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
      }
    }
  }
}

}
`,jn=k(sr,["hug","fill"]),Tn=k(er,["inherit","md","sm"]),In=k(q,["primary","secondary"]),vt=({children:r,label:e,layout:a,size:o="md",variant:i="primary",useMask:c=!0,...s})=>{const{className:v,title:l,...d}=s,g={className:v,title:l},m=r??e,f=(0,n.jsx)(pe,{...d,type:"checkbox"}),y=c&&(0,n.jsxs)(Te,{type:"checkbox",children:[f,(0,n.jsx)(I,{icon:d?.indeterminate?"fa-solid fa-minus fa-fw":"fa-solid fa-check fa-fw"})]}),A=!!m&&(0,n.jsxs)(Sr,{layout:a,children:[y||f,(0,n.jsx)(_r,{children:m})]});return(0,n.jsx)("span",{...g,"arc-checkbox":"","data-size":o,"data-variant":i,children:A||y||f})};S("ArcCheckbox",En);const Pn=p`
@layer arc-components {

[arc-checkbox-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------• */

  --arc-internal-cb-space: 2;
  --arc-internal-cb-space-subtract: 0;
  --arc-internal-cb-border-radius: 8;
  --arc-internal-cb-background: var(--arc-color-alpha-black-0);

  --arc-internal-cbo-color: var(--arc-color-text-secondary);
  --arc-internal-cbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-cbo-border-width: 1;
  --arc-internal-cbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-checkboxbar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------- */

  &[data-size=lg] { /* @default */
    --arc-internal-cbo-size: 40;
    --arc-internal-cbo-icon-padding: 8;
    --arc-internal-cbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-cbo-size: 32;
    --arc-internal-cbo-icon-padding: 6;
    --arc-internal-cbo-text-padding: 8;
  }


  /* COMPUTED --------------------------------------------------------- */

  & {
    --arc-computed-cb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-cb-space: calc(var(--arc-internal-cb-space) / var(--arc-modifier-em));
    --arc-computed-cb-border-radius: calc(var(--arc-internal-cb-border-radius) / var(--arc-modifier-em));

    --arc-computed-cbo-size: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-cbo-line-height: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cbo-border-width-subtract)) / var(--arc-modifier));
    --arc-computed-cbo-border-radius: calc((var(--arc-internal-cb-border-radius) - var(--arc-internal-cb-space)) / var(--arc-modifier-em));
    --arc-computed-cbo-border-width: calc(var(--arc-internal-cbo-border-width) / var(--arc-modifier-em));
    --arc-computed-cbo-icon-padding: calc(var(--arc-internal-cbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-cbo-text-padding: calc(var(--arc-internal-cbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------- */

  &[data-layout=hug] { /* @default */
    --arc-internal-cb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-cb-display: flex;
  }
}


[arc-checkbox-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------- */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-cbo-color: var(--arc-color-text-secondary);
      --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    }
  }

  &:has(:checked) {
    --arc-internal-cbo-color: var(--arc-color-text-primary);
    --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
    --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    --arc-internal-cbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-cbo-outline: var(--arc-computed-cbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-checkbox-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-checkbox-bar] {
  font-size: var(--arc-computed-cb-font-size);
  display: var(--arc-internal-cb-display);
  gap: var(--arc-computed-cb-space);
  border-radius: var(--arc-computed-cb-border-radius);
  background: var(--arc-internal-cb-background);

  padding: 0;
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=checkbox] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-checkbox] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-cbo-border-radius);
    outline: var(--arc-internal-cbo-outline, none);
    outline-offset: var(--arc-computed-cbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-cbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-cbo-size);
    min-width: var(--arc-computed-cbo-size);

    border-radius: var(--arc-computed-cbo-border-radius);
    border: var(--arc-computed-cbo-border-width) solid var(--arc-internal-cbo-border-color);
    background: var(--arc-internal-cbo-background);
    color: var(--arc-internal-cbo-color);
    font-weight: var(--arc-internal-cbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-cbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-cbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,Ln=k(sr,["hug","fill"]),Rn=k(er,["lg","md"]),Mn=({children:r,label:e,icon:a,...o})=>{const i=r||(0,n.jsx)(cr,{icon:a,text:e});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,n.jsx)(vt,{...o,label:i,layout:"fill",useMask:!1})})},On=({children:r,size:e="lg",layout:a="hug",...o})=>(0,n.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":e,"data-layout":a,role:"group",children:r});S("ArcCheckboxBar",Pn);const Bn=r=>[{rule:()=>r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{rule:()=>r.icon,value:"icon-text"},{rule:()=>r.avatar&&typeof r.subtext<"u",value:"user-detail"},{rule:()=>r.avatar,value:"user"},{rule:()=>typeof r.subtext<"u",value:"text-detail"},{rule:()=>!0,value:"text"}],Hn=({icon:r,iconSize:e,layout:a,...o})=>{const i={overflow:"truncate",gapSize:"md",size:"md"},c=r&&typeof r=="string"?`${r.replace(" fa-fw","")} fa-fw`:r;return{"icon-text":(0,n.jsx)(cr,{...o,...i,iconSize:e,layout:a,variant:"inherit",icon:c}),"icon-text-detail":(0,n.jsx)(cr,{...o,...i,iconSize:e,layout:a,isStrong:!0,variant:"inherit",icon:c}),text:(0,n.jsx)(cr,{...o,...i,layout:a,variant:"inherit"}),"text-detail":(0,n.jsx)(cr,{...o,...i,layout:a,isStrong:!0,variant:"inherit"}),user:(0,n.jsx)(We,{...o,...i,size:"sm"}),"user-detail":(0,n.jsx)(We,{...o,...i,size:"md",isStrong:!0})}},Nn=r=>{const e=r?.variant??Bn(r).find(a=>a.rule())?.value;return{itemType:e,ItemTemplate:a=>Hn(a)[e]}},mt=({itemId:r,startSlot:e,endSlot:a,onClick:o,...i})=>{const{itemType:c,ItemTemplate:s}=Nn(i),v=e?"":void 0,l=a?"":void 0,d=()=>(0,n.jsxs)(n.Fragment,{children:[e," ",(0,n.jsx)(s,{...i,"is-item-content":""})," ",a]}),g=m=>{const f=m.currentTarget.closest("[arc-popover]");o?.(m.nativeEvent),f?.hidePopover()};return o?(0,n.jsx)(Cr,{_isCustom:!0,"arc-dropdown-item":c??"","has-start-slot":v,"has-end-slot":l,onClick:g,children:(0,n.jsx)(d,{})}):(0,n.jsx)("div",{"arc-dropdown-item":c??"","has-start-slot":v,"has-end-slot":l,children:(0,n.jsx)(d,{})})},Vn=p`arc•dropdown`,Dn=p`${Vn}•menu`,D=p`${Dn}•item`,Fn=p`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    --${D}-base-padding: max(8px, 0.5em) max(12px, 0.75em);
    --${D}-padding: var(--${D}-base-padding);
    --${D}-min-height: max(36px, 2.25em);
    --${D}-gap: max(8px, 0.5em);

    &[arc-dropdown-item=text-detail] {
      --${D}-min-height: max(48px, 3em);
    }

    &[arc-dropdown-item=user] {
      --${D}-min-height: max(40px, 2.5em);

      &:not([has-start-slot]) {
        --${D}-padding: var(--${D}-base-padding) max(8px, 0.5em) max(10px, 0.625em);
      }
    }

    &[arc-dropdown-item=user-detail] {
      --${D}-min-height: max(48px, 3em);

      &:not([has-start-slot]) {
        --${D}-padding: var(--${D}-base-padding) max(8px, 0.5em) max(6px, 0.375em);
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(--${D}-gap);

    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--${D}-gap);
    text-align: start;
    padding: var(--${D}-padding);
    min-height: var(--${D}-min-height);
    max-width: 100%;

    &:is([arc-button]) {
      --arc-button-padding: var(--${D}-padding);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,Un=p`arc•menu`,Vr=p`${Un}•item`,Yn=p`
@layer arc-components {

  [arc-menu] {
    --${Vr}-gap: max(8px, 0.5em);
    --${Vr}-background: inherit;

    font-size: var(--arc-menu-font-size, max(var(--arc-font-size-14), 0.875em));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, max(2px, 0.125em));
    padding: var(--arc-menu-padding, 0);
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(--${Vr}-gap));

    background: var(--arc-menu-item-background, var(--${Vr}-background));
    color: var(--arc-menu-item-color, inherit);
    padding: var(--arc-menu-item-padding, 0em);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not(:disabled)):hover {
      --${Vr}-background: color-mix(in srgb, currentcolor 7%, transparent);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: min(-2px, -0.125em);
      --arc-button-gap: var(--arc-menu-item-gap, var(--${Vr}-gap));
      --arc-button-transition: none;

      [arc-button-label] { display: contents; }
    }
  }

`,Zn=({items:r,filterText:e,renderItem:a,isVisible:o,...i})=>{const c=(0,b.useRef)(null),[s,v]=(0,b.useState)(-1),[l,d]=(0,b.useState)(!1),g=e?r.filter($=>Object.values($).some(w=>w===e)):r,m=Math.max(g.length-1,0),f=(0,b.useCallback)($=>c.current?.children[$]?.querySelector("[arc-button=custom]"),[]),y=(0,b.useCallback)(($,w,E)=>{let N=1,Y=$;const X=rr=>rr>=E?0:rr+1,or=rr=>rr<=0?E:rr-1;for(;N<=E;){const rr=X(Y),Ur=or(Y),br={previous:w==="previous"?Ur:Y,actual:Y,next:w==="next"?rr:Y}[w];if(f(br))return br;Y=br,N+=1}return-1},[f]),A=(0,b.useCallback)(($,w)=>{const E=y($,w,m);v(E),f(E)?.focus()},[y,m,f]),C={ArrowUp:$=>A($,"previous"),ArrowDown:$=>A($,"next"),Home:()=>A(0,"actual"),End:()=>A(m,"actual")},T=$=>w=>{Object.keys(C).includes(w.key)&&(d(!0),w.stopPropagation(),w.preventDefault(),C[w.key]($))},O=($,w)=>()=>{!l&&w&&A($,"actual")};return(0,b.useEffect)(()=>{o&&A(-1,"next")},[o,A]),(0,n.jsx)("ul",{...i,ref:c,"arc-menu":"",role:"menu",onKeyDown:T(s),onMouseLeave:()=>v(-1),onMouseMove:()=>d(!1),tabIndex:o?0:-1,children:g.map(($,w)=>(0,n.jsx)("li",{"arc-menu-item":$?.variant??"",role:"menuitem",onMouseEnter:O(w,!!$.onClick),id:$.itemId,children:a?.($,w,{filterText:e,isCurrent:w===s})},$.itemId))})};S("ArcMenu",Yn);const gt=(0,b.forwardRef)((r,e)=>(0,n.jsx)(se,{...r,ref:e,"arc-dropdown-menu-button":""})),ea=r=>{const{items:e,renderItem:a,...o}=r,[i,c]=(0,b.useState)(!1),s=(0,b.useCallback)((...l)=>a?.(...l)||(0,n.jsx)(mt,{...l[0]}),[a]),v=l=>c(l.newState==="open");return(0,n.jsx)(de,{...o,"arc-dropdown":"",variant:"common",onToggle:v,children:(0,n.jsx)(Zn,{"arc-dropdown-menu":"",items:e??[],renderItem:s,isVisible:i})})};gt.displayName="ArcDropdownButton",ea.Button=gt,ea.Item=mt,S("ArcDropdownMenu",Fn);const Xn=r=>(0,n.jsx)(Cr,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),J=p`arc•link`,F=p`${J}•icon`,U=p`${J}•text`,qn=p`
@layer arc-components {

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    --${F}-color: currentcolor;
    --${F}-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --${F}-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --${U}-color: currentcolor;
    --${U}-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --${U}-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --${J}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    --${F}-color: var(--arc-color-icon-primary);
    --${U}-color: var(--arc-color-text-primary);
    --${F}-color-hover: var(--arc-color-icon-primary-hover);
    --${U}-color-hover: var(--arc-color-text-primary-hover);
    --${F}-color-disabled: var(--arc-color-icon-disabled);
    --${U}-color-disabled: var(--arc-color-text-disabled);
    --${J}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    --${F}-color: var(--arc-color-icon-secondary);
    --${U}-color: var(--arc-color-text-secondary);
    --${F}-color-hover: var(--arc-color-icon-secondary-hover);
    --${U}-color-hover: var(--arc-color-text-secondary-hover);
    --${F}-color-disabled: var(--arc-color-icon-disabled);
    --${U}-color-disabled: var(--arc-color-text-disabled);
    --${J}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=inverse] {
    --${F}-color: var(--arc-color-icon-inverse);
    --${U}-color: var(--arc-color-text-inverse);
    --${F}-color-hover: var(--arc-color-icon-inverse-hover);
    --${U}-color-hover: var(--arc-color-text-inverse-hover);
    --${F}-color-disabled: var(--arc-color-icon-inverse-disabled);
    --${U}-color-disabled: var(--arc-color-text-inverse-disabled);
    --${J}-focus-color: var(--arc-color-border-focus-inverse);
  }

  & {
    --${J}-outline-size: 0.125em; /* 2px */
    --${J}-outline-offset: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    --${U}-color: var(--arc-link-color-hover, var(--${U}-color-hover));
    --${F}-color: var(--arc-link-color-hover, var(--${F}-color-hover));
  }

  &:where(:focus, :focus-within):focus-visible {
    --${J}-outline: var(--${J}-outline-size) solid var(--arc-link-color-focus, var(--${J}-focus-color));
    --${J}-outline-offset: var(--${J}-outline-offset);

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    --${U}-color: var(--arc-link-color-disabled, var(--${U}-color-disabled));
    --${F}-color: var(--arc-link-color-disabled, var(--${F}-color-disabled));
    --${J}-cursor: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(--${F}-color));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(--${U}-color));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Wn=k(q,["inherit","primary","secondary","inverse"]),Kn=({children:r,layout:e="gutter",size:a="inherit",variant:o="inherit",tag:i="a",href:c,icon:s,text:v,overflow:l,iconSize:d,gapSize:g,isFlipped:m,isDisabled:f,...y})=>(0,n.jsx)(i,{...y,href:f?void 0:c,"arc-link":"","data-variant":o,"aria-disabled":f,"data-is-disabled":f?"":void 0,children:r||(0,n.jsx)(cr,{icon:s,text:v,overflow:l,iconSize:d,gapSize:g,size:a,layout:e,isFlipped:m})});S("ArcLink",qn);const Gn=p`
@layer arc-components {

[arc-radio] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-radio-font-size: 1em;
    --arc-inherit-radio-gap: 0.5em;
    --arc-inherit-radio-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-radio-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 8;
    --arc-internal-radio-size: 18;
    --arc-internal-radio-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 6;
    --arc-internal-radio-size: 16;
    --arc-internal-radio-icon-size: 10;
  }

  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-radio-font-size: var(--arc-inherit-radio-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-radio-gap:  var(--arc-inherit-radio-gap, calc(var(--arc-internal-radio-gap) / var(--arc-modifier-em)));
    --arc-computed-radio-size:  var(--arc-inherit-radio-size, calc(var(--arc-internal-radio-size) / var(--arc-modifier-em)));
    --arc-computed-radio-icon-size:  var(--arc-inherit-radio-icon-size, calc(var(--arc-internal-radio-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: var(--arc-border-radius-circle);
    --arc-internal-inputmask-size: var(--arc-computed-radio-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-radio-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-radio-size);
    --arc-internal-inputmask-height: var(--arc-computed-radio-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */


    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-radio-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio]:not([hidden]) {
  display: var(--arc-radio-display, flex);
  font-size: var(--arc-computed-radio-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked) {
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }
}

}
`,Jn=k(sr,["hug","fill"]),Qn=k(er,["inherit","md","sm"]),ft=({children:r,label:e,layout:a,size:o="md",useMask:i=!0,...c})=>{const{className:s,title:v,...l}=c,d={className:s,title:v},g=r??e,m=(0,n.jsx)(pe,{...l,type:"radio"}),f=i&&(0,n.jsxs)(Te,{type:"radio",children:[m,(0,n.jsx)(I,{icon:"fa-solid fa-circle-small fa-fw"})]}),y=!!g&&(0,n.jsxs)(Sr,{layout:a,children:[f||m,(0,n.jsx)(_r,{children:g})]});return(0,n.jsx)("span",{...d,"arc-radio":"","data-size":o,children:y||f||m})};S("ArcRadio",Gn);const ri=p`
@layer arc-components {

[arc-radio-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------- */

  --arc-internal-rb-space: 2;
  --arc-internal-rb-space-subtract: 4;
  --arc-internal-rb-space-border-subtract: 6;
  --arc-internal-rb-border-radius: 8;
  --arc-internal-rb-background: var(--arc-color-alpha-black-03);

  --arc-internal-rbo-color: var(--arc-color-text-secondary);
  --arc-internal-rbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-rbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-rbo-border-width: 1;
  --arc-internal-rbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-radiobar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] { /** @default */
    --arc-internal-rbo-size: 40;
    --arc-internal-rbo-icon-padding: 8;
    --arc-internal-rbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-rbo-size: 32;
    --arc-internal-rbo-icon-padding: 6;
    --arc-internal-rbo-text-padding: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-computed-rb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-rb-space: calc(var(--arc-internal-rb-space) / var(--arc-modifier-em));
    --arc-computed-rb-border-radius: calc(var(--arc-internal-rb-border-radius) / var(--arc-modifier-em));

    --arc-computed-rbo-size: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-rbo-line-height: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-border-subtract)) / var(--arc-modifier));
    --arc-computed-rbo-border-radius: calc((var(--arc-internal-rb-border-radius) - var(--arc-internal-rb-space)) / var(--arc-modifier-em));
    --arc-computed-rbo-border-width: calc(var(--arc-internal-rbo-border-width) / var(--arc-modifier-em));
    --arc-computed-rbo-icon-padding: calc(var(--arc-internal-rbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-rbo-text-padding: calc(var(--arc-internal-rbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=hug] { /** @default */
    --arc-internal-rb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-rb-display: flex;
  }
}


[arc-radio-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------• */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-rbo-border-color: var(--arc-color-border-standard);
    }
  }

  &:has(:checked) {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-white-100);
      --arc-internal-rbo-border-color: var(--arc-color-border-stark);
      --arc-internal-rbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-rbo-outline: var(--arc-computed-rbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-radio-bar] {
  font-size: var(--arc-computed-rb-font-size);
  display: var(--arc-internal-rb-display);
  gap: var(--arc-computed-rb-space);
  border-radius: var(--arc-computed-rb-border-radius);
  background: var(--arc-internal-rb-background);

  padding: var(--arc-computed-rb-space);
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=radio] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-radio] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-rbo-border-radius);
    outline: var(--arc-internal-rbo-outline, none);
    outline-offset: var(--arc-computed-rbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-rbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-rbo-size);
    min-width: var(--arc-computed-rbo-size);

    border-radius: var(--arc-computed-rbo-border-radius);
    border: var(--arc-computed-rbo-border-width) solid var(--arc-internal-rbo-border-color);
    background: var(--arc-internal-rbo-background);
    color: var(--arc-internal-rbo-color);
    font-weight: var(--arc-internal-rbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-rbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-rbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,ei=k(sr,["hug","fill"]),ai=k(er,["lg","md"]),ti=({children:r,label:e,icon:a,...o})=>{const i=r||(0,n.jsx)(cr,{icon:a,text:e});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,n.jsx)(ft,{...o,label:i,layout:"fill",useMask:!1})})},oi=({children:r,size:e="lg",layout:a="hug",...o})=>(0,n.jsx)("ul",{...o,"arc-radio-bar":"","data-size":e,"data-layout":a,role:"radiogroup",children:r});S("ArcRadioBar",ri);const ni=k(er,["inherit","md","sm"]),H={On:"on",Off:"off"},Dr={Before:"before",After:"after"},ii=({disabled:r,id:e,name:a,size:o="md",value:i,labelOff:c,labelOn:s,onChange:v,...l})=>{const d=(0,b.useMemo)(()=>a||dr("arc-switch-name"),[a]),g=(0,b.useMemo)(()=>e&&`${e}-off`||dr("arc-switch-off"),[e]),m=(0,b.useMemo)(()=>e&&`${e}-on`||dr("arc-switch-on"),[e]),f=$=>{if($.code==="Space"){$.preventDefault(),$.stopPropagation();const w=i===H.On?H.Off:H.On;v?.({value:w},$)}},y=$=>{const w={on:Qr(s),off:Qr(c)};return w?.on&&w?.off?w[$]:!w?.on&&w?.off?`${w?.off}: ${$}`:w?.on&&!w?.off?`${w?.on}: ${$}`:w[$]},A=(0,n.jsxs)(Te,{type:"switch",onKeyDown:f,children:[(0,n.jsx)(pe,{type:"switch",name:d,id:g,value:H.Off,checked:i===H.Off,disabled:r,"aria-label":y(H.Off)?.trim(),onChange:v}),(0,n.jsx)(pe,{type:"switch",name:d,id:m,value:H.On,checked:i===H.On,disabled:r,"aria-label":y(H.On)?.trim(),onChange:v}),(0,n.jsx)("span",{"data-element":"mask"})]}),C=!s&&i===H.Off?m:g,T=!c&&i===H.On?g:m,O=!!(s||c)&&(0,n.jsxs)(n.Fragment,{children:[!!c&&(0,n.jsx)(Sr,{htmlFor:C,"arc-switch-label":s?H.Off:"",children:(0,n.jsx)(_r,{children:c})}),A,!!s&&(0,n.jsx)(Sr,{htmlFor:T,"arc-switch-label":c?H.On:"",children:(0,n.jsx)(_r,{children:s})})]});return(0,n.jsx)("span",{...l,"arc-switch":"","data-state":i,"data-size":o,role:"radiogroup",children:O||A})},ci=p`
@layer arc-components {

[arc-switch] {
  --arc-internal-switch-background: var(--arc-color-alpha-white-100);
  --arc-internal-switch-shadow: var(--arc-shadow-md);

  --arc-internal-inputmask-border-radius: var(--arc-border-radius-pill);

  --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                      stay inline with the label text
                                      regardless of applied line-height */


  /* COLORS via STATES ---------------------------------------------• */

  &:has(:disabled) {
    --arc-internal-switch-background: var(--arc-color-alpha-white-70);
    --arc-internal-switch-shadow: 0 0 1em max(1px, 0.0625em) var(--arc-color-alpha-white-50) inset;

    [arc-switch-label] {
      --arc-label-cursor: not-allowed;
      --arc-label-opacity: var(--arc-alpha-60);
    }
  }

  &[data-state=off] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-30);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }

    &:has(:disabled) {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &[data-state=on] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }


  /* SIZES  --------------------------------------------------------• */

  &[data-size=inherit] {
    --arc-inherit-switch-font-size: 1em;
    --arc-inherit-switch-gap: 0.5em;  /* 8px @ 100%/16px base */
    --arc-inherit-switch-width: 2.5em; /* 40px @ 100% */
    --arc-inherit-switch-height: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-x-shift: 0.25em; /* 4px @ 100% */
    --arc-inherit-switch-size: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-gap: 0.5em; /* 8px @ 100% */
  }

  &[data-size=md] { /* @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 40;
    --arc-internal-switch-height: 24;
    --arc-internal-switch-x-shift: 4;
    --arc-internal-switch-size: 24;
    --arc-internal-switch-gap: 8;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 30;
    --arc-internal-switch-height: 14;
    --arc-internal-switch-x-shift: 1;
    --arc-internal-switch-size: 16;
    --arc-internal-switch-gap: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-switch-font-size: var(--arc-inherit-switch-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-switch-gap: var(--arc-inherit-switch-gap, calc(var(--arc-internal-switch-gap) / var(--arc-modifier-em)));
    --arc-computed-switch-width: var(--arc-inherit-switch-width, calc(var(--arc-internal-switch-width) / var(--arc-modifier-em)));
    --arc-computed-switch-height: var(--arc-inherit-switch-height, calc(var(--arc-internal-switch-height) / var(--arc-modifier-em)));
    --arc-computed-switch-x-shift: var(--arc-inherit-switch-x-shift, calc(var(--arc-internal-switch-x-shift) / var(--arc-modifier-em)));
    --arc-computed-switch-size: var(--arc-inherit-switch-size, calc(var(--arc-internal-switch-size) / var(--arc-modifier-em)));


    /* Intern-Component Communication -------------------------------• to ArcBooleanInputMask */
    --arc-internal-inputmask-width: var(--arc-computed-switch-width);
    --arc-internal-inputmask-height: var(--arc-computed-switch-height);
    --arc-internal-inputmask-x-shift: var(--arc-computed-switch-x-shift);
    --arc-internal-inputmask-size: var(--arc-computed-switch-size);
  }


  /* SWITCH PLACEMENT ----------------------------------------------• */

  &[data-state=off] {
    --arc-internal-switch-mask-translate-x: calc(-100% + var(--arc-computed-switch-x-shift));
  }

  &[data-state=on] {
    --arc-internal-switch-mask-translate-x: calc(0% - var(--arc-computed-switch-x-shift));
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-switch] {
  font-size: var(--arc-switch-font-size, var(--arc-computed-switch-font-size));
  display: inline-flex;
  align-items: baseline;
  gap: var(--arc-computed-switch-gap);
  user-select: none;

  [arc-switch-label] {
    font-size: inherit;
    hyphens: auto;
  }

  [arc-input-type=switch] {
    &:where(:not(:checked)) {
      --arc-internal-input-z-index: 1;
    }
  }

  [arc-input-mask-wrapper] {
    align-self: flex-start;
    height: 1lh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-element=mask] {
  }

  [data-element=mask] {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: var(--arc-internal-switch-mask-translate-x) -50%;

    display: inline-flex;
    width: var(--arc-computed-switch-size);
    height: var(--arc-computed-switch-size);

    transition-property: opacity, background, color, border-color, outline, translate;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition-behavior: allow-discrete;
    transition-behavior: allow-discrete;

    background: var(--arc-internal-switch-background);
    box-shadow: var(--arc-internal-switch-shadow);
    border: var(--arc-internal-inputmask-border);
    border-radius: var(--arc-border-radius-circle);
    pointer-events: none;
  }
}

}
`,si=({disabled:r,id:e,name:a,size:o="md",value:i,label:c,labelPosition:s=Dr.After,onChange:v,labelOff:l,labelOn:d,...g})=>{const m=(0,b.useMemo)(()=>a||dr("arc-switch-name"),[a]),f=(0,b.useMemo)(()=>e||dr("arc-switch"),[e]),y=(T,O)=>{const $=T.checked?H.On:H.Off;v?.({...T,value:$},O)};!c&&(d||l)&&(c=d||l,s=d?Dr.After:Dr.Before);const A=(0,n.jsxs)(Te,{type:"checkbox",children:[(0,n.jsx)(pe,{type:"checkbox",name:m,id:f,checked:i===H.On,disabled:r,role:"switch","aria-checked":i===H.On,"aria-label":c?void 0:"Toggle switch",tabIndex:0,onChange:y}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),C=(0,n.jsx)(Sr,{htmlFor:f,"arc-switch-label":s,children:(0,n.jsx)(_r,{children:c})});return l&&d?(0,n.jsx)(ii,{...g,disabled:r,id:e,name:a,labelOff:l,labelOn:d,size:o,value:i,onChange:v}):(0,n.jsxs)("span",{...g,"arc-switch":"","data-state":i,"data-size":o,"data-label-position":s,role:"presentation","aria-live":"off",children:[c&&s===Dr.Before&&C,A,c&&s===Dr.After&&C]})};S("ArcSwitch",ci);const li=["title","heading","subheading","body"],bt=["h1","h2","h3","h4","h5","h6"],xt=["code","div","li","p","pre","span"],$t=[...bt,...xt],di=["title-inherit","title-lg","title-md","title-sm"],pi=["heading-inherit","heading-lg","heading-md","heading-sm"],ui=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],hi=k(q,["inherit","primary","primary-inverse"]),vi=["body-inherit","body-lg","body-md","body-sm","body-xs"],mi=k(q,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),gi=k(ca,["inherit","start","center","justify","end"]),fi=k(sa,["inherit","loose","standard","tight"]),bi={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},xi=r=>{const{align:e,lineHeight:a,size:o,variant:i,isMonospace:c,tag:s,...v}=r,l=bi?.[s]??"body",d=o?.includes("inherit")?o?.split("-")?.[0]:o;return{...v,"arc-text":d||l,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":i?.includes("inherit")?void 0:i,"data-line-height":a?.includes("inherit")?void 0:a}},$i=p`
@layer arc-components {

[arc-text] {

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    --arc-text-line-height: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    --arc-text-line-height: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    --arc-text-line-height: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    --arc-text-align: start;
  }

  &[data-align=center] {
    --arc-text-align: center;
  }

  &[data-align=justify] {
    --arc-text-align: justify;
  }

  &[data-align=end] {
    --arc-text-align: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    --arc-text-color: var(--arc-color-text-primary);
  }

  &[data-variant=primary-inverse] {
    --arc-text-color: var(--arc-color-text-inverse);
  }

  &[data-variant=secondary] {
    --arc-text-color: var(--arc-color-text-secondary);
  }

  &[data-variant=secondary-inverse] {
    --arc-text-color: var(--arc-color-alpha-white-60);
  }

  &[data-variant=critical] {
    --arc-text-color: var(--arc-color-text-critical);
  }

  &[data-variant=warning] {
    --arc-text-color: var(--arc-color-text-warning);
  }

  &[data-variant=success] {
    --arc-text-color: var(--arc-color-text-success);
  }

  &[data-variant=info] {
    --arc-text-color: var(--arc-color-text-info);
  }
}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  --arc-text-font-family: var(--arc-font-family-title);
  --arc-text-font-weight: var(--arc-font-weight-title);
  --arc-text-letter-spacing: var(--arc-letter-spacing-title);
  --arc-text-line-height: var(--arc-line-height-title);

  --arc-text-font-size: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  --arc-text-font-family: var(--arc-font-family-heading);
  --arc-text-font-weight: var(--arc-font-weight-heading);
  --arc-text-letter-spacing: var(--arc-letter-spacing-heading);
  --arc-text-line-height: var(--arc-line-height-heading);

  --arc-text-font-size: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  --arc-text-font-family: var(--arc-font-family-subheading);
  --arc-text-font-weight: var(--arc-font-weight-subheading);
  --arc-text-letter-spacing: unset;
  --arc-text-line-height: var(--arc-line-height-subheading);

  --arc-text-font-size: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  --arc-text-font-family: var(--arc-font-family-body);
  --arc-text-font-weight: var(--arc-font-weight-body);
  --arc-text-line-height: var(--arc-line-height-body);
  --arc-text-font-size: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    --arc-text-font-size: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  --arc-text-font-size: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  --arc-text-font-family: var(--arc-font-family-mono);
  --arc-text-line-height: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, unset);
  hyphens: var(--arc-text-hyphens, auto); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, unset);
  text-align: var(--arc-text-align, unset);
  white-space: var(--arc-text-white-space, unset);

  color: var(--arc-text-color, unset);

  font-size: var(--arc-text-font-size, unset);
  font-family: var(--arc-text-font-family, unset);
  font-weight: var(--arc-text-font-weight, unset);
  line-height: var(--arc-text-line-height, unset);
  letter-spacing: var(--arc-text-letter-spacing, unset);

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,yi=r=>(0,b.forwardRef)((e,a)=>(0,b.createElement)(r,{...xi({...e,tag:r}),ref:a})),wi=[...$t].reduce((r,e)=>({...r,[e]:yi(e)}),{});S("Arc",$i);const Fr=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),Ai=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),aa=({children:r,...e})=>(0,n.jsx)(n.Fragment,{children:!!r&&(0,n.jsx)(Sr,{...e,children:(0,n.jsx)(_r,{children:r})})}),ki=({children:r,layout:e,size:a,variant:o,tag:i="span",...c})=>(0,n.jsx)(i,{...c,"data-layout":e,"data-size":a,"data-variant":o,children:r}),zi=()=>(0,n.jsx)("span",{"input-element":"spacer"}),Ci=r=>(0,n.jsx)(Fr,{...r,"input-element":"header"}),Si=r=>(0,n.jsx)(aa,{...r,"input-element":"header-label"}),_i=r=>(0,n.jsx)(Fr,{...r,"input-element":"header-slot"}),Ei=r=>(0,n.jsx)(Fr,{...r,"input-element":"body"}),ji=r=>(0,n.jsx)(aa,{...r,"input-element":"input-prefix"}),Ti=r=>(0,n.jsx)(aa,{...r,"input-element":"input-suffix"}),Ii=r=>(0,n.jsx)(Ai,{...r,"input-element":"input-action"}),Pi=r=>(0,n.jsx)(Fr,{...r,"input-element":"footer"}),Li=r=>(0,n.jsx)(Fr,{...r,"input-element":"footer-caption"}),Ri=r=>(0,n.jsx)(Fr,{...r,"input-element":"footer-slot"}),Mi=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Oi=p`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    --arc-internal-input-height: 48;
    --arc-internal-input-padding-inline-end: 8;
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    --arc-internal-input-height: 40;
  }

  &[data-size=md] {
    --arc-internal-input-height: 32;
    --arc-internal-input-border-radius: 4;
    --arc-internal-input-action-max-height: 80%;
  }

  & {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-modifier-slot: 12; /* unitless, desired font size at 100% */
    --arc-internal-input-gap: 6;
    --arc-internal-input-slot-gap: 4;
    --arc-internal-input-padding-inline: 12;
    --arc-internal-input-padding-inline-end: 3;
    --arc-internal-input-border-radius: 8;
    --arc-internal-input-border-width: 1;
    --arc-internal-input-outline-size: 2;
    --arc-internal-input-outline-offset: -1;

    /* COMPUTED VARIABLES ------------------------------------------• */

    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;
    --arc-modifier-slot-px: var(--arc-modifier-slot) * 1px;
    --arc-modifier-slot-em: var(--arc-modifier-slot) * 1em;

    --arc-computed-input-font-size: calc(var(--arc-modifier-px));
    --arc-computed-input-slot-font-size: calc(var(--arc-modifier-slot-px));

    --arc-computed-input-border-radius: calc(var(--arc-internal-input-border-radius) / var(--arc-modifier-em));
    --arc-computed-input-border-width: calc(var(--arc-internal-input-border-width) / var(--arc-modifier-em)); /* 1px at 100% */
    --arc-computed-input-outline-size: calc(var(--arc-internal-input-outline-size) / var(--arc-modifier-em)); /* 2px at 100% */
    --arc-computed-input-outline-offset: calc(var(--arc-internal-input-outline-offset) / var(--arc-modifier-em)); /* -1px at 100% */

    --arc-computed-input-height: calc(var(--arc-internal-input-height) / var(--arc-modifier-em));
    --arc-computed-input-gap: calc(var(--arc-internal-input-gap) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline: calc(var(--arc-internal-input-padding-inline) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline-end: calc(var(--arc-internal-input-padding-inline-end) / var(--arc-modifier-em));
    --arc-computed-input-slot-gap: calc(var(--arc-internal-input-slot-gap) / var(--arc-modifier-slot-em));


    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(--arc-internal-input-cursor, inherit); /* ArcLabel • cursor syncing */
    --arc-icon-text-modifier: var(--arc-modifier-slot); /* ArcIconText • modifier for font-size */

    &[data-size=inherit] {
      --arc-computed-input-font-size: 0.875em; /* 14px at 100% */
      --arc-computed-input-slot-font-size: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    --arc-internal-input-color: var(--arc-color-text-primary);
    --arc-internal-input-header-label-color: inherit;
    --arc-internal-input-header-slot-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-caption-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-slot-color: var(--arc-color-text-secondary);

    &[data-variant=outline] { /* @default */
      --arc-internal-input-background: var(--arc-color-mono-white);
      --arc-internal-input-border-color: var(--arc-color-border-stark);
      --arc-internal-input-border-color-hover: var(--arc-color-border-full);

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-disabled: var(--arc-color-border-standard);

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-readonly: var(--arc-color-border-standard);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-mono-white);
      --arc-internal-input-border-color-invalid: var(--arc-color-text-critical);
    }

    &[data-variant=solid] {
      --arc-internal-input-background: var(--arc-color-alpha-black-03);
      --arc-internal-input-border-color: transparent;
      --arc-internal-input-border-color-hover: var(--arc-color-border-stark);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-critical-light);
      --arc-internal-input-border-color-invalid: transparent;

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-disabled: transparent;

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-readonly: transparent;
    }
  }


  /* STATES --------------------------------------------------------• */

  &:not(:has(input:read-only, input:disabled)) {
    &:has([input-element=header-label]:hover, [input-element=body]:hover) {
      --arc-internal-input-border-color: var(--arc-input-border-color-hover, var(--arc-internal-input-border-color-hover));
    }

    &:has([input-element=body]:where(:focus-within, :has(:focus, :active))) {
      --arc-internal-input-outline-color: var(--arc-color-border-focus);
    }
  }

  &:has(input:read-only) {
    --arc-internal-input-cursor: default;
    --arc-internal-input-color: var(--arc-internal-input-color-readonly);
    --arc-internal-input-background: var(--arc-internal-input-background-readonly);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-readonly);
  }

  &:has(input:disabled) {
    --arc-internal-input-cursor: not-allowed;
    --arc-internal-input-color: var(--arc-internal-input-color-disabled);
    --arc-internal-input-background: var(--arc-internal-input-background-disabled);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-disabled);
  }

  &:has(input:user-invalid:not(:focus)) {
    --arc-internal-input-color: var(--arc-internal-input-color-invalid);
    --arc-internal-input-background: var(--arc-internal-input-background-invalid);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-invalid);
    --arc-internal-input-footer-caption-color: var(--arc-internal-input-color-invalid);
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    --arc-internal-input-display: flex;
  }

  &[data-layout=hug] {
    --arc-internal-input-display: inline-flex;
  }

  & {
    --arc-internal-input-border: var(--arc-border-width-sm) solid var(--arc-internal-input-border-color);
    --arc-internal-input-outline: var(--arc-computed-input-outline-size) solid var(--arc-internal-input-outline-color, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(--arc-internal-input-display, flex);
  flex-direction: var(--arc-internal-input-flex-direction, column);
  gap: var(--arc-computed-input-slot-gap);

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(--arc-computed-input-slot-font-size));
    gap: var(--arc-computed-input-slot-gap);
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(--arc-internal-input-header-label-color));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(--arc-internal-input-header-slot-color));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(--arc-internal-input-footer-caption-color));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(--arc-internal-input-footer-slot-color));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: center;
    gap: var(--arc-computed-input-gap);
    height: var(--arc-computed-input-height);
    font-size: var(--arc-computed-input-font-size);

    color: var(--arc-input-color, var(--arc-internal-input-color));
    background: var(--arc-input-background, var(--arc-internal-input-background));
    border: var(--arc-input-border, var(--arc-internal-input-border));
    border-radius: var(--arc-input-border-radius, var(--arc-computed-input-border-radius));
    outline: var(--arc-internal-input-outline, none);
    outline-offset: var(--arc-computed-input-outline-offset);

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(--arc-internal-input-cursor, unset);

    padding-inline: var(--arc-computed-input-padding-inline);

    &:has([input-element=input-action]) {
      padding-inline-end: var(--arc-computed-input-padding-inline-end);
    }

    input {
      cursor: inherit;
      apprearance: none;
      -webkit-apprearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      min-width: 1em;
      max-width: 100%;
      text-align: var(--arc-input-text-align, unset);
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(--arc-internal-input-action-max-height, unset);
    }
  }
}

}
`,Bi={onChangeHandler:Mi,Wrapper:ki,Spacer:zi,Header:Ci,HeaderLabel:Si,HeaderSlot:_i,InputBody:Ei,InputPrefix:ji,InputSuffix:Ti,InputAction:Ii,Footer:Pi,FooterCaption:Li,FooterSlot:Ri};S("ArcInput",Oi);const Q=Bi,Hi=k(sr,["fill","hug"]),Ni=k(er,["inherit","xl","lg","md"]),Vi=k(q,["outline","solid"]),Di=Hi,Fi=Ni,Ui=Vi,Yi=["text","number","password","email","url"],Zi=(0,b.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:o,headerLabel:i,headerSlot:c,inputPrefix:s,inputAction:v,inputSuffix:l,footerCaption:d,footerSlot:g,...m},f)=>{const{id:y,onChange:A,...C}=o,T=C?.type||"text",O=C?.disabled||void 0,$=C?.readOnly||void 0,w=C?.required||void 0,E=!!(i||c),N=!!(d||g);return(0,n.jsxs)(Q.Wrapper,{...m,"arc-text-input":"","arc-input":T,layout:r,size:e,variant:a,children:[E&&(0,n.jsxs)(Q.Header,{children:[(0,n.jsx)(Q.HeaderLabel,{htmlFor:y,children:i}),!!c&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.HeaderSlot,{children:c})]}),(0,n.jsxs)(Q.InputBody,{children:[(0,n.jsx)(Q.InputPrefix,{htmlFor:y,children:s}),(0,n.jsx)("input",{...C,ref:f,id:y,"arc-input-type":T,onChange:Q.onChangeHandler(A),"aria-disabled":O,"aria-readonly":$,"aria-required":w}),(0,n.jsx)(Q.InputSuffix,{htmlFor:y,children:l}),(0,n.jsx)(Q.InputAction,{children:v})]}),N&&(0,n.jsxs)(Q.Footer,{children:[(0,n.jsx)(Q.FooterCaption,{children:d}),!!g&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.FooterSlot,{children:g})]})]})}),yt=p`arc•progress`,wt=p`${yt}•bar`,ue=p`${yt}•value`,Xi=p`
@layer arc-components {
[arc-progress-bar] {
  --${wt}-background: var(--arc-color-alpha-white-20);
  --${ue}-background: var(--arc-color-brand-root);

  &[data-variant=ai] {
    --${ue}-background: linear-gradient(to right, var(--arc-color-ai-purple-200), var(--arc-color-ai-blue-200));
  }

  &[data-variant=critical] {
    --${ue}-background: var(--arc-color-critical-root);
  }
}

[arc-progress-bar] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: max(var(--arc-space-1), 0.5em);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(--${wt}-background));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${ue}-background));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${ue}-background));
  }
}

}
`,qi=({progress:r=0,variant:e="common",...a})=>(0,n.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});S("ArcProgressBar",Xi);const Wi=p`
@layer arc-components {

  [arc-toast] {
    --arc-toast-padding: 0.75em 0.75em 0.75em 1em;
    --arc-toast-transition-duration: 300ms;
    --arc-toast-offset: 1em;

    --arc-modifier: 14;
    --arc-toast-content-gap: max(0.125em, calc(2 / var(--arc-modifier) * 1em));

    /* SIZES ----------------------------------------------------------------• */

    &[data-size=md] { /* @default */
      --arc-toast-font-size: var(--arc-font-size-body-lg);
      --arc-toast-content-font-size: var(--arc-font-size-body-md); /* 14px @ 100% */
    }

    &[data-size=inherit] {
      --arc-toast-font-size: 1em;
      --arc-toast-content-font-size: 0.875em;
    }

    /* STATES ---------------------------------------------------------------• */
    &[data-severity=error] {
      --arc-toast-icon-color: var(--arc-color-critical-root);
    }

    &[data-severity=success] {
      --arc-toast-icon-color: var(--arc-color-success-root);
    }

    &[data-severity=warning] {
      --arc-toast-icon-color: var(--arc-color-warning-root);
    }

    /* VARIANTS -------------------------------------------------------------• */

    &[data-variant=common] { /* @default */
      --arc-toast-background: var(--arc-color-text-primary);
      --arc-toast-color: var(--arc-color-text-inverse);
    }
  }

  /* CORE STYLES --------------------------------------------------• */

  [arc-toast] {
    inset: var(--arc-toast-inset,
      var(--top, auto)
      var(--right, auto)
      var(--bottom, auto)
      var(--left, auto)
    );

    &[data-placement*=top-] {
      --top: var(--arc-toast-offset);
    }

    &[data-placement*=bottom-] {
      --bottom: var(--arc-toast-offset);
    }

    &[data-placement=center] {
      --arc-toast-inset: 0;
    }

    &[data-placement*=-left] {
      --left: var(--arc-toast-offset);
    }

    &[data-placement*=-right] {
      --right: var(--arc-toast-offset);
    }

    &[data-placement*=-center] {
      --left: 50%;
      translate: -50% 0;
    }
  }

  [arc-toast] {
    font-size: var(--arc-toast-font-size);
    content-visibility: hidden;
    align-items: center;
    color: var(--arc-toast-color);
    background-color: var(--arc-toast-background);
    border-radius: var(--arc-toast-border-radius, 0.5em);
    padding: var(--arc-toast-padding);
    box-shadow: var(--arc-shadow-dark-lg);
    max-width: var(--arc-toast-max-width, 32em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, 3.5em);
    border: none;

    &:has([arc-toast-heading]):has([arc-toast-subtext]) {
      --arc-toast-min-height: 5em;
      --arc-toast-content-display: flex;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.5em 1em;
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: 0.5em;
      padding: 0.25em 0; /* vertical padding to align with action button text */
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, currentcolor);

      height: 1lh;
      padding: 0 0.125em;
    }

    [arc-toast-content] {
      flex: 1;
      line-height: var(--arc-line-height-loose);
      font-size: var(--arc-toast-content-font-size);
      hyphens: auto;
      display: var(--arc-toast-content-display, block);
      flex-direction: column;
      gap: var(--arc-toast-content-gap);

      p {
        margin: 0;
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state ---------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    transition:
      display var(--arc-toast-transition-duration) allow-discrete,
      overlay var(--arc-toast-transition-duration) allow-discrete,
      opacity var(--arc-toast-transition-duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
    }
  }
}
`,Ki=k(q,["common","ai","critical"]),Gi=["default","success","warning","error"],Ji=k(er,["inherit","md"]),Qi=k(q,["common"]),rc=[...Re],ec=[...be],ac=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],tc=Ki.filter(r=>r!=="critical"),oc=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},At=({id:r,children:e,icon:a,heading:o,subtext:i,dismissProps:c,showDismiss:s=!0,onClose:v,actionSlot:l,size:d="md",variant:g="common",placement:m="bottom-left",getToastId:f,progressBarProps:y,severity:A,...C})=>{const T=()=>{v?.()},O=!!l||s,$=(0,b.useMemo)(()=>r||dr("arc-toast"),[r]),{variant:w,hierarchy:E,...N}=c||{};return(0,b.useEffect)(()=>{f?.($)},[f,$]),(0,n.jsx)("div",{...C,"arc-toast":"","data-size":d,"data-variant":g,"data-placement":m,"data-severity":A||void 0,id:$,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,n.jsx)(I,{icon:a,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:e||(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:o})}),i&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:i})]})})]}),O&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[l,s&&(0,n.jsx)(Cr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",isInverse:!0,size:"md",shape:"square","aria-label":"Dismiss",...N,popoverTarget:$,onClick:T})]}),y&&(0,n.jsx)(qi,{...y,variant:A==="error"?"critical":y.variant,"arc-toast-progress-bar":""})]})})};At.handleToast=oc,S("ArcToast",Wi)}}]);
