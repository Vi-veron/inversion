import React from "react";
import { Grid, InputBase } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import styles from "./styles";
import useProfileQuery from "hooks/queries/useProfileQuery";
import EmptyState from "components/EmptyState";
import { ReactComponent as ErrorIllustration } from "assets/error-occured.svg";
import LoadingState from "components/LoadingState";

function Profile() {
  const classes = styles();

  const { data: users, isLoading, isError } = useProfileQuery();

  if (isLoading) return <LoadingState />;

  if (isError)
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <EmptyState
            artwork={<ErrorIllustration />}
            message={`Oops! an error occurred trying to fetch user profile`}
          ></EmptyState>
        </div>
      </section>
    );

  return (
    <section className={classes.container}>
      <div className={classes.bar}>
        <span style={{ display: "flex", flexDirection: "row" }}>
          <p className={classes.logo}>Investon</p>
        </span>
        <EmailOutlinedIcon className={classes.inbox} />
      </div>
      <div className={classes.main}>
        {users && (
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid className={classes.wrapper} container>
                <Grid item xs={12} sm={3}>
                  <div className={classes.image}>
                    <p className={classes.imageText}>User Image</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <form className={classes.formDetails}>
                    <div className={classes.userInfo}>
                      <p className={classes.userName}>{users.name}</p>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Username</p>
                        <p className={classes.detailsContent}>
                          {users.username}
                        </p>
                      </span>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Phone</p>
                        <p className={classes.detailsContent}>
                          +234{users.mobile}
                        </p>
                      </span>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Address</p>
                        <p className={classes.detailsContent}>
                          Plot No 4 Balogun Street, Baale Street, Off
                          Ishagatedo, Isolo, Lagos State.
                        </p>
                      </span>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Email</p>
                        <p className={classes.detailsContent}>{users.email}</p>
                      </span>
                      <span className={classes.details}>
                        <label
                          className={classes.detailsInfo}
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <InputBase
                          className={classes.detailsContent}
                          placeholder="Add address"
                          id="address"
                          type="text"
                          inputProps={{ "aria-label": "naked" }}
                        />
                      </span>

                      <button type="submit" className={classes.btn}>
                        Save Changes
                      </button>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </section>
  );
}
export default Profile;
