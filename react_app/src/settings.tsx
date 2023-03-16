import React from "react";
import { CONSTANTS } from "./components/constants";


export const Settings = () => {
    console.log("settings from react")
    CONSTANTS.s = "test"
    return (
        <div>
            settings from react
        </div>
    )
}