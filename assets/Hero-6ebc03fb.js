import{r as l,u as oe,s as ge,a as me,P as Ee,L as ve,j as b,m as R,b as g}from"./index-421d874c.js";import{s as be}from"./styles-bea25d13.js";function se(){const e=l.useRef(!1);return oe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ye(){const e=se(),[n,t]=l.useState(0),o=l.useCallback(()=>{e.current&&t(n+1)},[n]);return[l.useCallback(()=>ge.postRender(o),[o]),n]}class Ce extends l.Component{getSnapshotBeforeUpdate(n){const t=this.props.childRef.current;if(t&&n.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function we({children:e,isPresent:n}){const t=l.useId(),o=l.useRef(null),s=l.useRef({width:0,height:0,top:0,left:0});return l.useInsertionEffect(()=>{const{width:i,height:a,top:c,left:f}=s.current;if(n||!o.current||!i||!a)return;o.current.dataset.motionPopId=t;const r=document.createElement("style");return document.head.appendChild(r),r.sheet&&r.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(r)}},[n]),l.createElement(Ce,{isPresent:n,childRef:o,sizeRef:s},l.cloneElement(e,{ref:o}))}const D=({children:e,initial:n,isPresent:t,onExitComplete:o,custom:s,presenceAffectsLayout:i,mode:a})=>{const c=me(Ie),f=l.useId(),r=l.useMemo(()=>({id:f,initial:n,isPresent:t,custom:s,onExitComplete:p=>{c.set(p,!0);for(const h of c.values())if(!h)return;o&&o()},register:p=>(c.set(p,!1),()=>c.delete(p))}),i?void 0:[t]);return l.useMemo(()=>{c.forEach((p,h)=>c.set(h,!1))},[t]),l.useEffect(()=>{!t&&!c.size&&o&&o()},[t]),a==="popLayout"&&(e=l.createElement(we,{isPresent:t},e)),l.createElement(Ee.Provider,{value:r},e)};function Ie(){return new Map}function _e(e){return l.useEffect(()=>()=>e(),[])}const O=e=>e.key||"";function xe(e,n){e.forEach(t=>{const o=O(t);n.set(o,t)})}function Re(e){const n=[];return l.Children.forEach(e,t=>{l.isValidElement(t)&&n.push(t)}),n}const Se=({children:e,custom:n,initial:t=!0,onExitComplete:o,exitBeforeEnter:s,presenceAffectsLayout:i=!0,mode:a="sync"})=>{let[c]=ye();const f=l.useContext(ve).forceRender;f&&(c=f);const r=se(),p=Re(e);let h=p;const u=new Set,d=l.useRef(h),E=l.useRef(new Map).current,C=l.useRef(!0);if(oe(()=>{C.current=!1,xe(p,E),d.current=h}),_e(()=>{C.current=!0,E.clear(),u.clear()}),C.current)return l.createElement(l.Fragment,null,h.map(m=>l.createElement(D,{key:O(m),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:i,mode:a},m)));h=[...h];const L=d.current.map(O),G=p.map(O),de=L.length;for(let m=0;m<de;m++){const w=L[m];G.indexOf(w)===-1&&u.add(w)}return a==="wait"&&u.size&&(h=[]),u.forEach(m=>{if(G.indexOf(m)!==-1)return;const w=E.get(m);if(!w)return;const ue=L.indexOf(m),fe=()=>{E.delete(m),u.delete(m);const he=d.current.findIndex(pe=>pe.key===m);if(d.current.splice(he,1),!u.size){if(d.current=p,r.current===!1)return;c(),o&&o()}};h.splice(ue,0,l.createElement(D,{key:O(w),isPresent:!1,onExitComplete:fe,custom:n,presenceAffectsLayout:i,mode:a},w))}),h=h.map(m=>{const w=m.key;return u.has(w)?m:l.createElement(D,{key:O(m),isPresent:!0,presenceAffectsLayout:i,mode:a},m)}),l.createElement(l.Fragment,null,u.size?h:h.map(m=>l.cloneElement(m)))};var F;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(F||(F={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var H;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(H||(H={}));var K;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(K||(K={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const U=["user","model","function","system"];var $;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})($||($={}));var P;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(P||(P={}));var B;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(B||(B={}));var Y;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(Y||(Y={}));var N;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(N||(N={}));var q;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(q||(q={}));var W;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(W||(W={}));var J;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(J||(J={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class v extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class S extends v{constructor(n,t){super(n),this.response=t}}class ie extends v{constructor(n,t,o,s){super(n),this.status=t,this.statusText=o,this.errorDetails=s}}class _ extends v{}class ae extends v{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Oe="https://generativelanguage.googleapis.com",Ne="v1beta",Ae="0.24.1",Te="genai-js";var x;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(x||(x={}));class Me{constructor(n,t,o,s,i){this.model=n,this.task=t,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var n,t;const o=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Ne;let i=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Oe}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function ke(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${Te}/${Ae}`),n.join(" ")}async function Le(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",ke(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let o=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new _(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new _(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new _(`Header name ${s} can only be set using the apiClient field`);t.append(s,i)}}return t}async function De(e,n,t,o,s,i){const a=new Me(e,n,t,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},He(i)),{method:"POST",headers:await Le(a),body:s})}}async function M(e,n,t,o,s,i={},a=fetch){const{url:c,fetchOptions:f}=await De(e,n,t,o,s,i);return je(c,f,a)}async function je(e,n,t=fetch){let o;try{o=await t(e,n)}catch(s){Ge(s,e)}return o.ok||await Fe(o,e),o}function Ge(e,n){let t=e;throw t.name==="AbortError"?(t=new ae(`Request aborted when fetching ${n.toString()}: ${e.message}`),t.stack=e.stack):e instanceof ie||e instanceof _||(t=new v(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function Fe(e,n){let t="",o;try{const s=await e.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new ie(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,o)}function He(e){const n={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const t=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>t.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{t.abort()}),n.signal=t.signal}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function j(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new S(`${I(e)}`,e);return Ke(e)}else if(e.promptFeedback)throw new S(`Text not available. ${I(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new S(`${I(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),V(e)[0]}else if(e.promptFeedback)throw new S(`Function call not available. ${I(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new S(`${I(e)}`,e);return V(e)}else if(e.promptFeedback)throw new S(`Function call not available. ${I(e)}`,e)},e}function Ke(e){var n,t,o,s;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function V(e){var n,t,o,s;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Ue=[N.RECITATION,N.SAFETY,N.LANGUAGE];function k(e){return!!e.finishReason&&Ue.includes(e.finishReason)}function I(e){var n,t,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];k(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function A(e){return this instanceof A?(this.v=e,this):new A(e)}function $e(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(u){o[u]&&(s[u]=function(d){return new Promise(function(E,C){i.push([u,d,E,C])>1||c(u,d)})})}function c(u,d){try{f(o[u](d))}catch(E){h(i[0][3],E)}}function f(u){u.value instanceof A?Promise.resolve(u.value.v).then(r,p):h(i[0][2],u)}function r(u){c("next",u)}function p(u){c("throw",u)}function h(u,d){u(d),i.shift(),i.length&&c(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const X=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Pe(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=qe(n),[o,s]=t.tee();return{stream:Ye(o),response:Be(s)}}async function Be(e){const n=[],t=e.getReader();for(;;){const{done:o,value:s}=await t.read();if(o)return j(We(n));n.push(s)}}function Ye(e){return $e(this,arguments,function*(){const t=e.getReader();for(;;){const{value:o,done:s}=yield A(t.read());if(s)break;yield yield A(j(o))}})}function qe(e){const n=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return n.read().then(({value:a,done:c})=>{if(c){if(s.trim()){o.error(new v("Failed to parse stream"));return}o.close();return}s+=a;let f=s.match(X),r;for(;f;){try{r=JSON.parse(f[1])}catch{o.error(new v(`Error parsing JSON response: "${f[1]}"`));return}o.enqueue(r),s=s.substring(f[0].length),f=s.match(X)}return i()}).catch(a=>{let c=a;throw c.stack=a.stack,c.name==="AbortError"?c=new ae("Request aborted when reading from the stream"):c=new v("Error reading from the stream"),c})}}})}function We(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const o of e){if(o.candidates){let s=0;for(const i of o.candidates)if(t.candidates||(t.candidates=[]),t.candidates[s]||(t.candidates[s]={index:s}),t.candidates[s].citationMetadata=i.citationMetadata,t.candidates[s].groundingMetadata=i.groundingMetadata,t.candidates[s].finishReason=i.finishReason,t.candidates[s].finishMessage=i.finishMessage,t.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){t.candidates[s].content||(t.candidates[s].content={role:i.content.role||"user",parts:[]});const a={};for(const c of i.content.parts)c.text&&(a.text=c.text),c.functionCall&&(a.functionCall=c.functionCall),c.executableCode&&(a.executableCode=c.executableCode),c.codeExecutionResult&&(a.codeExecutionResult=c.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[s].content.parts.push(a)}s++}o.usageMetadata&&(t.usageMetadata=o.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function re(e,n,t,o){const s=await M(n,x.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),o);return Pe(s)}async function ce(e,n,t,o){const i=await(await M(n,x.GENERATE_CONTENT,e,!1,JSON.stringify(t),o)).json();return{response:j(i)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function le(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function T(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return Je(n)}function Je(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let o=!1,s=!1;for(const i of e)"functionResponse"in i?(t.parts.push(i),s=!0):(n.parts.push(i),o=!0);if(o&&s)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new v("No content is provided for sending chat message.");return o?n:t}function Ve(e,n){var t;let o={model:n==null?void 0:n.model,generationConfig:n==null?void 0:n.generationConfig,safetySettings:n==null?void 0:n.safetySettings,tools:n==null?void 0:n.tools,toolConfig:n==null?void 0:n.toolConfig,systemInstruction:n==null?void 0:n.systemInstruction,cachedContent:(t=n==null?void 0:n.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new _("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const i=T(e);o.contents=[i]}return{generateContentRequest:o}}function z(e){let n;return e.contents?n=e:n={contents:[T(e)]},e.systemInstruction&&(n.systemInstruction=le(e.systemInstruction)),n}function Xe(e){return typeof e=="string"||Array.isArray(e)?{content:T(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ze={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Qe(e){let n=!1;for(const t of e){const{role:o,parts:s}=t;if(!n&&o!=="user")throw new v(`First content should be with role 'user', got ${o}`);if(!U.includes(o))throw new v(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(U)}`);if(!Array.isArray(s))throw new v("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new v("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const c of s)for(const f of Q)f in c&&(i[f]+=1);const a=ze[o];for(const c of Q)if(!a.includes(c)&&i[c]>0)throw new v(`Content with role '${o}' can't contain '${c}' part`);n=!0}}function Z(e){var n;if(e.candidates===void 0||e.candidates.length===0)return!1;const t=(n=e.candidates[0])===null||n===void 0?void 0:n.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(const o of t.parts)if(o===void 0||Object.keys(o).length===0||o.text!==void 0&&o.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ee="SILENT_ERROR";class Ze{constructor(n,t,o,s={}){this.model=t,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,o!=null&&o.history&&(Qe(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n,t={}){var o,s,i,a,c,f;await this._sendPromise;const r=T(n),p={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,r]},h=Object.assign(Object.assign({},this._requestOptions),t);let u;return this._sendPromise=this._sendPromise.then(()=>ce(this._apiKey,this.model,p,h)).then(d=>{var E;if(Z(d.response)){this._history.push(r);const C=Object.assign({parts:[],role:"model"},(E=d.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(C)}else{const C=I(d.response);C&&console.warn(`sendMessage() was unsuccessful. ${C}. Inspect response object for details.`)}u=d}).catch(d=>{throw this._sendPromise=Promise.resolve(),d}),await this._sendPromise,u}async sendMessageStream(n,t={}){var o,s,i,a,c,f;await this._sendPromise;const r=T(n),p={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,r]},h=Object.assign(Object.assign({},this._requestOptions),t),u=re(this._apiKey,this.model,p,h);return this._sendPromise=this._sendPromise.then(()=>u).catch(d=>{throw new Error(ee)}).then(d=>d.response).then(d=>{if(Z(d)){this._history.push(r);const E=Object.assign({},d.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=I(d);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(d=>{d.message!==ee&&console.error(d)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function et(e,n,t,o){return(await M(n,x.COUNT_TOKENS,e,!1,JSON.stringify(t),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function tt(e,n,t,o){return(await M(n,x.EMBED_CONTENT,e,!1,JSON.stringify(t),o)).json()}async function nt(e,n,t,o){const s=t.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await M(n,x.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class te{constructor(n,t,o={}){this.apiKey=n,this._requestOptions=o,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=le(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(n,t={}){var o;const s=z(n),i=Object.assign(Object.assign({},this._requestOptions),t);return ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(n,t={}){var o;const s=z(n),i=Object.assign(Object.assign({},this._requestOptions),t);return re(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(n){var t;return new Ze(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this._requestOptions)}async countTokens(n,t={}){const o=Ve(n,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return et(this.apiKey,this.model,o,s)}async embedContent(n,t={}){const o=Xe(n),s=Object.assign(Object.assign({},this._requestOptions),t);return tt(this.apiKey,this.model,o,s)}async batchEmbedContents(n,t={}){const o=Object.assign(Object.assign({},this._requestOptions),t);return nt(this.apiKey,this.model,n,o)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ot{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new te(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t,o){if(!n.name)throw new _("Cached content must contain a `name` field.");if(!n.model)throw new _("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if(t!=null&&t[a]&&n[a]&&(t==null?void 0:t[a])!==n[a]){if(a==="model"){const c=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,f=n.model.startsWith("models/")?n.model.replace("models/",""):n.model;if(c===f)continue}throw new _(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${n[a]})`)}const i=Object.assign(Object.assign({},t),{model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n});return new te(this.apiKey,i,o)}}const st="AIzaSyAlKNLf8ds3vNDpc_OgU8vjvkxb22h73Dw",ne=new ot(st),it=`You are Kamva AI — the personal AI assistant embedded in Kamvelihle Fatman's portfolio website. You speak in a friendly, confident, helpful tone. Your job is to answer questions about Kamvelihle (also known as Kamva).

Here is everything you know about him:

NAME: Kamvelihle Fatman (nickname: Kamva)
ROLE: Full-Stack Developer
LOCATION: Johannesburg, Gauteng, South Africa
EMAIL: kamvelihlefatman@gmail.com
GITHUB: https://github.com/Kamva-pro

SKILLS: HTML, CSS, JavaScript, React, React Native, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Supabase, Firebase, Flutter, Three.js, Tailwind CSS, Bootstrap, Figma, WordPress, WooCommerce

EXPERIENCE:
- Junior Web Developer at Luminous Graphics: Built and maintained WordPress & Shopify sites, improved UI/UX and functionality, converted Figma mockups into responsive interfaces, maintained clean documentation.
- Freelance Developer (Self-employed): Designed and developed custom websites for local businesses with focus on responsive design, 100% uptime, and fast rendering. Implemented SEO best practices.

EDUCATION:
- Web Design at CodeSpace Academy: Developed expertise in HTML, CSS, JavaScript, and UI/UX design.
- Information Technology: Software Engineering at WeThinkCode_: Gained hands-on experience in OOP, Software Architecture, Agile methodologies, software testing, and CI/CD pipelines.

PROJECTS:
- PM Grave Closures (HTML, CSS, JS): Soweto grave maintenance business website.
- Trip Tips (React, Bootstrap): Travel blog with ideas and insights on places worldwide.
- Mate Bets (React, Express, Supabase, Firebase): Interactive chess betting platform.
- Kasi IN (React Native, Expo, Node.js, PostgreSQL): Township food delivery mobile app.
- Mgijima (HTML, CSS, Firebase, JS): NPO website providing assistance for schools and organisations.
- EduConnect (React, Node.js, Express, MongoDB): Educational platform connecting students with tutors.

Rules:
- Keep answers concise and conversational (2–5 sentences max unless listing items).
- Use markdown-style **bold** for key terms.
- Use emoji sparingly to feel friendly.
- If asked something unrelated to Kamva's portfolio/skills/work, politely redirect to what you know.
- Never make up information not provided above.`;async function at(e,n){if(!ne)return rt(e);try{const t=ne.getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:it}),o=n.slice(-10).map(a=>({role:a.role==="user"?"user":"model",parts:[{text:a.text}]}));return(await t.startChat({history:o}).sendMessage(e)).response.text()}catch(t){return console.error("Gemini error:",t),"Oops, something went wrong talking to Gemini. 😅 Try asking again in a moment!"}}const y={name:"Kamvelihle Fatman",role:"Full-Stack Developer",location:"Johannesburg, Gauteng, South Africa",email:"kamvelihlefatman@gmail.com",github:"https://github.com/Kamva-pro",skills:["HTML","CSS","JavaScript","React","React Native","Node.js","Express.js","MongoDB","PostgreSQL","Supabase","Firebase","Flutter","Three.js","Tailwind CSS","Bootstrap","Figma","WordPress","WooCommerce"],experience:[{role:"Junior Web Developer",company:"Luminous Graphics",highlights:["Built and maintained WordPress & Shopify sites, improving UI/UX and functionality.","Converted Figma mockups into responsive, pixel-perfect web interfaces.","Maintained clean documentation and contributed to workflow improvements."]},{role:"Freelance Developer",company:"Self-employed",highlights:["Designed & developed custom websites for local businesses with a focus on responsive design, 100% uptime, and fast rendering.","Implemented SEO best practices to boost search visibility and drive traffic."]}],education:[{qual:"Web Design",inst:"CodeSpace Academy",note:"HTML, CSS, JavaScript & UI/UX design."},{qual:"Information Technology: Software Engineering",inst:"WeThinkCode_",note:"OOP, Software Architecture, Agile, testing & CI/CD pipelines."}],projects:[{name:"PM Grave Closures",tech:"HTML, CSS, JS",desc:"Soweto grave maintenance business web presence."},{name:"Trip Tips",tech:"React, Bootstrap",desc:"Travel blog — cool places worldwide."},{name:"Mate Bets",tech:"React, Express, Supabase, Firebase",desc:"Interactive chess betting platform."},{name:"Kasi IN",tech:"React Native, Expo, Node.js, PostgreSQL",desc:"Township food delivery mobile app."},{name:"Mgijima",tech:"HTML, CSS, Firebase, JS",desc:"NPO website for schools & community orgs."},{name:"EduConnect",tech:"React, Node.js, Express, MongoDB",desc:"E-learning platform connecting students with tutors."}]};function rt(e){const n=e.toLowerCase();return/\b(hi|hello|hey|sup|yo|howzit)\b/.test(n)?"Hey! 👋 I'm Kamva's AI. Ask me anything — skills, projects, experience, or education!":/\b(who|name|about|tell me|describe)\b/.test(n)?`${y.name} is a **${y.role}** based in ${y.location}. He's passionate about building web and mobile products that make a real impact.`:/email|contact|reach/.test(n)?`📧 Reach Kamva at **${y.email}**`:/location|based|where|city/.test(n)?`📍 **${y.location}**`:/role|job|title|what does|work/.test(n)?`Kamva is a **${y.role}** — fluent across frontend, backend, and mobile development.`:/skill|tech|stack|know|language|tool/.test(n)?`**Tech Stack:**
${y.skills.map(t=>`• ${t}`).join(`
`)}`:/experienc|work|career|luminous|freelanc/.test(n)?y.experience.map(t=>`**${t.role}** @ *${t.company}*
${t.highlights.map(o=>`• ${o}`).join(`
`)}`).join(`

`):/education|study|school|codespace|wethink|degree/.test(n)?y.education.map(t=>`**${t.qual}** — *${t.inst}*
${t.note}`).join(`

`):/project|built|portfolio|app|website|kasi|trip|mate|mgijima|educonnect|pmgrave/.test(n)?`**Projects:**

${y.projects.map(t=>`**${t.name}** *(${t.tech})*
${t.desc}`).join(`

`)}`:/github|code|repo/.test(n)?"🚀 Check out his work: **github.com/Kamva-pro**":/hire|available|opportunit|freelanc/.test(n)?`Kamva is open to exciting opportunities! Drop him a line at **${y.email}** 🙌`:`Hmm, not sure about that one 🤔
Try asking about my **skills**, **projects**, **experience**, **education**, or **contact info**.`}const ct=[{id:"about",label:"About",icon:"👤"},{id:"projects",label:"Projects",icon:"💼"},{id:"contact",label:"Contact",icon:"📬"}],lt=[{id:1,text:"👋 Hey, I'm Kamva's AI — powered by Gemini Flash."},{id:2,text:"Ask me anything about him — skills, projects, experience, or education."},{id:3,text:"Or jump to a section using the buttons below ↓"}];function dt({text:e}){return g("span",{children:e.split(`
`).map((n,t)=>b("span",{children:[n.split(/(\*\*[^*]+\*\*)/).map((o,s)=>o.startsWith("**")&&o.endsWith("**")?g("strong",{children:o.slice(2,-2)},s):o),t<e.split(`
`).length-1&&g("br",{})]},t))})}const ht=()=>{const[e,n]=l.useState([]),[t,o]=l.useState(""),[s,i]=l.useState(!1),a=l.useRef(null);l.useEffect(()=>{lt.forEach((r,p)=>{setTimeout(()=>{n(h=>[...h,{role:"bot",text:r.text,id:r.id+Date.now()}])},400+p*700)})},[]),l.useEffect(()=>{var r;(r=a.current)==null||r.scrollIntoView({behavior:"smooth",block:"nearest"})},[e,s]);const c=async()=>{const r=t.trim();if(!r||s)return;const p={role:"user",text:r,id:Date.now()};n(d=>[...d,p]),o(""),i(!0);const h=[...e,p],u=await at(r,h.filter(d=>d.role!=="system"));n(d=>[...d,{role:"bot",text:u,id:Date.now()+1}]),i(!1)},f=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),c())};return b("section",{className:"relative w-full h-screen mx-auto flex flex-col items-center justify-center px-4 pt-20 pb-4 overflow-hidden",children:[b(R.h1,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},className:`${be.heroHeadText} text-white text-center mb-4`,children:["Hi, I'm ",g("span",{style:{color:"#915eff"},children:"Kamvelihle"})]}),g(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"flex flex-wrap justify-center gap-2 mb-4",children:ct.map(r=>b("button",{onClick:()=>{const p=document.getElementById(r.id);p?p.scrollIntoView({behavior:"smooth"}):(window.location.hash="#/",setTimeout(()=>{const h=document.getElementById(r.id);h&&h.scrollIntoView({behavior:"smooth"})},500))},className:"px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95",style:{background:"rgba(145,94,255,0.12)",border:"1px solid rgba(145,94,255,0.3)",color:"#c4b5fd"},children:[r.icon," ",r.label]},r.id))}),b(R.div,{initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},className:"w-full max-w-2xl flex flex-col rounded-3xl overflow-hidden",style:{background:"linear-gradient(145deg, #0f0f1f 0%, #1a1a2e 100%)",border:"1px solid rgba(145,94,255,0.25)",boxShadow:"0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(145,94,255,0.1)",minHeight:0},children:[b("div",{className:"flex items-center gap-3 px-6 py-4",style:{borderBottom:"1px solid rgba(145,94,255,0.15)",background:"rgba(145,94,255,0.05)"},children:[g("div",{className:"w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg",style:{background:"linear-gradient(135deg, #915eff, #4a9eff)",boxShadow:"0 4px 20px rgba(145,94,255,0.5)"},children:"K"}),b("div",{children:[g("p",{className:"text-white font-bold text-sm",children:"Kamva AI"}),b("p",{className:"text-xs flex items-center gap-1",style:{color:"#4ade80"},children:[g("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"}),"Online · Powered by Gemini Flash ✨"]})]}),b("div",{className:"ml-auto flex items-center gap-2",children:[g("span",{className:"text-xs px-2 py-0.5 rounded-full font-medium",style:{background:"rgba(145,94,255,0.2)",color:"#c4b5fd",border:"1px solid rgba(145,94,255,0.3)"},children:"gemini-flash"}),g("div",{className:"flex gap-1.5",children:["#ff5f5f","#ffbe2e","#27c93f"].map(r=>g("div",{className:"w-3 h-3 rounded-full",style:{background:r}},r))})]})]}),b("div",{className:"flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3",style:{minHeight:120,maxHeight:"22vh"},children:[g(Se,{initial:!1,children:e.map(r=>b(R.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.25},className:`flex ${r.role==="user"?"justify-end":"justify-start"}`,children:[r.role==="bot"&&g("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2 shrink-0 mt-0.5",style:{background:"linear-gradient(135deg,#915eff,#4a9eff)"},children:"K"}),g("div",{className:"max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed",style:r.role==="user"?{background:"linear-gradient(135deg,#915eff,#4a9eff)",color:"#fff",borderBottomRightRadius:4}:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",color:"#e2e8f0",borderBottomLeftRadius:4},children:g(dt,{text:r.text})})]},r.id))}),s&&b("div",{className:"flex items-center gap-2",children:[g("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0",style:{background:"linear-gradient(135deg,#915eff,#4a9eff)"},children:"K"}),g("div",{className:"px-4 py-3 rounded-2xl flex gap-1 items-center",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",borderBottomLeftRadius:4},children:[0,1,2].map(r=>g(R.span,{className:"w-2 h-2 rounded-full",style:{background:"#915eff"},animate:{y:[0,-5,0]},transition:{duration:.55,repeat:1/0,delay:r*.15}},r))})]}),g("div",{ref:a})]}),b("div",{className:"px-5 py-4 flex gap-3 items-end",style:{borderTop:"1px solid rgba(145,94,255,0.12)"},children:[g("textarea",{id:"hero-chat-input",rows:1,value:t,onChange:r=>o(r.target.value),onKeyDown:f,placeholder:"Ask me about Kamva's skills, projects, experience...",className:"flex-1 resize-none text-sm text-white placeholder-gray-500 bg-transparent outline-none leading-relaxed",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(145,94,255,0.2)",borderRadius:14,padding:"10px 14px",maxHeight:80}}),g("button",{id:"hero-chat-send",onClick:c,disabled:s,className:"w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",style:{background:"linear-gradient(135deg,#915eff,#4a9eff)",boxShadow:"0 4px 15px rgba(145,94,255,0.4)"},children:"↑"})]})]}),g(R.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.5},className:"mt-5 flex flex-wrap justify-center gap-2 max-w-2xl",children:["What skills do you have?","Tell me about your projects","Where did you study?","How can I hire you?"].map(r=>g("button",{onClick:()=>{o(r)},className:"text-xs px-3 py-1.5 rounded-lg transition-all hover:scale-105",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#94a3b8"},children:r},r))})]})};export{ht as default};
