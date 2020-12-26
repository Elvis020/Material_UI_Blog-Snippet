import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
      background: "#fff",
    },
  }));


const Navbar = () => {
  const navUI = useStyles();

  return (
    <AppBar className={navUI.appBar} position="static">
      <Toolbar>
        <Typography color="primary" variant="h6">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
