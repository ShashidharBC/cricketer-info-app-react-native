/*
 *   Copyright (c) 2021 vlinder
 *   All rights reserved.
 *   This software is proprietary of vlinder and can not be distributed / used for any purpose outside of vlinder without explicit written consent from the copyright owner.
 */
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

export interface Style {
  containerStyle: ViewStyle;
  soldOrUnsoldBtnContainerStyle: ViewStyle;
  allPlayersBtnContainerStyle: ViewStyle;
  btnsTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  containerStyle: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  soldOrUnsoldBtnContainerStyle: {
    height: 50,
    width: 150,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  allPlayersBtnContainerStyle: {
    height: 50,
    width: 320,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  btnsTextStyle: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});
