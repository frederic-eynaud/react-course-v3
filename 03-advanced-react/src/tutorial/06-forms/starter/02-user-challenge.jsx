import { useState } from 'react';
import { data, people } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const [id, setId] = useState(users.length + 1);

  const handleChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.name, name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    // const name = e.target.name.va;
    // setUsers([...users, { id: id, name: e.target.name.value }]);
    // setUsers([...users, { id: id, name: name }]);
    setUsers([...users, { id, name }]);
    // console.log(users);
    // console.log('Submitting: ', name);
    // console.log('Submitting: ', id, e.target.name.value);
    // e.target.name.value = '';
    setName('');
  };

  const removeUser = (idToRemove) => {
    // console.log('Remove: ', idToRemove, users);
    // users
    //   .filter((user) => {
    //     return user.id != idToRemove;
    //   })
    //   .map((user) => console.log('id: ', user.id, ', name: ', user.name));
    setUsers(
      users.filter((user) => {
        return user.id != idToRemove;
      })
    );
    // console.log(users);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            id="name"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <ul>
        {users.map((user) => {
          // console.log(user.id, user.name);
          return (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <button
                className="btn"
                onClick={() => {
                  // console.log('Remove: ', user.name, user);
                  removeUser(user.id);
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
