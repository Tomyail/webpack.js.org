(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{413:function(n,a,s){"use strict";s.r(a),a.default='<p>Extracts source maps from existing source files (from their <code>sourceMappingURL</code>).</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D source-map-loader</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="/concepts/#loaders">Documentation: Using loaders</a></p>\n<h3 id="example-webpack-config">Example webpack config<a href="#example-webpack-config" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"source-map-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">"pre"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><code>source-map-loader</code> extracts existing source maps from all JavaScript entries. This includes both inline source maps as well as those linked via URL. All source map data is passed to webpack for processing as per a chosen <a href="/configuration/devtool/">source map style</a> specified by the <code>devtool</code> option in <a href="/configuration/">webpack.config.js</a>.</p>\n<p>This loader is especially useful when using 3rd-party libraries having their own source maps. If not extracted and processed into the source map of the webpack bundle, browsers may misinterpret source map data. <code>source-map-loader</code> allows webpack to maintain source map data continuity across libraries so ease of debugging is preserved.</p>\n<p><code>source-map-loader</code> will extract from any JavaScript file, including those in the <code>node_modules</code> directory. Be mindful in setting <a href="/configuration/module/#rule-include">include</a> and <a href="/configuration/module/#rule-exclude">exclude</a> rule conditions to maximize bundling performance.</p>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);