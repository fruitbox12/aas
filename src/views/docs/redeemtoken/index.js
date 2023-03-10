import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

function IntroductionView() {
  return (
    <Page title="Introduction to Zap">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default IntroductionView;
