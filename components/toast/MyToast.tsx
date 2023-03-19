import React from 'react'
import { useToasterStore } from '@/stores/toaster';
import { AnimatePresence } from 'framer-motion';
import ToastContent from './ToastContent';

const MyToast = () => {

    const messages = useToasterStore(state => state.messages);
    const remove = useToasterStore(state => state.removeMessage);

  return (
    <div
        style={{ 
            zIndex: '9999',
            margin: '20px',
         }} 
        className='position-fixed top-0 end-0'>
        <AnimatePresence>
            {
                messages.map(({ context, title, message, id }) => (
                    <ToastContent 
                        onClose={() => remove(id)}
                        title={title}
                        key={id} 
                        context={context}
                        message={message}
                    />
                ))
            }
        </AnimatePresence>
    </div>
  )
}

export default MyToast