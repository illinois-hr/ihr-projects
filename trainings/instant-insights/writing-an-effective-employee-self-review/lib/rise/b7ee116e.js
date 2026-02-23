(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_15_1__articulate_design-system-to-804785"],{24309(Un){var ma="Expected a function",Pr=NaN,Or="[object Symbol]",ba=/^\s+|\s+$/g,yo=/^[-+]0x[0-9a-f]+$/i,jt=/^0b[01]+$/i,oe=/^0o[0-7]+$/i,ya=parseInt,tr=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,xa=typeof self=="object"&&self&&self.Object===Object&&self,wa=tr||xa||Function("return this")(),ze=Object.prototype,Wr=ze.toString,Aa=Math.max,xo=Math.min,Yr=function(){return wa.Date.now()};function ut(H,ye,ar){var Dr,I,_e,Cr,Me,Ee,vr=0,Lt=!1,n=!1,y=!0;if(typeof H!="function")throw new TypeError(ma);ye=It(ye)||0,Gr(ar)&&(Lt=!!ar.leading,n="maxWait"in ar,_e=n?Aa(It(ar.maxWait)||0,ye):_e,y="trailing"in ar?!!ar.trailing:y);function Hr(ne){var hr=Dr,Xr=I;return Dr=I=void 0,vr=ne,Cr=H.apply(Xr,hr),Cr}function Mt(ne){return vr=ne,Me=setTimeout(Zr,ye),Lt?Hr(ne):Cr}function Rt(ne){var hr=ne-Ee,Xr=ne-vr,ka=ye-hr;return n?xo(ka,_e-Xr):ka}function Bt(ne){var hr=ne-Ee,Xr=ne-vr;return Ee===void 0||hr>=ye||hr<0||n&&Xr>=_e}function Zr(){var ne=Yr();if(Bt(ne))return Sa(ne);Me=setTimeout(Zr,Rt(ne))}function Sa(ne){return Me=void 0,y&&Dr?Hr(ne):(Dr=I=void 0,Cr)}function c(){Me!==void 0&&clearTimeout(Me),vr=0,Dr=Ee=I=Me=void 0}function Ao(){return Me===void 0?Cr:Sa(Yr())}function vt(){var ne=Yr(),hr=Bt(ne);if(Dr=arguments,I=this,Ee=ne,hr){if(Me===void 0)return Mt(Ee);if(n)return Me=setTimeout(Zr,ye),Hr(Ee)}return Me===void 0&&(Me=setTimeout(Zr,ye)),Cr}return vt.cancel=c,vt.flush=Ao,vt}function Gr(H){var ye=typeof H;return!!H&&(ye=="object"||ye=="function")}function Ca(H){return!!H&&typeof H=="object"}function wo(H){return typeof H=="symbol"||Ca(H)&&Wr.call(H)==Or}function It(H){if(typeof H=="number")return H;if(wo(H))return Pr;if(Gr(H)){var ye=typeof H.valueOf=="function"?H.valueOf():H;H=Gr(ye)?ye+"":ye}if(typeof H!="string")return H===0?H:+H;H=H.replace(ba,"");var ar=jt.test(H);return ar||oe.test(H)?ya(H.slice(2),ar?2:8):yo.test(H)?Pr:+H}Un.exports=ut},57594(Un,ma,Pr){"use strict";Pr.r(ma),Pr.d(ma,{Arc:()=>Mv,ArcAbstractFlexLayouts:()=>ye,ArcAbstractGapSizes:()=>Ca,ArcAbstractIconSizes:()=>Gr,ArcAbstractOrientations:()=>ar,ArcAbstractPopoverActions:()=>ut,ArcAbstractPopoverModes:()=>Yr,ArcAbstractTextLayouts:()=>H,ArcAbstractTextOverflows:()=>It,ArcAbstractTextSizes:()=>wo,ArcAvatar:()=>Fo,ArcAvatarColors:()=>li,ArcAvatarColorsReserved:()=>uc,ArcAvatarOverflow:()=>ad,ArcAvatarOverflowSizes:()=>$c,ArcAvatarPile:()=>Nc,ArcAvatarPileSizes:()=>gc,ArcAvatarSizes:()=>vc,ArcAvatarText:()=>No,ArcAvatarTextGapSizes:()=>hc,ArcAvatarTextOverflows:()=>pc,ArcAvatarTextSizes:()=>fc,ArcBadge:()=>md,ArcBadgeColors:()=>ud,ArcBadgeContrasts:()=>fd,ArcBadgeCount:()=>Ed,ArcBadgeCountColors:()=>vd,ArcBadgeCountContrasts:()=>kd,ArcBadgeCountShapes:()=>zd,ArcBadgeCountSizes:()=>Cd,ArcBadgeCountVariants:()=>Sd,ArcBadgeLayouts:()=>pd,ArcBadgeSizes:()=>hd,ArcBadgeVariants:()=>gd,ArcButton:()=>je,ArcButtonDeprecatedVariants:()=>Ui,ArcButtonHierarchies:()=>zl,ArcButtonLayouts:()=>Al,ArcButtonPopoverActions:()=>_l,ArcButtonSchemes:()=>Sl,ArcButtonShadows:()=>kl,ArcButtonShapes:()=>xl,ArcButtonSizes:()=>wl,ArcButtonVariants:()=>Cl,ArcCheckbox:()=>Qi,ArcCheckboxBar:()=>Nd,ArcCheckboxBarLayouts:()=>Hd,ArcCheckboxBarOption:()=>Fd,ArcCheckboxBarSizes:()=>Vd,ArcCheckboxLayouts:()=>Bd,ArcCheckboxSizes:()=>Pd,ArcCheckboxVariants:()=>Od,ArcDropdownMenu:()=>dn,ArcIcon:()=>B,ArcIconText:()=>Ye,ArcIconTextVariants:()=>ol,ArcInputAction:()=>ru,ArcLabel:()=>tt,ArcLabelContent:()=>at,ArcLabelLayouts:()=>jd,ArcLink:()=>nu,ArcLinkVariants:()=>ou,ArcModal:()=>zu,ArcModalAlert:()=>Eu,ArcModalAlertDefaults:()=>Lr,ArcModalAlertVariants:()=>lu,ArcModalBackdropColors:()=>du,ArcModalBodyPaddings:()=>uu,ArcModalCloseReasons:()=>hu,ArcModalCommonDefaults:()=>Ie,ArcModalCommonVariants:()=>su,ArcModalConfirm:()=>ls,ArcModalConfirmDefaults:()=>Ur,ArcModalConfirmVariants:()=>cu,ArcModalSchemes:()=>iu,ArcModalSizes:()=>vu,ArcPopover:()=>Jt,ArcPopoverActions:()=>Wc,ArcPopoverAnchors:()=>Yo,ArcPopoverBoundaries:()=>Go,ArcPopoverButton:()=>Xt,ArcPopoverDefaults:()=>Be,ArcPopoverDensities:()=>yi,ArcPopoverModes:()=>Uo,ArcPopoverSchemes:()=>Wo,ArcPopoverVariants:()=>bi,ArcPopoverVariantsWithOutline:()=>Yc,ArcRadio:()=>ds,ArcRadioBar:()=>Pu,ArcRadioBarLayouts:()=>Mu,ArcRadioBarOption:()=>Bu,ArcRadioBarSizes:()=>Ru,ArcRadioLayouts:()=>ju,ArcRadioSizes:()=>Iu,ArcSelect:()=>fv,ArcSelectLayouts:()=>Du,ArcSelectSizes:()=>Hu,ArcSelectVariants:()=>Vu,ArcSwitch:()=>bv,ArcSwitchLabelPositions:()=>kt,ArcSwitchSizes:()=>gv,ArcSwitchStates:()=>ge,ArcSystemAIGradients:()=>Aa,ArcSystemAlignments:()=>xa,ArcSystemColors:()=>Wr,ArcSystemGradients:()=>xo,ArcSystemHierarchies:()=>ya,ArcSystemLayouts:()=>tr,ArcSystemLineHeights:()=>wa,ArcSystemSchemes:()=>Or,ArcSystemShadows:()=>ba,ArcSystemShapes:()=>jt,ArcSystemSizes:()=>ze,ArcSystemSurfaces:()=>yo,ArcSystemVariants:()=>oe,ArcTextAlignments:()=>_v,ArcTextBodyElements:()=>zs,ArcTextBodySizes:()=>kv,ArcTextBodyVariants:()=>zv,ArcTextElements:()=>_s,ArcTextHeadingElements:()=>ks,ArcTextHeadingSizes:()=>Av,ArcTextHeadingVariants:()=>Sv,ArcTextInput:()=>Dv,ArcTextInputLayouts:()=>Rv,ArcTextInputSizes:()=>Bv,ArcTextInputTypes:()=>Ov,ArcTextInputVariants:()=>Pv,ArcTextKinds:()=>yv,ArcTextLineHeights:()=>Ev,ArcTextSchemes:()=>xv,ArcTextSubheadingSizes:()=>Cv,ArcTextTitleSizes:()=>wv,ArcToast:()=>Ws,ArcToastDefaults:()=>Ds,ArcToastPlacements:()=>Os,ArcToastPopoverActions:()=>Vv,ArcToastPopoverModes:()=>Ps,ArcToastProgressBarVariants:()=>Fv,ArcToastSchemes:()=>Ls,ArcToastSeverities:()=>Ms,ArcToastSizes:()=>Rs,ArcToastVariants:()=>Bs,ArcTooltip:()=>Ni,ArcTooltipDefaults:()=>nr,SVGLogoArticulate:()=>Mo,SVGLogoProductAI:()=>Ro,SVGLogoProductPeek:()=>Bo,SVGLogoProductReach:()=>Po,SVGLogoProductReview:()=>Oo,SVGLogoProductRise:()=>Do,SVGLogoProductStoryline:()=>Ho,SVGLogoProductStudio:()=>Vo,StorageType:()=>fa,adoptStyles:()=>N,assignRef:()=>Cr,bindDelegatedEvents:()=>Hi,clamp:()=>Me,createEmptyRect:()=>Ut,css:()=>c,didElementRectChange:()=>Lt,extractTextFromReactNode:()=>Nt,getPreferredAnchorForTooltipId:()=>rn,handlePopover:()=>zi,handleToast:()=>Hs,isDifferent:()=>Ee,isFixedDetector:()=>ji,isSame:()=>vr,joinArray:()=>Ii,logError:()=>Qc,logMessage:()=>Jc,logWarning:()=>Li,makeHtmlId:()=>Uc,mapDeprecated:()=>Dr,pickFromList:()=>I,pickFromListByKeys:()=>_e,shareAdoptedStyles:()=>sc,unbindDelegatedEvents:()=>bl,updatePopoverPosition:()=>Zo,useStableId:()=>Ue,useStorage:()=>ch});const Or=["auto","light","dark","inverse"],ba=["none","sm","md","lg","xl"],yo=["primary","secondary","inset","raised","floating"],jt=["circle","square","narrow"],oe=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],ya=["primary","secondary","tertiary","plain"],tr=["hug","fill","icon","gutter","inline"],xa=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],wa=["inherit","tight","standard","loose"],ze=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Wr=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Aa=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],xo=[...Aa],Yr=["","auto","manual"],ut=["toggle","show","hide"],Gr=["inherit","xl","lg","md","sm","xs"],Ca=["inherit","lg","md","sm"],wo=["inherit","md","sm"],It=["inherit","wrap","truncate"],H=["gutter","inline"],ye=["hug","fill"],ar=["horizontal","vertical"],Dr=(e,r)=>r[e]||e,I=(e,r)=>e.filter(t=>r.includes(t)),_e=(e,r)=>r.filter(t=>e.includes(t)),Cr=(e,r)=>{e&&(typeof e=="function"?e(r):e.current=r)},Me=(e,r=0,t=100)=>Math.min(Math.max(e,r),t),Ee=(e,r)=>e!==r,vr=(e,r)=>e===r,Lt=({a:e,b:r})=>Ee(e?.top,r?.top)||Ee(e?.left,r?.left)||Ee(e?.width,r?.width)||Ee(e?.height,r?.height);var n=Pr(50195),y=Pr(26372);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=globalThis,Mt=Hr.ShadowRoot&&(Hr.ShadyCSS===void 0||Hr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),Bt=new WeakMap;class Zr{constructor(r,t,a){if(this._$cssResult$=!0,a!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(Mt&&r===void 0){const a=t!==void 0&&t.length===1;a&&(r=Bt.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),a&&Bt.set(t,r))}return r}toString(){return this.cssText}}const Sa=e=>new Zr(typeof e=="string"?e:e+"",void 0,Rt),c=(e,...r)=>{const t=e.length===1?e[0]:r.reduce(((a,o,s)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new Zr(t,e,Rt)},Ao=(e,r)=>{if(Mt)e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of r){const a=document.createElement("style"),o=Hr.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=t.cssText,e.appendChild(a)}},vt=Mt?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const a of r.cssRules)t+=a.cssText;return Sa(t)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ne,defineProperty:hr,getOwnPropertyDescriptor:Xr,getOwnPropertyNames:ka,getOwnPropertySymbols:Qs,getPrototypeOf:ec}=Object,za=globalThis,Wn=za.trustedTypes,rc=Wn?Wn.emptyScript:"",tc=za.reactiveElementPolyfillSupport,Pt=(e,r)=>e,Co={toAttribute(e,r){switch(r){case Boolean:e=e?rc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},Yn=(e,r)=>!ne(e,r),Gn={attribute:!0,type:String,converter:Co,reflect:!1,useDefault:!1,hasChanged:Yn};Symbol.metadata??=Symbol("metadata"),za.litPropertyMetadata??=new WeakMap;class ht extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=Gn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(r,a,t);o!==void 0&&hr(this.prototype,r,o)}}static getPropertyDescriptor(r,t,a){const{get:o,set:s}=Xr(this.prototype,r)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){const d=o?.call(this);s?.call(this,i),this.requestUpdate(r,d,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Gn}static _$Ei(){if(this.hasOwnProperty(Pt("elementProperties")))return;const r=ec(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pt("properties"))){const t=this.properties,a=[...ka(t),...Qs(t)];for(const o of a)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[a,o]of t)this.elementProperties.set(a,o)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const o=this._$Eu(t,a);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const a=new Set(r.flat(1/0).reverse());for(const o of a)t.unshift(vt(o))}else r!==void 0&&t.push(vt(r));return t}static _$Eu(r,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(r.set(a,this[a]),delete this[a]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ao(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,t,a){this._$AK(r,a)}_$ET(r,t){const a=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,a);if(o!==void 0&&a.reflect===!0){const s=(a.converter?.toAttribute!==void 0?a.converter:Co).toAttribute(t,a.type);this._$Em=r,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(r,t){const a=this.constructor,o=a._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const s=a.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Co;this._$Em=o;const d=i.fromAttribute(t,s.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(r,t,a){if(r!==void 0){const o=this.constructor,s=this[r];if(a??=o.getPropertyOptions(r),!((a.hasChanged??Yn)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(r)&&!this.hasAttribute(o._$Eu(r,a))))return;this.C(r,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:a,reflect:o,wrapped:s},i){a&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,i??t??this[r]),s!==!0||i!==void 0)||(this._$AL.has(r)||(this.hasUpdated||a||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,s]of a){const{wrapped:i}=s,d=this[o];i!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,s,d)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach((a=>a.hostUpdate?.())),this.update(t)):this._$EM()}catch(a){throw r=!1,this._$EM(),a}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(r){}firstUpdated(r){}}ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Pt("elementProperties")]=new Map,ht[Pt("finalized")]=new Map,tc?.({ReactiveElement:ht}),(za.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const So=globalThis,_a=So.trustedTypes,Zn=_a?_a.createPolicy("lit-html",{createHTML:e=>e}):void 0,ko="$lit$",Sr=`lit$${Math.random().toFixed(9).slice(2)}$`,zo="?"+Sr,ac=`<${zo}>`,qr=document,Ot=()=>qr.createComment(""),Dt=e=>e===null||typeof e!="object"&&typeof e!="function",_o=Array.isArray,Xn=e=>_o(e)||typeof e?.[Symbol.iterator]=="function",Eo=`[ 	
\f\r]`,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Kn=/>/g,Kr=RegExp(`>|${Eo}(?:([^\\s"'>=/]+)(${Eo}*=${Eo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jn=/'/g,Qn=/"/g,ei=/^(?:script|style|textarea|title)$/i,To=e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),vh=To(1),hh=To(2),ph=To(3),pt=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),ri=new WeakMap,Jr=qr.createTreeWalker(qr,129);function ti(e,r){if(!_o(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zn!==void 0?Zn.createHTML(r):r}const ai=(e,r)=>{const t=e.length-1,a=[];let o,s=r===2?"<svg>":r===3?"<math>":"",i=Ht;for(let d=0;d<t;d++){const u=e[d];let v,p,f=-1,h=0;for(;h<u.length&&(i.lastIndex=h,p=i.exec(u),p!==null);)h=i.lastIndex,i===Ht?p[1]==="!--"?i=qn:p[1]!==void 0?i=Kn:p[2]!==void 0?(ei.test(p[2])&&(o=RegExp("</"+p[2],"g")),i=Kr):p[3]!==void 0&&(i=Kr):i===Kr?p[0]===">"?(i=o??Ht,f=-1):p[1]===void 0?f=-2:(f=i.lastIndex-p[2].length,v=p[1],i=p[3]===void 0?Kr:p[3]==='"'?Qn:Jn):i===Qn||i===Jn?i=Kr:i===qn||i===Kn?i=Ht:(i=Kr,o=void 0);const g=i===Kr&&e[d+1].startsWith("/>")?" ":"";s+=i===Ht?u+ac:f>=0?(a.push(v),u.slice(0,f)+ko+u.slice(f)+Sr+g):u+Sr+(f===-2?d:g)}return[ti(e,s+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),a]};class Vt{constructor({strings:r,_$litType$:t},a){let o;this.parts=[];let s=0,i=0;const d=r.length-1,u=this.parts,[v,p]=ai(r,t);if(this.el=Vt.createElement(v,a),Jr.currentNode=this.el.content,t===2||t===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Jr.nextNode())!==null&&u.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(ko)){const h=p[i++],g=o.getAttribute(f).split(Sr),w=/([.?@])?(.*)/.exec(h);u.push({type:1,index:s,name:w[2],strings:g,ctor:w[1]==="."?ni:w[1]==="?"?ii:w[1]==="@"?si:Ft}),o.removeAttribute(f)}else f.startsWith(Sr)&&(u.push({type:6,index:s}),o.removeAttribute(f));if(ei.test(o.tagName)){const f=o.textContent.split(Sr),h=f.length-1;if(h>0){o.textContent=_a?_a.emptyScript:"";for(let g=0;g<h;g++)o.append(f[g],Ot()),Jr.nextNode(),u.push({type:2,index:++s});o.append(f[h],Ot())}}}else if(o.nodeType===8)if(o.data===zo)u.push({type:2,index:s});else{let f=-1;for(;(f=o.data.indexOf(Sr,f+1))!==-1;)u.push({type:7,index:s}),f+=Sr.length-1}s++}}static createElement(r,t){const a=qr.createElement("template");return a.innerHTML=r,a}}function Qr(e,r,t=e,a){if(r===pt)return r;let o=a!==void 0?t._$Co?.[a]:t._$Cl;const s=Dt(r)?void 0:r._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,t,a)),a!==void 0?(t._$Co??=[])[a]=o:t._$Cl=o),o!==void 0&&(r=Qr(e,o._$AS(e,r.values),o,a)),r}class oi{constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:a}=this._$AD,o=(r?.creationScope??qr).importNode(t,!0);Jr.currentNode=o;let s=Jr.nextNode(),i=0,d=0,u=a[0];for(;u!==void 0;){if(i===u.index){let v;u.type===2?v=new ft(s,s.nextSibling,this,r):u.type===1?v=new u.ctor(s,u.name,u.strings,this,r):u.type===6&&(v=new ci(s,this,r)),this._$AV.push(v),u=a[++d]}i!==u?.index&&(s=Jr.nextNode(),i++)}return Jr.currentNode=qr,o}p(r){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(r,a,t),t+=a.strings.length-2):a._$AI(r[t])),t++}}class ft{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,a,o){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=Qr(this,r,t),Dt(r)?r===ue||r==null||r===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):r!==this._$AH&&r!==pt&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Xn(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ue&&Dt(this._$AH)?this._$AA.nextSibling.data=r:this.T(qr.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:a}=r,o=typeof a=="number"?this._$AC(r):(a.el===void 0&&(a.el=Vt.createElement(ti(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new oi(o,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(r){let t=ri.get(r.strings);return t===void 0&&ri.set(r.strings,t=new Vt(r)),t}k(r){_o(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,o=0;for(const s of r)o===t.length?t.push(a=new ft(this.O(Ot()),this.O(Ot()),this,this.options)):a=t[o],a._$AI(s),o++;o<t.length&&(this._$AR(a&&a._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const a=r.nextSibling;r.remove(),r=a}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class Ft{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,a,o,s){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=ue}_$AI(r,t=this,a,o){const s=this.strings;let i=!1;if(s===void 0)r=Qr(this,r,t,0),i=!Dt(r)||r!==this._$AH&&r!==pt,i&&(this._$AH=r);else{const d=r;let u,v;for(r=s[0],u=0;u<s.length-1;u++)v=Qr(this,d[a+u],t,u),v===pt&&(v=this._$AH[u]),i||=!Dt(v)||v!==this._$AH[u],v===ue?r=ue:r!==ue&&(r+=(v??"")+s[u+1]),this._$AH[u]=v}i&&!o&&this.j(r)}j(r){r===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class ni extends Ft{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ue?void 0:r}}class ii extends Ft{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ue)}}class si extends Ft{constructor(r,t,a,o,s){super(r,t,a,o,s),this.type=5}_$AI(r,t=this){if((r=Qr(this,r,t,0)??ue)===pt)return;const a=this._$AH,o=r===ue&&a!==ue||r.capture!==a.capture||r.once!==a.once||r.passive!==a.passive,s=r!==ue&&(a===ue||o);o&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class ci{constructor(r,t,a){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(r){Qr(this,r)}}const fh={M:ko,P:Sr,A:zo,C:1,L:ai,R:oi,D:Xn,V:Qr,I:ft,H:Ft,N:ii,U:si,B:ni,F:ci},oc=So.litHtmlPolyfillSupport;oc?.(Vt,ft),(So.litHtmlVersions??=[]).push("3.3.1");const nc=(e,r,t)=>{const a=t?.renderBefore??r;let o=a._$litPart$;if(o===void 0){const s=t?.renderBefore??null;a._$litPart$=o=new ft(r.insertBefore(Ot(),s),s,void 0,t??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis;class Ea extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=nc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pt}}Ea._$litElement$=!0,Ea.finalized=!0,jo.litElementHydrateSupport?.({LitElement:Ea});const ic=jo.litElementPolyfillSupport;ic?.({LitElement:Ea});const gh={_$AK:(e,r,t)=>{e._$AK(r,t)},_$AL:e=>e._$AL};(jo.litElementVersions??=[]).push("4.2.1");const Io={};function N(e,r){if(typeof document<"u"&&r?.styleSheet){const t=Io[e];Io[e]=r.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(a=>a!==t),r.styleSheet]}}function sc(e){const r=Object.values(Io),t=document.adoptedStyleSheets.filter(a=>r.includes(a));if(e.adoptedStyleSheets){const a=t.filter(o=>!e.adoptedStyleSheets.includes(o));e.adoptedStyleSheets=[...e.adoptedStyleSheets,...a]}}const cc=e=>e?.trim().charAt(0)??void 0,lc=(e,r)=>{let t=0;const a=Math.min(e.length,50);for(let o=0;o<a;o+=1)t=(t+e.charCodeAt(o))%(r??33);return t},dc=(e,r,t)=>r?.length?e?.trim()===""?t||r[0]:r[lc(e,r.length)]||t||r[0]:t,li=I(Wr,["blue","orange","mint","red","yellow","green","maroon","purple"]),uc=I(Wr,["neutral","white","black"]),Ta=I(ze,["lg","md","sm","xs"]),vc=[...Ta,"profile-sm","profile-md","profile-lg"],hc=Ca,pc=It,fc=Ta,gc=Ta,$c=Ta,x=c`--arc•input•mask`,l=c`--arc•size`,$=c`--arc•space`,Y=c`--arc•avatar`,ve=c`${Y}•chars`,Lo=c`

  &[data-size=lg] {
    ${Y}•font•size: var(${l}•16);
    ${Y}•size: 2.5em; /* target: 40px @ 100% */
    ${ve}•1: var(${l}•16);
    ${ve}•2: var(${l}•14);
    ${ve}•3: var(${l}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Y}•font•size: var(${l}•14);
    ${Y}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${ve}•1: var(${l}•14);
    ${ve}•2: var(${l}•12);
    ${ve}•3: var(${l}•10);
  }

  &[data-size=sm] {
    ${Y}•font•size: var(${l}•12);
    ${Y}•size: 2em; /* target: 24px @ 100% */
    ${ve}•1: var(${l}•12);
    ${ve}•2: var(${l}•10);
    ${ve}•3: var(${l}•8);
  }

  &[data-size=xs] {
    ${Y}•font•size: var(${l}•10);
    ${Y}•size: 2em; /* target: 20px @ 100% */
    ${ve}•1: var(${l}•10);
    ${ve}•2: var(${l}•8);
    ${ve}•3: var(${l}•6);
  }

`,mc=c`

  &[data-size=profile-lg] {
    ${Y}•font•size: var(${l}•40);
    ${Y}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Y}•font•size: var(${l}•32);
    ${Y}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Y}•font•size: var(${l}•28);
    ${Y}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,di=c`

  [arc-avatar] {
    ${Y}•font•size: inherit;
    ${Y}•size: inherit;
    ${ve}•1: inherit;
    ${ve}•2: inherit;
    ${ve}•3: inherit;
  }

`,et=c`${Y}•fg`,Re=c`${Y}•bg`,bc=c`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${et}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Re}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Re}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Re}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Re}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Re}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Re}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Re}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Re}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${et}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Re}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${et}: var(--arc-color-fg-secondary);
      ${Re}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${et}: var(--arc-color-mono-black);
      ${Re}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Lo}
    ${mc}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Y}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Y}•size));
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
      --arc-button-font-size: var(${ve}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${ve}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${ve}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Y}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Re}));
      --arc-button-color: var(--arc-avatar-color, var(${et}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Y}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${et}: transparent;
        ${Re}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Re});
      color: var(${et});
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
      visibility: var(${Y}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Y}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,yc=({children:e,initial:r,color:t,...a})=>(0,n.jsx)("span",{...a,"data-element":"initial","data-color":t,children:e||r}),xc=({isLoaded:e,hasError:r,onLoad:t,onError:a,...o})=>{const s=!e&&""||void 0,i=r&&""||void 0,d=!e||r||void 0;return(0,n.jsx)("img",{...o,hidden:d,"data-element":"image","data-not-loaded":s,"data-has-error":i,onLoad:t,onError:a})},Mo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Ro=e=>(0,n.jsxs)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),Bo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Po=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Oo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Do=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Ho=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Vo=e=>(0,n.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var wc;const Ac="fa-width-auto",ui="fa-fw",Cc="arc-fw",vi="arc-aw",Sc=e=>typeof e=="number"?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,kc={"arc-svg logo-articulate":(0,n.jsx)(Mo,{}),"arc-svg product-ai":(0,n.jsx)(Ro,{}),"arc-svg product-peek":(0,n.jsx)(Bo,{}),"arc-svg product-reach":(0,n.jsx)(Po,{}),"arc-svg product-review":(0,n.jsx)(Oo,{}),"arc-svg product-rise":(0,n.jsx)(Do,{}),"arc-svg product-storyline":(0,n.jsx)(Ho,{}),"arc-svg product-studio":(0,n.jsx)(Vo,{})},bh=e=>e&&e.length>0&&e?.includes("arc-svg")?kc[e]:wc("span",{className:e}),hi=e=>{const r=e.includes(Ac),t=e.includes(ui),a=e.includes(Cc),o=e.includes(vi);return{hasFaAutoWidth:r,hasFaFixedWidth:t,hasArcFixedWidth:a,hasArcAutoWidth:o}},pi=e=>((0,y.isValidElement)(e)&&e.type===B?e.props.icon:e)??void 0,fi=e=>{const r=pi(e);if(typeof r!="string")return r;const{hasFaFixedWidth:t,hasArcFixedWidth:a,hasArcAutoWidth:o}=hi(r);return!t&&!a&&!o?`${r} ${vi}`:r},zc=e=>{const r=pi(e);if(typeof r!="string")return r;let t=r;const{hasArcFixedWidth:a,hasFaFixedWidth:o}=hi(t);return a&&!o&&(t=`${t} ${ui}`),t},_c=c`--arc•icon`,kr=c`${_c}•fg`,Ec=c`
@layer arc-components {

[arc-icon] {
  ${kr}: currentcolor;

  color: var(--arc-icon-color, var(${kr}));
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
      fill: var(--arc-icon-color, var(${kr}));
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
    ${kr}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${kr}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${kr}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${kr}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error] {
    ${kr}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${kr}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Tc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-articulate arc-aw",color:e?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":e?.["aria-label"]||"Articulate Logo"}),jc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":e?.["aria-label"]||"Articulate AI Logo",gradient:e?.gradient||"ai"}),Ic=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-peek arc-aw",color:e?.color||"var(--arc-color-logo-peek, #497add)","aria-label":e?.["aria-label"]||"Articulate Peek Logo"}),Lc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-reach arc-aw",color:e?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":e?.["aria-label"]||"Articulate Reach Logo"}),Mc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-review arc-aw",color:e?.color||"var(--arc-color-logo-review, #35b062)","aria-label":e?.["aria-label"]||"Articulate Review Logo"}),Rc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-rise arc-aw",color:e?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":e?.["aria-label"]||"Articulate Rise Logo"}),Bc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-storyline arc-aw",color:e?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":e?.["aria-label"]||"Articulate Storyline Logo"}),Pc=e=>(0,n.jsx)(B,{...e,icon:"fa-kit fa-product-badge-studio arc-aw",color:e?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":e?.["aria-label"]||"Articulate Studio Logo"}),B=({children:e,icon:r="fa-regular fa-circle-dashed",color:t,size:a,style:o,gradient:s,...i})=>{const d={...o,"--arc-icon-size":Sc(a),"--arc-icon-color":t},u=!!(i["aria-label"]||i["aria-labelledby"]),v=zc(r),p=typeof v=="string"&&v.length>0?(0,n.jsx)("span",{className:v}):v;return(0,n.jsx)("span",{"aria-hidden":!u||void 0,...i,"arc-icon":"",style:d,"arc-gradient":s,children:e||p})};N("ArcIcon",Ec),B.Articulate=Tc,B.AI=jc,B.Peek=Ic,B.Reach=Lc,B.Review=Mc,B.Rise=Rc,B.Storyline=Bc,B.Studio=Pc,B.SVGArticulate=Mo,B.SVGAI=Ro,B.SVGPeek=Bo,B.SVGReach=Po,B.SVGReview=Oo,B.SVGRise=Do,B.SVGStoryline=Ho,B.SVGStudio=Vo;const Oc=({children:e,icon:r,color:t,...a})=>(0,n.jsx)("span",{...a,"data-element":"anonymous","data-color":"neutral",children:e||(0,n.jsx)(B,{icon:r})}),gi="blue",$i="neutral",Dc="fa-solid fa-user arc-aw",Fo=(0,y.forwardRef)(({children:e,size:r,color:t,isActive:a=!0,isAnonymous:o,alt:s,src:i,name:d,email:u,...v},p)=>{const[f,h]=(0,y.useState)(!1),[g,w]=(0,y.useState)(!1),C=V=>{h(!0),w(!1),v.onLoad?.(V)},E=V=>{h(!1),w(!0),v.onError?.(V)},D=cc(d||u),k=!!D,j=o||(!f||g)&&!k,S=!j&&!!i&&!g||void 0,T=(j&&$i||void 0)??(t||void 0)??dc(String(u||d||void 0),li,gi)??gi,O={src:i,alt:s,isLoaded:f,hasError:g,onLoad:C,onError:E};return(0,y.useEffect)(()=>{j&&h(!1)},[j]),(0,n.jsx)("span",{...v,ref:p,"arc-avatar":"","data-is-inactive":!a||void 0,"data-size":r,"aria-label":(v.title??d??u)||void 0,children:e||(j?(0,n.jsx)(Oc,{icon:Dc,color:$i}):(0,n.jsxs)(n.Fragment,{children:[S&&(0,n.jsx)(xc,{...O}),k&&(0,n.jsx)(yc,{initial:D,color:T})]}))})});N("ArcAvatar",bc);const xe=c`${Y}•text`,rt=c`${Y}•subtext`,gt=c`${Y}•gap`,Hc=c`
@layer arc-components {

  [arc-avatar-text] {
    ${xe}•font•size: var(${l}•14);
    ${rt}•font•size: var(${l}•12);
    ${gt}: var(${l}•8);

    ${xe}•overflow: unset;
    ${xe}•text•overflow: unset;
    ${xe}•white•space: unset;

    &[data-overflow=truncate] {
      ${xe}•overflow: hidden;
      ${xe}•text•overflow: ellipsis;
      ${xe}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${xe}•font•size: 1em;
      ${rt}•font•size: 0.875em;
      ${gt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${xe}•font•size: var(--arc-font-size-14);
      ${rt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${xe}•font•size: var(--arc-font-size-14);
      ${rt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${xe}•font•size: var(--arc-font-size-14);
      ${rt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${xe}•font•size: var(--arc-font-size-12);
      ${rt}•font•size: var(--arc-font-size-12);
      ${gt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${gt}: var(${l}•12); }
    &[data-gap=sm] { ${gt}: var(${l}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${xe}•font•size));
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
      font-size: var(--arc-avatar-subtext-font-size, var(${rt}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${xe}•overflow);
      text-overflow: var(${xe}•text•overflow);
      white-space: var(${xe}•white•space);
    }
  }

}
`,Vc="Anonymous",No=({children:e,avatar:r={},subtext:t,size:a,gapSize:o,overflow:s,isStrong:i,...d})=>{const u=r.anonymousName||Vc,v=r.name||r.email||r.src,p=r.name||r.email,f=r.isAnonymous||!v,h=e||f?u:p,g=o!=="inherit"?o:void 0,w=s!=="inherit"?s:void 0;return(0,n.jsxs)("span",{...d,"arc-avatar-text":"","data-gap":g,"data-overflow":w,"is-strong":i?"":void 0,children:[(0,n.jsx)(Fo,{...r,isAnonymous:f,size:a}),(0,n.jsxs)("span",{"data-element":"text",children:[h,t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:t})]})]})]})};N("ArcAvatarText",Hc);const Fc=c`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Lo}
    ${di}

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
`,Nc=({size:e="md",...r})=>(0,n.jsx)("div",{...r,"arc-avatar-pile":"","data-size":e});N("ArcAvatarPile",Fc);const Nt=e=>typeof e=="string"?e:typeof e=="number"?e.toString():Array.isArray(e)?e.map(Nt).join(""):(0,y.isValidElement)(e)?Nt(e.props.children):"",mi={},Uc=(e="id")=>{const r=(mi[e]??0)+1;return mi[e]=r,`${e}-${r}`},Ue=(e,r="id")=>{const t=(0,y.useId)();return e??`${r}-${t}`},Ut=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})},Uo=[...Yr],Wo=[...Or],Wc=[...ut],bi=I(oe,["common"]),Yc=I(oe,["ai","brand"]),Yo=["top-start","top-center","top-end","left-start","right-start","left-center","center","right-center","left-end","right-end","bottom-start","bottom-center","bottom-end"],Go=["ignore","flip"],yi=["compact","comfortable"],M={Threshold:0,StartX:{align:"start",y:"y1",oY:"ch",xMod:-1,yMod:1},StartY:{align:"start",x:"x1",oX:"cw",xMod:-1,yMod:1},CenterX:{align:"center",y:"cy",oY:"z",xMod:-1,yMod:1},CenterY:{align:"center",x:"cx",oX:"z",xMod:1,yMod:-1},EndX:{align:"end",y:"y2",oY:"ch",xMod:1,yMod:-1},EndY:{align:"end",x:"x2",oX:"cw",xMod:1,yMod:-1},Top:{edge:"top",y:"top",pX:"z",pY:"ch",oY:"z",pMod:-1},Bottom:{edge:"bottom",y:"bottom",pX:"z",pY:"ch",oY:"z",pMod:1},Right:{edge:"right",x:"right",pX:"cw",pY:"z",oX:"z",pMod:1},Left:{edge:"left",x:"left",pX:"cw",pY:"z",oX:"z",pMod:-1},Center:{edge:"center",pX:"cw",pY:"ch",pMod:0}},We=(e,r,t)=>t==="left"&&e.a.left>=e.v.threshold&&e.a.left-e.p.width+r.x>=e.v.threshold||t==="top"&&e.a.top>=e.v.threshold&&e.a.top-e.p.height+r.y>=e.v.threshold||t==="right"&&e.a.right<=e.v.width-e.v.threshold&&e.a.right+e.p.width+r.x<=e.v.width-e.v.threshold||t==="bottom"&&e.a.bottom<=e.v.height-e.v.threshold&&e.a.bottom+e.p.height+r.y<=e.v.height-e.v.threshold,xi=(e,r)=>e.a.top+e.p.height+r.y<=e.v.height-e.v.threshold&&e.a.top>=e.v.threshold,wi=(e,r)=>e.a.left+e.p.width+r.x<=e.v.width-e.v.threshold&&e.a.left>=e.v.threshold,Ai=(e,r)=>e.a.cy+e.p.ch+r.y<=e.v.height-e.v.threshold&&e.a.cy-e.p.ch+r.y>=e.v.threshold,Ci=(e,r)=>e.a.cx+e.p.cw+r.x<=e.v.width-e.v.threshold&&e.a.cx-e.p.cw+r.x>=e.v.threshold,Si=(e,r)=>e.a.bottom<=e.v.height-e.v.threshold&&e.a.bottom-e.p.height+r.y>=e.v.threshold,ki=(e,r)=>e.a.right<=e.v.width-e.v.threshold&&e.a.right-e.p.width+r.x>=e.v.threshold,Wt={"top-start":{...M.Top,...M.StartY,fitCheck:(e,r)=>We(e,r,M.Top.edge)&&wi(e,r),flip:"bottom-start"},"top-center":{...M.Top,...M.CenterY,fitCheck:(e,r)=>We(e,r,M.Top.edge)&&Ci(e,r),flip:"bottom-center"},"top-end":{...M.Top,...M.EndY,fitCheck:(e,r)=>We(e,r,M.Top.edge)&&ki(e,r),flip:"bottom-end"},"right-start":{...M.Right,...M.StartX,fitCheck:(e,r)=>We(e,r,M.Right.edge)&&xi(e,r),flip:"left-start"},"right-center":{...M.Right,...M.CenterX,fitCheck:(e,r)=>We(e,r,M.Right.edge)&&Ai(e,r),flip:"left-center"},"right-end":{...M.Right,...M.EndX,fitCheck:(e,r)=>We(e,r,M.Right.edge)&&Si(e,r),flip:"left-end"},center:{...M.Center,...M.CenterX,...M.CenterY,fitCheck:(e,r)=>e.a.cx-e.p.cw+r.x>=e.v.threshold&&e.a.cx+e.p.cw+r.x<=e.v.width-e.v.threshold&&e.a.cy-e.p.ch+r.y>=e.v.threshold&&e.a.cy+e.p.ch+r.y<=e.v.height-e.v.threshold,flip:"center"},"bottom-start":{...M.Bottom,...M.StartY,fitCheck:(e,r)=>We(e,r,M.Bottom.edge)&&wi(e,r),flip:"top-start"},"bottom-center":{...M.Bottom,...M.CenterY,fitCheck:(e,r)=>We(e,r,M.Bottom.edge)&&Ci(e,r),flip:"top-center"},"bottom-end":{...M.Bottom,...M.EndY,fitCheck:(e,r)=>We(e,r,M.Bottom.edge)&&ki(e,r),flip:"top-end"},"left-start":{...M.Left,...M.StartX,fitCheck:(e,r)=>We(e,r,M.Left.edge)&&xi(e,r),flip:"right-start"},"left-center":{...M.Left,...M.CenterX,fitCheck:(e,r)=>We(e,r,M.Left.edge)&&Ai(e,r),flip:"right-center"},"left-end":{...M.Left,...M.EndX,fitCheck:(e,r)=>We(e,r,M.Left.edge)&&Si(e,r),flip:"right-end"}},Be={popover:Uo[0],anchorAt:Yo[10],boundary:Go[0],variant:bi[0],scheme:Wo[0],density:yi[0],isInverse:!1,hasTail:!1,tailSize:10,threshold:0,offset:0},zi=(e,r="toggle")=>{const t=document.getElementById(e);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[r]()},Gc=(e=Be.threshold)=>({threshold:e,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,scrollX:window.scrollX,scrollY:window.scrollY,left:window.scrollX,top:window.scrollY,right:window.scrollX+document.documentElement.clientWidth,bottom:window.scrollY+document.documentElement.clientHeight}),_i=e=>({...JSON.parse(JSON.stringify(e)),cw:e.width/2,ch:e.height/2,cx:e.left+e.width/2,cy:e.top+e.height/2,x1:e.left,x2:e.left+e.width,y1:e.top,y2:e.top+e.height,z:0}),Zc=(e,r,t=Be.offset,a=Be.tailSize,o=Be.threshold)=>({a:_i(e?.getBoundingClientRect()??Ut()),p:_i(r?.getBoundingClientRect()??Ut()),o:t,v:Gc(o),t:a}),Ei=(e,r,t)=>({x:["left","right"].includes(e)?r*t:0,y:["top","bottom"].includes(e)?r*t:0}),Xc=(e,r)=>[...Object.keys(Wt)].filter(t=>Ee(t,e)&&Ee(r.align,"center")?!t.includes("center"):t).sort((t,a)=>{const o=vr(Wt[t].edge,r.edge),s=vr(Wt[a].edge,r.edge),i=o?-1:1;return vr(o,s)?0:i}),Ti=({anchorAt:e,measurements:r})=>{const t=Wt[e],a=Ei(t.edge,r.o,t.pMod);return{cx:r.a.cx,cy:r.a.cy,offsets:a,config:t}},qc=({anchorAt:e,measurements:r})=>{const{offsets:t,config:a}=Ti({anchorAt:e,measurements:r});return a.fitCheck(r,t)?e:[a.flip,...Xc(e,a)].find(o=>{const s=Wt[o],i=Ei(s.edge,r.o,s.pMod);return s.fitCheck(r,i)})??e},zr=(e,r="px")=>`${Math.round(Number(e))}${r}`,Zo=({anchorElement:e,popoverElement:r,anchorAt:t=Be.anchorAt,boundary:a,offset:o,tailSize:s,threshold:i=M.Threshold,isFixed:d=!1})=>{const u=t,v=Zc(e,r,o,s,i),p=a==="flip"?qc({anchorAt:u,measurements:v}):u,{cx:f,cy:h}=Ti({anchorAt:p,measurements:v}),g={cx:f,cy:h},w=d?0:window.scrollX,C=d?0:window.scrollY,E=e?.dataset?.layout==="icon"||v.t>0||!t?.includes("-center")&&(t?.includes("left-")||t?.includes("right-"));return{anchorAt:p,vars:{"--js-cx":zr(g.cx+w),"--js-cy":zr(g.cy+C),"--js-w":zr(v.a.width),"--js-h":zr(v.a.height),"--js-cw":zr(v.a.cw),"--js-ch":zr(v.a.ch),"--js-o":zr(v.o),"--js-t":zr(v.t,""),"--js-i":E?"1":"0","--js-m":zr(Me(v.t,v.a.height,v.a.cw))}}},ji=(e,r=150)=>{let t=!1,a=0,o=0,s=0,i=null,d=null,u=null;const v=p=>{if(i!==null)return i;let f=p;for(;f&&f!==document.documentElement;){const{position:h}=window.getComputedStyle(f);if(h==="fixed"||h==="sticky")return i=!0,!0;f=f.parentElement}return i=!1,!1};return()=>{if(!e)return{isFixed:!1,rect:Ut()};e!==u&&(i=null,u=e,s=0);const p=Math.round(performance.now());if(p-s<=r)return{isFixed:t,rect:d??Ut()};s=p,d=e.getBoundingClientRect();const f=d.top!==a||d.left!==o;return a=d.top,o=d.left,t=(t?!0:v(e))||!f,{isFixed:t,rect:d}}},Ii=(e,r=1/0,t=" ")=>[...e].flat(r)?.filter(Boolean)?.join(t),Kc=c`
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
`,Xo=(0,y.forwardRef)(({progress:e,...r},t)=>(0,n.jsxs)("svg",{...r,ref:t,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":e??""},children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Xo.displayName="ArcSpinner",N("ArcSpinner",Kc);const Jc=(...e)=>console.log(...e),Li=(...e)=>console.warn(...e),Qc=(...e)=>console.error(...e),$t=c`--arc•icon•text`,Yt=c`${$t}•font•size`,Mi=c`${$t}•icon`,qo=c`${$t}•text`,Ri=c`${$t}•subtext`,or=c`${$t}•fg`,_r=c`${$t}•gap`,Vr=c`${Mi}•size`,ja=c`${Mi}•vertical•align`,Gt=c`${qo}•overflow`,Ia=c`${qo}•text•overflow`,La=c`${qo}•white•space`,Ma=c`${Ri}•font•size`,Bi=c`${Ri}•fg`,el=c`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${or}: currentcolor;
  }

  &[data-variant=primary] {
    ${or}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${or}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${or}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${or}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${or}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${or}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${or}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${or}: var(--arc-color-fg-critical-mid);
  }

`,rl=c`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Yt}: 1em;
    ${Ma}: 0.75em;
    ${Vr}: 1em;
    ${_r}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Yt}: var(--arc-font-size-14);
    ${Ma}: var(--arc-font-size-12);
    ${_r}: var(${$}•3);
  }

  &[data-size=sm] {
    ${Yt}: var(--arc-font-size-12);
    ${Ma}: var(--arc-font-size-12);
    ${_r}: var(${$}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${_r}: var(${$}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${_r}: var(${$}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${_r}: var(${$}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Vr}: var(${l}•24); }
  &[icon-size=lg] { ${Vr}: var(${l}•20); }
  &[icon-size=md] { ${Vr}: var(${l}•16); }
  &[icon-size=sm] { ${Vr}: var(${l}•14); }
  &[icon-size=xs] { ${Vr}: var(${l}•12); }
`,tl=c`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Bi}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${or}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Vr}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Gt}: unset;
    ${Ia}: unset;
    ${La}: unset;

    ${ja}: calc((var(${Vr}) - var(${Yt})) / -2);

    &:has(svg) { ${ja}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Gt}: visible;
    ${Ia}: unset;
    ${La}: normal;

    &[data-overflow=truncate] {
      ${Gt}: hidden;
      ${Ia}: ellipsis;
      ${La}: nowrap;
    }
  }

`,al=c`
@layer arc-components {

  [arc-icon-text] {
    ${el}
    ${rl}
    ${tl}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Yt}));
    color: var(--arc-icon-text-text-color, var(${or}));
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
      gap: var(--arc-icon-text-gap, var(${_r}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Gt}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Ma}));
        color: var(--arc-icon-text-subtext-color, var(${Bi}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Gt}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Ia}));
        white-space: var(--arc-icon-text-white-space, var(${La}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${ja}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${_r})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${_r})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${ja}: text-bottom;
      }
    }
  }
}

`,ol=I(oe,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Ye=({children:e,layout:r="gutter",size:t="inherit",variant:a="inherit",tag:o="span",icon:s,text:i,subtext:d,gradient:u,overflow:v,iconSize:p,gapSize:f,isFlipped:h=!1,isStrong:g=!1,...w})=>{const C=e||i,E=!!s,D=!!C,k=r==="gutter",j=r==="inline",S=E&&(!h||k),T=E&&D&&h&&j,O=!!p&&p!=="inherit",V=O&&Gr.includes(p)?p:void 0,X=O&&!Gr.includes(p)?p:void 0,ce=f!=="inherit"?f:void 0,K=v!=="inherit"?v:void 0,J=fi(s);return(0,n.jsxs)(o,{...w,"arc-icon-text":"","data-variant":a,"data-layout":r,"data-overflow":K,"data-size":t,"data-gap":ce,"icon-size":V,"is-flipped":h?"":void 0,"is-strong":g?"":void 0,children:[S&&(0,n.jsx)("span",{"data-element":"icon",children:typeof J=="string"?(0,n.jsx)(B,{icon:J,size:X,gradient:u}):J}),D&&(0,n.jsxs)("span",{"data-element":"text",children:[C,!!d&&(k?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:d})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:d})]}))]}),T&&(0,n.jsx)("span",{"data-element":"icon",children:typeof J=="string"?(0,n.jsx)(B,{icon:J,size:X,gradient:u}):J})]})};N("ArcIconText",al);const nr={...Be,popover:Uo[2],anchorAt:Yo[1],boundary:Go[1],scheme:Wo[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0};let Ra=!1;const nl=100,il=100;let Ko=!0,Jo=null;const sl=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),cl=e=>e instanceof Element?sl?e.matches(":focus-visible")===!0:Ko:!1,Qo=new WeakMap,en=new WeakMap,Ba=(e,r)=>{const t=e.get(r);t!=null&&(clearTimeout(t),e.delete(r))},Pi=(e,r,t,a)=>{const o=window.setTimeout(()=>{a(),e.delete(r)},t);e.set(r,o)},Oi="[aria-describedby]",ll=e=>typeof e=="object"&&e!==null&&e.hasAttribute?.("popover")===!0,Di=e=>e instanceof HTMLElement&&e.getAttribute("role")==="tooltip"&&ll(e),dl=e=>!!e&&(e.tagName==="LABEL"||e.hasAttribute("arc-label")),ul=e=>e?.match(/\S+/g)??[],rn=e=>{if(typeof document>"u")return null;const r=document.querySelector(`[aria-describedby~="${e}"]`);return r?r.closest("label,[arc-label]")??r:null},vl=e=>{if(!(e instanceof Element))return null;const r=e.closest?.(Oi);if(r){const a=r.getAttribute("aria-describedby")??"";if(a)return{anchor:r.closest?.("label,[arc-label]")??r,tooltipId:a}}let t=e;for(;t;){if(dl(t)){const a=t.querySelector?.(Oi),o=a?.getAttribute?.("aria-describedby")??"";if(a&&o)return{anchor:t,tooltipId:o}}t=t.parentElement}return null},hl=e=>{if(!(e instanceof Element))return null;const r=e.closest?.('[role="tooltip"][popover]')??null;return r instanceof HTMLElement?r:null},pl=e=>e?.id?rn(e.id):null,fl=e=>{const r=hl(e),t=vl(e);if(!t&&r){const d=pl(r);return!d||!r.id?null:{anchor:d,tooltip:r}}if(!t)return null;const{anchor:a,tooltipId:o}=t;if(!o)return null;const s=ul(o),i=r??s.map(d=>document.getElementById(d)).find(d=>Di(d))??null;return Di(i)?{anchor:a,tooltip:i}:null},gl=(e,r,t)=>{const a=t instanceof Element?t:null;if(!a)return!1;const o=e===a||e.contains(a),s=r===a||r.contains(a);return o||s},$l=(e,r)=>{if(Ba(en,e),Ba(Qo,e),!r){e.isConnected&&e.showPopover?.();return}Pi(Qo,e,nl,()=>{e.isConnected&&e.showPopover?.()})},ml=(e,r)=>{if(Ba(Qo,e),Ba(en,e),!r){e.isConnected&&e.hidePopover?.();return}Pi(en,e,il,()=>{e.isConnected&&e.hidePopover?.()})},Zt=(e,r,t,a)=>{const o=fl(r);if(!o)return;const{anchor:s,tooltip:i}=o;if(e){$l(i,a);return}gl(s,i,t)||ml(i,a)};let Pa=null,Oa=null,Da=null,Ha=null,Va=null,Fa=null,mt=null;const Hi=()=>{Ra||typeof document>"u"||(Fa=e=>{Ko=!1,Jo=e.target},mt=()=>{Jo=null},Pa=e=>Zt(!0,e.target,void 0,!0),Oa=e=>{cl(e.target)&&Zt(!0,e.target,void 0,!1)},Da=e=>Zt(!1,e.target,e.relatedTarget,!0),Ha=e=>{const r=e.relatedTarget??Jo;Zt(!1,e.target,r,!1)},Va=e=>{e.key==="Tab"&&(Ko=!0),e.key==="Escape"&&Zt(!1,e.target,void 0,!1)},document.addEventListener("pointerdown",Fa),document.addEventListener("pointerup",mt),document.addEventListener("pointercancel",mt),document.addEventListener("pointerover",Pa),document.addEventListener("focusin",Oa),document.addEventListener("pointerout",Da),document.addEventListener("focusout",Ha),document.addEventListener("keydown",Va),Ra=!0)},bl=()=>{if(!Ra||typeof document>"u")return;[["pointerdown",Fa],["pointerup",mt],["pointercancel",mt],["pointerover",Pa],["focusin",Oa],["pointerout",Da],["focusout",Ha],["keydown",Va]].forEach(([r,t])=>{t&&document.removeEventListener(r,t)}),Pa=null,Oa=null,Da=null,Ha=null,Va=null,Fa=null,mt=null,Ra=!1},ir=c`--arc•tooltip`,Vi=c`${ir}•subtext`,Fi=c`${ir}•slot`,yl=c`
@layer arc-components {
  [arc-tooltip] {
    ${ir}•width: max-content;
    ${ir}•max•width: 20em;
    ${ir}•font•size: var(${l}•12);
    ${ir}•padding: var(${$}•10);
    ${Vi}•spacing: var(${$}•6);
    ${Fi}•margin•top: var(${$}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ir}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ir}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ir}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ir}•padding));

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ir}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${Vi}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${Fi}•margin•top));
    }
  }
}
`,Ni=(0,y.forwardRef)(({id:e,children:r,slot:t,isEnabled:a=nr.isEnabled,popover:o=nr.popover,variant:s=nr.variant,anchorAt:i=nr.anchorAt,alternateAnchor:d,boundary:u=nr.boundary,hasTail:v=nr.hasTail,tailSize:p=nr.tailSize,offset:f=nr.offset,scheme:h=nr.scheme,isStrong:g=nr.isStrong,text:w,subtext:C,icon:E,isFlipped:D,...k},j)=>{if(a)try{Hi()}catch{}const S=Ue(e,"arc-tooltip"),T=J=>typeof J=="object"&&J!==null&&"tabIndex"in J,O=r,V=!!d;let X=null;(0,y.isValidElement)(O)?X=a?(0,y.cloneElement)(O,{"aria-describedby":S,...T(O.props)&&O.props.tabIndex!=null?{}:{tabIndex:0}}):O:!V&&typeof console<"u"&&Li("ArcTooltip expects a single ReactElement child as the trigger.");const ce=(0,y.useMemo)(()=>()=>rn(S),[S]),K=h==="auto"?void 0:h;return(0,n.jsxs)(n.Fragment,{children:[X,a&&(0,n.jsxs)(Jt,{...k,"arc-tooltip":"",scheme:k?.IsInverse?"inverse":K,role:"tooltip",id:S,ref:j,popover:o,anchorAt:i,boundary:u,variant:s,hasTail:v,tailSize:p,offset:f,hidePopoverButton:!0,alternateAnchor:d??ce,tag:k?.tag??"span",contentTag:k?.contentTag??"span",children:[w&&(0,n.jsx)(Ye,{"arc-tooltip-content":"",text:w,subtext:C,icon:E,isFlipped:D,isStrong:g,size:"inherit",variant:"inherit"}),t&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:t})]})]})});N("ArcTooltip",yl);const xl=I(jt,["circle","square","narrow"]),wl=I(ze,["xxl","xl","lg","md","sm"]),Al=I(tr,["hug","fill","icon"]),Cl=I(oe,["common","ai","critical","alpha"]),Sl=[...Or],kl=[...ba],Ui=I(oe,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),zl=I(ya,["primary","secondary","tertiary","plain"]),_l=[...ut],El=c`
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
`,Tl=c`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,jl=c`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,m=c`--arc•button`,A=c`${m}•fg`,b=c`${m}•bg`,R=c`${m}•edge`,Te=c`${m}•border`,bt=c`${m}•outline`,U=c`${m}•spinner`,we=c`${m}•icon`,Il=c`
  &[data-size=xxl] {
    ${m}•font•size: var(${l}•16);
    ${U}•size: var(${l}•32);
    ${we}•size: var(${l}•20);
    ${we}•size•large: var(${l}•24);
    ${m}•height: var(${l}•56);
    ${m}•gap: var(${l}•10);
    ${m}•padding•inline: var(${l}•32);
  }

  &[data-size=xl] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${we}•size: var(${l}•16);
    ${we}•size•large: var(${l}•20);
    ${m}•height: var(${l}•48);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•32);
  }

  &[data-size=lg] { /** @default */
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${we}•size: var(${l}•16);
    ${we}•size•large: var(${l}•20);
    ${m}•height: var(${l}•40);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•20);
  }

  &[data-size=inherit] {
    ${m}•font•size: 1em;
    ${U}•size: 1em;
    ${we}•size: 1em;
    ${we}•size•large: 1.25em;
    ${m}•gap: 0.5em;
    ${m}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${we}•size: var(${l}•14);
    ${we}•size•large: var(${l}•20);
    ${m}•height: var(${l}•32);
    ${m}•gap: var(${l}•6);
    ${m}•padding•inline: var(${l}•16);
  }

  &[data-size=sm] {
    ${m}•font•size: var(${l}•12);
    ${U}•size: var(${l}•14);
    ${we}•size: var(${l}•12);
    ${we}•size•large: var(${l}•14);
    ${m}•height: var(${l}•24);
    ${m}•gap: var(${l}•4);
    ${m}•padding•inline: var(${l}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${we}•size: var(${l}•16);
    ${we}•size•large: var(${l}•20);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,Ll=c`
  &[data-layout=hug] {
    ${m}•width: auto;
    ${m}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${m}•display: flex;
    ${m}•width: 100%;
    ${m}•content•width: 0;
  }

  &[data-layout=icon] {
    ${m}•aspect•ratio: 1 / 1;
    ${m}•flex: none;
    ${m}•min•width: min-content;
    ${m}•max•width: none;
    ${m}•padding•inline: var(${l}•0);

    &[data-shape=narrow] {
      ${m}•aspect•ratio: auto;
      ${m}•padding•inline: var(${l}•2);
    }
  }

`,Ml=c`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${A}: inherit;
    ${b}: transparent;
    ${R}: transparent;
    ${A}•disabled: var(--arc-color-fg-disabled);
  }

  &[data-variant=common],&[data-variant=primary],&[data-variant=primary-inverse] { /** @default */
    ${A}: var(--arc-color-fg-on-theme-heavy);
    ${b}: var(--arc-color-bg-theme-heavy);
    ${R}: transparent;

    ${A}•active: var(--arc-color-fg-on-theme-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-theme-stark);
    ${b}•active: var(--arc-color-bg-theme-mid);
    ${b}•processing: var(--arc-color-bg-theme-stark);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${R}: var(--arc-color-border-theme-heavy);

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-neutral-muted);
    ${b}•active: var(--arc-color-bg-neutral-subtle);
    ${b}•processing: transparent;
    ${b}•disabled: transparent;
    ${b}•focus: var(--arc-color-alpha-white-3);

    ${R}•active: var(--arc-color-border-theme-mid);
    ${R}•processing: var(--arc-color-border-theme-subtle);
    ${R}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}: var(--arc-button-common-secondary-floating-bg);
      ${b}•hover: var(--arc-button-common-secondary-floating-bg-hover);
      ${b}•active: var(--arc-button-common-secondary-floating-bg-active);
      ${b}•processing: var(--arc-button-common-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-common-secondary-floating-bg-focus);
    }

    &[data-layout=icon] {
      ${R}: var(--arc-color-border-mid);
      ${R}•hover: var(--arc-color-border-stark);
      ${R}•focus: var(--arc-color-border-mid);
    }
  }

  &[data-variant=tertiary],&[data-variant=tertiary-inverse] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${R}: transparent;

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-neutral-muted);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-neutral-muted);
    ${b}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-variant=plain],&[data-variant=plain-inverse] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${R}: transparent;

    ${A}•hover: var(--arc-color-alpha-heavy);
    ${A}•active: var(--arc-color-alpha-heavy);
    ${A}•processing: var(--arc-color-alpha-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: transparent;
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: transparent;
    ${b}•processing: transparent;
  }

`,Rl=c`
  &[data-variant=ai-primary] {
    ${A}: var(--arc-color-fg-on-theme-stark);
    ${b}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${U}•base•color: var(--arc-color-alpha-white-30);

    ${A}•active: var(--arc-color-fg-neutral-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-heavy);
    ${A}•hover: var(--arc-color-fg-on-theme-heavy);

    ${b}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${A}•active: var(--arc-color-fg-neutral-stark);
    ${A}•processing: var(--arc-color-fg-primary);

    ${b}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${b}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
    ${b}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${R}: transparent;

    ${A}•disabled: var(--arc-color-fg-disabled);
    ${R}•disabled: var(--arc-color-border-disabled);
  }

`,Bl=c`
  &[data-variant=alpha-primary] {
    ${A}: var(--arc-color-mono-black);
    ${b}: var(--arc-color-mono-white);
    ${R}: transparent;

    ${A}•focus: var(--arc-color-mono-black);
    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-mono-black);
    ${A}•disabled: var(--arc-color-alpha-black-60);

    ${b}•hover: var(--arc-color-alpha-white-70);
    ${b}•focus: var(--arc-color-mono-white);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-40);
    ${b}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${R}: var(--arc-color-alpha-white-80);

    ${A}•active: var(--arc-color-alpha-white-80);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-25);
    ${b}•disabled: transparent;

    ${R}•hover: var(--arc-color-alpha-white-100);
    ${R}•focus: var(--arc-color-alpha-white-80);
    ${R}•active: var(--arc-color-alpha-white-50);
    ${R}•processing: transparent;
    ${R}•disabled: var(--arc-color-border-disabled);
  }

  &[data-variant=alpha-tertiary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${R}: transparent;

    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-5);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-20);
    ${b}•disabled: transparent;
  }

  &[data-variant=alpha-plain] {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${R}: transparent;

    ${A}•hover: var(--arc-color-alpha-white-60);
    ${A}•active: var(--arc-color-alpha-white-40);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-30);

    ${b}•hover: transparent;
    ${b}•focus: var(--arc-color-alpha-white-5);
    ${b}•active: transparent;
    ${b}•processing: transparent;

  }

  &[data-variant^=alpha-] {
    ${U}•base•color: var(--arc-color-alpha-white-30);
  }
`,Pl=c`
  &[data-variant=critical-primary] {
    ${A}: var(--arc-color-fg-on-stark);
    ${b}: var(--arc-color-bg-critical-stark);
    ${R}: transparent;

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-on-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-critical-heavy);
    ${b}•active: var(--arc-color-bg-critical-heavy);
    ${b}•processing: var(--arc-color-bg-critical-heavy);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${R}: var(--arc-color-border-critical-stark);

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-button-critical-bg-hover);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-critical-muted);
    ${b}•disabled: transparent;

    ${R}•active: var(--arc-color-border-critical-subtle);
    ${R}•processing: var(--arc-color-border-critical-stark);
    ${R}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}: var(--arc-button-critical-secondary-floating-bg);
      ${b}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${b}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${b}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-plain] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${R}: transparent;

    ${A}•hover: var(--arc-color-fg-critical-mid);
    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: transparent;
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: transparent;
    ${b}•processing: transparent;
  }

`,Ol=c`
  ${m}•color: var(${A});
  ${m}•background: var(${b});
  ${m}•font•weight: var(--arc-font-weight-600);
  ${m}•padding: 0 var(${m}•padding•inline);
  ${m}•content•opacity: 1;
  ${m}•cursor: var(--arc-button-cursor, pointer);
  ${m}•transition: 0.2s ease-out;

  ${Te}•color: var(${R});
  ${Te}: var(--arc-border-width-sm) solid var(${Te}•color, transparent);

  ${bt}: var(--arc-border-width-md) solid var(${bt}•color, transparent);
  ${bt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${U}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${U}•circle•color: var(--arc-button-color, var(${U}•base•color, var(--arc-color-alpha-mid)));
  ${U}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${m}•font•weight: normal;
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
    [data-variant*=plain]
  ) {
    ${m}•padding: unset;
    ${m}•height: unset;
  }

  &[data-variant*=plain] {
    ${Te}•radius: var(--arc-border-radius-sm);
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${we}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${we}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${U}•size);
  --arc-spinner-progress-color: var(${U}•progress•color);
  --arc-spinner-circle-color: var(${U}•circle•color);
  --arc-spinner-circle-opacity: var(${U}•circle•opacity);
  --arc-spinner-position: var(${U}•position, absolute);
  --arc-spinner-inset: var(${U}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${U}•translate, -50% -50%);

`,Dl=c`
  &:is([is-processing], [is-processing-with-text], :has(input)) {
    ${m}•position: relative;
  }

  &[is-disabled] {
    ${m}•color: var(${A}•disabled, var(${A}));
    ${m}•background: var(${b}•disabled, var(${b}));
    ${Te}•color: var(${R}•disabled, var(${R}));
    ${m}•opacity: var(--arc-button-disabled-opacity, unset);
    ${m}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not([is-disabled], [is-processing], [is-processing-with-text]) {
    &:where(:hover, [data-simulate=hover]) {
      ${m}•color: var(${A}•hover, var(${A}));
      ${m}•background: var(${b}•hover, var(${b}));
      ${Te}•color: var(${R}•hover, var(${R}));
    }

    &:is(:active, [is-active], [data-simulate=active]) {
      ${m}•color: var(${A}•active, var(${A}));
      ${m}•background: var(${b}•active, var(${b}));
      ${Te}•color: var(${R}•active, var(${R}));
    }
  }

  &[is-processing] {
    ${m}•content•visibility: hidden;
    ${m}•content•opacity: 0;

    /* spinner svg position controls */
    ${U}•position: absolute;
    ${U}•inset: 50% auto auto 50%;
    ${U}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${m}•content•visibility: visible;

    /* spinner svg position controls */
    ${U}•position: relative;
    ${U}•inset: 0;
    ${U}•translate: 0;
    ${U}•size: 1lh;
  }

  &:is([is-processing], [is-processing-with-text]) {
    ${m}•opacity: var(--arc-button-processing-opacity, unset);
    ${m}•cursor: var(--arc-button-processing-cursor, default);

    ${m}•color: var(${A}•processing, var(${A}));
    ${m}•background: var(${b}•processing, var(${b}));
    ${Te}•color: var(${R}•processing, var(${R}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-variant*=plain],
      [arc-scheme=inverse]:not(
        [data-variant*=primary]
      )
    ):not(
      [data-variant^=alpha-]
    ) {
      ${U}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(:where(:focus, :focus-within):focus-visible, [data-simulate=focus]) {
    ${m}•color: var(${A}•focus, var(${A}));
    ${m}•background: var(${b}•focus, var(${b}));
    ${Te}•color: var(${R}•focus, var(${R}));
    ${bt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Hl=c`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${El}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${Il}

    /* LAYOUTS -----------------------------------------------------• */
    ${Ll}

    /* VARIANTS ----------------------------------------------------• */
    ${Ml}
    ${Rl}
    ${Bl}
    ${Pl}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Ol}
    ${Dl}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${m}•cursor));
    position: var(--arc-button-position, var(${m}•position, unset));
    transition: var(--arc-button-transition, var(${m}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${m}•font•weight));
    font-size: var(--arc-button-font-size, var(${m}•font•size, inherit));
    padding: var(--arc-button-padding, var(${m}•padding));

    width: var(--arc-button-width, var(${m}•width, auto));
    min-width: var(--arc-button-min-width, var(${m}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${m}•max•width, 100%));

    height: var(--arc-button-height, var(${m}•height, auto));
    min-height: var(--arc-button-min-height, var(${m}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${m}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${m}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${m}•color));
    background: var(--arc-button-background, var(${m}•background));
    border: var(--arc-button-border, var(${Te}));
    border-radius: var(--arc-button-border-radius, var(${Te}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${bt}));
    outline-offset: var(--arc-button-outline-offset, var(${bt}•offset));

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
      gap: var(--arc-button-gap, var(${m}•gap));

      opacity: var(--arc-button-content-opacity, var(${m}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${m}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${m}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${m}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${m}•opacity));
      transition: var(--arc-button-label-transition, var(${m}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${m}•opacity));
      transition: var(--arc-button-icon-transition, var(${m}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${m}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Wi=(0,n.jsx)(Xo,{}),je=(0,y.forwardRef)(({children:e,disabled:r,...t},a)=>{const o=(0,y.useRef)(null),{iconEnd:s,iconStart:i,icon:d,text:u,isActive:v,isDisabled:p,isProcessing:f,isProcessingWithText:h,hasLargeIcon:g,tag:w,href:C,type:E,title:D,layout:k,shape:j,size:S="lg",variant:T="common",hierarchy:O="primary",isInverse:V=!1,scheme:X="auto",shadow:ce,_isCustom:K,...J}=t,me=w??(C?"a":"button"),Le=me==="button"?E||"button":void 0,Ve=k==="icon",Fe=h||f||p||r,Qe=J?.["aria-disabled"]||Fe||void 0,te=!Ve&&(e||u),lr=h&&Wi||i||d,Br=!Ve&&(h&&!(i||d)?void 0:s),er=(f||h&&Ve)&&Wi,it=T&&Ui.includes(T),dr=(()=>{if(it)return T;const dt=O||"primary";return T==="common"?dt:T==="alpha"||T==="critical"||T==="ai"?`${T}-${dt}`:T})(),wr=X==="auto"?void 0:X,F=dr?.endsWith("-inverse")?"inverse":void 0,le=V?"inverse":wr??F,ur=ce===!0?"lg":ce,{tooltip:be,...rr}=J,ie=typeof be=="string"?be:void 0,Se=t.tooltip??ie,ke=!!Se,st=typeof Se=="string"?{text:Se}:Se,ga=J["aria-describedby"],ct=(0,y.useRef)(void 0),Vn=Ue(void 0,"arc-tooltip");ke&&!ct.current&&(ct.current=t.id?`${t.id}-tooltip`:Vn);const go=ke?Ii([ga,ct.current]):ga,{popoverTarget:$o,popoverTargetAction:mo,...Fn}=rr;let lt={popoverTarget:$o||void 0,popoverTargetAction:mo||void 0};return y.version.startsWith("18")&&(lt={popovertarget:$o||void 0,popovertargetaction:mo||void 0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(me,{...Fn,...lt,ref:dt=>{o.current=dt,Cr(a,dt)},"arc-button":K?"custom":"","arc-scheme":le,"arc-shadow":ur||void 0,disabled:!C&&Fe||void 0,href:C||void 0,title:ke?void 0:D||void 0,type:Le,"data-layout":k,"data-shape":K?void 0:j,"data-size":K?void 0:S,"data-variant":K?void 0:dr,"has-large-icon":g?"":void 0,"is-active":v?"":void 0,"is-processing":f||h&&Ve?"":void 0,"is-processing-with-text":h&&!Ve?"":void 0,"is-disabled":Fe||Qe?"":void 0,"aria-disabled":Qe,"aria-describedby":go||void 0,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[!!lr&&(0,n.jsx)(B,{"arc-button-icon":"",icon:lr}),!!te&&(0,n.jsx)("span",{"arc-button-label":"",children:te}),!!Br&&(0,n.jsx)(B,{"arc-button-icon":"",icon:Br})]}),er]}),ke&&(0,n.jsx)(Ni,{...st,id:ct.current,alternateAnchor:st?.alternateAnchor??(()=>o.current)})]})});je.displayName="ArcButton",N("ArcButton",Hl);const Xt=(0,y.forwardRef)((e,r)=>(0,n.jsx)(je,{...e,ref:r,"arc-popover-button":""})),Yi=({isInverse:e=!1,isOpen:r,...t})=>(0,n.jsx)(je,{...t,icon:"fa-regular fa-xmark",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:e,"arc-popover-dismiss":""}),Vl=({children:e,showDismiss:r,dismissProps:t,tag:a="header",...o})=>(0,n.jsxs)(a,{...o,"arc-popover-header":"",children:[e,r&&(0,n.jsx)(Yi,{...t})]}),Fl=({tag:e="article",...r})=>(0,n.jsx)(e,{...r,"arc-popover-body":""}),Nl=({showDivider:e,tag:r="footer",...t})=>(0,n.jsx)(r,{...t,"arc-popover-footer":"","has-divider":e?"":void 0}),Ul=e=>(0,n.jsx)("span",{...e,"arc-popover-tail":""});Xt.displayName="ArcPopoverButton";const W=c`--arc•popover`,qt=c`${W}•border`,he=c`${W}•trail•mix`,Wl=c`${W}•content`,Pe=c`${W}•shift`,yt=c`${W}•offset`,Er=c`${W}•outline`,Na=c`${W}•header`,Yl=c`${W}•body`,Ua=c`${W}•footer`,L=c`${W}•tail`,Gi=c`${W}•divider`,Wa=c`${W}•padding`,xt=c`${Na}•padding`,Ge=c`${Yl}•padding`,pr=c`${Ua}•padding`,Zi=c`${W}•fg`,Ya=c`${W}•bg`,Ga=c`${Wl}•bg`,Za=c`${L}•bg`,fr=c`${W}•tx`,gr=c`${W}•ty`,Tr=c`${L}•tx`,jr=c`${L}•ty`,Gl=c`

  ${W}•position: absolute;
  ${Er}•size: var(--arc-popover-outline-size, var(--arc-border-width-md));
  ${qt}•radius: var(--arc-popover-border-radius, var(--arc-border-radius-lg));
  ${qt}•radius•inner: calc(var(${qt}•radius) - var(${Er}•size));

  /* mix ratio for tail's outline color gradient along popover's perimeter, e.g.: dropdown[variant=ai-outline] */
  ${he}: 50%;

  /* tail metrics */
  ${L}•radius: var(${Er}•size);
  ${L}•size: calc((var(--js-t, 10) * 1px) + var(${Er}•size));
  ${L}•shift: (var(${L}•size) * 0.707 * var(--js-i)); /* magic number 0.707:
                                    • sqrt(2)/2 multiplier for tail size
                                    • half of tail rotated 45º used in offset calcs
                                    */
  ${L}•clamp: clamp(
    var(${L}•shift),
    var(--js-h) - (var(${L}•shift) * 2),
    var(--js-cw) - (var(${Er}•size) * 2)
  );

  /* offset */
  ${yt}•x: (var(--js-cw) + var(--js-o) + var(--arc-popover-nudge, 0em));
  ${yt}•y: (var(--js-ch) + var(--js-o) + var(--arc-popover-nudge, 0em));
  ${Pe}•x: (var(--js-cw) + var(${L}•shift));
  ${Pe}•y: (var(--js-ch) + var(${L}•shift));

  /* space & padding */
  ${Wa}: var(${$}•14);

  &:has([arc-popover-body]) {
    ${Wa}: 0;
    &:has([arc-popover-header]) { ${Ge}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${Ge}•block•end: 0; }
  }

`,Zl=c`

  &[is-fixed] {
    ${W}•position: fixed;
  }

  &:where([arc-popover*=top], [arc-popover*=bottom]) {
    ${W}•min•width: calc(var(--js-w) + ((var(${L}•shift) - var(${Er}•size)) * 2));
    ${W}•min•height: auto;
  }

  &:where([arc-popover*=right], [arc-popover*=left]) {
    ${W}•min•width: auto;
    ${W}•min•height: auto;
  }

  &:where([arc-popover=center]) {
    ${W}•min•width: auto;
    ${W}•min•height: auto;
  }

  &:where([arc-popover*=top]) {
    ${gr}: calc(-100% - var(${yt}•y));
    ${jr}: 50%;

    &:where([arc-popover*=-start]) {
      ${he}: 87.5%;
      ${fr}: calc(0% - var(${Pe}•x));
      ${L}•inset: auto auto 0% calc(0% + var(${L}•clamp));
      ${Tr}: 50%;
    }

    &:where([arc-popover*=-center]) {
      ${he}: 75%;
      ${fr}: -50%;
      ${L}•inset: auto auto 0% 50%;
      ${Tr}: -50%;
    }

    &:where([arc-popover*=-end]) {
      ${he}: 62.5%;
      ${fr}: calc(-100% + var(${Pe}•x));
      ${L}•inset: auto auto 0% calc(100% - var(${L}•clamp));
      ${Tr}: -150%;
    }
  }

  &:where([arc-popover*=right]) {
    ${fr}: calc(0% + var(${yt}•x));
    ${Tr}: -50%;

    &:where([arc-popover*=-start]) {
      ${he}: 62.5%;
      ${gr}: calc(0% - var(${Pe}•y));
      ${jr}: calc(50% + var(${Pe}•y));
      ${L}•inset: auto auto 100% 0%;
    }

    &:where([arc-popover*=-center]) {
      ${he}: 75%;
      ${gr}: -50%;
      ${jr}: 50%;
      ${L}•inset: auto auto 50% 0%;
    }

    &:where([arc-popover*=-end]) {
      ${he}: 87.5%;
      ${gr}: calc(-100% + var(${Pe}•y));
      ${jr}: calc(50% - var(${Pe}•y));
      ${L}•inset: auto auto 0% 0%;
    }
  }

  &:where([arc-popover=center]) {
    ${he}: 50%;
    ${fr}: -50%;
    ${gr}: -50%;
    ${L}•size: 0em;
    ${L}•display: none;
  }

  &:where([arc-popover*=bottom]) {
    ${gr}: calc(0% + var(${yt}•y));
    ${jr}: -50%;

    &:where([arc-popover*=-start]) {
      ${he}: 37.5%;
      ${fr}: calc(0% - var(${Pe}•x));
      ${Tr}: 50%;
      ${L}•inset: 0% auto auto calc(0% + var(${L}•clamp));
    }

    &:where([arc-popover*=-center]) {
      ${he}: 25%;
      ${fr}: -50%;
      ${Tr}: -50%;
      ${L}•inset: 0% auto auto 50%;
    }

    &:where([arc-popover*=-end]) {
      ${he}: 12.5%;
      ${fr}: calc(-100% + var(${Pe}•x));
      ${Tr}: -150%;
      ${L}•inset: 0% auto auto calc(100% - var(${L}•clamp));
    }
  }

  &:where([arc-popover*=left]) {
    ${fr}: calc(-100% - var(${yt}•x));
    ${Tr}: 50%;

    &:where([arc-popover*=-start]) {
      ${he}: 12.5%;
      ${gr}: calc(0% - var(${Pe}•y));
      ${jr}: calc(50% + var(${Pe}•y));
      ${L}•inset: auto 0% 100% auto;
    }

    &:where([arc-popover*=-center]) {
      ${he}: 25%;
      ${gr}: -50%;
      ${jr}: 50%;
      ${L}•inset: auto 0% 50% auto;
    }

    &:where([arc-popover*=-end]) {
      ${he}: 37.5%;
      ${gr}: calc(-100% + var(${Pe}•y));
      ${jr}: calc(50% - var(${Pe}•y));
      ${L}•inset: auto 0% 0% auto;
    }
  }

`,Xl=c`

  /* default variant: common */
  &[variant] {
    ${Zi}: var(--arc-color-fg-primary);
    ${Ya}: var(--arc-popover-background, var(--arc-color-bg-mono)) border-box;
    ${Ga}: var(--arc-popover-background, var(--arc-color-bg-mono)) padding-box;
    ${Za}: var(--arc-popover-background, var(--arc-color-bg-mono));
    ${W}•shadow: var(--arc-shadow-lg);
    ${Gi}•color: var(--arc-color-border-mid);
    ${L}•outline•color: var(--arc-popover-background, var(--arc-color-bg-mono));
    ${L}•border: var(${Er}•size) solid var(${L}•outline•color);
  }

  &[variant=brand] {
    ${Ya}: var(--arc-color-border-brand-mid) border-box;
    ${Ga}: var(--arc-color-bg-brand-muted) padding-box;
    ${Za}: var(--arc-color-bg-brand-muted);
    ${L}•outline•color: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${Ya}: var(--arc-gradient-ai-200) border-box;
    ${Ga}: var(--arc-gradient-ai-50) padding-box;
    ${Za}: color-mix(in srgb,
      var(--arc-popover-ai-purple-50) var(${he}, 37.5%),
      var(--arc-popover-ai-blue-50) clamp(0%, 100% - var(${he}, 37.5%), 100%)
    );
    ${L}•outline•color: color-mix(in srgb,
      var(--arc-popover-ai-purple-200) var(${he}, 37.5%),
      var(--arc-popover-ai-blue-200) clamp(0%, 100% - var(${he}, 37.5%), 100%)
    );
  }

`,ql=c`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Na}•gap: var(${$}•12);
    ${xt}•block: var(${$}•12);
    ${xt}•inline: var(${$}•12);

    ${Ge}•block: var(${$}•12);
    ${Ge}•inline: var(${$}•12);

    ${Ua}•gap: var(${$}•12);
    ${pr}•inline: var(${$}•12);
    ${pr}•block•start: var(${$}•12);
    ${pr}•block•end: var(${$}•12);
  }

  &[density=comfortable] {
    ${Na}•gap: var(${$}•18);
    ${xt}•block: var(${$}•16);
    ${xt}•inline: var(${$}•20);

    ${Ge}•block: var(${$}•20);
    ${Ge}•inline: var(${$}•20);

    ${Ua}•gap: var(${$}•18);
    ${pr}•inline: var(${$}•20);
    ${pr}•block•start: var(${$}•16);
    ${pr}•block•end: var(${$}•20);

    &:not(:has([arc-popover-body])) {
      ${Wa}: var(${$}•20);
    }

    [arc-popover-content] {
      font-size: var(--arc-popover-font-size, var(${l}•14));
    }
  }

`,Kl=c`

  [arc-popover] {
    position: var(--arc-popover-position, var(${W}•position));
    inset: var(--js-cy, 50%) auto auto var(--js-cx, 50%);
    translate: var(${fr}) var(${gr}) 0;
    will-change: translate, opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: var(${l}•16); /* This font-size is intended NOT to be
                                   altered; it is locked in as a sort of
                                   reset for various popover calculations.
                                   The effective popover font size is set
                                   on '[arc-popover-content]'. */

    padding: 0;
    background: var(--arc-popover-background, var(${Ya}));
    border: var(${Er}•size) solid transparent;
    border-radius: var(${qt}•radius);
    box-shadow: var(--arc-popover-shadow, var(${W}•shadow));
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

      color: var(--arc-popover-color, var(${Zi}));
      padding: var(--arc-popover-padding, var(${Wa}));
      background: var(--arc-popover-content-background, var(${Ga}));
      border-radius: var(${qt}•radius•inner);
      border: var(--arc-popover-border, none);

      width: var(--arc-popover-width, fit-content);
      height: var(--arc-popover-height, fit-content);
      min-width: var(--arc-popover-min-width, var(${W}•min•width));
      min-height: var(--arc-popover-min-height, var(${W}•min•height));
      max-width: var(--arc-popover-max-width, 100vw);
      max-height: var(--arc-popover-max-height, 65vh);
      resize: var(--arc-popover-resize, none);
      font-size: var(--arc-popover-font-size, var(${l}•12));
    }

    [arc-popover-dismiss] {
      align-self: var(--arc-popover-dismiss-align-self, auto);
      display: var(--arc-popover-dismiss-display, inline-flex);
      align-items: var(--arc-popover-dismiss-align-items, center);
      justify-content: var(--arc-popover-dismiss-justify-content, center);
      margin:  var(--arc-popover-dismiss-margin, var(${$}•6m) var(${$}•0));
    }

    [arc-popover-header] {
      flex: var(--arc-popover-header-flex, none);
      display: var(--arc-popover-header-display, flex);
      justify-content: var(--arc-popover-header-justify-content, space-between);
      align-items: var(--arc-popover-header-align-items, baseline);
      gap: var(--arc-popover-header-gap, var(${Na}•gap));

      padding: var(--arc-popover-header-padding,
        var(${xt}•block)
        var(${xt}•inline)
      );

      color: var(--arc-popover-header-color, inherit);
      background: var(--arc-popover-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(${$}•12);
      }
    }

    [arc-popover-body] {
      flex: var(--arc-popover-body-flex, 1);
      display: var(--arc-popover-body-display, block);
      flex-direction: var(--arc-popover-body-flex-direction, unset);

      padding: var(--arc-popover-body-padding,
        var(${Ge}•block•start, var(${Ge}•block))
        var(${Ge}•inline)
        var(${Ge}•block•end, var(${Ge}•block))
        var(${Ge}•inline)
      );
    }

    [arc-popover-footer] {
      flex: var(--arc-popover-footer-flex, none);
      display: var(--arc-popover-footer-display, flex);
      flex-direction: var(--arc-popover-footer-flex-direction, row-reverse);
      justify-content: var(--arc-popover-footer-justify-content, space-between);
      align-items: var(--arc-popover-footer-align-items, center);
      gap: var(--arc-popover-footer-gap, var(${Ua}•gap));

      padding: var(--arc-popover-footer-padding,
        var(${pr}•block•start)
        var(${pr}•inline)
        var(${pr}•block•end)
        var(${pr}•inline)
      );

      background: var(--arc-popover-footer-background, none);
      color: var(--arc-popover-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(--arc-popover-footer-border-top, var(${$}•1) solid var(${Gi}•color));
      }
    }

    [arc-popover-tail] {
      position: absolute;
      display: var(${L}•display, block);
      width: var(${L}•size);
      height: var(${L}•size);
      inset: var(${L}•inset);
      translate: var(${Tr}) var(${jr});
      rotate: 45deg;

      background: var(--arc-popover-outline-color, var(${Za}));
      border: var(${L}•border, var(${L}•outline•color) solid var(${Er}•size));
      border-radius: var(${L}•radius);
    }
  }

`,Kt={SETUP:Gl,POSITION:Zl,VARIANTS:Xl,DENSITIES:ql,ELEMENTS:Kl},Jl=c`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${jl}

  [arc-popover] {
    ${Kt.SETUP}
    ${Kt.POSITION}
    ${Kt.VARIANTS}
    ${Kt.DENSITIES}
  }

  ${Kt.ELEMENTS}

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

`,Xi=(0,y.forwardRef)(({children:e,popover:r=Be.popover,alternateAnchor:t,alternateAnchorId:a,anchorProps:o,anchorAt:s,boundary:i,density:d=Be.density,variant:u=Be.variant,scheme:v=Be.scheme,isInverse:p,hasTail:f,tailSize:h=Be.tailSize,offset:g=Be.offset,hidePopoverButton:w,headerSlot:C,showDismiss:E,dismissProps:D,footerSlot:k,showFooterDivider:j,tag:S="div",contentTag:T="div",onToggle:O,...V},X)=>{const ce=(0,y.useRef)(null),K=(0,y.useRef)(null),J=v==="auto"?void 0:v;(0,y.useImperativeHandle)(X,()=>K.current);const[me,Le]=(0,y.useState)(!1),[Ve,Fe]=(0,y.useState)(s||Be.anchorAt),[Qe,te]=(0,y.useState)({}),[lr,Br]=(0,y.useState)(0),[er,it]=(0,y.useState)(f?g??0:0),dr=(0,y.useMemo)(()=>({popoverTarget:V.id,"aria-haspopup":!0,"aria-controls":V.id,"aria-expanded":me}),[V.id,me]),wr=(0,y.useMemo)(()=>({isOpen:me,"aria-label":"Dismiss",...dr,...D}),[D,me,dr]),Ne=(0,y.useMemo)(()=>({ref:ce,...dr,...o}),[ce,o,dr]),F=(0,y.useCallback)(()=>typeof t=="function"?t(Ne):a||typeof t=="string"?document.getElementById(a||String(t)):ce.current,[a,t,Ne]),le=(0,y.useCallback)(({...ie})=>{Fe(ie.anchorAt),te(ie.vars)},[Fe,te]);(0,y.useEffect)(()=>{const ie=f?h??0:0,Ar=Number(g??0)+ie*(Math.sqrt(2)/2);Br(ie),it(Ar)},[f,h,g]);const ur=(0,y.useMemo)(()=>ji(F()),[F]),{isFixed:be,rect:rr}=(0,y.useMemo)(()=>ur(),[ur]);return(0,y.useEffect)(()=>{const ie=K?.current,Ar=F();if(!Ar||!me)return;let Se=null,ke=null;const st=()=>{ke&&Lt({a:rr,b:Se})?(Se=rr,le(Zo({anchorElement:Ar,popoverElement:ie,anchorAt:s,boundary:i,offset:er,tailSize:lr,isFixed:be}))):ke=null,ke=requestAnimationFrame(st)};return ke=requestAnimationFrame(st),()=>{ke&&cancelAnimationFrame(ke)}},[K,F,be,rr,me,s,i,er,lr,le]),(0,y.useEffect)(()=>{const ie=K.current;if(!ie)return;const Ar=Se=>{const{newState:ke}=Se;Le(ke==="open"),le(Zo({anchorElement:F(),popoverElement:ie,anchorAt:s,boundary:i,offset:er,tailSize:lr,isFixed:be})),O?.(Se)};return ie.addEventListener("toggle",Ar),()=>ie.removeEventListener("toggle",Ar)},[K,O,F,be,rr,s,i,er,lr,le]),(0,n.jsxs)(n.Fragment,{children:[!((a||t)&&w)&&(0,n.jsx)(Xt,{...Ne}),(0,n.jsxs)(S,{...V,role:V.role??"dialog","arc-popover":Ve,"arc-scheme":p?"inverse":J,ref:K,popover:r,boundary:i,variant:u,density:d,"is-fixed":be?"":void 0,"has-tail":f?"":void 0,style:{...V.style,...Qe},children:[f&&(0,n.jsx)(Ul,{}),(0,n.jsxs)(T,{"arc-popover-content":"",children:[!!C&&(0,n.jsx)(Vl,{showDismiss:E,dismissProps:wr,children:C}),C||k?(0,n.jsx)(Fl,{children:e}):e,!!k&&(0,n.jsx)(Nl,{showDivider:j,children:k})]}),E&&!C&&(0,n.jsx)(Yi,{...wr})]})]})});Xi.displayName="ArcPopover";const tn=Xi;tn.handlePopover=zi,tn.Button=Xt;const Jt=tn;N("ArcPopover",Jl);const Ql=c`
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

    ${Lo}
    ${di}
  }

}
`,ed=e=>(0,n.jsx)("ul",{...e,"data-element":"list"}),rd=e=>(0,n.jsx)("li",{...e,"data-element":"list-item"}),td=({count:e,anchorId:r,overflowId:t,shouldShowOverflow:a,...o})=>(0,n.jsx)(Fo,{title:`+${e}`,children:(0,n.jsx)(Jt.Button,{...o,id:r,popoverTarget:t,text:`+${e}`,variant:"common",hierarchy:"primary",disabled:!a,"data-element":"counter","data-color":"black","data-num-length":e?.toString().length})}),ad=({children:e,id:r,size:t="sm",overflowCount:a=0,shouldShowOverflow:o=!1,anchorAt:s="bottom-end",boundary:i="flip",...d})=>{const u=Math.min(a,999),v=Ue(r,"arc-avatar-overflow"),p=(0,y.useMemo)(()=>`${v}-anchor`,[v]),f=(0,y.useMemo)(()=>y.Children.toArray(e),[e]);return(0,n.jsxs)(n.Fragment,{children:[u>0&&(0,n.jsx)(td,{count:u,anchorId:p,overflowId:v,shouldShowOverflow:o}),o&&u>0&&(0,n.jsx)(Jt,{...d,scheme:"inverse","arc-avatar-overflow":"",id:v,anchorAt:s,boundary:i,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":t,children:(0,n.jsx)(ed,{children:f.map((h,g)=>(0,n.jsx)(rd,{children:h},g))})})]})};N("ArcAvatarOverflow",Ql);const qi=({fg:e,bg:r})=>c`
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
`,Ki=({fg:e,bg:r})=>c`
  &:has(>[data-contrast=high]) {
    ${e}: var(${e}•high);
    ${r}: var(${r}•high);
  }

  &:has(>[data-contrast=low]) {
    ${e}: var(${e}•low);
    ${r}: var(${r}•low);
  }
`,z=c`--arc•badge`,an=c`${z}•fg`,on=c`${z}•bg`,od=qi({fg:an,bg:on}),nd=Ki({fg:an,bg:on}),id=c`
  &:has(>[data-size=lg]) {
    ${z}•font•size: var(${l}•14);
    ${z}•font•size•caps: var(${l}•12);
    ${z}•size: var(${l}•24);
    ${z}•min•size: var(${l}•30);
    ${z}•padding•inline: var(${l}•8);
    ${z}•border•radius: var(${l}•4);
    ${z}•gap: var(${l}•4);
  }

  &:has(>[data-size=md]) {
    ${z}•font•size: var(${l}•12);
    ${z}•font•size•caps: var(${l}•10);
    ${z}•size: var(${l}•20);
    ${z}•min•size: var(${l}•24);
    ${z}•padding•inline: var(${l}•6);
    ${z}•border•radius: var(${l}•4);
    ${z}•gap: var(${l}•4);
  }

  &:has(>[data-size=sm]) {
    ${z}•font•size: var(${l}•10);
    ${z}•font•size•caps: var(${l}•8);
    ${z}•size: var(${l}•16);
    ${z}•min•size: var(${l}•18);
    ${z}•padding•inline: var(${l}•4);
    ${z}•border•radius: var(${l}•4);
    ${z}•gap: var(${l}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${z}•font•size: 1em;
    ${z}•font•size•text: 0.75em;
    ${z}•font•size•caps: 0.625em;
    ${z}•size: 1.25em;
    ${z}•min•size: 1.5em;
    ${z}•padding•inline: 0.375em;
    ${z}•border•radius: 0.25em;
    ${z}•gap: 0.25em;
  }
`,sd=c`
  &:has(>[data-layout=fill]) {
    ${z}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${z}•display: flex;
    ${z}•min•width: var(${z}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${z}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${z}•display: inline-flex;
    ${z}•min•width: min-content;
  }
`,cd=c`
@layer arc-components {

  [arc-badge-wrapper] {
    ${od}
    ${nd}
    ${id}
    ${sd}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${z}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${z}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${z}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${z}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${z}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${z}•flex);
    display: var(${z}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${z}•size);
    padding-inline: var(${z}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${an}));
    background: var(--arc-badge-background, var(${on}));
    border-radius: var(${z}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${z}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${z}•font•size•caps);
    }
  }

}
`,Ji=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],ld=["brand",...Ji.filter(e=>e!=="brand")],dd=["neutral",...Ji.filter(e=>e!=="neutral")],ud=_e(Wr,ld),vd=_e(Wr,dd),hd=_e(ze,["inherit","lg","md","sm"]),pd=_e(tr,["hug","fill"]),fd=["high","low"],gd=_e(oe,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),$d={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},md=({children:e,icon:r,text:t,isFlipped:a,isFlexible:o,isUppercase:s,color:i,variant:d,size:u="inherit",layout:v="hug",contrast:p="high",...f})=>{const h=i??$d[d??"brand-blue"],g=e||(0,n.jsx)(Ye,{icon:r,text:t,isFlipped:a,layout:"gutter"}),w=v==="fill"&&o;return(0,n.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":h,"data-layout":v,"data-size":u,"data-is-flexible":w?"":void 0,"data-is-uppercase":s?"":void 0,children:g})})};N("ArcBadge",cd);const ee=c`--arc•badge•count`,nn=c`${ee}•fg`,sn=c`${ee}•bg`,bd=qi({fg:nn,bg:sn}),yd=Ki({fg:nn,bg:sn}),xd=c`
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
`,wd=c`
  &:has(>[data-shape=square]) {
    ${ee}•border•radius: var(${l}•4);
  }

  &:has(>[data-shape=circle]) {
    ${ee}•border•radius: var(--arc-border-radius-pill);
  }
`,Ad=c`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${bd}
  ${yd}
  ${xd}
  ${wd}
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

  color: var(--arc-badge-count-color, var(${nn}));
  background: var(--arc-badge-count-background, var(${sn}));
  border-radius: var(${ee}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${ee}•font•size•text, 1em);
  }
}

`,Cd=_e(ze,["inherit","lg","md","sm"]),Sd=_e(oe,["neutral","brand","critical","warning","success","inverse"]),kd=["low","high"],zd=_e(jt,["square","circle"]),_d={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Ed=({children:e,text:r,color:t,variant:a,contrast:o,size:s="inherit",shape:i="square",...d})=>{const u=e||(0,n.jsx)("span",{"data-element":"text",children:r}),v=t??_d[a??"neutral"],p=a==="critical"?"high":o??"low";return(0,n.jsx)("span",{...d,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-color":v,"data-contrast":p,"data-shape":i,"data-size":s,children:u})})};N("ArcBadgeCount",Ad);const Ir=c`--arc•label`,Qt=c`${Ir}•cursor`,ea=c`${Ir}•opacity`,Td=c`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${ea}: var(--arc-label-opacity, unset);
    ${ea}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ir}•display: var(--arc-label-display, inline-flex);
    ${Ir}•gap: var(--arc-label-gap, var(${l}•8));
    ${Ir}•align•items: var(--arc-label-align-items, baseline);

    ${Qt}: var(--arc-label-cursor, pointer);
    ${Qt}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Qt}: var(${Qt}•disabled);
      ${ea}: var(${ea}•disabled);
    }

    &[data-layout=fill] {
      ${Ir}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ir}•display);
    align-items: var(${Ir}•align•items);
    gap: var(${Ir}•gap);
    cursor: var(${Qt});
  }

}
`,jd=I(tr,["hug","fill"]),tt=({layout:e,...r})=>(0,n.jsx)("label",{...r,"arc-label":"","data-layout":e});N("ArcLabel",Td);const Id=c`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${ea}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,at=e=>(0,n.jsx)("span",{...e,"arc-label-content":""});N("LabelContent",Id);const Ld={checkbox:"checkbox",radio:"radio",switch:"radio"},ra=({id:e,indeterminate:r,type:t,onChange:a,...o})=>{const s=t==="checkbox"&&!!r,i=(0,y.useRef)(null),d=Ue(e,`arc-${t}`),u=v=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const f={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};v?.(f,p)};return(0,y.useEffect)(()=>{i.current?.type==="checkbox"&&(i.current.indeterminate=!!r)},[r]),(0,n.jsx)("input",{...o,id:d,ref:i,type:Ld[t],"arc-input-type":t,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":s||void 0,onChange:u(a)})},Md=c`
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
`,Xa=({type:e,...r})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...r,"arc-input-mask":e})});N("ArcBooleanInputMask",Md);const pe=c`--arc•checkbox`,Rd=c`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${pe}•font•size: 1em;
      ${pe}•icon•size: 0.625em;
      ${pe}•size: 1.125em;
      ${pe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${pe}•font•size: var(${l}•14);
      ${pe}•icon•size: var(${l}•10);
      ${pe}•size: var(${l}•18);
      ${pe}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${pe}•font•size: var(${l}•12);
      ${pe}•icon•size: var(${l}•10);
      ${pe}•size: var(${l}•16);
      ${pe}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${x}•border•radius: var(${l}•4);
    ${x}•size: var(${pe}•size);
    ${x}•icon•size: var(${pe}•icon•size);
    ${x}•width: var(${pe}•size);
    ${x}•height: var(${pe}•size);
    ${x}•translate: 0 var(${l}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${pe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${pe}•font•size);
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
`,Bd=I(tr,["hug","fill"]),Pd=I(ze,["inherit","md","sm"]),Od=I(oe,["primary","secondary"]),Qi=({children:e,label:r,layout:t,size:a="md",variant:o="primary",useMask:s=!0,...i})=>{const{className:d,title:u,...v}=i,p={className:d,title:u},f=e??r,h=(0,n.jsx)(ra,{...v,type:"checkbox"}),g=s&&(0,n.jsxs)(Xa,{type:"checkbox",children:[h,(0,n.jsx)(B,{icon:v?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),w=!!f&&(0,n.jsxs)(tt,{layout:t,children:[g||h,(0,n.jsx)(at,{children:f})]});return(0,n.jsx)("span",{...p,"arc-checkbox":"","data-size":a,"data-variant":o,children:w||g||h})};N("ArcCheckbox",Rd);const Ze=c`--arc•cb`,re=c`${Ze}•o`,Xe=c`${re}•border`,cn=c`${re}•icon`,ln=c`${re}•text`,Dd=c`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Ze}•font•size: var(${l}•14);
    ${Ze}•border•radius: var(${l}•6);
    ${Ze}•background: var(--arc-color-alpha-black-0);
    ${Ze}•padding: 0px;
    ${Ze}•gap: var(${l}•2);

    ${re}•color: var(--arc-color-fg-secondary);
    ${re}•background: var(--arc-color-alpha-white-0);

    ${Xe}•color: var(--arc-color-alpha-black-0);
    ${Xe}•width: var(${l}•1);
    ${Xe}•radius: var(${l}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${re}•size: var(${l}•40);
      ${re}•line•height: var(${l}•38); /* • -2px to account for border-width (top/bottom) */
      ${cn}•padding: var(${l}•8);
      ${ln}•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${re}•size: var(${l}•32);
      ${re}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${cn}•padding: var(${l}•6);
      ${ln}•padding: var(${l}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Ze}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Ze}•display: flex;
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
    font-size: var(--arc-checkbox-bar-font-size, var(${Ze}•font•size));
    display: var(${Ze}•display);
    gap: var(${Ze}•gap);
    background: var(${Ze}•background);
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
        padding: 0 var(${ln}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${cn}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Hd=I(tr,["hug","fill"]),Vd=I(ze,["lg","md"]),Fd=({children:e,label:r,icon:t,...a})=>{const o=e||(0,n.jsx)(Ye,{icon:t,text:r});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(Qi,{...a,label:o,layout:"fill",useMask:!1})})},Nd=({children:e,size:r="lg",layout:t="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-checkbox-bar":"","data-size":r,"data-layout":t,role:"group",children:e});N("ArcCheckboxBar",Dd);const Ud=c`--arc•menu`,Fr=c`${Ud}•item`,Wd=c`
@layer arc-components {

  [arc-menu] {
    ${Fr}•gap: var(${l}•8);
    ${Fr}•fg: inherit;
    ${Fr}•bg: inherit;

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
    gap: var(--arc-menu-item-gap, var(${Fr}•gap));

    background: var(--arc-menu-item-background, var(${Fr}•bg));
    color: var(--arc-menu-item-color, var(${Fr}•fg));
    padding: var(--arc-menu-item-padding, var(${l}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${Fr}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${l}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Fr}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`,Yd=e=>[{test:()=>!!e.variant,value:e.variant},{test:()=>!!e.icon&&typeof e.subtext<"u",value:"icon-text-detail"},{test:()=>!!e.icon,value:"icon-text"},{test:()=>!!e.avatar&&typeof e.subtext<"u",value:"user-detail"},{test:()=>!!e.avatar,value:"user"},{test:()=>typeof e.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Gd={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},ot={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Zd=({icon:e,...r})=>{const t=e&&typeof e=="string"?`${e.replace(" fa-fw","")} arc-fw`:e;return{divider:(0,n.jsx)("hr",{}),"section-label":(0,n.jsx)(Ye,{...r,...ot,icon:t,size:"sm",isStrong:!0}),"icon-text":(0,n.jsx)(Ye,{...r,...ot,icon:t}),"icon-text-detail":(0,n.jsx)(Ye,{...r,...ot,icon:t,isStrong:!0}),text:(0,n.jsx)(Ye,{...r,...ot}),"text-detail":(0,n.jsx)(Ye,{...r,...ot,subtext:r.subtext??"sub",isStrong:!0}),user:(0,n.jsx)(No,{...r,...ot,size:"sm"}),"user-detail":(0,n.jsx)(No,{...r,...ot,size:"md",isStrong:!0})}},Xd=e=>e?.role??Gd[ta(e)]??"menuitem",ta=e=>Yd(e)?.find(({test:r})=>r())?.value??"text",es=e=>r=>Zd(r)[e],qd=(e,r,t,a)=>{let o=1,s=e;const i=u=>u>=t?0:u+1,d=u=>u<=0?t:u-1;for(;o<=t;){const u=i(s),v=d(s),p={previous:r==="previous"?v:s,actual:s,next:r==="next"?u:s}[r];if(a(p))return p;s=p,o+=1}return-1},Kd=({items:e,filterText:r,renderItem:t,isVisible:a,...o})=>{const s=(0,y.useRef)(null),i=(0,y.useRef)([]),[d,u]=(0,y.useState)(-1),[v,p]=(0,y.useState)(!1),[f,h]=(0,y.useState)(Math.max(e.length-1,0));(0,y.useEffect)(()=>{a&&s.current&&(i.current=Array.from(s.current.querySelectorAll("[arc-button=custom]")))},[a,e]);const g=(0,y.useCallback)(S=>i.current[S]||null,[]),w=(0,y.useCallback)((S,T)=>{const O=qd(S,T,f,g);u(O),g(O)?.focus()},[f,g]),C=(0,y.useCallback)((S,T)=>()=>{!v&&T&&w(S,"actual")},[v,w]),E={ArrowUp:S=>w(S,"previous"),ArrowDown:S=>w(S,"next"),Home:()=>w(0,"actual"),End:()=>w(f,"actual")},D=S=>T=>{Object.keys(E).includes(T.key)&&(p(!0),T.stopPropagation(),T.preventDefault(),E[T.key](S))},k=(0,y.useMemo)(()=>{const S=r?e.filter(T=>Object.values(T).some(O=>O===r)):e;return h(Math.max(S.length-1,0)),S},[e,r]),j=(0,y.useMemo)(()=>k.map(({itemId:S,role:T,...O},V)=>{const X=ta(O)||"",ce=T||Xd(O)||"menuitem",K=V===d;return(0,n.jsx)("li",{"arc-menu-item":X,role:ce,onMouseEnter:C(V,!!O.onClick),children:t?.(O,V,{filterText:r,isCurrent:K})},S)}),[d,r,k,t,C]);return(0,y.useEffect)(()=>{a&&w(-1,"next")},[a,w]),(0,n.jsx)("ul",{...o,ref:s,"arc-menu":"",role:"menu",onKeyDown:D(d),onMouseLeave:()=>u(-1),onMouseMove:()=>p(!1),tabIndex:a?0:-1,children:j})};N("ArcMenu",Wd);const rs=e=>{const{startSlot:r,endSlot:t,onClick:a,href:o,target:s,containerProps:i,isDisabled:d,"aria-disabled":u,tooltip:v,...p}=e,f=ta(p),h=es(f),g=u??d,w=f==="divider",C=o||a,E=!w,D=E&&r?"":void 0,k=E&&t?"":void 0,j=S=>{g||(S.currentTarget.closest("[arc-popover]")?.hidePopover(),a?.(S.nativeEvent))};return C?(0,n.jsxs)(je,{...i,tooltip:v,href:o,target:s,"aria-disabled":g?"true":void 0,_isCustom:!0,"arc-dropdown-item":f??"","has-start-slot":D,"has-end-slot":k,onClick:j,children:[E&&r,(0,n.jsx)(h,{...p,"is-item-content":"interactive"}),E&&t]}):(0,n.jsxs)("div",{...i,"arc-dropdown-item":f??"","has-start-slot":D,"has-end-slot":k,children:[E&&r,(0,n.jsx)(h,{...p,"is-item-content":"inert"}),E&&t]})},Jd=c`--arc•dropdown`,Qd=c`${Jd}•menu`,Ae=c`${Qd}•item`,eu=c`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Ae}•padding: var(${$}•8) var(${$}•12);
    ${Ae}•min•height: var(${l}•36);
    ${Ae}•gap: var(${$}•8);

    &[arc-dropdown-item=text-detail] {
      ${Ae}•min•height: var(${l}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Ae}•min•height: var(${l}•32);
    }

    &[arc-dropdown-item=user] {
      ${Ae}•min•height: var(${l}•40);

      &:not([has-start-slot]) {
        ${Ae}•padding: var(${$}•8) var(${$}•12) var(${$}•8) var(${$}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Ae}•min•height: var(${l}•48);

      &:not([has-start-slot]) {
        ${Ae}•padding: var(${$}•8) var(${$}•12) var(${$}•8) var(${$}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Ae}•min•height: var(${l}•8);
      ${Ae}•padding: 0;

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

    --arc-menu-item-gap: var(${Ae}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Ae}•gap);
    text-align: start;
    min-height: var(${Ae}•min•height);

    &:not([arc-button]) {
      padding: var(${Ae}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Ae}•padding);
      --arc-button-min-height: var(${l}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,ts=(0,y.forwardRef)((e,r)=>(0,n.jsx)(Xt,{...e,ref:r,"arc-dropdown-menu-button":""})),dn=e=>{const{items:r,renderItem:t,...a}=e,[o,s]=(0,y.useState)(!1),i=(0,y.useCallback)((...u)=>t?.(...u)||(0,n.jsx)(rs,{...u[0]}),[t]),d=u=>{s(u.newState==="open"),e?.onToggle?.(u)};return(0,n.jsx)(Jt,{...a,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,n.jsx)(Kd,{"arc-dropdown-menu":"",items:r??[],renderItem:i,isVisible:o})})};ts.displayName="ArcDropdownButton",dn.Button=ts,dn.Item=rs,N("ArcDropdownMenu",eu);const ru=e=>(0,n.jsx)(je,{...e,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),qa=c`--arc•link`,$r=c`${qa}•fg`,aa=c`${$r}•hover`,oa=c`${$r}•disabled`,un=c`${qa}•outline`,as=c`${un}•size`,vn=c`${un}•offset`,tu=c`${qa}•cursor`,na=c`${qa}•focus•color`,au=c`
@layer arc-components {
${Tl}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${$r}: currentcolor;
    ${aa}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${oa}: color-mix(in srgb, currentcolor, transparent 70%);

    ${na}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${$r}: var(--arc-color-fg-primary);
    ${aa}: var(--arc-color-fg-secondary);
    ${oa}: var(--arc-color-fg-disabled);
    ${na}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${$r}: var(--arc-color-fg-secondary);
    ${aa}: var(--arc-color-fg-primary);
    ${oa}: var(--arc-color-fg-disabled);
    ${na}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${$r}: var(--arc-color-fg-on-mono-inverse);
    ${aa}: var(--arc-link-fg-hover-inverse);
    ${oa}: var(--arc-link-fg-disabled-inverse);
    ${na}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${as}: 0.125em; /* 2px */
    ${vn}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${$r}: var(--arc-link-color-hover, var(${aa}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${un}: var(${as}) solid var(--arc-link-color-focus, var(${na}));
    ${vn}: var(${vn});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${$r}: var(--arc-link-color-disabled, var(${oa}));
    ${tu}: not-allowed;
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
`,ou=I(oe,["inherit","primary","secondary","inverse"]),nu=({children:e,layout:r="gutter",size:t="inherit",variant:a="inherit",tag:o="a",href:s,icon:i,text:d,overflow:u,iconSize:v,gapSize:p,isFlipped:f,isDisabled:h,...g})=>(0,n.jsx)(o,{...g,href:h?void 0:s,"arc-link":"","data-variant":a,"aria-disabled":h,"data-is-disabled":h?"":void 0,children:e||(0,n.jsx)(Ye,{icon:i,text:d,overflow:u,iconSize:v,gapSize:p,size:t,layout:r,isFlipped:f})});N("ArcLink",au);const iu=[...Or],su=I(oe,["common"]),cu=I(oe,["common","critical"]),lu=I(oe,["common","brand","info","success","warning","error","processing"]),du=["auto","dark","light","none"],uu=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],vu=I(ze,["xl","lg","md","sm","custom","fullscreen"]),hu=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],pu=c`arc•button•bar`,ia=c`${pu}•axis`,fu=c`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${ia}: row;

    &[is-flipped] {
      ${ia}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${ia}: column;

    &[is-flipped] {
      ${ia}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${ia}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(--arc-space-1));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,hn=({children:e,...r})=>{const{Element:t="menu",orientation:a="horizontal",isFlipped:o=!1,...s}=r;return(0,n.jsx)(t,{...s,"arc-button-bar":a,"is-flipped":o?"":void 0,role:s.role??"group",children:e})};N("ArcButtonBar",fu);const pn=e=>e?.matches(":modal"),fn=(e,r)=>r.target===e,gu=(e,r)=>r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom,sa=({modalRef:e,shouldConfirm:r,setIsConfirming:t,onCloseOverride:a=void 0})=>(o,s)=>i=>{if(i?.preventDefault?.(),i?.stopPropagation?.(),!e?.current){s?.(i);return}if(a){a(o,i,e.current),s?.(i);return}if(r&&o!=="confirm:discard"){t?.(!0);return}e.current?.close(o),t?.(!1),s?.(i)},gn=({modalRef:e,shouldConfirm:r,setIsConfirming:t,onClose:a,onToggle:o})=>{(0,y.useEffect)(()=>{const s=e.current;if(!s)return;const i=u=>{pn(s)&&fn(s,u)&&(r?(u.preventDefault(),u.stopPropagation(),t?.(!0)):a?.("outside",u))},d=u=>{fn(s,u)&&(t?.(!1),a?.(s.returnValue,u),o?.(!1,u))};return s.addEventListener("close",d),s.addEventListener("cancel",i),()=>{s.removeEventListener("close",d),s.removeEventListener("cancel",i)}},[e,r,t,a,o])},$n=({modalRef:e,isOpen:r,isTopLayer:t})=>{(0,y.useEffect)(()=>{const a=e.current;a&&(r&&!a.open&&(t?a.showModal():a.show()),!r&&a.open&&a.close())},[r,t])},mn=({modalRef:e,isOpen:r,autoFocusId:t})=>{(0,y.useEffect)(()=>{const a=e.current;if(!a||!t||!r)return;const o=a.querySelector(`#${t}`);if(!o||!(o instanceof HTMLElement))return;const s=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(s)},[e,t,r])},os=(e,r)=>(typeof e.composedPath=="function"?e.composedPath():[]).includes(r)||e.target instanceof Node&&r.contains(e.target),ns=({modalRef:e,isOpen:r=!1,closeOnBackdrop:t=!1,attemptCloseModal:a})=>{(0,y.useEffect)(()=>{const o=e.current;if(!o||!r||!t||!pn(o))return;let s=!1;const i=u=>{s=os(u,o)},d=u=>{if(s||os(u,o))return;const v=o.getBoundingClientRect();gu(v,u)&&a("outside")(u)};return document.documentElement?.addEventListener("pointerdown",i,{capture:!0}),document.documentElement?.addEventListener("click",d,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",i,{capture:!0}),document.documentElement?.removeEventListener("click",d,{capture:!0})}},[e,a,r,t])},is=({modalRef:e,isOpen:r=!1,closeOnEsc:t=!1,closedBy:a="closerequest",attemptCloseModal:o})=>{(0,y.useEffect)(()=>{const s=e.current;if(!s||!r||!t||!pn(s))return;const i=d=>{if(d.key==="Escape"&&fn(s,d)){if(a==="none"){d.stopPropagation(),d.preventDefault();return}o("escape")(d)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,o,r,t,a])},bn=e=>(0,n.jsx)(je,{"aria-label":"Dismiss",text:"Dismiss",...e,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large fa-fw",layout:"icon",shape:"square",size:"md"}),yn=e=>(0,n.jsx)("div",{...e,"arc-modal-content":""}),ss=({showDivider:e,...r})=>(0,n.jsx)("header",{...r,"arc-modal-header":"","has-divider":e?"":void 0}),$u=({glyph:e,variant:r="common"})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)(B,{icon:e,"arc-modal-glyph":"","arc-icon-status":r})}),xn=e=>{const{titleContent:r,TitleElement:t="h2",...a}=e;return(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)(t,{...a,"arc-modal-title":"",children:typeof r=="string"?r:(0,n.jsx)(Ye,{...r})})})},mu=({message:e,...r})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)("p",{...r,"arc-modal-message":"",children:e})}),wn=({tag:e="section",padding:r,...t})=>(0,n.jsx)(e,{...t,"arc-modal-body":"","data-padding":r==="auto"?void 0:r}),An=({showDivider:e,...r})=>(0,n.jsx)("footer",{...r,"arc-modal-footer":"","has-divider":e?"":void 0}),bu=e=>r=>{if(r.key==="Escape"){if(e==="none"){r.stopPropagation(),r.preventDefault();return}return"escape"}},_=c`--arc•modal`,wt=c`${_}•layout`,yu=c`${_}•header`,Ka=c`${_}•body`,ca=c`${_}•footer`,cs=c`${_}•fg`,Ja=c`${_}•bg`,mr=c`${_}•backdrop`,Ce=c`${_}•transition`,At=c`${yu}•padding`,q=c`${Ka}•padding`,Nr=c`${ca}•padding`,xu=c`
  ${_}•font•size: var(${l}•14);
  ${_}•gap: var(${$}•16);

  ${wt}•rows: auto 1fr auto;
  ${wt}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${wt}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${wt}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${wt}•rows: auto;
  }

  ${cs}: var(--arc-color-fg-primary);
  ${Ja}: var(--arc-color-bg-primary);
  ${_}•border: none;
  ${_}•border•radius: var(--arc-border-radius-lg);
  ${_}•divider: var(${l}•1) solid var(--arc-color-border-mid);

  ${_}•max•width: calc(100vw - var(${$}•32));
  ${_}•min•width: unset;
  ${_}•width: auto;

  ${_}•max•height: calc(100vh - var(${$}•32));
  ${_}•min•height: unset;
  ${_}•height: max-content;

  ${Ce}•y: 1vh;
  ${Ce}•y•start: 2.5vh;
  ${Ce}•scale: 1;
  ${Ce}•scale•start: 0.975;

  ${Ka}•text•align: unset;
  ${ca}•justify•content: flex-end;

  ${mr}•bg: var(--arc-color-overlay-stark);
  ${mr}•pointer•events: none;
  ${mr}•cursor: default;

  &:where([is-backdrop=light]) {
    ${mr}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${mr}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${mr}•bg: transparent;
  }
`,wu=c`
  &[data-size=sm] {
    ${_}•width: 28em;
  }

  &[data-size=md] {
    ${_}•width: 40em;
  }

  &[data-size=lg] {
    ${_}•width: 50em;
  }

  &[data-size=xl] {
    ${_}•width: 64em;
  }

  &[data-size=custom] {
    ${_}•width: auto;
    ${_}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${_}•width: 100vw;
    ${_}•height: 100vh;
    ${_}•min•width: 100vw;
    ${_}•min•height: 100vh;
    ${_}•max•width: 100vw;
    ${_}•max•height: 100vh;
    ${_}•border•radius: var(--arc-border-radius-none);

    ${Ce}•y: 0;
    ${Ce}•y•start: 0;
    ${Ce}•scale: 1.125;
    ${Ce}•scale•start: 1.125;
  }
`,Au=c`
  &[is-confirm] {
    ${ca}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${Ka}•text•align: center;
    ${ca}•justify•content: center;

    ${q}•block•start: var(${$}•40);
    ${q}•block•end: var(${$}•20);

    ${Nr}•block•start: var(${$}•12);
    ${Nr}•block•end: var(${$}•40);

    ${_}•glyph•size: var(${l}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${_}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${_}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${$}•12);
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
`,Cu=c`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${q}•block•start: var(${$}•10);
    }

    &:has([arc-modal-footer]) {
      ${q}•block•end: var(${$}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${At}•block•end: var(${$}•20);
      ${q}•block•start: var(${$}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${q}•block•end: var(${$}•20);
      ${Nr}•block•start: var(${$}•12);
      ${Nr}•block•end: var(${$}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${q}•inline•start: 0;
      ${q}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${q}•block•start: 0;
      ${q}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${q}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${q}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${q}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${q}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${q}•block•start: var(${$}•20);
      ${q}•inline•end: var(${$}•24);
      ${q}•block•end: var(${$}•20);
      ${q}•inline•start: var(${$}•24);
    }

    &:has([arc-modal-go-back]) {
      ${At}•inline•start: var(${$}•20);
    }

    ${At}:
      var(${$}•20)
      var(${$}•24)
      var(${At}•block•end, var(${$}•10))
      var(${At}•inline•start, var(${$}•24));

    ${q}:
      var(${q}•block•start, var(${$}•20))
      var(${q}•inline•end, var(${$}•24))
      var(${q}•block•end, var(${$}•20))
      var(${q}•inline•start, var(${$}•24));

    ${Nr}:
      var(${Nr}•block•start, var(${$}•10))
      var(${$}•24)
      var(${Nr}•block•end, var(${$}•20))
      var(${$}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${q}: 0;
    }
  }
`,Su=c`
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
`,ku=c`
  [arc-modal] {
    display: none;
    opacity: 0;
    transform:
      translateY(var(${Ce}•y))
      scale(var(${Ce}•scale));

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
        translateY(var(${Ce}•y•start))
        scale(var(${Ce}•scale•start));

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
`,Cn=c`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${xu}
    ${wu}
    ${Au}
    ${Cu}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Ce}•y: 0;
      ${Ce}•scale: 1;
      ${Ce}•y•start: 0;
      ${Ce}•scale•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, transform;
    contain: layout style paint;

    padding: 0;
    color: var(--arc-modal-color, var(${cs}));
    background: var(--arc-modal-background, var(${Ja}));
    border: var(--arc-modal-border, var(${_}•border));
    border-radius: var(--arc-modal-border-radius, var(${_}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${_}•width));
    height: var(--arc-modal-height, var(${_}•height));
    min-width: var(--arc-modal-min-width, var(${_}•min•width));
    min-height: var(--arc-modal-min-height, var(${_}•min•height));
    max-width: var(--arc-modal-max-width, var(${_}•max•width));
    max-height: var(--arc-modal-max-height, var(${_}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${mr}•bg));
      pointer-events: var(${mr}•pointer•events, none);
      cursor: var(${mr}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${_}•font•size));
      display: grid;
      grid-template-rows: var(--arc-modal-layout-rows, var(${wt}•rows));
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
      gap: var(--arc-modal-header-gap, var(${_}•gap));

      padding: var(${At});
      background: var(--arc-modal-header-background, var(${Ja}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${_}•divider));
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
        margin: var(${$}•4m) var(${$}•8m) var(${$}•4m) var(${$}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${$}•4m) 0 var(${$}•4m) var(${$}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${$}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${$}•4);
      }
    }

    [arc-modal-body] {
      padding: var(${q});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${Ka}•text•align));
    }

    [arc-modal-footer] {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${ca}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${_}•gap));

      background: var(--arc-modal-footer-background, var(${Ja}));
      padding: var(--arc-modal-footer-padding, var(${Nr}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${_}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${$}•16) var(${$}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${mr}•bg));
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
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${$}•32)));
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

  ${Su}
  ${ku}
`,Ur={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},ls=({children:e,headerProps:r,bodyProps:t,footerProps:a,...o})=>{const s=(0,y.useRef)(null),{isOpen:i,autoFocusId:d,isTopLayer:u=Ur.isTopLayer,isInverse:v=Ur.isInverse,scheme:p=Ur.scheme,backdropColor:f=Ur.backdropColor,variant:h=Ur.variant,message:g=Ur.message,onCloseOverride:w=Ur.onCloseOverride,onConfirmDiscard:C,onConfirmCancel:E,...D}=o,{slotStart:k,TitleElement:j,titleContent:S,slotEnd:T,...O}=r||{},{primaryButton:V,secondaryButton:X,...ce}=a||{},K=!!(S||k||T),J=p==="auto"?void 0:p,me=!!w,Le=te=>me?w?.("confirm:discard",te,s.current??void 0):C?.("confirm:discard",te),Ve=te=>me?w?.("confirm:cancel",te,s.current??void 0):E?.("confirm:cancel",te);gn({modalRef:s,onClose:w}),$n({modalRef:s,isOpen:i,isTopLayer:u}),mn({modalRef:s,isOpen:i,autoFocusId:d});const Fe=te=>{Ve(te),X?.onClick?.(te)},Qe=te=>{Le(te),V?.onClick?.(te)};return(0,n.jsx)("dialog",{...D,ref:s,"arc-modal":"","arc-scheme":v?"inverse":J,"is-confirm":h||"","is-inverse":v?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:bu("none"),children:(0,n.jsxs)(yn,{children:[K&&(0,n.jsxs)(ss,{...O,children:[k&&(0,n.jsx)("div",{"header-slot":"start",children:k}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(xn,{TitleElement:j,titleContent:S})}),T&&(0,n.jsx)("div",{"header-slot":"end",children:T})]}),(0,n.jsx)(wn,{...t,children:e||g&&(0,n.jsx)("p",{style:{margin:0},children:g})}),(0,n.jsx)(An,{...ce,children:(0,n.jsxs)(hn,{children:[(0,n.jsx)(je,{...X,text:X?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:v,onClick:Fe}),(0,n.jsx)(je,{...V,text:V?.text||"Discard",variant:h??"common",hierarchy:"primary",isInverse:v,onClick:Qe})]})})]})})};N("ArcModalConfirm",Cn);const Ie={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},zu=({children:e,confirmProps:r,headerProps:t,bodyProps:a,dismissProps:o,footerProps:s,...i})=>{const d=(0,y.useRef)(null),[u,v]=(0,y.useState)(!1),{isOpen:p,autoFocusId:f,isTopLayer:h=Ie.isTopLayer,isInverse:g=Ie.isInverse,scheme:w=Ie.scheme,backdropColor:C=Ie.backdropColor,hasConfirmFlow:E=Ie.hasConfirmFlow,hasUnsavedChanges:D=Ie.hasUnsavedChanges,onCloseOverride:k=Ie.onCloseOverride,bypassConfirmWhen:j=Ie.bypassConfirmWhen??{},size:S=Ie.size,closeOnBackdrop:T=Ie.closeOnBackdrop,closeOnEsc:O=Ie.closeOnEsc,showDismiss:V=Ie.showDismiss,onActionError:X,onClose:ce,onToggle:K,width:J,height:me,style:Le,...Ve}=i,{showGoBack:Fe,goBackProps:Qe,slotStart:te,TitleElement:lr,titleContent:Br,slotEnd:er,showDivider:it=Ie.headerProps?.showDivider,...dr}=t??{},{slotStart:wr,primaryButton:Ne,secondaryButton:F,tertiaryButton:le,showDivider:ur=Ie.footerProps?.showDivider,...be}=s??{},rr=!!(Fe||Br||te||er),ie=!!(Ne||F||le),Ar=!!(ie||wr),Se=!!(E&&D),ke=O?"closerequest":"none",st=w==="auto"?void 0:w,{didPressEscapeKey:ga,didClickBackdrop:ct,didClickGoBackButton:Vn,didClickDismissButton:go,didClickPrimaryButton:$o,didClickSecondaryButton:mo,didClickTertiaryButton:Fn}=j,lt=sa({modalRef:d,shouldConfirm:Se,setIsConfirming:v,onCloseOverride:k});gn({modalRef:d,shouldConfirm:Se,setIsConfirming:v,onClose:ce,onToggle:K}),$n({modalRef:d,isOpen:p,isTopLayer:h}),mn({modalRef:d,isOpen:p,autoFocusId:f}),ns({modalRef:d,isOpen:p,closeOnBackdrop:T,attemptCloseModal:ct?sa({modalRef:d,shouldConfirm:Se&&!ct,setIsConfirming:v}):lt}),is({modalRef:d,isOpen:p,closeOnEsc:O,closedBy:ke,attemptCloseModal:ga?sa({modalRef:d,shouldConfirm:Se&&!ga,setIsConfirming:v}):lt});const dt=()=>v(!1),lh=($a,bo)=>lt($a)(bo),Et=($a,bo,Nn)=>async Tt=>{Tt?.preventDefault?.(),Tt?.stopPropagation?.();const dh=()=>bo?sa({modalRef:d,shouldConfirm:Se&&!bo,setIsConfirming:v})($a,Nn?.onCloseCallback)(Tt):lt($a,Nn?.onCloseCallback)(Tt);try{await Nn?.onClick?.(Tt),dh()}catch(uh){X?.(uh,{reason:$a,event:Tt})}};return(0,n.jsxs)("dialog",{...Ve,ref:d,"arc-modal":"","arc-scheme":g?"inverse":st,"is-inverse":g?"":void 0,"is-top-layer":h?"":void 0,"is-backdrop":C==="auto"?void 0:C,"data-size":S,closedby:ke,style:{"--arc-modal-width":J??"","--arc-modal-height":me??"",...Le},children:[!rr&&V&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(bn,{...o,isInverse:g,onClick:Et("button:dismiss",go,o)})}),(0,n.jsxs)(yn,{inert:u?"":void 0,children:[rr&&(0,n.jsxs)(ss,{...dr,showDivider:it,children:[Fe&&(0,n.jsx)("div",{"header-slot":"go-back",children:(0,n.jsx)(je,{"arc-modal-go-back":"",icon:"fa-regular fa-arrow-left fa-fw",text:"Go Back","aria-label":"Go Back",...Qe,layout:"icon",size:"md",variant:"common",hierarchy:"secondary",isInverse:g,onClick:Et("button:back",Vn,Qe)})}),te&&(0,n.jsx)("div",{"header-slot":"start",children:te}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(xn,{TitleElement:lr,titleContent:Br})}),er&&(0,n.jsx)("div",{"header-slot":"end",children:er}),V&&(0,n.jsx)("div",{"header-slot":"dismiss",children:(0,n.jsx)(bn,{...o,isInverse:g,onClick:Et("button:dismiss",go,o)})})]}),(0,n.jsx)(wn,{...a,children:e}),Ar&&(0,n.jsxs)(An,{...be,showDivider:ur,children:[wr&&(0,n.jsx)("div",{"footer-slot":"content",children:wr}),ie&&(0,n.jsxs)(hn,{children:[le&&(0,n.jsx)(je,{...le,text:le?.text||"Button",isInverse:g,variant:"common",hierarchy:"tertiary",onClick:Et("button:tertiary",Fn,le)}),F&&(0,n.jsx)(je,{...F,text:F?.text||"Cancel",isInverse:g,variant:"common",hierarchy:"secondary",onClick:Et("button:secondary",mo,F)}),Ne&&(0,n.jsx)(je,{...Ne,text:Ne?.text||"Action",isInverse:g,variant:"common",hierarchy:"primary",onClick:Et("button:primary",$o,Ne)})]})]})]}),E&&(0,n.jsx)(ls,{isOpen:u,isInverse:g,isTopLayer:h,backdropColor:C,...r,onConfirmDiscard:lh,onConfirmCancel:dt})]})};N("ArcModal",Cn);const Lr={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},_u={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-duotone fa-light-emergency-on",info:"fa-solid fa-circle-info",processing:(0,n.jsx)(Xo,{"arc-modal-spinner":""})},Eu=({children:e,dismissProps:r,bodyProps:t,footerProps:a,...o})=>{const s=(0,y.useRef)(null),{isOpen:i,autoFocusId:d,isTopLayer:u=Lr.isTopLayer,isInverse:v=Lr.isInverse,scheme:p=Lr.scheme,backdropColor:f=Lr.backdropColor,closeOnBackdrop:h=Lr.closeOnBackdrop,closeOnEsc:g=Lr.closeOnEsc,variant:w=Lr.variant,icon:C,TitleElement:E,titleContent:D,message:k,showDismiss:j,onCloseOverride:S=Lr.onCloseOverride,onClose:T,onToggle:O,...V}=o,{primaryButton:X,...ce}=a??{},K=C||_u[w],J=g?"closerequest":"none",me=p==="auto"?void 0:p,Le=sa({modalRef:s,onCloseOverride:S});return gn({modalRef:s,onClose:T,onToggle:O}),$n({modalRef:s,isOpen:i,isTopLayer:u}),mn({modalRef:s,isOpen:i,autoFocusId:d}),ns({modalRef:s,isOpen:i,closeOnBackdrop:h,attemptCloseModal:Le}),is({modalRef:s,isOpen:i,closeOnEsc:g,closedBy:J,attemptCloseModal:Le}),(0,n.jsxs)("dialog",{...V,ref:s,"arc-modal":"","arc-scheme":v?"inverse":me,"is-alert":w||"","is-inverse":v?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:J,children:[j&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(bn,{...r,isInverse:v,onClick:Le("button:dismiss",r?.onClick)})}),(0,n.jsxs)(yn,{children:[(0,n.jsx)(wn,{...t,children:e||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($u,{glyph:K,variant:w}),(0,n.jsx)(xn,{TitleElement:E,titleContent:D}),(0,n.jsx)(mu,{message:k})]})}),(0,n.jsx)(An,{...ce,children:(0,n.jsx)(hn,{orientation:"vertical",children:(0,n.jsx)(je,{...X,text:X?.text||"Close",variant:"common",hierarchy:"primary",isInverse:v,onClick:Le("button:primary",X?.onClick)})})})]})]})};N("ArcModalAlert",Cn);const fe=c`--arc•radio`,Tu=c`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${fe}•font•size: 1em;
      ${fe}•icon•size: 0.625em;
      ${fe}•size: 1.125em;
      ${fe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${fe}•font•size: var(${l}•14);
      ${fe}•icon•size: var(${l}•10);
      ${fe}•size: var(${l}•18);
      ${fe}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${fe}•font•size: var(${l}•12);
      ${fe}•icon•size: var(${l}•10);
      ${fe}•size: var(${l}•16);
      ${fe}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-circle);
    ${x}•size: var(${fe}•size);
    ${x}•icon•size: var(${fe}•icon•size);
    ${x}•width: var(${fe}•size);
    ${x}•height: var(${fe}•size);
    ${x}•translate: 0 var(${l}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${fe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${fe}•font•size);
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
`,ju=I(tr,["hug","fill"]),Iu=I(ze,["inherit","md","sm"]),ds=({children:e,label:r,layout:t,size:a="md",useMask:o=!0,...s})=>{const{className:i,title:d,...u}=s,v={className:i,title:d},p=e??r,f=(0,n.jsx)(ra,{...u,type:"radio"}),h=o&&(0,n.jsxs)(Xa,{type:"radio",children:[f,(0,n.jsx)(B,{icon:"fa-solid fa-circle-small arc-fw"})]}),g=!!p&&(0,n.jsxs)(tt,{layout:t,children:[h||f,(0,n.jsx)(at,{children:p})]});return(0,n.jsx)("span",{...v,"arc-radio":"","data-size":a,children:g||h||f})};N("ArcRadio",Tu);const Oe=c`--arc•rb`,P=c`${Oe}•o`,Lu=c`
@layer arc-components {

  [arc-radio-bar] {
    ${Oe}•font•size: var(${l}•14);
    ${Oe}•border•radius: var(${l}•8);
    ${Oe}•background: var(--arc-color-bg-secondary);
    ${Oe}•padding: var(${l}•4);
    ${Oe}•gap: var(${l}•2);

    ${P}•color: var(--arc-color-fg-secondary);
    ${P}•background: var(--arc-color-alpha-black-0);
    ${P}•border•color: var(--arc-color-alpha-black-0);
    ${P}•border•width: var(${l}•1);
    ${P}•border•radius: var(${l}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${P}•size: var(${l}•32);
      ${P}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${P}•icon•padding: var(${l}•8);
      ${P}•text•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${P}•size: var(${l}•24);
      ${P}•line•height: var(${l}•22); /* • -2px to account for border-width (top/bottom) */
      ${P}•icon•padding: var(${l}•6);
      ${P}•text•padding: var(${l}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${Oe}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Oe}•display: flex;
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
        ${P}•color: var(--arc-color-fg-on-hover-default);
        ${P}•background: var(--arc-color-bg-hover-default);
        ${P}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${P}•color: var(--arc-color-mono-black);
      ${P}•background: var(--arc-color-mono-white);
      ${P}•border•color: var(--arc-color-border-stark);
      ${P}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${P}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${P}•outline: var(${P}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Oe}•font•size));
    display: var(${Oe}•display);
    gap: var(${Oe}•gap);
    border-radius: var(${Oe}•border•radius);
    background: var(${Oe}•background);
    padding: var(${Oe}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${P}•border•radius);
      outline: var(${P}•outline, none);
      outline-offset: var(${P}•border•width);
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
      line-height: var(${P}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${P}•size);
      min-width: var(${P}•size);

      border-radius: var(${P}•border•radius);
      border: var(${P}•border•width) solid var(${P}•border•color);
      background: var(${P}•background);
      color: var(${P}•color);
      font-weight: var(${P}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${P}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${P}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Mu=I(tr,["hug","fill"]),Ru=I(ze,["lg","md"]),Bu=({children:e,label:r,icon:t,...a})=>{const o=e||(0,n.jsx)(Ye,{icon:t,text:r});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(ds,{...a,label:o,layout:"fill",useMask:!1})})},Pu=({children:e,size:r="lg",layout:t="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-radio-bar":"","data-size":r,"data-layout":t,role:"radiogroup",children:e});N("ArcRadioBar",Lu);const us=I(tr,["fill","hug"]),vs=I(ze,["inherit","xl","lg","md"]),Ou=I(oe,["outline","solid","plain"]),Du=us,Hu=vs,Vu=I(oe,["outline","solid","plain"]),Ct=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),Fu=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),Sn=({children:e,...r})=>(0,n.jsx)(n.Fragment,{children:!!e&&(0,n.jsx)(tt,{...r,children:(0,n.jsx)(at,{children:e})})}),Nu=({children:e,layout:r,size:t,variant:a,tag:o="span",...s})=>(0,n.jsx)(o,{...s,"data-layout":r,"data-size":t,"data-variant":a,children:e}),Uu=()=>(0,n.jsx)("span",{"input-element":"spacer"}),Wu=e=>(0,n.jsx)(Ct,{...e,"input-element":"header"}),Yu=e=>(0,n.jsx)(Sn,{...e,"input-element":"header-label"}),Gu=e=>(0,n.jsx)(Ct,{...e,"input-element":"header-slot"}),Zu=e=>(0,n.jsx)(Ct,{...e,"input-element":"body"}),Xu=e=>(0,n.jsx)(Sn,{...e,"input-element":"input-prefix"}),qu=e=>(0,n.jsx)(Sn,{...e,"input-element":"input-suffix"}),Ku=e=>(0,n.jsx)(Fu,{...e,"input-element":"input-action"}),Ju=e=>(0,n.jsx)(Ct,{...e,"input-element":"footer"}),Qu=e=>(0,n.jsx)(Ct,{...e,"input-element":"footer-caption"}),ev=e=>(0,n.jsx)(Ct,{...e,"input-element":"footer-slot"}),rv=e=>r=>{if(!(r?.target instanceof HTMLInputElement))return;const t={name:r?.target?.name,value:r?.target?.value};e?.(t,r)},G=c`--arc•input`,Mr=c`${G}•fg`,Qa=c`${Mr}•disabled`,eo=c`${Mr}•readonly`,ro=c`${Mr}•invalid`,qe=c`${G}•bg`,to=c`${qe}•hover`,ao=c`${qe}•disabled`,oo=c`${qe}•readonly`,no=c`${qe}•invalid`,tv=c`${G}•align`,hs=c`${tv}•items`,av=c`${G}•flex`,ov=c`${av}•direction`,ps=c`${G}•header`,io=c`${ps}•label•color`,fs=c`${ps}•slot•color`,gs=c`${G}•footer`,kn=c`${gs}•caption•color`,$s=c`${gs}•slot•color`,zn=c`${G}•border`,_n=c`${zn}•radius`,nv=c`${zn}•width`,Ke=c`${zn}•color`,En=c`${G}•outline`,ms=c`${En}•size`,bs=c`${En}•offset`,ys=c`${En}•color`,la=c`${G}•height`,iv=c`${G}•padding`,so=c`${iv}•inline`,Tn=c`${so}•end`,xs=c`${G}•slot`,jn=c`${xs}•gap`,In=c`${xs}•font•size`,co=c`${Ke}•hover`,lo=c`${Ke}•disabled`,Ln=c`${Ke}•readonly`,da=c`${Ke}•invalid`,sv=c`${G}•action•max•height`,ws=c`${G}•gap`,Mn=c`${G}•font•size`,cv=c`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${la}: var(${l}•48);
    ${Tn}: var(${$}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${la}: var(${l}•40);
  }

  &[data-size=md] {
    ${la}: var(${l}•32);
    ${_n}: var(${l}•4);
    ${sv}: 80%;
  }

  &:has(select) {
    ${so}: 0;
    ${hs}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Mn}: var(${l}•14);
    ${In}: var(${l}•12);

    ${la}: var(${l}•40); /* default size */
    ${ws}: var(${$}•6);
    ${jn}: var(${$}•4);
    ${so}: var(${$}•12);
    ${Tn}: var(${$}•3);
    ${_n}: var(${l}•8);
    ${nv}: var(${l}•1);
    ${ms}: var(${l}•2);
    ${bs}: var(${l}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${G}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${Mn}: 0.875em; /* 14px at 100% */
      ${In}: 0.75em; /* 12px at 100% */
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
    ${Mr}: var(--arc-color-fg-primary);
    ${io}: inherit;
    ${fs}: var(--arc-color-fg-secondary);
    ${kn}: var(--arc-color-fg-secondary);
    ${$s}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${qe}: var(--arc-color-bg-primary);
      ${to}: var(--arc-color-bg-primary);
      ${Ke}: var(--arc-color-border-stark);
      ${co}: var(--arc-color-border-heavy);

      ${Qa}: var(--arc-color-fg-disabled);
      ${ao}: var(--arc-color-bg-secondary);
      ${lo}: var(--arc-color-border-mid);

      ${eo}: var(--arc-color-fg-primary);
      ${oo}: var(--arc-color-bg-disabled);
      ${Ln}: var(--arc-color-border-mid);

      ${ro}: var(--arc-color-fg-critical-mid);
      ${no}: var(--arc-color-bg-primary);
      ${da}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${qe}: var(--arc-color-bg-secondary);
      ${to}: var(--arc-color-bg-hover-default);
      ${Ke}: transparent;
      ${co}: var(--arc-color-border-stark);

      ${ro}: var(--arc-color-fg-critical-mid);
      ${no}: var(--arc-color-bg-critical-muted);
      ${da}: transparent;

      ${Qa}: var(--arc-color-fg-disabled);
      ${ao}: var(--arc-color-bg-disabled);
      ${lo}: transparent;

      ${eo}: var(--arc-color-fg-primary);
      ${oo}: var(--arc-color-bg-disabled);
      ${da}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${qe}: transparent;
      ${to}: var(--arc-color-bg-hover-default);
      ${Ke}: transparent;
      ${co}: transparent;

      ${ro}: var(--arc-color-fg-critical-mid);
      ${no}: transparent;
      ${da}: var(--arc-color-fg-critical-mid);

      ${Qa}: var(--arc-color-fg-disabled);
      ${ao}: transparent;
      ${lo}: transparent;

      ${eo}: var(--arc-color-fg-primary);
      ${oo}: var(--arc-color-bg-disabled);
      ${Ln}: transparent;
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
      ${G}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${Ke}: var(--arc-input-border-color-hover, var(${co}));
      ${qe}: var(--arc-input-background-hover, var(${to}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${ys}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${G}•cursor: default;
    ${Mr}: var(${eo});
    ${qe}: var(${oo});
    ${Ke}: var(${Ln});
  }

  &:has(input:disabled, select:disabled) {
    ${G}•cursor: not-allowed;
    ${Mr}: var(${Qa});
    ${qe}: var(${ao});
    ${Ke}: var(${lo});
    ${io}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${qe}: var(${no});
    ${io}: var(${Mr});
    ${Ke}: var(${da});
    ${kn}: var(${ro});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${G}•display: flex;
  }

  &[data-layout=hug] {
    ${G}•display: inline-flex;
  }

  & {
    ${G}•border: var(--arc-border-width-sm) solid var(${Ke});
    ${G}•outline: var(${ms}) solid var(${ys}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${G}•display, flex);
  flex-direction: var(${ov}, column);
  gap: var(${jn});
  color: var(--arc-input-color, var(${Mr}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${In}));
    gap: var(${jn});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${io}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${fs}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${kn}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${$s}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${hs}, center);
    gap: var(${ws});
    height: var(${la});
    font-size: var(${Mn});

    color: var(--arc-input-color, var(${Mr}));
    background-color: var(--arc-input-background, var(${qe}));
    border: var(--arc-input-border, var(${G}•border));
    border-radius: var(--arc-input-border-radius, var(${_n}));
    outline: var(${G}•outline, none);
    outline-offset: var(${bs});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${G}•cursor, unset);

    padding-inline: var(${so});

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Tn});
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
      max-height: var(${G}•action•max•height, unset);
    }
  }
}

}
`,lv={onChangeHandler:rv,Wrapper:Nu,Spacer:Uu,Header:Wu,HeaderLabel:Yu,HeaderSlot:Gu,InputBody:Zu,InputPrefix:Xu,InputSuffix:qu,InputAction:Ku,Footer:Ju,FooterCaption:Qu,FooterSlot:ev};N("ArcInput",cv);const Q=lv,As=c`--arc•select`,De=c`${As}•picker`,Cs=c`${De}•fg`,Ss=c`${De}•bg`,Rn=c`${As}•option`,uo=c`${Rn}•fg`,vo=c`${Rn}•bg`,St=c`${Rn}•icon`,dv=c`
  ${Cs}: currentcolor;
  ${Ss}: var(--arc-color-bg-mono);

  ${De}•width: auto;
  ${De}•min•width: 3em;
  ${De}•border•radius: var(--arc-border-radius-lg);
  ${De}•shadow: var(--arc-shadow-lg);

  ${uo}: currentcolor;
  ${vo}: transparent;

  ${St}•display: none;
  ${St}•color: var(${uo});
`,uv=c`
  &[data-layout=fill] {
    ${De}•width: 100%; /* fallback */
    ${De}•width: anchor-size(inline);
  }
`,vv=c`
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
`,hv=c`
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
`,pv=c`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${dv}
    ${uv}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${De}•display, none);
      flex-direction: column;
      gap: var(${$}•4);
      border: none;
      color: var(${Cs});
      width: var(--arc-select-picker-width, var(${De}•width));
      min-width: var(--arc-select-picker-min-width, var(${De}•min•width));
      margin: var(--arc-select-picker-margin, var(${$}•4) 0);
      padding: var(--arc-select-picker-padding, var(${$}•4));
      background: var(--arc-select-picker-background, var(${Ss}));
      border-radius: var(--arc-select-picker-border-radius, var(${De}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${De}•shadow));
    }

    ::picker(select):popover-open {
      ${De}•display: flex;
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
      gap: var(${$}•8);
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
      gap: var(${$}•8);
      width: 100%;
      min-width: 0;

      color: var(${uo});
      background: var(--arc-select-option-background, var(${vo}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${$}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${vo}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${vo}: var(--arc-color-bg-selected-default);
        ${St}•display: flex;
        ${St}•color: var(--arc-select-option-selected-icon-color, var(${uo}));
      }

      [data-element=selected-icon] {
        display: var(${St}•display, none);
        color: var(${St}•color, currentcolor);
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

  ${vv}
  ${hv}

}
`,fv=(0,y.forwardRef)(({layout:e="hug",size:r="inherit",variant:t="outline",items:a,renderItem:o,headerLabel:s,headerSlot:i,footerCaption:d,footerSlot:u,readOnly:v,id:p,onChange:f,onBlur:h,onFocus:g,onKeyDown:w,onKeyUp:C,onInput:E,onInvalid:D,onClick:k,name:j,value:S,defaultValue:T,required:O,disabled:V,autoComplete:X,autoFocus:ce,form:K,...J},me)=>{const Le=Ue(p,"arc-select"),Ve=t==="plain"&&e==="fill"?"hug":e,Fe=V||void 0,Qe=v||void 0,te=O||void 0,lr=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),Br=t!=="plain"&&!!(s||i),er=t!=="plain"&&!!(d||u),it=a?.filter(F=>F?.variant!=="divider"&&F?.variant!=="section-label")??[],dr=F=>{const le=be=>typeof be=="string"&&be.trim().length>0;return[F?.text,F?.avatar?.name,F?.["aria-label"]].find(le)??"Anonymous"},wr=(F,le)=>{if(o)return o(F,le);const ur=ta(F),be=es(ur),{itemId:rr,...ie}=F;return be(ie)},Ne=Qe&&(S!=null||T!=null)?String(S??T):void 0;return(0,n.jsxs)(Q.Wrapper,{...J,"arc-select":"","arc-input":"select",layout:Ve,size:r,variant:t,children:[Br&&(0,n.jsxs)(Q.Header,{children:[(0,n.jsx)(Q.HeaderLabel,{htmlFor:Le,children:s}),!!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.HeaderSlot,{children:i})]})]}),(0,n.jsx)(Q.InputBody,{children:(0,n.jsxs)("select",{name:j,value:S,defaultValue:T,required:O,disabled:V,autoComplete:X,autoFocus:ce,form:K,ref:me,id:Le,onChange:f,onBlur:h,onFocus:g,onKeyDown:w,onKeyUp:C,onInput:E,onInvalid:D,onClick:k,"aria-disabled":Fe,"aria-required":te,"data-readonly":Qe,children:[(0,n.jsxs)("button",{children:[(0,n.jsx)("selectedcontent",{}),(0,n.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,n.jsx)(B,{icon:"fa-regular fa-angle-down arc-fw"})})]}),it.map((F,le)=>{const ur=F["aria-disabled"]===!0||F.disabled===!0,be=String(F?.value??F?.itemId??le),rr=ta(F),ie=dr(F);return(0,n.jsx)("option",{value:be,disabled:ur||Ne!==void 0&&be!==Ne||void 0,"arc-select-option":"","arc-select-option-role":rr,children:lr?(0,n.jsxs)(n.Fragment,{children:[wr(F,le),(0,n.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,n.jsx)(B,{icon:"fa-regular fa-check arc-fw"})})]}):ie},F.itemId??le)})]})}),er&&(0,n.jsxs)(Q.Footer,{children:[(0,n.jsx)(Q.FooterCaption,{children:d}),!!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.FooterSlot,{children:u})]})]})]})});N("ArcSelect",pv);const gv=I(ze,["inherit","md","sm"]),ge={On:"on",Off:"off"},kt={Before:"before",After:"after"},$v=({disabled:e,id:r,name:t,size:a="md",value:o,labelOff:s,labelOn:i,onChange:d,...u})=>{const v=Ue(t,"arc-switch-name"),p=Ue(r?`${r}-off`:void 0,"arc-switch-off"),f=Ue(r?`${r}-on`:void 0,"arc-switch-on"),h=k=>{if(k.code==="Space"){k.preventDefault(),k.stopPropagation();const j=o===ge.On?ge.Off:ge.On;d?.({value:j},k)}},g=k=>{const j={on:Nt(i),off:Nt(s)};return j?.on&&j?.off?j[k]:!j?.on&&j?.off?`${j?.off}: ${k}`:j?.on&&!j?.off?`${j?.on}: ${k}`:j[k]},w=(0,n.jsxs)(Xa,{type:"switch",onKeyDown:h,children:[(0,n.jsx)(ra,{type:"switch",name:v,id:p,value:ge.Off,checked:o===ge.Off,disabled:e,"aria-label":g(ge.Off)?.trim(),onChange:d}),(0,n.jsx)(ra,{type:"switch",name:v,id:f,value:ge.On,checked:o===ge.On,disabled:e,"aria-label":g(ge.On)?.trim(),onChange:d}),(0,n.jsx)("span",{"data-element":"mask"})]}),C=!i&&o===ge.Off?f:p,E=!s&&o===ge.On?p:f,D=!!(i||s)&&(0,n.jsxs)(n.Fragment,{children:[!!s&&(0,n.jsx)(tt,{htmlFor:C,"arc-switch-label":i?ge.Off:"",children:(0,n.jsx)(at,{children:s})}),w,!!i&&(0,n.jsx)(tt,{htmlFor:E,"arc-switch-label":s?ge.On:"",children:(0,n.jsx)(at,{children:i})})]});return(0,n.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":a,role:"radiogroup",children:D||w})},de=c`--arc•switch`,Z=c`${de}•knob`,mv=c`
@layer arc-components {

  [arc-switch] {
    ${de}•background: var(--arc-color-alpha-white-100);
    ${Z}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${de}•background: var(--arc-color-alpha-white-70);
      ${Z}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${x}•background: var(--arc-color-bg-neutral-subtle);
      ${x}•border•color: var(--arc-color-border-stark);
      ${Z}•border•color: var(--arc-color-border-on-stark);
      ${Z}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•border•color: var(--arc-color-border-heavy);
        ${Z}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
        ${Z}•border•color: var(--arc-color-border-on-stark);
        ${Z}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: var(--arc-color-border-theme-heavy);
      ${Z}•border•color: var(--arc-color-border-theme-heavy);
      ${Z}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${x}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${de}•font•size: 1em;
      ${de}•width: 2.5em;
      ${de}•height: 1.5em;
      ${de}•gap: 0.5em;
      ${Z}•size: 1.5em;
      ${Z}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${de}•font•size: var(${l}•14);
      ${de}•width: var(${l}•40);
      ${de}•height: var(${l}•24);
      ${de}•gap: var(${l}•8);
      ${Z}•x•shift: var(${l}•4);
      ${Z}•size: var(${l}•24);
    }

    &[data-size=sm] {
      ${de}•font•size: var(${l}•12);
      ${de}•width: var(${l}•30);
      ${de}•height: var(${l}•14);
      ${de}•gap: var(${l}•8);
      ${Z}•x•shift: var(${l}•1);
      ${Z}•size: var(${l}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-pill);
    ${x}•width: var(${de}•width);
    ${x}•height: var(${de}•height);
    ${x}•x•shift: var(${Z}•x•shift);
    ${x}•size: var(${Z}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Z}•translate: calc(-100% + var(${Z}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Z}•translate: calc(0% - var(${Z}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${de}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${de}•gap));
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
      translate: var(${Z}•translate);

      display: inline-flex;
      width: var(${Z}•size);
      height: var(${Z}•size);

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

      background: var(${Z}•color);
      box-shadow: var(${Z}•shadow);
      border: var(${x}•border•width) solid var(${Z}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,bv=({disabled:e,id:r,name:t,size:a="md",value:o,label:s,labelPosition:i=kt.After,onChange:d,labelOff:u,labelOn:v,...p})=>{const f=Ue(t,"arc-switch-name"),h=Ue(r,"arc-switch"),g=(E,D)=>{const k=E.checked?ge.On:ge.Off;d?.({...E,value:k},D)};!s&&(v||u)&&(s=v||u,i=v?kt.After:kt.Before);const w=(0,n.jsxs)(Xa,{type:"checkbox",children:[(0,n.jsx)(ra,{type:"checkbox",name:f,id:h,checked:o===ge.On,disabled:e,role:"switch","aria-checked":o===ge.On,"aria-label":s?void 0:"Toggle switch",tabIndex:0,onChange:g}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),C=(0,n.jsx)(tt,{htmlFor:h,"arc-switch-label":i,children:(0,n.jsx)(at,{children:s})});return u&&v?(0,n.jsx)($v,{...p,disabled:e,id:r,name:t,labelOff:u,labelOn:v,size:a,value:o,onChange:d}):(0,n.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":a,"data-label-position":i,role:"presentation","aria-live":"off",children:[s&&i===kt.Before&&C,w,s&&i===kt.After&&C]})};N("ArcSwitch",mv);const yv=["title","heading","subheading","body"],ks=["h1","h2","h3","h4","h5","h6"],zs=["code","div","li","p","pre","span"],_s=[...ks,...zs],xv=[...Or],wv=["title-inherit","title-lg","title-md","title-sm"],Av=["heading-inherit","heading-lg","heading-md","heading-sm"],Cv=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Sv=I(oe,["inherit","primary","primary-inverse"]),kv=["body-inherit","body-lg","body-md","body-sm","body-xs"],zv=_e(oe,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),_v=I(xa,["inherit","start","center","justify","end"]),Ev=I(wa,["inherit","loose","standard","tight"]),Tv={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},jv=e=>{const{align:r,lineHeight:t,size:a,variant:o,scheme:s="auto",isMonospace:i,tag:d,...u}=e,v=Tv?.[d]??"body",p=a?.includes("inherit")?a?.split("-")?.[0]:a,f=o?.endsWith("-inverse");let h;return s!=="auto"?h=s:f&&(h=void 0),{...u,"arc-text":p||v,"arc-scheme":h,"data-is-monospace":i?"":void 0,"data-align":r?.includes("inherit")?void 0:r,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":t?.includes("inherit")?void 0:t}},Rr=c`--arc•text`,Bn=c`${Rr}•font`,zt=c`${Rr}•align`,br=c`${Rr}fg`,Es=c`${Rr}•flex`,Ts=c`${Rr}•hyphens`,ua=c`${Rr}•letterspacing`,yr=c`${Rr}•lineheight`,js=c`${Rr}•opacity`,Is=c`${Rr}•whitespace`,nt=c`${Bn}•family`,se=c`${Bn}•size`,_t=c`${Bn}•weight`,Iv=c`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${zt}: unset;
  ${br}: unset;
  ${Es}: unset;
  ${Ts}: auto;
  ${ua}: unset;
  ${yr}: unset;
  ${js}: unset;
  ${Is}: unset;

  ${nt}: unset;
  ${se}: unset;
  ${_t}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${yr}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${yr}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${yr}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${zt}: start;
  }

  &[data-align=center] {
    ${zt}: center;
  }

  &[data-align=justify] {
    ${zt}: justify;
  }

  &[data-align=end] {
    ${zt}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${br}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${br}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${br}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${br}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${br}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${br}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${br}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${br}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${nt}: var(--arc-font-family-title);
  ${_t}: var(--arc-font-weight-title);
  ${ua}: var(--arc-letter-spacing-title);
  ${yr}: var(--arc-line-height-title);

  ${se}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${se}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${se}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${se}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${nt}: var(--arc-font-family-heading);
  ${_t}: var(--arc-font-weight-heading);
  ${ua}: var(--arc-letter-spacing-heading);
  ${yr}: var(--arc-line-height-heading);

  ${se}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${se}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${se}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${se}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${nt}: var(--arc-font-family-subheading);
  ${_t}: var(--arc-font-weight-subheading);
  ${ua}: unset;
  ${yr}: var(--arc-line-height-subheading);

  ${se}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${se}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${se}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${se}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${nt}: var(--arc-font-family-body);
  ${_t}: var(--arc-font-weight-body);
  ${yr}: var(--arc-line-height-body);
  ${se}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${se}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${se}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${se}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${se}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${se}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${nt}: var(--arc-font-family-mono);
  ${yr}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Es}));
  hyphens: var(--arc-text-hyphens, var(${Ts})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${js}));
  text-align: var(--arc-text-align, var(${zt}));
  white-space: var(--arc-text-white-space, var(${Is}));

  color: var(--arc-text-color, var(${br}));

  font-size: var(--arc-text-font-size, var(${se}));
  font-family: var(--arc-text-font-family, var(${nt}));
  font-weight: var(--arc-text-font-weight, var(${_t}));
  line-height: var(--arc-text-line-height, var(${yr}));
  letter-spacing: var(--arc-text-letter-spacing, var(${ua}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Lv=e=>(0,y.forwardRef)((r,t)=>(0,y.createElement)(e,{...jv({...r,tag:e}),ref:t})),Mv=[..._s].reduce((e,r)=>({...e,[r]:Lv(r)}),{});N("Arc",Iv);const Rv=us,Bv=vs,Pv=I(Ou,["outline","solid"]),Ov=["text","number","password","email","url"],Dv=(0,y.forwardRef)(({layout:e="hug",size:r="inherit",variant:t="outline",inputProps:a,headerLabel:o,headerSlot:s,inputPrefix:i,inputAction:d,inputSuffix:u,footerCaption:v,footerSlot:p,...f},h)=>{const{id:g,onChange:w,...C}=a,E=C?.type||"text",D=C?.disabled||void 0,k=C?.readOnly||void 0,j=C?.required||void 0,S=!!(o||s),T=!!(v||p);return(0,n.jsxs)(Q.Wrapper,{...f,"arc-text-input":"","arc-input":E,layout:e,size:r,variant:t,children:[S&&(0,n.jsxs)(Q.Header,{children:[(0,n.jsx)(Q.HeaderLabel,{htmlFor:g,children:o}),!!s&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.HeaderSlot,{children:s})]}),(0,n.jsxs)(Q.InputBody,{children:[(0,n.jsx)(Q.InputPrefix,{htmlFor:g,children:i}),(0,n.jsx)("input",{...C,ref:h,id:g,"arc-input-type":E,onChange:Q.onChangeHandler(w),"aria-disabled":D,"aria-readonly":k,"aria-required":j}),(0,n.jsx)(Q.InputSuffix,{htmlFor:g,children:u}),(0,n.jsx)(Q.InputAction,{children:d})]}),T&&(0,n.jsxs)(Q.Footer,{children:[(0,n.jsx)(Q.FooterCaption,{children:v}),!!p&&(0,n.jsx)(Q.Spacer,{}),(0,n.jsx)(Q.FooterSlot,{children:p})]})]})}),Hv=I(oe,["common","ai","critical"]),Ls=[...Or],Ms=["default","success","warning","error"],Rs=I(ze,["inherit","md"]),Bs=I(oe,["common"]),Ps=[...Yr],Vv=[...ut],Os=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Fv=Hv.filter(e=>e!=="critical"),Ds={size:Rs[1],variant:Bs[0],scheme:Ls[2],popover:Ps[2],placement:Os[4],severity:Ms[0],showDismiss:!0},Hs=(e,r="toggle")=>{const t=document.getElementById(e);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[r]()},Vs=c`--arc•progress`,Nv=c`${Vs}•bar`,Uv=c`${Vs}•value`,Fs=c`${Nv}•bg`,va=c`${Uv}•bg`,Wv=c`
@layer arc-components {
[arc-progress-bar] {
  ${Fs}: var(--arc-color-alpha-subtle);
  ${va}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${va}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${va}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${l}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${Fs}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${va}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${va}));
  }
}

}
`,Yv=({progress:e=0,variant:r="common",...t})=>(0,n.jsxs)("progress",{...t,"arc-progress-bar":"","data-variant":r,value:e,max:t.max||100,"aria-valuenow":e,"aria-valuemax":t.max||100,children:[e,"% "]});N("ArcProgressBar",Wv);const xr=c`--arc•toast`,ho=c`${xr}•content`,Ns=c`${xr}•color`,Us=c`${xr}•background`,ha=c`${xr}•icon•color`,pa=c`${xr}•transition`,Gv=c`
@layer arc-components {

  [arc-toast] {
    ${ho}•gap: var(${$}•2);
    ${pa}•duration: 300ms;
    ${ha}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${xr}•font•size: var(${l}•16);
      ${ho}•font•size: var(${l}•14);
    }

    &[data-size=inherit] {
      ${xr}•font•size: 1em;
      ${ho}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${ha}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${ha}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${ha}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${Us}: var(--arc-color-bg-mono);
      ${Ns}: var(--arc-color-fg-primary);
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
    margin: var(--arc-toast-offset, var(${$}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${xr}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Ns}));
    background-color: var(--arc-toast-background, var(${Us}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${$}•12) var(${$}•12) var(${$}•12) var(${$}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${xr}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${xr}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${$}•8) var(${$}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${$}•8);
      padding: var(${$}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${ha}));

      height: 1lh;
      padding: 0 var(${$}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${ho}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${$}•2);
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
      display var(${pa}•duration) allow-discrete,
      overlay var(${pa}•duration) allow-discrete,
      content-visibility var(${pa}•duration) allow-discrete,
      opacity var(${pa}•duration);
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
`,Ws=({id:e,children:r,icon:t,heading:a,subtext:o,dismissProps:s,showDismiss:i=!0,onClose:d,actionSlot:u,size:v="md",variant:p="common",scheme:f=Ds.scheme,placement:h="bottom-left",getToastId:g,progressBarProps:w,severity:C,...E})=>{const D=()=>{d?.()},k=f==="auto"?void 0:f,j=!!u||i,S=Ue(e,"arc-toast"),{variant:T,hierarchy:O,...V}=s||{};(0,y.useEffect)(()=>{g?.(S)},[g,S]);const X=fi(t);return(0,n.jsx)("div",{...E,"arc-toast":"","arc-scheme":k,"data-size":v,"data-variant":p,"data-placement":h,"data-severity":C||void 0,id:S,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[t&&(0,n.jsx)(B,{icon:X,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:r||(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:a})}),o&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),j&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[u,i&&(0,n.jsx)(je,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...V,popoverTarget:S,onClick:D})]}),w&&(0,n.jsx)(Yv,{...w,variant:C==="error"?"critical":w.variant,"arc-toast-progress-bar":""})]})})};Ws.handleToast=Hs,N("ArcToast",Gv);var xh=Pr(24309),$e,ae,He,sr,Zv,Ys;function Xv(e=!1){if(typeof e!="boolean")throw new Error("defaultValue must be `true` or `false`");const[r,t]=$e(e),a=ae(()=>{t(!0)},[]),o=ae(()=>{t(!1)},[]),s=ae(()=>{t(i=>!i)},[]);return{value:r,setValue:t,setTrue:a,setFalse:o,toggle:s}}var cr=typeof window<"u"?y.useLayoutEffect:y.useEffect;function Je(e,r,t,a){const o=(0,y.useRef)(r);cr(()=>{o.current=r},[r]),(0,y.useEffect)(()=>{const s=t?.current??window;if(!(s&&s.addEventListener))return;const i=d=>{o.current(d)};return s.addEventListener(e,i,a),()=>{s.removeEventListener(e,i,a)}},[e,t,a])}function wh(e){Je("click",r=>{e(r)})}function Ah(){const[e,r]=$e(null),t=ae(async a=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(a),r(a),!0}catch(o){return console.warn("Copy failed",o),r(null),!1}},[]);return[e,t]}function qv(e){const[r,t]=$e(e??0),a=ae(()=>{t(i=>i+1)},[]),o=ae(()=>{t(i=>i-1)},[]),s=ae(()=>{t(e??0)},[e]);return{count:r,increment:a,decrement:o,reset:s,setCount:t}}function Kv(e,r){const t=He(e);cr(()=>{t.current=e},[e]),sr(()=>{if(r===null)return;const a=setInterval(()=>{t.current()},r);return()=>{clearInterval(a)}},[r])}function Ch({countStart:e,countStop:r=0,intervalMs:t=1e3,isIncrement:a=!1}){const{count:o,increment:s,decrement:i,reset:d}=qv(e),{value:u,setTrue:v,setFalse:p}=Xv(!1),f=ae(()=>{p(),d()},[p,d]),h=ae(()=>{if(o===r){p();return}a?s():i()},[o,r,i,s,a,p]);return Kv(h,u?t:null),[o,{startCountdown:v,stopCountdown:p,resetCountdown:f}]}function po(e){const r=(0,y.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return cr(()=>{r.current=e},[e]),(0,y.useCallback)((...t)=>{var a;return(a=r.current)==null?void 0:a.call(r,...t)},[r])}var Pn=typeof window>"u";function On(e,r,t={}){const{initializeWithValue:a=!0}=t,o=(0,y.useCallback)(h=>t.serializer?t.serializer(h):JSON.stringify(h),[t]),s=(0,y.useCallback)(h=>{if(t.deserializer)return t.deserializer(h);if(h==="undefined")return;const g=r instanceof Function?r():r;let w;try{w=JSON.parse(h)}catch(C){return console.error("Error parsing JSON:",C),g}return w},[t,r]),i=(0,y.useCallback)(()=>{const h=r instanceof Function?r():r;if(Pn)return h;try{const g=window.localStorage.getItem(e);return g?s(g):h}catch(g){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,g),h}},[r,e,s]),[d,u]=(0,y.useState)(()=>a?i():r instanceof Function?r():r),v=po(h=>{Pn&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{const g=h instanceof Function?h(i()):h;window.localStorage.setItem(e,o(g)),u(g),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(g){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,g)}}),p=po(()=>{Pn&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);const h=r instanceof Function?r():r;window.localStorage.removeItem(e),u(h),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,y.useEffect)(()=>{u(i())},[e]);const f=(0,y.useCallback)(h=>{h.key&&h.key!==e||u(i())},[e,i]);return Je("storage",f),Je("local-storage",f),[d,v,p]}var Jv=typeof window>"u";function Gs(e,{defaultValue:r=!1,initializeWithValue:t=!0}={}){const a=d=>Jv?r:window.matchMedia(d).matches,[o,s]=$e(()=>t?a(e):r);function i(){s(a(e))}return cr(()=>{const d=window.matchMedia(e);return i(),d.addListener?d.addListener(i):d.addEventListener("change",i),()=>{d.removeListener?d.removeListener(i):d.removeEventListener("change",i)}},[e]),o}var Qv="(prefers-color-scheme: dark)",eh="usehooks-ts-dark-mode";function Sh(e={}){const{defaultValue:r,localStorageKey:t=eh,initializeWithValue:a=!0}=e,o=Gs(Qv,{initializeWithValue:a,defaultValue:r}),[s,i]=On(t,r??o??!1,{initializeWithValue:a});return cr(()=>{o!==s&&i(o)},[o]),{isDarkMode:s,toggle:()=>{i(d=>!d)},enable:()=>{i(!0)},disable:()=>{i(!1)},set:d=>{i(d)}}}function Zs(e){const r=He(e);r.current=e,sr(()=>()=>{r.current()},[])}function Dn(e,r=500,t){const a=He();Zs(()=>{a.current&&a.current.cancel()});const o=Zv(()=>{const s=Ys(e,r,t),i=(...d)=>s(...d);return i.cancel=()=>{s.cancel()},i.isPending=()=>!!a.current,i.flush=()=>s.flush(),i},[e,r,t]);return sr(()=>{a.current=Ys(e,r,t)},[e,r,t]),o}function kh(e,r,t){const a=t?.equalityFn??((v,p)=>v===p),o=e instanceof Function?e():e,[s,i]=$e(o),d=He(o),u=Dn(i,r,t);return a(d.current,o)||(u(o),d.current=o),[s,u]}function zh(e,r={}){const{preserveTitleOnUnmount:t=!0}=r,a=He(null);cr(()=>{a.current=window.document.title},[]),cr(()=>{window.document.title=e},[e]),Zs(()=>{!t&&a.current&&(window.document.title=a.current)})}function _h(e){const[r,t]=$e(!1),a=()=>{t(!0)},o=()=>{t(!1)};return Je("mouseenter",a,e),Je("mouseleave",o,e),r}function Eh({threshold:e=0,root:r=null,rootMargin:t="0%",freezeOnceVisible:a=!1,initialIsIntersecting:o=!1,onChange:s}={}){var i;const[d,u]=$e(null),[v,p]=$e(()=>({isIntersecting:o,entry:void 0})),f=He();f.current=s;const h=((i=v.entry)==null?void 0:i.isIntersecting)&&a;sr(()=>{if(!d||!("IntersectionObserver"in window)||h)return;let C;const E=new IntersectionObserver(D=>{const k=Array.isArray(E.thresholds)?E.thresholds:[E.thresholds];D.forEach(j=>{const S=j.isIntersecting&&k.some(T=>j.intersectionRatio>=T);p({isIntersecting:S,entry:j}),f.current&&f.current(S,j),S&&a&&C&&(C(),C=void 0)})},{threshold:e,root:r,rootMargin:t});return E.observe(d),()=>{E.disconnect()}},[d,JSON.stringify(e),r,t,h,a]);const g=He(null);sr(()=>{var C;!d&&((C=v.entry)!=null&&C.target)&&!a&&!h&&g.current!==v.entry.target&&(g.current=v.entry.target,p({isIntersecting:o,entry:void 0}))},[d,v.entry,a,h,o]);const w=[u,!!v.isIntersecting,v.entry];return w.ref=w[0],w.isIntersecting=w[1],w.entry=w[2],w}function Th(){const[e,r]=$e(!1);return sr(()=>{r(!0)},[]),e}function rh(){const e=He(!1);return sr(()=>(e.current=!0,()=>{e.current=!1}),[]),ae(()=>e.current,[])}function jh(e=new Map){const[r,t]=$e(new Map(e)),a={set:ae((o,s)=>{t(i=>{const d=new Map(i);return d.set(o,s),d})},[]),setAll:ae(o=>{t(()=>new Map(o))},[]),remove:ae(o=>{t(s=>{const i=new Map(s);return i.delete(o),i})},[]),reset:ae(()=>{t(()=>new Map)},[])};return[r,a]}function Ih(e,r,t="mousedown",a={}){Je(t,o=>{const s=o.target;if(!s||!s.isConnected)return;(Array.isArray(e)?e.filter(d=>!!d.current).every(d=>d.current&&!d.current.contains(s)):e.current&&!e.current.contains(s))&&r(o)},void 0,a)}var Xs=typeof window>"u";function Lh(e,r={}){let{initializeWithValue:t=!0}=r;Xs&&(t=!1);const a=ae(u=>{if(r.deserializer)return r.deserializer(u);if(u==="undefined")return;let v;try{v=JSON.parse(u)}catch(p){return console.error("Error parsing JSON:",p),null}return v},[r]),o=ae(()=>{if(Xs)return null;try{const u=window.localStorage.getItem(e);return u?a(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,u),null}},[e,a]),[s,i]=$e(()=>{if(t)return o()});sr(()=>{i(o())},[e]);const d=ae(u=>{u.key&&u.key!==e||i(o())},[e,o]);return Je("storage",d),Je("local-storage",d),s}var qs={width:void 0,height:void 0};function Mh(e){const{ref:r,box:t="content-box"}=e,[{width:a,height:o},s]=$e(qs),i=rh(),d=He({...qs}),u=He(void 0);return u.current=e.onResize,sr(()=>{if(!r.current||typeof window>"u"||!("ResizeObserver"in window))return;const v=new ResizeObserver(([p])=>{const f=t==="border-box"?"borderBoxSize":t==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",h=Ks(p,f,"inlineSize"),g=Ks(p,f,"blockSize");if(d.current.width!==h||d.current.height!==g){const C={width:h,height:g};d.current.width=h,d.current.height=g,u.current?u.current(C):i()&&s(C)}});return v.observe(r.current,{box:t}),()=>{v.disconnect()}},[t,r,i]),{width:a,height:o}}function Ks(e,r,t){return e[r]?Array.isArray(e[r])?e[r][0][t]:e[r][t]:r==="contentBoxSize"?e.contentRect[t==="inlineSize"?"width":"height"]:void 0}var Js=typeof window>"u";function Rh(e={}){let{initializeWithValue:r=!0}=e;Js&&(r=!1);const t=()=>{if(!Js)return window.screen},[a,o]=$e(()=>{if(r)return t()}),s=Dn(o,e.debounceDelay);function i(){const d=t(),u=e.debounceDelay?s:o;if(d){const{width:v,height:p,availHeight:f,availWidth:h,colorDepth:g,orientation:w,pixelDepth:C}=d;u({width:v,height:p,availHeight:f,availWidth:h,colorDepth:g,orientation:w,pixelDepth:C})}}return Je("resize",i),cr(()=>{i()},[]),a}var fo=new Map;function th(e){const r=document.querySelector(`script[src="${e}"]`),t=r?.getAttribute("data-status");return{node:r,status:t}}function Bh(e,r){const[t,a]=$e(()=>!e||r?.shouldPreventLoad?"idle":typeof window>"u"?"loading":fo.get(e)??"loading");return sr(()=>{if(!e||r?.shouldPreventLoad)return;const o=fo.get(e);if(o==="ready"||o==="error"){a(o);return}const s=th(e);let i=s.node;if(i)a(s.status??o??"loading");else{i=document.createElement("script"),i.src=e,i.async=!0,r?.id&&(i.id=r.id),i.setAttribute("data-status","loading"),document.body.appendChild(i);const u=v=>{const p=v.type==="load"?"ready":"error";i?.setAttribute("data-status",p)};i.addEventListener("load",u),i.addEventListener("error",u)}const d=u=>{const v=u.type==="load"?"ready":"error";a(v),fo.set(e,v)};return i.addEventListener("load",d),i.addEventListener("error",d),()=>{i&&(i.removeEventListener("load",d),i.removeEventListener("error",d)),i&&r?.removeOnUnmount&&(i.remove(),fo.delete(e))}},[e,r?.shouldPreventLoad,r?.removeOnUnmount,r?.id]),t}var ah=typeof window>"u";function Ph(e={}){const{autoLock:r=!0,lockTarget:t,widthReflow:a=!0}=e,[o,s]=$e(!1),i=He(null),d=He(null),u=()=>{if(i.current){const{overflow:p,paddingRight:f}=i.current.style;if(d.current={overflow:p,paddingRight:f},a){const h=i.current===document.body?window.innerWidth:i.current.offsetWidth,g=parseInt(window.getComputedStyle(i.current).paddingRight,10)||0,w=h-i.current.scrollWidth;i.current.style.paddingRight=`${w+g}px`}i.current.style.overflow="hidden",s(!0)}},v=()=>{i.current&&d.current&&(i.current.style.overflow=d.current.overflow,a&&(i.current.style.paddingRight=d.current.paddingRight)),s(!1)};return cr(()=>{if(!ah)return t&&(i.current=typeof t=="string"?document.querySelector(t):t),i.current||(i.current=document.body),r&&u(),()=>{v()}},[r,t,a]),{isLocked:o,lock:u,unlock:v}}var Hn=typeof window>"u";function oh(e,r,t={}){const{initializeWithValue:a=!0}=t,o=(0,y.useCallback)(h=>t.serializer?t.serializer(h):JSON.stringify(h),[t]),s=(0,y.useCallback)(h=>{if(t.deserializer)return t.deserializer(h);if(h==="undefined")return;const g=r instanceof Function?r():r;let w;try{w=JSON.parse(h)}catch(C){return console.error("Error parsing JSON:",C),g}return w},[t,r]),i=(0,y.useCallback)(()=>{const h=r instanceof Function?r():r;if(Hn)return h;try{const g=window.sessionStorage.getItem(e);return g?s(g):h}catch(g){return console.warn(`Error reading sessionStorage key \u201C${e}\u201D:`,g),h}},[r,e,s]),[d,u]=(0,y.useState)(()=>a?i():r instanceof Function?r():r),v=po(h=>{Hn&&console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);try{const g=h instanceof Function?h(i()):h;window.sessionStorage.setItem(e,o(g)),u(g),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))}catch(g){console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`,g)}}),p=po(()=>{Hn&&console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);const h=r instanceof Function?r():r;window.sessionStorage.removeItem(e),u(h),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))});(0,y.useEffect)(()=>{u(i())},[e]);const f=(0,y.useCallback)(h=>{h.key&&h.key!==e||u(i())},[e,i]);return Je("storage",f),Je("session-storage",f),[d,v,p]}function Oh(e){const[r,t]=$e(1),a=r+1<=e,o=r-1>0,s=ae(v=>{const p=v instanceof Function?v(r):v;if(p>=1&&p<=e){t(p);return}throw new Error("Step not valid")},[e,r]),i=ae(()=>{a&&t(v=>v+1)},[a]),d=ae(()=>{o&&t(v=>v-1)},[o]),u=ae(()=>{t(1)},[]);return[r,{goToNextStep:i,goToPrevStep:d,canGoToNextStep:a,canGoToPrevStep:o,setStep:s,reset:u}]}var nh="(prefers-color-scheme: dark)",ih="usehooks-ts-ternary-dark-mode";function Dh({defaultValue:e="system",localStorageKey:r=ih,initializeWithValue:t=!0}={}){const a=Gs(nh,{initializeWithValue:t}),[o,s]=On(r,e,{initializeWithValue:t});return{isDarkMode:o==="dark"||o==="system"&&a,ternaryDarkMode:o,setTernaryDarkMode:s,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];s(v=>{const p=(u.indexOf(v)+1)%u.length;return u[p]})}}}function Hh(e,r){const t=He(e);cr(()=>{t.current=e},[e]),sr(()=>{if(!r&&r!==0)return;const a=setTimeout(()=>{t.current()},r);return()=>{clearTimeout(a)}},[r])}function Vh(e){const[r,t]=$e(!!e),a=ae(()=>{t(o=>!o)},[]);return[r,a,t]}var sh=typeof window>"u";function Fh(e={}){let{initializeWithValue:r=!0}=e;sh&&(r=!1);const[t,a]=$e(()=>r?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=Dn(a,e.debounceDelay);function s(){(e.debounceDelay?o:a)({width:window.innerWidth,height:window.innerHeight})}return Je("resize",s),cr(()=>{s()},[]),t}var fa;(function(e){e.None="none",e.Persistent="localStorage",e.Temporary="sessionStorage"})(fa||(fa={}));const ch=(e,r,t)=>{const[a,o]=(0,y.useState)(r),[s,i]=oh(e,r),[d,u]=On(e,r);return t===fa.Temporary?[s,i]:t===fa.Persistent?[d,u]:[a,o]}}}]);
