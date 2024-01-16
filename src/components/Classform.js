import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Classform() {
    const [classInformation, setClassInformation] = useState([])
    const classList = useOutletContext();
    console.log(classList)

    // useEffect(() => {
    //     fetch(`https://www.dnd5eapi.co/api/classes/${nameOfClass.id}`)
    //         .then((r) => r.json())
    //         .then(setClassInformation)
    // }, [])

    const [formData, setFormData] = useState({
        characterClass: "",
        proficiencyOne: "",
        proficiencyTwo: "",
        proficiencyThree: "",
        proficiencyFour: "",
        equipmentOptionOne: "",
        equipmentOptionTwo: "",
        equipmentOptionThree: "",
        equipmentOptionFour: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // const arrayOfStrings = [formData.proficiencyOne, formData.answer2, formData.answer3, formData.answer4]
        const bodyReturn = {
            "characterClass": formData.characterClass
            // "prompt": formData.prompt,
            // "answers": arrayOfStrings,
            // "correctIndex": formData.correctIndex
        }
        console.log("BodyReturn: ", bodyReturn)
        console.log("Formdata: ", formData)
    }

    //         fetch("http://localhost:3001/party", {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(bodyReturn),
    //         })
    //           .then((r) => r.json())
    //           .then((newQuestion) => updateQuestionList(newQuestion));
    //       }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label>
                    Character Class:
                    <select
                        value={formData.characterClass}
                        name="characterClass"
                        onChange={handleChange}
                    >
                        {classList.map((selectableClass) => <option value={selectableClass.index} key={selectableClass.index}>{selectableClass.name}</option>)}
                        type="text"
                        name="characterClass"
                        value={formData.characterClass}
                        onChange={handleChange}
                    </select>
                </label>
                {/* 
        //         <label>
        //         proficiencyOne:
        //         <select>
        //             <option value={formData.answer1}></option>
        //             type=""
        //             name="answer1"
        //             value={}
        //             onChange={handleChange}
        //         </select>
        //         </label>
        //         <label>
        //         Answer 2:
        //         <input
        //             type="text"
        //             name="answer2"
        //             value={formData.answer2}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Answer 3:
        //         <input
        //             type="text"
        //             name="answer3"
        //             value={formData.answer3}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Answer 4:
        //         <input
        //             type="text"
        //             name="answer4"
        //             value={formData.answer4}
        //             onChange={handleChange}
        //         />
        //         </label>
        //         <label>
        //         Correct Answer:
        //         <select
        //             name="correctIndex"
        //             value={formData.correctIndex}
        //             onChange={handleChange}
        //         >
        //             <option value="0">{formData.answer1}</option>
        //             <option value="1">{formData.answer2}</option>
        //             <option value="2">{formData.answer3}</option>
        //             <option value="3">{formData.answer4}</option>
        //         </select>
        //         </label> */}
                <button type="submit" >Add Question</button>
            </form>
        </main>
    );
}

export default Classform;