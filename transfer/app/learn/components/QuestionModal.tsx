'use client';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { submitQuestion } from './actions/actions';
import { login } from '@/app/_lib/actions';

interface QuestionModalProps{
    question: string,
    answers: string[],
    correctAnswer: number,
    points: number,
}

const QuestionModal = (
{question, answers, correctAnswer, points} : 
QuestionModalProps

) => {

    const [state, formAction] = useFormState<any, FormData>(submitQuestion, undefined);
    const [selectedAnswer, setSelectedAnswer] = useState< number | null>(null);


    return<>
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', width: '300px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>{question}</h2>
            <form action={formAction}>
            {answers.map((answer, index) => {
                return (<input
                    key={index}
                    type="button"
                    value={answer}
                    onClick={() => setSelectedAnswer(index)}
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        margin: '10px 0',
                        backgroundColor: selectedAnswer === index ? '#007BFF' : '#FFF',
                        color: selectedAnswer === index ? '#FFF' : '#000',
                        border: '1px solid #007BFF',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        ':hover': {
                            backgroundColor: '#007BFF',
                            color: '#FFF',
                        }
                    }}
                />)
            })}
            <input type='hidden' value={points} name='points'/>
            <input type='hidden' value={correctAnswer} name='correctAnswer'/>
            <input type="hidden" value={selectedAnswer ?? ""} name='selectedAnswer'/>
           <input type="submit" value="Try Answer"
    className="
        block w-full py-2 my-2 bg-white text-black border border-blue-500 rounded cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white
    "/>
        {state?.response && <p className="text-red-500 text-sm mt-2">{state.response}</p>}
            </form>
        </div>
    </>
}



export default QuestionModal;