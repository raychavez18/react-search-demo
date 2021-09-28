import React, { useState } from 'react';
import './App.css';


// Star Wars Data 
const CHAR = [
  { id: 1, name: 'Luke Skywalker', dob: '19BBY', gender: 'Male' },
  { id: 2, name: 'C-3PO', dob: '112BY', gender: 'Droid'},
  { id: 3, name: 'R2-D2', dob: '33BBY', gender: 'Droid'},
  { id: 4, name: 'Darth Vader', dob: '41.9BBY', gender: 'Male'},
  { id: 5, name: 'Leia Organa', dob: '19BBY', gender: 'Female'},
  { id: 6, name: 'Obi-Wan Kenobi', dob: '57BBY', gender: 'Male'},
  { id: 7, name: 'Anakin Skywalker', dob: '41.9BBY', gender: 'Male'},
  { id: 8, name: 'Chewbacca', dob: '200BBY', gender: 'Wookie'},
  { id: 9, name: 'Han Solo', dob: '29BBY', gender: 'Male'}
];

function App() {
  const [name, setName] = useState('');
  const [foundCHAR, setFoundCHAR] = useState(CHAR);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = CHAR.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase()) ||
               user.gender.toLowerCase().startsWith(keyword.toLowerCase()) ||
               user.dob.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundCHAR(results);
    } else {
      setFoundCHAR(CHAR);
    }
    setName(keyword);
  };


  return (

    <div className="container">
    <h1 className="display-4">React Serach & Filter Star Wars Data</h1>
    
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
      </div>
      <input type="search" value={name} onChange={filter} className="input form-control" placeholder="Filter by Name, DOB or Gender" />

    </div>

      <div className="user-list">
        {foundCHAR && foundCHAR.length > 0 ? (
          foundCHAR.map((user) => (
            <li key={user.id} className="user">

            <table className="table table-dark table-responsive">
            <thead>
            <tr>
            <th scope="col"># {user.id}</th>
            <th scope="col">Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>            
            </tr>

            </thead>
            <tbody>
            <tr>
            <th scope="row" className="user-id"></th>
            <th scope="row" className="user-name">{user.name}</th>
            <th scope="row" className="user-age">{user.dob}</th>
            <th scope="row" className="user-gender">{user.gender}</th>
            </tr>
            </tbody>
            </table>

            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;