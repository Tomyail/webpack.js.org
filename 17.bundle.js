(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{309:function(n,a,s){"use strict";s.r(a),a.default='<p>The <code>parser</code> instance, found in the <code>compiler</code>, is used to parse each module\nbeing processed by webpack. The <code>parser</code> is yet another webpack class that\nextends <code>tapable</code> and provides a variety of <code>tapable</code> hooks that can be used by\nplugin authors to customize the parsing process.</p>\n<p>The <code>parser</code> is found within <a href="/api/compiler-hooks/#normalmodulefactory">module factories</a> and therefore takes little\nmore work to access:</p>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>normalModuleFactory<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> factory <span class="token operator">=></span> <span class="token punctuation">{</span>\n  factory<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>parser<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'javascript/auto\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>parser<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>As with the <code>compiler</code>, <code>tapAsync</code> and <code>tapPromise</code> may also be available\ndepending on the type of hook.</p>\n<h2 id="hooks">Hooks<a href="#hooks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following lifecycle hooks are exposed by the <code>parser</code> and can be accessed\nas such:</p>\n<h3 id="evaluatetypeof">evaluateTypeof<a href="#evaluatetypeof" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Triggered when evaluating an expression consisting in a <code>typeof</code> of a free variable</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>evaluateTypeof<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'myIdentifier\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n  <span class="token keyword">return</span> expressionResult<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>This will trigger the <code>evaluateTypeof</code> hook:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">typeof</span> myIdentifier<span class="token punctuation">;</span></code></pre>\n<p>This won\'t trigger:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> myIdentifier <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">typeof</span> myIdentifier<span class="token punctuation">;</span></code></pre>\n<h3 id="evaluate">evaluate<a href="#evaluate" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when evaluating an expression.</p>\n<ul>\n<li>Hook parameters: <code>expressionType</code></li>\n<li>Callback parameters: <code>expression</code></li>\n</ul>\n<p>For example:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>MyPlugin.js</strong></p>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>evaluate<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'NewExpression\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n  <span class="token keyword">return</span> expressionResult<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Where the expressions types are:</p>\n<ul>\n<li><code>\'ArrowFunctionExpression\'</code></li>\n<li><code>\'AssignmentExpression\'</code></li>\n<li><code>\'AwaitExpression\'</code></li>\n<li><code>\'BinaryExpression\'</code></li>\n<li><code>\'CallExpression\'</code></li>\n<li><code>\'ClassExpression\'</code></li>\n<li><code>\'ConditionalExpression\'</code></li>\n<li><code>\'FunctionExpression\'</code></li>\n<li><code>\'Identifier\'</code></li>\n<li><code>\'LogicalExpression\'</code></li>\n<li><code>\'MemberExpression\'</code></li>\n<li><code>\'NewExpression\'</code></li>\n<li><code>\'ObjectExpression\'</code></li>\n<li><code>\'SequenceExpression\'</code></li>\n<li><code>\'SpreadElement\'</code></li>\n<li><code>\'TaggedTemplateExpression\'</code></li>\n<li><code>\'TemplateLiteral\'</code></li>\n<li><code>\'ThisExpression\'</code></li>\n<li><code>\'UnaryExpression\'</code></li>\n<li><code>\'UpdateExpression\'</code></li>\n</ul>\n<h3 id="evaluateidentifier">evaluateIdentifier<a href="#evaluateidentifier" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when evaluating an identifier that is a free variable.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<h3 id="evaluatedefinedidentifier">evaluateDefinedIdentifier<a href="#evaluatedefinedidentifier" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when evaluating an identifier that is a defined variable.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<h3 id="evaluatecallexpressionmember">evaluateCallExpressionMember<a href="#evaluatecallexpressionmember" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when evaluating a call to a member function of a successfully evaluated expression.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code> <code>param</code></li>\n</ul>\n<p>This expression will trigger the hook:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> expression<span class="token punctuation">.</span><span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>MyPlugin.js</strong></p>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>evaluateCallExpressionMember<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'myFunc\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>expression<span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n  <span class="token keyword">return</span> expressionResult<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="statement">statement<a href="#statement" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>General purpose hook that is called for every parsed statement in a code fragment.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code></li>\n</ul>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>statement<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> statement <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Where the <code>statement.type</code> could be:</p>\n<ul>\n<li><code>\'BlockStatement\'</code></li>\n<li><code>\'VariableDeclaration\'</code></li>\n<li><code>\'FunctionDeclaration\'</code></li>\n<li><code>\'ReturnStatement\'</code></li>\n<li><code>\'ClassDeclaration\'</code></li>\n<li><code>\'ExpressionStatement\'</code></li>\n<li><code>\'ImportDeclaration\'</code></li>\n<li><code>\'ExportAllDeclaration\'</code></li>\n<li><code>\'ExportDefaultDeclaration\'</code></li>\n<li><code>\'ExportNamedDeclaration\'</code></li>\n<li><code>\'IfStatement\'</code></li>\n<li><code>\'SwitchStatement\'</code></li>\n<li><code>\'ForInStatement\'</code></li>\n<li><code>\'ForOfStatement\'</code></li>\n<li><code>\'ForStatement\'</code></li>\n<li><code>\'WhileStatement\'</code></li>\n<li><code>\'DoWhileStatement\'</code></li>\n<li><code>\'ThrowStatement\'</code></li>\n<li><code>\'TryStatement\'</code></li>\n<li><code>\'LabeledStatement\'</code></li>\n<li><code>\'WithStatement\'</code></li>\n</ul>\n<h3 id="statementif">statementIf<a href="#statementif" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing an if statement. Same as the <code>statement</code> hook, but triggered only when <code>statement.type == \'IfStatement\'</code>.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code></li>\n</ul>\n<h3 id="label">label<a href="#label" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing statements with a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label">label</a>. Those statements have <code>statement.type === \'LabeledStatement\'</code>.</p>\n<ul>\n<li>Hook Parameters: <code>labelName</code></li>\n<li>Callback Parameters: <code>statement</code></li>\n</ul>\n<h3 id="import">import<a href="#import" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every import statement in a code fragment. The <code>source</code> parameter contains the name of the imported file.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>source</code></li>\n</ul>\n<p>The following import statement will trigger the hook once:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">\'lodash\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>MyPlugin.js</strong></p>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token keyword">import</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>statement<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// source == \'lodash\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="importspecifier">importSpecifier<a href="#importspecifier" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every specifier of every <code>import</code> statement.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>source</code> <code>exportName</code> <code>identifierName</code></li>\n</ul>\n<p>The following import statement will trigger the hook twice:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> _<span class="token punctuation">,</span> <span class="token punctuation">{</span> has <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'lodash\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>MyPlugin.js</strong></p>\n<pre><code class="hljs language-js">parser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token keyword">import</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>statement<span class="token punctuation">,</span> source<span class="token punctuation">,</span> exportName<span class="token punctuation">,</span> identifierName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* First call\n    source == \'lodash\'\n    exportName == \'default\'\n    identifierName == \'_\'\n  */</span>\n  <span class="token comment">/* Second call\n    source == \'lodash\'\n    exportName == \'has\'\n    identifierName == \'has\'\n  */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="export">export<a href="#export" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every <code>export</code> statement in a code fragment.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code></li>\n</ul>\n<h3 id="exportimport">exportImport<a href="#exportimport" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every <code>export</code>-import statement eg: <code>export * from \'otherModule\';</code>.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>source</code></li>\n</ul>\n<h3 id="exportdeclaration">exportDeclaration<a href="#exportdeclaration" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every <code>export</code> statement exporting a declaration.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>declaration</code></li>\n</ul>\n<p>Those exports will trigger this hook:</p>\n<pre><code class="hljs language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token string">\'hello\'</span><span class="token punctuation">;</span> <span class="token comment">// also var, let</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">FunctionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></code></pre>\n<h3 id="exportexpression">exportExpression<a href="#exportexpression" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every <code>export</code> statement exporting an expression e.g.<code>export default expression;</code>.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>declaration</code></li>\n</ul>\n<h3 id="exportspecifier">exportSpecifier<a href="#exportspecifier" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every specifier of every <code>export</code> statement.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>identifierName</code> <code>exportName</code> <code>index</code></li>\n</ul>\n<h3 id="exportimportspecifier">exportImportSpecifier<a href="#exportimportspecifier" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called for every specifier of every <code>export</code>-import statement.</p>\n<ul>\n<li>Callback Parameters: <code>statement</code> <code>source</code> <code>identifierName</code> <code>exportName</code> <code>index</code></li>\n</ul>\n<h3 id="vardeclaration">varDeclaration<a href="#vardeclaration" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a variable declaration.</p>\n<ul>\n<li>Callbak Parameters: <code>declaration</code></li>\n</ul>\n<h3 id="vardeclarationlet">varDeclarationLet<a href="#vardeclarationlet" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a variable declaration defined using <code>let</code></p>\n<ul>\n<li>Callbak Parameters: <code>declaration</code></li>\n</ul>\n<h3 id="vardeclarationconst">varDeclarationConst<a href="#vardeclarationconst" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a variable declaration defined using <code>const</code></p>\n<ul>\n<li>Callbak Parameters: <code>declaration</code></li>\n</ul>\n<h3 id="vardeclarationvar">varDeclarationVar<a href="#vardeclarationvar" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a variable declaration defined using <code>var</code></p>\n<ul>\n<li>Callbak Parameters: <code>declaration</code></li>\n</ul>\n<h3 id="canrename">canRename<a href="#canrename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Triggered before renaming an identifier to determine if the renaming is allowed. This is usually used together with the <code>rename</code> hook.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>canRename<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// returning true allows renaming</span>\n  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="rename">rename<a href="#rename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Triggered when renaming to get the new identifier. This hook will be called only if <code>canRename</code> returns <code>true</code>.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>rename<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="assigned">assigned<a href="#assigned" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing an <code>AssignmentExpression</code> before parsing the assigned expression.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js">a <span class="token operator">+=</span> b<span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>assigned<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// this is called before parsing b</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="assign">assign<a href="#assign" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing an <code>AssignmentExpression</code> before parsing the assign expression.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js">a <span class="token operator">+=</span> b<span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>assigned<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// this is called before parsing a</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="typeof">typeof<a href="#typeof" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Triggered when parsing the <code>typeof</code> of an identifier</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<h3 id="call">call<a href="#call" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a function call.</p>\n<ul>\n<li>Hook Paramaeters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token function">eval</span><span class="token punctuation">(</span><span class="token comment">/* something */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>call<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'eval\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="callanymember">callAnyMember<a href="#callanymember" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Triggered when parsing a call to a member function of an object. </p>\n<ul>\n<li>Hook Parameters: <code>objectIdentifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js">myObj<span class="token punctuation">.</span><span class="token function">anyFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>callAnyMember<span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'myObj\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="new">new<a href="#new" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Invoked when parsing a <code>new</code> expression. </p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'MyClass\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="expression">expression<a href="#expression" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing an expression.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'this\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="expressionanymember">expressionAnyMember<a href="#expressionanymember" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Executed when parsing a <code>MemberExpression</code>.</p>\n<ul>\n<li>Hook Parameters: <code>identifier</code></li>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">;</span>\n\nparser<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">.</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token string">\'process\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> expression <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="expressionconditionaloperator">expressionConditionalOperator<a href="#expressionconditionaloperator" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called when parsing a <code>ConditionalExpression</code> e.g. <code>condition ? a : b</code></p>\n<ul>\n<li>Callback Parameters: <code>expression</code></li>\n</ul>\n<h3 id="program">program<a href="#program" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Get access to the abstract syntax tree (AST) of a code fragment</p>\n<p>Parameters: <code>ast</code> <code>comments</code></p>\n'}}]);