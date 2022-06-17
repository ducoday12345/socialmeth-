import React from 'react';
import { Oval } from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
        <Oval
            type="Oval"
            color="#00BFFF"
            secondaryColor="red"
            height={60}
            //width={1000}
            className="m-5"        
        />
        <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;