import React from "react";

function Image(props) {
    return (
        <button type='button'>
            <img className='p-1' onClick={props.onClick} id={props.id} src={props.source} alt='' height='100' width='100' />
        </button>


    );

}

export default Image;