import React from 'react';
import { StyleSheet } from 'react-native';
import { alignStyle, textStyle, bgStyle, margin, padding, size } from './main'


var {alignCenter, alignVer, alignHor} = alignStyle
var {s_18, w_medium, w_regular, c_white} = textStyle
var {bgColorMain, bgColorDiv, bgColorSearch, bgColorPlaceholder} = bgStyle

const style_general = {
    viewContainer: [{flex: 1}, alignCenter],
    redditLogo: [size(75, 75)]
};

export {style_general}