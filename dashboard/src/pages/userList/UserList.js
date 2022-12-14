import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid'; 
import DeleteIcon from '@material-ui/icons/Delete';
import { userRows} from '../../dummyData';
import { Link } from 'react-router-dom';



function UserList() {

  const [data,setData] = useState(userRows);


  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id));
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          renderCell: (params)=>{
            return(
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
              </div>
            )
          }
        },
        {
          field: 'status',
          headerName: 'status',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          type: 'number',
          width: 160,
          editable: true,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) =>{
            return(
              <>
              <Link to ={"/user/"+params.row.id}>
              <button className="userListEdit">Edit</button>
              </Link>
              <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
             );
          },
        },
        
      ];
      
       
    return (
        <div className="userList">
             <DataGrid rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default UserList
