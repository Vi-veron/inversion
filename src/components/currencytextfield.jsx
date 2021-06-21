import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

export default function CurrencyInput() {
  const [value, setValue] = React.useState(100000);
  const isValid = value < 1000;

  return (
    <CurrencyTextField
      variant="outlined"
      value={value}
      currencySymbol="&#x20a6;"
      onChange={(e, value) => setValue(value)}
      error={isValid}
      helperText={isValid && "minimum amount is 100,000"}
      decimalCharacter="."
      digitGroupSeparator=","
      style={{
        margin: " 0 3vw",
        minWidth: "200px",
        width: "42.5vw",
      }}
    />
  );
}
