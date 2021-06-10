import React, { useEffect, useState } from 'react';


import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Collapsible,
    Heading,
    Grommet,
    Image,
    Paragraph,
    Form,
    FormField,
    FileInput,
    TextInput,
    TextArea,
} from 'grommet';

import { FormDown, FormUp, Favorite, Logout } from 'grommet-icons';
import { useStateValue } from '../context/StateProvider';
import { db, auth, storage } from '../firebase';
import { useHistory } from 'react-router-dom';


const theme = {
    card: {
        elevation: 'none',
        background: 'light-2',
        footer: {
            pad: 'medium',
        },
    },
};


function Profile() {
    const [open, setOpen] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);
    const [{ user },] = useStateValue();
    const [{ userDetails },] = useStateValue();
    const [username, setUsername] = useState('');
    const [image, setImage] = useState(null);
    const [bio, setBio] = useState('');
    const history = useHistory();

    // console.log(userDetails);

    const changeUserDetails = e => {
        e.preventDefault();

        const current_user = auth.currentUser;
        user.displayName !== username &&
            db.collection("userDetails").doc(userDetails.id).set({
                username: username
            }, { merge: true })
        // current_user.updateProfile({
        //     displayName: username
        // }).then(() => setUsername(username))

        userDetails.data.bio !== bio &&
            db.collection("userDetails").doc(userDetails.id).set({
                bio: bio
            }, { merge: true })

        if (image !== null) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                // (snapshot) => {
                //     // measure progress of the upload 
                //     const progress = Math.round(
                //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                //     ); 
                //     setProgress(progress);
                // },
                // (err) => {
                //     //Error Handle
                //     console.log(err)
                // },
                () => {
                    // logic after completion of upload
                    storage.ref("images")   // go through the uploaded record
                        .child(image.name)      // get the curerntly uploaded image file
                        .getDownloadURL()       // grab the download url for the upload
                        .then(url => {
                            // current_user.updateProfile({
                            //     photoURL: url,
                            // }).then(() => {
                            //     setImage(null);
                            // });      
                            db.collection("userDetails").doc(userDetails.id).set({
                                image: url
                            }, { merge: true })

                            // After post upload the states are reset to initial values
                            // setProgress(0);

                        })
                }
            )
        }
        // Refresh the page after updates
        history.push('/profile');
    }

    useEffect(() => {
        userDetails !== null &&
            setUsername(userDetails.data.username)
        userDetails !== null &&
            setBio(userDetails.data.bio)
    }, [user, userDetails]);

    const logout = () => {
        auth.signOut();
        history.push('/');
    }

    const ExpandButton = ({ ...rest }) => {
        const Icon = open ? FormUp : FormDown;
        return (
            <Button
                hoverIndicator="light-4"
                icon={<Icon color="brand" />}
                {...rest}
            />
        );
    };

    return (
        <div style={{ margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grommet theme={theme}>
                <Box pad="medium" align="start">
                    <Card elevation="large" width="medium">
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={userDetails?.data.image ? userDetails.data.image : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}
                                alt="User Profile Picture"
                            />

                        </CardBody>
                        <Box pad={{ horizontal: 'medium' }} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium' }}>
                                {username}
                            </Heading>
                            <Paragraph margin={{ top: 'none' }}>
                                {bio}
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Button
                                    icon={<Favorite color={favorite ? 'red' : undefined} />}
                                    hoverIndicator
                                    onClick={() => {
                                        setFavorite(!favorite);
                                    }}
                                />
                                <Button icon={<Logout color="plain" />} hoverIndicator onClick={logout} />

                            </Box>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </CardFooter>
                        <Collapsible open={open}>
                            <Box pad="medium">
                                <Form
                                    onSubmit={changeUserDetails}
                                >
                                    <FormField label="Username" name="username">
                                        <TextInput value={username} onChange={e => setUsername(e.target.value)} required />
                                    </FormField>

                                    <FormField label="Bio">
                                        <TextArea
                                            placeholder="Write about yourself"
                                            value={bio}
                                            onChange={event => setBio(event.target.value)}
                                        />
                                    </FormField>

                                    <FormField label="Change Profile Picture 🔽" name="image">
                                        <FileInput
                                            name="image"
                                            onChange={event => {
                                                const fileList = event.target.files;
                                                setImage(fileList[0]);
                                            }}
                                        />
                                    </FormField>
                                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                        <Button type="submit" label='Save Changes' primary />
                                    </Box>
                                </Form>
                            </Box>
                        </Collapsible>
                    </Card>
                </Box>
            </Grommet>
        </div>
    )
}

export default Profile;

