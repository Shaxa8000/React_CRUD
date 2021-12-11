import React from 'react';
import { data } from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      active: null,
      data: {
        status: 'student',
        datalist: data,
      },
    };
  }
  render() {
    // onDelete

    const onDelete = (id) => {
      let res = this.state.data.datalist.filter(value => value.id !== id)

      this.setState({
        data: {
          ...this.state.data,
          datalist: res,
        },
      });
    };

    // addUser

    const onChange = (e) => {
      console.log(e)
      this.setState({
        [e.target.name]: e.target.value,
      })
    };

    // onSave button

    const onSave = () => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: {
          ...this.state.data,
          datalist: [...this.state.data.datalist, newData]
        }
      })
    };

    // onEdit

    const onEdit = (id) => {
      this.setState({
        active: id
      })
    }

    

    return (
      <div>
        <div className='inputSection'>
          <input
            onChange={onChange}
            type='text'
            placeholder='enter your name'
            name='name'
          />
          <input
            onChange={onChange}
            type='text'
            placeholder='enter your status'
            name='status'
          />{' '}
          <button className='btn' onClick={onSave}>
            Save
          </button>
        </div>
        <table border='1' width='100%'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.datalist.map(({ id, name, status }) => (
              <tr key={id}>
                <td>
                  {this.state.active === id ? <input name ='name' type ='text'onChange={onChange}/> : id}
                </td>
                <td>{name}</td>
                <td>{status}</td>
                <td>
                  <button className='btn' onClick={() => onDelete(id)}>
                    delete
                  </button>
                  <button className='btn' onClick={() => onEdit(id)}>
                    {/* Conditional rendering */}
                    {this.state.active === id  ? 'save' : 'edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
