/*
 *   Copyright (c) 2021 vlinder
 *   All rights reserved.
 *   This software is proprietary of vlinder and can not be distributed / used for any purpose outside of vlinder without explicit written consent from the copyright owner.
 */
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

export interface Style {
  containerStyle: ViewStyle;
  imageStyle: ImageStyle;
  textContainerStyle: ViewStyle;
  pl_img_containerStyle: ViewStyle;
  textStyle: TextStyle;
  plInfoTextStyle: TextStyle;
  soldAndUnsoldBtnStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  containerStyle: {
    marginHorizontal: 25,
    flexDirection: 'column',
  },
  pl_img_containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  textContainerStyle: {
    height: 40,
    width: 160,
    backgroundColor: '#14226b',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  plInfoTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14226b',
    margin: 6,
  },
  soldAndUnsoldBtnStyle: {
    height: 40,
    width: 150,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14226b',
  },
});
