import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../assets/Modal.css';
import {auth} from '../firebase';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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


export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function changeActiveUser(value){
      props.onChange(value);
  }

  const signup = (e) => {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
          return authUser.user.updateProfile({
              displayName: username
          })
      })
      .catch((err) => alert(err.message));

      setOpen(false);
  }

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .catch((err) => alert(err.message));

    setOpenLogin(false);
}


  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser) {
            // meaning user has logged in
            // console.log(authUser);
            setUser(authUser);
            setUsername(authUser.displayName);
            changeActiveUser(authUser.displayName);
          } else{
            setUser(null);
            changeActiveUser('');
          }
      })

      return () => {
          // perform some cleanup actions before the useEffect is fired
          // this is necessary whenever there's dependencies in useEffect
          unsubscribe();
      }
  }, [user, username])



  const body = (
    <div style={modalStyle} className={classes.paper}>

        <center>
            <img className="app_headerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                height="60px" alt="IG Logo" />

            <form onSubmit={signup} className="modal_form">
                <FormControl className="modal_formControl">
                    <InputLabel>Username</InputLabel>
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </FormControl>  
                <br/>
                <FormControl className="modal_formControl">
                    <InputLabel>Email address</InputLabel>
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>  
                <br/>
                <FormControl className="modal_formControl">
                    <InputLabel>Password</InputLabel>
                    <Input value={password} onChange={e => setPassword(e.target.value)} />
                    <FormHelperText>Please enter a strong password.</FormHelperText>
                </FormControl>

                <FormControl className="modal_button">
                    <Button type="submit">Sign Up</Button>
                </FormControl>
            </form>

        </center>

    </div>
  );

  return (
    <div className="modal_button">
        {user ?
        <>
        <Button className="m-2" variant="contained" color="secondary" type="button" onClick={() => {
          auth.signOut();
          setUsername('');
          setEmail('');
          setPassword('');
          setUser(null);
        }}>
            Logout 
        </Button>
        </>
        : 
        <>
        <Button className="m-2" variant="contained" color="secondary" type="button" onClick={handleOpen}>
            Signup 
        </Button>
        <Button className="m-2" variant="contained" color="secondary" type="button" onClick={() => setOpenLogin(true)}>
            Login 
        </Button>
        </>
      }
      {/* Singup Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

      {/* Login Modal */}
      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>

            <center>
                <img className="app_headerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                    height="60px" alt="IG Logo" />

                <form onSubmit={login} className="modal_form">
                    <FormControl className="modal_formControl">
                        <InputLabel>Email address</InputLabel>
                        <Input value={email} onChange={e => setEmail(e.target.value)} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>  
                    <br/>
                    <FormControl className="modal_formControl">
                        <InputLabel>Password</InputLabel>
                        <Input value={password} onChange={e => setPassword(e.target.value)} />
                        <FormHelperText>Please enter a strong password.</FormHelperText>
                    </FormControl>

                    <FormControl className="modal_button">
                        <Button type="submit">Log in</Button>
                    </FormControl>
                </form>

            </center>

            </div>
      </Modal>
    </div>
  );
}
