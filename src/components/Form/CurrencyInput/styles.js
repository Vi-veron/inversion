import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    paddingLeft: 40,
    marginTop: 10,
    minWidth: 280,
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "#cecece",
    //     border: "2px solid #cecece",
    //   },
    //   "&:hover fieldset": {
    //     borderColor: purple[500],
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: purple[800],
    //   },
    // },
    // "@media (max-width: 540px)": {
    //   minWidth: 200,
    // },
  },
  label: {
    paddingLeft: 40,
    marginTop: 30,
    fontSize: "1.2rem",
    color: grey[800],
    fontWeight: 400,
    "@media (max-width: 540px)": {
      fontSize: "1rem",
    },
  },
  icon: {
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  inputStyle: {
    fontFamily: "Montserrat",
  },
}));

export default styles;
