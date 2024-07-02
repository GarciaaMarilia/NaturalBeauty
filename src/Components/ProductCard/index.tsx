import React from "react";

import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../Global/Styles/theme";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NaturalBeautyProps } from "../../Global/Providers/NaturalBeautyProvider";

interface Props {
 item: NaturalBeautyProps;
 handlefavorite(): void;
}

export function ProductCard({ item, handlefavorite }: Props) {
 return (
  <View style={styles.containerItem}>
   <Image source={item.image} style={styles.image} />

   <View style={styles.row}>
    <View>
     <Text style={styles.product}>{item.name}</Text>
     <Text>{item.description}</Text>
     <Text style={styles.product}>$ {item.price}</Text>
    </View>
    <TouchableOpacity
     activeOpacity={0.7}
     onPress={handlefavorite}
     style={styles.icon}
    >
     <FontAwesome5 name="star" size={20} color={theme.colors.orange} />
    </TouchableOpacity>
   </View>
  </View>
 );
}
