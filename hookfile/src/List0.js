import React, { useEffect } from 'react';

function List0(props) {
  const { clickHandle } = props;
  useEffect(() => {
    console.log('我是测试的...List0')
  }, [])

  return (
    <div>
      <h2 onClick={() => clickHandle('99')}>我是测试的...</h2>
    </div>
  )
}

export default List0;
