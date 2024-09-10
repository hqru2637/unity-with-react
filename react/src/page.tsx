import { useState } from 'react';

export default function Main() {
  const [text, setText] = useState<string>();

  const handleClick = () => {
    setText('clicked');
    setTimeout(() => setText(''), 5000);
  }
  
  return (
    <>
      <button onClick={handleClick} style={{ width: 120 }}>button</button>
      <text style={{ color: 'white', fontSize: '2em' }}>{text}</text>
    </>
  )
}
