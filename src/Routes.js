/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment, useEffect } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import DocsLayout from "src/layouts/DocsLayout";
import MainLayout from "src/layouts/MainLayout";
import HomeView from "src/views/pages/HomeView";
import LoadingScreen from "src/components/LoadingScreen";
import AuthGuard from "src/components/AuthGuard";
import GuestGuard from "src/components/GuestGuard";

const routesConfig = [
   {
      exact: true,
      path: "/",
      component: () => <Redirect to="/home" />,
   },
   {
      exact: true,
      path: "/404",
      component: lazy(() => import("src/views/pages/Error404View")),
   },
   {
      exact: true,
      guard: GuestGuard,
      path: "/login",
      component: lazy(() => import("src/views/auth/LoginView")),
   },
   {
      exact: true,
      path: "/login-unprotected",
      component: lazy(() => import("src/views/auth/LoginView")),
   },
   {
      exact: true,
      guard: GuestGuard,
      path: "/register",
      component: lazy(() => import("src/views/auth/RegisterView")),
   },
   {
      exact: true,
      path: "/register-unprotected",
      component: lazy(() => import("src/views/auth/RegisterView")),
   },
   {
      path: "/app",
      guard: AuthGuard,
      layout: DashboardLayout,
      routes: [
         {
            exact: true,
            path: "/app",
            component: () => <Redirect to="/app/tokenmarket" />,
         },
         {
            exact: true,
            path: "/app/account",
            component: lazy(() => import("src/views/pages/AccountView")),
         },
         {
            exact: true,
            path: "/app/reports/dashboard",
            component: lazy(() => import("src/views/reports/DashboardView")),
         },
         {
            exact: true,
            path: "/app/reports/dashboard-alternative",
            component: lazy(() =>
               import("src/views/reports/DashboardAlternativeView")
            ),
         },
         {
            exact: true,
            path: "/app/reports",
            component: () => <Redirect to="/app/reports/dashboard" />,
         },
         {
            exact: true,
            path: "/app/management/customers",
            component: lazy(() =>
               import("src/views/management/CustomerListView")
            ),
         },
         {
            exact: true,
            path: "/app/management/customers/:customerId",
            component: lazy(() =>
               import("src/views/management/CustomerDetailsView")
            ),
         },
         {
            exact: true,
            path: "/app/management/customers/:customerId/edit",
            component: lazy(() =>
               import("src/views/management/CustomerEditView")
            ),
         },
         {
            exact: true,
            path: "/app/management/products",
            component: lazy(() =>
               import("src/views/management/ProductListView")
            ),
         },
         {
            exact: true,
            path: "/app/management/products/create",
            component: lazy(() =>
               import("src/views/management/ProductCreateView")
            ),
         },
         {
            exact: true,
            path: "/app/management/orders",
            component: lazy(() => import("src/views/management/OrderListView")),
         },
         {
            exact: true,
            path: "/app/management/orders/:orderId",
            component: lazy(() =>
               import("src/views/management/OrderDetailsView")
            ),
         },
         {
            exact: true,
            path: "/app/management/invoices",
            component: lazy(() =>
               import("src/views/management/InvoiceListView")
            ),
         },
         {
            exact: true,
            path: "/app/management/invoices/:invoiceId",
            component: lazy(() =>
               import("src/views/management/InvoiceDetailsView")
            ),
         },
         // {
         //    exact: true,
         //    path: "/app/explorer",
         //    component: lazy(() => import("src/components/blockexplorer")),
         // },
         {
            exact: true,
            path: "/app/management",
            component: () => <Redirect to="/app/management/customers" />,
         },
         {
            exact: true,
            path: "/app/calendar",
            component: lazy(() => import("src/views/calendar/CalendarView")),
         },
         {
            exact: true,
            path: "/app/tokenwizard",
            component: lazy(() => import("src/views/tokenwizard/index.js")),
         },
         // {
         //    exact: true,
         //    path: "/app/newendpt",
         //    component: lazy(() => import("src/views/endpointwizard/index.js")),
         // },
         // {
         //    exact: true,
         //    path: "/app/oraclemarket",
         //    component: lazy(() =>
         //       import("src/views/expandedoraclemarket/index.js")
         //    ),
         // },
         {
            exact: true,
            path: "/app/tokenmarket",
            component: lazy(() => import("src/views/tokenmarket/index.js")),
         },
         {
            exact: true,
            path: "/app/provider/:address",
            component: lazy(() => import("src/views/providerprofile/index.js")),
         },
         {
            exact: true,
            path: "/app/bondwizard/:endpt",
            component: lazy(() => import("src/views/bondwizard/index.js")),
         },
         {
            exact: true,
            path: "/app/kanban",
            component: lazy(() => import("src/views/kanban/KanbanView")),
         },
         {
            exact: true,
            path: ["/app/chat/new", "/app/chat/:threadKey"],
            component: lazy(() => import("src/views/chat/ChatView")),
         },
         {
            exact: true,
            path: "/app/chat",
            component: () => <Redirect to="/app/chat/new" />,
         },
         {
            exact: true,
            path: [
               "/app/mail/label/:customLabel/:mailId?",
               "/app/mail/:systemLabel/:mailId?",
            ],
            component: lazy(() => import("src/views/mail/MailView")),
         },
         {
            exact: true,
            path: "/app/mail",
            component: () => <Redirect to="/app/mail/all" />,
         },
         {
            exact: true,
            path: "/app/projects/overview",
            component: lazy(() => import("src/views/projects/OverviewView")),
         },
         {
            exact: true,
            path: "/app/projects/browse",
            component: lazy(() =>
               import("src/views/projects/ProjectBrowseView")
            ),
         },
         {
            exact: true,
            path: "/app/projects/create",
            component: lazy(() =>
               import("src/views/projects/ProjectCreateView")
            ),
         },
         {
            exact: true,
            path: "/app/projects/:id",
            component: lazy(() =>
               import("src/views/projects/ProjectDetailsView")
            ),
         },
         {
            exact: true,
            path: "/app/projects",
            component: () => <Redirect to="/app/projects/browse" />,
         },
         {
            exact: true,
            path: "/app/social/feed",
            component: lazy(() => import("src/views/social/FeedView")),
         },
         {
            exact: true,
            path: "/app/social/profile",
            component: lazy(() => import("src/views/social/ProfileView")),
         },
         {
            exact: true,
            path: "/app/social",
            component: () => <Redirect to="/app/social/profile" />,
         },
         {
            exact: true,
            path: "/app/extra/charts/apex",
            component: lazy(() =>
               import("src/views/extra/charts/ApexChartsView")
            ),
         },
         {
            exact: true,
            path: "/app/extra/forms/formik",
            component: lazy(() => import("src/views/extra/forms/FormikView")),
         },
         {
            exact: true,
            path: "/app/extra/forms/redux",
            component: lazy(() =>
               import("src/views/extra/forms/ReduxFormView")
            ),
         },
         {
            exact: true,
            path: "/app/extra/editors/draft-js",
            component: lazy(() =>
               import("src/views/extra/editors/DraftEditorView")
            ),
         },
         {
            exact: true,
            path: "/app/extra/editors/quill",
            component: lazy(() =>
               import("src/views/extra/editors/QuillEditorView")
            ),
         },
         {
            component: () => <Redirect to="/404" />,
         },
      ],
   },
   {
      path: "/docs",
      layout: DocsLayout,
      routes: [
         {
            exact: true,
            path: "/docs",
            component: () => <Redirect to="/docs/welcome" />,
         },
         {
            exact: true,
            path: "/docs/welcome",
            component: lazy(() => import("src/views/docs/WelcomeView")),
         },
         {
            exact: true,
            path: "/docs/intro",
            component: lazy(() => import("src/views/docs/intro")),
         },
         {
            exact: true,
            path: "/docs/userguide",
            component: lazy(() => import("src/views/docs/userguide")),
         },
         {
            exact: true,
            path: "/docs/technical",
            component: lazy(() => import("src/views/docs/technical")),
         },
         {
            exact: true,
            path: "/docs/tools",
            component: lazy(() => import("src/views/docs/tools")),
         },
         {
            exact: true,
            path: "/docs/tokenize",
            component: lazy(() => import("src/views/docs/tokenize")),
         },
         {
            exact: true,
            path: "/docs/bonding",
            component: lazy(() => import("src/views/docs/bonding")),
         },
         {
            exact: true,
            path: "/docs/unbonding",
            component: lazy(() => import("src/views/docs/unbonding")),
         },
         {
            exact: true,
            path: "/docs/approving",
            component: lazy(() => import("src/views/docs/approving")),
         },
         {
            exact: true,
            path: "/docs/listtoken",
            component: lazy(() => import("src/views/docs/listtoken")),
         },
         {
            exact: true,
            path: "/docs/createoracle",
            component: lazy(() => import("src/views/docs/createoracle")),
         },
         {
            exact: true,
            path: "/docs/redeemtoken",
            component: lazy(() => import("src/views/docs/redeemtoken")),
         },
         {
            exact: true,
            path: "/docs/trackactivity",
            component: lazy(() => import("src/views/docs/trackactivity")),
         },
         {
            exact: true,
            path: "/docs/social",
            component: lazy(() => import("src/views/docs/social")),
         },
         // {
         //    exact: true,
         //    path: "/docs/zaptemplates",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/subscriptionoracletemplate",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/onchainoracletemplate",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/bondingcurve",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/curveencoding",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/tokenproviders",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/tokendotproviders",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/examplecontest",
         //    component: lazy(() => import("src/views/docs/WelcomeView")),
         // },
         // {
         //    exact: true,
         //    path: "/docs/faq",
         //    component: lazy(() => import("src/views/docs/faq")),
         // },
         {
            exact: true,
            path: "/docs/whitepaper",
            component: lazy(() => import("src/views/docs/whitepaper")),
         },
         {
            component: () => <Redirect to="/404" />,
         },
      ],
   },
   {
      path: "*",
      layout: MainLayout,
      routes: [
         {
            exact: true,
            path: "/home",
            component: HomeView,
         },
         {
            exact: true,
            path: "/pricing",
            component: lazy(() => import("src/views/pages/PricingView")),
         },
         {
            component: () => <Redirect to="/404" />,
         },
      ],
   },
];

const renderRoutes = (routes) =>
   routes ? (
      <Suspense fallback={<LoadingScreen />}>
         <Switch>
            {routes.map((route, i) => {
               const Guard = route.guard || Fragment;
               const Layout = route.layout || Fragment;
               const Component = route.component;

               return (
                  <Route
                     key={i}
                     path={route.path}
                     exact={route.exact}
                     render={(props) => (
                        <Guard>
                           <Layout>
                              {route.routes ? (
                                 renderRoutes(route.routes)
                              ) : (
                                 <Component {...props} />
                              )}
                           </Layout>
                        </Guard>
                     )}
                  />
               );
            })}
         </Switch>
      </Suspense>
   ) : null;

function Routes() {
   return renderRoutes(routesConfig);
}

export default Routes;
