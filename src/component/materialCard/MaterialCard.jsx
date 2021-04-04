import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const MaterialCard = ({imageProp, hintProp, titleProp, mainTextProp}) => {

    const classes = useStyles();

    return (
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
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MaterialCard