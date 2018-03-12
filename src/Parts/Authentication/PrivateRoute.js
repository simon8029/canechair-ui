// import * as React from 'react';
// import { Redirect, Route } from 'react-router-dom';

// type PrivateRouteProps = {
//   Component: React.ComponentClass;
//   IsAuthenticated: boolean;
//   Path: string;
// };

// export const PrivateRoute = (privateRouteProps: PrivateRouteProps) => {
//   return <Route
//     path={privateRouteProps.Path}
//     render={
//       props => privateRouteProps.IsAuthenticated
//         ? <privateRouteProps.Component {...props} />
//         : <Redirect to={{ pathname: '/SignIn', state: { from: props.location } }} />}
//   />;
// };

// export default PrivateRoute;

// import * as React from "react"
// import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom"

// type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

// const AUTHENTICATED = false // TODO: implement authentication logic

// export const PrivateRoute: React.StatelessComponent<RouteProps> = ({ component, ...rest }) => {
//   const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
//     if (!Component) {
//       return null
//     }

//     if (AUTHENTICATED) {
//       return <Component {...props} />
//     }

//     const redirectProps = {
//       to: {
//         pathname: "/auth/sign-in",
//         state: { from: props.location },
//       },
//     }

//     return <Redirect {...redirectProps} />
//   }

//   return <Route {...rest} render={renderFn(component)} />

export const RestrictedRoute = ({ component: Component, ...rest, authUser }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />}
  />;