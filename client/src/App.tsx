import { gql, useLazyQuery } from "@apollo/client";
import './App.css';

const WORDS_QUERY = gql`
query {
    phoneInputToWords(numberInput: "123456")
}
`;


function App() {
  const [ loadWords, { called, loading, data } ]  = useLazyQuery(WORDS_QUERY, { variables: { language: "english" } });
 
  if (called && loading) return <p>Loading ...</p>
  if (!called) {
    return <button onClick={() => loadWords()}>request words</button>
  }
  return <h1> {
    data.phoneInputToWords.map((word : string) => (<div>{word}</div>))}
    </h1>;
}

export default App;
