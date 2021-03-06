import { Text } from '@rneui/themed';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { theme } from 'src/styles';

type Props = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

export const SexItem = ({ title, isSelected, onPress }: Props) => {
  return (
    <Pressable
      style={isSelected ? styles.selectedItem : styles.notSelectedItem}
      onPress={onPress}
    >
      <Text style={isSelected ? styles.selectedTitle : styles.notSelectedTitle}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    width: '100%',
    height: 52,
    backgroundColor: 'rgba(144, 137, 250, 0.25)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTitle: {
    fontWeight: 'bold',
    color: theme.primary,
    fontSize: 18,
  },
  notSelectedItem: {
    width: '100%',
    height: 52,
    borderColor: theme.boarderGray,
    borderWidth: 0.5,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notSelectedTitle: {
    fontWeight: 'bold',
    color: '#b3b3b3',
    fontSize: 18,
  },
});
