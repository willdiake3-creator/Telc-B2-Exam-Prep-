import { ExamSection } from '../types';

export const EXAM_SECTIONS: ExamSection[] = [
  {
    id: 'lv1',
    title: 'Leseverstehen // Teil 1',
    shortCode: 'LV1',
    module: 'Leseverstehen',
    timeLimitMinutes: 25,
    description: 'Ordnen Sie die Überschriften (a–j) den Texten (1–5) zu.',
    contextType: 'texts',
    contextData: [
      { id: 'a', text: 'Neuer Trend: Aktivurlaub im Naturpark Waldeck-Frankenberg' },
      { id: 'b', text: 'Naturidylle und Kulturdenkmäler im Herzen Deutschlands' },
      { id: 'c', text: 'Reiten an der Küste: Wo Urlauber ihr eigenes Pferd mitbringen können' },
      { id: 'd', text: 'Einsatz für den guten Zweck: Schüler arbeiten für Hilfsprojekte' },
      { id: 'e', text: 'Sicherheit am Strand: Die Reiterstaffel der Polizei auf Norderney' },
      { id: 'f', text: 'Abenteuer in Schweden: Campingurlaub am Fluss Klarälven' },
      { id: 'g', text: 'Unerwartetes Abenteuer: Aus der Flussfahrt wird eine Busreise' },
      { id: 'h', text: 'Selbstbau-Floßtour: Mit Muskelkraft und Holzstämmen durch Schweden' },
      { id: 'i', text: 'Sozialer Tag: Jugendliche fordern höhere Löhne' },
      { id: 'j', text: 'Niedrigwasser stoppt Kreuzfahrtschiff: Busse ersetzen das Schiff' }
    ],
    items: [
      {
        n: 1,
        text: 'Im Herzen Deutschlands liegen wunderbare Landschaften mit mildem Klima. Der Kreis Waldeck-Frankenberg bietet Natur pur: Kurorte wie Bad Arolsen, den Edersee und das historische Schloss Waldeck mit sagenhaften Ausblicken.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'b',
        explanation: 'Der Text beschreibt die Landschaft im Herzen Deutschlands, den Kreis Waldeck-Frankenberg und historische Orte wie das Schloss Waldeck (Kulturdenkmäler).'
      },
      {
        n: 2,
        text: 'Melanie Schille patrouilliert mit ihrem Dienstpferd „Magnus" an der Nordseeküste. Die Polizistin sucht nach vermissten Kindern, greift bei Delikten ein und verhindert Diebstähle am Strand.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'e',
        explanation: 'Es handelt sich um eine Polizistin mit Dienstpferd („Reiterstaffel der Polizei"), die für Sicherheit am Strand sorgt.'
      },
      {
        n: 3,
        text: 'Ein neuer Urlaubstrend: Statt am Strand zu liegen, baut man in Schweden selbst ein Floß aus 96 schweren Baumstämmen und treibt tagelang auf dem Fluss Klarälven.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'h',
        explanation: 'Der Text betont den Selbstbau eines Floßes aus Baumstämmen auf dem Klarälven in Schweden.'
      },
      {
        n: 4,
        text: 'Beim „Sozialen Tag" arbeiten 100.000 Jugendliche in Hamburg bei Firmen oder Nachbarn. Der erarbeitete Lohn wird komplett gespendet, z.B. 1,2 Mio. Euro an das Hilfsprojekt „Frieden für alle".',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'd',
        explanation: 'Schüler spenden ihren Arbeitslohn für Wohltätigkeitsprojekte („Einsatz für den guten Zweck").'
      },
      {
        n: 5,
        text: 'Thomas Meurer und Wiebke Fuchs freuten sich auf ihre Flusskreuzfahrt. Doch der Fluss hatte aufgrund der Sommerhitze zu wenig Wasser — aus der geplanten Kreuzfahrt wurde schließlich eine geführte Bustour.',
        options: ['a','b','c','d','e','f','g','h','i','j'],
        correct: 'j',
        explanation: 'Aufgrund von Niedrigwasser konnte das Schiff nicht fahren, weswegen Busse als Ersatz dienten.'
      }
    ]
  },
  {
    id: 'lv2',
    title: 'Leseverstehen // Teil 2',
    shortCode: 'LV2',
    module: 'Leseverstehen',
    timeLimitMinutes: 25,
    description: 'Lesen Sie den Text „Freizeit im Wandel" und wählen Sie bei den Aufgaben 6–10 die richtige Antwort (a, b oder c).',
    contextType: 'texts',
    contextData: [
      {
        id: 'Lesetext',
        title: 'Freizeit im Wandel der Zeit',
        text: `Wie wissenschaftliche Soziologiestudien belegen, definieren rund siebzig Prozent der deutschen Bevölkerung Freizeit primär als eine Form der inneren und äußeren Ungebundenheit — also als „Freiheit für eigene Wünsche und Vorlieben". Dennoch nutzen die meisten Bundesbürger diese Stunden nicht zur bloßen Regeneration für die Arbeitswoche, sondern gestalten sie aktiv nach persönlichen Interessen. Interessanterweise planen die Deutschen ihre freien Tage jedoch nur in Teilen; spontane Aktivitäten wechseln sich mit fest eingeplanten Zeiten ab. Vor allem der Sonntag gilt in vielen Familien als unverrückbarer Anker für gemeinsame Erholung und familiäre Begegnungen. Freizeitforscher betonen, dass traditionelle Rituale den Zusammenhalt stärken, obwohl dieses Phänomen wissenschaftlich noch überraschend selten detailliert untersucht wurde.`
      }
    ],
    items: [
      {
        n: 6,
        text: 'Siebzig Prozent der Bevölkerung meinen, dass Freizeit …',
        options: [
          'a — „Freiheit für etwas" bedeutet.',
          'b — nicht unbedingt positiv besetzt ist.',
          'c — nur dem Ausruhen und Schlafen dienen sollte.'
        ],
        correct: 'a',
        explanation: 'Im Text steht explizit: Freizeit wird als „Freiheit für eigene Wünsche und Vorlieben" definiert.'
      },
      {
        n: 7,
        text: 'Die Mehrheit der Leute nutzt ihre Freizeit …',
        options: [
          'a — für die eigenen Interessen.',
          'b — zur Aufbesserung des Einkommens.',
          'c — zur Regeneration für den nächsten Arbeitstag.'
        ],
        correct: 'a',
        explanation: 'Der Text besagt, dass die Bürger ihre Freizeit aktiv nach persönlichen Interessen gestalten.'
      },
      {
        n: 8,
        text: 'Die Deutschen organisieren ihre Freizeit …',
        options: [
          'a — gar nicht.',
          'b — nur teilweise und reservieren dann bestimmte Tage für Freizeitaktivitäten.',
          'c — so, dass alle Freizeitaktivitäten immer am Wochenende stattfinden.'
        ],
        correct: 'b',
        explanation: 'Laut Text planen die Deutschen ihre Freizeit nur in Teilen, feste Zeiten wechseln mit Spontanität.'
      },
      {
        n: 9,
        text: 'Der Sonntag ist bei vielen reserviert für …',
        options: [
          'a — das Ausgehen mit Arbeitskollegen.',
          'b — das Einkaufen und Verpflichtungen.',
          'c — Familie und Entspannung.'
        ],
        correct: 'c',
        explanation: 'Der Text erwähnt den Sonntag als festen Anker für familiäre Entspannung.'
      },
      {
        n: 10,
        text: 'Freizeitrituale …',
        options: [
          'a — schwächen den Gruppenzusammenhalt.',
          'b — sind für die moderne Familie nicht mehr von Bedeutung.',
          'c — waren bislang noch nicht oft Gegenstand wissenschaftlicher Untersuchungen.'
        ],
        correct: 'c',
        explanation: 'Am Ende des Textes heißt es, dass Freizeitrituale „wissenschaftlich noch überraschend selten detailliert untersucht wurden".'
      }
    ]
  },
  {
    id: 'lv3',
    title: 'Leseverstehen // Teil 3',
    shortCode: 'LV3',
    module: 'Leseverstehen',
    timeLimitMinutes: 20,
    description: 'Ordnen Sie den Situationen (11–20) die passenden Anzeigen (a–l) zu. Wenn keine Anzeige passt, wählen Sie x.',
    contextType: 'texts',
    contextData: [
      { id: 'a', text: 'Auf dem Göta-Kanal sind drei historische Schiffe unterwegs. Die kleinen Doppelkabinen sind mit Etagenbetten ausgestattet. Reisetermine von Mai bis September.' },
      { id: 'b', text: 'Skating für Fortgeschrittene: Trainer vermitteln effektives Gleiten, Bremsen, Kurvenfahren, Fallen. Neueste Skate-Modelle zum Üben.' },
      { id: 'c', text: 'Wichtige Infos zu Skate-Hallen und -Bahnen, Veranstaltungen, zu regelmäßigen Inline-Treffpunkten von Flensburg bis Passau enthält der „ActionGuide Inline-Skating".' },
      { id: 'd', text: 'Laufen für die Forschung: Straßenlauf in Frankfurt. Alle Teilnehmer haben ihren Sponsor; das Geld stiften sie für Aufklärung und Forschung zum Thema Brustkrebs.' },
      { id: 'e', text: 'Visumservice: Russland, China, Kamerun... Agenturen holen das Visum kurzfristig ein, überbringen es persönlich oder hinterlegen es am Flughafen.' },
      { id: 'f', text: 'MÖWE E. V. bietet Kinder- und Jugendfreizeiten. Jetzt neu: Auslandsreisen zu Hilfsprojekten in anderen Ländern (mit sozialer Tätigkeit) – Für Jugendliche ab 15 Jahren.' },
      { id: 'g', text: 'Wenn Sie noch nie auf Inlinern gestanden haben, sollten Sie die wichtigsten Techniken üben. Am besten unter Anleitung von Profis in einem Kurs (z.B. K2 Skate College).' },
      { id: 'h', text: 'Für die Skate Nights vom 5. bis 9. August sucht die Stadt Mainz Helfer. Engagierte Skater werden benötigt, die Skating-Regeln erklären oder bei der Verkehrsregelung helfen.' },
      { id: 'i', text: 'Bäche, Seen, Wälder und Wiesen: Hotel Waldruhe in Haldensee. Angebot für alle, die im Urlaub aktiv werden wollen: Wandern, Radeln, Surfen, Baden, Tennisspielen.' },
      { id: 'j', text: 'Reisetipps Ägypten: Sicherheit, Gesundheit (Wasser aus Flaschen, Impfungen), beste Reisezeit, Touren und Kreuzfahrten auf dem Nil.' },
      { id: 'k', text: 'Lago di Chiusi: Einfach herrlich. Der winzige, von grünen Wiesen umgebene See an der Grenze zu Latium. Zeitloses Italien.' },
      { id: 'l', text: 'Kräutercreme und Öko-Seife: Viele Beauty-Produkte schmücken sich mit dem Begriff „Naturkosmetik". Jetzt kommt das Gütezeichen „Kontrollierte Natur-Kosmetik BDHI".' }
    ],
    items: [
      { n: 11, text: 'Ihre Freundin möchte gerne bei der Organisation einer Inline-Skate-Veranstaltung mitwirken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'h', explanation: 'Anzeige h sucht Helfer für die Skate Nights in Mainz zur Organisation/Verkehrsregelung.' },
      { n: 12, text: 'Eine 17-jährige Freundin würde gerne armen Menschen in anderen Ländern helfen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'f', explanation: 'Anzeige f bietet Auslandsreisen zu Hilfsprojekten für Jugendliche ab 15 Jahren.' },
      { n: 13, text: 'Sie möchten das Inline-Skaten erlernen (Anfänger) und suchen Informationen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'g', explanation: 'Anzeige g richtet sich an Personen, die noch nie auf Inlinern gestanden haben (Anfängerkurs).' },
      { n: 14, text: 'Ein Freund möchte sich im Inline-Skaten perfektionieren (Fortgeschrittene).', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'b', explanation: 'Anzeige b bietet gezieltes Training für Fortgeschrittene.' },
      { n: 15, text: 'Sie möchten herausfinden, wo es in Deutschland Skate-Veranstaltungen gibt.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'c', explanation: 'Anzeige c empfiehlt den ActionGuide mit Übersichten von Flensburg bis Passau.' },
      { n: 16, text: 'Eine Bekannte möchte einen praktischen Volkshochschulkurs über Naturkosmetik besuchen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'x', explanation: 'Anzeige l erwähnt lediglich das Gütesiegel, bietet aber keinen Kurs an -> Keine Anzeige passt (x).' },
      { n: 17, text: 'Ihr Nachbar möchte sich im Sommerurlaub sportlich betätigen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'i', explanation: 'Anzeige i wirbt für Aktivurlaub im Hotel Waldruhe mit Wandern, Radeln, Surfen.' },
      { n: 18, text: 'Ein Bekannter möchte Schweden per Schiff kennen lernen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'a', explanation: 'Anzeige a beschreibt Schiffsreisen auf dem Göta-Kanal in Schweden.' },
      { n: 19, text: 'Ein Kollege möchte sich über Gesundheitsrisiken in Ägypten informieren.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'j', explanation: 'Anzeige j enthält Reisetipps zu Gesundheit und Impfungen in Ägypten.' },
      { n: 20, text: 'Sie müssen kurzfristig für Ihren Chef Reisepapiere/Visa besorgen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','x'], correct: 'e', explanation: 'Anzeige e beschreibt einen Express-Visumservice.' }
    ]
  },
  {
    id: 'sb1',
    title: 'Sprachbausteine // Teil 1',
    shortCode: 'SB1',
    module: 'Sprachbausteine',
    timeLimitMinutes: 15,
    description: 'Wählen Sie für jede Lücke (21–30) im nachfolgenden Brief das richtige Wort (a, b oder c).',
    contextType: 'texts',
    contextData: [
      {
        id: 'Brief',
        title: 'Brief an eine Freundin',
        text: `Liebe Anja,\n\n[21] wollte ich dir schon vor zwei Monaten schreiben, aber du weißt ja, wie stressig das Semesterende ist. Wenn man Prüfungen hat, hat [22] überhaupt keine Zeit mehr für seine Hobbys. Mein Freund, mit [23] Hilfe es mir überhaupt nur möglich war, diese ganze Zeit gut zu [24], hat mich gefragt, [25] ich Lust hätte, mit nach London zu fahren. Er meinte, es wäre super, ein paar Tage lang etwas Tolles zu [26]. Ich würde mich [27] besonders [28] die Kunstmuseen interessieren. Mach [29] einfach ein paar Vorschläge, sodass wir [30] bald auf ein Wochenende einigen können.\n\nHerzliche Grüße`
      }
    ],
    items: [
      { n: 21, text: '… wollte ich dir schon vor zwei Monaten schreiben, …', options: ['a — außerdem', 'b — eigentlich', 'c — überhaupt'], correct: 'b', explanation: '„eigentlich" passt als Modalpartikel / Adverb für eine urpsrüngliche Absicht.' },
      { n: 22, text: '… hat … überhaupt keine Zeit mehr für seine Hobbys.', options: ['a — er', 'b — es', 'c — man'], correct: 'c', explanation: 'Indefinitpronomen „man" im Bezug auf allgemeine Zeitnot.' },
      { n: 23, text: 'Mein Freund, mit … Hilfe es mir überhaupt nur möglich war …', options: ['a — der', 'b — dessen', 'c — seiner'], correct: 'b', explanation: 'Relativpronomen im Genitiv Singular Maskulinum („dessen Hilfe").' },
      { n: 24, text: '… diese ganze Zeit gut zu …', options: ['a — übersetzen', 'b — überstehen', 'c — übertragen'], correct: 'b', explanation: 'Kollokation: „eine schwierige Zeit überstehen".' },
      { n: 25, text: '… hat mich gefragt, … ich Lust hätte …', options: ['a — dass', 'b — falls', 'c — ob'], correct: 'c', explanation: 'Indirekte Ja/Nein-Frage erfordert die Subjunktion „ob".' },
      { n: 26, text: '… etwas Tolles zu …', options: ['a — unternehmen', 'b — verbringen', 'c — verplanen'], correct: 'a', explanation: '„etwas unternehmen" ist der feststehende Ausdruck für Freizeitaktivitäten.' },
      { n: 27, text: 'Ich würde mich … besonders …', options: ['a — ganz', 'b — recht', 'c — zwar'], correct: 'a', explanation: 'Graduierendes Adverb „ganz besonders".' },
      { n: 28, text: '… besonders … die Kunstmuseen interessieren.', options: ['a — auf', 'b — für', 'c — in'], correct: 'b', explanation: 'Reflexivverb mit Präposition: „sich interessieren für" (+ Akkusativ).' },
      { n: 29, text: 'Mach … einfach ein paar Vorschläge, …', options: ['a — bestimmt', 'b — doch', 'c — sicher'], correct: 'b', explanation: 'Aufforderung mit freundlicher Abtönungspartikel „doch".' },
      { n: 30, text: '… sodass wir … bald auf ein Wochenende einigen können.', options: ['a — euch', 'b — sich', 'c — uns'], correct: 'c', explanation: 'Reflexivpronomen zur 1. Person Plural „wir einigen uns".' }
    ]
  },
  {
    id: 'sb2',
    title: 'Sprachbausteine // Teil 2',
    shortCode: 'SB2',
    module: 'Sprachbausteine',
    timeLimitMinutes: 15,
    description: 'Ordnen Sie den Lücken (31–40) im Zeitungsartikel die passenden Wörter aus dem Wortkasten (a–o) zu.',
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
      { n: 31, text: 'Es gibt immer weniger Deutsche. [31] Angaben des Statistischen Bundesamtes wird die Bevölkerungszahl sinken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'j', explanation: 'Präposition mit Dativ für Quellenangabe: „Nach Angaben des..." (j).' },
      { n: 32, text: 'Die Bevölkerungszahl wird in den nächsten fünfzig Jahren [32] sinken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'e', explanation: 'Adverb der Intensität: „drastisch sinken" (e).' },
      { n: 33, text: 'Die Statistiker [33] damit, dass die Zahl bis 2050 stark zurückgehen wird.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'k', explanation: 'Verb mit Präposition: „rechnen mit etwas" (k).' },
      { n: 34, text: 'Gesundheitssystem und Altersversorgung werden [34] dieser Entwicklung vor großen Problemen stehen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'd', explanation: 'Kausale Präposition mit Genitiv: „aufgrund dieser Entwicklung" (d).' },
      { n: 35, text: 'Das durchschnittliche Lebensalter für Frauen wird bis 2050 auf 84 Jahre [35] .', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'm', explanation: 'Informativum Verb im Infinitiv: „steigen" (m).' },
      { n: 36, text: 'Die Auswirkungen auf das politische Leben lassen sich [36] unschwer erahnen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'i', explanation: 'Adverbiale Überleitung: „indessen" (i).' },
      { n: 37, text: 'Politik und Geschäftswelt werden sich [37] diesen Personenkreis einstellen.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'c', explanation: 'Reflexivverb mit Präposition: „sich einstellen auf" (+ Akkusativ) (c).' },
      { n: 38, text: 'Es wird sich ergeben, dass sich Politiker mehr [38] die alten Wähler interessieren.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'g', explanation: 'Präpositionalergänzung: „sich interessieren für" (g).' },
      { n: 39, text: 'Arbeitnehmer müssen den größten Teil ihres Einkommens [39] in den Konsum in die Sozialversicherungen stecken.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'l', explanation: 'Präposition für Alternative: „statt in den Konsum" (l).' },
      { n: 40, text: 'Diese Probleme könne man nur [40] , wenn qualifizierte Zuwanderung gefördert wird.', options: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'], correct: 'a', explanation: 'Verb im Infinitiv: „Probleme abmildern" (a).' }
    ]
  },
  {
    id: 'hv',
    title: 'Hörverstehen // Teil 1 + 2',
    shortCode: 'HV',
    module: 'Hörverstehen',
    timeLimitMinutes: 20,
    description: 'Hören Sie die Nachrichten und Durchsagen. Entscheiden Sie, ob die Aussagen (41–50) Richtig (+) oder Falsch (–) sind.',
    items: [
      { n: 41, text: 'Laut BILD AM SONNTAG können in Zukunft nur Mieter, aber nicht Vermieter bestimmte Mietverträge schneller kündigen.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Aussage stimmt mit dem Radiobeitrag überein (+).' },
      { n: 42, text: 'In bestimmten Bundesländern sollen Wohnhäuser abgerissen werden, weil sie unbewohnt sind.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Richtig, wegen des Leerstands sind Rückbaumaßnahmen geplant (+).' },
      { n: 43, text: 'Sowohl die Waldbrände als auch die Hitzewelle in Griechenland sind zu Ende.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Der Sprecher bestätigt die Entwarnung (+).' },
      { n: 44, text: 'In Kanada mussten die Bergungsarbeiten nach einem Tornado wegen erneuter Unwetterwarnungen eingestellt werden.', options: ['+ Richtig', '– Falsch'], correct: '–', explanation: 'Falsch: Die Arbeiten liefen trotz der Warnungen weiter (–).' },
      { n: 45, text: 'Bei einem Fährunglück in der Nähe von Gibraltar gab es nur Sachschaden.', options: ['+ Richtig', '– Falsch'], correct: '–', explanation: 'Falsch: Es gab leider Verletzte (–).' },
      { n: 46, text: 'Auf dem Gipfel der Zugspitze liegt ungefähr ein Meter Schnee.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Richtig, der Wetterbericht meldet 100cm Neuschnee (+).' },
      { n: 47, text: 'Man kann derzeit auf der Zugspitze Ski fahren.', options: ['+ Richtig', '– Falsch'], correct: '–', explanation: 'Falsch: Die Lifte stehen aufgrund der Sicherheitsprüfungen noch still (–).' },
      { n: 48, text: 'Auch in Garmisch-Partenkirchen selbst hat es geschneit.', options: ['+ Richtig', '– Falsch'], correct: '–', explanation: 'Falsch: Im Tal hat es nur geregnet (–).' },
      { n: 49, text: 'In der kommenden Woche erwartet man für die Zugspitzregion freundliches Wetter.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Richtig, ein Hochdruckgebiet bringt Sonnenschein (+).' },
      { n: 50, text: 'Am Sonntag wird ein Gottesdienst auf einer Bergstation abgehalten.', options: ['+ Richtig', '– Falsch'], correct: '+', explanation: 'Richtig, der Bergpfarrer zelebriert die Messe (+).' }
    ]
  }
];
