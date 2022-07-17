import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Navbar({ totalSkins }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Skins Scores #{totalSkins}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;