import React from 'react';
import { StyleSheet } from 'react-native';
import { alignStyle, textStyle, bgStyle, margin, padding, size } from './main'


var {alignCenter, alignVer, alignHor} = alignStyle
var {s_18, w_medium, w_regular, c_white} = textStyle
var {bgColorMain, bgColorDiv, bgColorSearch, bgColorPlaceholder} = bgStyle

const style_feed = {
    sortContainer: [
        {
            flexDirection: 'row', 
            justifyContent: 'space-between',
            height: 30
        }
    ],
        sortSelect: [
            {
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        ],

    mainContainer: [
    ],
        postContainer: [
            bgColorDiv,
            padding(0, 15),
            {
                marginBottom: 10
            }
        ],
            postTitle: [
                s_18, 
                w_regular, 
                c_white,
                
                {
                    marginBottom: 4
                }, 
            ],
            postImage: [
                {
                    alignSelf: 'stretch',
                    marginTop: 10,
                }
            ]
};

export {style_feed}