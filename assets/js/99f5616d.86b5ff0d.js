"use strict";(self.webpackChunktooling_docs=self.webpackChunktooling_docs||[]).push([[451],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67587:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),s=["components"],a={sidebar_position:1,title:"Base"},c=void 0,l={unversionedId:"robots-frc/RapidReact/subsystems/Base",id:"robots-frc/RapidReact/subsystems/Base",title:"Base",description:"The base subsystem is responsible for controlling the drivetrain and configuring the swerve pods.",source:"@site/docs/robots-frc/RapidReact/subsystems/Base.md",sourceDirName:"robots-frc/RapidReact/subsystems",slug:"/robots-frc/RapidReact/subsystems/Base",permalink:"/software-docs/docs/robots-frc/RapidReact/subsystems/Base",draft:!1,editUrl:"https://github.com/thePinkAlliance/software-docs/tree/main/docs/robots-frc/RapidReact/subsystems/Base.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Base"},sidebar:"tutorialSidebar",previous:{title:"Climber Module",permalink:"/software-docs/docs/robots-frc/RapidReact/modules/Climber"},next:{title:"Climbers",permalink:"/software-docs/docs/robots-frc/RapidReact/subsystems/Climber"}},d={},p=[{value:"Swerve Pods",id:"swerve-pods",level:2},{value:"Initializing swerve pods",id:"initializing-swerve-pods",level:3},{value:"Defining motor and magnetic encoder id&#39;s",id:"defining-motor-and-magnetic-encoder-ids",level:3},{value:"Creating swerve odometry, kinimatics, speed, states classes (NOT DONE)",id:"creating-swerve-odometry-kinimatics-speed-states-classes-not-done",level:3}],u={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The base subsystem is responsible for controlling the drivetrain and configuring the swerve pods."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"   This page is a work in progress and is not finished.")),(0,i.kt)("h2",{id:"swerve-pods"},"Swerve Pods"),(0,i.kt)("p",null,"The swerve pods we will be using in this guide are the ",(0,i.kt)("a",{parentName:"p",href:"https://www.swervedrivespecialties.com/products/mk4i-swerve-module"},"MK4i swerve pods")," from Swerve Drive Specialties with the L1 gear ratio which is capable of 13 ft/s using ",(0,i.kt)("a",{parentName:"p",href:"https://store.ctr-electronics.com/falcon-500-powered-by-talon-fx/"},"Falcon 500's"),"."),(0,i.kt)("h3",{id:"initializing-swerve-pods"},"Initializing swerve pods"),(0,i.kt)("p",null,"In order to initialize the swerve pods, Swerve Drive Specialies has provided a helper class called ",(0,i.kt)("inlineCode",{parentName:"p"},"Mk4iSwerveModuleHelper")," however before we can use this helper we need to specify a bunch of information about our swerve pods to the library."),(0,i.kt)("h3",{id:"defining-motor-and-magnetic-encoder-ids"},"Defining motor and magnetic encoder id's"),(0,i.kt)("p",null,"So each swerve pod has two falcon 500's on the left and the right, the right one controls the rotation of the wheel and the left motor controls the speed of the wheel however for the most part the right motor does not know the current rotation of the wheel so that's why the swerve pods also have a magnetic encoder called a ",(0,i.kt)("a",{parentName:"p",href:"https://store.ctr-electronics.com/cancoder/"},"CANCoder")," they are mounted on top of the shaft of the pod were a small magnet is allowing us to read the current rotation of the pod."),(0,i.kt)("p",null,"So to configure these we need to define some variables for these devices like their CAN id's, motor offsets"),(0,i.kt)("h3",{id:"creating-swerve-odometry-kinimatics-speed-states-classes-not-done"},"Creating swerve odometry, kinimatics, speed, states classes (NOT DONE)"),(0,i.kt)("p",null,"So in order to use and control and swerve drivetrain you need kinimatics class what that class is in charge of doing is interpeting a x, y and rotation value in the range of -1 -> 1 into an individual swerve pod angle in radians and speed in meters per second. with that setup we need to be able to track our previous positions that is what the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-odometry.html?highlight=SwerveDriveOdometry"},"SwerveDriveOdometry")," class is for, it needs to run in the base subsystem's perodic method to update the pose in realtime most of the time this class won't need to be used unless you are working with auto routines using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples/swervecontrollercommand"},"SwerveControllerCommand"),". Controlling swerve module states"))}m.isMDXComponent=!0}}]);