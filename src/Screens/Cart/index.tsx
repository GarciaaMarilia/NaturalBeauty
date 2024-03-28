import React, { useEffect, useState } from "react";

import {
 useNaturalBeauty,
 NaturalBeautyProps,
} from "../../Global/Providers/NaturalBeautyProvider";

import { styles } from "./styles";
import { Avatar } from "../../Components/Avatar/Avatar";
import { View, Text, FlatList, Image } from "react-native";
import { ListDivider } from "../../Components/ListDivider/ListDivider";

export function Cart() {
 const { naturalBeauty } = useNaturalBeauty();
 const [subtotal, setSubtotal] = useState<number>(0);
 const [delivery, setDelivery] = useState<number>(0);

 function calcSubtotal(products: NaturalBeautyProps[]) {
  let subTotal: number = 0;

  const prices: number[] = products.map((product: NaturalBeautyProps) => {
   return product.price;
  });

  subTotal = prices.reduce((total, price) => total + price, 0);

  setSubtotal(subTotal);
 }

 function calcDelivery() {
  const randomDelivery = Math.random() * 2000;

  const roundedDelivery = Math.round(randomDelivery) / 100;

  setDelivery(roundedDelivery);
 }

 useEffect(() => {
  calcSubtotal(naturalBeauty);
  calcDelivery();
 }, [naturalBeauty]);

 function renderItem(item: NaturalBeautyProps) {
  return (
   <View style={styles.containerItem}>
    <Image source={item.image} style={styles.image} />

    <View>
     <Text style={styles.product}>{item.name}</Text>
     <Text>{item.description}</Text>
     <Text style={styles.product}>$ {item.price}</Text>
    </View>
   </View>
  );
 }

 return (
  <View style={styles.content}>
   <View style={{ flexDirection: "row" }}>
    <View>
     <Text style={styles.subtitle}>Hello, Marilia!</Text>

     <Text style={styles.title}>Cart</Text>
    </View>

    <Avatar urlImage="https://github.com/Garciaamarilia.png" />
   </View>

   <FlatList
    data={naturalBeauty}
    renderItem={({ item }) => renderItem(item)}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={() => <ListDivider />}
   />

   <Text style={styles.payment}>Subtotal: ${subtotal}</Text>

   <Text style={styles.payment}>Delivery: ${delivery}</Text>

   <Text style={styles.payment}>Total: ${subtotal + delivery} </Text>
  </View>
 );
}
