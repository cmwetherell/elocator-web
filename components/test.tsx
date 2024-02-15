'use client';
import React, { useState } from 'react';

// This could be your child component that accepts a string prop
function DisplayComponent({ text }: { text: string }) {
    return <div>{text}</div>;
}

function MyComponent() {
  // Step 2: Setting up state
  const [myString, setMyString] = useState('Initial String');

  // Step 3: Create the event handler
  const updateString = () => {
    setMyString('Updated String');
  };

  return (
    <div>
      {/* Step 5: Passing the state as a prop to the child component */}
      <DisplayComponent text={myString} />
      
      {/* Step 4: Implementing the button */}
      <button onClick={updateString}>Update String</button>
    </div>
  );
}

export default MyComponent;