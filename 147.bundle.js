(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{443:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>DefinePlugin</code> allows you to create global constants which can be configured at <strong>compile</strong> time. This can be useful for allowing different behavior between development builds and production builds. If you perform logging in your development build but not in the production build you might use a global constant to determine whether logging takes place. That\'s where <code>DefinePlugin</code> shines, set it and forget it rules for development and production builds.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// Definitions...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Each key passed into <code>DefinePlugin</code> is an identifier or multiple identifiers joined with <code>.</code>.</p>\n<ul>\n<li>If the value is a string it will be used as a code fragment.</li>\n<li>If the value isn\'t a string, it will be stringified (including functions).</li>\n<li>If the value is an object all keys are defined the same way.</li>\n<li>If you prefix <code>typeof</code> to the key, it\'s only defined for typeof calls.</li>\n</ul>\n<p>The values will be inlined into the code allowing a minification pass to remove the redundant conditional.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token constant">PRODUCTION</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">VERSION</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">\'5fa3b9\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">BROWSER_SUPPORTS_HTML5</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token constant">TWO</span><span class="token punctuation">:</span> <span class="token string">\'1+1\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'typeof window\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">\'object\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'process.env.NODE_ENV\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Running App version \'</span> <span class="token operator">+</span> <span class="token constant">VERSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">BROWSER_SUPPORTS_HTML5</span><span class="token punctuation">)</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html5shiv\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>When defining values for <code>process</code> prefer <code>\'process.env.NODE_ENV\': JSON.stringify(\'production\')</code> over <code>process: { env: { NODE_ENV: JSON.stringify(\'production\') } }</code>. Using the latter will overwrite the <code>process</code> object which can break compatibility with some modules that expect other values on the process object to be defined.</p>\n</blockquote>\n<blockquote class="tip">\n<p>Note that because the plugin does a direct text replacement, the value given to it must include <strong>actual quotes</strong> inside of the string itself. Typically, this is done either with alternate quotes, such as <code>\'"production"\'</code>, or by using <code>JSON.stringify(\'production\')</code>.</p>\n</blockquote>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">PRODUCTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Debug info\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">PRODUCTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Production log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>After passing through webpack with no minification results in:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Debug info\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Production log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>and then after a minification pass results in:</p>\n<pre><code class="hljs language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Production log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="feature-flags">Feature Flags<a href="#feature-flags" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Enable/disable features in production/development build using <a href="https://en.wikipedia.org/wiki/Feature_toggle">feature flags</a>.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">\'NICE_FEATURE\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'EXPERIMENTAL_FEATURE\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="service-urls">Service URLs<a href="#service-urls" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Use a different service URL in production/development builds:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">\'SERVICE_URL\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">\'https://dev.example.com\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);