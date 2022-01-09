import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Eshmat', status: 'Student' },
    { id: 2, name: 'Toshmat', status: 'Mentor' },
    { id: 3, name: 'Gulmat', status: 'Developer' },
    { id: 4, name: 'Gulbashakar', status: 'Tester' },
  ]);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState('');
  const [key, setKey] = useState('');

  //Delete

  const onDelete = (id) => {
    var res = data.filter((value) => value.id !== id);
    setData(res);
  };

  //Create (add)

  const onSave = () => {
    const newData = [
      ...data,
      {
        id: data.length + 1,
        name: name,
        status: status,
      },
    ];

    setData(newData);
  };

  //Update

  const getEdit = (value) => {
    setSelect(value.id);
    setTitle(value.name);
    setStatus(value.status);
  };

  const onEditSave = () => {
    const newArray = data.map((value) =>
      select == value.id ? { ...value, name: title, status: status } : value
    );

    setData(newArray);
    setSelect(null);
  };

  // Search

  const onSearch = (e) => {
    const newArray = data.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(newArray);

    if (e.target.value == '') {
      setData([
        { id: 1, name: 'Eshmat', status: 'Student' },
        { id: 2, name: 'Toshmat', status: 'Mentor' },
        { id: 3, name: 'Gulmat', status: 'Developer' },
        { id: 4, name: 'Gulbashakar', status: 'Tester' },
      ]);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '50px' }}>
        <input onChange={onSearch} type='text' placeholder='search' />

        <select onChange={(e) => setKey(e.target.value)}>
          <option value='name'>name</option>
          <option value='status'>status</option>
        </select>
      </div>

      <input
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='enter your name'
      />
      <input
        onChange={(e) => setStatus(e.target.value)}
        type='text'
        placeholder='enter your status'
      />
      <button onClick={onSave}>Add</button>
      <table border='1' width='80%'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  {select == value.id ? (
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type='text'
                      value={title}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {select == value.id ? (
                    <input
                      onChange={(e) => setStatus(e.target.value)}
                      type='text'
                      value={status}
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  <button onClick={() => onDelete(value.id)}>delete</button>

                  {select == value.id ? (
                    <button onClick={onEditSave}>save</button>
                  ) : (
                    <button onClick={() => getEdit(value)}>edit</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
