import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { grey, purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const textfieldStyle = {
  margin: " 0 7vw",
  minWidth: "230px",
  width: "32.8vw",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: grey[600],
        border: "1px solid grey[600]",
      },
      "&:hover fieldset": {
        borderColor: purple[500],
      },
      "&.Mui-focused fieldset": {
        borderColor: purple[800],
      },
    },
  },
}));

export default function CurrencyInput() {
  const [value, setValue] = React.useState();
  const isValid = value < 100000;
  const classes = useStyles();
  return (
    <div>
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
        style={textfieldStyle}
      />
    </div>
  );
}
