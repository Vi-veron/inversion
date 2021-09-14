import { makeStyles } from "@material-ui/core";
import { grey, purple } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  select: {
    minWidth: " 90%",
    width: "20vw",
    background: "white",
    color: grey[600],
    borderColor: "#cecece",
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
  label: {
    fontSize: "1.8rem",
    color: grey[800],
    fontWeight: 500,
    "@media (max-width: 540px)": {
      fontSize: "1.6rem",
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

export default styles;
