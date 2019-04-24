(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{315:function(n,a,s){"use strict";s.r(a),a.default='<p>You may have noticed that few webpack configurations look exactly alike. This is because <strong>webpack\'s configuration file is a JavaScript file that exports a webpack <a href="/configuration/">configuration</a>.</strong> This configuration is then processed by webpack based upon its defined properties.</p>\n<p>Because it\'s a standard Node.js CommonJS module, you <strong>can do the following</strong>:</p>\n<ul>\n<li>import other files via <code>require(...)</code></li>\n<li>use utilities on npm via <code>require(...)</code></li>\n<li>use JavaScript control flow expressions i. e. the <code>?:</code> operator</li>\n<li>use constants or variables for often used values</li>\n<li>write and execute functions to generate a part of the configuration</li>\n</ul>\n<p>Use these features when appropriate.</p>\n<p>While they are technically feasible, <strong>the following practices should be avoided</strong>:</p>\n<ul>\n<li>Access CLI arguments, when using the webpack CLI (instead write your own CLI, or <a href="/configuration/configuration-types/">use <code>--env</code></a>)</li>\n<li>Export non-deterministic values (calling webpack twice should result in the same output files)</li>\n<li>Write long configurations (instead split the configuration into multiple files)</li>\n</ul>\n<blockquote class="tip">\n<p>The most important part to take away from this document is that there are many different ways to format and style your webpack configuration. The key is to stick with something consistent that you and your team can understand and maintain.</p>\n</blockquote>\n<p>The examples below describe how webpack\'s configuration can be both expressive and configurable because <em>it is code</em>:</p>\n<h2 id="simple-configuration">Simple Configuration<a href="#simple-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'development\'</span><span class="token punctuation">,</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./foo.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'foo.bundle.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><em>See</em>: <a href="/configuration/">Configuration section</a> for the all supported configuration options</p>\n<h2 id="multiple-targets">Multiple Targets<a href="#multiple-targets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Along with exporting a single configuration as an object, <a href="/configuration/configuration-types/#exporting-a-function">function</a> or <a href="/configuration/configuration-types/#exporting-a-promise">Promise</a>, you can export multiple configurations.</p>\n<p><em>See</em>: <a href="/configuration/configuration-types/#exporting-multiple-configurations">Exporting multiple configurations</a></p>\n<h2 id="using-other-configuration-languages">Using other Configuration Languages<a href="#using-other-configuration-languages" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack accepts configuration files written in multiple programming and data languages.</p>\n<p><em>See</em>: <a href="/configuration/configuration-languages/">Configuration Languages</a></p>\n'}}]);