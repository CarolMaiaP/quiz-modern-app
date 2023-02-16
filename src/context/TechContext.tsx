import { createContext, ReactNode, Reducer, useReducer} from "react";
import techQuestions from '../data/techQuestion'
import sportQuestions from '../data/sportQuestion'
import musicQuestions from '../data/musicQuestion'

const STAGES = ["start", "playing", "end"]
let questions = sportQuestions || techQuestions || musicQuestions

const initialState:StateProps = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
}

export interface StateProps{
  gameStage: string;
  questions: {
      question: string;
      options: string[];
      answer: string;
  }[];
  currentQuestion: number;
  answerSelected: string | boolean | undefined;
  score: number;
}

export interface Action{
  type: string;
  payload?: { answer?: string, option?: string}
}

function quizReducer(state:StateProps, action:Action) {
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
      const previousAnswer = action.payload?.answer;

      console.log("previosanwer",previousAnswer)

      return{
        ...state,
        currentQuestion: previousQuestion,
        answerSelected: previousAnswer,
      };

    case  "CHECK_ANSWER":
      if(state.answerSelected) return state;

      const answer = action.payload?.answer
      const option = action.payload?.option
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

export const QuizContext = createContext<[StateProps, React.Dispatch<Action>]>([initialState, () => null]);


interface childrenProps{
  children: ReactNode
}


export function QuizProvider ({ children }:childrenProps) {
  const value = useReducer<Reducer<StateProps, Action>>(quizReducer, initialState)

  return(
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}