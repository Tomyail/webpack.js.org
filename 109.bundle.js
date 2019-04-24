(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{405:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/null-loader"><img src="https://img.shields.io/npm/v/null-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/null-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/null-loader"><img src="https://david-dm.org/webpack-contrib/null-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/null-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/null-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=null-loader"><img src="https://packagephobia.now.sh/badge?p=null-loader" alt="size"></a></p>\n<p>A webpack loader that returns an empty module.</p>\n<p>One use for this loader is to silence modules imported by a dependency. Say, for\nexample, your project relies on an ES6 library that imports a polyfill you don\'t\nneed, so removing it will cause no loss in functionality.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>null-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install null-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token comment">// Test for a polyfill (or any file) and it won\'t be included in your</span>\n        <span class="token comment">// bundle</span>\n        test<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'node_modules/library/polyfill.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'null-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/null-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/null-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);