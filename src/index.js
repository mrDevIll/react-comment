import React from 'react';
import ReacDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="#" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="authoer">
                        Luc
                    </a>
                    <div className="metadate">
                        <span className="date"> Today at 6.00PM</span>
                    </div>
                    <div className="text"> first comment</div>    
                </div>
            </div>
        </div>
    )
};

ReacDOM.render(
    <App />,
    document.querySelector('#root')
    );