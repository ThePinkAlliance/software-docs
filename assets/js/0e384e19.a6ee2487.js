"use strict";(self.webpackChunktooling_docs=self.webpackChunktooling_docs||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},s="Software Intro",p={unversionedId:"intro",id:"intro",title:"Software Intro",description:"Let's setup our programming enviroment for FRC.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/software-docs/docs/intro",draft:!1,editUrl:"https://github.com/thePinkAlliance/software-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Programming Style",permalink:"/software-docs/docs/code-guidelines/styling"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Downloading the robot code",id:"downloading-the-robot-code",level:2},{value:"Opening the Project in VSCode",id:"opening-the-project-in-vscode",level:2},{value:"Open VSCode with windows search",id:"open-vscode-with-windows-search",level:3},{value:"Open the project",id:"open-the-project",level:3}],u={toc:d};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-intro"},"Software Intro"),(0,a.kt)("p",null,"Let's setup our programming enviroment for FRC."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Let's start with installing required tools."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html"},"WPILib")," latest version is perferred:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When installing WPILib, when prompted for the desired install mode select ",(0,a.kt)("strong",{parentName:"li"},"Everything")," and select ",(0,a.kt)("strong",{parentName:"li"},"Install for this User"),"."),(0,a.kt)("li",{parentName:"ul"},"When prompted to install VSCode, select ",(0,a.kt)("strong",{parentName:"li"},"Download for this computer only"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://https://git-scm.com/"},"Git")," standalone installer for 64-bit is perferred.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Leave all the options default in the installer."),(0,a.kt)("li",{parentName:"ul"},"If your having issues refer to this guide from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/git-guides/install-git"},"Github"),"."))),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/java/java_intro.asp"},"Java"),"."),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-benchtop-test-program-cpp-java.html"},"WPILib"),"."),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-benchtop-test-program-cpp-java.html"},"Git Bash"),".")),(0,a.kt)("h2",{id:"downloading-the-robot-code"},"Downloading the robot code"),(0,a.kt)("p",null,"This command will create a folder and download all the 2022 robot code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ThePinkAlliance/RapidReact\n")),(0,a.kt)("p",null,"You can type this command into Git Bash to execute it."),(0,a.kt)("admonition",{title:"note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do keep in mind the current file location of where the code has been downloaded so you can access it later."),(0,a.kt)("p",{parentName:"admonition"},"If you don't know how to get the current directory type ",(0,a.kt)("inlineCode",{parentName:"p"},"$pwd")," in the terminal."),(0,a.kt)("p",{parentName:"admonition"},"If you want to change the directory that the code is downloaded in here's a guide on using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/a/39593539/11128249"},"change directory"))," command.")),(0,a.kt)("h2",{id:"opening-the-project-in-vscode"},"Opening the Project in VSCode"),(0,a.kt)("p",null,"We are going to open the project using Wpilib's vscode and then for the most part start programming."),(0,a.kt)("h3",{id:"open-vscode-with-windows-search"},"Open VSCode with windows search"),(0,a.kt)("p",null,"When you open VSCode for the first time it may take longer to start."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"search",src:n(18161).Z,width:"774",height:"726"})),(0,a.kt)("h3",{id:"open-the-project"},"Open the project"),(0,a.kt)("p",null,"The folder we want to open is the one you made note of earlier."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"open folder",src:n(99195).Z,width:"447",height:"227"})),(0,a.kt)("p",null,"Now your in the project and can start programming \ud83c\udf89."))}h.isMDXComponent=!0},99195:function(e,t,n){t.Z=n.p+"assets/images/screenshot-open-folder-c78520d103a6545dc118e0a65764717e.png"},18161:function(e,t,n){t.Z=n.p+"assets/images/screenshot-windows-search-c7a5f1333830def0f0519691d060d21b.png"}}]);