import { useEffect, useState } from "react"
import init, { get_word_distances_sorted } from "./pkg"

export const useSearchWord = (CSVPath: string) => {
  const [csv, setCSV] = useState<string>("");
  useEffect(() => {
    fetch(CSVPath).then(v => v.text()).then(s => setCSV(s));
    init()
  }, [])

  const searchByWord = (q: string) => {
    const { words, distances } = get_word_distances_sorted(q, csv);

    return words.map((w: string, i: number) => { return { word: w, distance: distances[i] } })
  }

  return { searchByWord }
}