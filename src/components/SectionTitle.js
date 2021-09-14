import React from "react";

const styles = {
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  message: {
    fontSize: "1.5rem",
    color: "#666",
  },
};

const SectionTitle = ({ title, message }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default SectionTitle;
