import React, { useState } from "react";
import Character from "./Character";

export default function Names() {
    const [nameArr, getName] = useState([]);
        Character().forEach(obj => {
        getName(obj.name);
    })
    return nameArr;
}