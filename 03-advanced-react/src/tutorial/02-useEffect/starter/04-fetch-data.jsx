import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>fetch data</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h5>{user.login}</h5>
                <a href={user.url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
