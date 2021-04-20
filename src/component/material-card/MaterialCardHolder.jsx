import React from 'react';
import MaterialCard from "./MaterialCard";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const MaterialCardHolder = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {props.materialPage.materials.map(
                    (element) => {
                        return <MaterialCard key={element.key}
                                             id={element.key}
                                             titleProp={element.title}
                                             mainTextProp={element.mainText}
                                             imageProp={element.image}
                                             hintProp={element.hint}
                                             linkToMaterial={element.linkToMaterial}/>
                    }
                )}
            </Grid>
        </div>
    )
}

export default MaterialCardHolder