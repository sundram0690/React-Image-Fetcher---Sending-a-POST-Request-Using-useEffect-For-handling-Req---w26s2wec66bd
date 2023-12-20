import React from 'react';
import '../styles/App.css'
export const PhotoFrame = (props) => {

    if(props.url == undefined){
        return <></>
    }else{
        return <div className="photoframe">
            <img src={props.url} />
            <div className="caption">{props.title}</div>
        </div>
    }


}