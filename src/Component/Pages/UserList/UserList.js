import React, {useState} from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../DummyData'
import { Link } from 'react-router-dom'


const UserList = () => {

    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
    
        setData(data.filter(dataItem => dataItem.id !== id));
    }
const columns = [
	{
		field: 'id',
		headerName: 'ID',
		width: 100
	},
	{
		field: 'user',
		headerName: 'UserName',
        width: 200, 
        renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.userName}
                </div>
            )
        }
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 200
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 120
	},
	{
		field: 'transaction',
		headerName: 'Transaction',
        width: 160,
	},
	{
		field: 'action',
		headerName: 'Action',
        width: 160,
        renderCell: (params) => {
            return (
                <div className="userListButtonContainer">
                    <Link to={ "user/"+params.row.id}>
                        <Edit className="userListIcon Edit" />
                    </Link>
                    <DeleteOutline className="userListIcon Delete" onClick={ ()=>handleDelete(params.row.id)}/>
                </div>
           ) 
        }
	}
];


	return (
		<div className="userList">
			<DataGrid rows={data} columns={columns} pageSize={10} disableSelectionOnClick checkboxSelection />
		</div>
	);
};

export default UserList;
