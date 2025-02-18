import{r as m,b as g}from"./index-a29d39f3.js";var u={};Object.defineProperty(u,"__esModule",{value:!0});var a=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(s[t]=i[t])}return s},d=function(){function s(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,t){return i&&s(e.prototype,i),t&&s(e,t),e}}(),l=m,y=b(l),M=g;function b(s){return s&&s.__esModule?s:{default:s}}function _(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function x(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s}function O(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)}var E=function(s){O(e,s);function e(i){_(this,e);var t=x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));t.state={style:{}};var n={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};return t.width=null,t.height=null,t.left=null,t.top=null,t.transitionTimeout=null,t.updateCall=null,t.element=null,t.settings=Object.assign({},n,t.props.options),t.reverse=t.settings.reverse?-1:1,t.onMouseEnter=t.onMouseEnter.bind(t,t.props.onMouseEnter),t.onMouseMove=t.onMouseMove.bind(t,t.props.onMouseMove),t.onMouseLeave=t.onMouseLeave.bind(t,t.props.onMouseLeave),t}return d(e,[{key:"componentDidMount",value:function(){this.element=(0,M.findDOMNode)(this)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){},n=arguments[1];return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:a({},this.state.style,{willChange:"transform"})})),this.setTransition(),t(n)}},{key:"reset",value:function(){var t=this;window.requestAnimationFrame(function(){t.setState(Object.assign({},t.state,{style:a({},t.state.style,{transform:"perspective("+t.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))})}},{key:"onMouseMove",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){},n=arguments[1];return n.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=n,this.updateCall=requestAnimationFrame(this.update.bind(this,n)),t(n)}},{key:"setTransition",value:function(){var t=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:a({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout(function(){t.setState(Object.assign({},t.state,{style:a({},t.state.style,{transition:""})}))},this.settings.speed)}},{key:"onMouseLeave",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){},n=arguments[1];return this.setTransition(),this.settings.reset&&this.reset(),t(n)}},{key:"getValues",value:function(t){var n=(t.nativeEvent.clientX-this.left)/this.width,h=(t.nativeEvent.clientY-this.top)/this.height,r=Math.min(Math.max(n,0),1),o=Math.min(Math.max(h,0),1),c=(this.reverse*(this.settings.max/2-r*this.settings.max)).toFixed(2),f=(this.reverse*(o*this.settings.max-this.settings.max/2)).toFixed(2),v=r*100,p=o*100;return{tiltX:c,tiltY:f,percentageX:v,percentageY:p}}},{key:"updateElementPosition",value:function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}},{key:"update",value:function(t){var n=this.getValues(t);this.setState(Object.assign({},this.state,{style:a({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:n.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:n.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var t=Object.assign({},this.props.style,this.state.style);return y.default.createElement("div",{style:t,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.props.children)}}]),e}(l.Component),T=u.default=E;export{T as _};
