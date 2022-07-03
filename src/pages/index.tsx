import {useRouter} from 'next/router';
import {useState} from 'react';

const HomePage = () => {
  const router = useRouter();
  const month = router.query.m;

  const [myState, setState] = useState({
    selectedMonth: null,
  });

  const handlers = {
    click: (eachMonth: number) => {
      setState({...myState, selectedMonth: eachMonth});
    },
  };

  return (
    <div className='text-blue-500 p-4'>
      <p>{month}</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((eachMonth, key) => (
        <div key={key}>
          <p
            className={`
              ${(eachMonth === myState.selectedMonth) ? 'bg-red-200' : ''}
            `}
            onClick={() => handlers.click(eachMonth)}
          >
            <a>{eachMonth}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
