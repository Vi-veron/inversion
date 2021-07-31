import React from "react";
import { Container, Grid, Hidden, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import styles from "./styles";
import PasswordResetLinkForm from "./components/PasswordResetLinkForm";
import PasswordResetForm from "./components/PasswordResetForm";
import useParamSearch from "../../hooks/useParamSearch.js";

function ResetPassword({ history, match }) {
  const classes = styles();

  const { token } = match.params;

  const [getRequestedResetValue] = useParamSearch("requestedReset");
  const requestedReset = getRequestedResetValue();

  if (requestedReset)
    return (
      <div>
        <Typography>We just sent a reset link to your inbox.</Typography>
        <Button>
          <Link to="/login">
            <Button>Back to login</Button>
          </Link>
        </Button>
      </div>
    );

  return (
    <div className={classes.root}>
      <Grid item xs={12} container>
        <Hidden xsDown>
          <Grid item sm={5}>
            <Hero />
          </Grid>
        </Hidden>
        <Grid item xs={7}>
          <Container component="main" maxWidth="sm">
            {token ? (
              <PasswordResetForm token={token} />
            ) : (
              <PasswordResetLinkForm
                onSuccess={() =>
                  history.push("/password/reset?requestedReset=1")
                }
              />
            )}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResetPassword;
