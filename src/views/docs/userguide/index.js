import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

function Welcome2View() {
  return (
    <Page title="Zap Protocol User Guide">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default Welcome2View;
