import React from 'react'

export default function ChildFnc(props) {
    console.log(props);
    const { usernameProps, ageProps } = props;
  return (
    <div>
        <h3>ChildFnc</h3>
        <h4>Username : {usernameProps} - Age: {ageProps}</h4>
    </div>
  )
}
