import React from 'react';
import { Text, View, Image, Button, TextInput, FlatList } from 'react-native';

//Styles
import { style_header } from '../styles/Header'
import { textStyle, alignStyle, bgStyle, padding } from '../styles/main'

var {c_white, s_16, w_medium} = textStyle
var {alignHor} = alignStyle
var {bgColorSearch} = bgStyle

export default class Header extends React.Component {
	render() {
		return(
			<View style={{flexDirection: 'column'}}>
				<View style={style_header.searchContainer}>
					<View style={style_header.profileAvatar}></View>
					<TextInput style={style_header.searchInput} placeholder="Search" placeholderTextColor="#818384"></TextInput>
				</View>

				<View style={style_header.sectionContainer}>
                    <View><Text style={style_header.sectionTitle()}>Home</Text></View>
                    <View><Text style={style_header.sectionTitle('inactive')}>Popular</Text></View>
				</View>
			</View>
		);
	}
}