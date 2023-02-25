"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const r={title:"Adding Synthesizers",id:"adding_synthesizers"},o=void 0,l={unversionedId:"configuration/adding_synthesizers",id:"configuration/adding_synthesizers",title:"Adding Synthesizers",description:"When you install SuperDirt, you also install a small library of default synthesizers. These synths are made specifically for Tidal and SuperDirt. They do sound nice, but at some point you will want to create your own synthesizers. This page will guide you and teach you the basic steps of synthesizer creation for SuperDirt.",source:"@site/docs/configuration/adding_synthesizers.md",sourceDirName:"configuration",slug:"/configuration/adding_synthesizers",permalink:"/docs/configuration/adding_synthesizers",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/adding_synthesizers.md",tags:[],version:"current",lastUpdatedBy:"tedthetrumpet",lastUpdatedAt:1677339228,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{title:"Adding Synthesizers",id:"adding_synthesizers"},sidebar:"docs",previous:{title:"Adding Global Effects",permalink:"/docs/configuration/adding_global_effects"},next:{title:"MIDI",permalink:"/docs/configuration/MIDIOSC/midi"}},s={},p=[{value:"Building a simple synthesizer",id:"building-a-simple-synthesizer",level:2},{value:"Learning SuperCollider",id:"learning-supercollider",level:3},{value:"SuperDirt template",id:"superdirt-template",level:3},{value:"Blip-blop state",id:"blip-blop-state",level:3},{value:"What are UGens?",id:"what-are-ugens",level:4},{value:"Basic synthesizer",id:"basic-synthesizer",level:4},{value:"Free the synthesizer",id:"free-the-synthesizer",level:4},{value:"Adapt your synth to SuperDirt",id:"adapt-your-synth-to-superdirt",level:3},{value:"Bonus: more complex synthesis",id:"bonus-more-complex-synthesis",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I can hear &#39;clicks&#39;",id:"i-can-hear-clicks",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you install ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),", you also install a small library of ",(0,i.kt)("em",{parentName:"p"},"default")," synthesizers. These synths are made specifically for ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," and ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),". They do sound nice, but at some point you will want to create your own synthesizers. This page will guide you and teach you the basic steps of synthesizer creation for ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),"."),(0,i.kt)("h2",{id:"building-a-simple-synthesizer"},"Building a simple synthesizer"),(0,i.kt)("h3",{id:"learning-supercollider"},"Learning SuperCollider"),(0,i.kt)("p",null,"If you want to build new synthesizers for ",(0,i.kt)("strong",{parentName:"p"},"Tidal Cycles"),", you will need to learn some rudiments of the ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," language (",(0,i.kt)("em",{parentName:"p"},"SCLang"),") as well. There are many guides, courses and tutorials you can find on the internet. I personnally recommand the ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/elifieldsteel"},"Eli Fieldsteel")," YouTube channel. It is the most complete and beginner friendly tutorial you can find. It starts from the very basics up to very advanced topics for the more courageous."),(0,i.kt)("p",null,"When you play with ",(0,i.kt)("strong",{parentName:"p"},"Tidal Cycles"),", ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," and ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," are in charge of handling audio. Everything audio-related on ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," will happen on the ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," side. Even if you haven't planned to learn more about audio synthesis, it is important to keep this architectural distinction in mind."),(0,i.kt)("h3",{id:"superdirt-template"},"SuperDirt template"),(0,i.kt)("p",null,"Everything starts with this boilerplate ",(0,i.kt)("inlineCode",{parentName:"p"},"SynthDef")," that you need to copy and paste in your ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," interactive editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n}).add;\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"SynthDef")," is a definition of something that will be instantiated as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Synth")," node. Don't be affraid of the technical jargon, it just means that we are going to declare a function that will be the definition of our synthesizers."),(0,i.kt)("p",null,"Everything inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"||")," is a list of arguments: a list of required parameters for our synthesizer to work. You might recognize some ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," oddities, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"accelerate")," parameter, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," parameters."),(0,i.kt)("p",null,"We give our synthesizer a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\name"),", here (",(0,i.kt)("inlineCode",{parentName:"p"},"\\test"),"). This way, ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperCollider")," will be able to retrieve it on-the-fly from its internal list of synths. The ",(0,i.kt)("inlineCode",{parentName:"p"},".add"),' method simply means "add it to the server".'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SynthDef")," can be overriden at any moment. You can play a pattern on the ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," side and design/recompile your synth on-the-fly. This is a great way to test if your synth works well. ")),(0,i.kt)("h3",{id:"blip-blop-state"},"Blip-blop state"),(0,i.kt)("p",null,"So far so good. We have an ",(0,i.kt)("em",{parentName:"p"},"empty shell")," kind of synth. Strictly speaking, our synth is an audio function, and it lives between the curly brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". Some of you might like silence, but we want sound."),(0,i.kt)("h4",{id:"what-are-ugens"},"What are UGens?"),(0,i.kt)("p",null,"We will compose our synth by chaining together ",(0,i.kt)("inlineCode",{parentName:"p"},"UGens"),". What is a ",(0,i.kt)("inlineCode",{parentName:"p"},"UGen"),"? The ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," help file tolds us:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"UGens represent calculations with signals. They are the basic building blocks of synth definitions on the server, and are used to generate or process both audio and control signals")),(0,i.kt)("p",null,'Think about them as "audio bricks". They are tiny components, each one representing a function or a modification of an incoming signal. Some ',(0,i.kt)("inlineCode",{parentName:"p"},"UGens")," are creating signals from scratch (oscillators, enveloppes), some are modifying the signals (filters, resonators), some are distributing it (stereo, ambisonics). ",(0,i.kt)("inlineCode",{parentName:"p"},"UGens")," are ubiquitous in computer music, and you might have encountered them already in another language/another software/another form: Max ",(0,i.kt)("inlineCode",{parentName:"p"},"~objects"),", modules in modular synthesis, etc... Since the dawn of computer music, there is a convention around the fact that ",(0,i.kt)("inlineCode",{parentName:"p"},"UGens"),' have different "rates" depending on their usage:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audio rate"),": ",(0,i.kt)("inlineCode",{parentName:"li"},".ar")," in ",(0,i.kt)("strong",{parentName:"li"},"SuperCollider"),". An audio rate ",(0,i.kt)("inlineCode",{parentName:"li"},"UGen")," will run at your current audio sample rate, generally ",(0,i.kt)("inlineCode",{parentName:"li"},"44.1hz")," per second. ",(0,i.kt)("inlineCode",{parentName:"li"},".ar")," signals are used for audible components (oscillators). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"control rate"),": ",(0,i.kt)("inlineCode",{parentName:"li"},".kr")," in ",(0,i.kt)("strong",{parentName:"li"},"SuperCollider"),". Control rates are used for signals when the sampling rate is not crucial (enveloppes and LFOs). They are generally running at ",(0,i.kt)("inlineCode",{parentName:"li"},"samplerate/some amount"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial rate"),": ",(0,i.kt)("inlineCode",{parentName:"li"},".ir")," in ",(0,i.kt)("strong",{parentName:"li"},"SuperCollider"),". A static non-modulable rate. It is more efficient on the CPU compared to a regular argument. But yeah, sounds like some sort of variable.")),(0,i.kt)("h4",{id:"basic-synthesizer"},"Basic synthesizer"),(0,i.kt)("p",null,"In the following example, I've arranged everything you need to get a basic synthesizer running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n    var env    = Line.ar(1, 0, sustain);\n    var osc    = SinOsc.ar(freq);\n    var output = osc * env;\n    OffsetOut.ar(out, Pan2.ar(in: output, pos: pan));\n}).add;\n")),(0,i.kt)("p",null,"These four lines alone are enough to make a basic synthesizer. Notice that we are introducing new variables using the ",(0,i.kt)("inlineCode",{parentName:"p"},"var blabla = ...")," syntax. We added the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osc"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SinOsc")," is a basic sinuso\xefdal oscillator, running at ",(0,i.kt)("inlineCode",{parentName:"li"},"freq")," speed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Line")," is a line generator, running from ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0")," over ",(0,i.kt)("inlineCode",{parentName:"li"},"sustain")," seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output"),": by multiplying ",(0,i.kt)("inlineCode",{parentName:"li"},"osc")," by ",(0,i.kt)("inlineCode",{parentName:"li"},"env"),", we created an amplitude enveloppe for our synth, turning a continuous signal into discrete notes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OffsetOut"),": the audio output itself. The first argument is the buffer we want to write the sound to. If we leave ",(0,i.kt)("inlineCode",{parentName:"li"},"out")," unspecified as it is the case here, ",(0,i.kt)("strong",{parentName:"li"},"SuperCollider")," will direct the sound to the audio output. How convenient! The following arguments are used to pass the signal ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," to the buffer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pan2"),": this ",(0,i.kt)("inlineCode",{parentName:"li"},"UGen")," will turn our mono signal into a stereo signal.")),(0,i.kt)("p",null,"You can test it by running the following pattern with ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'d1\n  $\xa0cat[\n    note "c ds g bf", note "c ds g bf",\n    note "c f af c6", note "c f af c6"]\n  # s "test"\n')),(0,i.kt)("h4",{id:"free-the-synthesizer"},"Free the synthesizer"),(0,i.kt)("p",null,"Our synth is currently working but something is wrong. The ",(0,i.kt)("inlineCode",{parentName:"p"},"synth")," will never die, meaning that each note we will play will slowly increase the memory usage until audio glitches and other problems start to appear, apparently at random. ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," can fix that by using ",(0,i.kt)("inlineCode",{parentName:"p"},"DoneAction"),". Take a look at this updated version: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = SinOsc.ar(freq);\n    var output = osc * env;\n    OffsetOut.ar(out, Pan2.ar(in: output, pos: pan));\n}).add;\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"doneAction")," is ",(0,i.kt)("strong",{parentName:"p"},"extremely important"),". Our synth will now free whatever resource it was using while playing. "),(0,i.kt)("h3",{id:"adapt-your-synth-to-superdirt"},"Adapt your synth to SuperDirt"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," is ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),"'s audio engine. If you wish to use your synth with ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),", there are a couple more things you should take care of. Remember the ",(0,i.kt)("inlineCode",{parentName:"p"},"OffsetOut")," part? We will improve it in order to make it compatible with ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),". We were hearing sound, but the sound was not managed and handled by ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," itself but by the ",(0,i.kt)("em",{parentName:"p"},"vanilla")," ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," audio server instance."),(0,i.kt)("p",null,"Take a look at this new version of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Blip-blop")," synthesizer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset, volume|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = SinOsc.ar(freq);\n    OffsetOut.ar(out,DirtPan.ar(osc, ~dirt.numChannels, pan, env));\n}).add;\n")),(0,i.kt)("p",null,"As you can see, we are now using special objects for the audio output: ",(0,i.kt)("inlineCode",{parentName:"p"},"DirtPan"),", as well as a reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"~dirt.numChannels"),". It a ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," compatible version of what we were doing so far: outputting in stereo with a ",(0,i.kt)("inlineCode",{parentName:"p"},"pan")," parameter. The only difference is that... now it works. Test this synth with the following ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'d1\n  $ superimpose (fast 2 . (|+ note "12 0 24 -12 0"))\n  $\xa0cat[\n    note "c ds g bf", note "c ds g bf",\n    note "c f af c6", note "c f af c6"]\n  # s "test" # pan (slow 2 $ range "-1" 1 $ sine)\n')),(0,i.kt)("p",null,"It sounds really nice! Your synth is now totally compatible with ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),"."),(0,i.kt)("p",null,"Note that we changed a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output"),": it's gone. We didn't needed it. We are now feeding the enveloppe to ",(0,i.kt)("inlineCode",{parentName:"li"},"DirtPan")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osc")," is directly fed to ",(0,i.kt)("inlineCode",{parentName:"li"},"DirtPan")," as well. ")),(0,i.kt)("h4",{id:"bonus-more-complex-synthesis"},"Bonus: more complex synthesis"),(0,i.kt)("p",null,"This page taught you to create a synthesizer for ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," but it is still pretty basic. If you learn a bit more about ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider"),", you will be able to refine your ideas. Take a look at the following\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SynthDef"),". Keep the same pattern running, it sounds nice: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"SynthDef(\\elegiac, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset, volume|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = RLPF.ar(in: SawDPW.ar([freq, freq/2]), freq: SinOsc.ar(pan).range(200,2000));\n    OffsetOut.ar(out,DirtPan.ar(osc, ~dirt.numChannels, pan, env))\n}).add;\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"i-can-hear-clicks"},"I can hear 'clicks'"),(0,i.kt)("p",null,"When using your custom synthesizers for ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),", you will sometimes hear 'clicks'. These clicks are breaks/discontinuities in the audio signal. Audio clicks are ubiquitous in computer music, and people are doing everything they can to avoid them and to fix the problem."),(0,i.kt)("p",null,"If you can hear audio clicks while playing with your custom ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," synths, try the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rewrite your ",(0,i.kt)("inlineCode",{parentName:"li"},"SynthDef")," the ",(0,i.kt)("strong",{parentName:"li"},"Tidal way")," (see above)."),(0,i.kt)("li",{parentName:"ul"},"raise the ",(0,i.kt)("inlineCode",{parentName:"li"},"legato")," value in your pattern."),(0,i.kt)("li",{parentName:"ul"},"increase the ",(0,i.kt)("inlineCode",{parentName:"li"},"fadeTime")," parameter in ",(0,i.kt)("strong",{parentName:"li"},"SuperDirt"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"~dirt.orbits[3].set(\\fadeTime, 0.01);\n~dirt.orbits[4].set(\\fadeTime, 0.1);\n")))}d.isMDXComponent=!0}}]);