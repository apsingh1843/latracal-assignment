
const List = ({studentList, setStudentList}) => {
  return (
    <div className="wrap-box">
        <div>
          <h3>Total Students: {studentList.length} </h3>
          <button type="button" onClick={()=> setStudentList([])}>Clear All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Student Name</th>
              <th>Roll No.</th>
              <th>Check-in Time</th>
              <th>Check-out Time</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>{student.checkIn}</td>
                  <td>{student.checkOut}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
    </div>
  )
}

export default List;