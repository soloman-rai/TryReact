import React, {useState} from 'react';

import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  TextInput,
} from 'grommet';

import { db, auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { grommet } from 'grommet/themes';


function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [reveal, setReveal] = useState(false);
    const history = useHistory();


    const handleAuthChange = e => {
        e.preventDefault();
        setIsLogin(!isLogin);
    }

    const loginOrRegister = e => {
        e.preventDefault();

        if (isLogin) {
            auth.signInWithEmailAndPassword(email, password)
                .then((auth) => {
                //logged in and redirect to homepage
                history.push('/');
            }).catch(e => alert(e.message));
        } else {
            auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created the user and redirect to homepage
                db.collection("userDetails")
                    .add({
                        id: auth.user.uid,
                        username: username,
                        bio: '',
                        image: ''
                })
                history.push('/');
            }).catch(e => alert(e.message));
        }
    } 


    return (
        <Grommet full theme={grommet}>
            <Box fill align="center" justify="center">
            <Box width="medium">
                <Form
                onSubmit={loginOrRegister}
                    >
                        {!isLogin && 
                            <FormField label="Username" name="username">
                                <TextInput value={username} onChange={e => setUsername(e.target.value)} required/>
                            </FormField>
                }
            
                <FormField label="Email" name="email">
                    <MaskedInput
                    value={email} onChange={e => setEmail(e.target.value)}
                    mask={[
                        { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                        { fixed: '@' },
                        { regexp: /^[\w]+$/, placeholder: 'my' },
                        { fixed: '.' },
                        { regexp: /^[\w]+$/, placeholder: 'com' },
                    ]}
                    required />
                    </FormField>
                <FormField label="Password" name="password">
                    <TextInput
                        type={reveal ? "text" : "password"}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required   />
                </FormField>
                {/* <FormField required label="Image" name="image">
                    <FileInput name="image" />
                </FormField> */}
                <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                    {/* <Button type="reset" label="Reset" /> */}
                    <Button type="submit" label={isLogin ? 'Login' : 'Register'} primary />
                            
                    <Button label={isLogin ? 'Register' : 'Login'} onClick={handleAuthChange} />
                </Box>
                </Form>
            </Box>
            </Box>
        </Grommet>
    )
}

export default AuthForm;

