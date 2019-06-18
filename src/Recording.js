import React from 'react';

const styles = {
  textAlign: "center",
  margin: "2em auto",
  width: "1vmin",
  height: "1vmin",
  borderRadius: "50%",
  backgroundColor: "red",
  padding: "1em",
  boxShadow: "inset 0 0 10px 0 #9caab2, 0 0 15px 5px red"
}

const Recording = ({live}) => (
  <div className={live ? `Recording pulse` : `Recording`} style={styles}>

  </div>
);

export default Recording;
