"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4334);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),s=a(4334),o=a(2466),i=a(6550),l=a(1980),p=a(7392),m=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,p]=d({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=l??u;return h({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,s]),tabValues:s}}var g=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=p[a].value;n!==i&&(u(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:c},o,{className:(0,s.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",N.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},4997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),o=a(5162);const i={title:"Input/Output Tutorial",sidebar_position:3},l=void 0,p={unversionedId:"2023-24/io-tutorial",id:"2023-24/io-tutorial",title:"Input/Output Tutorial",description:"In our first meeting, we introduced you to the format of the CCC \u2014 given a",source:"@site/docs/2023-24/io-tutorial.mdx",sourceDirName:"2023-24",slug:"/2023-24/io-tutorial",permalink:"/docs/2023-24/io-tutorial",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/2023-24/io-tutorial.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Input/Output Tutorial",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using the DMOJ",permalink:"/docs/2023-24/using-dmoj"},next:{title:"Algorithm Analysis",permalink:"/docs/2023-24/advanced/algorithm-analysis"}},m={},u=[{value:"CCC Input/Output Format",id:"ccc-inputoutput-format",level:2},{value:"Introductory Example \u2014 CCC &#39;20 J1",id:"introductory-example--ccc-20-j1",level:2},{value:"Suggested Practice",id:"suggested-practice",level:3},{value:"Reading a Variable Number of Inputs \u2014 CCC &#39;22 J2",id:"reading-a-variable-number-of-inputs--ccc-22-j2",level:2},{value:"Suggested Practice",id:"suggested-practice-1",level:3}],c={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In our first meeting, we introduced you to the format of the CCC \u2014 given a\nproblem, you are tasked with writing a program that solves it for some input. We\nthen looked at some past problems and worked through them by hand."),(0,r.kt)("p",null,"Now, let's see how to convert the process you used to solve a problem with pen\nand paper into a program you can submit on the CCC."),(0,r.kt)("h2",{id:"ccc-inputoutput-format"},"CCC Input/Output Format"),(0,r.kt)("p",null,"One rather intriguing feature of the CCC is that ",(0,r.kt)("strong",{parentName:"p"},"your solutions are autograded\nin real time"),". That is, you can submit a solution to the CCC grader and a\ncouple seconds later you can see the score it received (i.e., whether your\nprogram worked.) Further, if your solution turns out to be incorrect, you can\nedit it and submit again, to a maximum of fifty attempts."),(0,r.kt)("p",null,"To facilitate autograding, however, the CCC expects your program to accept input\nand produce output in a specific way. In particular, your program should read\nfrom standard input (stdin) and output to standard output (stdout.)\nColloquially, ",(0,r.kt)("strong",{parentName:"p"},"your program needs to take input from the console and print\noutput to the console as well.")),(0,r.kt)("p",null,"The way to do this will differ depending on the language you are using and what\nform the input takes (is it a number? a string? multiple numbers? etc.) Sample\ncode in Python, Java, and C++ follows."),(0,r.kt)("h2",{id:"introductory-example--ccc-20-j1"},"Introductory Example \u2014 CCC '20 J1"),(0,r.kt)("p",null,"The most common kind of input in the CCC is numerical \u2014 you are given some\nnumbers as input and are to determine the corresponding output. For instance,\nconsider ",(0,r.kt)("a",{parentName:"p",href:"https://dmoj.ca/problem/ccc20j1"},"CCC '20 J1 \u2014 Dog Treats"),". The premise\nof this problem is that you have a dog whose happiness depends on the number of\nsmall, medium, and large treats he receives in a day; you are tasked with\ndetermining whether the dog is happy or sad."),(0,r.kt)("p",null,"Your program should, therefore, read three numbers from the console,\nrepresenting the amount of treats of each type. More precisely, the input\nspecification reads:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are three lines of input. Each line contains a non-negative integer less\nthan ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"10")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"10"))))),". The first line contains the number of small treats, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"S")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"S")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"))))),", the second\nline contains the number of medium treats, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"M")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"))))),", and the third line contains\nthe number of large treats, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"L")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"))))),", that Barley receives in a day.")),(0,r.kt)("p",null,"Worked solutions in Python, Java, and C++ are provided below."),(0,r.kt)(s.Z,{groupId:"prog-langs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In Python, use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"input")," function to get one line of input from the console;\nuse ",(0,r.kt)("inlineCode",{parentName:"strong"},"print")," for output.")," Note, however, that since ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," returns a string, we will\nneed to convert it to an integer ourselves using the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," constructor like such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"small_treats = int(input())\nmedium_treats = int(input())\nlarge_treats = int(input())\n")),(0,r.kt)("p",null,"From there, we can finish solving the problem using the formula given and a\nconditional (",(0,r.kt)("inlineCode",{parentName:"p"},"if"),") construct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"{5-9}","{5-9}":!0},'small_treats = int(input())\nmedium_treats = int(input())\nlarge_treats = int(input())\n\nhappiness_score = 1 * small_treats + 2 * medium_treats + 3 * large_treats\nif happiness_score >= 10:\n    print("happy")\nelse:\n    print("sad")\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In Java, use ",(0,r.kt)("inlineCode",{parentName:"strong"},"java.util.Scanner")," to read input from the console; use\n",(0,r.kt)("inlineCode",{parentName:"strong"},"System.out.println")," for output.")," In this case, your input-reading logic might\nlook like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Assuming java.util.Scanner is imported...\nScanner scanner = new Scanner(System.in);\nint smallTreats = scanner.nextInt();\nint mediumTreats = scanner.nextInt();\nint largeTreats = scanner.nextInt();\n")),(0,r.kt)("p",null,"From there, we can finish solving the problem using the formula given and a\nconditional construct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{6-8}","{6-8}":!0},'Scanner scanner = new Scanner(System.in);\nint smallTreats = scanner.nextInt();\nint mediumTreats = scanner.nextInt();\nint largeTreats = scanner.nextInt();\n\nint happinessScore = 1 * smallTreats + 2 * mediumTreats + 3 * largeTreats;\nSystem.out.println(happinessScore >= 10 ? "happy" : "sad");\n'))),(0,r.kt)(o.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In C++, use ",(0,r.kt)("inlineCode",{parentName:"strong"},"std::cin")," to read input from the console; use ",(0,r.kt)("inlineCode",{parentName:"strong"},"std::cout")," for output."),"\nIn this case, your input-reading logic might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Assuming std::cin and std::cout are in scope...\nint small_treats{}, medium_treats{}, large_treats{};\nstd::cin >> small_treats >> medium_treats >> large_treats;\n")),(0,r.kt)("p",null,"From there, we can finish solving the problem using the formula given and a\nconditional construct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"{4-5}","{4-5}":!0},'int small_treats{}, medium_treats{}, large_treats{};\nstd::cin >> small_treats >> medium_treats >> large_treats;\n\nint happiness_score = 1 * small_treats + 2 * medium_treats + 3 * large_treats;\nstd::cout << (happiness_score >= 10 ? "happy" : "sad") << \'\\n\';\n')))),(0,r.kt)("h3",{id:"suggested-practice"},"Suggested Practice"),(0,r.kt)("admonition",{title:"Practice Problems",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Now that you know how to take numerical input, try solving some of the following\nproblems (arranged in roughly increasing difficulty):"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc21j1"},"CCC '21 J1 \u2014 Boiling Water")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc19j1"},"CCC '19 J1 \u2014 Winning Score")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc15j1"},"CCC '15 J1 \u2014 Special Day")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc17j2"},"CCC '17 J2 \u2014 Shifty Sum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc20j2"},"CCC '20 J2 \u2014 Epidemiology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc17j3"},"CCC '17 J3 \u2014 Exactly Electrical")))),(0,r.kt)("h2",{id:"reading-a-variable-number-of-inputs--ccc-22-j2"},"Reading a Variable Number of Inputs \u2014 CCC '22 J2"),(0,r.kt)("p",null,"Sometimes the amount of input for a problem will not be fixed. To understand\nwhat is meant by this, consider ",(0,r.kt)("a",{parentName:"p",href:"https://dmoj.ca/problem/ccc22j2"},"CCC '22 J2 \u2014 Fergusonball\nRatings"),". The premise of this problem is that\nyou have some information about all the players in a sports team; you are tasked\nwith finding the star players. However, the number of players may vary from case\nto case; the input specification reads:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The first line of input consists of a positive integer ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," representing the\ntotal number of players on the team. This is followed by a pair of consecutive\nlines for each player. The first line in a pair is the number of points that\nthe player scored. The second line in a pair is the number of fouls that the\nplayer committed. Both the number of points and the number of fouls, are\nnon-negative integers.")),(0,r.kt)("p",null,"To account for this, your program should therefore read input in a loop,\nstopping only after you have gathered information about all players on the team.\nSample code in Python, Java, and C++ is provided below."),(0,r.kt)(s.Z,{groupId:"prog-langs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,"First, read the number of players on the team ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))))),"; this will determine how many\ntimes we need to loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"num_players = int(input())\n")),(0,r.kt)("p",null,"Now, for each player, read the number of points they scored and the number of fouls committed\nusing a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"{3-5}","{3-5}":!0},"num_players = int(input())\n\nfor _ in range(num_players):\n    points_scored = int(input())\n    foul_count = int(input())\n")),(0,r.kt)("p",null,"Your turn! ",(0,r.kt)("strong",{parentName:"p"},"Try to complete the solution above."))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"First, read the number of players on the team ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))))),"; this will determine how many\ntimes we need to loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Scanner scanner = new Scanner(System.in);\nint playerCount = scanner.nextInt();\n")),(0,r.kt)("p",null,"Now, for each player, read the number of points they scored and the number of fouls committed\nusing a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4-7}","{4-7}":!0},"Scaner scanner = new Scanner(System.in);\nint playerCount = scanner.nextInt();\n\nfor (int i = 0; i < playerCount; i++) {\n    int pointsScored = scanner.nextInt();\n    int foulCount = scanner.nextInt();\n}\n")),(0,r.kt)("p",null,"Your turn! ",(0,r.kt)("strong",{parentName:"p"},"Try to complete the solution above."))),(0,r.kt)(o.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,"First, read the number of players on the team ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))))),"; this will determine how many\ntimes we need to loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int player_count{};\nstd::cin >> player_count;\n")),(0,r.kt)("p",null,"Now, for each player, read the number of points they scored and the number of fouls committed\nusing a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"{4-7}","{4-7}":!0},"int player_count{};\nstd::cin >> player_count;\n\nfor (int i = 0; i < player_count; i++) {\n    int points_scored{}, foul_count{};\n    std::cin >> points_scored >> foul_count;\n}\n")),(0,r.kt)("p",null,"Your turn! ",(0,r.kt)("strong",{parentName:"p"},"Try to complete the solution above.")))),(0,r.kt)("h3",{id:"suggested-practice-1"},"Suggested Practice"),(0,r.kt)("admonition",{title:"Practice Problems",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Now that you know how to take input in a loop, try solving some of the following\nproblems (arranged in roughly increasing difficulty):"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc21j2"},"CCC '21 J2 \u2014 Silent Auction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc20j3"},"CCC '20 J3 \u2014 Art")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc19j2"},"CCC '19 J2 \u2014 Time to Decompress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc19j3"},"CCC '19 J3 \u2014 Cold Compress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc13s2"},"CCC '13 S2 \u2014 Bridge Transport")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Great job, you've reached this end of this tutorial! Here's a challenge problem\nto try if you're done all the suggested practice above: ",(0,r.kt)("a",{parentName:"p",href:"https://dmoj.ca/problem/ccc21s1"},"CCC '21 S1 \u2014 Crazy\nFencing"),"."))}d.isMDXComponent=!0}}]);