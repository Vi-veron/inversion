import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import NumberFormat from "react-number-format";
import styles from "./styles";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,

  onChange: PropTypes.func.isRequired,
};

export default function CurrencyInput({ label, id, ...rest }) {
  const [amount, setAmount] = React.useState("");
  const classes = styles();

  const handleChange = (event) => {
    setAmount({
      ...amount,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <TextField
        variant="outlined"
        fullWidth
        autoFocus
        className={classes.root}
        id={id}
        type="number"
        name={"amount"}
        value={amount.numberformat}
        onChange={handleChange}
        InputProps={{
          style: {
            fontSize: "0.8rem",
          },
          // inputComponent: NumberFormatCustom,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton className={classes.icon}>&#x20a6;</IconButton>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </FormControl>
  );
}
CurrencyInput.defaultProps = {};
