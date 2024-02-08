import { Input, Select, SelectItem } from "@nextui-org/react";
import languages from './languages.js';


const InputBox = ({ word, lang, setWord, setLang }) => {
    return (
        <div className='flex justify-between flex-col sm:flex-row p-5 gap-5'>
            <Input
                type="text"
                label="Type your word here"
                labelPlacement="inside"
                className='w-full sm:w-1/3 my-5 bg-transparent m-0 '
                variant='underlined'
                size='lg'
                value={word}
                onChange={(e) => setWord(e.target.value)}
                description="Type the word you want to search for."
                style={{fontSize: '1.5rem'}}
            />
            <Select
                label="Select Language"
                labelPlacement="inside"
                className='w-full sm:w-1/3 my-5 bg-transparent m-0'
                variant='underlined'
                size='lg'
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                description="Select the language of the word you want to search for."
                selectedKeys={[lang]}
            >
                {
                    languages.map((language) => (
                        <SelectItem key={language.label} value={language.label}>
                            {language.value}
                        </SelectItem>
                    ))
                }
            </Select>

        </div>
    )
}

export default InputBox
