(this["webpackJsonpgames-app"]=this["webpackJsonpgames-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),o=(n(15),n(16),n(9)),l=n(2),A=n(4),u=(n(17),n(18),n.p+"static/media/game-console.29c9282b.png");n(19);var d=function(e){return Object(a.jsx)("button",{onClick:e.onClick,className:"open-button",children:e.plusIcon?Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAClSURBVFiF7ZcxCgIxEEXfSPA8VlbbeCRP4pG0cJut9jwS+BYOKMIWk8iuxXwY+Clm8mBIJjFJtMjM9sDVlydJj6ZCkpoCGAB5DK11dk3UL5UFH1IPwE+UAAmQAAmQAMWn2pH4fX749GYW3bsCE8DIe6qtHePmLTCgpwUX92dgDuZXYCr+krkHk/nq+SzpFq0Bf3AKEiABEiABEqAHoC74kGzr7/kTc/SXg4kZAs8AAAAASUVORK5CYII=",alt:"Plus icon",className:"open-button__icon"}):Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADowAAA6MBw2k+CgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABLSURBVFiF7daxDYBADAPAC/tQsxwl0337A4UtSIEtpfZJaVzdbTLHaHsAAQQQQAABoHDhwflx98YNCz10Ky+oLKIAAggggAB+D3gBHMoqGcSPfwoAAAAASUVORK5CYII=",alt:"Minus icon",className:"open-button__icon"})})};var j=function(e){var t=r.a.useState(!0),n=Object(A.a)(t,2),c=n[0],i=n[1],s=function(){for(var t,n=[e.gameData.RatingE,e.gameData.RatingM,e.gameData.RatingT],a=0;a<n.length;a++)switch("1"===n[a]&&(t=a),t){case 0:return"E";case 1:return"M";case 2:return"T";default:return"N/A"}}(),o=c?null:Object(a.jsx)("div",{className:"game__info-div--subdiv",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Used Price:"})," $",e.gameData.Usedprice]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Console:"})," ",e.gameData.Console]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Genre:"})," ",e.gameData.Genre]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Rating:"})," ",s]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Publisher: "}),e.gameData.Publisher]})]})});return Object(a.jsxs)("div",{className:"game__wrapper",children:[Object(a.jsx)("div",{className:"game__pic-div",children:Object(a.jsx)("img",{src:u,className:"game__pic",alt:"game pic"})}),Object(a.jsxs)("div",{className:"game__info-div",children:[Object(a.jsx)("h3",{children:e.gameData.Title}),Object(a.jsxs)("ul",{className:"game__info-div-ul",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Year Realeased:"})," ",e.gameData.YearReleased]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"US Sales (Millions):"})," $",e.gameData["US Sales (millions)"]]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Review Score:"})," ",e.gameData["Review Score"]]})]}),o]}),Object(a.jsx)("div",{className:"game__open-button-div",children:Object(a.jsx)(d,{onClick:function(){i(!c)},plusIcon:c})})]})};n(20);var b=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:e.placeholder,className:"searchbar",onChange:function(t){return e.onChange(t)}})})};n(21);var g=function(e){return Object(a.jsx)("div",{className:"radio-buttons__wrapper",children:Object(a.jsx)("table",{className:"radio-buttons__table",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"year"===e.buttonVal?"radio-buttons__td first radio-button--highlight":"radio-buttons__td first",onClick:function(t){return e.onClick("year")},children:"Year"}),Object(a.jsx)("td",{className:"sales"===e.buttonVal?"radio-buttons__td second radio-button--highlight":"radio-buttons__td second",onClick:function(t){return e.onClick("sales")},children:"Sales"}),Object(a.jsx)("td",{className:"review-score"===e.buttonVal?"radio-buttons__td third radio-button--highlight":"radio-buttons__td third",onClick:function(t){return e.onClick("review-score")},children:"Review Score"}),Object(a.jsx)("td",{className:e.arrowBtn?"radio-button__arrow":"radio-button__arrow arrowDown",children:Object(a.jsx)("button",{className:"radio-button__arrow__button",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF6SURBVEiJtZYxbsJAEEXfIucKFJRpLIpUgROgVFwhovMdkoKa2mfgBjTpUwaocgcUUVg0ERLNpPBfZeWsF5LglUZrjf/8vzue2bUzM9qGc64PjIERcK8ZYANsNa/NbN9KYmY/DMiAOXACLLCDLPSdhM2iXBHyIfCm4AoogUcgB5wsl68UxhQzTAoAM+CogBdgEFtVI2YgrCl2FhXQyo/AJ1CcI44IFYo9hjsJc+7T8mvyhohPVxYKzH1a/koeiPh0zX2F9lUJ1SU5v/CbVOLs91TnN8DSzHat9Qw45wrnXJHCiGMpznHGd/Osz5AvgCc935rZcwLuuUYAK+qc5YltL4TZywxYJPC5MCuAHXV3ugvI72RJEepmPIi7XaBJHviTIk2BaIqAhxh5i8isLUU96lMR6moKxwd1TU/M7L35FeWbAK/ChsNzbQGmUiv/2wPBDkpxTqHjRuv+qJCz28NOL7s7rgNQdxdOYyfdXJmByNUufSfC6LjGb8sXmkauCUaogD0AAAAASUVORK5CYII=",alt:"up-arrow",onClick:e.onArrowClick})})})]})})})})};n(22);var h=function(e){return Object(a.jsx)("button",{className:"load-more-btn",onClick:e.onClick,children:"Load More"})},m=n(8),O=n.n(m);var f=function(){var e=r.a.useState([0]),t=Object(A.a)(e,2),n=t[0],i=t[1],s=r.a.useState({titleInput:"",publisherInput:"",radioButtonInput:"year",arrowBtn:!0,numOfGames:20}),u=Object(A.a)(s,2),d=u[0],m=u[1];Object(c.useEffect)((function(){fetch("https://video-game-data-api.herokuapp.com/api/video-game-data/data",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e.data)})).catch((function(e){return alert("Sorry! Looks like my api is not working :(")}))}),[]);var f,p,C=function(e){var t=e.slice(0,d.numOfGames).map((function(e){return Object(a.jsx)(j,{gameData:e},e.id)}));return console.log("finished creating game components"),t},x=function(e){var t=d.arrowBtn?-1:1,n=d.arrowBtn?1:-1;switch(d.radioButtonInput){case"year":return f=e.length,e.sort((function(e,a){return e.YearReleased>a.YearReleased?t:n}));case"sales":return f=e.length,e.sort((function(e,a){return e["US Sales (millions)"]>a["US Sales (millions)"]?t:n}));case"review-score":return f=e.length,e.sort((function(e,a){return e["Review Score"]>a["Review Score"]?t:n}))}};if(d.titleInput||d.publisherInput){var w=Object(o.a)(n);d.titleInput&&(w=w.filter((function(e){return e.Title.toLowerCase().includes(d.titleInput.toLowerCase())}))),d.publisherInput&&(w=w.filter((function(e){return e.Publisher.toLowerCase().includes(d.publisherInput.toLowerCase())}))),p=C(x(w))}else p=C(x(n));return Object(a.jsxs)("div",{className:"games",children:[Object(a.jsx)(b,{placeholder:"Search by Tile...",onChange:function(e){m(Object(l.a)(Object(l.a)({},d),{},{titleInput:e.target.value.toLowerCase()}))}}),Object(a.jsx)(b,{placeholder:"Search by Publisher...",onChange:function(e){m(Object(l.a)(Object(l.a)({},d),{},{publisherInput:e.target.value.toLowerCase()}))}}),Object(a.jsx)(g,{onClick:function(e){m(Object(l.a)(Object(l.a)({},d),{},{radioButtonInput:e}))},onArrowClick:function(){m(Object(l.a)(Object(l.a)({},d),{},{arrowBtn:!d.arrowBtn}))},buttonVal:d.radioButtonInput,arrowBtn:d.arrowBtn}),p,Object(a.jsx)(O.a,{color:"red",loading:n<1,size:150}),Object(a.jsxs)("p",{children:["Showing"," ",d.numOfGames>f?f:d.numOfGames," ","of ",f," results"]}),f>20?Object(a.jsx)(h,{onClick:function(){m(Object(l.a)(Object(l.a)({},d),{},{numOfGames:d.numOfGames+20}))}}):null]})};var p=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),C()}],[[28,1,2]]]);
//# sourceMappingURL=main.7d85b125.chunk.js.map