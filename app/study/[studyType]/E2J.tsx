export const E2J = () => {
  const questionNumList: number[] = [
    10, 20, 30, 40, 50, 100, 150, 200, 300, 400, 500,
  ];

  const selectItemJSX: JSX.Element[] = [
      <label
        key='1'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select
            name='range'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label
        key='2'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select
            name='num'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            {questionNumList.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
            <option key='all' value='-1'>
              全て(約1000~7000問)
            </option>
          </select>
        </div>
      </label>,
    ]
  return <>{selectItemJSX.map((item) => item)}</>;
};
