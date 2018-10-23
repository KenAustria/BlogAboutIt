import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PostsIndex from './containers/PostsIndex';
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<PostsIndex />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;