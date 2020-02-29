import React from "react";

function Image(props) {
    return(
        <div>   
            <img className='p-1'   id={props.id} src={props.source} alt='' height='100' width='100'/>
        </div>


    );
    
}

export default Image;