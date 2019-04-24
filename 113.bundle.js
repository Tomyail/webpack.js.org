(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{409:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/react-proxy-loader"><img src="https://img.shields.io/npm/v/react-proxy-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/react-proxy-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/react-proxy-loader"><img src="https://david-dm.org/webpack-contrib/react-proxy-loader.svg" alt="deps"></a></p>\n<p><a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>Wraps a react component in a proxy component to enable Code Splitting, which\nloads a react component and its dependencies on demand.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>react-proxy-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install react-proxy-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// returns the proxied component, loaded on demand</span>\n<span class="token comment">// webpack creates an additional chunk for this component and its dependencies</span>\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-proxy-loader!./Component\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// returns a mixin for the proxied component</span>\n<span class="token comment">// This allows you to setup rendering for the loading state for the proxy</span>\n<span class="token keyword">const</span> ComponentProxyMixin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-proxy-loader!./Component\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Mixin<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ComponentProxy <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tmixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>ComponentProxyMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\trenderUnavailable<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token operator">&#x3C;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Or specify the proxied components in your configuration:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tmodule<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tloaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token comment">/* ... */</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\ttest<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token regex">/component\\.jsx$/</span><span class="token punctuation">,</span> <span class="token comment">// select component by RegExp</span>\n\t\t\t\t\t<span class="token operator">/</span>\\<span class="token punctuation">.</span><span class="token keyword">async</span>\\<span class="token punctuation">.</span>jsx$<span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// select component by extension</span>\n\t\t\t\t\t<span class="token string">"/abs/path/to/component.jsx"</span> <span class="token comment">// absolute path to component</span>\n\t\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">"react-proxy-loader"</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Or provide a chunk name within a <code>name</code> query parameter:</p>\n<pre><code class="hljs language-js"><span class="token keyword">var</span> Component <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"react-proxy-loader?name=chunkName!./Component"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/react-proxy-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);