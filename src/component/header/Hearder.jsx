import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";


const Header = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example">
                <Tab label="Home" component={Link} to={'/'}/>
                <Tab label="All Materials" />
                <Tab label="Donate to unlock" disabled />
                <Tab label="Add material" />
            </Tabs>
        </Paper>
    )
}

export default Header