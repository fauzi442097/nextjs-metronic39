import React from 'react'
import ToastMessage from './ToastMessage';
import { useToasterStore } from '@/stores/toaster';

const ToastContainer = () => {

    const messages = useToasterStore(state => state.messages);
    const remove = useToasterStore(state => state.removeMessage);

  return (
    <div
        style={{ 
            zIndex: '9999',
            margin: '20px'
         }} 
        className='position-absolute top-0 end-0'>
        {
            messages.map(({ context, title, message, id }) => (
                <ToastMessage 
                    onClose={() => remove(id)}
                    title={title}
                    key={message} 
                    context={context}
                    message={message}
                />
            ))
        }
    </div>
  )
}

export default ToastContainer