export const FormTable = ({result}) => {

    return(
        <div className="tableDiv">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Maritial Status</th>
                    </tr>
                </thead>

               { result.map( (el) => (
                <tbody>
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.address}</td>
                        <td>{el.department}</td>
                        <td>{el.salary}</td>
                        <td>{el.status}</td>
                    </tr>
                </tbody>
                ))}
            </table>
            
        </div>
    )
}