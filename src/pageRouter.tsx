import { PageRouter , Page } from 'thorium-framework';

/* The comment is providing an explanation of the code that follows it. It states that the code is
creating a page router using the `PageRouter` function from the `thorium-framework` library. The
`PageRouter` function takes an object as an argument with a `pages` property, which is an array of
page objects. Each page object has a `name` property, which will be the first part of the hash. When
the hash changes, the corresponding page will be loaded. */
<PageRouter>
  <Page name = '' childrens={[<h1>home</h1>]} />
  <Page name = 'users' childrens={[<h1>users</h1>]} />
  <Page name = 'dashboard' childrens={[<h1>dashboard</h1>]} />
</PageRouter>