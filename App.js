import React from 'react';
import { Text, View, Image, Button, TextInput, FlatList } from 'react-native';

//Components
import Header from './src/components/Header'
import Feed from './src/components/Feed'

//Styles
import { style_feed } from './src/styles/Feed'
import { style_general } from './src/styles/General'
import { bgStyle } from './src/styles/main'

export default class App extends React.Component {
	render() {
		if(this.state.isLoading){
			return(
				<View style={style_general.viewContainer}>
					<Image source={require('./src/assets/reddit.png')} style={style_general.redditLogo}></Image>
				</View>
			)
		}

		return(
			<View style={[bgStyle.bgColorMain, {flex:1}]}>
				<Header/>
				<Feed posts={this.state.items}/>
			</View>
		);
	}

	state = {
		items: [],
		isLoading: true,
		subName: ''
	}

	componentDidMount = () => this.fetchData()

	fetchData = () => {
		this.setState({...this.setState({...this.state, isLoading: true})})
		fetch(`http://www.reddit.com/r/${this.state.subName || 'overwatch'}.json?raw_json=1&limit=35`).then(res => res.json()).then(res => this.setState({isLoading: false, items: res.data.children, subName: ''}))
	}
}