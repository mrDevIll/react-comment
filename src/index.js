import React from 'react';
import ReacDOM from 'react-dom';
import CommentDetail from './component/CommentDetail';
import ApprovalCard from './component/ApprovalCard';

import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author = "Sam" 
                timeAgo="Today at 4.50PM" 
                imageAvatar={faker.image.avatar()} 
                commentText = "This Blog is awesome!!" 
                />
            </ApprovalCard>            

            <ApprovalCard>
            <CommentDetail 
                author = "Jack"
                timeAgo="Today at 1.50PM" 
                imageAvatar={faker.image.avatar()}  
                commentText = "thanks for the tip!!" 
                />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author = "Linda"
                timeAgo="Today at 2.30PM" 
                imageAvatar={faker.image.avatar()}  
                commentText = "Great Will wait for updates!" 
            />
            </ApprovalCard>

        </div>
    )
};

ReacDOM.render(
    <App />,
    document.querySelector('#root')
    );