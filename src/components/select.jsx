import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { grey, purple } from "@material-ui/core/colors";

const useBorderSelectStyles = makeStyles((theme) => ({
  label: {
    marginLeft: "4px",
    color: grey,
    "&.Mui-focused": {
      color: grey,
    },
  },
  select: {
    minWidth: "200px",
    width: "40vw",
    background: "white",
    color: grey[600],
    borderColor: purple,
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "4px",
    paddingLeft: "24px",
    paddingTop: "14px",
    paddingBottom: "15px",
    "&:hover": {
      borderColor: purple[500],
    },
    "&:focus": {
      borderRadius: "4px",
      background: "white",
      borderColor: purple[800],
    },
  },
  icon: {
    color: grey,
    right: 12,
    position: "absolute",
    userSelect: "none",
    pointerEvents: "none",
  },
  list: {
    paddingTop: 4,
    paddingBottom: 4,
    background: "white",
    "& li.Mui-selected": {
      fontWeight: 700,
    },
  },
}));

const formControl = {
  margin: " 0 3vw",
};

const BorderSelect = () => {
  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
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
    return (
      <ExpandMoreIcon
        className={props.className + " " + borderSelectClasses.icon}
      />
    );
  };

  return (
    <FormControl style={formControl}>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select }}
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
