var _d=Object.defineProperty;var vd=(i,t,e)=>t in i?_d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Z=(i,t,e)=>vd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="169",xd=0,oc=1,Md=2,Uh=1,Nh=2,Un=3,Qn=0,Ue=1,cn=2,Sn=0,as=1,oo=2,lc=3,cc=4,Sd=5,_i=100,yd=101,Ed=102,bd=103,wd=104,Td=200,Ad=201,Cd=202,Rd=203,lo=204,co=205,Pd=206,Dd=207,Ld=208,Id=209,Ud=210,Nd=211,Fd=212,Od=213,Bd=214,ho=0,uo=1,fo=2,cs=3,po=4,mo=5,go=6,_o=7,Fh=0,zd=1,kd=2,Jn=0,Oh=1,Bh=2,zh=3,pl=4,Hd=5,kh=6,Hh=7,Gh=300,hs=301,us=302,vo=303,xo=304,na=306,Xs=1e3,xi=1001,Mo=1002,Ae=1003,Gd=1004,sr=1005,hn=1006,ma=1007,Mi=1008,Gn=1009,Vh=1010,Wh=1011,$s=1012,ml=1013,bi=1014,xn=1015,ti=1016,gl=1017,_l=1018,ds=1020,Xh=35902,$h=1021,qh=1022,dn=1023,Yh=1024,jh=1025,os=1026,fs=1027,vl=1028,xl=1029,Kh=1030,Ml=1031,Sl=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,So=35840,yo=35841,Eo=35842,bo=35843,wo=36196,To=37492,Ao=37496,Co=37808,Ro=37809,Po=37810,Do=37811,Lo=37812,Io=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Ho=37821,Br=36492,Go=36494,Vo=36495,Zh=36283,Wo=36284,Xo=36285,$o=36286,Vd=3200,Jh=3201,Qh=0,Wd=1,Zn="",Ye="srgb",ei="srgb-linear",yl="display-p3",ia="display-p3-linear",Gr="linear",se="srgb",Vr="rec709",Wr="p3",Ui=7680,hc=519,Xd=512,$d=513,qd=514,tu=515,Yd=516,jd=517,Kd=518,Zd=519,qo=35044,uc="300 es",On=2e3,Xr=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const Fs=Math.PI/180,qs=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function El(i,t){return(i%t+t)%t}function Jd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function tf(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function ef(i,t=1){return t-Math.abs(El(i,t*2)-t)}function nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function af(i,t){return i+Math.random()*(t-i)}function of(i){return i*(.5-Math.random())}function lf(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(i){return i*Fs}function hf(i){return i*qs}function uf(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yo={DEG2RAD:Fs,RAD2DEG:qs,generateUUID:Hn,clamp:ye,euclideanModulo:El,mapLinear:Jd,inverseLerp:Qd,lerp:Os,damp:tf,pingpong:ef,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Jt,denormalize:un};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],v=s[0],p=s[3],f=s[6],S=s[1],x=s[4],E=s[7],R=s[2],T=s[5],w=s[8];return r[0]=a*v+o*S+l*R,r[3]=a*p+o*x+l*T,r[6]=a*f+o*E+l*w,r[1]=c*v+h*S+u*R,r[4]=c*p+h*x+u*T,r[7]=c*f+h*E+u*w,r[2]=d*v+m*S+g*R,r[5]=d*p+m*x+g*T,r[8]=d*f+m*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=e*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Nt;function eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){const i=$r("canvas");return i.style.display="block",i}const fc={};function zr(i){i in fc||(fc[i]=!0,console.warn(i))}function gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _f(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pc=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mc=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[ei]:{transfer:Gr,primaries:Vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ye]:{transfer:se,primaries:Vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ia]:{transfer:Gr,primaries:Wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(mc),fromReference:i=>i.applyMatrix3(pc)},[yl]:{transfer:se,primaries:Wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(mc),fromReference:i=>i.applyMatrix3(pc).convertLinearToSRGB()}},xf=new Set([ei,ia]),qt={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ys[t].toReference,s=ys[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ys[i].primaries},getTransfer:function(i){return i===Zn?Gr:ys[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ys[t].luminanceCoefficients)}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Mf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=$r("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;class Re extends _s{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=xi,s=xi,r=hn,a=Mi,o=dn,l=Gn,c=Re.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Hn(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Gh;Re.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(m+1)/2,R=(f+1)/2,T=(h+d)/4,w=(u+v)/4,C=(g+p)/4;return x>E&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ef extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Ef{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*v,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,f*S);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}const E=o*S;if(l=l*p+d*E,c=c*p+m*E,h=h*p+g*E,u=u*p+v*E,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new D,gc=new vs;class wn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),ar.subVectors(this.max,Es),Fi.subVectors(t.a,Es),Oi.subVectors(t.b,Es),Bi.subVectors(t.c,Es),Xn.subVectors(Oi,Fi),$n.subVectors(Bi,Oi),si.subVectors(Fi,Bi);let e=[0,-Xn.z,Xn.y,0,-$n.z,$n.y,0,-si.z,si.y,Xn.z,0,-Xn.x,$n.z,0,-$n.x,si.z,0,-si.x,-Xn.y,Xn.x,0,-$n.y,$n.x,0,-si.y,si.x,0];return!Ma(e,Fi,Oi,Bi,ar)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Fi,Oi,Bi,ar))?!1:(or.crossVectors(Xn,$n),e=[or.x,or.y,or.z],Ma(e,Fi,Oi,Bi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,rr=new wn,Fi=new D,Oi=new D,Bi=new D,Xn=new D,$n=new D,si=new D,Es=new D,ar=new D,or=new D,ri=new D;function Ma(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wf=new wn,bs=new D,Sa=new D;class Ci{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Sa)),this.expandByPoint(bs.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new D,ya=new D,lr=new D,qn=new D,Ea=new D,cr=new D,ba=new D;class Tf{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(ya);const r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=qn.dot(this.direction),l=-qn.dot(lr),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(lr,d),m}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){Ea.subVectors(e,t),cr.subVectors(n,t),ba.crossVectors(Ea,cr);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(qn,cr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,g,v,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,g,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Cf)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Yn.crossVectors(n,Xe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Yn.crossVectors(n,Xe)),Yn.normalize(),hr.crossVectors(Xe,Yn),s[0]=Yn.x,s[4]=hr.x,s[8]=Xe.x,s[1]=Yn.y,s[5]=hr.y,s[9]=Xe.y,s[2]=Yn.z,s[6]=hr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],S=n[3],x=n[7],E=n[11],R=n[15],T=s[0],w=s[4],C=s[8],k=s[12],_=s[1],b=s[5],N=s[9],O=s[13],W=s[2],j=s[6],H=s[10],J=s[14],G=s[3],ht=s[7],ut=s[11],xt=s[15];return r[0]=a*T+o*_+l*W+c*G,r[4]=a*w+o*b+l*j+c*ht,r[8]=a*C+o*N+l*H+c*ut,r[12]=a*k+o*O+l*J+c*xt,r[1]=h*T+u*_+d*W+m*G,r[5]=h*w+u*b+d*j+m*ht,r[9]=h*C+u*N+d*H+m*ut,r[13]=h*k+u*O+d*J+m*xt,r[2]=g*T+v*_+p*W+f*G,r[6]=g*w+v*b+p*j+f*ht,r[10]=g*C+v*N+p*H+f*ut,r[14]=g*k+v*O+p*J+f*xt,r[3]=S*T+x*_+E*W+R*G,r[7]=S*w+x*b+E*j+R*ht,r[11]=S*C+x*N+E*H+R*ut,r[15]=S*k+x*O+E*J+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+v*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],S=u*p*c-v*d*c+v*l*m-o*p*m-u*l*f+o*d*f,x=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,E=h*v*c-g*u*c+g*o*m-a*v*m-h*o*f+a*u*f,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,T=e*S+n*x+s*E+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=S*w,t[1]=(v*d*r-u*p*r-v*s*m+n*p*m+u*s*f-n*d*f)*w,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*w,t[4]=x*w,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*f+e*d*f)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*f-e*l*f)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*w,t[8]=E*w,t[9]=(g*u*r-h*v*r-g*n*m+e*v*m+h*n*f-e*u*f)*w,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*w,t[12]=R*w,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*p+e*u*p)*w,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,v=a*h,p=a*u,f=o*u,S=l*c,x=l*h,E=l*u,R=n.x,T=n.y,w=n.z;return s[0]=(1-(v+f))*R,s[1]=(m+E)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(d+f))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+x)*w,s[9]=(p-S)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/a,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(o===On)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h;let g,v;if(o===On)g=(a+r)*u,v=-2*u;else if(o===Xr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new D,on=new te,Af=new D(0,0,0),Cf=new D(1,1,1),Yn=new D,hr=new D,Xe=new D,_c=new te,vc=new vs;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const xc=new D,ki=new vs,Pn=new te,ur=new D,ws=new D,Pf=new D,Df=new vs,Mc=new D(1,0,0),Sc=new D(0,1,0),yc=new D(0,0,1),Ec={type:"added"},Lf={type:"removed"},Hi={type:"childadded",child:null},wa={type:"childremoved",child:null};class ge extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new D,e=new bn,n=new vs,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Nt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ws,ur,this.up):Pn.lookAt(ur,ws,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Pn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new D(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new D,Dn=new D,Ta=new D,Ln=new D,Gi=new D,Vi=new D,bc=new D,Aa=new D,Ca=new D,Ra=new D,Pa=new ee,Da=new ee,La=new ee;class en{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Dn.subVectors(n,e),Ta.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Dn),l=ln.dot(Ta),c=Dn.dot(Dn),h=Dn.dot(Ta),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Dn.subVectors(t,e),ln.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Vi.subVectors(r,n),Aa.subVectors(t,n);const l=Gi.dot(Aa),c=Vi.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,s);const h=Gi.dot(Ca),u=Vi.dot(Ca);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);Ra.subVectors(t,r);const m=Gi.dot(Ra),g=Vi.dot(Ra);if(g>=0&&m<=g)return e.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Vi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return bc.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(bc,o);const f=1/(p+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=El(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(ye(Te.r*255,0,255))*65536+Math.round(ye(Te.g*255,0,255))*256+Math.round(ye(Te.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ye){qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(dr);const n=Os(jn.h,dr.h,e),s=Os(jn.s,dr.s,e),r=Os(jn.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new It;It.NAMES=ru;let If=0;class Ri extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=as,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,fr=new Et;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),t}}class au extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ou extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uf=0;const Qe=new te,Ua=new ge,Wi=new D,$e=new wn,Ts=new wn,me=new D;class Pe extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?ou:au)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors($e.min,Ts.min),$e.expandByPoint(me),me.addVectors($e.max,Ts.max),$e.expandByPoint(me)):($e.expandByPoint(Ts.min),$e.expandByPoint(Ts.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)me.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),me.add(Wi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,d=new Et,m=new Et,g=new Et,v=new D,p=new D;function f(C,k,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(b),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(b),o[C].add(v),o[k].add(v),o[_].add(v),l[C].add(p),l[k].add(p),l[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,k=S.length;C<k;++C){const _=S[C],b=_.start,N=_.count;for(let O=b,W=b+N;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new D,E=new D,R=new D,T=new D;function w(C){R.fromBufferAttribute(s,C),T.copy(R);const k=o[C];x.copy(k),x.sub(R.multiplyScalar(R.dot(k))).normalize(),E.crossVectors(T,k);const b=E.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,k=S.length;C<k;++C){const _=S[C],b=_.start,N=_.count;for(let O=b,W=b+N;O<W;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new te,ai=new Tf,pr=new Ci,Tc=new D,mr=new D,gr=new D,_r=new D,Na=new D,vr=new D,Ac=new D,xr=new D;class Wt extends ge{constructor(t=new Pe,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,t),a?vr.addScaledVector(Na,h):vr.addScaledVector(Na.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(pr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(pr,Tc)===null||ai.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,R=x;E<R;E+=3){const T=o.getX(E),w=o.getX(E+1),C=o.getX(E+2);s=Mr(this,f,t,n,c,h,u,T,w,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const S=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);s=Mr(this,a,t,n,c,h,u,S,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,R=x;E<R;E+=3){const T=E,w=E+1,C=E+2;s=Mr(this,f,t,n,c,h,u,T,w,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const S=p,x=p+1,E=p+2;s=Mr(this,a,t,n,c,h,u,S,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Nf(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qn,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function Mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,_r);const h=Nf(i,t,e,n,mr,gr,_r,Ac);if(h){const u=new D;en.getBarycoord(Ac,mr,gr,_r,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,l,c,u,new Et)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,l,c,u,new Et)),a&&(h.normal=en.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};en.getNormal(mr,gr,_r,d.normal),h.face=d,h.barycoord=u}return h}class Vn extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(v,p,f,S,x,E,R,T,w,C,k){const _=E/w,b=R/C,N=E/2,O=R/2,W=T/2,j=w+1,H=C+1;let J=0,G=0;const ht=new D;for(let ut=0;ut<H;ut++){const xt=ut*b-O;for(let Xt=0;Xt<j;Xt++){const Kt=Xt*_-N;ht[v]=Kt*S,ht[p]=xt*x,ht[f]=W,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[p]=0,ht[f]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Xt/w),u.push(1-ut/C),J+=1}}for(let ut=0;ut<C;ut++)for(let xt=0;xt<w;xt++){const Xt=d+xt+j*ut,Kt=d+xt+j*(ut+1),$=d+(xt+1)+j*(ut+1),tt=d+(xt+1)+j*ut;l.push(Xt,Kt,tt),l.push(Kt,$,tt),G+=6}o.addGroup(m,G,k),m+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Ff(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Pi={clone:ps,merge:Le};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cu extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new D,Cc=new Et,Rc=new Et;class tn extends cu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,$i=1;class zf extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Xi,$i,t,e);s.layers=this.layers,this.add(s);const r=new tn(Xi,$i,t,e);r.layers=this.layers,this.add(r);const a=new tn(Xi,$i,t,e);a.layers=this.layers,this.add(a);const o=new tn(Xi,$i,t,e);o.layers=this.layers,this.add(o);const l=new tn(Xi,$i,t,e);l.layers=this.layers,this.add(l);const c=new tn(Xi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hu extends Re{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kf extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Sn});r.uniforms.tEquirect.value=e;const a=new Wt(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=hn),new zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Fa=new D,Hf=new D,Gf=new Nt;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fa.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ci,Sr=new D;class bl{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],S=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-m,E-f).normalize(),n[1].setComponents(l+r,d+c,p+m,E+f).normalize(),n[2].setComponents(l+a,d+h,p+g,E+S).normalize(),n[3].setComponents(l-a,d-h,p-g,E-S).normalize(),n[4].setComponents(l-o,d-u,p-v,E-x).normalize(),e===On)n[5].setComponents(l+o,d+u,p+v,E+x).normalize();else if(e===Xr)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class _n extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){const S=f*d-a;for(let x=0;x<c;x++){const E=x*u-r;g.push(E,-S,0),v.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const x=S+c*f,E=S+c*(f+1),R=S+1+c*(f+1),T=S+1+c*f;m.push(x,E,T),m.push(E,R,T)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`
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
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Vp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yg=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:$f,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:jf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:vp,emissivemap_pars_fragment:xp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:yp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:bp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Vp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:Kp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:vm,premultiplied_alpha_fragment:xm,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:ym,roughnessmap_fragment:Em,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Pm,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:$m,cube_vert:qm,cube_frag:Ym,depth_vert:jm,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:ag,meshmatcap_vert:og,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:vg,shadow_vert:xg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:yg},it={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Be={basic:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Le([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Le([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Le([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Le([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Le([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Le([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Le([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Le([it.lights,it.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Be.physical={uniforms:Le([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const yr={r:0,b:0,g:0},li=new bn,Eg=new te;function bg(i,t,e,n,s,r,a){const o=new It(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const E=g(S);E===null?f(o,l):E&&E.isColor&&(f(E,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===na)?(h===void 0&&(h=new Wt(new Vn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:ps(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(x.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(li)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==se,(u!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Wt(new _n(2,2),new He({name:"BackgroundMaterial",uniforms:ps(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(yr,lu(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:v,addToRenderList:p}}function wg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,b,N,O,W){let j=!1;const H=u(O,N,b);r!==H&&(r=H,c(r.object)),j=m(_,O,N,W),j&&g(_,O,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(_,b,N,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,b,N){const O=N.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let j=W[b.id];j===void 0&&(j={},W[b.id]=j);let H=j[O];return H===void 0&&(H=d(l()),j[O]=H),H}function d(_){const b=[],N=[],O=[];for(let W=0;W<e;W++)b[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:O,object:_,attributes:{},index:null}}function m(_,b,N,O){const W=r.attributes,j=b.attributes;let H=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){const ut=W[G];let xt=j[G];if(xt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(_,b,N,O){const W={},j=b.attributes;let H=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){let ut=j[G];ut===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),W[G]=xt,H++}r.attributes=W,r.attributesNum=H,r.index=O}function v(){const _=r.newAttributes;for(let b=0,N=_.length;b<N;b++)_[b]=0}function p(_){f(_,0)}function f(_,b){const N=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;N[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),W[_]!==b&&(i.vertexAttribDivisor(_,b),W[_]=b)}function S(){const _=r.newAttributes,b=r.enabledAttributes;for(let N=0,O=b.length;N<O;N++)b[N]!==_[N]&&(i.disableVertexAttribArray(N),b[N]=0)}function x(_,b,N,O,W,j,H){H===!0?i.vertexAttribIPointer(_,b,N,W,j):i.vertexAttribPointer(_,b,N,O,W,j)}function E(_,b,N,O){v();const W=O.attributes,j=N.getAttributes(),H=b.defaultAttributeValues;for(const J in j){const G=j[J];if(G.location>=0){let ht=W[J];if(ht===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){const ut=ht.normalized,xt=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;const Kt=Xt.buffer,$=Xt.type,tt=Xt.bytesPerElement,_t=$===i.INT||$===i.UNSIGNED_INT||ht.gpuType===ml;if(ht.isInterleavedBufferAttribute){const dt=ht.data,Dt=dt.stride,wt=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)f(G.location+zt,dt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let zt=0;zt<G.locationSize;zt++)x(G.location+zt,xt/G.locationSize,$,ut,Dt*tt,(wt+xt/G.locationSize*zt)*tt,_t)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)f(G.location+dt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let dt=0;dt<G.locationSize;dt++)x(G.location+dt,xt/G.locationSize,$,ut,xt*tt,xt/G.locationSize*dt*tt,_t)}}else if(H!==void 0){const ut=H[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}S()}function R(){C();for(const _ in n){const b=n[_];for(const N in b){const O=b[N];for(const W in O)h(O[W].object),delete O[W];delete b[N]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const N in b){const O=b[N];for(const W in O)h(O[W].object),delete O[W];delete b[N]}delete n[_.id]}function w(_){for(const b in n){const N=n[b];if(N[_.id]===void 0)continue;const O=N[_.id];for(const W in O)h(O[W].object),delete O[W];delete N[_.id]}}function C(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Tg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:R,maxSamples:T}}function Cg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,x=S*4;let E=f.clippingState||null;l.value=E,E=h(g,d,x,m);for(let R=0;R!==x;++R)E[R]=e[R];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,E=m;x!==v;++x,E+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Rg(i){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=hs:o===xo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vo||o===xo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wl extends cu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,Pc=[.125,.215,.35,.446,.526,.582],vi=20,Oa=new wl,Dc=new It;let Ba=null,za=0,ka=0,Ha=!1;const pi=(1+Math.sqrt(5))/2,qi=1/pi,Lc=[new D(-pi,qi,0),new D(pi,qi,0),new D(-qi,0,pi),new D(qi,0,pi),new D(0,pi,-qi),new D(0,pi,qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,ka),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ti,format:dn,colorSpace:ei,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){const o=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Jn,h.autoClear=!1;const m=new Si({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new Wt(new Vn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Dc),v=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;Er(s,S*x,f>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):vi;p>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const f=[];let S=0;for(let w=0;w<vi;++w){const C=w/v,k=Math.exp(-C*C/2);f.push(k),w===0?S+=k:w<p&&(S+=2*k)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[s],R=3*E*(s>x-ns?s-x+ns:0),T=4*(this._cubeSize-E);Er(e,R,T,3*E,2*E),l.setRenderTarget(e),l.render(u,Oa)}}function Pg(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ns?l=Pc[a-i+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,S=new Float32Array(v*g*m),x=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,C=T>2?0:-1,k=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(k,v*g*T),x.set(d,p*g*T);const _=[T,T,T,T,T,T];E.set(_,f*g*T)}const R=new Pe;R.setAttribute("position",new nn(S,v)),R.setAttribute("uv",new nn(x,p)),R.setAttribute("faceIndex",new nn(E,f)),t.push(R),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(i,t,e){const n=new En(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){const n=new Float32Array(vi),s=new D(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Uc(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Nc(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function Lg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===xo,h=l===hs||l===us;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new jo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new jo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ig(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ug(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let x=0,E=S.length;x<E;x+=3){const R=S[x+0],T=S[x+1],w=S[x+2];d.push(R,T,T,w,w,R)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const R=x+0,T=x+1,w=x+2;d.push(R,T,T,w,w,R)}}else return;const p=new(eu(d)?ou:au)(d,1);p.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ng(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S];for(let S=0;S<v.length;S++)e.update(f,n,v[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,t,e){const n=new WeakMap,s=new ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let R=o.attributes.position.count*E,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*T*4*u),C=new iu(w,R,T,u);C.type=xn,C.needsUpdate=!0;const k=E*4;for(let b=0;b<u;b++){const N=f[b],O=S[b],W=x[b],j=R*T*4*b;for(let H=0;H<N.count;H++){const J=H*k;g===!0&&(s.fromBufferAttribute(N,H),w[j+J+0]=s.x,w[j+J+1]=s.y,w[j+J+2]=s.z,w[j+J+3]=0),v===!0&&(s.fromBufferAttribute(O,H),w[j+J+4]=s.x,w[j+J+5]=s.y,w[j+J+6]=s.z,w[j+J+7]=0),p===!0&&(s.fromBufferAttribute(W,H),w[j+J+8]=s.x,w[j+J+9]=s.y,w[j+J+10]=s.z,w[j+J+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Et(R,T)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class du extends Re{constructor(t,e,n,s,r,a,o,l,c,h=os){if(h!==os&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=bi),n===void 0&&h===fs&&(n=ds),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fu=new Re,Fc=new du(1,1),pu=new iu,mu=new bf,gu=new hu,Oc=[],Bc=[],zc=new Float32Array(16),kc=new Float32Array(9),Hc=new Float32Array(4);function xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function Vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),pe(e,n)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;kc.set(n),i.uniformMatrix3fv(this.addr,!1,kc),pe(e,n)}}function Xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),pe(e,n)}}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=tu,r=Fc):r=fu,e.setTexture2D(t||r,s)}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function s0(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return $g;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return Kg;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,t){i.uniform1fv(this.addr,t)}function a0(i,t){const e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function o0(i,t){const e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function l0(i,t){const e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function c0(i,t){const e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h0(i,t){const e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u0(i,t){const e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function d0(i,t){i.uniform1iv(this.addr,t)}function f0(i,t){i.uniform2iv(this.addr,t)}function p0(i,t){i.uniform3iv(this.addr,t)}function m0(i,t){i.uniform4iv(this.addr,t)}function g0(i,t){i.uniform1uiv(this.addr,t)}function _0(i,t){i.uniform2uiv(this.addr,t)}function v0(i,t){i.uniform3uiv(this.addr,t)}function x0(i,t){i.uniform4uiv(this.addr,t)}function M0(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function S0(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function y0(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,r[a])}function E0(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function b0(i){switch(i){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return E0}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b0(e.type)}}class A0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Gc(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),a=Ga.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gc(e,c===void 0?new w0(o,i,t):new T0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new A0(o),Gc(e,u)),e=u}}}class kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);C0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const R0=37297;let P0=0;function D0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function L0(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===Wr&&e===Vr?n="LinearDisplayP3ToLinearSRGB":t===Vr&&e===Wr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case ia:return[n,"LinearTransferOETF"];case Ye:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(t),a)}else return s}function I0(i,t){const e=L0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function U0(i,t){let e;switch(t){case Oh:e="Linear";break;case Bh:e="Reinhard";break;case zh:e="Cineon";break;case pl:e="ACESFilmic";break;case kh:e="AgX";break;case Hh:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new D;function N0(){qt.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function O0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Us(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(z0,H0)}const k0=new Map;function H0(i,t){let e=Ut[t];if(e===void 0){const n=k0.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(G0,V0)}function V0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function X0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function Y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function j0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=W0(e),c=X0(e),h=$0(e),u=q0(e),d=Y0(e),m=F0(e),g=O0(r),v=s.createProgram();let p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),f.length>0&&(f+=`
`)):(p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),f=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Jn?U0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),N0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=Ko(a),a=Xc(a,e),a=$c(a,e),o=Ko(o),o=Xc(o,e),o=$c(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=S+p+a,E=S+f+o,R=Vc(s,s.VERTEX_SHADER,x),T=Vc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(b){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(T).trim();let j=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{const J=Wc(s,R,"vertex"),G=Wc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+J+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(H=!1);H&&(b.diagnostics={runnable:j,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:f}})}s.deleteShader(R),s.deleteShader(T),C=new kr(s,v),k=B0(s,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,R0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let K0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new J0(t),e.set(t,n)),n}}class J0{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}}function Q0(i,t,e,n,s,r,a){const o=new su,l=new Z0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,b,N,O,W){const j=O.fog,H=W.geometry,J=_.isMeshStandardMaterial?O.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),ht=G&&G.mapping===na?G.image.height:null,ut=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const xt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=xt!==void 0?xt.length:0;let Kt=0;H.morphAttributes.position!==void 0&&(Kt=1),H.morphAttributes.normal!==void 0&&(Kt=2),H.morphAttributes.color!==void 0&&(Kt=3);let $,tt,_t,dt;if(ut){const Fe=Be[ut];$=Fe.vertexShader,tt=Fe.fragmentShader}else $=_.vertexShader,tt=_.fragmentShader,l.update(_),_t=l.getVertexShaderID(_),dt=l.getFragmentShaderID(_);const Dt=i.getRenderTarget(),wt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Qt=!!_.map,kt=!!_.matcap,P=!!G,Ge=!!_.aoMap,Ot=!!_.lightMap,Gt=!!_.bumpMap,At=!!_.normalMap,re=!!_.displacementMap,Pt=!!_.emissiveMap,A=!!_.metalnessMap,M=!!_.roughnessMap,F=_.anisotropy>0,Y=_.clearcoat>0,Q=_.dispersion>0,q=_.iridescence>0,Mt=_.sheen>0,rt=_.transmission>0,ft=F&&!!_.anisotropyMap,Vt=Y&&!!_.clearcoatMap,et=Y&&!!_.clearcoatNormalMap,pt=Y&&!!_.clearcoatRoughnessMap,Ct=q&&!!_.iridescenceMap,Rt=q&&!!_.iridescenceThicknessMap,mt=Mt&&!!_.sheenColorMap,Bt=Mt&&!!_.sheenRoughnessMap,Lt=!!_.specularMap,ie=!!_.specularColorMap,L=!!_.specularIntensityMap,lt=rt&&!!_.transmissionMap,V=rt&&!!_.thicknessMap,K=!!_.gradientMap,at=!!_.alphaMap,ct=_.alphaTest>0,Ht=!!_.alphaHash,he=!!_.extensions;let Ne=Jn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const $t={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:tt,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:wt,instancingColor:wt&&W.instanceColor!==null,instancingMorph:wt&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:ei,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:kt,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:ht,aoMap:Ge,lightMap:Ot,bumpMap:Gt,normalMap:At,displacementMap:m&&re,emissiveMap:Pt,normalMapObjectSpace:At&&_.normalMapType===Wd,normalMapTangentSpace:At&&_.normalMapType===Qh,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:ft,clearcoat:Y,clearcoatMap:Vt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:Q,iridescence:q,iridescenceMap:Ct,iridescenceThicknessMap:Rt,sheen:Mt,sheenColorMap:mt,sheenRoughnessMap:Bt,specularMap:Lt,specularColorMap:ie,specularIntensityMap:L,transmission:rt,transmissionMap:lt,thicknessMap:V,gradientMap:K,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:ct,alphaHash:Ht,combine:_.combine,mapUv:Qt&&p(_.map.channel),aoMapUv:Ge&&p(_.aoMap.channel),lightMapUv:Ot&&p(_.lightMap.channel),bumpMapUv:Gt&&p(_.bumpMap.channel),normalMapUv:At&&p(_.normalMap.channel),displacementMapUv:re&&p(_.displacementMap.channel),emissiveMapUv:Pt&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:M&&p(_.roughnessMap.channel),anisotropyMapUv:ft&&p(_.anisotropyMap.channel),clearcoatMapUv:Vt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&p(_.sheenRoughnessMap.channel),specularMapUv:Lt&&p(_.specularMap.channel),specularColorMapUv:ie&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:lt&&p(_.transmissionMap.channel),thicknessMapUv:V&&p(_.thicknessMap.channel),alphaMapUv:at&&p(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(At||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(Qt||at),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function S(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(x(b,_),E(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),_.push(o.mask)}function R(_){const b=v[_.type];let N;if(b){const O=Be[b];N=Pi.clone(O.uniforms)}else N=_.uniforms;return N}function T(_,b){let N;for(let O=0,W=h.length;O<W;O++){const j=h[O];if(j.cacheKey===b){N=j,++N.usedTimes;break}}return N===void 0&&(N=new j0(i,b,_,r),h.push(N)),N}function w(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:k}}function t_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,g,v,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function o(u,d,m,g,v,p){const f=a(u,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,g,v,p){const f=a(u,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||e_),n.length>1&&n.sort(d||jc),s.length>1&&s.sort(d||jc)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function n_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function i_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function s_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let r_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o_(i){const t=new i_,e=s_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,S=0,x=0,E=0,R=0,T=0,w=0;c.sort(a_);for(let k=0,_=c.length;k<_;k++){const b=c[k],N=b.color,O=b.intensity,W=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*O,u+=N.g*O,d+=N.b*O;else if(b.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(b.sh.coefficients[H],O);w++}else if(b.isDirectionalLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=b.shadow.matrix,S++}n.directional[m]=H,m++}else if(b.isSpotLight){const H=t.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(N).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,n.spot[v]=H;const J=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,J.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,b.castShadow){const G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,E++}v++}else if(b.isRectAreaLight){const H=t.get(b);H.color.copy(N).multiplyScalar(O),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=H,p++}else if(b.isPointLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=H,g++}else if(b.isHemisphereLight){const H=t.get(b);H.skyColor.copy(b.color).multiplyScalar(O),H.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=R,C.numLightProbes=w,n.version=r_++)}function l(c,h){let u=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const x=c[f];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Zc(i){const t=new o_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function l_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class _u extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c_ extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function d_(i,t,e){let n=new bl;const s=new Et,r=new Et,a=new ee,o=new _u({depthPacking:Jh}),l=new c_,c={},h=e.maxTextureSize,u={[Qn]:Ue,[Ue]:Qn,[cn]:cn},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let f=this.type;this.render=function(T,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const k=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Sn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==Un&&this.type===Un,W=f===Un&&this.type!==Un;for(let j=0,H=T.length;j<H;j++){const J=T[j],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||O===!0||W===!0){const xt=this.type!==Un?{minFilter:Ae,magFilter:Ae}:{};G.map!==null&&G.map.dispose(),G.map=new En(s.x,s.y,xt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ut=G.getViewportCount();for(let xt=0;xt<ut;xt++){const Xt=G.getViewport(xt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),N.viewport(a),G.updateMatrices(J,xt),n=G.getFrustum(),E(w,C,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&S(G,C),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(k,_,b)};function S(T,w){const C=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new En(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,C,m,v,null)}function x(T,w,C,k){let _=null;const b=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)_=b;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=_.uuid,O=w.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let j=W[O];j===void 0&&(j=_.clone(),W[O]=j,w.addEventListener("dispose",R)),_=j}if(_.visible=w.visible,_.wireframe=w.wireframe,k===Un?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=C}return _}function E(T,w,C,k,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const O=t.update(T),W=T.material;if(Array.isArray(W)){const j=O.groups;for(let H=0,J=j.length;H<J;H++){const G=j[H],ht=W[G.materialIndex];if(ht&&ht.visible){const ut=x(T,ht,k,_);T.onBeforeShadow(i,T,w,C,O,ut,G),i.renderBufferDirect(C,null,O,ut,T,G),T.onAfterShadow(i,T,w,C,O,ut,G)}}}else if(W.visible){const j=x(T,W,k,_);T.onBeforeShadow(i,T,w,C,O,j,null),i.renderBufferDirect(C,null,O,j,T,null),T.onAfterShadow(i,T,w,C,O,j,null)}}const N=T.children;for(let O=0,W=N.length;O<W;O++)E(N[O],w,C,k,_)}function R(T){T.target.removeEventListener("dispose",R);for(const C in c){const k=c[C],_=T.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}const f_={[ho]:uo,[fo]:go,[po]:_o,[cs]:mo,[uo]:ho,[go]:fo,[_o]:po,[mo]:cs};function p_(i){function t(){let L=!1;const lt=new ee;let V=null;const K=new ee(0,0,0,0);return{setMask:function(at){V!==at&&!L&&(i.colorMask(at,at,at,at),V=at)},setLocked:function(at){L=at},setClear:function(at,ct,Ht,he,Ne){Ne===!0&&(at*=he,ct*=he,Ht*=he),lt.set(at,ct,Ht,he),K.equals(lt)===!1&&(i.clearColor(at,ct,Ht,he),K.copy(lt))},reset:function(){L=!1,V=null,K.set(-1,0,0,0)}}}function e(){let L=!1,lt=!1,V=null,K=null,at=null;return{setReversed:function(ct){lt=ct},setTest:function(ct){ct?_t(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ct){V!==ct&&!L&&(i.depthMask(ct),V=ct)},setFunc:function(ct){if(lt&&(ct=f_[ct]),K!==ct){switch(ct){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){L=ct},setClear:function(ct){at!==ct&&(i.clearDepth(ct),at=ct)},reset:function(){L=!1,V=null,K=null,at=null}}}function n(){let L=!1,lt=null,V=null,K=null,at=null,ct=null,Ht=null,he=null,Ne=null;return{setTest:function($t){L||($t?_t(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!L&&(i.stencilMask($t),lt=$t)},setFunc:function($t,Fe,An){(V!==$t||K!==Fe||at!==An)&&(i.stencilFunc($t,Fe,An),V=$t,K=Fe,at=An)},setOp:function($t,Fe,An){(ct!==$t||Ht!==Fe||he!==An)&&(i.stencilOp($t,Fe,An),ct=$t,Ht=Fe,he=An)},setLocked:function($t){L=$t},setClear:function($t){Ne!==$t&&(i.clearStencil($t),Ne=$t)},reset:function(){L=!1,lt=null,V=null,K=null,at=null,ct=null,Ht=null,he=null,Ne=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,S=null,x=null,E=null,R=null,T=new It(0,0,0),w=0,C=!1,k=null,_=null,b=null,N=null,O=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,H=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=H>=2);let G=null,ht={};const ut=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Xt=new ee().fromArray(ut),Kt=new ee().fromArray(xt);function $(L,lt,V,K){const at=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<V;Ht++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ct}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(cs),Ot(!1),Gt(oc),_t(i.CULL_FACE),P(Sn);function _t(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function dt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Dt(L,lt){return h[L]!==lt?(i.bindFramebuffer(L,lt),h[L]=lt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(L,lt){let V=d,K=!1;if(L){V=u.get(lt),V===void 0&&(V=[],u.set(lt,V));const at=L.textures;if(V.length!==at.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ht=at.length;ct<Ht;ct++)V[ct]=i.COLOR_ATTACHMENT0+ct;V.length=at.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function zt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Qt={[_i]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};Qt[bd]=i.MIN,Qt[wd]=i.MAX;const kt={[Td]:i.ZERO,[Ad]:i.ONE,[Cd]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,lt,V,K,at,ct,Ht,he,Ne,$t){if(L===Sn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),L!==Sd){if(L!==v||$t!==C){if((p!==_i||x!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,x=_i),$t)switch(L){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,S=null,E=null,R=null,T.set(0,0,0),w=0,v=L,C=$t}return}at=at||lt,ct=ct||V,Ht=Ht||K,(lt!==p||at!==x)&&(i.blendEquationSeparate(Qt[lt],Qt[at]),p=lt,x=at),(V!==f||K!==S||ct!==E||Ht!==R)&&(i.blendFuncSeparate(kt[V],kt[K],kt[ct],kt[Ht]),f=V,S=K,E=ct,R=Ht),(he.equals(T)===!1||Ne!==w)&&(i.blendColor(he.r,he.g,he.b,Ne),T.copy(he),w=Ne),v=L,C=!1}function Ge(L,lt){L.side===cn?dt(i.CULL_FACE):_t(i.CULL_FACE);let V=L.side===Ue;lt&&(V=!V),Ot(V),L.blending===as&&L.transparent===!1?P(Sn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function Gt(L){L!==xd?(_t(i.CULL_FACE),L!==_&&(L===oc?i.cullFace(i.BACK):L===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),_=L}function At(L){L!==b&&(j&&i.lineWidth(L),b=L)}function re(L,lt,V){L?(_t(i.POLYGON_OFFSET_FILL),(N!==lt||O!==V)&&(i.polygonOffset(lt,V),N=lt,O=V)):dt(i.POLYGON_OFFSET_FILL)}function Pt(L){L?_t(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),G!==L&&(i.activeTexture(L),G=L)}function M(L,lt,V){V===void 0&&(G===null?V=i.TEXTURE0+W-1:V=G);let K=ht[V];K===void 0&&(K={type:void 0,texture:void 0},ht[V]=K),(K.type!==L||K.texture!==lt)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(L,lt||tt[L]),K.type=L,K.texture=lt)}function F(){const L=ht[G];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Xt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Xt.copy(L))}function mt(L){Kt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function Bt(L,lt){let V=l.get(lt);V===void 0&&(V=new WeakMap,l.set(lt,V));let K=V.get(L);K===void 0&&(K=i.getUniformBlockIndex(lt,L.name),V.set(L,K))}function Lt(L,lt){const K=l.get(lt).get(L);o.get(lt)!==K&&(i.uniformBlockBinding(lt,K,L.__bindingPointIndex),o.set(lt,K))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ht={},h={},u=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,S=null,x=null,E=null,R=null,T=new It(0,0,0),w=0,C=!1,k=null,_=null,b=null,N=null,O=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:dt,bindFramebuffer:Dt,drawBuffers:wt,useProgram:zt,setBlending:P,setMaterial:Ge,setFlipSided:Ot,setCullFace:Gt,setLineWidth:At,setPolygonOffset:re,setScissorTest:Pt,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Vt,texStorage3D:et,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ie}}function Jc(i,t,e,n){const s=m_(n);switch(e){case $h:return i*t;case Yh:return i*t;case jh:return i*t*2;case vl:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case Kh:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:case bo:return Math.max(i,16)*Math.max(t,8)/4;case So:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Br:case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zh:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(i){switch(i){case Gn:case Vh:return{byteLength:1,components:1};case $s:case Wh:case ti:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case bi:case ml:case xn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):$r("canvas")}function v(A,M,F){let Y=1;const Q=Pt(A);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*Q.width),Mt=Math.floor(Y*Q.height);u===void 0&&(u=g(q,Mt));const rt=M?g(q,Mt):u;return rt.width=q,rt.height=Mt,rt.getContext("2d").drawImage(A,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Mt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Ae&&A.minFilter!==hn}function f(A){i.generateMipmap(A)}function S(A,M,F,Y,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),M===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){const Mt=Q?Gr:qt.getTransfer(Y);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Mt===se?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,M){let F;return A?M===null||M===bi||M===ds?F=i.DEPTH24_STENCIL8:M===xn?F=i.DEPTH32F_STENCIL8:M===$s&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===ds?F=i.DEPTH_COMPONENT24:M===xn?F=i.DEPTH_COMPONENT32F:M===$s&&(F=i.DEPTH_COMPONENT16),F}function E(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ae&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M)}function T(A){const M=A.target;M.removeEventListener("dispose",T),k(M)}function w(A){const M=n.get(A);if(M.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function C(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const F=A.source,Y=d.get(F);delete Y[M.__cacheKey],a.memory.textures--}function k(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const q=n.get(F[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(A)}let _=0;function b(){_=0}function N(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const F=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(F,A,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function j(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Kt(F,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function H(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Kt(F,A,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function J(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const G={[Xs]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},ht={[Ae]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ut={[Xd]:i.NEVER,[Zd]:i.ALWAYS,[$d]:i.LESS,[tu]:i.LEQUAL,[qd]:i.EQUAL,[Kd]:i.GEQUAL,[Yd]:i.GREATER,[jd]:i.NOTEQUAL};function xt(A,M){if(M.type===xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===ma||M.magFilter===sr||M.magFilter===Mi||M.minFilter===hn||M.minFilter===ma||M.minFilter===sr||M.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ae||M.minFilter!==sr&&M.minFilter!==Mi||M.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=O(M);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[q].usedTimes++;const Mt=Q[A.__cacheKey];Mt!==void 0&&(Q[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&C(M)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return F}function Kt(A,M,F){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=Xt(A,M),q=M.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+F);const Mt=n.get(q);if(q.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const rt=qt.getPrimaries(qt.workingColorSpace),ft=M.colorSpace===Zn?null:qt.getPrimaries(M.colorSpace),Vt=M.colorSpace===Zn||rt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let et=v(M.image,!1,s.maxTextureSize);et=re(M,et);const pt=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type);let Rt=S(M.internalFormat,pt,Ct,M.colorSpace,M.isVideoTexture);xt(Y,M);let mt;const Bt=M.mipmaps,Lt=M.isVideoTexture!==!0,ie=Mt.__version===void 0||Q===!0,L=q.dataReady,lt=E(M,et);if(M.isDepthTexture)Rt=x(M.format===fs,M.type),ie&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,pt,Ct,null));else if(M.isDataTexture)if(Bt.length>0){Lt&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,Bt[0].width,Bt[0].height);for(let V=0,K=Bt.length;V<K;V++)mt=Bt[V],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,mt.width,mt.height,0,pt,Ct,mt.data);M.generateMipmaps=!1}else Lt?(ie&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,pt,Ct,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Lt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Rt,Bt[0].width,Bt[0].height,et.depth);for(let V=0,K=Bt.length;V<K;V++)if(mt=Bt[V],M.format!==dn)if(pt!==null)if(Lt){if(L)if(M.layerUpdates.size>0){const at=Jc(mt.width,mt.height,M.format,M.type);for(const ct of M.layerUpdates){const Ht=mt.data.subarray(ct*at/mt.data.BYTES_PER_ELEMENT,(ct+1)*at/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ct,mt.width,mt.height,1,pt,Ht,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,et.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Rt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,et.depth,pt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Rt,mt.width,mt.height,et.depth,0,pt,Ct,mt.data)}else{Lt&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,Bt[0].width,Bt[0].height);for(let V=0,K=Bt.length;V<K;V++)mt=Bt[V],M.format!==dn?pt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(M.isDataArrayTexture)if(Lt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Rt,et.width,et.height,et.depth),L)if(M.layerUpdates.size>0){const V=Jc(et.width,et.height,M.format,M.type);for(const K of M.layerUpdates){const at=et.data.subarray(K*V/et.data.BYTES_PER_ELEMENT,(K+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,pt,Ct,at)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(M.isData3DTexture)Lt?(ie&&e.texStorage3D(i.TEXTURE_3D,lt,Rt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(M.isFramebufferTexture){if(ie)if(Lt)e.texStorage2D(i.TEXTURE_2D,lt,Rt,et.width,et.height);else{let V=et.width,K=et.height;for(let at=0;at<lt;at++)e.texImage2D(i.TEXTURE_2D,at,Rt,V,K,0,pt,Ct,null),V>>=1,K>>=1}}else if(Bt.length>0){if(Lt&&ie){const V=Pt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Rt,V.width,V.height)}for(let V=0,K=Bt.length;V<K;V++)mt=Bt[V],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt,Ct,mt):e.texImage2D(i.TEXTURE_2D,V,Rt,pt,Ct,mt);M.generateMipmaps=!1}else if(Lt){if(ie){const V=Pt(et);e.texStorage2D(i.TEXTURE_2D,lt,Rt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,pt,Ct,et);p(M)&&f(Y),Mt.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,F){if(M.image.length!==6)return;const Y=Xt(A,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const Mt=qt.getPrimaries(qt.workingColorSpace),rt=M.colorSpace===Zn?null:qt.getPrimaries(M.colorSpace),ft=M.colorSpace===Zn||Mt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Vt&&!et?pt[K]=v(M.image[K],!0,s.maxCubemapSize):pt[K]=et?M.image[K].image:M.image[K],pt[K]=re(M,pt[K]);const Ct=pt[0],Rt=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),Bt=S(M.internalFormat,Rt,mt,M.colorSpace),Lt=M.isVideoTexture!==!0,ie=q.__version===void 0||Y===!0,L=Q.dataReady;let lt=E(M,Ct);xt(i.TEXTURE_CUBE_MAP,M);let V;if(Vt){Lt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Bt,Ct.width,Ct.height);for(let K=0;K<6;K++){V=pt[K].mipmaps;for(let at=0;at<V.length;at++){const ct=V[at];M.format!==dn?Rt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Bt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ct.width,ct.height,Rt,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Bt,ct.width,ct.height,0,Rt,mt,ct.data)}}}else{if(V=M.mipmaps,Lt&&ie){V.length>0&&lt++;const K=Pt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Rt,mt,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,pt[K].width,pt[K].height,0,Rt,mt,pt[K].data);for(let at=0;at<V.length;at++){const Ht=V[at].image[K].image;Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Ht.width,Ht.height,Rt,mt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Bt,Ht.width,Ht.height,0,Rt,mt,Ht.data)}}else{Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,Rt,mt,pt[K]);for(let at=0;at<V.length;at++){const ct=V[at];Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Rt,mt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Bt,Rt,mt,ct.image[K])}}}p(M)&&f(i.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function tt(A,M,F,Y,Q,q){const Mt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),ft=S(F.internalFormat,Mt,rt,F.colorSpace);if(!n.get(M).__hasExternalTextures){const et=Math.max(1,M.width>>q),pt=Math.max(1,M.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,ft,et,pt,M.depth,0,Mt,rt,null):e.texImage2D(Q,q,ft,et,pt,0,Mt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,n.get(F).__webglTexture,0,Ot(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,n.get(F).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(M.stencilBuffer,Q),Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ot(M);Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,q,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Mt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),ft=S(q.internalFormat,Mt,rt,q.colorSpace),Vt=Ot(M);F&&Gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ft,M.width,M.height):Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,Q=Ot(M);if(M.depthTexture.format===os)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===fs)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(A){const M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");dt(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),_t(M.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),_t(M.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,M,F){const Y=n.get(A);M!==void 0&&tt(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Dt(A)}function zt(A){const M=A.texture,F=n.get(A),Y=n.get(M);A.addEventListener("dispose",T);const Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let ft=0;ft<M.mipmaps.length;ft++)F.__webglFramebuffer[rt][ft]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let rt=0,ft=Q.length;rt<ft;rt++){const Vt=n.get(Q[rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){const ft=Q[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const Vt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=S(ft.internalFormat,Vt,et,ft.colorSpace,A.isXRRenderTarget===!0),Ct=Ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),xt(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)tt(F.__webglFramebuffer[rt][ft],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft);else tt(F.__webglFramebuffer[rt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let rt=0,ft=Q.length;rt<ft;rt++){const Vt=Q[rt],et=n.get(Vt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),xt(i.TEXTURE_2D,Vt),tt(F.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Vt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),xt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)tt(F.__webglFramebuffer[ft],A,M,i.COLOR_ATTACHMENT0,rt,ft);else tt(F.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,rt,0);p(M)&&f(rt),e.unbindTexture()}A.depthBuffer&&Dt(A)}function Qt(A){const M=A.textures;for(let F=0,Y=M.length;F<Y;F++){const Q=M[F];if(p(Q)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(Q).__webglTexture;e.bindTexture(q,Mt),f(q),e.unbindTexture()}}}const kt=[],P=[];function Ge(A){if(A.samples>0){if(Gt(A)===!1){const M=A.textures,F=A.width,Y=A.height;let Q=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),rt=M.length>1;if(rt)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Vt=n.get(M[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(kt.length=0,P.length=0,kt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(kt.push(q),P.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Vt=n.get(M[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ot(A){return Math.min(s.maxSamples,A.samples)}function Gt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function re(A,M){const F=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==ei&&F!==Zn&&(qt.getTransfer(F)===se?(Y!==dn||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Gt}function __(i,t){function e(n,s=Zn){let r;const a=qt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===qh)return i.RGB;if(n===dn)return i.RGBA;if(n===Yh)return i.LUMINANCE;if(n===jh)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Kh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Fr||n===Or)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===yo||n===Eo||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===To)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Do||n===Lo||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Go||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===Wo||n===Xo||n===$o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class v_ extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bn extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends _s{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const v=new y_,p=e.getContextAttributes();let f=null,S=null;const x=[],E=[],R=new Et;let T=null;const w=new tn;w.layers.enable(1),w.viewport=new ee;const C=new tn;C.layers.enable(2),C.viewport=new ee;const k=[w,C],_=new v_;_.layers.enable(1),_.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=x[$];return tt===void 0&&(tt=new Va,x[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=x[$];return tt===void 0&&(tt=new Va,x[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=x[$];return tt===void 0&&(tt=new Va,x[$]=tt),tt.getHandSpace()};function O($){const tt=E.indexOf($.inputSource);if(tt===-1)return;const _t=x[tt];_t!==void 0&&(_t.update($.inputSource,$.frame,c||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let $=0;$<x.length;$++){const tt=E[$];tt!==null&&(E[$]=null,x[$].disconnect(tt))}b=null,N=null,v.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new En(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?fs:os,_t=p.stencil?ds:bi);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new En(d.textureWidth,d.textureHeight,{format:dn,type:Gn,depthTexture:new du(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j($){for(let tt=0;tt<$.removed.length;tt++){const _t=$.removed[tt],dt=E.indexOf(_t);dt>=0&&(E[dt]=null,x[dt].disconnect(_t))}for(let tt=0;tt<$.added.length;tt++){const _t=$.added[tt];let dt=E.indexOf(_t);if(dt===-1){for(let wt=0;wt<x.length;wt++)if(wt>=E.length){E.push(_t),dt=wt;break}else if(E[wt]===null){E[wt]=_t,dt=wt;break}if(dt===-1)break}const Dt=x[dt];Dt&&Dt.connect(_t)}}const H=new D,J=new D;function G($,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const dt=H.distanceTo(J),Dt=tt.projectionMatrix.elements,wt=_t.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),Qt=Dt[14]/(Dt[10]+1),kt=(Dt[9]+1)/Dt[5],P=(Dt[9]-1)/Dt[5],Ge=(Dt[8]-1)/Dt[0],Ot=(wt[8]+1)/wt[0],Gt=zt*Ge,At=zt*Ot,re=dt/(-Ge+Ot),Pt=re*-Ge;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const A=zt+re,M=Qt+re,F=Gt-Pt,Y=At+(dt-Pt),Q=kt*Qt/M*A,q=P*Qt/M*A;$.projectionMatrix.makePerspective(F,Y,Q,q,A,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,_t=$.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),_.near=C.near=w.near=tt,_.far=C.far=w.far=_t,(b!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,N=_.far);const dt=$.parent,Dt=_.cameras;ht(_,dt);for(let wt=0;wt<Dt.length;wt++)ht(Dt[wt],dt);Dt.length===2?G(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),ut($,_,dt)};function ut($,tt,_t){_t===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let xt=null;function Xt($,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let dt=!1;_t.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let wt=0;wt<_t.length;wt++){const zt=_t[wt];let Qt=null;if(m!==null)Qt=m.getViewport(zt);else{const P=u.getViewSubImage(d,zt);Qt=P.viewport,wt===0&&(t.setRenderTargetTextures(S,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(S))}let kt=k[wt];kt===void 0&&(kt=new tn,kt.layers.enable(wt),kt.viewport=new ee,k[wt]=kt),kt.matrix.fromArray(zt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(zt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),wt===0&&(_.matrix.copy(kt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(kt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const wt=u.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,s.renderState)}}for(let _t=0;_t<x.length;_t++){const dt=E[_t],Dt=x[_t];dt!==null&&Dt!==void 0&&Dt.update(dt,tt,c||a)}xt&&xt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Kt=new uu;Kt.setAnimationLoop(Xt),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}}const ci=new bn,b_=new te;function w_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,lu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ue&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ue&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=t.get(f),x=S.envMap,E=S.envMapRotation;x&&(p.envMap.value=x,ci.copy(E),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(ci)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function c(S,x){let E=s[S.id];E===void 0&&(g(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(S,R);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const x=u();S.__bindingPointIndex=x;const E=i.createBuffer(),R=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],E=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=E.length;T<w;T++){const C=Array.isArray(E[T])?E[T]:[E[T]];for(let k=0,_=C.length;k<_;k++){const b=C[k];if(m(b,T,k,R)===!0){const N=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let j=0;j<O.length;j++){const H=O[j],J=v(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+W,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,E,R){const T=S.value,w=x+"_"+E;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const C=R[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){const x=S.uniforms;let E=0;const R=16;for(let w=0,C=x.length;w<C;w++){const k=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,b=k.length;_<b;_++){const N=k[_],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,j=O.length;W<j;W++){const H=O[W],J=v(H),G=E%R,ht=G%J.boundary,ut=G+ht;E+=ht,ut!==0&&R-ut<J.storage&&(E+=R-ut),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=J.storage}}}const T=E%R;return T>0&&(E+=R-T),S.__size=E,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class A_{constructor(t={}){const{canvas:e=mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let E=!1,R=0,T=0,w=null,C=-1,k=null;const _=new ee,b=new ee;let N=null;const O=new It(0);let W=0,j=e.width,H=e.height,J=1,G=null,ht=null;const ut=new ee(0,0,j,H),xt=new ee(0,0,j,H);let Xt=!1;const Kt=new bl;let $=!1,tt=!1;const _t=new te,dt=new te,Dt=new D,wt=new ee,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function kt(){return w===null?J:1}let P=n;function Ge(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const I="webgl2";if(P=Ge(I,y),P===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ot,Gt,At,re,Pt,A,M,F,Y,Q,q,Mt,rt,ft,Vt,et,pt,Ct,Rt,mt,Bt,Lt,ie,L;function lt(){Ot=new Ig(P),Ot.init(),Lt=new __(P,Ot),Gt=new Ag(P,Ot,t,Lt),At=new p_(P),Gt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),re=new Fg(P),Pt=new t_,A=new g_(P,Ot,At,Pt,Gt,Lt,re),M=new Rg(x),F=new Lg(x),Y=new Vf(P),ie=new wg(P,Y),Q=new Ug(P,Y,re,ie),q=new Bg(P,Q,Y,re),Rt=new Og(P,Gt,A),et=new Cg(Pt),Mt=new Q0(x,M,F,Ot,Gt,ie,et),rt=new w_(x,Pt),ft=new n_,Vt=new l_(Ot),Ct=new bg(x,M,F,At,q,d,l),pt=new d_(x,q,Gt),L=new T_(P,re,Gt,At),mt=new Tg(P,Ot,re),Bt=new Ng(P,Ot,re),re.programs=Mt.programs,x.capabilities=Gt,x.extensions=Ot,x.properties=Pt,x.renderLists=ft,x.shadowMap=pt,x.state=At,x.info=re}lt();const V=new E_(x,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(j,H,!1))},this.getSize=function(y){return y.set(j,H)},this.setSize=function(y,I,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,H=I,e.width=Math.floor(y*J),e.height=Math.floor(I*J),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(j*J,H*J).floor()},this.setDrawingBufferSize=function(y,I,B){j=y,H=I,J=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,I,B,z){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,I,B,z),At.viewport(_.copy(ut).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(xt)},this.setScissor=function(y,I,B,z){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,I,B,z),At.scissor(b.copy(xt).multiplyScalar(J).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(y){At.setScissorTest(Xt=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(w!==null){const nt=w.texture.format;U=nt===Sl||nt===Ml||nt===xl}if(U){const nt=w.texture.type,ot=nt===Gn||nt===bi||nt===$s||nt===ds||nt===gl||nt===_l,gt=Ct.getClearColor(),vt=Ct.getClearAlpha(),bt=gt.r,Tt=gt.g,St=gt.b;ot?(m[0]=bt,m[1]=Tt,m[2]=St,m[3]=vt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=bt,g[1]=Tt,g[2]=St,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Vt.dispose(),Pt.dispose(),M.dispose(),F.dispose(),q.dispose(),ie.dispose(),L.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ql),V.removeEventListener("sessionend",tc),ii.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=re.autoReset,I=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,U=pt.type;lt(),re.autoReset=y,pt.enabled=I,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=U}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ht(y){const I=y.target;I.removeEventListener("dispose",Ht),he(I)}function he(y){Ne(y),Pt.remove(y)}function Ne(y){const I=Pt.get(y).programs;I!==void 0&&(I.forEach(function(B){Mt.releaseProgram(B)}),y.isShaderMaterial&&Mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,nt){I===null&&(I=zt);const ot=U.isMesh&&U.matrixWorld.determinant()<0,gt=fd(y,I,B,z,U);At.setMaterial(z,ot);let vt=B.index,bt=1;if(z.wireframe===!0){if(vt=Q.getWireframeAttribute(B),vt===void 0)return;bt=2}const Tt=B.drawRange,St=B.attributes.position;let Zt=Tt.start*bt,ae=(Tt.start+Tt.count)*bt;nt!==null&&(Zt=Math.max(Zt,nt.start*bt),ae=Math.min(ae,(nt.start+nt.count)*bt)),vt!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,vt.count)):St!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,St.count));const oe=ae-Zt;if(oe<0||oe===1/0)return;ie.setup(U,z,gt,B,vt);let Ve,Yt=mt;if(vt!==null&&(Ve=Y.get(vt),Yt=Bt,Yt.setIndex(Ve)),U.isMesh)z.wireframe===!0?(At.setLineWidth(z.wireframeLinewidth*kt()),Yt.setMode(P.LINES)):Yt.setMode(P.TRIANGLES);else if(U.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),At.setLineWidth(yt*kt()),U.isLineSegments?Yt.setMode(P.LINES):U.isLineLoop?Yt.setMode(P.LINE_LOOP):Yt.setMode(P.LINE_STRIP)}else U.isPoints?Yt.setMode(P.POINTS):U.isSprite&&Yt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,_e=U._multiDrawCounts,jt=U._multiDrawCount,rn=vt?Y.get(vt).bytesPerElement:1,Ii=Pt.get(z).currentProgram.getUniforms();for(let We=0;We<jt;We++)Ii.setValue(P,"_gl_DrawID",We),Yt.render(yt[We]/rn,_e[We])}else if(U.isInstancedMesh)Yt.renderInstances(Zt,oe,U.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_e=Math.min(B.instanceCount,yt);Yt.renderInstances(Zt,oe,_e)}else Yt.render(Zt,oe)};function $t(y,I,B){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,ir(y,I,B),y.side=Qn,y.needsUpdate=!0,ir(y,I,B),y.side=cn):ir(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),p=Vt.get(B),p.init(I),S.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let ot=0;ot<nt.length;ot++){const gt=nt[ot];$t(gt,B,U),z.add(gt)}else $t(nt,B,U),z.add(nt)}),S.pop(),p=null,z},this.compileAsync=function(y,I,B=null){const z=this.compile(y,I,B);return new Promise(U=>{function nt(){if(z.forEach(function(ot){Pt.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){U(y);return}setTimeout(nt,10)}Ot.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Fe=null;function An(y){Fe&&Fe(y)}function Ql(){ii.stop()}function tc(){ii.start()}const ii=new uu;ii.setAnimationLoop(An),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(y){Fe=y,V.setAnimationLoop(y),y===null?ii.stop():ii.start()},V.addEventListener("sessionstart",Ql),V.addEventListener("sessionend",tc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,w),p=Vt.get(y,S.length),p.init(I),S.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Kt.setFromProjectionMatrix(dt),tt=this.localClippingEnabled,$=et.init(this.clippingPlanes,tt),v=ft.get(y,f.length),v.init(),f.push(v),V.enabled===!0&&V.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&ua(nt,I,-1/0,x.sortObjects)}ua(y,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ht),Qt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Qt&&Ct.addToRenderList(v,y),this.info.render.frame++,$===!0&&et.beginShadows();const B=p.state.shadowsArray;pt.render(B,y,I),$===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=v.opaque,U=v.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let ot=0,gt=nt.length;ot<gt;ot++){const vt=nt[ot];nc(z,U,y,vt)}Qt&&Ct.render(y);for(let ot=0,gt=nt.length;ot<gt;ot++){const vt=nt[ot];ec(v,y,vt,vt.viewport)}}else U.length>0&&nc(z,U,y,I),Qt&&Ct.render(y),ec(v,y,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(x,y,I),ie.resetDefaultState(),C=-1,k=null,S.pop(),S.length>0?(p=S[S.length-1],$===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ua(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Kt.intersectsSprite(y)){z&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(dt);const ot=q.update(y),gt=y.material;gt.visible&&v.push(y,ot,gt,B,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Kt.intersectsObject(y))){const ot=q.update(y),gt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),wt.copy(ot.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(dt)),Array.isArray(gt)){const vt=ot.groups;for(let bt=0,Tt=vt.length;bt<Tt;bt++){const St=vt[bt],Zt=gt[St.materialIndex];Zt&&Zt.visible&&v.push(y,ot,Zt,B,wt.z,St)}}else gt.visible&&v.push(y,ot,gt,B,wt.z,null)}}const nt=y.children;for(let ot=0,gt=nt.length;ot<gt;ot++)ua(nt[ot],I,B,z)}function ec(y,I,B,z){const U=y.opaque,nt=y.transmissive,ot=y.transparent;p.setupLightsView(B),$===!0&&et.setGlobalState(x.clippingPlanes,B),z&&At.viewport(_.copy(z)),U.length>0&&nr(U,I,B),nt.length>0&&nr(nt,I,B),ot.length>0&&nr(ot,I,B),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function nc(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new En(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ti:Gn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[z.id],ot=z.viewport||_;nt.setSize(ot.z,ot.w);const gt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Qt&&Ct.render(B);const vt=x.toneMapping;x.toneMapping=Jn;const bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),$===!0&&et.setGlobalState(x.clippingPlanes,z),nr(y,B,z),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let St=0,Zt=I.length;St<Zt;St++){const ae=I[St],oe=ae.object,Ve=ae.geometry,Yt=ae.material,yt=ae.group;if(Yt.side===cn&&oe.layers.test(z.layers)){const _e=Yt.side;Yt.side=Ue,Yt.needsUpdate=!0,ic(oe,B,z,Ve,Yt,yt),Yt.side=_e,Yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}x.setRenderTarget(gt),x.setClearColor(O,W),bt!==void 0&&(z.viewport=bt),x.toneMapping=vt}function nr(y,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=y.length;U<nt;U++){const ot=y[U],gt=ot.object,vt=ot.geometry,bt=z===null?ot.material:z,Tt=ot.group;gt.layers.test(B.layers)&&ic(gt,I,B,vt,bt,Tt)}}function ic(y,I,B,z,U,nt){y.onBeforeRender(x,I,B,z,U,nt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,I,B,z,y,nt),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=Ue,U.needsUpdate=!0,x.renderBufferDirect(B,I,z,U,y,nt),U.side=Qn,U.needsUpdate=!0,x.renderBufferDirect(B,I,z,U,y,nt),U.side=cn):x.renderBufferDirect(B,I,z,U,y,nt),y.onAfterRender(x,I,B,z,U,nt)}function ir(y,I,B){I.isScene!==!0&&(I=zt);const z=Pt.get(y),U=p.state.lights,nt=p.state.shadowsArray,ot=U.state.version,gt=Mt.getParameters(y,U.state,nt,I,B),vt=Mt.getProgramCacheKey(gt);let bt=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?F:M).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",Ht),bt=new Map,z.programs=bt);let Tt=bt.get(vt);if(Tt!==void 0){if(z.currentProgram===Tt&&z.lightsStateVersion===ot)return rc(y,gt),Tt}else gt.uniforms=Mt.getUniforms(y),y.onBeforeCompile(gt,x),Tt=Mt.acquireProgram(gt,vt),bt.set(vt,Tt),z.uniforms=gt.uniforms;const St=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=et.uniform),rc(y,gt),z.needsLights=md(y),z.lightsStateVersion=ot,z.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Tt,z.uniformsList=null,Tt}function sc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=kr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function rc(y,I){const B=Pt.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function fd(y,I,B,z,U){I.isScene!==!0&&(I=zt),A.resetTextureUnits();const nt=I.fog,ot=z.isMeshStandardMaterial?I.environment:null,gt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ei,vt=(z.isMeshStandardMaterial?F:M).get(z.envMap||ot),bt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Tt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let oe=Jn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Ve=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=Ve!==void 0?Ve.length:0,yt=Pt.get(z),_e=p.state.lights;if($===!0&&(tt===!0||y!==k)){const Je=y===k&&z.id===C;et.setState(z,y,Je)}let jt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==_e.state.version||yt.outputColorSpace!==gt||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==vt||z.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==et.numPlanes||yt.numIntersection!==et.numIntersection)||yt.vertexAlphas!==bt||yt.vertexTangents!==Tt||yt.morphTargets!==St||yt.morphNormals!==Zt||yt.morphColors!==ae||yt.toneMapping!==oe||yt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,yt.__version=z.version);let rn=yt.currentProgram;jt===!0&&(rn=ir(z,I,U));let Ii=!1,We=!1,da=!1;const ce=rn.getUniforms(),Wn=yt.uniforms;if(At.useProgram(rn.program)&&(Ii=!0,We=!0,da=!0),z.id!==C&&(C=z.id,We=!0),Ii||k!==y){Gt.reverseDepthBuffer?(_t.copy(y.projectionMatrix),_f(_t),vf(_t),ce.setValue(P,"projectionMatrix",_t)):ce.setValue(P,"projectionMatrix",y.projectionMatrix),ce.setValue(P,"viewMatrix",y.matrixWorldInverse);const Je=ce.map.cameraPosition;Je!==void 0&&Je.setValue(P,Dt.setFromMatrixPosition(y.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,We=!0,da=!0)}if(U.isSkinnedMesh){ce.setOptional(P,U,"bindMatrix"),ce.setOptional(P,U,"bindMatrixInverse");const Je=U.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ce.setValue(P,"boneTexture",Je.boneTexture,A))}U.isBatchedMesh&&(ce.setOptional(P,U,"batchingTexture"),ce.setValue(P,"batchingTexture",U._matricesTexture,A),ce.setOptional(P,U,"batchingIdTexture"),ce.setValue(P,"batchingIdTexture",U._indirectTexture,A),ce.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(P,"batchingColorTexture",U._colorsTexture,A));const fa=B.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&Rt.update(U,B,rn),(We||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,ce.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=vt,Wn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Wn.envMapIntensity.value=I.environmentIntensity),We&&(ce.setValue(P,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&pd(Wn,da),nt&&z.fog===!0&&rt.refreshFogUniforms(Wn,nt),rt.refreshMaterialUniforms(Wn,z,J,H,p.state.transmissionRenderTarget[y.id]),kr.upload(P,sc(yt),Wn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kr.upload(P,sc(yt),Wn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(P,"center",U.center),ce.setValue(P,"modelViewMatrix",U.modelViewMatrix),ce.setValue(P,"normalMatrix",U.normalMatrix),ce.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Je=z.uniformsGroups;for(let pa=0,gd=Je.length;pa<gd;pa++){const ac=Je[pa];L.update(ac,rn),L.bind(ac,rn)}}return rn}function pd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function md(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,I,B){Pt.get(y.texture).__webglTexture=I,Pt.get(y.depthTexture).__webglTexture=B;const z=Pt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const B=Pt.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){w=y,R=I,T=B;let z=!0,U=null,nt=!1,ot=!1;if(y){const vt=Pt.get(y);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(vt.__hasExternalTextures)A.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const St=y.depthTexture;if(vt.__boundDepthTexture!==St){if(St!==null&&Pt.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ot=!0);const Tt=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?U=Tt[I][B]:U=Tt[I],nt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?U=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?U=Tt[B]:U=Tt,_.copy(y.viewport),b.copy(y.scissor),N=y.scissorTest}else _.copy(ut).multiplyScalar(J).floor(),b.copy(xt).multiplyScalar(J).floor(),N=Xt;if(At.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&At.drawBuffers(y,U),At.viewport(_),At.scissor(b),At.setScissorTest(N),nt){const vt=Pt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,vt.__webglTexture,B)}else if(ot){const vt=Pt.get(y.texture),bt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,bt)}C=-1},this.readRenderTargetPixels=function(y,I,B,z,U,nt,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(gt=gt[ot]),gt){At.bindFramebuffer(P.FRAMEBUFFER,gt);try{const vt=y.texture,bt=vt.format,Tt=vt.type;if(!Gt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&P.readPixels(I,B,z,U,Lt.convert(bt),Lt.convert(Tt),nt)}finally{const vt=w!==null?Pt.get(w).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,nt,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(gt=gt[ot]),gt){const vt=y.texture,bt=vt.format,Tt=vt.type;if(!Gt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){At.bindFramebuffer(P.FRAMEBUFFER,gt);const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(I,B,z,U,Lt.convert(bt),Lt.convert(Tt),0);const Zt=w!==null?Pt.get(w).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,Zt);const ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gf(P,ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(St),P.deleteSync(ae),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(y.image.width*z),nt=Math.floor(y.image.height*z),ot=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ot,gt,U,nt),At.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let nt,ot,gt,vt,bt,Tt;B!==null?(nt=B.max.x-B.min.x,ot=B.max.y-B.min.y,gt=B.min.x,vt=B.min.y):(nt=y.image.width,ot=y.image.height,gt=0,vt=0),z!==null?(bt=z.x,Tt=z.y):(bt=0,Tt=0);const St=Lt.convert(I.format),Zt=Lt.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ve=P.getParameter(P.UNPACK_SKIP_PIXELS),Yt=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES),_e=y.isCompressedTexture?y.mipmaps[U]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,bt,Tt,nt,ot,St,Zt,_e.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,bt,Tt,_e.width,_e.height,St,_e.data):P.texSubImage2D(P.TEXTURE_2D,U,bt,Tt,nt,ot,St,Zt,_e),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,ot,gt,vt,bt,Tt,St,Zt,ae;const oe=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(nt=B.max.x-B.min.x,ot=B.max.y-B.min.y,gt=B.max.z-B.min.z,vt=B.min.x,bt=B.min.y,Tt=B.min.z):(nt=oe.width,ot=oe.height,gt=oe.depth,vt=0,bt=0,Tt=0),z!==null?(St=z.x,Zt=z.y,ae=z.z):(St=0,Zt=0,ae=0);const Ve=Lt.convert(I.format),Yt=Lt.convert(I.type);let yt;if(I.isData3DTexture)A.setTexture3D(I,0),yt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),yt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const _e=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ii=P.getParameter(P.UNPACK_SKIP_ROWS),We=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,oe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(yt,U,St,Zt,ae,nt,ot,gt,Ve,Yt,oe.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,U,St,Zt,ae,nt,ot,gt,Ve,oe.data):P.texSubImage3D(yt,U,St,Zt,ae,nt,ot,gt,Ve,Yt,oe),P.pixelStorei(P.UNPACK_ROW_LENGTH,_e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ii),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We),U===0&&I.generateMipmaps&&P.generateMipmap(yt),At.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yl?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===ia?"display-p3":"srgb"}}class Al{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Al(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qo,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new D;class Mn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xu extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const As=new D,ji=new D,Ki=new D,Zi=new Et,Cs=new Et,Mu=new te,wr=new D,Rs=new D,Tr=new D,th=new Et,Wa=new Et,eh=new Et;class C_ extends ge{constructor(t=new xu){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vu(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Mn(n,3,0,!1)),Yi.setAttribute("uv",new Mn(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(wr.set(-.5,-.5,0),Ki,a,ji,s,r),Ar(Rs.set(.5,-.5,0),Ki,a,ji,s,r),Ar(Tr.set(.5,.5,0),Ki,a,ji,s,r),th.set(0,0),Wa.set(1,0),eh.set(1,1);let o=t.ray.intersectTriangle(wr,Rs,Tr,!1,As);if(o===null&&(Ar(Rs.set(-.5,.5,0),Ki,a,ji,s,r),Wa.set(0,1),o=t.ray.intersectTriangle(wr,Tr,Rs,!1,As),o===null))return;const l=t.ray.origin.distanceTo(As);l<t.near||l>t.far||e.push({distance:l,point:As.clone(),uv:en.getInterpolation(As,wr,Rs,Tr,th,Wa,eh,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(i,t,e,n,s,r){Zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*Zi.x-s*Zi.y,Cs.y=s*Zi.x+r*Zi.y):Cs.copy(Zi),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(Mu)}class R_ extends Re{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ae,h=Ae,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new te,ih=new te,Cr=[],sh=new wn,P_=new te,Ps=new Wt,Ds=new Ci;class Xa extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),sh.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ds.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),ih.multiplyMatrices(n,Ji),Ps.matrixWorld=ih,Ps.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const l=Cr[a];l.instanceId=r,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new R_(new Float32Array(s*this.count),s,this.count,vl,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qs extends Re{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ys extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ms extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const v=[],p=n/2;let f=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(m,2));function S(){const E=new D,R=new D;let T=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const k=[],_=C/r,b=_*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,W=O*l+o,j=Math.sin(W),H=Math.cos(W);R.x=b*j,R.y=-_*n+p,R.z=b*H,u.push(R.x,R.y,R.z),E.set(j,w,H).normalize(),d.push(E.x,E.y,E.z),m.push(O,1-_),k.push(g++)}v.push(k)}for(let C=0;C<s;C++)for(let k=0;k<r;k++){const _=v[k][C],b=v[k+1][C],N=v[k+1][C+1],O=v[k][C+1];t>0&&(h.push(_,b,O),T+=3),e>0&&(h.push(b,N,O),T+=3)}c.addGroup(f,T,0),f+=T}function x(E){const R=g,T=new Et,w=new D;let C=0;const k=E===!0?t:e,_=E===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),g++;const b=g;for(let N=0;N<=s;N++){const W=N/s*l+o,j=Math.cos(W),H=Math.sin(W);w.x=k*H,w.y=p*_,w.z=k*j,u.push(w.x,w.y,w.z),d.push(0,_,0),T.x=j*.5+.5,T.y=H*.5*_+.5,m.push(T.x,T.y),g++}for(let N=0;N<s;N++){const O=R+N,W=b+N;E===!0?h.push(W,W+1,O):h.push(W+1,W,O),C+=3}c.addGroup(f,C,E===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cl extends Ms{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Cl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rl extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new D,E=new D,R=new D;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],E),m(e[T+2],R),l(x,E,R,S)}function l(S,x,E,R){const T=R+1,w=[];for(let C=0;C<=T;C++){w[C]=[];const k=S.clone().lerp(E,C/T),_=x.clone().lerp(E,C/T),b=T-C;for(let N=0;N<=b;N++)N===0&&C===T?w[C][N]=k:w[C][N]=k.clone().lerp(_,N/b)}for(let C=0;C<T;C++)for(let k=0;k<2*(T-C)-1;k++){const _=Math.floor(k/2);k%2===0?(d(w[C][_+1]),d(w[C+1][_]),d(w[C][_])):(d(w[C][_+1]),d(w[C+1][_+1]),d(w[C+1][_]))}}function c(S){const x=new D;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(S),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const S=new D;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const E=p(S)/2/Math.PI+.5,R=f(S)/Math.PI+.5;a.push(E,1-R)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],E=a[S+2],R=a[S+4],T=Math.max(x,E,R),w=Math.min(x,E,R);T>.9&&w<.1&&(x<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,x){const E=S*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){const S=new D,x=new D,E=new D,R=new D,T=new Et,w=new Et,C=new Et;for(let k=0,_=0;k<r.length;k+=9,_+=6){S.set(r[k+0],r[k+1],r[k+2]),x.set(r[k+3],r[k+4],r[k+5]),E.set(r[k+6],r[k+7],r[k+8]),T.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),R.copy(S).add(x).add(E).divideScalar(3);const b=p(R);v(T,_+0,S,b),v(w,_+2,x,b),v(C,_+4,E,b)}}function v(S,x,E,R){R<0&&S.x===1&&(a[x]=S.x-1),E.x===0&&E.z===0&&(a[x]=R/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.vertices,t.indices,t.radius,t.details)}}class Pl extends Rl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pl(t.radius,t.detail)}}class Dl extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,m=new D,g=new Et;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const p=v*(n+1);for(let f=0;f<n;f++){const S=f+p,x=S,E=S+n+1,R=S+n+2,T=S+1;o.push(x,E,T),o.push(E,R,T)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ra extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){const S=[],x=f/n;let E=0;f===0&&a===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(T+E,1-x),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const x=h[f][S+1],E=h[f][S],R=h[f+1][S],T=h[f+1][S+1];(f!==0||a>0)&&m.push(x,E,T),(f!==n-1||l<Math.PI)&&m.push(E,R,T)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class D_ extends Pe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new D,r=new D;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,m=u.count;for(let g=d,v=d+m;g<v;g+=3)for(let p=0;p<3;p++){const f=o.getX(g+p),S=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,S),rh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),rh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ne(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function rh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class L_ extends Ri{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new It(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class I_ extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Se extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class U_ extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Su extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class N_ extends Su{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new te,ah=new D,oh=new D;class F_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O_ extends F_{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B_ extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new O_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class z_ extends Pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lh(){return performance.now()}class Zo extends vu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const ch=new D,Rr=new D;class k_{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ch.subVectors(t,this.start),Rr.subVectors(this.end,this.start);const n=Rr.dot(Rr);let r=Rr.dot(ch)/n;return e&&(r=ye(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);class aa extends Wt{constructor(){const t=aa.SkyShader,e=new He({name:t.name,uniforms:Pi.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ue,depthWrite:!1});super(new Vn(1,1,1),e),this.isSky=!0}}aa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const H_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const G_=new wl(-1,1,1,-1,0,1);class V_ extends Pe{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const W_=new V_;class Ll{constructor(t){this._mesh=new Wt(W_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,G_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class X_ extends Ss{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pi.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ll(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hh extends Ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class $_ extends Ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class q_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new X_(H_),this.copyPass.material.blending=Sn,this.clock=new yu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hh!==void 0&&(a instanceof hh?n=!0:a instanceof $_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y_ extends Ss{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const j_={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class K_ extends Ss{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new En(1,1,{minFilter:Ae,magFilter:Ae,type:ti}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new _u,this.materialDepth.depthPacking=Jh,this.materialDepth.blending=Sn;const o=j_,l=Pi.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=e.aspect,l.aperture.value=r,l.maxblur.value=a,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new He({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Ll(this.materialBokeh),this._oldClearColor=new It}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Z_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class J_ extends Ss{constructor(){super();const t=Z_;this.uniforms=Pi.clone(t.uniforms),this.material=new I_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ll(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const uh=new wn,Pr=new D;class Eu extends z_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ne(t,3)),this.setAttribute("uv",new ne(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Zo(e,6,1);return this.setAttribute("instanceStart",new Mn(n,3,0)),this.setAttribute("instanceEnd",new Mn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Zo(e,6,1);return this.setAttribute("instanceColorStart",new Mn(n,3,0)),this.setAttribute("instanceColorEnd",new Mn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new D_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),uh.setFromBufferAttribute(e),this.boundingBox.union(uh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pr)),Pr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}it.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Be.line={uniforms:Pi.merge([it.common,it.fog,it.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Il extends He{constructor(t){super({type:"LineMaterial",uniforms:Pi.clone(Be.line.uniforms),vertexShader:Be.line.vertexShader,fragmentShader:Be.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const qa=new ee,dh=new D,fh=new D,ve=new ee,xe=new ee,pn=new ee,Ya=new D,ja=new te,Me=new k_,ph=new D,Dr=new wn,Lr=new Ci,mn=new ee;let vn,yi;function mh(i,t,e){return mn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),mn.multiplyScalar(1/mn.w),mn.x=yi/e.width,mn.y=yi/e.height,mn.applyMatrix4(i.projectionMatrixInverse),mn.multiplyScalar(1/mn.w),Math.abs(Math.max(mn.x,mn.y))}function Q_(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Me.start.fromBufferAttribute(s,o),Me.end.fromBufferAttribute(r,o),Me.applyMatrix4(e);const c=new D,h=new D;vn.distanceSqToSegment(Me.start,Me.end,h,c),h.distanceTo(c)<yi*.5&&t.push({point:h,pointOnLine:c,distance:vn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function tv(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;vn.at(1,pn),pn.w=1,pn.applyMatrix4(t.matrixWorldInverse),pn.applyMatrix4(n),pn.multiplyScalar(1/pn.w),pn.x*=r.x/2,pn.y*=r.y/2,pn.z=0,Ya.copy(pn),ja.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(ve.fromBufferAttribute(l,d),xe.fromBufferAttribute(c,d),ve.w=1,xe.w=1,ve.applyMatrix4(ja),xe.applyMatrix4(ja),ve.z>u&&xe.z>u)continue;if(ve.z>u){const x=ve.z-xe.z,E=(ve.z-u)/x;ve.lerp(xe,E)}else if(xe.z>u){const x=xe.z-ve.z,E=(xe.z-u)/x;xe.lerp(ve,E)}ve.applyMatrix4(n),xe.applyMatrix4(n),ve.multiplyScalar(1/ve.w),xe.multiplyScalar(1/xe.w),ve.x*=r.x/2,ve.y*=r.y/2,xe.x*=r.x/2,xe.y*=r.y/2,Me.start.copy(ve),Me.start.z=0,Me.end.copy(xe),Me.end.z=0;const v=Me.closestPointToPointParameter(Ya,!0);Me.at(v,ph);const p=Yo.lerp(ve.z,xe.z,v),f=p>=-1&&p<=1,S=Ya.distanceTo(ph)<yi*.5;if(f&&S){Me.start.fromBufferAttribute(l,d),Me.end.fromBufferAttribute(c,d),Me.start.applyMatrix4(a),Me.end.applyMatrix4(a);const x=new D,E=new D;vn.distanceSqToSegment(Me.start,Me.end,E,x),e.push({point:E,pointOnLine:x,distance:vn.origin.distanceTo(E),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class ev extends Wt{constructor(t=new Eu,e=new Il({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)dh.fromBufferAttribute(e,a),fh.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+dh.distanceTo(fh);const r=new Zo(s,2,1);return t.setAttribute("instanceDistanceStart",new Mn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Mn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;vn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;yi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Lr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=yi*.5;else{const u=Math.max(s.near,Lr.distanceToPoint(vn.origin));c=mh(s,u,l.resolution)}if(Lr.radius+=c,vn.intersectsSphere(Lr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Dr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=yi*.5;else{const u=Math.max(s.near,Dr.distanceToPoint(vn.origin));h=mh(s,u,l.resolution)}Dr.expandByScalar(h),vn.intersectsBox(Dr)!==!1&&(n?Q_(this,e):tv(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(qa),this.material.uniforms.resolution.value.set(qa.z,qa.w))}}class bu extends Eu{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class nv extends ev{constructor(t=new bu,e=new Il({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const wu=.44704,iv=1/wu,Tu=1.0936133,sv=1/Tu,rv=3.2808399,Au=2*Math.PI/60,is=Math.PI/180,Ul=i=>i*wu,av=i=>i*iv,Ka=i=>i*Tu,qr=i=>i*sv,ov=i=>i*rv;function Nl(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,{c:e,g:e.getContext("2d")}}function Cu(i){return()=>(i=i*16807%2147483647)/2147483647}function gh(i){const{c:t,g:e}=Nl(512,512),n=Cu(11);e.fillStyle="#4a7f3c",e.fillRect(0,0,512,512);for(let r=0;r<60;r++){const a=n()*512,o=n()*512,l=20+n()*60,c=e.createRadialGradient(a,o,0,a,o,l),h=n()>.5;c.addColorStop(0,h?"rgba(120,170,80,0.18)":"rgba(30,70,30,0.18)"),c.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=c;for(const u of[-512,0,512])for(const d of[-512,0,512])e.save(),e.translate(u,d),e.fillRect(a-l,o-l,l*2,l*2),e.restore()}e.lineCap="round";for(let r=0;r<9e3;r++){const a=n()*512,o=n()*512,l=2+n()*5,c=-Math.PI/2+(n()-.5)*.9,h=30+n()*30;e.strokeStyle=`hsl(${95+n()*25}, ${35+n()*25}%, ${h}%)`,e.lineWidth=.6+n()*.8,e.beginPath(),e.moveTo(a,o),e.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l),e.stroke()}const s=new Qs(t);return s.wrapS=s.wrapT=Xs,s.colorSpace=Ye,s.anisotropy=i,s}function lv(){const{c:n,g:s}=Nl(512,256),r=s.createImageData(512,256),a=Array.from({length:20},(c,h)=>{const u=((h+.5)/20-.5)*Math.PI;return Math.max(3,Math.round(40*Math.cos(u)))}),o=.42;for(let c=0;c<256;c++){const h=c/256*20-.5,u=(c/256-.5)*Math.PI,d=Math.max(.05,Math.cos(u));for(let m=0;m<512;m++){let g=1/0,v=0,p=0;for(let S=Math.max(0,Math.floor(h));S<=Math.min(19,Math.ceil(h));S++){const x=a[S],E=m/512*x-S%2*.5;for(const R of[Math.floor(E),Math.ceil(E)]){const T=(E-R)*(20/x)*d*2,w=h-S,C=Math.hypot(T,w);C<g&&(g=C,v=T,p=w)}}const f=(c*512+m)*4;if(g<o){const S=g/o*.9,x=-v/(g||1)*S,E=p/(g||1)*S;r.data[f]=128+x*110,r.data[f+1]=128+E*110,r.data[f+2]=255*Math.sqrt(Math.max(0,1-Math.min(1,x*x+E*E)))}else r.data[f]=128,r.data[f+1]=128,r.data[f+2]=255;r.data[f+3]=255}}s.putImageData(r,0,0);const l=new Qs(n);return l.wrapS=Xs,l}function cv(i){const t=new U_({color:16777215,roughness:.42,clearcoat:.9,clearcoatRoughness:.12,normalMap:lv(),normalScale:new Et(.55,.55)}),e=new Wt(new ra(i,48,32),t);return e.castShadow=!0,e}function hv(i){const t=new Bn,e=Cu(5),n=new Ms(.25,.4,1,6);n.translate(0,.5,0);const s=new Cl(1,1,7);s.translate(0,.5,0);const r=new Pl(1,1),a=new Xa(n,new Se({color:5915440,roughness:1}),i.length),o=new Xa(s,new Se({color:16777215,roughness:.95,flatShading:!0}),i.length*2),l=new Xa(r,new Se({color:16777215,roughness:.95,flatShading:!0}),i.length*3),c=new te,h=new vs,u=new It;let d=0,m=0;i.forEach((g,v)=>{const p=9*g.s;if(c.compose(new D(g.x,0,g.z),h,new D(g.s,p*.35,g.s)),a.setMatrixAt(v,c),e()<.55)for(let f=0;f<2;f++){const S=(3.2-f*1.1)*g.s;c.compose(new D(g.x,p*(.22+f*.28),g.z),h,new D(S,p*(.62-f*.12),S)),o.setMatrixAt(d,c),o.setColorAt(d++,u.setHSL(.3+e()*.05,.38+e()*.15,.18+e()*.08))}else for(let f=0;f<3;f++){const S=(2.4+e()*1.2)*g.s,x=new D((e()-.5)*2.4*g.s,p*(.55+e()*.25),(e()-.5)*2.4*g.s);c.compose(new D(g.x+x.x,x.y,g.z+x.z),h,new D(S,S*.85,S)),l.setMatrixAt(m,c),l.setColorAt(m++,u.setHSL(.22+e()*.08,.35+e()*.2,.22+e()*.1))}}),o.count=d,l.count=m;for(const g of[a,o,l])g.castShadow=!0,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);return t.add(a,o,l),t}function uv(i){const{c:t,g:e}=Nl(256,128);e.fillStyle="#f6f3ea",e.fillRect(0,0,256,128),e.fillStyle="#1f4d2b",e.fillRect(8,8,240,112),e.fillStyle="#f6f3ea",e.font='bold 76px "Arial Narrow", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,70);const n=new Qs(t);n.colorSpace=Ye;const s=new Wt(new Vn(4.2,2.1,.12),[...Array(4).fill(new Se({color:16184298})),new Se({map:n,roughness:.7}),new Se({color:16184298})]);s.position.y=2.6,s.castShadow=!0;const r=new Se({color:7033144,roughness:1}),a=new Bn;for(const o of[-1.5,1.5]){const l=new Wt(new Vn(.15,2.6,.15),r);l.position.set(o,1.3,-.1),l.castShadow=!0,a.add(l)}return a.add(s),a}function _h(i=2.4){const t=new Bn,e=new Wt(new Ms(.03,.03,i,8),new Se({color:15921906,roughness:.4}));e.position.y=i/2,e.castShadow=!0;const n=new _n(.9,.6,10,4);n.translate(.45,0,0);const s=Float32Array.from(n.attributes.position.array),r=new Wt(n,new Se({color:14100029,side:cn,roughness:.8}));r.position.y=i-.32,r.castShadow=!0;const a=new Wt(new Ys(.11,20),new Si({color:855309}));a.rotation.x=-Math.PI/2,a.position.y=.012,t.add(e,r,a);const o=Math.random()*10;return t.wave=l=>{const c=n.attributes.position;for(let h=0;h<c.count;h++){const u=s[h*3];c.setZ(h,Math.sin(u*6-(l+o)*4)*.08*u)}c.needsUpdate=!0,n.computeVertexNormals()},t}const hi=(i,t,e)=>new D(i,t,-e),ui=.16,Za=16763196;class dv{constructor(t){Z(this,"renderer");Z(this,"scene",new Qc);Z(this,"camera");Z(this,"composer");Z(this,"bokeh");Z(this,"sun");Z(this,"sunDir",new D);Z(this,"ball");Z(this,"ballGlow");Z(this,"tracers",[]);Z(this,"anim",null);Z(this,"cameraMode","behind");Z(this,"quality","high");Z(this,"rangeGroup",new Bn);Z(this,"courseGroup",new Bn);Z(this,"satellite",null);Z(this,"satelliteShadow",null);Z(this,"flag");Z(this,"rangeFlags",[]);Z(this,"mode","range");Z(this,"origin",{e:0,n:0});Z(this,"aim",{e:0,n:1});Z(this,"target",null);Z(this,"onAnimDone",null);Z(this,"disposed",!1);Z(this,"resizeObserver");Z(this,"clock",new yu);Z(this,"maxAniso");Z(this,"speed",1);Z(this,"loop",()=>{if(this.disposed)return;requestAnimationFrame(this.loop);const t=this.clock.getElapsedTime();if(this.anim){const{pts:n,start:s,duration:r,line:a}=this.anim,o=(performance.now()-s)/1e3*this.speed,l=n[0].t+o;let c=n.findIndex(d=>d.t>l);c===-1&&(c=n.length),a.geometry.instanceCount=Math.max(0,c-1);const h=this.toThree(n[Math.min(c,n.length-1)]);this.ball.position.set(h.x,h.y+ui,h.z),this.ball.rotation.x-=.6;const u=this.camera.position.distanceTo(this.ball.position);if(this.ballGlow.visible=u>25,this.ballGlow.position.copy(this.ball.position),this.ballGlow.scale.setScalar(Math.min(6,u*.012)),this.cameraMode==="follow"){const d=new D(this.aim.e,0,-this.aim.n).normalize(),m=h.clone().addScaledVector(d,-35).setY(h.y+8);this.camera.position.lerp(m,.08),this.camera.lookAt(h.clone().addScaledVector(d,20))}else this.cameraMode==="top"&&this.placeStaticCamera(this.toThree(n[n.length-1]));o>=r&&(this.finishAnim(),this.cameraMode!=="follow"&&this.placeStaticCamera(h))}for(const n of this.rangeFlags)n.wave(t);this.flag.wave(t);const e=this.ball.position;if(this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,200),this.quality==="high"&&this.cameraMode!=="top"){const n=this.bokeh.uniforms,s=this.camera.position.distanceTo(e);n.focus.value+=(s-n.focus.value)*.15,n.aperture.value=this.mode==="course"?3e-5:12e-5,this.composer.render()}else this.renderer.render(this.scene,this.camera)});this.container=t,this.renderer=new A_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=pl,this.renderer.toneMappingExposure=.7,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nh,t.appendChild(this.renderer.domElement),this.maxAniso=this.renderer.capabilities.getMaxAnisotropy(),this.camera=new tn(50,1,.2,12e3);const e=new aa;e.scale.setScalar(1e4);const n=e.material.uniforms;n.turbidity.value=4,n.rayleigh.value=1.4,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.82,this.sunDir.setFromSphericalCoords(1,Yo.degToRad(66),Yo.degToRad(215)),n.sunPosition.value.copy(this.sunDir),this.scene.add(e);const s=new jo(this.renderer),r=new Qc;r.add(e.clone()),this.scene.environment=s.fromScene(r,.04).texture,this.scene.environmentIntensity=.55,s.dispose(),this.scene.fog=new Al(12900064,260,1400),this.scene.add(new N_(13624319,4218938,.55)),this.sun=new B_(16771012,2.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const a=this.sun.shadow.camera;a.left=-45,a.right=45,a.top=45,a.bottom=-45,a.near=1,a.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.sun,this.sun.target),this.scene.add(this.rangeGroup,this.courseGroup),this.buildRange(),this.flag=_h(2.4);const o=new Wt(new Ms(.2,.2,30,12,1,!0),new Si({color:Za,transparent:!0,opacity:.22,depthWrite:!1,fog:!1}));o.position.y=15,this.flag.add(o);const l=new Wt(new _n(6e3,6e3),this.grassMaterial(9679484,1500));l.rotation.x=-Math.PI/2,l.position.y=-.05,l.receiveShadow=!0,this.courseGroup.add(l,this.flag),this.courseGroup.visible=!1,this.ball=cv(ui),this.ball.position.set(0,ui,0),this.scene.add(this.ball),this.ballGlow=new C_(new xu({map:pv(),color:16777215,transparent:!0,depthWrite:!1,blending:oo,fog:!1})),this.ballGlow.visible=!1,this.scene.add(this.ballGlow);const c=new En(1,1,{samples:4,type:ti});this.composer=new q_(this.renderer,c),this.composer.addPass(new Y_(this.scene,this.camera)),this.bokeh=new K_(this.scene,this.camera,{focus:10,aperture:12e-5,maxblur:.006}),this.composer.addPass(this.bokeh),this.composer.addPass(new J_),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.setCameraMode("behind"),this.loop()}grassMaterial(t,e){const n=gh(this.maxAniso);return n.repeat.set(e,e),new Se({map:n,color:t,roughness:.95})}buildRange(){const t=gh(this.maxAniso),e=t.clone();e.repeat.set(220,260);const n=new Wt(new _n(1200,1400),new Se({map:e,color:9085556,roughness:1}));n.rotation.x=-Math.PI/2,n.position.z=-500,n.receiveShadow=!0,this.rangeGroup.add(n);const s=12.5;for(let l=-1;l<30;l++){const c=t.clone();c.repeat.set(16,3);const h=new Wt(new _n(80,s),new Se({map:c,color:l%2?14874564:11128714,roughness:.9}));h.rotation.x=-Math.PI/2,h.position.set(0,.01,-l*s-s/2+2),h.receiveShadow=!0,this.rangeGroup.add(h)}const r=new Wt(new Vn(1.6,.03,1.6),new Se({color:3108410,roughness:1}));r.position.set(0,.015,0),r.receiveShadow=!0,this.rangeGroup.add(r);for(const l of[-2.6,2.6]){const c=new Wt(new ra(.07,16,12),new Se({color:1793983,roughness:.4}));c.position.set(l,.07,-.6),c.castShadow=!0,this.rangeGroup.add(c)}for(let l=50;l<=350;l+=50){const c=-qr(l),h=new Wt(new _n(80,.35),new Si({color:16777215,transparent:!0,opacity:.4,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,.03,c),this.rangeGroup.add(h);for(const u of[-44,44]){const d=uv(String(l));d.position.set(u,0,c),d.lookAt(0,0,30),this.rangeGroup.add(d)}}for(const[l,c]of[[75,-12],[125,10],[175,-6],[225,14],[275,0]]){const h=-qr(l),u=new Wt(new Ys(10.5,48),new Se({color:6199877,roughness:.9}));u.rotation.x=-Math.PI/2,u.position.set(c,.035,h),u.receiveShadow=!0;const d=t.clone();d.repeat.set(6,6);const m=new Wt(new Ys(9,48),new Se({map:d,color:13824184,roughness:.6}));m.rotation.x=-Math.PI/2,m.position.set(c,.045,h),m.receiveShadow=!0;const g=_h(3);g.position.set(c,.05,h),this.rangeFlags.push(g),this.rangeGroup.add(u,m,g)}const a=fv(3),o=[];for(let l=-20;l>-480;l-=9+a()*6)o.push({x:-62-a()*18,z:l,s:.8+a()*.7}),o.push({x:62+a()*18,z:l-4,s:.8+a()*.7});for(let l=-80;l<=80;l+=8+a()*6)o.push({x:l,z:-470-a()*25,s:1+a()*.8});this.rangeGroup.add(hv(o))}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.sun.castShadow=t!=="low",this.renderer.setPixelRatio(t==="low"?1:Math.min(window.devicePixelRatio,2)),this.scene.traverse(e=>{const n=e.material;n&&(Array.isArray(n)?n:[n]).forEach(s=>s.needsUpdate=!0)}),this.resize()}setMode(t){this.mode=t,this.rangeGroup.visible=t==="range",this.courseGroup.visible=t==="course",this.clearTracers(),t==="range"&&(this.origin={e:0,n:0},this.aim={e:0,n:1},this.target=null,this.ball.position.set(0,ui,0)),this.placeStaticCamera()}setSatellite(t,e){var c;for(const h of[this.satellite,this.satelliteShadow]){if(!h)continue;this.courseGroup.remove(h),h.geometry.dispose();const u=h.material;(c=u.map)==null||c.dispose(),u.dispose()}const n=new Qs(t);n.colorSpace=Ye,n.anisotropy=this.maxAniso;const s=e.maxE-e.minE,r=e.maxN-e.minN,a=new _n(s,r),o=new Wt(a,new Si({map:n,toneMapped:!1}));o.rotation.x=-Math.PI/2,o.position.copy(hi(e.minE+s/2,0,e.minN+r/2));const l=new Wt(a.clone(),new L_({opacity:.35}));l.rotation.x=-Math.PI/2,l.position.copy(o.position).setY(.02),l.receiveShadow=!0,this.satellite=o,this.satelliteShadow=l,this.courseGroup.add(o,l)}setPin(t){this.flag.position.copy(hi(t.e,.03,t.n))}setBall(t,e,n){this.origin={...t},this.aim={...e},this.target=n??null,this.ball.position.copy(hi(t.e,ui,t.n)),this.anim||this.placeStaticCamera()}toThree(t){const e=this.aim,n={e:e.n,n:-e.e};return hi(this.origin.e+e.e*t.x+n.e*t.z,t.y,this.origin.n+e.n*t.x+n.n*t.z)}setCameraMode(t){this.cameraMode=t,this.anim||this.placeStaticCamera()}placeStaticCamera(t){const e=hi(this.origin.e,0,this.origin.n),n=new D(this.aim.e,0,-this.aim.n).normalize();if(this.cameraMode==="top"){const s=t??(this.target?hi(this.target.e,0,this.target.n):e.clone().addScaledVector(n,this.mode==="course"?200:220)),r=e.clone().lerp(s,.5),a=Math.max(80,e.distanceTo(s));this.camera.position.copy(r).add(new D(0,a*1.15,0)).addScaledVector(n,-1),this.camera.lookAt(r)}else this.mode==="course"?(this.camera.position.copy(e).addScaledVector(n,-16).setY(9),this.camera.lookAt(e.clone().addScaledVector(n,120))):(this.camera.position.copy(e).addScaledVector(n,-5.5).setY(1.7),this.camera.lookAt(e.clone().addScaledVector(n,150).setY(3)))}playShot(t,e){this.anim&&this.finishAnim();for(const u of this.tracers)u.line.material.opacity*=.5,u.marker.material.opacity*=.5;for(;this.tracers.length>=10;){const u=this.tracers.shift();this.scene.remove(u.line,u.marker),u.line.geometry.dispose()}const n=[...t.flight,...t.ground],s=[];for(const u of n){const d=this.toThree(u);s.push(d.x,d.y+.02,d.z)}s.length<6&&s.push(...s.slice(0,3));const r=new bu;r.setPositions(s),r.instanceCount=0;const a=new Il({color:Za,linewidth:3.5,transparent:!0,opacity:1,worldUnits:!1});a.resolution.set(this.container.clientWidth,this.container.clientHeight);const o=new nv(r,a);o.frustumCulled=!1;const l=new Wt(new Dl(.7,1.1,32),new Si({color:Za,transparent:!0,opacity:0,side:cn,depthWrite:!1}));l.rotation.x=-Math.PI/2;const c=this.toThree(n[n.length-1]);l.position.set(c.x,.07,c.z),this.scene.add(o,l);const h=n[n.length-1].t-n[0].t;this.anim={pts:n,positions:s,start:performance.now(),duration:h,line:o,marker:l},this.onAnimDone=e??null}finishAnim(){if(!this.anim)return;const{line:t,marker:e,pts:n}=this.anim;t.geometry.instanceCount=1/0,e.material.opacity=.9,this.ball.position.copy(this.toThree(n[n.length-1])).setY(ui),this.ballGlow.visible=!1,this.tracers.push({line:t,marker:e}),this.anim=null;const s=this.onAnimDone;this.onAnimDone=null,s==null||s()}clearTracers(){for(const t of this.tracers)this.scene.remove(t.line,t.marker);this.tracers=[],this.ball.position.copy(hi(this.origin.e,ui,this.origin.n)),this.placeStaticCamera()}resize(){const t=this.container.clientWidth||1,e=this.container.clientHeight||1;this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();for(const n of this.tracers)n.line.material.resolution.set(t,e);this.anim&&this.anim.line.material.resolution.set(t,e)}dispose(){this.disposed=!0,this.resizeObserver.disconnect(),this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function fv(i){return()=>(i=i*16807%2147483647)/2147483647}function pv(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,240,200,0.6)"),e.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Qs(i)}class Ru{constructor(){Z(this,"listeners",new Map)}on(t,e){this.listeners.has(t)||this.listeners.set(t,new Set);const n=this.listeners.get(t);return n.add(e),()=>n.delete(e)}emit(t,...e){var n;(n=this.listeners.get(t))==null||n.forEach(s=>s(...e))}}const Yr=["DR","3W","5W","HY","3i","4i","5i","6i","7i","8i","9i","PW","GW","SW","LW","PT"],Pu={DR:{launch:12,spinPerMph:17,smash:1.48},"3W":{launch:10.5,spinPerMph:23,smash:1.46},"5W":{launch:12,spinPerMph:29,smash:1.44},HY:{launch:12.5,spinPerMph:33,smash:1.42},"3i":{launch:11,spinPerMph:33,smash:1.4},"4i":{launch:11.5,spinPerMph:36,smash:1.39},"5i":{launch:12.5,spinPerMph:40,smash:1.38},"6i":{launch:14,spinPerMph:49,smash:1.36},"7i":{launch:16,spinPerMph:58,smash:1.33},"8i":{launch:18,spinPerMph:69,smash:1.31},"9i":{launch:20.5,spinPerMph:80,smash:1.28},PW:{launch:24,spinPerMph:91,smash:1.24},GW:{launch:27,spinPerMph:100,smash:1.2},SW:{launch:30,spinPerMph:110,smash:1.15},LW:{launch:33,spinPerMph:115,smash:1.1},PT:{launch:1,spinPerMph:0,smash:1}},mv={DR:95,"3W":90,"5W":87,HY:85,"3i":84,"4i":83,"5i":81,"6i":79,"7i":77,"8i":75,"9i":73,PW:71,GW:68,SW:65,LW:60,PT:5};function Qi(i=Math.random){const t=1-i(),e=i();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function gv(i,t=Math.random){const e=Pu[i],n=mv[i]*(1+.04*Qi(t)),s=Math.min(1.52,e.smash*(1-Math.abs(.03*Qi(t)))),r=n*s;return{clubSpeedMph:Ls(n,1),ballSpeedMph:Ls(r,1),launchAngleDeg:Ls(Math.max(.5,e.launch+2*Qi(t)),1),launchDirectionDeg:Ls(2.5*Qi(t),1),spinRpm:Math.round(Math.max(500,e.spinPerMph*r*(1+.12*Qi(t)))),spinAxisDeg:Ls(8*Qi(t),1)}}const Ls=(i,t)=>Math.round(i*10**t)/10**t;class _v extends Ru{constructor(){super(...arguments);Z(this,"id","simulator");Z(this,"name","Simulator (no hardware)");Z(this,"description","Generates realistic random shots for the selected club.");Z(this,"club","7i");Z(this,"timer",null);Z(this,"connected",!1)}isSupported(){return!0}async connect(){this.connected=!0,this.emit("status","connected","Simulator"),this.emit("readiness","ready")}async disconnect(){this.setAutoFire(0),this.connected=!1,this.emit("status","disconnected")}hit(){this.connected&&this.emit("shot",gv(this.club))}setAutoFire(e){this.timer&&clearInterval(this.timer),this.timer=e>0?setInterval(()=>this.hit(),e*1e3):null}}function vv(i,t){const e=t.status;return e?e.ready&&(e.ready.prefix||e.ready.length!==void 0)&&Jo(i,e.ready)?"ready":e.notReady&&(e.notReady.prefix||e.notReady.length!==void 0)&&Jo(i,e.notReady)?"not-ready":null:null}const Du={uint8:1,int8:1,uint16le:2,uint16be:2,int16le:2,int16be:2,uint32le:4,uint32be:4,int32le:4,int32be:4,float32le:4,float32be:4};function xv(i,t){if(t.offset<0||t.offset+Du[t.type]>i.byteLength)return;const e=t.offset;let n;switch(t.type){case"uint8":n=i.getUint8(e);break;case"int8":n=i.getInt8(e);break;case"uint16le":n=i.getUint16(e,!0);break;case"uint16be":n=i.getUint16(e,!1);break;case"int16le":n=i.getInt16(e,!0);break;case"int16be":n=i.getInt16(e,!1);break;case"uint32le":n=i.getUint32(e,!0);break;case"uint32be":n=i.getUint32(e,!1);break;case"int32le":n=i.getInt32(e,!0);break;case"int32be":n=i.getInt32(e,!1);break;case"float32le":n=i.getFloat32(e,!0);break;case"float32be":n=i.getFloat32(e,!1);break}return n*(t.scale??1)+(t.add??0)}function Lu(i){const t=i.replace(/[^0-9a-fA-F]/g,"");if(t.length%2)throw new Error(`Odd-length hex string: ${i}`);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++)e[n]=parseInt(t.slice(n*2,n*2+2),16);return e}function Ns(i){const t=i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return Array.from(t,e=>e.toString(16).padStart(2,"0").toUpperCase()).join(" ")}function Jo(i,t){if(!t)return!0;if(t.length!==void 0&&i.length!==t.length)return!1;if(t.prefix){const e=Lu(t.prefix);if(i.length<e.length)return!1;for(let n=0;n<e.length;n++)if(i[n]!==e[n])return!1}return!0}function Mv(i,t){if(!Jo(i,t.match))return null;const e=new DataView(i.buffer,i.byteOffset,i.byteLength),n={raw:Ns(i)};for(const[s,r]of Object.entries(t.fields)){const a=xv(e,r);a!==void 0&&Number.isFinite(a)&&(n[s]=a)}return!n.ballSpeedMph||n.ballSpeedMph<=0?null:n}function Sv(i){if(!i||typeof i!="object")throw new Error("Profile must be a JSON object");const t=i;if(typeof t.name!="string")throw new Error('Profile needs a "name"');if(!Array.isArray(t.namePrefixes))throw new Error('Profile needs "namePrefixes": []');if(!Array.isArray(t.services))throw new Error('Profile needs "services": []');if(!t.fields||typeof t.fields!="object")throw new Error('Profile needs "fields": {}');for(const[e,n]of Object.entries(t.fields))if(typeof n.offset!="number"||!(n.type in Du))throw new Error(`Field "${e}" needs a numeric "offset" and a valid "type"`);return t}function yv(i){let t=0;for(const e of i)t=t+e&255;return t===0}const ts=i=>String(i).padStart(2,"0"),Ev=i=>Math.round(i*1e3)/1e3;function bv(i){if(i.length<3)return null;const t=String.fromCharCode(i[0],i[1]);if(!/^[A-Za-z]{2}$/.test(t))return null;const e=yv(i),n={type:t,checksumOk:e,summary:""},s=[`"${t}" frame`,e?"checksum ok":"checksum MISMATCH"];if(t==="Ss"&&i.length>=20){const r=new DataView(i.buffer,i.byteOffset,i.byteLength);if(n.part=i[2]<<16|i[3]<<8|i[4],s.push(`part ${n.part}`),n.part===1){const[a,o,l,c,h,u]=Array.from(i.slice(5,11));o>=1&&o<=12&&l>=1&&l<=31&&c<24&&h<60&&u<60&&(n.time=`20${ts(a)}-${ts(o)}-${ts(l)} ${ts(c)}:${ts(h)}:${ts(u)}`,s.push(`device time ${n.time}`)),n.clubCode=r.getUint16(11,!1),n.loftDeg=Math.round(r.getFloat32(13,!0)*10)/10,s.push(`club code ${n.clubCode}`,`loft ${n.loftDeg}°`)}else n.values=[5,9,13].map(a=>Ev(r.getFloat32(a,!0))),s.push(`values ${n.values.join(" · ")}`)}else t==="Sx"&&(n.code=i[2],s.push(`no shot measured (code ${i[2]})`));return n.summary=s.join(" · "),n}const wv={ballSpeedMs:[2,2]},vh=[["DR",10.5],["3W",15],["5W",18],["HY",21],["4i",24],["5i",27],["6i",30],["7i",34],["8i",38],["9i",42],["PW",46],["GW",50],["SW",56],["LW",60]];function Tv(i){let t=vh[0];for(const e of vh)Math.abs(e[1]-i)<Math.abs(t[1]-i)&&(t=e);return t[0]}function Av(i){const e=(r=>{var l,c;const a=wv[r];if(!a)return;const o=(c=(l=i.find(h=>h.part===a[0]))==null?void 0:l.values)==null?void 0:c[a[1]];return o!==void 0&&Number.isFinite(o)?o:void 0})("ballSpeedMs");if(e===void 0||e<=0||e>120)return null;const n=i.find(r=>r.part===1),s=i.map(r=>{var a;return r.part===1?`p1: club ${r.club}, loft ${r.loft}`:`p${r.part}: ${(a=r.values)==null?void 0:a.join(", ")}`}).join(" | ");return{ballSpeedMph:Math.round(e*2.23694*10)/10,clubHint:n!=null&&n.loft?Tv(n.loft):void 0,raw:s}}class Cv extends Ru{constructor(e){super();Z(this,"id","bluetooth");Z(this,"name","Bluetooth (Web Bluetooth)");Z(this,"description","Connect to a BLE launch monitor such as the SC4 Pro using a device profile.");Z(this,"acceptAllDevices",!1);Z(this,"autoAck",!0);Z(this,"lastAckHex","");Z(this,"lastAckAt",0);Z(this,"shotParts",[]);Z(this,"shotTimer",null);Z(this,"device",null);Z(this,"chars",[]);Z(this,"writable",[]);Z(this,"handlers",new Map);Z(this,"capture",[]);this.profile=e}isSupported(){return typeof navigator<"u"&&"bluetooth"in navigator}async connect(){if(!this.isSupported())throw new Error("Web Bluetooth is not available. Use Chrome or Edge on desktop/Android over HTTPS or localhost.");this.emit("status","connecting"),this.resetChannels();const e=this.profile.services.map(Ja),n=this.acceptAllDevices||!this.profile.namePrefixes.length?{acceptAllDevices:!0,optionalServices:e}:{filters:this.profile.namePrefixes.map(s=>({namePrefix:s})),optionalServices:e};try{const s=await navigator.bluetooth.requestDevice(n);this.device=s,s.addEventListener("gattserverdisconnected",()=>{this.resetChannels(),this.emit("status","disconnected","Device disconnected")}),this.emit("log",`Selected "${s.name??"unnamed"}" (${s.id})`);const r=await s.gatt.connect(),a=await this.subscribeAll(r);a===0?(this.emit("log","⚠ Connected, but no data channels could be opened, so no shot data can arrive."),this.emit("log","  On Windows this usually means the device has to be paired with Windows first:"),this.emit("log","  Settings → Bluetooth & devices → Add device → Bluetooth → pick the SC4PRO, then reconnect here."),this.emit("status","connected",`${s.name??"Device"} · no data channels (see Device tab)`)):this.emit("status","connected",`${s.name??"Connected"} · listening on ${a} channel${a>1?"s":""}`)}catch(s){const r=s instanceof Error?s.message:String(s);throw this.emit("status","error",r),s}}async subscribeAll(e){let n=[];for(let r=1;r<=3&&!n.length;r++){try{n=await e.getPrimaryServices()}catch(a){this.emit("log",`Could not list services (try ${r}/3): ${a.message}`)}!n.length&&r<3&&await xh(1e3*r)}n.length||this.emit("log","No accessible services. Add the device's service UUIDs to the profile (find them with a BLE scanner app such as nRF Connect).");const s=this.profile.shotCharacteristic?BluetoothUUID.getCharacteristic(Ja(this.profile.shotCharacteristic)):null;for(const r of n){this.emit("log",`Service ${r.uuid}`);let a=[];for(let o=1;o<=3&&!a.length;o++){try{a=await r.getCharacteristics()}catch(l){this.emit("log",`  (cannot read characteristics, try ${o}/3: ${l.message})`)}!a.length&&o<3&&await xh(1e3*o)}a.length||this.emit("log","  (no characteristics visible in this service)");for(const o of a){const l=o.properties,c=[l.read&&"read",l.write&&"write",l.writeWithoutResponse&&"writeNR",l.notify&&"notify",l.indicate&&"indicate"].filter(Boolean).join(",");if(this.emit("log",`  Characteristic ${o.uuid} [${c}]`),l.read)try{const h=await o.readValue();this.emit("log",`    read: ${Ns(h)}  "${Rv(h)}"${Ir(o.uuid)==="2a19"&&h.byteLength===1?`  (battery ${h.getUint8(0)}%)`:""}`)}catch{}if((l.write||l.writeWithoutResponse)&&this.writable.push(o),l.notify||l.indicate)try{if(await o.startNotifications(),this.chars.some(u=>u.uuid.toLowerCase()===o.uuid.toLowerCase()))continue;const h=u=>{const d=u.target.value;this.onPacket(o.uuid,d,s)};o.addEventListener("characteristicvaluechanged",h),this.handlers.set(o,h),this.chars.push(o)}catch(h){this.emit("log",`    (subscribe failed: ${h.message})`)}}}return this.chars.length}onPacket(e,n,s){const r=e.toLowerCase(),a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o=Ns(a);this.capture.push({t:Date.now(),char:r,hex:o}),this.emit("log",`◀ ${Ir(r)} ${o}`),Ir(r)==="2a19"&&a.length===1&&this.emit("log",`    ↳ battery ${a[0]}%`);const l=bv(a);l&&r.startsWith("50340003")&&(this.emit("log",`    ↳ ${l.summary}`),l.type==="Ss"&&l.checksumOk&&l.part?(this.collectPart(l),this.acknowledge(o)):l.checksumOk&&(l.type==="Sx"&&o!==this.lastAckHex&&this.emit("shotEvent","SC4 Pro couldn't measure that shot"),this.acknowledge(o))),this.emit("packet",r,o);const c=vv(a,this.profile);if(c){this.emit("readiness",c);return}if(s&&r!==s||!Object.keys(this.profile.fields).length)return;const h=Mv(a,this.profile);h&&this.emit("shot",h)}async disconnect(){var e,n;for(const s of this.chars)try{await s.stopNotifications()}catch{}this.resetChannels(),(n=(e=this.device)==null?void 0:e.gatt)==null||n.disconnect(),this.device=null,this.emit("status","disconnected")}async sendHex(e){const n=Lu(e);if(!n.length)throw new Error('Type some bytes in hex, e.g. "01 02 0A"');const s=this.profile.commandCharacteristic?BluetoothUUID.getCharacteristic(Ja(this.profile.commandCharacteristic)):null,r=this.writable.find(a=>s?a.uuid.toLowerCase()===s:!0);if(!r)throw new Error("Not connected, or the device has no command channel");r.properties.writeWithoutResponse?await r.writeValueWithoutResponse(n):await r.writeValue(n),this.capture.push({t:Date.now(),char:`▶${r.uuid}`,hex:Ns(n)}),this.emit("log",`▶ ${Ir(r.uuid)} ${Ns(n)}  (sent)`)}resetChannels(){for(const e of this.chars)e.removeEventListener("characteristicvaluechanged",this.handlers.get(e));this.handlers.clear(),this.chars=[],this.writable=[]}acknowledge(e){if(!this.autoAck)return;const n=Date.now();e===this.lastAckHex&&n-this.lastAckAt<3e3||this.shotParts.length>=16||(this.lastAckHex=e,this.lastAckAt=n,setTimeout(()=>{this.sendHex(e).catch(s=>this.emit("log",`Couldn't acknowledge: ${s.message}`))},40))}collectPart(e){e.part===1&&(this.shotParts=[],this.emit("shotEvent",`SC4 Pro registered a shot${e.loftDeg?` · loft ${e.loftDeg}°`:""}`)),this.shotParts.push({part:e.part,values:e.values,loft:e.loftDeg,club:e.clubCode,time:e.time}),this.shotTimer&&clearTimeout(this.shotTimer),this.shotTimer=setTimeout(()=>this.finishShot(),1500)}finishShot(){const e=this.shotParts.sort((a,o)=>a.part-o.part);if(!e.length)return;const n=e.find(a=>a.part===1),s=e.filter(a=>a.values).map(a=>`p${a.part}: ${a.values.join(", ")}`);this.emit("log",`★ Shot complete · ${e.length} part${e.length>1?"s":""}${n?` · club ${n.club} · loft ${n.loft}° · ${n.time??""}`:""}`),s.length&&this.emit("log",`★ Values · ${s.join(" | ")}`);const r=Av(e);r&&(this.emit("log",`★ Shot sent to the app · ball ${r.ballSpeedMph} mph${r.clubHint?` · club ${r.clubHint}`:""} (other numbers estimated until decoded)`),this.emit("shot",r)),this.shotParts=[]}lastDataHex(){var e;return((e=[...this.capture].reverse().find(n=>n.char.startsWith("50340003")))==null?void 0:e.hex)??null}labelLatest(e){const n=[...this.capture].reverse().find(s=>s.char.startsWith("50340003"));return n&&(n.screen=e),n}exportCapture(){return JSON.stringify({profile:this.profile.name,packets:this.capture},null,2)}}function Ja(i){const t=i.trim().toLowerCase();return/^0x[0-9a-f]{4}$/.test(t)||/^[0-9a-f]{4}$/.test(t)?parseInt(t,16):t}function Rv(i){let t="";for(let e=0;e<i.byteLength;e++){const n=i.getUint8(e);t+=n>=32&&n<127?String.fromCharCode(n):"."}return t}const xh=i=>new Promise(t=>setTimeout(t,i));function Ir(i){const t=i.toLowerCase();return t.length>8?t.slice(4,8):t}const Iu={name:"Swing Caddie SC4 Pro (capture mode – shot format not yet decoded)",notes:"Service and channels confirmed. Start command (if any) and shot frame layout still to be captured. See docs/PROTOCOL.md.",namePrefixes:["SC4PRO","SC4"],services:["50340001-2065-6964-6461-63676e697773","device_information","battery_service"],shotCharacteristic:"50340003-2065-6964-6461-63676e697773",commandCharacteristic:"50340002-2065-6964-6461-63676e697773",fields:{},status:{}},tr={airDensity:1.225,windSpeed:0,windDirectionDeg:0,firmness:.5,stimp:10},Pv=.04593,Qo=.021335,Dv=Math.PI*Qo*Qo,Bs=9.80665,Uu=25,le=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],de=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Mh=i=>Math.hypot(i[0],i[1],i[2]),Lv=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],Nn={cd0:.15,cdS:.6,clA:1.6,clB:1.5,sMax:.25,cdLow:.3,vLow:40};function Iv(i,t=1/0){const e=t<Nn.vLow?Nn.cdLow*(1-t/Nn.vLow):0;return Nn.cd0+Nn.cdS*Math.min(i,Nn.sMax)+e}function Uv(i){const t=Math.min(i,Nn.sMax);return Math.max(0,Nn.clA*t-Nn.clB*t*t)}function Nv(i,t,e){const n=e.windDirectionDeg*is,s=[e.windSpeed*Math.cos(n),0,e.windSpeed*Math.sin(n)],r=.5*e.airDensity*Dv/Pv;return(a,o)=>{const l=Math.min(1,Math.max(0,a.p[1]/10)),c=le(a.v,de(s,-l)),h=Mh(c);if(h<1e-6)return[0,-Bs,0];const u=t*Math.exp(-o/Uu),d=Qo*u/h,m=Iv(d,h),g=Uv(d),v=de(c,-r*m*h),p=Lv(i,c),f=Mh(p),S=f>1e-9?de(p,r*g*h*h/f):[0,0,0];return le(le(v,S),[0,-Bs,0])}}function Fv(i,t,e,n){const s=n(i,t),r={p:le(i.p,de(i.v,e/2)),v:le(i.v,de(s,e/2))},a=n(r,t+e/2),o={p:le(i.p,de(r.v,e/2)),v:le(i.v,de(a,e/2))},l=n(o,t+e/2),c={p:le(i.p,de(o.v,e)),v:le(i.v,de(l,e))},h=n(c,t+e);return{p:le(i.p,de(le(le(i.v,de(r.v,2)),le(de(o.v,2),c.v)),e/6)),v:le(i.v,de(le(le(s,de(a,2)),le(de(l,2),h)),e/6))}}function Fl(i,t=tr,e=.005){const n=Ul(i.ballSpeedMph),s=i.launchAngleDeg*is,r=i.launchDirectionDeg*is,a=[n*Math.cos(s)*Math.cos(r),n*Math.sin(s),n*Math.cos(s)*Math.sin(r)],o=i.spinAxisDeg*is,l=[-Math.sin(r),0,Math.cos(r)],c=le(de(l,Math.cos(o)),[0,-Math.sin(o),0]),h=Math.max(0,i.spinRpm)*Au,u=Nv(c,h,t);let d={p:[0,0,0],v:a},m=0,g=0;const v=[{t:m,x:0,y:0,z:0}],p=20;for(;m<p;){const C=Fv(d,m,e,u);if(C.p[1]<0&&m>.05){const k=d.p[1]/(d.p[1]-C.p[1]),_=le(d.p,de(le(C.p,de(d.p,-1)),k)),b=le(d.v,de(le(C.v,de(d.v,-1)),k));m+=e*k,d={p:[_[0],0,_[2]],v:b},v.push({t:m,x:_[0],y:0,z:_[2]});break}d=C,m+=e,g=Math.max(g,d.p[1]),v.push({t:m,x:d.p[0],y:d.p[1],z:d.p[2]})}const f=m,S=d.p[0],x=d.p[2],E=Math.hypot(d.v[0],d.v[2]),R=Math.atan2(-d.v[1],E)/is,T=Ov(d,m,h*Math.exp(-m/Uu),t),w=T.length?T[T.length-1]:v[v.length-1];return{flight:v,ground:T,carryM:S,totalM:w.x,carryLateralM:x,totalLateralM:w.z,apexM:g,flightTimeS:f,landingAngleDeg:R}}function Ov(i,t,e,n){const s=[];let r=[...i.p],a=i.v[0],o=i.v[2],l=-i.v[1],c=t;const h=Math.min(1,Math.max(0,n.firmness)),u=.25+.2*h,d=e/Au,m=Math.hypot(a,o),g=Math.atan2(l,Math.max(m,.01)),v=Math.min(.85,d/1e4*Math.sin(g)*(1.1-.5*h)),p=Math.max(.05,.5+.2*h-v);for(let x=0;x<5&&l>.6;x++){l*=u;const E=x===0?p:.8;a*=E,o*=E;const R=2*l/Bs,T=12;for(let w=1;w<=T;w++){const C=R*w/T;s.push({t:c+C,x:r[0]+a*C,y:Math.max(0,l*C-.5*Bs*C*C),z:r[2]+o*C})}r=[r[0]+a*R,0,r[2]+o*R],c+=R}const f=Bs*(.45-.2*h),S=Math.hypot(a,o);if(S>.01){const x=a/S,E=o/S,R=S/f,T=Math.max(4,Math.ceil(R/.05));for(let w=1;w<=T;w++){const C=R*w/T,k=S*C-.5*f*C*C;s.push({t:c+C,x:r[0]+x*k,y:0,z:r[2]+E*k})}}return s}const Bv=1.83,zv=.054,Ol=i=>Bv**2/(2*Math.max(4,i)*.3048),kv=(i,t)=>i*i/(2*Ol(t));function Bl(i,t,e=10){const n=Ul(Math.max(0,i)),s=Ol(e),r=kv(n,e),a=n/s,o=t*is,l=[],c=Math.max(6,Math.ceil(a/.05));for(let h=1;h<=c;h++){const u=a*h/c,d=n*u-.5*s*u*u;l.push({t:u,x:d*Math.cos(o),y:0,z:d*Math.sin(o)})}return{flight:[{t:0,x:0,y:0,z:0}],ground:l,carryM:0,totalM:r*Math.cos(o),carryLateralM:0,totalLateralM:r*Math.sin(o),apexM:0,flightTimeS:0,landingAngleDeg:0}}function zl(i,t){const e=Pu[t];return{ballSpeedMph:i.ballSpeedMph,launchAngleDeg:i.launchAngleDeg??e.launch,launchDirectionDeg:i.launchDirectionDeg??0,spinRpm:i.spinRpm??e.spinPerMph*i.ballSpeedMph,spinAxisDeg:i.spinAxisDeg??0}}let Hv=0;const Gv=()=>`${Date.now().toString(36)}-${(Hv++).toString(36)}`;function Nu(i,t,e,n=tr){const s=t==="PT",r=s?{ballSpeedMph:i.ballSpeedMph,launchAngleDeg:0,launchDirectionDeg:i.launchDirectionDeg??0,spinRpm:0,spinAxisDeg:0}:zl(i,t),a=s?[]:Object.keys(r).filter(c=>i[c]===void 0),o=s?Bl(r.ballSpeedMph,r.launchDirectionDeg,n.stimp??10):Fl(r,n);return{shot:{...i,...r,id:Gv(),timestamp:Date.now(),club:t,source:e,carryYd:Is(Ka(o.carryM)),totalYd:Is(Ka(o.totalM)),offlineYd:Is(Ka(o.totalLateralM)),apexFt:Math.round(ov(o.apexM)),landingAngleDeg:Is(o.landingAngleDeg),flightTimeS:Is(o.flightTimeS),estimated:a.length?a:void 0,smashFactor:i.clubSpeedMph?Math.round(i.ballSpeedMph/i.clubSpeedMph*100)/100:void 0},flight:o}}const Is=i=>Math.round(i*10)/10;function Vv(i,t=tr){return i.club==="PT"?Bl(i.ballSpeedMph,i.launchDirectionDeg??0,t.stimp??10):Fl(zl(i,i.club),t)}const mi=i=>i.reduce((t,e)=>t+e,0)/i.length,Sh=i=>{if(i.length<2)return 0;const t=mi(i);return Math.sqrt(i.reduce((e,n)=>e+(n-t)**2,0)/(i.length-1))},di=i=>Math.round(i*10)/10;function Wv(i){const t=new Map;for(const e of i)t.has(e.club)||t.set(e.club,[]),t.get(e.club).push(e);return[...t.entries()].map(([e,n])=>{const s=n.map(r=>r.clubSpeedMph).filter(r=>r!==void 0);return{club:e,count:n.length,avgCarry:di(mi(n.map(r=>r.carryYd))),avgTotal:di(mi(n.map(r=>r.totalYd))),avgBallSpeed:di(mi(n.map(r=>r.ballSpeedMph))),avgClubSpeed:s.length?di(mi(s)):void 0,avgSpin:Math.round(mi(n.map(r=>r.spinRpm??0))),avgLaunch:di(mi(n.map(r=>r.launchAngleDeg??0))),carryStdDev:di(Sh(n.map(r=>r.carryYd))),offlineStdDev:di(Sh(n.map(r=>r.offlineYd)))}})}const yh=["timestamp","club","source","clubSpeedMph","ballSpeedMph","smashFactor","launchAngleDeg","launchDirectionDeg","spinRpm","spinAxisDeg","carryYd","totalYd","offlineYd","apexFt","landingAngleDeg","flightTimeS","deviceCarryYd","deviceTotalYd"];function Fu(i){const t=i.map(e=>yh.map(n=>{const s=e[n];return s===void 0?"":n==="timestamp"?new Date(s).toISOString():Xv(String(s))}).join(","));return[yh.join(","),...t].join(`
`)}function Xv(i){return/[",\n]/.test(i)?`"${i.replace(/"/g,'""')}"`:i}function $v(i){var o;const t=i.split(/\r?\n/).filter(l=>l.trim());if(t.length<2)return[];const e=Eh(t[0]).map(qv),n=(...l)=>e.findIndex(c=>l.includes(c)),s={club:n("club"),ball:n("ballspeedmph","ballspeed","ballspd"),clubSpeed:n("clubspeedmph","clubspeed","clubheadspeed","clubspd"),launch:n("launchangledeg","launchangle","launch","vla"),dir:n("launchdirectiondeg","launchdirection","direction","hla"),spin:n("spinrpm","spin","spinrate","backspin","totalspin"),axis:n("spinaxisdeg","spinaxis","axis"),carry:n("carryyd","carry","carrydistance"),total:n("totalyd","total","totaldistance")};if(s.ball<0)throw new Error("CSV needs a ball speed column");const r=(l,c)=>{if(c<0)return;const h=parseFloat(l[c]);return Number.isFinite(h)?h:void 0},a=[];for(const l of t.slice(1)){const c=Eh(l),h=r(c,s.ball);if(!h)continue;const u=s.club>=0?(o=c[s.club])==null?void 0:o.trim().toUpperCase():"",d=Yr.includes(u)?u:"7i";a.push({club:d,m:{ballSpeedMph:h,clubSpeedMph:r(c,s.clubSpeed),launchAngleDeg:r(c,s.launch),launchDirectionDeg:r(c,s.dir),spinRpm:r(c,s.spin),spinAxisDeg:r(c,s.axis),deviceCarryYd:r(c,s.carry),deviceTotalYd:r(c,s.total)}})}return a}const qv=i=>i.toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z]/g,"");function Eh(i){const t=[];let e="",n=!1;for(let s=0;s<i.length;s++){const r=i[s];n?r==='"'&&i[s+1]==='"'?(e+='"',s++):r==='"'?n=!1:e+=r:r==='"'?n=!0:r===","?(t.push(e),e=""):e+=r}return t.push(e),t}const Ou="open-sc4.shots.v1";function Yv(){try{const i=localStorage.getItem(Ou);return i?JSON.parse(i):[]}catch{return[]}}function kl(i){try{localStorage.setItem(Ou,JSON.stringify(i.slice(-2e3)))}catch{}}function Di(i,t){try{const e=localStorage.getItem(i);return e?JSON.parse(e):t}catch{return t}}function ni(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const Bu={mode:"white",brightness:170,maxSpread:55,tolerance:.04};function zu(i,t,e,n){if(n.mode==="color"&&n.color){const r=i+t+e;if(r<60)return!1;const a=r/3;return a<n.color.lum*.45||a>n.color.lum*1.8+20?!1:Math.hypot(i/r-n.color.r,t/r-n.color.g)<=n.tolerance}const s=Math.min(i,t,e);return s>=n.brightness&&Math.max(i,t,e)-s<=n.maxSpread}function jr(i,t,e,n,s=Bu){const r=Math.max(0,Math.floor(n.x*t)),a=Math.max(0,Math.floor(n.y*e)),o=Math.min(t,Math.ceil((n.x+n.w)*t)),l=Math.min(e,Math.ceil((n.y+n.h)*e));let c=0,h=0,u=0,d=1/0,m=1/0,g=-1/0,v=-1/0;for(let p=a;p<l;p++){let f=(p*t+r)*4;for(let S=r;S<o;S++,f+=4)zu(i[f],i[f+1],i[f+2],s)&&(c++,h+=S,u+=p,S<d&&(d=S),S>g&&(g=S),p<m&&(m=p),p>v&&(v=p))}return c?{count:c,cx:h/c/t,cy:u/c/e,box:{x0:d,y0:m,x1:g,y1:v}}:{count:c}}function jv(i,t,e,n,s){const r=R=>{const T=i[R],w=i[R+1],C=i[R+2],k=Math.max(1,T+w+C);return{r:T/k,g:w/k,lum:k/3,rgb:[T,w,C]}},a=Math.floor(n.x*t),o=Math.floor(n.y*e),l=Math.ceil((n.x+n.w)*t),c=Math.ceil((n.y+n.h)*e),h=Math.max(4,Math.round((l-a)*.4)),u=Math.max(4,Math.round((c-o)*.4)),d=[],m=[];for(let R=Math.max(0,o-u);R<Math.min(e,c+u);R++)for(let T=Math.max(0,a-h);T<Math.min(t,l+h);T++){const w=r((R*t+T)*4);T>=a&&T<l&&R>=o&&R<c?d.push(w):m.push(w)}if(d.length<20||m.length<20)return null;const g=R=>{const T=[...R].sort((w,C)=>w-C);return T[Math.floor(T.length/2)]},v={r:g(m.map(R=>R.r)),g:g(m.map(R=>R.g)),lum:g(m.map(R=>R.lum))},p=R=>Math.hypot(R.r-1/3,R.g-1/3),f=R=>({r:g(R.map(T=>T.r)),g:g(R.map(T=>T.g)),lum:g(R.map(T=>T.lum)),rgb:[0,1,2].map(T=>g(R.map(w=>w.rgb[T])))}),S=d.map(R=>({p:R,s:Math.hypot(R.r-v.r,R.g-v.g)})).sort((R,T)=>T.s-R.s),x=S[0].s;if(x>=.05){const R=S.filter(k=>k.s>=x*.5).map(k=>k.p),T=f(R),w=Math.hypot(T.r-v.r,T.g-v.g),C=p(T)<.035&&T.lum>v.lum+25;if(R.length>=4&&w>=.025&&!C){const k={...s,mode:"color",color:T,tolerance:Math.min(.09,Math.max(.02,w*.5))},_=jr(i,t,e,n,k).count;if(_>=4)return{pixels:k,count:_,label:"Coloured ball"}}}const E=d.filter(R=>p(R)<.04&&R.lum>v.lum+35);if(E.length>=4){const R=f(E),T={...s,mode:"white",brightness:Math.round(Math.max(90,Math.min(240,(R.lum+v.lum)/2+10))),maxSpread:60},w=jr(i,t,e,n,T).count;if(w>=4)return{pixels:T,count:w,label:"White ball"}}return null}const Kv={minPixels:25,settleMs:800,goneMs:120,cooldownMs:1500,stillTolerance:.02};class bh{constructor(t={...Kv}){Z(this,"state","empty");Z(this,"since",0);Z(this,"goneSince",null);Z(this,"anchor",null);Z(this,"readyCount",0);Z(this,"lastCount",0);Z(this,"suddenDrop",!1);this.opts=t}update(t,e){const n=t.count>=this.opts.minPixels,s=this.lastCount;switch(this.lastCount=t.count,this.state){case"cooldown":return e-this.since>=this.opts.cooldownMs&&this.set("empty",e),null;case"empty":return n&&(this.set("settling",e),this.anchor=t.cx!==void 0?{cx:t.cx,cy:t.cy}:null),null;case"settling":return n?this.anchor&&t.cx!==void 0&&Math.hypot(t.cx-this.anchor.cx,t.cy-this.anchor.cy)>this.opts.stillTolerance?(this.anchor={cx:t.cx,cy:t.cy},this.since=e,null):e-this.since>=this.opts.settleMs?(this.set("ready",e),this.readyCount=t.count,"ready"):null:(this.set("empty",e),null);case"ready":return n?(this.goneSince=null,this.readyCount=Math.max(this.readyCount*.95,t.count),null):(this.goneSince===null&&(this.goneSince=e,this.suddenDrop=s>=this.readyCount*.6),e-this.goneSince>=this.opts.goneMs?this.suddenDrop?(this.set("cooldown",e),"hit"):(this.set("empty",e),"removed"):null)}}set(t,e){this.state=t,this.since=e,this.goneSince=null}}const Zv=.04267,Jv={up:[0,-1],down:[0,1],right:[1,0],left:[-1,0]};function wh(i,t){const e=i.w,n=i.h;let s;switch(t){case"up":s={x:i.x-e,y:0,w:i.w+2*e,h:i.y+i.h};break;case"down":s={x:i.x-e,y:i.y,w:i.w+2*e,h:1-i.y};break;case"right":s={x:i.x,y:i.y-n,w:1-i.x,h:i.h+2*n};break;case"left":s={x:0,y:i.y-n,w:i.x+i.w,h:i.h+2*n};break}const r=Math.max(0,s.x),a=Math.max(0,s.y);return{x:r,y:a,w:Math.min(1,s.x+s.w)-r,h:Math.min(1,s.y+s.h)-a}}function Qv(i,t,e,n,s={}){if(e<2)return null;const[r,a]=Jv[n];let o=-a,l=r;s.flip&&(o=-o,l=-l);const c=s.minCount??3,h=i.filter(w=>w.x!==void 0&&w.count>=c).map(w=>{const C=w.x-t.x,k=w.y-t.y;return{t:w.t/1e3,f:C*r+k*a,l:C*o+k*l}}).filter(w=>w.f>e*.5),u=[];for(const w of h)if((!u.length||w.f>u[u.length-1].f)&&u.push(w),u.length>=6)break;if(u.length<2)return null;const d=u[u.length-1].f;if(d<e*2)return null;const m=u.length,g=u.reduce((w,C)=>w+C.t,0)/m,v=u.reduce((w,C)=>w+C.f,0)/m,p=u.reduce((w,C)=>w+C.l,0)/m;let f=0,S=0,x=0;for(const w of u)f+=(w.t-g)**2,S+=(w.t-g)*(w.f-v),x+=(w.t-g)*(w.l-p);if(f<=0)return null;const E=S/f,R=x/f;if(E<=0)return null;const T=Zv/e*(s.calibration??1);return{speedMs:Math.hypot(E,R)*T,directionDeg:Math.atan2(R,E)*180/Math.PI,trackedM:d*T,samplesUsed:m}}const Hr={zone:{x:.42,y:.6,w:.16,h:.2},pixels:{...Bu},minPixels:40,putt:{enabled:!0,direction:"up",flip:!1,calibration:1}},Oe=480,qe=360;class ku{constructor(t,e){Z(this,"video",document.createElement("video"));Z(this,"stream",null);Z(this,"work",document.createElement("canvas"));Z(this,"ctx");Z(this,"timer",null);Z(this,"presence");Z(this,"last",{count:0});Z(this,"lastBallSeenAt",0);Z(this,"lastBallSeenFrameT",0);Z(this,"onEvent",()=>{});Z(this,"onFrame",()=>{});Z(this,"onPutt",()=>{});Z(this,"lane",[]);Z(this,"rest",null);Z(this,"lastTrack",[]);Z(this,"lastImg",null);Z(this,"fast",!1);Z(this,"rvfcActive",!1);Z(this,"lastFrameT",-1/0);this.settings=t,this.overlay=e,this.video.muted=!0,this.video.playsInline=!0,this.work.width=Oe,this.work.height=qe,this.ctx=this.work.getContext("2d",{willReadFrequently:!0}),this.presence=new bh,this.presence.opts.minPixels=t.minPixels}get running(){return!!this.stream}get state(){return this.presence.state}static async listCameras(){var t;return(t=navigator.mediaDevices)!=null&&t.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput"):[]}async start(){var t;if(!((t=navigator.mediaDevices)!=null&&t.getUserMedia))throw new Error("This browser can’t use a camera here. Open the app in Chrome or Edge.");this.stop(),this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.settings.deviceId?{exact:this.settings.deviceId}:void 0,width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.presence=new bh({...this.presence.opts,minPixels:this.settings.minPixels}),this.restartTimer()}setFast(t){this.fast=t,this.running&&this.restartTimer()}restartTimer(){this.timer&&clearInterval(this.timer),this.timer=null,this.rvfcActive=!1;const t=this.video;if(typeof t.requestVideoFrameCallback=="function"){this.rvfcActive=!0;const e=(n,s)=>{if(!this.stream||!this.rvfcActive)return;const r=s.mediaTime*1e3;(r-this.lastFrameT>=(this.fast?30:62)||r<this.lastFrameT)&&(this.lastFrameT=r,this.tick(r)),t.requestVideoFrameCallback(e)};t.requestVideoFrameCallback(e),this.timer=setInterval(()=>{},6e4)}else this.timer=setInterval(()=>this.tick(),this.fast?33:66)}stop(){var t;this.timer&&clearInterval(this.timer),this.timer=null,this.rvfcActive=!1,this.lastFrameT=-1/0,(t=this.stream)==null||t.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.presence.state="empty",this.last={count:0},this.draw()}setMinPixels(t){this.settings.minPixels=t,this.presence.opts.minPixels=t}tick(t){if(this.video.readyState<2)return;this.ctx.drawImage(this.video,0,0,Oe,qe);const e=this.ctx.getImageData(0,0,Oe,qe);this.lastImg=e;const n=t??performance.now();this.last=jr(e.data,Oe,qe,this.settings.zone,this.settings.pixels),this.last.count>=this.settings.minPixels&&(this.lastBallSeenFrameT=n,this.lastBallSeenAt=performance.now()),this.settings.putt.enabled&&this.trackLane(e,n);const s=this.presence.update(this.last,n);if(s&&(this.onEvent(s),this.settings.putt.enabled&&(s==="hit"||s==="removed"))){const r=this.lastBallSeenFrameT-80;setTimeout(()=>this.finishPutt(r),450)}this.draw(e),this.onFrame()}trackLane(t,e){const n=wh(this.settings.zone,this.settings.putt.direction),s=jr(t.data,Oe,qe,n,this.settings.pixels);for(this.lane.push({t:e,count:s.count,x:s.cx!==void 0?s.cx*Oe:void 0,y:s.cy!==void 0?s.cy*qe:void 0});this.lane.length&&e-this.lane[0].t>2500;)this.lane.shift();if(this.presence.state==="ready"&&this.last.box&&this.last.cx!==void 0){const r=this.last.box,a=Math.max(r.x1-r.x0,r.y1-r.y0)+1,o=this.last.cx*Oe,l=this.last.cy*qe;this.rest=this.rest?{x:this.rest.x*.8+o*.2,y:this.rest.y*.8+l*.2,d:this.rest.d*.8+a*.2}:{x:o,y:l,d:a}}}finishPutt(t){if(!this.rest)return;const e=this.settings.putt,n=this.lane.filter(r=>r.t>=t),s=Qv(n,this.rest,this.rest.d,e.direction,{flip:e.flip,minCount:Math.max(3,Math.round(this.settings.minPixels*.25)),calibration:e.calibration});this.lastTrack=n.filter(r=>r.x!==void 0).map(r=>({x:r.x/Oe,y:r.y/qe})),s&&this.onPutt(s)}learnBall(){if(!this.lastImg)return null;const t=jv(this.lastImg.data,Oe,qe,this.settings.zone,this.settings.pixels);return t&&(this.settings.pixels=t.pixels,this.setMinPixels(Math.max(4,Math.round(t.count*.5)))),t}get restDiameterPx(){var t;return(t=this.rest)==null?void 0:t.d}draw(t){const e=this.overlay,n=e.getContext("2d"),s=e.width=e.clientWidth*devicePixelRatio||Oe,r=e.height=e.clientHeight*devicePixelRatio||qe;if(n.fillStyle="#0a0f0c",n.fillRect(0,0,s,r),this.running&&this.video.readyState>=2?n.drawImage(this.video,0,0,s,r):(n.fillStyle="#94a69a",n.font=`${14*devicePixelRatio}px system-ui, sans-serif`,n.textAlign="center",n.fillText("Camera off",s/2,r/2)),t){const{x:l,y:c,w:h,h:u}=this.settings.zone,d=Math.floor(l*Oe),m=Math.floor(c*qe),g=Math.ceil((l+h)*Oe),v=Math.ceil((c+u)*qe);n.fillStyle="rgba(79, 179, 255, 0.85)";const p=s/Oe,f=r/qe,S=this.settings.pixels;for(let x=m;x<v;x++)for(let E=d;E<g;E++){const R=(x*Oe+E)*4;zu(t.data[R],t.data[R+1],t.data[R+2],S)&&n.fillRect(E*p,x*f,p,f)}}if(this.settings.putt.enabled){const l=wh(this.settings.zone,this.settings.putt.direction);n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1.5*devicePixelRatio,n.setLineDash([4*devicePixelRatio,4*devicePixelRatio]),n.strokeRect(l.x*s,l.y*r,l.w*s,l.h*r),n.setLineDash([]),n.fillStyle="#ffdd33";for(const c of this.lastTrack)n.beginPath(),n.arc(c.x*s,c.y*r,3*devicePixelRatio,0,Math.PI*2),n.fill()}const a={empty:"#f2b84b",settling:"#f2b84b",ready:"#3ddc5c",cooldown:"#4fb3ff"},o=this.settings.zone;n.lineWidth=3*devicePixelRatio,n.strokeStyle=a[this.presence.state],n.setLineDash(this.presence.state==="ready"?[]:[8*devicePixelRatio,6*devicePixelRatio]),n.strokeRect(o.x*s,o.y*r,o.w*s,o.h*r),n.setLineDash([])}enableZoneDrawing(t){const e=this.overlay;let n=null;const s=r=>{const a=e.getBoundingClientRect();return{x:Math.min(1,Math.max(0,(r.clientX-a.left)/a.width)),y:Math.min(1,Math.max(0,(r.clientY-a.top)/a.height))}};e.addEventListener("pointerdown",r=>{n=s(r),e.setPointerCapture(r.pointerId)}),e.addEventListener("pointermove",r=>{if(!n)return;const a=s(r);this.settings.zone={x:Math.min(n.x,a.x),y:Math.min(n.y,a.y),w:Math.abs(a.x-n.x),h:Math.abs(a.y-n.y)},this.running||this.draw()}),e.addEventListener("pointerup",()=>{if(!n)return;n=null;const r=this.settings.zone;(r.w<.02||r.h<.02)&&(this.settings.zone={...Hr.zone}),t(this.settings.zone),this.draw()})}}const js=[{id:"light",label:"Light – 10 fps, small",fps:10,width:320},{id:"balanced",label:"Balanced – 15 fps",fps:15,width:480},{id:"smooth",label:"Smooth – 30 fps (more CPU/memory)",fps:30,width:640}];class tx{constructor(){Z(this,"quality",js[1]);Z(this,"preMs",1500);Z(this,"postMs",700);Z(this,"bufferMs",3500);Z(this,"buf",[]);Z(this,"timer",null);Z(this,"video",null);Z(this,"busy",!1)}get running(){return this.timer!==null}start(t){this.stop(),this.video=t,this.timer=setInterval(()=>this.grab(),1e3/this.quality.fps)}stop(){this.timer&&clearInterval(this.timer),this.timer=null;for(const t of this.buf)t.bmp.close();this.buf=[]}setQuality(t){this.quality=t,this.video&&this.running&&this.start(this.video)}async grab(){const t=this.video;if(!(!t||t.readyState<2||this.busy)){this.busy=!0;try{const e=this.quality.width,n=Math.round(e*t.videoHeight/Math.max(1,t.videoWidth)),s=await createImageBitmap(t,{resizeWidth:e,resizeHeight:n,resizeQuality:"low"}),r=performance.now();for(this.buf.push({t:r,bmp:s});this.buf.length&&r-this.buf[0].t>this.bufferMs;)this.buf.shift().bmp.close()}catch{}finally{this.busy=!1}}}async capture(t=performance.now(),e=this.preMs,n=this.postMs){const s=Math.max(0,t+n-performance.now());await new Promise(l=>setTimeout(l,s));const r=this.buf.filter(l=>l.t>=t-e&&l.t<=t+n);if(r.length<3)return null;const a=await Promise.all(r.map(l=>createImageBitmap(l.bmp)));let o=0;return r.forEach((l,c)=>{Math.abs(l.t-t)<Math.abs(r[o].t-t)&&(o=c)}),{frames:a,times:r.map(l=>l.t),fps:this.quality.fps,hitIndex:o,createdAt:Date.now()}}}function ex(i){for(const t of i.frames)t.close();i.frames=[]}class nx{constructor(t,e,n,s){Z(this,"clip",null);Z(this,"idx",0);Z(this,"timer",null);Z(this,"loopsLeft",0);Z(this,"speed",.5);this.root=t,this.canvas=e,this.scrub=n,this.label=s,n.addEventListener("input",()=>{this.pause(),this.show(Number(n.value))})}load(t,e,n=!0){this.pause(),this.clip=t,this.root.hidden=!1,this.scrub.max=String(t.frames.length-1),this.label.textContent=e,this.show(0),n&&this.play(2)}play(t=1){if(!this.clip)return;this.pause(),this.loopsLeft=t,this.idx>=this.clip.frames.length-1&&(this.idx=0);const e=()=>{this.clip&&(this.show(this.idx),this.idx<this.clip.frames.length-1?(this.idx++,this.timer=setTimeout(e,1e3/(this.clip.fps*this.speed))):--this.loopsLeft>0?(this.idx=0,this.timer=setTimeout(e,400)):this.timer=setTimeout(()=>this.show(this.clip.hitIndex),500))};e()}pause(){this.timer&&clearTimeout(this.timer),this.timer=null}hide(){this.pause(),this.root.hidden=!0}get playing(){return this.timer!==null}show(t){const e=this.clip;if(!e||!e.frames[t])return;this.idx=t;const n=e.frames[t];this.canvas.width!==n.width&&(this.canvas.width=n.width),this.canvas.height!==n.height&&(this.canvas.height=n.height);const s=this.canvas.getContext("2d");s.drawImage(n,0,0),t===e.hitIndex&&(s.strokeStyle="#4fb3ff",s.lineWidth=Math.max(3,n.width/120),s.strokeRect(0,0,n.width,n.height),s.fillStyle="rgba(10,14,12,0.7)",s.fillRect(8,8,74,24),s.fillStyle="#fff",s.font="bold 14px system-ui, sans-serif",s.fillText("IMPACT",16,25)),this.scrub.value=String(t)}}const Hu=110540,Gu=111320;function Th(i,t){return{e:(i.lon-t.lon)*Gu*Math.cos(t.lat*Math.PI/180),n:(i.lat-t.lat)*Hu}}function Ah(i,t){return{lat:t.lat+i.n/Hu,lon:t.lon+i.e/(Gu*Math.cos(t.lat*Math.PI/180))}}const je=(i,t)=>Math.hypot(i.e-t.e,i.n-t.n),Ei=(i,t)=>({e:i.e-t.e,n:i.n-t.n}),tl=(i,t)=>({e:i.e+t.e,n:i.n+t.n}),el=(i,t)=>({e:i.e*t,n:i.n*t}),ss=i=>{const t=Math.hypot(i.e,i.n)||1;return{e:i.e/t,n:i.n/t}},Vu=i=>({e:i.n,n:-i.e}),Wu=(i,t)=>{const e=-t*Math.PI/180;return{e:i.e*Math.cos(e)-i.n*Math.sin(e),n:i.e*Math.sin(e)+i.n*Math.cos(e)}},ix=i=>(Math.atan2(i.e,i.n)*180/Math.PI+360)%360;function nl(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){const r=t[n],a=t[s];r.n>i.n!=a.n>i.n&&i.e<(a.e-r.e)*(i.n-r.n)/(a.n-r.n)+r.e&&(e=!e)}return e}function Ch(i){let t=0,e=0,n=0;for(let s=0,r=i.length-1;s<i.length;r=s++){const a=i[r].e*i[s].n-i[s].e*i[r].n;t+=a,e+=(i[r].e+i[s].e)*a,n+=(i[r].n+i[s].n)*a}return Math.abs(t)<1e-9?{e:i.reduce((s,r)=>s+r.e,0)/i.length,n:i.reduce((s,r)=>s+r.n,0)/i.length}:{e:e/(3*t),n:n/(3*t)}}const gi=256;function Rh(i,t){const e=gi*2**t,n=Math.sin(i.lat*Math.PI/180);return{x:(i.lon+180)/360*e,y:(.5-Math.log((1+n)/(1-n))/(4*Math.PI))*e}}const sx=(i,t)=>156543.03392*Math.cos(i*Math.PI/180)/2**t,rx="https://photon.komoot.io/api/",ax="https://nominatim.openstreetmap.org/search",ox=["https://overpass-api.de/api/interpreter","https://overpass.private.coffee/api/interpreter","https://overpass.kumi.systems/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter"];async function il(i,t={},e=25e3){const n=new AbortController,s=setTimeout(()=>n.abort(),e);try{return await fetch(i,{...t,signal:n.signal})}catch(r){throw new Error(n.signal.aborted?"timed out":r.message||"network error")}finally{clearTimeout(s)}}async function lx(i){try{const t=await il(`${rx}?limit=10&q=${encodeURIComponent(i)}`,{},15e3);if(!t.ok)throw new Error(String(t.status));return(await t.json()).features.map(n=>{const s=n.properties,r=[s.city,s.state,s.country].filter(Boolean).join(", "),a=s.osm_key==="leisure"&&s.osm_value==="golf_course",o=n.geometry.coordinates[1],l=n.geometry.coordinates[0],c=s.extent,h=a&&c&&c.length===4?{id:`${s.osm_type==="R"?"relation":"way"}/${s.osm_id}`,name:s.name??"Golf course",center:{lat:o,lon:l},bounds:{minlon:c[0],maxlat:c[1],maxlon:c[2],minlat:c[3]}}:void 0;return{name:s.name??r,label:[s.name,r].filter(Boolean).join(" – "),lat:o,lon:l,isGolfCourse:a,course:h}})}catch{const t=`${ax}?format=jsonv2&limit=8&q=${encodeURIComponent(i)}`,e=await il(t,{headers:{Accept:"application/json"}},15e3);if(!e.ok)throw new Error(`Place search failed (${e.status})`);return(await e.json()).map(s=>({name:s.name||s.display_name.split(",")[0],label:s.display_name,lat:Number(s.lat),lon:Number(s.lon),isGolfCourse:s.category==="leisure"&&s.type==="golf_course"}))}}async function sl(i,t){const e=[];for(const n of ox){const s=new URL(n).host;t==null||t(s);try{const r=await il(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`data=${encodeURIComponent(i)}`},4e4);if(!r.ok)throw new Error(r.status===429?"busy (429)":`error ${r.status}`);return await r.json()}catch(r){e.push(`${s}: ${r.message}`)}}throw new Error(`no course-data server answered (${e.join("; ")}). Check your internet connection, or try again in a minute.`)}async function cx(i,t,e=4e3,n){const s=`[out:json][timeout:25];
(way["leisure"="golf_course"](around:${e},${i},${t});
 relation["leisure"="golf_course"](around:${e},${i},${t}););
out tags center bb;`;return(await sl(s,n)).elements.filter(a=>a.bounds&&a.center).map(a=>{var o;return{id:`${a.type}/${a.id}`,name:((o=a.tags)==null?void 0:o.name)??"Unnamed golf course",center:{lat:a.center.lat,lon:a.center.lon},bounds:a.bounds}}).sort((a,o)=>Math.hypot(a.center.lat-i,a.center.lon-t)-Math.hypot(o.center.lat-i,o.center.lon-t))}async function hx(i,t,e){const s=i.bounds,r=`${s.minlat-.0015},${s.minlon-.0015},${s.maxlat+.0015},${s.maxlon+.0015}`,a=await sl(`[out:json][timeout:25];way["golf"="hole"](${r});out geom;`,t);if(!a.elements.length)return Qa(a,i.name,i.id,i.center);try{const o=await sl(`[out:json][timeout:25];
(way["golf"~"^(green|tee|fairway|bunker|water_hazard|lateral_water_hazard)$"](${r});
 node["golf"="pin"](${r});
 way["natural"="water"](${r}););
out geom;`,t);return Qa({elements:[...a.elements,...o.elements]},i.name,i.id,i.center)}catch(o){return e==null||e(`Greens, bunkers and water couldn't be downloaded (${o.message}), so the holes are played without them.`),Qa(a,i.name,i.id,i.center)}}function ux(i){switch(i.golf){case"green":return"green";case"tee":return"tee";case"fairway":return"fairway";case"bunker":return"bunker";case"water_hazard":case"lateral_water_hazard":return"water"}return i.natural==="water"?"water":null}function dx(i){const t=i*1.0936;return t<250?3:t<470?4:5}function fx(i){let t=0;for(let e=1;e<i.length;e++)t+=je(i[e-1],i[e]);return t}function Qa(i,t,e="course",n){var d;const s=i.elements;if(!n){const m=s.flatMap(g=>g.geometry??(g.lat!==void 0?[{lat:g.lat,lon:g.lon}]:[]));if(!m.length)throw new Error("No course data found");n={lat:m.reduce((g,v)=>g+v.lat,0)/m.length,lon:m.reduce((g,v)=>g+v.lon,0)/m.length}}const r=m=>m.map(g=>Th(g,n)),a=[],o=[],l=[];for(const m of s){const g=m.tags??{};if(m.type==="node"&&g.golf==="pin"&&m.lat!==void 0){o.push(Th({lat:m.lat,lon:m.lon},n));continue}if(g.golf==="hole"&&m.type==="way"&&m.geometry&&m.geometry.length>=2){l.push(m);continue}const v=ux(g);if(v){if(m.type==="way"&&m.geometry&&m.geometry.length>=3)a.push({kind:v,poly:r(m.geometry)});else if(m.type==="relation"&&m.members)for(const p of m.members)p.role!=="inner"&&p.geometry&&p.geometry.length>=3&&a.push({kind:v,poly:r(p.geometry)})}}const c=a.filter(m=>m.kind==="green"),h=new Set,u=[];for(const m of l){const g=m.tags??{},v=r(m.geometry),p=v[v.length-1],f=c.find(w=>nl(p,w.poly))??((d=c.map(w=>({g:w,d:je(Ch(w.poly),p)})).filter(w=>w.d<40).sort((w,C)=>w.d-C.d)[0])==null?void 0:d.g);let S=p;if(f)S=o.find(w=>nl(w,f.poly))??Ch(f.poly);else{const w=o.map(C=>({p:C,d:je(C,p)})).filter(C=>C.d<25).sort((C,k)=>C.d-k.d)[0];w&&(S=w.p)}const x=parseInt(g.ref??"",10);if(Number.isFinite(x)){if(h.has(x))continue;h.add(x)}const E=je(v[v.length-1],S)>1?[...v,S]:[...v.slice(0,-1),S],R=fx(E),T=parseInt(g.par??"",10);u.push({number:Number.isFinite(x)?x:0,par:Number.isFinite(T)&&T>=3&&T<=6?T:dx(R),path:E,tee:v[0],pin:S,lengthM:R,handicap:parseInt(g.handicap??"",10)||void 0})}return u.sort((m,g)=>(m.number||99)-(g.number||99)),u.forEach((m,g)=>{m.number||(m.number=g+1)}),{id:e,name:t,origin:n,holes:u,features:a}}function px(i,t){const e=["water","bunker","green","tee","fairway"];for(const n of e)if(t.some(s=>s.kind===n&&nl(i,s.poly)))return n;return"rough"}const Xu={DR:230,"3W":210,"5W":195,HY:185,"3i":180,"4i":170,"5i":160,"6i":150,"7i":140,"8i":130,"9i":120,PW:110,GW:95,SW:80,LW:65,PT:0},rl={tee:{speed:1,spin:1,label:"Tee"},fairway:{speed:1,spin:1,label:"Fairway"},green:{speed:1,spin:1,label:"Green"},rough:{speed:.93,spin:.6,label:"Rough"},bunker:{speed:.82,spin:.7,label:"Bunker"},water:{speed:1,spin:1,label:"Water"}},to=10;function Ph(i,t,e){const n=Vu(e);return{e:t.e+e.e*i.x+n.e*i.z,n:t.n+e.n*i.x+n.n*i.z,y:i.y}}class mx{constructor(t,e={gimmeM:0}){Z(this,"holeIndex",0);Z(this,"ball",{e:0,n:0});Z(this,"aim",{e:0,n:1});Z(this,"lie","tee");Z(this,"holed",!1);Z(this,"strokes",[]);Z(this,"shots",[]);Z(this,"completed",[]);if(this.course=t,this.opts=e,!t.holes.length)throw new Error("This course has no holes mapped");this.startHole(0)}get hole(){return this.course.holes[this.holeIndex]}get strokesThisHole(){return this.strokes[this.holeIndex]??0}get distanceToPin(){return je(this.ball,this.hole.pin)}startHole(t){this.holeIndex=Math.max(0,Math.min(t,this.course.holes.length-1)),this.ball={...this.hole.tee},this.lie="tee",this.holed=!1,this.shots=[],this.strokes[this.holeIndex]=0,this.completed[this.holeIndex]=!1,this.autoAim("DR")}nextHole(){return this.holeIndex>=this.course.holes.length-1?!1:(this.startHole(this.holeIndex+1),!0)}autoAim(t){const e=this.hole;if(t==="PT"||this.lie==="green"){this.aim=ss(Ei(e.pin,this.ball));return}let n=0,s=1/0;for(let c=0;c<e.path.length-1;c++){const h=_x(this.ball,e.path[c],e.path[c+1]);h<s&&(s=h,n=c)}const r=e.path.slice(n+1),a=qr(Xu[t]||150)*1.1,o=r.filter(c=>je(this.ball,c)<=a),l=o.length?o[o.length-1]:r[0]??e.pin;this.aim=ss(Ei(l,this.ball))}aimAt(t){je(t,this.ball)>.5&&(this.aim=ss(Ei(t,this.ball)))}adjustAim(t){this.aim=ss(Wu(this.aim,t))}play(t,e,n=tr){if(this.holed)throw new Error("Hole finished – move to the next hole");const s={...this.ball},r={...this.aim},a=e==="PT";let o,l=!1,c="";if(a){const v=n.stimp??10;o=Bl(t.ballSpeedMph,t.launchDirectionDeg??0,v),l=gx(s,r,t.ballSpeedMph,t.launchDirectionDeg??0,this.hole.pin,v)}else{const v=rl[this.lie],p=zl(t,e);o=Fl({...p,ballSpeedMph:p.ballSpeedMph*v.speed,spinRpm:p.spinRpm*v.spin},n)}const h=o.ground.length?o.ground[o.ground.length-1]:o.flight[o.flight.length-1];let u=Ph(h,s,r);!l&&!a&&je(u,this.hole.pin)<.12&&(l=!0),l&&(u={...this.hole.pin});let d=this.strokesThisHole+1,m=0;const g=l?"green":px(u,this.course.features);return l?c=d===1?"Hole in one!":`Holed! ${al(d,this.hole.par)}`:g==="water"?(m=1,c="In the water – 1 stroke penalty. Play again from the previous spot."):a&&this.opts.gimmeM>0&&je(u,this.hole.pin)<=this.opts.gimmeM?(d+=1,l=!0,c=`Gimme – that's good. ${al(d,this.hole.par)}`):c=`${rl[g].label} · ${Math.round(je(u,this.hole.pin)*1.0936)} yd to the pin`,d+=m,!l&&d>=to&&(l=!0,c=`Picked up at ${to} strokes`,d=to),this.strokes[this.holeIndex]=d,this.shots.push({points:[...o.flight,...o.ground].map(v=>Ph(v,s,r)),from:s,to:u,club:e}),this.holed=l,this.completed[this.holeIndex]=l,l?(this.ball={...this.hole.pin},this.lie="green"):m?this.ball=s:(this.ball=u,this.lie=g),l||this.autoAim(this.lie==="green"?"PT":e),{flight:o,start:s,aim:r,end:u,lie:g,penalty:m,holed:l,message:c}}totals(){let t=0,e=0;return this.course.holes.forEach((n,s)=>{const r=this.strokes[s];this.completed[s]&&r!==void 0&&r>0&&(t+=r,e+=n.par)}),{strokes:t,par:e,toPar:t-e}}}function gx(i,t,e,n,s,r){const a=ss(Wu(t,n)),o=Ei(s,i),l=o.e*a.e+o.n*a.n;if(l<=0)return!1;const c=Math.abs(o.e*a.n-o.n*a.e),h=Ul(e),u=h*h-2*Ol(r)*l;if(u<0)return!1;const d=Math.sqrt(u),m=zv+.01;if(c>m)return!1;const g=1-c/m;return d<=1+.8*g}function _x(i,t,e){const n=Ei(e,t),s=n.e*n.e+n.n*n.n||1,r=Math.max(0,Math.min(1,((i.e-t.e)*n.e+(i.n-t.n)*n.n)/s));return je(i,tl(t,el(n,r)))}function al(i,t){const e=i-t;return{"-3":"Albatross","-2":"Eagle","-1":"Birdie",0:"Par",1:"Bogey",2:"Double bogey",3:"Triple bogey"}[String(e)]??(e<0?`${-e} under`:`+${e}`)}const vx="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";function xx(i){return new Promise(t=>{const e=new Image;e.crossOrigin="anonymous",e.onload=()=>t(e),e.onerror=()=>t(null),e.src=i})}async function Mx(i,t,e=2048,n=19){const s=Ah({e:t.minE,n:t.maxN},i),r=Ah({e:t.maxE,n:t.minN},i),a=Math.max(t.maxE-t.minE,t.maxN-t.minN);let o=n;for(;o>14&&a/sx(i.lat,o)>e;)o--;const l=Rh(s,o),c=Rh(r,o),h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(c.x-l.x)),h.height=Math.max(1,Math.ceil(c.y-l.y));const u=h.getContext("2d");u.fillStyle="#3d6b35",u.fillRect(0,0,h.width,h.height);const d=Math.floor(l.x/gi),m=Math.floor(c.x/gi),g=Math.floor(l.y/gi),v=Math.floor(c.y/gi),p=[];for(let x=g;x<=v;x++)for(let E=d;E<=m;E++)p.push({x:E,y:x});let f=0;const S=[...p];return await Promise.all(Array.from({length:6},async()=>{for(;S.length;){const x=S.shift(),E=vx.replace("{z}",String(o)).replace("{x}",String(x.x)).replace("{y}",String(x.y)),R=await xx(E);R?u.drawImage(R,x.x*gi-l.x,x.y*gi-l.y):f++}})),{canvas:h,rect:t,zoom:o,failed:f,total:p.length}}const Sx={fairway:"#78b552",tee:"#86c463",green:"#93d96f",bunker:"#e9dcb0",water:"#3f7fb5"};function yx(i,t,e=.4){const n=t.maxE-t.minE,s=t.maxN-t.minN,r=Math.max(e,Math.max(n,s)/2048),a=document.createElement("canvas");a.width=Math.ceil(n/r),a.height=Math.ceil(s/r);const o=a.getContext("2d");o.fillStyle="#4f7f3c",o.fillRect(0,0,a.width,a.height);let l=9;const c=()=>(l=l*16807%2147483647)/2147483647;for(let d=0;d<1500;d++)o.fillStyle=c()>.5?"rgba(30,60,25,0.12)":"rgba(110,150,80,0.1)",o.beginPath(),o.arc(c()*a.width,c()*a.height,3+c()*14,0,Math.PI*2),o.fill();const h=d=>[(d.e-t.minE)/r,(t.maxN-d.n)/r],u=["fairway","tee","water","green","bunker"];for(const d of u)for(const m of i.filter(g=>g.kind===d)){if(o.beginPath(),m.poly.forEach((g,v)=>{const[p,f]=h(g);v?o.lineTo(p,f):o.moveTo(p,f)}),o.closePath(),o.fillStyle=Sx[d],o.fill(),d==="fairway"){o.save(),o.clip(),o.fillStyle="rgba(255,255,255,0.07)";for(let g=0;g<a.height;g+=24/r*.5)o.fillRect(0,g,a.width,6/r);o.restore()}(d==="water"||d==="bunker"||d==="green")&&(o.lineWidth=Math.max(1,(d==="green"?2.5:1.5)/r),o.strokeStyle=d==="water"?"#2b5f8c":d==="green"?"#6fb553":"#c9b984",o.stroke())}return{canvas:a,rect:t,zoom:0,failed:0,total:0}}function In(i,t,e=28){return Array.from({length:e},(n,s)=>{const r=s/e*Math.PI*2;return{e:i.e+Math.cos(r)*t,n:i.n+Math.sin(r)*t*.85}})}function eo(i,t,e,n){return[{e:i,n:t},{e,n:t},{e,n},{e:i,n}]}function Dh(i,t){const e=[],n=[];return i.forEach((s,r)=>{const a=i[Math.max(0,r-1)],o=i[Math.min(i.length-1,r+1)],l=Vu(ss(Ei(o,a))),c=t*(.85+.15*Math.sin(r*1.7));n.push(tl(s,el(l,c))),e.push(tl(s,el(l,-c)))}),[...n,...e.reverse()]}function no(i,t,e){let n=0;for(let s=1;s<e.length;s++)n+=je(e[s-1],e[s]);return{number:i,par:t,path:e,tee:e[0],pin:e[e.length-1],lengthM:n}}function Ex(){const i=no(1,4,[{e:0,n:0},{e:0,n:215},{e:-55,n:340}]),t=no(2,3,[{e:160,n:20},{e:175,n:165}]),e=no(3,5,[{e:320,n:0},{e:340,n:230},{e:300,n:380},{e:315,n:470}]),n=[{kind:"tee",poly:eo(-6,-6,6,6)},{kind:"tee",poly:eo(154,14,166,26)},{kind:"tee",poly:eo(314,-6,326,6)},{kind:"fairway",poly:Dh([{e:0,n:45},{e:0,n:150},{e:0,n:215},{e:-40,n:300}],17)},{kind:"fairway",poly:Dh([{e:335,n:60},{e:340,n:230},{e:305,n:370},{e:312,n:440}],18)},{kind:"green",poly:In(i.pin,15)},{kind:"green",poly:In(t.pin,14)},{kind:"green",poly:In(e.pin,16)},{kind:"bunker",poly:In({e:-32,n:330},6)},{kind:"bunker",poly:In({e:22,n:205},7)},{kind:"bunker",poly:In({e:158,n:172},5)},{kind:"bunker",poly:In({e:292,n:455},6)},{kind:"bunker",poly:In({e:318,n:245},7)},{kind:"water",poly:In({e:168,n:95},32,36)},{kind:"water",poly:[{e:372,n:150},{e:395,n:160},{e:400,n:260},{e:380,n:320},{e:362,n:300},{e:370,n:220}]}];return{id:"practice",name:"Practice course (built in)",origin:{lat:0,lon:0},holes:[i,t,e],features:n}}class bx{constructor(t){Z(this,"view",{cx:0,cn:0,rot:0,s:1});Z(this,"onAim",()=>{});this.canvas=t,t.addEventListener("click",e=>{const n=t.getBoundingClientRect();this.onAim(this.toEN((e.clientX-n.left)*devicePixelRatio,(e.clientY-n.top)*devicePixelRatio))})}toScreen(t){const{cx:e,cn:n,rot:s,s:r}=this.view,a=(t.e-e)*r,o=-(t.n-n)*r,l=Math.cos(s),c=Math.sin(s);return{x:this.canvas.width/2+a*l-o*c,y:this.canvas.height/2+a*c+o*l}}toEN(t,e){const{cx:n,cn:s,rot:r,s:a}=this.view,o=t-this.canvas.width/2,l=e-this.canvas.height/2,c=Math.cos(-r),h=Math.sin(-r),u=o*c-l*h,d=o*h+l*c;return{e:n+u/a,n:s-d/a}}draw(t,e,n){const s=this.canvas,r=devicePixelRatio||1;s.width=Math.round(s.clientWidth*r)||300,s.height=Math.round(s.clientHeight*r)||300;const a=s.getContext("2d"),o=t.hole,l=[...o.path,o.pin,t.ball],c=Ei(o.pin,o.tee),h=-ix(c)*Math.PI/180,u=Math.cos(h),d=Math.sin(h);let m=1/0,g=-1/0,v=1/0,p=-1/0;for(const N of l){const O=N.e*u- -N.n*d,W=N.e*d+-N.n*u;m=Math.min(m,O),g=Math.max(g,O),v=Math.min(v,W),p=Math.max(p,W)}const f=40,S=Math.min(s.width/(g-m+2*f),s.height/(p-v+2*f)),x=(m+g)/2,E=(v+p)/2,R=x*Math.cos(-h)-E*Math.sin(-h),T=-(x*Math.sin(-h)+E*Math.cos(-h));if(this.view={cx:R,cn:T,rot:h,s:S},a.fillStyle="#2f5d2a",a.fillRect(0,0,s.width,s.height),e){a.save(),a.translate(s.width/2,s.height/2),a.rotate(h),a.scale(S,S);const{rect:N}=e;a.drawImage(e.canvas,N.minE-R,-(N.maxN-T),N.maxE-N.minE,N.maxN-N.minN),a.restore()}const w=(N,O,W,j=[])=>{a.beginPath(),N.forEach((H,J)=>{const G=this.toScreen(H);J?a.lineTo(G.x,G.y):a.moveTo(G.x,G.y)}),a.strokeStyle=O,a.lineWidth=W*r,a.setLineDash(j.map(H=>H*r)),a.stroke(),a.setLineDash([])};w(o.path,"rgba(255,255,255,0.35)",1,[3,4]);for(const N of t.shots)w(N.points.map(O=>({e:O.e,n:O.n})),"#ffdd33",2);if(!t.holed){const N=n==="PT"?je(t.ball,o.pin):qr(Xu[n]||150),O={e:t.ball.e+t.aim.e*N,n:t.ball.n+t.aim.n*N};w([t.ball,O],"#ffffff",2,[6,5]);const W=this.toScreen(O);a.strokeStyle="#ffffff",a.lineWidth=2*r,a.beginPath(),a.arc(W.x,W.y,6*r,0,Math.PI*2),a.stroke()}const C=this.toScreen(o.pin);a.fillStyle="#e0393e",a.beginPath(),a.moveTo(C.x,C.y),a.lineTo(C.x,C.y-16*r),a.lineTo(C.x+11*r,C.y-11*r),a.lineTo(C.x,C.y-6*r),a.fill(),a.strokeStyle="#ffffff",a.lineWidth=1.5*r,a.beginPath(),a.moveTo(C.x,C.y),a.lineTo(C.x,C.y-16*r),a.stroke();const k=this.toScreen(t.ball);a.fillStyle="#ffffff",a.strokeStyle="#111111",a.lineWidth=1.5*r,a.beginPath(),a.arc(k.x,k.y,5*r,0,Math.PI*2),a.fill(),a.stroke(),a.font=`${9*r}px system-ui, sans-serif`,a.fillStyle="rgba(0,0,0,0.55)";const _=t.course.id==="practice"?"Practice course":e!=null&&e.total?"Imagery © Esri · Map data © OpenStreetMap":"Map data © OpenStreetMap",b=a.measureText(_).width;a.fillRect(s.width-b-8*r,s.height-14*r,b+8*r,14*r),a.fillStyle="#ffffff",a.fillText(_,s.width-b-4*r,s.height-4*r)}}const X=i=>document.querySelector(i);let be=Yv(),Ce=Di("open-sc4.club","DR"),ms={...tr},ol=0,wi="range",st=null;const Hl="open-sc4.profile.v1",io=Di(Hl,null);let yn=io&&Object.keys(io.fields??{}).length?io:Iu;const ke=new _v,Ze=new Cv(yn),Gl=[ke,Ze];let Ie=ke,Ee="disconnected";const Ke=new dv(X("#range"));for(const i of Gl)i.on("shot",t=>{i===Ie&&(t.clubHint&&t.clubHint!==Ce&&er(t.clubHint),Xl(t,i===Ze?"SC4 Pro":i.name))}),i.on("status",(t,e)=>{i===Ie&&(Ee=t,ql(e))}),i.on("log",t=>fn(t)),i.on("shotEvent",t=>{i===Ie&&Vl(t,4e3)}),i.on("readiness",t=>{i===Ie&&(zs=t,Ti())}),i.on("packet",()=>{if(i!==Ie)return;ks++,Kr=Date.now();const t=X("#activity");t.classList.add("live"),setTimeout(()=>t.classList.remove("live"),150),Wl()});let zs=null,$u=0,qu="Shot recorded";function Ti(){var s,r,a,o;const i=X("#ready-lamp");let t,e,n;if(Date.now()<$u)t="shot",e=qu,n="Get ready for the next one";else if(Ft!=null&&Ft.running){const l=Ee==="connected",c=Ft.state;zs==="not-ready"?(t="not-ready",e="Not ready",n="Radar is busy or not armed – wait"):c==="ready"&&l?(t="ready",e="Ready – hit away",n=`Ball set · ${Ie===ke?"Simulator":"radar connected"}`):c==="ready"?(t="waiting",e="Ball set",n="Connect the radar to start tracking"):c==="settling"?(t="waiting",e="Hold still…",n="Ball found – checking it’s settled"):(t="waiting",e="Place ball in the box",n=l?"Camera is watching the hitting spot":"Radar not connected yet")}else if(Ee==="connecting")t="waiting",e="Connecting…",n="Pick the device in the browser window";else if(Ee!=="connected")t="off",e="Not connected",n=Ee==="error"?"Connection failed – see Device tab":"Connect a device to start";else if(zs==="ready")t="ready",e="Ready – hit away",n=Ie===ke?"Simulator: press Space or Hit":"Device is armed";else if(zs==="not-ready")t="not-ready",e="Not ready",n="Device is busy or not armed – wait";else{const l=!!((r=(s=yn.status)==null?void 0:s.ready)!=null&&r.prefix)||((o=(a=yn.status)==null?void 0:a.ready)==null?void 0:o.length)!==void 0;t="waiting",e="Connected",n=l?"Waiting for the device to arm…":"Ready signal not decoded yet – watch the device screen"}i.dataset.state=t,X("#ready-title").textContent=e,X("#ready-detail").textContent=n}function Vl(i="Shot recorded",t=1800){qu=i,$u=Date.now()+t,Ti(),setTimeout(Ti,t+50)}let ks=0,Kr=0;function Wl(){const i=X("#activity");if(i.hidden=Ie===ke||Ee!=="connected",i.hidden)return;const t=Kr?Math.round((Date.now()-Kr)/1e3):-1;X("#activity-text").textContent=ks===0?"Waiting for data…":`${ks} packet${ks===1?"":"s"} · last ${t<1?"just now":`${t}s ago`}`}setInterval(Wl,1e3);function Xl(i,t){const{shot:e,flight:n}=Nu(i,Ce,t,ms);be.push(e),kl(be),wi==="course"&&st&&!st.holed?Lx(i):wi==="course"&&(st!=null&&st.holed)?X("#hole-msg").textContent="Hole finished – press Next hole ▶":Ke.playShot(n),Vl(),Rx(e),oa(e),la(),ca()}const ll=X("#device-select");ll.innerHTML=Gl.map(i=>`<option value="${i.id}" ${i.isSupported()?"":"disabled"}>${i.name}${i.isSupported()?"":" (unsupported in this browser)"}</option>`).join("");ll.addEventListener("change",async()=>{Ee==="connected"&&await Ie.disconnect(),Ie=Gl.find(i=>i.id===ll.value),Ee="disconnected",ql()});X("#connect-btn").addEventListener("click",async()=>{try{Ee==="connected"?await Ie.disconnect():await Ie.connect()}catch(i){fn(`Error: ${i.message}`)}});const Zr=X("#club-select");Zr.innerHTML=Yr.map(i=>`<option ${i===Ce?"selected":""}>${i}</option>`).join("");Zr.addEventListener("change",()=>{er(Zr.value)});function er(i){Ce=i,Zr.value=i,ke.club=i,ni("open-sc4.club",i),Ft.setFast(i==="PT"&&Ft.settings.putt.enabled),wi==="course"&&st&&!st.holed&&(st.autoAim(i),gs())}ke.club=Ce;const $l=X("#hit-btn");$l.addEventListener("click",async()=>{Ie===ke&&(Ee!=="connected"&&await ke.connect(),ke.hit())});document.addEventListener("keydown",i=>{const t=i.target.tagName;["INPUT","TEXTAREA","SELECT"].includes(t)||(i.code==="Space"&&t!=="BUTTON"?(i.preventDefault(),$l.click()):wi==="course"&&(i.code==="ArrowLeft"||i.code==="KeyA")?(i.preventDefault(),ea(-1)):wi==="course"&&(i.code==="ArrowRight"||i.code==="KeyD")&&(i.preventDefault(),ea(1)))});function ql(i){const t=X("#status"),e={disconnected:"Disconnected",connecting:"Connecting…",connected:"Connected",error:"Error"};t.textContent=i?`${e[Ee]} · ${i}`:e[Ee],t.className=`status status-${Ee}`,X("#connect-btn").textContent=Ee==="connected"?"Disconnect":"Connect",$l.style.display=Ie===ke?"":"none",(Ee==="connecting"||Ee==="disconnected")&&(ks=0,Kr=0,zs=null),Wl(),Ti()}X("#camera-select").addEventListener("change",i=>{Ke.setCameraMode(i.target.value)});X("#clear-tracers").addEventListener("click",()=>Ke.clearTracers());const Hs=X("#quality-select");Hs.value=Di("open-sc4.quality","high");Ke.setQuality(Hs.value);Hs.addEventListener("change",()=>{Ke.setQuality(Hs.value),ni("open-sc4.quality",Hs.value)});function oa(i){X("#last-club").textContent=i?`${i.club} · ${i.source.replace(/ \(.*\)$/,"")}`:"";const t=(r,a=1)=>r===void 0?"–":r.toFixed(a),e=(r,a=1)=>r===void 0?"–":`${Math.abs(r).toFixed(a)}${r>0?"R":r<0?"L":""}`,n=r=>{var a;return(a=i==null?void 0:i.estimated)!=null&&a.includes(r)?"est":""},s=[["Carry",t(i==null?void 0:i.carryYd),"yd","hero"],["Total",t(i==null?void 0:i.totalYd),"yd"],["Offline",e(i==null?void 0:i.offlineYd),"yd"],["Ball speed",t(i==null?void 0:i.ballSpeedMph),"mph"],["Club speed",t(i==null?void 0:i.clubSpeedMph),"mph"],["Smash",t(i==null?void 0:i.smashFactor,2),""],["Launch",t(i==null?void 0:i.launchAngleDeg),"°",n("launchAngleDeg")],["Direction",e(i==null?void 0:i.launchDirectionDeg),"°",n("launchDirectionDeg")],["Spin",t(i==null?void 0:i.spinRpm,0),"rpm",n("spinRpm")],["Spin axis",e(i==null?void 0:i.spinAxisDeg),"°",n("spinAxisDeg")],["Apex",t(i==null?void 0:i.apexFt,0),"ft"],["Land angle",t(i==null?void 0:i.landingAngleDeg),"°"]];X("#tiles").innerHTML=s.map(([r,a,o,l])=>`<div class="tile ${l??""}"><div class="k">${r}</div><div class="v">${a}<span class="u">${o}</span></div></div>`).join("")}function la(){const i=[["#",e=>String(be.indexOf(e)+1)],["Club",e=>e.club],["Carry",e=>e.carryYd.toFixed(1)],["Total",e=>e.totalYd.toFixed(1)],["Offline",e=>e.offlineYd.toFixed(1)],["Ball",e=>e.ballSpeedMph.toFixed(1)],["Club spd",e=>{var n;return((n=e.clubSpeedMph)==null?void 0:n.toFixed(1))??"–"}],["Smash",e=>{var n;return((n=e.smashFactor)==null?void 0:n.toFixed(2))??"–"}],["Launch",e=>{var n;return((n=e.launchAngleDeg)==null?void 0:n.toFixed(1))??"–"}],["Dir",e=>{var n;return((n=e.launchDirectionDeg)==null?void 0:n.toFixed(1))??"–"}],["Spin",e=>{var n;return((n=e.spinRpm)==null?void 0:n.toFixed(0))??"–"}],["Axis",e=>{var n;return((n=e.spinAxisDeg)==null?void 0:n.toFixed(1))??"–"}],["Apex ft",e=>String(e.apexFt)],["Dev. carry",e=>{var n;return((n=e.deviceCarryYd)==null?void 0:n.toFixed(1))??"–"}],["Time",e=>new Date(e.timestamp).toLocaleTimeString()]],t=[...be].reverse().slice(0,300);X("#history-table").innerHTML=`<thead><tr>${i.map(([e])=>`<th>${e}</th>`).join("")}</tr></thead><tbody>${t.map(e=>`<tr data-id="${e.id}">${i.map(([,n])=>`<td>${n(e)}</td>`).join("")}</tr>`).join("")}</tbody>`}X("#history-table").addEventListener("click",i=>{const t=i.target.closest("tr[data-id]"),e=t&&be.find(s=>s.id===t.getAttribute("data-id"));if(!e)return;Ke.playShot(Vv(e,ms)),oa(e);const n=Ai.get(e.id);n&&zn.load(n,`Replay · ${e.club}`)});function ca(){const i=Wv(be).sort((e,n)=>Yr.indexOf(e.club)-Yr.indexOf(n.club)),t=["Club","Shots","Avg carry","Avg total","Carry ±","Offline ±","Ball spd","Club spd","Launch","Spin"];X("#stats-table").innerHTML=`<thead><tr>${t.map(e=>`<th>${e}</th>`).join("")}</tr></thead><tbody>`+i.map(e=>`<tr><td>${e.club}</td><td>${e.count}</td><td>${e.avgCarry}</td><td>${e.avgTotal}</td><td>${e.carryStdDev}</td><td>${e.offlineStdDev}</td><td>${e.avgBallSpeed}</td><td>${e.avgClubSpeed??"–"}</td><td>${e.avgLaunch}</td><td>${e.avgSpin}</td></tr>`).join("")+"</tbody>"}X("#export-csv").addEventListener("click",()=>ud(`opensc4-shots-${dd()}.csv`,Fu(be),"text/csv"));X("#import-csv").addEventListener("change",async i=>{var n;const t=i.target,e=(n=t.files)==null?void 0:n[0];if(e){try{const s=$v(await e.text());for(const{club:r,m:a}of s)be.push(Nu(a,r,"CSV import",ms).shot);kl(be),la(),ca(),Ks(`Imported ${s.length} shots`)}catch(s){Ks(`Import failed: ${s.message}`)}t.value=""}});const rs=X("#clear-history");let Yu;rs.addEventListener("click",()=>{if(!rs.classList.contains("armed")){rs.classList.add("armed"),rs.textContent=`Delete ${be.length} shots?`,Yu=setTimeout(Lh,4e3);return}Lh(),be=[],kl(be),la(),ca(),oa(),Ks("History cleared")});function Lh(){clearTimeout(Yu),rs.classList.remove("armed"),rs.textContent="Clear history"}X("#copy-csv").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Fu(be)),Ks(`Copied ${be.length} shots as CSV`)}catch{Ks("Copy was blocked by the browser – use Export CSV instead")}});let Ih;function Ks(i){const t=X("#history-msg");t.textContent=i,clearTimeout(Ih),Ih=setTimeout(()=>t.textContent="",5e3)}X("#manual-form").addEventListener("submit",i=>{i.preventDefault();const t=i.target,e=new FormData(t),n={};for(const[s,r]of e.entries()){const a=parseFloat(String(r));Number.isFinite(a)&&(n[s]=a)}n.ballSpeedMph&&(Xl(n,"Manual"),t.reset())});const ju="open-sc4.camera.v1",so=Di(ju,{}),Tn={...Hr,...so,pixels:{...Hr.pixels,...so.pixels??{}},putt:{...Hr.putt,...so.putt??{}}},Ft=new ku(Tn,X("#camera-canvas")),cl=X("#camera-toggle"),hl=X("#webcam-select"),Gs=X("#cam-min"),Jr=X("#cam-bright"),Li=()=>ni(ju,Ft.settings),Vs=i=>X("#cam-msg").textContent=i;Gs.value=String(Tn.minPixels);Jr.value=String(Tn.pixels.brightness);X("#cam-need").textContent=String(Tn.minPixels);async function Ku(){const i=await ku.listCameras();hl.innerHTML='<option value="">Default camera</option>'+i.map((t,e)=>`<option value="${t.deviceId}" ${t.deviceId===Tn.deviceId?"selected":""}>${t.label||`Camera ${e+1}`}</option>`).join("")}hl.addEventListener("change",async()=>{Ft.settings.deviceId=hl.value||void 0,Li(),Ft.running&&await Zu()});async function Zu(){try{await Ft.start(),Js.checked&&sn.start(Ft.video),cl.textContent="Stop camera",Vs(""),await Ku()}catch(i){Vs(`Camera didn’t start: ${i.message}. Allow camera access in the browser’s address bar and try again.`)}Ti()}cl.addEventListener("click",async()=>{Ft.running?(sn.stop(),Ft.stop(),cl.textContent="Start camera",X("#cam-state").textContent="Camera off",Ti()):await Zu()});Gs.addEventListener("input",()=>{Ft.setMinPixels(Number(Gs.value)),X("#cam-need").textContent=Gs.value,Li()});Jr.addEventListener("input",()=>{Ft.settings.pixels.brightness=Number(Jr.value),Li()});const ul=X("#cam-tol");function Ju(){const i=Ft.settings.pixels,t=i.mode==="color"&&i.color;X("#ball-kind").textContent=t?"Coloured ball":"White ball",X("#ball-swatch").style.background=t?`rgb(${i.color.rgb.join(",")})`:"#f4f4f4",X("#bright-row").hidden=!!t,X("#tol-row").hidden=!t,ul.value=String(Math.round(i.tolerance*1e3)),Jr.value=String(i.brightness)}Ju();ul.addEventListener("input",()=>{Ft.settings.pixels.tolerance=Number(ul.value)/1e3,Li()});X("#cam-calibrate").addEventListener("click",()=>{if(!Ft.running)return Vs("Start the camera first.");const i=Ft.learnBall();if(!i)return Vs("Couldn’t pick out a ball in the box. Draw the box a little bigger than the ball, check the ball is inside it, and that its colour differs from the floor.");Gs.value=String(Ft.settings.minPixels),X("#cam-need").textContent=String(Ft.settings.minPixels),Li(),Ju(),Vs(`${i.label}: found ${i.count} ball pixels, so ${Ft.settings.minPixels} or more counts as “ball in box”.`)});const wx={empty:"No ball in box",settling:"Ball found – settling",ready:"Ball set ✓",cooldown:"Hit detected"};Ft.onFrame=()=>{X("#cam-count").textContent=String(Ft.last.count),X("#cam-state").textContent=wx[Ft.state]};Ft.onEvent=i=>{if(i==="hit"){fn("📷 Camera: ball left the box – hit detected"),nd=Date.now();const t=Ft.lastBallSeenAt?Ft.lastBallSeenAt+40:performance.now();sn.running&&sn.capture(t).then(n=>n&&Cx(n)),Vl("Swing detected"),!(Ce==="PT"&&Ft.settings.putt.enabled)&&Ie===ke&&Ee==="connected"&&X("#cam-sim").checked&&ke.hit()}else i==="removed"?fn("📷 Camera: ball removed from the box"):i==="ready"&&fn("📷 Camera: ball set");Ti()};Ft.enableZoneDrawing(()=>Li());const Qr=X("#putt-on"),Yl=X("#putt-dir"),jl=X("#putt-flip"),Zs=X("#putt-cal");Qr.checked=Tn.putt.enabled;Yl.value=Tn.putt.direction;jl.checked=Tn.putt.flip;Zs.value=String(Math.round(Tn.putt.calibration*100));X("#putt-cal-out").textContent=`${Zs.value}%`;const Tx=()=>{Ft.settings.putt={enabled:Qr.checked,direction:Yl.value,flip:jl.checked,calibration:Number(Zs.value)/100},X("#putt-cal-out").textContent=`${Zs.value}%`,Ft.setFast(Ce==="PT"&&Qr.checked),Li()};[Qr,Yl,jl,Zs].forEach(i=>i.addEventListener("input",Tx));Ft.setFast(Ce==="PT"&&Tn.putt.enabled);Ft.onPutt=i=>{if(Ce!=="PT")return;const t=av(i.speedMs);fn(`📷 Camera putt: ${t.toFixed(1)} mph, ${i.directionDeg>=0?"R":"L"}${Math.abs(i.directionDeg).toFixed(1)}° (${i.samplesUsed} frames)`),Xl({ballSpeedMph:Math.round(t*10)/10,launchDirectionDeg:Math.round(i.directionDeg*10)/10,launchAngleDeg:0,spinRpm:0},"Camera putt")};setInterval(()=>{const i=Ft.restDiameterPx;X("#putt-readout").textContent=i?`Ball size: ${i.toFixed(1)} px across. Bigger is more accurate; 12+ px is good. Move the camera closer if it's small.`:"Ball size: – (put a ball in the box and wait for the green light)"},1e3);const Qu="open-sc4.replay.v1",td=Di(Qu,{on:!0,quality:"balanced"}),sn=new tx;sn.quality=js.find(i=>i.id===td.quality)??js[1];const zn=new nx(X("#replay"),X("#replay-canvas"),X("#replay-scrub"),X("#replay-label")),Js=X("#replay-on"),dl=X("#replay-quality");Js.checked=td.on;dl.innerHTML=js.map(i=>`<option value="${i.id}" ${i===sn.quality?"selected":""}>${i.label}</option>`).join("");const ed=()=>ni(Qu,{on:Js.checked,quality:sn.quality.id});Js.addEventListener("change",()=>{Js.checked&&Ft.running?sn.start(Ft.video):sn.stop(),ed()});dl.addEventListener("change",()=>{sn.setQuality(js.find(i=>i.id===dl.value)),ed()});X("#replay-play").addEventListener("click",()=>zn.play(1));X("#replay-close").addEventListener("click",()=>zn.hide());X("#replay-speed").addEventListener("click",i=>{const t=[.5,.25,1];zn.speed=t[(t.indexOf(zn.speed)+1)%t.length],i.target.textContent=zn.speed===1?"1×":zn.speed===.5?"½×":"¼×"});const Ax=6,Ai=new Map,ro=[];let kn=null,nd=0;function id(i){for(ro.push(i);ro.length>Ax;){const t=ro.shift();for(const[e,n]of Ai)n===t&&Ai.delete(e);(kn==null?void 0:kn.clip)===t&&(kn=null),ex(t)}}function Cx(i){id(i);const t=[...be].reverse().find(e=>Date.now()-e.timestamp<4e3&&!Ai.has(e.id));t?Ai.set(t.id,i):kn={clip:i,at:Date.now()},zn.load(i,t?`Impact replay · ${t.club}`:"Impact replay")}function Rx(i){if(kn&&Date.now()-kn.at<6e3){Ai.set(i.id,kn.clip),kn=null;return}sn.running&&Date.now()-nd>4e3&&sn.capture(performance.now()-300,2500,300).then(t=>{t&&(id(t),Ai.set(i.id,t),zn.load(t,`Replay · ${i.club}`))})}Ft.draw();Ku();const ha=new bx(X("#minimap")),es=new Map;let Fn=null;const ze=i=>X("#course-status").textContent=i,ta=i=>Math.round(i*1.0936);document.querySelectorAll(".mode-toggle button").forEach(i=>{i.addEventListener("click",()=>sd(i.dataset.mode))});function sd(i){if(i==="course"&&!st){hd("course"),ze("Find and load a course first."),X("#course-q").focus();return}wi=i,document.querySelectorAll(".mode-toggle button").forEach(t=>{t.classList.toggle("active",t.dataset.mode===i),t.setAttribute("aria-pressed",String(t.dataset.mode===i))}),X("#hole-card").hidden=i!=="course",Ke.setMode(i),i==="course"&&ad()}X("#course-search").addEventListener("submit",async i=>{i.preventDefault();const t=X("#course-q").value.trim();if(!t)return;const e=X("#course-results");e.innerHTML="",ze("Searching for the place…");let n;try{n=await lx(t.toLowerCase().includes("golf")?t:`${t} golf`)}catch(a){return ze(`Place search didn't work: ${a.message}. Check your internet connection.`)}if(!n.length)return ze('No places found. Try the course name plus the town or state, e.g. "Torrey Pines San Diego".');const s=new Map;for(const a of n)a.course&&s.set(a.course.id,a.course);const r=n.find(a=>a.isGolfCourse)??n[0];ao(s,`Looking for more courses near ${r.name}…`);try{const a=await cx(r.lat,r.lon,4e3,o=>ze(`Looking for courses near ${r.name} (asking ${o})…`));for(const o of a)s.has(o.id)||s.set(o.id,o);if(!s.size)return ze(`No golf courses are mapped near ${r.label}. Try another name, or play the practice course.`);ao(s,`${s.size} course${s.size>1?"s":""} found. Pick one to load its holes.`)}catch(a){s.size?ao(s,`Found ${s.size} course${s.size>1?"s":""} by name (couldn't search nearby: ${a.message}). Pick one to load its holes.`):ze(`Couldn't search for courses: ${a.message}`)}});function ao(i,t){ze(t);const e=X("#course-results");e.innerHTML="";for(const n of[...i.values()].slice(0,10)){const s=document.createElement("button");s.innerHTML="<strong></strong><small></small>",s.querySelector("strong").textContent=n.name,s.querySelector("small").textContent=`${n.center.lat.toFixed(4)}, ${n.center.lon.toFixed(4)}`,s.addEventListener("click",()=>Px(n)),e.appendChild(s)}}X("#practice-course").addEventListener("click",()=>{rd(Ex()),ze("Practice course loaded: 3 holes."),X("#course-results").innerHTML=""});async function Px(i){ze(`Loading ${i.name}…`);try{let t="";const e=await hx(i,n=>ze(`Loading ${i.name} (asking ${n})…`),n=>t=n);if(!e.holes.length)return ze(`${i.name} is on the map, but its holes haven't been mapped in OpenStreetMap yet. Try another course, or play the practice course.`);rd(e),ze(`${e.name}: ${e.holes.length} holes loaded.${t?" "+t:""}`),X("#course-results").innerHTML=""}catch(t){ze(`Couldn't load the course: ${t.message}`)}}function rd(i){st=new mx(i,{gimmeM:ol}),es.clear(),sd("course"),er("DR"),Zl()}async function ad(){if(!st)return;const i=st.holeIndex,t=st.hole;if(gs(),!es.has(i)){X("#hole-msg").textContent=st.course.id==="practice"?"":"Loading satellite view…";const e=[...t.path,t.pin],n=80,s={minE:Math.min(...e.map(a=>a.e))-n,maxE:Math.max(...e.map(a=>a.e))+n,minN:Math.min(...e.map(a=>a.n))-n,maxN:Math.max(...e.map(a=>a.n))+n},r=()=>yx(st.course.features,s);if(st.course.id==="practice")es.set(i,r());else try{const a=await Mx(st.course.origin,s);es.set(i,a.total&&a.failed/a.total>.5?r():a)}catch{es.set(i,r())}X("#hole-msg").textContent=""}!st||st.holeIndex!==i||(Fn=es.get(i)??null,Fn&&(Ke.setSatellite(Fn.canvas,Fn.rect),Fn.failed&&(X("#hole-msg").textContent=`${Fn.failed} map tiles didn't load.`)),gs())}function gs(){if(!st)return;const i=st.hole;Ke.setPin(i.pin);const t={e:st.ball.e+st.aim.e*200,n:st.ball.n+st.aim.n*200};Ke.setBall(st.ball,st.aim,Ce==="PT"?i.pin:t),ha.draw(st,Fn,Ce),Dx()}function Dx(){if(!st)return;const i=st.hole,t=st.totals();X("#hole-title").textContent=`Hole ${i.number}`,X("#hole-meta").textContent=`Par ${i.par} · ${ta(i.lengthM)} yd · ${st.course.name}`,X("#to-pin").textContent=st.holed?"In":`${ta(st.distanceToPin)} yd`,X("#lie").textContent=rl[st.lie].label,X("#stroke-no").textContent=String(st.holed?st.strokesThisHole:st.strokesThisHole+1),X("#round-score").textContent=t.strokes?t.toPar===0?"E":t.toPar>0?`+${t.toPar}`:String(t.toPar):"E",X("#next-hole").disabled=st.holeIndex>=st.course.holes.length-1,X("#prev-hole").disabled=st.holeIndex===0}function Lx(i){if(!st)return;const t=st.play(i,Ce,ms);Ke.setBall(t.start,t.aim),Ke.playShot(t.flight,()=>{st&&(X("#hole-msg").textContent=t.message,!st.holed&&st.lie==="green"&&Ce!=="PT"?er("PT"):st.holed||st.autoAim(Ce),gs(),Zl())}),ha.draw(st,Fn,Ce)}function ea(i){!st||st.holed||(st.adjustAim(i),gs())}ha.onAim=i=>{!st||st.holed||(st.aimAt(i),gs())};X("#aim-left").addEventListener("click",()=>ea(-1));X("#aim-right").addEventListener("click",()=>ea(1));function Kl(i){st&&(st.startHole(i),Ke.clearTracers(),er(st.hole.par===3?"7i":"DR"),X("#hole-msg").textContent="",ad(),Zl())}X("#next-hole").addEventListener("click",()=>st&&Kl(st.holeIndex+1));X("#prev-hole").addEventListener("click",()=>st&&Kl(st.holeIndex-1));X("#restart-hole").addEventListener("click",()=>st&&Kl(st.holeIndex));function Zl(){if(!st)return;X("#scorecard-wrap").hidden=!1,X("#scorecard-title").textContent=st.course.name;const i=st.course.holes,t=st.totals(),e=(n,s)=>n?`<td class="${n<s?"under":n>s?"over":""}" title="${al(n,s)}">${n}</td>`:"<td>–</td>";X("#scorecard").innerHTML="<thead><tr><th>Hole</th><th>Par</th><th>Yards</th><th>Score</th></tr></thead><tbody>"+i.map((n,s)=>`<tr class="${s===st.holeIndex?"current":""}"><td>${n.number}</td><td>${n.par}</td><td>${ta(n.lengthM)}</td>${e(st.strokes[s],n.par)}</tr>`).join("")+`<tr><td><strong>Total</strong></td><td>${i.reduce((n,s)=>n+s.par,0)}</td><td>${ta(i.reduce((n,s)=>n+s.lengthM,0))}</td><td><strong>${t.strokes||"–"}${t.strokes?` (${t.toPar===0?"E":t.toPar>0?"+"+t.toPar:t.toPar})`:""}</strong></td></tr></tbody>`}window.addEventListener("resize",()=>st&&wi==="course"&&ha.draw(st,Fn,Ce));const od=X("#profile-json"),ld=()=>od.value=JSON.stringify(yn,null,2);ld();X("#profile-save").addEventListener("click",()=>{try{yn=Sv(JSON.parse(od.value)),Ze.profile=yn,ni(Hl,yn),X("#profile-msg").textContent="Saved ✓ (reconnect to apply)"}catch(i){X("#profile-msg").textContent=`Invalid: ${i.message}`}});X("#profile-reset").addEventListener("click",()=>{yn=Iu,Ze.profile=yn,ni(Hl,yn),ld(),X("#profile-msg").textContent="Reset to default"});X("#accept-all").addEventListener("change",i=>{Ze.acceptAllDevices=i.target.checked});const gn=X("#log");function fn(i){const t=new Date().toLocaleTimeString();gn.textContent+=`[${t}] ${i}
`,gn.textContent.length>2e5&&(gn.textContent=gn.textContent.slice(-15e4)),gn.scrollTop=gn.scrollHeight}X("#log-clear").addEventListener("click",()=>gn.textContent="");X("#label-form").addEventListener("submit",i=>{i.preventDefault();const t=i.target,e={};for(const[s,r]of new FormData(t).entries()){const a=parseFloat(String(r));Number.isFinite(a)&&(e[s]=a)}if(!Object.keys(e).length)return X("#label-msg").textContent="Type at least one number from the SC4 Pro screen.";const n=Ze.labelLatest(e);if(!n)return X("#label-msg").textContent="No SC4 Pro message yet. Hit a shot first, then save.";fn(`✎ Screen for message at ${new Date(n.t).toLocaleTimeString()}: ${Object.entries(e).map(([s,r])=>`${s}=${r}`).join(", ")}`),X("#label-msg").textContent="Saved.",t.reset()});X("#log-copy").addEventListener("click",async()=>{var t,e;const i=Ze.exportCapture()+`

`+(gn.textContent??"");try{await navigator.clipboard.writeText(i),X("#label-msg").textContent="Copied. Paste it into a message to share it."}catch{gn.textContent=i;const n=document.createRange();n.selectNodeContents(gn),(t=getSelection())==null||t.removeAllRanges(),(e=getSelection())==null||e.addRange(n),X("#label-msg").textContent="Copy was blocked. The log is selected; use your browser’s Copy."}});const Ws=X("#auto-ack");Ws.checked=Di("open-sc4.autoAck",!0);Ze.autoAck=Ws.checked;Ws.addEventListener("change",()=>{Ze.autoAck=Ws.checked,ni("open-sc4.autoAck",Ws.checked)});X("#echo-last").addEventListener("click",()=>{const i=Ze.lastDataHex();if(!i)return fn("No SC4 Pro message yet. Hit a shot that registers first.");X("#send-hex").value=i,fn('Loaded the last SC4 Pro message into the send box. Tap "Send to device", then watch for new ◀ 0003 lines.')});X("#send-form").addEventListener("submit",async i=>{i.preventDefault();const t=X("#send-hex");try{await Ze.sendHex(t.value)}catch(e){fn(`Couldn't send: ${e.message}`)}});X("#log-export").addEventListener("click",()=>ud(`opensc4-capture-${dd()}.json`,Ze.exportCapture(),"application/json"));Ze.isSupported()||fn("Web Bluetooth not available in this browser – use Chrome or Edge (desktop or Android) on https:// or localhost.");const Jl=X("#env-form");function cd(){const i=new FormData(Jl),t=r=>parseFloat(String(i.get(r))),e=t("altitudeFt")*.3048,n=(t("tempF")-32)*(5/9)+273.15;ms={airDensity:101325*Math.pow(1-225577e-10*e,5.25588)/(287.05*n),windSpeed:t("windMph")*.44704,windDirectionDeg:t("windDir"),firmness:t("firmness"),stimp:Number.isFinite(t("stimp"))?t("stimp"):10},ol=Number.isFinite(t("gimme"))?t("gimme"):0,st&&(st.opts.gimmeM=ol),X("#env-summary").textContent=`Air density ${ms.airDensity.toFixed(3)} kg/m³ (sea level standard is 1.225). Applies to new shots.`,ni("open-sc4.env",Object.fromEntries(i.entries()))}const Ix=Di("open-sc4.env",{});for(const[i,t]of Object.entries(Ix)){const e=Jl.elements.namedItem(i);e&&(e.value=t)}Jl.addEventListener("input",cd);cd();function hd(i){document.querySelectorAll(".tab-bar button").forEach(t=>t.classList.toggle("active",t.dataset.tab===i)),document.querySelectorAll(".tab-panel").forEach(t=>t.classList.toggle("active",t.getAttribute("data-panel")===i))}document.querySelectorAll(".tab-bar button").forEach(i=>{i.addEventListener("click",()=>hd(i.dataset.tab))});function ud(i,t,e){const n=URL.createObjectURL(new Blob([t],{type:e}));Object.assign(document.createElement("a"),{href:n,download:i}).click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function dd(){return new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&navigator.serviceWorker.register("./sw.js").catch(()=>{});ql();oa(be[be.length-1]);la();ca();ke.connect();
