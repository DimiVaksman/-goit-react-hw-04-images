import { ClipLoader } from 'react-spinners';
import React from 'react';

export const Spinner = props => {
  const style = { textAlign: 'center' };
  return (
    <div style={style}>
      <ClipLoader color={'#123abc'} loading={props.isFetching} />
    </div>
  );
};
