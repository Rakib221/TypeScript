import React, {memo} from 'react';

const Languages = ({languages}:{languages:Array<string>}) => {
    return (
        <div>
            <h3>Top 6 Languages:</h3>
            {(console.log("I am mounting!"),
                languages.map((language, index) => <p key={index}> {language} </p>))
            }
        </div>
    );
};

export default memo(Languages);