import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./styles";

const BorderSelect = () => {
  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const classes = styles();

  const menuProps = {
    classes: {
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className + " " + classes.icon} />;
  };

  return (
    <FormControl>
      <label className={classes.label}>Create Investments</label>
      <Select
        disableUnderline
        classes={{ root: classes.select }}
        labelId="inputLabel"
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0} disabled>
          <em>Select Investment Plan</em>
        </MenuItem>
        <MenuItem value={1}>Fish Farming</MenuItem>
        <MenuItem value={2}>Poultry Farming</MenuItem>
        <MenuItem value={3}>Milk Factory</MenuItem>
        <MenuItem value={4}>Real Estate</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BorderSelect;
