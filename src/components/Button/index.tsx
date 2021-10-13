import React, { memo, useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { buttons } from "./buttons";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  label: number | string;
};

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  const [stylesButton, setStylesButton] = useState([]);

  useEffect(() => {
    setStylesButton([
      label === buttons[14] ? styles.buttonDuble : {},
      label === buttons[1] ||
      label === buttons[13] ||
      label === buttons[9] ||
      label === buttons[5] ||
      label === buttons[16]
        ? styles.operationButton
        : {},
      label === buttons[0] ? styles.buttonTriple : {},
    ]);
  }, [label]);

  return (
    <TouchableOpacity {...rest}>
      <Text style={[styles.button, ...stylesButton]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
