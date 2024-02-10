import React from 'react'

const Result = ({ word, meaning, error }) => {
    {
        if (error) {
            return (
                <div className='bg-gray-100 p-5 rounded-xl m-3'>
                    <p className='text-xl md:text-2xl font-bold text-center'>{error.title}</p>
                    <p className='text-lg text-center'>{error.message}</p>
                    <p className='text-lg text-center'>{error.resolution}</p>
                </div>
            )
        }
    }
    return (
        <div className='p-5'>
            {
                word === ''
                    ? <h1 className='text-2xl md:text-4xl font-bold text-center pt-5'>Enter a word to get its meaning</h1> :
                    <div className='flex justify-between flex-col sm:flex-row gap-5'>
                        <div className='w-full bg-gray-100 p-5 rounded-xl max-h-96 overflow-y-scroll'>
                            <div className='flex justify-between'>
                                <h2 className='text-2xl font-bold'>
                                    Meaning Of : {word}
                                </h2>
                            </div>
                            <div className='text-lg'>
                                {
                                    meaning.map((item, index) => {
                                        return (
                                            <div key={index} className='border-2 border-indigo-900 p-2 rounded-lg my-3'>
                                                {
                                                    item.meanings.map((item, index) => {
                                                        return (
                                                            <div key={index} className=''>
                                                                <p className='bg-indigo-600 text-white p-1'>
                                                                    <span className="text-lg font-bold">
                                                                        Part of Speech: &nbsp;
                                                                    </span>
                                                                    <span>
                                                                        {item.partOfSpeech}
                                                                    </span>
                                                                </p>
                                                                {
                                                                    item.antonyms.length > 0 &&
                                                                    <div className='bg-indigo-500 p-1'>
                                                                        <span className="text-lg font-bold">
                                                                            Antonyms: &nbsp;
                                                                        </span>
                                                                        <span>
                                                                            {
                                                                                item.antonyms.map((item, index) => {
                                                                                    return <span key={index}>{item}, &nbsp;</span>
                                                                                })
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.synonyms.length > 0 &&
                                                                    <div className='bg-indigo-400 p-1'>
                                                                        <span className="text-lg font-bold">
                                                                            Synonyms: &nbsp;
                                                                        </span>
                                                                        <span>
                                                                            {
                                                                                item.synonyms.map((item, index) => {
                                                                                    return <span key={index}>{item}, &nbsp;</span>
                                                                                })
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.definitions.map((item, index) => {
                                                                        return (
                                                                            <div key={index} className='bg-indigo-300 pt-1'>
                                                                                <span className='font-bold text-lg pl-1'>Meaning {index + 1}:</span> {item.definition}
                                                                                {
                                                                                    item.example &&
                                                                                    <p className='bg-indigo-200 p-1'>
                                                                                        <span className="text-lg font-bold">
                                                                                            Example: &nbsp;
                                                                                        </span>
                                                                                        <span>
                                                                                            {item.example}
                                                                                        </span>
                                                                                    </p>
                                                                                }
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Result
