import React from 'react';
import { Text, View, Image, Button, TextInput, FlatList, TouchableHighlight } from 'react-native';

//Styles
import { style_header } from '../styles/Header'

export default class Header extends React.Component {
	render() {
		return(
			<View style={{flexDirection: 'column'}}>
				<View style={style_header.searchContainer}>
					<TouchableHighlight onPress={() => this.props.fetchData(this.state.text)}><View style={style_header.profileAvatar}></View></TouchableHighlight>
					<TextInput onChangeText={(text) => this.setState({text})} style={style_header.searchInput} placeholder="Search" placeholderTextColor="#818384"></TextInput>
				</View>

				<View style={style_header.sectionContainer}>
                    <View><Text style={style_header.sectionTitle()}>Home</Text></View>
                    <View><Text style={style_header.sectionTitle('inactive')}>Popular</Text></View>
				</View>
			</View>
		);
	}

	state = {

	}
}