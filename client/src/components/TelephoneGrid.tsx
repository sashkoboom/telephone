import GRID_DATA from '../dial_data';


export default function TelephoneGrid ({ onDial } : { onDial: Function }) {
  
  return (<div className="flex flex-row flex-wrap w-[400px] h-[300px]">
      { GRID_DATA.map(({ num, chars }) => (
          <div className="w-1/3 bg-white rounded-2xl flex flex-col cursor-pointer justify-center align-center border-solid border-2 border-secondary"
               onClick={ () => onDial(num) }
          >
              <div className="flex flex-row text-2xl font-bold justify-center">{ num }</div>
              <div className="flex flex-row justify-center">
                  { chars.map((ch) => (<div>{ch}</div>))}
          </div>
          </div>
      ))}
  </div>);
}




