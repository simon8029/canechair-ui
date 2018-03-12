const ProtectedRoute = ({ component: Component, isAuthenticated, path }) => {
  return <Route       path={ path } render = {
    props => isAuthenticated
      ? <Component { ...props } />
            : <Redirect to={ { pathname: '/login', state: { from: props.location } } } />}
    />
}; 