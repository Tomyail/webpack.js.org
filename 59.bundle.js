(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{355:function(e,n,a){"use strict";a.r(n),n.default='<p>This index lists common terms used throughout the webpack ecosystem.</p>\n<h2 id="a">A<a href="#a" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/guides/asset-management/"><strong>Asset</strong></a>: This a general term for the images, fonts, media, and any other kind of files that are typically used in websites and other applications. These typically end up as individual files within the <a href="/glossary#o">output</a> but can also be inlined via things like the <a href="/loaders/style-loader">style-loader</a> or <a href="/loaders/url-loader">url-loader</a>.</li>\n</ul>\n<h2 id="b">B<a href="#b" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/guides/getting-started/#creating-a-bundle"><strong>Bundle</strong></a>: Produced from a number of distinct modules, bundles contain the final versions of source files that have already undergone the loading and compilation process.</li>\n<li><a href="/guides/code-splitting"><strong>Bundle Splitting</strong></a>: This process offers one way of optimizing a build, allowing webpack to generate multiple bundles for a single application. As a result, each bundle can be isolated from changes effecting others, reducing the amount of code that needs to be republished and therefore re-downloaded by the client and taking advantage of browser caching.</li>\n</ul>\n<h2 id="c">C<a href="#c" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><strong>Chunk</strong>: This webpack-specific term is used internally to manage the bundling process. Bundles are composed out of chunks, of which there are several types (e.g. entry and child). Typically, <em>chunks</em> directly correspond with the output <em>bundles</em> however, there are some configurations that don\'t yield a one-to-one relationship.</li>\n<li><a href="/guides/code-splitting/"><strong>Code Splitting</strong></a>: Refers to dividing your code into various bundles/chunks which you can then load on demand instead of loading a single bundle containing everything.</li>\n<li><a href="/concepts/configuration/"><strong>Configuration</strong></a>: webpack config file is a plain old JavaScript file that exports an object. This object is then processed by webpack based upon its defined properties.</li>\n</ul>\n<h2 id="d">D<a href="#d" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/dependency-graph"><strong>Dependency Graph</strong></a>: Any time one file depends on another, webpack treats this as a <em>dependency</em>. Starting from an entry point(s), webpack recursively builds a dependency graph that includes every module/asset your application needs.</li>\n</ul>\n<h2 id="e">E<a href="#e" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/entry-points"><strong>Entry Point</strong></a>: The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle. You can think of your application\'s entry point(s) as the <strong>contextual root(s)</strong> of what you want bundled.</li>\n</ul>\n<h2 id="f">F<a href="#f" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="g">G<a href="#g" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="h">H<a href="#h" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/hot-module-replacement"><strong>Hot Module Replacement (HMR)</strong></a>: A process that exchanges, adds, or removes  <code>modules</code> while an application is running without a full page reload.</li>\n</ul>\n<h2 id="i">I<a href="#i" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="j">J<a href="#j" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="k">K<a href="#k" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="l">L<a href="#l" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/loaders"><strong>Loaders</strong></a>: Transformations that are applied on the source code of a module. They allow you to pre-process files as you <code>require()</code> or "load" them. Similar to a \'task-runner\'.</li>\n</ul>\n<h2 id="m">M<a href="#m" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/modules"><strong>Module</strong></a>: Discrete chunks of functionality that provide a smaller surface area than a full program. Well-written modules provide solid abstractions and encapsulation boundaries which make up a coherent design and clear purpose.</li>\n<li><a href="/concepts/module-resolution/"><strong>Module Resolution</strong></a>: A module can be required as a dependency from another module and a resolver is a library which helps in locating a module by its absolute path.. Modules are searched for inside all directories specified in <code>resolve.modules</code>.</li>\n</ul>\n<h2 id="n">N<a href="#n" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="o">O<a href="#o" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>\n<p><a href="/concepts/output"><strong>Output</strong></a>: Option(s) specifying where to output the compiled files to disk.</p>\n<blockquote>\n<p><em>Note, that while there can be multiple entry points, only one output configuration is specified.</em></p>\n</blockquote>\n</li>\n</ul>\n<h2 id="p">P<a href="#p" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/plugins"><strong>Plugin</strong></a>: A JavaScript object that has an <code>apply</code> property. This <code>apply</code> property is called by the webpack compiler, giving access to the entire compilation lifecycle. These packages will typically extend compilation functionality in one way or another.</li>\n</ul>\n<h2 id="q">Q<a href="#q" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="r">R<a href="#r" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/guides/dependency-management/"><strong>Request</strong></a>: Refers to the expression in the require/import statement, e.g. <em>require("./template/" + name + ".ejs")</em>, the request is <em>"./template/" + name + ".ejs"</em>.</li>\n</ul>\n<h2 id="s">S<a href="#s" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="t">T<a href="#t" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/configuration/target/"><strong>Target</strong></a>: User configured deployment target(s) <a href="/configuration/target/">listed here</a> to compile for a specific environment like the browser, NodeJS, or Electron.</li>\n<li><a href="/guides/tree-shaking/"><strong>Tree Shaking</strong></a>: Unused/Excess code elimination, or more precisely, live code importing. Compilers like webpack will accomplish this by analyzing the various kinds <code>import</code> statements and usage of the imported code to determine what parts of dependencies are actually being utilized, dropping parts of the "tree" that are not.</li>\n</ul>\n<h2 id="u">U<a href="#u" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="v">V<a href="#v" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/concepts/entry-points/#separate-app-and-vendor-entries"><strong>Vendor Entry Point</strong></a>: Create dependency graphs starting at both <code>app.js</code> and <code>vendors.js</code>. These graphs are completely separate and independent of each other to allow leverage of <code>CommonsChunkPlugin</code> and extract any vendor references from your app bundle into your vendor bundle. Helps achieve a common pattern in webpack known as <a href="/guides/caching/">long-term vendor-caching</a>.</li>\n</ul>\n<h2 id="w">W<a href="#w" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/"><strong>webpack</strong></a>: A highly configurable <a href="/concepts/modules">module</a> bundler for modern JavaScript applications</li>\n</ul>\n<h2 id="x">X<a href="#x" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="y">Y<a href="#y" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h2 id="z">Z<a href="#z" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n'}}]);