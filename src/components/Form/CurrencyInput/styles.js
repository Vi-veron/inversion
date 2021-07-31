import { grey, purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    minWidth: "330px",
    width: "22.8vw",
    marginTop: 20,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#cecece",
        border: "2px solid #cecece",
      },
      "&:hover fieldset": {
        borderColor: purple[500],
      },
      "&.Mui-focused fieldset": {
        borderColor: purple[800],
      },
    },
  },
  label: {
    marginTop: 40,
    fontSize: "1.4rem",
    color: grey[800],
    fontWeight: 400,
    "@media (max-width: 540px)": {
      fontSize: "1.2rem",
    },
  },
}));

export default styles;
