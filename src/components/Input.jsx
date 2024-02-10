import { Input } from "@nextui-org/react";


const InputBox = ({ word, setWord }) => {
    return (
        <div className='flex justify-center items-center p-5 gap-5'>
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
                style={{ fontSize: '1.5rem' }}
                autoFocus={true}
            />

        </div>
    )
}

export default InputBox
