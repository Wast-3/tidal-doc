(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(208)),i={title:"Pattern Structure",id:"pattern_structure"},o={unversionedId:"reference/pattern_structure",id:"reference/pattern_structure",isDocsHomePage:!1,title:"Pattern Structure",description:"A core feature of Tidal is the ease in which two patterns can be combined. For example, these are two patterns being combined by adding together their elements:",source:"@site/docs/reference/pattern_structure.md",slug:"/reference/pattern_structure",permalink:"/docs/reference/pattern_structure",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/pattern_structure.md",version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1667419317,sidebar:"reference",previous:{title:"Patterns",permalink:"/docs/reference/patterns"},next:{title:"Mini Notation",permalink:"/docs/reference/mini_notation"}},b=[{value:"Structure from the left",id:"structure-from-the-left",children:[]},{value:"Structure from the right",id:"structure-from-the-right",children:[]},{value:"All the operators",id:"all-the-operators",children:[]},{value:"Combining control patterns",id:"combining-control-patterns",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A core feature of ",Object(l.b)("strong",{parentName:"p"},"Tidal")," is the ease in which two patterns can be combined. For example, these are two patterns being combined by adding together their elements:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'"2 3" + "4 5 6"\n')),Object(l.b)("p",null,"The result of the above is equivalent to the pattern ",Object(l.b)("inlineCode",{parentName:"p"},'"6 [7 8] 9"'),". But why? Let's look closer. The two patterns line up over time like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"  |  2  |  3  |\n+ | 4 | 5 | 6 |\n")),Object(l.b)("p",null,"Unlike in previous versions of ",Object(l.b)("strong",{parentName:"p"},"Tidal"),", when you combine two patterns in this way, by default the structure now comes from both patterns. This means you end up with four events, because the ",Object(l.b)("inlineCode",{parentName:"p"},"5")," in the middle lines up both with the ",Object(l.b)("inlineCode",{parentName:"p"},"2")," and the ",Object(l.b)("inlineCode",{parentName:"p"},"3"),", and gets split in half between them. We can add the resulting pattern to our table:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"  |  2  |  3  |\n+ | 4 | 5 | 6 |\n= | 6 |7|8| 9 |\n")),Object(l.b)("p",null,"You can see that the ",Object(l.b)("inlineCode",{parentName:"p"},"4")," fits inside ",Object(l.b)("inlineCode",{parentName:"p"},"2"),", so where they intersect, you get a new event equal to their sum ",Object(l.b)("inlineCode",{parentName:"p"},"6"),"."),Object(l.b)("p",null,"Also see that the event with value ",Object(l.b)("inlineCode",{parentName:"p"},"5")," is cut in half, to create two, shorter events. Half matches with the ",Object(l.b)("inlineCode",{parentName:"p"},"2")," event and the other half matches with the ",Object(l.b)("inlineCode",{parentName:"p"},"3")," event."),Object(l.b)("p",null,"The fourth and final event comes from the intersection of ",Object(l.b)("inlineCode",{parentName:"p"},"3")," and ",Object(l.b)("inlineCode",{parentName:"p"},"6"),", giving a value of ",Object(l.b)("inlineCode",{parentName:"p"},"9"),"."),Object(l.b)("h2",{id:"structure-from-the-left"},"Structure from the left"),Object(l.b)("p",null,"In previous versions of Tidal, the structure always came from the left. You can still do this, but in this case using ",Object(l.b)("inlineCode",{parentName:"p"},"|+"),". For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'"2 3" |+ "4 5 6"\n')),Object(l.b)("p",null,"In the above example, you end up with structure from the first (leftmost) pattern, like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n|+ | 4 | 5 | 6 |\n = |  6  |  8  |\n")),Object(l.b)("p",null,"You can see the structure comes from the ",Object(l.b)("inlineCode",{parentName:"p"},"2")," and ",Object(l.b)("inlineCode",{parentName:"p"},"3"),". ",Object(l.b)("inlineCode",{parentName:"p"},"2")," lines up with ",Object(l.b)("inlineCode",{parentName:"p"},"4"),", and the start of ",Object(l.b)("inlineCode",{parentName:"p"},"3")," is in ",Object(l.b)("inlineCode",{parentName:"p"},"5"),", so you end up with ",Object(l.b)("inlineCode",{parentName:"p"},"2+4=6")," and ",Object(l.b)("inlineCode",{parentName:"p"},"3+5=8"),". The result is the equivalent of ",Object(l.b)("inlineCode",{parentName:"p"},'"6 8"'),"."),Object(l.b)("h2",{id:"structure-from-the-right"},"Structure from the right"),Object(l.b)("p",null,"Likewise, you can take the structure from the right, with ",Object(l.b)("inlineCode",{parentName:"p"},"+|"),". So ",Object(l.b)("inlineCode",{parentName:"p"},'"2 3" +| "4 5 6"')," looks like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n+| | 4 | 5 | 6 |\n = | 6 | 7 | 9 |\n")),Object(l.b)("p",null,"The result is the equivalent of ",Object(l.b)("inlineCode",{parentName:"p"},'"6 7 9"'),"."),Object(l.b)("h2",{id:"all-the-operators"},"All the operators"),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"+")," is actually an alias for ",Object(l.b)("inlineCode",{parentName:"p"},"|+|"),". So ",Object(l.b)("inlineCode",{parentName:"p"},"|+")," is to take the structure from the left, ",Object(l.b)("inlineCode",{parentName:"p"},"+|")," from the right, and ",Object(l.b)("inlineCode",{parentName:"p"},"|+|")," or ",Object(l.b)("inlineCode",{parentName:"p"},"+")," for both. Here are the basic operators you can use to combine numerical patterns:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Function"),Object(l.b)("th",{parentName:"tr",align:null},"Both"),Object(l.b)("th",{parentName:"tr",align:null},"Left"),Object(l.b)("th",{parentName:"tr",align:null},"Right"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Add"),Object(l.b)("td",{parentName:"tr",align:null},"|","+","|"," or (+)"),Object(l.b)("td",{parentName:"tr",align:null},"|","+"),Object(l.b)("td",{parentName:"tr",align:null},"+","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Subtract"),Object(l.b)("td",{parentName:"tr",align:null},"|","-","|"," or (-)"),Object(l.b)("td",{parentName:"tr",align:null},"|","-"),Object(l.b)("td",{parentName:"tr",align:null},"-","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Multiply"),Object(l.b)("td",{parentName:"tr",align:null},"|","*","|"," or (*)"),Object(l.b)("td",{parentName:"tr",align:null},"|","*"),Object(l.b)("td",{parentName:"tr",align:null},"*","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Divide"),Object(l.b)("td",{parentName:"tr",align:null},"|","/","|"," or (/)"),Object(l.b)("td",{parentName:"tr",align:null},"|","/"),Object(l.b)("td",{parentName:"tr",align:null},"/","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Modulo"),Object(l.b)("td",{parentName:"tr",align:null},"|","%","|"," or (%)"),Object(l.b)("td",{parentName:"tr",align:null},"|","%"),Object(l.b)("td",{parentName:"tr",align:null},"%","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Left values"),Object(l.b)("td",{parentName:"tr",align:null},"|","<","|"," or (<)"),Object(l.b)("td",{parentName:"tr",align:null},"|","<"),Object(l.b)("td",{parentName:"tr",align:null},"<","|")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Right Values"),Object(l.b)("td",{parentName:"tr",align:null},"|",">","|"," or (>)"),Object(l.b)("td",{parentName:"tr",align:null},"|",">"),Object(l.b)("td",{parentName:"tr",align:null},">","|")))),Object(l.b)("p",null,"The last two are interesting, they let you only take values from one side. So for example you could take structure from the left, but values from the right with ",Object(l.b)("inlineCode",{parentName:"p"},"|>"),", for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n|> | 4 | 5 | 6 |\n = |  4  |  5  |\n")),Object(l.b)("p",null,"This is very similar to how ",Object(l.b)("inlineCode",{parentName:"p"},"|+|")," used to work in the versions of tidal prior to 1.0.0 - it took structure from the left, but values from the right. In fact, ",Object(l.b)("inlineCode",{parentName:"p"},"#")," is an alias for ",Object(l.b)("inlineCode",{parentName:"p"},"|>"),", mirroring the behaviour in previous versions of tidal."),Object(l.b)("h2",{id:"combining-control-patterns"},"Combining control patterns"),Object(l.b)("p",null,"A control pattern (formerly known as a ",Object(l.b)("inlineCode",{parentName:"p"},"param pattern"),"), is a pattern that's been given a control name. For example the number pattern ",Object(l.b)("inlineCode",{parentName:"p"},'"1 2 3"')," can be turned into a control pattern like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},'speed "1 2 3"\n')),Object(l.b)("p",null,"Control patterns can be combined together in the same way as numerical patterns. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "1 2 3"\n')),Object(l.b)("p",null,"Nothing actually gets added together in the above, they're just combined into the equivalent of ",Object(l.b)("inlineCode",{parentName:"p"},'d1 $ sound "drum:1 drum:2 drum:3"'),". However if you specify the same numerical control more than once, then their values ",Object(l.b)("em",{parentName:"p"},"will")," be combined. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "2 3" |+| n "4 5 6"\n')),Object(l.b)("p",null,"The above will be equivalent to:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "6 [7 8] 9"\n')))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);