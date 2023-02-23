

import React, {forwardRef} from 'react';


const CheckboxTable = forwardRef<HTMLInputElement>(({onClick, ...rest} : any, ref) => {
  return(
        <div className={`form-check form-check-custom form-check-sm`}>
            <input className="form-check-input" type="checkbox" 
                onClick={onClick}
                ref={ref} {...rest}/>
            <label className="form-check-label text-dark"> </label>
        </div>
    )
});


export default CheckboxTable;