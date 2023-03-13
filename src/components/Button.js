import React from 'react';
import Button from '@material-ui/core/Button';

function MyButton(props) {
  return (
    <Button variant={props.variant} color={props.color} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("Button clicked");
  }

  return (
    <div className='button-profile'>
      <MyButton variant="contained" color="primary" onClick={handleClick}>
     Edit Profile
      </MyButton>
    </div>
  );
}
