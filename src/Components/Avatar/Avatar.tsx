import React from "react";

import { styles } from "./styles";
import { Image } from "react-native";

type Props = {
 urlImage: string;
};

export function Avatar({ urlImage }: Props) {
 return <Image source={{ uri: urlImage }} style={styles.image} />;
}
