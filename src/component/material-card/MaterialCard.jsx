import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width : 300
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const MaterialCard = ({id, imageProp, hintProp, titleProp, mainTextProp}) => {

    const classes = useStyles();

    const path = '/game/' + id

    return (
        <Grid item xs>
            <div className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <NavLink to={path}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imageProp}
                            title={hintProp}
                        />
                        </NavLink>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {titleProp}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {mainTextProp}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Grid>
    )
}

export default MaterialCard