(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{23:function(t,e,r){},44:function(t,e,r){"use strict";r.r(e);var n=r(17),c=r(18),o=r(3),i=r(14),u=r.n(i),a=r(15),s=r(16),d=[1,2,3,4,5,6,7,8,9],l=function(){function t(e){Object(a.a)(this,t),this.board=e}return Object(s.a)(t,[{key:"solve",value:function(){var t=this.findEmpty();if(!1===t)return!0;for(var e=t[0],r=t[1],n=0;n<d.length;n++){if(this.valid(d[n],e,r)&&(this.board[e][r]=d[n],this.solve()))return!0;this.board[e][r]=0}return!1}},{key:"findEmpty",value:function(){for(var t=0;t<9;t++)for(var e=0;e<9;e++)if(0===this.board[t][e])return[t,e];return!1}},{key:"valid",value:function(t,e,r){return this.checkRow(t,e)&&this.checkCol(t,r)&&this.checkGrid(t,e,r)}},{key:"checkRow",value:function(t,e){for(var r=0;r<9;r++)if(this.board[e][r]===t)return!1;return!0}},{key:"checkCol",value:function(t,e){for(var r=0;r<9;r++)if(this.board[r][e]===t)return!1;return!0}},{key:"checkGrid",value:function(t,e,r){for(var n=3*Math.floor(e/3),c=3*Math.floor(r/3),o=0;o<3;o++)for(var i=c+o,u=0;u<3;u++)if(this.board[n+u][i]===t)return!1;return!0}}]),t}(),h=(r(23),r(0)),f=r(25),b=function(t){var e=t.puzzleGrid;return Object(h.jsx)("table",{className:"sudoku",children:Object(h.jsx)("tbody",{children:e.map((function(t){return Object(h.jsx)("tr",{children:t.map((function(t){return Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",value:0===t?"":t})})}))})}))})})};function j(t){var e=t.board,r=Object(o.useState)(e),i=Object(c.a)(r,2),u=i[0],a=i[1],s=new l(u);return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("h1",{children:"Sudoku Solver"}),Object(h.jsx)(b,{puzzleGrid:u}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){s.solve(),a(Object(n.a)(u))},children:"Solve It!"}),Object(h.jsx)("button",{onClick:function(){f.get("https://sugoku.herokuapp.com/board?difficulty=easy").then((function(t){a(t.data.board)})).catch((function(t){console.log(t)}))},children:"New Puzzle"})]})]})}u.a.render(Object(h.jsx)(j,{board:[[0,0,0,0,0,9,7,4,1],[0,3,0,7,0,2,0,0,8],[0,4,0,6,0,0,5,0,0],[0,0,0,0,0,0,2,9,0],[9,0,0,0,0,0,0,0,4],[0,2,6,0,0,0,0,0,0],[0,0,1,0,0,4,0,8,0],[4,0,0,3,0,7,0,5,0],[6,7,3,9,0,0,0,0,0]]}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.df054231.chunk.js.map