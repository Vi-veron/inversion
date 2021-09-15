import React, { useState } from "react";
import { Grid, InputBase } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import styles from "./styles";
import useProfileQuery from "hooks/queries/useProfileQuery";
import EmptyState from "components/EmptyState";
import { ReactComponent as ErrorIllustration } from "assets/error-occured.svg";
import LoadingState from "components/LoadingState";
import GetAppIcon from "@material-ui/icons/GetApp";

function Profile() {
  const classes = styles();

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

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
          <Grid className={classes.wrapper}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={3}>
                  <div className={classes.imageContainer}>
                    <label htmlFor="upload-button">
                      {image.preview ? (
                        <img
                          src={image.preview}
                          alt="dummy"
                          className={classes.image}
                        />
                      ) : (
                        <span className={classes.imageContent}>
                          <GetAppIcon className={classes.uploadIcon} />
                          <h5 className={classes.uploadText}>
                            Upload your photo
                          </h5>
                        </span>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "1rem",
                    }}
                  >
                    <button onClick={handleUpload}>Upload</button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <form className={classes.formDetails}>
                    <div className={classes.userInfo}>
                      <p className={classes.userName}>{users.name}</p>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Username:</p>
                        <p className={classes.detailsContent}>
                          {users.username}
                        </p>
                      </span>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Phone:</p>
                        <p className={classes.detailsContent}>
                          +234{users.mobile}
                        </p>
                      </span>
                      <span className={classes.details}>
                        <p className={classes.detailsInfo}>Email:</p>
                        <p className={classes.detailsContent}>{users.email}</p>
                      </span>
                      <span className={classes.details}>
                        <label
                          className={classes.detailsInfo}
                          htmlFor="address"
                        >
                          Address:
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
