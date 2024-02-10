import InputBox from "./components/Input";
import Result from "./components/Result";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState('');
  const [error, setError] = useState('')

  const wordDetails = async () => {
    try {
      if (word.trim()) {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        // console.log(response);
        setMeaning(response.data);
      } else {
        setMeaning('');
      }
    } catch (error) {
      // console.error(error);
      setError(error.response.data);
    }
  }

  useEffect(() => {
    if (word) {
      wordDetails();
    }
  }, [word]);

  return (
    <main className="max-w-screen-lg m-auto min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-center pt-5">VocabVerse</h1>
      <h2 className="text-xl md:text-2xl font-bold text-center pt-2 pb-5">Get the meaning of any word of English.</h2>
      <InputBox
        word={word}
        setWord={setWord}
      />
      {
        meaning && <Result word={word} meaning={meaning} error={error} />
      }
    </main>
  )
}

export default App;
