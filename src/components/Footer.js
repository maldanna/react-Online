import React from 'react';

function Footer(props) {
  return (
    <div>
      i am footer !! {props.name}
      {props.children}
    </div>
  );
}
export default Footer;
