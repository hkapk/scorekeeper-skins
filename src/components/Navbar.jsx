import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Navbar({ totalSkins }) {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Skins Scores
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;