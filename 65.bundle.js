(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{361:function(e,n,a){"use strict";a.r(n),n.default='<p>Webpack is capable of adding <code>nonce</code> to all scripts that it loads. To activate the feature set a <code>__webpack_nonce__</code> variable needs to be included in your entry script. A unique hash based nonce should be generated and provided for each unique page view this is why <code>__webpack_nonce__</code> is specified in the entry file and not in the configuration. Please note that <code>nonce</code> should always be a base64-encoded string.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In the entry file:</p>\n<pre><code class="hljs language-js"><span class="token comment">// ...</span>\n__webpack_nonce__ <span class="token operator">=</span> <span class="token string">\'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=\'</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span></code></pre>\n<h2 id="enabling-csp">Enabling CSP<a href="#enabling-csp" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please note that CSPs are not enabled by default. A corresponding header <code>Content-Security-Policy</code> or meta tag <code>&#x3C;meta http-equiv="Content-Security-Policy" ...></code> needs to be sent with the document to instruct the browser to enable the CSP. Here\'s an example of what a CSP header including a CDN white-listed URL might look like:</p>\n<pre><code class="hljs language-html">Content-Security-Policy: default-src \'self\'; script-src \'self\' https://trusted.cdn.com;</code></pre>\n<p>For more information on CSP and <code>nonce</code> attribute, please refer to <strong>Further Reading</strong> section at the bottom of this page.</p>\n'}}]);