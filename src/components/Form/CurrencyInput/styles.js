import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    minWidth: 150,
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
    marginTop: 30,
    fontSize: "1rem",
    color: grey[800],
    fontWeight: 400,
    "@media (max-width: 540px)": {
      fontSize: "1rem",
    },
  },
  icon: {
    fontSize: 16,
  },
}));

export default styles;
