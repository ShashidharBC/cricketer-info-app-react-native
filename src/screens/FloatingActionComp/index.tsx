import React from 'react';
import {View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

export interface FloatingActionCompProps {
  actions?: any;
  onPressItem?: (name: any) => void;
}

export const FloatingActionComp = ({
  actions,
  onPressItem,
}: FloatingActionCompProps) => {
  return (
    <View>
      <FloatingAction
        actions={actions}
        color={'#14226b'}
        buttonSize={65}
        onPressItem={name => {
          onPressItem && onPressItem(name);
        }}
      />
    </View>
  );
};

FloatingActionComp.defaultProps = {};
