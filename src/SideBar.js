
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import { useState } from 'react';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    margin: {
        margin: theme.spacing(1),
    },

    root: {
        '& > *': {
            margin: theme.spacing(4),
        },

    },

}));







const SideBar = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(true);
    const [addparagraph, setAddparagraph] = useState('');
    function addParagraph() {
        setAddparagraph('Your purchase was made successfully')
    }

    return (

        <div>
            <Drawer id='side-bar-right'
                open={props.sideBarState}
                onClose={() => {
                    setOpenDrawer(props?.sideBarClick())
                }
                }

                anchor='right'
            >
                <List>
                    <ListItem divider>
                        <ListItemText>
                            {props.sneakerName}
                        </ListItemText>
                    </ListItem>
                    <ListItem divider>
                        <ListItemText>
                            <Typography>DELIVERY PICKUP OPTIONS</Typography>
                            <div className={classes.root}>
                                <Button variant="outlined" color="primary">

                                    SHIP IT
                                </Button>
                                <Button variant="outlined" color="primary">
                                    PICK UP
                                </Button>

                            </div>

                        </ListItemText>
                    </ListItem>

                    <ListItem divider>
                        <ListItemText>
                            <Typography variant="h6">BUY NOW</Typography>
                            <div>
                                {props.size}
                            </div>
                            <div>
                                {props.category}
                            </div>
                            <div>
                                {props.price}
                            </div>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider >
                        <ListItemText >
                            <Button onClick={addParagraph} size="medium" variant="contained" color="primary">

                                PLACE YOUR ORDER

                            </Button>
                            <div>
                                <Typography variant="h6"> {addparagraph}</Typography>
                            </div>
                        </ListItemText>
                    </ListItem>


                </List>
            </Drawer>
        </div>
    );
}

export default SideBar;