import React from 'react';
import { StyleSheet } from 'react-native';
import { alignStyle, textStyle, bgStyle, margin, padding, size } from './main'


var {alignCenter, alignVer, alignHor} = alignStyle
var {s_18, w_medium, w_regular, c_white, s_16} = textStyle
var {bgColorSearch, bgColorPlaceholder, bgColorDiv} = bgStyle

const style_header = {
    searchContainer: [
        padding(12, 10), 
        bgColorDiv,

        {
            flexDirection: 'row', 
        }
    ],
        profileAvatar: [
            size(30, 30), 
            margin(0, 20, 0, 10), 
            bgColorPlaceholder,
            
            {
                borderRadius: 5,
                alignSelf: "center"
            }
        ],

        searchInput: [
            c_white, 
            bgColorSearch, 
            padding(null, 30, null, 13), 
            
            {
                flex: 1, 
                alignSelf: 'stretch', 
                height: 40, 
                borderRadius: 5,
            }
        ],

    sectionContainer:[
        alignHor, 
        bgColorDiv, 
        {
            flexDirection: 'row', 
            alignItems: 'flex-end', 
            height: 60
        }
    ],
        sectionTitle: (state) => [
            c_white, 
            s_16, 
            w_medium, 
            padding(14, 26), 
            {
                borderBottomWidth: 4, 
                borderBottomColor: state !== 'inactive'? '#0079d3' : 'transparent'
            }
        ] 
};

export {style_header}