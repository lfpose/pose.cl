function w(){}function U(e){return e()}function B(){return Object.create(null)}function $(e){e.forEach(U)}function F(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}let x=!1;function Q(){x=!0}function X(){x=!1}function Y(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function Z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const a=[];for(let s=0;s<t.length;s++){const h=t[s];h.claim_order!==void 0&&a.push(h)}t=a}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let a=0;a<t.length;a++){const s=t[a].claim_order,h=(l>0&&t[n[l]].claim_order<=s?l+1:Y(1,l,u=>t[n[u]].claim_order,s))-1;i[a]=n[h]+1;const f=h+1;n[f]=a,l=Math.max(f,l)}const c=[],r=[];let o=t.length-1;for(let a=n[l]+1;a!=0;a=i[a-1]){for(c.push(t[a-1]);o>=a;o--)r.push(t[o]);o--}for(;o>=0;o--)r.push(t[o]);c.reverse(),r.sort((a,s)=>a.claim_order-s.claim_order);for(let a=0,s=0;a<r.length;a++){for(;s<c.length&&r[a].claim_order>=c[s].claim_order;)s++;const h=s<c.length?c[s]:null;e.insertBefore(r[a],h)}}function v(e,t){if(x){for(Z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){e.insertBefore(t,n||null)}function S(e,t,n){x&&!n?v(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function ne(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function V(e){return document.createTextNode(e)}function H(){return V(" ")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return Array.from(e.childNodes)}function q(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,i,l=!1){q(e);const c=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const a=n(o);return a===void 0?e.splice(r,1):e[r]=a,l||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const a=n(o);return a===void 0?e.splice(r,1):e[r]=a,l?a===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function ie(e,t,n,i){return R(e,l=>l.nodeName===t,l=>{const c=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>l.removeAttribute(r))},()=>i(t))}function E(e,t,n){return ie(e,t,n,p)}function re(e,t){return R(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(t),!0)}function j(e){return re(e," ")}function I(e,t,n){for(let i=n;i<e.length;i+=1){const l=e[i];if(l.nodeType===8&&l.textContent.trim()===t)return i}return e.length}function ce(e,t){const n=I(e,"HTML_TAG_START",0),i=I(e,"HTML_TAG_END",n);if(n===i)return new T(void 0,t);q(e);const l=e.splice(n,i-n+1);d(l[0]),d(l[l.length-1]);const c=l.slice(1,l.length-1);for(const r of c)r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new T(c,t)}class ae{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=ne(n.nodeName):this.e=p(n.nodeName),this.t=n,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)ee(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}class T extends ae{constructor(t,n=!1){super(n),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)S(this.t,this.n[n],t)}}let z;function g(e){z=e}const m=[],D=[],b=[],O=[],se=Promise.resolve();let A=!1;function oe(){A||(A=!0,se.then(W))}function N(e){b.push(e)}const k=new Set;let y=0;function W(){const e=z;do{for(;y<m.length;){const t=m[y];y++,g(t),fe(t.$$)}for(g(null),m.length=0,y=0;D.length;)D.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while(m.length);for(;O.length;)O.pop()();A=!1,k.clear(),g(e)}function fe(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const ue=new Set;function he(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function de(e,t,n,i){const{fragment:l,on_mount:c,on_destroy:r,after_update:o}=e.$$;l&&l.m(t,n),i||N(()=>{const a=c.map(U).filter(F);r?r.push(...a):$(a),e.$$.on_mount=[]}),o.forEach(N)}function _e(e,t){const n=e.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(m.push(e),oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,l,c,r,o=[-1]){const a=z;g(e);const s=e.$$={fragment:null,ctx:null,props:c,update:w,not_equal:l,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:B(),dirty:o,skip_bound:!1,root:t.target||a.$$.root};r&&r(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(f,u,...L)=>{const C=L.length?L[0]:u;return s.ctx&&l(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),h&&me(e,f)),u}):[],s.update(),h=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){Q();const f=M(t.target);s.fragment&&s.fragment.l(f),f.forEach(d)}else s.fragment&&s.fragment.c();t.intro&&he(e.$$.fragment),de(e,t.target,t.anchor,t.customElement),X(),W()}g(a)}class pe{$destroy(){_e(this,1),this.$destroy=w}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e,t,n){const i=e.slice();return i[5]=t[n],i[7]=n,i}function P(e){let t,n,i=e[3][e[7]]+"",l,c,r,o,a,s,h;return{c(){t=p("label"),n=new T(!1),l=H(),c=p("input"),o=H(),this.h()},l(f){t=E(f,"LABEL",{class:!0});var u=M(t);n=ce(u,!1),l=j(u),c=E(u,"INPUT",{type:!0,name:!0,title:!0,"aria-label":!0}),o=j(u),u.forEach(d),this.h()},h(){n.a=l,_(c,"type","radio"),_(c,"name","theme-toggle"),c.checked=r=e[0]===e[5],c.value=e[5],_(c,"title",`Use ${e[5]} theme`),_(c,"aria-label",`Use ${e[5]} theme`),_(t,"class",a=e[0]===e[5]?"checked":"")},m(f,u){S(f,t,u),n.m(i,t),v(t,l),v(t,c),v(t,o),s||(h=le(c,"change",e[2]),s=!0)},p(f,u){u&1&&r!==(r=f[0]===f[5])&&(c.checked=r),u&1&&a!==(a=f[0]===f[5]?"checked":"")&&_(t,"class",a)},d(f){f&&d(t),s=!1,h()}}}function ye(e){let t,n=e[1],i=[];for(let l=0;l<n.length;l+=1)i[l]=P(G(e,n,l));return{c(){t=p("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){t=E(l,"DIV",{class:!0});var c=M(t);for(let r=0;r<i.length;r+=1)i[r].l(c);c.forEach(d),this.h()},h(){_(t,"class","theme-toggle")},m(l,c){S(l,t,c);for(let r=0;r<i.length;r+=1)i[r].m(t,null)},p(l,[c]){if(c&15){n=l[1];let r;for(r=0;r<n.length;r+=1){const o=G(l,n,r);i[r]?i[r].p(o,c):(i[r]=P(o),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},i:w,o:w,d(l){l&&d(t),te(i,l)}}}function ve(e,t,n){const i=typeof document<"u"?document.documentElement:null,l=["light","dark"];let c="";typeof localStorage<"u"&&localStorage.getItem("theme")?c=localStorage.getItem("theme"):typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(c="dark");function r(a){n(0,c=a.target.value),localStorage.setItem("theme",c)}const o=[`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>`,`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`];return e.$$.update=()=>{e.$$.dirty&1&&(i&&c==="light"?i.classList.remove("theme-dark"):i&&c==="dark"&&i.classList.add("theme-dark"))},[c,l,r,o]}class be extends pe{constructor(t){super(),ge(this,t,ve,ye,J,{})}}export{be as default};
