import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUser(json.data);
      console.log(json.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
      getData();
  }, [])
  return (
    <center>
      <h1>data from api</h1>
      <div className="flex" >
        {user.length && user.map((users) =>{
          return(
            <>
              <div key={users.id}>
                <p><strong>{users.first_name} {users.last_name}</strong></p>
                <p>{users.email}</p>
                <img key={users.avatar} src={users.avatar}/>
              </div>
            </>
          )
        })}
      </div>
    </center>
  );
}

export default App;
