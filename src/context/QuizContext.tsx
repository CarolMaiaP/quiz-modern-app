import { createContext, useReducer } from "react";
import questions from '../data/techQuestion'

const STAGES = ["start", "playing", "end"]

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
}

function quizReducer(state:any, action:any) {
  switch(action.type){
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1]
      };

    case "NEXT_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endQuiz = false;
      
      if(!questions[nextQuestion]){
        endQuiz = true
      }

      return{
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endQuiz ? STAGES[2] : state.gameStage,
      };

    default:
      return state;
  }
}

export const QuizContext = createContext({});

export function QuizProvider ({ children }:any) {
  const value = useReducer(quizReducer, initialState)

  return(
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}