import React from 'react'

const Result = ({ word, meaning }) => {
    return (
        <div className='p-5' >
            <div className='flex justify-between flex-col sm:flex-row gap-5'>
                <div className='w-full sm:w-1/2 bg-gray-100 p-5'>
                    <h2 className='text-2xl font-bold'>
                        {word}
                    </h2>
                    <p className='text-lg'>
                        {meaning[0]?.meanings[0]?.partOfSpeech} {meaning[0]?.phonetic}
                    </p>
                    <p className='text-lg'>
                        <audio src={meaning[0]?.phonetics[4]?.audio} controls></audio>
                    </p>
                </div>
                <div className='w-full sm:w-1/2 bg-gray-100 p-5'>
                    <h2 className='text-2xl font-bold'>
                        Meaning
                    </h2>
                    <p className='text-lg'>
                        A single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Result
