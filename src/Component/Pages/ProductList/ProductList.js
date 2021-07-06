import React, {useState} from 'react';
import './ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../../DummyData';
import { Link } from 'react-router-dom';
const ProductList = () => {

    const [data, setData] = useState(productRows);
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
		field: 'product',
		headerName: 'Name',
        width: 200, 
        renderCell: (params) => {
            return (
                <div className="productListproduct">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        }
	},
	{
		field: 'stock',
		headerName: 'Stock',
		width: 200
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 120
	},
	{
		field: 'price',
		headerName: 'Price',
        width: 160,
	},
	{
		field: 'action',
		headerName: 'Action',
        width: 160,
        renderCell: (params) => {
            return (
                <div className="productListButtonContainer">
                    <Link to={ "product/"+params.row.id}>
                        <Edit className="productListIcon Edit" />
                    </Link>
                    <DeleteOutline className="productListIcon Delete" onClick={ ()=>handleDelete(params.row.id)}/>
                </div>
           ) 
        }
	}
];


    return (
        <div className="productList">
            <h1>Products</h1>
            <DataGrid rows={data} columns={columns} pageSize={10} disableSelectionOnClick checkboxSelection />
        </div>
    );
};
export default ProductList;