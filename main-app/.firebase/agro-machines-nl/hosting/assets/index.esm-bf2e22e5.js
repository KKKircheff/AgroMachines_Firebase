/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Jd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(d=64)),r.push(e[l],e[h],e[d],e[m])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Tc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Jd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Zd;const d=s<<2|a>>4;if(r.push(d),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tf=function(n){const t=Tc(n);return wc.encodeByteArray(t,!0)},Ii=function(n){return tf(n).replace(/\./g,"")},ef=function(n){try{return wc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=()=>nf().__FIREBASE_DEFAULTS__,sf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},of=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ef(n[1]);return t&&JSON.parse(t)},$i=()=>{try{return rf()||sf()||of()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},af=n=>{var t,e;return(e=(t=$i())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},uf=n=>{const t=af(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},vc=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},_E=n=>{var t;return(t=$i())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ii(JSON.stringify(e)),Ii(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ar())}function hf(){var n;const t=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function EE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const n=ar();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function df(){return!hf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function wE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="FirebaseError";class Rn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=mf,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rc.prototype.create)}}class Rc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?gf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,r)}}function gf(n,t){return n.replace(pf,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const pf=/\{\$([^}]+)}/g;function vE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ur(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Ka(s)&&Ka(o)){if(!ur(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ka(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function RE(n,t){const e=new _f(n,t);return e.subscribe.bind(e)}class _f{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");yf(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=As),i.error===void 0&&(i.error=As),i.complete===void 0&&(i.complete=As);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yf(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function As(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1e3,Ef=2,Tf=4*60*60*1e3,wf=.5;function SE(n,t=If,e=Ef){const r=t*Math.pow(e,n),i=Math.round(wf*r*(Math.random()-.5)*2);return Math.min(Tf,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}class cr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rf(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ae){return this.instances.has(t)}getOptions(t=Ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Af(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ae){return this.component?this.component.multipleInstances?t:Ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(n){return n===Ae?void 0:n}function Rf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Pf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},bf=O.INFO,Vf={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Cf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Vf[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sc{constructor(t){this.name=t,this._logLevel=bf,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const Df=(n,t)=>t.some(e=>n instanceof e);let Qa,Wa;function xf(){return Qa||(Qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nf(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pc=new WeakMap,zs=new WeakMap,bc=new WeakMap,Rs=new WeakMap,Ao=new WeakMap;function kf(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(ie(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Pc.set(e,n)}).catch(()=>{}),Ao.set(t,n),t}function Mf(n){if(zs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zs.set(n,t)}let $s={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||bc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Of(n){$s=n($s)}function Ff(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ss(this),t,...e);return bc.set(r,t.sort?t.sort():[t]),ie(r)}:Nf().includes(n)?function(...t){return n.apply(Ss(this),t),ie(Pc.get(this))}:function(...t){return ie(n.apply(Ss(this),t))}}function Lf(n){return typeof n=="function"?Ff(n):(n instanceof IDBTransaction&&Mf(n),Df(n,xf())?new Proxy(n,$s):n)}function ie(n){if(n instanceof IDBRequest)return kf(n);if(Rs.has(n))return Rs.get(n);const t=Lf(n);return t!==n&&(Rs.set(n,t),Ao.set(t,n)),t}const Ss=n=>Ao.get(n);function Bf(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=ie(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ie(o.result),u.oldVersion,u.newVersion,ie(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qf=["get","getKey","getAll","getAllKeys","count"],Uf=["put","add","delete","clear"],Ps=new Map;function Ha(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ps.get(t))return Ps.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Uf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qf.includes(e)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),i&&u.done]))[0]};return Ps.set(t,s),s}Of(n=>({...n,get:(t,e,r)=>Ha(t,e)||n.get(t,e,r),has:(t,e)=>!!Ha(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if($f(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function $f(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gs="@firebase/app",Ya="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Sc("@firebase/app"),Gf="@firebase/app-compat",jf="@firebase/analytics-compat",Kf="@firebase/analytics",Qf="@firebase/app-check-compat",Wf="@firebase/app-check",Hf="@firebase/auth",Yf="@firebase/auth-compat",Xf="@firebase/database",Jf="@firebase/database-compat",Zf="@firebase/functions",tm="@firebase/functions-compat",em="@firebase/installations",nm="@firebase/installations-compat",rm="@firebase/messaging",im="@firebase/messaging-compat",sm="@firebase/performance",om="@firebase/performance-compat",am="@firebase/remote-config",um="@firebase/remote-config-compat",cm="@firebase/storage",lm="@firebase/storage-compat",hm="@firebase/firestore",dm="@firebase/firestore-compat",fm="firebase",mm="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]",gm={[Gs]:"fire-core",[Gf]:"fire-core-compat",[Kf]:"fire-analytics",[jf]:"fire-analytics-compat",[Wf]:"fire-app-check",[Qf]:"fire-app-check-compat",[Hf]:"fire-auth",[Yf]:"fire-auth-compat",[Xf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Zf]:"fire-fn",[tm]:"fire-fn-compat",[em]:"fire-iid",[nm]:"fire-iid-compat",[rm]:"fire-fcm",[im]:"fire-fcm-compat",[sm]:"fire-perf",[om]:"fire-perf-compat",[am]:"fire-rc",[um]:"fire-rc-compat",[cm]:"fire-gcs",[lm]:"fire-gcs-compat",[hm]:"fire-fst",[dm]:"fire-fst-compat","fire-js":"fire-js",[fm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map,js=new Map;function pm(n,t){try{n.container.addComponent(t)}catch(e){ke.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function wi(n){const t=n.name;if(js.has(t))return ke.debug(`There were multiple attempts to register component ${t}.`),!1;js.set(t,n);for(const e of Ti.values())pm(e,n);return!0}function Ro(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _m(n,t,e=Ei){Ro(n,t).clearInstance(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},se=new Rc("app","Firebase",ym);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=mm;function Tm(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ei,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw se.create("bad-app-name",{appName:String(i)});if(e||(e=vc()),!e)throw se.create("no-options");const s=Ti.get(i);if(s){if(ur(e,s.options)&&ur(r,s.config))return s;throw se.create("duplicate-app",{appName:i})}const o=new Sf(i);for(const u of js.values())o.addComponent(u);const a=new Im(e,r,o);return Ti.set(i,a),a}function wm(n=Ei){const t=Ti.get(n);if(!t&&n===Ei&&vc())return Tm();if(!t)throw se.create("no-app",{appName:n});return t}function Zn(n,t,e){var r;let i=(r=gm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ke.warn(a.join(" "));return}wi(new cr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="firebase-heartbeat-database",Am=1,lr="firebase-heartbeat-store";let bs=null;function Vc(){return bs||(bs=Bf(vm,Am,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(lr)}}}).catch(n=>{throw se.create("idb-open",{originalErrorMessage:n.message})})),bs}async function Rm(n){try{return await(await Vc()).transaction(lr).objectStore(lr).get(Cc(n))}catch(t){if(t instanceof Rn)ke.warn(t.message);else{const e=se.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ke.warn(e.message)}}}async function Xa(n,t){try{const r=(await Vc()).transaction(lr,"readwrite");await r.objectStore(lr).put(t,Cc(n)),await r.done}catch(e){if(e instanceof Rn)ke.warn(e.message);else{const r=se.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ke.warn(r.message)}}}function Cc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=1024,Pm=30*24*60*60*1e3;class bm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Cm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ja();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ja(),{heartbeatsToSend:e,unsentEntries:r}=Vm(this._heartbeatsCache.heartbeats),i=Ii(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ja(){return new Date().toISOString().substring(0,10)}function Vm(n,t=Sm){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Za(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Za(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Cm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Za(n){return Ii(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){wi(new cr("platform-logger",t=>new zf(t),"PRIVATE")),wi(new cr("heartbeat",t=>new bm(t),"PRIVATE")),Zn(Gs,Ya,n),Zn(Gs,Ya,"esm2017"),Zn("fire-js","")}Dm("");var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,So=So||{},D=xm||self;function Gi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Dr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Nm(n){return Object.prototype.hasOwnProperty.call(n,Vs)&&n[Vs]||(n[Vs]=++km)}var Vs="closure_uid_"+(1e9*Math.random()>>>0),km=0;function Mm(n,t,e){return n.call.apply(n.bind,arguments)}function Om(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Et(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=Mm:Et=Om,Et.apply(null,arguments)}function ti(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ht(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function me(){this.s=this.s,this.o=this.o}var Fm=0;me.prototype.s=!1;me.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fm!=0)&&Nm(this)};me.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dc=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Po(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function tu(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Gi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Tt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var Lm=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",()=>{},t),D.removeEventListener("test",()=>{},t)}catch{}return n}();function hr(n){return/^[\s\xa0]*$/.test(n)}function ji(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function Ot(n){return ji().indexOf(n)!=-1}function bo(n){return bo[" "](n),n}bo[" "]=function(){};function Bm(n,t){var e=Dg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var qm=Ot("Opera"),cn=Ot("Trident")||Ot("MSIE"),xc=Ot("Edge"),Ks=xc||cn,Nc=Ot("Gecko")&&!(ji().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),Um=ji().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function kc(){var n=D.document;return n?n.documentMode:void 0}var Qs;t:{var Cs="",Ds=function(){var n=ji();if(Nc)return/rv:([^\);]+)(\)|;)/.exec(n);if(xc)return/Edge\/([\d\.]+)/.exec(n);if(cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Um)return/WebKit\/(\S+)/.exec(n);if(qm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ds&&(Cs=Ds?Ds[1]:""),cn){var xs=kc();if(xs!=null&&xs>parseFloat(Cs)){Qs=String(xs);break t}}Qs=Cs}var Ws;if(D.document&&cn){var eu=kc();Ws=eu||parseInt(Qs,10)||void 0}else Ws=void 0;var zm=Ws;function dr(n,t){if(Tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Nc){t:{try{bo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:$m[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&dr.$.h.call(this)}}ht(dr,Tt);var $m={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),Gm=0;function jm(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Gm,this.fa=this.ia=!1}function Ki(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Vo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Km(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Mc(n){const t={};for(const e in n)t[e]=n[e];return t}const nu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oc(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<nu.length;s++)e=nu[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Qi(n){this.src=n,this.g={},this.h=0}Qi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ys(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new jm(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Hs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Dc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ki(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ys(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Co="closure_lm_"+(1e6*Math.random()|0),Ns={};function Fc(n,t,e,r,i){if(r&&r.once)return Bc(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fc(n,t[s],e,r,i);return null}return e=No(e),n&&n[xr]?n.O(t,e,Dr(r)?!!r.capture:!!r,i):Lc(n,t,e,!1,r,i)}function Lc(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Dr(i)?!!i.capture:!!i,a=xo(n);if(a||(n[Co]=a=new Qi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Qm(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Lm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Uc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Qm(){function n(e){return t.call(n.src,n.listener,e)}const t=Wm;return n}function Bc(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Bc(n,t[s],e,r,i);return null}return e=No(e),n&&n[xr]?n.P(t,e,Dr(r)?!!r.capture:!!r,i):Lc(n,t,e,!0,r,i)}function qc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)qc(n,t[s],e,r,i);else r=Dr(r)?!!r.capture:!!r,e=No(e),n&&n[xr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ys(s,e,r,i),-1<e&&(Ki(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=xo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ys(t,e,r,i)),(e=-1<n?t[n]:null)&&Do(e))}function Do(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[xr])Hs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Uc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=xo(t))?(Hs(e,n),e.h==0&&(e.src=null,t[Co]=null)):Ki(n)}}}function Uc(n){return n in Ns?Ns[n]:Ns[n]="on"+n}function Wm(n,t){if(n.fa)n=!0;else{t=new dr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Do(n),n=e.call(r,t)}return n}function xo(n){return n=n[Co],n instanceof Qi?n:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(n){return typeof n=="function"?n:(n[ks]||(n[ks]=function(t){return n.handleEvent(t)}),n[ks])}function ct(){me.call(this),this.i=new Qi(this),this.S=this,this.J=null}ht(ct,me);ct.prototype[xr]=!0;ct.prototype.removeEventListener=function(n,t,e,r){qc(this,n,t,e,r)};function pt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Tt(t,n);else if(t instanceof Tt)t.target=t.target||n;else{var i=t;t=new Tt(r,n),Oc(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=ei(o,r,!0,t)&&i}if(o=t.g=n,i=ei(o,r,!0,t)&&i,i=ei(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=ei(o,r,!1,t)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ki(e[r]);delete n.g[t],n.h--}}this.J=null};ct.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};ct.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function ei(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Hs(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ko=D.JSON.stringify;class Hm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ym(){var n=Mo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Xm{constructor(){this.h=this.g=null}add(t,e){const r=zc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var zc=new Hm(()=>new Jm,n=>n.reset());class Jm{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Zm(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function tg(n){D.setTimeout(()=>{throw n},0)}let fr,mr=!1,Mo=new Xm,$c=()=>{const n=D.Promise.resolve(void 0);fr=()=>{n.then(eg)}};var eg=()=>{for(var n;n=Ym();){try{n.h.call(n.g)}catch(e){tg(e)}var t=zc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}mr=!1};function Wi(n,t){ct.call(this),this.h=n||1,this.g=t||D,this.j=Et(this.qb,this),this.l=Date.now()}ht(Wi,ct);v=Wi.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(Oo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Oo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Wi.$.N.call(this),Oo(this),delete this.g};function Fo(n,t,e){if(typeof n=="function")e&&(n=Et(n,e));else if(n&&typeof n.handleEvent=="function")n=Et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(n,t||0)}function Gc(n){n.g=Fo(()=>{n.g=null,n.i&&(n.i=!1,Gc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class ng extends me{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gc(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(n){me.call(this),this.h=n,this.g={}}ht(gr,me);var ru=[];function jc(n,t,e,r){Array.isArray(e)||(e&&(ru[0]=e.toString()),e=ru);for(var i=0;i<e.length;i++){var s=Fc(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Kc(n){Vo(n.g,function(t,e){this.g.hasOwnProperty(e)&&Do(t)},n),n.g={}}gr.prototype.N=function(){gr.$.N.call(this),Kc(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hi(){this.g=!0}Hi.prototype.Ea=function(){this.g=!1};function rg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function ig(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function rn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+og(n,e)+(r?" "+r:"")})}function sg(n,t){n.info(function(){return"TIMEOUT: "+t})}Hi.prototype.info=function(){};function og(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ko(e)}catch{return t}}var Ge={},iu=null;function Yi(){return iu=iu||new ct}Ge.Ta="serverreachability";function Qc(n){Tt.call(this,Ge.Ta,n)}ht(Qc,Tt);function pr(n){const t=Yi();pt(t,new Qc(t))}Ge.STAT_EVENT="statevent";function Wc(n,t){Tt.call(this,Ge.STAT_EVENT,n),this.stat=t}ht(Wc,Tt);function vt(n){const t=Yi();pt(t,new Wc(t,n))}Ge.Ua="timingevent";function Hc(n,t){Tt.call(this,Ge.Ua,n),this.size=t}ht(Hc,Tt);function Nr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},t)}var Xi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Lo(){}Lo.prototype.h=null;function su(n){return n.h||(n.h=n.i())}function Xc(){}var kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bo(){Tt.call(this,"d")}ht(Bo,Tt);function qo(){Tt.call(this,"c")}ht(qo,Tt);var Xs;function Ji(){}ht(Ji,Lo);Ji.prototype.g=function(){return new XMLHttpRequest};Ji.prototype.i=function(){return{}};Xs=new Ji;function Mr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new gr(this),this.P=ag,n=Ks?125:void 0,this.V=new Wi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jc}function Jc(){this.i=null,this.g="",this.h=!1}var ag=45e3,Js={},vi={};v=Mr.prototype;v.setTimeout=function(n){this.P=n};function Zs(n,t,e){n.L=1,n.v=ts(jt(t)),n.s=e,n.S=!0,Zc(n,null)}function Zc(n,t){n.G=Date.now(),Or(n),n.A=jt(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),al(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Jc,n.g=bl(n.l,e?t:null,!n.s),0<n.O&&(n.M=new ng(Et(n.Pa,n,n.g),n.O)),jc(n.U,n.g,"readystatechange",n.nb),t=n.I?Mc(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),pr(),rg(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&Ft(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const l=Ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ks||this.g&&(this.h.h||this.g.ja()||cu(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?pr(3):pr(2)),Zi(this);var e=this.g.da();this.ca=e;e:if(tl(this)){var r=cu(this.g);n="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),tr(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,ig(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hr(a)){var c=a;break e}}c=null}if(e=c)rn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,to(this,e);else{this.i=!1,this.o=3,vt(12),Ce(this),tr(this);break t}}this.S?(el(this,l,o),Ks&&this.i&&l==3&&(jc(this.U,this.V,"tick",this.mb),this.V.start())):(rn(this.j,this.m,o,null),to(this,o)),l==4&&Ce(this),this.i&&!this.J&&(l==4?Al(this.l,this):(this.i=!1,Or(this)))}else bg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Ce(this),tr(this)}}}catch{}finally{}};function tl(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function el(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=ug(n,e),i==vi){t==4&&(n.o=4,vt(14),r=!1),rn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Js){n.o=4,vt(15),rn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else rn(n.j,n.m,i,null),to(n,i);tl(n)&&i!=vi&&i!=Js&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,vt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ko(t),t.M=!0,vt(11))):(rn(n.j,n.m,e,"[Invalid Chunked Response]"),Ce(n),tr(n))}v.mb=function(){if(this.g){var n=Ft(this.g),t=this.g.ja();this.C<t.length&&(Zi(this),el(this,n,t),this.i&&n!=4&&Or(this))}};function ug(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?vi:(e=Number(t.substring(e,r)),isNaN(e)?Js:(r+=1,r+e>t.length?vi:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ce(this)};function Or(n){n.Y=Date.now()+n.P,nl(n,n.P)}function nl(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Nr(Et(n.lb,n),t)}function Zi(n){n.B&&(D.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(sg(this.j,this.A),this.L!=2&&(pr(),vt(17)),Ce(this),this.o=2,tr(this)):nl(this,this.Y-n)};function tr(n){n.l.H==0||n.J||Al(n.l,n)}function Ce(n){Zi(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Oo(n.V),Kc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function to(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||eo(e.i,n))){if(!n.K&&eo(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Si(e),rs(e);else break t;jo(e),vt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Nr(Et(e.ib,e),6e3));if(1>=ll(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else De(e,11)}else if((n.K||e.g==n)&&Si(e),!hr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const l=c[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const m=n.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Uo(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,K(r.I,r.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Pl(r,r.J?r.pa:null,r.Y),o.K){hl(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Zi(a),Or(a)),r.g=o}else wl(r);0<e.j.length&&is(e)}else c[0]!="stop"&&c[0]!="close"||De(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?De(e,7):Go(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}pr(4)}catch{}}function cg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Gi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function lg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Gi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function rl(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Gi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=lg(n),r=cg(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xe(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof xe){this.h=n.h,Ai(this,n.j),this.s=n.s,this.g=n.g,Ri(this,n.m),this.l=n.l;var t=n.i,e=new _r;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ou(this,e),this.o=n.o}else n&&(t=String(n).match(il))?(this.h=!1,Ai(this,t[1]||"",!0),this.s=Wn(t[2]||""),this.g=Wn(t[3]||"",!0),Ri(this,t[4]),this.l=Wn(t[5]||"",!0),ou(this,t[6]||"",!0),this.o=Wn(t[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}xe.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Hn(t,au,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Hn(t,au,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Hn(e,e.charAt(0)=="/"?mg:fg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Hn(e,pg)),n.join("")};function jt(n){return new xe(n)}function Ai(n,t,e){n.j=e?Wn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ri(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ou(n,t,e){t instanceof _r?(n.i=t,_g(n.i,n.h)):(e||(t=Hn(t,gg)),n.i=new _r(t,n.h))}function K(n,t,e){n.i.set(t,e)}function ts(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Wn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Hn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,dg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function dg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var au=/[#\/\?@]/g,fg=/[#\?:]/g,mg=/[#\?]/g,gg=/[#\?@]/g,pg=/#/g;function _r(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function ge(n){n.g||(n.g=new Map,n.h=0,n.i&&hg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=_r.prototype;v.add=function(n,t){ge(this),this.i=null,n=Sn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function sl(n,t){ge(n),t=Sn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function ol(n,t){return ge(n),t=Sn(n,t),n.g.has(t)}v.forEach=function(n,t){ge(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){ge(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){ge(this);let t=[];if(typeof n=="string")ol(this,n)&&(t=t.concat(this.g.get(Sn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return ge(this),this.i=null,n=Sn(this,n),ol(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function al(n,t,e){sl(n,t),0<e.length&&(n.i=null,n.g.set(Sn(n,t),Po(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Sn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function _g(n,t){t&&!n.j&&(ge(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(sl(this,r),al(this,i,e))},n)),n.j=t}var yg=class{constructor(n,t){this.g=n,this.map=t}};function ul(n){this.l=n||Ig,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ig=10;function cl(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ll(n){return n.h?1:n.g?n.g.size:0}function eo(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Uo(n,t){n.g?n.g.add(t):n.h=t}function hl(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}ul.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function dl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Po(n.i)}var Eg=class{stringify(n){return D.JSON.stringify(n,void 0)}parse(n){return D.JSON.parse(n,void 0)}};function Tg(){this.g=new Eg}function wg(n,t,e){const r=e||"";try{rl(n,function(i,s){let o=i;Dr(i)&&(o=ko(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function vg(n,t){const e=new Hi;if(D.Image){const r=new Image;r.onload=ti(ni,e,r,"TestLoadImage: loaded",!0,t),r.onerror=ti(ni,e,r,"TestLoadImage: error",!1,t),r.onabort=ti(ni,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=ti(ni,e,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function ni(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Fr(n){this.l=n.ec||null,this.j=n.ob||!1}ht(Fr,Lo);Fr.prototype.g=function(){return new es(this.l,this.j)};Fr.prototype.i=function(n){return function(){return n}}({});function es(n,t){ct.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(es,ct);var zo=0;v=es.prototype;v.open=function(n,t){if(this.readyState!=zo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,yr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=zo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fl(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function fl(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Lr(this):yr(this),this.readyState==3&&fl(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Lr(this))};v.Ya=function(n){this.g&&(this.response=n,Lr(this))};v.ka=function(){this.g&&Lr(this)};function Lr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,yr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function yr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ag=D.JSON.parse;function Z(n){ct.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ml,this.L=this.M=!1}ht(Z,ct);var ml="",Rg=/^https?$/i,Sg=["POST","PUT"];v=Z.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xs.g(),this.C=this.u?su(this.u):su(Xs),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){uu(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=Dc(Sg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_l(this),0<this.B&&((this.L=Pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Fo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){uu(this,s)}};function Pg(n){return cn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof So<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function uu(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,gl(n),ns(n)}function gl(n){n.F||(n.F=!0,pt(n,"complete"),pt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),ns(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),Z.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?pl(this):this.kb())};v.kb=function(){pl(this)};function pl(n){if(n.h&&typeof So<"u"&&(!n.C[1]||Ft(n)!=4||n.da()!=2)){if(n.v&&Ft(n)==4)Fo(n.La,0,n);else if(pt(n,"readystatechange"),Ft(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(il)[1]||null;!i&&D.self&&D.self.location&&(i=D.self.location.protocol.slice(0,-1)),r=!Rg.test(i?i.toLowerCase():"")}e=r}if(e)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var s=2<Ft(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",gl(n)}}finally{ns(n)}}}}function ns(n,t){if(n.g){_l(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||pt(n,"ready");try{e.onreadystatechange=r}catch{}}}function _l(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function Ft(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Ag(t)}};function cu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case ml:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function bg(n){const t={};n=(n.g&&2<=Ft(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(hr(n[r]))continue;var e=Zm(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Km(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yl(n){let t="";return Vo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function $o(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=yl(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):K(n,t,e))}function Un(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Il(n){this.Ga=0,this.j=[],this.l=new Hi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Un("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Un("baseRetryDelayMs",5e3,n),this.hb=Un("retryDelaySeedMs",1e4,n),this.eb=Un("forwardChannelMaxRetries",2,n),this.xa=Un("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new ul(n&&n.concurrentRequestLimit),this.Ja=new Tg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Il.prototype;v.ra=8;v.H=1;function Go(n){if(El(n),n.H==3){var t=n.W++,e=jt(n.I);if(K(e,"SID",n.K),K(e,"RID",t),K(e,"TYPE","terminate"),Br(n,e),t=new Mr(n,n.l,t),t.L=2,t.v=ts(jt(e)),e=!1,D.navigator&&D.navigator.sendBeacon)try{e=D.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&D.Image&&(new Image().src=t.v,e=!0),e||(t.g=bl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Or(t)}Sl(n)}function rs(n){n.g&&(Ko(n),n.g.cancel(),n.g=null)}function El(n){rs(n),n.u&&(D.clearTimeout(n.u),n.u=null),Si(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function is(n){if(!cl(n.i)&&!n.m){n.m=!0;var t=n.Na;fr||$c(),mr||(fr(),mr=!0),Mo.add(t,n),n.C=0}}function Vg(n,t){return ll(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Nr(Et(n.Na,n,t),Rl(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Mr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Mc(s),Oc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Tl(this,i,t),e=jt(this.I),K(e,"RID",n),K(e,"CVER",22),this.F&&K(e,"X-HTTP-Session-Id",this.F),Br(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(yl(s)))+"&"+t:this.o&&$o(e,this.o,s)),Uo(this.i,i),this.bb&&K(e,"TYPE","init"),this.P?(K(e,"$req",t),K(e,"SID","null"),i.aa=!0,Zs(i,e,null)):Zs(i,e,t),this.H=2}}else this.H==3&&(n?lu(this,n):this.j.length==0||cl(this.i)||lu(this))};function lu(n,t){var e;t?e=t.m:e=n.W++;const r=jt(n.I);K(r,"SID",n.K),K(r,"RID",e),K(r,"AID",n.V),Br(n,r),n.o&&n.s&&$o(r,n.o,n.s),e=new Mr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Tl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Uo(n.i,e),Zs(e,r,t)}function Br(n,t){n.na&&Vo(n.na,function(e,r){K(t,r,e)}),n.h&&rl({},function(e,r){K(t,r,e)})}function Tl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Et(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{wg(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function wl(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;fr||$c(),mr||(fr(),mr=!0),Mo.add(t,n),n.A=0}}function jo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Nr(Et(n.Ma,n),Rl(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,vl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Nr(Et(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),rs(this),vl(this))};function Ko(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function vl(n){n.g=new Mr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=jt(n.wa);K(t,"RID","rpc"),K(t,"SID",n.K),K(t,"AID",n.V),K(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(t,"TO",n.qa),K(t,"TYPE","xmlhttp"),Br(n,t),n.o&&n.s&&$o(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=ts(jt(t)),e.s=null,e.S=!0,Zc(e,n)}v.ib=function(){this.v!=null&&(this.v=null,rs(this),jo(this),vt(19))};function Si(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function Al(n,t){var e=null;if(n.g==t){Si(n),Ko(n),n.g=null;var r=2}else if(eo(n.i,t))e=t.F,hl(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Yi(),pt(r,new Hc(r,e)),is(n)}else wl(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Vg(n,t)||r==2&&jo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:De(n,5);break;case 4:De(n,10);break;case 3:De(n,6);break;default:De(n,2)}}}function Rl(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function De(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Et(n.pb,n);e||(e=new xe("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ai(e,"https"),ts(e)),vg(e.toString(),r)}else vt(2);n.H=0,n.h&&n.h.za(t),Sl(n),El(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function Sl(n){if(n.H=0,n.ma=[],n.h){const t=dl(n.i);(t.length!=0||n.j.length!=0)&&(tu(n.ma,t),tu(n.ma,n.j),n.i.i.length=0,Po(n.j),n.j.length=0),n.h.ya()}}function Pl(n,t,e){var r=e instanceof xe?jt(e):new xe(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ri(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xe(null);r&&Ai(s,r),t&&(s.g=t),i&&Ri(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&K(r,e,t),K(r,"VER",n.ra),Br(n,r),r}function bl(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new Z(new Fr({ob:!0})):new Z(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Vl(){}v=Vl.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Pi(){if(cn&&!(10<=Number(zm)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(n,t){return new Vt(n,t)};function Vt(n,t){ct.call(this),this.g=new Il(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!hr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Pn(this)}ht(Vt,ct);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;vt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Pl(n,null,n.Y),is(n)};Vt.prototype.close=function(){Go(this.g)};Vt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=ko(n),n=e);t.j.push(new yg(t.fb++,n)),t.H==3&&is(t)};Vt.prototype.N=function(){this.g.h=null,delete this.j,Go(this.g),delete this.g,Vt.$.N.call(this)};function Cl(n){Bo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ht(Cl,Bo);function Dl(){qo.call(this),this.status=1}ht(Dl,qo);function Pn(n){this.g=n}ht(Pn,Vl);Pn.prototype.Ba=function(){pt(this.g,"a")};Pn.prototype.Aa=function(n){pt(this.g,new Cl(n))};Pn.prototype.za=function(n){pt(this.g,new Dl)};Pn.prototype.ya=function(){pt(this.g,"b")};function Cg(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ht(kt,Cg);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ms(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}kt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Ms(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ms(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Ms(this,r),i=0;break}}this.h=i,this.i+=t};kt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function U(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Dg={};function Qo(n){return-128<=n&&128>n?Bm(n,function(t){return new U([t|0],0>t?-1:0)}):new U([n|0],0>n?-1:0)}function Lt(n){if(isNaN(n)||!isFinite(n))return sn;if(0>n)return mt(Lt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=no;return new U(t,0)}function xl(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return mt(xl(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Lt(Math.pow(t,8)),r=sn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Lt(Math.pow(t,s)),r=r.R(s).add(Lt(o))):(r=r.R(e),r=r.add(Lt(o)))}return r}var no=4294967296,sn=Qo(0),ro=Qo(1),hu=Qo(16777216);v=U.prototype;v.ea=function(){if(Dt(this))return-mt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:no+r)*t,t*=no}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if($t(this))return"0";if(Dt(this))return"-"+mt(this).toString(n);for(var t=Lt(Math.pow(n,6)),e=this,r="";;){var i=Vi(e,t).g;e=bi(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,$t(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function $t(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Dt(n){return n.h==-1}v.X=function(n){return n=bi(this,n),Dt(n)?-1:$t(n)?0:1};function mt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new U(e,~n.h).add(ro)}v.abs=function(){return Dt(this)?mt(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new U(e,e[e.length-1]&-2147483648?-1:0)};function bi(n,t){return n.add(mt(t))}v.R=function(n){if($t(this)||$t(n))return sn;if(Dt(this))return Dt(n)?mt(this).R(mt(n)):mt(mt(this).R(n));if(Dt(n))return mt(this.R(mt(n)));if(0>this.X(hu)&&0>n.X(hu))return Lt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,ri(e,2*r+2*i),e[2*r+2*i+1]+=s*u,ri(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,ri(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,ri(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new U(e,0)};function ri(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function zn(n,t){this.g=n,this.h=t}function Vi(n,t){if($t(t))throw Error("division by zero");if($t(n))return new zn(sn,sn);if(Dt(n))return t=Vi(mt(n),t),new zn(mt(t.g),mt(t.h));if(Dt(t))return t=Vi(n,mt(t)),new zn(mt(t.g),t.h);if(30<n.g.length){if(Dt(n)||Dt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ro,r=t;0>=r.X(n);)e=du(e),r=du(r);var i=We(e,1),s=We(r,1);for(r=We(r,2),e=We(e,2);!$t(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=We(r,1),e=We(e,1)}return t=bi(n,i.R(t)),new zn(i,t)}for(i=sn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Lt(e),o=s.R(t);Dt(o)||0<o.X(n);)e-=r,s=Lt(e),o=s.R(t);$t(s)&&(s=ro),i=i.add(s),n=bi(n,o)}return new zn(i,n)}v.gb=function(n){return Vi(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new U(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new U(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new U(e,this.h^n.h)};function du(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new U(e,n.h)}function We(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new U(i,n.h)}Pi.prototype.createWebChannel=Pi.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;Xi.NO_ERROR=0;Xi.TIMEOUT=8;Xi.HTTP_ERROR=6;Yc.COMPLETE="complete";Xc.EventType=kr;kr.OPEN="a";kr.CLOSE="b";kr.ERROR="c";kr.MESSAGE="d";ct.prototype.listen=ct.prototype.O;Z.prototype.listenOnce=Z.prototype.P;Z.prototype.getLastError=Z.prototype.Sa;Z.prototype.getLastErrorCode=Z.prototype.Ia;Z.prototype.getStatus=Z.prototype.da;Z.prototype.getResponseJson=Z.prototype.Wa;Z.prototype.getResponseText=Z.prototype.ja;Z.prototype.send=Z.prototype.ha;Z.prototype.setWithCredentials=Z.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Lt;U.fromString=xl;var xg=function(){return new Pi},Ng=function(){return Yi()},Os=Xi,kg=Yc,Mg=Ge,fu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Og=Fr,ii=Xc,Fg=Z,Lg=kt,on=U;const mu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Sc("@firebase/firestore");function Ze(){return oe.logLevel}function Bg(n){oe.setLogLevel(n)}function _(n,...t){if(oe.logLevel<=O.DEBUG){const e=t.map(Wo);oe.debug(`Firestore (${bn}): ${n}`,...e)}}function et(n,...t){if(oe.logLevel<=O.ERROR){const e=t.map(Wo);oe.error(`Firestore (${bn}): ${n}`,...e)}}function bt(n,...t){if(oe.logLevel<=O.WARN){const e=t.map(Wo);oe.warn(`Firestore (${bn}): ${n}`,...e)}}function Wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+n;throw et(t),new Error(t)}function R(n,t){n||A()}function qg(n,t){n||A()}function T(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(at.UNAUTHENTICATED))}shutdown(){}}class Ug{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zg{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new Nl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new at(t)}}class $g{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new $g(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ml{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(R(typeof e.token=="string"),this.R=e.token,new Ml(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Kg{getToken(){return Promise.resolve(new Ml(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Qg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function C(n,t){return n<t?-1:n>t?1:0}function ln(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Ol(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Y(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new Y(0,0))}static max(){return new S(new Y(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ir.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ir?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends Ir{construct(t,e,r){return new F(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new F(e)}static emptyPath(){return new F([])}}const Wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Ir{construct(t,e,r){return new W(t,e,r)}static isValidIdentifier(t){return Wg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(F.fromString(t))}static fromName(t){return new w(F.fromString(t).popFirst(5))}static empty(){return new w(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new F(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function io(n){return n.fields.find(t=>t.kind===2)}function Re(n){return n.fields.filter(t=>t.kind!==2)}function Hg(n,t){let e=C(n.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let r=0;r<Math.min(n.fields.length,t.fields.length);++r)if(e=Yg(n.fields[r],t.fields[r]),e!==0)return e;return C(n.fields.length,t.fields.length)}hn.UNKNOWN_ID=-1;class Ne{constructor(t,e){this.fieldPath=t,this.kind=e}}function Yg(n,t){const e=W.comparator(n.fieldPath,t.fieldPath);return e!==0?e:C(n.kind,t.kind)}class dn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new dn(0,Ct.min())}}function Fl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new Ct(i,w.empty(),t)}function Ll(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ct(S.min(),w.empty(),-1)}static max(){return new Ct(S.max(),w.empty(),-1)}}function Yo(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=w.comparator(n.documentKey,t.documentKey),e!==0?e:C(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ql{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Bl)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof f?e:f.resolve(e)}catch(e){return f.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):f.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):f.reject(e)}static resolve(t){return new f((e,r)=>{e(t)})}static reject(t){return new f((e,r)=>{r(t)})}static waitFor(t){return new f((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=f.resolve(!1);for(const r of t)e=e.next(i=>i?f.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new f((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new st,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new er(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Xo(r.target.error);this.V.reject(new er(t,i))}}static open(t,e,r,i){try{return new ss(e,t.transaction(i,r))}catch(s){throw new er(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Jg(e)}}class xt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,xt.S(ar())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Se(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Ac())return!1;if(xt.C())return!0;const t=ar(),e=xt.S(t),r=0<e&&e<10,i=xt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new er(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new er(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ss.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Xg{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Se(this.k.delete())}}class er extends p{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function _e(n){return n.name==="IndexedDbTransactionError"}class Jg{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Se(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Se(this.store.add(t))}get(t){return Se(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Se(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Se(this.store.count())}W(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new f((r,i)=>{e.onerror=s=>{const o=Xo(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new f((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Xg(a),c=e(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>f.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Se(n){return new f((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Xo(r.target.error);e(i)}})}let gu=!1;function Xo(n){const t=xt.S(ar());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gu||(gu=!0,setTimeout(()=>{throw r},0)),r}}return n}class Zg{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(t){_("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(e){_e(e)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await pe(e)}await this.ee(6e4)})}}class tp{constructor(t,e){this.localStore=t,this.persistence=e}async te(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.ne(e,t))}ne(t,e){const r=new Set;let i=e,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.re(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}re(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}ie(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=Ll(s);Yo(o,r)>0&&(r=o)}),new Ct(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Rt._e=-1;function qr(n){return n==null}function Er(n){return n===0&&1/n==-1/0}function Ul(n){return typeof n=="number"&&Number.isInteger(n)&&!Er(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=pu(t)),t=ep(n.get(e),t);return pu(t)}function ep(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function pu(n){return n+""}function Bt(n){const t=n.length;if(R(t>=2),t===2)return R(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,t){return[n,wt(t)]}function zl(n,t,e){return[n,wt(t),e]}const np={},rp=["prefixPath","collectionGroup","readTime","documentId"],ip=["prefixPath","collectionGroup","documentId"],sp=["collectionGroup","readTime","prefixPath","documentId"],op=["canonicalId","targetId"],ap=["targetId","path"],up=["path","targetId"],cp=["collectionId","parent"],lp=["indexId","uid"],hp=["uid","sequenceNumber"],dp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fp=["indexId","uid","orderedDocumentKey"],mp=["userId","collectionPath","documentId"],gp=["userId","collectionPath","largestBatchId"],pp=["userId","collectionGroup","largestBatchId"],$l=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_p=[...$l,"documentOverlays"],Gl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jl=Gl,yp=[...jl,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends ql{constructor(t,e){super(),this.ae=t,this.currentSequenceNumber=e}}function dt(n,t){const e=T(n);return xt.M(e.ae,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Kl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new G(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new G(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new si(this.root,t,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new si(this.root,t,this.comparator,!0)}}class si{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ft(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.comparator=t,this.data=new G(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(t){return new Iu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof z)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new z(this.comparator);return e.data=t,e}}class Iu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function He(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new St([])}unionWith(t){let e=new z(W.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ln(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ql("Invalid base64 string: "+s):s}}(t);return new it(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new it(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Ep=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(R(!!n),typeof n=="string"){let t=0;const e=Ep.exec(n);if(R(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:X(n.seconds),nanos:X(n.nanos)}}function X(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function as(n){const t=n.mapValue.fields.__previous_value__;return os(t)?as(t):t}function Tr(n){const t=ae(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,e,r,i,s,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ue{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ue&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},di={nullValue:"NULL_VALUE"};function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?os(n)?4:Wl(n)?9007199254740991:10:A()}function zt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tr(n).isEqual(Tr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ae(i.timestampValue),a=ae(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Kt(i.bytesValue).isEqual(Kt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return X(i.geoPointValue.latitude)===X(s.geoPointValue.latitude)&&X(i.geoPointValue.longitude)===X(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return X(i.integerValue)===X(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=X(i.doubleValue),a=X(s.doubleValue);return o===a?Er(o)===Er(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return ln(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(yu(o)!==yu(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!zt(o[u],a[u])))return!1;return!0}(n,t);default:return A()}}function wr(n,t){return(n.values||[]).find(e=>zt(e,t))!==void 0}function le(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return C(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=X(s.integerValue||s.doubleValue),u=X(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Eu(n.timestampValue,t.timestampValue);case 4:return Eu(Tr(n),Tr(t));case 5:return C(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Kt(s),u=Kt(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=C(a[c],u[c]);if(l!==0)return l}return C(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(X(s.latitude),X(o.latitude));return a!==0?a:C(X(s.longitude),X(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=le(a[c],u[c]);if(l)return l}return C(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ne.mapValue&&o===ne.mapValue)return 0;if(s===ne.mapValue)return 1;if(o===ne.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=C(u[h],l[h]);if(d!==0)return d;const m=le(a[u[h]],c[l[h]]);if(m!==0)return m}return C(u.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function Eu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return C(n,t);const e=ae(n),r=ae(t),i=C(e.seconds,r.seconds);return i!==0?i:C(e.nanos,r.nanos)}function fn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Kt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return w.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=oo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${oo(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function fi(n){switch(ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=as(n);return t?16+fi(t):16;case 5:return 2*n.stringValue.length;case 6:return Kt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fi(s),0)}(n.arrayValue);case 10:return function(r){let i=0;return ye(r.fields,(s,o)=>{i+=s.length+fi(o)}),i}(n.mapValue);default:throw A()}}function Me(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ao(n){return!!n&&"integerValue"in n}function vr(n){return!!n&&"arrayValue"in n}function Tu(n){return!!n&&"nullValue"in n}function wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mi(n){return!!n&&"mapValue"in n}function nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ye(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Wl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function wp(n){return"nullValue"in n?di:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Me(ue.empty(),w.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function vp(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Me(ue.empty(),w.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ne:A()}function vu(n,t){const e=le(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function Au(n,t){const e=le(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!mi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nr(e)}setAll(t){let e=W.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=nr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());mi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];mi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ye(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new gt(nr(this.value))}}function Hl(n){const t=[];return ye(n.fields,(e,r)=>{const i=new W([e]);if(mi(r)){const s=Hl(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,S.min(),S.min(),S.min(),gt.empty(),0)}static newFoundDocument(t,e,r,i){return new Q(t,1,e,S.min(),r,i,0)}static newNoDocument(t,e){return new Q(t,2,e,S.min(),S.min(),gt.empty(),0)}static newUnknownDocument(t,e){return new Q(t,3,e,S.min(),S.min(),gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.position=t,this.inclusive=e}}function Ru(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),e.key):r=le(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Su(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ap(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{}class k extends Yl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Rp(t,e,r):e==="array-contains"?new bp(t,r):e==="in"?new nh(t,r):e==="not-in"?new Vp(t,r):e==="array-contains-any"?new Cp(t,r):new k(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sp(t,r):new Pp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(le(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class q extends Yl{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new q(t,e)}matches(t){return mn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function mn(n){return n.op==="and"}function uo(n){return n.op==="or"}function Jo(n){return Xl(n)&&mn(n)}function Xl(n){for(const t of n.filters)if(t instanceof q)return!1;return!0}function co(n){if(n instanceof k)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(Jo(n))return n.filters.map(t=>co(t)).join(",");{const t=n.filters.map(e=>co(e)).join(",");return`${n.op}(${t})`}}function Jl(n,t){return n instanceof k?function(r,i){return i instanceof k&&r.op===i.op&&r.field.isEqual(i.field)&&zt(r.value,i.value)}(n,t):n instanceof q?function(r,i){return i instanceof q&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Jl(o,i.filters[a]),!0):!1}(n,t):void A()}function Zl(n,t){const e=n.filters.concat(t);return q.create(e,n.op)}function th(n){return n instanceof k?function(e){return`${e.field.canonicalString()} ${e.op} ${fn(e.value)}`}(n):n instanceof q?function(e){return e.op.toString()+" {"+e.getFilters().map(th).join(" ,")+"}"}(n):"Filter"}class Rp extends k{constructor(t,e,r){super(t,e,r),this.key=w.fromName(r.referenceValue)}matches(t){const e=w.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sp extends k{constructor(t,e){super(t,"in",e),this.keys=eh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pp extends k{constructor(t,e){super(t,"not-in",e),this.keys=eh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>w.fromName(r.referenceValue))}class bp extends k{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vr(e)&&wr(e.arrayValue,this.value)}}class nh extends k{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wr(this.value.arrayValue,e)}}class Vp extends k{constructor(t,e){super(t,"not-in",e)}matches(t){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wr(this.value.arrayValue,e)}}class Cp extends k{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function lo(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Dp(n,t,e,r,i,s,o)}function Oe(n){const t=T(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>co(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>fn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>fn(r)).join(",")),t.ce=e}return t.ce}function Ur(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ap(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Jl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Su(n.startAt,t.startAt)&&Su(n.endAt,t.endAt)}function Ci(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Di(n,t){return n.filters.filter(e=>e instanceof k&&e.field.isEqual(t))}function Pu(n,t,e){let r=di,i=!0;for(const s of Di(n,t)){let o=di,a=!0;switch(s.op){case"<":case"<=":o=wp(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=di}vu({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];vu({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function bu(n,t,e){let r=ne,i=!0;for(const s of Di(n,t)){let o=ne,a=!0;switch(s.op){case">=":case">":o=vp(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ne}Au({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];Au({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function rh(n,t,e,r,i,s,o,a){return new Qt(n,t,e,r,i,s,o,a)}function Vn(n){return new Qt(n)}function Vu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zo(n){return n.collectionGroup!==null}function an(n){const t=T(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new z(W.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ar(s,r))}),e.has(W.keyField().canonicalString())||t.le.push(new Ar(W.keyField(),r))}return t.le}function At(n){const t=T(n);return t.he||(t.he=ih(t,an(n))),t.he}function ih(n,t){if(n.limitType==="F")return lo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ar(i.field,s)});const e=n.endAt?new he(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new he(n.startAt.position,n.startAt.inclusive):null;return lo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ho(n,t){const e=n.filters.concat([t]);return new Qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function xi(n,t,e){return new Qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function zr(n,t){return Ur(At(n),At(t))&&n.limitType===t.limitType}function sh(n){return`${Oe(At(n))}|lt:${n.limitType}`}function tn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>th(i)).join(", ")}]`),qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>fn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>fn(i)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function $r(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of an(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ru(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,an(r),i)||r.endAt&&!function(o,a,u){const c=Ru(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,an(r),i))}(n,t)}function oh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ah(n){return(t,e)=>{let r=!1;for(const i of an(n)){const s=xp(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xp(n,t,e){const r=n.field.isKeyField()?w.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?le(u,c):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ye(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new G(w.comparator);function Pt(){return Np}const uh=new G(w.comparator);function Yn(...n){let t=uh;for(const e of n)t=t.insert(e.key,e);return t}function ch(n){let t=uh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function qt(){return rr()}function lh(){return rr()}function rr(){return new Wt(n=>n.toString(),(n,t)=>n.isEqual(t))}const kp=new G(w.comparator),Mp=new z(w.comparator);function x(...n){let t=Mp;for(const e of n)t=t.add(e);return t}const Op=new z(C);function ta(){return Op}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Er(t)?"-0":t}}function dh(n){return{integerValue:""+n}}function fh(n,t){return Ul(t)?dh(t):hh(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function Fp(n,t,e){return n instanceof gn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&os(s)&&(s=as(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Fe?gh(n,t):n instanceof Le?ph(n,t):function(i,s){const o=mh(i,s),a=Cu(o)+Cu(i.Ie);return ao(o)&&ao(i.Ie)?dh(a):hh(i.serializer,a)}(n,t)}function Lp(n,t,e){return n instanceof Fe?gh(n,t):n instanceof Le?ph(n,t):e}function mh(n,t){return n instanceof pn?function(r){return ao(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class gn extends us{}class Fe extends us{constructor(t){super(),this.elements=t}}function gh(n,t){const e=_h(t);for(const r of n.elements)e.some(i=>zt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Le extends us{constructor(t){super(),this.elements=t}}function ph(n,t){let e=_h(t);for(const r of n.elements)e=e.filter(i=>!zt(i,r));return{arrayValue:{values:e}}}class pn extends us{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Cu(n){return X(n.integerValue||n.doubleValue)}function _h(n){return vr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.field=t,this.transform=e}}function Bp(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Fe&&i instanceof Fe||r instanceof Le&&i instanceof Le?ln(r.elements,i.elements,zt):r instanceof pn&&i instanceof pn?zt(r.Ie,i.Ie):r instanceof gn&&i instanceof gn}(n.transform,t.transform)}class qp{constructor(t,e){this.version=t,this.transformResults=e}}class H{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new H}static exists(t){return new H(void 0,t)}static updateTime(t){return new H(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class cs{}function yh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Dn(n.key,H.none()):new Cn(n.key,n.data,H.none());{const e=n.data,r=gt.empty();let i=new z(W.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ht(n.key,r,new St(i.toArray()),H.none())}}function Up(n,t,e){n instanceof Cn?function(i,s,o){const a=i.value.clone(),u=xu(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ht?function(i,s,o){if(!gi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ih(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function ir(n,t,e,r){return n instanceof Cn?function(s,o,a,u){if(!gi(s.precondition,o))return a;const c=s.value.clone(),l=Nu(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ht?function(s,o,a,u){if(!gi(s.precondition,o))return a;const c=Nu(s.fieldTransforms,u,o),l=o.data;return l.setAll(Ih(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return gi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function zp(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=mh(r.transform,i||null);s!=null&&(e===null&&(e=gt.empty()),e.set(r.field,s))}return e||null}function Du(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ln(r,i,(s,o)=>Bp(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cn extends cs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends cs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ih(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function xu(n,t,e){const r=new Map;R(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Lp(o,a,e[i]))}return r}function Nu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Fp(s,o,t))}return r}class Dn extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ea extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Up(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ir(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ir(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=lh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=yh(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),x())}isEqual(t){return this.batchId===t.batchId&&ln(this.mutations,t.mutations,(e,r)=>Du(e,r))&&ln(this.baseMutations,t.baseMutations,(e,r)=>Du(e,r))}}class ra{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){R(t.mutations.length===r.length);let i=function(){return kp}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ra(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e,r){this.alias=t,this.aggregateType=e,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,M;function Eh(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Th(n){if(n===void 0)return et("GRPC error has no .code"),g.UNKNOWN;switch(n){case rt.OK:return g.OK;case rt.CANCELLED:return g.CANCELLED;case rt.UNKNOWN:return g.UNKNOWN;case rt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case rt.INTERNAL:return g.INTERNAL;case rt.UNAVAILABLE:return g.UNAVAILABLE;case rt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case rt.NOT_FOUND:return g.NOT_FOUND;case rt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case rt.ABORTED:return g.ABORTED;case rt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case rt.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(M=rt||(rt={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new on([4294967295,4294967295],0);function ku(n){const t=wh().encode(n),e=new Lg;return e.update(t),new Uint8Array(e.digest())}function Mu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new on([e,r],0),new on([i,s],0)]}class sa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Xn(`Invalid padding: ${e}`);if(r<0)throw new Xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Xn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Xn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=on.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(on.fromNumber(r)));return i.compare(jp)===1&&(i=new on([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=ku(t),[r,i]=Mu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new sa(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=ku(t),[r,i]=Mu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Kr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new jr(S.min(),i,new G(C),Pt(),x())}}class Kr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Kr(r,e,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class vh{constructor(t,e){this.targetId=t,this.fe=e}}class Ah{constructor(t,e,r=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ou{constructor(){this.ge=0,this.pe=Lu(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=x(),e=x(),r=x();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Kr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Lu()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Kp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Pt(),this.Qe=Fu(),this.Ke=new G(C)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Ci(s))if(r===0){const o=new w(s.path);this.We(e,o,Q.newNoDocument(o,S.min()))}else R(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}Ni==null||Ni.tt(function(l,h,d,m,E){var y,I,b,V,P,L;const j={localCacheCount:l,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},B=h.unchangedNames;return B&&(j.bloomFilter={applied:E===0,hashCount:(y=B==null?void 0:B.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(V=(b=(I=B==null?void 0:B.bits)===null||I===void 0?void 0:I.bitmap)===null||b===void 0?void 0:b.length)!==null&&V!==void 0?V:0,padding:(L=(P=B==null?void 0:B.bits)===null||P===void 0?void 0:P.padding)!==null&&L!==void 0?L:0,mightContain:_t=>{var Mt;return(Mt=m==null?void 0:m.mightContain(_t))!==null&&Mt!==void 0&&Mt}}),j}(o,t.fe,this.Le.nt(),a,u))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Kt(r).toUint8Array()}catch(u){if(u instanceof Ql)return bt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new sa(o,i,s)}catch(u){return bt(u instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ci(a.target)){const u=new w(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Q.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=x();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new jr(t,e,this.Ke,this.qe,r);return this.qe=Pt(),this.Qe=Fu(),this.Ke=new G(C),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Ou,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new z(C),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ou),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Fu(){return new G(w.comparator)}function Lu(){return new G(w.comparator)}const Qp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hp=(()=>({and:"AND",or:"OR"}))();class Yp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fo(n,t){return n.useProto3Json||qr(t)?t:{value:t}}function _n(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Xp(n,t){return _n(n,t.toTimestamp())}function nt(n){return R(!!n),S.fromTimestamp(function(e){const r=ae(e);return new Y(r.seconds,r.nanos)}(n))}function oa(n,t){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Sh(n){const t=F.fromString(n);return R(kh(t)),t}function Rr(n,t){return oa(n.databaseId,t.path)}function Ut(n,t){const e=Sh(t);if(e.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new w(bh(e))}function mo(n,t){return oa(n.databaseId,t)}function Ph(n){const t=Sh(n);return t.length===4?F.emptyPath():bh(t)}function Sr(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bh(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bu(n,t,e){return{name:Rr(n,t),fields:e.value.mapValue.fields}}function Vh(n,t,e){const r=Ut(n,t.name),i=nt(t.updateTime),s=t.createTime?nt(t.createTime):S.min(),o=new gt({mapValue:{fields:t.fields}}),a=Q.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function Jp(n,t){return"found"in t?function(r,i){R(!!i.found),i.found.name,i.found.updateTime;const s=Ut(r,i.found.name),o=nt(i.found.updateTime),a=i.found.createTime?nt(i.found.createTime):S.min(),u=new gt({mapValue:{fields:i.found.fields}});return Q.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){R(!!i.missing),R(!!i.readTime);const s=Ut(r,i.missing),o=nt(i.readTime);return Q.newNoDocument(s,o)}(n,t):A()}function Zp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(R(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:Th(c.code);return new p(l,c.message||"")}(o);e=new Ah(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ut(n,r.document.name),s=nt(r.document.updateTime),o=r.document.createTime?nt(r.document.createTime):S.min(),a=new gt({mapValue:{fields:r.document.fields}}),u=Q.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];e=new pi(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ut(n,r.document),s=r.readTime?nt(r.readTime):S.min(),o=Q.newNoDocument(i,s),a=r.removedTargetIds||[];e=new pi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ut(n,r.document),s=r.removedTargetIds||[];e=new pi([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Gp(i,s),a=r.targetId;e=new vh(a,o)}}return e}function Pr(n,t){let e;if(t instanceof Cn)e={update:Bu(n,t.key,t.value)};else if(t instanceof Dn)e={delete:Rr(n,t.key)};else if(t instanceof Ht)e={update:Bu(n,t.key,t.data),updateMask:s_(t.fieldMask)};else{if(!(t instanceof ea))return A();e={verify:Rr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fe)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Le)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xp(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function go(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?H.updateTime(nt(s.updateTime)):s.exists!==void 0?H.exists(s.exists):H.none()}(t.currentDocument):H.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),u=new gn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new Fe(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new Le(l)}else"increment"in a?u=new pn(o,a.increment):A();const c=W.fromServerFormat(a.fieldPath);return new Gr(c,u)}(n,i)):[];if(t.update){t.update.name;const i=Ut(n,t.update.name),s=new gt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const c=u.fieldPaths||[];return new St(c.map(l=>W.fromServerFormat(l)))}(t.updateMask);return new Ht(i,s,o,e,r)}return new Cn(i,s,e,r)}if(t.delete){const i=Ut(n,t.delete);return new Dn(i,e)}if(t.verify){const i=Ut(n,t.verify);return new ea(i,e)}return A()}function t_(n,t){return n&&n.length>0?(R(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?nt(i.updateTime):nt(s);return o.isEqual(S.min())&&(o=nt(s)),new qp(o,i.transformResults||[])}(e,t))):[]}function Ch(n,t){return{documents:[mo(n,t.path)]}}function aa(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=mo(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=mo(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Nh(q.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Zt(h.field),direction:n_(h.dir)}}(c))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=fo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function Dh(n){let t=Ph(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){R(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=xh(h);return d instanceof q&&Jo(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new Ar(en(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,qr(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,m=h.values||[];return new he(m,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,m=h.values||[];return new he(m,d)}(e.endAt)),rh(t,i,o,s,a,"F",u,c)}function e_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=en(e.unaryFilter.field);return k.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=en(e.unaryFilter.field);return k.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=en(e.unaryFilter.field);return k.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=en(e.unaryFilter.field);return k.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return k.create(en(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return q.create(e.compositeFilter.filters.map(r=>xh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function n_(n){return Qp[n]}function r_(n){return Wp[n]}function i_(n){return Hp[n]}function Zt(n){return{fieldPath:n.canonicalString()}}function en(n){return W.fromServerFormat(n.fieldPath)}function Nh(n){return n instanceof k?function(e){if(e.op==="=="){if(wu(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(Tu(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wu(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(Tu(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:r_(e.op),value:e.value}}}(n):n instanceof q?function(e){const r=e.getFilters().map(i=>Nh(i));return r.length===1?r[0]:{compositeFilter:{op:i_(e.op),filters:r}}}(n):A()}function s_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,r,i,s=S.min(),o=S.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t){this.ut=t}}function o_(n,t){let e;if(t.document)e=Vh(n.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=w.fromSegments(t.noDocument.path),i=qe(t.noDocument.readTime);e=Q.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=w.fromSegments(t.unknownDocument.path),i=qe(t.unknownDocument.version);e=Q.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new Y(i[0],i[1]);return S.fromTimestamp(s)}(t.readTime)),e}function qu(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ki(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:Rr(s,o.key),fields:o.data.value.mapValue.fields,updateTime:_n(s,o.version.toTimestamp()),createTime:_n(s,o.createTime.toTimestamp())}}(n.ut,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:Be(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:Be(t.version)}}return r}function ki(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function Be(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function qe(n){const t=new Y(n.seconds,n.nanoseconds);return S.fromTimestamp(t)}function Pe(n,t){const e=(t.baseMutations||[]).map(s=>go(n.ut,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>go(n.ut,s)),i=Y.fromMillis(t.localWriteTimeMs);return new na(t.batchId,i,e,r)}function Jn(n){const t=qe(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?qe(n.lastLimboFreeSnapshotVersion):S.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return R(s.documents.length===1),At(Vn(Ph(s.documents[0])))}(n.query):function(s){return At(Dh(s))}(n.query),new Gt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,it.fromBase64String(n.resumeToken))}function Oh(n,t){const e=Be(t.snapshotVersion),r=Be(t.lastLimboFreeSnapshotVersion);let i;i=Ci(t.target)?Ch(n.ut,t.target):aa(n.ut,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Oe(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ua(n){const t=Dh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xi(t,t.limit,"L"):t}function Fs(n,t){return new ia(t.largestBatchId,go(n.ut,t.overlayMutation))}function Uu(n,t){const e=t.path.lastSegment();return[n,wt(t.path.popLast()),e]}function zu(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:Be(r.readTime),documentKey:wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{getBundleMetadata(t,e){return $u(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:qe(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return $u(t).put(function(i){return{bundleId:i.id,createTime:Be(nt(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Gu(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:ua(s.bundledQuery),readTime:qe(s.readTime)}}(r)})}saveNamedQuery(t,e){return Gu(t).put(function(i){return{name:i.name,readTime:Be(nt(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function $u(n){return dt(n,"bundles")}function Gu(n){return dt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.serializer=t,this.userId=e}static ct(t,e){const r=e.uid||"";return new ls(t,r)}getOverlay(t,e){return $n(t).get(Uu(this.userId,e)).next(r=>r?Fs(this.serializer,r):null)}getOverlays(t,e){const r=qt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new ia(e,o);i.push(this.lt(t,a))}),f.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(wt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push($n(t).H("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(t,e,r){const i=qt(),s=wt(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return $n(t).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Fs(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=qt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return $n(t).Y({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=Fs(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(t,e){return $n(t).put(function(i,s,o){const[a,u,c]=Uu(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Pr(i.ut,o.mutation)}}(this.serializer,this.userId,e))}}function $n(n){return dt(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(X(t.integerValue));else if("doubleValue"in t){const r=X(t.doubleValue);isNaN(r)?this.Tt(e,13):(this.Tt(e,15),Er(r)?e.Et(0):e.Et(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Tt(e,20),typeof r=="string"?e.dt(r):(e.dt(`${r.seconds||""}`),e.Et(r.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(Kt(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Tt(e,45),e.Et(r.latitude||0),e.Et(r.longitude||0)}else"mapValue"in t?Wl(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):A()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const r=t.fields||{};this.Tt(e,55);for(const i of Object.keys(r))this.At(i,e),this.Pt(r[i],e)}yt(t,e){const r=t.values||[];this.Tt(e,50);for(const i of r)this.Pt(i,e)}ft(t,e){this.Tt(e,37),w.fromName(t).path.forEach(r=>{this.Tt(e,60),this.wt(r,e)})}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}be.St=new be;function u_(n){if(n===0)return 8;let t=0;return!(n>>4)&&(t+=4,n<<=4),!(n>>6)&&(t+=2,n<<=2),!(n>>7)&&(t+=1),t}function ju(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=u_(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class c_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Dt(r.value),r=e.next();this.Ct()}vt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Ft(r.value),r=e.next();this.Mt()}xt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=e.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(t){const e=this.Bt(t),r=ju(e);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}kt(t){const e=this.Bt(t),r=ju(e);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(t){this.Lt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Ut(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}Dt(t){const e=255&t;e===0?(this.Qt(0),this.Qt(255)):e===255?(this.Qt(255),this.Qt(0)):this.Qt(e)}Ft(t){const e=255&t;e===0?(this.$t(0),this.$t(255)):e===255?(this.$t(255),this.$t(0)):this.$t(t)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(t){this.Lt(1),this.buffer[this.position++]=t}$t(t){this.Lt(1),this.buffer[this.position++]=~t}Lt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class l_{constructor(t){this.Wt=t}Vt(t){this.Wt.bt(t)}dt(t){this.Wt.xt(t)}Et(t){this.Wt.Nt(t)}It(){this.Wt.qt()}}class h_{constructor(t){this.Wt=t}Vt(t){this.Wt.vt(t)}dt(t){this.Wt.Ot(t)}Et(t){this.Wt.kt(t)}It(){this.Wt.Kt()}}class Gn{constructor(){this.Wt=new c_,this.Gt=new l_(this.Wt),this.zt=new h_(this.Wt)}seed(t){this.Wt.seed(t)}jt(t){return t===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Ht(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new Ve(this.indexId,this.documentKey,this.arrayValue,r)}}function Xt(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=Ku(n.arrayValue,t.arrayValue),e!==0?e:(e=Ku(n.directionalValue,t.directionalValue),e!==0?e:w.comparator(n.documentKey,t.documentKey)))}function Ku(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.Jt=new z((e,r)=>W.comparator(e.field,r.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(t){if(R(t.collectionGroup===this.collectionId),this.Xt)return!1;const e=io(t);if(e!==void 0&&!this.tn(e))return!1;const r=Re(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.nn(a,u)||!this.rn(this.Yt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let t=new z(W.comparator);const e=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")e.push(new Ne(r.field,2));else{if(t.has(r.field))continue;t=t.add(r.field),e.push(new Ne(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||t.has(r.field)||(t=t.add(r.field),e.push(new Ne(r.field,r.dir==="asc"?0:1)));return new hn(hn.UNKNOWN_ID,this.collectionId,e,dn.empty())}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){var t,e;if(R(n instanceof k||n instanceof q),n instanceof k){if(n instanceof nh){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>k.create(n.field,"==",s)))||[];return q.create(i,"or")}return n}const r=n.filters.map(i=>Fh(i));return q.create(r,n.op)}function d_(n){if(n.getFilters().length===0)return[];const t=yo(Fh(n));return R(Lh(t)),po(t)||_o(t)?[t]:t.getFilters()}function po(n){return n instanceof k}function _o(n){return n instanceof q&&Jo(n)}function Lh(n){return po(n)||_o(n)||function(e){if(e instanceof q&&uo(e)){for(const r of e.getFilters())if(!po(r)&&!_o(r))return!1;return!0}return!1}(n)}function yo(n){if(R(n instanceof k||n instanceof q),n instanceof k)return n;if(n.filters.length===1)return yo(n.filters[0]);const t=n.filters.map(r=>yo(r));let e=q.create(t,n.op);return e=Mi(e),Lh(e)?e:(R(e instanceof q),R(mn(e)),R(e.filters.length>1),e.filters.reduce((r,i)=>ca(r,i)))}function ca(n,t){let e;return R(n instanceof k||n instanceof q),R(t instanceof k||t instanceof q),e=n instanceof k?t instanceof k?function(i,s){return q.create([i,s],"and")}(n,t):Wu(n,t):t instanceof k?Wu(t,n):function(i,s){if(R(i.filters.length>0&&s.filters.length>0),mn(i)&&mn(s))return Zl(i,s.getFilters());const o=uo(i)?i:s,a=uo(i)?s:i,u=o.filters.map(c=>ca(c,a));return q.create(u,"or")}(n,t),Mi(e)}function Wu(n,t){if(mn(t))return Zl(t,n.getFilters());{const e=t.filters.map(r=>ca(n,r));return q.create(e,"or")}}function Mi(n){if(R(n instanceof k||n instanceof q),n instanceof k)return n;const t=n.getFilters();if(t.length===1)return Mi(t[0]);if(Xl(n))return n;const e=t.map(i=>Mi(i)),r=[];return e.forEach(i=>{i instanceof k?r.push(i):i instanceof q&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:q.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.on=new la}addToCollectionParentIndex(t,e){return this.on.add(e),f.resolve()}getCollectionParents(t,e){return f.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return f.resolve()}deleteFieldIndex(t,e){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,e){return f.resolve()}getDocumentsMatchingTarget(t,e){return f.resolve(null)}getIndexType(t,e){return f.resolve(0)}getFieldIndexes(t,e){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,e){return f.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,e){return f.resolve(Ct.min())}updateCollectionGroup(t,e,r){return f.resolve()}updateIndexEntries(t,e){return f.resolve()}}class la{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new z(F.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new z(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Uint8Array(0);class m_{constructor(t,e){this.user=t,this.databaseId=e,this._n=new la,this.an=new Wt(r=>Oe(r),(r,i)=>Ur(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this._n.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this._n.add(e)});const s={collectionId:r,parent:wt(i)};return Hu(t).put(s)}return f.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Ol(e),""],!1,!0);return Hu(t).W(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(Bt(o.parent))}return r})}addFieldIndex(t,e){const r=jn(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=Xe(t);return s.next(a=>{o.put(zu(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=jn(t),i=Xe(t),s=Ye(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=jn(t),r=Ye(t),i=Xe(t);return e.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(t,e){return f.forEach(this.un(e),r=>this.getIndexType(t,r).next(i=>{if(i===0||i===1){const s=new Qu(r).sn();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const r=Ye(t);let i=!0;const s=new Map;return f.forEach(this.un(e),o=>this.cn(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return f.forEach(s,(u,c)=>{_("IndexedDbIndexManager",`Using index ${function(P){return`id=${P.indexId}|cg=${P.collectionGroup}|f=${P.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(u)} to execute ${Oe(e)}`);const l=function(P,L){const j=io(L);if(j===void 0)return null;for(const B of Di(P,j.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,u),h=function(P,L){const j=new Map;for(const B of Re(L))for(const _t of Di(P,B.fieldPath))switch(_t.op){case"==":case"in":j.set(B.fieldPath.canonicalString(),_t.value);break;case"not-in":case"!=":return j.set(B.fieldPath.canonicalString(),_t.value),Array.from(j.values())}return null}(c,u),d=function(P,L){const j=[];let B=!0;for(const _t of Re(L)){const Mt=_t.kind===0?Pu(P,_t.fieldPath,P.startAt):bu(P,_t.fieldPath,P.startAt);j.push(Mt.value),B&&(B=Mt.inclusive)}return new he(j,B)}(c,u),m=function(P,L){const j=[];let B=!0;for(const _t of Re(L)){const Mt=_t.kind===0?bu(P,_t.fieldPath,P.endAt):Pu(P,_t.fieldPath,P.endAt);j.push(Mt.value),B&&(B=Mt.inclusive)}return new he(j,B)}(c,u),E=this.ln(u,c,d),y=this.ln(u,c,m),I=this.hn(u,c,h),b=this.Pn(u.indexId,l,E,d.inclusive,y,m.inclusive,I);return f.forEach(b,V=>r.j(V,e.limit).next(P=>{P.forEach(L=>{const j=w.fromSegments(L.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return f.resolve(null)})}un(t){let e=this.an.get(t);return e||(t.filters.length===0?e=[t]:e=d_(q.create(t.filters,"and")).map(r=>lo(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this.an.set(t,e),e)}Pn(t,e,r,i,s,o,a){const u=(e!=null?e.length:1)*Math.max(r.length,s.length),c=u/(e!=null?e.length:1),l=[];for(let h=0;h<u;++h){const d=e?this.In(e[h/c]):oi,m=this.Tn(t,d,r[h%c],i),E=this.En(t,d,s[h%c],o),y=a.map(I=>this.Tn(t,d,I,!0));l.push(...this.createRange(m,E,y))}return l}Tn(t,e,r,i){const s=new Ve(t,w.empty(),e,r);return i?s:s.Ht()}En(t,e,r,i){const s=new Ve(t,w.empty(),e,r);return i?s.Ht():s}cn(t,e){const r=new Qu(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.un(e);return f.forEach(i,s=>this.cn(t,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new z(W.comparator),l=!1;for(const h of u.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:c=c.add(d.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}dn(t,e){const r=new Gn;for(const i of Re(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);be.St.ht(s,o)}return r.Ut()}In(t){const e=new Gn;return be.St.ht(t,e.jt(0)),e.Ut()}An(t,e){const r=new Gn;return be.St.ht(Me(this.databaseId,e),r.jt(function(s){const o=Re(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Ut()}hn(t,e,r){if(r===null)return[];let i=[];i.push(new Gn);let s=0;for(const o of Re(t)){const a=r[s++];for(const u of i)if(this.Rn(e,o.fieldPath)&&vr(a))i=this.Vn(i,o,a);else{const c=u.jt(o.kind);be.St.ht(a,c)}}return this.mn(i)}ln(t,e,r){return this.hn(t,e,r.position)}mn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Ut();return e}Vn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Gn;u.seed(a.Ut()),be.St.ht(o,u.jt(e.kind)),s.push(u)}return s}Rn(t,e){return!!t.filters.find(r=>r instanceof k&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=jn(t),i=Xe(t);return(e?r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,h){const d=h?new dn(h.sequenceNumber,new Ct(qe(h.readTime),new w(Bt(h.documentKey)),h.largestBatchId)):dn.empty(),m=l.fields.map(([E,y])=>new Ne(W.fromServerFormat(E),y));return new hn(l.indexId,l.collectionGroup,m,d)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:C(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=jn(t),s=Xe(t);return this.fn(t).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>f.forEach(a,u=>s.put(zu(u.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return f.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,u=>this.gn(t,i,u).next(c=>{const l=this.pn(s,u);return c.isEqual(l)?f.resolve():this.yn(t,s,u,c,l)}))))})}wn(t,e,r,i){return Ye(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,e.key),documentKey:e.key.path.toArray()})}Sn(t,e,r,i){return Ye(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,e.key),e.key.path.toArray()])}gn(t,e,r){const i=Ye(t);let s=new z(Xt);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,e)])},(o,a)=>{s=s.add(new Ve(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(t,e){let r=new z(Xt);const i=this.dn(e,t);if(i==null)return r;const s=io(e);if(s!=null){const o=t.data.field(s.fieldPath);if(vr(o))for(const a of o.arrayValue.values||[])r=r.add(new Ve(e.indexId,t.key,this.In(a),i))}else r=r.add(new Ve(e.indexId,t.key,oi,i));return r}yn(t,e,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(u,c,l,h,d){const m=u.getIterator(),E=c.getIterator();let y=He(m),I=He(E);for(;y||I;){let b=!1,V=!1;if(y&&I){const P=l(y,I);P<0?V=!0:P>0&&(b=!0)}else y!=null?V=!0:b=!0;b?(h(I),I=He(E)):V?(d(y),y=He(m)):(y=He(m),I=He(E))}}(i,s,Xt,a=>{o.push(this.wn(t,e,r,a))},a=>{o.push(this.Sn(t,e,r,a))}),f.waitFor(o)}fn(t){let e=1;return Xe(t).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>Xt(o,a)).filter((o,a,u)=>!a||Xt(o,u[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=Xt(o,t),u=Xt(o,e);if(a===0)i[0]=t.Ht();else if(a>0&&u<0)i.push(o),i.push(o.Ht());else if(u>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,oi,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,oi,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(t,e){return Xt(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Yu)}getMinOffset(t,e){return f.mapArray(this.un(e),r=>this.cn(t,r).next(i=>i||A())).next(Yu)}}function Hu(n){return dt(n,"collectionParents")}function Ye(n){return dt(n,"indexEntries")}function jn(n){return dt(n,"indexConfiguration")}function Xe(n){return dt(n,"indexState")}function Yu(n){R(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Yo(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Ct(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const u=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(u.next(()=>{R(a===1)}));const c=[];for(const l of e.mutations){const h=zl(t,l.key.path,e.batchId);s.push(i.delete(h)),c.push(l.key)}return f.waitFor(s).next(()=>c)}function Oi(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class hs{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(t,e,r,i){R(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new hs(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=nn(t),o=Jt(t);return o.add({}).next(a=>{R(typeof a=="number");const u=new na(a,e,r,i),c=function(m,E,y){const I=y.baseMutations.map(V=>Pr(m.ut,V)),b=y.mutations.map(V=>Pr(m.ut,V));return{userId:E,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:b}}(this.serializer,this.userId,u),l=[];let h=new z((d,m)=>C(d.canonicalString(),m.canonicalString()));for(const d of i){const m=zl(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(s.put(m,np))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.Dn[a]=u.keys()}),f.waitFor(l).next(()=>u)})}lookupMutationBatch(t,e){return Jt(t).get(e).next(r=>r?(R(r.userId===this.userId),Pe(this.serializer,r)):null)}Cn(t,e){return this.Dn[e]?f.resolve(this.Dn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.Dn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Jt(t).Y({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(R(a.batchId>=r),s=Pe(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Jt(t).Y({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).W("userMutationsIndex",e).next(r=>r.map(i=>Pe(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=hi(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return nn(t).Y({range:i},(o,a,u)=>{const[c,l,h]=o,d=Bt(l);if(c===this.userId&&e.path.isEqual(d))return Jt(t).get(h).next(m=>{if(!m)throw A();R(m.userId===this.userId),s.push(Pe(this.serializer,m))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new z(C);const i=[];return e.forEach(s=>{const o=hi(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=nn(t).Y({range:a},(c,l,h)=>{const[d,m,E]=c,y=Bt(m);d===this.userId&&s.path.isEqual(y)?r=r.add(E):h.done()});i.push(u)}),f.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=hi(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new z(C);return nn(t).Y({range:o},(u,c,l)=>{const[h,d,m]=u,E=Bt(d);h===this.userId&&r.isPrefixOf(E)?E.length===i&&(a=a.add(m)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(Jt(t).get(s).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(Pe(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return Bh(t.ae,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Fn(e.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Fn(t){delete this.Dn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return f.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return nn(t).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Bt(s[1]);i.push(u)}else a.done()}).next(()=>{R(i.length===0)})})}containsKey(t,e){return qh(t,this.userId,e)}Mn(t){return Uh(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qh(n,t,e){const r=hi(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return nn(n).Y({range:s,J:!0},(a,u,c)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),c.done()}).next(()=>o)}function Jt(n){return dt(n,"mutations")}function nn(n){return dt(n,"documentMutations")}function Uh(n){return dt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Ue(0)}static Nn(){return new Ue(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const r=new Ue(e.highestTargetId);return e.highestTargetId=r.next(),this.Ln(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>S.fromTimestamp(new Y(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Bn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Ln(t,i)))}addTargetData(t,e){return this.kn(t,e).next(()=>this.Bn(t).next(r=>(r.targetCount+=1,this.qn(e,r),this.Ln(t,r))))}updateTargetData(t,e){return this.kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Je(t).delete(e.targetId)).next(()=>this.Bn(t)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.Ln(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return Je(t).Y((o,a)=>{const u=Jn(a);u.sequenceNumber<=e&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(t,u)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(t,e){return Je(t).Y((r,i)=>{const s=Jn(i);e(s)})}Bn(t){return Ju(t).get("targetGlobalKey").next(e=>(R(e!==null),e))}Ln(t,e){return Ju(t).put("targetGlobalKey",e)}kn(t,e){return Je(t).put(Oh(this.serializer,e))}qn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=Oe(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Je(t).Y({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Jn(a);Ur(e,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=te(t);return e.forEach(o=>{const a=wt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),f.waitFor(i)}removeMatchingKeys(t,e,r){const i=te(t);return f.forEach(e,s=>{const o=wt(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=te(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=te(t);let s=x();return i.Y({range:r,J:!0},(o,a,u)=>{const c=Bt(o[1]),l=new w(c);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=wt(e.path),i=IDBKeyRange.bound([r],[Ol(r)],!1,!0);let s=0;return te(t).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}_t(t,e){return Je(t).get(e).next(r=>r?Jn(r):null)}}function Je(n){return dt(n,"targets")}function Ju(n){return dt(n,"targetGlobal")}function te(n){return dt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu([n,t],[e,r]){const i=C(n,e);return i===0?C(t,r):i}class p_{constructor(t){this.Qn=t,this.buffer=new z(Zu),this.Kn=0}$n(){return++this.Kn}Un(t){const e=[t,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Zu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class zh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(t){_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_e(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await pe(e)}await this.Gn(3e5)})}}class __{constructor(t,e){this.zn=t,this.params=e}calculateTargetCount(t,e){return this.zn.jn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return f.resolve(Rt._e);const r=new p_(e);return this.zn.forEachTarget(t,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(t,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Xu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xu):this.Jn(t,e))}getCacheSize(t){return this.zn.getCacheSize(t)}Jn(t,e){let r,i,s,o,a,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(c=Date.now(),Ze()<=O.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function $h(n,t){return new __(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,e){this.db=t,this.garbageCollector=$h(this,e)}jn(t){const e=this.Yn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Hn(t,e){return this.Zn(t,(r,i)=>e(i))}addReference(t,e,r){return ai(t,r)}removeReference(t,e,r){return ai(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return ai(t,e)}Xn(t,e){return function(i,s){let o=!1;return Uh(i).Z(a=>qh(i,a,s).next(u=>(u&&(o=!0),f.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(t,(o,a)=>{if(a<=e){const u=this.Xn(t,o).next(c=>{if(!c)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,S.min()),te(t).delete(function(h){return[0,wt(h.path)]}(o))))});i.push(u)}}).next(()=>f.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return ai(t,e)}Zn(t,e){const r=te(t);let i,s=Rt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Rt._e&&e(new w(Bt(i)),s),s=c,i=u):s=Rt._e}).next(()=>{s!==Rt._e&&e(new w(Bt(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ai(n,t){return te(n).put(function(r,i){return{targetId:0,path:wt(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.changes=new Wt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?f.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return ve(t).put(r)}removeEntry(t,e,r){return ve(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ki(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.er(t,r)))}getEntry(t,e){let r=Q.newInvalidDocument(e);return ve(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Kn(e))},(i,s)=>{r=this.tr(e,s)}).next(()=>r)}nr(t,e){let r={size:0,document:Q.newInvalidDocument(e)};return ve(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Kn(e))},(i,s)=>{r={document:this.tr(e,s),size:Oi(s)}}).next(()=>r)}getEntries(t,e){let r=Pt();return this.rr(t,e,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(t,e){let r=Pt(),i=new G(w.comparator);return this.rr(t,e,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Oi(o))}).next(()=>({documents:r,sr:i}))}rr(t,e,r){if(e.isEmpty())return f.resolve();let i=new z(nc);e.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Kn(i.first()),Kn(i.last())),o=i.getIterator();let a=o.getNext();return ve(t).Y({index:"documentKeyIndex",range:s},(u,c,l)=>{const h=w.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&nc(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?l.U(Kn(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i,s){const o=e.path,a=[o.popLast().toArray(),o.lastSegment(),ki(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ve(t).W(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let l=Pt();for(const h of c){const d=this.tr(w.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&($r(e,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(t,e,r,i){let s=Pt();const o=ec(e,r),a=ec(e,Ct.max());return ve(t).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.tr(w.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new E_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return tc(t).get("remoteDocumentGlobalKey").next(e=>(R(!!e),e))}er(t,e){return tc(t).put("remoteDocumentGlobalKey",e)}tr(t,e){if(e){const r=o_(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(S.min())))return r}return Q.newInvalidDocument(t)}}function jh(n){return new I_(n)}class E_ extends Gh{constructor(t,e){super(),this._r=t,this.trackRemovals=e,this.ar=new Wt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new z((s,o)=>C(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(e.push(this._r.removeEntry(t,s,a.readTime)),o.isValidDocument()){const u=qu(this._r.serializer,o);i=i.add(s.path.popLast());const c=Oi(u);r+=c-a.size,e.push(this._r.addEntry(t,s,u))}else if(r-=a.size,this.trackRemovals){const u=qu(this._r.serializer,o.convertToNoDocument(S.min()));e.push(this._r.addEntry(t,s,u))}}),i.forEach(s=>{e.push(this._r.indexManager.addToCollectionParentIndex(t,s))}),e.push(this._r.updateMetadata(t,r)),f.waitFor(e)}getFromCache(t,e){return this._r.nr(t,e).next(r=>(this.ar.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this._r.ir(t,e).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function tc(n){return dt(n,"remoteDocumentGlobal")}function ve(n){return dt(n,"remoteDocumentsV14")}function Kn(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ec(n,t){const e=t.documentKey.path.toArray();return[n,ki(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function nc(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=C(e[s],r[s]),i)return i;return i=C(e.length,r.length),i||(i=C(e[e.length-2],r[r.length-2]),i||C(e[e.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ir(r.mutation,i,St.empty(),Y.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,x()).next(()=>r))}getLocalViewOfDocuments(t,e,r=x()){const i=qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Yn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=qt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,x()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Pt();const o=rr(),a=function(){return rr()}();return e.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Ht)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),ir(l.mutation,c,l.mutation.getFieldMask(),Y.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new T_(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=rr();let i=new G((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=r.get(u)||St.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||x()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=lh();l.forEach(d=>{if(!s.has(d)){const m=yh(e.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):f.resolve(qt());let a=-1,u=s;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,x())).next(l=>({batchId:a,changes:ch(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new w(e)).next(r=>{let i=Yn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Yn();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,u=>{const c=function(h,d){return new Qt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Q.newInvalidDocument(l)))});let a=Yn();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&ir(l.mutation,c,St.empty(),Y.now()),$r(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return f.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(e)),f.resolve()}getNamedQuery(t,e){return f.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:ua(i.bundledQuery),readTime:nt(i.readTime)}}(e)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.overlays=new G(w.comparator),this.lr=new Map}getOverlay(t,e){return f.resolve(this.overlays.get(e))}getOverlays(t,e){const r=qt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),f.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,e,r){const i=qt(),s=e.length+1,o=new w(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new G((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=qt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=qt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return f.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ia(e,r));let s=this.lr.get(e);s===void 0&&(s=x(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.hr=new z(ot.Pr),this.Ir=new z(ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new ot(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new w(new F([])),r=new ot(e,t),i=new ot(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new w(new F([])),r=new ot(e,t),i=new ot(e,t+1);let s=x();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new ot(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return w.comparator(t.key,e.key)||C(t.gr,e.gr)}static Tr(t,e){return C(t.gr,e.gr)||w.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new z(ot.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new na(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new ot(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,e){return f.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new z(C);return e.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new ot(new w(s),0);let a=new z(C);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.gr)),!0)},o),f.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){R(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(e.mutations,i=>{const s=new ot(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new ot(e,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.Cr=t,this.docs=function(){return new G(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return f.resolve(r?r.document.mutableCopy():Q.newInvalidDocument(e))}getEntries(t,e){let r=Pt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Q.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Pt();const o=e.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Yo(Ll(l),r)<=0||(i.has(l.key)||$r(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return f.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new S_(this)}getSize(t){return f.resolve(this.size)}}class S_ extends Gh{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t){this.persistence=t,this.Fr=new Wt(e=>Oe(e),Ur),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ha,this.targetCount=0,this.Nr=Ue.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),f.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,f.resolve()}updateTargetData(t,e){return this.kn(e),f.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return f.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),f.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),f.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return f.resolve(r)}containsKey(t,e){return f.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Rt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new P_(this),this.indexManager=new f_,this.remoteDocumentCache=function(i){return new R_(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Mh(e),this.Kr=new w_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new v_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new A_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new b_(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class b_ extends ql{constructor(t){super(),this.currentSequenceNumber=t}}class ds{constructor(t){this.persistence=t,this.Gr=new ha,this.zr=null}static jr(t){return new ds(t)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),f.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=w.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,S.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return f.or([()=>f.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}class Fi{constructor(t,e){this.persistence=t,this.Yr=new Wt(r=>wt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=$h(this,e)}static jr(t,e){return new Fi(t,e)}$r(){}Ur(t){return f.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}jn(t){const e=this.Yn(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}Hn(t,e){return f.forEach(this.Yr,(r,i)=>this.Xn(t,r,i).next(s=>s?f.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(t,o=>this.Xn(t,o,e).next(a=>{a||(r++,s.removeEntry(o,S.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Yr.set(e,t.currentSequenceNumber),f.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Yr.set(r,t.currentSequenceNumber),f.resolve()}removeReference(t,e,r){return this.Yr.set(r,t.currentSequenceNumber),f.resolve()}updateLimboDocument(t,e){return this.Yr.set(e,t.currentSequenceNumber),f.resolve()}Qr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=fi(t.data.value)),e}Xn(t,e,r){return f.or([()=>this.persistence.Wr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Yr.get(e);return f.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.serializer=t}N(t,e,r,i){const s=new ss("createOrUpgrade",e);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(t),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_u,{unique:!0}),u.createObjectStore("documentMutations")}(t),rc(t),function(u){u.createObjectStore("remoteDocuments")}(t));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(t),rc(t)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:S.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").W().next(l=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_u,{unique:!0});const h=c.store("mutations"),d=l.map(m=>h.put(m));return f.waitFor(d)})}(t,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(t),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:mp});c.createIndex("collectionPathOverlayIndex",gp,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",pp,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:rp});c.createIndex("documentKeyIndex",ip),c.createIndex("collectionGroupIndex",sp)}(t)).next(()=>this.ri(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(t,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:lp}).createIndex("sequenceNumberIndex",hp,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:dp}).createIndex("documentKeyIndex",fp,{unique:!1})}(t))),o}Xr(t){let e=0;return t.store("remoteDocuments").Y((r,i)=>{e+=Oi(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,u=>{R(u.userId===s.userId);const c=Pe(this.serializer,u);return Bh(t,s.userId,c).next(()=>{})}))}))}ei(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const u=new F(o),c=function(h){return[0,wt(h)]}(u);s.push(e.get(c).next(l=>l?f.resolve():(h=>e.put({targetId:0,path:wt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(s))})}ti(t,e){t.createObjectStore("collectionParents",{keyPath:cp});const r=e.store("collectionParents"),i=new la,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:wt(u)})}};return e.store("remoteDocuments").Y({J:!0},(o,a)=>{const u=new F(o);return s(u.popLast())}).next(()=>e.store("documentMutations").Y({J:!0},([o,a,u],c)=>{const l=Bt(a);return s(l.popLast())}))}ni(t){const e=t.store("targets");return e.Y((r,i)=>{const s=Jn(i),o=Oh(this.serializer,s);return e.put(o)})}ri(t,e){const r=e.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=e.store("remoteDocumentsV14"),u=function(h){return h.document?new w(F.fromString(h.document.name).popFirst(5)):h.noDocument?w.fromSegments(h.noDocument.path):h.unknownDocument?w.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>f.waitFor(i))}ii(t,e){const r=e.store("mutations"),i=jh(this.serializer),s=new da(ds.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:x();Pe(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),f.forEach(a,(u,c)=>{const l=new at(c),h=ls.ct(this.serializer,l),d=s.getIndexManager(l),m=hs.ct(l,this.serializer,d,s.referenceDelegate);return new Kh(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new so(e,Rt._e),u).next()})})}}function rc(n){n.createObjectStore("targetDocuments",{keyPath:ap}).createIndex("documentTargetsIndex",up,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",op,{unique:!0}),n.createObjectStore("targetGlobal")}const Ls="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fa{constructor(t,e,r,i,s,o,a,u,c,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=c,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!fa.D())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new y_(this,i),this.Ii=e+"main",this.serializer=new Mh(u),this.Ti=new xt(this.Ii,this.ai,new V_(this.serializer)),this.qr=new g_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jh(this.serializer),this.Kr=new a_,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ls);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.qr.getHighestSequenceNumber(t))}).then(t=>{this.Lr=new Rt(t,this.oi)}).then(()=>{this.kr=!0}).catch(t=>(this.Ti&&this.Ti.close(),Promise.reject(t)))}mi(t){return this.Pi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ti.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ui(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(t)).next(e=>this.isPrimary&&!e?this.pi(t).next(()=>!1):!!e&&this.yi(t).next(()=>!0))).catch(t=>{if(_e(t))return _("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.si.enqueueRetryable(()=>this.Pi(t)),this.isPrimary=t})}fi(t){return Qn(t).get("owner").next(e=>f.resolve(this.wi(e)))}Si(t){return ui(t).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=dt(e,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const e of t)this.Ei.removeItem(this.vi(e.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(t){return!!t&&t.ownerId===this.clientId}gi(t){return this._i?f.resolve(!0):Qn(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)){if(this.wi(e)&&this.networkEnabled)return!0;if(!this.wi(e)){if(!e.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ls);return!1}}return!(!this.networkEnabled||!this.inForeground)||ui(t).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new so(t,Rt._e);return this.pi(e).next(()=>this.Si(e))}),this.Ti.close(),this.Ni()}Ci(t,e){return t.filter(r=>this.Di(r.updateTimeMs,e)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>ui(t).W().next(e=>this.Ci(e,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(t,e){return hs.ct(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new m_(t,this.serializer.ut.databaseId)}getDocumentOverlayCache(t){return ls.ct(this.serializer,t)}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(u){return u===15?yp:u===14?jl:u===13?Gl:u===12?_p:u===11?$l:void A()}(this.ai);let o;return this.Ti.runTransaction(t,i,s,a=>(o=new so(a,this.Lr?this.Lr.next():Rt._e),e==="readwrite-primary"?this.fi(o).next(u=>!!u||this.gi(o)).next(u=>{if(!u)throw et(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new p(g.FAILED_PRECONDITION,Bl);return r(o)}).next(u=>this.yi(o).next(()=>u)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(t){return Qn(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Ls)})}yi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Qn(t).put("owner",e)}static D(){return xt.D()}pi(t){const e=Qn(t);return e.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):f.resolve())}Di(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(et(`Detected an update time that is in the future: ${t} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;df()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(t){var e;try{const r=((e=this.Ei)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return _("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){et("Failed to set zombie client id.",t)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Qn(n){return dt(n,"owner")}function ui(n){return dt(n,"clientMetadata")}function ma(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=x(),i=x();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ga(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new C_;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(Ze()<=O.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",tn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),f.resolve()):(Ze()<=O.DEBUG&&_("QueryEngine","Query:",tn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ze()<=O.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",tn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,At(e))):f.resolve())}zi(t,e){if(Vu(e))return f.resolve(null);let r=At(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=xi(e,null,"F"),r=At(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=x(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(e,a);return this.Zi(e,c,o,u.readTime)?this.zi(t,xi(e,null,"F")):this.Xi(t,c,e,u)}))})))}ji(t,e,r,i){return Vu(e)||i.isEqual(S.min())?f.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?f.resolve(null):(Ze()<=O.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tn(e)),this.Xi(t,o,e,Fl(i,-1)).next(a=>a))})}Yi(t,e){let r=new z(ah(t));return e.forEach((i,s)=>{$r(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return Ze()<=O.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",tn(e)),this.Gi.getDocumentsMatchingQuery(t,e,Ct.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new G(C),this.ns=new Wt(s=>Oe(s),Ur),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kh(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function Wh(n,t,e,r){return new D_(n,t,e,r)}async function Hh(n,t){const e=T(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=x();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function x_(n,t){const e=T(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let m=f.resolve();return d.forEach(E=>{m=m.next(()=>l.getEntry(u,E)).next(y=>{const I=c.docVersions.get(E);R(I!==null),y.version.compareTo(I)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=x();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Yh(n){const t=T(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function N_(n,t){const e=T(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(it.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(y,I,b){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,l)&&a.push(e.qr.updateTargetData(s,m))});let u=Pt(),c=x();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Xh(s,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(S.min())){const l=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(e.ts=i,s))}function Xh(n,t,e){let r=x(),i=x();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Pt();return e.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:i}})}function k_(n,t){const e=T(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function yn(n,t){const e=T(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,f.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Gt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function In(n,t,e){const r=T(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_e(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Li(n,t,e){const r=T(n);let i=S.min(),s=x();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=T(u),d=h.ns.get(l);return d!==void 0?f.resolve(h.ts.get(d)):h.qr.getTargetData(c,l)}(r,o,At(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:S.min(),e?s:x())).next(a=>(td(r,oh(t),a),{documents:a,ls:s})))}function Jh(n,t){const e=T(n),r=T(e.qr),i=e.ts.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>r._t(s,t).next(o=>o?o.target:null))}function Zh(n,t){const e=T(n),r=e.rs.get(t)||S.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.ss.getAllFromCollectionGroup(i,t,Fl(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(td(e,t,i),i))}function td(n,t,e){let r=n.rs.get(t)||S.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}async function M_(n,t,e,r){const i=T(n);let s=x(),o=Pt();for(const c of e){const l=t.hs(c.metadata.name);c.document&&(s=s.add(l));const h=t.Ps(c);h.setReadTime(t.Is(c.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),u=await yn(i,function(l){return At(Vn(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>Xh(c,a,o).next(l=>(a.apply(c),l)).next(l=>i.qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,l.us,l.cs)).next(()=>l.us)))}async function O_(n,t,e=x()){const r=await yn(n,At(ua(t.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=nt(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,t);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,e,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,t))})}function ic(n,t){return`firestore_clients_${n}_${t}`}function sc(n,t,e){let r=`firestore_mutations_${n}_${e}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Bs(n,t){return`firestore_targets_${n}_${t}`}class Bi{constructor(t,e,r,i){this.user=t,this.batchId=e,this.state=r,this.error=i}static Ts(t,e,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Bi(t,e,i.state,s):(et("SharedClientState",`Failed to parse mutation state for ID '${e}': ${r}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class sr{constructor(t,e,r){this.targetId=t,this.state=e,this.error=r}static Ts(t,e){const r=JSON.parse(e);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new sr(t,r.state,i):(et("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class qi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ts(t,e){const r=JSON.parse(e);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ta();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Ul(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new qi(t,s):(et("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class pa{constructor(t,e){this.clientId=t,this.onlineState=e}static Ts(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new pa(e.clientId,e.onlineState):(et("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Io{constructor(){this.activeTargetIds=ta()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qs{constructor(t,e,r,i,s){this.window=t,this.si=e,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new G(C),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=ic(this.persistenceKey,this.Rs),this.ws=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Io),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.vs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Bi();for(const r of t){if(r===this.Rs)continue;const i=this.getItem(ic(this.persistenceKey,r));if(i){const s=qi.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const e=this.storage.getItem(this.Cs);if(e){const r=this.Ms(e);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(t){let e=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ns(t,"pending")}updateMutationState(t,e,r){this.Ns(t,e,r),this.Bs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const r=this.storage.getItem(Bs(this.persistenceKey,t));if(r){const i=sr.Ts(t,r);i&&(e=i.state)}}return this.Ls.ds(t),this.Fs(),e}removeLocalQueryTarget(t){this.Ls.As(t),this.Fs()}isLocalQueryTarget(t){return this.Ls.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Bs(this.persistenceKey,t))}updateQueryState(t,e,r){this.ks(t,e,r)}handleUserChange(t,e,r){e.forEach(i=>{this.Bs(i)}),this.currentUser=t,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.qs(t)}notifyBundleLoaded(t){this.Qs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return _("SharedClientState","READ",t,e),e}setItem(t,e){_("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){_("SharedClientState","REMOVE",t),this.storage.removeItem(t)}fs(t){const e=t;if(e.storageArea===this.storage){if(_("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ys)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Ss.test(e.key)){if(e.newValue==null){const r=this.Ks(e.key);return this.$s(r,null)}{const r=this.Us(e.key,e.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(e.key)){if(e.newValue!==null){const r=this.Ws(e.key,e.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(e.key)){if(e.newValue!==null){const r=this.zs(e.key,e.newValue);if(r)return this.js(r)}}else if(e.key===this.Cs){if(e.newValue!==null){const r=this.Ms(e.newValue);if(r)return this.xs(r)}}else if(e.key===this.ws){const r=function(s){let o=Rt._e;if(s!=null)try{const a=JSON.parse(s);R(typeof a=="number"),o=a}catch(a){et("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(e.newValue);r!==Rt._e&&this.sequenceNumberHandler(r)}else if(e.key===this.vs){const r=this.Hs(e.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(e)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(t,e,r){const i=new Bi(this.currentUser,t,e,r),s=sc(this.persistenceKey,this.currentUser,t);this.setItem(s,i.Es())}Bs(t){const e=sc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}qs(t){const e={clientId:this.Rs,onlineState:t};this.storage.setItem(this.Cs,JSON.stringify(e))}ks(t,e,r){const i=Bs(this.persistenceKey,t),s=new sr(t,e,r);this.setItem(i,s.Es())}Qs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.vs,e)}Ks(t){const e=this.Ss.exec(t);return e?e[1]:null}Us(t,e){const r=this.Ks(t);return qi.Ts(r,e)}Ws(t,e){const r=this.bs.exec(t),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bi.Ts(new at(s),i,e)}zs(t,e){const r=this.Ds.exec(t),i=Number(r[1]);return sr.Ts(i,e)}Ms(t){return pa.Ts(t)}Hs(t){return JSON.parse(t)}async Gs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Ys(t.batchId,t.state,t.error);_("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}js(t){return this.syncEngine.Zs(t.targetId,t.state,t.error)}$s(t,e){const r=e?this.gs.insert(t,e):this.gs.remove(t),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(t){this.gs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Os(t){let e=ta();return t.forEach((r,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class ed{constructor(){this.eo=new Io,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Io,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci=null;function Us(){return ci===null?ci=function(){return 268435456+Math.round(2147483648*Math.random())}():ci++,"0x"+ci.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class q_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=Us(),u=this.So(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(e,u,c,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw bt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=L_[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=Us();return new Promise((o,a)=>{const u=new Fg;u.setWithCredentials(!0),u.listenOnce(kg.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Os.NO_ERROR:const l=u.getResponseJson();_(yt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Os.TIMEOUT:_(yt,`RPC '${t}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const h=u.getStatus();if(_(yt,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(I){const b=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(m.status);a(new p(E,m.message))}else a(new p(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(yt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(yt,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",c,r,15)})}vo(t,e,r){const i=Us(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=xg(),a=Ng(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Og({})),this.bo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");_(yt,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,m=!1;const E=new B_({co:I=>{m?_(yt,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(_(yt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(yt,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),y=(I,b,V)=>{I.listen(b,P=>{try{V(P)}catch(L){setTimeout(()=>{throw L},0)}})};return y(h,ii.EventType.OPEN,()=>{m||_(yt,`RPC '${t}' stream ${i} transport opened.`)}),y(h,ii.EventType.CLOSE,()=>{m||(m=!0,_(yt,`RPC '${t}' stream ${i} transport closed`),E.Ro())}),y(h,ii.EventType.ERROR,I=>{m||(m=!0,bt(yt,`RPC '${t}' stream ${i} transport errored:`,I),E.Ro(new p(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,ii.EventType.MESSAGE,I=>{var b;if(!m){const V=I.data[0];R(!!V);const P=V,L=P.error||((b=P[0])===null||b===void 0?void 0:b.error);if(L){_(yt,`RPC '${t}' stream ${i} received error:`,L);const j=L.status;let B=function(Xd){const ja=rt[Xd];if(ja!==void 0)return Th(ja)}(j),_t=L.message;B===void 0&&(B=g.INTERNAL,_t="Unknown error status: "+j+" with message "+L.message),m=!0,E.Ro(new p(B,_t)),h.close()}else _(yt,`RPC '${t}' stream ${i} received:`,V),E.Vo(V)}}),y(a,Mg.STAT_EVENT,I=>{I.stat===fu.PROXY?_(yt,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===fu.NOPROXY&&_(yt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return typeof window<"u"?window:null}function _i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){return new Yp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _a(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(et(e.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U_ extends rd{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=Zp(this.serializer,t),r=function(s){if(!("targetChange"in s))return S.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?nt(o.readTime):S.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=Sr(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=Ci(u)?{documents:Ch(s,u)}:{query:aa(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Rh(s,o.resumeToken);const c=fo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=_n(s,o.snapshotVersion.toTimestamp());const c=fo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=e_(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=Sr(this.serializer),e.removeTarget=t,this.e_(e)}}class z_ extends rd{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=t_(t.writeResults,t.commitTime),r=nt(t.commitTime);return this.listener.I_(r,e)}return R(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Sr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Pr(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}async function G_(n,t,e){var r;const i=T(n),{request:s,R_:o}=function(h,d,m){const E=aa(h,d),y={},I=[];let b=0;return m.forEach(V=>{const P="aggregate_"+b++;y[P]=V.alias,V.aggregateType==="count"?I.push({alias:P,count:{}}):V.aggregateType==="avg"?I.push({alias:P,avg:{field:Zt(V.fieldPath)}}):V.aggregateType==="sum"&&I.push({alias:P,sum:{field:Zt(V.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:I,structuredQuery:E.structuredQuery},parent:E.parent},R_:y}}(i.serializer,function(h){const d=T(h);return d.Pe||(d.Pe=ih(d,h.explicitOrderBy)),d.Pe}(t),e),a=s.parent;i.connection.yo||delete s.parent;const u=(await i.Co("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);R(u.length===1);const c=(r=u[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(c).reduce((l,h)=>(l[o[h]]=c[h],l),{})}class j_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(et(e),this.f_=!1):_("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ie(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=T(u);c.C_.add(4),await xn(c),c.M_.set("Unknown"),c.C_.delete(4),await Wr(c)}(this))})}),this.M_=new j_(r,i)}}async function Wr(n){if(Ie(n))for(const t of n.v_)await t(!0)}async function xn(n){for(const t of n.v_)await t(!1)}function fs(n,t){const e=T(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),Ea(e)?Ia(e):kn(e).Ho()&&ya(e,t))}function br(n,t){const e=T(n),r=kn(e);e.D_.delete(t),r.Ho()&&id(e,t),e.D_.size===0&&(r.Ho()?r.Zo():Ie(e)&&e.M_.set("Unknown"))}function ya(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}kn(n).u_(t)}function id(n,t){n.x_.Oe(t),kn(n).c_(t)}function Ia(n){n.x_=new Kp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),kn(n).start(),n.M_.g_()}function Ea(n){return Ie(n)&&!kn(n).jo()&&n.D_.size>0}function Ie(n){return T(n).C_.size===0}function sd(n){n.x_=void 0}async function Q_(n){n.D_.forEach((t,e)=>{ya(n,t)})}async function W_(n,t){sd(n),Ea(n)?(n.M_.w_(t),Ia(n)):n.M_.set("Unknown")}async function H_(n,t,e){if(n.M_.set("Online"),t instanceof Ah&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ui(n,r)}else if(t instanceof pi?n.x_.$e(t):t instanceof vh?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(S.min()))try{const r=await Yh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.D_.get(c);l&&s.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.D_.get(u);if(!l)return;s.D_.set(u,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),id(s,u);const h=new Gt(l.target,u,c,l.sequenceNumber);ya(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Ui(n,r)}}async function Ui(n,t,e){if(!_e(t))throw t;n.C_.add(1),await xn(n),n.M_.set("Offline"),e||(e=()=>Yh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await Wr(n)})}function od(n,t){return t().catch(e=>Ui(n,e,t))}async function Nn(n){const t=T(n),e=de(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Y_(t);)try{const i=await k_(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,X_(t,i)}catch(i){await Ui(t,i)}ad(t)&&ud(t)}function Y_(n){return Ie(n)&&n.b_.length<10}function X_(n,t){n.b_.push(t);const e=de(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function ad(n){return Ie(n)&&!de(n).jo()&&n.b_.length>0}function ud(n){de(n).start()}async function J_(n){de(n).E_()}async function Z_(n){const t=de(n);for(const e of n.b_)t.P_(e.mutations)}async function ty(n,t,e){const r=n.b_.shift(),i=ra.from(r,t,e);await od(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Nn(n)}async function ey(n,t){t&&de(n).h_&&await async function(r,i){if(function(o){return Eh(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();de(r).Yo(),await od(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nn(r)}}(n,t),ad(n)&&ud(n)}async function ac(n,t){const e=T(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Ie(e);e.C_.add(3),await xn(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await Wr(e)}async function Eo(n,t){const e=T(n);t?(e.C_.delete(2),await Wr(e)):t||(e.C_.add(2),await xn(e),e.M_.set("Unknown"))}function kn(n){return n.O_||(n.O_=function(e,r,i){const s=T(e);return s.A_(),new U_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Q_.bind(null,n),Io:W_.bind(null,n),a_:H_.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),Ea(n)?Ia(n):n.M_.set("Unknown")):(await n.O_.stop(),sd(n))})),n.O_}function de(n){return n.N_||(n.N_=function(e,r,i){const s=T(e);return s.A_(),new z_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:J_.bind(null,n),Io:ey.bind(null,n),T_:Z_.bind(null,n),I_:ty.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await Nn(n)):(await n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Ta(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mn(n,t){if(et("AsyncQueue",`${t}: ${n}`),_e(n))return new p(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.comparator=t?(e,r)=>t(e,r)||w.comparator(e.key,r.key):(e,r)=>w.comparator(e.key,r.key),this.keyedMap=Yn(),this.sortedSet=new G(this.comparator)}static emptySet(t){return new un(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new un;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.B_=new G(w.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class En{constructor(t,e,r,i,s,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new En(t,e,un.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.k_=void 0,this.listeners=[]}}class ry{constructor(){this.queries=new Wt(t=>sh(t),zr),this.onlineState="Unknown",this.q_=new Set}}async function wa(n,t){const e=T(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new ny),i)try{s.k_=await e.onListen(r)}catch(o){const a=Mn(o,`Initialization of query '${tn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&Aa(e)}async function va(n,t){const e=T(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function iy(n,t){const e=T(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Aa(e)}function sy(n,t,e){const r=T(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Aa(n){n.q_.forEach(t=>{t.next()})}class Ra{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new En(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=En.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t,e){this.Y_=t,this.byteLength=e}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.serializer=t}hs(t){return Ut(this.serializer,t)}Ps(t){return t.metadata.exists?Vh(this.serializer,t.document,!1):Q.newNoDocument(this.hs(t.metadata.name),this.Is(t.metadata.readTime))}Is(t){return nt(t)}}class ay{constructor(t,e,r){this.X_=t,this.localStore=e,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=cd(t)}ea(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.Y_.namedQuery)this.queries.push(t.Y_.namedQuery);else if(t.Y_.documentMetadata){this.documents.push({metadata:t.Y_.documentMetadata}),t.Y_.documentMetadata.exists||++e;const r=F.fromString(t.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else t.Y_.document&&(this.documents[this.documents.length-1].document=t.Y_.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ta(t){const e=new Map,r=new cc(this.serializer);for(const i of t)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(e.get(o)||x()).add(s);e.set(o,a)}}return e}async complete(){const t=await M_(this.localStore,new cc(this.serializer),this.documents,this.X_.id),e=this.ta(this.documents);for(const r of this.queries)await O_(this.localStore,r,e.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:t}}}function cd(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.key=t}}class hd{constructor(t){this.key=t}}class dd{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=x(),this.mutatedKeys=x(),this._a=ah(t),this.aa=new un(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new uc,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),m=$r(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?E!==y&&(r.track({type:3,doc:m}),I=!0):this.ha(d,m)||(r.track({type:2,doc:m}),I=!0,(u&&this._a(m,u)>0||c&&this._a(m,c)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(u||c)&&(a=!0)),I&&(m?(o=o.add(m),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,l)=>function(d,m){const E=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return E(d)-E(m)}(c.type,l.type)||this._a(c.doc,l.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new En(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new uc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=x(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new hd(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new ld(r))}),e}da(t){this.ia=t.ls,this.oa=x();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return En.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class uy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class cy{constructor(t){this.key=t,this.Ra=!1}}class ly{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wt(a=>sh(a),zr),this.fa=new Map,this.ga=new Set,this.pa=new G(w.comparator),this.ya=new Map,this.wa=new ha,this.Sa={},this.ba=new Map,this.Da=Ue.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function hy(n,t){const e=Ca(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await yn(e.localStore,At(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sa(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&fs(e.remoteStore,o)}return i}async function Sa(n,t,e,r,i){n.va=(h,d,m)=>async function(y,I,b,V){let P=I.view.ca(b);P.Zi&&(P=await Li(y.localStore,I.query,!1).then(({documents:B})=>I.view.ca(B,P)));const L=V&&V.targetChanges.get(I.targetId),j=I.view.applyChanges(P,y.isPrimaryClient,L);return To(y,I.targetId,j.Ta),j.snapshot}(n,h,d,m);const s=await Li(n.localStore,t,!0),o=new dd(t,s.ls),a=o.ca(s.documents),u=Kr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);To(n,e,c.Ta);const l=new uy(t,e,o);return n.ma.set(t,l),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),c.snapshot}async function dy(n,t){const e=T(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!zr(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await In(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),br(e.remoteStore,r.targetId),Tn(e,r.targetId)}).catch(pe)):(Tn(e,r.targetId),await In(e.localStore,r.targetId,!0))}async function fy(n,t,e){const r=Da(n);try{const i=await function(o,a){const u=T(o),c=Y.now(),l=a.reduce((m,E)=>m.add(E.key),x());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=Pt(),y=x();return u.ss.getEntries(m,l).next(I=>{E=I,E.forEach((b,V)=>{V.isValidDocument()||(y=y.add(b))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,E)).next(I=>{h=I;const b=[];for(const V of a){const P=zp(V,h.get(V.key).overlayedDocument);P!=null&&b.push(new Ht(V.key,P,Hl(P.value.mapValue),H.exists(!0)))}return u.mutationQueue.addMutationBatch(m,c,b,a)}).next(I=>{d=I;const b=I.applyToLocalDocumentSet(h,y);return u.documentOverlayCache.saveOverlays(m,I.batchId,b)})}).then(()=>({batchId:d.batchId,changes:ch(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new G(C)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,e),await Yt(r,i.changes),await Nn(r.remoteStore)}catch(i){const s=Mn(i,"Failed to persist write");e.reject(s)}}async function fd(n,t){const e=T(n);try{const r=await N_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?R(o.Ra):i.removedDocuments.size>0&&(R(o.Ra),o.Ra=!1))}),await Yt(e,r,t)}catch(r){await pe(r)}}function lc(n,t,e){const r=T(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=T(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Aa(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function my(n,t,e){const r=T(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new G(w.comparator);o=o.insert(s,Q.newNoDocument(s,S.min()));const a=x().add(s),u=new jr(S.min(),new Map,new G(C),o,a);await fd(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),Va(r)}else await In(r.localStore,t,!1).then(()=>Tn(r,t,e)).catch(pe)}async function gy(n,t){const e=T(n),r=t.batch.batchId;try{const i=await x_(e.localStore,t);ba(e,r,null),Pa(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yt(e,i)}catch(i){await pe(i)}}async function py(n,t,e){const r=T(n);try{const i=await function(o,a){const u=T(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(R(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);ba(r,t,e),Pa(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yt(r,i)}catch(i){await pe(i)}}async function _y(n,t){const e=T(n);Ie(e.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(e.localStore);if(r===-1)return void t.resolve();const i=e.ba.get(r)||[];i.push(t),e.ba.set(r,i)}catch(r){const i=Mn(r,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function Pa(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function ba(n,t,e){const r=T(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Tn(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||md(n,r)})}function md(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(br(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),Va(n))}function To(n,t,e){for(const r of e)r instanceof ld?(n.wa.addReference(r.key,t),yy(n,r)):r instanceof hd?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||md(n,r.key)):A()}function yy(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ga.add(r),Va(n))}function Va(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new w(F.fromString(t)),r=n.Da.next();n.ya.set(r,new cy(e)),n.pa=n.pa.insert(e,r),fs(n.remoteStore,new Gt(At(Vn(e.path)),r,"TargetPurposeLimboResolution",Rt._e))}}async function Yt(n,t,e){const r=T(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=ga.Qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,c){const l=T(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,d=>f.forEach(d.ki,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>f.forEach(d.qi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!_e(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const m=l.ts.get(d),E=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(E);l.ts=l.ts.insert(d,y)}}}(r.localStore,s))}async function Iy(n,t){const e=T(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Hh(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new p(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yt(e,r._s)}}function Ey(n,t){const e=T(n),r=e.ya.get(t);if(r&&r.Ra)return x().add(r.key);{let i=x();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function Ty(n,t){const e=T(n),r=await Li(e.localStore,t.query,!0),i=t.view.da(r);return e.isPrimaryClient&&To(e,t.targetId,i.Ta),i}async function wy(n,t){const e=T(n);return Zh(e.localStore,t).then(r=>Yt(e,r))}async function vy(n,t,e,r){const i=T(n),s=await function(a,u){const c=T(a),l=T(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,u).next(d=>d?c.localDocuments.getDocuments(h,d):f.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await Nn(i.remoteStore):e==="acknowledged"||e==="rejected"?(ba(i,t,r||null),Pa(i,t),function(a,u){T(T(a).mutationQueue).Fn(u)}(i.localStore,t)):A(),await Yt(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ay(n,t){const e=T(n);if(Ca(e),Da(e),t===!0&&e.Ca!==!0){const r=e.sharedClientState.getAllActiveQueryTargets(),i=await hc(e,r.toArray());e.Ca=!0,await Eo(e.remoteStore,!0);for(const s of i)fs(e.remoteStore,s)}else if(t===!1&&e.Ca!==!1){const r=[];let i=Promise.resolve();e.fa.forEach((s,o)=>{e.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Tn(e,o),In(e.localStore,o,!0))),br(e.remoteStore,o)}),await i,await hc(e,r),function(o){const a=T(o);a.ya.forEach((u,c)=>{br(a.remoteStore,c)}),a.wa.Vr(),a.ya=new Map,a.pa=new G(w.comparator)}(e),e.Ca=!1,await Eo(e.remoteStore,!1)}}async function hc(n,t,e){const r=T(n),i=[],s=[];for(const o of t){let a;const u=r.fa.get(o);if(u&&u.length!==0){a=await yn(r.localStore,At(u[0]));for(const c of u){const l=r.ma.get(c),h=await Ty(r,l);h.snapshot&&s.push(h.snapshot)}}else{const c=await Jh(r.localStore,o);a=await yn(r.localStore,c),await Sa(r,gd(c),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function gd(n){return rh(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Ry(n){return function(e){return T(T(e).persistence).Bi()}(T(n).localStore)}async function Sy(n,t,e,r){const i=T(n);if(i.Ca)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const o=await Zh(i.localStore,oh(s[0])),a=jr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",it.EMPTY_BYTE_STRING);await Yt(i,o,a);break}case"rejected":await In(i.localStore,t,!0),Tn(i,t,r);break;default:A()}}async function Py(n,t,e){const r=Ca(n);if(r.Ca){for(const i of t){if(r.fa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await Jh(r.localStore,i),o=await yn(r.localStore,s);await Sa(r,gd(s),o.targetId,!1,o.resumeToken),fs(r.remoteStore,o)}for(const i of e)r.fa.has(i)&&await In(r.localStore,i,!1).then(()=>{br(r.remoteStore,i),Tn(r,i)}).catch(pe)}}function Ca(n){const t=T(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ey.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=my.bind(null,t),t.Va.a_=iy.bind(null,t.eventManager),t.Va.Fa=sy.bind(null,t.eventManager),t}function Da(n){const t=T(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=py.bind(null,t),t}function by(n,t,e){const r=T(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(m,E){const y=T(m),I=nt(E.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",b=>y.Kr.getBundleMetadata(b,E.id)).then(b=>!!b&&b.createTime.compareTo(I)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(cd(u));const c=new ay(u,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await c.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await c.complete();return await Yt(s,h.ra,void 0),await function(m,E){const y=T(m);return y.persistence.runTransaction("Save bundle","readwrite",I=>y.Kr.saveBundleMetadata(I,E))}(s.localStore,u),a._completeWith(h.progress),Promise.resolve(h.na)}catch(u){return bt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,t,e).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class wn{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Wh(this.persistence,new Qh,t.initialUser,this.serializer)}createPersistence(t){return new da(ds.jr,this.serializer)}createSharedClientState(t){return new ed}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vy extends wn{constructor(t){super(),this.cacheSizeBytes=t}createGarbageCollectionScheduler(t,e){R(this.persistence.referenceDelegate instanceof Fi);const r=this.persistence.referenceDelegate.garbageCollector;return new zh(r,t.asyncQueue,e)}createPersistence(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new da(r=>Fi.jr(r,e),this.serializer)}}class xa extends wn{constructor(t,e,r){super(),this.xa=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xa.initialize(this,t),await Da(this.xa.syncEngine),await Nn(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return Wh(this.persistence,new Qh,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new zh(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new tp(e,this.persistence);return new Zg(t.asyncQueue,r)}createPersistence(t){const e=ma(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new fa(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,nd(),_i(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new ed}}class pd extends xa{constructor(t,e){super(t,e,!1),this.xa=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xa.syncEngine;this.sharedClientState instanceof qs&&(this.sharedClientState.syncEngine={Ys:vy.bind(null,e),Zs:Sy.bind(null,e),Xs:Py.bind(null,e),Bi:Ry.bind(null,e),Js:wy.bind(null,e)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await Ay(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=nd();if(!qs.D(e))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ma(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new qs(e,t.asyncQueue,r,t.clientId,t.initialUser)}}class On{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iy.bind(null,this.syncEngine),await Eo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ry}()}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),r=function(s){return new q_(s)}(t.databaseInfo);return function(s,o,a,u){return new $_(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new K_(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>lc(this.syncEngine,e,0),function(){return oc.D()?new oc:new F_}())}createSyncEngine(t,e){return function(i,s,o,a,u,c,l){const h=new ly(i,s,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=T(e);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await xn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,t=10240){let e=0;return{async read(){if(e<n.byteLength){const r={value:n.slice(e,e+t),done:!1};return e+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):et("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,e){this.Ba=t,this.serializer=e,this.metadata=new st,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const t=await this.qa();if(t===null)return null;const e=this.La.decode(t),r=Number(e);isNaN(r)&&this.Qa(`length string (${e}) is not valid number`);const i=await this.Ka(r);return new oy(JSON.parse(i),t.length+r)}$a(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const t=this.$a();t<0&&this.Qa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ka(t){for(;this.buffer.length<t;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const e=this.La.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Qa(t){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ua(){const t=await this.Ba.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=T(i),a=Sr(o.serializer)+"/documents",u={documents:s.map(d=>Rr(o.serializer,d))},c=await o.Co("BatchGetDocuments",a,u,s.length),l=new Map;c.forEach(d=>{const m=Jp(o.serializer,d);l.set(m.key.toString(),m)});const h=[];return s.forEach(d=>{const m=l.get(d.toString());R(!!m),h.push(m)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Dn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=w.fromPath(r);this.mutations.push(new ea(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Sr(s.serializer)+"/documents",a={writes:i.map(u=>Pr(s.serializer,u))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw A();e=S.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(S.min())?H.exists(!1):H.updateTime(e):H.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(S.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return H.updateTime(e)}return H.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new _a(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new Dy(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!qr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Eh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Mn(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yi(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function wo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Na(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>ac(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ac(t.remoteStore,s)),n._onlineComponents=t}function _d(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Na(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await yi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!_d(e))throw e;bt("Error using user provided cache. Falling back to memory cache: "+e),await yi(n,new wn)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await yi(n,new wn);return n._offlineComponents}async function gs(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await wo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await wo(n,new On))),n._onlineComponents}function yd(n){return Na(n).then(t=>t.persistence)}function Fn(n){return Na(n).then(t=>t.localStore)}function Id(n){return gs(n).then(t=>t.remoteStore)}function ka(n){return gs(n).then(t=>t.syncEngine)}function Ed(n){return gs(n).then(t=>t.datastore)}async function vn(n){const t=await gs(n),e=t.eventManager;return e.onListen=hy.bind(null,t.syncEngine),e.onUnlisten=dy.bind(null,t.syncEngine),e}function ky(n){return n.asyncQueue.enqueue(async()=>{const t=await yd(n),e=await Id(n);return t.setNetworkEnabled(!0),function(i){const s=T(i);return s.C_.delete(0),Wr(s)}(e)})}function My(n){return n.asyncQueue.enqueue(async()=>{const t=await yd(n),e=await Id(n);return t.setNetworkEnabled(!1),async function(i){const s=T(i);s.C_.add(0),await xn(s),s.M_.set("Offline")}(e)})}function Oy(n,t){const e=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,l){const h=T(c);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Mn(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Fn(n),t,e)),e.promise}function Td(n,t,e={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new ms({next:d=>{o.enqueueAndForget(()=>va(s,h));const m=d.docs.has(a);!m&&d.fromCache?c.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&u&&u.source==="server"?c.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Ra(Vn(a.path),l,{includeMetadataChanges:!0,J_:!0});return wa(s,h)}(await vn(n),n.asyncQueue,t,e,r)),r.promise}function Fy(n,t){const e=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Li(i,s,!0),u=new dd(s,a.ls),c=u.ca(a.documents),l=u.applyChanges(c,!1);o.resolve(l.snapshot)}catch(a){const u=Mn(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Fn(n),t,e)),e.promise}function wd(n,t,e={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new ms({next:d=>{o.enqueueAndForget(()=>va(s,h)),d.fromCache&&u.source==="server"?c.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Ra(a,l,{includeMetadataChanges:!0,J_:!0});return wa(s,h)}(await vn(n),n.asyncQueue,t,e,r)),r.promise}function Ly(n,t){const e=new ms(t);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).q_.add(s),s.next()}(await vn(n),e)),()=>{e.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).q_.delete(s)}(await vn(n),e))}}function By(n,t,e,r){const i=function(o,a){let u;return u=typeof o=="string"?wh().encode(o):o,function(l,h){return new Cy(l,h)}(function(l,h){if(l instanceof Uint8Array)return dc(l,h);if(l instanceof ArrayBuffer)return dc(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(e,Qr(t));n.asyncQueue.enqueueAndForget(async()=>{by(await ka(n),i,r)})}function qy(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await Fn(n),t))}function Uy(n,t){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=T(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(h,d,m,E,y){h=[...h],d=[...d],h.sort(m),d.sort(m);const I=h.length,b=d.length;let V=0,P=0;for(;V<b&&P<I;){const L=m(h[P],d[V]);L<0?y(h[P++]):L>0?E(d[V++]):(V++,P++)}for(;V<b;)E(d[V++]);for(;P<I;)y(h[P++])}(c,i,Hg,l=>{a.push(o.addFieldIndex(u,l))},l=>{a.push(o.deleteFieldIndex(u,l))})).next(()=>f.waitFor(a)))}(await Fn(n),t))}function zy(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){T(r).es.$i=i}(await Fn(n),t))}function $y(n){return n.asyncQueue.enqueue(async()=>function(e){const r=T(e),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Fn(n)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,t,e){if(!e)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ad(n,t,e,r){if(t===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function mc(n){if(!w.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gc(n){if(w.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function N(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ps(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Rd(n,t){if(t<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ad("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kl;switch(r.type){case"firstParty":return new Gg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=fc.get(e);r&&(_("ComponentProvider","Removing Datastore"),fc.delete(e),r.terminate())}(this),Promise.resolve()}}function Sd(n,t,e,r={}){var i;const s=(n=N(n,Hr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=at.MOCK_USER;else{a=lf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(c)}n._authCredentials=new Ug(new Nl(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lt(this.firestore,t,this._query)}}class J{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new J(this.firestore,t,this._key)}}class Nt extends lt{constructor(t,e,r){super(t,e,Vn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new J(this.firestore,null,new w(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function Gy(n,t,...e){if(n=ut(n),Ma("collection","path",t),n instanceof Hr){const r=F.fromString(t,...e);return gc(r),new Nt(n,null,r)}{if(!(n instanceof J||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return gc(r),new Nt(n.firestore,null,r)}}function jy(n,t){if(n=N(n,Hr),Ma("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(n,null,function(r){return new Qt(F.emptyPath(),r)}(t))}function Pd(n,t,...e){if(n=ut(n),arguments.length===1&&(t=Ho.newId()),Ma("doc","path",t),n instanceof Hr){const r=F.fromString(t,...e);return mc(r),new J(n,null,new w(r))}{if(!(n instanceof J||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return mc(r),new J(n.firestore,n instanceof Nt?n.converter:null,new w(r))}}function Ky(n,t){return n=ut(n),t=ut(t),(n instanceof J||n instanceof Nt)&&(t instanceof J||t instanceof Nt)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function Oa(n,t){return n=ut(n),t=ut(t),n instanceof lt&&t instanceof lt&&n.firestore===t.firestore&&zr(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _a(this,"async_queue_retry"),this.iu=()=>{const e=_i();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=_i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=_i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new st;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!_e(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Ta.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function vo(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class bd{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,r){this._progressObserver={next:t,error:e,complete:r}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=-1;class $ extends Hr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Qy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vd(this),this._firestoreClient.terminate()}}function Hy(n,t,e){e||(e="(default)");const r=Ro(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(ur(s,t))return i;throw new p(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new p(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function Yy(n,t){const e=typeof n=="object"?n:wm(),r=typeof n=="string"?n:t||"(default)",i=Ro(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uf("firestore");s&&Sd(i,...s)}return i}function tt(n){return n._firestoreClient||Vd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Vd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,c,l){return new Tp(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,vd(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Ny(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Xy(n,t){Dd(n=N(n,$));const e=tt(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");bt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new On;return Cd(e,i,new xa(i,r.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function Jy(n){Dd(n=N(n,$));const t=tt(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");bt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings(),r=new On;return Cd(t,r,new pd(r,e.cacheSizeBytes))}function Cd(n,t,e){const r=new st;return n.asyncQueue.enqueue(async()=>{try{await yi(n,e),await wo(n,t),r.resolve()}catch(i){const s=i;if(!_d(s))throw s;bt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Zy(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new st;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!xt.D())return Promise.resolve();const i=r+"main";await xt.delete(i)}(ma(n._databaseId,n._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function tI(n){return function(e){const r=new st;return e.asyncQueue.enqueueAndForget(async()=>_y(await ka(e),r)),r.promise}(tt(n=N(n,$)))}function eI(n){return ky(tt(n=N(n,$)))}function nI(n){return My(tt(n=N(n,$)))}function rI(n){return _m(n.app,"firestore",n._databaseId.database),n._delete()}function iI(n,t){const e=tt(n=N(n,$)),r=new bd;return By(e,n._databaseId,t,r),r}function sI(n,t){return qy(tt(n=N(n,$)),t).then(e=>e?new lt(n,null,e.query):null)}function Dd(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class xd{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fe(it.fromBase64String(t))}catch(e){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new fe(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function oI(){return new Ee("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^__.*__$/;class uI{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ht(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}class Nd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ht(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class ys{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new ys(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return zi(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(kd(this.Iu)&&aI.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class cI{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qr(t)}pu(t,e,r,i=!1){return new ys({Iu:t,methodName:e,gu:r,path:W.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function je(n){const t=n._freezeSettings(),e=Qr(n._databaseId);return new cI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Is(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);qa("Data must be an object, but it was:",o,r);const a=Fd(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Vr(t,h,e);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Bd(l,d)||l.push(d)}u=new St(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new uI(new gt(a),u,c)}class Yr extends Te{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yr}}function Md(n,t,e){return new ys({Iu:3,gu:t.settings.gu,methodName:n._methodName,du:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Fa extends Te{_toFieldTransform(t){return new Gr(t.path,new gn)}isEqual(t){return t instanceof Fa}}class lI extends Te{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=Md(this,t,!0),r=this.yu.map(s=>Ke(s,e)),i=new Fe(r);return new Gr(t.path,i)}isEqual(t){return this===t}}class hI extends Te{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=Md(this,t,!0),r=this.yu.map(s=>Ke(s,e)),i=new Le(r);return new Gr(t.path,i)}isEqual(t){return this===t}}class dI extends Te{constructor(t,e){super(t),this.wu=e}_toFieldTransform(t){const e=new pn(t.serializer,fh(t.serializer,this.wu));return new Gr(t.path,e)}isEqual(t){return this===t}}function La(n,t,e,r){const i=n.pu(1,t,e);qa("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();ye(r,(u,c)=>{const l=Es(t,u,e);c=ut(c);const h=i.Ru(l);if(c instanceof Yr)s.push(l);else{const d=Ke(c,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new St(s);return new Nd(o,a,i.fieldTransforms)}function Ba(n,t,e,r,i,s){const o=n.pu(1,t,e),a=[Vr(t,r,e)],u=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Vr(t,s[d])),u.push(s[d+1]);const c=[],l=gt.empty();for(let d=a.length-1;d>=0;--d)if(!Bd(c,a[d])){const m=a[d];let E=u[d];E=ut(E);const y=o.Ru(m);if(E instanceof Yr)c.push(m);else{const I=Ke(E,y);I!=null&&(c.push(m),l.set(m,I))}}const h=new St(c);return new Nd(l,h,o.fieldTransforms)}function Od(n,t,e,r=!1){return Ke(e,n.pu(r?4:3,t))}function Ke(n,t){if(Ld(n=ut(n)))return qa("Unsupported field value:",t,n),Fd(n,t);if(n instanceof Te)return function(r,i){if(!kd(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ke(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Y.fromDate(r);return{timestampValue:_n(i.serializer,s)}}if(r instanceof Y){const s=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_n(i.serializer,s)}}if(r instanceof _s)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fe)return{bytesValue:Rh(i.serializer,r._byteString)};if(r instanceof J){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${ps(r)}`)}(n,t)}function Fd(n,t){const e={};return Kl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ye(n,(r,i)=>{const s=Ke(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof _s||n instanceof fe||n instanceof J||n instanceof Te)}function qa(n,t,e){if(!Ld(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ps(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function Vr(n,t,e){if((t=ut(t))instanceof Ee)return t._internalPath;if(typeof t=="string")return Es(n,t);throw zi("Field path arguments must be of type string or ",n,!1,void 0,e)}const fI=new RegExp("[~\\*/\\[\\]]");function Es(n,t,e){if(t.search(fI)>=0)throw zi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ee(...t.split("."))._internalPath}catch{throw zi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function zi(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new p(g.INVALID_ARGUMENT,a+n+u)}function Bd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ts("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class mI extends Cr{data(){return super.data()}}function Ts(n,t){return typeof t=="string"?Es(n,t):t instanceof Ee?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ua{}class Ln extends Ua{}function gI(n,t,...e){let r=[];t instanceof Ua&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof Qe).length,a=s.filter(u=>u instanceof Bn).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Bn extends Ln{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Bn(t,e,r)}_apply(t){const e=this._parse(t);return zd(t._query,e),new lt(t.firestore,t.converter,ho(t._query,e))}_parse(t){const e=je(t.firestore);return function(s,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){yc(h,l);const m=[];for(const E of h)m.push(_c(u,s,E));d={arrayValue:{values:m}}}else d=_c(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||yc(h,l),d=Od(a,o,h,l==="in"||l==="not-in");return k.create(c,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function pI(n,t,e){const r=t,i=Ts("where",n);return Bn._create(i,r,e)}class Qe extends Ua{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qe(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:q.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)zd(o,u),o=ho(o,u)}(t._query,e),new lt(t.firestore,t.converter,ho(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _I(...n){return n.forEach(t=>$d("or",t)),Qe._create("or",n)}function yI(...n){return n.forEach(t=>$d("and",t)),Qe._create("and",n)}class ws extends Ln{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ws(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ar(s,o)}(t._query,this._field,this._direction);return new lt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function II(n,t="asc"){const e=t,r=Ts("orderBy",n);return ws._create(r,e)}class Xr extends Ln{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Xr(t,e,r)}_apply(t){return new lt(t.firestore,t.converter,xi(t._query,this._limit,this._limitType))}}function EI(n){return Rd("limit",n),Xr._create("limit",n,"F")}function TI(n){return Rd("limitToLast",n),Xr._create("limitToLast",n,"L")}class Jr extends Ln{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Jr(t,e,r)}_apply(t){const e=Ud(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function wI(...n){return Jr._create("startAt",n,!0)}function vI(...n){return Jr._create("startAfter",n,!1)}class Zr extends Ln{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Zr(t,e,r)}_apply(t){const e=Ud(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function AI(...n){return Zr._create("endBefore",n,!1)}function RI(...n){return Zr._create("endAt",n,!0)}function Ud(n,t,e,r){if(e[0]=ut(e[0]),e[0]instanceof Cr)return function(s,o,a,u,c){if(!u)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of an(s))if(h.field.isKeyField())l.push(Me(o,u.key));else{const d=u.data.field(h.field);if(os(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const m=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}l.push(d)}return new he(l,c)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=je(n.firestore);return function(o,a,u,c,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let E=0;E<l.length;E++){const y=l[E];if(d[E].field.isKeyField()){if(typeof y!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!Zo(o)&&y.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const I=o.path.child(F.fromString(y));if(!w.isDocumentKey(I))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const b=new w(I);m.push(Me(a,b))}else{const I=Od(u,c,y);m.push(I)}}return new he(m,h)}(n._query,n.firestore._databaseId,i,t,e,r)}}function _c(n,t,e){if(typeof(e=ut(e))=="string"){if(e==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zo(t)&&e.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(F.fromString(e));if(!w.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Me(n,new w(r))}if(e instanceof J)return Me(n,e._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ps(e)}.`)}function yc(n,t){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zd(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function $d(n,t){if(!(t instanceof Bn||t instanceof Qe))throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class za{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return X(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ye(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new _s(X(t.latitude),X(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=as(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=ae(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=F.fromString(t);R(kh(r));const i=new ue(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(e)||et(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class SI extends za{constructor(t){super(),this.firestore=t}convertBytes(t){return new fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new J(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){return new An("sum",Vr("sum",n))}function bI(n){return new An("avg",Vr("average",n))}function Gd(){return new An("count")}function VI(n,t){var e,r;return n instanceof An&&t instanceof An&&n.aggregateType===t.aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function CI(n,t){return Oa(n.query,t.query)&&ur(n.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ze extends Cr{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ts("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class or extends ze{data(t={}){return super.data(t)}}class $e{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new re(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new or(this._firestore,this._userDataWriter,r.key,r,new re(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new or(i._firestore,i._userDataWriter,a.doc.key,a.doc,new re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new or(i._firestore,i._userDataWriter,a.doc.key,a.doc,new re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:DI(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function DI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function xI(n,t){return n instanceof ze&&t instanceof ze?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof $e&&t instanceof $e&&n._firestore===t._firestore&&Oa(n.query,t.query)&&n.metadata.isEqual(t.metadata)&&n._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){n=N(n,J);const t=N(n.firestore,$);return Td(tt(t),n._key).then(e=>$a(t,n,e))}class we extends za{constructor(t){super(),this.firestore=t}convertBytes(t){return new fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new J(this.firestore,null,e)}}function kI(n){n=N(n,J);const t=N(n.firestore,$),e=tt(t),r=new we(t);return Oy(e,n._key).then(i=>new ze(t,r,n._key,i,new re(i!==null&&i.hasLocalMutations,!0),n.converter))}function MI(n){n=N(n,J);const t=N(n.firestore,$);return Td(tt(t),n._key,{source:"server"}).then(e=>$a(t,n,e))}function OI(n){n=N(n,lt);const t=N(n.firestore,$),e=tt(t),r=new we(t);return qd(n._query),wd(e,n._query).then(i=>new $e(t,r,n,i))}function FI(n){n=N(n,lt);const t=N(n.firestore,$),e=tt(t),r=new we(t);return Fy(e,n._query).then(i=>new $e(t,r,n,i))}function LI(n){n=N(n,lt);const t=N(n.firestore,$),e=tt(t),r=new we(t);return wd(e,n._query,{source:"server"}).then(i=>new $e(t,r,n,i))}function BI(n,t,e){n=N(n,J);const r=N(n.firestore,$),i=vs(n.converter,t,e);return qn(r,[Is(je(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,H.none())])}function qI(n,t,e,...r){n=N(n,J);const i=N(n.firestore,$),s=je(i);let o;return o=typeof(t=ut(t))=="string"||t instanceof Ee?Ba(s,"updateDoc",n._key,t,e,r):La(s,"updateDoc",n._key,t),qn(i,[o.toMutation(n._key,H.exists(!0))])}function UI(n){return qn(N(n.firestore,$),[new Dn(n._key,H.none())])}function zI(n,t){const e=N(n.firestore,$),r=Pd(n),i=vs(n.converter,t);return qn(e,[Is(je(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,H.exists(!1))]).then(()=>r)}function $I(n,...t){var e,r,i;n=ut(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||vo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(vo(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(n instanceof J)c=N(n.firestore,$),l=Vn(n._key.path),u={next:h=>{t[o]&&t[o]($a(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=N(n,lt);c=N(h.firestore,$),l=h._query;const d=new we(c);u={next:m=>{t[o]&&t[o](new $e(c,d,h,m))},error:t[o+1],complete:t[o+2]},qd(n._query)}return function(d,m,E,y){const I=new ms(y),b=new Ra(m,I,E);return d.asyncQueue.enqueueAndForget(async()=>wa(await vn(d),b)),()=>{I.Na(),d.asyncQueue.enqueueAndForget(async()=>va(await vn(d),b))}}(tt(c),l,a,u)}function GI(n,t){return Ly(tt(n=N(n,$)),vo(t)?t:{next:t})}function qn(n,t){return function(r,i){const s=new st;return r.asyncQueue.enqueueAndForget(async()=>fy(await ka(r),i,s)),s.promise}(tt(n),t)}function $a(n,t,e){const r=e.docs.get(t._key),i=new we(n);return new ze(n,i,t._key,r,new re(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(n){return jd(n,{count:Gd()})}function jd(n,t){const e=N(n.firestore,$),r=tt(e),i=function(o,a){const u=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&u.push(a(o[c],c,o));return u}(t,(s,o)=>new $p(o,s.aggregateType,s._internalFieldPath));return function(o,a,u){const c=new st;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await Ed(o);c.resolve(G_(l,a,u))}catch(l){c.reject(l)}}),c.promise}(r,n._query,i).then(s=>function(a,u,c){const l=new we(a);return new xd(u,l,c)}(e,n,s))}class KI{constructor(t){this.kind="memory",this._onlineComponentProvider=new On,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new wn}toJSON(){return{kind:this.kind}}}class QI{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Kd(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class WI{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new wn}toJSON(){return{kind:this.kind}}}class HI{constructor(t){this.kind="memoryLru",this._offlineComponentProvider=new Vy(t)}toJSON(){return{kind:this.kind}}}function YI(){return new WI}function XI(n){return new HI(n==null?void 0:n.cacheSizeBytes)}function JI(n){return new KI(n)}function ZI(n){return new QI(n)}class tE{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new On,this._offlineComponentProvider=new xa(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class eE{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new On,this._offlineComponentProvider=new pd(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function Kd(n){return new tE(n==null?void 0:n.forceOwnership)}function nE(){return new eE}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=je(t)}set(t,e,r){this._verifyNotCommitted();const i=ee(t,this._firestore),s=vs(i.converter,e,r),o=Is(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,H.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=ee(t,this._firestore);let o;return o=typeof(e=ut(e))=="string"||e instanceof Ee?Ba(this._dataReader,"WriteBatch.update",s._key,e,r,i):La(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,H.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ee(t,this._firestore);return this._mutations=this._mutations.concat(new Dn(e._key,H.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ee(n,t){if((n=ut(n)).firestore!==t)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=je(e)}get(e){const r=ee(e,this._firestore),i=new SI(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new Cr(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Cr(this._firestore,i,r._key,null,r.converter);throw A()})}set(e,r,i){const s=ee(e,this._firestore),o=vs(s.converter,r,i),a=Is(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=ee(e,this._firestore);let a;return a=typeof(r=ut(r))=="string"||r instanceof Ee?Ba(this._dataReader,"Transaction.update",o._key,r,i,s):La(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=ee(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ee(t,this._firestore),r=new we(this._firestore);return super.get(t).then(i=>new ze(this._firestore,r,e._key,i._document,new re(!1,!1),e.converter))}}function iE(n,t,e){n=N(n,$);const r=Object.assign(Object.assign({},rE),e);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new st;return s.asyncQueue.enqueueAndForget(async()=>{const c=await Ed(s);new xy(s.asyncQueue,c,a,o,u).run()}),u.promise}(tt(n),i=>t(new Wd(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){return new Yr("deleteField")}function oE(){return new Fa("serverTimestamp")}function aE(...n){return new lI("arrayUnion",n)}function uE(...n){return new hI("arrayRemove",n)}function cE(n){return new dI("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n){return tt(n=N(n,$)),new Qd(n,t=>qn(n,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n,t){var e;const r=tt(n=N(n,$));if(!r._uninitializedComponentsProvider||((e=r._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offlineKind)==="memory")return bt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new p(g.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const l=Ic(c,"collectionGroup"),h=[];if(Array.isArray(c.fields))for(const d of c.fields){const m=Es("setIndexConfiguration",Ic(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new Ne(m,2)):d.order==="ASCENDING"?h.push(new Ne(m,0)):d.order==="DESCENDING"&&h.push(new Ne(m,1))}u.push(new hn(hn.UNKNOWN_ID,l,h,dn.empty()))}return u}(t);return Uy(r,i)}function Ic(n,t){if(typeof n[t]!="string")throw new p(g.INVALID_ARGUMENT,"Missing string value for: "+t);return n[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this._client=t,this.type="PersistentCacheIndexManager"}}function dE(n){var t;n=N(n,$);const e=Ec.get(n);if(e)return e;const r=tt(n);if(((t=r._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)!=="persistent")return null;const i=new Hd(r);return Ec.set(n,i),i}function fE(n){Yd(n,!0)}function mE(n){Yd(n,!1)}function gE(n){n._client.verifyNotTerminated(),$y(n._client).then(t=>_("deleting all persistent cache indexes succeeded")).catch(t=>bt("deleting all persistent cache indexes failed",t))}function Yd(n,t){n._client.verifyNotTerminated(),zy(n._client,t).then(e=>_(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>bt(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Ec=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return Ga.instance.onExistenceFilterMismatch(t)}}class Ga{constructor(){this.Su=new Map}static get instance(){return li||(li=new Ga,function(e){if(Ni)throw new Error("a TestingHooksSpi instance is already set");Ni=e}(li)),li}tt(t){this.Su.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),r=this.Su;return r.set(e,t),()=>r.delete(e)}}let li=null;(function(t,e=!0){(function(i){bn=i})(Em),wi(new cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $(new zg(r.getProvider("auth-internal")),new jg(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ue(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zn(mu,"4.3.2",t),Zn(mu,"4.3.2","esm2017")})();const DE=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:za,AggregateField:An,AggregateQuerySnapshot:xd,Bytes:fe,CACHE_SIZE_UNLIMITED:Wy,CollectionReference:Nt,DocumentReference:J,DocumentSnapshot:ze,FieldPath:Ee,FieldValue:Te,Firestore:$,FirestoreError:p,GeoPoint:_s,LoadBundleTask:bd,PersistentCacheIndexManager:Hd,Query:lt,QueryCompositeFilterConstraint:Qe,QueryConstraint:Ln,QueryDocumentSnapshot:or,QueryEndAtConstraint:Zr,QueryFieldFilterConstraint:Bn,QueryLimitConstraint:Xr,QueryOrderByConstraint:ws,QuerySnapshot:$e,QueryStartAtConstraint:Jr,SnapshotMetadata:re,Timestamp:Y,Transaction:Wd,WriteBatch:Qd,_AutoId:Ho,_ByteString:it,_DatabaseId:ue,_DocumentKey:w,_EmptyAppCheckTokenProvider:Kg,_EmptyAuthCredentialsProvider:kl,_FieldPath:W,_TestingHooks:pE,_cast:N,_debugAssert:qg,_isBase64Available:Ip,_logWarn:bt,_validateIsNotUsedTogether:Ad,addDoc:zI,aggregateFieldEqual:VI,aggregateQuerySnapshotEqual:CI,and:yI,arrayRemove:uE,arrayUnion:aE,average:bI,clearIndexedDbPersistence:Zy,collection:Gy,collectionGroup:jy,connectFirestoreEmulator:Sd,count:Gd,deleteAllPersistentCacheIndexes:gE,deleteDoc:UI,deleteField:sE,disableNetwork:nI,disablePersistentCacheIndexAutoCreation:mE,doc:Pd,documentId:oI,enableIndexedDbPersistence:Xy,enableMultiTabIndexedDbPersistence:Jy,enableNetwork:eI,enablePersistentCacheIndexAutoCreation:fE,endAt:RI,endBefore:AI,ensureFirestoreConfigured:tt,executeWrite:qn,getAggregateFromServer:jd,getCountFromServer:jI,getDoc:NI,getDocFromCache:kI,getDocFromServer:MI,getDocs:OI,getDocsFromCache:FI,getDocsFromServer:LI,getFirestore:Yy,getPersistentCacheIndexManager:dE,increment:cE,initializeFirestore:Hy,limit:EI,limitToLast:TI,loadBundle:iI,memoryEagerGarbageCollector:YI,memoryLocalCache:JI,memoryLruGarbageCollector:XI,namedQuery:sI,onSnapshot:$I,onSnapshotsInSync:GI,or:_I,orderBy:II,persistentLocalCache:ZI,persistentMultipleTabManager:nE,persistentSingleTabManager:Kd,query:gI,queryEqual:Oa,refEqual:Ky,runTransaction:iE,serverTimestamp:oE,setDoc:BI,setIndexConfiguration:hE,setLogLevel:Bg,snapshotEqual:xI,startAfter:vI,startAt:wI,sum:PI,terminate:rI,updateDoc:qI,waitForPendingWrites:tI,where:pI,writeBatch:lE},Symbol.toStringTag,{value:"Module"}));export{cr as C,Rc as E,Rn as F,Sc as L,Em as S,wi as _,Ro as a,wm as b,SE as c,ur as d,Ac as e,wE as f,ut as g,_E as h,IE as i,yE as j,EE as k,af as l,RE as m,O as n,ar as o,TE as p,AE as q,Zn as r,ef as s,vE as t,uf as u,ff as v,lf as w,Tm as x,Yy as y,DE as z};
