import React, { useEffect } from 'react';

function Indexk() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！Index页面');
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  }, [])

  return <h2>JSPang.com</h2>
}

export default Indexk;
