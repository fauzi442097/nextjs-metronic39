import React from 'react'
import { AnimatePresence } from 'framer-motion'
import AlertMessage from './AlertContent'
import { IAlert, IAlertConfirm } from '@/utils/interfaces/IAlert';
import { useAlertStore } from '@/stores/alerts';

const MyAlert = () => {

  const messages = useAlertStore(state => state.messages);
  const remove = useAlertStore(state => state.removeAlert);

  const closeContainer = (id: string, callbackFunction: any) => {
    remove(id);
    if ( callbackFunction) callbackFunction();
  }

  return (
    <div
    style={{ 
        zIndex: '9999',
        margin: '20px',
     }} 
    className='position-fixed top-0 end-0'>
        <AnimatePresence>
          {
              messages.map((context: IAlert | IAlertConfirm) => (
                  <AlertMessage
                    key={context.id}
                    dialogType={context.dialogType}
                    context={context.type}
                    title={context.title}
                    message={context.message}
                    labelSubmit={(context as IAlertConfirm).labelSubmit}
                    labelCancel={(context as IAlertConfirm).labelCancel}
                    onSubmit={(context as IAlertConfirm).onSubmit}
                    onClose={() => closeContainer(context.id, context.onClose)}
                  />
              ))
            }
        </AnimatePresence>
      </div>
  )
}

export default MyAlert