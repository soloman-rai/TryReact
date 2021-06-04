import React, { useState } from 'react'

import { FilePicker } from 'react-file-picker';
import { Button, IconButton, Input, LinearProgress, FormControl, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { db, storage } from '../firebase';
import firebase from 'firebase';
import '../assets/ImageUpload.css';


function ImageUpload(props) {
    const [caption, setCaption] = useState(''); 
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);


    // const handleChange = e => {
    //     if(e.target.files[0]){
    //         setImage(e.target.files[0])
    //     }
    // };

    const handleUpload = e => {
        // console.log('Upload Clicked..')
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // measure progress of the upload 
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                ); 
                setProgress(progress);
            },
            (err) => {
                //Error Handle
                console.log(err)
            },
            () => {
                // logic after completion of upload
                storage.ref("images")   // go through the uploaded record
                .child(image.name)      // get the curerntly uploaded image file
                .getDownloadURL()       // grab the download url for the upload
                .then(url => {
                    db.collection("posts").add({
                        caption: caption,
                        imageURL: url,
                        username: props.user,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });

                    // After post upload the states are reset to initial values
                    setProgress(0);
                    setCaption('');
                    setImage(null);
                })
            }
        )
    };

    return (
        <>
        <div className="imageUpload">
            <FormControl className="imageCaption">
                <InputLabel>Enter Caption for Your Post</InputLabel>
                <Input value={caption} onChange={e => setCaption(e.target.value)} />
            </FormControl>
            <FilePicker
                extensions={['jpg', 'jpeg', 'png']}
                dims={{minWidth: 100, maxWidth: 5000, minHeight: 100, maxHeight: 5000}}
                onChange={FileObject => setImage(FileObject)}
                onError={errMsg => (console.log(errMsg))}
            >
                <IconButton color="secondary" variant="outlined">
                    <AddIcon /> <code className="btnText">Choose Picture</code>
                </IconButton>
            </FilePicker>
            <div>
            {image !== null ?
                <>
                <LinearProgress variant="determinate" value={progress} />
                <p><code>{image.name}</code></p>
                <Button variant="outlined" color="secondary" onClick={handleUpload}>Upload ✔️</Button>
                </>
                :
                ''
            }
            </div>
        </div>
        </>
    )
}

export default ImageUpload
