import React from 'react';
import {View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

export interface FloatingActionCompProps {
  actions?: any;
}

export const FloatingActionComp = ({actions}: FloatingActionCompProps) => {
  return (
    <View>
      <FloatingAction
        actions={actions}
        color={'#14226b'}
        buttonSize={65}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
};

FloatingActionComp.defaultProps = {};
