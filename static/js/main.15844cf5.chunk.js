(this.webpackJsonpreactsanti=this.webpackJsonpreactsanti||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var o=t(1),s=t.n(o),n=t(9),r=t.n(n),i=(t(14),t(7)),c=t(2),l=t(3),u=t(5),d=t(4),p=t(6),h=t(0),b=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:p[this.props.idx].historia})})}}]),t}(s.a.Component),j=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=a.call.apply(a,[this].concat(s))).handleSelect=function(){e.props.onSelect(e.props.opcion)},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"opciones",children:this.props.isFinal?"a"===this.props.opcion?Object(h.jsx)("button",{onClick:function(){return window.location.reload()},children:"Quiere volver a jugar"}):null:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:this.handleSelect,children:this.props.opcion.toUpperCase()}),Object(h.jsx)("h3",{children:p[this.props.idx].opciones[this.props.opcion]})]})})}}]),t}(s.a.Component),m=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e;return Object(h.jsxs)("div",{className:"historial",children:[Object(h.jsxs)("p",{children:["Seleccion anterior: ",null===(e=Object(i.a)(this.props.historial).pop())||void 0===e?void 0:e.toUpperCase()]}),Object(h.jsx)("p",{children:"Historial de opciones elegidas:"}),Object(h.jsx)("ul",{children:this.props.historial.slice(0,-1).map((function(e,a){return Object(h.jsx)("li",{children:e.toUpperCase()},a)}))})]})}}]),t}(s.a.Component),v=[{opcion:"a"},{opcion:"b"}],y=p.map((function(e){return e.id})),O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=a.call.apply(a,[this].concat(s))).state={historial:[],idx:0,isFinal:!1},e.handleSelect=function(a){e.setState((function(e){return{historial:[].concat(Object(i.a)(e.historial),[a]),idx:y.indexOf(e.historial.length+2+a),isFinal:e.historial.length+2===parseInt(Object(i.a)(y).pop()[0])}}))},e.pausarAll=function(){e.pausarLetter(),e.pausarBack()},e.pausarLetter=function(){e.setState({pauseLetters:!e.state.pauseLetters})},e.pausarBack=function(){e.setState({pauseBack:!e.state.pauseBack})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.tick()}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"colorRandom",value:function(){return[Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]}},{key:"tick",value:function(){this.state.pauseAll||(this.state.pauseLetters||this.setState({backColor:this.colorRandom()}),this.state.pauseBack||this.setState({letterColor:this.colorRandom()}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",style:{color:"rgb(".concat(this.state.letterColor,")"),backgroundColor:"rgb(".concat(this.state.backColor,")")},children:[Object(h.jsx)(b,{idx:this.state.idx}),v.map((function(a){return Object(h.jsx)(j,{opcion:a.opcion,idx:e.state.idx,isFinal:e.state.isFinal,onSelect:e.handleSelect},a.opcion)})),Object(h.jsx)(m,{historial:this.state.historial}),Object(h.jsx)("button",{onClick:this.pausarAll,children:"Pausar todo"}),Object(h.jsx)("button",{onClick:this.pausarLetter,children:"Pausar color back"}),Object(h.jsx)("button",{onClick:this.pausarBack,children:"Pausar color letra"})]})}}]),t}(s.a.Component);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.15844cf5.chunk.js.map