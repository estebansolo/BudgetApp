import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	const drawComponent = props => {
		if (isAuthenticated) {
			return <Redirect to="/dashboard" />;
		}

		return <Component {...props} />;
	};

	return <Route {...rest} component={drawComponent} />;
};

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
