(this["webpackJsonpgames-app"]=this["webpackJsonpgames-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),o=n(5),r=n.n(o),s=(n(12),n(13),n(2)),l=n(3),A=(n(14),n(15),n.p+"static/media/game-console.29c9282b.png");n(16);var u=function(t){return Object(a.jsx)("button",{onClick:t.onClick,className:"open-button",children:t.plusIcon?Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAClSURBVFiF7ZcxCgIxEEXfSPA8VlbbeCRP4pG0cJut9jwS+BYOKMIWk8iuxXwY+Clm8mBIJjFJtMjM9sDVlydJj6ZCkpoCGAB5DK11dk3UL5UFH1IPwE+UAAmQAAmQAMWn2pH4fX749GYW3bsCE8DIe6qtHePmLTCgpwUX92dgDuZXYCr+krkHk/nq+SzpFq0Bf3AKEiABEiABEqAHoC74kGzr7/kTc/SXg4kZAs8AAAAASUVORK5CYII=",alt:"Plus icon",className:"open-button__icon"}):Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADowAAA6MBw2k+CgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABLSURBVFiF7daxDYBADAPAC/tQsxwl0337A4UtSIEtpfZJaVzdbTLHaHsAAQQQQAABoHDhwflx98YNCz10Ky+oLKIAAggggAB+D3gBHMoqGcSPfwoAAAAASUVORK5CYII=",alt:"Minus icon",className:"open-button__icon"})})};var d=function(t){var e=i.a.useState(!0),n=Object(l.a)(e,2),c=n[0],o=n[1],r=function(){for(var e,n=[t.gameData.RatingE,t.gameData.RatingM,t.gameData.RatingT],a=0;a<n.length;a++)switch("1"===n[a]&&(e=a),e){case 0:return"E";case 1:return"M";case 2:return"T";default:return"N/A"}}(),s=c?null:Object(a.jsx)("div",{className:"game__info-div--subdiv",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Used Price:"})," $",t.gameData.Usedprice]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Console:"})," ",t.gameData.Console]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Genre:"})," ",t.gameData.Genre]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Rating:"})," ",r]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Publisher: "}),t.gameData.Publisher]})]})});return Object(a.jsxs)("div",{className:"game__wrapper",children:[Object(a.jsx)("div",{className:"game__pic-div",children:Object(a.jsx)("img",{src:A,className:"game__pic",alt:"game pic"})}),Object(a.jsxs)("div",{className:"game__info-div",children:[Object(a.jsx)("h3",{children:t.gameData.Title}),Object(a.jsxs)("ul",{className:"game__info-div-ul",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Year Realeased:"})," ",t.gameData.YearReleased]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"US Sales (Millions):"})," $",t.gameData["US Sales (millions)"]]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Review Score:"})," ",t.gameData["Review Score"]]})]}),s]}),Object(a.jsx)("div",{className:"game__open-button-div",children:Object(a.jsx)(u,{onClick:function(){o(!c)},plusIcon:c})})]})};n(17);var j=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:t.placeholder,className:"searchbar",onChange:function(e){return t.onChange(e)}})})};n(18);var b=function(t){return Object(a.jsx)("div",{className:"radio-buttons__wrapper",children:Object(a.jsx)("table",{className:"radio-buttons__table",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"-YearReleased"===t.buttonVal?"radio-buttons__td first radio-button--highlight":"radio-buttons__td first",onClick:function(e){return t.onClick("-YearReleased")},children:"Year"}),Object(a.jsx)("td",{className:"-US Sales (millions)"===t.buttonVal?"radio-buttons__td second radio-button--highlight":"radio-buttons__td second",onClick:function(e){return t.onClick("-US Sales (millions)")},children:"Sales"}),Object(a.jsx)("td",{className:"-Review Score"===t.buttonVal?"radio-buttons__td third radio-button--highlight":"radio-buttons__td third",onClick:function(e){return t.onClick("-Review Score")},children:"Review Score"}),Object(a.jsx)("td",{className:t.arrowBtn?"radio-button__arrow":"radio-button__arrow arrowDown",children:Object(a.jsx)("button",{className:"radio-button__arrow__button",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF6SURBVEiJtZYxbsJAEEXfIucKFJRpLIpUgROgVFwhovMdkoKa2mfgBjTpUwaocgcUUVg0ERLNpPBfZeWsF5LglUZrjf/8vzue2bUzM9qGc64PjIERcK8ZYANsNa/NbN9KYmY/DMiAOXACLLCDLPSdhM2iXBHyIfCm4AoogUcgB5wsl68UxhQzTAoAM+CogBdgEFtVI2YgrCl2FhXQyo/AJ1CcI44IFYo9hjsJc+7T8mvyhohPVxYKzH1a/koeiPh0zX2F9lUJ1SU5v/CbVOLs91TnN8DSzHat9Qw45wrnXJHCiGMpznHGd/Osz5AvgCc935rZcwLuuUYAK+qc5YltL4TZywxYJPC5MCuAHXV3ugvI72RJEepmPIi7XaBJHviTIk2BaIqAhxh5i8isLUU96lMR6moKxwd1TU/M7L35FeWbAK/ChsNzbQGmUiv/2wPBDkpxTqHjRuv+qJCz28NOL7s7rgNQdxdOYyfdXJmByNUufSfC6LjGb8sXmkauCUaogD0AAAAASUVORK5CYII=",alt:"up-arrow",onClick:t.onArrowClick})})})]})})})})};n(19);var g=function(t){return Object(a.jsx)("button",{className:"load-more-btn",onClick:t.onClick,children:"Load More"})},h=n(6),m=n.n(h);var O=function(){var t=i.a.useState({}),e=Object(l.a)(t,2),n=e[0],o=e[1],r=i.a.useState({titleInput:"",publisherInput:"",radioButtonInput:"-YearReleased",arrowBtn:!0,pageNum:1,limit:20}),A=Object(l.a)(r,2),u=A[0],h=A[1],O=i.a.useState(!1),p=Object(l.a)(O,2),x=p[0],C=p[1];return Object(c.useEffect)((function(){var t;t=u.arrowBtn?"-"===u.radioButtonInput.charAt(0)?u.radioButtonInput:"-"+u.radioButtonInput:"-"===u.radioButtonInput.charAt(0)?u.radioButtonInput.substring(1):u.radioButtonInput,C(!0),fetch("https://video-game-data-api.herokuapp.com/api/video-game-data/data/?page=".concat(u.pageNum,"&limit=").concat(u.limit,"&sort=").concat(t,"&filterTitle=").concat(u.titleInput,"&filterPublisher=").concat(u.publisherInput),{method:"GET"}).then((function(t){return t.json()})).then((function(t){o(t),C(!1)})).catch((function(t){return console.log("Something wrong with api :(")}))}),[u]),Object(a.jsxs)("div",{className:"games",children:[Object(a.jsx)(j,{placeholder:"Search by Tile...",onChange:function(t){h(Object(s.a)(Object(s.a)({},u),{},{titleInput:t.target.value.toLowerCase()}))}}),Object(a.jsx)(j,{placeholder:"Search by Publisher...",onChange:function(t){h(Object(s.a)(Object(s.a)({},u),{},{publisherInput:t.target.value.toLowerCase()}))}}),Object(a.jsx)(b,{onClick:function(t){h(Object(s.a)(Object(s.a)({},u),{},{radioButtonInput:t}))},onArrowClick:function(){h(Object(s.a)(Object(s.a)({},u),{},{arrowBtn:!u.arrowBtn}))},buttonVal:u.radioButtonInput,arrowBtn:u.arrowBtn}),Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)(m.a,{color:"red",loading:x,size:180})}),Object(a.jsx)("p",{children:n.data?"Showing ".concat(n.data.videoGames.length," of ").concat(n.totalResults," Games"):null}),n.data?function(){var t=n.data.videoGames.map((function(t,e){return Object(a.jsx)(d,{gameData:t},e)}));return console.log("finished creating game components"),t}():null,!0===n.hasNextPage?Object(a.jsx)(g,{onClick:function(){h(Object(s.a)(Object(s.a)({},u),{},{limit:u.limit+20}))}}):null]})};var p=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}],[[25,1,2]]]);
//# sourceMappingURL=main.f85395bd.chunk.js.map