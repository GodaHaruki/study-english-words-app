import { ReactNode } from "react"

type Word = {
    word: string,
    mean: string,
}

type StudyComponent = ({word}: {word: Word}) => ReactNode
