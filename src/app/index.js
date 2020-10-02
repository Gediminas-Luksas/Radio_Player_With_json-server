import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Header, StationsList, Footer, PageNotFound } from './components';
import stations from '../stations';
import './app.css';

class App extends Component {
	componentDidMount(){
		const { getStations } = this.props
		getStations();
	}
	render(){
		const { loading, error } = this.props;
		return (
			<div className="card">
				<Router>
					<Header />
					<div className="fix">
					<Switch>
						{error && <span style={{
							color: "#a2abbd",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "36px",
							lineHeight: "58px",
							fontWeight: 700,
							textAlign: "center",
						}}>{error}</span>}
						{loading && <div>Loading...</div>}
							<Route path="/stations" exact component={StationsList} />
							<Route exact path="/404" component={PageNotFound} />
							<Redirect exact from="/" to="/stations" />
							<Redirect to="/404" />
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		);
	}
};

const endhance = connect(
	state => ({
	  error: stations.selectors.getError(state),
	  loading: stations.selectors.isLoading(state),
	}),
	dispatch => ({
		getStations: bindActionCreators(stations.actions.getStations, dispatch),
	})
  );
  
  export default endhance(App);
