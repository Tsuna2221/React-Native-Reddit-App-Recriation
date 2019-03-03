import { StyleSheet } from 'react-native';

const alignStyle = StyleSheet.create({
  //Alignment
  alignCenter:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignHor:{
    justifyContent: 'center',
  },
  alignVer:{
    alignItems: 'center',
	},
	dirRow:{flexDirection: 'row'},
	dirCol:{flexDirection: "column"}
});

const textStyle = StyleSheet.create({
    //Color
    c_blue:{color: '#206ff0'},
    c_red:{color: '#f00'},
    c_purple:{color: '#5400ab'},
    c_orange:{color: '#ff8900'},
		c_white:{color: '#fff'},	
		c_lightGray: {color: '#565758'},

    //Weight
    w_light:{fontWeight: '300'},
    w_regular:{fontWeight: '400'},
    w_medium:{fontWeight: '500'},
    w_bold:{fontWeight: 'bold'},

    //Size
    s_10:{fontSize: 10},
    s_12:{fontSize: 12},
    s_14:{fontSize: 14},
    s_16:{fontSize: 16},
    s_18:{fontSize: 18},
		s_20:{fontSize: 20},
		s_22:{fontSize: 22},
		s_24:{fontSize: 24},
});

const bgStyle = StyleSheet.create({
  //Background Color
  bgColorMain:{backgroundColor: '#050505'},
  bgColorDiv:{backgroundColor: '#121213'},
  bgColorSearch:{backgroundColor: '#1A1A1B'},
  bgColorAvatarPlaceholder: {backgroundColor: '#05a5d1'}
});

const padding = (t, r, b, l) => {
	if(r === undefined){
		return({
			paddingTop: t,
			paddingRight: t,
			paddingBottom: t,
			paddingLeft: t
		})
	}else if(b === undefined){
		return({
			paddingTop: t,
			paddingRight: r,
			paddingBottom: t,
			paddingLeft: r
		})
	}else if(l === undefined){
		return({
			paddingTop: t,
			paddingRight: r,
			paddingBottom: b,
			paddingLeft: r
		})
	}else{
		return({
			paddingTop: t,
			paddingRight: r,
			paddingBottom: b,
			paddingLeft: l
		})
	}
}

const margin = (t, r, b, l) => {
	if(r === undefined){
		return({
			marginTop: t,
			marginRight: t,
			marginBottom: t,
			marginLeft: t
		})
	}else if(b === undefined){
		return({
			marginTop: t,
			marginRight: r,
			marginBottom: t,
			marginLeft: r
		})
	}else if(l === undefined){
		return({
			marginTop: t,
			marginRight: r,
			marginBottom: b,
			marginLeft: r
		})
	}else{
		return({
			marginTop: t,
			marginRight: r,
			marginBottom: b,
			marginLeft: l
		})
	}
}

const size = (w, h) => {
  return {
    width: w, 
    height: h
  }
}

export { alignStyle, textStyle, bgStyle, padding, size, margin }

