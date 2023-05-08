import Button from '@/components/Button';
import MyDatatable from '@/components/datatable/MyDatatable';
import { useMyAlert } from '@/hooks/useMyAlert';
import { useMyToast } from '@/hooks/useMyToast';
import userService from '@/services/userService';
import { APIRequest } from '@/utils/apiHelper';
import { hideLoadingForm, showLoadingForm } from '@/utils/globalHelper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

type UserListProps = {
    showModal: (action: string, row: any) => void;
}

const useUsersQuery = () => {
    const result = useQuery({
        queryKey: ['users'],
        queryFn: userService.getUsers
    });

    return { ...result }
}

const UserList = ({ showModal } : UserListProps) => {

    const myAlert = useMyAlert();
    const myToast = useMyToast();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ['users', 'delete'],
        mutationFn: (user_id: string) => APIRequest.DELETE('users/' + user_id),
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({queryKey: ['users']});
            myAlert.clear();
            myToast.success('Data berhasil dihapus');
        },
        onError(error, variables, context) {
            hideLoadingForm('btn-confirm-alert');
            alert('Terjadi kesalahan pada server');
        },
        onSettled(data, error, variables, context) {
            hideLoadingForm('btn-confirm-alert');
        },
    });


    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            cellExport: row => row.id,
            sortable: true
        },
        {
            name: 'Nama',
            selector: row => row.name,
            cellExport: row => row.name,
            sortable: true
        },
        {
           name: 'Email',
           selector: row => row.email,
           cellExport: row => row.email,
           sortable: true,
           compact: true
        },
        {
           cell: (row: object, index: number, column: object, id: string) => {
              return (
                <>
                    <Button className="me-2" onClick={() => showModal('update', row)} size='sm'> Edit </Button>
                    <Button variant='danger' onClick={() => confirmDeleteUser(row.id)} size='sm'> Hapus </Button>
                </>
              )
           },
           width: '150px',
           button: true
        }
     ];

     const { data:users, isError, error, isLoading } = useUsersQuery();

    const confirmDeleteUser = (user_id: string) => {
        myAlert.confirm({
            type: 'error',
            title: 'Hapus data',
            message: 'Hapus data user ini?',
            labelSubmit: 'Hapus',
            onSubmit: () => deleteUser(user_id),
        });
    }
    
    const deleteUser = (user_id: string) => {
        showLoadingForm('btn-confirm-alert');
        mutation.mutate(user_id);
    }
    
     if ( isError && error instanceof Error ) return <p> { error.message }</p> 

    return (
        <MyDatatable
            columns={columns}
            data={users}
            pagination
            isLoading={isLoading}
            selectableRows
            selectableRowsHighlight={true}
        />
    )
}

export default UserList