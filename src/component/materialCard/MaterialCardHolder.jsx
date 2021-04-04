import React from 'react';
import MaterialCard from "./MaterialCard";

const MaterialCardHolder = (props) => {
    debugger

    return (
        <div>
            <h2>Select material</h2>
            {props.materialPage.materials.map(
                (element) => {
                    return <MaterialCard key={element.key}
                                         titleProp={element.title}
                                         mainTextProp={element.mainText}
                                         imageProp={element.image}
                                         hintProp={element.hint}/>
                }
            )}
        </div>
    )
}

export default MaterialCardHolder