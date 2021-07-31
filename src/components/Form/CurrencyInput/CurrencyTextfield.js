import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { FormControl } from "@material-ui/core";
import styles from "./styles";

export default function CurrencyInput() {
  const [value, setValue] = React.useState();
  const isValid = value < 100000;
  const classes = styles();
  return (
    <FormControl>
      <label className={classes.label}>Amount</label>
      <CurrencyTextField
        className={classes.root}
        variant="outlined"
        value={value}
        currencySymbol="&#x20a6;"
        onChange={(e, value) => setValue(value)}
        error={isValid}
        helperText={isValid && "minimum amount is 100,000 naira"}
        decimalCharacter="."
        decimalPlaces={2}
        placeholder="100,000.00"
        digitGroupSeparator=","
      />
    </FormControl>
  );
}
