import { ExamSection, WritingTopic, SpeakingPart } from '../types';

export const EXAM_SECTIONS: ExamSection[] = [
  {
    id: 'lv1',
    title: 'Leseverstehen // Teil 1',
    shortCode: 'LV1',
    module: 'Leseverstehen',
    timeLimitMinutes: 25,
    description: 'Lesen Sie zuerst die zehn Überschriften (a–j). Lesen Sie dann die fünf Texte (1–5) und entscheiden Sie, welche Überschrift am besten passt.',
    contextType: 'texts',
    contextData: [
      { id: 'a', text: 'Schaden an Kreuzfahrtschiff verhindert Weiterfahrt' },
      { id: 'b', text: 'Bäder, Seen und Natur – im hessischen Paradies' },
      { id: 'c', text: 'Freiheit und Natur – nach sechs Wochen harter Arbeit' },
      { id: 'd', text: 'Jugendliche arbeiten für Jugendliche' },
      { id: 'e', text: 'Aus der Stadt an die See – sichere Strände für Urlauber' },
      { id: 'f', text: 'Urlaub an deutschen Seen immer gefährlicher' },
      { id: 'g', text: 'Kinderarbeit in Deutschland: Jugendliche werden zur Arbeit gezwungen' },
      { id: 'h', text: 'Nach harter Arbeit durch nordische Gewässer' },
      { id: 'i', text: 'Zu Gast bei den Fürsten' },
      { id: 'j', text: 'Wegen Niedrigwasser: vom Fluss auf die Straße' }
    ],
    items: [
      {
        n: 1,
        text: 'Text 1: Entdecken Sie interessante Städte und Regionen. Im Herzen Deutschlands liegen wunderbare Landschaften, mit einem für deutsche Verhältnisse sehr milden Klima – und keine typischen „Touristenziele“. Von der netten Stadt Gießen ausgehend kann man in den hessischen Kreisen Bergstraße und Waldeck-Frankenberg noch viele Orte entdecken, die noch ein Geheimtipp sind.\n\nVor allem gilt dies für den Kreis Waldeck-Frankenberg. Wer nicht gerade in Hessen wohnt, wird kaum eine Ahnung haben, wo diese Region eigentlich liegt. Es ist ein herrliches Stück Deutschland ohne besonders große Städte, eine Gegend, die Natur pur bietet. Daher wundert es nicht, dass man hier einige Kurorte findet wie Bad Arolsen oder Bad Wildungen oder den Luftkurort Edertal-Kleinern. Apropos Edertal: Der zwölf Quadratkilometer große Edersee gehört zu den vier schönen „blauen Augen“ des Kreises.\n\nDer Landkreis Waldeck-Frankenberg ist Hessens attraktivstes Umland. In der Region der Berge und Seen spürt man auch heute noch einen Hauch von Fürstlichkeit: Majestätisch erhebt sich über dem Edersee das Schloss Waldeck. Auch in Bad Arolsen, einer ehemaligen Residenzstadt, ist vieles noch vom früheren Adel geprägt. Unbedingt besuchen sollte man darüber hinaus das 1000-jährige Korbach wie auch die Fachwerkstadt Frankenberg mit ihren vielen romantischen Ecken.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'b',
        explanation: 'Überschrift b ("Bäder, Seen und Natur – im hessischen Paradies") fasst die Kurorte, den Edersee und die Natur in Hessen exakt zusammen.'
      },
      {
        n: 2,
        text: 'Text 2: Pferde waren schon immer Melanie Schilles große Leidenschaft. „Und jetzt kann ich Hobby und Beruf miteinander verbinden“, freut sich die junge Beamtin aus Hannover. In diesem Jahr verstärkt sie die Strandwache an der Nordseeküste. Ihr Arbeitsplatz ist der Strand: Mit „Magnus“, einem 11-jährigen Pferd, patrouilliert sie dort, wo die Kleinen Sandburgen bauen, Urlauber bei einem Buch entspannen oder sich wagemutig in die kühlen Fluten stürzen. Melanie Schille und ihr brauner Hannoveraner sind zweifellos eine Attraktion in dem Ferienort. Immer wieder wollen Gäste das Tier streicheln, von der Polizistin wissen, was sie hier macht.\n\n„Wir sorgen für mehr Sicherheit am Strand“, erklären Melanie Schille und Rüdiger Teichmann (42). Sie suchen im Watt nach vermissten Kindern, klären über Gefahren auf, verhindern Diebstähle und Sachbeschädigungen. Nachweislich gingen die Delikte zurück, seit es die Streife hoch zu Ross gibt. Die Polizisten: „Wir sind in dem unwegsamen Gelände oft schneller am Einsatzort als die Kollegen per Fahrrad oder mit dem Auto. Außerdem schonen wir die Natur.“\n\nFür sich persönlich sieht Melanie Schille noch einen großen Vorteil: „Es ist schön, mal keine Demonstration sichern zu müssen, stattdessen genieße ich die frische Luft mit fröhlichen Urlaubern.“ Nur eins vermisst die 22-Jährige, die mit Polizeipferd „Magnus“ auf einem Bauernhof Quartier bezogen hat, während ihres sechswöchigen Einsatzes: Freund Robert (23). Er fährt als Polizist in Hannover Streife – und wartet auf sie.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'e',
        explanation: 'Überschrift e ("Aus der Stadt an die See – sichere Strände für Urlauber") beschreibt die Beamtin aus der Stadt Hannover, die für Strandsicherheit sorgt.'
      },
      {
        n: 3,
        text: 'Text 3: Ein neuer Urlaubstrend setzt sich durch: Statt faul am Strand zu liegen, wird man aktiv. Besonders beliebt als Ziel ist Schweden am Ufer des Flusses Klarälven in der Provinz Värmland. In drei bis sechs Stunden baut man hier selbst ein Floß und macht anschließend darauf Urlaub. „Das ist Abenteuerurlaub pur“, schwärmt Urlauber Johan Bengtson (37), der mit seiner Frau Kari (38) und den drei Kindern Martin (13), Elfrida (11) und Peter (8) zum zweiten Mal Floßferien macht: „Wir fühlen uns wie Huckleberry Finn und Tom Sawyer. Sich auf dem Fluss treiben lassen und in der Wildnis leben – dieses Gefühl ist nicht zu überbieten!“ Seit zehn Jahren veranstaltet Marie Junler (35) von der Agentur Vildmark i Värmland die Holzfloßtrips: „In der ersten Saison kamen 200 Gäste, darunter 40 Deutsche.“ In der letzten Saison waren es schon 1700, darunter 500 Deutsche, die diesen unvergleichlichen Natururlaub für einen Tag oder eine ganze Woche buchten.\n\nWir haben die Bengtsons an ihrem ersten Urlaubstag begleitet, auch dabei: Veranstalterin Marie Junler, die der Familie hilft, das Floß zu bauen. Es ist ein herrlicher Sonnentag. In einer sanften Kurve des 270 Kilometer langen Flusses Klarälven nahe dem Dorf Branäs in Mittelschweden steht Marie bis zu den Hüften im tiefblauen Wasser. Mit fingerdicken grünen Seilen schnürt sie Holzstämme zusammen. Laut schallen ihre Kommandos zu Johan und seiner Familie hinüber: „Einer hält den Stamm, der andere knotet – den Seemannsknoten, wie wir ihn vorhin an Land geübt haben.“ Ohne einen Nagel werden 96 Baumstämme verzurrt – im Wasser, sonst wäre das Holz zu schwer. Mindestens zwei Erwachsene sind nötig, um ein Floß zu bauen – einer allein packt’s nicht. Nach drei Stunden ist es geschafft: Das Urlaubsparadies der Bengtsons – es misst übrigens 6 mal 3 Meter und wiegt stattliche 2 Tonnen – treibt am Ufer. Noch schnell das Sonnenzelt befestigen, darunter Vorratskasten, Frischwassertank, Chemie-Klo, Küchenausrüstung, Zelt, Rettungsring, Schwimmwesten, Notruf-Telefonnummer und das Paddel zum Steuern und Manövrieren verstauen – und ab geht’s.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'h',
        explanation: 'Überschrift h ("Nach harter Arbeit durch nordische Gewässer") beschreibt den mühsamen dreistündigen Floßbau und die anschließende Fahrt auf schwedischen Gewässern.'
      },
      {
        n: 4,
        text: 'Text 4: Von 9 bis 15 Uhr arbeitet Sebastian Keller (18) in einem Altenwohnheim in Hamburg-Altona: Er kümmert sich um die Essensausgabe, putzt anschließend die Küche und dann ist noch Zeit, um den Älteren etwas vorzulesen oder mit ihnen Karten zu spielen. Zur gleichen Zeit putzen Rebecca (12) und Christiane (13) den Eingang des Hamburger „Michels“, der wohl bekanntesten Kirche der Stadt, und Friderike (17) füttert schon früh morgens Kühe, Schweine und Hühner auf einem Bio-Bauernhof bei Wedel.\n\n„Endlich mal ein sinnvoller Job“, sagen die fünf übereinstimmend. Sie stehen stellvertretend für etwa 100.000 Jugendliche, die beim „Sozialen Tag“ mitgemacht haben. Hut ab! Und was mindestens ebenso beeindruckend ist: Der Verein „Hamburgs Schüler helfen“ (HSH) wurde von den Jugendlichen selbst im Jahr 2004 gegründet – und seitdem findet jedes Jahr im August der „Soziale Tag“ statt. Mit Behörden und Firmen haben Schüler aus Hamburg Verträge für einen Tag abgeschlossen. Die Schülerinnen und Schüler verdienen dann am „Sozialen Tag“ zwischen 6 und 8 Euro pro Stunde – aber nicht für sich selbst, sondern für andere. Denn der Verdienst wird jedes Jahr gespendet. Die Jugendlichen selbst wählen ein Projekt aus, an das sie die Gelder spenden wollen. Einzige Bedingung: Es muss ein Projekt sein, von dem Jugendliche profitieren. Im letzten Jahr zum Beispiel wurde die Gesamtsumme von 1,2 Millionen Euro an das Projekt „Frieden für alle“ gespendet. Ziel des Projekts ist es, Jugendliche in Kriegs- und Krisenregionen zu unterstützen, den Dialog unter Jugendlichen aus verschiedenen Ländern zu fördern und auch das Kennenlernen anderer Kulturen zu ermöglichen. So konnte von dem Geld, das der Verein HSH gespendet hat, eine internationale Online-Zeitschrift hergestellt werden, in der Jugendliche ihre Länder, kulturelle Besonderheiten oder auch ihre Sprache vorstellen konnten. Für Ralf Waldner (20) vom HSH steht fest: „Wir können und werden anderen auch in Zukunft helfen, das Engagement der Schülerinnen und Schüler in Hamburg ist in den letzten Jahren schließlich immer weiter gestiegen.“',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'd',
        explanation: 'Überschrift d ("Jugendliche arbeiten für Jugendliche") gibt das Prinzip des Sozialen Tages wieder: Schüler arbeiten für Jugendprojekte.'
      },
      {
        n: 5,
        text: 'Text 5: Die Windjacken waren schon eingepackt, die Koffer geschlossen. Thomas Meurer (64) und Wiebke Fuchs (62) aus Hannover freuten sich auf ihre Flusskreuzfahrt mit der „MS Eurostar“ von Potsdam nach Prag. Stattliche 2500 Euro kostete die Reise pro Person, und beide hatten lange gespart, um sich das leisten zu können. Doch aus der Kreuzfahrt wurde eine Bustour. Meurer berichtet, was er erlebt hat: „Wir waren am Abend auf das Schiff gegangen und hatten unsere Kabinen bezogen. Am nächsten Morgen ging es los. Aber schon bald machte das Schiff wieder fest und alle Gäste mussten von Bord.“ Wiebke Fuchs ergänzt: „Der Fluss hatte einfach zu wenig Wasser, da konnten wir mit dem großen Kreuzfahrtschiff nicht weiterfahren!“ Per Bus ging es nach Prag. Beide wollen nun einen Teil des Reisepreises zurück, aber der Veranstalter Hapag-Lloyd wehrt ab: „Das war höhere Gewalt, da kann man nichts machen.“',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'j',
        explanation: 'Überschrift j ("Wegen Niedrigwasser: vom Fluss auf die Straße") beschreibt die Umstellung vom Schiff auf den Bus wegen Wassermangels im Fluss.'
      }
    ]
  },
  {
    id: 'lv2',
    title: 'Leseverstehen // Teil 2',
    shortCode: 'LV2',
    module: 'Leseverstehen',
    timeLimitMinutes: 25,
    description: 'Lesen Sie die Artikel „Freizeitbegriff" und „Freizeitrituale" und wählen Sie die richtige Antwort (a, b oder c).',
    contextType: 'texts',
    contextData: [
      {
        id: 'Freizeitbegriff',
        title: 'Artikel 1: Freizeitbegriff',
        text: `Das Freizeitverständnis hat sich grundlegend gewandelt. Quantitativ und qualitativ unterscheidet sich die Freizeit heute von früheren Freizeitformen. Auch gegenwärtig findet Erholung von der Arbeit in der Freizeit statt, aber die Freizeit ist nicht mehr nur – wie in den fünfziger Jahren – Erholungszeit. Für die überwiegende Mehrheit der Bevölkerung hat die Freizeit einen eigenständigen Wert bekommen. So vertreten 70 % der Bevölkerung die Auffassung, dass Freizeit in erster Linie eine Zeit ist, in der man tun und lassen kann, was einem Spaß macht. Aus einem arbeitsabhängigen Zeitbegriff, der Freizeit negativ als Abwesenheit von Arbeit definierte, hat sich heute ein positives Freizeitverständnis entwickelt: Freizeit ist eine Zeit, in der man frei ist.

Über vierzig Jahre Arbeitszeitverkürzungen sind an den Menschen und ihrer Einstellung zum arbeitsfreien Teil des Lebens nicht spurlos vorübergegangen. Freizeit ist mehr als eine Pause, in der man sich für den nächsten Arbeitstag wieder erholt. Freizeit koppelt sich von der Arbeit ab: Nur für eine Minderheit der Bevölkerung ist Freizeit eine Zeit, die nicht mit Arbeit und Geldverdienen ausgefüllt ist (26 %). Dies gilt für Arbeiter (38 %) genauso wie für Angestellte (34 %) oder Selbständige (30 %). Bei Freizeit denken die meisten erst einmal an den eigenen Spaß. Freizeit ist daher mehr ein positives Lebensgefühl als eine arbeitsabhängige Zeitkategorie. Im subjektiven Empfinden der Menschen sind „arbeitsfreie Zeit“ und „Freizeit“ nicht mehr dasselbe. Mit dem Wandel des subjektiven Freizeitverständnisses ist auch eine gesellschaftliche Neubewertung der Freizeit notwendiger denn je.

Vor dem Hintergrund des wachsenden Anteils Nichterwerbstätiger lässt sich für die Zukunft unschwer prognostizieren: Freizeit verliert zunehmend ihre Bedeutung als arbeitsfreie Regenerationszeit. Umso mehr richten sich dann die Hoffnungen auf die Freizeit als Synonym für Lebensqualität und Wohlbefinden. Dies aber heißt: sich wohlfühlen, das tun und lassen können, was Spaß und Freude macht, und das Leben in eigener Regie gestalten sowie viel mit Familie und Freunden unternehmen.`
      },
      {
        id: 'Freizeitrituale',
        title: 'Artikel 2: Freizeitrituale',
        text: `Alles hat seine Regeln und Rituale, auch die Freizeit. Die Deutschen haben ihre Freizeit bestens organisiert: samstags auf die Piste und sonntags mit der Familie. Fast jeder dritte Bundesbürger reserviert regelmäßig einen Wochentag für Familie oder Ausgehen, für Sport oder Faulenzen. Mehr als 20 % kennen ebenfalls einen festen Termin für Hobby, Verein oder Besuche. Und selbst der Badetag ist für jeden vierten Deutschen nach wie vor ein Begriff.

Trotz kürzerer Arbeitszeiten konzentrieren sich die meisten Freizeittermine auf das lange Wochenende. Ausgehen und Besuche machen stehen ebenso auf dem Programm wie Faulenzen, Lesen oder sich dem Hobby widmen. So hat der Samstag für jeden dritten Bundesbürger seinen festen Platz als Hauptausgehtag. Den sonntäglichen Terminkalender bestimmen dann bei der Mehrheit der Befragten die beiden „F“: Faulenzen und Familie. Für viele wird damit der Sonntag zum Balanceakt zwischen eigener und gemeinsamer Freizeitgestaltung. Denn auch die Zweisamkeit darf nicht zu kurz kommen. Für sechs Prozent der Deutschen ist der siebte Tag der Woche ein „Schmusetag“.

Freizeitrituale, bisher kaum erforscht, hatten im Alltagsleben der Bevölkerung schon immer ihren festen Platz. Was als liebe Gewohnheit oder Alltagsroutine beginnt, kann zur eingeübten Handlung und starren Ordnung werden: von den Begrüßungs-, Wasch- und Umziehritualen nach Feierabend bis zum gemeinsamen Frühstück und Familienspaziergang am Sonntag. Solche eingespielten und liebgewordenen Gewohnheiten geben den Menschen im Alltag Struktur und Halt. Gerade im Zusammenleben von Familienmitgliedern haben Rituale eine wichtige Stabilisierungsfunktion. Dahinter verbirgt sich das Bedürfnis nach Sicherheit und Geborgenheit, der Wunsch nach einem harmonischen Feierabend oder schönen Wochenende.`
      }
    ],
    items: [
      {
        n: 6,
        text: '6. Siebzig Prozent der Bevölkerung meinen, dass Freizeit …',
        options: [
          'a — „Freiheit für etwas" bedeutet.',
          'b — nicht unbedingt positiv besetzt ist.',
          'c — nur dem Ausruhen und Schlafen dienen sollte.'
        ],
        correct: 'a',
        explanation: 'Gemäß Artikel 1 bedeutet Freizeit für 70% eine Zeit, in der man tun und lassen kann was Spaß macht („Freiheit für etwas").'
      },
      {
        n: 7,
        text: '7. Die Mehrheit der Leute nutzt ihre Freizeit …',
        options: [
          'a — für die eigenen Interessen.',
          'b — zur Aufbesserung des Einkommens.',
          'c — zur Regeneration für den nächsten Arbeitstag.'
        ],
        correct: 'a',
        explanation: 'Die Mehrheit denkt bei Freizeit in erster Linie an den eigenen Spaß und eigene Interessen.'
      },
      {
        n: 8,
        text: '8. Die Deutschen organisieren ihre Freizeit …',
        options: [
          'a — gar nicht.',
          'b — nur teilweise und reservieren dann für Freizeitaktivitäten bestimmte Tage.',
          'c — so, dass alle Freizeitaktivitäten immer am Wochenende stattfinden.'
        ],
        correct: 'b',
        explanation: 'Laut Artikel 2 reservieren viele Deutsche bestimmte Wochentage oder Teile des Wochenendes für feste Aktivitäten.'
      },
      {
        n: 9,
        text: '9. Der Sonntag ist bei vielen reserviert für …',
        options: [
          'a — das Ausgehen.',
          'b — die Freizeitgestaltung mit Freunden oder Kollegen.',
          'c — Familie und Entspannung.'
        ],
        correct: 'c',
        explanation: 'Im Text heißen die beiden "F" für den Sonntag: Faulenzen (Entspannung) und Familie.'
      },
      {
        n: 10,
        text: '10. Freizeitrituale …',
        options: [
          'a — schwächen den Gruppenzusammenhalt.',
          'b — sind für die moderne Familie nicht mehr von Bedeutung.',
          'c — waren bislang noch nicht oft Gegenstand wissenschaftlicher Untersuchungen.'
        ],
        correct: 'c',
        explanation: 'Artikel 2 hebt hervor, dass Freizeitrituale „bisher kaum erforscht" sind.'
      }
    ]
  },
  {
    id: 'lv3',
    title: 'Leseverstehen // Teil 3',
    shortCode: 'LV3',
    module: 'Leseverstehen',
    timeLimitMinutes: 20,
    description: 'Ordnen Sie den zehn Situationen (11–20) die passenden Info-Texte (a–l) zu. Wenn kein Text passt, wählen Sie x.',
    contextType: 'texts',
    contextData: [
      {
        id: 'a',
        title: 'Auf dem Göta-Kanal unterwegs',
        text: `Auf dem Göta-Kanal sind drei historische Schiffe unterwegs: „Juno“, „Wilhelm Tham“ und „Diana“. Die um die Jahrhundertwende gebauten Dampfer sind restauriert und auf Diesel umgerüstet.\nUnterkunft an Bord: Insgesamt 60 Passagiere werden von einer 14-köpfigen Crew betreut. Die Küche ist erstklassig. Die kleinen Doppelkabinen sind mit Etagenbetten und fließendem Wasser ausgestattet.\nReiseverlauf: Man kann die Reise sowohl von Stockholm als auch von Göteborg aus antreten. Aktivitäten: tägliche Ausflüge zu verschiedenen Sehenswürdigkeiten, Spaziergänge auf dem Treidelweg, baden, lesen, Karten spielen, die Stimmung an Deck genießen.`
      },
      {
        id: 'b',
        title: 'Skating für Fortgeschrittene',
        text: `Können Sie bremsen? Oder nur wenn ein Verkehrsschild oder eine Ampel in der Nähe ist? Vielleicht ist ein Wochenend-Kurs beim Starnberger Rollschuh-Club genau das Richtige für Sie: Trainer vermitteln effektives Gleiten, Bremsen, Kurvenfahren, Fallen – alles für fortgeschrittene Skater, die ihre Technik verbessern wollen. Dazu: neueste Skate-Modelle zum Üben: Fr 17 Uhr bis So 19 Uhr, Ü/F, ab 160 Euro. Infos: 0800 / 100 88 00.`
      },
      {
        id: 'c',
        title: 'ActionGuide Inline-Skating',
        text: `Skater gelten verkehrsrechtlich als Fußgänger und dürfen eigentlich nur auf Gehwegen oder in verkehrsberuhigten Zonen fahren. Gar nicht einfach, eine schöne, freie Piste auf glattem Asphalt zu finden! Spezielle Reiseführer für Skater helfen, auf Touren zu kommen. Es gibt sie für verschiedene Großstädte und Regionen in Deutschland. Von der kleinen Abend- bis hin zur großen Tagestour werden ausgewählte Strecken detailliert vorgestellt.\nWichtige Infos zu Skate-Hallen und -Bahnen, Veranstaltungen, zu regelmäßigen Inline-Treffpunkten von Flensburg bis Passau enthält der „ActionGuide Inline-Skating“ (BLV Verlag, 14,80 Euro).`
      },
      {
        id: 'd',
        title: 'Laufen für die Forschung',
        text: `Straßenlauf in Frankfurt am Main: Alle Teilnehmer haben ihren Sponsor; das Geld stiften sie für Aufklärung und Forschung zum Thema Brustkrebs. Gestartet wird am 13. August um zehn Uhr morgens am Frankfurter Römer. Die Idee für diese Aktion stammt aus den USA: Dort organisiert die „Breast Cancer Foundation“ seit fast 20 Jahren solche gesponserten Läufe. Brustkrebs betrifft Frauen auf der ganzen Welt. Wer mitlaufen und/oder sponsern will, kann sich auch am Lauftag direkt anmelden.`
      },
      {
        id: 'e',
        title: 'Visumservice Express',
        text: `Russland, China, Kamerun, Venezuela – wer binnen weniger Tage in ein Land jenseits der EU-Grenzen aufbrechen muss, verliert eine Menge Zeit bei der Beschaffung von Visa oder strapaziert seine Nerven. Inzwischen holen Agenturen die Visa kurzfristig ein, überbringen sie persönlich oder hinterlegen sie am Flughafen. So geht’s: Sie lassen sich vom Visumservice beraten, füllen einen Antrag aus, die Unterlagen werden überprüft und beim zuständigen Konsulat eingereicht.\nKosten: Visum innerhalb von fünf Arbeitstagen: 85 Euro; 24-Stunden-Service: 140 Euro. Infos: www.visumservice.de.`
      },
      {
        id: 'f',
        title: 'MÖWE E.V. – Kinder- und Jugendfreizeiten',
        text: `MÖWE E. V. – Kinder- und Jugendfreizeiten. Wir bieten: Campen, Kanufahren, Wandern, Klettern, Geländespiele usw. Für Kinder und Jugendliche zwischen 7 und 18 Jahren. Alle Aktivitäten werden von erfahrenen Pädagogen betreut und begleitet!\nJetzt neu: Auslandsreisen zu Hilfsprojekten in anderen Ländern (mit sozialer Tätigkeit, z. B. Hilfe in Schulen o. Ä.) – Reisen, Lernen, Gutes tun! Für Jugendliche ab 15 Jahren. Weitere Infos: Möwe e. V., Wolfschlugen.`
      },
      {
        id: 'g',
        title: 'K2 Skate College Einsteigerkurs',
        text: `Wenn Sie noch nie auf Inlinern gestanden haben oder sich unsicher fühlen: Einsteigerkurse unter professioneller Anleitung von ausgebildeten Trainern beim K2 Skate College. Schutzausrüstung und Leihskates stehen kostenlos zur Verfügung.`
      },
      {
        id: 'h',
        title: 'Skate Nights Mainz – Organisation',
        text: `Für die Großveranstaltung „Skate Nights Mainz“ vom 5. bis 9. August sucht die Stadt Mainz noch engagierte Helferinnen und Helfer, die bei der Streckensicherung, Info-Ständen und der Logistik vor Ort mitwirken möchten.`
      },
      {
        id: 'i',
        title: 'Hotel Waldruhe im Tannheimer Tal',
        text: `Bäche, Seen, Wälder und Wiesen: So frisch wie die herrliche Natur ringsum präsentiert sich das Angebot für Feriengenießer: ein bisschen Luxus, viel Komfort in heimeligen Zimmern. Dazu ein großes Angebot für alle, die im Urlaub aktiv werden wollen: geführte Wanderungen im Tannheimer Tal, Radeln, Mountainbiken, Surfen, Bootsfahrten und Baden am klaren Haldensee, Tennisspielen und dann Relaxen im Wellness-Bereich – Entspannung pur!`
      },
      {
        id: 'j',
        title: 'Reisetipps Ägypten',
        text: `Wir haben die wichtigsten Hinweise für Ihre nächste Reise nach Ägypten zusammengestellt.\nSicherheit: Die Hauptattraktionen des Landes werden bewacht. Kleiden Sie sich dem Land entsprechend.\nGesundheit: Wasser nur aus verschlossenen Flaschen benutzen. Welche Impfung nötig ist, erfahren Sie am Impftelefon: 0 40 / 42 81 88 00.\nNilkreuzfahrten: Alle großen deutschen Veranstalter bieten Rundreisen sowie Kreuzfahrten auf dem Nil an (Panoramafenster, Klimaanlage, Restaurant, Pool).`
      },
      {
        id: 'k',
        title: 'Lago di Chiusi: Einfach herrlich',
        text: `Früher schnitt man hier das Rohr für die Florentinerhüte, heute ist der winzige, von grünen Wiesen umgebene See an der Grenze zu Latium ein Geheimtipp für Liebhaber der Gemächlichkeit. Zeitloses Italien: morsche bunte Boote, ein paar Angler und der würzige Geruch von Seefischen, die „alla etrusca“ über Schilf gebraten werden. Zum Beispiel bei Gino: Filets von Forelle, Felchen und Hecht, ein paar Spritzer Olivenöl und Zitronensaft.`
      },
      {
        id: 'l',
        title: 'Kräutercreme und Öko-Seife',
        text: `Viele Beauty-Produkte schmücken sich mit dem Begriff „Naturkosmetik“. Bisher gab es dafür keine festen Prüfkriterien, doch jetzt kommt das Gütezeichen „Kontrollierte Natur-Kosmetik BDHI“, das vom Bundesverband Deutscher Industrie- und Handelsunternehmen (BDHI) vergeben wird. Damit können Sie sicher sein: Wo Natur drauf steht, ist auch Natur drin. Infos gibt’s beim BDHI.`
      }
    ],
    items: [
      { n: 11, text: '11. Ihre Freundin möchte gerne bei der Organisation einer Inline-Skate-Veranstaltung mitwirken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'h', explanation: 'Text h sucht Helfer für die Organisation und Verkehrsregelung der Skate Nights in Mainz.' },
      { n: 12, text: '12. Eine 17-jährige Freundin würde gerne armen Menschen in anderen Ländern helfen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'f', explanation: 'Text f bietet Auslandsreisen zu sozialen Hilfsprojekten für Jugendliche ab 15 Jahren.' },
      { n: 13, text: '13. Sie möchten das Inline-Skaten erlernen und suchen Informationen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'g', explanation: 'Text g richtet sich an Anfänger, die noch nie auf Inlinern gestanden haben.' },
      { n: 14, text: '14. Ein Freund möchte sich im Inline-Skaten perfektionieren.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'b', explanation: 'Text b bietet gezieltes Techniktraining für fortgeschrittene Skater.' },
      { n: 15, text: '15. Sie möchten herausfinden, wo es in Deutschland Skate-Veranstaltungen gibt.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'c', explanation: 'Text c empfiehlt den ActionGuide mit Veranstaltungsübersichten in ganz Deutschland.' },
      { n: 16, text: '16. Eine Bekannte möchte einen Kurs über Naturkosmetik besuchen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'x', explanation: 'Kein Info-Text bietet einen Naturkosmetik-Kurs an (l informiert nur über ein Prüfzeichen). Richtige Antwort: x.' },
      { n: 17, text: '17. Ihr Nachbar möchte sich im Sommerurlaub sportlich betätigen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'i', explanation: 'Text i bietet Aktivurlaub im Hotel Waldruhe mit Wandern, Radeln, Tennis, Surfen.' },
      { n: 18, text: '18. Ein Bekannter möchte Schweden per Schiff kennen lernen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'a', explanation: 'Text a beschreibt Schiffsreisen auf dem Göta-Kanal in Schweden.' },
      { n: 19, text: '19. Ein Kollege möchte sich über Gesundheitsrisiken in Ägypten informieren.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'j', explanation: 'Text j enthält Gesundheits- und Impfhinweise für Ägypten-Reisende.' },
      { n: 20, text: '20. Sie müssen kurzfristig für Ihren Chef Reisepapiere für Ägypten besorgen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'e', explanation: 'Text e beschreibt den schnellen Express-Visumservice.' }
    ]
  },
  {
    id: 'sb1',
    title: 'Sprachbausteine // Teil 1',
    shortCode: 'SB1',
    module: 'Sprachbausteine',
    timeLimitMinutes: 15,
    description: 'Wählen Sie für jede Lücke (21–30) das grammatikalisch und kontextuell korrekte Wort (a, b oder c).',
    contextType: 'texts',
    contextData: [
      {
        id: 'Brief-Andrea',
        title: 'Brief von Andrea an Daniela',
        text: `Liebe Daniela,\nich habe schon ein ganz schlechtes Gewissen, denn [21] wollte ich dir schon vor zwei Monaten schreiben. Aber du weißt ja, wie das ist: Wenn man sich auf eine Prüfung vorbereitet, hat [22] überhaupt keine Zeit mehr für seine Hobbys – alles dreht sich nur noch ums Lernen.\nNun habe ich es aber geschafft: Gestern war die Prüfung und ich bin zuversichtlich, dass ich sie bestanden habe. Mein Freund, mit [23] Hilfe es mir überhaupt nur möglich war, diese ganze Zeit zu [24], hat mich für heute Abend in ein tolles Restaurant eingeladen. Danach gehen wir auch noch tanzen.\nIn deinem letzten Brief hast du mich gefragt, [25] ich Lust hätte, mit dir zusammen ein Wochenende in London zu verbringen. Natürlich habe ich Lust! Nach dem ganzen Stress der letzten Wochen fände ich es super, mal ein paar Tage lang mit einer Freundin etwas Tolles zu [26]. London ist eine wunderbare Stadt, ich habe schon viele Berichte darüber gelesen. Ich würde mich [27] besonders [28] die Tate Gallery und das Filmmuseum interessieren.\nMach [29] einfach ein paar Vorschläge, wann du Zeit hast. Ich bin sicher, dass wir [30] auf ein Wochenende einigen können.\n\nHerzliche Grüße\ndeine Andrea`
      }
    ],
    items: [
      { n: 21, text: 'Lücke 21: … denn [21] wollte ich dir schon vor zwei Monaten schreiben.', options: ['a — außerdem', 'b — eigentlich', 'c — überhaupt'], correct: 'b', explanation: '„eigentlich" bezeichnet die ursprüngliche Absicht.' },
      { n: 22, text: 'Lücke 22: … hat [22] überhaupt keine Zeit mehr für seine Hobbys …', options: ['a — er', 'b — es', 'c — man'], correct: 'c', explanation: 'Das Indefinitpronomen „man" ist als Subjekt erforderlich.' },
      { n: 23, text: 'Lücke 23: Mein Freund, mit [23] Hilfe es mir überhaupt nur möglich war …', options: ['a — der', 'b — dessen', 'c — seiner'], correct: 'b', explanation: 'Relativpronomen Genitiv Singular Maskulinum („dessen").' },
      { n: 24, text: 'Lücke 24: … diese ganze Zeit zu [24] …', options: ['a — übersetzen', 'b — überstehen', 'c — übertragen'], correct: 'b', explanation: 'Kollokation: eine anstrengende Zeit „überstehen".' },
      { n: 25, text: 'Lücke 25: … hast du mich gefragt, [25] ich Lust hätte …', options: ['a — dass', 'b — falls', 'c — ob'], correct: 'c', explanation: 'Indirekte Ja/Nein-Frage erfordert die Subjunktion „ob".' },
      { n: 26, text: 'Lücke 26: … mit einer Freundin etwas Tolles zu [26].', options: ['a — unternehmen', 'b — verbringen', 'c — verplanen'], correct: 'a', explanation: 'Fester Ausdruck: „etwas unternehmen".' },
      { n: 27, text: 'Lücke 27: Ich würde mich [27] besonders …', options: ['a — ganz', 'b — recht', 'c — zwar'], correct: 'a', explanation: 'Graduierendes Adverb „ganz besonders".' },
      { n: 28, text: 'Lücke 28: … besonders [28] die Tate Gallery interessieren.', options: ['a — auf', 'b — für', 'c — in'], correct: 'b', explanation: 'Präpositionalergänzung: „sich interessieren für" (+ Akkusativ).' },
      { n: 29, text: 'Lücke 29: Mach [29] einfach ein paar Vorschläge …', options: ['a — bestimmt', 'b — doch', 'c — sicher'], correct: 'b', explanation: 'Abtönungspartikel „doch" mildert die Aufforderung freundlich ab.' },
      { n: 30, text: 'Lücke 30: … dass wir [30] auf ein Wochenende einigen können.', options: ['a — euch', 'b — sich', 'c — uns'], correct: 'c', explanation: 'Reflexivpronomen zur 1. Person Plural („wir einigen uns").' }
    ]
  },
  {
    id: 'sb2',
    title: 'Sprachbausteine // Teil 2',
    shortCode: 'SB2',
    module: 'Sprachbausteine',
    timeLimitMinutes: 15,
    description: 'Wählen Sie das passende Wort aus dem Kasten (a–o) für jede Lücke (31–40).',
    contextType: 'wordbank',
    contextData: [
      'a ABMILDERN',
      'b AN',
      'c AUF',
      'd AUFGRUND',
      'e DRASTISCH',
      'f ERHÖHEN',
      'g FÜR',
      'h IM',
      'i INDESSEN',
      'j NACH',
      'k RECHNEN',
      'l STATT',
      'm STEIGEN',
      'n ÜBERHEBLICH',
      'o UNTERSCHEIDEND'
    ],
    items: [
      { n: 31, text: 'Lücke 31: [31] Angaben des Statistischen Bundesamtes in Wiesbaden wird die Bevölkerungszahl sinken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'j', explanation: 'Präposition mit Dativ: „Nach Angaben" (j).' },
      { n: 32, text: 'Lücke 32: … wird die Bevölkerungszahl in den nächsten fünfzig Jahren [32] sinken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'e', explanation: 'Adverb: „drastisch sinken" (e).' },
      { n: 33, text: 'Lücke 33: Die Statistiker [33] damit, dass die Zahl bis 2050 zurückgehen wird.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'k', explanation: 'Verb mit Präposition: „rechnen mit" (k).' },
      { n: 34, text: 'Lücke 34: Gesundheitssystem und Altersversorgung werden [34] dieser Entwicklung vor großen Problemen stehen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'd', explanation: 'Kausale Präposition mit Genitiv: „aufgrund dieser Entwicklung" (d).' },
      { n: 35, text: 'Lücke 35: Das durchschnittliche Lebensalter für Frauen wird bis 2050 auf 84 Jahre [35].', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'm', explanation: 'Infinitiv nach Hilfsverb wird: „steigen" (m).' },
      { n: 36, text: 'Lücke 36: Die Auswirkungen auf das politische Leben lassen sich [36] unschwer erahnen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'i', explanation: 'Adverbialer Übergang: „indessen" (i).' },
      { n: 37, text: 'Lücke 37: … werden sich Politik und Geschäftswelt [37] diesen Personenkreis einstellen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'c', explanation: 'Präposition: „sich einstellen auf" (c).' },
      { n: 38, text: 'Lücke 38: … dass sich Politiker mehr [38] die alten Wähler interessieren werden.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'g', explanation: 'Präposition: „sich interessieren für" (g).' },
      { n: 39, text: 'Lücke 39: … da Arbeitnehmer den größten Teil ihres Einkommens [39] in den Konsum in die Sozialversicherungen stecken müssen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'l', explanation: 'Präposition: „statt in den Konsum" (l).' },
      { n: 40, text: 'Lücke 40: Diese Probleme könne man nur [40], wenn eine hohe Zahl junger Arbeitskräfte zuwandert.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'a', explanation: 'Infinitiv: „Probleme abmildern" (a).' }
    ]
  },
  {
    id: 'hv1',
    title: 'Hörverstehen // Teil 1',
    shortCode: 'HV1',
    module: 'Hörverstehen',
    timeLimitMinutes: 8,
    description: 'Sie hören eine Nachrichtensendung. Entscheiden Sie beim Hören, ob die Aussagen 41–45 Richtig (+) oder Falsch (–) sind.',
    items: [
      {
        n: 41,
        text: '41. Laut BILD AM SONNTAG können in Zukunft nur Mieter, aber nicht Vermieter bestimmte Mietverträge schneller kündigen.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Im Nachrichtentext wird erklärt, dass die Kündigungsfrist für Mieter herabgesetzt wird, sich für Vermieter aber nichts ändert (+).',
        audioScript: 'Mieter können künftig ihren Mietvertrag schneller als bisher kündigen. Danach plane die Bundesregierung die maximale Kündigungsfrist von 12 auf 6 Monate herabzusetzen. Für Vermieter ändere sich dagegen nichts.'
      },
      {
        n: 42,
        text: '42. In bestimmten Bundesländern sollen Wohnhäuser abgerissen werden, weil sie unbewohnt sind.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Der Bericht bestätigt, dass in Ostdeutschland über eine Million ungenutzte Wohnungen abgerissen werden sollen (+).',
        audioScript: 'In Ostdeutschland stehen immer mehr Wohnungen leer. Das Blatt zitiert eine Studie, nach der in den kommenden Jahren über eine Million Wohnungen abgerissen werden müssten.'
      },
      {
        n: 43,
        text: '43. Sowohl die Waldbrände als auch die Hitzewelle in Griechenland sind zu Ende.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Der griechische Rundfunk berichtet, dass alle Waldbrände gelöscht sind und die Hitzewelle vorbei ist (+).',
        audioScript: 'Alle Waldbrände in Griechenland sind gelöscht. Dies berichtet der griechische Rundfunk. Auch die Hitzewelle ist vorbei.'
      },
      {
        n: 44,
        text: '44. In Kanada mussten die Bergungsarbeiten nach einem Tornado wegen erneuter Unwetterwarnungen eingestellt werden.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Der Text besagt ausdrücklich: "Die Bergungsarbeiten wurden fortgesetzt" (sie wurden also nicht eingestellt) (–).',
        audioScript: 'Nach dem Tornado auf einem Campingplatz in Kanada ist die Zahl der Toten gestiegen... Die Bergungsarbeiten wurden fortgesetzt.'
      },
      {
        n: 45,
        text: '45. Bei einem Fährunglück in der Nähe von Gibraltar gab es nur Sachschaden.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Bei dem Fährunglück wurden 5 Menschen getötet und 18 verletzt (–).',
        audioScript: 'Bei Gibraltar in Südspanien sind zwei Fähren zusammengestoßen. Dabei wurden fünf Menschen getötet, 18 wurden verletzt.'
      }
    ]
  },
  {
    id: 'hv2',
    title: 'Hörverstehen // Teil 2',
    shortCode: 'HV2',
    module: 'Hörverstehen',
    timeLimitMinutes: 12,
    description: 'Sie hören ein Rundfunk-Interview mit Herrn Werner auf der Zugspitze. Entscheiden Sie ob 46–55 Richtig (+) oder Falsch (–) sind.',
    items: [
      {
        n: 46,
        text: '46. Auf dem Gipfel der Zugspitze liegt ungefähr ein Meter Schnee.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Herr Werner sagt: "Hier auf dem Zugspitzgipfel haben wir circa ein Meter Schnee" (+).',
        audioScript: 'Herr Werner: Hier auf dem Zugspitzgipfel haben wir circa ein Meter Schnee, etwas weiter unten liegt ein dreiviertel Meter.'
      },
      {
        n: 47,
        text: '47. Man kann derzeit auf der Zugspitze Ski fahren.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Herr Werner stellt klar: "Allerdings ohne Skibetrieb muss ich sagen" (–).',
        audioScript: 'Herr Werner: Höchste Wintersaison zurzeit. Allerdings ohne Skibetrieb muss ich sagen, gell.'
      },
      {
        n: 48,
        text: '48. Auch in Garmisch-Partenkirchen selbst hat es geschneit.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Die Schneefallgrenze liegt bei 2000 Metern, darunter ist alles grün und es regnet nur (–).',
        audioScript: 'Herr Werner: Nein, die Schneefallgrenze liegt circa bei 2000 Meter. Darunter ist alles grün.'
      },
      {
        n: 49,
        text: '49. In der kommenden Woche erwartet man für die Zugspitzregion freundliches Wetter.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Herr Werner erwähnt: "Ab Montag soll’s besser werden" (+).',
        audioScript: 'Herr Werner: Ab Montag soll’s besser werden. Wir hoffen allerdings schon, dass wir am Sonntag besseres Wetter bekommen.'
      },
      {
        n: 50,
        text: '50. Am Sonntag wird ein Gottesdienst auf einer Bergstation abgehalten.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Der Tridentiner Bergchor tritt auf und es wird eine Messe gefeiert (+).',
        audioScript: 'Herr Werner: An der Bergstation der Alpschützbahn tritt der Tridentiner Bergchor auf. Da wird eine Messe gefeiert.'
      },
      {
        n: 51,
        text: '51. Die Zugspitze kann man momentan wegen des Nebels nicht erkennen.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Herr Werner betont: "Die Zugspitze sieht man zurzeit, wenn ich aus meinem Bürofenster rausschaue" (–).',
        audioScript: 'Herr Werner: Die Zugspitze sieht man zurzeit, wenn ich aus meinem Bürofenster rausschaue. Die Zugspitze ist tief verschneit.'
      },
      {
        n: 52,
        text: '52. Die Urlauber in Garmisch-Partenkirchen haben bei jedem Wetter genügend Möglichkeiten zur Freizeitgestaltung.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Es gibt Schwimmbad, Eisstadion, Passionsspiele und Kurkonzerte (+).',
        audioScript: 'Herr Werner: Gott sei Dank gibt es genügend Alternativen... Schwimmbad, Eisstadion, 200 km Wanderwege. Es wird den Leuten nicht langweilig.'
      },
      {
        n: 53,
        text: '53. Herr Werner erwartet keine Wetterbesserung.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Er ist sehr optimistisch: "Der Sommer kommt ja noch, da bin ich ganz optimistisch" (–).',
        audioScript: 'Herr Werner: Der Sommer kommt ja noch, da bin ich ganz optimistisch.'
      },
      {
        n: 54,
        text: '54. Auch in früheren Jahren hat es im Juni und August geschneit.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Herr Werner bestätigt, dass es im Juni und August schon öfter Neuschnee gab (+).',
        audioScript: 'Herr Werner: Im Juli nicht. Aber dafür im Juno und im August. Das gab’s also immer wieder mal.'
      },
      {
        n: 55,
        text: '55. Herr Werner ist mit seinem Arbeitsplatz zufrieden.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Herr Werner freut sich über die Arbeit auf dem Gipfel: "Ein Geschenk vom lieben Gott ist das" (+).',
        audioScript: 'Herr Werner: Ich möchte mich überhaupt nicht beklagen. Das ist doch herrlich hier auf dem Gipfel.'
      }
    ]
  },
  {
    id: 'hv3',
    title: 'Hörverstehen // Teil 3',
    shortCode: 'HV3',
    module: 'Hörverstehen',
    timeLimitMinutes: 6,
    description: 'Sie hören jetzt fünf kurze Durchsagen (56–60). Entscheiden Sie, ob die Aussagen Richtig (+) oder Falsch (–) sind.',
    items: [
      {
        n: 56,
        text: '56. Der Software-Service von Macrohard steht rund um die Uhr zur Verfügung.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Die Erreichbarkeit ist eingeschränkt (Mo-Fr 8-18 Uhr, Sa 9-17 Uhr), also NICHT rund um die Uhr (–).',
        audioScript: 'Sie rufen uns außerhalb der Geschäftszeiten an. Sie erreichen uns von Montag bis Freitag von 8–18 Uhr sowie Samstag von 9–17 Uhr.'
      },
      {
        n: 57,
        text: '57. Für das Konzert mit Romano Castelli gibt es noch Karten ab 200 Euro.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Die Eintrittspreise betragen BIS ZU 100 Euro, nicht ab 200 Euro (–).',
        audioScript: 'Restkarten gibt es noch an der Abendkasse. Allerdings müssen die Fans bei Eintrittspreisen bis zu 100 Euro gehörig in die Tasche greifen.'
      },
      {
        n: 58,
        text: '58. Über den neuen Tarif von T-Upline können Sie sich im Internet informieren.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Informationen finden Kunden auf der Homepage im Servicebereich (+).',
        audioScript: 'Infos auf unserer Homepage im Servicebereich unter www.upline.de.'
      },
      {
        n: 59,
        text: '59. Aufgrund des Schwerpunktthemas „Japan" treten im Park des Museums für Völkerkunde in diesem Jahr nur japanische Musiker auf.',
        options: ['+ Richtig', '– Falsch'],
        correct: '–',
        explanation: 'Im Park des Museums spielen Musiker "aus aller Welt", nicht nur aus Japan (–).',
        audioScript: 'Hier ist Musik aus aller Welt zu hören, live und vom Plattenteller.'
      },
      {
        n: 60,
        text: '60. Bei dem Festival gibt es nicht nur folkloristische Unterhaltung, sondern auch kulinarische Spezialitäten aus dem In- und Ausland.',
        options: ['+ Richtig', '– Falsch'],
        correct: '+',
        explanation: 'Es gibt internationale Spezialitäten sowie Schmankerl aus Hessen (+).',
        audioScript: 'Jede Menge Stände mit internationalen Spezialitäten und kulinarischen Schmankerln aus Hessen.'
      }
    ]
  }
];

export const WRITING_TOPICS: WritingTopic[] = [
  {
    id: 1,
    title: 'Thema 1: Bitte um Information',
    subtitle: 'Anfrage bzgl. einer privaten Unfallversicherung',
    adTitle: 'Secura Versicherungen AG',
    adContent: `Alle 4 Sekunden passiert in Deutschland ein Unfall – davon 71% in der Freizeit und im Haushalt. Unsere Basis-Leistungen: Unfallrente in vereinbarter Höhe, Kostenübernahme bei Spezialbehandlungen (auch im Ausland), Kostenübernahme für Umbaumaßnahmen. Vorteile: individuelle Beitragshöhe je nach Beruf/Hobbys, weltweiter Schutz 365 Tage rund um die Uhr, Rabatt-Möglichkeiten für Familien.`,
    adAddress: 'Secura Versicherungen AG, Kundenservice, Mannheimer Str. 3, 80912 München',
    promptRequirements: [
      'Beschreiben Sie, welchen risikoreichen Sport Sie betreiben und wie gefährlich das ist.',
      'Beschreiben Sie Ihre Pläne für zukünftige Reisen und welche Risiken damit verbunden sind.',
      'Beschreiben Sie, welche Leistungen Sie sich wünschen (Höhe der Rente, Rabatte, Gültigkeit).',
      'Stellen Sie weitere konkrete Fragen zu den Bedingungen und Leistungen.'
    ]
  },
  {
    id: 2,
    title: 'Thema 2: Beschwerdebrief',
    subtitle: 'Beschwerde über das Jugendcamp Silberstrand',
    adTitle: 'Jugendcamp Silberstrand',
    adContent: `Urlaubsspaß mit internationalem Flair für junge Leute (17–25 Jahre) an den herrlichsten Ostseestränden: komfortable Wohnstudios für jeweils zwei Gäste. Jede Menge Action: Beachball, Surfen, Segeltouren. Abends Livemusik mit internationalen Stars in der Campdisko. Das alles für nur 380 Euro pro Woche, alles inklusive!`,
    adAddress: 'Jugendcamp Silberstrand, Lange Weile 10, 18311 Ribnitz-Damgarten',
    promptRequirements: [
      'Beschreiben Sie Ihre Erwartungen nach Lektüre der Werbeanzeige.',
      'Beschreiben Sie genau, was Sie im Camp tatsächlich erlebt haben (z.B. Lärm, Essen, Unterkunft).',
      'Erklären Sie, was Sie nun vom Veranstalter erwarten (z.B. Teilrückerstattung des Preises).',
      'Beschreiben Sie, was Sie tun, falls Sie keine angemessene Antwort bekommen.'
    ]
  }
];

export const SPEAKING_PARTS: SpeakingPart[] = [
  {
    part: 1,
    title: 'Teil 1: Präsentation',
    duration: 'ca. 2½ Minuten per Candidate',
    description: 'Präsentieren Sie kurz ein ausgewähltes Thema. Sprechen Sie frei ca. 90 Sekunden lang und beantworten Sie danach Rückfragen Ihres Gesprächspartners.',
    prompts: [
      '• Ein Buch, das Sie gelesen haben (Thema, Autor, Handlung, Ihre persönliche Meinung)',
      '• Einen Film, den Sie gesehen haben (Regisseur, Hauptdarsteller, Thema, Empfehlung)',
      '• Eine Reise, die Sie unternommen haben (Zielort, Kultur, Sehenswürdigkeiten, Erlebnisse)',
      '• Eine Musikveranstaltung, die Sie besucht haben (Konzert/Festival, Musiker, Stimmung)',
      '• Ein Sportereignis, das Sie live besucht haben (Sportart, Ergebnis, Atmosphäre)'
    ]
  },
  {
    part: 2,
    title: 'Teil 2: Diskussion',
    duration: 'ca. 2½ Minuten per Candidate',
    description: 'Diskutieren Sie mit Ihrem Partner über ein kontroverses Thema. Nehmen Sie zuerst kurz Stellung zum Text und tauschen Sie danach Ihre eigenen Argumente aus.',
    prompts: [
      'Thema: Getrennte Schulen für Mädchen und Jungen? (Studie plädiert für getrennte Schulerziehung)',
      '• Stellen Sie die wichtigsten Kernaussagen des Artikels dar.',
      '• Äußern Sie Ihre eigene Meinung: Vor- und Nachteile von Koedukation vs. getrenntem Unterricht.',
      '• Vergleichen Sie mit den Erfahrungen aus Ihrem Heimatland.'
    ],
    readingText: `Sollen Mädchen und Jungen zukünftig wieder getrennte Schulen besuchen? Dafür plädiert eine Studie des Instituts für sozialpädagogische Forschung (ISF) in Hannover. In den naturwissenschaftlichen Fächern fehle in koedukativen Schulen oft die Chancengleichheit. Modellversuche in NRW zeigen bessere Lernerfolge für Mädchen im getrennten Naturwissenschaftsunterricht. Demgegenüber warnt das Kultusministerium vor einer Isolation der Geschlechter und der Verstärkung von Rollenklischees.`
  },
  {
    part: 3,
    title: 'Teil 3: Problemlösung',
    duration: 'ca. 2½ Minuten per Candidate',
    description: 'Planen Sie gemeinsam mit Ihrem Partner eine konkrete Veranstaltung oder Reise.',
    prompts: [
      'Aufgabe: Eine Gruppe von Senioren (60+) möchte eine Reise durch Deutschland, Österreich oder die Schweiz machen. Sie sollen bei der Planung helfen.',
      '• Reisezielen & Route (z.B. Barrierefreiheit, Natur, Kulturstädte)',
      '• Unterkunft & Verpflegung (seniorengerechte Hotels, Halbpension)',
      '• Transportmittel (Bus, Bahn, Flug)',
      '• Freizeitprogramm & Aktivitäten (Führungen, Konzerte, Ruhepausen)',
      '• Finanzen & Kostenrahmen'
    ]
  }
];
