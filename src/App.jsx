import React from 'react'

const App = () => {
  const bigtxt = "text-5xl";
  const name = "Tanim"
  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  const names = ['Tanim', 'Omor', 'Batash', 'Tuki']

  return (
    <>
      <div className={bigtxt}>Hello {name}</div>
      <p style={{ color: 'red', fontSize: '24px'}}>Red text</p>
      <p style={styles}>Style using obj</p>
    <ul>
      {
        names.map((name, index) => <li key={index}>{name}</li>)
      }
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>} // 
      {loggedIn && <h1>Hello Member</h1>}
    </ul>
    </>
  )
}

export default App