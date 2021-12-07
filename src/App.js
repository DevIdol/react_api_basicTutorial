import { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data)
      })
  }, [])

const add = () => {

    fetch('https://reqres.in/api/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({first_name: 'TOM'})
    }).then(res => res.json()).then(tom => {
      setUsers([...users, tom]);
    })

}

  return (
    <div>
      <h1>Hello React API</h1>

      <ul>
        {users.map(u => <li key = {u.id}>{u.first_name}</li>)}
      </ul>
      <br/>
      <button type="text" onClick= {add}>Add New User</button>
    </div>
  )
}

export default App
