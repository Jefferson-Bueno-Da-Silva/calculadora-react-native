import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

const Display: React.FC<{ value: Array<number | string> }> = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

export default Display;
