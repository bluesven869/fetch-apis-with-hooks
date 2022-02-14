import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { ListItemSeparator } from '../../components/ListItemSeparator';
import { useGetHouses } from '../../entities/houses';

const Houses = () => {
  const { data, isFetching } = useGetHouses();
  const maxCheckedCount = 10;
  const [selectedCount, setSelectedCount] = useState(0);
  return (
    <View>
      <Text style={{ padding: 10 }}>Selected {selectedCount} items </Text>
      {isFetching && <ActivityIndicator />}
      <FlatList data={data}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onClick={(checked) => setSelectedCount(checked ? selectedCount + 1 : selectedCount - 1)}
            disabled={selectedCount === maxCheckedCount}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </View>
  )
}

export default Houses;