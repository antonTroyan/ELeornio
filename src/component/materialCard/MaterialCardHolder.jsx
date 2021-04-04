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
            <h2>Select material</h2>
            <Grid container spacing={3}>
                {props.materialPage.materials.map(
                    (element) => {
                        return <MaterialCard key={element.key}
                                             titleProp={element.title}
                                             mainTextProp={element.mainText}
                                             imageProp={element.image}
                                             hintProp={element.hint}/>
                    }
                )}
            </Grid>
        </div>
    )
}

export default MaterialCardHolder