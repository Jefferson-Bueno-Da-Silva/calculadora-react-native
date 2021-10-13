import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Display } from "./src/components";
import { styles } from "./AppStyles";
import { buttons } from "./src/components/Button/buttons";

const App: React.FC = () => {
  const [values, setValues] = useState<Array<string | number>>();
  const [displayValue, setDisplayValue] = useState<Array<number | string>>([0]);
  const [operation, setOperation] = useState<string>("");

  const toggleClear = useCallback(() => {
    setDisplayValue([0]);
    setValues([]);
    setOperation("");
    return;
  }, []);

  const toggleAddDigit = (n: number | string) => {
    const num = parseFloat(n.toString());
    if (
      num >= 0 &&
      num <= 9 &&
      displayValue[0] === 0 &&
      displayValue[1] !== "."
    ) {
      setDisplayValue([n]);
      return;
    }

    if (n.toString() === ".") {
      setDisplayValue((old) => [...old, n]);
      return;
    }

    if (num >= 0 && num <= 9) {
      setDisplayValue((old) => [...old, n]);
      return;
    }

    if (n.toString() !== "." && n.toString() !== "=") {
      setOperation(n.toString());

      let valuesDisplay = displayValue.toString().replace(/,/g, "");
      if (valuesDisplay === "0") return;

      setValues((old) =>
        !!old
          ? [...old, parseFloat(valuesDisplay)]
          : [parseFloat(valuesDisplay)]
      );

      setDisplayValue([0]);
      return;
    }

    if (n.toString() === "=") {
      let valuesDisplay = displayValue.toString().replace(/,/g, "");
      if (valuesDisplay === "0") return;

      setDisplayValue([
        calc(values[0].toString(), operation, valuesDisplay.toString()),
      ]);
    }
  };

  const calc = (value1: string, operation: string, value2: string) => {
    let result: number = 0;
    switch (operation) {
      case "+":
        result = parseFloat(value1) + parseFloat(value2);
        break;
      case "-":
        result = parseFloat(value1) - parseFloat(value2);
        break;
      case "*":
        result = parseFloat(value1) * parseFloat(value2);
        break;
      case "/":
        result = parseFloat(value1) / parseFloat(value2);
        break;
      default:
        break;
    }
    setValues([result]);
    setOperation("");
    return result;
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        {buttons.map((button, index) => (
          <Button
            label={button}
            key={index}
            onPress={() =>
              button === buttons[0] ? toggleClear() : toggleAddDigit(button)
            }
          />
        ))}
      </View>
    </View>
  );
};

export default App;
