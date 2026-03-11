(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_17_2__articulate_design-system-to-690988"],{71695(di){var wa="Expected a function",Be=NaN,Or="[object Symbol]",Aa=/^\s+|\s+$/g,Lo=/^[-+]0x[0-9a-f]+$/i,jt=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,Ca=parseInt,ir=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,ka=typeof self=="object"&&self&&self.Object===Object&&self,Sa=ir||ka||Function("return this")(),_e=Object.prototype,Zr=_e.toString,za=Math.max,Ro=Math.min,Kr=function(){return Sa.Date.now()};function ht(F,ye,sr){var Dr,L,Ee,Cr,Ve,Ue,qr=0,Ea=!1,n=!1,y=!0;if(typeof F!="function")throw new TypeError(wa);ye=Lt(ye)||0,Yr(sr)&&(Ea=!!sr.leading,n="maxWait"in sr,Ee=n?za(Lt(sr.maxWait)||0,ye):Ee,y="trailing"in sr?!!sr.trailing:y);function Nr(se){var pr=Dr,Xr=L;return Dr=L=void 0,qr=se,Cr=F.apply(Xr,pr),Cr}function Rt(se){return qr=se,Ve=setTimeout(Jr,ye),Ea?Nr(se):Cr}function Mt(se){var pr=se-Ue,Xr=se-qr,Ia=ye-pr;return n?Ro(Ia,Ee-Xr):Ia}function Bt(se){var pr=se-Ue,Xr=se-qr;return Ue===void 0||pr>=ye||pr<0||n&&Xr>=Ee}function Jr(){var se=Kr();if(Bt(se))return Ta(se);Ve=setTimeout(Jr,Mt(se))}function Ta(se){return Ve=void 0,y&&Dr?Nr(se):(Dr=L=void 0,Cr)}function s(){Ve!==void 0&&clearTimeout(Ve),qr=0,Dr=Ue=L=Ve=void 0}function Bo(){return Ve===void 0?Cr:Ta(Kr())}function vt(){var se=Kr(),pr=Bt(se);if(Dr=arguments,L=this,Ue=se,pr){if(Ve===void 0)return Rt(Ue);if(n)return Ve=setTimeout(Jr,ye),Nr(Ue)}return Ve===void 0&&(Ve=setTimeout(Jr,ye)),Cr}return vt.cancel=s,vt.flush=Bo,vt}function Yr(F){var ye=typeof F;return!!F&&(ye=="object"||ye=="function")}function _a(F){return!!F&&typeof F=="object"}function Mo(F){return typeof F=="symbol"||_a(F)&&Zr.call(F)==Or}function Lt(F){if(typeof F=="number")return F;if(Mo(F))return Be;if(Yr(F)){var ye=typeof F.valueOf=="function"?F.valueOf():F;F=Yr(ye)?ye+"":ye}if(typeof F!="string")return F===0?F:+F;F=F.replace(Aa,"");var sr=jt.test(F);return sr||ie.test(F)?Ca(F.slice(2),sr?2:8):Lo.test(F)?Be:+F}di.exports=ht},95303(di,wa,Be){"use strict";Be.r(wa),Be.d(wa,{Arc:()=>iv,ArcAbstractFlexLayouts:()=>ye,ArcAbstractGapSizes:()=>_a,ArcAbstractIconSizes:()=>Yr,ArcAbstractOrientations:()=>sr,ArcAbstractPopoverActions:()=>ht,ArcAbstractPopoverModes:()=>Kr,ArcAbstractTextLayouts:()=>F,ArcAbstractTextOverflows:()=>Lt,ArcAbstractTextSizes:()=>Mo,ArcAvatar:()=>rn,ArcAvatarColors:()=>Ei,ArcAvatarColorsReserved:()=>Ic,ArcAvatarOverflow:()=>Ed,ArcAvatarOverflowSizes:()=>Pc,ArcAvatarPile:()=>ll,ArcAvatarPileSizes:()=>Bc,ArcAvatarSizes:()=>jc,ArcAvatarText:()=>tn,ArcAvatarTextGapSizes:()=>Lc,ArcAvatarTextOverflows:()=>Rc,ArcAvatarTextSizes:()=>Mc,ArcBadge:()=>Ud,ArcBadgeColors:()=>Pd,ArcBadgeContrasts:()=>Fd,ArcBadgeCount:()=>ru,ArcBadgeCountColors:()=>Od,ArcBadgeCountContrasts:()=>Xd,ArcBadgeCountShapes:()=>Qd,ArcBadgeCountSizes:()=>qd,ArcBadgeCountVariants:()=>Jd,ArcBadgeLayouts:()=>Nd,ArcBadgeSizes:()=>Dd,ArcBadgeVariants:()=>Hd,ArcButton:()=>Ie,ArcButtonDeprecatedVariants:()=>ls,ArcButtonHierarchies:()=>Ql,ArcButtonLayouts:()=>Yl,ArcButtonPopoverActions:()=>ed,ArcButtonSchemes:()=>Jl,ArcButtonShadows:()=>Xl,ArcButtonShapes:()=>Zl,ArcButtonSizes:()=>Kl,ArcButtonVariants:()=>ql,ArcCheckbox:()=>ms,ArcCheckboxBar:()=>fu,ArcCheckboxBarLayouts:()=>hu,ArcCheckboxBarOption:()=>pu,ArcCheckboxBarSizes:()=>vu,ArcCheckboxLayouts:()=>cu,ArcCheckboxSizes:()=>lu,ArcCheckboxVariants:()=>du,ArcDropdownMenu:()=>_n,ArcIcon:()=>D,ArcIconText:()=>Ye,ArcIconTextVariants:()=>Tl,ArcInputAction:()=>zu,ArcLabel:()=>it,ArcLabelContent:()=>st,ArcLabelLayouts:()=>au,ArcLink:()=>Iu,ArcLinkVariants:()=>Tu,ArcModal:()=>Qu,ArcModalAlert:()=>rh,ArcModalAlertDefaults:()=>Er,ArcModalAlertVariants:()=>Mu,ArcModalBackdropColors:()=>Bu,ArcModalBodyPaddings:()=>Pu,ArcModalCloseReasons:()=>Du,ArcModalCommonDefaults:()=>Re,ArcModalCommonVariants:()=>Lu,ArcModalConfirm:()=>_s,ArcModalConfirmDefaults:()=>Ur,ArcModalConfirmVariants:()=>Ru,ArcModalSchemes:()=>ju,ArcModalSizes:()=>Ou,ArcPopover:()=>ra,ArcPopoverActions:()=>ul,ArcPopoverAnchors:()=>nn,ArcPopoverBoundaries:()=>sn,ArcPopoverButton:()=>Jt,ArcPopoverDefaults:()=>Oe,ArcPopoverDensities:()=>Ni,ArcPopoverModes:()=>an,ArcPopoverSchemes:()=>on,ArcPopoverVariants:()=>Di,ArcPopoverVariantsWithOutline:()=>hl,ArcRadio:()=>Es,ArcRadioBar:()=>lh,ArcRadioBarLayouts:()=>ih,ArcRadioBarOption:()=>ch,ArcRadioBarSizes:()=>sh,ArcRadioLayouts:()=>ah,ArcRadioSizes:()=>oh,ArcSelect:()=>Fh,ArcSelectLayouts:()=>uh,ArcSelectSizes:()=>hh,ArcSelectVariants:()=>vh,ArcSwitch:()=>Wh,ArcSwitchLabelPositions:()=>_t,ArcSwitchSizes:()=>Hh,ArcSwitchStates:()=>me,ArcSystemAIGradients:()=>za,ArcSystemAlignments:()=>ka,ArcSystemColors:()=>Zr,ArcSystemGradients:()=>Ro,ArcSystemHierarchies:()=>Ca,ArcSystemLayouts:()=>ir,ArcSystemLineHeights:()=>Sa,ArcSystemSchemes:()=>Or,ArcSystemShadows:()=>Aa,ArcSystemShapes:()=>jt,ArcSystemSizes:()=>_e,ArcSystemSurfaces:()=>Lo,ArcSystemVariants:()=>ie,ArcTextAlignments:()=>ev,ArcTextBodyElements:()=>Gs,ArcTextBodySizes:()=>Xh,ArcTextBodyVariants:()=>Qh,ArcTextElements:()=>Zs,ArcTextHeadingElements:()=>Ws,ArcTextHeadingSizes:()=>Yh,ArcTextHeadingVariants:()=>Jh,ArcTextInput:()=>uv,ArcTextInputLayouts:()=>sv,ArcTextInputSizes:()=>cv,ArcTextInputTypes:()=>dv,ArcTextInputVariants:()=>lv,ArcTextKinds:()=>Gh,ArcTextLineHeights:()=>rv,ArcTextSchemes:()=>Zh,ArcTextSubheadingSizes:()=>qh,ArcTextTitleSizes:()=>Kh,ArcToast:()=>dc,ArcToastDefaults:()=>oc,ArcToastPlacements:()=>ac,ArcToastPopoverActions:()=>vv,ArcToastPopoverModes:()=>tc,ArcToastProgressBarVariants:()=>pv,ArcToastSchemes:()=>Xs,ArcToastSeverities:()=>Qs,ArcToastSizes:()=>ec,ArcToastVariants:()=>rc,ArcTooltip:()=>bn,ArcTooltipDefaults:()=>lr,SVGLogoArticulate:()=>Zo,SVGLogoProductAI:()=>Ko,SVGLogoProductPeek:()=>Yo,SVGLogoProductReach:()=>qo,SVGLogoProductReview:()=>Jo,SVGLogoProductRise:()=>Xo,SVGLogoProductStoryline:()=>Qo,SVGLogoProductStudio:()=>en,StorageType:()=>ma,adoptStyles:()=>H,anchorNameRegistry:()=>Wt,assignRef:()=>Cr,bindDelegatedEvents:()=>is,clamp:()=>Ve,createEmptyRect:()=>Mv,css:()=>s,cssFeatures:()=>ln,didElementRectChange:()=>Ea,extractTextFromReactNode:()=>Vt,formatAnchorName:()=>dn,getPreferredAnchorForTooltipId:()=>mn,handlePopover:()=>Vi,handleToast:()=>nc,hasNativeAnchorPositioning:()=>cn,isDifferent:()=>Ue,isObject:()=>Ji,isSame:()=>qr,isString:()=>Da,joinArray:()=>Ut,logError:()=>kl,logMessage:()=>Cl,logWarning:()=>Qi,makeHtmlId:()=>dl,mapDeprecated:()=>Dr,noTailAnchors:()=>Fi,normalizeAnchorName:()=>Gt,pickFromList:()=>L,pickFromListByKeys:()=>Ee,resolveTailMetrics:()=>Hi,shareAdoptedStyles:()=>zc,splitString:()=>Xi,syncAnchorName:()=>Ui,unbindDelegatedEvents:()=>Wl,useIsoLayoutEffect:()=>Ba,useStableId:()=>Ke,useStorage:()=>Rv});const Or=["auto","light","dark","inverse"],Aa=["none","sm","md","lg","xl"],Lo=["primary","secondary","inset","raised","floating"],jt=["circle","square","narrow"],ie=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Ca=["primary","secondary","tertiary","plain","link-style"],ir=["hug","fill","icon","gutter","inline"],ka=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Sa=["inherit","tight","standard","loose"],_e=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Zr=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],za=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Ro=[...za],Kr=["","auto","manual"],ht=["toggle","show","hide"],Yr=["inherit","xl","lg","md","sm","xs"],_a=["inherit","lg","md","sm"],Mo=["inherit","md","sm"],Lt=["inherit","wrap","truncate"],F=["gutter","inline"],ye=["hug","fill"],sr=["horizontal","vertical"],Dr=(e,r)=>r[e]||e,L=(e,r)=>e.filter(t=>r.includes(t)),Ee=(e,r)=>r.filter(t=>e.includes(t)),Cr=(e,r)=>{e&&(typeof e=="function"?e(r):e.current=r)},Ve=(e,r=0,t=100)=>Math.min(Math.max(e,r),t),Ue=(e,r)=>e!==r,qr=(e,r)=>e===r,Ea=({a:e,b:r})=>Ue(e?.top,r?.top)||Ue(e?.left,r?.left)||Ue(e?.width,r?.width)||Ue(e?.height,r?.height);var n=Be(16881),y=Be(26372);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr=globalThis,Rt=Nr.ShadowRoot&&(Nr.ShadyCSS===void 0||Nr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Bt=new WeakMap;class Jr{constructor(r,t,a){if(this._$cssResult$=!0,a!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(Rt&&r===void 0){const a=t!==void 0&&t.length===1;a&&(r=Bt.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),a&&Bt.set(t,r))}return r}toString(){return this.cssText}}const Ta=e=>new Jr(typeof e=="string"?e:e+"",void 0,Mt),s=(e,...r)=>{const t=e.length===1?e[0]:r.reduce(((a,o,c)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[c+1]),e[0]);return new Jr(t,e,Mt)},Bo=(e,r)=>{if(Rt)e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of r){const a=document.createElement("style"),o=Nr.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=t.cssText,e.appendChild(a)}},vt=Rt?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const a of r.cssRules)t+=a.cssText;return Ta(t)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:se,defineProperty:pr,getOwnPropertyDescriptor:Xr,getOwnPropertyNames:Ia,getOwnPropertySymbols:bc,getPrototypeOf:yc}=Object,ja=globalThis,ui=ja.trustedTypes,xc=ui?ui.emptyScript:"",wc=ja.reactiveElementPolyfillSupport,Pt=(e,r)=>e,Po={toAttribute(e,r){switch(r){case Boolean:e=e?xc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},hi=(e,r)=>!se(e,r),vi={attribute:!0,type:String,converter:Po,reflect:!1,useDefault:!1,hasChanged:hi};Symbol.metadata??=Symbol("metadata"),ja.litPropertyMetadata??=new WeakMap;class pt extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=vi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(r,a,t);o!==void 0&&pr(this.prototype,r,o)}}static getPropertyDescriptor(r,t,a){const{get:o,set:c}=Xr(this.prototype,r)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){const u=o?.call(this);c?.call(this,i),this.requestUpdate(r,u,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??vi}static _$Ei(){if(this.hasOwnProperty(Pt("elementProperties")))return;const r=yc(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pt("properties"))){const t=this.properties,a=[...Ia(t),...bc(t)];for(const o of a)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[a,o]of t)this.elementProperties.set(a,o)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const o=this._$Eu(t,a);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const a=new Set(r.flat(1/0).reverse());for(const o of a)t.unshift(vt(o))}else r!==void 0&&t.push(vt(r));return t}static _$Eu(r,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(r.set(a,this[a]),delete this[a]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,t,a){this._$AK(r,a)}_$ET(r,t){const a=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,a);if(o!==void 0&&a.reflect===!0){const c=(a.converter?.toAttribute!==void 0?a.converter:Po).toAttribute(t,a.type);this._$Em=r,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$Em=null}}_$AK(r,t){const a=this.constructor,o=a._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const c=a.getPropertyOptions(o),i=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:Po;this._$Em=o;const u=i.fromAttribute(t,c.type);this[o]=u??this._$Ej?.get(o)??u,this._$Em=null}}requestUpdate(r,t,a){if(r!==void 0){const o=this.constructor,c=this[r];if(a??=o.getPropertyOptions(r),!((a.hasChanged??hi)(c,t)||a.useDefault&&a.reflect&&c===this._$Ej?.get(r)&&!this.hasAttribute(o._$Eu(r,a))))return;this.C(r,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:a,reflect:o,wrapped:c},i){a&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,i??t??this[r]),c!==!0||i!==void 0)||(this._$AL.has(r)||(this.hasUpdated||a||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,c]of a){const{wrapped:i}=c,u=this[o];i!==!0||this._$AL.has(o)||u===void 0||this.C(o,void 0,c,u)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach((a=>a.hostUpdate?.())),this.update(t)):this._$EM()}catch(a){throw r=!1,this._$EM(),a}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(r){}firstUpdated(r){}}pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[Pt("elementProperties")]=new Map,pt[Pt("finalized")]=new Map,wc?.({ReactiveElement:pt}),(ja.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=globalThis,La=Oo.trustedTypes,pi=La?La.createPolicy("lit-html",{createHTML:e=>e}):void 0,Do="$lit$",kr=`lit$${Math.random().toFixed(9).slice(2)}$`,No="?"+kr,Ac=`<${No}>`,Qr=document,Ot=()=>Qr.createComment(""),Dt=e=>e===null||typeof e!="object"&&typeof e!="function",Fo=Array.isArray,fi=e=>Fo(e)||typeof e?.[Symbol.iterator]=="function",Ho=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$i=/-->/g,gi=/>/g,et=RegExp(`>|${Ho}(?:([^\\s"'>=/]+)(${Ho}*=${Ho}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mi=/'/g,bi=/"/g,yi=/^(?:script|style|textarea|title)$/i,Vo=e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),Ov=Vo(1),Dv=Vo(2),Nv=Vo(3),ft=Symbol.for("lit-noChange"),pe=Symbol.for("lit-nothing"),xi=new WeakMap,rt=Qr.createTreeWalker(Qr,129);function wi(e,r){if(!Fo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pi!==void 0?pi.createHTML(r):r}const Ai=(e,r)=>{const t=e.length-1,a=[];let o,c=r===2?"<svg>":r===3?"<math>":"",i=Nt;for(let u=0;u<t;u++){const d=e[u];let h,v,f=-1,p=0;for(;p<d.length&&(i.lastIndex=p,v=i.exec(d),v!==null);)p=i.lastIndex,i===Nt?v[1]==="!--"?i=$i:v[1]!==void 0?i=gi:v[2]!==void 0?(yi.test(v[2])&&(o=RegExp("</"+v[2],"g")),i=et):v[3]!==void 0&&(i=et):i===et?v[0]===">"?(i=o??Nt,f=-1):v[1]===void 0?f=-2:(f=i.lastIndex-v[2].length,h=v[1],i=v[3]===void 0?et:v[3]==='"'?bi:mi):i===bi||i===mi?i=et:i===$i||i===gi?i=Nt:(i=et,o=void 0);const $=i===et&&e[u+1].startsWith("/>")?" ":"";c+=i===Nt?d+Ac:f>=0?(a.push(h),d.slice(0,f)+Do+d.slice(f)+kr+$):d+kr+(f===-2?u:$)}return[wi(e,c+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),a]};class Ft{constructor({strings:r,_$litType$:t},a){let o;this.parts=[];let c=0,i=0;const u=r.length-1,d=this.parts,[h,v]=Ai(r,t);if(this.el=Ft.createElement(h,a),rt.currentNode=this.el.content,t===2||t===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=rt.nextNode())!==null&&d.length<u;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Do)){const p=v[i++],$=o.getAttribute(f).split(kr),w=/([.?@])?(.*)/.exec(p);d.push({type:1,index:c,name:w[2],strings:$,ctor:w[1]==="."?ki:w[1]==="?"?Si:w[1]==="@"?zi:Ht}),o.removeAttribute(f)}else f.startsWith(kr)&&(d.push({type:6,index:c}),o.removeAttribute(f));if(yi.test(o.tagName)){const f=o.textContent.split(kr),p=f.length-1;if(p>0){o.textContent=La?La.emptyScript:"";for(let $=0;$<p;$++)o.append(f[$],Ot()),rt.nextNode(),d.push({type:2,index:++c});o.append(f[p],Ot())}}}else if(o.nodeType===8)if(o.data===No)d.push({type:2,index:c});else{let f=-1;for(;(f=o.data.indexOf(kr,f+1))!==-1;)d.push({type:7,index:c}),f+=kr.length-1}c++}}static createElement(r,t){const a=Qr.createElement("template");return a.innerHTML=r,a}}function tt(e,r,t=e,a){if(r===ft)return r;let o=a!==void 0?t._$Co?.[a]:t._$Cl;const c=Dt(r)?void 0:r._$litDirective$;return o?.constructor!==c&&(o?._$AO?.(!1),c===void 0?o=void 0:(o=new c(e),o._$AT(e,t,a)),a!==void 0?(t._$Co??=[])[a]=o:t._$Cl=o),o!==void 0&&(r=tt(e,o._$AS(e,r.values),o,a)),r}class Ci{constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:a}=this._$AD,o=(r?.creationScope??Qr).importNode(t,!0);rt.currentNode=o;let c=rt.nextNode(),i=0,u=0,d=a[0];for(;d!==void 0;){if(i===d.index){let h;d.type===2?h=new $t(c,c.nextSibling,this,r):d.type===1?h=new d.ctor(c,d.name,d.strings,this,r):d.type===6&&(h=new _i(c,this,r)),this._$AV.push(h),d=a[++u]}i!==d?.index&&(c=rt.nextNode(),i++)}return rt.currentNode=Qr,o}p(r){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(r,a,t),t+=a.strings.length-2):a._$AI(r[t])),t++}}class $t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,a,o){this.type=2,this._$AH=pe,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=tt(this,r,t),Dt(r)?r===pe||r==null||r===""?(this._$AH!==pe&&this._$AR(),this._$AH=pe):r!==this._$AH&&r!==ft&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):fi(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==pe&&Dt(this._$AH)?this._$AA.nextSibling.data=r:this.T(Qr.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:a}=r,o=typeof a=="number"?this._$AC(r):(a.el===void 0&&(a.el=Ft.createElement(wi(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(t);else{const c=new Ci(o,this),i=c.u(this.options);c.p(t),this.T(i),this._$AH=c}}_$AC(r){let t=xi.get(r.strings);return t===void 0&&xi.set(r.strings,t=new Ft(r)),t}k(r){Fo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,o=0;for(const c of r)o===t.length?t.push(a=new $t(this.O(Ot()),this.O(Ot()),this,this.options)):a=t[o],a._$AI(c),o++;o<t.length&&(this._$AR(a&&a._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const a=r.nextSibling;r.remove(),r=a}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class Ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,a,o,c){this.type=1,this._$AH=pe,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=pe}_$AI(r,t=this,a,o){const c=this.strings;let i=!1;if(c===void 0)r=tt(this,r,t,0),i=!Dt(r)||r!==this._$AH&&r!==ft,i&&(this._$AH=r);else{const u=r;let d,h;for(r=c[0],d=0;d<c.length-1;d++)h=tt(this,u[a+d],t,d),h===ft&&(h=this._$AH[d]),i||=!Dt(h)||h!==this._$AH[d],h===pe?r=pe:r!==pe&&(r+=(h??"")+c[d+1]),this._$AH[d]=h}i&&!o&&this.j(r)}j(r){r===pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class ki extends Ht{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===pe?void 0:r}}class Si extends Ht{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==pe)}}class zi extends Ht{constructor(r,t,a,o,c){super(r,t,a,o,c),this.type=5}_$AI(r,t=this){if((r=tt(this,r,t,0)??pe)===ft)return;const a=this._$AH,o=r===pe&&a!==pe||r.capture!==a.capture||r.once!==a.once||r.passive!==a.passive,c=r!==pe&&(a===pe||o);o&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class _i{constructor(r,t,a){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(r){tt(this,r)}}const Fv={M:Do,P:kr,A:No,C:1,L:Ai,R:Ci,D:fi,V:tt,I:$t,H:Ht,N:Si,U:zi,B:ki,F:_i},Cc=Oo.litHtmlPolyfillSupport;Cc?.(Ft,$t),(Oo.litHtmlVersions??=[]).push("3.3.1");const kc=(e,r,t)=>{const a=t?.renderBefore??r;let o=a._$litPart$;if(o===void 0){const c=t?.renderBefore??null;a._$litPart$=o=new $t(r.insertBefore(Ot(),c),c,void 0,t??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=globalThis;class Ra extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=kc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ft}}Ra._$litElement$=!0,Ra.finalized=!0,Uo.litElementHydrateSupport?.({LitElement:Ra});const Sc=Uo.litElementPolyfillSupport;Sc?.({LitElement:Ra});const Hv={_$AK:(e,r,t)=>{e._$AK(r,t)},_$AL:e=>e._$AL};(Uo.litElementVersions??=[]).push("4.2.1");const Wo={};function H(e,r){if(typeof document<"u"&&r?.styleSheet){const t=Wo[e];Wo[e]=r.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(a=>a!==t),r.styleSheet]}}function zc(e){const r=Object.values(Wo),t=document.adoptedStyleSheets.filter(a=>r.includes(a));if(e.adoptedStyleSheets){const a=t.filter(o=>!e.adoptedStyleSheets.includes(o));e.adoptedStyleSheets=[...e.adoptedStyleSheets,...a]}}const _c=e=>e?.trim().charAt(0)??void 0,Ec=(e,r)=>{let t=0;const a=Math.min(e.length,50);for(let o=0;o<a;o+=1)t=(t+e.charCodeAt(o))%(r??33);return t},Tc=(e,r,t)=>r?.length?e?.trim()===""?t||r[0]:r[Ec(e,r.length)]||t||r[0]:t,Ei=L(Zr,["blue","orange","mint","red","yellow","green","maroon","purple"]),Ic=L(Zr,["neutral","white","black"]),Ma=L(_e,["lg","md","sm","xs"]),jc=[...Ma,"profile-sm","profile-md","profile-lg"],Lc=_a,Rc=Lt,Mc=Ma,Bc=Ma,Pc=Ma,x=s`--arc•input•mask`,l=s`--arc•size`,g=s`--arc•space`,G=s`--arc•avatar`,fe=s`${G}•chars`,Go=s`

  &[data-size=lg] {
    ${G}•font•size: var(${l}•16);
    ${G}•size: 2.5em; /* target: 40px @ 100% */
    ${fe}•1: var(${l}•16);
    ${fe}•2: var(${l}•14);
    ${fe}•3: var(${l}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${G}•font•size: var(${l}•14);
    ${G}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${fe}•1: var(${l}•14);
    ${fe}•2: var(${l}•12);
    ${fe}•3: var(${l}•10);
  }

  &[data-size=sm] {
    ${G}•font•size: var(${l}•12);
    ${G}•size: 2em; /* target: 24px @ 100% */
    ${fe}•1: var(${l}•12);
    ${fe}•2: var(${l}•10);
    ${fe}•3: var(${l}•8);
  }

  &[data-size=xs] {
    ${G}•font•size: var(${l}•10);
    ${G}•size: 2em; /* target: 20px @ 100% */
    ${fe}•1: var(${l}•10);
    ${fe}•2: var(${l}•8);
    ${fe}•3: var(${l}•6);
  }

`,Oc=s`

  &[data-size=profile-lg] {
    ${G}•font•size: var(${l}•40);
    ${G}•size: 4em;
  }

  &[data-size=profile-md] {
    ${G}•font•size: var(${l}•32);
    ${G}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${G}•font•size: var(${l}•28);
    ${G}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Ti=s`

  [arc-avatar] {
    ${G}•font•size: inherit;
    ${G}•size: inherit;
    ${fe}•1: inherit;
    ${fe}•2: inherit;
    ${fe}•3: inherit;
  }

`,at=s`${G}•fg`,Pe=s`${G}•bg`,Dc=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${at}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Pe}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Pe}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Pe}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Pe}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Pe}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Pe}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Pe}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Pe}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${at}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Pe}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${at}: var(--arc-color-fg-secondary);
      ${Pe}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${at}: var(--arc-color-mono-black);
      ${Pe}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Go}
    ${Oc}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${G}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${G}•size));
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
      --arc-button-font-size: var(${fe}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${fe}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${fe}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${G}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Pe}));
      --arc-button-color: var(--arc-avatar-color, var(${at}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${G}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${at}: transparent;
        ${Pe}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Pe});
      color: var(${at});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
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
      visibility: var(${G}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${G}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Nc=({children:e,initial:r,color:t,...a})=>(0,n.jsx)("span",{...a,"data-element":"initial","data-color":t,children:e||r}),Fc=({isLoaded:e,hasError:r,onLoad:t,onError:a,...o})=>{const c=!e&&""||void 0,i=r&&""||void 0,u=!e||r||void 0;return(0,n.jsx)("img",{...o,hidden:u,"data-element":"image","data-not-loaded":c,"data-has-error":i,onLoad:t,onError:a})},Zo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Ko=e=>(0,n.jsxs)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),Yo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),qo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Jo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Xo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Qo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),en=e=>(0,n.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Hc;const Vc="fa-width-auto",Ii="fa-fw",Uc="arc-fw",ji="arc-aw",Wc=e=>typeof e=="number"?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,Gc={"arc-svg logo-articulate":(0,n.jsx)(Zo,{}),"arc-svg product-ai":(0,n.jsx)(Ko,{}),"arc-svg product-peek":(0,n.jsx)(Yo,{}),"arc-svg product-reach":(0,n.jsx)(qo,{}),"arc-svg product-review":(0,n.jsx)(Jo,{}),"arc-svg product-rise":(0,n.jsx)(Xo,{}),"arc-svg product-storyline":(0,n.jsx)(Qo,{}),"arc-svg product-studio":(0,n.jsx)(en,{})},Wv=e=>e&&e.length>0&&e?.includes("arc-svg")?Gc[e]:Hc("span",{className:e}),Li=e=>{const r=e.includes(Vc),t=e.includes(Ii),a=e.includes(Uc),o=e.includes(ji);return{hasFaAutoWidth:r,hasFaFixedWidth:t,hasArcFixedWidth:a,hasArcAutoWidth:o}},Ri=e=>((0,y.isValidElement)(e)&&e.type===D?e.props.icon:e)??void 0,Mi=e=>{const r=Ri(e);if(typeof r!="string")return r;const{hasFaFixedWidth:t,hasArcFixedWidth:a,hasArcAutoWidth:o}=Li(r);return!t&&!a&&!o?`${r} ${ji}`:r},Zc=e=>{const r=Ri(e);if(typeof r!="string")return r;let t=r;const{hasArcFixedWidth:a,hasFaFixedWidth:o}=Li(t);return a&&!o&&(t=`${t} ${Ii}`),t},Kc=s`--arc•icon`,Sr=s`${Kc}•fg`,Yc=s`
@layer arc-components {

[arc-icon] {
  ${Sr}: currentcolor;

  color: var(--arc-icon-color, var(${Sr}));
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
      fill: var(--arc-icon-color, var(${Sr}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand] {
    ${Sr}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Sr}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Sr}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Sr}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error] {
    ${Sr}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Sr}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,qc=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-articulate arc-aw",color:e?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":e?.["aria-label"]||"Articulate Logo"}),Jc=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":e?.["aria-label"]||"Articulate AI Logo",gradient:e?.gradient||"ai"}),Xc=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-peek arc-aw",color:e?.color||"var(--arc-color-logo-peek, #497add)","aria-label":e?.["aria-label"]||"Articulate Peek Logo"}),Qc=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-reach arc-aw",color:e?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":e?.["aria-label"]||"Articulate Reach Logo"}),el=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-review arc-aw",color:e?.color||"var(--arc-color-logo-review, #35b062)","aria-label":e?.["aria-label"]||"Articulate Review Logo"}),rl=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-rise arc-aw",color:e?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":e?.["aria-label"]||"Articulate Rise Logo"}),tl=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-storyline arc-aw",color:e?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":e?.["aria-label"]||"Articulate Storyline Logo"}),al=e=>(0,n.jsx)(D,{...e,icon:"fa-kit fa-product-badge-studio arc-aw",color:e?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":e?.["aria-label"]||"Articulate Studio Logo"}),D=({children:e,icon:r="fa-regular fa-circle-dashed",color:t,size:a,style:o,gradient:c,...i})=>{const u={...o,"--arc-icon-size":Wc(a),"--arc-icon-color":t},d=!!(i["aria-label"]||i["aria-labelledby"]),h=Zc(r),v=typeof h=="string"&&h.length>0?(0,n.jsx)("span",{className:h}):h;return(0,n.jsx)("span",{"aria-hidden":!d||void 0,...i,"arc-icon":"",style:u,"arc-gradient":c,children:e||v})};H("ArcIcon",Yc),D.Articulate=qc,D.AI=Jc,D.Peek=Xc,D.Reach=Qc,D.Review=el,D.Rise=rl,D.Storyline=tl,D.Studio=al,D.SVGArticulate=Zo,D.SVGAI=Ko,D.SVGPeek=Yo,D.SVGReach=qo,D.SVGReview=Jo,D.SVGRise=Xo,D.SVGStoryline=Qo,D.SVGStudio=en;const ol=({children:e,icon:r,color:t,...a})=>(0,n.jsx)("span",{...a,"data-element":"anonymous","data-color":"neutral",children:e||(0,n.jsx)(D,{icon:r})}),Bi="blue",Pi="neutral",nl="fa-solid fa-user arc-aw",rn=(0,y.forwardRef)(({children:e,size:r,color:t,isActive:a=!0,isAnonymous:o,alt:c,src:i,name:u,email:d,...h},v)=>{const[f,p]=(0,y.useState)(!1),[$,w]=(0,y.useState)(!1),k=N=>{p(!0),w(!1),h.onLoad?.(N)},I=N=>{p(!1),w(!0),h.onError?.(N)},M=_c(u||d),_=!!M,E=o||(!f||$)&&!_,S=!E&&!!i&&!$||void 0,z=(E&&Pi||void 0)??(t||void 0)??Tc(String(d||u||void 0),Ei,Bi)??Bi,P={src:i,alt:c,isLoaded:f,hasError:$,onLoad:k,onError:I};return(0,y.useEffect)(()=>{E&&p(!1)},[E]),(0,n.jsx)("span",{...h,ref:v,"arc-avatar":"","data-is-inactive":!a||void 0,"data-size":r,"aria-label":(h.title??u??d)||void 0,children:e||(E?(0,n.jsx)(ol,{icon:nl,color:Pi}):(0,n.jsxs)(n.Fragment,{children:[S&&(0,n.jsx)(Fc,{...P}),_&&(0,n.jsx)(Nc,{initial:M,color:z})]}))})});H("ArcAvatar",Dc);const Ae=s`${G}•text`,ot=s`${G}•subtext`,gt=s`${G}•gap`,il=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Ae}•font•size: var(${l}•14);
    ${ot}•font•size: var(${l}•12);
    ${gt}: var(${l}•8);

    ${Ae}•overflow: unset;
    ${Ae}•text•overflow: unset;
    ${Ae}•white•space: unset;

    &[data-overflow=truncate] {
      ${Ae}•overflow: hidden;
      ${Ae}•text•overflow: ellipsis;
      ${Ae}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Ae}•font•size: 1em;
      ${ot}•font•size: 0.875em;
      ${gt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Ae}•font•size: var(--arc-font-size-14);
      ${ot}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Ae}•font•size: var(--arc-font-size-14);
      ${ot}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Ae}•font•size: var(--arc-font-size-14);
      ${ot}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Ae}•font•size: var(--arc-font-size-12);
      ${ot}•font•size: var(--arc-font-size-12);
      ${gt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${gt}: var(${l}•12); }
    &[data-gap=sm] { ${gt}: var(${l}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Ae}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${gt});
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
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${ot}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Ae}•overflow);
      text-overflow: var(${Ae}•text•overflow);
      white-space: var(${Ae}•white•space);
    }
  }

}
`,sl="Anonymous",tn=({children:e,avatar:r={},subtext:t,size:a,gapSize:o,overflow:c,isStrong:i,...u})=>{const d=r.anonymousName||sl,h=r.name||r.email||r.src,v=r.name||r.email,f=r.isAnonymous||!h,p=e||f?d:v,$=o!=="inherit"?o:void 0,w=c!=="inherit"?c:void 0;return(0,n.jsxs)("span",{...u,"arc-avatar-text":"","data-gap":$,"data-overflow":w,"is-strong":i?"":void 0,children:[(0,n.jsx)(rn,{...r,isAnonymous:f,size:a}),(0,n.jsxs)("span",{"data-element":"text",children:[p,t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:t})]})]})]})};H("ArcAvatarText",il);const cl=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Go}
    ${Ti}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,ll=({size:e="md",...r})=>(0,n.jsx)("div",{...r,"arc-avatar-pile":"","data-size":e});H("ArcAvatarPile",cl);const Vt=e=>typeof e=="string"?e:typeof e=="number"?e.toString():Array.isArray(e)?e.map(Vt).join(""):(0,y.isValidElement)(e)?Vt(e.props.children):"",Oi={},dl=(e="id")=>{const r=(Oi[e]??0)+1;return Oi[e]=r,`${e}-${r}`},Ke=(e,r="id")=>{const t=(0,y.useId)();return e??`${r}-${t}`},an=[...Kr],on=[...Or],ul=[...ht],Di=L(ie,["common"]),hl=L(ie,["ai","brand"]),nn=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],sn=["ignore","flip"],Ni=["compact","comfortable"],Ut=(e,r=1/0,t=" ")=>[...e].flat(r)?.filter(Boolean)?.join(t),Oe={popover:an[0],anchorAt:nn[13],boundary:sn[0],tryFallbacks:!1,variant:Di[0],scheme:on[0],density:Ni[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},cn=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),vl=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),ln={canAnchor:cn(),canAnchoredContainers:vl()},Fi=["center","nw-corner","ne-corner","se-corner","sw-corner"],Hi=({canHaveTail:e,tailSize:r})=>{if(!e)return{cssTailVar:"",floatingTailPx:0};const t=Math.abs(Number(r||Oe.tailSize)),a=t>0?t:Oe.tailSize;return{cssTailVar:a===Oe.tailSize?"":`${a}px`,floatingTailPx:a}},Ba=typeof window>"u"?y.useEffect:y.useLayoutEffect,Vi=(e,r="toggle")=>{const t=document.getElementById(e);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[r]()},Wt=new WeakMap,dn=e=>{const r=String(e??"").trim();if(r==="none")return"none";let t=r.replace(/[^\w-]/g,"-");for(;t.startsWith("-");)t=t.slice(1);for(;t.endsWith("-");)t=t.slice(0,-1);return t?`--${t}`:"--"},Gt=e=>{const r=dn(e);return r==="none"?null:r},Ui=(e,r)=>{const t=Gt(r);if(!t)return()=>{};let a=Wt.get(e);return a||(a=new Set,Wt.set(e,a)),a.has(t)?()=>{}:(a.add(t),e.style.setProperty("anchor-name",Ut([...a],1/0,", ")),()=>{const o=Wt.get(e);if(o){if(o.delete(t),o.size===0){Wt.delete(e),e.style.removeProperty("anchor-name");return}e.style.setProperty("anchor-name",Ut([...o],1/0,", "))}})},Wi=e=>e==="start"||e==="end"?e:"center",pl=e=>{const r=e.split("-")[0];return r==="top"||r==="right"||r==="bottom"||r==="left"?r:null},Gi=e=>{const r=pl(e),t=Wi(e.split("-")[1]);switch(r){case"top":return{block:"start",inline:t};case"bottom":return{block:"end",inline:t};case"left":return{block:t,inline:"start"};case"right":return{block:t,inline:"end"};default:return{block:"center",inline:"center"}}},Zi=(e,r)=>e!=="center"&&r!=="center"&&e!==r,Ki=(e,r)=>{const t=Gi(e),a=Gi(r),o=Zi(t.block,a.block),c=Zi(t.inline,a.inline);return o&&c?"flip-block-inline":o?"flip-block":c?"flip-inline":""},fl={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Yi=e=>{e.style.removeProperty("top"),e.style.removeProperty("left"),e.style.removeProperty("position"),e.style.removeProperty("margin"),delete e.dataset.fallbacks},$l=[{test:(e,r,t)=>e==="y"&&r.includes("top")&&t.includes("top"),value:-1},{test:(e,r,t)=>e==="y"&&r.includes("top")&&t.includes("bottom"),value:-1},{test:(e,r,t)=>e==="y"&&r.includes("bottom")&&t.includes("top"),value:1},{test:(e,r,t)=>e==="x"&&r.includes("left")&&t.includes("left"),value:-1},{test:(e,r,t)=>e==="x"&&r.includes("left")&&t.includes("right"),value:-1},{test:(e,r,t)=>e==="x"&&r.includes("right")&&t.includes("left"),value:1}],qi=(e,r,t)=>$l.find(a=>a.test(e,r,t))?.value||0,gl=({anchorEl:e,popoverEl:r,anchorAt:t,tryFallbacks:a,offsetPx:o,tailSizePx:c,hasTail:i,isOpen:u})=>{Ba(()=>{if(!(u&&!cn()&&!!e&&!!r)){r&&Yi(r);return}const h=e,v=r,f=fl[t];let p=!0,$;return(async()=>{try{const{autoUpdate:I,computePosition:M,flip:_,offset:E}=await Be.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Be.bind(Be,40153));if(!p)return;const S=i?Math.max(0,c)*(Math.sqrt(2)/2):0,z=[E(o)];a&&z.push(_({fallbackStrategy:"bestFit"}));const P=async()=>{try{const N=await M(h,v,{placement:f,strategy:"fixed",middleware:z}),W=N.x+S*qi("x",N.placement,f),J=N.y+S*qi("y",N.placement,f);if(v.style.left=`${W}px`,v.style.top=`${J}px`,!i||!a){delete v.dataset.fallbacks;return}const te=Ki(f,N.placement);te?v.dataset.fallbacks=te:delete v.dataset.fallbacks}catch{}};$=I(h,v,P),await P()}catch{}})(),()=>{p=!1,$?.(),Yi(v)}},[t,e,i,u,o,r,c,a])},Pa=1,mt=2,ml=[{test:(e,r)=>r.top>=e.bottom+Pa,value:"bottom"},{test:(e,r)=>r.bottom<=e.top-Pa,value:"top"},{test:(e,r)=>r.left>=e.right+Pa,value:"right"},{test:(e,r)=>r.right<=e.left-Pa,value:"left"}],Zt=e=>{delete e.dataset.fallbacks};let un;const bl=()=>(un||(un=Be.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Be.bind(Be,40153))),un),Oa=e=>({x:e.left+e.width/2,y:e.top+e.height/2}),yl=(e,r,t,a)=>{const o=Oa(r),c=Oa(t);if(e==="top"||e==="bottom"){const h=Math.abs(a==="rtl"?t.right-r.right:t.left-r.left),v=Math.abs(a==="rtl"?t.left-r.left:t.right-r.right),f=Math.abs(c.x-o.x);return Math.abs(h-v)<=mt&&f<=mt||f+mt<Math.min(h,v)?"center":h<=v?"start":"end"}const i=Math.abs(t.top-r.top),u=Math.abs(t.bottom-r.bottom),d=Math.abs(c.y-o.y);return Math.abs(i-u)<=mt&&d<=mt||d+mt<Math.min(i,u)?"center":i<=u?"start":"end"},xl=(e,r,t,a)=>{const o=ml.find(d=>d.test(r,t));let c;if(o)c=o.value;else{const d=Oa(r),h=Oa(t),v=h.y-d.y,f=h.x-d.x,p=Math.min(r.height,t.height)*.1;Math.abs(v)>p?c=v>=0?"bottom":"top":c=f>=0?"right":"left"}if(Wi(e.split("-")[1])==="center")return c;const u=yl(c,r,t,a);return`${c}-${u}`},wl=({anchorEl:e,popoverEl:r,anchorAt:t,tryFallbacks:a,isOpen:o,hasTail:c})=>{Ba(()=>{if(!r||!ln.canAnchor)return;if(!c||!a||!o||ln.canAnchoredContainers||!e){Zt(r);return}const i=t;if(i==="center"||i.includes("corner")){Zt(r);return}const u=e,d=r;let h=!0,v;const f=()=>{const $=u.getBoundingClientRect(),w=d.getBoundingClientRect(),k=getComputedStyle(u).direction==="rtl"?"rtl":"ltr",I=xl(i,$,w,k),M=Ki(i,I);i===I?Zt(d):M?d.dataset.fallbacks=M:Zt(d)};return(async()=>{try{const{autoUpdate:w}=await bl();if(!h)return;v=w(u,d,f),f()}catch{}})(),()=>{h=!1,v?.(),Zt(d)}},[t,e,c,o,r,a])},Da=e=>typeof e=="string",Ji=e=>e!==null&&typeof e=="object",Xi=(e,r=" ")=>e.split(r).map(t=>t.trim()).filter(Boolean),Al=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,hn=(0,y.forwardRef)(({progress:e,...r},t)=>(0,n.jsxs)("svg",{...r,ref:t,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":e??""},children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));hn.displayName="ArcSpinner",H("ArcSpinner",Al);const Cl=(...e)=>console.log(...e),Qi=(...e)=>console.warn(...e),kl=(...e)=>console.error(...e),bt=s`--arc•icon•text`,Kt=s`${bt}•font•size`,es=s`${bt}•icon`,vn=s`${bt}•text`,rs=s`${bt}•subtext`,cr=s`${bt}•fg`,zr=s`${bt}•gap`,Fr=s`${es}•size`,Na=s`${es}•vertical•align`,Yt=s`${vn}•overflow`,Fa=s`${vn}•text•overflow`,Ha=s`${vn}•white•space`,Va=s`${rs}•font•size`,ts=s`${rs}•fg`,Sl=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${cr}: currentcolor;
  }

  &[data-variant=primary] {
    ${cr}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${cr}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${cr}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${cr}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${cr}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${cr}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${cr}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${cr}: var(--arc-color-fg-critical-mid);
  }

`,zl=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Kt}: 1em;
    ${Va}: 0.75em;
    ${Fr}: 1em;
    ${zr}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Kt}: var(--arc-font-size-14);
    ${Va}: var(--arc-font-size-12);
    ${zr}: var(${g}•3);
  }

  &[data-size=sm] {
    ${Kt}: var(--arc-font-size-12);
    ${Va}: var(--arc-font-size-12);
    ${zr}: var(${g}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${zr}: var(${g}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${zr}: var(${g}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${zr}: var(${g}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Fr}: var(${l}•24); }
  &[icon-size=lg] { ${Fr}: var(${l}•20); }
  &[icon-size=md] { ${Fr}: var(${l}•16); }
  &[icon-size=sm] { ${Fr}: var(${l}•14); }
  &[icon-size=xs] { ${Fr}: var(${l}•12); }
`,_l=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${ts}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${cr}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Fr}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Yt}: unset;
    ${Fa}: unset;
    ${Ha}: unset;

    ${Na}: calc((var(${Fr}) - var(${Kt})) / -2);

    &:has(svg) { ${Na}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Yt}: visible;
    ${Fa}: unset;
    ${Ha}: normal;

    &[data-overflow=truncate] {
      ${Yt}: hidden;
      ${Fa}: ellipsis;
      ${Ha}: nowrap;
    }
  }

`,El=s`
@layer arc-components {

  [arc-icon-text] {
    ${Sl}
    ${zl}
    ${_l}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Kt}));
    color: var(--arc-icon-text-text-color, var(${cr}));
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
      gap: var(--arc-icon-text-gap, var(${zr}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Yt}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Va}));
        color: var(--arc-icon-text-subtext-color, var(${ts}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Yt}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Fa}));
        white-space: var(--arc-icon-text-white-space, var(${Ha}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${Na}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${zr})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${zr})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${Na}: text-bottom;
      }
    }
  }
}

`,Tl=L(ie,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Ye=({children:e,layout:r="gutter",size:t="inherit",variant:a="inherit",tag:o="span",icon:c,iconTooltip:i,text:u,subtext:d,gradient:h,overflow:v,iconSize:f,gapSize:p,isFlipped:$=!1,isStrong:w=!1,...k})=>{const I=e||u,M=!!c,_=!!I,E=r==="gutter",S=r==="inline",z=M&&(!$||E),P=M&&_&&$&&S,N=!!f&&f!=="inherit",W=N&&Yr.includes(f)?f:void 0,J=N&&!Yr.includes(f)?f:void 0,te=p!=="inherit"?p:void 0,oe=v!=="inherit"?v:void 0,ce=Mi(c),le=typeof ce=="string"?(0,n.jsx)(D,{icon:ce,size:J,gradient:h}):ce,xe=i?(0,n.jsx)(bn,{text:i,children:le}):le;return(0,n.jsxs)(o,{...k,"arc-icon-text":"","data-variant":a,"data-layout":r,"data-overflow":oe,"data-size":t,"data-gap":te,"icon-size":W,"is-flipped":$?"":void 0,"is-strong":w?"":void 0,children:[z&&(0,n.jsx)("span",{"data-element":"icon",children:xe}),_&&(0,n.jsxs)("span",{"data-element":"text",children:[I,!!d&&(E?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:d})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:d})]}))]}),P&&(0,n.jsx)("span",{"data-element":"icon",children:xe})]})};H("ArcIconText",El);const lr={...Oe,popover:an[2],anchorAt:nn[2],boundary:sn[1],tryFallbacks:!0,scheme:on[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0};let Ua=!1;const Il=100,jl=100;let pn=!0,fn=null;const Ll=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Rl=e=>e instanceof Element?Ll?e.matches(":focus-visible")===!0:pn:!1,$n=new WeakMap,gn=new WeakMap,Wa=(e,r)=>{const t=e.get(r);t!=null&&(clearTimeout(t),e.delete(r))},as=(e,r,t,a)=>{const o=window.setTimeout(()=>{a(),e.delete(r)},t);e.set(r,o)},os="[aria-describedby]",Ml=e=>typeof e=="object"&&e!==null&&e.hasAttribute?.("popover")===!0,ns=e=>e instanceof HTMLElement&&e.getAttribute("role")==="tooltip"&&Ml(e),Bl=e=>!!e&&(e.tagName==="LABEL"||e.hasAttribute("arc-label")),Pl=e=>e?.match(/\S+/g)??[],mn=e=>{if(typeof document>"u")return null;const r=document.querySelector(`[aria-describedby~="${e}"]`);return r?r.closest("label,[arc-label]")??r:null},Ol=e=>{if(!(e instanceof Element))return null;const r=e.closest?.(os);if(r){const a=r.getAttribute("aria-describedby")??"";if(a)return{anchor:r.closest?.("label,[arc-label]")??r,tooltipId:a}}let t=e;for(;t;){if(Bl(t)){const a=t.querySelector?.(os),o=a?.getAttribute?.("aria-describedby")??"";if(a&&o)return{anchor:t,tooltipId:o}}t=t.parentElement}return null},Dl=e=>{if(!(e instanceof Element))return null;const r=e.closest?.('[role="tooltip"][popover]')??null;return r instanceof HTMLElement?r:null},Nl=e=>e?.id?mn(e.id):null,Fl=e=>{const r=Dl(e),t=Ol(e);if(!t&&r){const u=Nl(r);return!u||!r.id?null:{anchor:u,tooltip:r}}if(!t)return null;const{anchor:a,tooltipId:o}=t;if(!o)return null;const c=Pl(o),i=r??c.map(u=>document.getElementById(u)).find(u=>ns(u))??null;return ns(i)?{anchor:a,tooltip:i}:null},Hl=(e,r,t)=>{const a=t instanceof Element?t:null;if(!a)return!1;const o=e===a||e.contains(a),c=r===a||r.contains(a);return o||c},Vl=(e,r)=>{if(Wa(gn,e),Wa($n,e),!r){e.isConnected&&e.showPopover?.();return}as($n,e,Il,()=>{e.isConnected&&e.showPopover?.()})},Ul=(e,r)=>{if(Wa($n,e),Wa(gn,e),!r){e.isConnected&&e.hidePopover?.();return}as(gn,e,jl,()=>{e.isConnected&&e.hidePopover?.()})},qt=(e,r,t,a)=>{const o=Fl(r);if(!o)return;const{anchor:c,tooltip:i}=o;if(e){Vl(i,a);return}Hl(c,i,t)||Ul(i,a)};let Ga=null,Za=null,Ka=null,Ya=null,qa=null,Ja=null,yt=null;const is=()=>{Ua||typeof document>"u"||(Ja=e=>{pn=!1,fn=e.target},yt=()=>{fn=null},Ga=e=>qt(!0,e.target,void 0,!0),Za=e=>{Rl(e.target)&&qt(!0,e.target,void 0,!1)},Ka=e=>qt(!1,e.target,e.relatedTarget,!0),Ya=e=>{const r=e.relatedTarget??fn;qt(!1,e.target,r,!1)},qa=e=>{e.key==="Tab"&&(pn=!0),e.key==="Escape"&&qt(!1,e.target,void 0,!1)},document.addEventListener("pointerdown",Ja),document.addEventListener("pointerup",yt),document.addEventListener("pointercancel",yt),document.addEventListener("pointerover",Ga),document.addEventListener("focusin",Za),document.addEventListener("pointerout",Ka),document.addEventListener("focusout",Ya),document.addEventListener("keydown",qa),Ua=!0)},Wl=()=>{if(!Ua||typeof document>"u")return;[["pointerdown",Ja],["pointerup",yt],["pointercancel",yt],["pointerover",Ga],["focusin",Za],["pointerout",Ka],["focusout",Ya],["keydown",qa]].forEach(([r,t])=>{t&&document.removeEventListener(r,t)}),Ga=null,Za=null,Ka=null,Ya=null,qa=null,Ja=null,yt=null,Ua=!1},dr=s`--arc•tooltip`,ss=s`${dr}•subtext`,cs=s`${dr}•slot`,Gl=s`
@layer arc-components {
  [arc-tooltip] {
    ${dr}•width: max-content;
    ${dr}•max•width: 20em;
    ${dr}•font•size: var(${l}•12);
    ${dr}•padding: var(${g}•10);
    ${ss}•spacing: var(${g}•6);
    ${cs}•margin•top: var(${g}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${dr}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${dr}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${dr}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${dr}•padding));

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${dr}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${ss}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${cs}•margin•top));
    }
  }
}
`,bn=(0,y.forwardRef)(({id:e,children:r,slot:t,isEnabled:a=lr.isEnabled,popover:o=lr.popover,variant:c=lr.variant,anchorAt:i=lr.anchorAt,alternateAnchor:u,boundary:d=lr.boundary,tryFallbacks:h=lr.tryFallbacks,hasTail:v=lr.hasTail,offset:f=lr.offset,scheme:p=lr.scheme,isStrong:$=lr.isStrong,text:w,subtext:k,icon:I,isFlipped:M,..._},E)=>{const S=Ke(e,"arc-tooltip"),z=oe=>typeof oe=="object"&&oe!==null&&"tabIndex"in oe,P=r,N=!!u;let W=null;(0,y.isValidElement)(P)?W=a?(0,y.cloneElement)(P,{"aria-describedby":S,...z(P.props)&&P.props.tabIndex!=null?{}:{tabIndex:0}}):P:!N&&typeof console<"u"&&Qi("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const J=(0,y.useMemo)(()=>()=>mn(S),[S]),te=p==="auto"?void 0:p;return(0,y.useEffect)(()=>{if(a)try{is()}catch{}},[a]),(0,n.jsxs)(n.Fragment,{children:[W,a&&(0,n.jsxs)(ra,{..._,"arc-tooltip":"",scheme:_?.isInverse?"inverse":te,role:"tooltip",id:S,ref:E,popover:o,anchorAt:i,tryFallbacks:h||d==="flip",variant:c,hasTail:v,offset:f,hidePopoverButton:!0,alternateAnchor:u??J,tag:_?.tag??"span",contentTag:_?.contentTag??"span",children:[w&&(0,n.jsx)(Ye,{"arc-tooltip-content":"",text:w,subtext:k,icon:I,isFlipped:M,isStrong:$,size:"inherit",variant:"inherit"}),t&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:t})]})]})});H("ArcTooltip",Gl);const Zl=L(jt,["circle","square","narrow"]),Kl=L(_e,["xxl","xl","lg","md","sm"]),Yl=L(ir,["hug","fill","icon"]),ql=L(ie,["common","ai","critical","alpha"]),Jl=[...Or],Xl=[...Aa],ls=L(ie,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Ql=L(Ca,["primary","secondary","tertiary","plain","link-style"]),ed=[...ht],rd=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* common-secondary variant floating button */
  --arc-button-common-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-common-secondary-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));
  --arc-button-common-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-common-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* critical-secondary variant floating button */
  --arc-button-critical-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-secondary-floating-bg-active: var(--arc-color-bg-critical-muted);
  --arc-button-critical-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-critical-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* ai-secondary variant floating button */
  --arc-button-ai-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-ai-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-ai-secondary-floating-bg-focus: var(--arc-color-bg-primary);
}
`,td=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,ad=s`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,b=s`--arc•button`,A=s`${b}•fg`,m=s`${b}•bg`,B=s`${b}•edge`,Te=s`${b}•border`,xt=s`${b}•outline`,U=s`${b}•spinner`,Ce=s`${b}•icon`,od=s`
  &[data-size=xxl] {
    ${b}•font•size: var(${l}•16);
    ${U}•size: var(${l}•32);
    ${Ce}•size: var(${l}•20);
    ${Ce}•size•large: var(${l}•24);
    ${b}•height: var(${l}•56);
    ${b}•gap: var(${l}•10);
    ${b}•padding•inline: var(${l}•32);
  }

  &[data-size=xl] {
    ${b}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ce}•size: var(${l}•16);
    ${Ce}•size•large: var(${l}•20);
    ${b}•height: var(${l}•48);
    ${b}•gap: var(${l}•8);
    ${b}•padding•inline: var(${l}•32);
  }

  &[data-size=lg] { /** @default */
    ${b}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ce}•size: var(${l}•16);
    ${Ce}•size•large: var(${l}•20);
    ${b}•height: var(${l}•40);
    ${b}•gap: var(${l}•8);
    ${b}•padding•inline: var(${l}•20);
  }

  &[data-size=inherit] {
    ${b}•font•size: 1em;
    ${U}•size: 1em;
    ${Ce}•size: 1em;
    ${Ce}•size•large: 1.25em;
    ${b}•gap: 0.5em;
    ${b}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${b}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ce}•size: var(${l}•14);
    ${Ce}•size•large: var(${l}•20);
    ${b}•height: var(${l}•32);
    ${b}•gap: var(${l}•6);
    ${b}•padding•inline: var(${l}•16);
  }

  &[data-size=sm] {
    ${b}•font•size: var(${l}•12);
    ${U}•size: var(${l}•14);
    ${Ce}•size: var(${l}•12);
    ${Ce}•size•large: var(${l}•14);
    ${b}•height: var(${l}•24);
    ${b}•gap: var(${l}•4);
    ${b}•padding•inline: var(${l}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${b}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ce}•size: var(${l}•16);
    ${Ce}•size•large: var(${l}•20);
    ${b}•gap: var(${l}•8);
    ${b}•padding•inline: var(${l}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,nd=s`
  &[data-layout=hug] {
    ${b}•width: auto;
    ${b}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${b}•display: flex;
    ${b}•width: 100%;
    ${b}•content•width: 0;
  }

  &[data-layout=icon] {
    ${b}•aspect•ratio: 1 / 1;
    ${b}•flex: none;
    ${b}•min•width: min-content;
    ${b}•max•width: none;
    ${b}•padding•inline: var(${l}•0);

    &[data-shape=narrow] {
      ${b}•aspect•ratio: auto;
      ${b}•padding•inline: var(${l}•2);
    }
  }

`,id=s`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${A}: inherit;
    ${m}: transparent;
    ${B}: transparent;
    ${A}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${A}: var(--arc-color-fg-on-theme-heavy);
    ${m}: var(--arc-color-bg-theme-heavy);
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-on-theme-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: var(--arc-color-bg-theme-stark);
    ${m}•active: var(--arc-color-bg-theme-mid);
    ${m}•processing: var(--arc-color-bg-theme-stark);
    ${m}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${A}: var(--arc-color-fg-primary);
    ${B}: var(--arc-color-border-theme-heavy);

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${B}•active: var(--arc-color-border-theme-mid);
    ${B}•processing: var(--arc-color-border-theme-subtle);
    ${B}•disabled: var(--arc-color-border-disabled);

    &[data-layout=icon] {
      ${B}: var(--arc-color-border-mid);
      ${B}•hover: var(--arc-color-border-stark);
      ${B}•focus: var(--arc-color-border-mid);
    }

    &[data-hierarchy=secondary] {
      ${m}: transparent;
      ${m}•hover: var(--arc-color-bg-neutral-muted);
      ${m}•active: var(--arc-color-bg-neutral-subtle);
      ${m}•processing: transparent;
      ${m}•disabled: transparent;
      ${m}•focus: var(--arc-color-alpha-white-3);
    }
  }

  &[data-variant=secondary]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${m}: var(--arc-color-mono-white);
    ${m}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-white);
    ${m}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-white);
    ${m}•processing: var(--arc-color-mono-white);
    ${m}•disabled: var(--arc-color-mono-white);
    ${m}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-white);
  }

  &[data-variant=secondary-inverse]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${m}: var(--arc-color-mono-black);
    ${m}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-black);
    ${m}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-black);
    ${m}•processing: var(--arc-color-mono-black);
    ${m}•disabled: var(--arc-color-mono-black);
    ${m}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-black);
  }

  /* "floating" button mitigation */
  &:is([data-variant=secondary], [data-variant=secondary-inverse])[arc-shadow] {
    ${m}: var(--arc-button-common-secondary-floating-bg);
    ${m}•hover: var(--arc-button-common-secondary-floating-bg-hover);
    ${m}•active: var(--arc-button-common-secondary-floating-bg-active);
    ${m}•processing: var(--arc-button-common-secondary-floating-bg-processing);
    ${m}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
    ${m}•focus: var(--arc-button-common-secondary-floating-bg-focus);
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${A}: var(--arc-color-fg-primary);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: var(--arc-color-bg-neutral-muted);
    ${m}•focus: var(--arc-color-alpha-white-3);
    ${m}•active: var(--arc-color-bg-neutral-muted);
    ${m}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${A}: var(--arc-color-fg-primary);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-heavy);
    ${A}•active: var(--arc-color-alpha-heavy);
    ${A}•processing: var(--arc-color-alpha-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: transparent;
    ${m}•active: transparent;
    ${m}•processing: transparent;
  }

`,sd=s`
  &[data-variant=ai-primary] {
    ${A}: var(--arc-color-fg-on-theme-stark);
    ${m}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${U}•base•color: var(--arc-color-alpha-white-30);

    ${A}•active: var(--arc-color-fg-neutral-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-heavy);
    ${A}•hover: var(--arc-color-fg-on-theme-heavy);

    ${m}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${m}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${m}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${m}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${A}: var(--arc-color-fg-primary);
    ${m}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${A}•active: var(--arc-color-fg-neutral-stark);
    ${A}•processing: var(--arc-color-fg-primary);

    ${m}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${m}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${m}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${m}•disabled: var(--arc-color-bg-disabled);
    ${m}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${m}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${m}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${m}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${B}: transparent;

    ${A}•disabled: var(--arc-color-fg-disabled);
    ${B}•disabled: var(--arc-color-border-disabled);
  }

`,cd=s`
  &[data-variant=alpha-primary] {
    ${A}: var(--arc-color-mono-black);
    ${m}: var(--arc-color-mono-white);
    ${B}: transparent;

    ${A}•focus: var(--arc-color-mono-black);
    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-mono-black);
    ${A}•disabled: var(--arc-color-alpha-black-60);

    ${m}•hover: var(--arc-color-alpha-white-70);
    ${m}•focus: var(--arc-color-mono-white);
    ${m}•active: var(--arc-color-alpha-white-40);
    ${m}•processing: var(--arc-color-alpha-white-40);
    ${m}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${m}: transparent;
    ${B}: var(--arc-color-alpha-white-80);

    ${A}•active: var(--arc-color-alpha-white-80);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${m}•hover: var(--arc-color-alpha-white-20);
    ${m}•focus: var(--arc-color-alpha-white-3);
    ${m}•active: var(--arc-color-alpha-white-40);
    ${m}•processing: var(--arc-color-alpha-white-25);
    ${m}•disabled: transparent;

    ${B}•hover: var(--arc-color-alpha-white-100);
    ${B}•focus: var(--arc-color-alpha-white-80);
    ${B}•active: var(--arc-color-alpha-white-50);
    ${B}•processing: transparent;
    ${B}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${m}•hover: var(--arc-color-alpha-white-20);
    ${m}•focus: var(--arc-color-alpha-white-5);
    ${m}•active: var(--arc-color-alpha-white-40);
    ${m}•processing: var(--arc-color-alpha-white-20);
    ${m}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${A}: var(--arc-color-alpha-white-95);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-white-60);
    ${A}•active: var(--arc-color-alpha-white-40);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${U}•base•color: var(--arc-color-alpha-white-30);
  }
`,ld=s`
  &[data-variant=link-style] {
    ${A}: var(--arc-color-fg-primary);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-heavy);
    ${A}•active: var(--arc-color-alpha-heavy);
    ${A}•processing: var(--arc-color-alpha-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);
  }
`,dd=s`
  &[data-variant=critical-primary] {
    ${A}: var(--arc-color-fg-on-stark);
    ${m}: var(--arc-color-bg-critical-stark);
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-on-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: var(--arc-color-bg-critical-heavy);
    ${m}•active: var(--arc-color-bg-critical-heavy);
    ${m}•processing: var(--arc-color-bg-critical-heavy);
    ${m}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${m}: transparent;
    ${B}: var(--arc-color-border-critical-stark);

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: var(--arc-button-critical-bg-hover);
    ${m}•focus: var(--arc-color-alpha-white-3);
    ${m}•active: var(--arc-color-bg-critical-muted);
    ${m}•disabled: transparent;

    ${B}•active: var(--arc-color-border-critical-subtle);
    ${B}•processing: var(--arc-color-border-critical-stark);
    ${B}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${m}: var(--arc-button-critical-secondary-floating-bg);
      ${m}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${m}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${m}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${m}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${m}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${m}•hover: var(--arc-button-critical-bg-hover);
    ${m}•focus: var(--arc-color-alpha-white-3);
    ${m}•active: var(--arc-color-bg-critical-subtle);
    ${m}•processing: var(--arc-color-bg-critical-muted);
    ${m}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${A}: var(--arc-color-fg-critical-stark);
    ${m}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-fg-critical-mid);
    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);
  }

`,ud=s`
  ${b}•color: var(${A});
  ${b}•background: var(${m});
  ${b}•font•weight: var(--arc-font-weight-600);
  ${b}•padding: 0 var(${b}•padding•inline);
  ${b}•content•opacity: 1;
  ${b}•cursor: var(--arc-button-cursor, pointer);
  ${b}•transition: 0.2s ease-out;

  ${Te}•color: var(${B});
  ${Te}: var(--arc-border-width-sm) solid var(${Te}•color, transparent);

  ${xt}: var(--arc-border-width-md) solid var(${xt}•color, transparent);
  ${xt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${U}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${U}•circle•color: var(--arc-button-color, var(${U}•base•color, var(--arc-color-alpha-mid)));
  ${U}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${b}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${Te}: var(--arc-border-width-md) solid var(${Te}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${Te}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Te}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${b}•padding: unset;
    ${b}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${Te}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${b}•font•weight: inherit;
    ${b}•text•decoration: none;

    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${Ce}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Ce}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${U}•size);
  --arc-spinner-progress-color: var(${U}•progress•color);
  --arc-spinner-circle-color: var(${U}•circle•color);
  --arc-spinner-circle-opacity: var(${U}•circle•opacity);
  --arc-spinner-position: var(${U}•position, absolute);
  --arc-spinner-inset: var(${U}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${U}•translate, -50% -50%);

`,hd=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${b}•position: relative;
  }

  &[is-disabled] {
    ${b}•color: var(${A}•disabled, var(${A}));
    ${b}•background: var(${m}•disabled, var(${m}));
    ${Te}•color: var(${B}•disabled, var(${B}));
    ${b}•opacity: var(--arc-button-disabled-opacity, unset);
    ${b}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${b}•color: var(${A}•hover, var(${A}));
      ${b}•background: var(${m}•hover, var(${m}));
      ${Te}•color: var(${B}•hover, var(${B}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${b}•color: var(${A}•active, var(${A}));
      ${b}•background: var(${m}•active, var(${m}));
      ${Te}•color: var(${B}•active, var(${B}));
    }
  }

  &[is-processing] {
    ${b}•content•visibility: hidden;
    ${b}•content•opacity: 0;

    /* spinner svg position controls */
    ${U}•position: absolute;
    ${U}•inset: 50% auto auto 50%;
    ${U}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${b}•content•visibility: visible;

    /* spinner svg position controls */
    ${U}•position: relative;
    ${U}•inset: 0;
    ${U}•translate: 0;
    ${U}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${b}•opacity: var(--arc-button-processing-opacity, unset);
    ${b}•cursor: var(--arc-button-processing-cursor, default);

    ${b}•color: var(${A}•processing, var(${A}));
    ${b}•background: var(${m}•processing, var(${m}));
    ${Te}•color: var(${B}•processing, var(${B}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${U}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${b}•color: var(${A}•focus, var(${A}));
    ${b}•background: var(${m}•focus, var(${m}));
    ${Te}•color: var(${B}•focus, var(${B}));
    ${xt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,vd=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${rd}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${od}

    /* LAYOUTS -----------------------------------------------------• */
    ${nd}

    /* VARIANTS ----------------------------------------------------• */
    ${id}
    ${ld}
    ${sd}
    ${cd}
    ${dd}

    /* CORE VARIABLES ----------------------------------------------• */
    ${ud}
    ${hd}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${b}•cursor));
    position: var(--arc-button-position, var(${b}•position, unset));
    transition: var(--arc-button-transition, var(${b}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${b}•font•weight));
    font-size: var(--arc-button-font-size, var(${b}•font•size, inherit));
    padding: var(--arc-button-padding, var(${b}•padding));

    width: var(--arc-button-width, var(${b}•width, auto));
    min-width: var(--arc-button-min-width, var(${b}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${b}•max•width, 100%));

    height: var(--arc-button-height, var(${b}•height, auto));
    min-height: var(--arc-button-min-height, var(${b}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${b}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${b}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${b}•color));
    background: var(--arc-button-background, var(${b}•background));
    border: var(--arc-button-border, var(${Te}));
    border-radius: var(--arc-button-border-radius, var(${Te}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${xt}));
    outline-offset: var(--arc-button-outline-offset, var(${xt}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* "floating" button mitigation */
    &[arc-shadow] {
      backdrop-filter: blur(0.5em);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(${b}•gap));

      opacity: var(--arc-button-content-opacity, var(${b}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${b}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${b}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${b}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${b}•opacity));
      transition: var(--arc-button-label-transition, var(${b}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${b}•opacity));
      transition: var(--arc-button-icon-transition, var(${b}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${b}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,ds=(0,n.jsx)(hn,{}),Ie=(0,y.forwardRef)(({children:e,disabled:r,...t},a)=>{const o=(0,y.useRef)(null),{iconEnd:c,iconStart:i,icon:u,text:d,isActive:h,isDisabled:v,isProcessing:f,isProcessingWithText:p,hasLargeIcon:$,tag:w,href:k,type:I,title:M,layout:_,shape:E,size:S="lg",variant:z="common",hierarchy:P="primary",isInverse:N=!1,scheme:W="auto",shadow:J,_isCustom:te,...oe}=t,ce=w??(k?"a":"button"),le=ce==="button"?I||"button":void 0,xe=_==="icon",he=p||f||v||r,tr=oe?.["aria-disabled"]||he||void 0,ne=!xe&&(e||d),Fe=p&&ds||i||u,He=!xe&&(p&&!(i||u)?void 0:c),ar=(f||p&&xe)&&ds,jr=z&&ls.includes(z),Lr=(()=>{if(jr)return z;const Pr=P||"primary";if(z==="ai"){const Pv=["primary","secondary"].includes(Pr)?Pr:"primary";return`${z}-${Pv}`}return Pr==="link-style"?z==="critical"||z==="alpha"?`${z}-${Pr}`:"link-style":z==="common"?Pr:z==="alpha"||z==="critical"?`${z}-${Pr}`:z})(),or=W==="auto"?void 0:W,V=Lr?.endsWith("-inverse")?"inverse":void 0,we=N?"inverse":or??V,ve=J===!0?"lg":J,{tooltip:Me,...xr}=oe,wr=Da(Me)?Me:void 0,Ar=t.tooltip??wr,Wr=!!Ar,Eo=Da(Ar)?{text:Ar}:Ar,ya=oe["aria-describedby"],dt=(0,y.useRef)(void 0),ni=Ke(void 0,"arc-tooltip"),xa=t.id?`${t.id}-tooltip`:ni;Wr&&!dt.current&&(dt.current=xa);const ii=Wr?Ut([ya,dt.current]):ya,{anchorName:si,style:To,popoverTarget:Gr,popoverTargetAction:Io,...ci}=xr,Rr=Gr?Gt(String(si||t?.id)):void 0,Mr=Wr?Gt(String(xa)):void 0,Br=Ji(To)?To:void 0,It=Br&&"anchorName"in Br&&Br.anchorName,li=[...(Da(It)?Xi(It,", "):[]).map(Gt),...Rr?[Rr]:[],...Mr?[Mr]:[]],jo=Ut(li,1/0,", "),Bv={...Br??{},...jo?{anchorName:jo}:{}};let mc={popoverTarget:Gr||void 0,popoverTargetAction:Io||void 0};return y.version.startsWith("18")&&(mc={popovertarget:Gr||void 0,popovertargetaction:Io||void 0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ce,{...ci,...mc,ref:Pr=>{o.current=Pr,Cr(a,Pr)},"arc-button":te?"custom":"","arc-scheme":we,"arc-shadow":ve||void 0,disabled:!k&&he||void 0,href:k||void 0,title:Wr?void 0:M||void 0,type:le,"data-layout":_,"data-shape":te?void 0:E,"data-size":te?void 0:S,"data-variant":te?void 0:Lr,"data-hierarchy":P||void 0,"has-large-icon":$?"":void 0,"is-active":h?"":void 0,"is-processing":f||p&&xe?"":void 0,"is-processing-with-text":p&&!xe?"":void 0,"is-disabled":he||tr?"":void 0,"aria-disabled":tr,"aria-describedby":ii||void 0,style:Bv,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[Fe&&typeof Fe=="string"?(0,n.jsx)(D,{"arc-button-icon":"",icon:Fe}):Fe&&(0,n.jsx)("span",{"arc-button-icon":"",children:Fe}),!!ne&&(0,n.jsx)("span",{"arc-button-label":"",children:ne}),He&&typeof He=="string"?(0,n.jsx)(D,{"arc-button-icon":"",icon:He}):He&&(0,n.jsx)("span",{"arc-button-icon":"",children:He})]}),ar]}),Wr&&(0,n.jsx)(bn,{...Eo,id:dt.current,alternateAnchor:Eo?.alternateAnchor??(()=>o.current),anchorName:Mr})]})});Ie.displayName="ArcButton",H("ArcButton",vd);const Jt=(0,y.forwardRef)((e,r)=>(0,n.jsx)(Ie,{...e,ref:r,"arc-popover-button":""})),us=({isInverse:e=!1,isOpen:r,...t})=>(0,n.jsx)(Ie,{...t,icon:"fa-regular fa-xmark",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:e,"arc-popover-dismiss":""}),pd=({children:e,showDismiss:r,dismissProps:t,tag:a="header",...o})=>(0,n.jsxs)(a,{...o,"arc-popover-header":"",children:[e,r&&(0,n.jsx)(us,{...t})]}),fd=({tag:e="article",...r})=>(0,n.jsx)(e,{...r,"arc-popover-body":""}),$d=({showDivider:e,tag:r="footer",...t})=>(0,n.jsx)(r,{...t,"arc-popover-footer":"","has-divider":e?"":void 0});Jt.displayName="ArcPopoverButton";const C=s`--arc-popover`,ke=s`--arc•popover`,R=s`--arc•trail•mix`,yn=s`${ke}•radius`,gd=s`${ke}•content`,Xa=s`${ke}•outline`,je=s`${ke}•offset`,Qa=s`${ke}•header`,md=s`${ke}•body`,hs=s`${ke}•divider`,eo=s`${ke}•footer`,ur=s`${ke}•tail`,Z=s`${ur}•top`,K=s`${ur}•left`,Xt=s`${ur}•size`,We=s`${ur}•x`,Ge=s`${ur}•y`,ro=s`${ke}•padding`,Le=s`${ke}•margin`,wt=s`${Qa}•padding`,qe=s`${md}•padding`,fr=s`${eo}•padding`,vs=s`${ke}•fg`,to=s`${ke}•bg`,ao=s`${gd}•bg`,oo=s`${ur}•fill•a`,no=s`${ur}•fill•b`,io=s`${ur}•edge•a`,so=s`${ur}•edge•b`,bd=s`

  ${ke}•fallback: none;
  ${Xa}: var(${C}-outline-size, var(--arc-border-width-md));
  ${yn}: var(${C}-border-radius, var(--arc-border-radius-lg));
  ${je}: var(${C}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${ro}: var(${g}•14);

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${R}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${We}: var(${C}-tail-x, 1.75em);
  ${Ge}: var(${C}-tail-y, 1.125em);
  ${Xt}: 0px;

  &:where([has-tail]) {
    ${Xt}: var(${C}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${je}: calc(var(${C}-offset, var(--js•offset, 0px)) + var(${Xt}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${ro}: 0;
    &:has([arc-popover-header]) { ${qe}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${qe}•block•end: 0; }
  }

`,yd=s`

  /* default variant: common */
  &[variant] {
    ${vs}: var(--arc-color-fg-primary);
    ${to}: var(${C}-background, var(--arc-color-bg-mono)) border-box;
    ${ao}: var(${C}-background, var(--arc-color-bg-mono)) padding-box;
    ${oo}: var(${C}-background, var(--arc-color-bg-mono));
    ${no}: var(${C}-background, var(--arc-color-bg-mono));
    ${io}: var(${C}-background, var(--arc-color-bg-mono));
    ${so}: var(${C}-background, var(--arc-color-bg-mono));
    ${ke}•shadow: var(--arc-shadow-lg);
    ${hs}•color: var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${to}: var(--arc-color-border-brand-mid) border-box;
    ${ao}: var(--arc-color-bg-brand-muted) padding-box;
    ${oo}: var(--arc-color-bg-brand-muted);
    ${no}: var(--arc-color-bg-brand-muted);
    ${io}: var(--arc-color-border-brand-mid);
    ${so}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${to}: var(--arc-gradient-ai-200) border-box;
    ${ao}: var(--arc-gradient-ai-50) padding-box;
    ${oo}: var(${C}-ai-purple-50);
    ${no}: var(${C}-ai-blue-50);
    ${io}: var(${C}-ai-purple-200);
    ${so}: var(${C}-ai-blue-200);
  }

`,xd=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Qa}•gap: var(${g}•12);
    ${wt}•block: var(${g}•12);
    ${wt}•inline: var(${g}•12);

    ${qe}•block: var(${g}•12);
    ${qe}•inline: var(${g}•12);

    ${eo}•gap: var(${g}•12);
    ${fr}•inline: var(${g}•12);
    ${fr}•block•start: var(${g}•12);
    ${fr}•block•end: var(${g}•12);
  }

  &[density=comfortable] {
    ${Qa}•gap: var(${g}•18);
    ${wt}•block: var(${g}•16);
    ${wt}•inline: var(${g}•20);

    ${qe}•block: var(${g}•20);
    ${qe}•inline: var(${g}•20);

    ${eo}•gap: var(${g}•18);
    ${fr}•inline: var(${g}•20);
    ${fr}•block•start: var(${g}•16);
    ${fr}•block•end: var(${g}•20);

    &:not(:has([arc-popover-body])) {
      ${ro}: var(${g}•20);
    }

    [arc-popover-content] {
      font-size: var(${C}-font-size, var(${l}•14));
    }
  }

`,Qt={TOP:s`
    &[anchor-at*='top-'] {
      ${Le}: 0 0 var(${je}) 0;
      ${Z}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${R}: 95%;
      ${K}: calc(0% + var(${We}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${R}: 75%;
      ${K}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${R}: 53.5%;
      ${K}: calc(100% - var(${We}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${Le}: 0 0 0 var(${je});
      ${K}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${R}: 53.5%;
      ${Z}: calc(0% + var(${Ge}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${R}: 75%;
      ${Z}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${R}: 95%;
      ${Z}: calc(100% - var(${Ge}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${Le}: var(${je}) 0 0 0;
      ${Z}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${R}: 5%;
      ${K}: calc(100% - var(${We}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${R}: 25%;
      ${K}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${R}: 47.5%;
      ${K}: calc(0% + var(${We}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${Le}: 0 var(${je}) 0 0;
      ${K}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${R}: 47.5%;
      ${Z}: calc(100% - var(${Ge}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${R}: 25%;
      ${Z}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${R}: 5%;
      ${Z}: calc(0% + var(${Ge}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${ur}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Le}: 0; }
    &[anchor-at*='corner'] { ${Le}: var(${je}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},At={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${Le}: 0 0 var(${je}) 0; }
    &[anchor-at='top-start']::before { ${R}: 47.5%; ${Z}: 0%; }
    &[anchor-at='top-center']::before { ${R}: 25%; ${Z}: 0%; }
    &[anchor-at='top-end']::before { ${R}: 5%; ${Z}: 0%; }

    &[anchor-at='right-start']::before { ${R}: 95%; ${Z}: calc(100% - var(${Ge})); }
    &[anchor-at='right-end']::before { ${R}: 53.5%; ${Z}: calc(0% + var(${Ge})); }

    &[anchor-at*='bottom-'] { ${Le}: var(${je}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 53.5%; ${Z}: 100%; }
    &[anchor-at='bottom-center']::before { ${R}: 75%; ${Z}: 100%; }
    &[anchor-at='bottom-start']::before { ${R}: 95%; ${Z}: 100%; }

    &[anchor-at='left-end']::before { ${R}: 5%; ${Z}: calc(0% + var(${Ge})); }
    &[anchor-at='left-start']::before { ${R}: 47.5%; ${Z}: calc(100% - var(${Ge})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${R}: 53.5%; ${K}: calc(100% - var(${We})); }
    &[anchor-at='top-end']::before { ${R}: 95%; ${K}: calc(0% + var(${We})); }

    &[anchor-at*='right-'] { ${Le}: 0 var(${je}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 5%; ${K}: 100%; }
    &[anchor-at='right-center']::before { ${R}: 25%; ${K}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 47.5%; ${K}: 100%; }

    &[anchor-at='bottom-end']::before { ${R}: 47.5%; ${K}: calc(0% + var(${We})); }
    &[anchor-at='bottom-start']::before { ${R}: 5%; ${K}: calc(100% - var(${We})); }

    &[anchor-at*='left-'] { ${Le}: 0 0 0 var(${je}); }
    &[anchor-at='left-end']::before { ${R}: 95%; ${K}: 0%; }
    &[anchor-at='left-center']::before { ${R}: 75%; ${K}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 53.5%; ${K}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${Le}: 0 0 var(${je}) 0; }
    &[anchor-at='top-start']::before { ${R}: 5%; ${Z}: 0%; ${K}: calc(100% - var(${We})); }
    &[anchor-at='top-end']::before { ${R}: 47.5%; ${Z}: 0%; ${K}: calc(0% + var(${We})); }

    &[anchor-at*='right-'] { ${Le}: 0 var(${je}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 47.5%; ${Z}: calc(100% - var(${Ge})); ${K}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 5%; ${Z}: calc(0% + var(${Ge})); ${K}: 100%; }

    &[anchor-at*='bottom-'] { ${Le}: var(${je}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 95%; ${Z}: 100%; ${K}: calc(0% + var(${We})); }
    &[anchor-at='bottom-start']::before { ${R}: 53.5%; ${Z}: 100%; ${K}: calc(100% - var(${We})); }

    &[anchor-at*='left-'] { ${Le}: 0 0 0 var(${je}); }
    &[anchor-at='left-end']::before { ${R}: 53.5%; ${Z}: calc(0% + var(${Ge})); ${K}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 95%; ${Z}: calc(100% - var(${Ge})); ${K}: 0%; }
  `},wd=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Le});

    container-type: anchored;
    position-anchor: var(${C}-anchor-name, var(--js•anchor));

    ${Qt.TOP}
    ${Qt.RIGHT}
    ${Qt.BOTTOM}
    ${Qt.LEFT}
    ${Qt.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${At.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${At.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${At.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${At.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${At.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${At.FLIP_BLOCK_INLINE}
        }
      }
    }
`,nt={BACKDROP:s`
    &::backdrop {
      background: var(${C}-backdrop, transparent);
    }
  `,DISMISS:s`
    [arc-popover-dismiss] {
      align-self: var(${C}-dismiss-align-self, auto);
      display: var(${C}-dismiss-display, inline-flex);
      align-items: var(${C}-dismiss-align-items, center);
      justify-content: var(${C}-dismiss-justify-content, center);
      margin: var(${C}-dismiss-margin, var(${g}•6m) var(${g}•0));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      ${C}-dismiss-margin: 0;
      inset: var(${C}-dismiss-inset, 0.5em 0.5em auto auto);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${C}-header-flex, none);
      display: var(${C}-header-display, flex);
      justify-content: var(${C}-header-justify-content, space-between);
      align-items: var(${C}-header-align-items, baseline);
      gap: var(${C}-header-gap, var(${Qa}•gap));

      padding: var(${C}-header-padding,
        var(${wt}•block)
        var(${wt}•inline)
      );

      color: var(${C}-header-color, inherit);
      background: var(${C}-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(${g}•12);
      }
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${C}-flex, 1);
      position: relative;
      display: var(${C}-content-display, flex);
      flex-direction: var(${C}-content-flex-direction, column);
      gap: var(${C}-content-gap, 0);

      overflow: var(${C}-overflow, auto);
      overscroll-behavior: var(${C}-overscroll-behavior, contain);

      color: var(${C}-color, var(${vs}));
      padding: var(${C}-padding, var(${ro}));
      margin: var(${C}-margin, unset);
      background: var(${C}-content-background, var(${ao}));
      border-radius: calc(var(${yn}) - var(${Xa}));
      border: var(${C}-border, none);

      width: var(${C}-width, auto);
      height: var(${C}-height, auto);
      min-width: var(${C}-min-width, auto);
      min-height: var(${C}-min-height, auto);
      max-width: var(${C}-max-width, 100vw);
      max-height: var(${C}-max-height, 65vh);
      resize: var(${C}-resize, none);
      font-size: var(${C}-font-size, var(${l}•12));
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${C}-body-flex, 1);
      display: var(${C}-body-display, block);
      flex-direction: var(${C}-body-flex-direction, unset);

      padding: var(${C}-body-padding,
        var(${qe}•block•start, var(${qe}•block))
        var(${qe}•inline)
        var(${qe}•block•end, var(${qe}•block))
        var(${qe}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${C}-footer-flex, none);
      display: var(${C}-footer-display, flex);
      flex-direction: var(${C}-footer-flex-direction, row-reverse);
      justify-content: var(${C}-footer-justify-content, space-between);
      align-items: var(${C}-footer-align-items, center);
      gap: var(${C}-footer-gap, var(${eo}•gap));

      padding: var(${C}-footer-padding,
        var(${fr}•block•start)
        var(${fr}•inline)
        var(${fr}•block•end)
        var(${fr}•inline)
      );

      background: var(${C}-footer-background, none);
      color: var(${C}-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(${C}-footer-border-top, var(${g}•1) solid var(${hs}•color));
      }
    }
  `,TAIL:s`
    &[has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${ur}•display, block);

      inset: auto;
      top: var(${Z}, auto);
      left: var(${K}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Xt});
      height: var(${Xt});
      border-radius: var(${l}•2);

      background: color-mix(in srgb,
        var(${oo}) var(${R}),
        var(${no}) clamp(0%, 100% - var(${R}), 100%)
      );

      border: var(${Xa}) solid color-mix(in srgb,
        var(${io}) var(${R}),
        var(${so}) clamp(0%, 100% - var(${R}), 100%)
      );
    }
  `},Ad=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: var(${l}•16); /* This font-size is intended NOT to be altered; it is locked
                                in as a reset for various popover calculations. The effective
                                popover font size is set on '[arc-popover-content]'. */

    background: var(${C}-background, var(${to}));
    border: var(${Xa}) solid transparent;
    border-radius: var(${yn});
    box-shadow: var(${C}-shadow, var(${ke}•shadow));
    width: var(${C}-width, auto);
    height: var(${C}-height, auto);
    min-width: var(${C}-min-width, auto);
    min-height: var(${C}-min-height, auto);
    max-width: var(${C}-max-width, 100vw);
    max-height: var(${C}-max-height, 65vh);

    ${nt.BACKDROP}
    ${nt.DISMISS}
    ${nt.HEADER}
    ${nt.CONTENT}
    ${nt.BODY}
    ${nt.FOOTER}
    ${nt.TAIL}
  }
`,ea={SETUP:bd,ANCHORS:wd,VARIANTS:yd,DENSITIES:xd,ELEMENT:Ad},Cd=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${ad}

  [arc-popover] {
    ${ea.SETUP}
    ${ea.VARIANTS}
    ${ea.DENSITIES}
  }

  ${ea.ANCHORS}
  ${ea.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,ps=(0,y.forwardRef)(({children:e,popover:r=Oe.popover,anchorAt:t=Oe.anchorAt,anchorName:a,anchorProps:o,alternateAnchorId:c,alternateAnchor:i,boundary:u=Oe.boundary,tryFallbacks:d=Oe.tryFallbacks,density:h=Oe.density,variant:v=Oe.variant,scheme:f=Oe.scheme,isInverse:p,hasTail:$,tailSize:w=Oe.tailSize,offset:k=Oe.offset,hidePopoverButton:I,headerSlot:M,showDismiss:_,dismissProps:E,footerSlot:S,showFooterDivider:z,tag:P="div",contentTag:N="div",onToggle:W,...J},te)=>{const oe=(0,y.useRef)(null),ce=(0,y.useRef)(null),le=(0,y.useRef)(null),xe=(0,y.useRef)(W);(0,y.useImperativeHandle)(te,()=>ce.current);const[he,tr]=(0,y.useState)(!1),ne=(0,y.useMemo)(()=>f==="auto"?void 0:p?"inverse":f,[p,f]),Fe=(0,y.useCallback)(()=>typeof document>"u"?oe.current??null:c?document.getElementById(c):typeof i=="string"?document.getElementById(i):i instanceof HTMLElement?i:typeof i=="function"?i():i&&typeof i=="object"&&"current"in i?i.current:oe.current??null,[i,c]),He=d||u==="flip",ar=!!$&&!Fi.includes(t),jr=Hi({canHaveTail:ar,tailSize:w}),Lr=(0,y.useMemo)(()=>{const ve=a||c||(typeof i=="string"?i:void 0)||o?.id||J.id||void 0;return dn(String(ve))},[a,o?.id,J.id,i,c]),or=(0,y.useMemo)(()=>({popoverTarget:J.id,"aria-haspopup":!0,"aria-controls":J.id,"aria-expanded":he}),[J.id,he]),nr=(0,y.useMemo)(()=>({isOpen:he,"aria-label":"Dismiss",...or,...E}),[E,he,or]),V=(0,y.useMemo)(()=>({ref:oe,...or,...o,tooltip:he?void 0:o?.tooltip,anchorName:Lr||void 0}),[o,or,Lr,he]),we=(0,y.useMemo)(()=>({"--js\u2022anchor":V?.anchorName||"","--js\u2022offset":Number(k)===0?"":`${k}px`,"--js\u2022tail":jr.cssTailVar}),[V?.anchorName,k,jr.cssTailVar]);return Ba(()=>{const ve=Fe();if(le.current=ve,!!ve)return Ui(ve,V.anchorName)},[Fe,V.anchorName]),(0,y.useEffect)(()=>{xe.current=W},[W]),(0,y.useEffect)(()=>{const ve=ce.current;if(!ve)return;const Me=xr=>{const{newState:wr}=xr,ba=wr==="open";tr(ba),ba&&(le.current=Fe()),xe.current?.(xr)};return ve.addEventListener("toggle",Me),()=>ve.removeEventListener("toggle",Me)},[Fe]),gl({anchorEl:le.current,popoverEl:ce.current,anchorAt:t,tryFallbacks:He,offsetPx:Number(k)||0,tailSizePx:jr.floatingTailPx,hasTail:ar,isOpen:he}),wl({anchorEl:le.current,popoverEl:ce.current,anchorAt:t,tryFallbacks:He,hasTail:ar,isOpen:he}),(0,n.jsxs)(n.Fragment,{children:[!((c||i)&&I)&&(0,n.jsx)(Jt,{...V}),(0,n.jsxs)(P,{...J,ref:ce,"arc-popover":"","arc-scheme":ne,"anchor-at":t,"try-fallbacks":He?"":void 0,popover:r,variant:v,density:h,"has-tail":ar?"":void 0,role:J.role??"dialog",style:{...J.style,...we},children:[(0,n.jsxs)(N,{"arc-popover-content":"",children:[!!M&&(0,n.jsx)(pd,{showDismiss:_,dismissProps:nr,children:M}),M||S?(0,n.jsx)(fd,{children:e}):e,!!S&&(0,n.jsx)($d,{showDivider:z,children:S})]}),_&&!M&&(0,n.jsx)(us,{...nr})]})]})});ps.displayName="ArcPopover";const xn=ps;xn.handlePopover=Vi,xn.Button=Jt;const ra=xn;H("ArcPopover",Cd);const kd=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${l}•4) var(${l}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${l}•6);
      padding: var(${l}•4) var(${l}•8);
    }

    ${Go}
    ${Ti}
  }

}
`,Sd=e=>(0,n.jsx)("ul",{...e,"data-element":"list"}),zd=e=>(0,n.jsx)("li",{...e,"data-element":"list-item"}),_d=({count:e,anchorId:r,overflowId:t,shouldShowOverflow:a,...o})=>(0,n.jsx)(rn,{title:`+${e}`,children:(0,n.jsx)(ra.Button,{...o,id:r,popoverTarget:t,text:`+${e}`,variant:"common",hierarchy:"primary",disabled:!a,"data-element":"counter","data-color":"black","data-num-length":e?.toString().length})}),Ed=({children:e,id:r,size:t="sm",overflowCount:a=0,shouldShowOverflow:o=!1,anchorAt:c="bottom-end",tryFallbacks:i=!0,...u})=>{const d=Math.min(a,999),h=Ke(r,"arc-avatar-overflow"),v=(0,y.useMemo)(()=>`${h}-anchor`,[h]),f=(0,y.useMemo)(()=>y.Children.toArray(e),[e]);return(0,n.jsxs)(n.Fragment,{children:[d>0&&(0,n.jsx)(_d,{count:d,anchorId:v,overflowId:h,shouldShowOverflow:o}),o&&d>0&&(0,n.jsx)(ra,{...u,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:c,tryFallbacks:i,alternateAnchorId:v,hidePopoverButton:!0,variant:"common","data-size":t,children:(0,n.jsx)(Sd,{children:f.map((p,$)=>(0,n.jsx)(zd,{children:p},$))})})]})};H("ArcAvatarOverflow",kd);const fs=({fg:e,bg:r})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${e}•high: var(--arc-color-fg-on-mono-inverse);
    ${r}•high: var(--arc-color-bg-mono-inverse);
    ${e}•low: var(--arc-color-fg-on-subtle);
    ${r}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-brand-stark);
    ${e}•low: var(--arc-color-fg-brand-stark);
    ${r}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${e}•high: var(--arc-color-fg-on-mono);
    ${r}•high: var(--arc-color-bg-mono);
    ${e}•low: var(--arc-color-fg-on-mono);
    ${r}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-blue-stark);
    ${e}•low: var(--arc-color-fg-blue-stark);
    ${r}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${e}•high: var(--arc-color-fg-on-heavy);
    ${r}•high: var(--arc-color-bg-neutral-heavy);
    ${e}•low: var(--arc-color-fg-neutral-stark);
    ${r}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-purple-stark);
    ${e}•low: var(--arc-color-fg-purple-stark);
    ${r}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-green-stark);
    ${e}•low: var(--arc-color-fg-green-stark);
    ${r}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-yellow-stark);
    ${e}•low: var(--arc-color-fg-yellow-stark);
    ${r}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-red-stark);
    ${e}•low: var(--arc-color-fg-red-stark);
    ${r}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-maroon-stark);
    ${e}•low: var(--arc-color-fg-maroon-stark);
    ${r}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-mint-stark);
    ${e}•low: var(--arc-color-fg-mint-stark);
    ${r}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-orange-stark);
    ${e}•low: var(--arc-color-fg-orange-stark);
    ${r}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${e}•high: var(--arc-color-fg-on-heavy);
    ${r}•high: var(--arc-gradient-ai-300);
    ${e}•low: var(--arc-color-fg-on-subtle);
    ${r}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${e}•high: var(--arc-color-mono-black);
    ${r}•high: var(--arc-color-alpha-white-80);
    ${e}•low: var(--arc-color-alpha-heavy);
    ${r}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${e}•high: var(--arc-color-mono-white);
    ${r}•high: var(--arc-color-alpha-black-70);
    ${e}•low: var(--arc-color-mono-white);
    ${r}•low: var(--arc-color-alpha-black-40);
  }
`,$s=({fg:e,bg:r})=>s`
  &:has(>[data-contrast=high]) {
    ${e}: var(${e}•high);
    ${r}: var(${r}•high);
  }

  &:has(>[data-contrast=low]) {
    ${e}: var(${e}•low);
    ${r}: var(${r}•low);
  }
`,T=s`--arc•badge`,wn=s`${T}•fg`,An=s`${T}•bg`,Td=fs({fg:wn,bg:An}),Id=$s({fg:wn,bg:An}),jd=s`
  &:has(>[data-size=lg]) {
    ${T}•font•size: var(${l}•14);
    ${T}•font•size•caps: var(${l}•12);
    ${T}•size: var(${l}•24);
    ${T}•min•size: var(${l}•30);
    ${T}•padding•inline: var(${l}•8);
    ${T}•border•radius: var(${l}•4);
    ${T}•gap: var(${l}•4);
  }

  &:has(>[data-size=md]) {
    ${T}•font•size: var(${l}•12);
    ${T}•font•size•caps: var(${l}•10);
    ${T}•size: var(${l}•20);
    ${T}•min•size: var(${l}•24);
    ${T}•padding•inline: var(${l}•6);
    ${T}•border•radius: var(${l}•4);
    ${T}•gap: var(${l}•4);
  }

  &:has(>[data-size=sm]) {
    ${T}•font•size: var(${l}•10);
    ${T}•font•size•caps: var(${l}•8);
    ${T}•size: var(${l}•16);
    ${T}•min•size: var(${l}•18);
    ${T}•padding•inline: var(${l}•4);
    ${T}•border•radius: var(${l}•4);
    ${T}•gap: var(${l}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${T}•font•size: 1em;
    ${T}•font•size•text: 0.75em;
    ${T}•font•size•caps: 0.625em;
    ${T}•size: 1.25em;
    ${T}•min•size: 1.5em;
    ${T}•padding•inline: 0.375em;
    ${T}•border•radius: 0.25em;
    ${T}•gap: 0.25em;
  }
`,Ld=s`
  &:has(>[data-layout=fill]) {
    ${T}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${T}•display: flex;
    ${T}•min•width: var(${T}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${T}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${T}•display: inline-flex;
    ${T}•min•width: min-content;
  }
`,Rd=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${Td}
    ${Id}
    ${jd}
    ${Ld}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${T}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${T}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${T}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${T}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${T}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${T}•flex);
    display: var(${T}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${T}•size);
    padding-inline: var(${T}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${wn}));
    background: var(--arc-badge-background, var(${An}));
    border-radius: var(${T}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${T}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${T}•font•size•caps);
    }
  }

}
`,gs=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Md=["brand",...gs.filter(e=>e!=="brand")],Bd=["neutral",...gs.filter(e=>e!=="neutral")],Pd=Ee(Zr,Md),Od=Ee(Zr,Bd),Dd=Ee(_e,["inherit","lg","md","sm"]),Nd=Ee(ir,["hug","fill"]),Fd=["high","low"],Hd=Ee(ie,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Vd={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},Ud=({children:e,icon:r,text:t,isFlipped:a,isFlexible:o,isUppercase:c,color:i,variant:u,size:d="inherit",layout:h="hug",contrast:v="high",...f})=>{const p=i??Vd[u??"brand-blue"],$=e||(0,n.jsx)(Ye,{icon:r,text:t,isFlipped:a,layout:"gutter"}),w=h==="fill"&&o;return(0,n.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":v,"data-color":p,"data-layout":h,"data-size":d,"data-is-flexible":w?"":void 0,"data-is-uppercase":c?"":void 0,children:$})})};H("ArcBadge",Rd);const ee=s`--arc•badge•count`,Cn=s`${ee}•fg`,kn=s`${ee}•bg`,Wd=fs({fg:Cn,bg:kn}),Gd=$s({fg:Cn,bg:kn}),Zd=s`
  &:has(>[data-size=lg]) {
    ${ee}•font•size: var(${l}•14);
    ${ee}•size: var(${l}•24);
    ${ee}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=md]) {
    ${ee}•font•size: var(${l}•12);
    ${ee}•size: var(${l}•20);
    ${ee}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=sm]) {
    ${ee}•font•size: var(${l}•10);
    ${ee}•size: var(${l}•16);
    ${ee}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${ee}•font•size: 1em;
    ${ee}•font•size•text: 0.75em;
    ${ee}•size: 1.25em;
    ${ee}•padding•inline: 0.25em;
  }
`,Kd=s`
  &:has(>[data-shape=square]) {
    ${ee}•border•radius: var(${l}•4);
  }

  &:has(>[data-shape=circle]) {
    ${ee}•border•radius: var(--arc-border-radius-pill);
  }
`,Yd=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Wd}
  ${Gd}
  ${Zd}
  ${Kd}
}

/* CORE ------------------------------------------------------------• */

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
  font-size: var(--arc-badge-count-font-size, var(${ee}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${ee}•size);
  min-width: var(${ee}•size);
  padding-inline: var(${ee}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Cn}));
  background: var(--arc-badge-count-background, var(${kn}));
  border-radius: var(${ee}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${ee}•font•size•text, 1em);
  }
}

`,qd=Ee(_e,["inherit","lg","md","sm"]),Jd=Ee(ie,["neutral","brand","critical","warning","success","inverse"]),Xd=["low","high"],Qd=Ee(jt,["square","circle"]),eu={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},ru=({children:e,text:r,color:t,variant:a,contrast:o,size:c="inherit",shape:i="square",...u})=>{const d=e||(0,n.jsx)("span",{"data-element":"text",children:r}),h=t??eu[a??"neutral"],v=a==="critical"?"high":o??"low";return(0,n.jsx)("span",{...u,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":v,"data-shape":i,"data-size":c,children:d})})};H("ArcBadgeCount",Yd);const _r=s`--arc•label`,ta=s`${_r}•cursor`,aa=s`${_r}•opacity`,tu=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${aa}: var(--arc-label-opacity, unset);
    ${aa}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${_r}•display: var(--arc-label-display, inline-flex);
    ${_r}•gap: var(--arc-label-gap, var(${l}•8));
    ${_r}•align•items: var(--arc-label-align-items, baseline);

    ${ta}: var(--arc-label-cursor, pointer);
    ${ta}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${ta}: var(${ta}•disabled);
      ${aa}: var(${aa}•disabled);
    }

    &[data-layout=fill] {
      ${_r}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${_r}•display);
    align-items: var(${_r}•align•items);
    gap: var(${_r}•gap);
    cursor: var(${ta});
  }

}
`,au=L(ir,["hug","fill"]),it=({layout:e,...r})=>(0,n.jsx)("label",{...r,"arc-label":"","data-layout":e});H("ArcLabel",tu);const ou=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${aa}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,st=e=>(0,n.jsx)("span",{...e,"arc-label-content":""});H("LabelContent",ou);const nu={checkbox:"checkbox",radio:"radio",switch:"radio"},oa=({id:e,indeterminate:r,type:t,onChange:a,...o})=>{const c=t==="checkbox"&&!!r,i=(0,y.useRef)(null),u=Ke(e,`arc-${t}`),d=h=>v=>{if(!(v?.target instanceof HTMLInputElement))return;const f={checked:v?.target.checked,indeterminate:v?.target?.indeterminate,name:v?.target?.name,value:o?.value};h?.(f,v)};return(0,y.useEffect)(()=>{i.current?.type==="checkbox"&&(i.current.indeterminate=!!r)},[r]),(0,n.jsx)("input",{...o,id:u,ref:i,type:nu[t],"arc-input-type":t,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:d(a)})},iu=s`
@layer arc-components {

  [arc-input-mask] {
    ${x}•border•width: var(--arc-border-width-sm);
    ${x}•border: var(${x}•border•width) solid var(${x}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${x}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${x}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${x}•outline: var(${x}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
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
    width: var(${x}•width);
    height: var(${x}•height);
    opacity: var(${x}•opacity, var(--arc-alpha-100));

    color: var(${x}•color, transparent);
    background: var(${x}•background);
    border: var(${x}•border);
    border-radius: var(${x}•border•radius);
    translate: var(${x}•translate, unset);

    outline: var(${x}•outline, none);
    outline-offset: var(${x}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${x}•border•width) * -1);
      cursor: var(${x}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${x}•z•index, unset);
    }
  }

}
`,co=({type:e,...r})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...r,"arc-input-mask":e})});H("ArcBooleanInputMask",iu);const $e=s`--arc•checkbox`,su=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${$e}•font•size: 1em;
      ${$e}•icon•size: 0.625em;
      ${$e}•size: 1.125em;
      ${$e}•gap: 0.5em;
    }

    &[data-size=md] {
      ${$e}•font•size: var(${l}•14);
      ${$e}•icon•size: var(${l}•10);
      ${$e}•size: var(${l}•18);
      ${$e}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${$e}•font•size: var(${l}•12);
      ${$e}•icon•size: var(${l}•10);
      ${$e}•size: var(${l}•16);
      ${$e}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${x}•border•radius: var(${l}•4);
    ${x}•size: var(${$e}•size);
    ${x}•icon•size: var(${$e}•icon•size);
    ${x}•width: var(${$e}•size);
    ${x}•height: var(${$e}•size);
    ${x}•translate: 0 var(${l}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${$e}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${$e}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${x}•color: transparent;
      ${x}•border•color: var(--arc-color-border-stark);
      ${x}•background: transparent;

      &:hover {
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${x}•border•color: var(--arc-color-border-disabled);
        ${x}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-on-theme-heavy);
        ${x}•border•color: transparent;
        ${x}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-on-theme-stark);
          ${x}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-on-theme-mid);
          ${x}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-theme-heavy);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-theme-stark);
          ${x}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-theme-subtle);
          ${x}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,cu=L(ir,["hug","fill"]),lu=L(_e,["inherit","md","sm"]),du=L(ie,["primary","secondary"]),ms=({children:e,label:r,layout:t,size:a="md",variant:o="primary",useMask:c=!0,...i})=>{const{className:u,title:d,...h}=i,v={className:u,title:d},f=e??r,p=(0,n.jsx)(oa,{...h,type:"checkbox"}),$=c&&(0,n.jsxs)(co,{type:"checkbox",children:[p,(0,n.jsx)(D,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),w=!!f&&(0,n.jsxs)(it,{layout:t,children:[$||p,(0,n.jsx)(st,{children:f})]});return(0,n.jsx)("span",{...v,"arc-checkbox":"","data-size":a,"data-variant":o,children:w||$||p})};H("ArcCheckbox",su);const Je=s`--arc•cb`,re=s`${Je}•o`,Xe=s`${re}•border`,Sn=s`${re}•icon`,zn=s`${re}•text`,uu=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Je}•font•size: var(${l}•14);
    ${Je}•border•radius: var(${l}•6);
    ${Je}•background: var(--arc-color-alpha-black-0);
    ${Je}•padding: 0px;
    ${Je}•gap: var(${l}•2);

    ${re}•color: var(--arc-color-fg-secondary);
    ${re}•background: var(--arc-color-alpha-white-0);

    ${Xe}•color: var(--arc-color-alpha-black-0);
    ${Xe}•width: var(${l}•1);
    ${Xe}•radius: var(${l}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${re}•size: var(${l}•40);
      ${re}•line•height: var(${l}•38); /* • -2px to account for border-width (top/bottom) */
      ${Sn}•padding: var(${l}•8);
      ${zn}•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${re}•size: var(${l}•32);
      ${re}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${Sn}•padding: var(${l}•6);
      ${zn}•padding: var(${l}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Je}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Je}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${re}•color: var(--arc-color-fg-on-hover-default);
        ${re}•background: var(--arc-color-bg-hover-default);
        ${Xe}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${re}•color: var(--arc-color-fg-primary);
      ${re}•background: var(--arc-color-bg-secondary);
      ${Xe}•color: var(--arc-color-alpha-black-0);
      ${re}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${re}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${re}•outline: var(${Xe}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Je}•font•size));
    display: var(${Je}•display);
    gap: var(${Je}•gap);
    background: var(${Je}•background);
    border-radius: var(${Xe}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Xe}•radius);
      outline: var(${re}•outline, none);
      outline-offset: var(${Xe}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${re}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${re}•size);
      min-width: var(${re}•size);

      border-radius: var(${Xe}•radius);
      border: var(${Xe}•width) solid var(${Xe}•color);
      background: var(${re}•background);
      color: var(${re}•color);
      font-weight: var(${re}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${zn}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Sn}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,hu=L(ir,["hug","fill"]),vu=L(_e,["lg","md"]),pu=({children:e,label:r,icon:t,...a})=>{const o=e||(0,n.jsx)(Ye,{icon:t,text:r});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(ms,{...a,label:o,layout:"fill",useMask:!1})})},fu=({children:e,size:r="lg",layout:t="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-checkbox-bar":"","data-size":r,"data-layout":t,role:"group",children:e});H("ArcCheckboxBar",uu);const $u=s`--arc•menu`,Hr=s`${$u}•item`,gu=s`
@layer arc-components {

  [arc-menu] {
    ${Hr}•gap: var(${l}•8);
    ${Hr}•fg: inherit;
    ${Hr}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${l}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${l}•2));
    padding: var(--arc-menu-padding, var(${l}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Hr}•gap));

    background: var(--arc-menu-item-background, var(${Hr}•bg));
    color: var(--arc-menu-item-color, var(${Hr}•fg));
    padding: var(--arc-menu-item-padding, var(${l}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${Hr}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${l}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Hr}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`,mu=e=>[{test:()=>!!e.variant,value:e.variant},{test:()=>!!e.icon&&typeof e.subtext<"u",value:"icon-text-detail"},{test:()=>!!e.icon,value:"icon-text"},{test:()=>!!e.avatar&&typeof e.subtext<"u",value:"user-detail"},{test:()=>!!e.avatar,value:"user"},{test:()=>typeof e.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],bu={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},ct={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},yu=({icon:e,...r})=>{const t=e&&typeof e=="string"?`${e.replace(" fa-fw","")} arc-fw`:e;return{divider:(0,n.jsx)("hr",{}),"section-label":(0,n.jsx)(Ye,{...r,...ct,icon:t,size:"sm",isStrong:!0}),"icon-text":(0,n.jsx)(Ye,{...r,...ct,icon:t}),"icon-text-detail":(0,n.jsx)(Ye,{...r,...ct,icon:t,isStrong:!0}),text:(0,n.jsx)(Ye,{...r,...ct}),"text-detail":(0,n.jsx)(Ye,{...r,...ct,subtext:r.subtext??"sub",isStrong:!0}),user:(0,n.jsx)(tn,{...r,...ct,size:"sm"}),"user-detail":(0,n.jsx)(tn,{...r,...ct,size:"md",isStrong:!0})}},xu=e=>e?.role??bu[na(e)]??"menuitem",na=e=>mu(e)?.find(({test:r})=>r())?.value??"text",bs=e=>r=>yu(r)[e],wu=(e,r,t,a)=>{let o=1,c=e;const i=d=>d>=t?0:d+1,u=d=>d<=0?t:d-1;for(;o<=t;){const d=i(c),h=u(c),v={previous:r==="previous"?h:c,actual:c,next:r==="next"?d:c}[r];if(a(v))return v;c=v,o+=1}return-1},Au=({items:e,filterText:r,renderItem:t,isVisible:a,...o})=>{const c=(0,y.useRef)(null),i=(0,y.useRef)([]),[u,d]=(0,y.useState)(-1),[h,v]=(0,y.useState)(!1),[f,p]=(0,y.useState)(Math.max(e.length-1,0));(0,y.useEffect)(()=>{a&&c.current&&(i.current=Array.from(c.current.querySelectorAll("[arc-button=custom]")))},[a,e]);const $=(0,y.useCallback)(S=>i.current[S]||null,[]),w=(0,y.useCallback)((S,z)=>{const P=wu(S,z,f,$);d(P),$(P)?.focus()},[f,$]),k=(0,y.useCallback)((S,z)=>()=>{!h&&z&&w(S,"actual")},[h,w]),I={ArrowUp:S=>w(S,"previous"),ArrowDown:S=>w(S,"next"),Home:()=>w(0,"actual"),End:()=>w(f,"actual")},M=S=>z=>{Object.keys(I).includes(z.key)&&(v(!0),z.stopPropagation(),z.preventDefault(),I[z.key](S))},_=(0,y.useMemo)(()=>{const S=r?e.filter(z=>Object.values(z).some(P=>P===r)):e;return p(Math.max(S.length-1,0)),S},[e,r]),E=(0,y.useMemo)(()=>_.map(({itemId:S,role:z,...P},N)=>{const W=na(P)||"",J=z||xu(P)||"menuitem",te=N===u;return(0,n.jsx)("li",{"arc-menu-item":W,role:J,onMouseEnter:k(N,!!P.onClick),children:t?.(P,N,{filterText:r,isCurrent:te})},S)}),[u,r,_,t,k]);return(0,y.useEffect)(()=>{a&&w(-1,"next")},[a,w]),(0,n.jsx)("ul",{...o,ref:c,"arc-menu":"",role:"menu",onKeyDown:M(u),onMouseLeave:()=>d(-1),onMouseMove:()=>v(!1),tabIndex:a?0:-1,children:E})};H("ArcMenu",gu);const ys=e=>{const{startSlot:r,endSlot:t,onClick:a,href:o,target:c,containerProps:i,isDisabled:u,"aria-disabled":d,tooltip:h,...v}=e,f=na(v),p=bs(f),$=d??u,w=f==="divider",k=o||a,I=!w,M=I&&r?"":void 0,_=I&&t?"":void 0,E=S=>{$||(S.currentTarget.closest("[arc-popover]")?.hidePopover(),a?.(S.nativeEvent))};return k?(0,n.jsxs)(Ie,{...i,tooltip:h,href:o,target:c,"aria-disabled":$?"true":void 0,_isCustom:!0,"arc-dropdown-item":f??"","has-start-slot":M,"has-end-slot":_,onClick:E,children:[I&&r,(0,n.jsx)(p,{...v,"is-item-content":"interactive"}),I&&t]}):(0,n.jsxs)("div",{...i,"arc-dropdown-item":f??"","has-start-slot":M,"has-end-slot":_,children:[I&&r,(0,n.jsx)(p,{...v,"is-item-content":"inert"}),I&&t]})},Cu=s`--arc•dropdown`,ku=s`${Cu}•menu`,Se=s`${ku}•item`,Su=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Se}•padding: var(${g}•8) var(${g}•12);
    ${Se}•min•height: var(${l}•36);
    ${Se}•gap: var(${g}•8);

    &[arc-dropdown-item=text-detail] {
      ${Se}•min•height: var(${l}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Se}•min•height: var(${l}•32);
    }

    &[arc-dropdown-item=user] {
      ${Se}•min•height: var(${l}•40);

      &:not([has-start-slot]) {
        ${Se}•padding: var(${g}•8) var(${g}•12) var(${g}•8) var(${g}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Se}•min•height: var(${l}•48);

      &:not([has-start-slot]) {
        ${Se}•padding: var(${g}•8) var(${g}•12) var(${g}•8) var(${g}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Se}•min•height: var(${l}•8);
      ${Se}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${Se}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Se}•gap);
    text-align: start;
    min-height: var(${Se}•min•height);

    &:not([arc-button]) {
      padding: var(${Se}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Se}•padding);
      --arc-button-min-height: var(${l}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,xs=(0,y.forwardRef)((e,r)=>(0,n.jsx)(Jt,{...e,ref:r,"arc-dropdown-menu-button":""})),_n=e=>{const{items:r,renderItem:t,...a}=e,[o,c]=(0,y.useState)(!1),i=(0,y.useCallback)((...d)=>t?.(...d)||(0,n.jsx)(ys,{...d[0]}),[t]),u=d=>{c(d.newState==="open"),e?.onToggle?.(d)};return(0,n.jsx)(ra,{...a,"arc-dropdown":"",variant:"common",onToggle:u,children:(0,n.jsx)(Au,{"arc-dropdown-menu":"",items:r??[],renderItem:i,isVisible:o})})};xs.displayName="ArcDropdownButton",_n.Button=xs,_n.Item=ys,H("ArcDropdownMenu",Su);const zu=e=>(0,n.jsx)(Ie,{...e,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),lo=s`--arc•link`,$r=s`${lo}•fg`,ia=s`${$r}•hover`,sa=s`${$r}•disabled`,En=s`${lo}•outline`,ws=s`${En}•size`,Tn=s`${En}•offset`,_u=s`${lo}•cursor`,ca=s`${lo}•focus•color`,Eu=s`
@layer arc-components {
${td}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${$r}: currentcolor;
    ${ia}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${sa}: color-mix(in srgb, currentcolor, transparent 70%);

    ${ca}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${$r}: var(--arc-color-fg-primary);
    ${ia}: var(--arc-color-fg-secondary);
    ${sa}: var(--arc-color-fg-disabled);
    ${ca}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${$r}: var(--arc-color-fg-secondary);
    ${ia}: var(--arc-color-fg-primary);
    ${sa}: var(--arc-color-fg-disabled);
    ${ca}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${$r}: var(--arc-color-fg-on-mono-inverse);
    ${ia}: var(--arc-link-fg-hover-inverse);
    ${sa}: var(--arc-link-fg-disabled-inverse);
    ${ca}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${ws}: 0.125em; /* 2px */
    ${Tn}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${$r}: var(--arc-link-color-hover, var(${ia}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${En}: var(${ws}) solid var(--arc-link-color-focus, var(${ca}));
    ${Tn}: var(${Tn});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${$r}: var(--arc-link-color-disabled, var(${sa}));
    ${_u}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${$r}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${$r}));
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
`,Tu=L(ie,["inherit","primary","secondary","inverse"]),Iu=({children:e,layout:r="gutter",size:t="inherit",variant:a="inherit",tag:o="a",href:c,icon:i,text:u,overflow:d,iconSize:h,gapSize:v,isFlipped:f,isDisabled:p,...$})=>(0,n.jsx)(o,{...$,href:p?void 0:c,"arc-link":"","data-variant":a,"aria-disabled":p,"data-is-disabled":p?"":void 0,children:e||(0,n.jsx)(Ye,{icon:i,text:u,overflow:d,iconSize:h,gapSize:v,size:t,layout:r,isFlipped:f})});H("ArcLink",Eu);const ju=[...Or],Lu=L(ie,["common"]),Ru=L(ie,["common","critical"]),Mu=L(ie,["common","brand","info","success","warning","error","processing"]),Bu=["auto","dark","light","none"],Pu=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Ou=L(_e,["xl","lg","md","sm","custom","fullscreen"]),Du=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Nu=s`--arc•button•bar`,la=s`${Nu}•axis`,Fu=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${la}: row;

    &[is-flipped] {
      ${la}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${la}: column;

    &[is-flipped] {
      ${la}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${la}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(--arc-space-1));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,In=({children:e,...r})=>{const{Element:t="menu",orientation:a="horizontal",isFlipped:o=!1,...c}=r;return(0,n.jsx)(t,{...c,"arc-button-bar":a,"is-flipped":o?"":void 0,role:c.role??"group",children:e})};H("ArcButtonBar",Fu);const jn=e=>e?.matches(":modal"),Ln=(e,r)=>r.target===e,Hu=(e,r)=>r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom,da=({modalRef:e,shouldConfirm:r,setIsConfirming:t,onCloseOverride:a=void 0})=>(o,c)=>i=>{if(i?.preventDefault?.(),i?.stopPropagation?.(),!e?.current){c?.(i);return}if(a){a(o,i,e.current),c?.(i);return}if(r&&o!=="confirm:discard"){t?.(!0);return}e.current?.close(o),t?.(!1),c?.(i)},Rn=({modalRef:e,shouldConfirm:r,setIsConfirming:t,onClose:a,onToggle:o})=>{(0,y.useEffect)(()=>{const c=e.current;if(!c)return;const i=d=>{jn(c)&&Ln(c,d)&&(r?(d.preventDefault(),d.stopPropagation(),t?.(!0)):a?.("outside",d))},u=d=>{Ln(c,d)&&(t?.(!1),a?.(c.returnValue,d),o?.(!1,d))};return c.addEventListener("close",u),c.addEventListener("cancel",i),()=>{c.removeEventListener("close",u),c.removeEventListener("cancel",i)}},[e,r,t,a,o])},Mn=({modalRef:e,isOpen:r,isTopLayer:t})=>{(0,y.useEffect)(()=>{const a=e.current;a&&(r&&!a.open&&(t?a.showModal():a.show()),!r&&a.open&&a.close())},[r,t])},Bn=({modalRef:e,isOpen:r,autoFocusId:t})=>{(0,y.useEffect)(()=>{const a=e.current;if(!a||!t||!r)return;const o=a.querySelector(`#${t}`);if(!o||!(o instanceof HTMLElement))return;const c=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(c)},[e,t,r])},As=(e,r)=>(typeof e.composedPath=="function"?e.composedPath():[]).includes(r)||e.target instanceof Node&&r.contains(e.target),Cs=({modalRef:e,isOpen:r=!1,closeOnBackdrop:t=!1,attemptCloseModal:a})=>{(0,y.useEffect)(()=>{const o=e.current;if(!o||!r||!t||!jn(o))return;let c=!1;const i=d=>{c=As(d,o)},u=d=>{if(c||As(d,o))return;const h=o.getBoundingClientRect();Hu(h,d)&&a("outside")(d)};return document.documentElement?.addEventListener("pointerdown",i,{capture:!0}),document.documentElement?.addEventListener("click",u,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",i,{capture:!0}),document.documentElement?.removeEventListener("click",u,{capture:!0})}},[e,a,r,t])},ks=({modalRef:e,isOpen:r=!1,closeOnEsc:t=!1,closedBy:a="closerequest",attemptCloseModal:o})=>{(0,y.useEffect)(()=>{const c=e.current;if(!c||!r||!t||!jn(c))return;const i=u=>{if(u.key==="Escape"&&Ln(c,u)){if(a==="none"){u.stopPropagation(),u.preventDefault();return}o("escape")(u)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,o,r,t,a])},Pn=e=>(0,n.jsx)(Ie,{"aria-label":"Dismiss",text:"Dismiss",...e,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large fa-fw",layout:"icon",shape:"square",size:"md"}),On=e=>(0,n.jsx)("div",{...e,"arc-modal-content":""}),Ss=({showDivider:e,...r})=>(0,n.jsx)("header",{...r,"arc-modal-header":"","has-divider":e?"":void 0}),Vu=({glyph:e,variant:r="common"})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)(D,{icon:e,"arc-modal-glyph":"","arc-icon-status":r})}),Dn=e=>{const{titleContent:r,TitleElement:t="h2",...a}=e;return(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)(t,{...a,"arc-modal-title":"",children:typeof r=="string"?r:(0,n.jsx)(Ye,{...r})})})},Uu=({message:e,...r})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)("p",{...r,"arc-modal-message":"",children:e})}),Nn=({tag:e="section",padding:r,...t})=>(0,n.jsx)(e,{...t,"arc-modal-body":"","data-padding":r==="auto"?void 0:r}),Fn=({showDivider:e,...r})=>(0,n.jsx)("footer",{...r,"arc-modal-footer":"","has-divider":e?"":void 0}),Wu=e=>r=>{if(r.key==="Escape"){if(e==="none"){r.stopPropagation(),r.preventDefault();return}return"escape"}},j=s`--arc•modal`,Ct=s`${j}•layout`,Gu=s`${j}•header`,uo=s`${j}•body`,ua=s`${j}•footer`,zs=s`${j}•fg`,ho=s`${j}•bg`,gr=s`${j}•backdrop`,ze=s`${j}•transition`,kt=s`${Gu}•padding`,X=s`${uo}•padding`,Vr=s`${ua}•padding`,Zu=s`
  ${j}•font•size: var(${l}•14);
  ${j}•gap: var(${g}•16);

  ${Ct}•rows: auto 1fr auto;
  ${Ct}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${Ct}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${Ct}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${Ct}•rows: auto;
  }

  ${zs}: var(--arc-color-fg-primary);
  ${ho}: var(--arc-color-bg-primary);
  ${j}•border: none;
  ${j}•border•radius: var(--arc-border-radius-lg);
  ${j}•divider: var(${l}•1) solid var(--arc-color-border-mid);

  ${j}•max•width: calc(100vw - var(${g}•32));
  ${j}•min•width: unset;
  ${j}•width: auto;

  ${j}•max•height: calc(100vh - var(${g}•32));
  ${j}•min•height: unset;
  ${j}•height: max-content;

  ${ze}•y: 1vh;
  ${ze}•y•start: 2.5vh;
  ${ze}•scale: 1;
  ${ze}•scale•start: 0.975;

  ${uo}•text•align: unset;
  ${ua}•justify•content: flex-end;

  ${gr}•bg: var(--arc-color-overlay-stark);
  ${gr}•pointer•events: none;
  ${gr}•cursor: default;

  &:where([is-backdrop=light]) {
    ${gr}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${gr}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${gr}•bg: transparent;
  }
`,Ku=s`
  &[data-size=sm] {
    ${j}•width: 28em;
  }

  &[data-size=md] {
    ${j}•width: 40em;
  }

  &[data-size=lg] {
    ${j}•width: 50em;
  }

  &[data-size=xl] {
    ${j}•width: 64em;
  }

  &[data-size=custom] {
    ${j}•width: auto;
    ${j}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${j}•width: 100vw;
    ${j}•height: 100vh;
    ${j}•min•width: 100vw;
    ${j}•min•height: 100vh;
    ${j}•max•width: 100vw;
    ${j}•max•height: 100vh;
    ${j}•border•radius: var(--arc-border-radius-none);

    ${ze}•y: 0;
    ${ze}•y•start: 0;
    ${ze}•scale: 1.125;
    ${ze}•scale•start: 1.125;
  }
`,Yu=s`
  &[is-confirm] {
    ${ua}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${uo}•text•align: center;
    ${ua}•justify•content: center;

    ${X}•block•start: var(${g}•40);
    ${X}•block•end: var(${g}•20);

    ${Vr}•block•start: var(${g}•12);
    ${Vr}•block•end: var(${g}•40);

    ${j}•glyph•size: var(${l}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${j}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${j}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${g}•12);
    }
  }

  &[is-top-layer] {
    inset: var(--arc-modal-inset, 50% auto auto 50%);
    translate: var(--arc-modal-translate, -50% -50%);

    /*
      * ArcSelect Issue:
      * Avoid "translate"/"transform" on the <dialog> itself — Chrome misplaces
      * native base-select pickers (::picker(select)) when an ancestor is transformed.
      *
      * Center using inset+auto margins instead. Consumers can customize placement via
      * --arc-modal-inset / --arc-modal-margin.
      */
     @supports (appearance: base-select) {
      &:has([arc-select]) {
        --arc-modal-inset: 0;
        --arc-modal-translate: none;
        margin: var(--arc-modal-margin, auto);
      }
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,qu=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${X}•block•start: var(${g}•10);
    }

    &:has([arc-modal-footer]) {
      ${X}•block•end: var(${g}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${kt}•block•end: var(${g}•20);
      ${X}•block•start: var(${g}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${X}•block•end: var(${g}•20);
      ${Vr}•block•start: var(${g}•12);
      ${Vr}•block•end: var(${g}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${X}•inline•start: 0;
      ${X}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${X}•block•start: 0;
      ${X}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${X}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${X}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${X}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${X}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${X}•block•start: var(${g}•20);
      ${X}•inline•end: var(${g}•24);
      ${X}•block•end: var(${g}•20);
      ${X}•inline•start: var(${g}•24);
    }

    &:has([arc-modal-go-back]) {
      ${kt}•inline•start: var(${g}•20);
    }

    ${kt}:
      var(${g}•20)
      var(${g}•24)
      var(${kt}•block•end, var(${g}•10))
      var(${kt}•inline•start, var(${g}•24));

    ${X}:
      var(${X}•block•start, var(${g}•20))
      var(${X}•inline•end, var(${g}•24))
      var(${X}•block•end, var(${g}•20))
      var(${X}•inline•start, var(${g}•24));

    ${Vr}:
      var(${Vr}•block•start, var(${g}•10))
      var(${g}•24)
      var(${Vr}•block•end, var(${g}•20))
      var(${g}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${X}: 0;
    }
  }
`,Ju=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, transform;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, transform;
    }
  }
`,Xu=s`
  [arc-modal] {
    display: none;
    opacity: 0;
    transform:
      translateY(var(${ze}•y))
      scale(var(${ze}•scale));

    &:has([arc-select]) {
      transform: none;
    }

    /* ArcSelect Issue */
    @supports (appearance: base-select) {
      &:has([arc-select]) {
        transform: none;
      }
    }

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: grid;
      opacity: 1;
      transform:
        translateY(0)
        scale(1);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      transform:
        translateY(var(${ze}•y•start))
        scale(var(${ze}•scale•start));

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Hn=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Zu}
    ${Ku}
    ${Yu}
    ${qu}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${ze}•y: 0;
      ${ze}•scale: 1;
      ${ze}•y•start: 0;
      ${ze}•scale•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, transform;
    contain: layout style paint;

    padding: 0;
    color: var(--arc-modal-color, var(${zs}));
    background: var(--arc-modal-background, var(${ho}));
    border: var(--arc-modal-border, var(${j}•border));
    border-radius: var(--arc-modal-border-radius, var(${j}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${j}•width));
    height: var(--arc-modal-height, var(${j}•height));
    min-width: var(--arc-modal-min-width, var(${j}•min•width));
    min-height: var(--arc-modal-min-height, var(${j}•min•height));
    max-width: var(--arc-modal-max-width, var(${j}•max•width));
    max-height: var(--arc-modal-max-height, var(${j}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${gr}•bg));
      pointer-events: var(${gr}•pointer•events, none);
      cursor: var(${gr}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${j}•font•size));
      display: grid;
      grid-template-rows: var(--arc-modal-layout-rows, var(${Ct}•rows));
      grid-template-columns: var(--arc-modal-layout-columns, auto);
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${j}•gap));

      padding: var(${kt});
      background: var(--arc-modal-header-background, var(${ho}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${j}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${g}•4m) var(${g}•8m) var(${g}•4m) var(${g}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${g}•4m) 0 var(${g}•4m) var(${g}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${g}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${g}•4);
      }
    }

    [arc-modal-body] {
      padding: var(${X});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${uo}•text•align));
    }

    [arc-modal-footer] {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${ua}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${j}•gap));

      background: var(--arc-modal-footer-background, var(${ho}));
      padding: var(--arc-modal-footer-padding, var(${Vr}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${j}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${g}•16) var(${g}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${gr}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, auto);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${g}•32)));
      --arc-button-bar-flex: none;

      inset: var(--arc-modal-confirm-inset, 50% auto auto 50%);
      translate: var(--arc-modal-confirm-translate, -50% -50%);
      z-index: var(--arc-modal-confirm-z-index, 3);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          --arc-modal-confirm-inset: 0;
          --arc-modal-confirm-translate: none;
          margin: var(--arc-modal-confirm-margin, auto);
        }
      }
    }
  }

  ${Ju}
  ${Xu}
`,Ur={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},_s=({children:e,headerProps:r,bodyProps:t,footerProps:a,...o})=>{const c=(0,y.useRef)(null),{isOpen:i,autoFocusId:u,isTopLayer:d=Ur.isTopLayer,isInverse:h=Ur.isInverse,scheme:v=Ur.scheme,backdropColor:f=Ur.backdropColor,variant:p=Ur.variant,message:$=Ur.message,onCloseOverride:w=Ur.onCloseOverride,onConfirmDiscard:k,onConfirmCancel:I,...M}=o,{slotStart:_,TitleElement:E,titleContent:S,slotEnd:z,...P}=r||{},{primaryButton:N,secondaryButton:W,...J}=a||{},te=!!(S||_||z),oe=v==="auto"?void 0:v,ce=!!w,le=ne=>ce?w?.("confirm:discard",ne,c.current??void 0):k?.("confirm:discard",ne),xe=ne=>ce?w?.("confirm:cancel",ne,c.current??void 0):I?.("confirm:cancel",ne);Rn({modalRef:c,onClose:w}),Mn({modalRef:c,isOpen:i,isTopLayer:d}),Bn({modalRef:c,isOpen:i,autoFocusId:u});const he=ne=>{xe(ne),W?.onClick?.(ne)},tr=ne=>{le(ne),N?.onClick?.(ne)};return(0,n.jsx)("dialog",{...M,ref:c,"arc-modal":"","arc-scheme":h?"inverse":oe,"is-confirm":p||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:Wu("none"),children:(0,n.jsxs)(On,{children:[te&&(0,n.jsxs)(Ss,{...P,children:[_&&(0,n.jsx)("div",{"header-slot":"start",children:_}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Dn,{TitleElement:E,titleContent:S})}),z&&(0,n.jsx)("div",{"header-slot":"end",children:z})]}),(0,n.jsx)(Nn,{...t,children:e||$&&(0,n.jsx)("p",{style:{margin:0},children:$})}),(0,n.jsx)(Fn,{...J,children:(0,n.jsxs)(In,{children:[(0,n.jsx)(Ie,{...W,text:W?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:he}),(0,n.jsx)(Ie,{...N,text:N?.text||"Discard",variant:p??"common",hierarchy:"primary",isInverse:h,onClick:tr})]})})]})})};H("ArcModalConfirm",Hn);const Re={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Qu=({children:e,confirmProps:r,headerProps:t,bodyProps:a,dismissProps:o,footerProps:c,...i})=>{const u=(0,y.useRef)(null),[d,h]=(0,y.useState)(!1),{isOpen:v,autoFocusId:f,isTopLayer:p=Re.isTopLayer,isInverse:$=Re.isInverse,scheme:w=Re.scheme,backdropColor:k=Re.backdropColor,hasConfirmFlow:I=Re.hasConfirmFlow,hasUnsavedChanges:M=Re.hasUnsavedChanges,onCloseOverride:_=Re.onCloseOverride,bypassConfirmWhen:E=Re.bypassConfirmWhen??{},size:S=Re.size,closeOnBackdrop:z=Re.closeOnBackdrop,closeOnEsc:P=Re.closeOnEsc,showDismiss:N=Re.showDismiss,onActionError:W,onClose:J,onToggle:te,width:oe,height:ce,style:le,...xe}=i,{showGoBack:he,goBackProps:tr,slotStart:ne,TitleElement:Fe,titleContent:He,slotEnd:ar,showDivider:jr=Re.headerProps?.showDivider,...Lr}=t??{},{slotStart:or,primaryButton:nr,secondaryButton:V,tertiaryButton:we,showDivider:ve=Re.footerProps?.showDivider,...Me}=c??{},xr=!!(he||He||ne||ar),wr=!!(nr||V||we),ba=!!(wr||or),Ar=!!(I&&M),Wr=P?"closerequest":"none",Eo=w==="auto"?void 0:w,{didPressEscapeKey:ya,didClickBackdrop:dt,didClickGoBackButton:ni,didClickDismissButton:xa,didClickPrimaryButton:ii,didClickSecondaryButton:si,didClickTertiaryButton:To}=E,Gr=da({modalRef:u,shouldConfirm:Ar,setIsConfirming:h,onCloseOverride:_});Rn({modalRef:u,shouldConfirm:Ar,setIsConfirming:h,onClose:J,onToggle:te}),Mn({modalRef:u,isOpen:v,isTopLayer:p}),Bn({modalRef:u,isOpen:v,autoFocusId:f}),Cs({modalRef:u,isOpen:v,closeOnBackdrop:z,attemptCloseModal:dt?da({modalRef:u,shouldConfirm:Ar&&!dt,setIsConfirming:h}):Gr}),ks({modalRef:u,isOpen:v,closeOnEsc:P,closedBy:Wr,attemptCloseModal:ya?da({modalRef:u,shouldConfirm:Ar&&!ya,setIsConfirming:h}):Gr});const Io=()=>h(!1),ci=(Mr,Br)=>Gr(Mr)(Br),Rr=(Mr,Br,It)=>async ut=>{ut?.preventDefault?.(),ut?.stopPropagation?.();const li=()=>Br?da({modalRef:u,shouldConfirm:Ar&&!Br,setIsConfirming:h})(Mr,It?.onCloseCallback)(ut):Gr(Mr,It?.onCloseCallback)(ut);try{await It?.onClick?.(ut),li()}catch(jo){W?.(jo,{reason:Mr,event:ut})}};return(0,n.jsxs)("dialog",{...xe,ref:u,"arc-modal":"","arc-scheme":$?"inverse":Eo,"is-inverse":$?"":void 0,"is-top-layer":p?"":void 0,"is-backdrop":k==="auto"?void 0:k,"data-size":S,closedby:Wr,style:{"--arc-modal-width":oe??"","--arc-modal-height":ce??"",...le},children:[!xr&&N&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Pn,{...o,isInverse:$,onClick:Rr("button:dismiss",xa,o)})}),(0,n.jsxs)(On,{inert:d?"":void 0,children:[xr&&(0,n.jsxs)(Ss,{...Lr,showDivider:jr,children:[he&&(0,n.jsx)("div",{"header-slot":"go-back",children:(0,n.jsx)(Ie,{"arc-modal-go-back":"",icon:"fa-regular fa-arrow-left fa-fw",text:"Go Back","aria-label":"Go Back",...tr,layout:"icon",size:"md",variant:"common",hierarchy:"secondary",isInverse:$,onClick:Rr("button:back",ni,tr)})}),ne&&(0,n.jsx)("div",{"header-slot":"start",children:ne}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Dn,{TitleElement:Fe,titleContent:He})}),ar&&(0,n.jsx)("div",{"header-slot":"end",children:ar}),N&&(0,n.jsx)("div",{"header-slot":"dismiss",children:(0,n.jsx)(Pn,{...o,isInverse:$,onClick:Rr("button:dismiss",xa,o)})})]}),(0,n.jsx)(Nn,{...a,children:e}),ba&&(0,n.jsxs)(Fn,{...Me,showDivider:ve,children:[or&&(0,n.jsx)("div",{"footer-slot":"content",children:or}),wr&&(0,n.jsxs)(In,{children:[we&&(0,n.jsx)(Ie,{...we,text:we?.text||"Button",isInverse:$,variant:"common",hierarchy:"tertiary",onClick:Rr("button:tertiary",To,we)}),V&&(0,n.jsx)(Ie,{...V,text:V?.text||"Cancel",isInverse:$,variant:"common",hierarchy:"secondary",onClick:Rr("button:secondary",si,V)}),nr&&(0,n.jsx)(Ie,{...nr,text:nr?.text||"Action",isInverse:$,variant:"common",hierarchy:"primary",onClick:Rr("button:primary",ii,nr)})]})]})]}),I&&(0,n.jsx)(_s,{isOpen:d,isInverse:$,isTopLayer:p,backdropColor:k,...r,onConfirmDiscard:ci,onConfirmCancel:Io})]})};H("ArcModal",Hn);const Er={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},eh={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-duotone fa-light-emergency-on",info:"fa-solid fa-circle-info",processing:(0,n.jsx)(hn,{"arc-modal-spinner":""})},rh=({children:e,dismissProps:r,bodyProps:t,footerProps:a,...o})=>{const c=(0,y.useRef)(null),{isOpen:i,autoFocusId:u,isTopLayer:d=Er.isTopLayer,isInverse:h=Er.isInverse,scheme:v=Er.scheme,backdropColor:f=Er.backdropColor,closeOnBackdrop:p=Er.closeOnBackdrop,closeOnEsc:$=Er.closeOnEsc,variant:w=Er.variant,icon:k,TitleElement:I,titleContent:M,message:_,showDismiss:E,onCloseOverride:S=Er.onCloseOverride,onClose:z,onToggle:P,...N}=o,{primaryButton:W,...J}=a??{},te=k||eh[w],oe=$?"closerequest":"none",ce=v==="auto"?void 0:v,le=da({modalRef:c,onCloseOverride:S});return Rn({modalRef:c,onClose:z,onToggle:P}),Mn({modalRef:c,isOpen:i,isTopLayer:d}),Bn({modalRef:c,isOpen:i,autoFocusId:u}),Cs({modalRef:c,isOpen:i,closeOnBackdrop:p,attemptCloseModal:le}),ks({modalRef:c,isOpen:i,closeOnEsc:$,closedBy:oe,attemptCloseModal:le}),(0,n.jsxs)("dialog",{...N,ref:c,"arc-modal":"","arc-scheme":h?"inverse":ce,"is-alert":w||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:oe,children:[E&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Pn,{...r,isInverse:h,onClick:le("button:dismiss",r?.onClick)})}),(0,n.jsxs)(On,{children:[(0,n.jsx)(Nn,{...t,children:e||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Vu,{glyph:te,variant:w}),(0,n.jsx)(Dn,{TitleElement:I,titleContent:M}),(0,n.jsx)(Uu,{message:_})]})}),(0,n.jsx)(Fn,{...J,children:(0,n.jsx)(In,{orientation:"vertical",children:(0,n.jsx)(Ie,{...W,text:W?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:le("button:primary",W?.onClick)})})})]})]})};H("ArcModalAlert",Hn);const ge=s`--arc•radio`,th=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${ge}•font•size: 1em;
      ${ge}•icon•size: 0.625em;
      ${ge}•size: 1.125em;
      ${ge}•gap: 0.5em;
    }

    &[data-size=md] {
      ${ge}•font•size: var(${l}•14);
      ${ge}•icon•size: var(${l}•10);
      ${ge}•size: var(${l}•18);
      ${ge}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${ge}•font•size: var(${l}•12);
      ${ge}•icon•size: var(${l}•10);
      ${ge}•size: var(${l}•16);
      ${ge}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-circle);
    ${x}•size: var(${ge}•size);
    ${x}•icon•size: var(${ge}•icon•size);
    ${x}•width: var(${ge}•size);
    ${x}•height: var(${ge}•size);
    ${x}•translate: 0 var(${l}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${ge}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${ge}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${x}•color: transparent;
      ${x}•background: transparent;
      ${x}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${x}•background: var(--arc-color-bg-theme-subtle);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${x}•color: var(--arc-color-fg-on-theme-heavy);
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${x}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${x}•color: var(--arc-color-fg-on-theme-mid);
        ${x}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,ah=L(ir,["hug","fill"]),oh=L(_e,["inherit","md","sm"]),Es=({children:e,label:r,layout:t,size:a="md",useMask:o=!0,...c})=>{const{className:i,title:u,...d}=c,h={className:i,title:u},v=e??r,f=(0,n.jsx)(oa,{...d,type:"radio"}),p=o&&(0,n.jsxs)(co,{type:"radio",children:[f,(0,n.jsx)(D,{icon:"fa-solid fa-circle-small arc-fw"})]}),$=!!v&&(0,n.jsxs)(it,{layout:t,children:[p||f,(0,n.jsx)(st,{children:v})]});return(0,n.jsx)("span",{...h,"arc-radio":"","data-size":a,children:$||p||f})};H("ArcRadio",th);const De=s`--arc•rb`,O=s`${De}•o`,nh=s`
@layer arc-components {

  [arc-radio-bar] {
    ${De}•font•size: var(${l}•14);
    ${De}•border•radius: var(${l}•8);
    ${De}•background: var(--arc-color-bg-secondary);
    ${De}•padding: var(${l}•4);
    ${De}•gap: var(${l}•2);

    ${O}•color: var(--arc-color-fg-secondary);
    ${O}•background: var(--arc-color-alpha-black-0);
    ${O}•border•color: var(--arc-color-alpha-black-0);
    ${O}•border•width: var(${l}•1);
    ${O}•border•radius: var(${l}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${O}•size: var(${l}•32);
      ${O}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${O}•icon•padding: var(${l}•8);
      ${O}•text•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${O}•size: var(${l}•24);
      ${O}•line•height: var(${l}•22); /* • -2px to account for border-width (top/bottom) */
      ${O}•icon•padding: var(${l}•6);
      ${O}•text•padding: var(${l}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${De}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${De}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${O}•color: var(--arc-color-fg-on-hover-default);
        ${O}•background: var(--arc-color-bg-hover-default);
        ${O}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${O}•color: var(--arc-color-mono-black);
      ${O}•background: var(--arc-color-mono-white);
      ${O}•border•color: var(--arc-color-border-stark);
      ${O}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${O}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${O}•outline: var(${O}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${De}•font•size));
    display: var(${De}•display);
    gap: var(${De}•gap);
    border-radius: var(${De}•border•radius);
    background: var(${De}•background);
    padding: var(${De}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${O}•border•radius);
      outline: var(${O}•outline, none);
      outline-offset: var(${O}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${O}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${O}•size);
      min-width: var(${O}•size);

      border-radius: var(${O}•border•radius);
      border: var(${O}•border•width) solid var(${O}•border•color);
      background: var(${O}•background);
      color: var(${O}•color);
      font-weight: var(${O}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${O}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${O}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,ih=L(ir,["hug","fill"]),sh=L(_e,["lg","md"]),ch=({children:e,label:r,icon:t,...a})=>{const o=e||(0,n.jsx)(Ye,{icon:t,text:r});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(Es,{...a,label:o,layout:"fill",useMask:!1})})},lh=({children:e,size:r="lg",layout:t="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-radio-bar":"","data-size":r,"data-layout":t,role:"radiogroup",children:e});H("ArcRadioBar",nh);const Ts=L(ir,["fill","hug"]),Is=L(_e,["inherit","xl","lg","md"]),dh=L(ie,["outline","solid","plain"]),uh=Ts,hh=Is,vh=L(ie,["outline","solid","plain"]),St=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),ph=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),Vn=({children:e,...r})=>(0,n.jsx)(n.Fragment,{children:!!e&&(0,n.jsx)(it,{...r,children:(0,n.jsx)(st,{children:e})})}),fh=({children:e,layout:r,size:t,variant:a,tag:o="span",...c})=>(0,n.jsx)(o,{...c,"data-layout":r,"data-size":t,"data-variant":a,children:e}),$h=()=>(0,n.jsx)("span",{"input-element":"spacer"}),gh=e=>(0,n.jsx)(St,{...e,"input-element":"header"}),mh=e=>(0,n.jsx)(Vn,{...e,"input-element":"header-label"}),bh=e=>(0,n.jsx)(St,{...e,"input-element":"header-slot"}),yh=e=>(0,n.jsx)(St,{...e,"input-element":"body"}),xh=e=>(0,n.jsx)(Vn,{...e,"input-element":"input-prefix"}),wh=e=>(0,n.jsx)(Vn,{...e,"input-element":"input-suffix"}),Ah=e=>(0,n.jsx)(ph,{...e,"input-element":"input-action"}),Ch=e=>(0,n.jsx)(St,{...e,"input-element":"footer"}),kh=e=>(0,n.jsx)(St,{...e,"input-element":"footer-caption"}),Sh=e=>(0,n.jsx)(St,{...e,"input-element":"footer-slot"}),zh=e=>r=>{if(!(r?.target instanceof HTMLInputElement))return;const t={name:r?.target?.name,value:r?.target?.value};e?.(t,r)},Y=s`--arc•input`,Tr=s`${Y}•fg`,vo=s`${Tr}•disabled`,po=s`${Tr}•readonly`,fo=s`${Tr}•invalid`,Qe=s`${Y}•bg`,$o=s`${Qe}•hover`,go=s`${Qe}•disabled`,mo=s`${Qe}•readonly`,bo=s`${Qe}•invalid`,_h=s`${Y}•align`,js=s`${_h}•items`,Eh=s`${Y}•flex`,Th=s`${Eh}•direction`,Ls=s`${Y}•header`,yo=s`${Ls}•label•color`,Rs=s`${Ls}•slot•color`,Ms=s`${Y}•footer`,Un=s`${Ms}•caption•color`,Bs=s`${Ms}•slot•color`,Wn=s`${Y}•border`,Gn=s`${Wn}•radius`,Ih=s`${Wn}•width`,er=s`${Wn}•color`,Zn=s`${Y}•outline`,Ps=s`${Zn}•size`,Os=s`${Zn}•offset`,Ds=s`${Zn}•color`,ha=s`${Y}•height`,jh=s`${Y}•padding`,xo=s`${jh}•inline`,Kn=s`${xo}•end`,Ns=s`${Y}•slot`,Yn=s`${Ns}•gap`,qn=s`${Ns}•font•size`,wo=s`${er}•hover`,Ao=s`${er}•disabled`,Jn=s`${er}•readonly`,va=s`${er}•invalid`,Lh=s`${Y}•action•max•height`,Fs=s`${Y}•gap`,Xn=s`${Y}•font•size`,Rh=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${ha}: var(${l}•48);
    ${Kn}: var(${g}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${ha}: var(${l}•40);
  }

  &[data-size=md] {
    ${ha}: var(${l}•32);
    ${Gn}: var(${l}•4);
    ${Lh}: 80%;
  }

  &:has(select) {
    ${xo}: 0;
    ${js}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Xn}: var(${l}•14);
    ${qn}: var(${l}•12);

    ${ha}: var(${l}•40); /* default size */
    ${Fs}: var(${g}•6);
    ${Yn}: var(${g}•4);
    ${xo}: var(${g}•12);
    ${Kn}: var(${g}•3);
    ${Gn}: var(${l}•8);
    ${Ih}: var(${l}•1);
    ${Ps}: var(${l}•2);
    ${Os}: var(${l}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${Y}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${Xn}: 0.875em; /* 14px at 100% */
      ${qn}: 0.75em; /* 12px at 100% */
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
    ${Tr}: var(--arc-color-fg-primary);
    ${yo}: inherit;
    ${Rs}: var(--arc-color-fg-secondary);
    ${Un}: var(--arc-color-fg-secondary);
    ${Bs}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Qe}: var(--arc-color-bg-primary);
      ${$o}: var(--arc-color-bg-primary);
      ${er}: var(--arc-color-border-stark);
      ${wo}: var(--arc-color-border-heavy);

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: var(--arc-color-bg-secondary);
      ${Ao}: var(--arc-color-border-mid);

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${Jn}: var(--arc-color-border-mid);

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: var(--arc-color-bg-primary);
      ${va}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Qe}: var(--arc-color-bg-secondary);
      ${$o}: var(--arc-color-bg-hover-default);
      ${er}: transparent;
      ${wo}: var(--arc-color-border-stark);

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: var(--arc-color-bg-critical-muted);
      ${va}: transparent;

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: var(--arc-color-bg-disabled);
      ${Ao}: transparent;

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${va}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Qe}: transparent;
      ${$o}: var(--arc-color-bg-hover-default);
      ${er}: transparent;
      ${wo}: transparent;

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: transparent;
      ${va}: var(--arc-color-fg-critical-mid);

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: transparent;
      ${Ao}: transparent;

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${Jn}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${Y}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${er}: var(--arc-input-border-color-hover, var(${wo}));
      ${Qe}: var(--arc-input-background-hover, var(${$o}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Ds}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${Y}•cursor: default;
    ${Tr}: var(${po});
    ${Qe}: var(${mo});
    ${er}: var(${Jn});
  }

  &:has(input:disabled, select:disabled) {
    ${Y}•cursor: not-allowed;
    ${Tr}: var(${vo});
    ${Qe}: var(${go});
    ${er}: var(${Ao});
    ${yo}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Qe}: var(${bo});
    ${yo}: var(${Tr});
    ${er}: var(${va});
    ${Un}: var(${fo});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${Y}•display: flex;
  }

  &[data-layout=hug] {
    ${Y}•display: inline-flex;
  }

  & {
    ${Y}•border: var(--arc-border-width-sm) solid var(${er});
    ${Y}•outline: var(${Ps}) solid var(${Ds}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${Y}•display, flex);
  flex-direction: var(${Th}, column);
  gap: var(${Yn});
  color: var(--arc-input-color, var(${Tr}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${qn}));
    gap: var(${Yn});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${yo}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Rs}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Un}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Bs}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${js}, center);
    gap: var(--arc-input-gap, var(${Fs}));
    height: var(${ha});
    font-size: var(${Xn});

    color: var(--arc-input-color, var(${Tr}));
    background-color: var(--arc-input-background, var(${Qe}));
    border: var(--arc-input-border, var(${Y}•border));
    border-radius: var(--arc-input-border-radius, var(${Gn}));
    outline: var(${Y}•outline, none);
    outline-offset: var(${Os});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Y}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${xo}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Kn});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
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
      max-height: var(${Y}•action•max•height, unset);
    }
  }
}

}
`,Mh={onChangeHandler:zh,Wrapper:fh,Spacer:$h,Header:gh,HeaderLabel:mh,HeaderSlot:bh,InputBody:yh,InputPrefix:xh,InputSuffix:wh,InputAction:Ah,Footer:Ch,FooterCaption:kh,FooterSlot:Sh};H("ArcInput",Rh);const Q=Mh,Hs=s`--arc•select`,Ne=s`${Hs}•picker`,Vs=s`${Ne}•fg`,Us=s`${Ne}•bg`,Qn=s`${Hs}•option`,Co=s`${Qn}•fg`,ko=s`${Qn}•bg`,zt=s`${Qn}•icon`,Bh=s`
  ${Vs}: currentcolor;
  ${Us}: var(--arc-color-bg-mono);

  ${Ne}•width: auto;
  ${Ne}•min•width: 3em;
  ${Ne}•border•radius: var(--arc-border-radius-lg);
  ${Ne}•shadow: var(--arc-shadow-lg);

  ${Co}: currentcolor;
  ${ko}: transparent;

  ${zt}•display: none;
  ${zt}•color: var(${Co});
`,Ph=s`
  &[data-layout=fill] {
    ${Ne}•width: 100%; /* fallback */
    ${Ne}•width: anchor-size(inline);
  }
`,Oh=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Dh=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Nh=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Bh}
    ${Ph}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Ne}•display, none);
      flex-direction: column;
      gap: var(${g}•4);
      border: none;
      color: var(${Vs});
      width: var(--arc-select-picker-width, var(${Ne}•width));
      min-width: var(--arc-select-picker-min-width, var(${Ne}•min•width));
      margin: var(--arc-select-picker-margin, var(${g}•4) 0);
      padding: var(--arc-select-picker-padding, var(${g}•4));
      background: var(--arc-select-picker-background, var(${Us}));
      border-radius: var(--arc-select-picker-border-radius, var(${Ne}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Ne}•shadow));
    }

    ::picker(select):popover-open {
      ${Ne}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${l}•12);
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${g}•8);
      width: 100%;
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${l}•24);
      --arc-avatar-initial-font-size: var(${l}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [data-element=selected-icon] {
        display: none;
      }
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${g}•8);
      width: 100%;
      min-width: 0;

      color: var(${Co});
      background: var(--arc-select-option-background, var(${ko}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${g}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${ko}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${ko}: var(--arc-color-bg-selected-default);
        ${zt}•display: flex;
        ${zt}•color: var(--arc-select-option-selected-icon-color, var(${Co}));
      }

      [data-element=selected-icon] {
        display: var(${zt}•display, none);
        color: var(${zt}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }
    }
  }

  ${Oh}
  ${Dh}

}
`,Fh=(0,y.forwardRef)(({layout:e="hug",size:r="inherit",variant:t="outline",items:a,renderItem:o,headerLabel:c,headerSlot:i,footerCaption:u,footerSlot:d,readOnly:h,id:v,onChange:f,onBlur:p,onFocus:$,onKeyDown:w,onKeyUp:k,onInput:I,onInvalid:M,onClick:_,name:E,value:S,defaultValue:z,required:P,disabled:N,autoComplete:W,autoFocus:J,form:te,...oe},ce)=>{const le=Ke(v,"arc-select"),xe=t==="plain"&&e==="fill"?"hug":e,he=N||void 0,tr=h||void 0,ne=P||void 0,Fe=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),He=t!=="plain"&&!!(c||i),ar=t!=="plain"&&!!(u||d),jr=a?.filter(V=>V?.variant!=="divider"&&V?.variant!=="section-label")??[],Lr=V=>{const we=Me=>typeof Me=="string"&&Me.trim().length>0;return[V?.text,V?.avatar?.name,V?.["aria-label"]].find(we)??"Anonymous"},or=(V,we)=>{if(o)return o(V,we);const ve=na(V),Me=bs(ve),{itemId:xr,...wr}=V;return Me(wr)},nr=tr&&(S!=null||z!=null)?String(S??z):void 0;return(0,n.jsxs)(Q.Wrapper,{...oe,"arc-select":"","arc-input":"select",layout:xe,size:r,variant:t,children:[He&&(0,n.jsxs)(Q.Header,{children:[(0,n.jsx)(Q.HeaderLabel,{htmlFor:le,children:c}),!!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.HeaderSlot,{children:i})]})]}),(0,n.jsx)(Q.InputBody,{children:(0,n.jsxs)("select",{name:E,value:S,defaultValue:z,required:P,disabled:N,autoComplete:W,autoFocus:J,form:te,ref:ce,id:le,onChange:f,onBlur:p,onFocus:$,onKeyDown:w,onKeyUp:k,onInput:I,onInvalid:M,onClick:_,"aria-disabled":he,"aria-required":ne,"data-readonly":tr,children:[(0,n.jsxs)("button",{children:[(0,n.jsx)("selectedcontent",{}),(0,n.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,n.jsx)(D,{icon:"fa-regular fa-angle-down arc-fw"})})]}),jr.map((V,we)=>{const ve=V["aria-disabled"]===!0||V.disabled===!0,Me=String(V?.value??V?.itemId??we),xr=na(V),wr=Lr(V);return(0,n.jsx)("option",{value:Me,disabled:ve||nr!==void 0&&Me!==nr||void 0,"arc-select-option":"","arc-select-option-role":xr,children:Fe?(0,n.jsxs)(n.Fragment,{children:[or(V,we),(0,n.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,n.jsx)(D,{icon:"fa-regular fa-check arc-fw"})})]}):wr},V.itemId??we)})]})}),ar&&(0,n.jsxs)(Q.Footer,{children:[(0,n.jsx)(Q.FooterCaption,{children:u}),!!d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.FooterSlot,{children:d})]})]})]})});H("ArcSelect",Nh);const Hh=L(_e,["inherit","md","sm"]),me={On:"on",Off:"off"},_t={Before:"before",After:"after"},Vh=({disabled:e,id:r,name:t,size:a="md",value:o,labelOff:c,labelOn:i,onChange:u,...d})=>{const h=Ke(t,"arc-switch-name"),v=Ke(r?`${r}-off`:void 0,"arc-switch-off"),f=Ke(r?`${r}-on`:void 0,"arc-switch-on"),p=_=>{if(_.code==="Space"){_.preventDefault(),_.stopPropagation();const E=o===me.On?me.Off:me.On;u?.({value:E},_)}},$=_=>{const E={on:Vt(i),off:Vt(c)};return E?.on&&E?.off?E[_]:!E?.on&&E?.off?`${E?.off}: ${_}`:E?.on&&!E?.off?`${E?.on}: ${_}`:E[_]},w=(0,n.jsxs)(co,{type:"switch",onKeyDown:p,children:[(0,n.jsx)(oa,{type:"switch",name:h,id:v,value:me.Off,checked:o===me.Off,disabled:e,"aria-label":$(me.Off)?.trim(),onChange:u}),(0,n.jsx)(oa,{type:"switch",name:h,id:f,value:me.On,checked:o===me.On,disabled:e,"aria-label":$(me.On)?.trim(),onChange:u}),(0,n.jsx)("span",{"data-element":"mask"})]}),k=!i&&o===me.Off?f:v,I=!c&&o===me.On?v:f,M=!!(i||c)&&(0,n.jsxs)(n.Fragment,{children:[!!c&&(0,n.jsx)(it,{htmlFor:k,"arc-switch-label":i?me.Off:"",children:(0,n.jsx)(st,{children:c})}),w,!!i&&(0,n.jsx)(it,{htmlFor:I,"arc-switch-label":c?me.On:"",children:(0,n.jsx)(st,{children:i})})]});return(0,n.jsx)("span",{...d,"arc-switch":"","data-state":o,"data-size":a,role:"radiogroup",children:M||w})},ue=s`--arc•switch`,q=s`${ue}•knob`,Uh=s`
@layer arc-components {

  [arc-switch] {
    ${ue}•background: var(--arc-color-alpha-white-100);
    ${q}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${ue}•background: var(--arc-color-alpha-white-70);
      ${q}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${x}•background: var(--arc-color-bg-neutral-subtle);
      ${x}•border•color: var(--arc-color-border-stark);
      ${q}•border•color: var(--arc-color-border-on-stark);
      ${q}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•border•color: var(--arc-color-border-heavy);
        ${q}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
        ${q}•border•color: var(--arc-color-border-on-stark);
        ${q}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: var(--arc-color-border-theme-heavy);
      ${q}•border•color: var(--arc-color-border-theme-heavy);
      ${q}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${x}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${ue}•font•size: 1em;
      ${ue}•width: 2.5em;
      ${ue}•height: 1.5em;
      ${ue}•gap: 0.5em;
      ${q}•size: 1.5em;
      ${q}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${ue}•font•size: var(${l}•14);
      ${ue}•width: var(${l}•40);
      ${ue}•height: var(${l}•24);
      ${ue}•gap: var(${l}•8);
      ${q}•x•shift: var(${l}•4);
      ${q}•size: var(${l}•24);
    }

    &[data-size=sm] {
      ${ue}•font•size: var(${l}•12);
      ${ue}•width: var(${l}•30);
      ${ue}•height: var(${l}•14);
      ${ue}•gap: var(${l}•8);
      ${q}•x•shift: var(${l}•1);
      ${q}•size: var(${l}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-pill);
    ${x}•width: var(${ue}•width);
    ${x}•height: var(${ue}•height);
    ${x}•x•shift: var(${q}•x•shift);
    ${x}•size: var(${q}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${q}•translate: calc(-100% + var(${q}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${q}•translate: calc(0% - var(${q}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${ue}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${ue}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${x}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${q}•translate);

      display: inline-flex;
      width: var(${q}•size);
      height: var(${q}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${q}•color);
      box-shadow: var(${q}•shadow);
      border: var(${x}•border•width) solid var(${q}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Wh=({disabled:e,id:r,name:t,size:a="md",value:o,label:c,labelPosition:i=_t.After,onChange:u,labelOff:d,labelOn:h,...v})=>{const f=Ke(t,"arc-switch-name"),p=Ke(r,"arc-switch"),$=(I,M)=>{const _=I.checked?me.On:me.Off;u?.({...I,value:_},M)};!c&&(h||d)&&(c=h||d,i=h?_t.After:_t.Before);const w=(0,n.jsxs)(co,{type:"checkbox",children:[(0,n.jsx)(oa,{type:"checkbox",name:f,id:p,checked:o===me.On,disabled:e,role:"switch","aria-checked":o===me.On,"aria-label":c?void 0:"Toggle switch",tabIndex:0,onChange:$}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),k=(0,n.jsx)(it,{htmlFor:p,"arc-switch-label":i,children:(0,n.jsx)(st,{children:c})});return d&&h?(0,n.jsx)(Vh,{...v,disabled:e,id:r,name:t,labelOff:d,labelOn:h,size:a,value:o,onChange:u}):(0,n.jsxs)("span",{...v,"arc-switch":"","data-state":o,"data-size":a,"data-label-position":i,role:"presentation","aria-live":"off",children:[c&&i===_t.Before&&k,w,c&&i===_t.After&&k]})};H("ArcSwitch",Uh);const Gh=["title","heading","subheading","body"],Ws=["h1","h2","h3","h4","h5","h6"],Gs=["code","div","li","p","pre","span"],Zs=[...Ws,...Gs],Zh=[...Or],Kh=["title-inherit","title-lg","title-md","title-sm"],Yh=["heading-inherit","heading-lg","heading-md","heading-sm"],qh=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Jh=L(ie,["inherit","primary","primary-inverse"]),Xh=["body-inherit","body-lg","body-md","body-sm","body-xs"],Qh=Ee(ie,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),ev=L(ka,["inherit","start","center","justify","end"]),rv=L(Sa,["inherit","loose","standard","tight"]),tv={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},av=e=>{const{align:r,lineHeight:t,size:a,variant:o,scheme:c="auto",isMonospace:i,tag:u,...d}=e,h=tv?.[u]??"body",v=a?.includes("inherit")?a?.split("-")?.[0]:a,f=o?.endsWith("-inverse");let p;return c!=="auto"?p=c:f&&(p=void 0),{...d,"arc-text":v||h,"arc-scheme":p,"data-is-monospace":i?"":void 0,"data-align":r?.includes("inherit")?void 0:r,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":t?.includes("inherit")?void 0:t}},Ir=s`--arc•text`,ei=s`${Ir}•font`,Et=s`${Ir}•align`,mr=s`${Ir}fg`,Ks=s`${Ir}•flex`,Ys=s`${Ir}•hyphens`,pa=s`${Ir}•letterspacing`,br=s`${Ir}•lineheight`,qs=s`${Ir}•opacity`,Js=s`${Ir}•whitespace`,lt=s`${ei}•family`,de=s`${ei}•size`,Tt=s`${ei}•weight`,ov=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Et}: unset;
  ${mr}: unset;
  ${Ks}: unset;
  ${Ys}: auto;
  ${pa}: unset;
  ${br}: unset;
  ${qs}: unset;
  ${Js}: unset;

  ${lt}: unset;
  ${de}: unset;
  ${Tt}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${br}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${br}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${br}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Et}: start;
  }

  &[data-align=center] {
    ${Et}: center;
  }

  &[data-align=justify] {
    ${Et}: justify;
  }

  &[data-align=end] {
    ${Et}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${mr}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${mr}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${mr}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${mr}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${mr}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${mr}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${mr}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${mr}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${lt}: var(--arc-font-family-title);
  ${Tt}: var(--arc-font-weight-title);
  ${pa}: var(--arc-letter-spacing-title);
  ${br}: var(--arc-line-height-title);

  ${de}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${lt}: var(--arc-font-family-heading);
  ${Tt}: var(--arc-font-weight-heading);
  ${pa}: var(--arc-letter-spacing-heading);
  ${br}: var(--arc-line-height-heading);

  ${de}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${lt}: var(--arc-font-family-subheading);
  ${Tt}: var(--arc-font-weight-subheading);
  ${pa}: unset;
  ${br}: var(--arc-line-height-subheading);

  ${de}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${lt}: var(--arc-font-family-body);
  ${Tt}: var(--arc-font-weight-body);
  ${br}: var(--arc-line-height-body);
  ${de}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${de}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${de}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${lt}: var(--arc-font-family-mono);
  ${br}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Ks}));
  hyphens: var(--arc-text-hyphens, var(${Ys})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${qs}));
  text-align: var(--arc-text-align, var(${Et}));
  white-space: var(--arc-text-white-space, var(${Js}));

  color: var(--arc-text-color, var(${mr}));

  font-size: var(--arc-text-font-size, var(${de}));
  font-family: var(--arc-text-font-family, var(${lt}));
  font-weight: var(--arc-text-font-weight, var(${Tt}));
  line-height: var(--arc-text-line-height, var(${br}));
  letter-spacing: var(--arc-text-letter-spacing, var(${pa}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,nv=e=>(0,y.forwardRef)((r,t)=>(0,y.createElement)(e,{...av({...r,tag:e}),ref:t})),iv=[...Zs].reduce((e,r)=>({...e,[r]:nv(r)}),{});H("Arc",ov);const sv=Ts,cv=Is,lv=L(dh,["outline","solid"]),dv=["text","number","password","email","url"],uv=(0,y.forwardRef)(({layout:e="hug",size:r="inherit",variant:t="outline",inputProps:a,headerLabel:o,headerSlot:c,inputPrefix:i,inputAction:u,inputSuffix:d,footerCaption:h,footerSlot:v,...f},p)=>{const{id:$,onChange:w,...k}=a,I=k?.type||"text",M=k?.disabled||void 0,_=k?.readOnly||void 0,E=k?.required||void 0,S=!!(o||c),z=!!(h||v);return(0,n.jsxs)(Q.Wrapper,{...f,"arc-text-input":"","arc-input":I,layout:e,size:r,variant:t,children:[S&&(0,n.jsxs)(Q.Header,{children:[(0,n.jsx)(Q.HeaderLabel,{htmlFor:$,children:o}),!!c&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.HeaderSlot,{children:c})]}),(0,n.jsxs)(Q.InputBody,{children:[(0,n.jsx)(Q.InputPrefix,{htmlFor:$,children:i}),(0,n.jsx)("input",{...k,ref:p,id:$,"arc-input-type":I,onChange:Q.onChangeHandler(w),"aria-disabled":M,"aria-readonly":_,"aria-required":E}),(0,n.jsx)(Q.InputSuffix,{htmlFor:$,children:d}),(0,n.jsx)(Q.InputAction,{children:u})]}),z&&(0,n.jsxs)(Q.Footer,{children:[(0,n.jsx)(Q.FooterCaption,{children:h}),!!v&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.FooterSlot,{children:v})]})]})}),hv=L(ie,["common","ai","critical"]),Xs=[...Or],Qs=["default","success","warning","error"],ec=L(_e,["inherit","md"]),rc=L(ie,["common"]),tc=[...Kr],vv=[...ht],ac=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],pv=hv.filter(e=>e!=="critical"),oc={size:ec[1],variant:rc[0],scheme:Xs[2],popover:tc[2],placement:ac[4],severity:Qs[0],showDismiss:!0},nc=(e,r="toggle")=>{const t=document.getElementById(e);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[r]()},ic=s`--arc•progress`,fv=s`${ic}•bar`,$v=s`${ic}•value`,sc=s`${fv}•bg`,fa=s`${$v}•bg`,gv=s`
@layer arc-components {
[arc-progress-bar] {
  ${sc}: var(--arc-color-alpha-subtle);
  ${fa}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${fa}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${fa}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${l}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${sc}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fa}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fa}));
  }
}

}
`,mv=({progress:e=0,variant:r="common",...t})=>(0,n.jsxs)("progress",{...t,"arc-progress-bar":"","data-variant":r,value:e,max:t.max||100,"aria-valuenow":e,"aria-valuemax":t.max||100,children:[e,"% "]});H("ArcProgressBar",gv);const yr=s`--arc•toast`,So=s`${yr}•content`,cc=s`${yr}•color`,lc=s`${yr}•background`,$a=s`${yr}•icon•color`,ga=s`${yr}•transition`,bv=s`
@layer arc-components {

  [arc-toast] {
    ${So}•gap: var(${g}•2);
    ${ga}•duration: 300ms;
    ${$a}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${yr}•font•size: var(${l}•16);
      ${So}•font•size: var(${l}•14);
    }

    &[data-size=inherit] {
      ${yr}•font•size: 1em;
      ${So}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${$a}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${$a}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${$a}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${lc}: var(--arc-color-bg-mono);
      ${cc}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${g}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${yr}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${cc}));
    background-color: var(--arc-toast-background, var(${lc}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${g}•12) var(${g}•12) var(${g}•12) var(${g}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${yr}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${yr}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${g}•8) var(${g}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${g}•8);
      padding: var(${g}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${$a}));

      height: 1lh;
      padding: 0 var(${g}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${So}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${g}•2);
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

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${ga}•duration) allow-discrete,
      overlay var(${ga}•duration) allow-discrete,
      content-visibility var(${ga}•duration) allow-discrete,
      opacity var(${ga}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,dc=({id:e,children:r,icon:t,heading:a,subtext:o,dismissProps:c,showDismiss:i=!0,onClose:u,actionSlot:d,size:h="md",variant:v="common",scheme:f=oc.scheme,placement:p="bottom-left",getToastId:$,progressBarProps:w,severity:k,...I})=>{const M=()=>{u?.()},_=f==="auto"?void 0:f,E=!!d||i,S=Ke(e,"arc-toast"),{variant:z,hierarchy:P,...N}=c||{};(0,y.useEffect)(()=>{$?.(S)},[$,S]);const W=Mi(t);return(0,n.jsx)("div",{...I,"arc-toast":"","arc-scheme":_,"data-size":h,"data-variant":v,"data-placement":p,"data-severity":k||void 0,id:S,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[t&&(0,n.jsx)(D,{icon:W,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:r||(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:a})}),o&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),E&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[d,i&&(0,n.jsx)(Ie,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...N,popoverTarget:S,onClick:M})]}),w&&(0,n.jsx)(mv,{...w,variant:k==="error"?"critical":w.variant,"arc-toast-progress-bar":""})]})})};dc.handleToast=nc,H("ArcToast",bv);var Yv=Be(71695),be,ae,Ze,hr,yv,uc;function xv(e=!1){if(typeof e!="boolean")throw new Error("defaultValue must be `true` or `false`");const[r,t]=be(e),a=ae(()=>{t(!0)},[]),o=ae(()=>{t(!1)},[]),c=ae(()=>{t(i=>!i)},[]);return{value:r,setValue:t,setTrue:a,setFalse:o,toggle:c}}var vr=typeof window<"u"?y.useLayoutEffect:y.useEffect;function rr(e,r,t,a){const o=(0,y.useRef)(r);vr(()=>{o.current=r},[r]),(0,y.useEffect)(()=>{const c=t?.current??window;if(!(c&&c.addEventListener))return;const i=u=>{o.current(u)};return c.addEventListener(e,i,a),()=>{c.removeEventListener(e,i,a)}},[e,t,a])}function qv(e){rr("click",r=>{e(r)})}function Jv(){const[e,r]=be(null),t=ae(async a=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(a),r(a),!0}catch(o){return console.warn("Copy failed",o),r(null),!1}},[]);return[e,t]}function wv(e){const[r,t]=be(e??0),a=ae(()=>{t(i=>i+1)},[]),o=ae(()=>{t(i=>i-1)},[]),c=ae(()=>{t(e??0)},[e]);return{count:r,increment:a,decrement:o,reset:c,setCount:t}}function Av(e,r){const t=Ze(e);vr(()=>{t.current=e},[e]),hr(()=>{if(r===null)return;const a=setInterval(()=>{t.current()},r);return()=>{clearInterval(a)}},[r])}function Xv({countStart:e,countStop:r=0,intervalMs:t=1e3,isIncrement:a=!1}){const{count:o,increment:c,decrement:i,reset:u}=wv(e),{value:d,setTrue:h,setFalse:v}=xv(!1),f=ae(()=>{v(),u()},[v,u]),p=ae(()=>{if(o===r){v();return}a?c():i()},[o,r,i,c,a,v]);return Av(p,d?t:null),[o,{startCountdown:h,stopCountdown:v,resetCountdown:f}]}function zo(e){const r=(0,y.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return vr(()=>{r.current=e},[e]),(0,y.useCallback)((...t)=>{var a;return(a=r.current)==null?void 0:a.call(r,...t)},[r])}var ri=typeof window>"u";function ti(e,r,t={}){const{initializeWithValue:a=!0}=t,o=(0,y.useCallback)(p=>t.serializer?t.serializer(p):JSON.stringify(p),[t]),c=(0,y.useCallback)(p=>{if(t.deserializer)return t.deserializer(p);if(p==="undefined")return;const $=r instanceof Function?r():r;let w;try{w=JSON.parse(p)}catch(k){return console.error("Error parsing JSON:",k),$}return w},[t,r]),i=(0,y.useCallback)(()=>{const p=r instanceof Function?r():r;if(ri)return p;try{const $=window.localStorage.getItem(e);return $?c($):p}catch($){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,$),p}},[r,e,c]),[u,d]=(0,y.useState)(()=>a?i():r instanceof Function?r():r),h=zo(p=>{ri&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{const $=p instanceof Function?p(i()):p;window.localStorage.setItem(e,o($)),d($),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch($){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,$)}}),v=zo(()=>{ri&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);const p=r instanceof Function?r():r;window.localStorage.removeItem(e),d(p),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,y.useEffect)(()=>{d(i())},[e]);const f=(0,y.useCallback)(p=>{p.key&&p.key!==e||d(i())},[e,i]);return rr("storage",f),rr("local-storage",f),[u,h,v]}var Cv=typeof window>"u";function hc(e,{defaultValue:r=!1,initializeWithValue:t=!0}={}){const a=u=>Cv?r:window.matchMedia(u).matches,[o,c]=be(()=>t?a(e):r);function i(){c(a(e))}return vr(()=>{const u=window.matchMedia(e);return i(),u.addListener?u.addListener(i):u.addEventListener("change",i),()=>{u.removeListener?u.removeListener(i):u.removeEventListener("change",i)}},[e]),o}var kv="(prefers-color-scheme: dark)",Sv="usehooks-ts-dark-mode";function Qv(e={}){const{defaultValue:r,localStorageKey:t=Sv,initializeWithValue:a=!0}=e,o=hc(kv,{initializeWithValue:a,defaultValue:r}),[c,i]=ti(t,r??o??!1,{initializeWithValue:a});return vr(()=>{o!==c&&i(o)},[o]),{isDarkMode:c,toggle:()=>{i(u=>!u)},enable:()=>{i(!0)},disable:()=>{i(!1)},set:u=>{i(u)}}}function vc(e){const r=Ze(e);r.current=e,hr(()=>()=>{r.current()},[])}function ai(e,r=500,t){const a=Ze();vc(()=>{a.current&&a.current.cancel()});const o=yv(()=>{const c=uc(e,r,t),i=(...u)=>c(...u);return i.cancel=()=>{c.cancel()},i.isPending=()=>!!a.current,i.flush=()=>c.flush(),i},[e,r,t]);return hr(()=>{a.current=uc(e,r,t)},[e,r,t]),o}function ep(e,r,t){const a=t?.equalityFn??((h,v)=>h===v),o=e instanceof Function?e():e,[c,i]=be(o),u=Ze(o),d=ai(i,r,t);return a(u.current,o)||(d(o),u.current=o),[c,d]}function rp(e,r={}){const{preserveTitleOnUnmount:t=!0}=r,a=Ze(null);vr(()=>{a.current=window.document.title},[]),vr(()=>{window.document.title=e},[e]),vc(()=>{!t&&a.current&&(window.document.title=a.current)})}function tp(e){const[r,t]=be(!1),a=()=>{t(!0)},o=()=>{t(!1)};return rr("mouseenter",a,e),rr("mouseleave",o,e),r}function ap({threshold:e=0,root:r=null,rootMargin:t="0%",freezeOnceVisible:a=!1,initialIsIntersecting:o=!1,onChange:c}={}){var i;const[u,d]=be(null),[h,v]=be(()=>({isIntersecting:o,entry:void 0})),f=Ze();f.current=c;const p=((i=h.entry)==null?void 0:i.isIntersecting)&&a;hr(()=>{if(!u||!("IntersectionObserver"in window)||p)return;let k;const I=new IntersectionObserver(M=>{const _=Array.isArray(I.thresholds)?I.thresholds:[I.thresholds];M.forEach(E=>{const S=E.isIntersecting&&_.some(z=>E.intersectionRatio>=z);v({isIntersecting:S,entry:E}),f.current&&f.current(S,E),S&&a&&k&&(k(),k=void 0)})},{threshold:e,root:r,rootMargin:t});return I.observe(u),()=>{I.disconnect()}},[u,JSON.stringify(e),r,t,p,a]);const $=Ze(null);hr(()=>{var k;!u&&((k=h.entry)!=null&&k.target)&&!a&&!p&&$.current!==h.entry.target&&($.current=h.entry.target,v({isIntersecting:o,entry:void 0}))},[u,h.entry,a,p,o]);const w=[d,!!h.isIntersecting,h.entry];return w.ref=w[0],w.isIntersecting=w[1],w.entry=w[2],w}function op(){const[e,r]=be(!1);return hr(()=>{r(!0)},[]),e}function zv(){const e=Ze(!1);return hr(()=>(e.current=!0,()=>{e.current=!1}),[]),ae(()=>e.current,[])}function np(e=new Map){const[r,t]=be(new Map(e)),a={set:ae((o,c)=>{t(i=>{const u=new Map(i);return u.set(o,c),u})},[]),setAll:ae(o=>{t(()=>new Map(o))},[]),remove:ae(o=>{t(c=>{const i=new Map(c);return i.delete(o),i})},[]),reset:ae(()=>{t(()=>new Map)},[])};return[r,a]}function ip(e,r,t="mousedown",a={}){rr(t,o=>{const c=o.target;if(!c||!c.isConnected)return;(Array.isArray(e)?e.filter(u=>!!u.current).every(u=>u.current&&!u.current.contains(c)):e.current&&!e.current.contains(c))&&r(o)},void 0,a)}var pc=typeof window>"u";function sp(e,r={}){let{initializeWithValue:t=!0}=r;pc&&(t=!1);const a=ae(d=>{if(r.deserializer)return r.deserializer(d);if(d==="undefined")return;let h;try{h=JSON.parse(d)}catch(v){return console.error("Error parsing JSON:",v),null}return h},[r]),o=ae(()=>{if(pc)return null;try{const d=window.localStorage.getItem(e);return d?a(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,d),null}},[e,a]),[c,i]=be(()=>{if(t)return o()});hr(()=>{i(o())},[e]);const u=ae(d=>{d.key&&d.key!==e||i(o())},[e,o]);return rr("storage",u),rr("local-storage",u),c}var fc={width:void 0,height:void 0};function cp(e){const{ref:r,box:t="content-box"}=e,[{width:a,height:o},c]=be(fc),i=zv(),u=Ze({...fc}),d=Ze(void 0);return d.current=e.onResize,hr(()=>{if(!r.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([v])=>{const f=t==="border-box"?"borderBoxSize":t==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",p=$c(v,f,"inlineSize"),$=$c(v,f,"blockSize");if(u.current.width!==p||u.current.height!==$){const k={width:p,height:$};u.current.width=p,u.current.height=$,d.current?d.current(k):i()&&c(k)}});return h.observe(r.current,{box:t}),()=>{h.disconnect()}},[t,r,i]),{width:a,height:o}}function $c(e,r,t){return e[r]?Array.isArray(e[r])?e[r][0][t]:e[r][t]:r==="contentBoxSize"?e.contentRect[t==="inlineSize"?"width":"height"]:void 0}var gc=typeof window>"u";function lp(e={}){let{initializeWithValue:r=!0}=e;gc&&(r=!1);const t=()=>{if(!gc)return window.screen},[a,o]=be(()=>{if(r)return t()}),c=ai(o,e.debounceDelay);function i(){const u=t(),d=e.debounceDelay?c:o;if(u){const{width:h,height:v,availHeight:f,availWidth:p,colorDepth:$,orientation:w,pixelDepth:k}=u;d({width:h,height:v,availHeight:f,availWidth:p,colorDepth:$,orientation:w,pixelDepth:k})}}return rr("resize",i),vr(()=>{i()},[]),a}var _o=new Map;function _v(e){const r=document.querySelector(`script[src="${e}"]`),t=r?.getAttribute("data-status");return{node:r,status:t}}function dp(e,r){const[t,a]=be(()=>!e||r?.shouldPreventLoad?"idle":typeof window>"u"?"loading":_o.get(e)??"loading");return hr(()=>{if(!e||r?.shouldPreventLoad)return;const o=_o.get(e);if(o==="ready"||o==="error"){a(o);return}const c=_v(e);let i=c.node;if(i)a(c.status??o??"loading");else{i=document.createElement("script"),i.src=e,i.async=!0,r?.id&&(i.id=r.id),i.setAttribute("data-status","loading"),document.body.appendChild(i);const d=h=>{const v=h.type==="load"?"ready":"error";i?.setAttribute("data-status",v)};i.addEventListener("load",d),i.addEventListener("error",d)}const u=d=>{const h=d.type==="load"?"ready":"error";a(h),_o.set(e,h)};return i.addEventListener("load",u),i.addEventListener("error",u),()=>{i&&(i.removeEventListener("load",u),i.removeEventListener("error",u)),i&&r?.removeOnUnmount&&(i.remove(),_o.delete(e))}},[e,r?.shouldPreventLoad,r?.removeOnUnmount,r?.id]),t}var Ev=typeof window>"u";function up(e={}){const{autoLock:r=!0,lockTarget:t,widthReflow:a=!0}=e,[o,c]=be(!1),i=Ze(null),u=Ze(null),d=()=>{if(i.current){const{overflow:v,paddingRight:f}=i.current.style;if(u.current={overflow:v,paddingRight:f},a){const p=i.current===document.body?window.innerWidth:i.current.offsetWidth,$=parseInt(window.getComputedStyle(i.current).paddingRight,10)||0,w=p-i.current.scrollWidth;i.current.style.paddingRight=`${w+$}px`}i.current.style.overflow="hidden",c(!0)}},h=()=>{i.current&&u.current&&(i.current.style.overflow=u.current.overflow,a&&(i.current.style.paddingRight=u.current.paddingRight)),c(!1)};return vr(()=>{if(!Ev)return t&&(i.current=typeof t=="string"?document.querySelector(t):t),i.current||(i.current=document.body),r&&d(),()=>{h()}},[r,t,a]),{isLocked:o,lock:d,unlock:h}}var oi=typeof window>"u";function Tv(e,r,t={}){const{initializeWithValue:a=!0}=t,o=(0,y.useCallback)(p=>t.serializer?t.serializer(p):JSON.stringify(p),[t]),c=(0,y.useCallback)(p=>{if(t.deserializer)return t.deserializer(p);if(p==="undefined")return;const $=r instanceof Function?r():r;let w;try{w=JSON.parse(p)}catch(k){return console.error("Error parsing JSON:",k),$}return w},[t,r]),i=(0,y.useCallback)(()=>{const p=r instanceof Function?r():r;if(oi)return p;try{const $=window.sessionStorage.getItem(e);return $?c($):p}catch($){return console.warn(`Error reading sessionStorage key \u201C${e}\u201D:`,$),p}},[r,e,c]),[u,d]=(0,y.useState)(()=>a?i():r instanceof Function?r():r),h=zo(p=>{oi&&console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);try{const $=p instanceof Function?p(i()):p;window.sessionStorage.setItem(e,o($)),d($),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))}catch($){console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`,$)}}),v=zo(()=>{oi&&console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);const p=r instanceof Function?r():r;window.sessionStorage.removeItem(e),d(p),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))});(0,y.useEffect)(()=>{d(i())},[e]);const f=(0,y.useCallback)(p=>{p.key&&p.key!==e||d(i())},[e,i]);return rr("storage",f),rr("session-storage",f),[u,h,v]}function hp(e){const[r,t]=be(1),a=r+1<=e,o=r-1>0,c=ae(h=>{const v=h instanceof Function?h(r):h;if(v>=1&&v<=e){t(v);return}throw new Error("Step not valid")},[e,r]),i=ae(()=>{a&&t(h=>h+1)},[a]),u=ae(()=>{o&&t(h=>h-1)},[o]),d=ae(()=>{t(1)},[]);return[r,{goToNextStep:i,goToPrevStep:u,canGoToNextStep:a,canGoToPrevStep:o,setStep:c,reset:d}]}var Iv="(prefers-color-scheme: dark)",jv="usehooks-ts-ternary-dark-mode";function vp({defaultValue:e="system",localStorageKey:r=jv,initializeWithValue:t=!0}={}){const a=hc(Iv,{initializeWithValue:t}),[o,c]=ti(r,e,{initializeWithValue:t});return{isDarkMode:o==="dark"||o==="system"&&a,ternaryDarkMode:o,setTernaryDarkMode:c,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];c(h=>{const v=(d.indexOf(h)+1)%d.length;return d[v]})}}}function pp(e,r){const t=Ze(e);vr(()=>{t.current=e},[e]),hr(()=>{if(!r&&r!==0)return;const a=setTimeout(()=>{t.current()},r);return()=>{clearTimeout(a)}},[r])}function fp(e){const[r,t]=be(!!e),a=ae(()=>{t(o=>!o)},[]);return[r,a,t]}var Lv=typeof window>"u";function $p(e={}){let{initializeWithValue:r=!0}=e;Lv&&(r=!1);const[t,a]=be(()=>r?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=ai(a,e.debounceDelay);function c(){(e.debounceDelay?o:a)({width:window.innerWidth,height:window.innerHeight})}return rr("resize",c),vr(()=>{c()},[]),t}var ma;(function(e){e.None="none",e.Persistent="localStorage",e.Temporary="sessionStorage"})(ma||(ma={}));const Rv=(e,r,t)=>{const[a,o]=(0,y.useState)(r),[c,i]=Tv(e,r),[u,d]=ti(e,r);return t===ma.Temporary?[c,i]:t===ma.Persistent?[u,d]:[a,o]},Mv=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
