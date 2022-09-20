import React from 'react';

type PropsFunction = {
    value: string;
    change?: (e:React.ChangeEvent<HTMLButtonElement>) => void;
  };

const REfForward = React.forwardRef<HTMLInputElement,PropsFunction>((props,ref)=>{
    return(
        <div>
            <input ref={ref} {...props} type="text" />
        </div>
    )
})

REfForward.displayName = "MD Rakib Hasan";

export default REfForward;