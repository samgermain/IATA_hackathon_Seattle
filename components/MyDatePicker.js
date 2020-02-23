import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    setDate(selectedDate || date);
    setShow(true);
  };
  const showMode = currentMode => {
    setShow(true);
  };
  const showDatepicker = () => {
    setShow(true);
  };
  const doneWithPicking = () => {
    setShow(false);
  };
  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Select departure date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View>
        {show && <Button onPress={doneWithPicking} title="done" />}
      </View>
      <Text> Selected date: {date.toString()}</Text>
      
    </View>
  );
};
export default MyDatePicker;