(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(6),i=r.n(s),o=(r(13),r(14),r(15),r(7)),c=r(1),u=r(2),l=r(4),m=r(3);function h(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"border-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"border-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(a.Component),v=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},a}return Object(u.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();f(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:r}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],s=f(a.squares),i=r.map((function(e,r){var a=r?"Go to #"+r:"Start Game";return n.a.createElement("li",{key:r},n.a.createElement("button",{onClick:function(){t.jumpTo(r)}},a))}));return e=s?"Winner is "+s:this.state.stepNumber>8?"NO WINNER! try it again....":"Next player is "+(this.state.xIsNext?"x":"o"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(d,{onClick:function(e){return t.handleClick(e)},squares:a.squares})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ul",null,i)))}}]),r}(a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(o.a)(t[r],3),n=a[0],s=a[1],i=a[2];if(e[n]&&e[n]===e[s]&&e[s]===e[i])return e[n]}return null}var p=function(){return n.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b5625356.chunk.js.map