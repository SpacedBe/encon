import React from "react";
import TextBlock from "../components/TextBlock/TextBlock";
import InsightCopyLeft from "../components/InsightCopyLeft/InsightCopyLeft";
import '../index.scss'

function Library() {
    return (
        <div className="container">
            <h1>Library</h1>

            <h2>Insights</h2>
            <h3>Copy Left</h3>
            <InsightCopyLeft title={"Het eerste inzicht"}
                             content={"Je denkt dat de Vlaming een resultaat van bovenstaande vragenlijst  geloof heeft in bedrijven of organisaties die zich als duurzaam voorstellen. Volgens jou gelooft de Vlaming dat bedrijven vooral duurzaam ondernemen om resultaat van bovenstaande vragenlijst. Je schat daarnaast in dat de Vlaming het resultaat van bovenstaande vragenlijst   aanvaardbaar vindt dat bedrijven winst maken door duurzaam te ondernemen." +
                             "<br/> <br/>" +
                             "Slechts 17% van de Vlaamse werknemers vindt het persoonlijk niet belangrijk dat zijn werkgever inzet op duurzaamheid. 29% vind het belangrijk genoeg dat het eventueel zou kunnen leiden tot veranderen van job.\n" +
                             "Werknemers geven zelf bovendien aan dat hun huidige werkgever niet helemaal inzet op duurzaamheid. 53% geeft een score van 0-6 aan hun huidige werkgever. 21% vindt bovendien dat het bedrijf waarvoor ze werken minder duurzaam is dan het naar de buitenwereld toe laat uitschijnen." +
                             "<br/> <br/>" + "De Vlaming vindt volgende factoren belangrijk in zijn keuze om bij de huidige werkgever te blijven:" +
                             "<ul><li>Het management van het bedrijf is toegankelijk voor haar werknemers</li>" +
                             "<li>Het bedrijf biedt mogelijkheid aan personeel tot alternatief transport; Werkgever biedt duurzame mobiliteitsoplossingen aan in het loonpakket;</li>" +
                             "<li> Werknemers worden actief betrokken bij ontwikkelen van strategie en acties rond duurzaamheid. </li></ul>" +
                             "22% van de Vlaamse sollicitanten en 41% van de Vlaamse werknemers zochten ooit al proactief informatie op over de duurzaamheidsacties van hun (potentiële) werkgever."}
                             number={"02"}/>

            <h2>Text Block</h2>
            <TextBlock greyTitle={"Uitdagingen"}
                       greyContent={"Greenwashing komt ook voor binnen employer branding. (Potentiële) werkgevers die zich duurzamer voordoen dan ze zijn, worden doorprikt door hun (potentiële) werknemers. Anderzijds kan het lage vertrouwen ook liggen aan gebrekkige communicatie vanuit het bedrijf naar zijn werknemers toe: want die gaan niet altijd proactief de juiste informatie opzoeken."}
                       greenTitle={"Opportuniteiten"}
                       greenContent={"Duurzaamheid is belangrijk voor 83% van de werknemers en 78% van de sollicitanten, maar dan moeten ze wel de juiste informatie gecommuniceerd worden, want ze gaan er niet altijd zelf naar op zoek."}/>
        </div>
    );
}

export default Library;
