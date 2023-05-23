import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { OrderItem } from "../../components";
import { ORDERS } from "../../constants";

const Orders = () => {
  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  return (
    <View style={styles.container}>
      <FlatList data={ORDERS} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

export default Orders;