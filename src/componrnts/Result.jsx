import React from 'react'

const Result = ({ word, meaning }) => {
    return (
        <div className='p-5'>
            {
                word === ''
                    ? <h1 className='text-2xl md:text-4xl font-bold text-center pt-5'>Enter a word to get its meaning</h1> :
                    <div className='flex justify-between flex-col sm:flex-row gap-5'>
                        <div className='w-full bg-gray-100 p-5 rounded-xl'>
                            <div className='flex justify-between'>
                                <h2 className='text-2xl font-bold'>
                                    Meaning Of : {word}
                                </h2>
                                <p className='text-lg'>
                                    {

                                    }
                                </p>
                            </div>
                            <p className='text-lg'>
                                {
                                    meaning.map((item, index) => {
                                        return (
                                            <p key={index} className='border-2 border-indigo-900 p-2 rounded-lg my-3'>
                                                {/* {item.sourceUrls[0]} */}
                                                {
                                                    item.phonetics.map((item, index) => {
                                                        return (
                                                            <span key={index} className='text-lg font-bold flex items-center gap-5'>
                                                                {item.text}
                                                                <audio src={item.audio} controls></audio>
                                                                <a href={item.sourceUrl}>
                                                                    
                                                                </a>
                                                            </span>
                                                        )
                                                    })
                                                }
                                                {
                                                    item.meanings.map((item, index) => {
                                                        return (
                                                            <p key={index} className=''>
                                                                <h2 className='bg-indigo-600 text-white pt-1'>
                                                                    <span className="text-lg font-bold">
                                                                        Part of Speech: &nbsp;
                                                                    </span>
                                                                    <span>
                                                                        {item.partOfSpeech}
                                                                    </span>
                                                                </h2>
                                                                {
                                                                    item.antonyms.length > 0 &&
                                                                    <p className='bg-indigo-500 pt-1'>
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
                                                                    </p>
                                                                }
                                                                {
                                                                    item.synonyms.length > 0 &&
                                                                    <p className='bg-indigo-400 pt-1'>
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
                                                                    </p>
                                                                }
                                                                {
                                                                    item.definitions.map((item, index) => {
                                                                        return (
                                                                            <p key={index} className='bg-indigo-300 pt-1'>
                                                                                <span className='font-bold text-lg'>Meaning {index + 1}:</span> {item.definition}
                                                                                {
                                                                                    item.example &&
                                                                                    <p className='bg-indigo-200 pt-1'>
                                                                                        <span className="text-lg font-bold">
                                                                                            Example: &nbsp;
                                                                                        </span>
                                                                                        <span>
                                                                                            {item.example}
                                                                                        </span>
                                                                                    </p>
                                                                                }
                                                                            </p>
                                                                        )
                                                                    })
                                                                }
                                                            </p>
                                                        )
                                                    })
                                                }
                                            </p>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Result
