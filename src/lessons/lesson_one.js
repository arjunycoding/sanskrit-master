import React from "react"
import LetterBtn from "./letter_button";
import vowels from "../vowels";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"
export default function LessonOne() {
    const [current_letter, set_current_letter] = React.useState(false)
    return (
        <div className="lesson">
            Similar to the English language,  Sanskrit also has vowels and consonants. Click on a vowel to look at it more in detail. Click on the huge letter to hear it!
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={3}>
                        {vowels.map((letter) => {
                            return (<button className={current_letter.letter === letter.letter ? "selected_letter letter_button_select" : "letter_button_select"} key={letter.letter} onClick={() => {
                                set_current_letter(letter)
                                new Audio(letter.fileName).play()
                            }}>{letter.letter}</button>)
                        })}
                    </Col>
                    <Col>
                        {current_letter ?
                            <div onClick={() => { new Audio(current_letter.fileName).play() }} className="click_div">
                                <LetterBtn symbol={current_letter.letter} audio_file={current_letter.fileName} huge={true} />
                                <p className="none_selected">Click to play</p>
                            </div>
                            :
                            <p className="none_selected">-- Please Select A Letter -- </p>
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    )
}