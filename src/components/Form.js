import { useState } from 'react';

const Form = ({studentList, setStudentList}) => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, roll);
    const data = {
        'name': name,
        'roll': roll,
        'checkIn': checkIn,
        'checkOut': checkOut
    }
    setStudentList(studentList.concat(data));
  }
  return (
    <div className='wrap-box'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Student Name</label>
              <input required
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
              />
            </div>
            <div className='form-group'>
              <label>Roll Number</label>
              <input required
                type="text" 
                name="roll" 
                id="roll" 
                value={roll} 
                onChange={(e)=> setRoll(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Check-in Time</label>
              <input required
                type="time" 
                name="time" 
                id="time" 
                value={checkIn} 
                onChange={(e)=> setCheckIn(e.target.value)} 
              />
            </div>
            <div className='form-group'>
              <label>Check-out Time</label>
              <input required
                type="time" 
                name="time" 
                id="time" 
                value={checkOut} 
                onChange={(e)=> setCheckOut(e.target.value)} 
              />
            </div>
            <div style={{ "textAlign": "center" }}><button type="submit">Add</button></div>
        </form>
    </div>
  )
}

export default Form;