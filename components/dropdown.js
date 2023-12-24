// MyDropDownPicker.js
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const MyDropDownPicker = ({ items, isOpen, setIsOpen, currentValue, setCurrentValue,dropDownDirection,placeholder }) => {
  return (
    <DropDownPicker
      items={items}
      open={isOpen}
      setOpen={() => setIsOpen(!isOpen)}
      value={currentValue}
      setValue={val => setCurrentValue(val)}
      maxHeight={120}
      placeholder={placeholder}
      placeholderStyle={{ color: '#A2CD5A', fontWeight: 'bold', fontSize: 16 }}
      showTickIcon={true}
      showArrowIcon={true}
      disableBorderRadius={true}
      theme="LIGHT"
      dropDownDirection={dropDownDirection}
      listMode="SCROLLVIEW"
    />
  );
};

export default MyDropDownPicker;
