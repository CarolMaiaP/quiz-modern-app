import { createContext, useReducer} from "react";
import techQuestions from '../data/techQuestion'
import sportQuestions from '../data/sportQuestion'
import musicQuestions from '../data/musicQuestion'

const STAGES = ["start", "playing", "end"]
let questions = sportQuestions || techQuestions

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
        gameStage: STAGES[1],
      };

    case "TECH_QUIZ":
      return{
        ...state,
        answerSelected: false,
        currentQuestion: 0,
        score: 0,
        questions: techQuestions,
      };

    case "SPORT_QUIZ":
      return{
        ...state,
        answerSelected: false,
        currentQuestion: 0,
        score: 0,
        questions: sportQuestions,
      };

    case "MUSIC_QUIZ":
    return{
      ...state,
      answerSelected: false,
      currentQuestion: 0,
      score: 0,
      questions: musicQuestions,
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