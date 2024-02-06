import InputBox from "./componrnts/Input";
import Result from "./componrnts/Result";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState('');
  const [lang, setLang] = useState('en');

  const wordDetails = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
      console.log(response);
      setMeaning(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(meaning);

  useEffect(() => {
    wordDetails();
  }, [word, lang]);
  return (
    <main className="max-w-screen-lg m-auto min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-center pt-5">VocabVerse</h1>
      <h2 className="text-xl md:text-2xl font-bold text-center pt-2 pb-5">Get the meaning of any word in any language</h2>
      <InputBox
        lang={lang}
        setLang={setLang}
        word={word}
        setWord={setWord}
      />
      <Result
        word={word}
        meaning={meaning}
      />
    </main>
  )
}

export default App;
