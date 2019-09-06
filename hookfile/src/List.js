import React, { useEffect } from 'react';

function List() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！List页面')
  }, [])

  return <h2>List-Page</h2>;
}

export default List;
