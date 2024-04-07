import { useState, useEffect } from 'react';

const RandomQuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleNewQuote = () => {
        fetchQuote();
    };

    return (
        <div id="quote-box" className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <div id="text" className="mb-3">{quote}</div>
                <div id="author" className="text-end">- {author}</div>
                <div className="d-flex justify-content-between mt-4">
                    <button id="new-quote" className="btn btn-primary" onClick={handleNewQuote}>New Quote</button>
                    <a id="tweet-quote" className="btn btn-primary" href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
                </div>
            </div>
        </div>
    );
};

export default RandomQuoteMachine;
