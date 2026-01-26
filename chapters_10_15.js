// This file contains Chapters 10-15 to be merged into data.js
// Temporary file for development

const chapters_10_15 = {
    10: {
        title: "Zukunftspläne & Träume",
        level: "B1",
        grammar: ["future_will_going_to", "first_conditional"],
        explanation: {
            title: "Über die Zukunft sprechen",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 Grammatik-Fokus</h4>
                        <ul>
                            <li><strong>will:</strong> Spontane Entscheidungen, Vorhersagen, Versprechen</li>
                            <li><strong>going to:</strong> Geplante Handlungen, sichere Vorhersagen</li>
                            <li><strong>First Conditional:</strong> If + present simple, will + infinitive</li>
                        </ul>
                    </div>

                    <h3>🔮 Future: will vs going to</h3>
                    <div class="explanation-box">
                        <p><strong>WILL - Spontane Entscheidungen:</strong></p>
                        <p>- I'<strong>ll</strong> help you. (Gerade entschieden)</p>
                        <p>- It <strong>will</strong> rain tomorrow. (Vorhersage)</p>
                        <br>
                        <p><strong>GOING TO - Geplante Handlungen:</strong></p>
                        <p>- I'<strong>m going to</strong> study medicine. (Plan)</p>
                        <p>- Look at those clouds! It'<strong>s going to</strong> rain. (Offensichtliche Vorhersage)</p>
                    </div>

                    <h3>🔀 First Conditional</h3>
                    <div class="explanation-box">
                        <p><strong>Struktur:</strong> If + Present Simple, will + infinitive</p>
                        <p>- <strong>If</strong> I study hard, I <strong>will</strong> pass the exam.</p>
                        <p>- She <strong>will</strong> be happy <strong>if</strong> you help her.</p>
                        <p>- <strong>If</strong> it rains, we <strong>won't</strong> go to the park.</p>
                    </div>

                    <h3>🎯 Zukunftsvokabular</h3>
                    <table class="vocab-table">
                        <tr><th>English</th><th>Türkçe</th><th>Example</th></tr>
                        <tr><td><strong>plan</strong></td><td>plan</td><td>I'm going to plan my career.</td></tr>
                        <tr><td><strong>goal</strong></td><td>hedef</td><td>My goal is to finish university.</td></tr>
                        <tr><td><strong>dream</strong></td><td>rüya</td><td>My dream is to travel the world.</td></tr>
                        <tr><td><strong>hope</strong></td><td>umut</td><td>I hope I will get the job.</td></tr>
                        <tr><td><strong>ambition</strong></td><td>hırs/hedef</td><td>My ambition is to become a doctor.</td></tr>
                    </table>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "Will oder going to?",
            questions: [
                { question: "I ___ help you with your homework.", answer: "will", options: ["will", "going to", "am going to"], correct: 0, explanation: "Spontane Entscheidung → will" },
                { question: "She ___ visit her grandparents next weekend. (geplant)", answer: "is going to", options: ["will", "is going to", "was going to"], correct: 1, explanation: "Geplante Handlung → going to" },
                { question: "If you study hard, you ___ pass the exam.", answer: "will", options: ["will", "would", "going to"], correct: 0, explanation: "First Conditional → will" },
                { question: "Look at those dark clouds! It ___ rain.", answer: "is going to", options: ["will", "is going to", "rains"], correct: 1, explanation: "Offensichtliche Vorhersage → going to" },
                { question: "If it ___ tomorrow, we won't go.", answer: "rains", options: ["rains", "will rain", "is going to rain"], correct: 0, explanation: "First Conditional: if + present simple" }
            ]
        },
        reading: {
            title: "My Future Plans",
            text: `<div class="reading-text">
                <p><strong>My Plans for the Future</strong></p>
                <p>I'm going to finish university next year. If I pass all my exams, I will get my degree in engineering. After that, I'm going to look for a job in Germany.</p>
                <p>I hope I will find a good company. If I get a job offer, I'll move to Munich. I'm going to learn German if I move there.</p>
                <p>In five years, I hope I will be a senior engineer. My dream is to work on renewable energy projects. If I work hard, I will achieve my goals!</p>
            </div>`,
            questions: [
                { question: "When will the writer finish university?", options: ["Next year", "This year", "In five years", "Last year"], correct: 0, explanation: "Text: 'I'm going to finish university next year'" },
                { question: "What will happen if they pass all exams?", options: ["Get engineering degree", "Move to Munich", "Learn German", "Get a job"], correct: 0, explanation: "Text: 'If I pass all my exams, I will get my degree'" },
                { question: "Where are they going to look for a job?", options: ["In Germany", "In Turkey", "In England", "Online"], correct: 0, explanation: "Text: 'I'm going to look for a job in Germany'" },
                { question: "What will they do if they get a job offer?", options: ["Move to Munich", "Stay home", "Travel", "Study more"], correct: 0, explanation: "Text: 'If I get a job offer, I'll move to Munich'" },
                { question: "What is their dream?", options: ["Work on renewable energy", "Be rich", "Travel the world", "Open a company"], correct: 0, explanation: "Text: 'My dream is to work on renewable energy projects'" }
            ]
        },
        game: {
            type: "sentence_constructor",
            title: "🎯 Zukunfts-Planer: Build Your Future",
            difficulty: "medium",
            sentences: [
                { instruction: "Spontane Entscheidung mit 'will'", words: ["I", "will", "help", "you", "with", "that"], correct: "I will help you with that", explanation: "Spontane Entscheidung → will" },
                { instruction: "Geplante Handlung mit 'going to'", words: ["I'm", "going", "to", "study", "abroad", "next", "year"], correct: "I'm going to study abroad next year", explanation: "Plan → going to" },
                { instruction: "First Conditional", words: ["If", "I", "work", "hard", "I", "will", "succeed"], correct: "If I work hard I will succeed", explanation: "If + present, will + infinitive" },
                { instruction: "Vorhersage mit 'going to'", words: ["It's", "going", "to", "rain", "soon"], correct: "It's going to rain soon", explanation: "Offensichtliche Vorhersage → going to" },
                { instruction: "Bedingung mit Zukunft", words: ["If", "you", "come", "I", "will", "be", "happy"], correct: "If you come I will be happy", explanation: "First Conditional" }
            ]
        }
    },

    11: {
        title: "Technologie & Medien",
        level: "B1",
        grammar: ["passive_voice", "relative_clauses"],
        explanation: {
            title: "Technologie und digitale Welt",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 Grammatik-Fokus</h4>
                        <ul>
                            <li><strong>Passive Voice:</strong> is/are/was/were + past participle</li>
                            <li><strong>Relative Clauses:</strong> who (Personen), which (Dinge), that (beide)</li>
                        </ul>
                    </div>

                    <h3>🔄 Passive Voice - Passiv</h3>
                    <div class="explanation-box">
                        <p><strong>Aktiv → Passiv:</strong></p>
                        <p>Apple makes iPhones. → iPhones <strong>are made</strong> by Apple.</p>
                        <p>They invented the internet. → The internet <strong>was invented</strong> in the 1960s.</p>
                        <br>
                        <p><strong>Struktur:</strong></p>
                        <p>Present: is/are + past participle</p>
                        <p>Past: was/were + past participle</p>
                    </div>

                    <h3>🔗 Relative Clauses</h3>
                    <div class="explanation-box">
                        <p><strong>who</strong> - für Personen:</p>
                        <p>The person <strong>who</strong> invented this is a genius.</p>
                        <br>
                        <p><strong>which</strong> - für Dinge:</p>
                        <p>The app <strong>which</strong> I use is free.</p>
                        <br>
                        <p><strong>that</strong> - für beide:</p>
                        <p>The phone <strong>that</strong> I bought is great.</p>
                    </div>

                    <h3>📱 Tech-Vokabular</h3>
                    <table class="vocab-table">
                        <tr><th>English</th><th>Türkçe</th><th>Example</th></tr>
                        <tr><td><strong>smartphone</strong></td><td>akıllı telefon</td><td>Smartphones are used everywhere.</td></tr>
                        <tr><td><strong>app</strong></td><td>uygulama</td><td>This app was downloaded 1 million times.</td></tr>
                        <tr><td><strong>wifi</strong></td><td>kablosuz internet</td><td>WiFi is provided for free.</td></tr>
                        <tr><td><strong>social media</strong></td><td>sosyal medya</td><td>Social media is used by billions.</td></tr>
                        <tr><td><strong>password</strong></td><td>şifre</td><td>Your password should be changed regularly.</td></tr>
                    </table>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "Passive Voice oder Relative Clauses",
            questions: [
                { question: "This app ___ by millions of people.", answer: "is used", options: ["is used", "uses", "using"], correct: 0, explanation: "Passive Present: is/are + past participle" },
                { question: "The internet ___ in the 1960s.", answer: "was invented", options: ["was invented", "invented", "is invented"], correct: 0, explanation: "Passive Past: was/were + past participle" },
                { question: "The person ___ created this app is very young.", answer: "who", options: ["who", "which", "where"], correct: 0, explanation: "who für Personen" },
                { question: "The phone ___ I bought is great.", answer: "that", options: ["that", "who", "where"], correct: 0, explanation: "that für Dinge" },
                { question: "These videos ___ watched by millions.", answer: "are", options: ["are", "is", "was"], correct: 0, explanation: "Plural → are" }
            ]
        },
        reading: {
            title: "The Invention of the Smartphone",
            text: `<div class="reading-text">
                <p><strong>The Smartphone Revolution</strong></p>
                <p>The first smartphone was created in the 1990s, but smartphones that we use today were made popular by Apple in 2007. The iPhone, which was introduced by Steve Jobs, changed everything.</p>
                <p>Now, smartphones are used by billions of people worldwide. Apps are downloaded every second. Social media, which connects people globally, is accessed mainly through smartphones.</p>
                <p>However, smartphones are criticized by some people who think they make us less social. What do you think?</p>
            </div>`,
            questions: [
                { question: "When were modern smartphones made popular?", options: ["2007", "1990s", "2010", "2000"], correct: 0, explanation: "Text: 'made popular by Apple in 2007'" },
                { question: "Who introduced the iPhone?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], correct: 0, explanation: "Text: 'The iPhone, which was introduced by Steve Jobs'" },
                { question: "How many people use smartphones?", options: ["Billions", "Millions", "Thousands", "Hundreds"], correct: 0, explanation: "Text: 'smartphones are used by billions of people'" },
                { question: "What connects people globally?", options: ["Social media", "Telephones", "Letters", "Email"], correct: 0, explanation: "Text: 'Social media, which connects people globally'" },
                { question: "Why do some people criticize smartphones?", options: ["Make us less social", "Too expensive", "Too big", "Don't work well"], correct: 0, explanation: "Text: 'criticized... who think they make us less social'" }
            ]
        },
        game: {
            type: "conversation_simulator",
            title: "📱 Tech Support Call",
            difficulty: "medium",
            avatar: "👨‍💻",
            nodes: {
                start: { npcText: "Tech support, how can I help you?", choices: [
                    { text: "My WiFi isn't working. Can you help me?", correct: true, feedback: "Klar und höflich!", next: "troubleshoot", npcResponse: "Of course! Let me help you troubleshoot." },
                    { text: "Everything is broken!", correct: false, feedback: "Zu vage! Beschreibe das Problem genau.", next: "troubleshoot", npcResponse: "Let's start with your WiFi issue." },
                    { text: "You guys are terrible!", correct: false, feedback: "Unhöflich! Bleib professionell.", next: "troubleshoot", npcResponse: "I understand your frustration. Let's fix the WiFi problem." }
                ]},
                troubleshoot: { npcText: "Have you tried restarting your router?", choices: [
                    { text: "Yes, I have, but it still doesn't work.", correct: true, feedback: "Perfekt! Klare Information.", next: "solution", npcResponse: "Okay, let me check your account settings." },
                    { text: "What's a router?", correct: false, feedback: "Versuche, das Problem zu beschreiben.", next: "solution", npcResponse: "Let me help you with the settings." },
                    { text: "No, why would I?", correct: false, feedback: "Kooperativ bleiben!", next: "solution", npcResponse: "Alright, let me check something else." }
                ]},
                solution: { npcText: "I've reset your connection. It should work now. Can you test it?", choices: [
                    { text: "Yes, it's working now! Thank you so much!", correct: true, feedback: "Perfekt! Dankbarkeit zeigen.", next: "end", npcResponse: "You're welcome! Have a great day!" },
                    { text: "Finally.", correct: false, feedback: "Zu kurz. Zeige Dankbarkeit!", next: "end", npcResponse: "Glad it's fixed. Goodbye." },
                    { text: "Whatever.", correct: false, feedback: "Unhöflich! Bedanke dich!", next: "end", npcResponse: "Have a good day..." }
                ]},
                end: { type: "end", npcText: "Support call complete!" }
            }
        }
    },

    12: {
        title: "Umwelt & Nachhaltigkeit",
        level: "B1",
        grammar: ["present_perfect_continuous", "comparatives_superlatives"],
        explanation: {
            title: "Umweltschutz und Nachhaltigkeit",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 Grammatik-Fokus</h4>
                        <ul>
                            <li><strong>Present Perfect Continuous:</strong> have/has been + ing</li>
                            <li><strong>Comparatives:</strong> -er, more... than</li>
                            <li><strong>Superlatives:</strong> the -est, the most...</li>
                        </ul>
                    </div>

                    <h3>♻️ Umwelt-Vokabular</h3>
                    <table class="vocab-table">
                        <tr><th>English</th><th>Türkçe</th><th>Example</th></tr>
                        <tr><td><strong>environment</strong></td><td>çevre</td><td>We must protect the environment.</td></tr>
                        <tr><td><strong>pollution</strong></td><td>kirlilik</td><td>Air pollution has been increasing.</td></tr>
                        <tr><td><strong>recycle</strong></td><td>geri dönüştürmek</td><td>I have been recycling for years.</td></tr>
                        <tr><td><strong>climate change</strong></td><td>iklim değişikliği</td><td>Climate change is getting worse.</td></tr>
                        <tr><td><strong>sustainable</strong></td><td>sürdürülebilir</td><td>We need sustainable solutions.</td></tr>
                    </table>

                    <h3>⏳ Present Perfect Continuous</h3>
                    <div class="explanation-box">
                        <p><strong>Form:</strong> have/has + been + ing</p>
                        <p>I <strong>have been working</strong> here for 3 years. (Immer noch dabei)</p>
                        <p>It <strong>has been raining</strong> all day. (Immer noch am Regnen)</p>
                        <br>
                        <p><strong>Verwendung:</strong> Handlung begann in der Vergangenheit und dauert noch an oder hat gerade aufgehört</p>
                    </div>

                    <h3>📊 Comparatives & Superlatives</h3>
                    <div class="explanation-box">
                        <p><strong>Comparative:</strong> bigger, more beautiful</p>
                        <p>- Plastic is <strong>worse</strong> than paper.</p>
                        <p>- Solar energy is <strong>cleaner</strong> than coal.</p>
                        <br>
                        <p><strong>Superlative:</strong> the biggest, the most beautiful</p>
                        <p>- This is <strong>the worst</strong> pollution I've seen.</p>
                        <p>- It's <strong>the most important</strong> issue.</p>
                    </div>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "Present Perfect Continuous und Vergleiche",
            questions: [
                { question: "We ___ (recycle) for many years now.", answer: "have been recycling", options: ["have been recycling", "recycle", "recycled"], correct: 0, explanation: "Present Perfect Continuous für andauernde Handlung" },
                { question: "The climate ___ (get) warmer.", answer: "has been getting", options: ["has been getting", "gets", "got"], correct: 0, explanation: "Andauernder Prozess" },
                { question: "Solar energy is ___ than coal.", answer: "cleaner", options: ["cleaner", "more clean", "cleanest"], correct: 0, explanation: "Comparative: -er" },
                { question: "This is ___ problem we face.", answer: "the most serious", options: ["the most serious", "more serious", "serious"], correct: 0, explanation: "Superlative: the most" },
                { question: "Plastic is ___ for the environment than paper.", answer: "worse", options: ["worse", "worst", "bad"], correct: 0, explanation: "Irregular comparative: bad → worse" }
            ]
        },
        reading: {
            title: "Our Environmental Challenges",
            text: `<div class="reading-text">
                <p><strong>Protecting Our Planet</strong></p>
                <p>Climate change has been getting worse every year. Scientists have been warning us for decades, but we haven't been listening enough.</p>
                <p>Plastic pollution is one of the biggest problems. The oceans are becoming dirtier than ever. However, more people have been recycling and using less plastic.</p>
                <p>The most important thing we can do is act now. Solar and wind energy are cleaner than fossil fuels. We've been making progress, but we need to do more.</p>
            </div>`,
            questions: [
                { question: "What has been getting worse?", options: ["Climate change", "The weather", "The economy", "Technology"], correct: 0, explanation: "Text: 'Climate change has been getting worse'" },
                { question: "How long have scientists been warning us?", options: ["For decades", "For years", "For months", "Recently"], correct: 0, explanation: "Text: 'have been warning us for decades'" },
                { question: "What is one of the biggest problems?", options: ["Plastic pollution", "Traffic", "Noise", "Light"], correct: 0, explanation: "Text: 'Plastic pollution is one of the biggest problems'" },
                { question: "How are the oceans described?", options: ["Becoming dirtier than ever", "Very clean", "Same as before", "Getting better"], correct: 0, explanation: "Text: 'The oceans are becoming dirtier than ever'" },
                { question: "What energies are cleaner than fossil fuels?", options: ["Solar and wind", "Coal and oil", "Gas", "Nuclear"], correct: 0, explanation: "Text: 'Solar and wind energy are cleaner than fossil fuels'" }
            ]
        },
        game: {
            type: "sentence_constructor",
            title: "🌍 Öko-Challenge: Vergleiche & Nachhaltigkeit",
            difficulty: "hard",
            sentences: [
                { instruction: "Present Perfect Continuous", words: ["We", "have", "been", "recycling", "for", "years"], correct: "We have been recycling for years", explanation: "Andauernde Handlung bis jetzt" },
                { instruction: "Comparative", words: ["Solar", "energy", "is", "cleaner", "than", "coal"], correct: "Solar energy is cleaner than coal", explanation: "Vergleich mit -er" },
                { instruction: "Superlative", words: ["This", "is", "the", "most", "important", "issue"], correct: "This is the most important issue", explanation: "Höchste Stufe: the most" },
                { instruction: "Andauernder Prozess", words: ["The", "climate", "has", "been", "getting", "warmer"], correct: "The climate has been getting warmer", explanation: "Present Perfect Continuous" },
                { instruction: "Irregular comparative", words: ["Pollution", "is", "getting", "worse", "every", "year"], correct: "Pollution is getting worse every year", explanation: "bad → worse (irregular)" }
            ]
        }
    },

    13: {
        title: "Kultur & Unterhaltung",
        level: "B1",
        grammar: ["past_continuous"],
        explanation: {
            title: "Kultur, Musik und Film",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 Grammatik-Fokus</h4>
                        <ul>
                            <li><strong>Past Continuous:</strong> was/were + ing</li>
                            <li><strong>while/when:</strong> Zwei gleichzeitige Handlungen in der Vergangenheit</li>
                        </ul>
                    </div>

                    <h3>⏰ Past Continuous</h3>
                    <div class="explanation-box">
                        <p><strong>Form:</strong> was/were + ing</p>
                        <p>I <strong>was watching</strong> a movie when you called.</p>
                        <p>They <strong>were listening</strong> to music all evening.</p>
                        <br>
                        <p><strong>while:</strong> Zwei andauernde Handlungen gleichzeitig</p>
                        <p><strong>While</strong> I was reading, she was cooking.</p>
                        <br>
                        <p><strong>when:</strong> Unterbrechung</p>
                        <p>I was watching TV <strong>when</strong> the phone rang.</p>
                    </div>

                    <h3>🎭 Kultur-Vokabular</h3>
                    <table class="vocab-table">
                        <tr><th>English</th><th>Türkçe</th><th>Example</th></tr>
                        <tr><td><strong>concert</strong></td><td>konser</td><td>I was at a concert last night.</td></tr>
                        <tr><td><strong>museum</strong></td><td>müze</td><td>We were visiting a museum.</td></tr>
                        <tr><td><strong>exhibition</strong></td><td>sergi</td><td>They were looking at the exhibition.</td></tr>
                        <tr><td><strong>performance</strong></td><td>gösteri</td><td>The performance was amazing.</td></tr>
                        <tr><td><strong>artist</strong></td><td>sanatçı</td><td>The artist was signing autographs.</td></tr>
                    </table>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "Past Continuous - was/were + ing",
            questions: [
                { question: "I ___ (watch) a movie when you called.", answer: "was watching", options: ["was watching", "watched", "am watching"], correct: 0, explanation: "Past Continuous: was + ing" },
                { question: "They ___ (listen) to music all evening.", answer: "were listening", options: ["were listening", "listened", "are listening"], correct: 0, explanation: "Plural → were + ing" },
                { question: "While I ___ (read), she ___ (cook).", answer: "was reading, was cooking", options: ["was reading, was cooking", "read, cooked", "am reading, is cooking"], correct: 0, explanation: "Zwei gleichzeitige Handlungen mit while" },
                { question: "What ___ you ___ at 8pm yesterday?", answer: "were, doing", options: ["were, doing", "did, do", "are, doing"], correct: 0, explanation: "Past Continuous Question: were + ing" },
                { question: "The band ___ when the lights went out.", answer: "was playing", options: ["was playing", "played", "plays"], correct: 0, explanation: "Unterbrochene Handlung" }
            ]
        },
        reading: {
            title: "An Unforgettable Concert",
            text: `<div class="reading-text">
                <p><strong>My Concert Experience</strong></p>
                <p>Last Saturday, I was sitting in a huge stadium with 50,000 people. We were all waiting for the concert to begin. People were talking excitedly and vendors were selling drinks.</p>
                <p>Suddenly, the lights went off. Everyone was screaming with excitement! The band appeared and started playing. While they were performing their first song, the crowd was singing along.</p>
                <p>During the third song, something amazing happened. While the singer was performing, fireworks started in the sky. It was magical! Everyone was taking photos and videos.</p>
                <p>It was the best concert I've ever been to!</p>
            </div>`,
            questions: [
                { question: "Where was the writer sitting?", options: ["In a stadium", "In a theater", "At home", "In a park"], correct: 0, explanation: "Text: 'I was sitting in a huge stadium'" },
                { question: "How many people were there?", options: ["50,000", "5,000", "500", "100"], correct: 0, explanation: "Text: 'in a huge stadium with 50,000 people'" },
                { question: "What happened when the lights went off?", options: ["Everyone screamed", "People left", "It was quiet", "Nothing"], correct: 0, explanation: "Text: 'the lights went off. Everyone was screaming'" },
                { question: "What were people doing during the first song?", options: ["Singing along", "Sleeping", "Leaving", "Fighting"], correct: 0, explanation: "Text: 'the crowd was singing along'" },
                { question: "What happened during the third song?", options: ["Fireworks started", "It rained", "Power went out", "Concert ended"], correct: 0, explanation: "Text: 'fireworks started in the sky'" }
            ]
        },
        game: {
            type: "sentence_constructor",
            title: "🎭 Kultur-Quiz: Past Continuous",
            difficulty: "medium",
            sentences: [
                { instruction: "Past Continuous - eine Person", words: ["I", "was", "watching", "a", "movie", "yesterday"], correct: "I was watching a movie yesterday", explanation: "Singular → was + ing" },
                { instruction: "Past Continuous - mehrere Personen", words: ["They", "were", "listening", "to", "music"], correct: "They were listening to music", explanation: "Plural → were + ing" },
                { instruction: "Gleichzeitige Handlungen mit 'while'", words: ["While", "I", "was", "reading", "she", "was", "cooking"], correct: "While I was reading she was cooking", explanation: "while für gleichzeitige Handlungen" },
                { instruction: "Unterbrechung mit 'when'", words: ["I", "was", "sleeping", "when", "you", "called"], correct: "I was sleeping when you called", explanation: "when für Unterbrechung" },
                { instruction: "Frage im Past Continuous", words: ["What", "were", "you", "doing", "at", "8pm"], correct: "What were you doing at 8pm", explanation: "Frage: were + subject + ing" }
            ]
        }
    },

    14: {
        title: "Bildung & Lernen",
        level: "B1",
        grammar: ["reported_speech", "modal_verbs_possibility"],
        explanation: {
            title: "Bildung und Lernstrategien",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 Grammatik-Fokus</h4>
                        <ul>
                            <li><strong>Reported Speech:</strong> He said (that)...</li>
                            <li><strong>Modal Verbs:</strong> could, might, may (Möglichkeiten)</li>
                        </ul>
                    </div>

                    <h3>💬 Reported Speech - Indirekte Rede</h3>
                    <div class="explanation-box">
                        <p><strong>Direkt → Indirekt:</strong></p>
                        <p>"I am tired." → He <strong>said</strong> (that) he <strong>was</strong> tired.</p>
                        <p>"I will come." → She <strong>said</strong> (that) she <strong>would</strong> come.</p>
                        <p>"I can help." → He <strong>said</strong> (that) he <strong>could</strong> help.</p>
                        <br>
                        <p><strong>Zeitenverschiebung:</strong></p>
                        <p>am/is → was | will → would | can → could</p>
                    </div>

                    <h3>🎓 Bildungs-Vokabular</h3>
                    <table class="vocab-table">
                        <tr><th>English</th><th>Türkçe</th><th>Example</th></tr>
                        <tr><td><strong>degree</strong></td><td>derece/diploma</td><td>I'm studying for my degree.</td></tr>
                        <tr><td><strong>exam</strong></td><td>sınav</td><td>The teacher said the exam would be difficult.</td></tr>
                        <tr><td><strong>scholarship</strong></td><td>burs</td><td>She might get a scholarship.</td></tr>
                        <tr><td><strong>graduate</strong></td><td>mezun olmak</td><td>I will graduate next year.</td></tr>
                        <tr><td><strong>research</strong></td><td>araştırma</td><td>He said he was doing research.</td></tr>
                    </table>

                    <h3>🔮 Modal Verbs - Möglichkeiten</h3>
                    <div class="explanation-box">
                        <p><strong>might/may:</strong> vielleicht (50%)</p>
                        <p>I <strong>might</strong> go to university.</p>
                        <p>She <strong>may</strong> get the scholarship.</p>
                        <br>
                        <p><strong>could:</strong> könnte (Möglichkeit)</p>
                        <p>You <strong>could</strong> study abroad.</p>
                        <p>It <strong>could</strong> be difficult.</p>
                    </div>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "Reported Speech und Modal Verbs",
            questions: [
                { question: "Direct: 'I am studying.' → Reported: She said she ___ studying.", answer: "was", options: ["was", "is", "were"], correct: 0, explanation: "am → was (Zeitverschiebung)" },
                { question: "Direct: 'I will pass.' → Reported: He said he ___ pass.", answer: "would", options: ["would", "will", "can"], correct: 0, explanation: "will → would" },
                { question: "Direct: 'I can help.' → Reported: She said she ___ help.", answer: "could", options: ["could", "can", "would"], correct: 0, explanation: "can → could" },
                { question: "I ___ go to university next year. (50% sicher)", answer: "might", options: ["might", "will", "must"], correct: 0, explanation: "might für Möglichkeit (nicht sicher)" },
                { question: "You ___ try this learning method.", answer: "could", options: ["could", "must", "will"], correct: 0, explanation: "could für Vorschlag/Möglichkeit" }
            ]
        },
        reading: {
            title: "University Life",
            text: `<div class="reading-text">
                <p><strong>My University Journey</strong></p>
                <p>My professor said that university would be challenging, and she was right! Last week, she told us that we might have three exams in one week. She said we should prepare well.</p>
                <p>My friend John said he was worried about the exams. He told me he might fail if he doesn't study harder. I said he could join our study group.</p>
                <p>The advisor told us that there may be scholarship opportunities next semester. She said we should apply early because there would be many applicants.</p>
                <p>I think I might apply. It could really help with my expenses!</p>
            </div>`,
            questions: [
                { question: "What did the professor say about university?", options: ["It would be challenging", "It would be easy", "It's boring", "It's fun"], correct: 0, explanation: "Text: 'professor said that university would be challenging'" },
                { question: "How many exams might they have?", options: ["Three in one week", "One per month", "None", "Two per semester"], correct: 0, explanation: "Text: 'we might have three exams in one week'" },
                { question: "Why is John worried?", options: ["He might fail", "He's sick", "He's tired", "He's busy"], correct: 0, explanation: "Text: 'He told me he might fail'" },
                { question: "What did the writer suggest to John?", options: ["Join the study group", "Drop out", "Take a break", "Sleep more"], correct: 0, explanation: "Text: 'I said he could join our study group'" },
                { question: "When may there be scholarship opportunities?", options: ["Next semester", "This week", "Last year", "Never"], correct: 0, explanation: "Text: 'there may be scholarship opportunities next semester'" }
            ]
        },
        game: {
            type: "conversation_simulator",
            title: "📖 Lern-Strategien Beratung",
            difficulty: "medium",
            avatar: "👨‍🏫",
            nodes: {
                start: { npcText: "I heard you're struggling with your studies. What's the problem?", choices: [
                    { text: "I said I'm having trouble concentrating.", correct: true, feedback: "Gut! Reported speech korrekt.", next: "advice", npcResponse: "I understand. You might need better study techniques." },
                    { text: "I have trouble concentrating.", correct: false, feedback: "Direkte Rede, aber gefragt war reported speech!", next: "advice", npcResponse: "I see. Let me give you some advice." },
                    { text: "I'm fine.", correct: false, feedback: "Nicht ehrlich! Bitte um Hilfe.", next: "advice", npcResponse: "Really? Well, let me share some tips anyway." }
                ]},
                advice: { npcText: "You could try the Pomodoro technique. Study for 25 minutes, then take a 5-minute break.", choices: [
                    { text: "That might help! I'll try it.", correct: true, feedback: "Perfekt! Modal verb 'might' richtig verwendet.", next: "more", npcResponse: "Great! I also recommend joining a study group." },
                    { text: "That sounds stupid.", correct: false, feedback: "Unhöflich! Sei offen für Ratschläge.", next: "more", npcResponse: "Well... let me tell you about study groups." },
                    { text: "I will do it.", correct: false, feedback: "Zu sicher! Besser: 'might' oder 'could' für Möglichkeit.", next: "more", npcResponse: "Good. There's also study groups..." }
                ]},
                more: { npcText: "Study groups can really help. Would you like to join one?", choices: [
                    { text: "Yes, I think I could benefit from that.", correct: true, feedback: "Sehr gut! 'could' für Möglichkeit.", next: "end", npcResponse: "Perfect! I'll send you the details." },
                    { text: "Maybe later.", correct: false, feedback: "Zu vage! Sei konkreter.", next: "end", npcResponse: "Alright. Let me know if you change your mind." },
                    { text: "No, I work alone.", correct: false, feedback: "Verschlossene Haltung. Sei offen für neue Methoden!", next: "end", npcResponse: "Okay, but keep it as an option." }
                ]},
                end: { type: "end", npcText: "Good luck with your studies!" }
            }
        }
    },

    15: {
        title: "B1-Abschluss & Prüfung",
        level: "B1",
        grammar: ["mixed_review"],
        explanation: {
            title: "B1 Level - Comprehensive Review",
            content: `
                <div class="explanation-box">
                    <div class="grammar-focus">
                        <h4>🎯 B1 Level - Was du jetzt kannst:</h4>
                        <ul>
                            <li>✅ <strong>Zeitformen:</strong> Present, Past, Future, Present Perfect, Past Continuous</li>
                            <li>✅ <strong>Passive Voice:</strong> Prozesse beschreiben</li>
                            <li>✅ <strong>Conditionals:</strong> Bedingungen ausdrücken</li>
                            <li>✅ <strong>Modal Verbs:</strong> Möglichkeiten, Pflichten, Ratschläge</li>
                            <li>✅ <strong>Reported Speech:</strong> Indirekte Rede</li>
                            <li>✅ <strong>Connectors:</strong> Texte strukturieren</li>
                        </ul>
                    </div>

                    <h3>🎓 B1 Kompetenzen</h3>
                    <div class="explanation-box">
                        <h4>Du kannst jetzt:</h4>
                        <p>✓ Über Erfahrungen, Ereignisse und Pläne sprechen</p>
                        <p>✓ Meinungen begründen und in Diskussionen argumentieren</p>
                        <p>✓ Texte über vertraute Themen verstehen</p>
                        <p>✓ In den meisten Alltagssituationen kommunizieren</p>
                        <p>✓ Persönliche und formelle Briefe/E-Mails schreiben</p>
                        <p>✓ Klare, detaillierte Texte zu verschiedenen Themen verfassen</p>
                    </div>

                    <h3>📚 Themengebiete (Kapitel 1-15)</h3>
                    <table class="vocab-table">
                        <tr><th>Kapitel</th><th>Thema</th><th>Grammatik</th></tr>
                        <tr><td>1-6</td><td>A1/A2 Grundlagen</td><td>Present Simple, Basics</td></tr>
                        <tr><td>7</td><td>Gesundheit</td><td>Past Simple, Modal verbs</td></tr>
                        <tr><td>8</td><td>Arbeitswelt</td><td>Present Perfect</td></tr>
                        <tr><td>9</td><td>Meinungen</td><td>Connectors, Opinion phrases</td></tr>
                        <tr><td>10</td><td>Zukunft</td><td>will/going to, Conditionals</td></tr>
                        <tr><td>11</td><td>Technologie</td><td>Passive Voice, Relative clauses</td></tr>
                        <tr><td>12</td><td>Umwelt</td><td>Present Perfect Continuous</td></tr>
                        <tr><td>13</td><td>Kultur</td><td>Past Continuous</td></tr>
                        <tr><td>14</td><td>Bildung</td><td>Reported Speech</td></tr>
                        <tr><td>15</td><td>Prüfungsvorbereitung</td><td>Mixed Review</td></tr>
                    </table>

                    <div class="grammar-focus">
                        <h4>🎯 Nächste Schritte:</h4>
                        <p>Nach Abschluss aller 15 Kapitel bist du bereit für:</p>
                        <ul>
                            <li>Cambridge PET (Preliminary English Test)</li>
                            <li>telc B1</li>
                            <li>IELTS Band 4-5</li>
                            <li>TOEFL iBT 42-71</li>
                        </ul>
                    </div>
                </div>
            `
        },
        exercise: {
            type: "multiple-choice",
            instructions: "B1 Abschluss-Test - Mixed Grammar",
            questions: [
                { question: "I ___ (work) here for five years now.", answer: "have been working", options: ["have been working", "work", "worked"], correct: 0, explanation: "Present Perfect Continuous - andauernde Handlung" },
                { question: "If you study hard, you ___ pass the exam.", answer: "will", options: ["will", "would", "can"], correct: 0, explanation: "First Conditional - will" },
                { question: "The letter ___ yesterday.", answer: "was sent", options: ["was sent", "sent", "is sent"], correct: 0, explanation: "Passive Voice - Past" },
                { question: "She said she ___ come to the party.", answer: "would", options: ["would", "will", "can"], correct: 0, explanation: "Reported Speech - will → would" },
                { question: "I think technology is ___ than it was 10 years ago.", answer: "better", options: ["better", "more good", "best"], correct: 0, explanation: "Comparative - irregular (good → better)" },
                { question: "While I ___ TV, the phone rang.", answer: "was watching", options: ["was watching", "watched", "watch"], correct: 0, explanation: "Past Continuous - unterbrochene Handlung" },
                { question: "This is the ___ book I've ever read.", answer: "best", options: ["best", "better", "most good"], correct: 0, explanation: "Superlative - irregular (good → best)" },
                { question: "You ___ see a doctor if you're not feeling well.", answer: "should", options: ["should", "must", "can"], correct: 0, explanation: "Modal verb - Ratschlag" },
                { question: "I ___ never ___ to Paris.", answer: "have, been", options: ["have, been", "had, been", "am, been"], correct: 0, explanation: "Present Perfect - Erfahrung" },
                { question: "The person ___ lives next door is very friendly.", answer: "who", options: ["who", "which", "where"], correct: 0, explanation: "Relative clause - who für Personen" }
            ]
        },
        reading: {
            title: "My English Learning Journey",
            text: `<div class="reading-text">
                <p><strong>Reflecting on My Progress</strong></p>
                <p>When I started learning English, I could barely introduce myself. I had studied grammar at school, but I couldn't speak confidently. However, everything changed when I started using this app.</p>
                <p>I have been learning for several months now, and I've made incredible progress. I can now discuss complex topics, express my opinions, and even debate with others. If someone had told me this would happen, I wouldn't have believed them!</p>
                <p>The most important thing I've learned is that practice is key. I've been practicing every day, and it has definitely paid off. My friends have noticed the improvement too. They said I sound much more fluent now.</p>
                <p>Looking ahead, I'm going to take the B1 exam next month. I believe I'm ready. Although I'm a bit nervous, I'm also excited. If I pass, I'll celebrate with my family!</p>
                <p>To anyone who's just starting: don't give up! You might feel frustrated sometimes, but keep practicing. You could surprise yourself with how much you can achieve!</p>
            </div>`,
            questions: [
                { question: "How was the writer's English when they started?", options: ["Could barely introduce themselves", "Very fluent", "Perfect", "Native level"], correct: 0, explanation: "Text: 'I could barely introduce myself'" },
                { question: "How long has the writer been learning?", options: ["Several months", "One year", "One week", "Ten years"], correct: 0, explanation: "Text: 'I have been learning for several months now'" },
                { question: "What can the writer do now?", options: ["Discuss complex topics and debate", "Only say hello", "Nothing", "Read only"], correct: 0, explanation: "Text: 'I can now discuss complex topics, express my opinions, and even debate'" },
                { question: "What has the writer been doing every day?", options: ["Practicing", "Sleeping", "Working", "Eating"], correct: 0, explanation: "Text: 'I've been practicing every day'" },
                { question: "When is the writer going to take the B1 exam?", options: ["Next month", "Tomorrow", "Last week", "Next year"], correct: 0, explanation: "Text: 'I'm going to take the B1 exam next month'" },
                { question: "What will the writer do if they pass?", options: ["Celebrate with family", "Buy a car", "Travel alone", "Nothing"], correct: 0, explanation: "Text: 'If I pass, I'll celebrate with my family'" },
                { question: "What advice does the writer give?", options: ["Don't give up, keep practicing", "Stop learning", "Only study grammar", "Learn quickly"], correct: 0, explanation: "Text: 'don't give up! ...keep practicing'" },
                { question: "How does the writer feel about the exam?", options: ["Nervous but excited", "Only nervous", "Not interested", "Angry"], correct: 0, explanation: "Text: 'Although I'm a bit nervous, I'm also excited'" }
            ]
        },
        game: {
            type: "conversation_simulator",
            title: "🏆 B1 Prüfungs-Simulator - Mündliche Prüfung",
            difficulty: "hard",
            avatar: "👨‍🎓",
            nodes: {
                start: { npcText: "Good morning. Welcome to your B1 speaking exam. Can you tell me about yourself and your interests?", choices: [
                    { text: "Good morning! I'm 25 years old and I've been learning English for a year. I'm interested in technology and travelling.", correct: true, feedback: "Perfekt! Strukturiert, klar, multiple topics!", next: "hobby", npcResponse: "Excellent! Can you tell me more about your interest in technology?" },
                    { text: "Hello. I like things.", correct: false, feedback: "Zu vage! Gib konkrete Informationen und Details.", next: "hobby", npcResponse: "Could you be more specific? What technology interests you?" },
                    { text: "Hi!", correct: false, feedback: "Zu kurz! Prüfung erwartet ausführliche Antworten.", next: "hobby", npcResponse: "Please tell me more about your interests in technology." }
                ]},
                hobby: { npcText: null, choices: [
                    { text: "I've been following developments in AI and renewable energy. I think these technologies will shape our future because they address important challenges.", correct: true, feedback: "Ausgezeichnet! Komplexe Sätze, Meinungen, Begründungen!", next: "opinion", npcResponse: "That's very interesting! Do you think everyone should learn about technology?" },
                    { text: "Technology is nice.", correct: false, feedback: "Viel zu einfach für B1! Begründe und elaboriere.", next: "opinion", npcResponse: "Can you explain why? Should everyone learn about technology?" },
                    { text: "I like computers.", correct: false, feedback: "Zu simpel! Nutze komplexere Strukturen und Vokabular.", next: "opinion", npcResponse: "I see. Do you think technology education is important?" }
                ]},
                opinion: { npcText: null, choices: [
                    { text: "In my opinion, yes. Although technology can be challenging, I believe it's essential for everyone because it's used in almost every profession now. However, we should also maintain human skills.", correct: true, feedback: "PERFEKT! Meinung + Kontrast + Begründung + Kompromiss!", next: "experience", npcResponse: "I completely agree! Now, tell me about a memorable experience you've had." },
                    { text: "Yes, I think so.", correct: false, feedback: "Zu kurz! Begründe deine Meinung ausführlich.", next: "experience", npcResponse: "Why do you think so? Anyway, tell me about a memorable experience." },
                    { text: "Maybe.", correct: false, feedback: "Keine klare Meinung! B1 erwartet Stellungnahme.", next: "experience", npcResponse: "Let's move on. Tell me about a memorable experience." }
                ]},
                experience: { npcText: null, choices: [
                    { text: "Last year, I visited London for the first time. While I was there, I visited many museums and met people from different countries. It was amazing because it helped me practice my English and learn about different cultures.", correct: true, feedback: "EXZELLENT! Past Simple, Past Continuous, Gründe, Details!", next: "future", npcResponse: "Wonderful! What are your plans for the future?" },
                    { text: "I went to London.", correct: false, feedback: "Viel zu kurz! Erzähle die Geschichte mit Details.", next: "future", npcResponse: "When was that? What did you do? Anyway, what are your future plans?" },
                    { text: "I don't remember.", correct: false, feedback: "Unvorbereitet! Denke an Erfahrungen vor der Prüfung.", next: "future", npcResponse: "That's a shame. What about your future plans?" }
                ]},
                future: { npcText: null, choices: [
                    { text: "I'm going to continue improving my English because I want to work in an international company. If I pass this exam, I'll apply for a scholarship to study abroad. I believe this will help me achieve my career goals.", correct: true, feedback: "HERVORRAGEND! Future forms, Conditionals, Ziele!", next: "end", npcResponse: "Excellent! You've done very well. Good luck with your results!" },
                    { text: "I will work.", correct: false, feedback: "Zu simpel! Nutze verschiedene Future-Formen und Details.", next: "end", npcResponse: "Where? When? Anyway, thank you for the interview." },
                    { text: "I don't know.", correct: false, feedback: "Keine Planung? Zeige Zukunftsperspektiven!", next: "end", npcResponse: "I see. Well, thank you for coming." }
                ]},
                end: { type: "end", npcText: "B1 Exam Complete! Check your score." }
            }
        }
    }
};
