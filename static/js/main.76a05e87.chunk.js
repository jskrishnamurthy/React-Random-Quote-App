(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(4),r=n(7),u=n(5),c=n(1),i=n(8),s=n(0),h=n.n(s),l=n(6),m=n.n(l),d=(n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={quote:"",author:""},n.getQuoteFromAPI=n.getQuoteFromAPI.bind(Object(c.a)(n)),n.getQuoteFromAPI(),n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"getQuoteFromAPI",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand",{cache:"reload"}).then(function(e){return e.json()}).then(function(t){e.setState({quote:t[0].content,author:t[0].title})})}},{key:"render",value:function(){var e=new RegExp(/(<p>)|(\/p>)/gi),t="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+this.state.quote.replace(e,"");return h.a.createElement("div",{className:"quote-box",id:"quote-box"},h.a.createElement("h1",null,"Quote For Thought!"),h.a.createElement("div",{id:"text",dangerouslySetInnerHTML:{__html:this.state.quote}}),h.a.createElement("p",{id:"author"},"Author:",this.state.author),h.a.createElement("button",{id:"new-quote",onClick:this.getQuoteFromAPI},"Get New Quote"),h.a.createElement("br",null),h.a.createElement("a",{id:"tweet-quote",href:t,target:"_blank"},"Tweet"))}}]),t}(h.a.Component));m.a.render(h.a.createElement(d,null),document.getElementById("root"))},16:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.76a05e87.chunk.js.map