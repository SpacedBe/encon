import React from "react";
import TextBlock from "../components/TextBlock/Textblock";

function Library() {
    return (
        <div>
            <h1>Library</h1>

            <h2>Text Block</h2>
            <TextBlock greyTitle={"Uitdagingen"}
                       greyContent={"Greenwashing komt ook voor binnen employer branding. (Potentiële) werkgevers die zich duurzamer voordoen dan ze zijn, worden doorprikt door hun (potentiële) werknemers. Anderzijds kan het lage vertrouwen ook liggen aan gebrekkige communicatie vanuit het bedrijf naar zijn werknemers toe: want die gaan niet altijd proactief de juiste informatie opzoeken."}
                       greenTitle={"Opportuniteiten"}
                       greenContent={"Duurzaamheid is belangrijk voor 83% van de werknemers en 78% van de sollicitanten, maar dan moeten ze wel de juiste informatie gecommuniceerd worden, want ze gaan er niet altijd zelf naar op zoek."}/>
        </div>
    );
}

export default Library;
