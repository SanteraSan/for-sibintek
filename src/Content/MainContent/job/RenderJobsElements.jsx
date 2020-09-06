import React from "react";

const RenderJobsElement = ({organisation,position,functions}) =>{
    return(
        <li><b>{organisation}</b><br/>
            <b>Длжность:</b> {position}.<br/>
            <b>Должностные обязаности:</b> <br/>{functions}
        </li>
    )
};

export default RenderJobsElement;