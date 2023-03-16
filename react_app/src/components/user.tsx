import React from "react";
import { CONSTANTS } from "./constants"

export const User = () => {

    const users_names = Object.values(CONSTANTS.managers)


    return (
        <div>
            {users_names.map(function(value:any):any{return value.option})}
        </div>
    )
}