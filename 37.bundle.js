(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{331:function(e,o,t){"use strict";t.r(o),o.default='<p>This option controls if and how source maps are generated.</p>\n<p>Use the <a href="/plugins/source-map-dev-tool-plugin"><code>SourceMapDevToolPlugin</code></a> for a more fine grained configuration. See the <a href="/loaders/source-map-loader"><code>source-map-loader</code></a> to deal with existing source maps.</p>\n<h2 id="devtool"><code>devtool</code><a href="#devtool" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code> <code>false</code></p>\n<p>Choose a style of <a href="http://blog.teamtreehouse.com/introduction-source-maps">source mapping</a> to enhance the debugging process. These values can affect build and rebuild speed dramatically.</p>\n<blockquote class="tip">\n<p>The webpack repository contains an <a href="https://github.com/webpack/webpack/tree/master/examples/source-map">example showing the effect of all <code>devtool</code> variants</a>. Those examples will likely help you to understand the differences.</p>\n</blockquote>\n<blockquote class="tip">\n<p>Instead of using the <code>devtool</code> option you can also use <code>SourceMapDevToolPlugin</code>/<code>EvalSourceMapDevToolPlugin</code> directly as it has more options. Never use both the <code>devtool</code> option and plugin together. The <code>devtool</code> option adds the plugin internally so you would end up with the plugin applied twice.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>devtool</th>\n<th>build</th>\n<th>rebuild</th>\n<th>production</th>\n<th>quality</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>(none)<p class="description mobile">+++</p></p></div></td>\n<td class="description desktop">+++</td>\n<td>+++</td>\n<td>yes</td>\n<td>bundled code</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>eval<p class="description mobile">+++</p></p></div></td>\n<td class="description desktop">+++</td>\n<td>+++</td>\n<td>no</td>\n<td>generated code</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>cheap-eval-source-map<p class="description mobile">+</p></p></div></td>\n<td class="description desktop">+</td>\n<td>++</td>\n<td>no</td>\n<td>transformed code (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>cheap-module-eval-source-map<p class="description mobile">o</p></p></div></td>\n<td class="description desktop">o</td>\n<td>++</td>\n<td>no</td>\n<td>original source (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>eval-source-map<p class="description mobile">--</p></p></div></td>\n<td class="description desktop">--</td>\n<td>+</td>\n<td>no</td>\n<td>original source</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>cheap-source-map<p class="description mobile">+</p></p></div></td>\n<td class="description desktop">+</td>\n<td>o</td>\n<td>yes</td>\n<td>transformed code (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>cheap-module-source-map<p class="description mobile">o</p></p></div></td>\n<td class="description desktop">o</td>\n<td>-</td>\n<td>yes</td>\n<td>original source (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>inline-cheap-source-map<p class="description mobile">+</p></p></div></td>\n<td class="description desktop">+</td>\n<td>o</td>\n<td>no</td>\n<td>transformed code (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>inline-cheap-module-source-map<p class="description mobile">o</p></p></div></td>\n<td class="description desktop">o</td>\n<td>-</td>\n<td>no</td>\n<td>original source (lines only)</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>source-map<p class="description mobile">--</p></p></div></td>\n<td class="description desktop">--</td>\n<td>--</td>\n<td>yes</td>\n<td>original source</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>inline-source-map<p class="description mobile">--</p></p></div></td>\n<td class="description desktop">--</td>\n<td>--</td>\n<td>no</td>\n<td>original source</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>hidden-source-map<p class="description mobile">--</p></p></div></td>\n<td class="description desktop">--</td>\n<td>--</td>\n<td>yes</td>\n<td>original source</td>\n</tr>\n<tr>\n<td><div class="title"><p>devtool</p><p>build</p><p>rebuild</p><p>production</p><p>quality</p></div>\n<div class="content"><p>nosources-source-map<p class="description mobile">--</p></p></div></td>\n<td class="description desktop">--</td>\n<td>--</td>\n<td>yes</td>\n<td>without source content</td>\n</tr>\n</tbody>\n</table>\n<blockquote class="tip">\n<p><code>+++</code> super fast, <code>++</code> fast, <code>+</code> pretty fast, <code>o</code> medium, <code>-</code> pretty slow, <code>--</code> slow</p>\n</blockquote>\n<p>Some of these values are suited for development and some for production. For development you typically want fast Source Maps at the cost of bundle size, but for production you want separate Source Maps that are accurate and support minimizing.</p>\n<blockquote class="warning">\n<p>There are some issues with Source Maps in Chrome. <a href="https://github.com/webpack/webpack/issues/3165">We need your help!</a>.</p>\n</blockquote>\n<blockquote class="tip">\n<p>See <a href="/configuration/output#output-sourcemapfilename"><code>output.sourceMapFilename</code></a> to customize the filenames of generated Source Maps.</p>\n</blockquote>\n<h3 id="qualities">Qualities<a href="#qualities" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>bundled code</code> - You see all generated code as a big blob of code. You don\'t see modules separated from each other.</p>\n<p><code>generated code</code> - You see each module separated from each other, annotated with module names. You see the code generated by webpack. Example: Instead of <code>import {test} from "module"; test();</code> you see something like <code>var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42); module__WEBPACK_IMPORTED_MODULE_1__.a();</code>.</p>\n<p><code>transformed code</code> - You see each module separated from each other, annotated with module names. You see the code before webpack transforms it, but after Loaders transpile it. Example: Instead of <code>import {test} from "module"; class A extends test {}</code> you see something like <code>import {test} from "module"; var A = function(_test) { ... }(test);</code></p>\n<p><code>original source</code> - You see each module separated from each other, annotated with module names. You see the code before transpilation, as you authored it. This depends on Loader support.</p>\n<p><code>without source content</code> - Contents for the sources are not included in the Source Maps. Browsers usually try to load the source from the webserver or filesystem. You have to make sure to set <a href="/configuration/output/#output-devtoolmodulefilenametemplate"><code>output.devtoolModuleFilenameTemplate</code></a> correctly to match source urls.</p>\n<p><code>(lines only)</code> - Source Maps are simplified to a single mapping per line. This usually means a single mapping per statement (assuming you author it this way). This prevents you from debugging execution on statement level and from settings breakpoints on columns of a line. Combining with minimizing is not possible as minimizers usually only emit a single line.</p>\n<h3 id="development">Development<a href="#development" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following options are ideal for development:</p>\n<p><code>eval</code> - Each module is executed with <code>eval()</code> and <code>//@ sourceURL</code>. This is pretty fast. The main disadvantage is that it doesn\'t display line numbers correctly since it gets mapped to transpiled code instead of the original code (No Source Maps from Loaders).</p>\n<p><code>eval-source-map</code> - Each module is executed with <code>eval()</code> and a SourceMap is added as a DataUrl to the <code>eval()</code>. Initially it is slow, but it provides fast rebuild speed and yields real files. Line numbers are correctly mapped since it gets mapped to the original code. It yields the best quality SourceMaps for development.</p>\n<p><code>cheap-eval-source-map</code> - Similar to <code>eval-source-map</code>, each module is executed with <code>eval()</code>. It is "cheap" because it doesn\'t have column mappings, it only maps line numbers. It ignores SourceMaps from Loaders and only display transpiled code similar to the <code>eval</code> devtool.</p>\n<p><code>cheap-module-eval-source-map</code> - Similar to <code>cheap-eval-source-map</code>, however, in this case Source Maps from Loaders are processed for better results. However Loader Source Maps are simplified to a single mapping per line.</p>\n<h3 id="special-cases">Special cases<a href="#special-cases" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following options are not ideal for development nor production. They are needed for some special cases, i. e. for some 3rd party tools.</p>\n<p><code>inline-source-map</code> - A SourceMap is added as a DataUrl to the bundle.</p>\n<p><code>cheap-source-map</code> - A SourceMap without column-mappings ignoring loader Source Maps.</p>\n<p><code>inline-cheap-source-map</code> - Similar to <code>cheap-source-map</code> but SourceMap is added as a DataUrl to the bundle.</p>\n<p><code>cheap-module-source-map</code> - A SourceMap without column-mappings that simplifies loader Source Maps to a single mapping per line.</p>\n<p><code>inline-cheap-module-source-map</code> - Similar to <code>cheap-module-source-map</code> but SourceMap is added as a DataUrl to the bundle.</p>\n<h3 id="production">Production<a href="#production" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>These options are typically used in production:</p>\n<p><code>(none)</code> (Omit the <code>devtool</code> option) - No SourceMap is emitted. This is a good option to start with.</p>\n<p><code>source-map</code> - A full SourceMap is emitted as a separate file. It adds a reference comment to the bundle so development tools know where to find it.</p>\n<blockquote class="warning">\n<p>You should configure your server to disallow access to the Source Map file for normal users!</p>\n</blockquote>\n<p><code>hidden-source-map</code> - Same as <code>source-map</code>, but doesn\'t add a reference comment to the bundle. Useful if you only want SourceMaps to map error stack traces from error reports, but don\'t want to expose your SourceMap for the browser development tools.</p>\n<blockquote class="warning">\n<p>You should not deploy the Source Map file to the webserver. Instead only use it for error report tooling.</p>\n</blockquote>\n<p><code>nosources-source-map</code> - A SourceMap is created without the <code>sourcesContent</code> in it. It can be used to map stack traces on the client without exposing all of the source code. You can deploy the Source Map file to the webserver.</p>\n<blockquote class="warning">\n<p>It still exposes filenames and structure for decompiling, but it doesn\'t expose the original code.</p>\n</blockquote>\n<blockquote class="tip">\n<p>When using the <code>terser-webpack-plugin</code> you must provide the <code>sourceMap: true</code> option to enable SourceMap support.</p>\n</blockquote>\n'}}]);