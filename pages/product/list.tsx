import Button from '@/components/Button';
import MyDatatable from '@/components/Datatable/MyDatatable'
import productService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

type ProductListProps = {
    showModal: (action: string, row: any) => void;
}

const ProductList = ({ showModal } : ProductListProps) => {

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            cellExport: row => row.id,
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            cellExport: row => row.title,
            sortable: true
        },
        {
           name: 'Description',
           selector: row => row.description,
           cellExport: row => row.description,
           sortable: true,
           compact: true
        },
        {
           name: 'Brand',
           selector: row => row.brand,
           cellExport: row => row.brand,
           sortable: true
        },
        {
           name: 'Rating',
           selector: row => row.rating,
           cellExport: row => row.rating,
           sortable: true,
           right: true,
           compact: true
        },
        {
           name: 'Price',
           selector: row => row.price,
           cellExport: row => row.price,
           sortable: true,
           right: true,
           compact: true
        },
        {
           name: 'Stock',
           selector: row => row.stock,
           cellExport: row => row.stock,
           sortable: true,
           right: true,
           compact: true
        },
        {
           name: 'Disc Pct',
           selector: row => row.discountPercentage,
           cellExport: row => row.discountPercentage,
           sortable: true,
           right: true,
           compact: true
        },
        {
           name: 'Category',
           selector: row => row.category,
           cellExport: row => row.category,
           sortable: true
        },
        {
           cell: (row: object, index: number, column: object, id: string) => {
              return <Button onClick={() => showModal('update', row)} size='sm'> Detail </Button>
           },
           button: true
        }
     ];

    const { data: products, isError, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    });
    

     if ( isError && error instanceof Error ) return <p> { error.message }</p> 

    return (
        <MyDatatable
            columns={columns}
            data={products}
            pagination
            isLoading={isLoading}
            selectableRows
            selectableRowsHighlight={true}
        />
    )
}

export default ProductList