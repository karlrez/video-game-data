(this["webpackJsonpgames-app"]=this["webpackJsonpgames-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),r=n(7),s=n.n(r),o=(n(15),n(16),n(9)),l=n(2),A=n(4),u=n(8),d=n.n(u),j=n.p+"static/media/game-dataset.10795f86.csv",b=(n(17),n(18),n.p+"static/media/game-console.29c9282b.png");n(19);var g=function(e){return Object(a.jsx)("button",{onClick:e.onClick,children:e.plusIcon?Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAClSURBVFiF7ZcxCgIxEEXfSPA8VlbbeCRP4pG0cJut9jwS+BYOKMIWk8iuxXwY+Clm8mBIJjFJtMjM9sDVlydJj6ZCkpoCGAB5DK11dk3UL5UFH1IPwE+UAAmQAAmQAMWn2pH4fX749GYW3bsCE8DIe6qtHePmLTCgpwUX92dgDuZXYCr+krkHk/nq+SzpFq0Bf3AKEiABEiABEqAHoC74kGzr7/kTc/SXg4kZAs8AAAAASUVORK5CYII=",alt:"Plus icon",className:"open-button__icon"}):Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADowAAA6MBw2k+CgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABLSURBVFiF7daxDYBADAPAC/tQsxwl0337A4UtSIEtpfZJaVzdbTLHaHsAAQQQQAABoHDhwflx98YNCz10Ky+oLKIAAggggAB+D3gBHMoqGcSPfwoAAAAASUVORK5CYII=",alt:"Minus icon",className:"open-button__icon"})})};var h=function(e){var t=i.a.useState(!0),n=Object(A.a)(t,2),c=n[0],r=n[1],s=function(){for(var t,n=[e.gameData.RatingE,e.gameData.RatingM,e.gameData.RatingT],a=0;a<n.length;a++)switch("1"===n[a]&&(t=a),t){case 0:return"E";case 1:return"M";case 2:return"T";default:return"N/A"}}(),o=c?null:Object(a.jsx)("div",{className:"game__info-div--subdiv",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Used Price:"})," $",e.gameData.Usedprice]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Console:"})," ",e.gameData.Console]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Genre:"})," ",e.gameData.Genre]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Rating:"})," ",s]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Publisher: "}),e.gameData.Publisher]})]})});return Object(a.jsxs)("div",{className:"game__wrapper",children:[Object(a.jsx)("div",{className:"game__pic-div",children:Object(a.jsx)("img",{src:b,className:"game__pic",alt:"game pic"})}),Object(a.jsxs)("div",{className:"game__info-div",children:[Object(a.jsx)("h3",{children:e.gameData.Title}),Object(a.jsxs)("ul",{className:"game__info-div-ul",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Year Realeased:"})," ",e.gameData.YearReleased]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"US Sales (Millions):"})," $",e.gameData["US Sales (millions)"]]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Review Score:"})," ",e.gameData["Review Score"]]})]}),o]}),Object(a.jsx)("div",{className:"game__open-button-div",children:Object(a.jsx)(g,{onClick:function(){r(!c)},plusIcon:c})})]})};n(20);var m=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:e.placeholder,className:"searchbar",onChange:function(t){return e.onChange(t)}})})};n(21);var O=function(e){return Object(a.jsx)("div",{className:"radio-buttons__wrapper",children:Object(a.jsx)("table",{className:"radio-buttons__table",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"year"===e.buttonVal?"radio-buttons__td first radio-button--highlight":"radio-buttons__td first",onClick:function(t){return e.onClick("year")},children:"Year"}),Object(a.jsx)("td",{className:"sales"===e.buttonVal?"radio-buttons__td second radio-button--highlight":"radio-buttons__td second",onClick:function(t){return e.onClick("sales")},children:"Sales"}),Object(a.jsx)("td",{className:"review-score"===e.buttonVal?"radio-buttons__td third radio-button--highlight":"radio-buttons__td third",onClick:function(t){return e.onClick("review-score")},children:"Review Score"}),Object(a.jsx)("td",{className:e.arrowBtn?"radio-button__arrow":"radio-button__arrow arrowDown",children:Object(a.jsx)("button",{className:"radio-button__arrow__button",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF6SURBVEiJtZYxbsJAEEXfIucKFJRpLIpUgROgVFwhovMdkoKa2mfgBjTpUwaocgcUUVg0ERLNpPBfZeWsF5LglUZrjf/8vzue2bUzM9qGc64PjIERcK8ZYANsNa/NbN9KYmY/DMiAOXACLLCDLPSdhM2iXBHyIfCm4AoogUcgB5wsl68UxhQzTAoAM+CogBdgEFtVI2YgrCl2FhXQyo/AJ1CcI44IFYo9hjsJc+7T8mvyhohPVxYKzH1a/koeiPh0zX2F9lUJ1SU5v/CbVOLs91TnN8DSzHat9Qw45wrnXJHCiGMpznHGd/Osz5AvgCc935rZcwLuuUYAK+qc5YltL4TZywxYJPC5MCuAHXV3ugvI72RJEepmPIi7XaBJHviTIk2BaIqAhxh5i8isLUU96lMR6moKxwd1TU/M7L35FeWbAK/ChsNzbQGmUiv/2wPBDkpxTqHjRuv+qJCz28NOL7s7rgNQdxdOYyfdXJmByNUufSfC6LjGb8sXmkauCUaogD0AAAAASUVORK5CYII=",alt:"up-arrow",onClick:e.onArrowClick})})})]})})})})};n(22);var f=function(e){return Object(a.jsx)("button",{className:"load-more-btn",onClick:e.onClick,children:"Load More"})};var p=function(){var e=i.a.useState([]),t=Object(A.a)(e,2),n=t[0],c=t[1],r=i.a.useState({titleInput:"",publisherInput:"",radioButtonInput:"year",arrowBtn:!0,numOfGames:20}),s=Object(A.a)(r,2),u=s[0],b=s[1];i.a.useEffect((function(){d.a.parse(j,{download:!0,header:!0,complete:function(e){e.data.splice(-1,1),c(e.data),console.log("Finished parsing data!")}})}),[]);var g,p,C=function(e){var t=e.slice(0,u.numOfGames).map((function(e){return Object(a.jsx)(h,{gameData:e},e.id)}));return console.log("finished creating game components"),t},x=function(e){var t=u.arrowBtn?-1:1,n=u.arrowBtn?1:-1;switch(u.radioButtonInput){case"year":return g=e.length,e.sort((function(e,a){return e.YearReleased>a.YearReleased?t:n}));case"sales":return g=e.length,e.sort((function(e,a){return e["US Sales (millions)"]>a["US Sales (millions)"]?t:n}));case"review-score":return g=e.length,e.sort((function(e,a){return e["Review Score"]>a["Review Score"]?t:n}))}};if(u.titleInput){var w=Object(o.a)(n);u.titleInput&&(w=w.filter((function(e){return e.Title.toLowerCase().includes(u.titleInput.toLowerCase())}))),u.publisherInput&&(w=w.filter((function(e){return e.Publisher.toLowerCase().includes(u.publisherInput.toLowerCase())}))),p=C(x(w))}else p=C(x(n));return Object(a.jsxs)("div",{className:"games",children:[Object(a.jsx)(m,{placeholder:"Search by Tile...",onChange:function(e){b(Object(l.a)(Object(l.a)({},u),{},{titleInput:e.target.value.toLowerCase()}))}}),Object(a.jsx)(m,{placeholder:"Search by Publisher...",onChange:function(e){b(Object(l.a)(Object(l.a)({},u),{},{publisherInput:e.target.value.toLowerCase()}))}}),Object(a.jsx)(O,{onClick:function(e){b(Object(l.a)(Object(l.a)({},u),{},{radioButtonInput:e}))},onArrowClick:function(){b(Object(l.a)(Object(l.a)({},u),{},{arrowBtn:!u.arrowBtn}))},buttonVal:u.radioButtonInput,arrowBtn:u.arrowBtn}),p,Object(a.jsxs)("p",{children:["Showing"," ",u.numOfGames>g?g:u.numOfGames," ","of ",g," results"]}),g>20?Object(a.jsx)(f,{onClick:function(){b(Object(l.a)(Object(l.a)({},u),{},{numOfGames:u.numOfGames+20}))}}):null]})};var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(p,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),x()}],[[23,1,2]]]);
//# sourceMappingURL=main.5b3e8105.chunk.js.map