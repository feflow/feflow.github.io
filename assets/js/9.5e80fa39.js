(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{291:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Welcome to Feflow, this document will help you get started quickly. And if you have any problems during use, please send feedback on "),i("a",{attrs:{href:"https://github.com/feflow/feflow/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("Feflow (pronounced /ˈfefləʊ/) is a "),i("strong",[e._v("front-end flow and rule tool")]),e._v(" to improve engineering efficiency., and is hosted on Github: "),i("a",{attrs:{href:"https://github.com/feflow/feflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("feflow"),i("OutboundLink")],1),e._v(". At present, it has been used in many application, such as Now, Huayang Live, Huayang Friends, Mobile QQ Near Hand, Group Video, Group Gift, Huiyin, Tencent Myapp, Penguins and etc. With 80+ WEB/IOS/Andriod stable users, the cumulative production project reached 240+.")]),e._v(" "),i("p",[e._v("Feflow refers to the thinking of Pipeline and divides work into five steps: init, develop, build, test, deploy. And corresponding to five basic commands: init, dev, build, test and deploy.")]),e._v(" "),i("p",[e._v("In addition to serving basic development workflows and specifications, Feflow provides an easy-to-expand plug-in mechanism for creating a team-wide toolchain ecosystem.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Feflow only provides a CLI and kernel. The CLI is responsible for interacting with the command line terminal. The kernel provides update mechanism, plugin mechanism and standardized log output capability. Feflow does not have any built-in logic related to the business.")]),e._v(" "),i("p",[e._v("So, if you want to use Feflow in a team, you need to understand the following concepts:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("In many front-end teams, there is a problem that the project development is not intelligent**. Many developers develop new projects based on the original project copy. This results in different project directory structures developed by different people in a team. It is time-consuming and labor-intensive to transfer and maintain subsequent projects.")]),e._v(" "),i("p",[e._v("To solve this problem, Feflow introduced the community's mainstream scaffolding to initialize the project. The scaffold of Feflow is based on "),i("a",{attrs:{href:"https://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeoman"),i("OutboundLink")],1),e._v(". It expands the standardized log and CLI tooling function to the scaffold through the context object. At the same time, it provides incremental updating mechanism for scaffolding. When creating the project, it will raise incremental updates when the local version and remote version are incompatible.")]),e._v(" "),i("p",[e._v("After introducing scaffolding, on the one hand, the team can maintain a unified technology stack and unified directory structure; on the other hand, it can also do some automated things when initializing the project, such as automatically creating remote Git repository and assigning developers master/developer rights limit, application monitoring Id, and internal CI/CD system to open quickly and so on.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("In addition to providing basic functionality, Feflow also has a plug-in mechanism to easily extend subcommands. You can use the plugin to do a lot of automation, such as batch compression of images, building operational activities, local development SDK, code statistics and so on.")]),e._v(" "),e._m(10),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/feflow/feflow/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://camo.githubusercontent.com/c7a57799d85cf13ce8ee0ecfb7039922726aff4a/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6665666c6f772f636f6e7472696275746f72732e7376673f77696474683d38393026627574746f6e3d66616c7365",alt:"贡献者"}}),i("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://pub.idqqimg.com/3cb9b240fbbc4a5d946ceb96325be36f.svg",alt:"feflow"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-is-feflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-feflow","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Feflow")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://qpic.url.cn/feeds_pic/ajNVdqHZLLD5vbArj0iaIkMLnGU3xPohibwRHibiaR3cibuy6RKYgHNCmFg/",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"concept"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concept","aria-hidden":"true"}},[this._v("#")]),this._v(" Concept")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#Scaffold"}},[this._v("Scaffold")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#Starkit"}},[this._v("Starkit")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#Plugin"}},[this._v("Plugin")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#Development-specification"}},[this._v("Development-specification")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"scaffold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaffold","aria-hidden":"true"}},[this._v("#")]),this._v(" Scaffold")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"starkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starkit","aria-hidden":"true"}},[this._v("#")]),this._v(" Starkit")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Feflow introduces the concept of starkits. You can understand the concept of development kits as similar to the relationship between "),i("code",[e._v("babel-presets")]),e._v(" and "),i("code",[e._v("babel-plugin")]),e._v(". "),i("code",[e._v("babel-presets")]),e._v(" is a collection of a series of "),i("code",[e._v("babel-plugins")]),e._v(". The development kit is actually composed of multiple plug-ins. ; The package is used to provide commands for a certain type of project, usually a collection of multiple commands. The Feflow development kit needs to start with feflow-devkit-*, and the development kit needs to be published to npm after the development is completed. Normally, the team members who are familiar with the construction will perform unified maintenance.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contributor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributor","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributor")])}],!1,null,null,null);t.default=a.exports}}]);