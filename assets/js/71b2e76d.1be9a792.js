"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2661],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=r.createContext({}),u=function(n){var e=r.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(d.Provider,{value:e},n.children)},l="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,d=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),l=u(t),c=o,f=l["".concat(d,".").concat(c)]||l[c]||m[c]||a;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s[l]="string"==typeof n?n:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1841:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(3117),o=(t(7294),t(3905));const a={title:"Building up patterns",permalink:"wiki/Building_up_patterns/",layout:"wiki"},i=void 0,s={unversionedId:"working-with-patterns/Building_up_patterns",id:"working-with-patterns/Building_up_patterns",title:"Building up patterns",description:"Some examples of how a melody or rhythm can be built up from simple",source:"@site/docs/working-with-patterns/Building_up_patterns.md",sourceDirName:"working-with-patterns",slug:"/working-with-patterns/Building_up_patterns",permalink:"/docs/working-with-patterns/Building_up_patterns",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/working-with-patterns/Building_up_patterns.md",tags:[],version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1671478679,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{title:"Building up patterns",permalink:"wiki/Building_up_patterns/",layout:"wiki"}},d={},u=[{value:"Patterns as numbers",id:"patterns-as-numbers",level:2},{value:"Building an arpeggio from notes",id:"building-an-arpeggio-from-notes",level:3},{value:"Building an arpeggio from chords",id:"building-an-arpeggio-from-chords",level:3},{value:"Building up a rhythm",id:"building-up-a-rhythm",level:2},{value:"Building up another rhythm",id:"building-up-another-rhythm",level:3}],p={toc:u};function l(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some examples of how a melody or rhythm can be built up from simple\nparts. Originally started for the Amsterdam Powcademy workshop"),(0,o.kt)("h2",{id:"patterns-as-numbers"},"Patterns as numbers"),(0,o.kt)("h3",{id:"building-an-arpeggio-from-notes"},"Building an arpeggio from notes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-- simple sequences of notes\nd1 $ n "c a f e"\n  # sound "supermandolin"\n\n-- play one per cycle\nd1 $ n "<c a f e>"\n  # sound "supermandolin"\n\n-- on top of that, put a copy of the sequence, offset in time and pitch:\nd1 $ n (off 0.125 (|+ 7) "<c a f e>")\n  # sound "supermandolin"\n\n-- add some structure to the original sequence\nd1 $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n\n-- reverse in one speaker\nd1 $ jux rev $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n\n-- add another layer\nd1 $ jux rev $ n (off 0.125 (|+ 12) $ off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n')),(0,o.kt)("h3",{id:"building-an-arpeggio-from-chords"},"Building an arpeggio from chords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-- start with c major\n\nd1 $ n "c\'maj"\n  # sound "supermandolin"\n  # legato 2\n\n-- arpeggiate up\nd1 $ arp "up" $ n "c\'maj"\n  # sound "supermandolin"\n  # sustain 0.5\n\n-- add another note to the chord\nd1 $ arp "up" $ n "c\'maj\'4"\n  # sound "supermandolin"\n  # sustain 0.5\n\n-- add another chord\nd1 $ arp "up" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n\n-- change the arpeggiator\nd1 $ arp "pinkyup" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n\n-- pattern the arpeggiator\nd1 $ arp "<pinkyup down thumbup up>" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n\n-- change the chords, add some reverb\nd1 $ jux rev $ arp "<pinkyup down thumbup up>" $ n "<c\'maj\'4 e4\'min\'8 f4\'maj\'4>"\n  # sound "supermandolin"\n  # sustain 2 # room 0.3 # sz 0.9\n\n-- add some variety with \'chunk\'\nd1 $ chunk 4 (|- note 5) $ jux rev $ \n  arp "<pinkyup down thumbup up>" $ n "<c\'maj\'4 e4\'min\'8 f4\'maj\'4>"\n  # sound "supermandolin"\n  # sustain 2 # room 0.3 # sz 0.9\n')),(0,o.kt)("h2",{id:"building-up-a-rhythm"},"Building up a rhythm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-- Simple bass drum - snare\nd1 $ sound "bd sn"\n\n-- Choose a different snare sample\nd1 $ sound "bd sn:3"\n\n-- Change the rhythm\nd1 $ sound "bd*2 [~ sn:3]"\n\n-- Add some toms\nd1 $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n\n-- Start to transform, shift a quarter cycle every other cycle\nd1 $ every 2 (0.25 <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n\n-- Pattern the shift amount\nd1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n\n-- Add some patterned effects\nd1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n\n-- More transformation\nd1 $ jux\' [id,rev,(# speed 2)] $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n')),(0,o.kt)("h3",{id:"building-up-another-rhythm"},"Building up another rhythm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-- start with a sequence..\nd1 $ n "0 0 [2 0] [2 3]" # sound "feel" # speed 1.5\n\n-- Add a bit of flavour\nd1 $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n\n-- Swap the samples round every other cycle\nd1 $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n\n-- Always worth trying a jux rev\nd1 $ jux rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n\n-- Calm it down a bit by reducing the amount of panning\nd1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n\n-- Vary the speed\nd1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n\n-- Add an offset vowel effect\nd1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n\n-- Give it a friend\nd1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n\nd2 $ juxBy 0.5 rev $ chunk 4 ((+ speed (1 + sine)) . ply 8) $ note "3(3,8)" # sound "bass"\n  # speed "<2 4>"\n  # legato 1\n')))}l.isMDXComponent=!0}}]);