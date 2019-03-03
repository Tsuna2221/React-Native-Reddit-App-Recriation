import React from 'react';
import { Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//Styles
import { textStyle, alignStyle, margin, padding, size, bgStyle } from '../styles/main'
import { style_header } from '../styles/Header'
import { style_feed } from '../styles/Feed'

var { c_white, c_lightGray, s_10, s_12, s_14, s_16, s_18, s_20, s_22, s_24, w_medium, w_regular } = textStyle
var { alignVer, dirRow, dirCol } = alignStyle
var {bgColorAvatarPlaceholder} = bgStyle

export default class Feed extends React.Component {
	render() {
		return(
			<View>
				{this.drawFeed()}
			</View>
		);
	}

	state = {
		isLoading: true,
		subName: ''
	}
	
	drawFeed = () => <ScrollView style={style_feed.mainContainer}>
						<View style={[style_feed.sortContainer, alignVer, padding(25, 0)]}>
							<View style={[style_feed.sortSelect, alignVer, margin(0, 15), {alignSelf: 'stretch'}]}>
								<Icon name="decagram" style={[c_lightGray, s_20, {marginRight: 6}]}></Icon>
								<Text style={[c_lightGray, s_12]}>NEW POSTS</Text>
							</View>

							<Icon name="view-agenda" style={[c_lightGray, s_24, {marginRight: 10}]}></Icon>
						</View>

						<FlatList data={this.props.posts} renderItem={({item}) => {
							var {title, url, preview, author, subreddit, created_utc, num_comments, score, link_flair_text, link_flair_background_color, domain, selftext, is_reddit_media_domain} = item.data
							
							if(is_reddit_media_domain){
								if(domain === 'i.redd.it'){
									return(
										<View key={item.data.name} style={style_feed.postContainer}>
											<View style={[margin(8, 0), {flexDirection: "row", alignItems: 'center'}]}>
												<View style={[style_feed.subIcon, size(36, 36), bgColorAvatarPlaceholder, {borderRadius: 100, marginRight: 8}]}></View>
												<View>
													<Text style={[c_white]}>{'r/' + subreddit}</Text>
													<Text style={[c_lightGray, s_12]}>{'Posted by u/' + author} &bull; {'3h'} &bull; {domain}</Text>
												</View>
											</View>
											<Text style={style_feed.postTitle}>{title}</Text>
											{this.drawFlair(link_flair_text, link_flair_background_color)}
											<Image source={{uri: preview.images[0].source.url}} width={Dimensions.get('window').width} style={style_feed.postImage}></Image>
											<View style={[dirRow]}>
												<View style={[dirRow, alignVer, padding(12, 0),{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
													<Icon name="arrow-up-bold" style={[c_lightGray, s_22]}></Icon>
													<Text style={[s_14, c_lightGray, margin(0, 6)]}>{this.drawUPs(score)}</Text>
													<Icon name="arrow-down-bold" style={[c_lightGray, s_22]}></Icon>
												</View>
												<View style={[dirRow, alignVer, {flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
													<Icon name="comment" style={[c_lightGray, s_18]}></Icon>
													<Text style={[s_12, c_lightGray, margin(0, 6)]}>{num_comments}</Text>
												</View>
												<View style={[dirRow, alignVer, {flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
													<Icon name="share" style={[c_lightGray, s_22]}></Icon>
													<Text style={[s_12, c_lightGray, margin(0, 6)]}>Share</Text>
												</View>
											</View>
										</View>
									)	
								}
							}

							if(selftext){
								return(
									<View key={item.data.name} style={style_feed.postContainer}>
										<View style={[margin(8, 0), {flexDirection: "row", alignItems: 'center'}]}>
											<View style={[style_feed.subIcon, size(36, 36), bgColorAvatarPlaceholder, {borderRadius: 100, marginRight: 8}]}></View>
											<View>
											<Text style={[c_white]}>{'r/' + subreddit}</Text>
												<Text style={[c_lightGray, s_12]}>{'Posted by u/' + author} &bull; {'3h'} &bull; {domain}</Text>
											</View>
										</View>
										<Text style={style_feed.postTitle}>{title}</Text>
										{this.drawFlair(link_flair_text, link_flair_background_color)}
										<Text numberOfLines={3} style={[s_12, c_lightGray, {marginTop: 7}]}>{selftext.replace(/\n\n/g, ' ').replace(/\([\s\S]*?\)/g, "")}}</Text>
										<View style={[dirRow]}>
											<View style={[dirRow, alignVer, padding(12, 0),{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
												<Icon name="arrow-up-bold" style={[c_lightGray, s_22]}></Icon>
												<Text style={[s_14, c_lightGray, margin(0, 6)]}>{this.drawUPs(score)}</Text>
												<Icon name="arrow-down-bold" style={[c_lightGray, s_22]}></Icon>
											</View>
											<View style={[dirRow, alignVer, {flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
												<Icon name="comment" style={[c_lightGray, s_18]}></Icon>
												<Text style={[s_12, c_lightGray, margin(0, 6)]}>{num_comments}</Text>
											</View>
											<View style={[dirRow, alignVer, {flex: 1, alignSelf: 'stretch', justifyContent: 'center'}]}>
												<Icon name="share" style={[c_lightGray, s_22]}></Icon>
												<Text style={[s_12, c_lightGray, margin(0, 6)]}>Share</Text>
											</View>
										</View>
									</View>
								)	
							}
						}}/>
					</ScrollView> 

	drawFlair = (text, color) => text !== null ? <Text style={[c_white, s_12, padding(2, 4),{backgroundColor: color, alignSelf: 'flex-start', borderRadius: 3}]}>{text}</Text> : null
	
	drawUPs = (ups) => {
		switch(ups.toString().length){
			case 4:
			var value = ups.toString().slice(0, 1) + ',' + ups.toString().slice(1, 2) + 'k'
				break;

			case 5:
			var value = ups.toString().slice(0, 2) + ',' + ups.toString().slice(2, 3) + 'k'
				break;
			
			case 6:
			var value = ups.toString().slice(0, 3) + 'k'
				break;

			default: 
			var value = ups
				break;
		}
		return value
	} 
}