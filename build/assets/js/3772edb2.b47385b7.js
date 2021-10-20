(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[20167],{16239:function(e,o,t){"use strict";t.d(o,{Z:function(){return l}});var n=t(22122),s=t(19756),a=t(86010),i=t(67294),r="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var o,t=e.href,l=e.round,u=void 0!==l&&l,d=(0,s.Z)(e,["href","round"]);return d.className=(0,a.Z)(((o={})[d.className]=Boolean(d.className),o[r]=!0,o["docs-button"]=!0,o[c]=u,o["docs-button--round"]=u,o)),t?i.createElement("a",(0,n.Z)({href:t,className:"docsButton"},d),d.children):i.createElement("button",(0,n.Z)({className:"docsButton"},d),d.children)}},49351:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var n=t(22122),s=t(19756),a=(t(67294),t(3905)),i=t(28312),r=t(16239),c=t(41395),l=t(58215),u=t(81840),d={title:"Code Push"},p={unversionedId:"native/plugins/code-push",id:"native/plugins/code-push",isDocsHomePage:!1,title:"Code Push",description:"CodePush plugin for Cordova by Microsoft that supports iOS and Android.",source:"@site/docs/native/plugins/code-push.md",sourceDirName:"native/plugins",slug:"/native/plugins/code-push",permalink:"/docs/native/plugins/code-push",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/code-push.md",version:"current",frontMatter:{title:"Code Push"},sidebar:"native",previous:{title:"Clover Go",permalink:"/docs/native/plugins/clover-go"},next:{title:"Colored Browser Tabs",permalink:"/docs/native/plugins/colored-browser-tabs"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],h={toc:m};function v(e){var o=e.components,t=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CodePush plugin for Cordova by Microsoft that supports iOS and Android."),(0,a.kt)("p",null,"For more info, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Dellos7/example-cordova-code-push-plugin"},"https://github.com/Dellos7/example-cordova-code-push-plugin")),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/Microsoft/cordova-plugin-code-push",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Microsoft/cordova-plugin-code-push")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-code-push ","\n","$ npm install @ionic-native/code-push ","\n","$ ionic cap sync")),(0,a.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-code-push ","\n","$ npm install @ionic-native/code-push ","\n")),(0,a.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android"),(0,a.kt)("li",{parentName:"ul"},"iOS")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CodePush } from '@ionic-native/code-push/ngx';\n\nconstructor(private codePush: CodePush) { }\n\n...\n\n// note - mostly error & completed methods of observable will not fire\n// as syncStatus will contain the current state of the update\nthis.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));\n\nconst downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }\nthis.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));\n\n")))}v.isMDXComponent=!0}}]);