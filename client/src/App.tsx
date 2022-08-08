import { useState } from 'react'
import { gql, useLazyQuery } from "@apollo/client";
import TelephoneGrid from "./components/TelephoneGrid";
import { useEffect } from 'react';

const WORDS_QUERY = gql`
query Words ($dial: String!) {
  phoneInputToWords(numberInput: $dial)
}
`;

function App() {

  const [ dial, setDial ] = useState("");
  const [ loadWords, { data, loading } ]  = useLazyQuery(WORDS_QUERY, { variables: { dial }});  

  const [ bestGuess, setBestGuess] = useState("");
  const [ otherGuesses, setOtherGuesses ] = useState([]);

  useEffect(() => {
    loadWords();
  }, [ dial ]);
  
  useEffect(() => {
    if(data) {
        setBestGuess(data.phoneInputToWords[0]);
        setOtherGuesses(data.phoneInputToWords.slice(1, 20));
      }
  }, [ data ])

  return (
    <div className="bg-primary w-screen h-screen flex flex-col text-main-text justify-around items-center">
    <div className="text-md m-2 mx-0 text-center font-black">{ dial }</div>
    <div className="text-md m-2 mt-[20px] h-[20px] text-center font-black">{ loading ? 'loading...' : ''}</div>
    <div className="h1 text-[42pt] m-5 mx-0 mt-[100px] text-center font-black">{ bestGuess }</div>
    <div className="flex flex-row justify-center flex-wrap  w-full">{ 
          otherGuesses.map((g) => <span className="bg-secondary m-1 px-3 rounded-md">{g}</span>) 
    }{ data?.phoneInputToWords?.length > 20 ? <span className="bg-secondary m-1 px-3 rounded-md">...</span> : "" }
    </div>
    
    <TelephoneGrid onDial={(num : number) => setDial(`${ dial }${ num }`) } />
    </div>
  )
}

export default App;
