import React from 'react';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider({ max, step, unit, value, onChange }) {
  return (
    <View>
      <Slider
        value={value}
        step={step}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
