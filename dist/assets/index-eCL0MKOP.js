var Ns2=Object.defineProperty;var Us2=(F,v,x)=>v in F?Ns2(F,v,{enumerable:!0,configurable:!0,writable:!0,value:x}):F[v]=x;var M_=(F,v,x)=>(Us2(F,typeof v!="symbol"?v+"":v,x),x);(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))T(O);new MutationObserver(O=>{for(const V of O)if(V.type==="childList")for(const Z of V.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&T(Z)}).observe(document,{childList:!0,subtree:!0});function x(O){const V={};return O.integrity&&(V.integrity=O.integrity),O.referrerPolicy&&(V.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?V.credentials="include":O.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function T(O){if(O.ep)return;O.ep=!0;const V=x(O);fetch(O.href,V)}})();function s4(){}function zG(F){return F()}function hU(){return Object.create(null)}function pl(F){F.forEach(zG)}function QG(F){return typeof F=="function"}function Gs2(F,v){return F!=F?v==v:F!==v||F&&typeof F=="object"||typeof F=="function"}function Ws2(F){return Object.keys(F).length===0}function Hs2(F,v,x){F.insertBefore(v,x||null)}function XG(F){F.parentNode&&F.parentNode.removeChild(F)}function Vs2(F){return document.createElement(F)}function zs2(F,v,x){F.getAttribute(v)!==x&&F.setAttribute(v,x)}function Qs2(F){return Array.from(F.childNodes)}let Ru;function xu(F){Ru=F}function YG(){if(!Ru)throw new Error("Function called outside component initialization");return Ru}function Xs2(F){YG().$$.on_mount.push(F)}function Ys2(F){YG().$$.on_destroy.push(F)}const i4=[],p6=[];let u4=[];const AU=[],qs2=Promise.resolve();let _6=!1;function Zs2(){_6||(_6=!0,qs2.then(qG))}function c6(F){u4.push(F)}const E_=new Set;let js=0;function qG(){if(js!==0)return;const F=Ru;do{try{for(;js<i4.length;){const v=i4[js];js++,xu(v),Js2(v.$$)}}catch(v){throw i4.length=0,js=0,v}for(xu(null),i4.length=0,js=0;p6.length;)p6.pop()();for(let v=0;v<u4.length;v+=1){const x=u4[v];E_.has(x)||(E_.add(x),x())}u4.length=0}while(i4.length);for(;AU.length;)AU.pop()();_6=!1,E_.clear(),xu(F)}function Js2(F){if(F.fragment!==null){F.update(),pl(F.before_update);const v=F.dirty;F.dirty=[-1],F.fragment&&F.fragment.p(F.ctx,v),F.after_update.forEach(c6)}}function Ks2(F){const v=[],x=[];u4.forEach(T=>F.indexOf(T)===-1?v.push(T):x.push(T)),x.forEach(T=>T()),u4=v}const $s2=new Set;function e42(F,v){F&&F.i&&($s2.delete(F),F.i(v))}function t42(F,v,x){const{fragment:T,after_update:O}=F.$$;T&&T.m(v,x),c6(()=>{const V=F.$$.on_mount.map(zG).filter(QG);F.$$.on_destroy?F.$$.on_destroy.push(...V):pl(V),F.$$.on_mount=[]}),O.forEach(c6)}function n42(F,v){const x=F.$$;x.fragment!==null&&(Ks2(x.after_update),pl(x.on_destroy),x.fragment&&x.fragment.d(v),x.on_destroy=x.fragment=null,x.ctx=[])}function i42(F,v){F.$$.dirty[0]===-1&&(i4.push(F),Zs2(),F.$$.dirty.fill(0)),F.$$.dirty[v/31|0]|=1<<v%31}function r42(F,v,x,T,O,V,Z=null,q=[-1]){const e2=Ru;xu(F);const n2=F.$$={fragment:null,ctx:[],props:V,update:s4,not_equal:O,bound:hU(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(v.context||(e2?e2.$$.context:[])),callbacks:hU(),dirty:q,skip_bound:!1,root:v.target||e2.$$.root};Z&&Z(n2.root);let s2=!1;if(n2.ctx=x?x(F,v.props||{},(h,p2,...m2)=>{const B2=m2.length?m2[0]:p2;return n2.ctx&&O(n2.ctx[h],n2.ctx[h]=B2)&&(!n2.skip_bound&&n2.bound[h]&&n2.bound[h](B2),s2&&i42(F,h)),p2}):[],n2.update(),s2=!0,pl(n2.before_update),n2.fragment=T?T(n2.ctx):!1,v.target){if(v.hydrate){const h=Qs2(v.target);n2.fragment&&n2.fragment.l(h),h.forEach(XG)}else n2.fragment&&n2.fragment.c();v.intro&&e42(F.$$.fragment),t42(F,v.target,v.anchor),qG()}xu(e2)}class o42{constructor(){M_(this,"$$");M_(this,"$$set")}$destroy(){n42(this,1),this.$destroy=s4}$on(v,x){if(!QG(x))return s4;const T=this.$$.callbacks[v]||(this.$$.callbacks[v]=[]);return T.push(x),()=>{const O=T.indexOf(x);O!==-1&&T.splice(O,1)}}$set(v){this.$$set&&!Ws2(v)&&(this.$$.skip_bound=!0,this.$$set(v),this.$$.skip_bound=!1)}}const s42="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(s42);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S6="163",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u42=0,dU=1,f42=2,ZG=1,l42=2,Uo=3,C1=0,bi=1,Go=2,k1=0,f4=1,aU=2,yU=3,gU=4,p42=5,ts=100,_42=101,c42=102,m42=103,h42=104,A42=200,d42=201,a42=202,y42=203,m6=204,h6=205,g42=206,v42=207,k42=208,B42=209,S42=210,C42=211,w42=212,x42=213,M42=214,E42=0,R42=1,T42=2,il=3,D42=4,I42=5,P42=6,b42=7,JG=0,F42=1,L42=2,B1=0,j42=1,O42=2,N42=3,U42=4,G42=5,W42=6,H42=7,KG=300,_4=301,c4=302,A6=303,d6=304,_l=306,a6=1e3,is=1001,y6=1002,yr=1003,V42=1004,P8=1005,Lr=1006,R_=1007,rs=1008,S1=1009,z42=1010,Q42=1011,$G=1012,eW=1013,m4=1014,v1=1015,rl=1016,tW=1017,nW=1018,Iu=1020,X42=35902,Y42=1021,q42=1022,oo=1023,Z42=1024,J42=1025,l4=1026,Tu=1027,K42=1028,iW=1029,$42=1030,rW=1031,oW=1033,T_=33776,D_=33777,I_=33778,P_=33779,vU=35840,kU=35841,BU=35842,SU=35843,sW=36196,CU=37492,wU=37496,xU=37808,MU=37809,EU=37810,RU=37811,TU=37812,DU=37813,IU=37814,PU=37815,bU=37816,FU=37817,LU=37818,jU=37819,OU=37820,NU=37821,b_=36492,UU=36494,GU=36495,eu2=36283,WU=36284,HU=36285,VU=36286,tu2=3200,nu2=3201,uW=0,iu2=1,g1="",no="srgb",M1="srgb-linear",C6="display-p3",cl="display-p3-linear",ol="linear",H0="srgb",sl="rec709",ul="p3",Us=7680,zU=519,ru2=512,ou2=513,su2=514,fW=515,uu2=516,fu2=517,lu2=518,pu2=519,QU=35044,XU="300 es",Wo=2e3,fl=2001;class ss{addEventListener(v,x){this._listeners===void 0&&(this._listeners={});const T=this._listeners;T[v]===void 0&&(T[v]=[]),T[v].indexOf(x)===-1&&T[v].push(x)}hasEventListener(v,x){if(this._listeners===void 0)return!1;const T=this._listeners;return T[v]!==void 0&&T[v].indexOf(x)!==-1}removeEventListener(v,x){if(this._listeners===void 0)return;const O=this._listeners[v];if(O!==void 0){const V=O.indexOf(x);V!==-1&&O.splice(V,1)}}dispatchEvent(v){if(this._listeners===void 0)return;const T=this._listeners[v.type];if(T!==void 0){v.target=this;const O=T.slice(0);for(let V=0,Z=O.length;V<Z;V++)O[V].call(this,v);v.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let YU=1234567;const Mu=Math.PI/180,Du=180/Math.PI;function A4(){const F=Math.random()*4294967295|0,v=Math.random()*4294967295|0,x=Math.random()*4294967295|0,T=Math.random()*4294967295|0;return(ni[F&255]+ni[F>>8&255]+ni[F>>16&255]+ni[F>>24&255]+"-"+ni[v&255]+ni[v>>8&255]+"-"+ni[v>>16&15|64]+ni[v>>24&255]+"-"+ni[x&63|128]+ni[x>>8&255]+"-"+ni[x>>16&255]+ni[x>>24&255]+ni[T&255]+ni[T>>8&255]+ni[T>>16&255]+ni[T>>24&255]).toLowerCase()}function ri(F,v,x){return Math.max(v,Math.min(x,F))}function w6(F,v){return(F%v+v)%v}function _u2(F,v,x,T,O){return T+(F-v)*(O-T)/(x-v)}function cu2(F,v,x){return F!==v?(x-F)/(v-F):0}function Eu(F,v,x){return(1-x)*F+x*v}function mu2(F,v,x,T){return Eu(F,v,1-Math.exp(-x*T))}function hu2(F,v=1){return v-Math.abs(w6(F,v*2)-v)}function Au2(F,v,x){return F<=v?0:F>=x?1:(F=(F-v)/(x-v),F*F*(3-2*F))}function du2(F,v,x){return F<=v?0:F>=x?1:(F=(F-v)/(x-v),F*F*F*(F*(F*6-15)+10))}function au2(F,v){return F+Math.floor(Math.random()*(v-F+1))}function yu2(F,v){return F+Math.random()*(v-F)}function gu2(F){return F*(.5-Math.random())}function vu2(F){F!==void 0&&(YU=F);let v=YU+=1831565813;return v=Math.imul(v^v>>>15,v|1),v^=v+Math.imul(v^v>>>7,v|61),((v^v>>>14)>>>0)/4294967296}function ku2(F){return F*Mu}function Bu2(F){return F*Du}function Su2(F){return(F&F-1)===0&&F!==0}function Cu2(F){return Math.pow(2,Math.ceil(Math.log(F)/Math.LN2))}function wu2(F){return Math.pow(2,Math.floor(Math.log(F)/Math.LN2))}function xu2(F,v,x,T,O){const V=Math.cos,Z=Math.sin,q=V(x/2),e2=Z(x/2),n2=V((v+T)/2),s2=Z((v+T)/2),h=V((v-T)/2),p2=Z((v-T)/2),m2=V((T-v)/2),B2=Z((T-v)/2);switch(O){case"XYX":F.set(q*s2,e2*h,e2*p2,q*n2);break;case"YZY":F.set(e2*p2,q*s2,e2*h,q*n2);break;case"ZXZ":F.set(e2*h,e2*p2,q*s2,q*n2);break;case"XZX":F.set(q*s2,e2*B2,e2*m2,q*n2);break;case"YXY":F.set(e2*m2,q*s2,e2*B2,q*n2);break;case"ZYZ":F.set(e2*B2,e2*m2,q*s2,q*n2);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+O)}}function r4(F,v){switch(v.constructor){case Float32Array:return F;case Uint32Array:return F/4294967295;case Uint16Array:return F/65535;case Uint8Array:return F/255;case Int32Array:return Math.max(F/2147483647,-1);case Int16Array:return Math.max(F/32767,-1);case Int8Array:return Math.max(F/127,-1);default:throw new Error("Invalid component type.")}}function Ai(F,v){switch(v.constructor){case Float32Array:return F;case Uint32Array:return Math.round(F*4294967295);case Uint16Array:return Math.round(F*65535);case Uint8Array:return Math.round(F*255);case Int32Array:return Math.round(F*2147483647);case Int16Array:return Math.round(F*32767);case Int8Array:return Math.round(F*127);default:throw new Error("Invalid component type.")}}const Mu2={DEG2RAD:Mu,RAD2DEG:Du,generateUUID:A4,clamp:ri,euclideanModulo:w6,mapLinear:_u2,inverseLerp:cu2,lerp:Eu,damp:mu2,pingpong:hu2,smoothstep:Au2,smootherstep:du2,randInt:au2,randFloat:yu2,randFloatSpread:gu2,seededRandom:vu2,degToRad:ku2,radToDeg:Bu2,isPowerOfTwo:Su2,ceilPowerOfTwo:Cu2,floorPowerOfTwo:wu2,setQuaternionFromProperEuler:xu2,normalize:Ai,denormalize:r4};class It{constructor(v=0,x=0){It.prototype.isVector2=!0,this.x=v,this.y=x}get width(){return this.x}set width(v){this.x=v}get height(){return this.y}set height(v){this.y=v}set(v,x){return this.x=v,this.y=x,this}setScalar(v){return this.x=v,this.y=v,this}setX(v){return this.x=v,this}setY(v){return this.y=v,this}setComponent(v,x){switch(v){case 0:this.x=x;break;case 1:this.y=x;break;default:throw new Error("index is out of range: "+v)}return this}getComponent(v){switch(v){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+v)}}clone(){return new this.constructor(this.x,this.y)}copy(v){return this.x=v.x,this.y=v.y,this}add(v){return this.x+=v.x,this.y+=v.y,this}addScalar(v){return this.x+=v,this.y+=v,this}addVectors(v,x){return this.x=v.x+x.x,this.y=v.y+x.y,this}addScaledVector(v,x){return this.x+=v.x*x,this.y+=v.y*x,this}sub(v){return this.x-=v.x,this.y-=v.y,this}subScalar(v){return this.x-=v,this.y-=v,this}subVectors(v,x){return this.x=v.x-x.x,this.y=v.y-x.y,this}multiply(v){return this.x*=v.x,this.y*=v.y,this}multiplyScalar(v){return this.x*=v,this.y*=v,this}divide(v){return this.x/=v.x,this.y/=v.y,this}divideScalar(v){return this.multiplyScalar(1/v)}applyMatrix3(v){const x=this.x,T=this.y,O=v.elements;return this.x=O[0]*x+O[3]*T+O[6],this.y=O[1]*x+O[4]*T+O[7],this}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this}clamp(v,x){return this.x=Math.max(v.x,Math.min(x.x,this.x)),this.y=Math.max(v.y,Math.min(x.y,this.y)),this}clampScalar(v,x){return this.x=Math.max(v,Math.min(x,this.x)),this.y=Math.max(v,Math.min(x,this.y)),this}clampLength(v,x){const T=this.length();return this.divideScalar(T||1).multiplyScalar(Math.max(v,Math.min(x,T)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(v){return this.x*v.x+this.y*v.y}cross(v){return this.x*v.y-this.y*v.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(v){const x=Math.sqrt(this.lengthSq()*v.lengthSq());if(x===0)return Math.PI/2;const T=this.dot(v)/x;return Math.acos(ri(T,-1,1))}distanceTo(v){return Math.sqrt(this.distanceToSquared(v))}distanceToSquared(v){const x=this.x-v.x,T=this.y-v.y;return x*x+T*T}manhattanDistanceTo(v){return Math.abs(this.x-v.x)+Math.abs(this.y-v.y)}setLength(v){return this.normalize().multiplyScalar(v)}lerp(v,x){return this.x+=(v.x-this.x)*x,this.y+=(v.y-this.y)*x,this}lerpVectors(v,x,T){return this.x=v.x+(x.x-v.x)*T,this.y=v.y+(x.y-v.y)*T,this}equals(v){return v.x===this.x&&v.y===this.y}fromArray(v,x=0){return this.x=v[x],this.y=v[x+1],this}toArray(v=[],x=0){return v[x]=this.x,v[x+1]=this.y,v}fromBufferAttribute(v,x){return this.x=v.getX(x),this.y=v.getY(x),this}rotateAround(v,x){const T=Math.cos(x),O=Math.sin(x),V=this.x-v.x,Z=this.y-v.y;return this.x=V*T-Z*O+v.x,this.y=V*O+Z*T+v.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(v,x,T,O,V,Z,q,e2,n2){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],v!==void 0&&this.set(v,x,T,O,V,Z,q,e2,n2)}set(v,x,T,O,V,Z,q,e2,n2){const s2=this.elements;return s2[0]=v,s2[1]=O,s2[2]=q,s2[3]=x,s2[4]=V,s2[5]=e2,s2[6]=T,s2[7]=Z,s2[8]=n2,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(v){const x=this.elements,T=v.elements;return x[0]=T[0],x[1]=T[1],x[2]=T[2],x[3]=T[3],x[4]=T[4],x[5]=T[5],x[6]=T[6],x[7]=T[7],x[8]=T[8],this}extractBasis(v,x,T){return v.setFromMatrix3Column(this,0),x.setFromMatrix3Column(this,1),T.setFromMatrix3Column(this,2),this}setFromMatrix4(v){const x=v.elements;return this.set(x[0],x[4],x[8],x[1],x[5],x[9],x[2],x[6],x[10]),this}multiply(v){return this.multiplyMatrices(this,v)}premultiply(v){return this.multiplyMatrices(v,this)}multiplyMatrices(v,x){const T=v.elements,O=x.elements,V=this.elements,Z=T[0],q=T[3],e2=T[6],n2=T[1],s2=T[4],h=T[7],p2=T[2],m2=T[5],B2=T[8],C2=O[0],l2=O[3],o2=O[6],P2=O[1],g2=O[4],F2=O[7],X2=O[2],j2=O[5],b2=O[8];return V[0]=Z*C2+q*P2+e2*X2,V[3]=Z*l2+q*g2+e2*j2,V[6]=Z*o2+q*F2+e2*b2,V[1]=n2*C2+s2*P2+h*X2,V[4]=n2*l2+s2*g2+h*j2,V[7]=n2*o2+s2*F2+h*b2,V[2]=p2*C2+m2*P2+B2*X2,V[5]=p2*l2+m2*g2+B2*j2,V[8]=p2*o2+m2*F2+B2*b2,this}multiplyScalar(v){const x=this.elements;return x[0]*=v,x[3]*=v,x[6]*=v,x[1]*=v,x[4]*=v,x[7]*=v,x[2]*=v,x[5]*=v,x[8]*=v,this}determinant(){const v=this.elements,x=v[0],T=v[1],O=v[2],V=v[3],Z=v[4],q=v[5],e2=v[6],n2=v[7],s2=v[8];return x*Z*s2-x*q*n2-T*V*s2+T*q*e2+O*V*n2-O*Z*e2}invert(){const v=this.elements,x=v[0],T=v[1],O=v[2],V=v[3],Z=v[4],q=v[5],e2=v[6],n2=v[7],s2=v[8],h=s2*Z-q*n2,p2=q*e2-s2*V,m2=n2*V-Z*e2,B2=x*h+T*p2+O*m2;if(B2===0)return this.set(0,0,0,0,0,0,0,0,0);const C2=1/B2;return v[0]=h*C2,v[1]=(O*n2-s2*T)*C2,v[2]=(q*T-O*Z)*C2,v[3]=p2*C2,v[4]=(s2*x-O*e2)*C2,v[5]=(O*V-q*x)*C2,v[6]=m2*C2,v[7]=(T*e2-n2*x)*C2,v[8]=(Z*x-T*V)*C2,this}transpose(){let v;const x=this.elements;return v=x[1],x[1]=x[3],x[3]=v,v=x[2],x[2]=x[6],x[6]=v,v=x[5],x[5]=x[7],x[7]=v,this}getNormalMatrix(v){return this.setFromMatrix4(v).invert().transpose()}transposeIntoArray(v){const x=this.elements;return v[0]=x[0],v[1]=x[3],v[2]=x[6],v[3]=x[1],v[4]=x[4],v[5]=x[7],v[6]=x[2],v[7]=x[5],v[8]=x[8],this}setUvTransform(v,x,T,O,V,Z,q){const e2=Math.cos(V),n2=Math.sin(V);return this.set(T*e2,T*n2,-T*(e2*Z+n2*q)+Z+v,-O*n2,O*e2,-O*(-n2*Z+e2*q)+q+x,0,0,1),this}scale(v,x){return this.premultiply(F_.makeScale(v,x)),this}rotate(v){return this.premultiply(F_.makeRotation(-v)),this}translate(v,x){return this.premultiply(F_.makeTranslation(v,x)),this}makeTranslation(v,x){return v.isVector2?this.set(1,0,v.x,0,1,v.y,0,0,1):this.set(1,0,v,0,1,x,0,0,1),this}makeRotation(v){const x=Math.cos(v),T=Math.sin(v);return this.set(x,-T,0,T,x,0,0,0,1),this}makeScale(v,x){return this.set(v,0,0,0,x,0,0,0,1),this}equals(v){const x=this.elements,T=v.elements;for(let O=0;O<9;O++)if(x[O]!==T[O])return!1;return!0}fromArray(v,x=0){for(let T=0;T<9;T++)this.elements[T]=v[T+x];return this}toArray(v=[],x=0){const T=this.elements;return v[x]=T[0],v[x+1]=T[1],v[x+2]=T[2],v[x+3]=T[3],v[x+4]=T[4],v[x+5]=T[5],v[x+6]=T[6],v[x+7]=T[7],v[x+8]=T[8],v}clone(){return new this.constructor().fromArray(this.elements)}}const F_=new Zt;function lW(F){for(let v=F.length-1;v>=0;--v)if(F[v]>=65535)return!0;return!1}function ll(F){return document.createElementNS("http://www.w3.org/1999/xhtml",F)}function Eu2(){const F=ll("canvas");return F.style.display="block",F}const qU={};function Ru2(F){F in qU||(qU[F]=!0,console.warn(F))}const ZU=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),JU=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),b8={[M1]:{transfer:ol,primaries:sl,toReference:F=>F,fromReference:F=>F},[no]:{transfer:H0,primaries:sl,toReference:F=>F.convertSRGBToLinear(),fromReference:F=>F.convertLinearToSRGB()},[cl]:{transfer:ol,primaries:ul,toReference:F=>F.applyMatrix3(JU),fromReference:F=>F.applyMatrix3(ZU)},[C6]:{transfer:H0,primaries:ul,toReference:F=>F.convertSRGBToLinear().applyMatrix3(JU),fromReference:F=>F.applyMatrix3(ZU).convertLinearToSRGB()}},Tu2=new Set([M1,cl]),D0={enabled:!0,_workingColorSpace:M1,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(F){if(!Tu2.has(F))throw new Error(`Unsupported working color space, "${F}".`);this._workingColorSpace=F},convert:function(F,v,x){if(this.enabled===!1||v===x||!v||!x)return F;const T=b8[v].toReference,O=b8[x].fromReference;return O(T(F))},fromWorkingColorSpace:function(F,v){return this.convert(F,this._workingColorSpace,v)},toWorkingColorSpace:function(F,v){return this.convert(F,v,this._workingColorSpace)},getPrimaries:function(F){return b8[F].primaries},getTransfer:function(F){return F===g1?ol:b8[F].transfer}};function p4(F){return F<.04045?F*.0773993808:Math.pow(F*.9478672986+.0521327014,2.4)}function L_(F){return F<.0031308?F*12.92:1.055*Math.pow(F,.41666)-.055}let Gs;class Du2{static getDataURL(v){if(/^data:/i.test(v.src)||typeof HTMLCanvasElement>"u")return v.src;let x;if(v instanceof HTMLCanvasElement)x=v;else{Gs===void 0&&(Gs=ll("canvas")),Gs.width=v.width,Gs.height=v.height;const T=Gs.getContext("2d");v instanceof ImageData?T.putImageData(v,0,0):T.drawImage(v,0,0,v.width,v.height),x=Gs}return x.width>2048||x.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",v),x.toDataURL("image/jpeg",.6)):x.toDataURL("image/png")}static sRGBToLinear(v){if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const x=ll("canvas");x.width=v.width,x.height=v.height;const T=x.getContext("2d");T.drawImage(v,0,0,v.width,v.height);const O=T.getImageData(0,0,v.width,v.height),V=O.data;for(let Z=0;Z<V.length;Z++)V[Z]=p4(V[Z]/255)*255;return T.putImageData(O,0,0),x}else if(v.data){const x=v.data.slice(0);for(let T=0;T<x.length;T++)x instanceof Uint8Array||x instanceof Uint8ClampedArray?x[T]=Math.floor(p4(x[T]/255)*255):x[T]=p4(x[T]);return{data:x,width:v.width,height:v.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),v}}let Iu2=0;class pW{constructor(v=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu2++}),this.uuid=A4(),this.data=v,this.dataReady=!0,this.version=0}set needsUpdate(v){v===!0&&this.version++}toJSON(v){const x=v===void 0||typeof v=="string";if(!x&&v.images[this.uuid]!==void 0)return v.images[this.uuid];const T={uuid:this.uuid,url:""},O=this.data;if(O!==null){let V;if(Array.isArray(O)){V=[];for(let Z=0,q=O.length;Z<q;Z++)O[Z].isDataTexture?V.push(j_(O[Z].image)):V.push(j_(O[Z]))}else V=j_(O);T.url=V}return x||(v.images[this.uuid]=T),T}}function j_(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap?Du2.getDataURL(F):F.data?{data:Array.from(F.data),width:F.width,height:F.height,type:F.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pu2=0;class Fi extends ss{constructor(v=Fi.DEFAULT_IMAGE,x=Fi.DEFAULT_MAPPING,T=is,O=is,V=Lr,Z=rs,q=oo,e2=S1,n2=Fi.DEFAULT_ANISOTROPY,s2=g1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu2++}),this.uuid=A4(),this.name="",this.source=new pW(v),this.mipmaps=[],this.mapping=x,this.channel=0,this.wrapS=T,this.wrapT=O,this.magFilter=V,this.minFilter=Z,this.anisotropy=n2,this.format=q,this.internalFormat=null,this.type=e2,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=s2,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(v=null){this.source.data=v}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(v){return this.name=v.name,this.source=v.source,this.mipmaps=v.mipmaps.slice(0),this.mapping=v.mapping,this.channel=v.channel,this.wrapS=v.wrapS,this.wrapT=v.wrapT,this.magFilter=v.magFilter,this.minFilter=v.minFilter,this.anisotropy=v.anisotropy,this.format=v.format,this.internalFormat=v.internalFormat,this.type=v.type,this.offset.copy(v.offset),this.repeat.copy(v.repeat),this.center.copy(v.center),this.rotation=v.rotation,this.matrixAutoUpdate=v.matrixAutoUpdate,this.matrix.copy(v.matrix),this.generateMipmaps=v.generateMipmaps,this.premultiplyAlpha=v.premultiplyAlpha,this.flipY=v.flipY,this.unpackAlignment=v.unpackAlignment,this.colorSpace=v.colorSpace,this.userData=JSON.parse(JSON.stringify(v.userData)),this.needsUpdate=!0,this}toJSON(v){const x=v===void 0||typeof v=="string";if(!x&&v.textures[this.uuid]!==void 0)return v.textures[this.uuid];const T={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(v).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(T.userData=this.userData),x||(v.textures[this.uuid]=T),T}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(v){if(this.mapping!==KG)return v;if(v.applyMatrix3(this.matrix),v.x<0||v.x>1)switch(this.wrapS){case a6:v.x=v.x-Math.floor(v.x);break;case is:v.x=v.x<0?0:1;break;case y6:Math.abs(Math.floor(v.x)%2)===1?v.x=Math.ceil(v.x)-v.x:v.x=v.x-Math.floor(v.x);break}if(v.y<0||v.y>1)switch(this.wrapT){case a6:v.y=v.y-Math.floor(v.y);break;case is:v.y=v.y<0?0:1;break;case y6:Math.abs(Math.floor(v.y)%2)===1?v.y=Math.ceil(v.y)-v.y:v.y=v.y-Math.floor(v.y);break}return this.flipY&&(v.y=1-v.y),v}set needsUpdate(v){v===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(v){v===!0&&this.pmremVersion++}}Fi.DEFAULT_IMAGE=null;Fi.DEFAULT_MAPPING=KG;Fi.DEFAULT_ANISOTROPY=1;class Ln{constructor(v=0,x=0,T=0,O=1){Ln.prototype.isVector4=!0,this.x=v,this.y=x,this.z=T,this.w=O}get width(){return this.z}set width(v){this.z=v}get height(){return this.w}set height(v){this.w=v}set(v,x,T,O){return this.x=v,this.y=x,this.z=T,this.w=O,this}setScalar(v){return this.x=v,this.y=v,this.z=v,this.w=v,this}setX(v){return this.x=v,this}setY(v){return this.y=v,this}setZ(v){return this.z=v,this}setW(v){return this.w=v,this}setComponent(v,x){switch(v){case 0:this.x=x;break;case 1:this.y=x;break;case 2:this.z=x;break;case 3:this.w=x;break;default:throw new Error("index is out of range: "+v)}return this}getComponent(v){switch(v){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+v)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(v){return this.x=v.x,this.y=v.y,this.z=v.z,this.w=v.w!==void 0?v.w:1,this}add(v){return this.x+=v.x,this.y+=v.y,this.z+=v.z,this.w+=v.w,this}addScalar(v){return this.x+=v,this.y+=v,this.z+=v,this.w+=v,this}addVectors(v,x){return this.x=v.x+x.x,this.y=v.y+x.y,this.z=v.z+x.z,this.w=v.w+x.w,this}addScaledVector(v,x){return this.x+=v.x*x,this.y+=v.y*x,this.z+=v.z*x,this.w+=v.w*x,this}sub(v){return this.x-=v.x,this.y-=v.y,this.z-=v.z,this.w-=v.w,this}subScalar(v){return this.x-=v,this.y-=v,this.z-=v,this.w-=v,this}subVectors(v,x){return this.x=v.x-x.x,this.y=v.y-x.y,this.z=v.z-x.z,this.w=v.w-x.w,this}multiply(v){return this.x*=v.x,this.y*=v.y,this.z*=v.z,this.w*=v.w,this}multiplyScalar(v){return this.x*=v,this.y*=v,this.z*=v,this.w*=v,this}applyMatrix4(v){const x=this.x,T=this.y,O=this.z,V=this.w,Z=v.elements;return this.x=Z[0]*x+Z[4]*T+Z[8]*O+Z[12]*V,this.y=Z[1]*x+Z[5]*T+Z[9]*O+Z[13]*V,this.z=Z[2]*x+Z[6]*T+Z[10]*O+Z[14]*V,this.w=Z[3]*x+Z[7]*T+Z[11]*O+Z[15]*V,this}divideScalar(v){return this.multiplyScalar(1/v)}setAxisAngleFromQuaternion(v){this.w=2*Math.acos(v.w);const x=Math.sqrt(1-v.w*v.w);return x<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=v.x/x,this.y=v.y/x,this.z=v.z/x),this}setAxisAngleFromRotationMatrix(v){let x,T,O,V;const e2=v.elements,n2=e2[0],s2=e2[4],h=e2[8],p2=e2[1],m2=e2[5],B2=e2[9],C2=e2[2],l2=e2[6],o2=e2[10];if(Math.abs(s2-p2)<.01&&Math.abs(h-C2)<.01&&Math.abs(B2-l2)<.01){if(Math.abs(s2+p2)<.1&&Math.abs(h+C2)<.1&&Math.abs(B2+l2)<.1&&Math.abs(n2+m2+o2-3)<.1)return this.set(1,0,0,0),this;x=Math.PI;const g2=(n2+1)/2,F2=(m2+1)/2,X2=(o2+1)/2,j2=(s2+p2)/4,b2=(h+C2)/4,te=(B2+l2)/4;return g2>F2&&g2>X2?g2<.01?(T=0,O=.707106781,V=.707106781):(T=Math.sqrt(g2),O=j2/T,V=b2/T):F2>X2?F2<.01?(T=.707106781,O=0,V=.707106781):(O=Math.sqrt(F2),T=j2/O,V=te/O):X2<.01?(T=.707106781,O=.707106781,V=0):(V=Math.sqrt(X2),T=b2/V,O=te/V),this.set(T,O,V,x),this}let P2=Math.sqrt((l2-B2)*(l2-B2)+(h-C2)*(h-C2)+(p2-s2)*(p2-s2));return Math.abs(P2)<.001&&(P2=1),this.x=(l2-B2)/P2,this.y=(h-C2)/P2,this.z=(p2-s2)/P2,this.w=Math.acos((n2+m2+o2-1)/2),this}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this.z=Math.min(this.z,v.z),this.w=Math.min(this.w,v.w),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this.z=Math.max(this.z,v.z),this.w=Math.max(this.w,v.w),this}clamp(v,x){return this.x=Math.max(v.x,Math.min(x.x,this.x)),this.y=Math.max(v.y,Math.min(x.y,this.y)),this.z=Math.max(v.z,Math.min(x.z,this.z)),this.w=Math.max(v.w,Math.min(x.w,this.w)),this}clampScalar(v,x){return this.x=Math.max(v,Math.min(x,this.x)),this.y=Math.max(v,Math.min(x,this.y)),this.z=Math.max(v,Math.min(x,this.z)),this.w=Math.max(v,Math.min(x,this.w)),this}clampLength(v,x){const T=this.length();return this.divideScalar(T||1).multiplyScalar(Math.max(v,Math.min(x,T)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(v){return this.x*v.x+this.y*v.y+this.z*v.z+this.w*v.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(v){return this.normalize().multiplyScalar(v)}lerp(v,x){return this.x+=(v.x-this.x)*x,this.y+=(v.y-this.y)*x,this.z+=(v.z-this.z)*x,this.w+=(v.w-this.w)*x,this}lerpVectors(v,x,T){return this.x=v.x+(x.x-v.x)*T,this.y=v.y+(x.y-v.y)*T,this.z=v.z+(x.z-v.z)*T,this.w=v.w+(x.w-v.w)*T,this}equals(v){return v.x===this.x&&v.y===this.y&&v.z===this.z&&v.w===this.w}fromArray(v,x=0){return this.x=v[x],this.y=v[x+1],this.z=v[x+2],this.w=v[x+3],this}toArray(v=[],x=0){return v[x]=this.x,v[x+1]=this.y,v[x+2]=this.z,v[x+3]=this.w,v}fromBufferAttribute(v,x){return this.x=v.getX(x),this.y=v.getY(x),this.z=v.getZ(x),this.w=v.getW(x),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bu2 extends ss{constructor(v=1,x=1,T={}){super(),this.isRenderTarget=!0,this.width=v,this.height=x,this.depth=1,this.scissor=new Ln(0,0,v,x),this.scissorTest=!1,this.viewport=new Ln(0,0,v,x);const O={width:v,height:x,depth:1};T=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},T);const V=new Fi(O,T.mapping,T.wrapS,T.wrapT,T.magFilter,T.minFilter,T.format,T.type,T.anisotropy,T.colorSpace);V.flipY=!1,V.generateMipmaps=T.generateMipmaps,V.internalFormat=T.internalFormat,this.textures=[];const Z=T.count;for(let q=0;q<Z;q++)this.textures[q]=V.clone(),this.textures[q].isRenderTargetTexture=!0;this.depthBuffer=T.depthBuffer,this.stencilBuffer=T.stencilBuffer,this.depthTexture=T.depthTexture,this.samples=T.samples}get texture(){return this.textures[0]}set texture(v){this.textures[0]=v}setSize(v,x,T=1){if(this.width!==v||this.height!==x||this.depth!==T){this.width=v,this.height=x,this.depth=T;for(let O=0,V=this.textures.length;O<V;O++)this.textures[O].image.width=v,this.textures[O].image.height=x,this.textures[O].image.depth=T;this.dispose()}this.viewport.set(0,0,v,x),this.scissor.set(0,0,v,x)}clone(){return new this.constructor().copy(this)}copy(v){this.width=v.width,this.height=v.height,this.depth=v.depth,this.scissor.copy(v.scissor),this.scissorTest=v.scissorTest,this.viewport.copy(v.viewport),this.textures.length=0;for(let T=0,O=v.textures.length;T<O;T++)this.textures[T]=v.textures[T].clone(),this.textures[T].isRenderTargetTexture=!0;const x=Object.assign({},v.texture.image);return this.texture.source=new pW(x),this.depthBuffer=v.depthBuffer,this.stencilBuffer=v.stencilBuffer,v.depthTexture!==null&&(this.depthTexture=v.depthTexture.clone()),this.samples=v.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends bu2{constructor(v=1,x=1,T={}){super(v,x,T),this.isWebGLRenderTarget=!0}}class _W extends Fi{constructor(v=null,x=1,T=1,O=1){super(null),this.isDataArrayTexture=!0,this.image={data:v,width:x,height:T,depth:O},this.magFilter=yr,this.minFilter=yr,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu2 extends Fi{constructor(v=null,x=1,T=1,O=1){super(null),this.isData3DTexture=!0,this.image={data:v,width:x,height:T,depth:O},this.magFilter=yr,this.minFilter=yr,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w1{constructor(v=0,x=0,T=0,O=1){this.isQuaternion=!0,this._x=v,this._y=x,this._z=T,this._w=O}static slerpFlat(v,x,T,O,V,Z,q){let e2=T[O+0],n2=T[O+1],s2=T[O+2],h=T[O+3];const p2=V[Z+0],m2=V[Z+1],B2=V[Z+2],C2=V[Z+3];if(q===0){v[x+0]=e2,v[x+1]=n2,v[x+2]=s2,v[x+3]=h;return}if(q===1){v[x+0]=p2,v[x+1]=m2,v[x+2]=B2,v[x+3]=C2;return}if(h!==C2||e2!==p2||n2!==m2||s2!==B2){let l2=1-q;const o2=e2*p2+n2*m2+s2*B2+h*C2,P2=o2>=0?1:-1,g2=1-o2*o2;if(g2>Number.EPSILON){const X2=Math.sqrt(g2),j2=Math.atan2(X2,o2*P2);l2=Math.sin(l2*j2)/X2,q=Math.sin(q*j2)/X2}const F2=q*P2;if(e2=e2*l2+p2*F2,n2=n2*l2+m2*F2,s2=s2*l2+B2*F2,h=h*l2+C2*F2,l2===1-q){const X2=1/Math.sqrt(e2*e2+n2*n2+s2*s2+h*h);e2*=X2,n2*=X2,s2*=X2,h*=X2}}v[x]=e2,v[x+1]=n2,v[x+2]=s2,v[x+3]=h}static multiplyQuaternionsFlat(v,x,T,O,V,Z){const q=T[O],e2=T[O+1],n2=T[O+2],s2=T[O+3],h=V[Z],p2=V[Z+1],m2=V[Z+2],B2=V[Z+3];return v[x]=q*B2+s2*h+e2*m2-n2*p2,v[x+1]=e2*B2+s2*p2+n2*h-q*m2,v[x+2]=n2*B2+s2*m2+q*p2-e2*h,v[x+3]=s2*B2-q*h-e2*p2-n2*m2,v}get x(){return this._x}set x(v){this._x=v,this._onChangeCallback()}get y(){return this._y}set y(v){this._y=v,this._onChangeCallback()}get z(){return this._z}set z(v){this._z=v,this._onChangeCallback()}get w(){return this._w}set w(v){this._w=v,this._onChangeCallback()}set(v,x,T,O){return this._x=v,this._y=x,this._z=T,this._w=O,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(v){return this._x=v.x,this._y=v.y,this._z=v.z,this._w=v.w,this._onChangeCallback(),this}setFromEuler(v,x=!0){const T=v._x,O=v._y,V=v._z,Z=v._order,q=Math.cos,e2=Math.sin,n2=q(T/2),s2=q(O/2),h=q(V/2),p2=e2(T/2),m2=e2(O/2),B2=e2(V/2);switch(Z){case"XYZ":this._x=p2*s2*h+n2*m2*B2,this._y=n2*m2*h-p2*s2*B2,this._z=n2*s2*B2+p2*m2*h,this._w=n2*s2*h-p2*m2*B2;break;case"YXZ":this._x=p2*s2*h+n2*m2*B2,this._y=n2*m2*h-p2*s2*B2,this._z=n2*s2*B2-p2*m2*h,this._w=n2*s2*h+p2*m2*B2;break;case"ZXY":this._x=p2*s2*h-n2*m2*B2,this._y=n2*m2*h+p2*s2*B2,this._z=n2*s2*B2+p2*m2*h,this._w=n2*s2*h-p2*m2*B2;break;case"ZYX":this._x=p2*s2*h-n2*m2*B2,this._y=n2*m2*h+p2*s2*B2,this._z=n2*s2*B2-p2*m2*h,this._w=n2*s2*h+p2*m2*B2;break;case"YZX":this._x=p2*s2*h+n2*m2*B2,this._y=n2*m2*h+p2*s2*B2,this._z=n2*s2*B2-p2*m2*h,this._w=n2*s2*h-p2*m2*B2;break;case"XZY":this._x=p2*s2*h-n2*m2*B2,this._y=n2*m2*h-p2*s2*B2,this._z=n2*s2*B2+p2*m2*h,this._w=n2*s2*h+p2*m2*B2;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Z)}return x===!0&&this._onChangeCallback(),this}setFromAxisAngle(v,x){const T=x/2,O=Math.sin(T);return this._x=v.x*O,this._y=v.y*O,this._z=v.z*O,this._w=Math.cos(T),this._onChangeCallback(),this}setFromRotationMatrix(v){const x=v.elements,T=x[0],O=x[4],V=x[8],Z=x[1],q=x[5],e2=x[9],n2=x[2],s2=x[6],h=x[10],p2=T+q+h;if(p2>0){const m2=.5/Math.sqrt(p2+1);this._w=.25/m2,this._x=(s2-e2)*m2,this._y=(V-n2)*m2,this._z=(Z-O)*m2}else if(T>q&&T>h){const m2=2*Math.sqrt(1+T-q-h);this._w=(s2-e2)/m2,this._x=.25*m2,this._y=(O+Z)/m2,this._z=(V+n2)/m2}else if(q>h){const m2=2*Math.sqrt(1+q-T-h);this._w=(V-n2)/m2,this._x=(O+Z)/m2,this._y=.25*m2,this._z=(e2+s2)/m2}else{const m2=2*Math.sqrt(1+h-T-q);this._w=(Z-O)/m2,this._x=(V+n2)/m2,this._y=(e2+s2)/m2,this._z=.25*m2}return this._onChangeCallback(),this}setFromUnitVectors(v,x){let T=v.dot(x)+1;return T<Number.EPSILON?(T=0,Math.abs(v.x)>Math.abs(v.z)?(this._x=-v.y,this._y=v.x,this._z=0,this._w=T):(this._x=0,this._y=-v.z,this._z=v.y,this._w=T)):(this._x=v.y*x.z-v.z*x.y,this._y=v.z*x.x-v.x*x.z,this._z=v.x*x.y-v.y*x.x,this._w=T),this.normalize()}angleTo(v){return 2*Math.acos(Math.abs(ri(this.dot(v),-1,1)))}rotateTowards(v,x){const T=this.angleTo(v);if(T===0)return this;const O=Math.min(1,x/T);return this.slerp(v,O),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(v){return this._x*v._x+this._y*v._y+this._z*v._z+this._w*v._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let v=this.length();return v===0?(this._x=0,this._y=0,this._z=0,this._w=1):(v=1/v,this._x=this._x*v,this._y=this._y*v,this._z=this._z*v,this._w=this._w*v),this._onChangeCallback(),this}multiply(v){return this.multiplyQuaternions(this,v)}premultiply(v){return this.multiplyQuaternions(v,this)}multiplyQuaternions(v,x){const T=v._x,O=v._y,V=v._z,Z=v._w,q=x._x,e2=x._y,n2=x._z,s2=x._w;return this._x=T*s2+Z*q+O*n2-V*e2,this._y=O*s2+Z*e2+V*q-T*n2,this._z=V*s2+Z*n2+T*e2-O*q,this._w=Z*s2-T*q-O*e2-V*n2,this._onChangeCallback(),this}slerp(v,x){if(x===0)return this;if(x===1)return this.copy(v);const T=this._x,O=this._y,V=this._z,Z=this._w;let q=Z*v._w+T*v._x+O*v._y+V*v._z;if(q<0?(this._w=-v._w,this._x=-v._x,this._y=-v._y,this._z=-v._z,q=-q):this.copy(v),q>=1)return this._w=Z,this._x=T,this._y=O,this._z=V,this;const e2=1-q*q;if(e2<=Number.EPSILON){const m2=1-x;return this._w=m2*Z+x*this._w,this._x=m2*T+x*this._x,this._y=m2*O+x*this._y,this._z=m2*V+x*this._z,this.normalize(),this}const n2=Math.sqrt(e2),s2=Math.atan2(n2,q),h=Math.sin((1-x)*s2)/n2,p2=Math.sin(x*s2)/n2;return this._w=Z*h+this._w*p2,this._x=T*h+this._x*p2,this._y=O*h+this._y*p2,this._z=V*h+this._z*p2,this._onChangeCallback(),this}slerpQuaternions(v,x,T){return this.copy(v).slerp(x,T)}random(){const v=2*Math.PI*Math.random(),x=2*Math.PI*Math.random(),T=Math.random(),O=Math.sqrt(1-T),V=Math.sqrt(T);return this.set(O*Math.sin(v),O*Math.cos(v),V*Math.sin(x),V*Math.cos(x))}equals(v){return v._x===this._x&&v._y===this._y&&v._z===this._z&&v._w===this._w}fromArray(v,x=0){return this._x=v[x],this._y=v[x+1],this._z=v[x+2],this._w=v[x+3],this._onChangeCallback(),this}toArray(v=[],x=0){return v[x]=this._x,v[x+1]=this._y,v[x+2]=this._z,v[x+3]=this._w,v}fromBufferAttribute(v,x){return this._x=v.getX(x),this._y=v.getY(x),this._z=v.getZ(x),this._w=v.getW(x),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(v){return this._onChangeCallback=v,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V2{constructor(v=0,x=0,T=0){V2.prototype.isVector3=!0,this.x=v,this.y=x,this.z=T}set(v,x,T){return T===void 0&&(T=this.z),this.x=v,this.y=x,this.z=T,this}setScalar(v){return this.x=v,this.y=v,this.z=v,this}setX(v){return this.x=v,this}setY(v){return this.y=v,this}setZ(v){return this.z=v,this}setComponent(v,x){switch(v){case 0:this.x=x;break;case 1:this.y=x;break;case 2:this.z=x;break;default:throw new Error("index is out of range: "+v)}return this}getComponent(v){switch(v){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+v)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(v){return this.x=v.x,this.y=v.y,this.z=v.z,this}add(v){return this.x+=v.x,this.y+=v.y,this.z+=v.z,this}addScalar(v){return this.x+=v,this.y+=v,this.z+=v,this}addVectors(v,x){return this.x=v.x+x.x,this.y=v.y+x.y,this.z=v.z+x.z,this}addScaledVector(v,x){return this.x+=v.x*x,this.y+=v.y*x,this.z+=v.z*x,this}sub(v){return this.x-=v.x,this.y-=v.y,this.z-=v.z,this}subScalar(v){return this.x-=v,this.y-=v,this.z-=v,this}subVectors(v,x){return this.x=v.x-x.x,this.y=v.y-x.y,this.z=v.z-x.z,this}multiply(v){return this.x*=v.x,this.y*=v.y,this.z*=v.z,this}multiplyScalar(v){return this.x*=v,this.y*=v,this.z*=v,this}multiplyVectors(v,x){return this.x=v.x*x.x,this.y=v.y*x.y,this.z=v.z*x.z,this}applyEuler(v){return this.applyQuaternion(KU.setFromEuler(v))}applyAxisAngle(v,x){return this.applyQuaternion(KU.setFromAxisAngle(v,x))}applyMatrix3(v){const x=this.x,T=this.y,O=this.z,V=v.elements;return this.x=V[0]*x+V[3]*T+V[6]*O,this.y=V[1]*x+V[4]*T+V[7]*O,this.z=V[2]*x+V[5]*T+V[8]*O,this}applyNormalMatrix(v){return this.applyMatrix3(v).normalize()}applyMatrix4(v){const x=this.x,T=this.y,O=this.z,V=v.elements,Z=1/(V[3]*x+V[7]*T+V[11]*O+V[15]);return this.x=(V[0]*x+V[4]*T+V[8]*O+V[12])*Z,this.y=(V[1]*x+V[5]*T+V[9]*O+V[13])*Z,this.z=(V[2]*x+V[6]*T+V[10]*O+V[14])*Z,this}applyQuaternion(v){const x=this.x,T=this.y,O=this.z,V=v.x,Z=v.y,q=v.z,e2=v.w,n2=2*(Z*O-q*T),s2=2*(q*x-V*O),h=2*(V*T-Z*x);return this.x=x+e2*n2+Z*h-q*s2,this.y=T+e2*s2+q*n2-V*h,this.z=O+e2*h+V*s2-Z*n2,this}project(v){return this.applyMatrix4(v.matrixWorldInverse).applyMatrix4(v.projectionMatrix)}unproject(v){return this.applyMatrix4(v.projectionMatrixInverse).applyMatrix4(v.matrixWorld)}transformDirection(v){const x=this.x,T=this.y,O=this.z,V=v.elements;return this.x=V[0]*x+V[4]*T+V[8]*O,this.y=V[1]*x+V[5]*T+V[9]*O,this.z=V[2]*x+V[6]*T+V[10]*O,this.normalize()}divide(v){return this.x/=v.x,this.y/=v.y,this.z/=v.z,this}divideScalar(v){return this.multiplyScalar(1/v)}min(v){return this.x=Math.min(this.x,v.x),this.y=Math.min(this.y,v.y),this.z=Math.min(this.z,v.z),this}max(v){return this.x=Math.max(this.x,v.x),this.y=Math.max(this.y,v.y),this.z=Math.max(this.z,v.z),this}clamp(v,x){return this.x=Math.max(v.x,Math.min(x.x,this.x)),this.y=Math.max(v.y,Math.min(x.y,this.y)),this.z=Math.max(v.z,Math.min(x.z,this.z)),this}clampScalar(v,x){return this.x=Math.max(v,Math.min(x,this.x)),this.y=Math.max(v,Math.min(x,this.y)),this.z=Math.max(v,Math.min(x,this.z)),this}clampLength(v,x){const T=this.length();return this.divideScalar(T||1).multiplyScalar(Math.max(v,Math.min(x,T)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(v){return this.x*v.x+this.y*v.y+this.z*v.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(v){return this.normalize().multiplyScalar(v)}lerp(v,x){return this.x+=(v.x-this.x)*x,this.y+=(v.y-this.y)*x,this.z+=(v.z-this.z)*x,this}lerpVectors(v,x,T){return this.x=v.x+(x.x-v.x)*T,this.y=v.y+(x.y-v.y)*T,this.z=v.z+(x.z-v.z)*T,this}cross(v){return this.crossVectors(this,v)}crossVectors(v,x){const T=v.x,O=v.y,V=v.z,Z=x.x,q=x.y,e2=x.z;return this.x=O*e2-V*q,this.y=V*Z-T*e2,this.z=T*q-O*Z,this}projectOnVector(v){const x=v.lengthSq();if(x===0)return this.set(0,0,0);const T=v.dot(this)/x;return this.copy(v).multiplyScalar(T)}projectOnPlane(v){return O_.copy(this).projectOnVector(v),this.sub(O_)}reflect(v){return this.sub(O_.copy(v).multiplyScalar(2*this.dot(v)))}angleTo(v){const x=Math.sqrt(this.lengthSq()*v.lengthSq());if(x===0)return Math.PI/2;const T=this.dot(v)/x;return Math.acos(ri(T,-1,1))}distanceTo(v){return Math.sqrt(this.distanceToSquared(v))}distanceToSquared(v){const x=this.x-v.x,T=this.y-v.y,O=this.z-v.z;return x*x+T*T+O*O}manhattanDistanceTo(v){return Math.abs(this.x-v.x)+Math.abs(this.y-v.y)+Math.abs(this.z-v.z)}setFromSpherical(v){return this.setFromSphericalCoords(v.radius,v.phi,v.theta)}setFromSphericalCoords(v,x,T){const O=Math.sin(x)*v;return this.x=O*Math.sin(T),this.y=Math.cos(x)*v,this.z=O*Math.cos(T),this}setFromCylindrical(v){return this.setFromCylindricalCoords(v.radius,v.theta,v.y)}setFromCylindricalCoords(v,x,T){return this.x=v*Math.sin(x),this.y=T,this.z=v*Math.cos(x),this}setFromMatrixPosition(v){const x=v.elements;return this.x=x[12],this.y=x[13],this.z=x[14],this}setFromMatrixScale(v){const x=this.setFromMatrixColumn(v,0).length(),T=this.setFromMatrixColumn(v,1).length(),O=this.setFromMatrixColumn(v,2).length();return this.x=x,this.y=T,this.z=O,this}setFromMatrixColumn(v,x){return this.fromArray(v.elements,x*4)}setFromMatrix3Column(v,x){return this.fromArray(v.elements,x*3)}setFromEuler(v){return this.x=v._x,this.y=v._y,this.z=v._z,this}setFromColor(v){return this.x=v.r,this.y=v.g,this.z=v.b,this}equals(v){return v.x===this.x&&v.y===this.y&&v.z===this.z}fromArray(v,x=0){return this.x=v[x],this.y=v[x+1],this.z=v[x+2],this}toArray(v=[],x=0){return v[x]=this.x,v[x+1]=this.y,v[x+2]=this.z,v}fromBufferAttribute(v,x){return this.x=v.getX(x),this.y=v.getY(x),this.z=v.getZ(x),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const v=Math.random()*Math.PI*2,x=Math.random()*2-1,T=Math.sqrt(1-x*x);return this.x=T*Math.cos(v),this.y=x,this.z=T*Math.sin(v),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const O_=new V2,KU=new w1;class Pu{constructor(v=new V2(1/0,1/0,1/0),x=new V2(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=v,this.max=x}set(v,x){return this.min.copy(v),this.max.copy(x),this}setFromArray(v){this.makeEmpty();for(let x=0,T=v.length;x<T;x+=3)this.expandByPoint(Pr.fromArray(v,x));return this}setFromBufferAttribute(v){this.makeEmpty();for(let x=0,T=v.count;x<T;x++)this.expandByPoint(Pr.fromBufferAttribute(v,x));return this}setFromPoints(v){this.makeEmpty();for(let x=0,T=v.length;x<T;x++)this.expandByPoint(v[x]);return this}setFromCenterAndSize(v,x){const T=Pr.copy(x).multiplyScalar(.5);return this.min.copy(v).sub(T),this.max.copy(v).add(T),this}setFromObject(v,x=!1){return this.makeEmpty(),this.expandByObject(v,x)}clone(){return new this.constructor().copy(this)}copy(v){return this.min.copy(v.min),this.max.copy(v.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(v){return this.isEmpty()?v.set(0,0,0):v.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(v){return this.isEmpty()?v.set(0,0,0):v.subVectors(this.max,this.min)}expandByPoint(v){return this.min.min(v),this.max.max(v),this}expandByVector(v){return this.min.sub(v),this.max.add(v),this}expandByScalar(v){return this.min.addScalar(-v),this.max.addScalar(v),this}expandByObject(v,x=!1){v.updateWorldMatrix(!1,!1);const T=v.geometry;if(T!==void 0){const V=T.getAttribute("position");if(x===!0&&V!==void 0&&v.isInstancedMesh!==!0)for(let Z=0,q=V.count;Z<q;Z++)v.isMesh===!0?v.getVertexPosition(Z,Pr):Pr.fromBufferAttribute(V,Z),Pr.applyMatrix4(v.matrixWorld),this.expandByPoint(Pr);else v.boundingBox!==void 0?(v.boundingBox===null&&v.computeBoundingBox(),F8.copy(v.boundingBox)):(T.boundingBox===null&&T.computeBoundingBox(),F8.copy(T.boundingBox)),F8.applyMatrix4(v.matrixWorld),this.union(F8)}const O=v.children;for(let V=0,Z=O.length;V<Z;V++)this.expandByObject(O[V],x);return this}containsPoint(v){return!(v.x<this.min.x||v.x>this.max.x||v.y<this.min.y||v.y>this.max.y||v.z<this.min.z||v.z>this.max.z)}containsBox(v){return this.min.x<=v.min.x&&v.max.x<=this.max.x&&this.min.y<=v.min.y&&v.max.y<=this.max.y&&this.min.z<=v.min.z&&v.max.z<=this.max.z}getParameter(v,x){return x.set((v.x-this.min.x)/(this.max.x-this.min.x),(v.y-this.min.y)/(this.max.y-this.min.y),(v.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(v){return!(v.max.x<this.min.x||v.min.x>this.max.x||v.max.y<this.min.y||v.min.y>this.max.y||v.max.z<this.min.z||v.min.z>this.max.z)}intersectsSphere(v){return this.clampPoint(v.center,Pr),Pr.distanceToSquared(v.center)<=v.radius*v.radius}intersectsPlane(v){let x,T;return v.normal.x>0?(x=v.normal.x*this.min.x,T=v.normal.x*this.max.x):(x=v.normal.x*this.max.x,T=v.normal.x*this.min.x),v.normal.y>0?(x+=v.normal.y*this.min.y,T+=v.normal.y*this.max.y):(x+=v.normal.y*this.max.y,T+=v.normal.y*this.min.y),v.normal.z>0?(x+=v.normal.z*this.min.z,T+=v.normal.z*this.max.z):(x+=v.normal.z*this.max.z,T+=v.normal.z*this.min.z),x<=-v.constant&&T>=-v.constant}intersectsTriangle(v){if(this.isEmpty())return!1;this.getCenter(vu),L8.subVectors(this.max,vu),Ws.subVectors(v.a,vu),Hs.subVectors(v.b,vu),Vs.subVectors(v.c,vu),_1.subVectors(Hs,Ws),c1.subVectors(Vs,Hs),Y1.subVectors(Ws,Vs);let x=[0,-_1.z,_1.y,0,-c1.z,c1.y,0,-Y1.z,Y1.y,_1.z,0,-_1.x,c1.z,0,-c1.x,Y1.z,0,-Y1.x,-_1.y,_1.x,0,-c1.y,c1.x,0,-Y1.y,Y1.x,0];return!N_(x,Ws,Hs,Vs,L8)||(x=[1,0,0,0,1,0,0,0,1],!N_(x,Ws,Hs,Vs,L8))?!1:(j8.crossVectors(_1,c1),x=[j8.x,j8.y,j8.z],N_(x,Ws,Hs,Vs,L8))}clampPoint(v,x){return x.copy(v).clamp(this.min,this.max)}distanceToPoint(v){return this.clampPoint(v,Pr).distanceTo(v)}getBoundingSphere(v){return this.isEmpty()?v.makeEmpty():(this.getCenter(v.center),v.radius=this.getSize(Pr).length()*.5),v}intersect(v){return this.min.max(v.min),this.max.min(v.max),this.isEmpty()&&this.makeEmpty(),this}union(v){return this.min.min(v.min),this.max.max(v.max),this}applyMatrix4(v){return this.isEmpty()?this:(Fo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(v),Fo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(v),Fo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(v),Fo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(v),Fo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(v),Fo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(v),Fo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(v),Fo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(v),this.setFromPoints(Fo),this)}translate(v){return this.min.add(v),this.max.add(v),this}equals(v){return v.min.equals(this.min)&&v.max.equals(this.max)}}const Fo=[new V2,new V2,new V2,new V2,new V2,new V2,new V2,new V2],Pr=new V2,F8=new Pu,Ws=new V2,Hs=new V2,Vs=new V2,_1=new V2,c1=new V2,Y1=new V2,vu=new V2,L8=new V2,j8=new V2,q1=new V2;function N_(F,v,x,T,O){for(let V=0,Z=F.length-3;V<=Z;V+=3){q1.fromArray(F,V);const q=O.x*Math.abs(q1.x)+O.y*Math.abs(q1.y)+O.z*Math.abs(q1.z),e2=v.dot(q1),n2=x.dot(q1),s2=T.dot(q1);if(Math.max(-Math.max(e2,n2,s2),Math.min(e2,n2,s2))>q)return!1}return!0}const Lu2=new Pu,ku=new V2,U_=new V2;class x6{constructor(v=new V2,x=-1){this.isSphere=!0,this.center=v,this.radius=x}set(v,x){return this.center.copy(v),this.radius=x,this}setFromPoints(v,x){const T=this.center;x!==void 0?T.copy(x):Lu2.setFromPoints(v).getCenter(T);let O=0;for(let V=0,Z=v.length;V<Z;V++)O=Math.max(O,T.distanceToSquared(v[V]));return this.radius=Math.sqrt(O),this}copy(v){return this.center.copy(v.center),this.radius=v.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(v){return v.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(v){return v.distanceTo(this.center)-this.radius}intersectsSphere(v){const x=this.radius+v.radius;return v.center.distanceToSquared(this.center)<=x*x}intersectsBox(v){return v.intersectsSphere(this)}intersectsPlane(v){return Math.abs(v.distanceToPoint(this.center))<=this.radius}clampPoint(v,x){const T=this.center.distanceToSquared(v);return x.copy(v),T>this.radius*this.radius&&(x.sub(this.center).normalize(),x.multiplyScalar(this.radius).add(this.center)),x}getBoundingBox(v){return this.isEmpty()?(v.makeEmpty(),v):(v.set(this.center,this.center),v.expandByScalar(this.radius),v)}applyMatrix4(v){return this.center.applyMatrix4(v),this.radius=this.radius*v.getMaxScaleOnAxis(),this}translate(v){return this.center.add(v),this}expandByPoint(v){if(this.isEmpty())return this.center.copy(v),this.radius=0,this;ku.subVectors(v,this.center);const x=ku.lengthSq();if(x>this.radius*this.radius){const T=Math.sqrt(x),O=(T-this.radius)*.5;this.center.addScaledVector(ku,O/T),this.radius+=O}return this}union(v){return v.isEmpty()?this:this.isEmpty()?(this.copy(v),this):(this.center.equals(v.center)===!0?this.radius=Math.max(this.radius,v.radius):(U_.subVectors(v.center,this.center).setLength(v.radius),this.expandByPoint(ku.copy(v.center).add(U_)),this.expandByPoint(ku.copy(v.center).sub(U_))),this)}equals(v){return v.center.equals(this.center)&&v.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lo=new V2,G_=new V2,O8=new V2,m1=new V2,W_=new V2,N8=new V2,H_=new V2;class cW{constructor(v=new V2,x=new V2(0,0,-1)){this.origin=v,this.direction=x}set(v,x){return this.origin.copy(v),this.direction.copy(x),this}copy(v){return this.origin.copy(v.origin),this.direction.copy(v.direction),this}at(v,x){return x.copy(this.origin).addScaledVector(this.direction,v)}lookAt(v){return this.direction.copy(v).sub(this.origin).normalize(),this}recast(v){return this.origin.copy(this.at(v,Lo)),this}closestPointToPoint(v,x){x.subVectors(v,this.origin);const T=x.dot(this.direction);return T<0?x.copy(this.origin):x.copy(this.origin).addScaledVector(this.direction,T)}distanceToPoint(v){return Math.sqrt(this.distanceSqToPoint(v))}distanceSqToPoint(v){const x=Lo.subVectors(v,this.origin).dot(this.direction);return x<0?this.origin.distanceToSquared(v):(Lo.copy(this.origin).addScaledVector(this.direction,x),Lo.distanceToSquared(v))}distanceSqToSegment(v,x,T,O){G_.copy(v).add(x).multiplyScalar(.5),O8.copy(x).sub(v).normalize(),m1.copy(this.origin).sub(G_);const V=v.distanceTo(x)*.5,Z=-this.direction.dot(O8),q=m1.dot(this.direction),e2=-m1.dot(O8),n2=m1.lengthSq(),s2=Math.abs(1-Z*Z);let h,p2,m2,B2;if(s2>0)if(h=Z*e2-q,p2=Z*q-e2,B2=V*s2,h>=0)if(p2>=-B2)if(p2<=B2){const C2=1/s2;h*=C2,p2*=C2,m2=h*(h+Z*p2+2*q)+p2*(Z*h+p2+2*e2)+n2}else p2=V,h=Math.max(0,-(Z*p2+q)),m2=-h*h+p2*(p2+2*e2)+n2;else p2=-V,h=Math.max(0,-(Z*p2+q)),m2=-h*h+p2*(p2+2*e2)+n2;else p2<=-B2?(h=Math.max(0,-(-Z*V+q)),p2=h>0?-V:Math.min(Math.max(-V,-e2),V),m2=-h*h+p2*(p2+2*e2)+n2):p2<=B2?(h=0,p2=Math.min(Math.max(-V,-e2),V),m2=p2*(p2+2*e2)+n2):(h=Math.max(0,-(Z*V+q)),p2=h>0?V:Math.min(Math.max(-V,-e2),V),m2=-h*h+p2*(p2+2*e2)+n2);else p2=Z>0?-V:V,h=Math.max(0,-(Z*p2+q)),m2=-h*h+p2*(p2+2*e2)+n2;return T&&T.copy(this.origin).addScaledVector(this.direction,h),O&&O.copy(G_).addScaledVector(O8,p2),m2}intersectSphere(v,x){Lo.subVectors(v.center,this.origin);const T=Lo.dot(this.direction),O=Lo.dot(Lo)-T*T,V=v.radius*v.radius;if(O>V)return null;const Z=Math.sqrt(V-O),q=T-Z,e2=T+Z;return e2<0?null:q<0?this.at(e2,x):this.at(q,x)}intersectsSphere(v){return this.distanceSqToPoint(v.center)<=v.radius*v.radius}distanceToPlane(v){const x=v.normal.dot(this.direction);if(x===0)return v.distanceToPoint(this.origin)===0?0:null;const T=-(this.origin.dot(v.normal)+v.constant)/x;return T>=0?T:null}intersectPlane(v,x){const T=this.distanceToPlane(v);return T===null?null:this.at(T,x)}intersectsPlane(v){const x=v.distanceToPoint(this.origin);return x===0||v.normal.dot(this.direction)*x<0}intersectBox(v,x){let T,O,V,Z,q,e2;const n2=1/this.direction.x,s2=1/this.direction.y,h=1/this.direction.z,p2=this.origin;return n2>=0?(T=(v.min.x-p2.x)*n2,O=(v.max.x-p2.x)*n2):(T=(v.max.x-p2.x)*n2,O=(v.min.x-p2.x)*n2),s2>=0?(V=(v.min.y-p2.y)*s2,Z=(v.max.y-p2.y)*s2):(V=(v.max.y-p2.y)*s2,Z=(v.min.y-p2.y)*s2),T>Z||V>O||((V>T||isNaN(T))&&(T=V),(Z<O||isNaN(O))&&(O=Z),h>=0?(q=(v.min.z-p2.z)*h,e2=(v.max.z-p2.z)*h):(q=(v.max.z-p2.z)*h,e2=(v.min.z-p2.z)*h),T>e2||q>O)||((q>T||T!==T)&&(T=q),(e2<O||O!==O)&&(O=e2),O<0)?null:this.at(T>=0?T:O,x)}intersectsBox(v){return this.intersectBox(v,Lo)!==null}intersectTriangle(v,x,T,O,V){W_.subVectors(x,v),N8.subVectors(T,v),H_.crossVectors(W_,N8);let Z=this.direction.dot(H_),q;if(Z>0){if(O)return null;q=1}else if(Z<0)q=-1,Z=-Z;else return null;m1.subVectors(this.origin,v);const e2=q*this.direction.dot(N8.crossVectors(m1,N8));if(e2<0)return null;const n2=q*this.direction.dot(W_.cross(m1));if(n2<0||e2+n2>Z)return null;const s2=-q*m1.dot(H_);return s2<0?null:this.at(s2/Z,V)}applyMatrix4(v){return this.origin.applyMatrix4(v),this.direction.transformDirection(v),this}equals(v){return v.origin.equals(this.origin)&&v.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(v,x,T,O,V,Z,q,e2,n2,s2,h,p2,m2,B2,C2,l2){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v!==void 0&&this.set(v,x,T,O,V,Z,q,e2,n2,s2,h,p2,m2,B2,C2,l2)}set(v,x,T,O,V,Z,q,e2,n2,s2,h,p2,m2,B2,C2,l2){const o2=this.elements;return o2[0]=v,o2[4]=x,o2[8]=T,o2[12]=O,o2[1]=V,o2[5]=Z,o2[9]=q,o2[13]=e2,o2[2]=n2,o2[6]=s2,o2[10]=h,o2[14]=p2,o2[3]=m2,o2[7]=B2,o2[11]=C2,o2[15]=l2,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(v){const x=this.elements,T=v.elements;return x[0]=T[0],x[1]=T[1],x[2]=T[2],x[3]=T[3],x[4]=T[4],x[5]=T[5],x[6]=T[6],x[7]=T[7],x[8]=T[8],x[9]=T[9],x[10]=T[10],x[11]=T[11],x[12]=T[12],x[13]=T[13],x[14]=T[14],x[15]=T[15],this}copyPosition(v){const x=this.elements,T=v.elements;return x[12]=T[12],x[13]=T[13],x[14]=T[14],this}setFromMatrix3(v){const x=v.elements;return this.set(x[0],x[3],x[6],0,x[1],x[4],x[7],0,x[2],x[5],x[8],0,0,0,0,1),this}extractBasis(v,x,T){return v.setFromMatrixColumn(this,0),x.setFromMatrixColumn(this,1),T.setFromMatrixColumn(this,2),this}makeBasis(v,x,T){return this.set(v.x,x.x,T.x,0,v.y,x.y,T.y,0,v.z,x.z,T.z,0,0,0,0,1),this}extractRotation(v){const x=this.elements,T=v.elements,O=1/zs.setFromMatrixColumn(v,0).length(),V=1/zs.setFromMatrixColumn(v,1).length(),Z=1/zs.setFromMatrixColumn(v,2).length();return x[0]=T[0]*O,x[1]=T[1]*O,x[2]=T[2]*O,x[3]=0,x[4]=T[4]*V,x[5]=T[5]*V,x[6]=T[6]*V,x[7]=0,x[8]=T[8]*Z,x[9]=T[9]*Z,x[10]=T[10]*Z,x[11]=0,x[12]=0,x[13]=0,x[14]=0,x[15]=1,this}makeRotationFromEuler(v){const x=this.elements,T=v.x,O=v.y,V=v.z,Z=Math.cos(T),q=Math.sin(T),e2=Math.cos(O),n2=Math.sin(O),s2=Math.cos(V),h=Math.sin(V);if(v.order==="XYZ"){const p2=Z*s2,m2=Z*h,B2=q*s2,C2=q*h;x[0]=e2*s2,x[4]=-e2*h,x[8]=n2,x[1]=m2+B2*n2,x[5]=p2-C2*n2,x[9]=-q*e2,x[2]=C2-p2*n2,x[6]=B2+m2*n2,x[10]=Z*e2}else if(v.order==="YXZ"){const p2=e2*s2,m2=e2*h,B2=n2*s2,C2=n2*h;x[0]=p2+C2*q,x[4]=B2*q-m2,x[8]=Z*n2,x[1]=Z*h,x[5]=Z*s2,x[9]=-q,x[2]=m2*q-B2,x[6]=C2+p2*q,x[10]=Z*e2}else if(v.order==="ZXY"){const p2=e2*s2,m2=e2*h,B2=n2*s2,C2=n2*h;x[0]=p2-C2*q,x[4]=-Z*h,x[8]=B2+m2*q,x[1]=m2+B2*q,x[5]=Z*s2,x[9]=C2-p2*q,x[2]=-Z*n2,x[6]=q,x[10]=Z*e2}else if(v.order==="ZYX"){const p2=Z*s2,m2=Z*h,B2=q*s2,C2=q*h;x[0]=e2*s2,x[4]=B2*n2-m2,x[8]=p2*n2+C2,x[1]=e2*h,x[5]=C2*n2+p2,x[9]=m2*n2-B2,x[2]=-n2,x[6]=q*e2,x[10]=Z*e2}else if(v.order==="YZX"){const p2=Z*e2,m2=Z*n2,B2=q*e2,C2=q*n2;x[0]=e2*s2,x[4]=C2-p2*h,x[8]=B2*h+m2,x[1]=h,x[5]=Z*s2,x[9]=-q*s2,x[2]=-n2*s2,x[6]=m2*h+B2,x[10]=p2-C2*h}else if(v.order==="XZY"){const p2=Z*e2,m2=Z*n2,B2=q*e2,C2=q*n2;x[0]=e2*s2,x[4]=-h,x[8]=n2*s2,x[1]=p2*h+C2,x[5]=Z*s2,x[9]=m2*h-B2,x[2]=B2*h-m2,x[6]=q*s2,x[10]=C2*h+p2}return x[3]=0,x[7]=0,x[11]=0,x[12]=0,x[13]=0,x[14]=0,x[15]=1,this}makeRotationFromQuaternion(v){return this.compose(ju2,v,Ou2)}lookAt(v,x,T){const O=this.elements;return Ui.subVectors(v,x),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),h1.crossVectors(T,Ui),h1.lengthSq()===0&&(Math.abs(T.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),h1.crossVectors(T,Ui)),h1.normalize(),U8.crossVectors(Ui,h1),O[0]=h1.x,O[4]=U8.x,O[8]=Ui.x,O[1]=h1.y,O[5]=U8.y,O[9]=Ui.y,O[2]=h1.z,O[6]=U8.z,O[10]=Ui.z,this}multiply(v){return this.multiplyMatrices(this,v)}premultiply(v){return this.multiplyMatrices(v,this)}multiplyMatrices(v,x){const T=v.elements,O=x.elements,V=this.elements,Z=T[0],q=T[4],e2=T[8],n2=T[12],s2=T[1],h=T[5],p2=T[9],m2=T[13],B2=T[2],C2=T[6],l2=T[10],o2=T[14],P2=T[3],g2=T[7],F2=T[11],X2=T[15],j2=O[0],b2=O[4],te=O[8],x2=O[12],y2=O[1],Q2=O[5],ue=O[9],N2=O[13],he=O[2],ce=O[6],xe=O[10],Me=O[14],ne=O[3],Te=O[7],Ee=O[11],st=O[15];return V[0]=Z*j2+q*y2+e2*he+n2*ne,V[4]=Z*b2+q*Q2+e2*ce+n2*Te,V[8]=Z*te+q*ue+e2*xe+n2*Ee,V[12]=Z*x2+q*N2+e2*Me+n2*st,V[1]=s2*j2+h*y2+p2*he+m2*ne,V[5]=s2*b2+h*Q2+p2*ce+m2*Te,V[9]=s2*te+h*ue+p2*xe+m2*Ee,V[13]=s2*x2+h*N2+p2*Me+m2*st,V[2]=B2*j2+C2*y2+l2*he+o2*ne,V[6]=B2*b2+C2*Q2+l2*ce+o2*Te,V[10]=B2*te+C2*ue+l2*xe+o2*Ee,V[14]=B2*x2+C2*N2+l2*Me+o2*st,V[3]=P2*j2+g2*y2+F2*he+X2*ne,V[7]=P2*b2+g2*Q2+F2*ce+X2*Te,V[11]=P2*te+g2*ue+F2*xe+X2*Ee,V[15]=P2*x2+g2*N2+F2*Me+X2*st,this}multiplyScalar(v){const x=this.elements;return x[0]*=v,x[4]*=v,x[8]*=v,x[12]*=v,x[1]*=v,x[5]*=v,x[9]*=v,x[13]*=v,x[2]*=v,x[6]*=v,x[10]*=v,x[14]*=v,x[3]*=v,x[7]*=v,x[11]*=v,x[15]*=v,this}determinant(){const v=this.elements,x=v[0],T=v[4],O=v[8],V=v[12],Z=v[1],q=v[5],e2=v[9],n2=v[13],s2=v[2],h=v[6],p2=v[10],m2=v[14],B2=v[3],C2=v[7],l2=v[11],o2=v[15];return B2*(+V*e2*h-O*n2*h-V*q*p2+T*n2*p2+O*q*m2-T*e2*m2)+C2*(+x*e2*m2-x*n2*p2+V*Z*p2-O*Z*m2+O*n2*s2-V*e2*s2)+l2*(+x*n2*h-x*q*m2-V*Z*h+T*Z*m2+V*q*s2-T*n2*s2)+o2*(-O*q*s2-x*e2*h+x*q*p2+O*Z*h-T*Z*p2+T*e2*s2)}transpose(){const v=this.elements;let x;return x=v[1],v[1]=v[4],v[4]=x,x=v[2],v[2]=v[8],v[8]=x,x=v[6],v[6]=v[9],v[9]=x,x=v[3],v[3]=v[12],v[12]=x,x=v[7],v[7]=v[13],v[13]=x,x=v[11],v[11]=v[14],v[14]=x,this}setPosition(v,x,T){const O=this.elements;return v.isVector3?(O[12]=v.x,O[13]=v.y,O[14]=v.z):(O[12]=v,O[13]=x,O[14]=T),this}invert(){const v=this.elements,x=v[0],T=v[1],O=v[2],V=v[3],Z=v[4],q=v[5],e2=v[6],n2=v[7],s2=v[8],h=v[9],p2=v[10],m2=v[11],B2=v[12],C2=v[13],l2=v[14],o2=v[15],P2=h*l2*n2-C2*p2*n2+C2*e2*m2-q*l2*m2-h*e2*o2+q*p2*o2,g2=B2*p2*n2-s2*l2*n2-B2*e2*m2+Z*l2*m2+s2*e2*o2-Z*p2*o2,F2=s2*C2*n2-B2*h*n2+B2*q*m2-Z*C2*m2-s2*q*o2+Z*h*o2,X2=B2*h*e2-s2*C2*e2-B2*q*p2+Z*C2*p2+s2*q*l2-Z*h*l2,j2=x*P2+T*g2+O*F2+V*X2;if(j2===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b2=1/j2;return v[0]=P2*b2,v[1]=(C2*p2*V-h*l2*V-C2*O*m2+T*l2*m2+h*O*o2-T*p2*o2)*b2,v[2]=(q*l2*V-C2*e2*V+C2*O*n2-T*l2*n2-q*O*o2+T*e2*o2)*b2,v[3]=(h*e2*V-q*p2*V-h*O*n2+T*p2*n2+q*O*m2-T*e2*m2)*b2,v[4]=g2*b2,v[5]=(s2*l2*V-B2*p2*V+B2*O*m2-x*l2*m2-s2*O*o2+x*p2*o2)*b2,v[6]=(B2*e2*V-Z*l2*V-B2*O*n2+x*l2*n2+Z*O*o2-x*e2*o2)*b2,v[7]=(Z*p2*V-s2*e2*V+s2*O*n2-x*p2*n2-Z*O*m2+x*e2*m2)*b2,v[8]=F2*b2,v[9]=(B2*h*V-s2*C2*V-B2*T*m2+x*C2*m2+s2*T*o2-x*h*o2)*b2,v[10]=(Z*C2*V-B2*q*V+B2*T*n2-x*C2*n2-Z*T*o2+x*q*o2)*b2,v[11]=(s2*q*V-Z*h*V-s2*T*n2+x*h*n2+Z*T*m2-x*q*m2)*b2,v[12]=X2*b2,v[13]=(s2*C2*O-B2*h*O+B2*T*p2-x*C2*p2-s2*T*l2+x*h*l2)*b2,v[14]=(B2*q*O-Z*C2*O-B2*T*e2+x*C2*e2+Z*T*l2-x*q*l2)*b2,v[15]=(Z*h*O-s2*q*O+s2*T*e2-x*h*e2-Z*T*p2+x*q*p2)*b2,this}scale(v){const x=this.elements,T=v.x,O=v.y,V=v.z;return x[0]*=T,x[4]*=O,x[8]*=V,x[1]*=T,x[5]*=O,x[9]*=V,x[2]*=T,x[6]*=O,x[10]*=V,x[3]*=T,x[7]*=O,x[11]*=V,this}getMaxScaleOnAxis(){const v=this.elements,x=v[0]*v[0]+v[1]*v[1]+v[2]*v[2],T=v[4]*v[4]+v[5]*v[5]+v[6]*v[6],O=v[8]*v[8]+v[9]*v[9]+v[10]*v[10];return Math.sqrt(Math.max(x,T,O))}makeTranslation(v,x,T){return v.isVector3?this.set(1,0,0,v.x,0,1,0,v.y,0,0,1,v.z,0,0,0,1):this.set(1,0,0,v,0,1,0,x,0,0,1,T,0,0,0,1),this}makeRotationX(v){const x=Math.cos(v),T=Math.sin(v);return this.set(1,0,0,0,0,x,-T,0,0,T,x,0,0,0,0,1),this}makeRotationY(v){const x=Math.cos(v),T=Math.sin(v);return this.set(x,0,T,0,0,1,0,0,-T,0,x,0,0,0,0,1),this}makeRotationZ(v){const x=Math.cos(v),T=Math.sin(v);return this.set(x,-T,0,0,T,x,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(v,x){const T=Math.cos(x),O=Math.sin(x),V=1-T,Z=v.x,q=v.y,e2=v.z,n2=V*Z,s2=V*q;return this.set(n2*Z+T,n2*q-O*e2,n2*e2+O*q,0,n2*q+O*e2,s2*q+T,s2*e2-O*Z,0,n2*e2-O*q,s2*e2+O*Z,V*e2*e2+T,0,0,0,0,1),this}makeScale(v,x,T){return this.set(v,0,0,0,0,x,0,0,0,0,T,0,0,0,0,1),this}makeShear(v,x,T,O,V,Z){return this.set(1,T,V,0,v,1,Z,0,x,O,1,0,0,0,0,1),this}compose(v,x,T){const O=this.elements,V=x._x,Z=x._y,q=x._z,e2=x._w,n2=V+V,s2=Z+Z,h=q+q,p2=V*n2,m2=V*s2,B2=V*h,C2=Z*s2,l2=Z*h,o2=q*h,P2=e2*n2,g2=e2*s2,F2=e2*h,X2=T.x,j2=T.y,b2=T.z;return O[0]=(1-(C2+o2))*X2,O[1]=(m2+F2)*X2,O[2]=(B2-g2)*X2,O[3]=0,O[4]=(m2-F2)*j2,O[5]=(1-(p2+o2))*j2,O[6]=(l2+P2)*j2,O[7]=0,O[8]=(B2+g2)*b2,O[9]=(l2-P2)*b2,O[10]=(1-(p2+C2))*b2,O[11]=0,O[12]=v.x,O[13]=v.y,O[14]=v.z,O[15]=1,this}decompose(v,x,T){const O=this.elements;let V=zs.set(O[0],O[1],O[2]).length();const Z=zs.set(O[4],O[5],O[6]).length(),q=zs.set(O[8],O[9],O[10]).length();this.determinant()<0&&(V=-V),v.x=O[12],v.y=O[13],v.z=O[14],br.copy(this);const n2=1/V,s2=1/Z,h=1/q;return br.elements[0]*=n2,br.elements[1]*=n2,br.elements[2]*=n2,br.elements[4]*=s2,br.elements[5]*=s2,br.elements[6]*=s2,br.elements[8]*=h,br.elements[9]*=h,br.elements[10]*=h,x.setFromRotationMatrix(br),T.x=V,T.y=Z,T.z=q,this}makePerspective(v,x,T,O,V,Z,q=Wo){const e2=this.elements,n2=2*V/(x-v),s2=2*V/(T-O),h=(x+v)/(x-v),p2=(T+O)/(T-O);let m2,B2;if(q===Wo)m2=-(Z+V)/(Z-V),B2=-2*Z*V/(Z-V);else if(q===fl)m2=-Z/(Z-V),B2=-Z*V/(Z-V);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+q);return e2[0]=n2,e2[4]=0,e2[8]=h,e2[12]=0,e2[1]=0,e2[5]=s2,e2[9]=p2,e2[13]=0,e2[2]=0,e2[6]=0,e2[10]=m2,e2[14]=B2,e2[3]=0,e2[7]=0,e2[11]=-1,e2[15]=0,this}makeOrthographic(v,x,T,O,V,Z,q=Wo){const e2=this.elements,n2=1/(x-v),s2=1/(T-O),h=1/(Z-V),p2=(x+v)*n2,m2=(T+O)*s2;let B2,C2;if(q===Wo)B2=(Z+V)*h,C2=-2*h;else if(q===fl)B2=V*h,C2=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+q);return e2[0]=2*n2,e2[4]=0,e2[8]=0,e2[12]=-p2,e2[1]=0,e2[5]=2*s2,e2[9]=0,e2[13]=-m2,e2[2]=0,e2[6]=0,e2[10]=C2,e2[14]=-B2,e2[3]=0,e2[7]=0,e2[11]=0,e2[15]=1,this}equals(v){const x=this.elements,T=v.elements;for(let O=0;O<16;O++)if(x[O]!==T[O])return!1;return!0}fromArray(v,x=0){for(let T=0;T<16;T++)this.elements[T]=v[T+x];return this}toArray(v=[],x=0){const T=this.elements;return v[x]=T[0],v[x+1]=T[1],v[x+2]=T[2],v[x+3]=T[3],v[x+4]=T[4],v[x+5]=T[5],v[x+6]=T[6],v[x+7]=T[7],v[x+8]=T[8],v[x+9]=T[9],v[x+10]=T[10],v[x+11]=T[11],v[x+12]=T[12],v[x+13]=T[13],v[x+14]=T[14],v[x+15]=T[15],v}}const zs=new V2,br=new un,ju2=new V2(0,0,0),Ou2=new V2(1,1,1),h1=new V2,U8=new V2,Ui=new V2,$U=new un,eG=new w1;class fo{constructor(v=0,x=0,T=0,O=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=v,this._y=x,this._z=T,this._order=O}get x(){return this._x}set x(v){this._x=v,this._onChangeCallback()}get y(){return this._y}set y(v){this._y=v,this._onChangeCallback()}get z(){return this._z}set z(v){this._z=v,this._onChangeCallback()}get order(){return this._order}set order(v){this._order=v,this._onChangeCallback()}set(v,x,T,O=this._order){return this._x=v,this._y=x,this._z=T,this._order=O,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(v){return this._x=v._x,this._y=v._y,this._z=v._z,this._order=v._order,this._onChangeCallback(),this}setFromRotationMatrix(v,x=this._order,T=!0){const O=v.elements,V=O[0],Z=O[4],q=O[8],e2=O[1],n2=O[5],s2=O[9],h=O[2],p2=O[6],m2=O[10];switch(x){case"XYZ":this._y=Math.asin(ri(q,-1,1)),Math.abs(q)<.9999999?(this._x=Math.atan2(-s2,m2),this._z=Math.atan2(-Z,V)):(this._x=Math.atan2(p2,n2),this._z=0);break;case"YXZ":this._x=Math.asin(-ri(s2,-1,1)),Math.abs(s2)<.9999999?(this._y=Math.atan2(q,m2),this._z=Math.atan2(e2,n2)):(this._y=Math.atan2(-h,V),this._z=0);break;case"ZXY":this._x=Math.asin(ri(p2,-1,1)),Math.abs(p2)<.9999999?(this._y=Math.atan2(-h,m2),this._z=Math.atan2(-Z,n2)):(this._y=0,this._z=Math.atan2(e2,V));break;case"ZYX":this._y=Math.asin(-ri(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p2,m2),this._z=Math.atan2(e2,V)):(this._x=0,this._z=Math.atan2(-Z,n2));break;case"YZX":this._z=Math.asin(ri(e2,-1,1)),Math.abs(e2)<.9999999?(this._x=Math.atan2(-s2,n2),this._y=Math.atan2(-h,V)):(this._x=0,this._y=Math.atan2(q,m2));break;case"XZY":this._z=Math.asin(-ri(Z,-1,1)),Math.abs(Z)<.9999999?(this._x=Math.atan2(p2,n2),this._y=Math.atan2(q,V)):(this._x=Math.atan2(-s2,m2),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+x)}return this._order=x,T===!0&&this._onChangeCallback(),this}setFromQuaternion(v,x,T){return $U.makeRotationFromQuaternion(v),this.setFromRotationMatrix($U,x,T)}setFromVector3(v,x=this._order){return this.set(v.x,v.y,v.z,x)}reorder(v){return eG.setFromEuler(this),this.setFromQuaternion(eG,v)}equals(v){return v._x===this._x&&v._y===this._y&&v._z===this._z&&v._order===this._order}fromArray(v){return this._x=v[0],this._y=v[1],this._z=v[2],v[3]!==void 0&&(this._order=v[3]),this._onChangeCallback(),this}toArray(v=[],x=0){return v[x]=this._x,v[x+1]=this._y,v[x+2]=this._z,v[x+3]=this._order,v}_onChange(v){return this._onChangeCallback=v,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class mW{constructor(){this.mask=1}set(v){this.mask=(1<<v|0)>>>0}enable(v){this.mask|=1<<v|0}enableAll(){this.mask=-1}toggle(v){this.mask^=1<<v|0}disable(v){this.mask&=~(1<<v|0)}disableAll(){this.mask=0}test(v){return(this.mask&v.mask)!==0}isEnabled(v){return(this.mask&(1<<v|0))!==0}}let Nu2=0;const tG=new V2,Qs=new w1,jo=new un,G8=new V2,Bu=new V2,Uu2=new V2,Gu2=new w1,nG=new V2(1,0,0),iG=new V2(0,1,0),rG=new V2(0,0,1),oG={type:"added"},Wu2={type:"removed"},Xs={type:"childadded",child:null},V_={type:"childremoved",child:null};class Hn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu2++}),this.uuid=A4(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const v=new V2,x=new fo,T=new w1,O=new V2(1,1,1);function V(){T.setFromEuler(x,!1)}function Z(){x.setFromQuaternion(T,void 0,!1)}x._onChange(V),T._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:v},rotation:{configurable:!0,enumerable:!0,value:x},quaternion:{configurable:!0,enumerable:!0,value:T},scale:{configurable:!0,enumerable:!0,value:O},modelViewMatrix:{value:new un},normalMatrix:{value:new Zt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mW,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(v){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(v),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(v){return this.quaternion.premultiply(v),this}setRotationFromAxisAngle(v,x){this.quaternion.setFromAxisAngle(v,x)}setRotationFromEuler(v){this.quaternion.setFromEuler(v,!0)}setRotationFromMatrix(v){this.quaternion.setFromRotationMatrix(v)}setRotationFromQuaternion(v){this.quaternion.copy(v)}rotateOnAxis(v,x){return Qs.setFromAxisAngle(v,x),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(v,x){return Qs.setFromAxisAngle(v,x),this.quaternion.premultiply(Qs),this}rotateX(v){return this.rotateOnAxis(nG,v)}rotateY(v){return this.rotateOnAxis(iG,v)}rotateZ(v){return this.rotateOnAxis(rG,v)}translateOnAxis(v,x){return tG.copy(v).applyQuaternion(this.quaternion),this.position.add(tG.multiplyScalar(x)),this}translateX(v){return this.translateOnAxis(nG,v)}translateY(v){return this.translateOnAxis(iG,v)}translateZ(v){return this.translateOnAxis(rG,v)}localToWorld(v){return this.updateWorldMatrix(!0,!1),v.applyMatrix4(this.matrixWorld)}worldToLocal(v){return this.updateWorldMatrix(!0,!1),v.applyMatrix4(jo.copy(this.matrixWorld).invert())}lookAt(v,x,T){v.isVector3?G8.copy(v):G8.set(v,x,T);const O=this.parent;this.updateWorldMatrix(!0,!1),Bu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jo.lookAt(Bu,G8,this.up):jo.lookAt(G8,Bu,this.up),this.quaternion.setFromRotationMatrix(jo),O&&(jo.extractRotation(O.matrixWorld),Qs.setFromRotationMatrix(jo),this.quaternion.premultiply(Qs.invert()))}add(v){if(arguments.length>1){for(let x=0;x<arguments.length;x++)this.add(arguments[x]);return this}return v===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",v),this):(v&&v.isObject3D?(v.removeFromParent(),v.parent=this,this.children.push(v),v.dispatchEvent(oG),Xs.child=v,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",v),this)}remove(v){if(arguments.length>1){for(let T=0;T<arguments.length;T++)this.remove(arguments[T]);return this}const x=this.children.indexOf(v);return x!==-1&&(v.parent=null,this.children.splice(x,1),v.dispatchEvent(Wu2),V_.child=v,this.dispatchEvent(V_),V_.child=null),this}removeFromParent(){const v=this.parent;return v!==null&&v.remove(this),this}clear(){return this.remove(...this.children)}attach(v){return this.updateWorldMatrix(!0,!1),jo.copy(this.matrixWorld).invert(),v.parent!==null&&(v.parent.updateWorldMatrix(!0,!1),jo.multiply(v.parent.matrixWorld)),v.applyMatrix4(jo),v.removeFromParent(),v.parent=this,this.children.push(v),v.updateWorldMatrix(!1,!0),v.dispatchEvent(oG),Xs.child=v,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(v){return this.getObjectByProperty("id",v)}getObjectByName(v){return this.getObjectByProperty("name",v)}getObjectByProperty(v,x){if(this[v]===x)return this;for(let T=0,O=this.children.length;T<O;T++){const Z=this.children[T].getObjectByProperty(v,x);if(Z!==void 0)return Z}}getObjectsByProperty(v,x,T=[]){this[v]===x&&T.push(this);const O=this.children;for(let V=0,Z=O.length;V<Z;V++)O[V].getObjectsByProperty(v,x,T);return T}getWorldPosition(v){return this.updateWorldMatrix(!0,!1),v.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(v){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bu,v,Uu2),v}getWorldScale(v){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bu,Gu2,v),v}getWorldDirection(v){this.updateWorldMatrix(!0,!1);const x=this.matrixWorld.elements;return v.set(x[8],x[9],x[10]).normalize()}raycast(){}traverse(v){v(this);const x=this.children;for(let T=0,O=x.length;T<O;T++)x[T].traverse(v)}traverseVisible(v){if(this.visible===!1)return;v(this);const x=this.children;for(let T=0,O=x.length;T<O;T++)x[T].traverseVisible(v)}traverseAncestors(v){const x=this.parent;x!==null&&(v(x),x.traverseAncestors(v))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(v){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||v)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,v=!0);const x=this.children;for(let T=0,O=x.length;T<O;T++){const V=x[T];(V.matrixWorldAutoUpdate===!0||v===!0)&&V.updateMatrixWorld(v)}}updateWorldMatrix(v,x){const T=this.parent;if(v===!0&&T!==null&&T.matrixWorldAutoUpdate===!0&&T.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),x===!0){const O=this.children;for(let V=0,Z=O.length;V<Z;V++){const q=O[V];q.matrixWorldAutoUpdate===!0&&q.updateWorldMatrix(!1,!0)}}}toJSON(v){const x=v===void 0||typeof v=="string",T={};x&&(v={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},T.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const O={};O.uuid=this.uuid,O.type=this.type,this.name!==""&&(O.name=this.name),this.castShadow===!0&&(O.castShadow=!0),this.receiveShadow===!0&&(O.receiveShadow=!0),this.visible===!1&&(O.visible=!1),this.frustumCulled===!1&&(O.frustumCulled=!1),this.renderOrder!==0&&(O.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(O.userData=this.userData),O.layers=this.layers.mask,O.matrix=this.matrix.toArray(),O.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(O.matrixAutoUpdate=!1),this.isInstancedMesh&&(O.type="InstancedMesh",O.count=this.count,O.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(O.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(O.type="BatchedMesh",O.perObjectFrustumCulled=this.perObjectFrustumCulled,O.sortObjects=this.sortObjects,O.drawRanges=this._drawRanges,O.reservedRanges=this._reservedRanges,O.visibility=this._visibility,O.active=this._active,O.bounds=this._bounds.map(q=>({boxInitialized:q.boxInitialized,boxMin:q.box.min.toArray(),boxMax:q.box.max.toArray(),sphereInitialized:q.sphereInitialized,sphereRadius:q.sphere.radius,sphereCenter:q.sphere.center.toArray()})),O.maxGeometryCount=this._maxGeometryCount,O.maxVertexCount=this._maxVertexCount,O.maxIndexCount=this._maxIndexCount,O.geometryInitialized=this._geometryInitialized,O.geometryCount=this._geometryCount,O.matricesTexture=this._matricesTexture.toJSON(v),this.boundingSphere!==null&&(O.boundingSphere={center:O.boundingSphere.center.toArray(),radius:O.boundingSphere.radius}),this.boundingBox!==null&&(O.boundingBox={min:O.boundingBox.min.toArray(),max:O.boundingBox.max.toArray()}));function V(q,e2){return q[e2.uuid]===void 0&&(q[e2.uuid]=e2.toJSON(v)),e2.uuid}if(this.isScene)this.background&&(this.background.isColor?O.background=this.background.toJSON():this.background.isTexture&&(O.background=this.background.toJSON(v).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(O.environment=this.environment.toJSON(v).uuid);else if(this.isMesh||this.isLine||this.isPoints){O.geometry=V(v.geometries,this.geometry);const q=this.geometry.parameters;if(q!==void 0&&q.shapes!==void 0){const e2=q.shapes;if(Array.isArray(e2))for(let n2=0,s2=e2.length;n2<s2;n2++){const h=e2[n2];V(v.shapes,h)}else V(v.shapes,e2)}}if(this.isSkinnedMesh&&(O.bindMode=this.bindMode,O.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(V(v.skeletons,this.skeleton),O.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const q=[];for(let e2=0,n2=this.material.length;e2<n2;e2++)q.push(V(v.materials,this.material[e2]));O.material=q}else O.material=V(v.materials,this.material);if(this.children.length>0){O.children=[];for(let q=0;q<this.children.length;q++)O.children.push(this.children[q].toJSON(v).object)}if(this.animations.length>0){O.animations=[];for(let q=0;q<this.animations.length;q++){const e2=this.animations[q];O.animations.push(V(v.animations,e2))}}if(x){const q=Z(v.geometries),e2=Z(v.materials),n2=Z(v.textures),s2=Z(v.images),h=Z(v.shapes),p2=Z(v.skeletons),m2=Z(v.animations),B2=Z(v.nodes);q.length>0&&(T.geometries=q),e2.length>0&&(T.materials=e2),n2.length>0&&(T.textures=n2),s2.length>0&&(T.images=s2),h.length>0&&(T.shapes=h),p2.length>0&&(T.skeletons=p2),m2.length>0&&(T.animations=m2),B2.length>0&&(T.nodes=B2)}return T.object=O,T;function Z(q){const e2=[];for(const n2 in q){const s2=q[n2];delete s2.metadata,e2.push(s2)}return e2}}clone(v){return new this.constructor().copy(this,v)}copy(v,x=!0){if(this.name=v.name,this.up.copy(v.up),this.position.copy(v.position),this.rotation.order=v.rotation.order,this.quaternion.copy(v.quaternion),this.scale.copy(v.scale),this.matrix.copy(v.matrix),this.matrixWorld.copy(v.matrixWorld),this.matrixAutoUpdate=v.matrixAutoUpdate,this.matrixWorldAutoUpdate=v.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=v.matrixWorldNeedsUpdate,this.layers.mask=v.layers.mask,this.visible=v.visible,this.castShadow=v.castShadow,this.receiveShadow=v.receiveShadow,this.frustumCulled=v.frustumCulled,this.renderOrder=v.renderOrder,this.animations=v.animations.slice(),this.userData=JSON.parse(JSON.stringify(v.userData)),x===!0)for(let T=0;T<v.children.length;T++){const O=v.children[T];this.add(O.clone())}return this}}Hn.DEFAULT_UP=new V2(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fr=new V2,Oo=new V2,z_=new V2,No=new V2,Ys=new V2,qs=new V2,sG=new V2,Q_=new V2,X_=new V2,Y_=new V2;class ro{constructor(v=new V2,x=new V2,T=new V2){this.a=v,this.b=x,this.c=T}static getNormal(v,x,T,O){O.subVectors(T,x),Fr.subVectors(v,x),O.cross(Fr);const V=O.lengthSq();return V>0?O.multiplyScalar(1/Math.sqrt(V)):O.set(0,0,0)}static getBarycoord(v,x,T,O,V){Fr.subVectors(O,x),Oo.subVectors(T,x),z_.subVectors(v,x);const Z=Fr.dot(Fr),q=Fr.dot(Oo),e2=Fr.dot(z_),n2=Oo.dot(Oo),s2=Oo.dot(z_),h=Z*n2-q*q;if(h===0)return V.set(0,0,0),null;const p2=1/h,m2=(n2*e2-q*s2)*p2,B2=(Z*s2-q*e2)*p2;return V.set(1-m2-B2,B2,m2)}static containsPoint(v,x,T,O){return this.getBarycoord(v,x,T,O,No)===null?!1:No.x>=0&&No.y>=0&&No.x+No.y<=1}static getInterpolation(v,x,T,O,V,Z,q,e2){return this.getBarycoord(v,x,T,O,No)===null?(e2.x=0,e2.y=0,"z"in e2&&(e2.z=0),"w"in e2&&(e2.w=0),null):(e2.setScalar(0),e2.addScaledVector(V,No.x),e2.addScaledVector(Z,No.y),e2.addScaledVector(q,No.z),e2)}static isFrontFacing(v,x,T,O){return Fr.subVectors(T,x),Oo.subVectors(v,x),Fr.cross(Oo).dot(O)<0}set(v,x,T){return this.a.copy(v),this.b.copy(x),this.c.copy(T),this}setFromPointsAndIndices(v,x,T,O){return this.a.copy(v[x]),this.b.copy(v[T]),this.c.copy(v[O]),this}setFromAttributeAndIndices(v,x,T,O){return this.a.fromBufferAttribute(v,x),this.b.fromBufferAttribute(v,T),this.c.fromBufferAttribute(v,O),this}clone(){return new this.constructor().copy(this)}copy(v){return this.a.copy(v.a),this.b.copy(v.b),this.c.copy(v.c),this}getArea(){return Fr.subVectors(this.c,this.b),Oo.subVectors(this.a,this.b),Fr.cross(Oo).length()*.5}getMidpoint(v){return v.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(v){return ro.getNormal(this.a,this.b,this.c,v)}getPlane(v){return v.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(v,x){return ro.getBarycoord(v,this.a,this.b,this.c,x)}getInterpolation(v,x,T,O,V){return ro.getInterpolation(v,this.a,this.b,this.c,x,T,O,V)}containsPoint(v){return ro.containsPoint(v,this.a,this.b,this.c)}isFrontFacing(v){return ro.isFrontFacing(this.a,this.b,this.c,v)}intersectsBox(v){return v.intersectsTriangle(this)}closestPointToPoint(v,x){const T=this.a,O=this.b,V=this.c;let Z,q;Ys.subVectors(O,T),qs.subVectors(V,T),Q_.subVectors(v,T);const e2=Ys.dot(Q_),n2=qs.dot(Q_);if(e2<=0&&n2<=0)return x.copy(T);X_.subVectors(v,O);const s2=Ys.dot(X_),h=qs.dot(X_);if(s2>=0&&h<=s2)return x.copy(O);const p2=e2*h-s2*n2;if(p2<=0&&e2>=0&&s2<=0)return Z=e2/(e2-s2),x.copy(T).addScaledVector(Ys,Z);Y_.subVectors(v,V);const m2=Ys.dot(Y_),B2=qs.dot(Y_);if(B2>=0&&m2<=B2)return x.copy(V);const C2=m2*n2-e2*B2;if(C2<=0&&n2>=0&&B2<=0)return q=n2/(n2-B2),x.copy(T).addScaledVector(qs,q);const l2=s2*B2-m2*h;if(l2<=0&&h-s2>=0&&m2-B2>=0)return sG.subVectors(V,O),q=(h-s2)/(h-s2+(m2-B2)),x.copy(O).addScaledVector(sG,q);const o2=1/(l2+C2+p2);return Z=C2*o2,q=p2*o2,x.copy(T).addScaledVector(Ys,Z).addScaledVector(qs,q)}equals(v){return v.a.equals(this.a)&&v.b.equals(this.b)&&v.c.equals(this.c)}}const hW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},A1={h:0,s:0,l:0},W8={h:0,s:0,l:0};function q_(F,v,x){return x<0&&(x+=1),x>1&&(x-=1),x<1/6?F+(v-F)*6*x:x<1/2?v:x<2/3?F+(v-F)*6*(2/3-x):F}class o0{constructor(v,x,T){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(v,x,T)}set(v,x,T){if(x===void 0&&T===void 0){const O=v;O&&O.isColor?this.copy(O):typeof O=="number"?this.setHex(O):typeof O=="string"&&this.setStyle(O)}else this.setRGB(v,x,T);return this}setScalar(v){return this.r=v,this.g=v,this.b=v,this}setHex(v,x=no){return v=Math.floor(v),this.r=(v>>16&255)/255,this.g=(v>>8&255)/255,this.b=(v&255)/255,D0.toWorkingColorSpace(this,x),this}setRGB(v,x,T,O=D0.workingColorSpace){return this.r=v,this.g=x,this.b=T,D0.toWorkingColorSpace(this,O),this}setHSL(v,x,T,O=D0.workingColorSpace){if(v=w6(v,1),x=ri(x,0,1),T=ri(T,0,1),x===0)this.r=this.g=this.b=T;else{const V=T<=.5?T*(1+x):T+x-T*x,Z=2*T-V;this.r=q_(Z,V,v+1/3),this.g=q_(Z,V,v),this.b=q_(Z,V,v-1/3)}return D0.toWorkingColorSpace(this,O),this}setStyle(v,x=no){function T(V){V!==void 0&&parseFloat(V)<1&&console.warn("THREE.Color: Alpha component of "+v+" will be ignored.")}let O;if(O=/^(\w+)\(([^\)]*)\)/.exec(v)){let V;const Z=O[1],q=O[2];switch(Z){case"rgb":case"rgba":if(V=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(q))return T(V[4]),this.setRGB(Math.min(255,parseInt(V[1],10))/255,Math.min(255,parseInt(V[2],10))/255,Math.min(255,parseInt(V[3],10))/255,x);if(V=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(q))return T(V[4]),this.setRGB(Math.min(100,parseInt(V[1],10))/100,Math.min(100,parseInt(V[2],10))/100,Math.min(100,parseInt(V[3],10))/100,x);break;case"hsl":case"hsla":if(V=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(q))return T(V[4]),this.setHSL(parseFloat(V[1])/360,parseFloat(V[2])/100,parseFloat(V[3])/100,x);break;default:console.warn("THREE.Color: Unknown color model "+v)}}else if(O=/^\#([A-Fa-f\d]+)$/.exec(v)){const V=O[1],Z=V.length;if(Z===3)return this.setRGB(parseInt(V.charAt(0),16)/15,parseInt(V.charAt(1),16)/15,parseInt(V.charAt(2),16)/15,x);if(Z===6)return this.setHex(parseInt(V,16),x);console.warn("THREE.Color: Invalid hex color "+v)}else if(v&&v.length>0)return this.setColorName(v,x);return this}setColorName(v,x=no){const T=hW[v.toLowerCase()];return T!==void 0?this.setHex(T,x):console.warn("THREE.Color: Unknown color "+v),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(v){return this.r=v.r,this.g=v.g,this.b=v.b,this}copySRGBToLinear(v){return this.r=p4(v.r),this.g=p4(v.g),this.b=p4(v.b),this}copyLinearToSRGB(v){return this.r=L_(v.r),this.g=L_(v.g),this.b=L_(v.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(v=no){return D0.fromWorkingColorSpace(ii.copy(this),v),Math.round(ri(ii.r*255,0,255))*65536+Math.round(ri(ii.g*255,0,255))*256+Math.round(ri(ii.b*255,0,255))}getHexString(v=no){return("000000"+this.getHex(v).toString(16)).slice(-6)}getHSL(v,x=D0.workingColorSpace){D0.fromWorkingColorSpace(ii.copy(this),x);const T=ii.r,O=ii.g,V=ii.b,Z=Math.max(T,O,V),q=Math.min(T,O,V);let e2,n2;const s2=(q+Z)/2;if(q===Z)e2=0,n2=0;else{const h=Z-q;switch(n2=s2<=.5?h/(Z+q):h/(2-Z-q),Z){case T:e2=(O-V)/h+(O<V?6:0);break;case O:e2=(V-T)/h+2;break;case V:e2=(T-O)/h+4;break}e2/=6}return v.h=e2,v.s=n2,v.l=s2,v}getRGB(v,x=D0.workingColorSpace){return D0.fromWorkingColorSpace(ii.copy(this),x),v.r=ii.r,v.g=ii.g,v.b=ii.b,v}getStyle(v=no){D0.fromWorkingColorSpace(ii.copy(this),v);const x=ii.r,T=ii.g,O=ii.b;return v!==no?`color(${v} ${x.toFixed(3)} ${T.toFixed(3)} ${O.toFixed(3)})`:`rgb(${Math.round(x*255)},${Math.round(T*255)},${Math.round(O*255)})`}offsetHSL(v,x,T){return this.getHSL(A1),this.setHSL(A1.h+v,A1.s+x,A1.l+T)}add(v){return this.r+=v.r,this.g+=v.g,this.b+=v.b,this}addColors(v,x){return this.r=v.r+x.r,this.g=v.g+x.g,this.b=v.b+x.b,this}addScalar(v){return this.r+=v,this.g+=v,this.b+=v,this}sub(v){return this.r=Math.max(0,this.r-v.r),this.g=Math.max(0,this.g-v.g),this.b=Math.max(0,this.b-v.b),this}multiply(v){return this.r*=v.r,this.g*=v.g,this.b*=v.b,this}multiplyScalar(v){return this.r*=v,this.g*=v,this.b*=v,this}lerp(v,x){return this.r+=(v.r-this.r)*x,this.g+=(v.g-this.g)*x,this.b+=(v.b-this.b)*x,this}lerpColors(v,x,T){return this.r=v.r+(x.r-v.r)*T,this.g=v.g+(x.g-v.g)*T,this.b=v.b+(x.b-v.b)*T,this}lerpHSL(v,x){this.getHSL(A1),v.getHSL(W8);const T=Eu(A1.h,W8.h,x),O=Eu(A1.s,W8.s,x),V=Eu(A1.l,W8.l,x);return this.setHSL(T,O,V),this}setFromVector3(v){return this.r=v.x,this.g=v.y,this.b=v.z,this}applyMatrix3(v){const x=this.r,T=this.g,O=this.b,V=v.elements;return this.r=V[0]*x+V[3]*T+V[6]*O,this.g=V[1]*x+V[4]*T+V[7]*O,this.b=V[2]*x+V[5]*T+V[8]*O,this}equals(v){return v.r===this.r&&v.g===this.g&&v.b===this.b}fromArray(v,x=0){return this.r=v[x],this.g=v[x+1],this.b=v[x+2],this}toArray(v=[],x=0){return v[x]=this.r,v[x+1]=this.g,v[x+2]=this.b,v}fromBufferAttribute(v,x){return this.r=v.getX(x),this.g=v.getY(x),this.b=v.getZ(x),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new o0;o0.NAMES=hW;let Hu2=0;class bu extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu2++}),this.uuid=A4(),this.name="",this.type="Material",this.blending=f4,this.side=C1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=m6,this.blendDst=h6,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new o0(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zU,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(v){this._alphaTest>0!=v>0&&this.version++,this._alphaTest=v}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(v){if(v!==void 0)for(const x in v){const T=v[x];if(T===void 0){console.warn(`THREE.Material: parameter '${x}' has value of undefined.`);continue}const O=this[x];if(O===void 0){console.warn(`THREE.Material: '${x}' is not a property of THREE.${this.type}.`);continue}O&&O.isColor?O.set(T):O&&O.isVector3&&T&&T.isVector3?O.copy(T):this[x]=T}}toJSON(v){const x=v===void 0||typeof v=="string";x&&(v={textures:{},images:{}});const T={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};T.uuid=this.uuid,T.type=this.type,this.name!==""&&(T.name=this.name),this.color&&this.color.isColor&&(T.color=this.color.getHex()),this.roughness!==void 0&&(T.roughness=this.roughness),this.metalness!==void 0&&(T.metalness=this.metalness),this.sheen!==void 0&&(T.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(T.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(T.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(T.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(T.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(T.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(T.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(T.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(T.shininess=this.shininess),this.clearcoat!==void 0&&(T.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(T.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(T.clearcoatMap=this.clearcoatMap.toJSON(v).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(T.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(v).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(T.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(v).uuid,T.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(T.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(T.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(T.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(T.iridescenceMap=this.iridescenceMap.toJSON(v).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(T.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(v).uuid),this.anisotropy!==void 0&&(T.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(T.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(T.anisotropyMap=this.anisotropyMap.toJSON(v).uuid),this.map&&this.map.isTexture&&(T.map=this.map.toJSON(v).uuid),this.matcap&&this.matcap.isTexture&&(T.matcap=this.matcap.toJSON(v).uuid),this.alphaMap&&this.alphaMap.isTexture&&(T.alphaMap=this.alphaMap.toJSON(v).uuid),this.lightMap&&this.lightMap.isTexture&&(T.lightMap=this.lightMap.toJSON(v).uuid,T.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(T.aoMap=this.aoMap.toJSON(v).uuid,T.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(T.bumpMap=this.bumpMap.toJSON(v).uuid,T.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(T.normalMap=this.normalMap.toJSON(v).uuid,T.normalMapType=this.normalMapType,T.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(T.displacementMap=this.displacementMap.toJSON(v).uuid,T.displacementScale=this.displacementScale,T.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(T.roughnessMap=this.roughnessMap.toJSON(v).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(T.metalnessMap=this.metalnessMap.toJSON(v).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(T.emissiveMap=this.emissiveMap.toJSON(v).uuid),this.specularMap&&this.specularMap.isTexture&&(T.specularMap=this.specularMap.toJSON(v).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(T.specularIntensityMap=this.specularIntensityMap.toJSON(v).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(T.specularColorMap=this.specularColorMap.toJSON(v).uuid),this.envMap&&this.envMap.isTexture&&(T.envMap=this.envMap.toJSON(v).uuid,this.combine!==void 0&&(T.combine=this.combine)),this.envMapRotation!==void 0&&(T.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(T.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(T.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(T.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(T.gradientMap=this.gradientMap.toJSON(v).uuid),this.transmission!==void 0&&(T.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(T.transmissionMap=this.transmissionMap.toJSON(v).uuid),this.thickness!==void 0&&(T.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(T.thicknessMap=this.thicknessMap.toJSON(v).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(T.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(T.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(T.size=this.size),this.shadowSide!==null&&(T.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(T.sizeAttenuation=this.sizeAttenuation),this.blending!==f4&&(T.blending=this.blending),this.side!==C1&&(T.side=this.side),this.vertexColors===!0&&(T.vertexColors=!0),this.opacity<1&&(T.opacity=this.opacity),this.transparent===!0&&(T.transparent=!0),this.blendSrc!==m6&&(T.blendSrc=this.blendSrc),this.blendDst!==h6&&(T.blendDst=this.blendDst),this.blendEquation!==ts&&(T.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(T.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(T.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(T.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(T.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(T.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(T.depthFunc=this.depthFunc),this.depthTest===!1&&(T.depthTest=this.depthTest),this.depthWrite===!1&&(T.depthWrite=this.depthWrite),this.colorWrite===!1&&(T.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(T.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zU&&(T.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(T.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(T.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(T.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(T.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(T.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(T.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(T.rotation=this.rotation),this.polygonOffset===!0&&(T.polygonOffset=!0),this.polygonOffsetFactor!==0&&(T.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(T.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(T.linewidth=this.linewidth),this.dashSize!==void 0&&(T.dashSize=this.dashSize),this.gapSize!==void 0&&(T.gapSize=this.gapSize),this.scale!==void 0&&(T.scale=this.scale),this.dithering===!0&&(T.dithering=!0),this.alphaTest>0&&(T.alphaTest=this.alphaTest),this.alphaHash===!0&&(T.alphaHash=!0),this.alphaToCoverage===!0&&(T.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(T.premultipliedAlpha=!0),this.forceSinglePass===!0&&(T.forceSinglePass=!0),this.wireframe===!0&&(T.wireframe=!0),this.wireframeLinewidth>1&&(T.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(T.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(T.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(T.flatShading=!0),this.visible===!1&&(T.visible=!1),this.toneMapped===!1&&(T.toneMapped=!1),this.fog===!1&&(T.fog=!1),Object.keys(this.userData).length>0&&(T.userData=this.userData);function O(V){const Z=[];for(const q in V){const e2=V[q];delete e2.metadata,Z.push(e2)}return Z}if(x){const V=O(v.textures),Z=O(v.images);V.length>0&&(T.textures=V),Z.length>0&&(T.images=Z)}return T}clone(){return new this.constructor().copy(this)}copy(v){this.name=v.name,this.blending=v.blending,this.side=v.side,this.vertexColors=v.vertexColors,this.opacity=v.opacity,this.transparent=v.transparent,this.blendSrc=v.blendSrc,this.blendDst=v.blendDst,this.blendEquation=v.blendEquation,this.blendSrcAlpha=v.blendSrcAlpha,this.blendDstAlpha=v.blendDstAlpha,this.blendEquationAlpha=v.blendEquationAlpha,this.blendColor.copy(v.blendColor),this.blendAlpha=v.blendAlpha,this.depthFunc=v.depthFunc,this.depthTest=v.depthTest,this.depthWrite=v.depthWrite,this.stencilWriteMask=v.stencilWriteMask,this.stencilFunc=v.stencilFunc,this.stencilRef=v.stencilRef,this.stencilFuncMask=v.stencilFuncMask,this.stencilFail=v.stencilFail,this.stencilZFail=v.stencilZFail,this.stencilZPass=v.stencilZPass,this.stencilWrite=v.stencilWrite;const x=v.clippingPlanes;let T=null;if(x!==null){const O=x.length;T=new Array(O);for(let V=0;V!==O;++V)T[V]=x[V].clone()}return this.clippingPlanes=T,this.clipIntersection=v.clipIntersection,this.clipShadows=v.clipShadows,this.shadowSide=v.shadowSide,this.colorWrite=v.colorWrite,this.precision=v.precision,this.polygonOffset=v.polygonOffset,this.polygonOffsetFactor=v.polygonOffsetFactor,this.polygonOffsetUnits=v.polygonOffsetUnits,this.dithering=v.dithering,this.alphaTest=v.alphaTest,this.alphaHash=v.alphaHash,this.alphaToCoverage=v.alphaToCoverage,this.premultipliedAlpha=v.premultipliedAlpha,this.forceSinglePass=v.forceSinglePass,this.visible=v.visible,this.toneMapped=v.toneMapped,this.userData=JSON.parse(JSON.stringify(v.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(v){v===!0&&this.version++}}class AW extends bu{constructor(v){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new o0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fo,this.combine=JG,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(v)}copy(v){return super.copy(v),this.color.copy(v.color),this.map=v.map,this.lightMap=v.lightMap,this.lightMapIntensity=v.lightMapIntensity,this.aoMap=v.aoMap,this.aoMapIntensity=v.aoMapIntensity,this.specularMap=v.specularMap,this.alphaMap=v.alphaMap,this.envMap=v.envMap,this.envMapRotation.copy(v.envMapRotation),this.combine=v.combine,this.reflectivity=v.reflectivity,this.refractionRatio=v.refractionRatio,this.wireframe=v.wireframe,this.wireframeLinewidth=v.wireframeLinewidth,this.wireframeLinecap=v.wireframeLinecap,this.wireframeLinejoin=v.wireframeLinejoin,this.fog=v.fog,this}}const Cn=new V2,H8=new It;class so{constructor(v,x,T=!1){if(Array.isArray(v))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=v,this.itemSize=x,this.count=v!==void 0?v.length/x:0,this.normalized=T,this.usage=QU,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=v1,this.version=0}onUploadCallback(){}set needsUpdate(v){v===!0&&this.version++}get updateRange(){return Ru2("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(v){return this.usage=v,this}addUpdateRange(v,x){this.updateRanges.push({start:v,count:x})}clearUpdateRanges(){this.updateRanges.length=0}copy(v){return this.name=v.name,this.array=new v.array.constructor(v.array),this.itemSize=v.itemSize,this.count=v.count,this.normalized=v.normalized,this.usage=v.usage,this.gpuType=v.gpuType,this}copyAt(v,x,T){v*=this.itemSize,T*=x.itemSize;for(let O=0,V=this.itemSize;O<V;O++)this.array[v+O]=x.array[T+O];return this}copyArray(v){return this.array.set(v),this}applyMatrix3(v){if(this.itemSize===2)for(let x=0,T=this.count;x<T;x++)H8.fromBufferAttribute(this,x),H8.applyMatrix3(v),this.setXY(x,H8.x,H8.y);else if(this.itemSize===3)for(let x=0,T=this.count;x<T;x++)Cn.fromBufferAttribute(this,x),Cn.applyMatrix3(v),this.setXYZ(x,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(v){for(let x=0,T=this.count;x<T;x++)Cn.fromBufferAttribute(this,x),Cn.applyMatrix4(v),this.setXYZ(x,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(v){for(let x=0,T=this.count;x<T;x++)Cn.fromBufferAttribute(this,x),Cn.applyNormalMatrix(v),this.setXYZ(x,Cn.x,Cn.y,Cn.z);return this}transformDirection(v){for(let x=0,T=this.count;x<T;x++)Cn.fromBufferAttribute(this,x),Cn.transformDirection(v),this.setXYZ(x,Cn.x,Cn.y,Cn.z);return this}set(v,x=0){return this.array.set(v,x),this}getComponent(v,x){let T=this.array[v*this.itemSize+x];return this.normalized&&(T=r4(T,this.array)),T}setComponent(v,x,T){return this.normalized&&(T=Ai(T,this.array)),this.array[v*this.itemSize+x]=T,this}getX(v){let x=this.array[v*this.itemSize];return this.normalized&&(x=r4(x,this.array)),x}setX(v,x){return this.normalized&&(x=Ai(x,this.array)),this.array[v*this.itemSize]=x,this}getY(v){let x=this.array[v*this.itemSize+1];return this.normalized&&(x=r4(x,this.array)),x}setY(v,x){return this.normalized&&(x=Ai(x,this.array)),this.array[v*this.itemSize+1]=x,this}getZ(v){let x=this.array[v*this.itemSize+2];return this.normalized&&(x=r4(x,this.array)),x}setZ(v,x){return this.normalized&&(x=Ai(x,this.array)),this.array[v*this.itemSize+2]=x,this}getW(v){let x=this.array[v*this.itemSize+3];return this.normalized&&(x=r4(x,this.array)),x}setW(v,x){return this.normalized&&(x=Ai(x,this.array)),this.array[v*this.itemSize+3]=x,this}setXY(v,x,T){return v*=this.itemSize,this.normalized&&(x=Ai(x,this.array),T=Ai(T,this.array)),this.array[v+0]=x,this.array[v+1]=T,this}setXYZ(v,x,T,O){return v*=this.itemSize,this.normalized&&(x=Ai(x,this.array),T=Ai(T,this.array),O=Ai(O,this.array)),this.array[v+0]=x,this.array[v+1]=T,this.array[v+2]=O,this}setXYZW(v,x,T,O,V){return v*=this.itemSize,this.normalized&&(x=Ai(x,this.array),T=Ai(T,this.array),O=Ai(O,this.array),V=Ai(V,this.array)),this.array[v+0]=x,this.array[v+1]=T,this.array[v+2]=O,this.array[v+3]=V,this}onUpload(v){return this.onUploadCallback=v,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const v={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(v.name=this.name),this.usage!==QU&&(v.usage=this.usage),v}}class dW extends so{constructor(v,x,T){super(new Uint16Array(v),x,T)}}class aW extends so{constructor(v,x,T){super(new Uint32Array(v),x,T)}}class uo extends so{constructor(v,x,T){super(new Float32Array(v),x,T)}}let Vu2=0;const dr=new un,Z_=new Hn,Zs=new V2,Gi=new Pu,Su=new Pu,Fn=new V2;class E1 extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu2++}),this.uuid=A4(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(v){return Array.isArray(v)?this.index=new(lW(v)?aW:dW)(v,1):this.index=v,this}getAttribute(v){return this.attributes[v]}setAttribute(v,x){return this.attributes[v]=x,this}deleteAttribute(v){return delete this.attributes[v],this}hasAttribute(v){return this.attributes[v]!==void 0}addGroup(v,x,T=0){this.groups.push({start:v,count:x,materialIndex:T})}clearGroups(){this.groups=[]}setDrawRange(v,x){this.drawRange.start=v,this.drawRange.count=x}applyMatrix4(v){const x=this.attributes.position;x!==void 0&&(x.applyMatrix4(v),x.needsUpdate=!0);const T=this.attributes.normal;if(T!==void 0){const V=new Zt().getNormalMatrix(v);T.applyNormalMatrix(V),T.needsUpdate=!0}const O=this.attributes.tangent;return O!==void 0&&(O.transformDirection(v),O.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(v){return dr.makeRotationFromQuaternion(v),this.applyMatrix4(dr),this}rotateX(v){return dr.makeRotationX(v),this.applyMatrix4(dr),this}rotateY(v){return dr.makeRotationY(v),this.applyMatrix4(dr),this}rotateZ(v){return dr.makeRotationZ(v),this.applyMatrix4(dr),this}translate(v,x,T){return dr.makeTranslation(v,x,T),this.applyMatrix4(dr),this}scale(v,x,T){return dr.makeScale(v,x,T),this.applyMatrix4(dr),this}lookAt(v){return Z_.lookAt(v),Z_.updateMatrix(),this.applyMatrix4(Z_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(v){const x=[];for(let T=0,O=v.length;T<O;T++){const V=v[T];x.push(V.x,V.y,V.z||0)}return this.setAttribute("position",new uo(x,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pu);const v=this.attributes.position,x=this.morphAttributes.position;if(v&&v.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V2(-1/0,-1/0,-1/0),new V2(1/0,1/0,1/0));return}if(v!==void 0){if(this.boundingBox.setFromBufferAttribute(v),x)for(let T=0,O=x.length;T<O;T++){const V=x[T];Gi.setFromBufferAttribute(V),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new x6);const v=this.attributes.position,x=this.morphAttributes.position;if(v&&v.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V2,1/0);return}if(v){const T=this.boundingSphere.center;if(Gi.setFromBufferAttribute(v),x)for(let V=0,Z=x.length;V<Z;V++){const q=x[V];Su.setFromBufferAttribute(q),this.morphTargetsRelative?(Fn.addVectors(Gi.min,Su.min),Gi.expandByPoint(Fn),Fn.addVectors(Gi.max,Su.max),Gi.expandByPoint(Fn)):(Gi.expandByPoint(Su.min),Gi.expandByPoint(Su.max))}Gi.getCenter(T);let O=0;for(let V=0,Z=v.count;V<Z;V++)Fn.fromBufferAttribute(v,V),O=Math.max(O,T.distanceToSquared(Fn));if(x)for(let V=0,Z=x.length;V<Z;V++){const q=x[V],e2=this.morphTargetsRelative;for(let n2=0,s2=q.count;n2<s2;n2++)Fn.fromBufferAttribute(q,n2),e2&&(Zs.fromBufferAttribute(v,n2),Fn.add(Zs)),O=Math.max(O,T.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(O),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const v=this.index,x=this.attributes;if(v===null||x.position===void 0||x.normal===void 0||x.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const T=x.position,O=x.normal,V=x.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new so(new Float32Array(4*T.count),4));const Z=this.getAttribute("tangent"),q=[],e2=[];for(let te=0;te<T.count;te++)q[te]=new V2,e2[te]=new V2;const n2=new V2,s2=new V2,h=new V2,p2=new It,m2=new It,B2=new It,C2=new V2,l2=new V2;function o2(te,x2,y2){n2.fromBufferAttribute(T,te),s2.fromBufferAttribute(T,x2),h.fromBufferAttribute(T,y2),p2.fromBufferAttribute(V,te),m2.fromBufferAttribute(V,x2),B2.fromBufferAttribute(V,y2),s2.sub(n2),h.sub(n2),m2.sub(p2),B2.sub(p2);const Q2=1/(m2.x*B2.y-B2.x*m2.y);isFinite(Q2)&&(C2.copy(s2).multiplyScalar(B2.y).addScaledVector(h,-m2.y).multiplyScalar(Q2),l2.copy(h).multiplyScalar(m2.x).addScaledVector(s2,-B2.x).multiplyScalar(Q2),q[te].add(C2),q[x2].add(C2),q[y2].add(C2),e2[te].add(l2),e2[x2].add(l2),e2[y2].add(l2))}let P2=this.groups;P2.length===0&&(P2=[{start:0,count:v.count}]);for(let te=0,x2=P2.length;te<x2;++te){const y2=P2[te],Q2=y2.start,ue=y2.count;for(let N2=Q2,he=Q2+ue;N2<he;N2+=3)o2(v.getX(N2+0),v.getX(N2+1),v.getX(N2+2))}const g2=new V2,F2=new V2,X2=new V2,j2=new V2;function b2(te){X2.fromBufferAttribute(O,te),j2.copy(X2);const x2=q[te];g2.copy(x2),g2.sub(X2.multiplyScalar(X2.dot(x2))).normalize(),F2.crossVectors(j2,x2);const Q2=F2.dot(e2[te])<0?-1:1;Z.setXYZW(te,g2.x,g2.y,g2.z,Q2)}for(let te=0,x2=P2.length;te<x2;++te){const y2=P2[te],Q2=y2.start,ue=y2.count;for(let N2=Q2,he=Q2+ue;N2<he;N2+=3)b2(v.getX(N2+0)),b2(v.getX(N2+1)),b2(v.getX(N2+2))}}computeVertexNormals(){const v=this.index,x=this.getAttribute("position");if(x!==void 0){let T=this.getAttribute("normal");if(T===void 0)T=new so(new Float32Array(x.count*3),3),this.setAttribute("normal",T);else for(let p2=0,m2=T.count;p2<m2;p2++)T.setXYZ(p2,0,0,0);const O=new V2,V=new V2,Z=new V2,q=new V2,e2=new V2,n2=new V2,s2=new V2,h=new V2;if(v)for(let p2=0,m2=v.count;p2<m2;p2+=3){const B2=v.getX(p2+0),C2=v.getX(p2+1),l2=v.getX(p2+2);O.fromBufferAttribute(x,B2),V.fromBufferAttribute(x,C2),Z.fromBufferAttribute(x,l2),s2.subVectors(Z,V),h.subVectors(O,V),s2.cross(h),q.fromBufferAttribute(T,B2),e2.fromBufferAttribute(T,C2),n2.fromBufferAttribute(T,l2),q.add(s2),e2.add(s2),n2.add(s2),T.setXYZ(B2,q.x,q.y,q.z),T.setXYZ(C2,e2.x,e2.y,e2.z),T.setXYZ(l2,n2.x,n2.y,n2.z)}else for(let p2=0,m2=x.count;p2<m2;p2+=3)O.fromBufferAttribute(x,p2+0),V.fromBufferAttribute(x,p2+1),Z.fromBufferAttribute(x,p2+2),s2.subVectors(Z,V),h.subVectors(O,V),s2.cross(h),T.setXYZ(p2+0,s2.x,s2.y,s2.z),T.setXYZ(p2+1,s2.x,s2.y,s2.z),T.setXYZ(p2+2,s2.x,s2.y,s2.z);this.normalizeNormals(),T.needsUpdate=!0}}normalizeNormals(){const v=this.attributes.normal;for(let x=0,T=v.count;x<T;x++)Fn.fromBufferAttribute(v,x),Fn.normalize(),v.setXYZ(x,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function v(q,e2){const n2=q.array,s2=q.itemSize,h=q.normalized,p2=new n2.constructor(e2.length*s2);let m2=0,B2=0;for(let C2=0,l2=e2.length;C2<l2;C2++){q.isInterleavedBufferAttribute?m2=e2[C2]*q.data.stride+q.offset:m2=e2[C2]*s2;for(let o2=0;o2<s2;o2++)p2[B2++]=n2[m2++]}return new so(p2,s2,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const x=new E1,T=this.index.array,O=this.attributes;for(const q in O){const e2=O[q],n2=v(e2,T);x.setAttribute(q,n2)}const V=this.morphAttributes;for(const q in V){const e2=[],n2=V[q];for(let s2=0,h=n2.length;s2<h;s2++){const p2=n2[s2],m2=v(p2,T);e2.push(m2)}x.morphAttributes[q]=e2}x.morphTargetsRelative=this.morphTargetsRelative;const Z=this.groups;for(let q=0,e2=Z.length;q<e2;q++){const n2=Z[q];x.addGroup(n2.start,n2.count,n2.materialIndex)}return x}toJSON(){const v={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(v.uuid=this.uuid,v.type=this.type,this.name!==""&&(v.name=this.name),Object.keys(this.userData).length>0&&(v.userData=this.userData),this.parameters!==void 0){const e2=this.parameters;for(const n2 in e2)e2[n2]!==void 0&&(v[n2]=e2[n2]);return v}v.data={attributes:{}};const x=this.index;x!==null&&(v.data.index={type:x.array.constructor.name,array:Array.prototype.slice.call(x.array)});const T=this.attributes;for(const e2 in T){const n2=T[e2];v.data.attributes[e2]=n2.toJSON(v.data)}const O={};let V=!1;for(const e2 in this.morphAttributes){const n2=this.morphAttributes[e2],s2=[];for(let h=0,p2=n2.length;h<p2;h++){const m2=n2[h];s2.push(m2.toJSON(v.data))}s2.length>0&&(O[e2]=s2,V=!0)}V&&(v.data.morphAttributes=O,v.data.morphTargetsRelative=this.morphTargetsRelative);const Z=this.groups;Z.length>0&&(v.data.groups=JSON.parse(JSON.stringify(Z)));const q=this.boundingSphere;return q!==null&&(v.data.boundingSphere={center:q.center.toArray(),radius:q.radius}),v}clone(){return new this.constructor().copy(this)}copy(v){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const x={};this.name=v.name;const T=v.index;T!==null&&this.setIndex(T.clone(x));const O=v.attributes;for(const n2 in O){const s2=O[n2];this.setAttribute(n2,s2.clone(x))}const V=v.morphAttributes;for(const n2 in V){const s2=[],h=V[n2];for(let p2=0,m2=h.length;p2<m2;p2++)s2.push(h[p2].clone(x));this.morphAttributes[n2]=s2}this.morphTargetsRelative=v.morphTargetsRelative;const Z=v.groups;for(let n2=0,s2=Z.length;n2<s2;n2++){const h=Z[n2];this.addGroup(h.start,h.count,h.materialIndex)}const q=v.boundingBox;q!==null&&(this.boundingBox=q.clone());const e2=v.boundingSphere;return e2!==null&&(this.boundingSphere=e2.clone()),this.drawRange.start=v.drawRange.start,this.drawRange.count=v.drawRange.count,this.userData=v.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uG=new un,Z1=new cW,V8=new x6,fG=new V2,Js=new V2,Ks=new V2,$s=new V2,J_=new V2,z8=new V2,Q8=new It,X8=new It,Y8=new It,lG=new V2,pG=new V2,_G=new V2,q8=new V2,Z8=new V2;class jr extends Hn{constructor(v=new E1,x=new AW){super(),this.isMesh=!0,this.type="Mesh",this.geometry=v,this.material=x,this.updateMorphTargets()}copy(v,x){return super.copy(v,x),v.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=v.morphTargetInfluences.slice()),v.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},v.morphTargetDictionary)),this.material=Array.isArray(v.material)?v.material.slice():v.material,this.geometry=v.geometry,this}updateMorphTargets(){const x=this.geometry.morphAttributes,T=Object.keys(x);if(T.length>0){const O=x[T[0]];if(O!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let V=0,Z=O.length;V<Z;V++){const q=O[V].name||String(V);this.morphTargetInfluences.push(0),this.morphTargetDictionary[q]=V}}}}getVertexPosition(v,x){const T=this.geometry,O=T.attributes.position,V=T.morphAttributes.position,Z=T.morphTargetsRelative;x.fromBufferAttribute(O,v);const q=this.morphTargetInfluences;if(V&&q){z8.set(0,0,0);for(let e2=0,n2=V.length;e2<n2;e2++){const s2=q[e2],h=V[e2];s2!==0&&(J_.fromBufferAttribute(h,v),Z?z8.addScaledVector(J_,s2):z8.addScaledVector(J_.sub(x),s2))}x.add(z8)}return x}raycast(v,x){const T=this.geometry,O=this.material,V=this.matrixWorld;O!==void 0&&(T.boundingSphere===null&&T.computeBoundingSphere(),V8.copy(T.boundingSphere),V8.applyMatrix4(V),Z1.copy(v.ray).recast(v.near),!(V8.containsPoint(Z1.origin)===!1&&(Z1.intersectSphere(V8,fG)===null||Z1.origin.distanceToSquared(fG)>(v.far-v.near)**2))&&(uG.copy(V).invert(),Z1.copy(v.ray).applyMatrix4(uG),!(T.boundingBox!==null&&Z1.intersectsBox(T.boundingBox)===!1)&&this._computeIntersections(v,x,Z1)))}_computeIntersections(v,x,T){let O;const V=this.geometry,Z=this.material,q=V.index,e2=V.attributes.position,n2=V.attributes.uv,s2=V.attributes.uv1,h=V.attributes.normal,p2=V.groups,m2=V.drawRange;if(q!==null)if(Array.isArray(Z))for(let B2=0,C2=p2.length;B2<C2;B2++){const l2=p2[B2],o2=Z[l2.materialIndex],P2=Math.max(l2.start,m2.start),g2=Math.min(q.count,Math.min(l2.start+l2.count,m2.start+m2.count));for(let F2=P2,X2=g2;F2<X2;F2+=3){const j2=q.getX(F2),b2=q.getX(F2+1),te=q.getX(F2+2);O=J8(this,o2,v,T,n2,s2,h,j2,b2,te),O&&(O.faceIndex=Math.floor(F2/3),O.face.materialIndex=l2.materialIndex,x.push(O))}}else{const B2=Math.max(0,m2.start),C2=Math.min(q.count,m2.start+m2.count);for(let l2=B2,o2=C2;l2<o2;l2+=3){const P2=q.getX(l2),g2=q.getX(l2+1),F2=q.getX(l2+2);O=J8(this,Z,v,T,n2,s2,h,P2,g2,F2),O&&(O.faceIndex=Math.floor(l2/3),x.push(O))}}else if(e2!==void 0)if(Array.isArray(Z))for(let B2=0,C2=p2.length;B2<C2;B2++){const l2=p2[B2],o2=Z[l2.materialIndex],P2=Math.max(l2.start,m2.start),g2=Math.min(e2.count,Math.min(l2.start+l2.count,m2.start+m2.count));for(let F2=P2,X2=g2;F2<X2;F2+=3){const j2=F2,b2=F2+1,te=F2+2;O=J8(this,o2,v,T,n2,s2,h,j2,b2,te),O&&(O.faceIndex=Math.floor(F2/3),O.face.materialIndex=l2.materialIndex,x.push(O))}}else{const B2=Math.max(0,m2.start),C2=Math.min(e2.count,m2.start+m2.count);for(let l2=B2,o2=C2;l2<o2;l2+=3){const P2=l2,g2=l2+1,F2=l2+2;O=J8(this,Z,v,T,n2,s2,h,P2,g2,F2),O&&(O.faceIndex=Math.floor(l2/3),x.push(O))}}}}function zu2(F,v,x,T,O,V,Z,q){let e2;if(v.side===bi?e2=T.intersectTriangle(Z,V,O,!0,q):e2=T.intersectTriangle(O,V,Z,v.side===C1,q),e2===null)return null;Z8.copy(q),Z8.applyMatrix4(F.matrixWorld);const n2=x.ray.origin.distanceTo(Z8);return n2<x.near||n2>x.far?null:{distance:n2,point:Z8.clone(),object:F}}function J8(F,v,x,T,O,V,Z,q,e2,n2){F.getVertexPosition(q,Js),F.getVertexPosition(e2,Ks),F.getVertexPosition(n2,$s);const s2=zu2(F,v,x,T,Js,Ks,$s,q8);if(s2){O&&(Q8.fromBufferAttribute(O,q),X8.fromBufferAttribute(O,e2),Y8.fromBufferAttribute(O,n2),s2.uv=ro.getInterpolation(q8,Js,Ks,$s,Q8,X8,Y8,new It)),V&&(Q8.fromBufferAttribute(V,q),X8.fromBufferAttribute(V,e2),Y8.fromBufferAttribute(V,n2),s2.uv1=ro.getInterpolation(q8,Js,Ks,$s,Q8,X8,Y8,new It)),Z&&(lG.fromBufferAttribute(Z,q),pG.fromBufferAttribute(Z,e2),_G.fromBufferAttribute(Z,n2),s2.normal=ro.getInterpolation(q8,Js,Ks,$s,lG,pG,_G,new V2),s2.normal.dot(T.direction)>0&&s2.normal.multiplyScalar(-1));const h={a:q,b:e2,c:n2,normal:new V2,materialIndex:0};ro.getNormal(Js,Ks,$s,h.normal),s2.face=h}return s2}class d4 extends E1{constructor(v=1,x=1,T=1,O=1,V=1,Z=1){super(),this.type="BoxGeometry",this.parameters={width:v,height:x,depth:T,widthSegments:O,heightSegments:V,depthSegments:Z};const q=this;O=Math.floor(O),V=Math.floor(V),Z=Math.floor(Z);const e2=[],n2=[],s2=[],h=[];let p2=0,m2=0;B2("z","y","x",-1,-1,T,x,v,Z,V,0),B2("z","y","x",1,-1,T,x,-v,Z,V,1),B2("x","z","y",1,1,v,T,x,O,Z,2),B2("x","z","y",1,-1,v,T,-x,O,Z,3),B2("x","y","z",1,-1,v,x,T,O,V,4),B2("x","y","z",-1,-1,v,x,-T,O,V,5),this.setIndex(e2),this.setAttribute("position",new uo(n2,3)),this.setAttribute("normal",new uo(s2,3)),this.setAttribute("uv",new uo(h,2));function B2(C2,l2,o2,P2,g2,F2,X2,j2,b2,te,x2){const y2=F2/b2,Q2=X2/te,ue=F2/2,N2=X2/2,he=j2/2,ce=b2+1,xe=te+1;let Me=0,ne=0;const Te=new V2;for(let Ee=0;Ee<xe;Ee++){const st=Ee*Q2-N2;for(let Wt=0;Wt<ce;Wt++){const s0=Wt*y2-ue;Te[C2]=s0*P2,Te[l2]=st*g2,Te[o2]=he,n2.push(Te.x,Te.y,Te.z),Te[C2]=0,Te[l2]=0,Te[o2]=j2>0?1:-1,s2.push(Te.x,Te.y,Te.z),h.push(Wt/b2),h.push(1-Ee/te),Me+=1}}for(let Ee=0;Ee<te;Ee++)for(let st=0;st<b2;st++){const Wt=p2+st+ce*Ee,s0=p2+st+ce*(Ee+1),re=p2+(st+1)+ce*(Ee+1),Re=p2+(st+1)+ce*Ee;e2.push(Wt,s0,Re),e2.push(s0,re,Re),ne+=6}q.addGroup(m2,ne,x2),m2+=ne,p2+=Me}}copy(v){return super.copy(v),this.parameters=Object.assign({},v.parameters),this}static fromJSON(v){return new d4(v.width,v.height,v.depth,v.widthSegments,v.heightSegments,v.depthSegments)}}function h4(F){const v={};for(const x in F){v[x]={};for(const T in F[x]){const O=F[x][T];O&&(O.isColor||O.isMatrix3||O.isMatrix4||O.isVector2||O.isVector3||O.isVector4||O.isTexture||O.isQuaternion)?O.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),v[x][T]=null):v[x][T]=O.clone():Array.isArray(O)?v[x][T]=O.slice():v[x][T]=O}}return v}function di(F){const v={};for(let x=0;x<F.length;x++){const T=h4(F[x]);for(const O in T)v[O]=T[O]}return v}function Qu2(F){const v=[];for(let x=0;x<F.length;x++)v.push(F[x].clone());return v}function yW(F){const v=F.getRenderTarget();return v===null?F.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:D0.workingColorSpace}const Xu2={clone:h4,merge:di};var Yu2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class x1 extends bu{constructor(v){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu2,this.fragmentShader=qu2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,v!==void 0&&this.setValues(v)}copy(v){return super.copy(v),this.fragmentShader=v.fragmentShader,this.vertexShader=v.vertexShader,this.uniforms=h4(v.uniforms),this.uniformsGroups=Qu2(v.uniformsGroups),this.defines=Object.assign({},v.defines),this.wireframe=v.wireframe,this.wireframeLinewidth=v.wireframeLinewidth,this.fog=v.fog,this.lights=v.lights,this.clipping=v.clipping,this.extensions=Object.assign({},v.extensions),this.glslVersion=v.glslVersion,this}toJSON(v){const x=super.toJSON(v);x.glslVersion=this.glslVersion,x.uniforms={};for(const O in this.uniforms){const Z=this.uniforms[O].value;Z&&Z.isTexture?x.uniforms[O]={type:"t",value:Z.toJSON(v).uuid}:Z&&Z.isColor?x.uniforms[O]={type:"c",value:Z.getHex()}:Z&&Z.isVector2?x.uniforms[O]={type:"v2",value:Z.toArray()}:Z&&Z.isVector3?x.uniforms[O]={type:"v3",value:Z.toArray()}:Z&&Z.isVector4?x.uniforms[O]={type:"v4",value:Z.toArray()}:Z&&Z.isMatrix3?x.uniforms[O]={type:"m3",value:Z.toArray()}:Z&&Z.isMatrix4?x.uniforms[O]={type:"m4",value:Z.toArray()}:x.uniforms[O]={value:Z}}Object.keys(this.defines).length>0&&(x.defines=this.defines),x.vertexShader=this.vertexShader,x.fragmentShader=this.fragmentShader,x.lights=this.lights,x.clipping=this.clipping;const T={};for(const O in this.extensions)this.extensions[O]===!0&&(T[O]=!0);return Object.keys(T).length>0&&(x.extensions=T),x}}class gW extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Wo}copy(v,x){return super.copy(v,x),this.matrixWorldInverse.copy(v.matrixWorldInverse),this.projectionMatrix.copy(v.projectionMatrix),this.projectionMatrixInverse.copy(v.projectionMatrixInverse),this.coordinateSystem=v.coordinateSystem,this}getWorldDirection(v){return super.getWorldDirection(v).negate()}updateMatrixWorld(v){super.updateMatrixWorld(v),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(v,x){super.updateWorldMatrix(v,x),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const d1=new V2,cG=new It,mG=new It;class ar extends gW{constructor(v=50,x=1,T=.1,O=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=v,this.zoom=1,this.near=T,this.far=O,this.focus=10,this.aspect=x,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(v,x){return super.copy(v,x),this.fov=v.fov,this.zoom=v.zoom,this.near=v.near,this.far=v.far,this.focus=v.focus,this.aspect=v.aspect,this.view=v.view===null?null:Object.assign({},v.view),this.filmGauge=v.filmGauge,this.filmOffset=v.filmOffset,this}setFocalLength(v){const x=.5*this.getFilmHeight()/v;this.fov=Du*2*Math.atan(x),this.updateProjectionMatrix()}getFocalLength(){const v=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/v}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(v,x,T){d1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),x.set(d1.x,d1.y).multiplyScalar(-v/d1.z),d1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),T.set(d1.x,d1.y).multiplyScalar(-v/d1.z)}getViewSize(v,x){return this.getViewBounds(v,cG,mG),x.subVectors(mG,cG)}setViewOffset(v,x,T,O,V,Z){this.aspect=v/x,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=v,this.view.fullHeight=x,this.view.offsetX=T,this.view.offsetY=O,this.view.width=V,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const v=this.near;let x=v*Math.tan(Mu*.5*this.fov)/this.zoom,T=2*x,O=this.aspect*T,V=-.5*O;const Z=this.view;if(this.view!==null&&this.view.enabled){const e2=Z.fullWidth,n2=Z.fullHeight;V+=Z.offsetX*O/e2,x-=Z.offsetY*T/n2,O*=Z.width/e2,T*=Z.height/n2}const q=this.filmOffset;q!==0&&(V+=v*q/this.getFilmWidth()),this.projectionMatrix.makePerspective(V,V+O,x,x-T,v,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(v){const x=super.toJSON(v);return x.object.fov=this.fov,x.object.zoom=this.zoom,x.object.near=this.near,x.object.far=this.far,x.object.focus=this.focus,x.object.aspect=this.aspect,this.view!==null&&(x.object.view=Object.assign({},this.view)),x.object.filmGauge=this.filmGauge,x.object.filmOffset=this.filmOffset,x}}const e4=-90,t4=1;class Zu2 extends Hn{constructor(v,x,T){super(),this.type="CubeCamera",this.renderTarget=T,this.coordinateSystem=null,this.activeMipmapLevel=0;const O=new ar(e4,t4,v,x);O.layers=this.layers,this.add(O);const V=new ar(e4,t4,v,x);V.layers=this.layers,this.add(V);const Z=new ar(e4,t4,v,x);Z.layers=this.layers,this.add(Z);const q=new ar(e4,t4,v,x);q.layers=this.layers,this.add(q);const e2=new ar(e4,t4,v,x);e2.layers=this.layers,this.add(e2);const n2=new ar(e4,t4,v,x);n2.layers=this.layers,this.add(n2)}updateCoordinateSystem(){const v=this.coordinateSystem,x=this.children.concat(),[T,O,V,Z,q,e2]=x;for(const n2 of x)this.remove(n2);if(v===Wo)T.up.set(0,1,0),T.lookAt(1,0,0),O.up.set(0,1,0),O.lookAt(-1,0,0),V.up.set(0,0,-1),V.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),q.up.set(0,1,0),q.lookAt(0,0,1),e2.up.set(0,1,0),e2.lookAt(0,0,-1);else if(v===fl)T.up.set(0,-1,0),T.lookAt(-1,0,0),O.up.set(0,-1,0),O.lookAt(1,0,0),V.up.set(0,0,1),V.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),q.up.set(0,-1,0),q.lookAt(0,0,1),e2.up.set(0,-1,0),e2.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+v);for(const n2 of x)this.add(n2),n2.updateMatrixWorld()}update(v,x){this.parent===null&&this.updateMatrixWorld();const{renderTarget:T,activeMipmapLevel:O}=this;this.coordinateSystem!==v.coordinateSystem&&(this.coordinateSystem=v.coordinateSystem,this.updateCoordinateSystem());const[V,Z,q,e2,n2,s2]=this.children,h=v.getRenderTarget(),p2=v.getActiveCubeFace(),m2=v.getActiveMipmapLevel(),B2=v.xr.enabled;v.xr.enabled=!1;const C2=T.texture.generateMipmaps;T.texture.generateMipmaps=!1,v.setRenderTarget(T,0,O),v.render(x,V),v.setRenderTarget(T,1,O),v.render(x,Z),v.setRenderTarget(T,2,O),v.render(x,q),v.setRenderTarget(T,3,O),v.render(x,e2),v.setRenderTarget(T,4,O),v.render(x,n2),T.texture.generateMipmaps=C2,v.setRenderTarget(T,5,O),v.render(x,s2),v.setRenderTarget(h,p2,m2),v.xr.enabled=B2,T.texture.needsPMREMUpdate=!0}}class vW extends Fi{constructor(v,x,T,O,V,Z,q,e2,n2,s2){v=v!==void 0?v:[],x=x!==void 0?x:_4,super(v,x,T,O,V,Z,q,e2,n2,s2),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(v){this.image=v}}class Ju2 extends os{constructor(v=1,x={}){super(v,v,x),this.isWebGLCubeRenderTarget=!0;const T={width:v,height:v,depth:1},O=[T,T,T,T,T,T];this.texture=new vW(O,x.mapping,x.wrapS,x.wrapT,x.magFilter,x.minFilter,x.format,x.type,x.anisotropy,x.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=x.generateMipmaps!==void 0?x.generateMipmaps:!1,this.texture.minFilter=x.minFilter!==void 0?x.minFilter:Lr}fromEquirectangularTexture(v,x){this.texture.type=x.type,this.texture.colorSpace=x.colorSpace,this.texture.generateMipmaps=x.generateMipmaps,this.texture.minFilter=x.minFilter,this.texture.magFilter=x.magFilter;const T={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},O=new d4(5,5,5),V=new x1({name:"CubemapFromEquirect",uniforms:h4(T.uniforms),vertexShader:T.vertexShader,fragmentShader:T.fragmentShader,side:bi,blending:k1});V.uniforms.tEquirect.value=x;const Z=new jr(O,V),q=x.minFilter;return x.minFilter===rs&&(x.minFilter=Lr),new Zu2(1,10,this).update(v,Z),x.minFilter=q,Z.geometry.dispose(),Z.material.dispose(),this}clear(v,x,T,O){const V=v.getRenderTarget();for(let Z=0;Z<6;Z++)v.setRenderTarget(this,Z),v.clear(x,T,O);v.setRenderTarget(V)}}const K_=new V2,Ku2=new V2,$u2=new Zt;class a1{constructor(v=new V2(1,0,0),x=0){this.isPlane=!0,this.normal=v,this.constant=x}set(v,x){return this.normal.copy(v),this.constant=x,this}setComponents(v,x,T,O){return this.normal.set(v,x,T),this.constant=O,this}setFromNormalAndCoplanarPoint(v,x){return this.normal.copy(v),this.constant=-x.dot(this.normal),this}setFromCoplanarPoints(v,x,T){const O=K_.subVectors(T,x).cross(Ku2.subVectors(v,x)).normalize();return this.setFromNormalAndCoplanarPoint(O,v),this}copy(v){return this.normal.copy(v.normal),this.constant=v.constant,this}normalize(){const v=1/this.normal.length();return this.normal.multiplyScalar(v),this.constant*=v,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(v){return this.normal.dot(v)+this.constant}distanceToSphere(v){return this.distanceToPoint(v.center)-v.radius}projectPoint(v,x){return x.copy(v).addScaledVector(this.normal,-this.distanceToPoint(v))}intersectLine(v,x){const T=v.delta(K_),O=this.normal.dot(T);if(O===0)return this.distanceToPoint(v.start)===0?x.copy(v.start):null;const V=-(v.start.dot(this.normal)+this.constant)/O;return V<0||V>1?null:x.copy(v.start).addScaledVector(T,V)}intersectsLine(v){const x=this.distanceToPoint(v.start),T=this.distanceToPoint(v.end);return x<0&&T>0||T<0&&x>0}intersectsBox(v){return v.intersectsPlane(this)}intersectsSphere(v){return v.intersectsPlane(this)}coplanarPoint(v){return v.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(v,x){const T=x||$u2.getNormalMatrix(v),O=this.coplanarPoint(K_).applyMatrix4(v),V=this.normal.applyMatrix3(T).normalize();return this.constant=-O.dot(V),this}translate(v){return this.constant-=v.dot(this.normal),this}equals(v){return v.normal.equals(this.normal)&&v.constant===this.constant}clone(){return new this.constructor().copy(this)}}const J1=new x6,K8=new V2;class M6{constructor(v=new a1,x=new a1,T=new a1,O=new a1,V=new a1,Z=new a1){this.planes=[v,x,T,O,V,Z]}set(v,x,T,O,V,Z){const q=this.planes;return q[0].copy(v),q[1].copy(x),q[2].copy(T),q[3].copy(O),q[4].copy(V),q[5].copy(Z),this}copy(v){const x=this.planes;for(let T=0;T<6;T++)x[T].copy(v.planes[T]);return this}setFromProjectionMatrix(v,x=Wo){const T=this.planes,O=v.elements,V=O[0],Z=O[1],q=O[2],e2=O[3],n2=O[4],s2=O[5],h=O[6],p2=O[7],m2=O[8],B2=O[9],C2=O[10],l2=O[11],o2=O[12],P2=O[13],g2=O[14],F2=O[15];if(T[0].setComponents(e2-V,p2-n2,l2-m2,F2-o2).normalize(),T[1].setComponents(e2+V,p2+n2,l2+m2,F2+o2).normalize(),T[2].setComponents(e2+Z,p2+s2,l2+B2,F2+P2).normalize(),T[3].setComponents(e2-Z,p2-s2,l2-B2,F2-P2).normalize(),T[4].setComponents(e2-q,p2-h,l2-C2,F2-g2).normalize(),x===Wo)T[5].setComponents(e2+q,p2+h,l2+C2,F2+g2).normalize();else if(x===fl)T[5].setComponents(q,h,C2,g2).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+x);return this}intersectsObject(v){if(v.boundingSphere!==void 0)v.boundingSphere===null&&v.computeBoundingSphere(),J1.copy(v.boundingSphere).applyMatrix4(v.matrixWorld);else{const x=v.geometry;x.boundingSphere===null&&x.computeBoundingSphere(),J1.copy(x.boundingSphere).applyMatrix4(v.matrixWorld)}return this.intersectsSphere(J1)}intersectsSprite(v){return J1.center.set(0,0,0),J1.radius=.7071067811865476,J1.applyMatrix4(v.matrixWorld),this.intersectsSphere(J1)}intersectsSphere(v){const x=this.planes,T=v.center,O=-v.radius;for(let V=0;V<6;V++)if(x[V].distanceToPoint(T)<O)return!1;return!0}intersectsBox(v){const x=this.planes;for(let T=0;T<6;T++){const O=x[T];if(K8.x=O.normal.x>0?v.max.x:v.min.x,K8.y=O.normal.y>0?v.max.y:v.min.y,K8.z=O.normal.z>0?v.max.z:v.min.z,O.distanceToPoint(K8)<0)return!1}return!0}containsPoint(v){const x=this.planes;for(let T=0;T<6;T++)if(x[T].distanceToPoint(v)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kW(){let F=null,v=!1,x=null,T=null;function O(V,Z){x(V,Z),T=F.requestAnimationFrame(O)}return{start:function(){v!==!0&&x!==null&&(T=F.requestAnimationFrame(O),v=!0)},stop:function(){F.cancelAnimationFrame(T),v=!1},setAnimationLoop:function(V){x=V},setContext:function(V){F=V}}}function ef2(F){const v=new WeakMap;function x(q,e2){const n2=q.array,s2=q.usage,h=n2.byteLength,p2=F.createBuffer();F.bindBuffer(e2,p2),F.bufferData(e2,n2,s2),q.onUploadCallback();let m2;if(n2 instanceof Float32Array)m2=F.FLOAT;else if(n2 instanceof Uint16Array)q.isFloat16BufferAttribute?m2=F.HALF_FLOAT:m2=F.UNSIGNED_SHORT;else if(n2 instanceof Int16Array)m2=F.SHORT;else if(n2 instanceof Uint32Array)m2=F.UNSIGNED_INT;else if(n2 instanceof Int32Array)m2=F.INT;else if(n2 instanceof Int8Array)m2=F.BYTE;else if(n2 instanceof Uint8Array)m2=F.UNSIGNED_BYTE;else if(n2 instanceof Uint8ClampedArray)m2=F.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n2);return{buffer:p2,type:m2,bytesPerElement:n2.BYTES_PER_ELEMENT,version:q.version,size:h}}function T(q,e2,n2){const s2=e2.array,h=e2._updateRange,p2=e2.updateRanges;if(F.bindBuffer(n2,q),h.count===-1&&p2.length===0&&F.bufferSubData(n2,0,s2),p2.length!==0){for(let m2=0,B2=p2.length;m2<B2;m2++){const C2=p2[m2];F.bufferSubData(n2,C2.start*s2.BYTES_PER_ELEMENT,s2,C2.start,C2.count)}e2.clearUpdateRanges()}h.count!==-1&&(F.bufferSubData(n2,h.offset*s2.BYTES_PER_ELEMENT,s2,h.offset,h.count),h.count=-1),e2.onUploadCallback()}function O(q){return q.isInterleavedBufferAttribute&&(q=q.data),v.get(q)}function V(q){q.isInterleavedBufferAttribute&&(q=q.data);const e2=v.get(q);e2&&(F.deleteBuffer(e2.buffer),v.delete(q))}function Z(q,e2){if(q.isGLBufferAttribute){const s2=v.get(q);(!s2||s2.version<q.version)&&v.set(q,{buffer:q.buffer,type:q.type,bytesPerElement:q.elementSize,version:q.version});return}q.isInterleavedBufferAttribute&&(q=q.data);const n2=v.get(q);if(n2===void 0)v.set(q,x(q,e2));else if(n2.version<q.version){if(n2.size!==q.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");T(n2.buffer,q,e2),n2.version=q.version}}return{get:O,remove:V,update:Z}}class ml extends E1{constructor(v=1,x=1,T=1,O=1){super(),this.type="PlaneGeometry",this.parameters={width:v,height:x,widthSegments:T,heightSegments:O};const V=v/2,Z=x/2,q=Math.floor(T),e2=Math.floor(O),n2=q+1,s2=e2+1,h=v/q,p2=x/e2,m2=[],B2=[],C2=[],l2=[];for(let o2=0;o2<s2;o2++){const P2=o2*p2-Z;for(let g2=0;g2<n2;g2++){const F2=g2*h-V;B2.push(F2,-P2,0),C2.push(0,0,1),l2.push(g2/q),l2.push(1-o2/e2)}}for(let o2=0;o2<e2;o2++)for(let P2=0;P2<q;P2++){const g2=P2+n2*o2,F2=P2+n2*(o2+1),X2=P2+1+n2*(o2+1),j2=P2+1+n2*o2;m2.push(g2,F2,j2),m2.push(F2,X2,j2)}this.setIndex(m2),this.setAttribute("position",new uo(B2,3)),this.setAttribute("normal",new uo(C2,3)),this.setAttribute("uv",new uo(l2,2))}copy(v){return super.copy(v),this.parameters=Object.assign({},v.parameters),this}static fromJSON(v){return new ml(v.width,v.height,v.widthSegments,v.heightSegments)}}var tf2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,if2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_f2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hf2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Af2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,df2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,af2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wf2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mf2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df2="gl_FragColor = linearToOutputTexel( gl_FragColor );",If2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pf2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bf2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vf2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e82=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t82=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n82=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i82=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r82=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o82=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s82=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u82=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f82=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l82=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p82=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_82=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c82=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m82=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h82=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A82=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d82=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a82=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,y82=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g82=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v82=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k82=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B82=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S82=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C82=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w82=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x82=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M82=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E82=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R82=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T82=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D82=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I82=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P82=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b82=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F82=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L82=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j82=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,O82=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N82=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U82=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G82=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W82=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H82=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V82=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z82=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q82=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X82=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y82=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q82=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z82=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,el2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tl2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nl2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,il2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rl2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ol2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sl2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ul2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fl2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ll2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pl2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cl2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ml2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hl2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Al2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dl2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,al2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yl2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gl2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vl2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kl2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bl2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sl2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cl2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wl2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xl2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ml2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,El2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rl2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tl2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dl2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Il2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pl2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bl2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:tf2,alphahash_pars_fragment:nf2,alphamap_fragment:if2,alphamap_pars_fragment:rf2,alphatest_fragment:of2,alphatest_pars_fragment:sf2,aomap_fragment:uf2,aomap_pars_fragment:ff2,batching_pars_vertex:lf2,batching_vertex:pf2,begin_vertex:_f2,beginnormal_vertex:cf2,bsdfs:mf2,iridescence_fragment:hf2,bumpmap_pars_fragment:Af2,clipping_planes_fragment:df2,clipping_planes_pars_fragment:af2,clipping_planes_pars_vertex:yf2,clipping_planes_vertex:gf2,color_fragment:vf2,color_pars_fragment:kf2,color_pars_vertex:Bf2,color_vertex:Sf2,common:Cf2,cube_uv_reflection_fragment:wf2,defaultnormal_vertex:xf2,displacementmap_pars_vertex:Mf2,displacementmap_vertex:Ef2,emissivemap_fragment:Rf2,emissivemap_pars_fragment:Tf2,colorspace_fragment:Df2,colorspace_pars_fragment:If2,envmap_fragment:Pf2,envmap_common_pars_fragment:bf2,envmap_pars_fragment:Ff2,envmap_pars_vertex:Lf2,envmap_physical_pars_fragment:Yf2,envmap_vertex:jf2,fog_vertex:Of2,fog_pars_vertex:Nf2,fog_fragment:Uf2,fog_pars_fragment:Gf2,gradientmap_pars_fragment:Wf2,lightmap_fragment:Hf2,lightmap_pars_fragment:Vf2,lights_lambert_fragment:zf2,lights_lambert_pars_fragment:Qf2,lights_pars_begin:Xf2,lights_toon_fragment:qf2,lights_toon_pars_fragment:Zf2,lights_phong_fragment:Jf2,lights_phong_pars_fragment:Kf2,lights_physical_fragment:$f2,lights_physical_pars_fragment:e82,lights_fragment_begin:t82,lights_fragment_maps:n82,lights_fragment_end:i82,logdepthbuf_fragment:r82,logdepthbuf_pars_fragment:o82,logdepthbuf_pars_vertex:s82,logdepthbuf_vertex:u82,map_fragment:f82,map_pars_fragment:l82,map_particle_fragment:p82,map_particle_pars_fragment:_82,metalnessmap_fragment:c82,metalnessmap_pars_fragment:m82,morphinstance_vertex:h82,morphcolor_vertex:A82,morphnormal_vertex:d82,morphtarget_pars_vertex:a82,morphtarget_vertex:y82,normal_fragment_begin:g82,normal_fragment_maps:v82,normal_pars_fragment:k82,normal_pars_vertex:B82,normal_vertex:S82,normalmap_pars_fragment:C82,clearcoat_normal_fragment_begin:w82,clearcoat_normal_fragment_maps:x82,clearcoat_pars_fragment:M82,iridescence_pars_fragment:E82,opaque_fragment:R82,packing:T82,premultiplied_alpha_fragment:D82,project_vertex:I82,dithering_fragment:P82,dithering_pars_fragment:b82,roughnessmap_fragment:F82,roughnessmap_pars_fragment:L82,shadowmap_pars_fragment:j82,shadowmap_pars_vertex:O82,shadowmap_vertex:N82,shadowmask_pars_fragment:U82,skinbase_vertex:G82,skinning_pars_vertex:W82,skinning_vertex:H82,skinnormal_vertex:V82,specularmap_fragment:z82,specularmap_pars_fragment:Q82,tonemapping_fragment:X82,tonemapping_pars_fragment:Y82,transmission_fragment:q82,transmission_pars_fragment:Z82,uv_pars_fragment:J82,uv_pars_vertex:K82,uv_vertex:$82,worldpos_vertex:el2,background_vert:tl2,background_frag:nl2,backgroundCube_vert:il2,backgroundCube_frag:rl2,cube_vert:ol2,cube_frag:sl2,depth_vert:ul2,depth_frag:fl2,distanceRGBA_vert:ll2,distanceRGBA_frag:pl2,equirect_vert:_l2,equirect_frag:cl2,linedashed_vert:ml2,linedashed_frag:hl2,meshbasic_vert:Al2,meshbasic_frag:dl2,meshlambert_vert:al2,meshlambert_frag:yl2,meshmatcap_vert:gl2,meshmatcap_frag:vl2,meshnormal_vert:kl2,meshnormal_frag:Bl2,meshphong_vert:Sl2,meshphong_frag:Cl2,meshphysical_vert:wl2,meshphysical_frag:xl2,meshtoon_vert:Ml2,meshtoon_frag:El2,points_vert:Rl2,points_frag:Tl2,shadow_vert:Dl2,shadow_frag:Il2,sprite_vert:Pl2,sprite_frag:bl2},We={common:{diffuse:{value:new o0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new o0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new o0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new o0(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},io={basic:{uniforms:di([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:di([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new o0(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:di([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new o0(0)},specular:{value:new o0(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:di([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new o0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:di([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new o0(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:di([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:di([We.points,We.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:di([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:di([We.common,We.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:di([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:di([We.sprite,We.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:di([We.common,We.displacementmap,{referencePosition:{value:new V2},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:di([We.lights,We.fog,{color:{value:new o0(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};io.physical={uniforms:di([io.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new o0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new o0(0)},specularColor:{value:new o0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const $8={r:0,b:0,g:0},K1=new fo,Fl2=new un;function Ll2(F,v,x,T,O,V,Z){const q=new o0(0);let e2=V===!0?0:1,n2,s2,h=null,p2=0,m2=null;function B2(l2,o2){let P2=!1,g2=o2.isScene===!0?o2.background:null;g2&&g2.isTexture&&(g2=(o2.backgroundBlurriness>0?x:v).get(g2)),g2===null?C2(q,e2):g2&&g2.isColor&&(C2(g2,1),P2=!0);const F2=F.xr.getEnvironmentBlendMode();F2==="additive"?T.buffers.color.setClear(0,0,0,1,Z):F2==="alpha-blend"&&T.buffers.color.setClear(0,0,0,0,Z),(F.autoClear||P2)&&F.clear(F.autoClearColor,F.autoClearDepth,F.autoClearStencil),g2&&(g2.isCubeTexture||g2.mapping===_l)?(s2===void 0&&(s2=new jr(new d4(1,1,1),new x1({name:"BackgroundCubeMaterial",uniforms:h4(io.backgroundCube.uniforms),vertexShader:io.backgroundCube.vertexShader,fragmentShader:io.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),s2.geometry.deleteAttribute("normal"),s2.geometry.deleteAttribute("uv"),s2.onBeforeRender=function(X2,j2,b2){this.matrixWorld.copyPosition(b2.matrixWorld)},Object.defineProperty(s2.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),O.update(s2)),K1.copy(o2.backgroundRotation),K1.x*=-1,K1.y*=-1,K1.z*=-1,g2.isCubeTexture&&g2.isRenderTargetTexture===!1&&(K1.y*=-1,K1.z*=-1),s2.material.uniforms.envMap.value=g2,s2.material.uniforms.flipEnvMap.value=g2.isCubeTexture&&g2.isRenderTargetTexture===!1?-1:1,s2.material.uniforms.backgroundBlurriness.value=o2.backgroundBlurriness,s2.material.uniforms.backgroundIntensity.value=o2.backgroundIntensity,s2.material.uniforms.backgroundRotation.value.setFromMatrix4(Fl2.makeRotationFromEuler(K1)),s2.material.toneMapped=D0.getTransfer(g2.colorSpace)!==H0,(h!==g2||p2!==g2.version||m2!==F.toneMapping)&&(s2.material.needsUpdate=!0,h=g2,p2=g2.version,m2=F.toneMapping),s2.layers.enableAll(),l2.unshift(s2,s2.geometry,s2.material,0,0,null)):g2&&g2.isTexture&&(n2===void 0&&(n2=new jr(new ml(2,2),new x1({name:"BackgroundMaterial",uniforms:h4(io.background.uniforms),vertexShader:io.background.vertexShader,fragmentShader:io.background.fragmentShader,side:C1,depthTest:!1,depthWrite:!1,fog:!1})),n2.geometry.deleteAttribute("normal"),Object.defineProperty(n2.material,"map",{get:function(){return this.uniforms.t2D.value}}),O.update(n2)),n2.material.uniforms.t2D.value=g2,n2.material.uniforms.backgroundIntensity.value=o2.backgroundIntensity,n2.material.toneMapped=D0.getTransfer(g2.colorSpace)!==H0,g2.matrixAutoUpdate===!0&&g2.updateMatrix(),n2.material.uniforms.uvTransform.value.copy(g2.matrix),(h!==g2||p2!==g2.version||m2!==F.toneMapping)&&(n2.material.needsUpdate=!0,h=g2,p2=g2.version,m2=F.toneMapping),n2.layers.enableAll(),l2.unshift(n2,n2.geometry,n2.material,0,0,null))}function C2(l2,o2){l2.getRGB($8,yW(F)),T.buffers.color.setClear($8.r,$8.g,$8.b,o2,Z)}return{getClearColor:function(){return q},setClearColor:function(l2,o2=1){q.set(l2),e2=o2,C2(q,e2)},getClearAlpha:function(){return e2},setClearAlpha:function(l2){e2=l2,C2(q,e2)},render:B2}}function jl2(F,v){const x=F.getParameter(F.MAX_VERTEX_ATTRIBS),T={},O=p2(null);let V=O,Z=!1;function q(y2,Q2,ue,N2,he){let ce=!1;const xe=h(N2,ue,Q2);V!==xe&&(V=xe,n2(V.object)),ce=m2(y2,N2,ue,he),ce&&B2(y2,N2,ue,he),he!==null&&v.update(he,F.ELEMENT_ARRAY_BUFFER),(ce||Z)&&(Z=!1,F2(y2,Q2,ue,N2),he!==null&&F.bindBuffer(F.ELEMENT_ARRAY_BUFFER,v.get(he).buffer))}function e2(){return F.createVertexArray()}function n2(y2){return F.bindVertexArray(y2)}function s2(y2){return F.deleteVertexArray(y2)}function h(y2,Q2,ue){const N2=ue.wireframe===!0;let he=T[y2.id];he===void 0&&(he={},T[y2.id]=he);let ce=he[Q2.id];ce===void 0&&(ce={},he[Q2.id]=ce);let xe=ce[N2];return xe===void 0&&(xe=p2(e2()),ce[N2]=xe),xe}function p2(y2){const Q2=[],ue=[],N2=[];for(let he=0;he<x;he++)Q2[he]=0,ue[he]=0,N2[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q2,enabledAttributes:ue,attributeDivisors:N2,object:y2,attributes:{},index:null}}function m2(y2,Q2,ue,N2){const he=V.attributes,ce=Q2.attributes;let xe=0;const Me=ue.getAttributes();for(const ne in Me)if(Me[ne].location>=0){const Ee=he[ne];let st=ce[ne];if(st===void 0&&(ne==="instanceMatrix"&&y2.instanceMatrix&&(st=y2.instanceMatrix),ne==="instanceColor"&&y2.instanceColor&&(st=y2.instanceColor)),Ee===void 0||Ee.attribute!==st||st&&Ee.data!==st.data)return!0;xe++}return V.attributesNum!==xe||V.index!==N2}function B2(y2,Q2,ue,N2){const he={},ce=Q2.attributes;let xe=0;const Me=ue.getAttributes();for(const ne in Me)if(Me[ne].location>=0){let Ee=ce[ne];Ee===void 0&&(ne==="instanceMatrix"&&y2.instanceMatrix&&(Ee=y2.instanceMatrix),ne==="instanceColor"&&y2.instanceColor&&(Ee=y2.instanceColor));const st={};st.attribute=Ee,Ee&&Ee.data&&(st.data=Ee.data),he[ne]=st,xe++}V.attributes=he,V.attributesNum=xe,V.index=N2}function C2(){const y2=V.newAttributes;for(let Q2=0,ue=y2.length;Q2<ue;Q2++)y2[Q2]=0}function l2(y2){o2(y2,0)}function o2(y2,Q2){const ue=V.newAttributes,N2=V.enabledAttributes,he=V.attributeDivisors;ue[y2]=1,N2[y2]===0&&(F.enableVertexAttribArray(y2),N2[y2]=1),he[y2]!==Q2&&(F.vertexAttribDivisor(y2,Q2),he[y2]=Q2)}function P2(){const y2=V.newAttributes,Q2=V.enabledAttributes;for(let ue=0,N2=Q2.length;ue<N2;ue++)Q2[ue]!==y2[ue]&&(F.disableVertexAttribArray(ue),Q2[ue]=0)}function g2(y2,Q2,ue,N2,he,ce,xe){xe===!0?F.vertexAttribIPointer(y2,Q2,ue,he,ce):F.vertexAttribPointer(y2,Q2,ue,N2,he,ce)}function F2(y2,Q2,ue,N2){C2();const he=N2.attributes,ce=ue.getAttributes(),xe=Q2.defaultAttributeValues;for(const Me in ce){const ne=ce[Me];if(ne.location>=0){let Te=he[Me];if(Te===void 0&&(Me==="instanceMatrix"&&y2.instanceMatrix&&(Te=y2.instanceMatrix),Me==="instanceColor"&&y2.instanceColor&&(Te=y2.instanceColor)),Te!==void 0){const Ee=Te.normalized,st=Te.itemSize,Wt=v.get(Te);if(Wt===void 0)continue;const s0=Wt.buffer,re=Wt.type,Re=Wt.bytesPerElement,Ke=re===F.INT||re===F.UNSIGNED_INT||Te.gpuType===eW;if(Te.isInterleavedBufferAttribute){const He=Te.data,Rt=He.stride,Pt=Te.offset;if(He.isInstancedInterleavedBuffer){for(let Mt=0;Mt<ne.locationSize;Mt++)o2(ne.location+Mt,He.meshPerAttribute);y2.isInstancedMesh!==!0&&N2._maxInstanceCount===void 0&&(N2._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Mt=0;Mt<ne.locationSize;Mt++)l2(ne.location+Mt);F.bindBuffer(F.ARRAY_BUFFER,s0);for(let Mt=0;Mt<ne.locationSize;Mt++)g2(ne.location+Mt,st/ne.locationSize,re,Ee,Rt*Re,(Pt+st/ne.locationSize*Mt)*Re,Ke)}else{if(Te.isInstancedBufferAttribute){for(let He=0;He<ne.locationSize;He++)o2(ne.location+He,Te.meshPerAttribute);y2.isInstancedMesh!==!0&&N2._maxInstanceCount===void 0&&(N2._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let He=0;He<ne.locationSize;He++)l2(ne.location+He);F.bindBuffer(F.ARRAY_BUFFER,s0);for(let He=0;He<ne.locationSize;He++)g2(ne.location+He,st/ne.locationSize,re,Ee,st*Re,st/ne.locationSize*He*Re,Ke)}}else if(xe!==void 0){const Ee=xe[Me];if(Ee!==void 0)switch(Ee.length){case 2:F.vertexAttrib2fv(ne.location,Ee);break;case 3:F.vertexAttrib3fv(ne.location,Ee);break;case 4:F.vertexAttrib4fv(ne.location,Ee);break;default:F.vertexAttrib1fv(ne.location,Ee)}}}}P2()}function X2(){te();for(const y2 in T){const Q2=T[y2];for(const ue in Q2){const N2=Q2[ue];for(const he in N2)s2(N2[he].object),delete N2[he];delete Q2[ue]}delete T[y2]}}function j2(y2){if(T[y2.id]===void 0)return;const Q2=T[y2.id];for(const ue in Q2){const N2=Q2[ue];for(const he in N2)s2(N2[he].object),delete N2[he];delete Q2[ue]}delete T[y2.id]}function b2(y2){for(const Q2 in T){const ue=T[Q2];if(ue[y2.id]===void 0)continue;const N2=ue[y2.id];for(const he in N2)s2(N2[he].object),delete N2[he];delete ue[y2.id]}}function te(){x2(),Z=!0,V!==O&&(V=O,n2(V.object))}function x2(){O.geometry=null,O.program=null,O.wireframe=!1}return{setup:q,reset:te,resetDefaultState:x2,dispose:X2,releaseStatesOfGeometry:j2,releaseStatesOfProgram:b2,initAttributes:C2,enableAttribute:l2,disableUnusedAttributes:P2}}function Ol2(F,v,x){let T;function O(e2){T=e2}function V(e2,n2){F.drawArrays(T,e2,n2),x.update(n2,T,1)}function Z(e2,n2,s2){s2!==0&&(F.drawArraysInstanced(T,e2,n2,s2),x.update(n2,T,s2))}function q(e2,n2,s2){if(s2===0)return;const h=v.get("WEBGL_multi_draw");if(h===null)for(let p2=0;p2<s2;p2++)this.render(e2[p2],n2[p2]);else{h.multiDrawArraysWEBGL(T,e2,0,n2,0,s2);let p2=0;for(let m2=0;m2<s2;m2++)p2+=n2[m2];x.update(p2,T,1)}}this.setMode=O,this.render=V,this.renderInstances=Z,this.renderMultiDraw=q}function Nl2(F,v,x){let T;function O(){if(T!==void 0)return T;if(v.has("EXT_texture_filter_anisotropic")===!0){const g2=v.get("EXT_texture_filter_anisotropic");T=F.getParameter(g2.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else T=0;return T}function V(g2){if(g2==="highp"){if(F.getShaderPrecisionFormat(F.VERTEX_SHADER,F.HIGH_FLOAT).precision>0&&F.getShaderPrecisionFormat(F.FRAGMENT_SHADER,F.HIGH_FLOAT).precision>0)return"highp";g2="mediump"}return g2==="mediump"&&F.getShaderPrecisionFormat(F.VERTEX_SHADER,F.MEDIUM_FLOAT).precision>0&&F.getShaderPrecisionFormat(F.FRAGMENT_SHADER,F.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let Z=x.precision!==void 0?x.precision:"highp";const q=V(Z);q!==Z&&(console.warn("THREE.WebGLRenderer:",Z,"not supported, using",q,"instead."),Z=q);const e2=x.logarithmicDepthBuffer===!0,n2=F.getParameter(F.MAX_TEXTURE_IMAGE_UNITS),s2=F.getParameter(F.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=F.getParameter(F.MAX_TEXTURE_SIZE),p2=F.getParameter(F.MAX_CUBE_MAP_TEXTURE_SIZE),m2=F.getParameter(F.MAX_VERTEX_ATTRIBS),B2=F.getParameter(F.MAX_VERTEX_UNIFORM_VECTORS),C2=F.getParameter(F.MAX_VARYING_VECTORS),l2=F.getParameter(F.MAX_FRAGMENT_UNIFORM_VECTORS),o2=s2>0,P2=F.getParameter(F.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:O,getMaxPrecision:V,precision:Z,logarithmicDepthBuffer:e2,maxTextures:n2,maxVertexTextures:s2,maxTextureSize:h,maxCubemapSize:p2,maxAttributes:m2,maxVertexUniforms:B2,maxVaryings:C2,maxFragmentUniforms:l2,vertexTextures:o2,maxSamples:P2}}function Ul2(F){const v=this;let x=null,T=0,O=!1,V=!1;const Z=new a1,q=new Zt,e2={value:null,needsUpdate:!1};this.uniform=e2,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p2){const m2=h.length!==0||p2||T!==0||O;return O=p2,T=h.length,m2},this.beginShadows=function(){V=!0,s2(null)},this.endShadows=function(){V=!1},this.setGlobalState=function(h,p2){x=s2(h,p2,0)},this.setState=function(h,p2,m2){const B2=h.clippingPlanes,C2=h.clipIntersection,l2=h.clipShadows,o2=F.get(h);if(!O||B2===null||B2.length===0||V&&!l2)V?s2(null):n2();else{const P2=V?0:T,g2=P2*4;let F2=o2.clippingState||null;e2.value=F2,F2=s2(B2,p2,g2,m2);for(let X2=0;X2!==g2;++X2)F2[X2]=x[X2];o2.clippingState=F2,this.numIntersection=C2?this.numPlanes:0,this.numPlanes+=P2}};function n2(){e2.value!==x&&(e2.value=x,e2.needsUpdate=T>0),v.numPlanes=T,v.numIntersection=0}function s2(h,p2,m2,B2){const C2=h!==null?h.length:0;let l2=null;if(C2!==0){if(l2=e2.value,B2!==!0||l2===null){const o2=m2+C2*4,P2=p2.matrixWorldInverse;q.getNormalMatrix(P2),(l2===null||l2.length<o2)&&(l2=new Float32Array(o2));for(let g2=0,F2=m2;g2!==C2;++g2,F2+=4)Z.copy(h[g2]).applyMatrix4(P2,q),Z.normal.toArray(l2,F2),l2[F2+3]=Z.constant}e2.value=l2,e2.needsUpdate=!0}return v.numPlanes=C2,v.numIntersection=0,l2}}function Gl2(F){let v=new WeakMap;function x(Z,q){return q===A6?Z.mapping=_4:q===d6&&(Z.mapping=c4),Z}function T(Z){if(Z&&Z.isTexture){const q=Z.mapping;if(q===A6||q===d6)if(v.has(Z)){const e2=v.get(Z).texture;return x(e2,Z.mapping)}else{const e2=Z.image;if(e2&&e2.height>0){const n2=new Ju2(e2.height);return n2.fromEquirectangularTexture(F,Z),v.set(Z,n2),Z.addEventListener("dispose",O),x(n2.texture,Z.mapping)}else return null}}return Z}function O(Z){const q=Z.target;q.removeEventListener("dispose",O);const e2=v.get(q);e2!==void 0&&(v.delete(q),e2.dispose())}function V(){v=new WeakMap}return{get:T,dispose:V}}class BW extends gW{constructor(v=-1,x=1,T=1,O=-1,V=.1,Z=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=v,this.right=x,this.top=T,this.bottom=O,this.near=V,this.far=Z,this.updateProjectionMatrix()}copy(v,x){return super.copy(v,x),this.left=v.left,this.right=v.right,this.top=v.top,this.bottom=v.bottom,this.near=v.near,this.far=v.far,this.zoom=v.zoom,this.view=v.view===null?null:Object.assign({},v.view),this}setViewOffset(v,x,T,O,V,Z){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=v,this.view.fullHeight=x,this.view.offsetX=T,this.view.offsetY=O,this.view.width=V,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const v=(this.right-this.left)/(2*this.zoom),x=(this.top-this.bottom)/(2*this.zoom),T=(this.right+this.left)/2,O=(this.top+this.bottom)/2;let V=T-v,Z=T+v,q=O+x,e2=O-x;if(this.view!==null&&this.view.enabled){const n2=(this.right-this.left)/this.view.fullWidth/this.zoom,s2=(this.top-this.bottom)/this.view.fullHeight/this.zoom;V+=n2*this.view.offsetX,Z=V+n2*this.view.width,q-=s2*this.view.offsetY,e2=q-s2*this.view.height}this.projectionMatrix.makeOrthographic(V,Z,q,e2,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(v){const x=super.toJSON(v);return x.object.zoom=this.zoom,x.object.left=this.left,x.object.right=this.right,x.object.top=this.top,x.object.bottom=this.bottom,x.object.near=this.near,x.object.far=this.far,this.view!==null&&(x.object.view=Object.assign({},this.view)),x}}const o4=4,hG=[.125,.215,.35,.446,.526,.582],ns=20,$_=new BW,AG=new o0;let e6=null,t6=0,n6=0,i6=!1;const es=(1+Math.sqrt(5))/2,n4=1/es,dG=[new V2(1,1,1),new V2(-1,1,1),new V2(1,1,-1),new V2(-1,1,-1),new V2(0,es,n4),new V2(0,es,-n4),new V2(n4,0,es),new V2(-n4,0,es),new V2(es,n4,0),new V2(-es,n4,0)];class aG{constructor(v){this._renderer=v,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(v,x=0,T=.1,O=100){e6=this._renderer.getRenderTarget(),t6=this._renderer.getActiveCubeFace(),n6=this._renderer.getActiveMipmapLevel(),i6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const V=this._allocateTargets();return V.depthBuffer=!0,this._sceneToCubeUV(v,T,O,V),x>0&&this._blur(V,0,0,x),this._applyPMREM(V),this._cleanup(V),V}fromEquirectangular(v,x=null){return this._fromTexture(v,x)}fromCubemap(v,x=null){return this._fromTexture(v,x)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vG(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gG(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(v){this._lodMax=Math.floor(Math.log2(v)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let v=0;v<this._lodPlanes.length;v++)this._lodPlanes[v].dispose()}_cleanup(v){this._renderer.setRenderTarget(e6,t6,n6),this._renderer.xr.enabled=i6,v.scissorTest=!1,el(v,0,0,v.width,v.height)}_fromTexture(v,x){v.mapping===_4||v.mapping===c4?this._setSize(v.image.length===0?16:v.image[0].width||v.image[0].image.width):this._setSize(v.image.width/4),e6=this._renderer.getRenderTarget(),t6=this._renderer.getActiveCubeFace(),n6=this._renderer.getActiveMipmapLevel(),i6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const T=x||this._allocateTargets();return this._textureToCubeUV(v,T),this._applyPMREM(T),this._cleanup(T),T}_allocateTargets(){const v=3*Math.max(this._cubeSize,112),x=4*this._cubeSize,T={magFilter:Lr,minFilter:Lr,generateMipmaps:!1,type:rl,format:oo,colorSpace:M1,depthBuffer:!1},O=yG(v,x,T);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==v||this._pingPongRenderTarget.height!==x){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yG(v,x,T);const{_lodMax:V}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wl2(V)),this._blurMaterial=Hl2(V,v,x)}return O}_compileMaterial(v){const x=new jr(this._lodPlanes[0],v);this._renderer.compile(x,$_)}_sceneToCubeUV(v,x,T,O){const q=new ar(90,1,x,T),e2=[1,-1,1,1,1,1],n2=[1,1,1,-1,-1,-1],s2=this._renderer,h=s2.autoClear,p2=s2.toneMapping;s2.getClearColor(AG),s2.toneMapping=B1,s2.autoClear=!1;const m2=new AW({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),B2=new jr(new d4,m2);let C2=!1;const l2=v.background;l2?l2.isColor&&(m2.color.copy(l2),v.background=null,C2=!0):(m2.color.copy(AG),C2=!0);for(let o2=0;o2<6;o2++){const P2=o2%3;P2===0?(q.up.set(0,e2[o2],0),q.lookAt(n2[o2],0,0)):P2===1?(q.up.set(0,0,e2[o2]),q.lookAt(0,n2[o2],0)):(q.up.set(0,e2[o2],0),q.lookAt(0,0,n2[o2]));const g2=this._cubeSize;el(O,P2*g2,o2>2?g2:0,g2,g2),s2.setRenderTarget(O),C2&&s2.render(B2,q),s2.render(v,q)}B2.geometry.dispose(),B2.material.dispose(),s2.toneMapping=p2,s2.autoClear=h,v.background=l2}_textureToCubeUV(v,x){const T=this._renderer,O=v.mapping===_4||v.mapping===c4;O?(this._cubemapMaterial===null&&(this._cubemapMaterial=vG()),this._cubemapMaterial.uniforms.flipEnvMap.value=v.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gG());const V=O?this._cubemapMaterial:this._equirectMaterial,Z=new jr(this._lodPlanes[0],V),q=V.uniforms;q.envMap.value=v;const e2=this._cubeSize;el(x,0,0,3*e2,2*e2),T.setRenderTarget(x),T.render(Z,$_)}_applyPMREM(v){const x=this._renderer,T=x.autoClear;x.autoClear=!1;for(let O=1;O<this._lodPlanes.length;O++){const V=Math.sqrt(this._sigmas[O]*this._sigmas[O]-this._sigmas[O-1]*this._sigmas[O-1]),Z=dG[(O-1)%dG.length];this._blur(v,O-1,O,V,Z)}x.autoClear=T}_blur(v,x,T,O,V){const Z=this._pingPongRenderTarget;this._halfBlur(v,Z,x,T,O,"latitudinal",V),this._halfBlur(Z,v,T,T,O,"longitudinal",V)}_halfBlur(v,x,T,O,V,Z,q){const e2=this._renderer,n2=this._blurMaterial;Z!=="latitudinal"&&Z!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s2=3,h=new jr(this._lodPlanes[O],n2),p2=n2.uniforms,m2=this._sizeLods[T]-1,B2=isFinite(V)?Math.PI/(2*m2):2*Math.PI/(2*ns-1),C2=V/B2,l2=isFinite(V)?1+Math.floor(s2*C2):ns;l2>ns&&console.warn(`sigmaRadians, ${V}, is too large and will clip, as it requested ${l2} samples when the maximum is set to ${ns}`);const o2=[];let P2=0;for(let b2=0;b2<ns;++b2){const te=b2/C2,x2=Math.exp(-te*te/2);o2.push(x2),b2===0?P2+=x2:b2<l2&&(P2+=2*x2)}for(let b2=0;b2<o2.length;b2++)o2[b2]=o2[b2]/P2;p2.envMap.value=v.texture,p2.samples.value=l2,p2.weights.value=o2,p2.latitudinal.value=Z==="latitudinal",q&&(p2.poleAxis.value=q);const{_lodMax:g2}=this;p2.dTheta.value=B2,p2.mipInt.value=g2-T;const F2=this._sizeLods[O],X2=3*F2*(O>g2-o4?O-g2+o4:0),j2=4*(this._cubeSize-F2);el(x,X2,j2,3*F2,2*F2),e2.setRenderTarget(x),e2.render(h,$_)}}function Wl2(F){const v=[],x=[],T=[];let O=F;const V=F-o4+1+hG.length;for(let Z=0;Z<V;Z++){const q=Math.pow(2,O);x.push(q);let e2=1/q;Z>F-o4?e2=hG[Z-F+o4-1]:Z===0&&(e2=0),T.push(e2);const n2=1/(q-2),s2=-n2,h=1+n2,p2=[s2,s2,h,s2,h,h,s2,s2,h,h,s2,h],m2=6,B2=6,C2=3,l2=2,o2=1,P2=new Float32Array(C2*B2*m2),g2=new Float32Array(l2*B2*m2),F2=new Float32Array(o2*B2*m2);for(let j2=0;j2<m2;j2++){const b2=j2%3*2/3-1,te=j2>2?0:-1,x2=[b2,te,0,b2+2/3,te,0,b2+2/3,te+1,0,b2,te,0,b2+2/3,te+1,0,b2,te+1,0];P2.set(x2,C2*B2*j2),g2.set(p2,l2*B2*j2);const y2=[j2,j2,j2,j2,j2,j2];F2.set(y2,o2*B2*j2)}const X2=new E1;X2.setAttribute("position",new so(P2,C2)),X2.setAttribute("uv",new so(g2,l2)),X2.setAttribute("faceIndex",new so(F2,o2)),v.push(X2),O>o4&&O--}return{lodPlanes:v,sizeLods:x,sigmas:T}}function yG(F,v,x){const T=new os(F,v,x);return T.texture.mapping=_l,T.texture.name="PMREM.cubeUv",T.scissorTest=!0,T}function el(F,v,x,T,O){F.viewport.set(v,x,T,O),F.scissor.set(v,x,T,O)}function Hl2(F,v,x){const T=new Float32Array(ns),O=new V2(0,1,0);return new x1({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/v,CUBEUV_TEXEL_HEIGHT:1/x,CUBEUV_MAX_MIP:`${F}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:T},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:O}},vertexShader:E6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:k1,depthTest:!1,depthWrite:!1})}function gG(){return new x1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:E6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:k1,depthTest:!1,depthWrite:!1})}function vG(){return new x1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:E6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:k1,depthTest:!1,depthWrite:!1})}function E6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vl2(F){let v=new WeakMap,x=null;function T(q){if(q&&q.isTexture){const e2=q.mapping,n2=e2===A6||e2===d6,s2=e2===_4||e2===c4;if(n2||s2){let h=v.get(q);const p2=h!==void 0?h.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==p2)return x===null&&(x=new aG(F)),h=n2?x.fromEquirectangular(q,h):x.fromCubemap(q,h),h.texture.pmremVersion=q.pmremVersion,v.set(q,h),h.texture;if(h!==void 0)return h.texture;{const m2=q.image;return n2&&m2&&m2.height>0||s2&&m2&&O(m2)?(x===null&&(x=new aG(F)),h=n2?x.fromEquirectangular(q):x.fromCubemap(q),h.texture.pmremVersion=q.pmremVersion,v.set(q,h),q.addEventListener("dispose",V),h.texture):null}}}return q}function O(q){let e2=0;const n2=6;for(let s2=0;s2<n2;s2++)q[s2]!==void 0&&e2++;return e2===n2}function V(q){const e2=q.target;e2.removeEventListener("dispose",V);const n2=v.get(e2);n2!==void 0&&(v.delete(e2),n2.dispose())}function Z(){v=new WeakMap,x!==null&&(x.dispose(),x=null)}return{get:T,dispose:Z}}function zl2(F){const v={};function x(T){if(v[T]!==void 0)return v[T];let O;switch(T){case"WEBGL_depth_texture":O=F.getExtension("WEBGL_depth_texture")||F.getExtension("MOZ_WEBGL_depth_texture")||F.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":O=F.getExtension("EXT_texture_filter_anisotropic")||F.getExtension("MOZ_EXT_texture_filter_anisotropic")||F.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":O=F.getExtension("WEBGL_compressed_texture_s3tc")||F.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||F.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":O=F.getExtension("WEBGL_compressed_texture_pvrtc")||F.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:O=F.getExtension(T)}return v[T]=O,O}return{has:function(T){return x(T)!==null},init:function(){x("EXT_color_buffer_float"),x("WEBGL_clip_cull_distance"),x("OES_texture_float_linear"),x("EXT_color_buffer_half_float"),x("WEBGL_multisampled_render_to_texture"),x("WEBGL_render_shared_exponent")},get:function(T){const O=x(T);return O===null&&console.warn("THREE.WebGLRenderer: "+T+" extension not supported."),O}}}function Ql2(F,v,x,T){const O={},V=new WeakMap;function Z(h){const p2=h.target;p2.index!==null&&v.remove(p2.index);for(const B2 in p2.attributes)v.remove(p2.attributes[B2]);for(const B2 in p2.morphAttributes){const C2=p2.morphAttributes[B2];for(let l2=0,o2=C2.length;l2<o2;l2++)v.remove(C2[l2])}p2.removeEventListener("dispose",Z),delete O[p2.id];const m2=V.get(p2);m2&&(v.remove(m2),V.delete(p2)),T.releaseStatesOfGeometry(p2),p2.isInstancedBufferGeometry===!0&&delete p2._maxInstanceCount,x.memory.geometries--}function q(h,p2){return O[p2.id]===!0||(p2.addEventListener("dispose",Z),O[p2.id]=!0,x.memory.geometries++),p2}function e2(h){const p2=h.attributes;for(const B2 in p2)v.update(p2[B2],F.ARRAY_BUFFER);const m2=h.morphAttributes;for(const B2 in m2){const C2=m2[B2];for(let l2=0,o2=C2.length;l2<o2;l2++)v.update(C2[l2],F.ARRAY_BUFFER)}}function n2(h){const p2=[],m2=h.index,B2=h.attributes.position;let C2=0;if(m2!==null){const P2=m2.array;C2=m2.version;for(let g2=0,F2=P2.length;g2<F2;g2+=3){const X2=P2[g2+0],j2=P2[g2+1],b2=P2[g2+2];p2.push(X2,j2,j2,b2,b2,X2)}}else if(B2!==void 0){const P2=B2.array;C2=B2.version;for(let g2=0,F2=P2.length/3-1;g2<F2;g2+=3){const X2=g2+0,j2=g2+1,b2=g2+2;p2.push(X2,j2,j2,b2,b2,X2)}}else return;const l2=new(lW(p2)?aW:dW)(p2,1);l2.version=C2;const o2=V.get(h);o2&&v.remove(o2),V.set(h,l2)}function s2(h){const p2=V.get(h);if(p2){const m2=h.index;m2!==null&&p2.version<m2.version&&n2(h)}else n2(h);return V.get(h)}return{get:q,update:e2,getWireframeAttribute:s2}}function Xl2(F,v,x){let T;function O(h){T=h}let V,Z;function q(h){V=h.type,Z=h.bytesPerElement}function e2(h,p2){F.drawElements(T,p2,V,h*Z),x.update(p2,T,1)}function n2(h,p2,m2){m2!==0&&(F.drawElementsInstanced(T,p2,V,h*Z,m2),x.update(p2,T,m2))}function s2(h,p2,m2){if(m2===0)return;const B2=v.get("WEBGL_multi_draw");if(B2===null)for(let C2=0;C2<m2;C2++)this.render(h[C2]/Z,p2[C2]);else{B2.multiDrawElementsWEBGL(T,p2,0,V,h,0,m2);let C2=0;for(let l2=0;l2<m2;l2++)C2+=p2[l2];x.update(C2,T,1)}}this.setMode=O,this.setIndex=q,this.render=e2,this.renderInstances=n2,this.renderMultiDraw=s2}function Yl2(F){const v={geometries:0,textures:0},x={frame:0,calls:0,triangles:0,points:0,lines:0};function T(V,Z,q){switch(x.calls++,Z){case F.TRIANGLES:x.triangles+=q*(V/3);break;case F.LINES:x.lines+=q*(V/2);break;case F.LINE_STRIP:x.lines+=q*(V-1);break;case F.LINE_LOOP:x.lines+=q*V;break;case F.POINTS:x.points+=q*V;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Z);break}}function O(){x.calls=0,x.triangles=0,x.points=0,x.lines=0}return{memory:v,render:x,programs:null,autoReset:!0,reset:O,update:T}}function ql2(F,v,x){const T=new WeakMap,O=new Ln;function V(Z,q,e2){const n2=Z.morphTargetInfluences,s2=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,h=s2!==void 0?s2.length:0;let p2=T.get(q);if(p2===void 0||p2.count!==h){let y2=function(){te.dispose(),T.delete(q),q.removeEventListener("dispose",y2)};var m2=y2;p2!==void 0&&p2.texture.dispose();const B2=q.morphAttributes.position!==void 0,C2=q.morphAttributes.normal!==void 0,l2=q.morphAttributes.color!==void 0,o2=q.morphAttributes.position||[],P2=q.morphAttributes.normal||[],g2=q.morphAttributes.color||[];let F2=0;B2===!0&&(F2=1),C2===!0&&(F2=2),l2===!0&&(F2=3);let X2=q.attributes.position.count*F2,j2=1;X2>v.maxTextureSize&&(j2=Math.ceil(X2/v.maxTextureSize),X2=v.maxTextureSize);const b2=new Float32Array(X2*j2*4*h),te=new _W(b2,X2,j2,h);te.type=v1,te.needsUpdate=!0;const x2=F2*4;for(let Q2=0;Q2<h;Q2++){const ue=o2[Q2],N2=P2[Q2],he=g2[Q2],ce=X2*j2*4*Q2;for(let xe=0;xe<ue.count;xe++){const Me=xe*x2;B2===!0&&(O.fromBufferAttribute(ue,xe),b2[ce+Me+0]=O.x,b2[ce+Me+1]=O.y,b2[ce+Me+2]=O.z,b2[ce+Me+3]=0),C2===!0&&(O.fromBufferAttribute(N2,xe),b2[ce+Me+4]=O.x,b2[ce+Me+5]=O.y,b2[ce+Me+6]=O.z,b2[ce+Me+7]=0),l2===!0&&(O.fromBufferAttribute(he,xe),b2[ce+Me+8]=O.x,b2[ce+Me+9]=O.y,b2[ce+Me+10]=O.z,b2[ce+Me+11]=he.itemSize===4?O.w:1)}}p2={count:h,texture:te,size:new It(X2,j2)},T.set(q,p2),q.addEventListener("dispose",y2)}if(Z.isInstancedMesh===!0&&Z.morphTexture!==null)e2.getUniforms().setValue(F,"morphTexture",Z.morphTexture,x);else{let B2=0;for(let l2=0;l2<n2.length;l2++)B2+=n2[l2];const C2=q.morphTargetsRelative?1:1-B2;e2.getUniforms().setValue(F,"morphTargetBaseInfluence",C2),e2.getUniforms().setValue(F,"morphTargetInfluences",n2)}e2.getUniforms().setValue(F,"morphTargetsTexture",p2.texture,x),e2.getUniforms().setValue(F,"morphTargetsTextureSize",p2.size)}return{update:V}}function Zl2(F,v,x,T){let O=new WeakMap;function V(e2){const n2=T.render.frame,s2=e2.geometry,h=v.get(e2,s2);if(O.get(h)!==n2&&(v.update(h),O.set(h,n2)),e2.isInstancedMesh&&(e2.hasEventListener("dispose",q)===!1&&e2.addEventListener("dispose",q),O.get(e2)!==n2&&(x.update(e2.instanceMatrix,F.ARRAY_BUFFER),e2.instanceColor!==null&&x.update(e2.instanceColor,F.ARRAY_BUFFER),O.set(e2,n2))),e2.isSkinnedMesh){const p2=e2.skeleton;O.get(p2)!==n2&&(p2.update(),O.set(p2,n2))}return h}function Z(){O=new WeakMap}function q(e2){const n2=e2.target;n2.removeEventListener("dispose",q),x.remove(n2.instanceMatrix),n2.instanceColor!==null&&x.remove(n2.instanceColor)}return{update:V,dispose:Z}}class SW extends Fi{constructor(v,x,T,O,V,Z,q,e2,n2,s2){if(s2=s2!==void 0?s2:l4,s2!==l4&&s2!==Tu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");T===void 0&&s2===l4&&(T=m4),T===void 0&&s2===Tu&&(T=Iu),super(null,O,V,Z,q,e2,s2,T,n2),this.isDepthTexture=!0,this.image={width:v,height:x},this.magFilter=q!==void 0?q:yr,this.minFilter=e2!==void 0?e2:yr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(v){return super.copy(v),this.compareFunction=v.compareFunction,this}toJSON(v){const x=super.toJSON(v);return this.compareFunction!==null&&(x.compareFunction=this.compareFunction),x}}const CW=new Fi,wW=new SW(1,1);wW.compareFunction=fW;const xW=new _W,MW=new Fu2,EW=new vW,kG=[],BG=[],SG=new Float32Array(16),CG=new Float32Array(9),wG=new Float32Array(4);function a4(F,v,x){const T=F[0];if(T<=0||T>0)return F;const O=v*x;let V=kG[O];if(V===void 0&&(V=new Float32Array(O),kG[O]=V),v!==0){T.toArray(V,0);for(let Z=1,q=0;Z!==v;++Z)q+=x,F[Z].toArray(V,q)}return V}function In(F,v){if(F.length!==v.length)return!1;for(let x=0,T=F.length;x<T;x++)if(F[x]!==v[x])return!1;return!0}function Pn(F,v){for(let x=0,T=v.length;x<T;x++)F[x]=v[x]}function hl(F,v){let x=BG[v];x===void 0&&(x=new Int32Array(v),BG[v]=x);for(let T=0;T!==v;++T)x[T]=F.allocateTextureUnit();return x}function Jl2(F,v){const x=this.cache;x[0]!==v&&(F.uniform1f(this.addr,v),x[0]=v)}function Kl2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y)&&(F.uniform2f(this.addr,v.x,v.y),x[0]=v.x,x[1]=v.y);else{if(In(x,v))return;F.uniform2fv(this.addr,v),Pn(x,v)}}function $l2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z)&&(F.uniform3f(this.addr,v.x,v.y,v.z),x[0]=v.x,x[1]=v.y,x[2]=v.z);else if(v.r!==void 0)(x[0]!==v.r||x[1]!==v.g||x[2]!==v.b)&&(F.uniform3f(this.addr,v.r,v.g,v.b),x[0]=v.r,x[1]=v.g,x[2]=v.b);else{if(In(x,v))return;F.uniform3fv(this.addr,v),Pn(x,v)}}function ep2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z||x[3]!==v.w)&&(F.uniform4f(this.addr,v.x,v.y,v.z,v.w),x[0]=v.x,x[1]=v.y,x[2]=v.z,x[3]=v.w);else{if(In(x,v))return;F.uniform4fv(this.addr,v),Pn(x,v)}}function tp2(F,v){const x=this.cache,T=v.elements;if(T===void 0){if(In(x,v))return;F.uniformMatrix2fv(this.addr,!1,v),Pn(x,v)}else{if(In(x,T))return;wG.set(T),F.uniformMatrix2fv(this.addr,!1,wG),Pn(x,T)}}function np2(F,v){const x=this.cache,T=v.elements;if(T===void 0){if(In(x,v))return;F.uniformMatrix3fv(this.addr,!1,v),Pn(x,v)}else{if(In(x,T))return;CG.set(T),F.uniformMatrix3fv(this.addr,!1,CG),Pn(x,T)}}function ip2(F,v){const x=this.cache,T=v.elements;if(T===void 0){if(In(x,v))return;F.uniformMatrix4fv(this.addr,!1,v),Pn(x,v)}else{if(In(x,T))return;SG.set(T),F.uniformMatrix4fv(this.addr,!1,SG),Pn(x,T)}}function rp2(F,v){const x=this.cache;x[0]!==v&&(F.uniform1i(this.addr,v),x[0]=v)}function op2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y)&&(F.uniform2i(this.addr,v.x,v.y),x[0]=v.x,x[1]=v.y);else{if(In(x,v))return;F.uniform2iv(this.addr,v),Pn(x,v)}}function sp2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z)&&(F.uniform3i(this.addr,v.x,v.y,v.z),x[0]=v.x,x[1]=v.y,x[2]=v.z);else{if(In(x,v))return;F.uniform3iv(this.addr,v),Pn(x,v)}}function up2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z||x[3]!==v.w)&&(F.uniform4i(this.addr,v.x,v.y,v.z,v.w),x[0]=v.x,x[1]=v.y,x[2]=v.z,x[3]=v.w);else{if(In(x,v))return;F.uniform4iv(this.addr,v),Pn(x,v)}}function fp2(F,v){const x=this.cache;x[0]!==v&&(F.uniform1ui(this.addr,v),x[0]=v)}function lp2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y)&&(F.uniform2ui(this.addr,v.x,v.y),x[0]=v.x,x[1]=v.y);else{if(In(x,v))return;F.uniform2uiv(this.addr,v),Pn(x,v)}}function pp2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z)&&(F.uniform3ui(this.addr,v.x,v.y,v.z),x[0]=v.x,x[1]=v.y,x[2]=v.z);else{if(In(x,v))return;F.uniform3uiv(this.addr,v),Pn(x,v)}}function _p2(F,v){const x=this.cache;if(v.x!==void 0)(x[0]!==v.x||x[1]!==v.y||x[2]!==v.z||x[3]!==v.w)&&(F.uniform4ui(this.addr,v.x,v.y,v.z,v.w),x[0]=v.x,x[1]=v.y,x[2]=v.z,x[3]=v.w);else{if(In(x,v))return;F.uniform4uiv(this.addr,v),Pn(x,v)}}function cp2(F,v,x){const T=this.cache,O=x.allocateTextureUnit();T[0]!==O&&(F.uniform1i(this.addr,O),T[0]=O);const V=this.type===F.SAMPLER_2D_SHADOW?wW:CW;x.setTexture2D(v||V,O)}function mp2(F,v,x){const T=this.cache,O=x.allocateTextureUnit();T[0]!==O&&(F.uniform1i(this.addr,O),T[0]=O),x.setTexture3D(v||MW,O)}function hp2(F,v,x){const T=this.cache,O=x.allocateTextureUnit();T[0]!==O&&(F.uniform1i(this.addr,O),T[0]=O),x.setTextureCube(v||EW,O)}function Ap2(F,v,x){const T=this.cache,O=x.allocateTextureUnit();T[0]!==O&&(F.uniform1i(this.addr,O),T[0]=O),x.setTexture2DArray(v||xW,O)}function dp2(F){switch(F){case 5126:return Jl2;case 35664:return Kl2;case 35665:return $l2;case 35666:return ep2;case 35674:return tp2;case 35675:return np2;case 35676:return ip2;case 5124:case 35670:return rp2;case 35667:case 35671:return op2;case 35668:case 35672:return sp2;case 35669:case 35673:return up2;case 5125:return fp2;case 36294:return lp2;case 36295:return pp2;case 36296:return _p2;case 35678:case 36198:case 36298:case 36306:case 35682:return cp2;case 35679:case 36299:case 36307:return mp2;case 35680:case 36300:case 36308:case 36293:return hp2;case 36289:case 36303:case 36311:case 36292:return Ap2}}function ap2(F,v){F.uniform1fv(this.addr,v)}function yp2(F,v){const x=a4(v,this.size,2);F.uniform2fv(this.addr,x)}function gp2(F,v){const x=a4(v,this.size,3);F.uniform3fv(this.addr,x)}function vp2(F,v){const x=a4(v,this.size,4);F.uniform4fv(this.addr,x)}function kp2(F,v){const x=a4(v,this.size,4);F.uniformMatrix2fv(this.addr,!1,x)}function Bp2(F,v){const x=a4(v,this.size,9);F.uniformMatrix3fv(this.addr,!1,x)}function Sp2(F,v){const x=a4(v,this.size,16);F.uniformMatrix4fv(this.addr,!1,x)}function Cp2(F,v){F.uniform1iv(this.addr,v)}function wp2(F,v){F.uniform2iv(this.addr,v)}function xp2(F,v){F.uniform3iv(this.addr,v)}function Mp2(F,v){F.uniform4iv(this.addr,v)}function Ep2(F,v){F.uniform1uiv(this.addr,v)}function Rp2(F,v){F.uniform2uiv(this.addr,v)}function Tp2(F,v){F.uniform3uiv(this.addr,v)}function Dp2(F,v){F.uniform4uiv(this.addr,v)}function Ip2(F,v,x){const T=this.cache,O=v.length,V=hl(x,O);In(T,V)||(F.uniform1iv(this.addr,V),Pn(T,V));for(let Z=0;Z!==O;++Z)x.setTexture2D(v[Z]||CW,V[Z])}function Pp2(F,v,x){const T=this.cache,O=v.length,V=hl(x,O);In(T,V)||(F.uniform1iv(this.addr,V),Pn(T,V));for(let Z=0;Z!==O;++Z)x.setTexture3D(v[Z]||MW,V[Z])}function bp2(F,v,x){const T=this.cache,O=v.length,V=hl(x,O);In(T,V)||(F.uniform1iv(this.addr,V),Pn(T,V));for(let Z=0;Z!==O;++Z)x.setTextureCube(v[Z]||EW,V[Z])}function Fp2(F,v,x){const T=this.cache,O=v.length,V=hl(x,O);In(T,V)||(F.uniform1iv(this.addr,V),Pn(T,V));for(let Z=0;Z!==O;++Z)x.setTexture2DArray(v[Z]||xW,V[Z])}function Lp2(F){switch(F){case 5126:return ap2;case 35664:return yp2;case 35665:return gp2;case 35666:return vp2;case 35674:return kp2;case 35675:return Bp2;case 35676:return Sp2;case 5124:case 35670:return Cp2;case 35667:case 35671:return wp2;case 35668:case 35672:return xp2;case 35669:case 35673:return Mp2;case 5125:return Ep2;case 36294:return Rp2;case 36295:return Tp2;case 36296:return Dp2;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip2;case 35679:case 36299:case 36307:return Pp2;case 35680:case 36300:case 36308:case 36293:return bp2;case 36289:case 36303:case 36311:case 36292:return Fp2}}class jp2{constructor(v,x,T){this.id=v,this.addr=T,this.cache=[],this.type=x.type,this.setValue=dp2(x.type)}}class Op2{constructor(v,x,T){this.id=v,this.addr=T,this.cache=[],this.type=x.type,this.size=x.size,this.setValue=Lp2(x.type)}}class Np2{constructor(v){this.id=v,this.seq=[],this.map={}}setValue(v,x,T){const O=this.seq;for(let V=0,Z=O.length;V!==Z;++V){const q=O[V];q.setValue(v,x[q.id],T)}}}const r6=/(\w+)(\])?(\[|\.)?/g;function xG(F,v){F.seq.push(v),F.map[v.id]=v}function Up2(F,v,x){const T=F.name,O=T.length;for(r6.lastIndex=0;;){const V=r6.exec(T),Z=r6.lastIndex;let q=V[1];const e2=V[2]==="]",n2=V[3];if(e2&&(q=q|0),n2===void 0||n2==="["&&Z+2===O){xG(x,n2===void 0?new jp2(q,F,v):new Op2(q,F,v));break}else{let h=x.map[q];h===void 0&&(h=new Np2(q),xG(x,h)),x=h}}}class nl{constructor(v,x){this.seq=[],this.map={};const T=v.getProgramParameter(x,v.ACTIVE_UNIFORMS);for(let O=0;O<T;++O){const V=v.getActiveUniform(x,O),Z=v.getUniformLocation(x,V.name);Up2(V,Z,this)}}setValue(v,x,T,O){const V=this.map[x];V!==void 0&&V.setValue(v,T,O)}setOptional(v,x,T){const O=x[T];O!==void 0&&this.setValue(v,T,O)}static upload(v,x,T,O){for(let V=0,Z=x.length;V!==Z;++V){const q=x[V],e2=T[q.id];e2.needsUpdate!==!1&&q.setValue(v,e2.value,O)}}static seqWithValue(v,x){const T=[];for(let O=0,V=v.length;O!==V;++O){const Z=v[O];Z.id in x&&T.push(Z)}return T}}function MG(F,v,x){const T=F.createShader(v);return F.shaderSource(T,x),F.compileShader(T),T}const Gp2=37297;let Wp2=0;function Hp2(F,v){const x=F.split(`
`),T=[],O=Math.max(v-6,0),V=Math.min(v+6,x.length);for(let Z=O;Z<V;Z++){const q=Z+1;T.push(`${q===v?">":" "} ${q}: ${x[Z]}`)}return T.join(`
`)}function Vp2(F){const v=D0.getPrimaries(D0.workingColorSpace),x=D0.getPrimaries(F);let T;switch(v===x?T="":v===ul&&x===sl?T="LinearDisplayP3ToLinearSRGB":v===sl&&x===ul&&(T="LinearSRGBToLinearDisplayP3"),F){case M1:case cl:return[T,"LinearTransferOETF"];case no:case C6:return[T,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",F),[T,"LinearTransferOETF"]}}function EG(F,v,x){const T=F.getShaderParameter(v,F.COMPILE_STATUS),O=F.getShaderInfoLog(v).trim();if(T&&O==="")return"";const V=/ERROR: 0:(\d+)/.exec(O);if(V){const Z=parseInt(V[1]);return x.toUpperCase()+`

`+O+`

`+Hp2(F.getShaderSource(v),Z)}else return O}function zp2(F,v){const x=Vp2(v);return`vec4 ${F}( vec4 value ) { return ${x[0]}( ${x[1]}( value ) ); }`}function Qp2(F,v){let x;switch(v){case j42:x="Linear";break;case O42:x="Reinhard";break;case N42:x="OptimizedCineon";break;case U42:x="ACESFilmic";break;case W42:x="AgX";break;case H42:x="Neutral";break;case G42:x="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",v),x="Linear"}return"vec3 "+F+"( vec3 color ) { return "+x+"ToneMapping( color ); }"}function Xp2(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",F.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cu).join(`
`)}function Yp2(F){const v=[];for(const x in F){const T=F[x];T!==!1&&v.push("#define "+x+" "+T)}return v.join(`
`)}function qp2(F,v){const x={},T=F.getProgramParameter(v,F.ACTIVE_ATTRIBUTES);for(let O=0;O<T;O++){const V=F.getActiveAttrib(v,O),Z=V.name;let q=1;V.type===F.FLOAT_MAT2&&(q=2),V.type===F.FLOAT_MAT3&&(q=3),V.type===F.FLOAT_MAT4&&(q=4),x[Z]={type:V.type,location:F.getAttribLocation(v,Z),locationSize:q}}return x}function Cu(F){return F!==""}function RG(F,v){const x=v.numSpotLightShadows+v.numSpotLightMaps-v.numSpotLightShadowsWithMaps;return F.replace(/NUM_DIR_LIGHTS/g,v.numDirLights).replace(/NUM_SPOT_LIGHTS/g,v.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,v.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,x).replace(/NUM_RECT_AREA_LIGHTS/g,v.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,v.numPointLights).replace(/NUM_HEMI_LIGHTS/g,v.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,v.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,v.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,v.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,v.numPointLightShadows)}function TG(F,v){return F.replace(/NUM_CLIPPING_PLANES/g,v.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,v.numClippingPlanes-v.numClipIntersection)}const Zp2=/^[ \t]*#include +<([\w\d./]+)>/gm;function g6(F){return F.replace(Zp2,Kp2)}const Jp2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kp2(F,v){let x=qt[v];if(x===void 0){const T=Jp2.get(v);if(T!==void 0)x=qt[T],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',v,T);else throw new Error("Can not resolve #include <"+v+">")}return g6(x)}const $p2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DG(F){return F.replace($p2,e_2)}function e_2(F,v,x,T){let O="";for(let V=parseInt(v);V<parseInt(x);V++)O+=T.replace(/\[\s*i\s*\]/g,"[ "+V+" ]").replace(/UNROLLED_LOOP_INDEX/g,V);return O}function IG(F){let v=`precision ${F.precision} float;
	precision ${F.precision} int;
	precision ${F.precision} sampler2D;
	precision ${F.precision} samplerCube;
	precision ${F.precision} sampler3D;
	precision ${F.precision} sampler2DArray;
	precision ${F.precision} sampler2DShadow;
	precision ${F.precision} samplerCubeShadow;
	precision ${F.precision} sampler2DArrayShadow;
	precision ${F.precision} isampler2D;
	precision ${F.precision} isampler3D;
	precision ${F.precision} isamplerCube;
	precision ${F.precision} isampler2DArray;
	precision ${F.precision} usampler2D;
	precision ${F.precision} usampler3D;
	precision ${F.precision} usamplerCube;
	precision ${F.precision} usampler2DArray;
	`;return F.precision==="highp"?v+=`
#define HIGH_PRECISION`:F.precision==="mediump"?v+=`
#define MEDIUM_PRECISION`:F.precision==="lowp"&&(v+=`
#define LOW_PRECISION`),v}function t_2(F){let v="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===ZG?v="SHADOWMAP_TYPE_PCF":F.shadowMapType===l42?v="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===Uo&&(v="SHADOWMAP_TYPE_VSM"),v}function n_2(F){let v="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case _4:case c4:v="ENVMAP_TYPE_CUBE";break;case _l:v="ENVMAP_TYPE_CUBE_UV";break}return v}function i_2(F){let v="ENVMAP_MODE_REFLECTION";if(F.envMap)switch(F.envMapMode){case c4:v="ENVMAP_MODE_REFRACTION";break}return v}function r_2(F){let v="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case JG:v="ENVMAP_BLENDING_MULTIPLY";break;case F42:v="ENVMAP_BLENDING_MIX";break;case L42:v="ENVMAP_BLENDING_ADD";break}return v}function o_2(F){const v=F.envMapCubeUVHeight;if(v===null)return null;const x=Math.log2(v)-2,T=1/v;return{texelWidth:1/(3*Math.max(Math.pow(2,x),7*16)),texelHeight:T,maxMip:x}}function s_2(F,v,x,T){const O=F.getContext(),V=x.defines;let Z=x.vertexShader,q=x.fragmentShader;const e2=t_2(x),n2=n_2(x),s2=i_2(x),h=r_2(x),p2=o_2(x),m2=Xp2(x),B2=Yp2(V),C2=O.createProgram();let l2,o2,P2=x.glslVersion?"#version "+x.glslVersion+`
`:"";x.isRawShaderMaterial?(l2=["#define SHADER_TYPE "+x.shaderType,"#define SHADER_NAME "+x.shaderName,B2].filter(Cu).join(`
`),l2.length>0&&(l2+=`
`),o2=["#define SHADER_TYPE "+x.shaderType,"#define SHADER_NAME "+x.shaderName,B2].filter(Cu).join(`
`),o2.length>0&&(o2+=`
`)):(l2=[IG(x),"#define SHADER_TYPE "+x.shaderType,"#define SHADER_NAME "+x.shaderName,B2,x.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",x.batching?"#define USE_BATCHING":"",x.instancing?"#define USE_INSTANCING":"",x.instancingColor?"#define USE_INSTANCING_COLOR":"",x.instancingMorph?"#define USE_INSTANCING_MORPH":"",x.useFog&&x.fog?"#define USE_FOG":"",x.useFog&&x.fogExp2?"#define FOG_EXP2":"",x.map?"#define USE_MAP":"",x.envMap?"#define USE_ENVMAP":"",x.envMap?"#define "+s2:"",x.lightMap?"#define USE_LIGHTMAP":"",x.aoMap?"#define USE_AOMAP":"",x.bumpMap?"#define USE_BUMPMAP":"",x.normalMap?"#define USE_NORMALMAP":"",x.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",x.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",x.displacementMap?"#define USE_DISPLACEMENTMAP":"",x.emissiveMap?"#define USE_EMISSIVEMAP":"",x.anisotropy?"#define USE_ANISOTROPY":"",x.anisotropyMap?"#define USE_ANISOTROPYMAP":"",x.clearcoatMap?"#define USE_CLEARCOATMAP":"",x.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",x.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",x.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",x.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",x.specularMap?"#define USE_SPECULARMAP":"",x.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",x.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",x.roughnessMap?"#define USE_ROUGHNESSMAP":"",x.metalnessMap?"#define USE_METALNESSMAP":"",x.alphaMap?"#define USE_ALPHAMAP":"",x.alphaHash?"#define USE_ALPHAHASH":"",x.transmission?"#define USE_TRANSMISSION":"",x.transmissionMap?"#define USE_TRANSMISSIONMAP":"",x.thicknessMap?"#define USE_THICKNESSMAP":"",x.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",x.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",x.mapUv?"#define MAP_UV "+x.mapUv:"",x.alphaMapUv?"#define ALPHAMAP_UV "+x.alphaMapUv:"",x.lightMapUv?"#define LIGHTMAP_UV "+x.lightMapUv:"",x.aoMapUv?"#define AOMAP_UV "+x.aoMapUv:"",x.emissiveMapUv?"#define EMISSIVEMAP_UV "+x.emissiveMapUv:"",x.bumpMapUv?"#define BUMPMAP_UV "+x.bumpMapUv:"",x.normalMapUv?"#define NORMALMAP_UV "+x.normalMapUv:"",x.displacementMapUv?"#define DISPLACEMENTMAP_UV "+x.displacementMapUv:"",x.metalnessMapUv?"#define METALNESSMAP_UV "+x.metalnessMapUv:"",x.roughnessMapUv?"#define ROUGHNESSMAP_UV "+x.roughnessMapUv:"",x.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+x.anisotropyMapUv:"",x.clearcoatMapUv?"#define CLEARCOATMAP_UV "+x.clearcoatMapUv:"",x.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+x.clearcoatNormalMapUv:"",x.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+x.clearcoatRoughnessMapUv:"",x.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+x.iridescenceMapUv:"",x.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+x.iridescenceThicknessMapUv:"",x.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+x.sheenColorMapUv:"",x.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+x.sheenRoughnessMapUv:"",x.specularMapUv?"#define SPECULARMAP_UV "+x.specularMapUv:"",x.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+x.specularColorMapUv:"",x.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+x.specularIntensityMapUv:"",x.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+x.transmissionMapUv:"",x.thicknessMapUv?"#define THICKNESSMAP_UV "+x.thicknessMapUv:"",x.vertexTangents&&x.flatShading===!1?"#define USE_TANGENT":"",x.vertexColors?"#define USE_COLOR":"",x.vertexAlphas?"#define USE_COLOR_ALPHA":"",x.vertexUv1s?"#define USE_UV1":"",x.vertexUv2s?"#define USE_UV2":"",x.vertexUv3s?"#define USE_UV3":"",x.pointsUvs?"#define USE_POINTS_UV":"",x.flatShading?"#define FLAT_SHADED":"",x.skinning?"#define USE_SKINNING":"",x.morphTargets?"#define USE_MORPHTARGETS":"",x.morphNormals&&x.flatShading===!1?"#define USE_MORPHNORMALS":"",x.morphColors?"#define USE_MORPHCOLORS":"",x.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",x.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+x.morphTextureStride:"",x.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+x.morphTargetsCount:"",x.doubleSided?"#define DOUBLE_SIDED":"",x.flipSided?"#define FLIP_SIDED":"",x.shadowMapEnabled?"#define USE_SHADOWMAP":"",x.shadowMapEnabled?"#define "+e2:"",x.sizeAttenuation?"#define USE_SIZEATTENUATION":"",x.numLightProbes>0?"#define USE_LIGHT_PROBES":"",x.useLegacyLights?"#define LEGACY_LIGHTS":"",x.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cu).join(`
`),o2=[IG(x),"#define SHADER_TYPE "+x.shaderType,"#define SHADER_NAME "+x.shaderName,B2,x.useFog&&x.fog?"#define USE_FOG":"",x.useFog&&x.fogExp2?"#define FOG_EXP2":"",x.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",x.map?"#define USE_MAP":"",x.matcap?"#define USE_MATCAP":"",x.envMap?"#define USE_ENVMAP":"",x.envMap?"#define "+n2:"",x.envMap?"#define "+s2:"",x.envMap?"#define "+h:"",p2?"#define CUBEUV_TEXEL_WIDTH "+p2.texelWidth:"",p2?"#define CUBEUV_TEXEL_HEIGHT "+p2.texelHeight:"",p2?"#define CUBEUV_MAX_MIP "+p2.maxMip+".0":"",x.lightMap?"#define USE_LIGHTMAP":"",x.aoMap?"#define USE_AOMAP":"",x.bumpMap?"#define USE_BUMPMAP":"",x.normalMap?"#define USE_NORMALMAP":"",x.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",x.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",x.emissiveMap?"#define USE_EMISSIVEMAP":"",x.anisotropy?"#define USE_ANISOTROPY":"",x.anisotropyMap?"#define USE_ANISOTROPYMAP":"",x.clearcoat?"#define USE_CLEARCOAT":"",x.clearcoatMap?"#define USE_CLEARCOATMAP":"",x.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",x.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",x.iridescence?"#define USE_IRIDESCENCE":"",x.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",x.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",x.specularMap?"#define USE_SPECULARMAP":"",x.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",x.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",x.roughnessMap?"#define USE_ROUGHNESSMAP":"",x.metalnessMap?"#define USE_METALNESSMAP":"",x.alphaMap?"#define USE_ALPHAMAP":"",x.alphaTest?"#define USE_ALPHATEST":"",x.alphaHash?"#define USE_ALPHAHASH":"",x.sheen?"#define USE_SHEEN":"",x.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",x.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",x.transmission?"#define USE_TRANSMISSION":"",x.transmissionMap?"#define USE_TRANSMISSIONMAP":"",x.thicknessMap?"#define USE_THICKNESSMAP":"",x.vertexTangents&&x.flatShading===!1?"#define USE_TANGENT":"",x.vertexColors||x.instancingColor?"#define USE_COLOR":"",x.vertexAlphas?"#define USE_COLOR_ALPHA":"",x.vertexUv1s?"#define USE_UV1":"",x.vertexUv2s?"#define USE_UV2":"",x.vertexUv3s?"#define USE_UV3":"",x.pointsUvs?"#define USE_POINTS_UV":"",x.gradientMap?"#define USE_GRADIENTMAP":"",x.flatShading?"#define FLAT_SHADED":"",x.doubleSided?"#define DOUBLE_SIDED":"",x.flipSided?"#define FLIP_SIDED":"",x.shadowMapEnabled?"#define USE_SHADOWMAP":"",x.shadowMapEnabled?"#define "+e2:"",x.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",x.numLightProbes>0?"#define USE_LIGHT_PROBES":"",x.useLegacyLights?"#define LEGACY_LIGHTS":"",x.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",x.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",x.toneMapping!==B1?"#define TONE_MAPPING":"",x.toneMapping!==B1?qt.tonemapping_pars_fragment:"",x.toneMapping!==B1?Qp2("toneMapping",x.toneMapping):"",x.dithering?"#define DITHERING":"",x.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,zp2("linearToOutputTexel",x.outputColorSpace),x.useDepthPacking?"#define DEPTH_PACKING "+x.depthPacking:"",`
`].filter(Cu).join(`
`)),Z=g6(Z),Z=RG(Z,x),Z=TG(Z,x),q=g6(q),q=RG(q,x),q=TG(q,x),Z=DG(Z),q=DG(q),x.isRawShaderMaterial!==!0&&(P2=`#version 300 es
`,l2=[m2,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l2,o2=["#define varying in",x.glslVersion===XU?"":"layout(location = 0) out highp vec4 pc_fragColor;",x.glslVersion===XU?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o2);const g2=P2+l2+Z,F2=P2+o2+q,X2=MG(O,O.VERTEX_SHADER,g2),j2=MG(O,O.FRAGMENT_SHADER,F2);O.attachShader(C2,X2),O.attachShader(C2,j2),x.index0AttributeName!==void 0?O.bindAttribLocation(C2,0,x.index0AttributeName):x.morphTargets===!0&&O.bindAttribLocation(C2,0,"position"),O.linkProgram(C2);function b2(Q2){if(F.debug.checkShaderErrors){const ue=O.getProgramInfoLog(C2).trim(),N2=O.getShaderInfoLog(X2).trim(),he=O.getShaderInfoLog(j2).trim();let ce=!0,xe=!0;if(O.getProgramParameter(C2,O.LINK_STATUS)===!1)if(ce=!1,typeof F.debug.onShaderError=="function")F.debug.onShaderError(O,C2,X2,j2);else{const Me=EG(O,X2,"vertex"),ne=EG(O,j2,"fragment");console.error("THREE.WebGLProgram: Shader Error "+O.getError()+" - VALIDATE_STATUS "+O.getProgramParameter(C2,O.VALIDATE_STATUS)+`

Material Name: `+Q2.name+`
Material Type: `+Q2.type+`

Program Info Log: `+ue+`
`+Me+`
`+ne)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(N2===""||he==="")&&(xe=!1);xe&&(Q2.diagnostics={runnable:ce,programLog:ue,vertexShader:{log:N2,prefix:l2},fragmentShader:{log:he,prefix:o2}})}O.deleteShader(X2),O.deleteShader(j2),te=new nl(O,C2),x2=qp2(O,C2)}let te;this.getUniforms=function(){return te===void 0&&b2(this),te};let x2;this.getAttributes=function(){return x2===void 0&&b2(this),x2};let y2=x.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y2===!1&&(y2=O.getProgramParameter(C2,Gp2)),y2},this.destroy=function(){T.releaseStatesOfProgram(this),O.deleteProgram(C2),this.program=void 0},this.type=x.shaderType,this.name=x.shaderName,this.id=Wp2++,this.cacheKey=v,this.usedTimes=1,this.program=C2,this.vertexShader=X2,this.fragmentShader=j2,this}let u_2=0;class f_2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(v){const x=v.vertexShader,T=v.fragmentShader,O=this._getShaderStage(x),V=this._getShaderStage(T),Z=this._getShaderCacheForMaterial(v);return Z.has(O)===!1&&(Z.add(O),O.usedTimes++),Z.has(V)===!1&&(Z.add(V),V.usedTimes++),this}remove(v){const x=this.materialCache.get(v);for(const T of x)T.usedTimes--,T.usedTimes===0&&this.shaderCache.delete(T.code);return this.materialCache.delete(v),this}getVertexShaderID(v){return this._getShaderStage(v.vertexShader).id}getFragmentShaderID(v){return this._getShaderStage(v.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(v){const x=this.materialCache;let T=x.get(v);return T===void 0&&(T=new Set,x.set(v,T)),T}_getShaderStage(v){const x=this.shaderCache;let T=x.get(v);return T===void 0&&(T=new l_2(v),x.set(v,T)),T}}class l_2{constructor(v){this.id=u_2++,this.code=v,this.usedTimes=0}}function p_2(F,v,x,T,O,V,Z){const q=new mW,e2=new f_2,n2=new Set,s2=[],h=O.logarithmicDepthBuffer,p2=O.vertexTextures;let m2=O.precision;const B2={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C2(x2){return n2.add(x2),x2===0?"uv":`uv${x2}`}function l2(x2,y2,Q2,ue,N2){const he=ue.fog,ce=N2.geometry,xe=x2.isMeshStandardMaterial?ue.environment:null,Me=(x2.isMeshStandardMaterial?x:v).get(x2.envMap||xe),ne=Me&&Me.mapping===_l?Me.image.height:null,Te=B2[x2.type];x2.precision!==null&&(m2=O.getMaxPrecision(x2.precision),m2!==x2.precision&&console.warn("THREE.WebGLProgram.getParameters:",x2.precision,"not supported, using",m2,"instead."));const Ee=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,st=Ee!==void 0?Ee.length:0;let Wt=0;ce.morphAttributes.position!==void 0&&(Wt=1),ce.morphAttributes.normal!==void 0&&(Wt=2),ce.morphAttributes.color!==void 0&&(Wt=3);let s0,re,Re,Ke;if(Te){const fn=io[Te];s0=fn.vertexShader,re=fn.fragmentShader}else s0=x2.vertexShader,re=x2.fragmentShader,e2.update(x2),Re=e2.getVertexShaderID(x2),Ke=e2.getFragmentShaderID(x2);const He=F.getRenderTarget(),Rt=N2.isInstancedMesh===!0,Pt=N2.isBatchedMesh===!0,Mt=!!x2.map,H2=!!x2.matcap,Ht=!!Me,at=!!x2.aoMap,N0=!!x2.lightMap,Bt=!!x2.bumpMap,m0=!!x2.normalMap,R2=!!x2.displacementMap,A2=!!x2.emissiveMap,K2=!!x2.metalnessMap,fe=!!x2.roughnessMap,ge=x2.anisotropy>0,Ae=x2.clearcoat>0,ht=x2.iridescence>0,Ce=x2.sheen>0,ct=x2.transmission>0,yt=ge&&!!x2.anisotropyMap,je=Ae&&!!x2.clearcoatMap,Qe=Ae&&!!x2.clearcoatNormalMap,St=Ae&&!!x2.clearcoatRoughnessMap,rt=ht&&!!x2.iridescenceMap,ot=ht&&!!x2.iridescenceThicknessMap,Kt=Ce&&!!x2.sheenColorMap,Nt=Ce&&!!x2.sheenRoughnessMap,u0=!!x2.specularMap,n0=!!x2.specularColorMap,f0=!!x2.specularIntensityMap,lt=ct&&!!x2.transmissionMap,_2=ct&&!!x2.thicknessMap,Y2=!!x2.gradientMap,_e=!!x2.alphaMap,Le=x2.alphaTest>0,Je=!!x2.alphaHash,$t=!!x2.extensions;let zt=B1;x2.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(zt=F.toneMapping);const I0={shaderID:Te,shaderType:x2.type,shaderName:x2.name,vertexShader:s0,fragmentShader:re,defines:x2.defines,customVertexShaderID:Re,customFragmentShaderID:Ke,isRawShaderMaterial:x2.isRawShaderMaterial===!0,glslVersion:x2.glslVersion,precision:m2,batching:Pt,instancing:Rt,instancingColor:Rt&&N2.instanceColor!==null,instancingMorph:Rt&&N2.morphTexture!==null,supportsVertexTextures:p2,outputColorSpace:He===null?F.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:M1,alphaToCoverage:!!x2.alphaToCoverage,map:Mt,matcap:H2,envMap:Ht,envMapMode:Ht&&Me.mapping,envMapCubeUVHeight:ne,aoMap:at,lightMap:N0,bumpMap:Bt,normalMap:m0,displacementMap:p2&&R2,emissiveMap:A2,normalMapObjectSpace:m0&&x2.normalMapType===iu2,normalMapTangentSpace:m0&&x2.normalMapType===uW,metalnessMap:K2,roughnessMap:fe,anisotropy:ge,anisotropyMap:yt,clearcoat:Ae,clearcoatMap:je,clearcoatNormalMap:Qe,clearcoatRoughnessMap:St,iridescence:ht,iridescenceMap:rt,iridescenceThicknessMap:ot,sheen:Ce,sheenColorMap:Kt,sheenRoughnessMap:Nt,specularMap:u0,specularColorMap:n0,specularIntensityMap:f0,transmission:ct,transmissionMap:lt,thicknessMap:_2,gradientMap:Y2,opaque:x2.transparent===!1&&x2.blending===f4&&x2.alphaToCoverage===!1,alphaMap:_e,alphaTest:Le,alphaHash:Je,combine:x2.combine,mapUv:Mt&&C2(x2.map.channel),aoMapUv:at&&C2(x2.aoMap.channel),lightMapUv:N0&&C2(x2.lightMap.channel),bumpMapUv:Bt&&C2(x2.bumpMap.channel),normalMapUv:m0&&C2(x2.normalMap.channel),displacementMapUv:R2&&C2(x2.displacementMap.channel),emissiveMapUv:A2&&C2(x2.emissiveMap.channel),metalnessMapUv:K2&&C2(x2.metalnessMap.channel),roughnessMapUv:fe&&C2(x2.roughnessMap.channel),anisotropyMapUv:yt&&C2(x2.anisotropyMap.channel),clearcoatMapUv:je&&C2(x2.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&C2(x2.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&C2(x2.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&C2(x2.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&C2(x2.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&C2(x2.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&C2(x2.sheenRoughnessMap.channel),specularMapUv:u0&&C2(x2.specularMap.channel),specularColorMapUv:n0&&C2(x2.specularColorMap.channel),specularIntensityMapUv:f0&&C2(x2.specularIntensityMap.channel),transmissionMapUv:lt&&C2(x2.transmissionMap.channel),thicknessMapUv:_2&&C2(x2.thicknessMap.channel),alphaMapUv:_e&&C2(x2.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(m0||ge),vertexColors:x2.vertexColors,vertexAlphas:x2.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:N2.isPoints===!0&&!!ce.attributes.uv&&(Mt||_e),fog:!!he,useFog:x2.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:x2.flatShading===!0,sizeAttenuation:x2.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N2.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Wt,numDirLights:y2.directional.length,numPointLights:y2.point.length,numSpotLights:y2.spot.length,numSpotLightMaps:y2.spotLightMap.length,numRectAreaLights:y2.rectArea.length,numHemiLights:y2.hemi.length,numDirLightShadows:y2.directionalShadowMap.length,numPointLightShadows:y2.pointShadowMap.length,numSpotLightShadows:y2.spotShadowMap.length,numSpotLightShadowsWithMaps:y2.numSpotLightShadowsWithMaps,numLightProbes:y2.numLightProbes,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:x2.dithering,shadowMapEnabled:F.shadowMap.enabled&&Q2.length>0,shadowMapType:F.shadowMap.type,toneMapping:zt,useLegacyLights:F._useLegacyLights,decodeVideoTexture:Mt&&x2.map.isVideoTexture===!0&&D0.getTransfer(x2.map.colorSpace)===H0,premultipliedAlpha:x2.premultipliedAlpha,doubleSided:x2.side===Go,flipSided:x2.side===bi,useDepthPacking:x2.depthPacking>=0,depthPacking:x2.depthPacking||0,index0AttributeName:x2.index0AttributeName,extensionClipCullDistance:$t&&x2.extensions.clipCullDistance===!0&&T.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$t&&x2.extensions.multiDraw===!0&&T.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:T.has("KHR_parallel_shader_compile"),customProgramCacheKey:x2.customProgramCacheKey()};return I0.vertexUv1s=n2.has(1),I0.vertexUv2s=n2.has(2),I0.vertexUv3s=n2.has(3),n2.clear(),I0}function o2(x2){const y2=[];if(x2.shaderID?y2.push(x2.shaderID):(y2.push(x2.customVertexShaderID),y2.push(x2.customFragmentShaderID)),x2.defines!==void 0)for(const Q2 in x2.defines)y2.push(Q2),y2.push(x2.defines[Q2]);return x2.isRawShaderMaterial===!1&&(P2(y2,x2),g2(y2,x2),y2.push(F.outputColorSpace)),y2.push(x2.customProgramCacheKey),y2.join()}function P2(x2,y2){x2.push(y2.precision),x2.push(y2.outputColorSpace),x2.push(y2.envMapMode),x2.push(y2.envMapCubeUVHeight),x2.push(y2.mapUv),x2.push(y2.alphaMapUv),x2.push(y2.lightMapUv),x2.push(y2.aoMapUv),x2.push(y2.bumpMapUv),x2.push(y2.normalMapUv),x2.push(y2.displacementMapUv),x2.push(y2.emissiveMapUv),x2.push(y2.metalnessMapUv),x2.push(y2.roughnessMapUv),x2.push(y2.anisotropyMapUv),x2.push(y2.clearcoatMapUv),x2.push(y2.clearcoatNormalMapUv),x2.push(y2.clearcoatRoughnessMapUv),x2.push(y2.iridescenceMapUv),x2.push(y2.iridescenceThicknessMapUv),x2.push(y2.sheenColorMapUv),x2.push(y2.sheenRoughnessMapUv),x2.push(y2.specularMapUv),x2.push(y2.specularColorMapUv),x2.push(y2.specularIntensityMapUv),x2.push(y2.transmissionMapUv),x2.push(y2.thicknessMapUv),x2.push(y2.combine),x2.push(y2.fogExp2),x2.push(y2.sizeAttenuation),x2.push(y2.morphTargetsCount),x2.push(y2.morphAttributeCount),x2.push(y2.numDirLights),x2.push(y2.numPointLights),x2.push(y2.numSpotLights),x2.push(y2.numSpotLightMaps),x2.push(y2.numHemiLights),x2.push(y2.numRectAreaLights),x2.push(y2.numDirLightShadows),x2.push(y2.numPointLightShadows),x2.push(y2.numSpotLightShadows),x2.push(y2.numSpotLightShadowsWithMaps),x2.push(y2.numLightProbes),x2.push(y2.shadowMapType),x2.push(y2.toneMapping),x2.push(y2.numClippingPlanes),x2.push(y2.numClipIntersection),x2.push(y2.depthPacking)}function g2(x2,y2){q.disableAll(),y2.supportsVertexTextures&&q.enable(0),y2.instancing&&q.enable(1),y2.instancingColor&&q.enable(2),y2.instancingMorph&&q.enable(3),y2.matcap&&q.enable(4),y2.envMap&&q.enable(5),y2.normalMapObjectSpace&&q.enable(6),y2.normalMapTangentSpace&&q.enable(7),y2.clearcoat&&q.enable(8),y2.iridescence&&q.enable(9),y2.alphaTest&&q.enable(10),y2.vertexColors&&q.enable(11),y2.vertexAlphas&&q.enable(12),y2.vertexUv1s&&q.enable(13),y2.vertexUv2s&&q.enable(14),y2.vertexUv3s&&q.enable(15),y2.vertexTangents&&q.enable(16),y2.anisotropy&&q.enable(17),y2.alphaHash&&q.enable(18),y2.batching&&q.enable(19),x2.push(q.mask),q.disableAll(),y2.fog&&q.enable(0),y2.useFog&&q.enable(1),y2.flatShading&&q.enable(2),y2.logarithmicDepthBuffer&&q.enable(3),y2.skinning&&q.enable(4),y2.morphTargets&&q.enable(5),y2.morphNormals&&q.enable(6),y2.morphColors&&q.enable(7),y2.premultipliedAlpha&&q.enable(8),y2.shadowMapEnabled&&q.enable(9),y2.useLegacyLights&&q.enable(10),y2.doubleSided&&q.enable(11),y2.flipSided&&q.enable(12),y2.useDepthPacking&&q.enable(13),y2.dithering&&q.enable(14),y2.transmission&&q.enable(15),y2.sheen&&q.enable(16),y2.opaque&&q.enable(17),y2.pointsUvs&&q.enable(18),y2.decodeVideoTexture&&q.enable(19),y2.alphaToCoverage&&q.enable(20),x2.push(q.mask)}function F2(x2){const y2=B2[x2.type];let Q2;if(y2){const ue=io[y2];Q2=Xu2.clone(ue.uniforms)}else Q2=x2.uniforms;return Q2}function X2(x2,y2){let Q2;for(let ue=0,N2=s2.length;ue<N2;ue++){const he=s2[ue];if(he.cacheKey===y2){Q2=he,++Q2.usedTimes;break}}return Q2===void 0&&(Q2=new s_2(F,y2,x2,V),s2.push(Q2)),Q2}function j2(x2){if(--x2.usedTimes===0){const y2=s2.indexOf(x2);s2[y2]=s2[s2.length-1],s2.pop(),x2.destroy()}}function b2(x2){e2.remove(x2)}function te(){e2.dispose()}return{getParameters:l2,getProgramCacheKey:o2,getUniforms:F2,acquireProgram:X2,releaseProgram:j2,releaseShaderCache:b2,programs:s2,dispose:te}}function __2(){let F=new WeakMap;function v(V){let Z=F.get(V);return Z===void 0&&(Z={},F.set(V,Z)),Z}function x(V){F.delete(V)}function T(V,Z,q){F.get(V)[Z]=q}function O(){F=new WeakMap}return{get:v,remove:x,update:T,dispose:O}}function c_2(F,v){return F.groupOrder!==v.groupOrder?F.groupOrder-v.groupOrder:F.renderOrder!==v.renderOrder?F.renderOrder-v.renderOrder:F.material.id!==v.material.id?F.material.id-v.material.id:F.z!==v.z?F.z-v.z:F.id-v.id}function PG(F,v){return F.groupOrder!==v.groupOrder?F.groupOrder-v.groupOrder:F.renderOrder!==v.renderOrder?F.renderOrder-v.renderOrder:F.z!==v.z?v.z-F.z:F.id-v.id}function bG(){const F=[];let v=0;const x=[],T=[],O=[];function V(){v=0,x.length=0,T.length=0,O.length=0}function Z(h,p2,m2,B2,C2,l2){let o2=F[v];return o2===void 0?(o2={id:h.id,object:h,geometry:p2,material:m2,groupOrder:B2,renderOrder:h.renderOrder,z:C2,group:l2},F[v]=o2):(o2.id=h.id,o2.object=h,o2.geometry=p2,o2.material=m2,o2.groupOrder=B2,o2.renderOrder=h.renderOrder,o2.z=C2,o2.group=l2),v++,o2}function q(h,p2,m2,B2,C2,l2){const o2=Z(h,p2,m2,B2,C2,l2);m2.transmission>0?T.push(o2):m2.transparent===!0?O.push(o2):x.push(o2)}function e2(h,p2,m2,B2,C2,l2){const o2=Z(h,p2,m2,B2,C2,l2);m2.transmission>0?T.unshift(o2):m2.transparent===!0?O.unshift(o2):x.unshift(o2)}function n2(h,p2){x.length>1&&x.sort(h||c_2),T.length>1&&T.sort(p2||PG),O.length>1&&O.sort(p2||PG)}function s2(){for(let h=v,p2=F.length;h<p2;h++){const m2=F[h];if(m2.id===null)break;m2.id=null,m2.object=null,m2.geometry=null,m2.material=null,m2.group=null}}return{opaque:x,transmissive:T,transparent:O,init:V,push:q,unshift:e2,finish:s2,sort:n2}}function m_2(){let F=new WeakMap;function v(T,O){const V=F.get(T);let Z;return V===void 0?(Z=new bG,F.set(T,[Z])):O>=V.length?(Z=new bG,V.push(Z)):Z=V[O],Z}function x(){F=new WeakMap}return{get:v,dispose:x}}function h_2(){const F={};return{get:function(v){if(F[v.id]!==void 0)return F[v.id];let x;switch(v.type){case"DirectionalLight":x={direction:new V2,color:new o0};break;case"SpotLight":x={position:new V2,direction:new V2,color:new o0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":x={position:new V2,color:new o0,distance:0,decay:0};break;case"HemisphereLight":x={direction:new V2,skyColor:new o0,groundColor:new o0};break;case"RectAreaLight":x={color:new o0,position:new V2,halfWidth:new V2,halfHeight:new V2};break}return F[v.id]=x,x}}}function A_2(){const F={};return{get:function(v){if(F[v.id]!==void 0)return F[v.id];let x;switch(v.type){case"DirectionalLight":x={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":x={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":x={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return F[v.id]=x,x}}}let d_2=0;function a_2(F,v){return(v.castShadow?2:0)-(F.castShadow?2:0)+(v.map?1:0)-(F.map?1:0)}function y_2(F){const v=new h_2,x=A_2(),T={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let n2=0;n2<9;n2++)T.probe.push(new V2);const O=new V2,V=new un,Z=new un;function q(n2,s2){let h=0,p2=0,m2=0;for(let Q2=0;Q2<9;Q2++)T.probe[Q2].set(0,0,0);let B2=0,C2=0,l2=0,o2=0,P2=0,g2=0,F2=0,X2=0,j2=0,b2=0,te=0;n2.sort(a_2);const x2=s2===!0?Math.PI:1;for(let Q2=0,ue=n2.length;Q2<ue;Q2++){const N2=n2[Q2],he=N2.color,ce=N2.intensity,xe=N2.distance,Me=N2.shadow&&N2.shadow.map?N2.shadow.map.texture:null;if(N2.isAmbientLight)h+=he.r*ce*x2,p2+=he.g*ce*x2,m2+=he.b*ce*x2;else if(N2.isLightProbe){for(let ne=0;ne<9;ne++)T.probe[ne].addScaledVector(N2.sh.coefficients[ne],ce);te++}else if(N2.isDirectionalLight){const ne=v.get(N2);if(ne.color.copy(N2.color).multiplyScalar(N2.intensity*x2),N2.castShadow){const Te=N2.shadow,Ee=x.get(N2);Ee.shadowBias=Te.bias,Ee.shadowNormalBias=Te.normalBias,Ee.shadowRadius=Te.radius,Ee.shadowMapSize=Te.mapSize,T.directionalShadow[B2]=Ee,T.directionalShadowMap[B2]=Me,T.directionalShadowMatrix[B2]=N2.shadow.matrix,g2++}T.directional[B2]=ne,B2++}else if(N2.isSpotLight){const ne=v.get(N2);ne.position.setFromMatrixPosition(N2.matrixWorld),ne.color.copy(he).multiplyScalar(ce*x2),ne.distance=xe,ne.coneCos=Math.cos(N2.angle),ne.penumbraCos=Math.cos(N2.angle*(1-N2.penumbra)),ne.decay=N2.decay,T.spot[l2]=ne;const Te=N2.shadow;if(N2.map&&(T.spotLightMap[j2]=N2.map,j2++,Te.updateMatrices(N2),N2.castShadow&&b2++),T.spotLightMatrix[l2]=Te.matrix,N2.castShadow){const Ee=x.get(N2);Ee.shadowBias=Te.bias,Ee.shadowNormalBias=Te.normalBias,Ee.shadowRadius=Te.radius,Ee.shadowMapSize=Te.mapSize,T.spotShadow[l2]=Ee,T.spotShadowMap[l2]=Me,X2++}l2++}else if(N2.isRectAreaLight){const ne=v.get(N2);ne.color.copy(he).multiplyScalar(ce),ne.halfWidth.set(N2.width*.5,0,0),ne.halfHeight.set(0,N2.height*.5,0),T.rectArea[o2]=ne,o2++}else if(N2.isPointLight){const ne=v.get(N2);if(ne.color.copy(N2.color).multiplyScalar(N2.intensity*x2),ne.distance=N2.distance,ne.decay=N2.decay,N2.castShadow){const Te=N2.shadow,Ee=x.get(N2);Ee.shadowBias=Te.bias,Ee.shadowNormalBias=Te.normalBias,Ee.shadowRadius=Te.radius,Ee.shadowMapSize=Te.mapSize,Ee.shadowCameraNear=Te.camera.near,Ee.shadowCameraFar=Te.camera.far,T.pointShadow[C2]=Ee,T.pointShadowMap[C2]=Me,T.pointShadowMatrix[C2]=N2.shadow.matrix,F2++}T.point[C2]=ne,C2++}else if(N2.isHemisphereLight){const ne=v.get(N2);ne.skyColor.copy(N2.color).multiplyScalar(ce*x2),ne.groundColor.copy(N2.groundColor).multiplyScalar(ce*x2),T.hemi[P2]=ne,P2++}}o2>0&&(F.has("OES_texture_float_linear")===!0?(T.rectAreaLTC1=We.LTC_FLOAT_1,T.rectAreaLTC2=We.LTC_FLOAT_2):(T.rectAreaLTC1=We.LTC_HALF_1,T.rectAreaLTC2=We.LTC_HALF_2)),T.ambient[0]=h,T.ambient[1]=p2,T.ambient[2]=m2;const y2=T.hash;(y2.directionalLength!==B2||y2.pointLength!==C2||y2.spotLength!==l2||y2.rectAreaLength!==o2||y2.hemiLength!==P2||y2.numDirectionalShadows!==g2||y2.numPointShadows!==F2||y2.numSpotShadows!==X2||y2.numSpotMaps!==j2||y2.numLightProbes!==te)&&(T.directional.length=B2,T.spot.length=l2,T.rectArea.length=o2,T.point.length=C2,T.hemi.length=P2,T.directionalShadow.length=g2,T.directionalShadowMap.length=g2,T.pointShadow.length=F2,T.pointShadowMap.length=F2,T.spotShadow.length=X2,T.spotShadowMap.length=X2,T.directionalShadowMatrix.length=g2,T.pointShadowMatrix.length=F2,T.spotLightMatrix.length=X2+j2-b2,T.spotLightMap.length=j2,T.numSpotLightShadowsWithMaps=b2,T.numLightProbes=te,y2.directionalLength=B2,y2.pointLength=C2,y2.spotLength=l2,y2.rectAreaLength=o2,y2.hemiLength=P2,y2.numDirectionalShadows=g2,y2.numPointShadows=F2,y2.numSpotShadows=X2,y2.numSpotMaps=j2,y2.numLightProbes=te,T.version=d_2++)}function e2(n2,s2){let h=0,p2=0,m2=0,B2=0,C2=0;const l2=s2.matrixWorldInverse;for(let o2=0,P2=n2.length;o2<P2;o2++){const g2=n2[o2];if(g2.isDirectionalLight){const F2=T.directional[h];F2.direction.setFromMatrixPosition(g2.matrixWorld),O.setFromMatrixPosition(g2.target.matrixWorld),F2.direction.sub(O),F2.direction.transformDirection(l2),h++}else if(g2.isSpotLight){const F2=T.spot[m2];F2.position.setFromMatrixPosition(g2.matrixWorld),F2.position.applyMatrix4(l2),F2.direction.setFromMatrixPosition(g2.matrixWorld),O.setFromMatrixPosition(g2.target.matrixWorld),F2.direction.sub(O),F2.direction.transformDirection(l2),m2++}else if(g2.isRectAreaLight){const F2=T.rectArea[B2];F2.position.setFromMatrixPosition(g2.matrixWorld),F2.position.applyMatrix4(l2),Z.identity(),V.copy(g2.matrixWorld),V.premultiply(l2),Z.extractRotation(V),F2.halfWidth.set(g2.width*.5,0,0),F2.halfHeight.set(0,g2.height*.5,0),F2.halfWidth.applyMatrix4(Z),F2.halfHeight.applyMatrix4(Z),B2++}else if(g2.isPointLight){const F2=T.point[p2];F2.position.setFromMatrixPosition(g2.matrixWorld),F2.position.applyMatrix4(l2),p2++}else if(g2.isHemisphereLight){const F2=T.hemi[C2];F2.direction.setFromMatrixPosition(g2.matrixWorld),F2.direction.transformDirection(l2),C2++}}}return{setup:q,setupView:e2,state:T}}function FG(F){const v=new y_2(F),x=[],T=[];function O(){x.length=0,T.length=0}function V(s2){x.push(s2)}function Z(s2){T.push(s2)}function q(s2){v.setup(x,s2)}function e2(s2){v.setupView(x,s2)}return{init:O,state:{lightsArray:x,shadowsArray:T,lights:v,transmissionRenderTarget:null},setupLights:q,setupLightsView:e2,pushLight:V,pushShadow:Z}}function g_2(F){let v=new WeakMap;function x(O,V=0){const Z=v.get(O);let q;return Z===void 0?(q=new FG(F),v.set(O,[q])):V>=Z.length?(q=new FG(F),Z.push(q)):q=Z[V],q}function T(){v=new WeakMap}return{get:x,dispose:T}}class v_2 extends bu{constructor(v){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(v)}copy(v){return super.copy(v),this.depthPacking=v.depthPacking,this.map=v.map,this.alphaMap=v.alphaMap,this.displacementMap=v.displacementMap,this.displacementScale=v.displacementScale,this.displacementBias=v.displacementBias,this.wireframe=v.wireframe,this.wireframeLinewidth=v.wireframeLinewidth,this}}class k_2 extends bu{constructor(v){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(v)}copy(v){return super.copy(v),this.map=v.map,this.alphaMap=v.alphaMap,this.displacementMap=v.displacementMap,this.displacementScale=v.displacementScale,this.displacementBias=v.displacementBias,this}}const B_2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C_2(F,v,x){let T=new M6;const O=new It,V=new It,Z=new Ln,q=new v_2({depthPacking:nu2}),e2=new k_2,n2={},s2=x.maxTextureSize,h={[C1]:bi,[bi]:C1,[Go]:Go},p2=new x1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:B_2,fragmentShader:S_2}),m2=p2.clone();m2.defines.HORIZONTAL_PASS=1;const B2=new E1;B2.setAttribute("position",new so(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C2=new jr(B2,p2),l2=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ZG;let o2=this.type;this.render=function(j2,b2,te){if(l2.enabled===!1||l2.autoUpdate===!1&&l2.needsUpdate===!1||j2.length===0)return;const x2=F.getRenderTarget(),y2=F.getActiveCubeFace(),Q2=F.getActiveMipmapLevel(),ue=F.state;ue.setBlending(k1),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const N2=o2!==Uo&&this.type===Uo,he=o2===Uo&&this.type!==Uo;for(let ce=0,xe=j2.length;ce<xe;ce++){const Me=j2[ce],ne=Me.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;O.copy(ne.mapSize);const Te=ne.getFrameExtents();if(O.multiply(Te),V.copy(ne.mapSize),(O.x>s2||O.y>s2)&&(O.x>s2&&(V.x=Math.floor(s2/Te.x),O.x=V.x*Te.x,ne.mapSize.x=V.x),O.y>s2&&(V.y=Math.floor(s2/Te.y),O.y=V.y*Te.y,ne.mapSize.y=V.y)),ne.map===null||N2===!0||he===!0){const st=this.type!==Uo?{minFilter:yr,magFilter:yr}:{};ne.map!==null&&ne.map.dispose(),ne.map=new os(O.x,O.y,st),ne.map.texture.name=Me.name+".shadowMap",ne.camera.updateProjectionMatrix()}F.setRenderTarget(ne.map),F.clear();const Ee=ne.getViewportCount();for(let st=0;st<Ee;st++){const Wt=ne.getViewport(st);Z.set(V.x*Wt.x,V.y*Wt.y,V.x*Wt.z,V.y*Wt.w),ue.viewport(Z),ne.updateMatrices(Me,st),T=ne.getFrustum(),F2(b2,te,ne.camera,Me,this.type)}ne.isPointLightShadow!==!0&&this.type===Uo&&P2(ne,te),ne.needsUpdate=!1}o2=this.type,l2.needsUpdate=!1,F.setRenderTarget(x2,y2,Q2)};function P2(j2,b2){const te=v.update(C2);p2.defines.VSM_SAMPLES!==j2.blurSamples&&(p2.defines.VSM_SAMPLES=j2.blurSamples,m2.defines.VSM_SAMPLES=j2.blurSamples,p2.needsUpdate=!0,m2.needsUpdate=!0),j2.mapPass===null&&(j2.mapPass=new os(O.x,O.y)),p2.uniforms.shadow_pass.value=j2.map.texture,p2.uniforms.resolution.value=j2.mapSize,p2.uniforms.radius.value=j2.radius,F.setRenderTarget(j2.mapPass),F.clear(),F.renderBufferDirect(b2,null,te,p2,C2,null),m2.uniforms.shadow_pass.value=j2.mapPass.texture,m2.uniforms.resolution.value=j2.mapSize,m2.uniforms.radius.value=j2.radius,F.setRenderTarget(j2.map),F.clear(),F.renderBufferDirect(b2,null,te,m2,C2,null)}function g2(j2,b2,te,x2){let y2=null;const Q2=te.isPointLight===!0?j2.customDistanceMaterial:j2.customDepthMaterial;if(Q2!==void 0)y2=Q2;else if(y2=te.isPointLight===!0?e2:q,F.localClippingEnabled&&b2.clipShadows===!0&&Array.isArray(b2.clippingPlanes)&&b2.clippingPlanes.length!==0||b2.displacementMap&&b2.displacementScale!==0||b2.alphaMap&&b2.alphaTest>0||b2.map&&b2.alphaTest>0){const ue=y2.uuid,N2=b2.uuid;let he=n2[ue];he===void 0&&(he={},n2[ue]=he);let ce=he[N2];ce===void 0&&(ce=y2.clone(),he[N2]=ce,b2.addEventListener("dispose",X2)),y2=ce}if(y2.visible=b2.visible,y2.wireframe=b2.wireframe,x2===Uo?y2.side=b2.shadowSide!==null?b2.shadowSide:b2.side:y2.side=b2.shadowSide!==null?b2.shadowSide:h[b2.side],y2.alphaMap=b2.alphaMap,y2.alphaTest=b2.alphaTest,y2.map=b2.map,y2.clipShadows=b2.clipShadows,y2.clippingPlanes=b2.clippingPlanes,y2.clipIntersection=b2.clipIntersection,y2.displacementMap=b2.displacementMap,y2.displacementScale=b2.displacementScale,y2.displacementBias=b2.displacementBias,y2.wireframeLinewidth=b2.wireframeLinewidth,y2.linewidth=b2.linewidth,te.isPointLight===!0&&y2.isMeshDistanceMaterial===!0){const ue=F.properties.get(y2);ue.light=te}return y2}function F2(j2,b2,te,x2,y2){if(j2.visible===!1)return;if(j2.layers.test(b2.layers)&&(j2.isMesh||j2.isLine||j2.isPoints)&&(j2.castShadow||j2.receiveShadow&&y2===Uo)&&(!j2.frustumCulled||T.intersectsObject(j2))){j2.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,j2.matrixWorld);const N2=v.update(j2),he=j2.material;if(Array.isArray(he)){const ce=N2.groups;for(let xe=0,Me=ce.length;xe<Me;xe++){const ne=ce[xe],Te=he[ne.materialIndex];if(Te&&Te.visible){const Ee=g2(j2,Te,x2,y2);j2.onBeforeShadow(F,j2,b2,te,N2,Ee,ne),F.renderBufferDirect(te,null,N2,Ee,j2,ne),j2.onAfterShadow(F,j2,b2,te,N2,Ee,ne)}}}else if(he.visible){const ce=g2(j2,he,x2,y2);j2.onBeforeShadow(F,j2,b2,te,N2,ce,null),F.renderBufferDirect(te,null,N2,ce,j2,null),j2.onAfterShadow(F,j2,b2,te,N2,ce,null)}}const ue=j2.children;for(let N2=0,he=ue.length;N2<he;N2++)F2(ue[N2],b2,te,x2,y2)}function X2(j2){j2.target.removeEventListener("dispose",X2);for(const te in n2){const x2=n2[te],y2=j2.target.uuid;y2 in x2&&(x2[y2].dispose(),delete x2[y2])}}}function w_2(F){function v(){let _2=!1;const Y2=new Ln;let _e=null;const Le=new Ln(0,0,0,0);return{setMask:function(Je){_e!==Je&&!_2&&(F.colorMask(Je,Je,Je,Je),_e=Je)},setLocked:function(Je){_2=Je},setClear:function(Je,$t,zt,I0,fn){fn===!0&&(Je*=I0,$t*=I0,zt*=I0),Y2.set(Je,$t,zt,I0),Le.equals(Y2)===!1&&(F.clearColor(Je,$t,zt,I0),Le.copy(Y2))},reset:function(){_2=!1,_e=null,Le.set(-1,0,0,0)}}}function x(){let _2=!1,Y2=null,_e=null,Le=null;return{setTest:function(Je){Je?Ke(F.DEPTH_TEST):He(F.DEPTH_TEST)},setMask:function(Je){Y2!==Je&&!_2&&(F.depthMask(Je),Y2=Je)},setFunc:function(Je){if(_e!==Je){switch(Je){case E42:F.depthFunc(F.NEVER);break;case R42:F.depthFunc(F.ALWAYS);break;case T42:F.depthFunc(F.LESS);break;case il:F.depthFunc(F.LEQUAL);break;case D42:F.depthFunc(F.EQUAL);break;case I42:F.depthFunc(F.GEQUAL);break;case P42:F.depthFunc(F.GREATER);break;case b42:F.depthFunc(F.NOTEQUAL);break;default:F.depthFunc(F.LEQUAL)}_e=Je}},setLocked:function(Je){_2=Je},setClear:function(Je){Le!==Je&&(F.clearDepth(Je),Le=Je)},reset:function(){_2=!1,Y2=null,_e=null,Le=null}}}function T(){let _2=!1,Y2=null,_e=null,Le=null,Je=null,$t=null,zt=null,I0=null,fn=null;return{setTest:function(a0){_2||(a0?Ke(F.STENCIL_TEST):He(F.STENCIL_TEST))},setMask:function(a0){Y2!==a0&&!_2&&(F.stencilMask(a0),Y2=a0)},setFunc:function(a0,Y0,q0){(_e!==a0||Le!==Y0||Je!==q0)&&(F.stencilFunc(a0,Y0,q0),_e=a0,Le=Y0,Je=q0)},setOp:function(a0,Y0,q0){($t!==a0||zt!==Y0||I0!==q0)&&(F.stencilOp(a0,Y0,q0),$t=a0,zt=Y0,I0=q0)},setLocked:function(a0){_2=a0},setClear:function(a0){fn!==a0&&(F.clearStencil(a0),fn=a0)},reset:function(){_2=!1,Y2=null,_e=null,Le=null,Je=null,$t=null,zt=null,I0=null,fn=null}}}const O=new v,V=new x,Z=new T,q=new WeakMap,e2=new WeakMap;let n2={},s2={},h=new WeakMap,p2=[],m2=null,B2=!1,C2=null,l2=null,o2=null,P2=null,g2=null,F2=null,X2=null,j2=new o0(0,0,0),b2=0,te=!1,x2=null,y2=null,Q2=null,ue=null,N2=null;const he=F.getParameter(F.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,xe=0;const Me=F.getParameter(F.VERSION);Me.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(Me)[1]),ce=xe>=1):Me.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),ce=xe>=2);let ne=null,Te={};const Ee=F.getParameter(F.SCISSOR_BOX),st=F.getParameter(F.VIEWPORT),Wt=new Ln().fromArray(Ee),s0=new Ln().fromArray(st);function re(_2,Y2,_e,Le){const Je=new Uint8Array(4),$t=F.createTexture();F.bindTexture(_2,$t),F.texParameteri(_2,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(_2,F.TEXTURE_MAG_FILTER,F.NEAREST);for(let zt=0;zt<_e;zt++)_2===F.TEXTURE_3D||_2===F.TEXTURE_2D_ARRAY?F.texImage3D(Y2,0,F.RGBA,1,1,Le,0,F.RGBA,F.UNSIGNED_BYTE,Je):F.texImage2D(Y2+zt,0,F.RGBA,1,1,0,F.RGBA,F.UNSIGNED_BYTE,Je);return $t}const Re={};Re[F.TEXTURE_2D]=re(F.TEXTURE_2D,F.TEXTURE_2D,1),Re[F.TEXTURE_CUBE_MAP]=re(F.TEXTURE_CUBE_MAP,F.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[F.TEXTURE_2D_ARRAY]=re(F.TEXTURE_2D_ARRAY,F.TEXTURE_2D_ARRAY,1,1),Re[F.TEXTURE_3D]=re(F.TEXTURE_3D,F.TEXTURE_3D,1,1),O.setClear(0,0,0,1),V.setClear(1),Z.setClear(0),Ke(F.DEPTH_TEST),V.setFunc(il),Bt(!1),m0(dU),Ke(F.CULL_FACE),at(k1);function Ke(_2){n2[_2]!==!0&&(F.enable(_2),n2[_2]=!0)}function He(_2){n2[_2]!==!1&&(F.disable(_2),n2[_2]=!1)}function Rt(_2,Y2){return s2[_2]!==Y2?(F.bindFramebuffer(_2,Y2),s2[_2]=Y2,_2===F.DRAW_FRAMEBUFFER&&(s2[F.FRAMEBUFFER]=Y2),_2===F.FRAMEBUFFER&&(s2[F.DRAW_FRAMEBUFFER]=Y2),!0):!1}function Pt(_2,Y2){let _e=p2,Le=!1;if(_2){_e=h.get(Y2),_e===void 0&&(_e=[],h.set(Y2,_e));const Je=_2.textures;if(_e.length!==Je.length||_e[0]!==F.COLOR_ATTACHMENT0){for(let $t=0,zt=Je.length;$t<zt;$t++)_e[$t]=F.COLOR_ATTACHMENT0+$t;_e.length=Je.length,Le=!0}}else _e[0]!==F.BACK&&(_e[0]=F.BACK,Le=!0);Le&&F.drawBuffers(_e)}function Mt(_2){return m2!==_2?(F.useProgram(_2),m2=_2,!0):!1}const H2={[ts]:F.FUNC_ADD,[_42]:F.FUNC_SUBTRACT,[c42]:F.FUNC_REVERSE_SUBTRACT};H2[m42]=F.MIN,H2[h42]=F.MAX;const Ht={[A42]:F.ZERO,[d42]:F.ONE,[a42]:F.SRC_COLOR,[m6]:F.SRC_ALPHA,[S42]:F.SRC_ALPHA_SATURATE,[k42]:F.DST_COLOR,[g42]:F.DST_ALPHA,[y42]:F.ONE_MINUS_SRC_COLOR,[h6]:F.ONE_MINUS_SRC_ALPHA,[B42]:F.ONE_MINUS_DST_COLOR,[v42]:F.ONE_MINUS_DST_ALPHA,[C42]:F.CONSTANT_COLOR,[w42]:F.ONE_MINUS_CONSTANT_COLOR,[x42]:F.CONSTANT_ALPHA,[M42]:F.ONE_MINUS_CONSTANT_ALPHA};function at(_2,Y2,_e,Le,Je,$t,zt,I0,fn,a0){if(_2===k1){B2===!0&&(He(F.BLEND),B2=!1);return}if(B2===!1&&(Ke(F.BLEND),B2=!0),_2!==p42){if(_2!==C2||a0!==te){if((l2!==ts||g2!==ts)&&(F.blendEquation(F.FUNC_ADD),l2=ts,g2=ts),a0)switch(_2){case f4:F.blendFuncSeparate(F.ONE,F.ONE_MINUS_SRC_ALPHA,F.ONE,F.ONE_MINUS_SRC_ALPHA);break;case aU:F.blendFunc(F.ONE,F.ONE);break;case yU:F.blendFuncSeparate(F.ZERO,F.ONE_MINUS_SRC_COLOR,F.ZERO,F.ONE);break;case gU:F.blendFuncSeparate(F.ZERO,F.SRC_COLOR,F.ZERO,F.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_2);break}else switch(_2){case f4:F.blendFuncSeparate(F.SRC_ALPHA,F.ONE_MINUS_SRC_ALPHA,F.ONE,F.ONE_MINUS_SRC_ALPHA);break;case aU:F.blendFunc(F.SRC_ALPHA,F.ONE);break;case yU:F.blendFuncSeparate(F.ZERO,F.ONE_MINUS_SRC_COLOR,F.ZERO,F.ONE);break;case gU:F.blendFunc(F.ZERO,F.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_2);break}o2=null,P2=null,F2=null,X2=null,j2.set(0,0,0),b2=0,C2=_2,te=a0}return}Je=Je||Y2,$t=$t||_e,zt=zt||Le,(Y2!==l2||Je!==g2)&&(F.blendEquationSeparate(H2[Y2],H2[Je]),l2=Y2,g2=Je),(_e!==o2||Le!==P2||$t!==F2||zt!==X2)&&(F.blendFuncSeparate(Ht[_e],Ht[Le],Ht[$t],Ht[zt]),o2=_e,P2=Le,F2=$t,X2=zt),(I0.equals(j2)===!1||fn!==b2)&&(F.blendColor(I0.r,I0.g,I0.b,fn),j2.copy(I0),b2=fn),C2=_2,te=!1}function N0(_2,Y2){_2.side===Go?He(F.CULL_FACE):Ke(F.CULL_FACE);let _e=_2.side===bi;Y2&&(_e=!_e),Bt(_e),_2.blending===f4&&_2.transparent===!1?at(k1):at(_2.blending,_2.blendEquation,_2.blendSrc,_2.blendDst,_2.blendEquationAlpha,_2.blendSrcAlpha,_2.blendDstAlpha,_2.blendColor,_2.blendAlpha,_2.premultipliedAlpha),V.setFunc(_2.depthFunc),V.setTest(_2.depthTest),V.setMask(_2.depthWrite),O.setMask(_2.colorWrite);const Le=_2.stencilWrite;Z.setTest(Le),Le&&(Z.setMask(_2.stencilWriteMask),Z.setFunc(_2.stencilFunc,_2.stencilRef,_2.stencilFuncMask),Z.setOp(_2.stencilFail,_2.stencilZFail,_2.stencilZPass)),A2(_2.polygonOffset,_2.polygonOffsetFactor,_2.polygonOffsetUnits),_2.alphaToCoverage===!0?Ke(F.SAMPLE_ALPHA_TO_COVERAGE):He(F.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(_2){x2!==_2&&(_2?F.frontFace(F.CW):F.frontFace(F.CCW),x2=_2)}function m0(_2){_2!==u42?(Ke(F.CULL_FACE),_2!==y2&&(_2===dU?F.cullFace(F.BACK):_2===f42?F.cullFace(F.FRONT):F.cullFace(F.FRONT_AND_BACK))):He(F.CULL_FACE),y2=_2}function R2(_2){_2!==Q2&&(ce&&F.lineWidth(_2),Q2=_2)}function A2(_2,Y2,_e){_2?(Ke(F.POLYGON_OFFSET_FILL),(ue!==Y2||N2!==_e)&&(F.polygonOffset(Y2,_e),ue=Y2,N2=_e)):He(F.POLYGON_OFFSET_FILL)}function K2(_2){_2?Ke(F.SCISSOR_TEST):He(F.SCISSOR_TEST)}function fe(_2){_2===void 0&&(_2=F.TEXTURE0+he-1),ne!==_2&&(F.activeTexture(_2),ne=_2)}function ge(_2,Y2,_e){_e===void 0&&(ne===null?_e=F.TEXTURE0+he-1:_e=ne);let Le=Te[_e];Le===void 0&&(Le={type:void 0,texture:void 0},Te[_e]=Le),(Le.type!==_2||Le.texture!==Y2)&&(ne!==_e&&(F.activeTexture(_e),ne=_e),F.bindTexture(_2,Y2||Re[_2]),Le.type=_2,Le.texture=Y2)}function Ae(){const _2=Te[ne];_2!==void 0&&_2.type!==void 0&&(F.bindTexture(_2.type,null),_2.type=void 0,_2.texture=void 0)}function ht(){try{F.compressedTexImage2D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function Ce(){try{F.compressedTexImage3D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function ct(){try{F.texSubImage2D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function yt(){try{F.texSubImage3D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function je(){try{F.compressedTexSubImage2D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function Qe(){try{F.compressedTexSubImage3D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function St(){try{F.texStorage2D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function rt(){try{F.texStorage3D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function ot(){try{F.texImage2D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function Kt(){try{F.texImage3D.apply(F,arguments)}catch(_2){console.error("THREE.WebGLState:",_2)}}function Nt(_2){Wt.equals(_2)===!1&&(F.scissor(_2.x,_2.y,_2.z,_2.w),Wt.copy(_2))}function u0(_2){s0.equals(_2)===!1&&(F.viewport(_2.x,_2.y,_2.z,_2.w),s0.copy(_2))}function n0(_2,Y2){let _e=e2.get(Y2);_e===void 0&&(_e=new WeakMap,e2.set(Y2,_e));let Le=_e.get(_2);Le===void 0&&(Le=F.getUniformBlockIndex(Y2,_2.name),_e.set(_2,Le))}function f0(_2,Y2){const Le=e2.get(Y2).get(_2);q.get(Y2)!==Le&&(F.uniformBlockBinding(Y2,Le,_2.__bindingPointIndex),q.set(Y2,Le))}function lt(){F.disable(F.BLEND),F.disable(F.CULL_FACE),F.disable(F.DEPTH_TEST),F.disable(F.POLYGON_OFFSET_FILL),F.disable(F.SCISSOR_TEST),F.disable(F.STENCIL_TEST),F.disable(F.SAMPLE_ALPHA_TO_COVERAGE),F.blendEquation(F.FUNC_ADD),F.blendFunc(F.ONE,F.ZERO),F.blendFuncSeparate(F.ONE,F.ZERO,F.ONE,F.ZERO),F.blendColor(0,0,0,0),F.colorMask(!0,!0,!0,!0),F.clearColor(0,0,0,0),F.depthMask(!0),F.depthFunc(F.LESS),F.clearDepth(1),F.stencilMask(4294967295),F.stencilFunc(F.ALWAYS,0,4294967295),F.stencilOp(F.KEEP,F.KEEP,F.KEEP),F.clearStencil(0),F.cullFace(F.BACK),F.frontFace(F.CCW),F.polygonOffset(0,0),F.activeTexture(F.TEXTURE0),F.bindFramebuffer(F.FRAMEBUFFER,null),F.bindFramebuffer(F.DRAW_FRAMEBUFFER,null),F.bindFramebuffer(F.READ_FRAMEBUFFER,null),F.useProgram(null),F.lineWidth(1),F.scissor(0,0,F.canvas.width,F.canvas.height),F.viewport(0,0,F.canvas.width,F.canvas.height),n2={},ne=null,Te={},s2={},h=new WeakMap,p2=[],m2=null,B2=!1,C2=null,l2=null,o2=null,P2=null,g2=null,F2=null,X2=null,j2=new o0(0,0,0),b2=0,te=!1,x2=null,y2=null,Q2=null,ue=null,N2=null,Wt.set(0,0,F.canvas.width,F.canvas.height),s0.set(0,0,F.canvas.width,F.canvas.height),O.reset(),V.reset(),Z.reset()}return{buffers:{color:O,depth:V,stencil:Z},enable:Ke,disable:He,bindFramebuffer:Rt,drawBuffers:Pt,useProgram:Mt,setBlending:at,setMaterial:N0,setFlipSided:Bt,setCullFace:m0,setLineWidth:R2,setPolygonOffset:A2,setScissorTest:K2,activeTexture:fe,bindTexture:ge,unbindTexture:Ae,compressedTexImage2D:ht,compressedTexImage3D:Ce,texImage2D:ot,texImage3D:Kt,updateUBOMapping:n0,uniformBlockBinding:f0,texStorage2D:St,texStorage3D:rt,texSubImage2D:ct,texSubImage3D:yt,compressedTexSubImage2D:je,compressedTexSubImage3D:Qe,scissor:Nt,viewport:u0,reset:lt}}function x_2(F,v,x,T,O,V,Z){const q=v.has("WEBGL_multisampled_render_to_texture")?v.get("WEBGL_multisampled_render_to_texture"):null,e2=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),n2=new It,s2=new WeakMap;let h;const p2=new WeakMap;let m2=!1;try{m2=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B2(R2,A2){return m2?new OffscreenCanvas(R2,A2):ll("canvas")}function C2(R2,A2,K2){let fe=1;const ge=m0(R2);if((ge.width>K2||ge.height>K2)&&(fe=K2/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&R2 instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R2 instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R2 instanceof ImageBitmap||typeof VideoFrame<"u"&&R2 instanceof VideoFrame){const Ae=Math.floor(fe*ge.width),ht=Math.floor(fe*ge.height);h===void 0&&(h=B2(Ae,ht));const Ce=A2?B2(Ae,ht):h;return Ce.width=Ae,Ce.height=ht,Ce.getContext("2d").drawImage(R2,0,0,Ae,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ae+"x"+ht+")."),Ce}else return"data"in R2&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R2;return R2}function l2(R2){return R2.generateMipmaps&&R2.minFilter!==yr&&R2.minFilter!==Lr}function o2(R2){F.generateMipmap(R2)}function P2(R2,A2,K2,fe,ge=!1){if(R2!==null){if(F[R2]!==void 0)return F[R2];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R2+"'")}let Ae=A2;if(A2===F.RED&&(K2===F.FLOAT&&(Ae=F.R32F),K2===F.HALF_FLOAT&&(Ae=F.R16F),K2===F.UNSIGNED_BYTE&&(Ae=F.R8)),A2===F.RED_INTEGER&&(K2===F.UNSIGNED_BYTE&&(Ae=F.R8UI),K2===F.UNSIGNED_SHORT&&(Ae=F.R16UI),K2===F.UNSIGNED_INT&&(Ae=F.R32UI),K2===F.BYTE&&(Ae=F.R8I),K2===F.SHORT&&(Ae=F.R16I),K2===F.INT&&(Ae=F.R32I)),A2===F.RG&&(K2===F.FLOAT&&(Ae=F.RG32F),K2===F.HALF_FLOAT&&(Ae=F.RG16F),K2===F.UNSIGNED_BYTE&&(Ae=F.RG8)),A2===F.RG_INTEGER&&(K2===F.UNSIGNED_BYTE&&(Ae=F.RG8UI),K2===F.UNSIGNED_SHORT&&(Ae=F.RG16UI),K2===F.UNSIGNED_INT&&(Ae=F.RG32UI),K2===F.BYTE&&(Ae=F.RG8I),K2===F.SHORT&&(Ae=F.RG16I),K2===F.INT&&(Ae=F.RG32I)),A2===F.RGB&&K2===F.UNSIGNED_INT_5_9_9_9_REV&&(Ae=F.RGB9_E5),A2===F.RGBA){const ht=ge?ol:D0.getTransfer(fe);K2===F.FLOAT&&(Ae=F.RGBA32F),K2===F.HALF_FLOAT&&(Ae=F.RGBA16F),K2===F.UNSIGNED_BYTE&&(Ae=ht===H0?F.SRGB8_ALPHA8:F.RGBA8),K2===F.UNSIGNED_SHORT_4_4_4_4&&(Ae=F.RGBA4),K2===F.UNSIGNED_SHORT_5_5_5_1&&(Ae=F.RGB5_A1)}return(Ae===F.R16F||Ae===F.R32F||Ae===F.RG16F||Ae===F.RG32F||Ae===F.RGBA16F||Ae===F.RGBA32F)&&v.get("EXT_color_buffer_float"),Ae}function g2(R2,A2){return l2(R2)===!0||R2.isFramebufferTexture&&R2.minFilter!==yr&&R2.minFilter!==Lr?Math.log2(Math.max(A2.width,A2.height))+1:R2.mipmaps!==void 0&&R2.mipmaps.length>0?R2.mipmaps.length:R2.isCompressedTexture&&Array.isArray(R2.image)?A2.mipmaps.length:1}function F2(R2){const A2=R2.target;A2.removeEventListener("dispose",F2),j2(A2),A2.isVideoTexture&&s2.delete(A2)}function X2(R2){const A2=R2.target;A2.removeEventListener("dispose",X2),te(A2)}function j2(R2){const A2=T.get(R2);if(A2.__webglInit===void 0)return;const K2=R2.source,fe=p2.get(K2);if(fe){const ge=fe[A2.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b2(R2),Object.keys(fe).length===0&&p2.delete(K2)}T.remove(R2)}function b2(R2){const A2=T.get(R2);F.deleteTexture(A2.__webglTexture);const K2=R2.source,fe=p2.get(K2);delete fe[A2.__cacheKey],Z.memory.textures--}function te(R2){const A2=T.get(R2);if(R2.depthTexture&&R2.depthTexture.dispose(),R2.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A2.__webglFramebuffer[fe]))for(let ge=0;ge<A2.__webglFramebuffer[fe].length;ge++)F.deleteFramebuffer(A2.__webglFramebuffer[fe][ge]);else F.deleteFramebuffer(A2.__webglFramebuffer[fe]);A2.__webglDepthbuffer&&F.deleteRenderbuffer(A2.__webglDepthbuffer[fe])}else{if(Array.isArray(A2.__webglFramebuffer))for(let fe=0;fe<A2.__webglFramebuffer.length;fe++)F.deleteFramebuffer(A2.__webglFramebuffer[fe]);else F.deleteFramebuffer(A2.__webglFramebuffer);if(A2.__webglDepthbuffer&&F.deleteRenderbuffer(A2.__webglDepthbuffer),A2.__webglMultisampledFramebuffer&&F.deleteFramebuffer(A2.__webglMultisampledFramebuffer),A2.__webglColorRenderbuffer)for(let fe=0;fe<A2.__webglColorRenderbuffer.length;fe++)A2.__webglColorRenderbuffer[fe]&&F.deleteRenderbuffer(A2.__webglColorRenderbuffer[fe]);A2.__webglDepthRenderbuffer&&F.deleteRenderbuffer(A2.__webglDepthRenderbuffer)}const K2=R2.textures;for(let fe=0,ge=K2.length;fe<ge;fe++){const Ae=T.get(K2[fe]);Ae.__webglTexture&&(F.deleteTexture(Ae.__webglTexture),Z.memory.textures--),T.remove(K2[fe])}T.remove(R2)}let x2=0;function y2(){x2=0}function Q2(){const R2=x2;return R2>=O.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R2+" texture units while this GPU supports only "+O.maxTextures),x2+=1,R2}function ue(R2){const A2=[];return A2.push(R2.wrapS),A2.push(R2.wrapT),A2.push(R2.wrapR||0),A2.push(R2.magFilter),A2.push(R2.minFilter),A2.push(R2.anisotropy),A2.push(R2.internalFormat),A2.push(R2.format),A2.push(R2.type),A2.push(R2.generateMipmaps),A2.push(R2.premultiplyAlpha),A2.push(R2.flipY),A2.push(R2.unpackAlignment),A2.push(R2.colorSpace),A2.join()}function N2(R2,A2){const K2=T.get(R2);if(R2.isVideoTexture&&N0(R2),R2.isRenderTargetTexture===!1&&R2.version>0&&K2.__version!==R2.version){const fe=R2.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(K2,R2,A2);return}}x.bindTexture(F.TEXTURE_2D,K2.__webglTexture,F.TEXTURE0+A2)}function he(R2,A2){const K2=T.get(R2);if(R2.version>0&&K2.__version!==R2.version){Wt(K2,R2,A2);return}x.bindTexture(F.TEXTURE_2D_ARRAY,K2.__webglTexture,F.TEXTURE0+A2)}function ce(R2,A2){const K2=T.get(R2);if(R2.version>0&&K2.__version!==R2.version){Wt(K2,R2,A2);return}x.bindTexture(F.TEXTURE_3D,K2.__webglTexture,F.TEXTURE0+A2)}function xe(R2,A2){const K2=T.get(R2);if(R2.version>0&&K2.__version!==R2.version){s0(K2,R2,A2);return}x.bindTexture(F.TEXTURE_CUBE_MAP,K2.__webglTexture,F.TEXTURE0+A2)}const Me={[a6]:F.REPEAT,[is]:F.CLAMP_TO_EDGE,[y6]:F.MIRRORED_REPEAT},ne={[yr]:F.NEAREST,[V42]:F.NEAREST_MIPMAP_NEAREST,[P8]:F.NEAREST_MIPMAP_LINEAR,[Lr]:F.LINEAR,[R_]:F.LINEAR_MIPMAP_NEAREST,[rs]:F.LINEAR_MIPMAP_LINEAR},Te={[ru2]:F.NEVER,[pu2]:F.ALWAYS,[ou2]:F.LESS,[fW]:F.LEQUAL,[su2]:F.EQUAL,[lu2]:F.GEQUAL,[uu2]:F.GREATER,[fu2]:F.NOTEQUAL};function Ee(R2,A2){if(A2.type===v1&&v.has("OES_texture_float_linear")===!1&&(A2.magFilter===Lr||A2.magFilter===R_||A2.magFilter===P8||A2.magFilter===rs||A2.minFilter===Lr||A2.minFilter===R_||A2.minFilter===P8||A2.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),F.texParameteri(R2,F.TEXTURE_WRAP_S,Me[A2.wrapS]),F.texParameteri(R2,F.TEXTURE_WRAP_T,Me[A2.wrapT]),(R2===F.TEXTURE_3D||R2===F.TEXTURE_2D_ARRAY)&&F.texParameteri(R2,F.TEXTURE_WRAP_R,Me[A2.wrapR]),F.texParameteri(R2,F.TEXTURE_MAG_FILTER,ne[A2.magFilter]),F.texParameteri(R2,F.TEXTURE_MIN_FILTER,ne[A2.minFilter]),A2.compareFunction&&(F.texParameteri(R2,F.TEXTURE_COMPARE_MODE,F.COMPARE_REF_TO_TEXTURE),F.texParameteri(R2,F.TEXTURE_COMPARE_FUNC,Te[A2.compareFunction])),v.has("EXT_texture_filter_anisotropic")===!0){if(A2.magFilter===yr||A2.minFilter!==P8&&A2.minFilter!==rs||A2.type===v1&&v.has("OES_texture_float_linear")===!1)return;if(A2.anisotropy>1||T.get(A2).__currentAnisotropy){const K2=v.get("EXT_texture_filter_anisotropic");F.texParameterf(R2,K2.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A2.anisotropy,O.getMaxAnisotropy())),T.get(A2).__currentAnisotropy=A2.anisotropy}}}function st(R2,A2){let K2=!1;R2.__webglInit===void 0&&(R2.__webglInit=!0,A2.addEventListener("dispose",F2));const fe=A2.source;let ge=p2.get(fe);ge===void 0&&(ge={},p2.set(fe,ge));const Ae=ue(A2);if(Ae!==R2.__cacheKey){ge[Ae]===void 0&&(ge[Ae]={texture:F.createTexture(),usedTimes:0},Z.memory.textures++,K2=!0),ge[Ae].usedTimes++;const ht=ge[R2.__cacheKey];ht!==void 0&&(ge[R2.__cacheKey].usedTimes--,ht.usedTimes===0&&b2(A2)),R2.__cacheKey=Ae,R2.__webglTexture=ge[Ae].texture}return K2}function Wt(R2,A2,K2){let fe=F.TEXTURE_2D;(A2.isDataArrayTexture||A2.isCompressedArrayTexture)&&(fe=F.TEXTURE_2D_ARRAY),A2.isData3DTexture&&(fe=F.TEXTURE_3D);const ge=st(R2,A2),Ae=A2.source;x.bindTexture(fe,R2.__webglTexture,F.TEXTURE0+K2);const ht=T.get(Ae);if(Ae.version!==ht.__version||ge===!0){x.activeTexture(F.TEXTURE0+K2);const Ce=D0.getPrimaries(D0.workingColorSpace),ct=A2.colorSpace===g1?null:D0.getPrimaries(A2.colorSpace),yt=A2.colorSpace===g1||Ce===ct?F.NONE:F.BROWSER_DEFAULT_WEBGL;F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,A2.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A2.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,A2.unpackAlignment),F.pixelStorei(F.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let je=C2(A2.image,!1,O.maxTextureSize);je=Bt(A2,je);const Qe=V.convert(A2.format,A2.colorSpace),St=V.convert(A2.type);let rt=P2(A2.internalFormat,Qe,St,A2.colorSpace,A2.isVideoTexture);Ee(fe,A2);let ot;const Kt=A2.mipmaps,Nt=A2.isVideoTexture!==!0&&rt!==sW,u0=ht.__version===void 0||ge===!0,n0=Ae.dataReady,f0=g2(A2,je);if(A2.isDepthTexture)rt=F.DEPTH_COMPONENT16,A2.type===v1?rt=F.DEPTH_COMPONENT32F:A2.type===m4?rt=F.DEPTH_COMPONENT24:A2.type===Iu&&(rt=F.DEPTH24_STENCIL8),u0&&(Nt?x.texStorage2D(F.TEXTURE_2D,1,rt,je.width,je.height):x.texImage2D(F.TEXTURE_2D,0,rt,je.width,je.height,0,Qe,St,null));else if(A2.isDataTexture)if(Kt.length>0){Nt&&u0&&x.texStorage2D(F.TEXTURE_2D,f0,rt,Kt[0].width,Kt[0].height);for(let lt=0,_2=Kt.length;lt<_2;lt++)ot=Kt[lt],Nt?n0&&x.texSubImage2D(F.TEXTURE_2D,lt,0,0,ot.width,ot.height,Qe,St,ot.data):x.texImage2D(F.TEXTURE_2D,lt,rt,ot.width,ot.height,0,Qe,St,ot.data);A2.generateMipmaps=!1}else Nt?(u0&&x.texStorage2D(F.TEXTURE_2D,f0,rt,je.width,je.height),n0&&x.texSubImage2D(F.TEXTURE_2D,0,0,0,je.width,je.height,Qe,St,je.data)):x.texImage2D(F.TEXTURE_2D,0,rt,je.width,je.height,0,Qe,St,je.data);else if(A2.isCompressedTexture)if(A2.isCompressedArrayTexture){Nt&&u0&&x.texStorage3D(F.TEXTURE_2D_ARRAY,f0,rt,Kt[0].width,Kt[0].height,je.depth);for(let lt=0,_2=Kt.length;lt<_2;lt++)ot=Kt[lt],A2.format!==oo?Qe!==null?Nt?n0&&x.compressedTexSubImage3D(F.TEXTURE_2D_ARRAY,lt,0,0,0,ot.width,ot.height,je.depth,Qe,ot.data,0,0):x.compressedTexImage3D(F.TEXTURE_2D_ARRAY,lt,rt,ot.width,ot.height,je.depth,0,ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?n0&&x.texSubImage3D(F.TEXTURE_2D_ARRAY,lt,0,0,0,ot.width,ot.height,je.depth,Qe,St,ot.data):x.texImage3D(F.TEXTURE_2D_ARRAY,lt,rt,ot.width,ot.height,je.depth,0,Qe,St,ot.data)}else{Nt&&u0&&x.texStorage2D(F.TEXTURE_2D,f0,rt,Kt[0].width,Kt[0].height);for(let lt=0,_2=Kt.length;lt<_2;lt++)ot=Kt[lt],A2.format!==oo?Qe!==null?Nt?n0&&x.compressedTexSubImage2D(F.TEXTURE_2D,lt,0,0,ot.width,ot.height,Qe,ot.data):x.compressedTexImage2D(F.TEXTURE_2D,lt,rt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?n0&&x.texSubImage2D(F.TEXTURE_2D,lt,0,0,ot.width,ot.height,Qe,St,ot.data):x.texImage2D(F.TEXTURE_2D,lt,rt,ot.width,ot.height,0,Qe,St,ot.data)}else if(A2.isDataArrayTexture)Nt?(u0&&x.texStorage3D(F.TEXTURE_2D_ARRAY,f0,rt,je.width,je.height,je.depth),n0&&x.texSubImage3D(F.TEXTURE_2D_ARRAY,0,0,0,0,je.width,je.height,je.depth,Qe,St,je.data)):x.texImage3D(F.TEXTURE_2D_ARRAY,0,rt,je.width,je.height,je.depth,0,Qe,St,je.data);else if(A2.isData3DTexture)Nt?(u0&&x.texStorage3D(F.TEXTURE_3D,f0,rt,je.width,je.height,je.depth),n0&&x.texSubImage3D(F.TEXTURE_3D,0,0,0,0,je.width,je.height,je.depth,Qe,St,je.data)):x.texImage3D(F.TEXTURE_3D,0,rt,je.width,je.height,je.depth,0,Qe,St,je.data);else if(A2.isFramebufferTexture){if(u0)if(Nt)x.texStorage2D(F.TEXTURE_2D,f0,rt,je.width,je.height);else{let lt=je.width,_2=je.height;for(let Y2=0;Y2<f0;Y2++)x.texImage2D(F.TEXTURE_2D,Y2,rt,lt,_2,0,Qe,St,null),lt>>=1,_2>>=1}}else if(Kt.length>0){if(Nt&&u0){const lt=m0(Kt[0]);x.texStorage2D(F.TEXTURE_2D,f0,rt,lt.width,lt.height)}for(let lt=0,_2=Kt.length;lt<_2;lt++)ot=Kt[lt],Nt?n0&&x.texSubImage2D(F.TEXTURE_2D,lt,0,0,Qe,St,ot):x.texImage2D(F.TEXTURE_2D,lt,rt,Qe,St,ot);A2.generateMipmaps=!1}else if(Nt){if(u0){const lt=m0(je);x.texStorage2D(F.TEXTURE_2D,f0,rt,lt.width,lt.height)}n0&&x.texSubImage2D(F.TEXTURE_2D,0,0,0,Qe,St,je)}else x.texImage2D(F.TEXTURE_2D,0,rt,Qe,St,je);l2(A2)&&o2(fe),ht.__version=Ae.version,A2.onUpdate&&A2.onUpdate(A2)}R2.__version=A2.version}function s0(R2,A2,K2){if(A2.image.length!==6)return;const fe=st(R2,A2),ge=A2.source;x.bindTexture(F.TEXTURE_CUBE_MAP,R2.__webglTexture,F.TEXTURE0+K2);const Ae=T.get(ge);if(ge.version!==Ae.__version||fe===!0){x.activeTexture(F.TEXTURE0+K2);const ht=D0.getPrimaries(D0.workingColorSpace),Ce=A2.colorSpace===g1?null:D0.getPrimaries(A2.colorSpace),ct=A2.colorSpace===g1||ht===Ce?F.NONE:F.BROWSER_DEFAULT_WEBGL;F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,A2.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A2.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,A2.unpackAlignment),F.pixelStorei(F.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const yt=A2.isCompressedTexture||A2.image[0].isCompressedTexture,je=A2.image[0]&&A2.image[0].isDataTexture,Qe=[];for(let _2=0;_2<6;_2++)!yt&&!je?Qe[_2]=C2(A2.image[_2],!0,O.maxCubemapSize):Qe[_2]=je?A2.image[_2].image:A2.image[_2],Qe[_2]=Bt(A2,Qe[_2]);const St=Qe[0],rt=V.convert(A2.format,A2.colorSpace),ot=V.convert(A2.type),Kt=P2(A2.internalFormat,rt,ot,A2.colorSpace),Nt=A2.isVideoTexture!==!0,u0=Ae.__version===void 0||fe===!0,n0=ge.dataReady;let f0=g2(A2,St);Ee(F.TEXTURE_CUBE_MAP,A2);let lt;if(yt){Nt&&u0&&x.texStorage2D(F.TEXTURE_CUBE_MAP,f0,Kt,St.width,St.height);for(let _2=0;_2<6;_2++){lt=Qe[_2].mipmaps;for(let Y2=0;Y2<lt.length;Y2++){const _e=lt[Y2];A2.format!==oo?rt!==null?Nt?n0&&x.compressedTexSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2,0,0,_e.width,_e.height,rt,_e.data):x.compressedTexImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2,Kt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?n0&&x.texSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2,0,0,_e.width,_e.height,rt,ot,_e.data):x.texImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2,Kt,_e.width,_e.height,0,rt,ot,_e.data)}}}else{if(lt=A2.mipmaps,Nt&&u0){lt.length>0&&f0++;const _2=m0(Qe[0]);x.texStorage2D(F.TEXTURE_CUBE_MAP,f0,Kt,_2.width,_2.height)}for(let _2=0;_2<6;_2++)if(je){Nt?n0&&x.texSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,0,0,0,Qe[_2].width,Qe[_2].height,rt,ot,Qe[_2].data):x.texImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,0,Kt,Qe[_2].width,Qe[_2].height,0,rt,ot,Qe[_2].data);for(let Y2=0;Y2<lt.length;Y2++){const Le=lt[Y2].image[_2].image;Nt?n0&&x.texSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2+1,0,0,Le.width,Le.height,rt,ot,Le.data):x.texImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2+1,Kt,Le.width,Le.height,0,rt,ot,Le.data)}}else{Nt?n0&&x.texSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,0,0,0,rt,ot,Qe[_2]):x.texImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,0,Kt,rt,ot,Qe[_2]);for(let Y2=0;Y2<lt.length;Y2++){const _e=lt[Y2];Nt?n0&&x.texSubImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2+1,0,0,rt,ot,_e.image[_2]):x.texImage2D(F.TEXTURE_CUBE_MAP_POSITIVE_X+_2,Y2+1,Kt,rt,ot,_e.image[_2])}}}l2(A2)&&o2(F.TEXTURE_CUBE_MAP),Ae.__version=ge.version,A2.onUpdate&&A2.onUpdate(A2)}R2.__version=A2.version}function re(R2,A2,K2,fe,ge,Ae){const ht=V.convert(K2.format,K2.colorSpace),Ce=V.convert(K2.type),ct=P2(K2.internalFormat,ht,Ce,K2.colorSpace);if(!T.get(A2).__hasExternalTextures){const je=Math.max(1,A2.width>>Ae),Qe=Math.max(1,A2.height>>Ae);ge===F.TEXTURE_3D||ge===F.TEXTURE_2D_ARRAY?x.texImage3D(ge,Ae,ct,je,Qe,A2.depth,0,ht,Ce,null):x.texImage2D(ge,Ae,ct,je,Qe,0,ht,Ce,null)}x.bindFramebuffer(F.FRAMEBUFFER,R2),at(A2)?q.framebufferTexture2DMultisampleEXT(F.FRAMEBUFFER,fe,ge,T.get(K2).__webglTexture,0,Ht(A2)):(ge===F.TEXTURE_2D||ge>=F.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=F.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&F.framebufferTexture2D(F.FRAMEBUFFER,fe,ge,T.get(K2).__webglTexture,Ae),x.bindFramebuffer(F.FRAMEBUFFER,null)}function Re(R2,A2,K2){if(F.bindRenderbuffer(F.RENDERBUFFER,R2),A2.depthBuffer&&!A2.stencilBuffer){let fe=F.DEPTH_COMPONENT24;if(K2||at(A2)){const ge=A2.depthTexture;ge&&ge.isDepthTexture&&(ge.type===v1?fe=F.DEPTH_COMPONENT32F:ge.type===m4&&(fe=F.DEPTH_COMPONENT24));const Ae=Ht(A2);at(A2)?q.renderbufferStorageMultisampleEXT(F.RENDERBUFFER,Ae,fe,A2.width,A2.height):F.renderbufferStorageMultisample(F.RENDERBUFFER,Ae,fe,A2.width,A2.height)}else F.renderbufferStorage(F.RENDERBUFFER,fe,A2.width,A2.height);F.framebufferRenderbuffer(F.FRAMEBUFFER,F.DEPTH_ATTACHMENT,F.RENDERBUFFER,R2)}else if(A2.depthBuffer&&A2.stencilBuffer){const fe=Ht(A2);K2&&at(A2)===!1?F.renderbufferStorageMultisample(F.RENDERBUFFER,fe,F.DEPTH24_STENCIL8,A2.width,A2.height):at(A2)?q.renderbufferStorageMultisampleEXT(F.RENDERBUFFER,fe,F.DEPTH24_STENCIL8,A2.width,A2.height):F.renderbufferStorage(F.RENDERBUFFER,F.DEPTH_STENCIL,A2.width,A2.height),F.framebufferRenderbuffer(F.FRAMEBUFFER,F.DEPTH_STENCIL_ATTACHMENT,F.RENDERBUFFER,R2)}else{const fe=A2.textures;for(let ge=0;ge<fe.length;ge++){const Ae=fe[ge],ht=V.convert(Ae.format,Ae.colorSpace),Ce=V.convert(Ae.type),ct=P2(Ae.internalFormat,ht,Ce,Ae.colorSpace),yt=Ht(A2);K2&&at(A2)===!1?F.renderbufferStorageMultisample(F.RENDERBUFFER,yt,ct,A2.width,A2.height):at(A2)?q.renderbufferStorageMultisampleEXT(F.RENDERBUFFER,yt,ct,A2.width,A2.height):F.renderbufferStorage(F.RENDERBUFFER,ct,A2.width,A2.height)}}F.bindRenderbuffer(F.RENDERBUFFER,null)}function Ke(R2,A2){if(A2&&A2.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(x.bindFramebuffer(F.FRAMEBUFFER,R2),!(A2.depthTexture&&A2.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!T.get(A2.depthTexture).__webglTexture||A2.depthTexture.image.width!==A2.width||A2.depthTexture.image.height!==A2.height)&&(A2.depthTexture.image.width=A2.width,A2.depthTexture.image.height=A2.height,A2.depthTexture.needsUpdate=!0),N2(A2.depthTexture,0);const fe=T.get(A2.depthTexture).__webglTexture,ge=Ht(A2);if(A2.depthTexture.format===l4)at(A2)?q.framebufferTexture2DMultisampleEXT(F.FRAMEBUFFER,F.DEPTH_ATTACHMENT,F.TEXTURE_2D,fe,0,ge):F.framebufferTexture2D(F.FRAMEBUFFER,F.DEPTH_ATTACHMENT,F.TEXTURE_2D,fe,0);else if(A2.depthTexture.format===Tu)at(A2)?q.framebufferTexture2DMultisampleEXT(F.FRAMEBUFFER,F.DEPTH_STENCIL_ATTACHMENT,F.TEXTURE_2D,fe,0,ge):F.framebufferTexture2D(F.FRAMEBUFFER,F.DEPTH_STENCIL_ATTACHMENT,F.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function He(R2){const A2=T.get(R2),K2=R2.isWebGLCubeRenderTarget===!0;if(R2.depthTexture&&!A2.__autoAllocateDepthBuffer){if(K2)throw new Error("target.depthTexture not supported in Cube render targets");Ke(A2.__webglFramebuffer,R2)}else if(K2){A2.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)x.bindFramebuffer(F.FRAMEBUFFER,A2.__webglFramebuffer[fe]),A2.__webglDepthbuffer[fe]=F.createRenderbuffer(),Re(A2.__webglDepthbuffer[fe],R2,!1)}else x.bindFramebuffer(F.FRAMEBUFFER,A2.__webglFramebuffer),A2.__webglDepthbuffer=F.createRenderbuffer(),Re(A2.__webglDepthbuffer,R2,!1);x.bindFramebuffer(F.FRAMEBUFFER,null)}function Rt(R2,A2,K2){const fe=T.get(R2);A2!==void 0&&re(fe.__webglFramebuffer,R2,R2.texture,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,0),K2!==void 0&&He(R2)}function Pt(R2){const A2=R2.texture,K2=T.get(R2),fe=T.get(A2);R2.addEventListener("dispose",X2);const ge=R2.textures,Ae=R2.isWebGLCubeRenderTarget===!0,ht=ge.length>1;if(ht||(fe.__webglTexture===void 0&&(fe.__webglTexture=F.createTexture()),fe.__version=A2.version,Z.memory.textures++),Ae){K2.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A2.mipmaps&&A2.mipmaps.length>0){K2.__webglFramebuffer[Ce]=[];for(let ct=0;ct<A2.mipmaps.length;ct++)K2.__webglFramebuffer[Ce][ct]=F.createFramebuffer()}else K2.__webglFramebuffer[Ce]=F.createFramebuffer()}else{if(A2.mipmaps&&A2.mipmaps.length>0){K2.__webglFramebuffer=[];for(let Ce=0;Ce<A2.mipmaps.length;Ce++)K2.__webglFramebuffer[Ce]=F.createFramebuffer()}else K2.__webglFramebuffer=F.createFramebuffer();if(ht)for(let Ce=0,ct=ge.length;Ce<ct;Ce++){const yt=T.get(ge[Ce]);yt.__webglTexture===void 0&&(yt.__webglTexture=F.createTexture(),Z.memory.textures++)}if(R2.samples>0&&at(R2)===!1){K2.__webglMultisampledFramebuffer=F.createFramebuffer(),K2.__webglColorRenderbuffer=[],x.bindFramebuffer(F.FRAMEBUFFER,K2.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const ct=ge[Ce];K2.__webglColorRenderbuffer[Ce]=F.createRenderbuffer(),F.bindRenderbuffer(F.RENDERBUFFER,K2.__webglColorRenderbuffer[Ce]);const yt=V.convert(ct.format,ct.colorSpace),je=V.convert(ct.type),Qe=P2(ct.internalFormat,yt,je,ct.colorSpace,R2.isXRRenderTarget===!0),St=Ht(R2);F.renderbufferStorageMultisample(F.RENDERBUFFER,St,Qe,R2.width,R2.height),F.framebufferRenderbuffer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,F.RENDERBUFFER,K2.__webglColorRenderbuffer[Ce])}F.bindRenderbuffer(F.RENDERBUFFER,null),R2.depthBuffer&&(K2.__webglDepthRenderbuffer=F.createRenderbuffer(),Re(K2.__webglDepthRenderbuffer,R2,!0)),x.bindFramebuffer(F.FRAMEBUFFER,null)}}if(Ae){x.bindTexture(F.TEXTURE_CUBE_MAP,fe.__webglTexture),Ee(F.TEXTURE_CUBE_MAP,A2);for(let Ce=0;Ce<6;Ce++)if(A2.mipmaps&&A2.mipmaps.length>0)for(let ct=0;ct<A2.mipmaps.length;ct++)re(K2.__webglFramebuffer[Ce][ct],R2,A2,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ct);else re(K2.__webglFramebuffer[Ce],R2,A2,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);l2(A2)&&o2(F.TEXTURE_CUBE_MAP),x.unbindTexture()}else if(ht){for(let Ce=0,ct=ge.length;Ce<ct;Ce++){const yt=ge[Ce],je=T.get(yt);x.bindTexture(F.TEXTURE_2D,je.__webglTexture),Ee(F.TEXTURE_2D,yt),re(K2.__webglFramebuffer,R2,yt,F.COLOR_ATTACHMENT0+Ce,F.TEXTURE_2D,0),l2(yt)&&o2(F.TEXTURE_2D)}x.unbindTexture()}else{let Ce=F.TEXTURE_2D;if((R2.isWebGL3DRenderTarget||R2.isWebGLArrayRenderTarget)&&(Ce=R2.isWebGL3DRenderTarget?F.TEXTURE_3D:F.TEXTURE_2D_ARRAY),x.bindTexture(Ce,fe.__webglTexture),Ee(Ce,A2),A2.mipmaps&&A2.mipmaps.length>0)for(let ct=0;ct<A2.mipmaps.length;ct++)re(K2.__webglFramebuffer[ct],R2,A2,F.COLOR_ATTACHMENT0,Ce,ct);else re(K2.__webglFramebuffer,R2,A2,F.COLOR_ATTACHMENT0,Ce,0);l2(A2)&&o2(Ce),x.unbindTexture()}R2.depthBuffer&&He(R2)}function Mt(R2){const A2=R2.textures;for(let K2=0,fe=A2.length;K2<fe;K2++){const ge=A2[K2];if(l2(ge)){const Ae=R2.isWebGLCubeRenderTarget?F.TEXTURE_CUBE_MAP:F.TEXTURE_2D,ht=T.get(ge).__webglTexture;x.bindTexture(Ae,ht),o2(Ae),x.unbindTexture()}}}function H2(R2){if(R2.samples>0&&at(R2)===!1){const A2=R2.textures,K2=R2.width,fe=R2.height;let ge=F.COLOR_BUFFER_BIT;const Ae=[],ht=R2.stencilBuffer?F.DEPTH_STENCIL_ATTACHMENT:F.DEPTH_ATTACHMENT,Ce=T.get(R2),ct=A2.length>1;if(ct)for(let yt=0;yt<A2.length;yt++)x.bindFramebuffer(F.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),F.framebufferRenderbuffer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,F.RENDERBUFFER,null),x.bindFramebuffer(F.FRAMEBUFFER,Ce.__webglFramebuffer),F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,F.TEXTURE_2D,null,0);x.bindFramebuffer(F.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let yt=0;yt<A2.length;yt++){Ae.push(F.COLOR_ATTACHMENT0+yt),R2.depthBuffer&&Ae.push(ht);const je=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(je===!1&&(R2.depthBuffer&&(ge|=F.DEPTH_BUFFER_BIT),R2.stencilBuffer&&Ce.__isTransmissionRenderTarget!==!0&&(ge|=F.STENCIL_BUFFER_BIT)),ct&&F.framebufferRenderbuffer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.RENDERBUFFER,Ce.__webglColorRenderbuffer[yt]),je===!0&&(F.invalidateFramebuffer(F.READ_FRAMEBUFFER,[ht]),F.invalidateFramebuffer(F.DRAW_FRAMEBUFFER,[ht])),ct){const Qe=T.get(A2[yt]).__webglTexture;F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe,0)}F.blitFramebuffer(0,0,K2,fe,0,0,K2,fe,ge,F.NEAREST),e2&&F.invalidateFramebuffer(F.READ_FRAMEBUFFER,Ae)}if(x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null),ct)for(let yt=0;yt<A2.length;yt++){x.bindFramebuffer(F.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),F.framebufferRenderbuffer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,F.RENDERBUFFER,Ce.__webglColorRenderbuffer[yt]);const je=T.get(A2[yt]).__webglTexture;x.bindFramebuffer(F.FRAMEBUFFER,Ce.__webglFramebuffer),F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,F.TEXTURE_2D,je,0)}x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function Ht(R2){return Math.min(O.maxSamples,R2.samples)}function at(R2){const A2=T.get(R2);return R2.samples>0&&v.has("WEBGL_multisampled_render_to_texture")===!0&&A2.__useRenderToTexture!==!1}function N0(R2){const A2=Z.render.frame;s2.get(R2)!==A2&&(s2.set(R2,A2),R2.update())}function Bt(R2,A2){const K2=R2.colorSpace,fe=R2.format,ge=R2.type;return R2.isCompressedTexture===!0||R2.isVideoTexture===!0||K2!==M1&&K2!==g1&&(D0.getTransfer(K2)===H0?(fe!==oo||ge!==S1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K2)),A2}function m0(R2){return typeof HTMLImageElement<"u"&&R2 instanceof HTMLImageElement?(n2.width=R2.naturalWidth||R2.width,n2.height=R2.naturalHeight||R2.height):typeof VideoFrame<"u"&&R2 instanceof VideoFrame?(n2.width=R2.displayWidth,n2.height=R2.displayHeight):(n2.width=R2.width,n2.height=R2.height),n2}this.allocateTextureUnit=Q2,this.resetTextureUnits=y2,this.setTexture2D=N2,this.setTexture2DArray=he,this.setTexture3D=ce,this.setTextureCube=xe,this.rebindTextures=Rt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=H2,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=re,this.useMultisampledRTT=at}function M_2(F,v){function x(T,O=g1){let V;const Z=D0.getTransfer(O);if(T===S1)return F.UNSIGNED_BYTE;if(T===tW)return F.UNSIGNED_SHORT_4_4_4_4;if(T===nW)return F.UNSIGNED_SHORT_5_5_5_1;if(T===X42)return F.UNSIGNED_INT_5_9_9_9_REV;if(T===z42)return F.BYTE;if(T===Q42)return F.SHORT;if(T===$G)return F.UNSIGNED_SHORT;if(T===eW)return F.INT;if(T===m4)return F.UNSIGNED_INT;if(T===v1)return F.FLOAT;if(T===rl)return F.HALF_FLOAT;if(T===Y42)return F.ALPHA;if(T===q42)return F.RGB;if(T===oo)return F.RGBA;if(T===Z42)return F.LUMINANCE;if(T===J42)return F.LUMINANCE_ALPHA;if(T===l4)return F.DEPTH_COMPONENT;if(T===Tu)return F.DEPTH_STENCIL;if(T===K42)return F.RED;if(T===iW)return F.RED_INTEGER;if(T===$42)return F.RG;if(T===rW)return F.RG_INTEGER;if(T===oW)return F.RGBA_INTEGER;if(T===T_||T===D_||T===I_||T===P_)if(Z===H0)if(V=v.get("WEBGL_compressed_texture_s3tc_srgb"),V!==null){if(T===T_)return V.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(T===D_)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(T===I_)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(T===P_)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(V=v.get("WEBGL_compressed_texture_s3tc"),V!==null){if(T===T_)return V.COMPRESSED_RGB_S3TC_DXT1_EXT;if(T===D_)return V.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(T===I_)return V.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(T===P_)return V.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(T===vU||T===kU||T===BU||T===SU)if(V=v.get("WEBGL_compressed_texture_pvrtc"),V!==null){if(T===vU)return V.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(T===kU)return V.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(T===BU)return V.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(T===SU)return V.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(T===sW)return V=v.get("WEBGL_compressed_texture_etc1"),V!==null?V.COMPRESSED_RGB_ETC1_WEBGL:null;if(T===CU||T===wU)if(V=v.get("WEBGL_compressed_texture_etc"),V!==null){if(T===CU)return Z===H0?V.COMPRESSED_SRGB8_ETC2:V.COMPRESSED_RGB8_ETC2;if(T===wU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:V.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(T===xU||T===MU||T===EU||T===RU||T===TU||T===DU||T===IU||T===PU||T===bU||T===FU||T===LU||T===jU||T===OU||T===NU)if(V=v.get("WEBGL_compressed_texture_astc"),V!==null){if(T===xU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:V.COMPRESSED_RGBA_ASTC_4x4_KHR;if(T===MU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:V.COMPRESSED_RGBA_ASTC_5x4_KHR;if(T===EU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:V.COMPRESSED_RGBA_ASTC_5x5_KHR;if(T===RU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:V.COMPRESSED_RGBA_ASTC_6x5_KHR;if(T===TU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:V.COMPRESSED_RGBA_ASTC_6x6_KHR;if(T===DU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:V.COMPRESSED_RGBA_ASTC_8x5_KHR;if(T===IU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:V.COMPRESSED_RGBA_ASTC_8x6_KHR;if(T===PU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:V.COMPRESSED_RGBA_ASTC_8x8_KHR;if(T===bU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:V.COMPRESSED_RGBA_ASTC_10x5_KHR;if(T===FU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:V.COMPRESSED_RGBA_ASTC_10x6_KHR;if(T===LU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:V.COMPRESSED_RGBA_ASTC_10x8_KHR;if(T===jU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:V.COMPRESSED_RGBA_ASTC_10x10_KHR;if(T===OU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:V.COMPRESSED_RGBA_ASTC_12x10_KHR;if(T===NU)return Z===H0?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:V.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(T===b_||T===UU||T===GU)if(V=v.get("EXT_texture_compression_bptc"),V!==null){if(T===b_)return Z===H0?V.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:V.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(T===UU)return V.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(T===GU)return V.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(T===eu2||T===WU||T===HU||T===VU)if(V=v.get("EXT_texture_compression_rgtc"),V!==null){if(T===b_)return V.COMPRESSED_RED_RGTC1_EXT;if(T===WU)return V.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(T===HU)return V.COMPRESSED_RED_GREEN_RGTC2_EXT;if(T===VU)return V.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return T===Iu?F.UNSIGNED_INT_24_8:F[T]!==void 0?F[T]:null}return{convert:x}}class E_2 extends ar{constructor(v=[]){super(),this.isArrayCamera=!0,this.cameras=v}}class wu extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_2={type:"move"};class o6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V2,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V2),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V2,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V2),this._grip}dispatchEvent(v){return this._targetRay!==null&&this._targetRay.dispatchEvent(v),this._grip!==null&&this._grip.dispatchEvent(v),this._hand!==null&&this._hand.dispatchEvent(v),this}connect(v){if(v&&v.hand){const x=this._hand;if(x)for(const T of v.hand.values())this._getHandJoint(x,T)}return this.dispatchEvent({type:"connected",data:v}),this}disconnect(v){return this.dispatchEvent({type:"disconnected",data:v}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(v,x,T){let O=null,V=null,Z=null;const q=this._targetRay,e2=this._grip,n2=this._hand;if(v&&x.session.visibilityState!=="visible-blurred"){if(n2&&v.hand){Z=!0;for(const C2 of v.hand.values()){const l2=x.getJointPose(C2,T),o2=this._getHandJoint(n2,C2);l2!==null&&(o2.matrix.fromArray(l2.transform.matrix),o2.matrix.decompose(o2.position,o2.rotation,o2.scale),o2.matrixWorldNeedsUpdate=!0,o2.jointRadius=l2.radius),o2.visible=l2!==null}const s2=n2.joints["index-finger-tip"],h=n2.joints["thumb-tip"],p2=s2.position.distanceTo(h.position),m2=.02,B2=.005;n2.inputState.pinching&&p2>m2+B2?(n2.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:v.handedness,target:this})):!n2.inputState.pinching&&p2<=m2-B2&&(n2.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:v.handedness,target:this}))}else e2!==null&&v.gripSpace&&(V=x.getPose(v.gripSpace,T),V!==null&&(e2.matrix.fromArray(V.transform.matrix),e2.matrix.decompose(e2.position,e2.rotation,e2.scale),e2.matrixWorldNeedsUpdate=!0,V.linearVelocity?(e2.hasLinearVelocity=!0,e2.linearVelocity.copy(V.linearVelocity)):e2.hasLinearVelocity=!1,V.angularVelocity?(e2.hasAngularVelocity=!0,e2.angularVelocity.copy(V.angularVelocity)):e2.hasAngularVelocity=!1));q!==null&&(O=x.getPose(v.targetRaySpace,T),O===null&&V!==null&&(O=V),O!==null&&(q.matrix.fromArray(O.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,O.linearVelocity?(q.hasLinearVelocity=!0,q.linearVelocity.copy(O.linearVelocity)):q.hasLinearVelocity=!1,O.angularVelocity?(q.hasAngularVelocity=!0,q.angularVelocity.copy(O.angularVelocity)):q.hasAngularVelocity=!1,this.dispatchEvent(R_2)))}return q!==null&&(q.visible=O!==null),e2!==null&&(e2.visible=V!==null),n2!==null&&(n2.visible=Z!==null),this}_getHandJoint(v,x){if(v.joints[x.jointName]===void 0){const T=new wu;T.matrixAutoUpdate=!1,T.visible=!1,v.joints[x.jointName]=T,v.add(T)}return v.joints[x.jointName]}}const T_2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}
