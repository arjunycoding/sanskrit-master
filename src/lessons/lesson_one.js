import React from "react"
import LetterBtn from "./letter_button";
import consonants from "../consonants";
import vowels from "../vowels";
export default function LessonOne() {

    return (
        <div>
            <h1>Lesson 1: Vowels & Consonants</h1>
            <p>In this lesson you will learn how to write and say all of the vowels and consonants</p>
            <h3>Vowels:</h3>
            {vowels.map(letter => (
                <LetterBtn key={letter.letter} symbol={letter.letter} audio_file={letter.fileName} />
            ))}
            <h3>Consonants:</h3>
            {consonants.map(letter => (
                <LetterBtn key={letter.letter} symbol={letter.letter} audio_file={letter.fileName} />
            ))}
        </div>
    )
}