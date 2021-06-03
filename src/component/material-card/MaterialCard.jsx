import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {NavLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        height: 250
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const MaterialCard = ({id, imageProp, hintProp, titleProp, mainTextProp, linkToMaterial}) => {

    const classes = useStyles();

    const path = '/game/' + id

    return (
        <Grid item xs>
            <div className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imageProp}
                            title={hintProp}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {titleProp}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {mainTextProp}
                            </Typography>
                            <NavLink to={path}>
                                <Button>Exercise</Button>
                            </NavLink>
                            <Button href={linkToMaterial} color={"secondary"}>
                                View source
                            </Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Grid>
    )
}

export default MaterialCard