import React from "react";
import { Route } from "react-router-dom";

export function generateCrumbsForRoute({ routes, route }) {
  // Get all routes that contain the current one.
  // const getMatchingRoutes = ({ path }) => route.path.includes(path);

  const routeHasParams = Object.keys(route.params).length;

  const replaceParams = (path, param) =>
    path.replace(`:${param}`, route.params[param]);

  const createCrumbEntry = ({ path, ...rest }) => ({
    path: routeHasParams
      ? Object.keys(route.params).reduce(replaceParams, path)
      : path,
    active: route.pathname === path,
    href: path,
    ...rest,
  });

  // Swap out any dynamic routes with their param values so "/app/:appId" becomes "/app/1"
  return routes.map(createCrumbEntry);
}

function renderRoute(props, routes, Component) {
  const { match, location } = props;

  const { pathname } = location;

  const crumbs = generateCrumbsForRoute({
    routes,
    route: { pathname, ...match },
  });

  return <Component {...props} crumbs={crumbs} />;
}

function RenderRoutes({ routes }) {
  return (
    <>
      {routes.map(({ path, exact, component }, key) => (
        <Route
          exact={exact === undefined ? true : exact}
          path={path}
          key={key}
          render={(props) => renderRoute(props, routes, component)}
        />
      ))}
    </>
  );
}

export default RenderRoutes;
