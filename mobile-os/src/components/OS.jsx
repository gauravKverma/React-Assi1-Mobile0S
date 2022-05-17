import React from "react";

const OS = () => {
    return <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>Iphone</li>
        <li>Windows Phone</li>
    </ul>
}

const Company = () => {
    return <ul>
        <li style={{listStyleType: "square"}}>Samsung</li>
        <li style={{listStyleType: "square"}}>HTC</li>
        <li>Micromax</li>
        <li style={{listStyleType: "circle"}}>Apple</li>
    </ul>
}

export {OS,Company};