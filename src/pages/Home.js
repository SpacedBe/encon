import React from "react";
import Logo from "../assets/images/encon_logo.svg"
import SmallCTA from "../components/SmallCTA/SmallCTA";
import InsightCopyLeft from "../components/InsightCopyLeft/InsightCopyLeft";
import TextBlock from "../components/TextBlock/TextBlock";
import FullImage from "../components/FullImage/FullImage";
import InsightCopyRight from "../components/InsightCopyRight/InsightCopyRight";
import InsightDoubleImage from "../components/InsightDoubleImage/InsightDoubleImage";
import BigCTA from "../components/BigCTA/BigCTA";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div>
            <div className="bigContainer">
                <img className="logo" src={Logo}/>
            </div>

            <section className="smallContainer">
                <h1 className="green">Resultaten quick scan</h1>
                <p>Dankjewel voor het invullen van onze Duurzaamheidsbarometer quick scan. We hebben je antwoorden
                    vergeleken met die van 1.572 Vlamingen om te achterhalen of je antwoorden vanuit een bedrijfscontext
                    overeen komen met wat de Vlaming ook effectief wil of nodig heeft. </p>
                <br/>
                <p>Zelfs indien jullie rechtstreekse klant een bedrijf is, blijft het belangrijk om de noden van de
                    eindconsument in het oog te houden. Door de behoeften van de Vlaming te kennen weet je namelijk voor
                    welke uitdagingen jouw klanten staan en kan je je beter organiseren om hen te helpen deze
                    uitdagingen aan te grijpen. Een bedrijf dat namelijk in staat is om zijn klanten te ondersteunen bij
                    hun belangrijkste uitdagingen heeft een serieus voetje voor op de concurrentie.</p>
            </section>

            <SmallCTA
                image={"people.svg"}
                logoOne={"facebook.svg"}
                logoTwo={"linkedin.svg"}
                content={"Investeren in duurzaamheid doet bedrijven groeien én helpt onze planeet te beschermen. Is dat een inzicht dat je graag wil delen met je netwerk? Nodig dan snel collega’s en andere professionals uit om de Duurzaamheidsbarometer quick scan in te vullen en het voor zichzelf te ontdekken!"}></SmallCTA>

            <div className="smallContainer">
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
                                 imageNumber={"02"}/>
            </div>

            <TextBlock greyTitle={"Uitdagingen"}
                       greyContent={"Greenwashing komt ook voor binnen employer branding. (Potentiële) werkgevers die zich duurzamer voordoen dan ze zijn, worden doorprikt door hun (potentiële) werknemers. Anderzijds kan het lage vertrouwen ook liggen aan gebrekkige communicatie vanuit het bedrijf naar zijn werknemers toe: want die gaan niet altijd proactief de juiste informatie opzoeken."}
                       greenTitle={"Opportuniteiten"}
                       greenContent={"Duurzaamheid is belangrijk voor 83% van de werknemers en 78% van de sollicitanten, maar dan moeten ze wel de juiste informatie gecommuniceerd worden, want ze gaan er niet altijd zelf naar op zoek."}/>

            <div className="smallContainer">
                <FullImage imageNumber={"11"}></FullImage>
            </div>


            <div className="bigContainer">
                <InsightCopyRight title={"Het tweede inzicht"}
                                  content={"Je denkt dat de vlaming de verantwoordelijkheid voor milieuproblemen legt bij resultaat van bovenstaande vragenlijst en dat resultaat van bovenstaande vragenlijst duurzaamheid niet belangrijk vindt voor bedrijven." +
                                  "<br/> <br/>" + "De Vlaming vindt dat bedrijven hun verantwoordelijkheid moeten opnemen om milieuproblemen op te lossen. 39% vindt dat het zelfs vooral aan bedrijven is hierin het voortouw te nemen, boven bijvoorbeeld burgerbewegingen of politiek. Slechts een kleine 2-3% vindt het niet belangrijk dat bedrijven initiatieven ondernemen in het management van het bedrijf of bijvoorbeeld op gebied van water- en energieverbruik, vervoer van goederen, materiaalkeuze in de productie of verwerking van afval."}
                                  imageNumber={"10"}/>
            </div>

            <TextBlock greyTitle={"Uitdagingen"}
                       greyContent={"Greenwashing komt ook voor binnen employer branding. (Potentiële) werkgevers die zich duurzamer voordoen dan ze zijn, worden doorprikt door hun (potentiële) werknemers. Anderzijds kan het lage vertrouwen ook liggen aan gebrekkige communicatie vanuit het bedrijf naar zijn werknemers toe: want die gaan niet altijd proactief de juiste informatie opzoeken."}
                       greenTitle={"Opportuniteiten"}
                       greenContent={"Duurzaamheid is belangrijk voor 83% van de werknemers en 78% van de sollicitanten, maar dan moeten ze wel de juiste informatie gecommuniceerd worden, want ze gaan er niet altijd zelf naar op zoek."}/>

            <div className="bigContainer">
                <InsightDoubleImage title={"Het derde inzicht"}
                                    content={"Je denkt dat de Vlaming een resultaat van bovenstaande vragenlijst  geloof heeft in bedrijven of organisaties die zich als duurzaam voorstellen. Volgens jou gelooft de Vlaming dat bedrijven vooral duurzaam ondernemen om resultaat van bovenstaande vragenlijst. Je schat daarnaast in dat de Vlaming het resultaat van bovenstaande vragenlijst aanvaardbaar vindt dat bedrijven winst maken door duurzaam te ondernemen." +
                                    "<br/><br/>" +
                                    "Slechts 17% van de Vlaamse werknemers vindt het persoonlijk niet belangrijk dat zijn werkgever inzet op duurzaamheid. 29% vind het belangrijk genoeg dat het eventueel zou kunnen leiden tot veranderen van job." + "<br/><br/>" +
                                    "Werknemers geven zelf bovendien aan dat hun huidige werkgever niet helemaal inzet op duurzaamheid. 53% geeft een score van 0-6 aan hun huidige werkgever. 21% vindt bovendien dat het bedrijf waarvoor ze werken minder duurzaam is dan het naar de buitenwereld toe laat uitschijnen."}
                                    imageLeftNumber={"03"}
                                    imageRightNumber={"09"}/>
            </div>


            <TextBlock greyTitle={"Uitdagingen"}
                       greyContent={"Greenwashing komt ook voor binnen employer branding. (Potentiële) werkgevers die zich duurzamer voordoen dan ze zijn, worden doorprikt door hun (potentiële) werknemers. Anderzijds kan het lage vertrouwen ook liggen aan gebrekkige communicatie vanuit het bedrijf naar zijn werknemers toe: want die gaan niet altijd proactief de juiste informatie opzoeken."}
                       greenTitle={"Opportuniteiten"}
                       greenContent={"Duurzaamheid is belangrijk voor 83% van de werknemers en 78% van de sollicitanten, maar dan moeten ze wel de juiste informatie gecommuniceerd worden, want ze gaan er niet altijd zelf naar op zoek."}/>

            <div className="smallContainer">
                <FullImage imageNumber={"05"}></FullImage>
            </div>


            <BigCTA title={"Neem gerust contact op"}
                    content={"We hopen dat deze inzichten verhelderend waren en de nadruk konden leggen op het onontgonnen potentieel van duurzaamheid voor de groei van jouw organisatie. Voor een uitgebreidere toelichting van de mogelijke impact van een duurzaamheidsstrategie én het potentieel van de integratie hiervan met je bedrijfs- of merkimago, staat Encon voor je klaar."
                    + "<br/><br/>"
                    + "Neem gerust contact met ons op voor een vrijblijvend gesprek."
                    + "<br/><br/>" + "En als je de inzichten van deze Duurzaamheidsbarometer waardevol vindt, deel onze quick scan gerust met je collega’s of andere professionals. "}
                    logoOne={"facebook.svg"}
                    logoTwo={"linkedin.svg"}
                    cornerImage={"corner.png"}/>

            <Footer
                content={"De Duurzaamheidsbarometer – een initiatief van Encon. Voor meer informatie, contacteer ons via info@encon.be. Of surf naar www.encon.be"}
                copyright={"Algemene voorwaarden" + "© 2021 Encon"}></Footer>
        </div>
    );
}

export default Home;
