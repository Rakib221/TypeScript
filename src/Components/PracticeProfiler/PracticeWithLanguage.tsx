import React, {useState,useEffect, Profiler} from 'react';
import Languages from './Languages';

const PracticeWithLanguage = () => {
    let topLang = ["JavaScript", "Python", "Rust", "TypeScript", "C++", "C"]
    const [languages, setLanaguages] = useState<Array<string>>([]);
    const [count, setCount] = useState(0);
    const dummyAPICall = () => setTimeout(() => setLanaguages(topLang), 5000)

    useEffect(() => {
        dummyAPICall();
    }, []);
    return (
        <div>
            {languages.length === 0 && <h2>Welcome!</h2>}
            {languages.length ? (
                <Profiler id = "languages" onRender = {(id, phase, actualDuration) => {console.log(id, phase, actualDuration)}}><Languages languages={languages} /></Profiler>
            ) : (
                <div className='text-warning text-center m-4'>
                    Loading languages...
                </div>
            )}
            <hr />
            <h4>{count}</h4>
            <button
                className='mb-3 btn btn-primary'
                onClick={() => setCount((count) => count + 1)}
            >
                Add count
            </button>
        </div>
    );
};

export default PracticeWithLanguage;