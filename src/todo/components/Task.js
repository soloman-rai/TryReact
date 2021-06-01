import React, {useState} from 'react';

import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Modal, FormControl, Input, InputLabel } from '@material-ui/core';
import {db} from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';


  
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));



function Task(props) {
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const [updatedTask, setUpdatedTask] = useState('')

    const handleOpen = (e) => {
        setOpen(true);
    }

    const handleClose = (e) => {
        setOpen(false);
    }

    const updateTask = e => {
        e.preventDefault();

        // console.log(props.task.id)
        db.collection('todos').doc(props.task.id).set({
            task: updatedTask
        }, {merge: true})
        // here the merge needs to be set to true or else the data gets deleted i.e prevents overwriting
        handleClose();
    }

    return (
        <>
        <List>
            <ListItemAvatar>
                <Avatar>
                    🌅
                </Avatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.task.title}  secondary={"🕗 Added at: " + new Date(props.task.timestamp.seconds * 1000).toLocaleDateString("en-US") }/>
            </ListItem>
            <Button 
            color="secondary" 
            onClick={e => db.collection('todos').doc(props.task.id).delete()}>
                <DeleteIcon />
            </Button>
            <Button color="primary" onClick={handleOpen}>
                <EditIcon />    
            </Button>

        </List>
        
        <Modal open={open} onClose={handleClose}>
            <div className={classes.paper}>
                <h1>Edit Task</h1>
                <form onSubmit={updateTask}>
                    <FormControl>
                        <InputLabel>{props.task.title}</InputLabel>
                        <Input value={updatedTask} onChange={e => setUpdatedTask(e.target.value)} />
                    </FormControl>
                    <Button variant="contained" type="submit">📝 Edit</Button>
                </form>
            </div>
        </Modal>
        </>
    )
}

export default Task
