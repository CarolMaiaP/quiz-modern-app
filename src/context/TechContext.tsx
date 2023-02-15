import { createContext, useReducer} from "react";
import questions from '../data/techQuestion'

const STAGES = ["start", "playing", "end"]

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
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

      return{
        ...state,
        currentQuestion: nextQuestion,
        answerSelected: false,
      };

    case "PREVIOUS_QUESTION":
      const previousQuestion = state.currentQuestion - 1;

      return{
        ...state,
        currentQuestion: previousQuestion
      };

    case  "CHECK_ANSWER":
      if(state.answerSelected) return state;

      const answer = action.payload.answer
      const option = action.payload.option
      let correctAnswer = 0 

      if(answer === option) correctAnswer = 1;

      return{
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
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