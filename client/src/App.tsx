import { useState } from 'react'
import { gql, useLazyQuery } from "@apollo/client";
import TelephoneGrid from "./components/TelephoneGrid";
import { useEffect } from 'react';

const WORDS_QUERY = gql`
query {
    phoneInputToWords(numberInput: "123")
}
`;

function App() {

  const [ loadWords, { called, loading, data } ]  = useLazyQuery(WORDS_QUERY, { variables: { language: "english" } });
 
  const [ bestGuess, setBestGuess] = useState("");
  const [ otherGuesses, setOtherGuesses ] = useState(["babbo", "sbdff", "sdssc"]);

  useEffect(() => {
    loadWords()
  }, []);

  useEffect(() => {
    if(data) setBestGuess(data.phoneInputToWords[0]);
  }, [ data ])

  return (
    <div className="bg-primary w-screen h-screen flex flex-col text-main-text justify-around items-center">
    <div className="mt-[100px]">
    <div className="h1 text-[42pt] m-5 mx-0 text-center font-black">{ bestGuess }</div>
    <div className="flex flex-row justify-between">{ 
          otherGuesses.map((g) => <div className="w-1/3 text-center">{g}</div>) 
    }</div>
    </div>
    <TelephoneGrid />
    
    </div>
  )
}

export default App;
