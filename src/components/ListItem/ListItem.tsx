import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box';
import { Book, Character, House } from "../../models"

type ListItemProps = {
  item: Character | House | Book;
  disabled: boolean;
  onClick: (checked: boolean) => void;
}
const ListItem = ({ item, disabled, onClick }: ListItemProps) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = useCallback(()=>{
    setChecked(!isChecked);
    onClick(!isChecked);
  }, [isChecked, onClick]);

  return (
    <TouchableOpacity
      style={{
        height: 40,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
      }}
      disabled={disabled && !isChecked}
      onPress={handleClick}
    >
      <CheckBox
        style={{ paddingLeft: 10 }}
        onClick={handleClick}
        isChecked={isChecked}
        disabled={disabled && !isChecked}
      >

      </CheckBox>
      <Text
        style={{
          paddingLeft: 10,
          color: disabled && !isChecked ? '#999': '#000',
        }}
      >{item.name}</Text>
    </TouchableOpacity>
  )
};

export default ListItem;