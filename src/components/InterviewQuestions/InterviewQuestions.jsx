/* eslint-disable no-unused-vars */
import React from 'react';
import './InterviewQuestions.css'

const InterviewQuestions = () => {
    return (
        <div>
            <h1 className='heading'>Interview Questions</h1>
            <ol className='questions'>
                <h5>1. How is react routing different from conventional routing?</h5>
                <h5>2. How do you implement React routing?</h5>
                <h5>3.  What is the purpose of context API in React?</h5>
                <h5>4. Can you explain how the Provider works with the React Context API?</h5>
                <h5>5. What is the custom hook?</h5>
                <h5>6. How many ways can we implement conditional rendering in React? Explain the ways.</h5>
            </ol>
        </div>
    );
};

export default InterviewQuestions;