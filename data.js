// Merkezi veri yapısı - Kolayca genişletilebilir
var learningData = {
    chapters: {
        1: {
            title: "Temel Bilgiler",
            explanation: {
                title: "İngilizcede Temel Kavramlar",
                content: `
                    <div class="explanation-box">
                        <h3>🎯 Kişi Zamirleri (Personal Pronouns)</h3>
                        <p><strong>📌 Basit Açıklama:</strong> Kişi zamirleri, Türkçedeki "ben, sen, o" gibi kelimelerdir. Cümlede kimin hakkında konuştuğumuzu gösterir.</p>
                        <table class="vocab-table">
                            <tr>
                                <th>İngilizce</th>
                                <th>Türkçe</th>
                                <th>Örnek Cümle</th>
                            </tr>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Ben</td>
                                <td><strong>I</strong> am a teacher. (Ben bir öğretmenim.)</td>
                            </tr>
                            <tr>
                                <td><strong>You</strong></td>
                                <td>Sen/Siz</td>
                                <td><strong>You</strong> are kind. (Sen naziksin.)</td>
                            </tr>
                            <tr>
                                <td><strong>He</strong></td>
                                <td>O (erkek)</td>
                                <td><strong>He</strong> is tall. (O uzun boylu.)</td>
                            </tr>
                            <tr>
                                <td><strong>She</strong></td>
                                <td>O (kadın)</td>
                                <td><strong>She</strong> is smart. (O zeki.)</td>
                            </tr>
                            <tr>
                                <td><strong>It</strong></td>
                                <td>O (eşya/hayvan)</td>
                                <td><strong>It</strong> is big. (O büyük.)</td>
                            </tr>
                            <tr>
                                <td><strong>We</strong></td>
                                <td>Biz</td>
                                <td><strong>We</strong> are friends. (Biz arkadaşız.)</td>
                            </tr>
                            <tr>
                                <td><strong>They</strong></td>
                                <td>Onlar</td>
                                <td><strong>They</strong> are students. (Onlar öğrenci.)</td>
                            </tr>
                        </table>
                        <p>💡 <strong>İpucu:</strong> "It" sadece insanlar için değil! Masa, kedi, araba gibi her şey için kullanılır.</p>
                    </div>

                    <div class="explanation-box">
                        <h3>📝 To Be Fiili - "Olmak" Fiili (Am, Is, Are)</h3>
                        <p><strong>📌 Basit Açıklama:</strong> İngilizcede "olmak" fiili 3 şekilde yazılır: <strong>am, is, are</strong></p>
                        <p><strong>🎯 Hangi zamiri hangi fiille kullanıyoruz?</strong></p>
                        
                        <div class="grammar-focus">
                            <h4>Kural çok basit:</h4>
                            <ul>
                                <li><strong>I</strong> → her zaman <strong>am</strong> kullan</li>
                                <li><strong>He, She, It</strong> → her zaman <strong>is</strong> kullan</li>
                                <li><strong>You, We, They</strong> → her zaman <strong>are</strong> kullan</li>
                            </ul>
                        </div>

                        <p><strong>📚 Örnekler:</strong></p>
                        <ul>
                            <li>I <strong>am</strong> happy. (Ben mutluyum.) ✓</li>
                            <li>I <strong>is</strong> happy. (❌ YANLIŞ! "I" ile "is" kullanılmaz)</li>
                            <li>She <strong>is</strong> a doctor. (O bir doktor.) ✓</li>
                            <li>We <strong>are</strong> students. (Biz öğrenciyiz.) ✓</li>
                            <li>The cat <strong>is</strong> black. (Kedi siyah.) ✓ - "cat" = "it" gibi düşün</li>
                            <li>My parents <strong>are</strong> happy. (Ailem mutlu.) ✓ - "parents" = çoğul = "they"</li>
                        </ul>

                        <p><strong>🔸 Kısaltmalar (Günlük konuşmada çok kullanılır):</strong></p>
                        <ul>
                            <li>I am → <strong>I'm</strong></li>
                            <li>You are → <strong>You're</strong></li>
                            <li>He is → <strong>He's</strong></li>
                            <li>She is → <strong>She's</strong></li>
                            <li>It is → <strong>It's</strong></li>
                            <li>We are → <strong>We're</strong></li>
                            <li>They are → <strong>They're</strong></li>
                        </ul>
                        <p>Örnek: <strong>I'm</strong> tired. = I am tired. (Ben yorgunum.)</p>
                    </div>

                    <div class="explanation-box">
                        <h3>🔄 Olumsuz Cümleler (Negative Sentences)</h3>
                        <p><strong>📌 Basit Açıklama:</strong> Olumsuz yapmak için fiilden sonra <strong>not</strong> ekle!</p>
                        
                        <div class="grammar-focus">
                            <h4>Formül:</h4>
                            <p>Özne + am/is/are + <strong>not</strong> + sıfat/isim</p>
                        </div>

                        <p><strong>📚 Örnekler:</strong></p>
                        <ul>
                            <li>I am <strong>not</strong> sad. (Ben üzgün <strong>değilim</strong>.)</li>
                            <li>She is <strong>not</strong> a teacher. (O öğretmen <strong>değil</strong>.)</li>
                            <li>We are <strong>not</strong> tired. (Biz yorgun <strong>değiliz</strong>.)</li>
                            <li>The book is <strong>not</strong> interesting. (Kitap ilginç <strong>değil</strong>.)</li>
                        </ul>

                        <p><strong>🔸 Kısaltmalar:</strong></p>
                        <ul>
                            <li>I am not → <strong>I'm not</strong> (tek kısaltma)</li>
                            <li>You are not → <strong>You're not</strong> VEYA <strong>You aren't</strong></li>
                            <li>He is not → <strong>He's not</strong> VEYA <strong>He isn't</strong></li>
                            <li>She is not → <strong>She's not</strong> VEYA <strong>She isn't</strong></li>
                            <li>It is not → <strong>It's not</strong> VEYA <strong>It isn't</strong></li>
                            <li>We are not → <strong>We're not</strong> VEYA <strong>We aren't</strong></li>
                            <li>They are not → <strong>They're not</strong> VEYA <strong>They aren't</strong></li>
                        </ul>
                        <p>Örnek: <strong>She isn't</strong> happy. = She is not happy. (O mutlu değil.)</p>
                    </div>

                    <div class="explanation-box">
                        <h3>❓ Soru Cümleleri (Questions)</h3>
                        <p><strong>📌 Basit Açıklama:</strong> Soru yapmak için <strong>am/is/are</strong> fiilini cümlenin başına al!</p>
                        
                        <div class="grammar-focus">
                            <h4>Formül:</h4>
                            <p><strong>Am/Is/Are</strong> + özne + sıfat/isim + ?</p>
                        </div>

                        <p><strong>🔄 Normal cümleden soruya:</strong></p>
                        <ul>
                            <li>You <strong>are</strong> happy. → <strong>Are</strong> you happy? (Mutlu musun?)</li>
                            <li>She <strong>is</strong> a doctor. → <strong>Is</strong> she a doctor? (O doktor mu?)</li>
                            <li>They <strong>are</strong> students. → <strong>Are</strong> they students? (Onlar öğrenci mi?)</li>
                        </ul>

                        <p><strong>📚 Daha fazla örnek:</strong></p>
                        <ul>
                            <li><strong>Am I</strong> late? (Ben geç mi kaldım?)</li>
                            <li><strong>Is he</strong> your brother? (O senin kardeşin mi?)</li>
                            <li><strong>Are you</strong> tired? (Yorgun musun?)</li>
                            <li><strong>Is the book</strong> expensive? (Kitap pahalı mı?)</li>
                            <li><strong>Are they</strong> at home? (Onlar evde mi?)</li>
                        </ul>

                        <p><strong>💬 Cevaplar:</strong></p>
                        <ul>
                            <li>Are you happy? → Yes, I <strong>am</strong>. / No, I'm <strong>not</strong>.</li>
                            <li>Is she a teacher? → Yes, she <strong>is</strong>. / No, she <strong>isn't</strong>.</li>
                            <li>Are they students? → Yes, they <strong>are</strong>. / No, they <strong>aren't</strong>.</li>
                        </ul>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel (1-8)
                {
                    type: "dropdown",
                    question: "I ___ a student.",
                    options: ["am", "is", "are"],
                    correct: "am",
                    feedback: "Neden 'am'? - 'I' ile sadece 'am' kullanılır. I am = Ben'im"
                },
                {
                    type: "dropdown",
                    question: "She ___ a doctor.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "Neden 'is'? - He/She/It ile 'is' kullanılır. She is = O'dur (kadın)"
                },
                {
                    type: "dropdown",
                    question: "They ___ happy.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "Neden 'are'? - You/We/They ile 'are' kullanılır. They are = Onlar'dır"
                },
                {
                    type: "dropdown",
                    question: "We ___ friends.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "Neden 'are'? - 'We' (biz) ile 'are' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "He ___ tall.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "Neden 'is'? - 'He' (o-erkek) ile 'is' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "It ___ big.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "Neden 'is'? - 'It' ile 'is' kullanılır. It = O (nesneler için)"
                },
                {
                    type: "yesno",
                    question: "You are a teacher. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! 'You are' → Sen'sin/Siz'siniz yapısı doğru kullanılmış."
                },
                {
                    type: "yesno",
                    question: "He am tall. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'He' ile 'am' kullanılmaz. Doğrusu: He IS tall. He/She/It → IS"
                },
                // Seviye 2: Orta (9-17)
                {
                    type: "dropdown",
                    question: "You ___ very kind.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "'You' ile her zaman 'are' kullanılır (tekil veya çoğul)."
                },
                {
                    type: "yesno",
                    question: "I is a student. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'I' ile sadece 'am' kullanılır. Doğrusu: I AM a student."
                },
                {
                    type: "dropdown",
                    question: "The cat ___ on the table.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "'The cat' = It (hayvan), bu yüzden 'is' kullanılır."
                },
                {
                    type: "yesno",
                    question: "We are happy. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! 'We are' = Biz'iz yapısı doğru."
                },
                {
                    type: "dropdown",
                    question: "My mother ___ at home.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "'My mother' = She (o-kadın), bu yüzden 'is' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "My parents ___ from Turkey.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "'My parents' = They (çoğul), bu yüzden 'are' kullanılır."
                },
                {
                    type: "yesno",
                    question: "They is students. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'They' ile 'is' kullanılmaz. Doğrusu: They ARE students."
                },
                {
                    type: "dropdown",
                    question: "The books ___ on the shelf.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "'The books' çoğul (kitaplar), bu yüzden 'are' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "The weather ___ nice today.",
                    options: ["am", "is", "are"],
                    correct: "is",
                    feedback: "'The weather' = It (hava durumu), bu yüzden 'is' kullanılır."
                },
                // Seviye 3: İleri (18-27)
                {
                    type: "yesno",
                    question: "I am not sad. ✓ Doğru olumsuz cümle mi?",
                    correct: true,
                    feedback: "Evet doğru! Olumsuz: I am not = Ben değilim"
                },
                {
                    type: "yesno",
                    question: "She isn't happy. ✓ Doğru kısaltma mı?",
                    correct: true,
                    feedback: "Evet! isn't = is not (kısaltma doğru)"
                },
                {
                    type: "dropdown",
                    question: "___ you a teacher?",
                    options: ["Am", "Is", "Are"],
                    correct: "Are",
                    feedback: "Soru cümlesinde 'you' ile 'Are' kullanılır. Are you...?"
                },
                {
                    type: "dropdown",
                    question: "___ he from Germany?",
                    options: ["Am", "Is", "Are"],
                    correct: "Is",
                    feedback: "Soru cümlesinde 'he' ile 'Is' kullanılır. Is he...?"
                },
                {
                    type: "yesno",
                    question: "Am I late? ✓ Doğru soru cümlesi mi?",
                    correct: true,
                    feedback: "Evet doğru! Soru: Am I...? = ...miyim?"
                },
                {
                    type: "dropdown",
                    question: "They ___ not at school.",
                    options: ["am", "is", "are"],
                    correct: "are",
                    feedback: "Olumsuz cümle: They are not (aren't) = Onlar değiller"
                },
                {
                    type: "yesno",
                    question: "We aren't tired. ✓ Doğru olumsuz mu?",
                    correct: true,
                    feedback: "Evet! aren't = are not (doğru kısaltma ve olumsuz yapı)"
                },
                {
                    type: "dropdown",
                    question: "___ they your friends?",
                    options: ["Am", "Is", "Are"],
                    correct: "Are",
                    feedback: "Soru: Are they...? = Onlar ... mı?"
                },
                {
                    type: "dropdown",
                    question: "___ this your book?",
                    options: ["Am", "Is", "Are"],
                    correct: "Is",
                    feedback: "'This' (bu) tekil, bu yüzden 'Is' kullanılır. Is this...?"
                },
                {
                    type: "yesno",
                    question: "Are you happy? - Yes, I am. ✓ Doğru cevap mı?",
                    correct: true,
                    feedback: "Evet doğru! Kısa cevap: Yes, I am. (Evet, öyleyim)"
                }
            ],
            reading: {
                title: "My First Day at School",
                text: `
                    <p>My name is Sarah. I am a new student. Today is my first day at school. I am very happy but also a little nervous.</p>
                    <p>My teacher is Mrs. Brown. She is very kind and friendly. My classroom is big and bright. There are twenty students in my class. They are all very nice to me.</p>
                    <p>At lunch time, I eat with my new friend, Emma. She is from London. We talk about our families and hobbies. Emma likes reading books and I like drawing pictures.</p>
                    <p>I am happy at my new school. I think this year will be wonderful!</p>
                `,
                questions: [
                    {
                        question: "Who is the teacher?",
                        options: ["Mrs. Brown", "Mrs. Smith", "Mr. Brown", "Sarah"],
                        correct: "Mrs. Brown",
                        feedback: "Metinde 'My teacher is Mrs. Brown' yazıyor."
                    },
                    {
                        question: "How does Sarah feel on her first day?",
                        options: ["Happy and nervous", "Sad and angry", "Tired and bored", "Only happy"],
                        correct: "Happy and nervous",
                        feedback: "Sarah 'very happy but also a little nervous' (çok mutlu ama biraz gergin) diyor."
                    },
                    {
                        question: "How many students are in the class?",
                        options: ["Twenty", "Ten", "Fifteen", "Thirty"],
                        correct: "Twenty",
                        feedback: "Metinde 'There are twenty students in my class' yazıyor."
                    },
                    {
                        question: "What does Emma like?",
                        options: ["Reading books", "Drawing pictures", "Playing sports", "Watching TV"],
                        correct: "Reading books",
                        feedback: "Metinde 'Emma likes reading books' yazıyor."
                    },
                    {
                        question: "Where is Emma from?",
                        options: ["London", "Paris", "Berlin", "Istanbul"],
                        correct: "London",
                        feedback: "Emma 'is from London' (Londra'dan) yazıyor metinde."
                    }
                ]
            },
            game: {
                type: "memory",
                title: "Eşleştirme Oyunu - Kişi Zamirleri",
                pairs: [
                    { id: 1, content: "I", match: "Ben" },
                    { id: 2, content: "You", match: "Sen/Siz" },
                    { id: 3, content: "He", match: "O (erkek)" },
                    { id: 4, content: "She", match: "O (kadın)" },
                    { id: 5, content: "We", match: "Biz" },
                    { id: 6, content: "They", match: "Onlar" }
                ]
            }
        },
        2: {
            title: "Aile",
            explanation: {
                title: "Aile Üyeleri ve İlişkiler",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Possessive Adjectives (İyelik Sıfatları):</strong> Sahiplik belirtme (my, your, his, her)</li>
                            <li><strong>Family Members (Aile Üyeleri):</strong> Aile kelime dağarcığı</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: İyelik Sıfatları (Possessive Adjectives)</h3>
                        <p><strong>Ne zaman kullanılır?</strong></p>
                        <p>Bir şeyin kime ait olduğunu göstermek için:</p>
                        <ul>
                            <li>✅ This is <strong>my</strong> book (Bu <strong>benim</strong> kitabım)</li>
                            <li>✅ <strong>Her</strong> sister is tall (<strong>Onun</strong> kız kardeşi uzun)</li>
                            <li>✅ <strong>Our</strong> house is big (<strong>Bizim</strong> evimiz büyük)</li>
                        </ul>

                        <h4>📋 İyelik Sıfatları Tablosu</h4>
                        <table class="vocab-table">
                            <tr><th>Zamir (Pronoun)</th><th>İyelik Sıfatı</th><th>Türkçe</th><th>Örnek</th></tr>
                            <tr><td>I (Ben)</td><td><strong>my</strong></td><td>benim</td><td>my mother (annem)</td></tr>
                            <tr><td>You (Sen/Siz)</td><td><strong>your</strong></td><td>senin/sizin</td><td>your father (baban)</td></tr>
                            <tr><td>He (O-erkek)</td><td><strong>his</strong></td><td>onun</td><td>his brother (kardeşi)</td></tr>
                            <tr><td>She (O-kadın)</td><td><strong>her</strong></td><td>onun</td><td>her sister (kız kardeşi)</td></tr>
                            <tr><td>It (O-nesne)</td><td><strong>its</strong></td><td>onun</td><td>its tail (kuyruğu)</td></tr>
                            <tr><td>We (Biz)</td><td><strong>our</strong></td><td>bizim</td><td>our family (ailemiz)</td></tr>
                            <tr><td>They (Onlar)</td><td><strong>their</strong></td><td>onların</td><td>their house (evleri)</td></tr>
                        </table>

                        <h4>⚡ KURAL: İyelik Sıfatı + İsim</h4>
                        <p><strong>Yapı:</strong> Possessive Adjective + Noun (İsim)</p>
                        <ul>
                            <li>✅ <strong>My</strong> mother (Doğru)</li>
                            <li>❌ <strong>I</strong> mother (YANLIŞ!)</li>
                            <li>✅ <strong>His</strong> father (Doğru)</li>
                            <li>❌ <strong>He</strong> father (YANLIŞ!)</li>
                        </ul>

                        <p><strong>💡 İpucu:</strong> İyelik sıfatlarından sonra MUTLAKA bir isim gelir!</p>
                        <ul>
                            <li>My <strong>book</strong> (kitabım)</li>
                            <li>Your <strong>name</strong> (adın)</li>
                            <li>Her <strong>car</strong> (arabası)</li>
                        </ul>

                        <h4>🔧 Örneklerle Öğren</h4>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Açıklama</th></tr>
                            <tr><td>This is <strong>my</strong> mother</td><td>Bu benim annem</td><td>Zamir: I → İyelik: my</td></tr>
                            <tr><td>That is <strong>your</strong> father</td><td>O senin baban</td><td>Zamir: You → İyelik: your</td></tr>
                            <tr><td><strong>His</strong> brother is tall</td><td>Onun kardeşi uzun</td><td>Zamir: He → İyelik: his</td></tr>
                            <tr><td><strong>Her</strong> sister is kind</td><td>Onun kız kardeşi nazik</td><td>Zamir: She → İyelik: her</td></tr>
                            <tr><td><strong>Our</strong> family is big</td><td>Bizim ailemiz büyük</td><td>Zamir: We → İyelik: our</td></tr>
                            <tr><td><strong>Their</strong> house is nice</td><td>Onların evi güzel</td><td>Zamir: They → İyelik: their</td></tr>
                        </table>
                    </div>

                    <div class="explanation-box">
                        <h3>👨‍👩‍👧‍👦 Aile Kelimeleri (Family Members)</h3>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>Mother</strong></td><td>Anne</td><td>My mother is kind</td></tr>
                            <tr><td><strong>Father</strong></td><td>Baba</td><td>His father works</td></tr>
                            <tr><td><strong>Sister</strong></td><td>Kız kardeş</td><td>Her sister is 10</td></tr>
                            <tr><td><strong>Brother</strong></td><td>Erkek kardeş</td><td>My brother plays</td></tr>
                            <tr><td><strong>Grandmother</strong></td><td>Büyükanne</td><td>Our grandmother cooks</td></tr>
                            <tr><td><strong>Grandfather</strong></td><td>Büyükbaba</td><td>Their grandfather reads</td></tr>
                            <tr><td><strong>Daughter</strong></td><td>Kız evlat</td><td>My daughter is 5</td></tr>
                            <tr><td><strong>Son</strong></td><td>Erkek evlat</td><td>Your son is smart</td></tr>
                        </table>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel İyelik (1-9)
                {
                    type: "dropdown",
                    question: "This is ___ mother.",
                    options: ["my", "I", "me"],
                    correct: "my",
                    feedback: "Neden 'my'? - Sahiplik için 'my' (benim) kullanılır. I = Ben, my = benim"
                },
                {
                    type: "dropdown",
                    question: "She is ___ sister.",
                    options: ["his", "he", "him"],
                    correct: "his",
                    feedback: "Neden 'his'? - 'His' erkeklerde sahiplik belirtir (onun). He = O, his = onun"
                },
                {
                    type: "dropdown",
                    question: "They are ___ children.",
                    options: ["our", "we", "us"],
                    correct: "our",
                    feedback: "Neden 'our'? - 'Our' bizim demektir. We = Biz, our = bizim"
                },
                {
                    type: "dropdown",
                    question: "This is ___ father.",
                    options: ["your", "you"],
                    correct: "your",
                    feedback: "Sahiplik: 'your' = senin/sizin. You = sen, your = senin"
                },
                {
                    type: "dropdown",
                    question: "That is ___ brother.",
                    options: ["her", "she"],
                    correct: "her",
                    feedback: "'Her' kadınlarda sahiplik belirtir (onun). She = O (kadın), her = onun"
                },
                {
                    type: "dropdown",
                    question: "We love ___ grandmother.",
                    options: ["our", "we"],
                    correct: "our",
                    feedback: "'Our' = bizim. Our grandmother = Bizim büyükannemiz"
                },
                {
                    type: "yesno",
                    question: "Your father is tall. ✓ Doğru yapı mı?",
                    correct: true,
                    feedback: "Evet! 'Your father' → Senin baban. Yapı doğru: İyelik + Aile kelimesi"
                },
                {
                    type: "yesno",
                    question: "I mother is nice. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'I' sahiplik değil. Doğrusu: MY mother is nice."
                },
                {
                    type: "dropdown",
                    question: "___ parents are at home.",
                    options: ["Their", "They"],
                    correct: "Their",
                    feedback: "'Their' = onların. They = onlar, their = onların"
                },
                // Seviye 2: Aile Kelimeleri (10-18)
                {
                    type: "dropdown",
                    question: "My ___ is a teacher. (anne)",
                    options: ["mother", "father", "brother"],
                    correct: "mother",
                    feedback: "Mother = Anne"
                },
                {
                    type: "dropdown",
                    question: "His ___ is very tall. (baba)",
                    options: ["father", "mother", "sister"],
                    correct: "father",
                    feedback: "Father = Baba"
                },
                {
                    type: "dropdown",
                    question: "Her ___ is 10 years old. (erkek kardeş)",
                    options: ["brother", "sister", "son"],
                    correct: "brother",
                    feedback: "Brother = Erkek kardeş"
                },
                {
                    type: "dropdown",
                    question: "My ___ is a student. (kız kardeş)",
                    options: ["sister", "brother", "daughter"],
                    correct: "sister",
                    feedback: "Sister = Kız kardeş"
                },
                {
                    type: "dropdown",
                    question: "Our ___ lives in Ankara. (büyükanne)",
                    options: ["grandmother", "grandfather", "mother"],
                    correct: "grandmother",
                    feedback: "Grandmother = Büyükanne"
                },
                {
                    type: "dropdown",
                    question: "Their ___ is 80 years old. (büyükbaba)",
                    options: ["grandfather", "grandmother", "father"],
                    correct: "grandfather",
                    feedback: "Grandfather = Büyükbaba"
                },
                {
                    type: "yesno",
                    question: "My son is 5 years old. ✓ (erkek evlat hakkında) Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! Son = Erkek evlat"
                },
                {
                    type: "yesno",
                    question: "His daughter is a doctor. ✓ (kız evlat) Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! Daughter = Kız evlat"
                },
                {
                    type: "dropdown",
                    question: "My ___ has two children. (erkek evlat)",
                    options: ["son", "daughter", "brother"],
                    correct: "son",
                    feedback: "Son = Erkek evlat (oğul)"
                },
                // Seviye 3: Kompleks (19-28)
                {
                    type: "yesno",
                    question: "She mother is a teacher. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'She' sahiplik değil. Doğrusu: HER mother is a teacher."
                },
                {
                    type: "dropdown",
                    question: "Is this ___ father?",
                    options: ["your", "you"],
                    correct: "your",
                    feedback: "Soru cümlesinde de sahiplik: 'your' = senin"
                },
                {
                    type: "dropdown",
                    question: "___ brother and sister are twins.",
                    options: ["My", "I"],
                    correct: "My",
                    feedback: "'My' = benim. Sahiplik ifadesi gerekli."
                },
                {
                    type: "yesno",
                    question: "Our parents are not at home. ✓ Doğru olumsuz mu?",
                    correct: true,
                    feedback: "Evet doğru! Our parents = Bizim ebeveynlerimiz, are not = değiller"
                },
                {
                    type: "dropdown",
                    question: "Where is ___ grandmother?",
                    options: ["his", "he"],
                    correct: "his",
                    feedback: "Soru cümlesinde sahiplik: 'his' = onun (erkek)"
                },
                {
                    type: "dropdown",
                    question: "___ daughter is very intelligent.",
                    options: ["Their", "They"],
                    correct: "Their",
                    feedback: "'Their' = onların. Sahiplik ifadesi."
                },
                {
                    type: "yesno",
                    question: "Are your parents from Turkey? ✓ Doğru soru mu?",
                    correct: true,
                    feedback: "Evet doğru! Soru yapısı: Are + your parents + from Turkey?"
                },
                {
                    type: "dropdown",
                    question: "___ sister is not married.",
                    options: ["Her", "She"],
                    correct: "Her",
                    feedback: "Olumsuz cümlede de sahiplik: 'Her' = onun (kadın)"
                },
                {
                    type: "dropdown",
                    question: "My mother and father = My ___",
                    options: ["parents", "children", "brothers"],
                    correct: "parents",
                    feedback: "Parents = Ebeveynler (anne ve baba)"
                },
                {
                    type: "yesno",
                    question: "His son and daughter = His children ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! Children = Çocuklar (oğul ve kız evlat)"
                }
            ],
            reading: {
                title: "My Family",
                text: `
                    <p>Hello! My name is Tom and I want to tell you about my family. We are a big family.</p>
                    <p>My father is a doctor. He works at the hospital. His name is John. He is 45 years old. My mother is a teacher. Her name is Mary. She teaches English at a school. She is 42 years old.</p>
                    <p>I have one brother and one sister. My brother's name is David. He is 18 years old and he is a university student. My sister is younger than me. Her name is Lisa and she is 10 years old. She goes to primary school.</p>
                    <p>We also have grandparents. My grandmother lives with us. She is 70 years old and she is very kind. She cooks delicious food for us. My grandfather lives in another city. We visit him every summer.</p>
                    <p>I love my family very much. We spend time together every weekend.</p>
                `,
                questions: [
                    {
                        question: "What is Tom's father's job?",
                        options: ["Doctor", "Teacher", "Engineer", "Lawyer"],
                        correct: "Doctor",
                        feedback: "Metinde 'My father is a doctor' yazıyor."
                    },
                    {
                        question: "How old is Tom's mother?",
                        options: ["42 years old", "45 years old", "40 years old", "38 years old"],
                        correct: "42 years old",
                        feedback: "Mary 'is 42 years old' (42 yaşında) yazıyor."
                    },
                    {
                        question: "Who is David?",
                        options: ["Tom's brother", "Tom's father", "Tom's grandfather", "Tom's friend"],
                        correct: "Tom's brother",
                        feedback: "David, Tom'un erkek kardeşi (brother). Metinde 'My brother's name is David' yazıyor."
                    },
                    {
                        question: "How old is Lisa?",
                        options: ["10 years old", "18 years old", "12 years old", "8 years old"],
                        correct: "10 years old",
                        feedback: "Lisa 'is 10 years old' yazıyor metinde."
                    },
                    {
                        question: "Who lives with Tom's family?",
                        options: ["Grandmother", "Grandfather", "Uncle", "Aunt"],
                        correct: "Grandmother",
                        feedback: "Metinde 'My grandmother lives with us' (Büyükannem bizimle yaşıyor) yazıyor."
                    },
                    {
                        question: "What does the grandmother do?",
                        options: ["She cooks food", "She works at hospital", "She teaches", "She studies"],
                        correct: "She cooks food",
                        feedback: "Büyükanne 'cooks delicious food for us' (bizim için lezzetli yemekler pişirir)."
                    }
                ]
            },
            game: {
                type: "memory",
                title: "Aile Kelimeleri Eşleştirme",
                pairs: [
                    { id: 1, content: "Mother", match: "Anne" },
                    { id: 2, content: "Father", match: "Baba" },
                    { id: 3, content: "Sister", match: "Kız kardeş" },
                    { id: 4, content: "Brother", match: "Erkek kardeş" },
                    { id: 5, content: "Grandmother", match: "Büyükanne" },
                    { id: 6, content: "Son", match: "Erkek evlat" }
                ]
            }
        },
        3: {
            title: "Günlük Rutin",
            explanation: {
                title: "Günlük Aktiviteler ve Sırası",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Present Simple (Geniş Zaman):</strong> Günlük rutinler ve alışkanlıklar</li>
                            <li><strong>Time Expressions (Zaman İfadeleri):</strong> every day, always, usually, never</li>
                            <li><strong>-S/-ES Kuralı:</strong> He/She/It ile fiillere -s/-es ekleme</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Present Simple - Günlük Rutinler</h3>
                        <p><strong>Ne zaman kullanılır?</strong></p>
                        <ul>
                            <li>✅ Her gün yaptığım şeyler: I wake up at 7 am (Saat 7'de uyanırım)</li>
                            <li>✅ Alışkanlıklar: She goes to school every day (Her gün okula gider)</li>
                            <li>✅ Düzenli aktiviteler: We eat lunch at 12 (Saat 12'de öğle yemeği yeriz)</li>
                        </ul>

                        <h4>🔧 KURAL 1: I/You/We/They + FİİLİN YALIN HALİ</h4>
                        <table class="vocab-table">
                            <tr><th>Özne</th><th>Fiil</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>I</td><td>wake up</td><td>I wake up early</td><td>Erken uyanırım</td></tr>
                            <tr><td>You</td><td>eat</td><td>You eat breakfast</td><td>Kahvaltı yaparsın</td></tr>
                            <tr><td>We</td><td>go</td><td>We go to work</td><td>İşe gideriz</td></tr>
                            <tr><td>They</td><td>watch</td><td>They watch TV</td><td>TV izlerler</td></tr>
                        </table>

                        <h4>🔧 KURAL 2: He/She/It + FİİL + S/ES</h4>
                        <table class="vocab-table">
                            <tr><th>Özne</th><th>Yalın Fiil</th><th>+S/-ES</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>He</td><td>wake</td><td>wake<strong>s</strong></td><td>He wakes up</td><td>O uyanır</td></tr>
                            <tr><td>She</td><td>eat</td><td>eat<strong>s</strong></td><td>She eats</td><td>O yer</td></tr>
                            <tr><td>He</td><td>watch</td><td>watch<strong>es</strong></td><td>He watches</td><td>O izler</td></tr>
                            <tr><td>She</td><td>go</td><td>go<strong>es</strong></td><td>She goes</td><td>O gider</td></tr>
                        </table>

                        <p><strong>💡 İpucu: -ES ne zaman eklenir?</strong></p>
                        <p>Fiil bu harflerle biterse <strong>-ES</strong> ekleyin:</p>
                        <ul>
                            <li>-ch: watch → watch<strong>es</strong> (izler)</li>
                            <li>-sh: wash → wash<strong>es</strong> (yıkar)</li>
                            <li>-ss: miss → miss<strong>es</strong> (özler)</li>
                            <li>-x: fix → fix<strong>es</strong> (tamir eder)</li>
                            <li>-o: go → go<strong>es</strong> (gider), do → do<strong>es</strong> (yapar)</li>
                        </ul>

                        <h4>❌ OLUMSUZ (Negative)</h4>
                        <table class="vocab-table">
                            <tr><th>Özne</th><th>Olumsuz</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>I/You/We/They</td><td><strong>don't</strong> + fiil</td><td>I don't work</td><td>Çalışmam</td></tr>
                            <tr><td>He/She/It</td><td><strong>doesn't</strong> + fiil</td><td>She doesn't work</td><td>Çalışmaz</td></tr>
                        </table>

                        <p><strong>⚠️ ÖNEMLİ:</strong> Olumsuz ve soruda -s/-es DÜŞER!</p>
                        <ul>
                            <li>✅ He doesn't work (Doğru - work yalın halde)</li>
                            <li>❌ He doesn't works (YANLIŞ!)</li>
                        </ul>

                        <h4>❓ SORU (Questions)</h4>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Do + I/you/we/they + fiil?</td><td>Do you work?</td><td>Çalışıyor musun?</td></tr>
                            <tr><td>Does + he/she/it + fiil?</td><td>Does she work?</td><td>O çalışıyor mu?</td></tr>
                        </table>

                        <h4>⏰ Zaman İfadeleri (Frequency Adverbs)</h4>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>%</th><th>Örnek</th></tr>
                            <tr><td>always</td><td>her zaman</td><td>100%</td><td>I always wake up early</td></tr>
                            <tr><td>usually</td><td>genellikle</td><td>80%</td><td>She usually eats breakfast</td></tr>
                            <tr><td>often</td><td>sık sık</td><td>60%</td><td>We often watch TV</td></tr>
                            <tr><td>sometimes</td><td>bazen</td><td>40%</td><td>He sometimes reads</td></tr>
                            <tr><td>rarely</td><td>nadiren</td><td>20%</td><td>They rarely go out</td></tr>
                            <tr><td>never</td><td>asla/hiç</td><td>0%</td><td>I never smoke</td></tr>
                        </table>

                        <p><strong>💡 İpucu:</strong> Bu kelimeler genelde TO BE fiilinden sonra, normal fiilden ÖNCE gelir:</p>
                        <ul>
                            <li>I am <strong>always</strong> happy (TO BE'den sonra)</li>
                            <li>I <strong>always</strong> eat breakfast (normal fiilden önce)</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>⏰ Günlük Fiiller (Daily Routine Verbs)</h3>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>Wake up</strong></td><td>Uyanmak</td><td>I wake up at 7 am</td></tr>
                            <tr><td><strong>Get up</strong></td><td>Kalkmak</td><td>She gets up early</td></tr>
                            <tr><td><strong>Eat breakfast</strong></td><td>Kahvaltı yapmak</td><td>We eat breakfast together</td></tr>
                            <tr><td><strong>Go to work</strong></td><td>İşe gitmek</td><td>He goes to work by bus</td></tr>
                            <tr><td><strong>Have lunch</strong></td><td>Öğle yemeği yemek</td><td>They have lunch at noon</td></tr>
                            <tr><td><strong>Come home</strong></td><td>Eve gelmek</td><td>I come home at 6 pm</td></tr>
                            <tr><td><strong>Watch TV</strong></td><td>TV izlemek</td><td>She watches TV at night</td></tr>
                            <tr><td><strong>Go to bed</strong></td><td>Yatmak</td><td>We go to bed at 11</td></tr>
                        </table>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel Fiiller I/You/We/They (1-10)
                {
                    type: "dropdown",
                    question: "I ___ breakfast at 8 o'clock.",
                    options: ["eat", "eats", "eating"],
                    correct: "eat",
                    feedback: "Neden 'eat'? - I/You/We/They ile fiilin yalın hali kullanılır."
                },
                {
                    type: "dropdown",
                    question: "You ___ to school every day.",
                    options: ["go", "goes", "going"],
                    correct: "go",
                    feedback: "'You' ile fiilin yalın hali: go (gitmek)"
                },
                {
                    type: "dropdown",
                    question: "We ___ TV in the evening.",
                    options: ["watch", "watches", "watching"],
                    correct: "watch",
                    feedback: "'We' ile yalın fiil: watch (izlemek)"
                },
                {
                    type: "dropdown",
                    question: "They ___ lunch at 12 o'clock.",
                    options: ["have", "has", "having"],
                    correct: "have",
                    feedback: "'They' ile yalın fiil: have (sahip olmak/yemek)"
                },
                {
                    type: "yesno",
                    question: "We watch TV in the evening. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! We + watch (yalın fiil) yapısı doğru."
                },
                {
                    type: "dropdown",
                    question: "I ___ up at 7 o'clock.",
                    options: ["wake", "wakes", "waking"],
                    correct: "wake",
                    feedback: "'I' ile yalın fiil: wake up (uyanmak)"
                },
                {
                    type: "dropdown",
                    question: "You ___ home at 6 pm.",
                    options: ["come", "comes", "coming"],
                    correct: "come",
                    feedback: "'You' ile yalın fiil: come (gelmek)"
                },
                {
                    type: "dropdown",
                    question: "We ___ to bed at 11 pm.",
                    options: ["go", "goes", "going"],
                    correct: "go",
                    feedback: "'We' ile yalın fiil: go to bed (yatmak)"
                },
                {
                    type: "yesno",
                    question: "They plays football. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'They' ile -s eklenmez. Doğrusu: They PLAY football."
                },
                {
                    type: "dropdown",
                    question: "I ___ water every day.",
                    options: ["drink", "drinks", "drinking"],
                    correct: "drink",
                    feedback: "'I' ile yalın fiil: drink (içmek)"
                },
                // Seviye 2: He/She/It ile -s/-es (11-20)
                {
                    type: "dropdown",
                    question: "He ___ to work every day.",
                    options: ["go", "goes", "going"],
                    correct: "goes",
                    feedback: "Neden 'goes'? - He/She/It ile fiilin sonuna -s/-es eklenir."
                },
                {
                    type: "dropdown",
                    question: "She ___ breakfast at 8 am.",
                    options: ["eat", "eats", "eating"],
                    correct: "eats",
                    feedback: "'She' ile fiil: eat → eats (-s eklenir)"
                },
                {
                    type: "dropdown",
                    question: "He ___ TV every evening.",
                    options: ["watch", "watches", "watching"],
                    correct: "watches",
                    feedback: "'He' ile: watch → watches (-es eklenir, çünkü 'ch' ile biter)"
                },
                {
                    type: "dropdown",
                    question: "She ___ to school by bus.",
                    options: ["go", "goes", "going"],
                    correct: "goes",
                    feedback: "'She' ile: go → goes (-es eklenir)"
                },
                {
                    type: "dropdown",
                    question: "It ___ in winter.",
                    options: ["rain", "rains", "raining"],
                    correct: "rains",
                    feedback: "'It' ile: rain → rains (hava durumu)"
                },
                {
                    type: "yesno",
                    question: "He work every day. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'He' ile -s gerekli. Doğrusu: He WORKS every day."
                },
                {
                    type: "dropdown",
                    question: "My father ___ coffee in the morning.",
                    options: ["drink", "drinks", "drinking"],
                    correct: "drinks",
                    feedback: "'My father' = He, bu yüzden: drink → drinks"
                },
                {
                    type: "dropdown",
                    question: "She ___ up at 6 am.",
                    options: ["wake", "wakes", "waking"],
                    correct: "wakes",
                    feedback: "'She' ile: wake → wakes"
                },
                {
                    type: "dropdown",
                    question: "The dog ___ in the garden.",
                    options: ["play", "plays", "playing"],
                    correct: "plays",
                    feedback: "'The dog' = It, bu yüzden: play → plays"
                },
                {
                    type: "yesno",
                    question: "She goes to work by car. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! 'She' ile 'goes' (-es eklenmiş)"
                },
                // Seviye 3: Olumsuz ve Soru (21-30)
                {
                    type: "dropdown",
                    question: "I ___ like coffee.",
                    options: ["don't", "doesn't", "not"],
                    correct: "don't",
                    feedback: "Olumsuz: I don't like = Sevmem (I/You/We/They → don't)"
                },
                {
                    type: "dropdown",
                    question: "She ___ eat meat.",
                    options: ["don't", "doesn't", "not"],
                    correct: "doesn't",
                    feedback: "Olumsuz: She doesn't eat = Yemez (He/She/It → doesn't)"
                },
                {
                    type: "dropdown",
                    question: "They ___ work on Sunday.",
                    options: ["don't", "doesn't", "not"],
                    correct: "don't",
                    feedback: "Olumsuz: They don't work = Çalışmazlar"
                },
                {
                    type: "yesno",
                    question: "He don't like fish. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'He' ile 'doesn't' kullanılır. Doğrusu: He DOESN'T like fish."
                },
                {
                    type: "dropdown",
                    question: "___ you watch TV?",
                    options: ["Do", "Does", "Are"],
                    correct: "Do",
                    feedback: "Soru: Do you...? = Sen ... musun? (I/You/We/They → Do)"
                },
                {
                    type: "dropdown",
                    question: "___ she work here?",
                    options: ["Do", "Does", "Is"],
                    correct: "Does",
                    feedback: "Soru: Does she...? = O ... mu? (He/She/It → Does)"
                },
                {
                    type: "yesno",
                    question: "Does they play football? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'They' ile 'Do' kullanılır. Doğrusu: DO they play football?"
                },
                {
                    type: "dropdown",
                    question: "Where ___ you live?",
                    options: ["do", "does", "are"],
                    correct: "do",
                    feedback: "Soru: Where do you live? = Nerede yaşıyorsun?"
                },
                {
                    type: "dropdown",
                    question: "What time ___ he wake up?",
                    options: ["do", "does", "is"],
                    correct: "does",
                    feedback: "Soru: What time does he...? = Saat kaçta ... (he ile does)"
                },
                {
                    type: "yesno",
                    question: "Do you like tea? - Yes, I do. ✓ Doğru cevap mı?",
                    correct: true,
                    feedback: "Evet doğru! Kısa cevap: Yes, I do. (Evet, severim)"
                }
            ],
            reading: {
                title: "A Typical Day in My Life",
                text: `
                    <p>Every day, I wake up at 7 o'clock in the morning. I get up quickly and go to the bathroom. I wash my face and brush my teeth.</p>
                    <p>Then I go to the kitchen. My mother prepares breakfast for the family. We usually eat bread, cheese, olives and drink tea. I love my mother's breakfast!</p>
                    <p>After breakfast, I get dressed and leave home at 8 o'clock. I go to school by bus. School starts at 8:30. I have six lessons every day. My favourite lesson is art because I like drawing.</p>
                    <p>At 12 o'clock, we have lunch at school. I usually eat with my friends in the cafeteria. After lunch, we play football in the school garden.</p>
                    <p>School finishes at 3 pm. I come home at 3:30. I do my homework and then I watch TV or play computer games. In the evening, we have dinner together as a family at 7 pm.</p>
                    <p>After dinner, I sometimes read a book or talk with my family. I go to bed at 10 pm. This is my typical day!</p>
                `,
                questions: [
                    {
                        question: "What time does he wake up?",
                        options: ["7 o'clock", "8 o'clock", "6 o'clock", "9 o'clock"],
                        correct: "7 o'clock",
                        feedback: "Metinde 'I wake up at 7 o'clock in the morning' yazıyor."
                    },
                    {
                        question: "What does he do after waking up?",
                        options: ["He goes to the bathroom", "He eats breakfast", "He watches TV", "He goes to school"],
                        correct: "He goes to the bathroom",
                        feedback: "İlk olarak banyoya gidiyor: 'I get up quickly and go to the bathroom'."
                    },
                    {
                        question: "How does he go to school?",
                        options: ["By bus", "By car", "On foot", "By bike"],
                        correct: "By bus",
                        feedback: "'I go to school by bus' (Okula otobüsle giderim) yazıyor."
                    },
                    {
                        question: "What is his favourite lesson?",
                        options: ["Art", "Math", "English", "Science"],
                        correct: "Art",
                        feedback: "'My favourite lesson is art' (En sevdiğim ders resim) diyor."
                    },
                    {
                        question: "What time does school finish?",
                        options: ["3 pm", "4 pm", "2 pm", "5 pm"],
                        correct: "3 pm",
                        feedback: "'School finishes at 3 pm' yazıyor metinde."
                    },
                    {
                        question: "What does he do after school?",
                        options: ["He does homework", "He plays football", "He goes shopping", "He sleeps"],
                        correct: "He does homework",
                        feedback: "Eve gelince ödevini yapıyor: 'I do my homework'."
                    }
                ]
            },
            game: {
                type: "wordSort",
                title: "Sözcük Sıralama - Cümle Oluştur",
                sentences: [
                    {
                        words: ["I", "breakfast", "eat"],
                        correct: ["I", "eat", "breakfast"],
                        translation: "Ben kahvaltı yaparım",
                        explanation: "Özne (I) + Fiil (eat) + Nesne (breakfast)"
                    },
                    {
                        words: ["She", "TV", "watches"],
                        correct: ["She", "watches", "TV"],
                        translation: "O TV izler",
                        explanation: "Özne (She) + Fiil (watches) + Nesne (TV). 'She' ile fiil 'watch' → 'watches' olur (-es eklenir)"
                    },
                    {
                        words: ["go", "We", "to", "work"],
                        correct: ["We", "go", "to", "work"],
                        translation: "Biz işe gideriz",
                        explanation: "Özne (We) + Fiil (go) + Yer (to work)"
                    },
                    {
                        words: ["home", "comes", "He", "late"],
                        correct: ["He", "comes", "home", "late"],
                        translation: "O eve geç gelir",
                        explanation: "Özne (He) + Fiil (comes) + Yer (home) + Zaman (late). 'He' ile 'come' → 'comes' olur"
                    },
                    {
                        words: ["every", "They", "day", "work"],
                        correct: ["They", "work", "every", "day"],
                        translation: "Onlar her gün çalışırlar",
                        explanation: "Özne (They) + Fiil (work) + Zaman (every day). 'They' ile fiil yalın halde kalır"
                    }
                ]
            }
        },
        4: {
            title: "Soru Sorma",
            explanation: {
                title: "Soru Kelimeleri ve Soru Cümleleri",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Question Words (Soru Kelimeleri):</strong> What, Where, When, Who, Why, How</li>
                            <li><strong>To Be ile Sorular:</strong> Are you...? Is she...?</li>
                            <li><strong>Do/Does ile Sorular:</strong> Do you work? Does he like?</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Soru Kelimeleri (WH-Questions)</h3>
                        
                        <h4>❓ Temel Soru Kelimeleri</h4>
                        <table class="vocab-table">
                            <tr><th>Soru Kelimesi</th><th>Türkçe</th><th>Ne Sorar?</th><th>Örnek</th></tr>
                            <tr><td><strong>What</strong></td><td>Ne</td><td>Şey/Nesne</td><td>What is your name? (Adın ne?)</td></tr>
                            <tr><td><strong>Where</strong></td><td>Nerede</td><td>Yer</td><td>Where are you? (Neredesin?)</td></tr>
                            <tr><td><strong>When</strong></td><td>Ne zaman</td><td>Zaman</td><td>When do you work? (Ne zaman çalışırsın?)</td></tr>
                            <tr><td><strong>Who</strong></td><td>Kim</td><td>Kişi</td><td>Who is she? (O kim?)</td></tr>
                            <tr><td><strong>Why</strong></td><td>Neden</td><td>Sebep</td><td>Why are you late? (Neden geç kaldın?)</td></tr>
                            <tr><td><strong>How</strong></td><td>Nasıl</td><td>Şekil/Durum</td><td>How are you? (Nasılsın?)</td></tr>
                        </table>

                        <p><strong>💡 İpucu: HOW ile Özel Sorular</strong></p>
                        <ul>
                            <li><strong>How old</strong> = Kaç yaşında? (How old are you?)</li>
                            <li><strong>How many</strong> = Kaç tane? (How many books?)</li>
                            <li><strong>How much</strong> = Ne kadar? (How much is it?)</li>
                        </ul>

                        <h4>🔧 TO BE ile Soru Yapımı</h4>
                        <p><strong>Yapı:</strong> TO BE + Özne + ...?</p>
                        <table class="vocab-table">
                            <tr><th>Düz Cümle</th><th>Soru</th><th>Türkçe</th></tr>
                            <tr><td>I am happy</td><td><strong>Am I</strong> happy?</td><td>Mutlu muyum?</td></tr>
                            <tr><td>You are a student</td><td><strong>Are you</strong> a student?</td><td>Öğrenci misin?</td></tr>
                            <tr><td>He is at home</td><td><strong>Is he</strong> at home?</td><td>O evde mi?</td></tr>
                            <tr><td>She is happy</td><td><strong>Is she</strong> happy?</td><td>O mutlu mu?</td></tr>
                            <tr><td>We are ready</td><td><strong>Are we</strong> ready?</td><td>Hazır mıyız?</td></tr>
                            <tr><td>They are here</td><td><strong>Are they</strong> here?</td><td>Onlar burada mı?</td></tr>
                        </table>

                        <p><strong>⚡ Soru Kelimesi + TO BE:</strong></p>
                        <table class="vocab-table">
                            <tr><th>Soru Yapısı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>What + is/are</td><td>What is your name?</td><td>Adın ne?</td></tr>
                            <tr><td>Where + is/are</td><td>Where are you?</td><td>Neredesin?</td></tr>
                            <tr><td>Who + is/are</td><td>Who is she?</td><td>O kim?</td></tr>
                            <tr><td>How + is/are</td><td>How are you?</td><td>Nasılsın?</td></tr>
                        </table>

                        <h4>🔧 DO/DOES ile Soru Yapımı (Normal Fiiller)</h4>
                        <p><strong>Yapı:</strong> Do/Does + Özne + Yalın Fiil + ...?</p>
                        
                        <table class="vocab-table">
                            <tr><th>Özne</th><th>Yardımcı</th><th>Yapı</th><th>Örnek</th></tr>
                            <tr><td>I/You/We/They</td><td><strong>Do</strong></td><td>Do + özne + fiil?</td><td>Do you like coffee?</td></tr>
                            <tr><td>He/She/It</td><td><strong>Does</strong></td><td>Does + özne + fiil?</td><td>Does she like coffee?</td></tr>
                        </table>

                        <p><strong>⚠️ ÖNEMLİ:</strong> Do/Does kullanınca fiilin sonundaki -s/-es DÜŞER!</p>
                        <ul>
                            <li>✅ Does he <strong>work</strong>? (Doğru - yalın fiil)</li>
                            <li>❌ Does he <strong>works</strong>? (YANLIŞ!)</li>
                            <li>✅ Do they <strong>go</strong>? (Doğru)</li>
                            <li>❌ Do they <strong>goes</strong>? (YANLIŞ!)</li>
                        </ul>

                        <p><strong>⚡ Soru Kelimesi + DO/DOES:</strong></p>
                        <table class="vocab-table">
                            <tr><th>Soru Yapısı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>What + do/does</td><td>What do you do?</td><td>Ne iş yaparsın?</td></tr>
                            <tr><td>Where + do/does</td><td>Where does he live?</td><td>O nerede yaşar?</td></tr>
                            <tr><td>When + do/does</td><td>When do you work?</td><td>Ne zaman çalışırsın?</td></tr>
                            <tr><td>Why + do/does</td><td>Why do they study?</td><td>Neden çalışırlar?</td></tr>
                        </table>

                        <h4>✅ Kısa Cevaplar (Short Answers)</h4>
                        <table class="vocab-table">
                            <tr><th>Soru</th><th>Evet</th><th>Hayır</th></tr>
                            <tr><td>Are you happy?</td><td>Yes, I am</td><td>No, I'm not</td></tr>
                            <tr><td>Is he a student?</td><td>Yes, he is</td><td>No, he isn't</td></tr>
                            <tr><td>Do you work?</td><td>Yes, I do</td><td>No, I don't</td></tr>
                            <tr><td>Does she like it?</td><td>Yes, she does</td><td>No, she doesn't</td></tr>
                        </table>

                        <p><strong>💡 İpucu:</strong> Kısa cevaplarda sadece yardımcı fiili tekrarlayın!</p>
                        <ul>
                            <li>Are you...? → Yes, I <strong>am</strong> / No, I'm <strong>not</strong></li>
                            <li>Do you...? → Yes, I <strong>do</strong> / No, I <strong>don't</strong></li>
                        </ul>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel Soru Kelimeleri (1-10)
                {
                    type: "dropdown",
                    question: "___ is your name?",
                    options: ["What", "Where", "Who"],
                    correct: "What",
                    feedback: "Neden 'What'? - İsim sormak için 'What' kullanılır. What = Ne"
                },
                {
                    type: "dropdown",
                    question: "___ are you from?",
                    options: ["What", "Where", "When"],
                    correct: "Where",
                    feedback: "Neden 'Where'? - Yer sormak için 'Where' kullanılır. Where = Nerede"
                },
                {
                    type: "dropdown",
                    question: "___ is she?",
                    options: ["Who", "What", "Where"],
                    correct: "Who",
                    feedback: "Neden 'Who'? - Kişi sormak için 'Who' kullanılır. Who = Kim"
                },
                {
                    type: "dropdown",
                    question: "___ do you work?",
                    options: ["When", "What", "Who"],
                    correct: "When",
                    feedback: "'When' = Ne zaman. When do you work? = Ne zaman çalışıyorsun?"
                },
                {
                    type: "dropdown",
                    question: "___ are you late?",
                    options: ["Why", "What", "Where"],
                    correct: "Why",
                    feedback: "'Why' = Neden. Why are you late? = Neden geç kaldın?"
                },
                {
                    type: "dropdown",
                    question: "___ are you?",
                    options: ["How", "What", "Who"],
                    correct: "How",
                    feedback: "'How' = Nasıl. How are you? = Nasılsın?"
                },
                {
                    type: "yesno",
                    question: "How old are you? ✓ Yaş soran doğru soru mu?",
                    correct: true,
                    feedback: "Evet! 'How old' yaş sorar. How old are you? = Kaç yaşındasın?"
                },
                {
                    type: "dropdown",
                    question: "___ is your brother?",
                    options: ["Where", "What", "When"],
                    correct: "Where",
                    feedback: "Yer sormak: Where is...? = Nerede?"
                },
                {
                    type: "dropdown",
                    question: "___ is your job?",
                    options: ["What", "Who", "When"],
                    correct: "What",
                    feedback: "Meslek sormak: What is your job? = İşin ne?"
                },
                {
                    type: "dropdown",
                    question: "___ is your teacher?",
                    options: ["Who", "What", "How"],
                    correct: "Who",
                    feedback: "Kişi sormak: Who is...? = Kim?"
                },
                // Seviye 2: To Be ile Sorular (11-20)
                {
                    type: "dropdown",
                    question: "___ you happy?",
                    options: ["Are", "Is", "Do"],
                    correct: "Are",
                    feedback: "To Be soru: Are you...? = Sen ... musun?"
                },
                {
                    type: "dropdown",
                    question: "___ she a teacher?",
                    options: ["Is", "Are", "Does"],
                    correct: "Is",
                    feedback: "To Be soru: Is she...? = O ... mu?"
                },
                {
                    type: "dropdown",
                    question: "Where ___ they?",
                    options: ["are", "is", "do"],
                    correct: "are",
                    feedback: "Soru kelimesi + are: Where are they? = Onlar nerede?"
                },
                {
                    type: "yesno",
                    question: "Is he from Turkey? ✓ Doğru soru yapısı mı?",
                    correct: true,
                    feedback: "Evet doğru! To Be soru: Is he from...?"
                },
                {
                    type: "dropdown",
                    question: "What ___ your name?",
                    options: ["is", "are", "do"],
                    correct: "is",
                    feedback: "What is your name? = Adın ne? ('name' tekil → is)"
                },
                {
                    type: "dropdown",
                    question: "How old ___ your father?",
                    options: ["is", "are", "does"],
                    correct: "is",
                    feedback: "How old is...? = Kaç yaşında? ('father' tekil → is)"
                },
                {
                    type: "dropdown",
                    question: "___ they at home?",
                    options: ["Are", "Is", "Do"],
                    correct: "Are",
                    feedback: "To Be soru: Are they...? = Onlar ... mı?"
                },
                {
                    type: "yesno",
                    question: "Are you a student? - Yes, I am. ✓ Doğru cevap mı?",
                    correct: true,
                    feedback: "Evet doğru! Kısa cevap: Yes, I am."
                },
                {
                    type: "dropdown",
                    question: "Why ___ you sad?",
                    options: ["are", "is", "do"],
                    correct: "are",
                    feedback: "Why are you...? = Neden ... musun?"
                },
                {
                    type: "yesno",
                    question: "Is you happy? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'You' ile 'Are' kullanılır. Doğrusu: ARE you happy?"
                },
                // Seviye 3: Do/Does ile Sorular (21-30)
                {
                    type: "dropdown",
                    question: "___ you like coffee?",
                    options: ["Do", "Does", "Are"],
                    correct: "Do",
                    feedback: "Normal fiil soru: Do you...? = Sen ... musun?"
                },
                {
                    type: "dropdown",
                    question: "___ she speak English?",
                    options: ["Does", "Do", "Is"],
                    correct: "Does",
                    feedback: "Normal fiil soru: Does she...? = O ... mu? (he/she/it → does)"
                },
                {
                    type: "dropdown",
                    question: "Where ___ you live?",
                    options: ["do", "does", "are"],
                    correct: "do",
                    feedback: "Soru kelimesi + do: Where do you live? = Nerede yaşıyorsun?"
                },
                {
                    type: "dropdown",
                    question: "What ___ he do?",
                    options: ["does", "do", "is"],
                    correct: "does",
                    feedback: "What does he do? = O ne iş yapıyor? (meslek sorusu)"
                },
                {
                    type: "yesno",
                    question: "Does they work here? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'They' ile 'Do' kullanılır. Doğrusu: DO they work here?"
                },
                {
                    type: "dropdown",
                    question: "When ___ you wake up?",
                    options: ["do", "does", "are"],
                    correct: "do",
                    feedback: "When do you...? = Ne zaman ... ?"
                },
                {
                    type: "dropdown",
                    question: "Why ___ she like this?",
                    options: ["does", "do", "is"],
                    correct: "does",
                    feedback: "Why does she like...? = Neden o sever...?"
                },
                {
                    type: "yesno",
                    question: "Do you speak Turkish? - Yes, I do. ✓ Doğru cevap mı?",
                    correct: true,
                    feedback: "Evet doğru! Kısa cevap: Yes, I do."
                },
                {
                    type: "dropdown",
                    question: "What time ___ the bus arrive?",
                    options: ["does", "do", "is"],
                    correct: "does",
                    feedback: "'The bus' = It, bu yüzden 'does' kullanılır."
                },
                {
                    type: "yesno",
                    question: "Does he works here? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'Does' ile fiilin yalın hali kullanılır. Doğrusu: Does he WORK here? (works değil!)"
                }
            ],
            reading: {
                title: "An Interview with a Student",
                text: `
                    <p><strong>Reporter:</strong> Hello! What is your name?</p>
                    <p><strong>Student:</strong> Hi! My name is Michael.</p>
                    <p><strong>Reporter:</strong> How old are you, Michael?</p>
                    <p><strong>Student:</strong> I am 15 years old.</p>
                    <p><strong>Reporter:</strong> Where are you from?</p>
                    <p><strong>Student:</strong> I am from Manchester, England.</p>
                    <p><strong>Reporter:</strong> What do you do? Are you a student?</p>
                    <p><strong>Student:</strong> Yes, I am. I go to Green Valley High School.</p>
                    <p><strong>Reporter:</strong> What is your favourite subject at school?</p>
                    <p><strong>Student:</strong> My favourite subject is Science. I love learning about nature and experiments.</p>
                    <p><strong>Reporter:</strong> That's interesting! Do you have any hobbies?</p>
                    <p><strong>Student:</strong> Yes, I do. I play basketball every weekend and I also like reading books.</p>
                    <p><strong>Reporter:</strong> How do you go to school?</p>
                    <p><strong>Student:</strong> I go to school by bicycle. It takes about 15 minutes.</p>
                    <p><strong>Reporter:</strong> Thank you for your time, Michael!</p>
                    <p><strong>Student:</strong> You're welcome!</p>
                `,
                questions: [
                    {
                        question: "What is the student's name?",
                        options: ["Michael", "John", "David", "Tom"],
                        correct: "Michael",
                        feedback: "Öğrencinin adı Michael: 'My name is Michael'."
                    },
                    {
                        question: "How old is Michael?",
                        options: ["15 years old", "14 years old", "16 years old", "13 years old"],
                        correct: "15 years old",
                        feedback: "Michael 15 yaşında: 'I am 15 years old'."
                    },
                    {
                        question: "Where is Michael from?",
                        options: ["Manchester, England", "London, England", "New York, USA", "Paris, France"],
                        correct: "Manchester, England",
                        feedback: "Michael Manchester'dan: 'I am from Manchester, England'."
                    },
                    {
                        question: "What is his favourite subject?",
                        options: ["Science", "Math", "English", "History"],
                        correct: "Science",
                        feedback: "En sevdiği ders Science (Fen): 'My favourite subject is Science'."
                    },
                    {
                        question: "What sport does Michael play?",
                        options: ["Basketball", "Football", "Tennis", "Swimming"],
                        correct: "Basketball",
                        feedback: "Michael basketbol oynar: 'I play basketball every weekend'."
                    },
                    {
                        question: "How does he go to school?",
                        options: ["By bicycle", "By bus", "By car", "On foot"],
                        correct: "By bicycle",
                        feedback: "Bisikletle gidiyor: 'I go to school by bicycle'."
                    }
                ]
            },
            game: {
                type: "wordSort",
                title: "Soru Cümlesi Oluştur",
                sentences: [
                    {
                        words: ["What", "name", "your", "is"],
                        correct: ["What", "is", "your", "name"],
                        translation: "Adın ne?",
                        explanation: "Soru kelimesi (What) + is + özne (your name)"
                    },
                    {
                        words: ["Where", "you", "are", "from"],
                        correct: ["Where", "are", "you", "from"],
                        translation: "Nerelisin?",
                        explanation: "Soru kelimesi (Where) + are + özne (you) + from"
                    },
                    {
                        words: ["How", "are", "you"],
                        correct: ["How", "are", "you"],
                        translation: "Nasılsın?",
                        explanation: "Soru kelimesi (How) + are + özne (you)"
                    }
                ]
            }
        },
        5: {
            title: "Tatil",
            explanation: {
                title: "Tatil ve Seyahat",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Past Simple (Gerekli Zaman):</strong> Düzenli fiiller ile geçmiş zaman</li>
                            <li><strong>Travel Vocabulary:</strong> Tatil ve seyahat kelimeleri</li>
                            <li><strong>-ED ekleme kuralları</strong></li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Past Simple - Düzgün Fiiller</h3>
                        <p><strong>Ne zaman kullanılır?</strong></p>
                        <ul>
                            <li>✅ Geçmişte olan ve biten eylemler: I visited Paris (Paris'i ziyaret ettim)</li>
                            <li>✅ Geçmişte bir anda olan şeyler: She arrived yesterday (Dün vardı)</li>
                            <li>✅ Geçmişte tekrar tekrar olan eylemler: We played every day (Her gün oynadık)</li>
                        </ul>

                        <h4>🔧 KURAL: Fiil + ED</h4>
                        <p>Düzgün fiillere (regular verbs) geçmiş zaman için <strong>-ED</strong> eklenir:</p>
                        <table class="vocab-table">
                            <tr><th>Şimdiki Zaman</th><th>Geçmiş Zaman</th><th>Türkçe</th><th>Örnek</th></tr>
                            <tr><td>visit</td><td>visit<strong>ed</strong></td><td>ziyaret etti</td><td>I visited Spain</td></tr>
                            <tr><td>play</td><td>play<strong>ed</strong></td><td>oynadı</td><td>They played football</td></tr>
                            <tr><td>walk</td><td>walk<strong>ed</strong></td><td>yürüdü</td><td>We walked in the park</td></tr>
                            <tr><td>stay</td><td>stay<strong>ed</strong></td><td>kaldı</td><td>She stayed in a hotel</td></tr>
                        </table>

                        <h4>⚡ Özel Kurallar: -ED nasıl eklenir?</h4>
                        
                        <p><strong>1. Normal fiiller → +ED</strong></p>
                        <ul>
                            <li>work → work<strong>ed</strong> (çalıştı)</li>
                            <li>help → help<strong>ed</strong> (yardım etti)</li>
                        </ul>

                        <p><strong>2. Fiil 'e' ile bitiyorsa → +D</strong></p>
                        <ul>
                            <li>live → live<strong>d</strong> (yaşadı)</li>
                            <li>arrive → arrive<strong>d</strong> (vardı)</li>
                        </ul>

                        <p><strong>3. Fiil 'sessiz harf + y' ile bitiyorsa → y→ied</strong></p>
                        <ul>
                            <li>study → stud<strong>ied</strong> (çalıştı)</li>
                            <li>try → tr<strong>ied</strong> (denedi)</li>
                        </ul>

                        <p><strong>4. Kısa fiil, tek sessiz harfle bitiyorsa → harf ikileşir</strong></p>
                        <ul>
                            <li>stop → sto<strong>pped</strong> (durdu)</li>
                            <li>plan → pla<strong>nned</strong> (planlandı)</li>
                        </ul>

                        <h4>❌ OLUMSUZ: DIDN'T + YALIN FİİL</h4>
                        <table class="vocab-table">
                            <tr><th>Olumlu</th><th>Olumsuz</th><th>Türkçe</th></tr>
                            <tr><td>I visited Paris</td><td>I <strong>didn't visit</strong> Paris</td><td>Paris'i ziyaret etmedim</td></tr>
                            <tr><td>She played tennis</td><td>She <strong>didn't play</strong> tennis</td><td>Tenis oynamadı</td></tr>
                        </table>

                        <p><strong>⚠️ ÖNEMLİ:</strong> Olumsuzda -ED DÜŞER!</p>
                        <ul>
                            <li>✅ I didn't visit (Doğru - yalın fiil)</li>
                            <li>❌ I didn't visited (YANLIŞ!)</li>
                        </ul>

                        <h4>❓ SORU: DID + ÖZNE + YALIN FİİL?</h4>
                        <table class="vocab-table">
                            <tr><th>Olumlu</th><th>Soru</th><th>Türkçe</th></tr>
                            <tr><td>You visited Paris</td><td><strong>Did you visit</strong> Paris?</td><td>Paris'i ziyaret ettin mi?</td></tr>
                            <tr><td>They played tennis</td><td><strong>Did they play</strong> tennis?</td><td>Tenis oynadılar mı?</td></tr>
                        </table>

                        <p><strong>💡 Kısa Cevaplar:</strong></p>
                        <ul>
                            <li>Did you visit? → Yes, I <strong>did</strong> / No, I <strong>didn't</strong></li>
                            <li>Did she like it? → Yes, she <strong>did</strong> / No, she <strong>didn't</strong></li>
                        </ul>

                        <h4>⏰ Past Simple ile Kullanılan Zaman İfadeleri</h4>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek</th></tr>
                            <tr><td>yesterday</td><td>dün</td><td>I visited yesterday</td></tr>
                            <tr><td>last week</td><td>geçen hafta</td><td>She arrived last week</td></tr>
                            <tr><td>last year</td><td>geçen yıl</td><td>We traveled last year</td></tr>
                            <tr><td>two days ago</td><td>iki gün önce</td><td>He called two days ago</td></tr>
                            <tr><td>in 2020</td><td>2020'de</td><td>They moved in 2020</td></tr>
                        </table>
                    </div>

                    <div class="explanation-box">
                        <h3>✈️ Tatil Kelimeleri (Holiday Vocabulary)</h3>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle (Past Simple)</th></tr>
                            <tr><td><strong>Passport</strong></td><td>Pasaport</td><td>I showed my passport</td></tr>
                            <tr><td><strong>Ticket</strong></td><td>Bilet</td><td>She bought a ticket</td></tr>
                            <tr><td><strong>Hotel</strong></td><td>Otel</td><td>We stayed in a hotel</td></tr>
                            <tr><td><strong>Beach</strong></td><td>Plaj</td><td>They walked on the beach</td></tr>
                            <tr><td><strong>Airport</strong></td><td>Havalimanı</td><td>I arrived at the airport</td></tr>
                            <tr><td><strong>Suitcase</strong></td><td>Bavul</td><td>He packed his suitcase</td></tr>
                            <tr><td><strong>Camera</strong></td><td>Fotoğraf makinesi</td><td>She used her camera</td></tr>
                        </table>
                    </div>
                `
            },
                            <tr><td><strong>Beach</strong></td><td>Plaj</td></tr>
                            <tr><td><strong>Hotel</strong></td><td>Otel</td></tr>
                            <tr><td><strong>Airport</strong></td><td>Havalimanı</td></tr>
                            <tr><td><strong>Suitcase</strong></td><td>Bavul</td></tr>
                            <tr><td><strong>Ticket</strong></td><td>Bilet</td></tr>
                            <tr><td><strong>Passport</strong></td><td>Pasaport</td></tr>
                            <tr><td><strong>Camera</strong></td><td>Fotoğraf makinesi</td></tr>
                            <tr><td><strong>Map</strong></td><td>Harita</td></tr>
                        </table>
                    </div>
                    <div class="explanation-box">
                        <h3>🗣️ Tatilde Kullanılan Cümleler</h3>
                        <ul>
                            <li>I go to the beach. (Plaja giderim.)</li>
                            <li>We stay in a hotel. (Otelde kalırız.)</li>
                            <li>She takes photos. (O fotoğraf çeker.)</li>
                            <li>They visit museums. (Onlar müze gezer.)</li>
                            <li>Do you have a map? (Haritanız var mı?)</li>
                        </ul>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel Kelime Bilgisi (1-9)
                {
                    type: "dropdown",
                    question: "I need my ___ to travel.",
                    options: ["passport", "beach", "hotel"],
                    correct: "passport",
                    feedback: "Neden 'passport'? - Seyahat için pasaport gerekir."
                },
                {
                    type: "dropdown",
                    question: "We stay in a ___ .",
                    options: ["hotel", "airport", "ticket"],
                    correct: "hotel",
                    feedback: "Neden 'hotel'? - Tatilde otelde kalırız."
                },
                {
                    type: "dropdown",
                    question: "I go to the ___ to swim. (plaj)",
                    options: ["beach", "airport", "hotel"],
                    correct: "beach",
                    feedback: "Beach = Plaj (yüzmek için plaja gideriz)"
                },
                {
                    type: "dropdown",
                    question: "We fly from the ___ . (havalimanı)",
                    options: ["airport", "hotel", "beach"],
                    correct: "airport",
                    feedback: "Airport = Havalimanı (uçak havalimanından kalkar)"
                },
                {
                    type: "dropdown",
                    question: "I pack my clothes in a ___ . (bavul)",
                    options: ["suitcase", "camera", "map"],
                    correct: "suitcase",
                    feedback: "Suitcase = Bavul (kıyafetler bavulda taşınır)"
                },
                {
                    type: "dropdown",
                    question: "I need a ___ to enter the plane. (bilet)",
                    options: ["ticket", "passport", "map"],
                    correct: "ticket",
                    feedback: "Ticket = Bilet (uçağa binmek için bilet gerekir)"
                },
                {
                    type: "dropdown",
                    question: "She takes photos with her ___ . (fotoğraf makinesi)",
                    options: ["camera", "map", "suitcase"],
                    correct: "camera",
                    feedback: "Camera = Fotoğraf makinesi"
                },
                {
                    type: "dropdown",
                    question: "We use a ___ to find our way. (harita)",
                    options: ["map", "ticket", "camera"],
                    correct: "map",
                    feedback: "Map = Harita (yol bulmak için harita kullanılır)"
                },
                {
                    type: "yesno",
                    question: "A passport is a travel document. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! Passport = Pasaport (seyahat belgesi)"
                },
                // Seviye 2: Cümleler (10-17)
                {
                    type: "yesno",
                    question: "She takes photos at the beach. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet! Takes photos = fotoğraf çeker, at the beach = plajda"
                },
                {
                    type: "dropdown",
                    question: "We ___ in a hotel.",
                    options: ["stay", "stays", "staying"],
                    correct: "stay",
                    feedback: "'We' ile yalın fiil: stay (kalmak)"
                },
                {
                    type: "dropdown",
                    question: "They ___ to the beach every day.",
                    options: ["go", "goes", "going"],
                    correct: "go",
                    feedback: "'They' ile yalın fiil: go (gitmek)"
                },
                {
                    type: "dropdown",
                    question: "He ___ his suitcase.",
                    options: ["packs", "pack", "packing"],
                    correct: "packs",
                    feedback: "'He' ile -s eklenir: pack → packs (hazırlamak)"
                },
                {
                    type: "yesno",
                    question: "I visits museums on holiday. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'I' ile -s eklenmez. Doğrusu: I VISIT museums."
                },
                {
                    type: "dropdown",
                    question: "She ___ at the airport.",
                    options: ["arrives", "arrive", "arriving"],
                    correct: "arrives",
                    feedback: "'She' ile -s eklenir: arrive → arrives (varmak)"
                },
                {
                    type: "dropdown",
                    question: "We ___ photos of the sunset.",
                    options: ["take", "takes", "taking"],
                    correct: "take",
                    feedback: "'We' ile yalın fiil: take photos (fotoğraf çekmek)"
                },
                {
                    type: "yesno",
                    question: "They swim in the sea. ✓ Doğru mu?",
                    correct: true,
                    feedback: "Evet doğru! Swim in the sea = Denizde yüzmek"
                },
                // Seviye 3: Kompleks Yapılar (18-26)
                {
                    type: "dropdown",
                    question: "Do you ___ a passport?",
                    options: ["have", "has", "having"],
                    correct: "have",
                    feedback: "Soru: Do you have...? = Var mı? (yalın fiil kullanılır)"
                },
                {
                    type: "dropdown",
                    question: "Does he ___ a map?",
                    options: ["need", "needs", "needing"],
                    correct: "need",
                    feedback: "Soru: Does he need...? = O ihtiyaç duyuyor mu? (does ile yalın fiil)"
                },
                {
                    type: "dropdown",
                    question: "I ___ like hot weather.",
                    options: ["don't", "doesn't", "not"],
                    correct: "don't",
                    feedback: "Olumsuz: I don't like = Sevmem"
                },
                {
                    type: "dropdown",
                    question: "She ___ stay in hotels.",
                    options: ["doesn't", "don't", "not"],
                    correct: "doesn't",
                    feedback: "Olumsuz: She doesn't stay = Kalmaz"
                },
                {
                    type: "yesno",
                    question: "Do they goes to the beach? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'Do' ile yalın fiil. Doğrusu: Do they GO to the beach?"
                },
                {
                    type: "dropdown",
                    question: "Where ___ you go on holiday?",
                    options: ["do", "does", "are"],
                    correct: "do",
                    feedback: "Soru: Where do you go...? = Nereye gidersin?"
                },
                {
                    type: "dropdown",
                    question: "What ___ he take in his suitcase?",
                    options: ["does", "do", "is"],
                    correct: "does",
                    feedback: "Soru: What does he take...? = O ne alır?"
                },
                {
                    type: "yesno",
                    question: "The beach is beautiful. ✓ Doğru sıfat kullanımı mı?",
                    correct: true,
                    feedback: "Evet doğru! Beautiful = Güzel (sıfat)"
                },
                {
                    type: "yesno",
                    question: "We doesn't have a camera. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'We' ile 'don't' kullanılır. Doğrusu: We DON'T have a camera."
                }
            ],
            reading: {
                title: "Our Summer Holiday in Spain",
                text: `
                    <p>Last summer, my family and I went to Spain for our holiday. We were very excited! We packed our suitcases with summer clothes, swimming suits and sunglasses.</p>
                    <p>We flew from London to Barcelona. The flight took about two hours. At the airport, we took a taxi to our hotel. Our hotel was near the beach and it was very beautiful. The hotel had a big swimming pool and a nice restaurant.</p>
                    <p>Every day, we went to the beach. The weather was hot and sunny. We swam in the sea and played beach volleyball. I also took many photos with my camera. The sunset at the beach was amazing!</p>
                    <p>One day, we visited the famous Sagrada Familia church in Barcelona. It is a very big and beautiful building. We also walked in the old streets of the city and ate delicious Spanish food in small restaurants.</p>
                    <p>We stayed in Spain for two weeks. It was a wonderful holiday! I bought some souvenirs for my friends. I want to visit Spain again next year.</p>
                `,
                questions: [
                    {
                        question: "Where did they go on holiday?",
                        options: ["Spain", "France", "Italy", "Greece"],
                        correct: "Spain",
                        feedback: "İspanya'ya gittiler: 'my family and I went to Spain'."
                    },
                    {
                        question: "How long was the flight?",
                        options: ["About two hours", "One hour", "Three hours", "Four hours"],
                        correct: "About two hours",
                        feedback: "Uçuş yaklaşık 2 saat sürdü: 'The flight took about two hours'."
                    },
                    {
                        question: "Where was the hotel?",
                        options: ["Near the beach", "In the city center", "Near the airport", "In the mountains"],
                        correct: "Near the beach",
                        feedback: "Otel plajın yakınındaydı: 'Our hotel was near the beach'."
                    },
                    {
                        question: "What did they do every day?",
                        options: ["They went to the beach", "They visited museums", "They went shopping", "They stayed at the hotel"],
                        correct: "They went to the beach",
                        feedback: "Her gün plaja gittiler: 'Every day, we went to the beach'."
                    },
                    {
                        question: "What famous place did they visit?",
                        options: ["Sagrada Familia", "Eiffel Tower", "Big Ben", "Colosseum"],
                        correct: "Sagrada Familia",
                        feedback: "Sagrada Familia'yı ziyaret ettiler: 'we visited the famous Sagrada Familia church'."
                    },
                    {
                        question: "How long did they stay in Spain?",
                        options: ["Two weeks", "One week", "Three weeks", "One month"],
                        correct: "Two weeks",
                        feedback: "İki hafta kaldılar: 'We stayed in Spain for two weeks'."
                    }
                ]
            },
            game: {
                type: "speedQuiz",
                title: "Hızlı Quiz - Tatil",
                questions: [
                    {
                        question: "The beach is hot and sandy.",
                        answer: true,
                        explanation: "Doğru! Plaj sıcak ve kumludur."
                    },
                    {
                        question: "You sleep at the airport.",
                        answer: false,
                        explanation: "Yanlış! Havalimanında uyunmaz, otelde uyunur."
                    },
                    {
                        question: "A suitcase is for clothes.",
                        answer: true,
                        explanation: "Doğru! Bavul kıyafetler içindir."
                    },
                    {
                        question: "A camera takes photos.",
                        answer: true,
                        explanation: "Doğru! Fotoğraf makinesi fotoğraf çeker."
                    },
                    {
                        question: "A passport is food.",
                        answer: false,
                        explanation: "Yanlış! Pasaport yemek değil, seyahat belgesidir."
                    }
                ]
            }
        },
        6: {
            title: "Alışveriş",
            explanation: {
                title: "Alışveriş ve Para",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Countable/Uncountable Nouns:</strong> Sayılabilen ve sayılamayan isimler</li>
                            <li><strong>Some/Any:</strong> Miktar belirtme (biraz, hiç)</li>
                            <li><strong>How much/How many:</strong> Ne kadar? / Kaç tane?</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Sayılabilen ve Sayılamayan İsimler</h3>
                        
                        <h4>🔢 Sayılabilen İsimler (Countable Nouns)</h4>
                        <p>Tane tane sayabileceğimiz şeyler:</p>
                        <table class="vocab-table">
                            <tr><th>Tekil (Singular)</th><th>Çoğul (Plural)</th><th>Türkçe</th></tr>
                            <tr><td><strong>a</strong> book</td><td>two <strong>books</strong></td><td>kitap/kitaplar</td></tr>
                            <tr><td><strong>an</strong> apple</td><td>five <strong>apples</strong></td><td>elma/elmalar</td></tr>
                            <tr><td><strong>a</strong> shirt</td><td>many <strong>shirts</strong></td><td>gömlek/gömlekler</td></tr>
                        </table>

                        <p><strong>💡 İpucu:</strong> Sayılabilen isimlerin çoğulu vardır ve sayı ile kullanılır!</p>
                        <ul>
                            <li>one apple, two apples, three apples</li>
                            <li>a/an ile tekil kullanılır: <strong>a</strong> book, <strong>an</strong> orange</li>
                        </ul>

                        <h4>💧 Sayılamayan İsimler (Uncountable Nouns)</h4>
                        <p>Tane tane sayamadığımız şeyler (sıvılar, malzemeler, soyut kavramlar):</p>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek</th></tr>
                            <tr><td>water</td><td>su</td><td>I need water</td></tr>
                            <tr><td>money</td><td>para</td><td>He has money</td></tr>
                            <tr><td>bread</td><td>ekmek</td><td>We buy bread</td></tr>
                            <tr><td>milk</td><td>süt</td><td>She drinks milk</td></tr>
                        </table>

                        <p><strong>⚠️ ÖNEMLİ:</strong> Sayılamayan isimlerle:</p>
                        <ul>
                            <li>❌ <strong>a/an</strong> kullanılmaz: ❌ a water, ❌ a money</li>
                            <li>❌ Çoğul yapılmaz: ❌ waters, ❌ moneys</li>
                            <li>✅ Daima tekil fiil kullanılır: Money <strong>is</strong> important</li>
                        </ul>

                        <h4>✨ SOME ve ANY Kullanımı</h4>
                        
                        <p><strong>SOME = biraz, birkaç (Olumlu cümlelerde)</strong></p>
                        <table class="vocab-table">
                            <tr><th>Kullanım</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Sayılabilen (çoğul)</td><td>I have <strong>some</strong> books</td><td>Birkaç kitabım var</td></tr>
                            <tr><td>Sayılamayan</td><td>I want <strong>some</strong> water</td><td>Biraz su istiyorum</td></tr>
                        </table>

                        <p><strong>ANY = hiç (Olumsuz ve sorularda)</strong></p>
                        <table class="vocab-table">
                            <tr><th>Kullanım</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Olumsuz</td><td>I don't have <strong>any</strong> money</td><td>Hiç param yok</td></tr>
                            <tr><td>Soru</td><td>Do you have <strong>any</strong> apples?</td><td>Hiç elma var mı?</td></tr>
                        </table>

                        <p><strong>📋 SOME/ANY Kuralı:</strong></p>
                        <ul>
                            <li>✅ Olumlu cümle → <strong>SOME</strong> (I have some bread)</li>
                            <li>✅ Olumsuz cümle → <strong>ANY</strong> (I don't have any bread)</li>
                            <li>✅ Soru cümlesi → <strong>ANY</strong> (Do you have any bread?)</li>
                            <li>⚠️ İstisna: Teklif sorularında SOME (Would you like some tea?)</li>
                        </ul>

                        <h4>❓ HOW MUCH / HOW MANY</h4>
                        
                        <table class="vocab-table">
                            <tr><th>Soru</th><th>Kullanım</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td><strong>How many</strong></td><td>Sayılabilen isimlerle</td><td>How many books?</td><td>Kaç kitap?</td></tr>
                            <tr><td><strong>How much</strong></td><td>Sayılamayan isimlerle</td><td>How much water?</td><td>Ne kadar su?</td></tr>
                            <tr><td><strong>How much</strong></td><td>Fiyat sormak için</td><td>How much is it?</td><td>Ne kadar (para)?</td></tr>
                        </table>

                        <p><strong>💡 İpucu:</strong></p>
                        <ul>
                            <li>How <strong>many</strong> (kaç) + sayılabilen isim (çoğul)</li>
                            <li>How <strong>much</strong> (ne kadar) + sayılamayan isim</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>🛒 Alışveriş Kelimeleri (Shopping Vocabulary)</h3>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>Shop/Store</strong></td><td>Mağaza</td><td>I go to the shop</td></tr>
                            <tr><td><strong>Price</strong></td><td>Fiyat</td><td>What's the price?</td></tr>
                            <tr><td><strong>Money</strong></td><td>Para</td><td>I need some money</td></tr>
                            <tr><td><strong>Buy</strong></td><td>Satın almak</td><td>I want to buy this</td></tr>
                            <tr><td><strong>Sell</strong></td><td>Satmak</td><td>They sell clothes</td></tr>
                            <tr><td><strong>Expensive</strong></td><td>Pahalı</td><td>It's too expensive</td></tr>
                            <tr><td><strong>Cheap</strong></td><td>Ucuz</td><td>This is cheap</td></tr>
                            <tr><td><strong>Discount</strong></td><td>İndirim</td><td>Is there a discount?</td></tr>
                        </table>
                    </div>
                `
            },
            exercises: [
                // Seviye 1: Temel Kelimeler (1-9)
                {
                    type: "dropdown",
                    question: "I go to the ___ to buy things. (mağaza)",
                    options: ["shop", "price", "money"],
                    correct: "shop",
                    feedback: "Shop (veya Store) = Mağaza"
                },
                {
                    type: "dropdown",
                    question: "The ___ is 50 lira. (fiyat)",
                    options: ["price", "shop", "discount"],
                    correct: "price",
                    feedback: "Price = Fiyat"
                },
                {
                    type: "dropdown",
                    question: "I need ___ to buy this. (para)",
                    options: ["money", "price", "shop"],
                    correct: "money",
                    feedback: "Money = Para"
                },
                {
                    type: "dropdown",
                    question: "I want to ___ this shirt. (satın almak)",
                    options: ["buy", "sell", "price"],
                    correct: "buy",
                    feedback: "Buy = Satın almak"
                },
                {
                    type: "dropdown",
                    question: "They ___ clothes in this shop. (satmak)",
                    options: ["sell", "buy", "discount"],
                    correct: "sell",
                    feedback: "Sell = Satmak"
                },
                {
                    type: "dropdown",
                    question: "This is very ___ ! (pahalı)",
                    options: ["expensive", "cheap", "money"],
                    correct: "expensive",
                    feedback: "Expensive = Pahalı"
                },
                {
                    type: "dropdown",
                    question: "This is very ___ ! (ucuz)",
                    options: ["cheap", "expensive", "discount"],
                    correct: "cheap",
                    feedback: "Cheap = Ucuz"
                },
                {
                    type: "dropdown",
                    question: "There is a 20% ___ . (indirim)",
                    options: ["discount", "price", "expensive"],
                    correct: "discount",
                    feedback: "Discount = İndirim"
                },
                {
                    type: "yesno",
                    question: "Expensive means very cheap. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! Expensive = pahalı, Cheap = ucuz (zıt anlamlı)"
                },
                // Seviye 2: This/These, Temel Cümleler (10-18)
                {
                    type: "dropdown",
                    question: "How much is ___? (tekil)",
                    options: ["this", "these", "those"],
                    correct: "this",
                    feedback: "Neden 'this'? - Tekil nesne için 'this' (bu) kullanılır."
                },
                {
                    type: "dropdown",
                    question: "How much are ___? (çoğul)",
                    options: ["these", "this", "that"],
                    correct: "these",
                    feedback: "'These' = bunlar (çoğul, yakın). Çoğul ile 'are' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "___ is my bag. (yakın, tekil)",
                    options: ["This", "These", "Those"],
                    correct: "This",
                    feedback: "This = Bu (yakın, tekil)"
                },
                {
                    type: "dropdown",
                    question: "___ are my shoes. (yakın, çoğul)",
                    options: ["These", "This", "That"],
                    correct: "These",
                    feedback: "These = Bunlar (yakın, çoğul)"
                },
                {
                    type: "yesno",
                    question: "This are expensive. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'This' ile 'is' kullanılır. Doğrusu: This IS expensive veya These ARE expensive."
                },
                {
                    type: "dropdown",
                    question: "I ___ to buy this.",
                    options: ["want", "wants", "wanting"],
                    correct: "want",
                    feedback: "'I want to buy' = Almak istiyorum"
                },
                {
                    type: "dropdown",
                    question: "She ___ a new dress.",
                    options: ["needs", "need", "needing"],
                    correct: "needs",
                    feedback: "'She' ile -s: need → needs (ihtiyaç duymak)"
                },
                {
                    type: "yesno",
                    question: "I want to buy this. ✓ Doğru ifade mi?",
                    correct: true,
                    feedback: "Evet! 'I want to buy' = almak istiyorum (doğru yapı)"
                },
                {
                    type: "dropdown",
                    question: "They ___ clothes here.",
                    options: ["sell", "sells", "selling"],
                    correct: "sell",
                    feedback: "'They' ile yalın fiil: sell (satmak)"
                },
                // Seviye 3: Kompleks Alışveriş Diyalogları (19-28)
                {
                    type: "dropdown",
                    question: "It's too ___. I can't buy it.",
                    options: ["expensive", "cheap", "discount"],
                    correct: "expensive",
                    feedback: "Neden 'expensive'? - 'Too expensive' = çok pahalı, alamam demek"
                },
                {
                    type: "dropdown",
                    question: "Do you have a ___?",
                    options: ["discount", "expensive", "shop"],
                    correct: "discount",
                    feedback: "Neden 'discount'? - 'Do you have a discount?' = İndiriminiz var mı?"
                },
                {
                    type: "dropdown",
                    question: "Can I ___ by card?",
                    options: ["pay", "pays", "paying"],
                    correct: "pay",
                    feedback: "Can I pay...? = Ödeyebilir miyim? (Can ile yalın fiil)"
                },
                {
                    type: "yesno",
                    question: "Do you sells this? ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'Do you' ile yalın fiil. Doğrusu: Do you SELL this?"
                },
                {
                    type: "dropdown",
                    question: "I ___ like this colour.",
                    options: ["don't", "doesn't", "not"],
                    correct: "don't",
                    feedback: "Olumsuz: I don't like = Sevmiyorum"
                },
                {
                    type: "dropdown",
                    question: "She ___ buy expensive things.",
                    options: ["doesn't", "don't", "not"],
                    correct: "doesn't",
                    feedback: "Olumsuz: She doesn't buy = Almaz"
                },
                {
                    type: "dropdown",
                    question: "How much ___ these shoes?",
                    options: ["are", "is", "do"],
                    correct: "are",
                    feedback: "'These shoes' çoğul, bu yüzden 'are' kullanılır."
                },
                {
                    type: "dropdown",
                    question: "Where ___ you shop?",
                    options: ["do", "does", "are"],
                    correct: "do",
                    feedback: "Soru: Where do you shop? = Nerede alışveriş yaparsın?"
                },
                {
                    type: "yesno",
                    question: "Does she have money? - Yes, she does. ✓ Doğru cevap mı?",
                    correct: true,
                    feedback: "Evet doğru! Kısa cevap: Yes, she does."
                },
                {
                    type: "dropdown",
                    question: "Can I ___ this on?",
                    options: ["try", "tries", "trying"],
                    correct: "try",
                    feedback: "Can I try this on? = Bunu deneyebilir miyim? (try on = denemek)"
                },
                {
                    type: "yesno",
                    question: "This shop sell good products. ✓ Doğru mu?",
                    correct: false,
                    feedback: "Yanlış! 'This shop' = It, bu yüzden -s gerekli. Doğrusu: This shop SELLS good products."
                }
            ],
            reading: {
                title: "Shopping at the Mall",
                text: `
                    <p>Yesterday, I went shopping at the big shopping mall in the city center. I wanted to buy some new clothes for the winter season.</p>
                    <p>First, I went to a clothes shop on the second floor. There were many nice jackets and sweaters. I tried on a blue jacket. It looked nice, but it was too expensive. The price was £150! I couldn't buy it.</p>
                    <p>Then, I saw a red sweater. It was very beautiful and warm. The shop assistant told me there was a 30% discount on all sweaters. The original price was £60, but with the discount, it was only £42. That's a good price! I decided to buy it.</p>
                    <p>After that, I went to a shoe shop. I needed new winter boots. I found black boots that I really liked. They were comfortable and the price was good - only £50. I bought them immediately.</p>
                    <p>At the end, I was hungry. I went to the food court on the top floor. I had a pizza and a cola. It cost £12.</p>
                    <p>I spent about £104 in total. I was happy with my shopping. The sweater and boots were good quality and the prices were reasonable.</p>
                `,
                questions: [
                    {
                        question: "Why did the person go shopping?",
                        options: ["To buy winter clothes", "To buy summer clothes", "To buy food", "To meet friends"],
                        correct: "To buy winter clothes",
                        feedback: "Kış kıyafetleri almak için gitti: 'I wanted to buy some new clothes for the winter season'."
                    },
                    {
                        question: "Why didn't the person buy the blue jacket?",
                        options: ["It was too expensive", "It was too small", "It was ugly", "It was the wrong colour"],
                        correct: "It was too expensive",
                        feedback: "Çok pahalıydı: 'it was too expensive. The price was £150!'."
                    },
                    {
                        question: "How much discount was there on sweaters?",
                        options: ["30%", "20%", "40%", "50%"],
                        correct: "30%",
                        feedback: "Kazaklarda %30 indirim vardı: 'there was a 30% discount on all sweaters'."
                    },
                    {
                        question: "How much did the sweater cost with the discount?",
                        options: ["£42", "£60", "£50", "£150"],
                        correct: "£42",
                        feedback: "İndirimli fiyat £42: 'with the discount, it was only £42'."
                    },
                    {
                        question: "What colour were the boots?",
                        options: ["Black", "Brown", "Red", "Blue"],
                        correct: "Black",
                        feedback: "Botlar siyahtı: 'I found black boots that I really liked'."
                    },
                    {
                        question: "How much did the person spend in total?",
                        options: ["£104", "£150", "£100", "£200"],
                        correct: "£104",
                        feedback: "Toplam £104 harcadı: 'I spent about £104 in total'."
                    }
                ]
            },
            game: {
                type: "speedQuiz",
                title: "Hızlı Quiz - Alışveriş",
                questions: [
                    {
                        question: "Expensive means very cheap.",
                        answer: false,
                        explanation: "Yanlış! Expensive = pahalı, cheap = ucuz (zıt anlamlı)"
                    },
                    {
                        question: "You buy things at a shop.",
                        answer: true,
                        explanation: "Doğru! Mağazadan (shop) alışveriş yaparsınız."
                    },
                    {
                        question: "A discount makes things more expensive.",
                        answer: false,
                        explanation: "Yanlış! İndirim (discount) fiyatı düşürür, ucuzlatır."
                    },
                    {
                        question: "Money is used to buy things.",
                        answer: true,
                        explanation: "Doğru! Para (money) ile alışveriş yapılır."
                    },
                    {
                        question: "How much is this? asks about the price.",
                        answer: true,
                        explanation: "Doğru! 'How much?' fiyat sorar. = Bu ne kadar?"
                    }
                ]
            }
        },
        
        // ========================================
        // B1 LEVEL CHAPTERS (7-15)
        // ========================================
        
        7: {
            title: "Gesundheit & Arztbesuch",
            level: "B1",
            grammar: ["past_simple_irregular", "modal_verbs_should_must"],
            explanation: {
                title: "Sağlık ve Doktor Ziyareti",
                content: `
                    <div class="explanation-box">
                        <div class="grammar-focus">
                            <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                            <ul>
                                <li><strong>Past Simple (Düzensiz Fiiller):</strong> Geçmişte olan şeyler (I felt sick - Kendimi hasta hissettim)</li>
                                <li><strong>Modal Fiiller:</strong> should (tavsiye), must (zorunluluk), have to (mecburiyet)</li>
                            </ul>
                        </div>

                        <h3>⚕️ GRAMATİK: Past Simple - Düzensiz Fiiller (Geçmiş Zaman)</h3>
                        
                        <p><strong>📌 Basit Açıklama:</strong> Türkçede "dün, geçen hafta, geçen yıl" gibi geçmişte olan şeyleri anlatırken "Geçmiş Zaman (Past Simple)" kullanırız.</p>
                        
                        <div class="grammar-focus">
                            <h4>🔍 Düzenli ve Düzensiz Fiiller Nedir?</h4>
                            <p><strong>Düzenli Fiiller:</strong> Sonuna -ed eklenir (walk → walk<strong>ed</strong>)</p>
                            <p><strong>Düzensiz Fiiller:</strong> Tamamen değişir! (go → <strong>went</strong>, NOT goed ❌)</p>
                            <p>💡 <strong>ÖNEMLİ:</strong> Düzensiz fiilleri EZBERLEMEN gerekir. Kural yok!</p>
                        </div>

                        <p><strong>📚 Sağlıkla İlgili Önemli Düzensiz Fiiller:</strong></p>
                        <table class="vocab-table">
                            <tr>
                                <th>Şimdiki Zaman</th>
                                <th>Geçmiş Zaman</th>
                                <th>Türkçe</th>
                                <th>Örnek Cümle</th>
                            </tr>
                            <tr>
                                <td>feel</td>
                                <td><strong>felt</strong></td>
                                <td>hissetmek</td>
                                <td>I <strong>felt</strong> sick yesterday. (Dün kendimi hasta hissettim.)</td>
                            </tr>
                            <tr>
                                <td>go</td>
                                <td><strong>went</strong></td>
                                <td>gitmek</td>
                                <td>I <strong>went</strong> to the doctor. (Doktora gittim.)</td>
                            </tr>
                            <tr>
                                <td>have</td>
                                <td><strong>had</strong></td>
                                <td>sahip olmak</td>
                                <td>I <strong>had</strong> a fever. (Ateşim vardı.)</td>
                            </tr>
                            <tr>
                                <td>take</td>
                                <td><strong>took</strong></td>
                                <td>almak</td>
                                <td>I <strong>took</strong> medicine. (İlaç aldım.)</td>
                            </tr>
                            <tr>
                                <td>break</td>
                                <td><strong>broke</strong></td>
                                <td>kırmak</td>
                                <td>He <strong>broke</strong> his arm. (Kolunu kırdı.)</td>
                            </tr>
                            <tr>
                                <td>hurt</td>
                                <td><strong>hurt</strong></td>
                                <td>acımak/incinmek</td>
                                <td>My back <strong>hurt</strong>. (Sırtım ağrıdı.) - Aynı şekil!</td>
                            </tr>
                        </table>

                        <p><strong>✅ Daha Fazla Örnek:</strong></p>
                        <ul>
                            <li>Yesterday, I <strong>felt</strong> terrible. (Dün çok kötü hissettim.)</li>
                            <li>Last week, she <strong>went</strong> to the hospital. (Geçen hafta hastaneye gitti.)</li>
                            <li>I <strong>had</strong> a headache two days ago. (İki gün önce başım ağrıyordu.)</li>
                            <li>He <strong>took</strong> medicine this morning. (Bu sabah ilaç aldı.)</li>
                            <li>She <strong>broke</strong> her leg last year. (Geçen yıl bacağını kırdı.)</li>
                        </ul>

                        <h3>💬 GRAMATİK: Modal Fiiller - Should, Must, Have to</h3>
                        
                        <p><strong>📌 Basit Açıklama:</strong> Bu fiiller tavsiye vermek veya zorunluluk bildirmek için kullanılır.</p>

                        <div class="grammar-focus">
                            <h4>1️⃣ SHOULD (Tavsiye - "...-meli/malı")</h4>
                            <p><strong>Ne zaman kullanılır?</strong> Birilerine öneri vermek, tavsiyede bulunmak için.</p>
                            <p><strong>Formül:</strong> Özne + <strong>should</strong> + fiilin yalın hali</p>
                            
                            <p><strong>Örnekler:</strong></p>
                            <ul>
                                <li>You <strong>should</strong> rest. (Dinlenmelisin.) - Tavsiye!</li>
                                <li>You <strong>should</strong> drink more water. (Daha fazla su içmelisin.)</li>
                                <li>He <strong>should</strong> see a doctor. (Doktora görünmeli.)</li>
                                <li>You <strong>shouldn't</strong> smoke. (Sigara içmemelisin.) - Olumsuz tavsiye</li>
                                <li>She <strong>shouldn't</strong> eat junk food. (Abur cubur yememeli.)</li>
                            </ul>
                            <p>💡 <strong>Not:</strong> "Should"dan sonra fiilin sonuna -s/-ed eklenmez!</p>
                            <ul>
                                <li>He should <strong>go</strong>. ✓ (NOT: He should go<strong>es</strong> ❌)</li>
                            </ul>
                        </div>

                        <div class="grammar-focus">
                            <h4>2️⃣ MUST (Güçlü Zorunluluk - "Mecbursun/Şart")</h4>
                            <p><strong>Ne zaman kullanılır?</strong> Kesin zorunluluk, kural, ya da çok güçlü tavsiye için.</p>
                            <p><strong>Formül:</strong> Özne + <strong>must</strong> + fiilin yalın hali</p>
                            
                            <p><strong>Örnekler:</strong></p>
                            <ul>
                                <li>You <strong>must</strong> take this medicine. (Bu ilacı almalısın - kesinlikle!)</li>
                                <li>I <strong>must</strong> go to the hospital. (Hastaneye gitmeliyim - acil!)</li>
                                <li>We <strong>must</strong> follow the doctor's advice. (Doktorun tavsiyesine uymalıyız.)</li>
                                <li>You <strong>mustn't</strong> drive when you're sick. (Hastayken araba kullanma - yasak!)</li>
                                <li>You <strong>mustn't</strong> eat before the surgery. (Ameliyattan önce yemek yeme - yasak!)</li>
                            </ul>
                            <p>⚠️ <strong>Dikkat:</strong> "Mustn't" = YASAK (yapmamalısın - yasaklanmış)</p>
                        </div>

                        <div class="grammar-focus">
                            <h4>3️⃣ HAVE TO (Zorunluluk - "Zorundayım/Gerekiyor")</h4>
                            <p><strong>Ne zaman kullanılır?</strong> Dış sebepler yüzünden yapmak zorunda olduğun şeyler için.</p>
                            <p><strong>Formül:</strong> Özne + <strong>have to / has to</strong> + fiilin yalın hali</p>
                            
                            <p><strong>Örnekler:</strong></p>
                            <ul>
                                <li>I <strong>have to</strong> go to the dentist. (Dişçiye gitmek zorundayım.)</li>
                                <li>She <strong>has to</strong> take medicine daily. (Günlük ilaç almak zorunda.) - 3. tekil şahıs!</li>
                                <li>We <strong>have to</strong> wait for the test results. (Test sonuçlarını beklemek zorundayız.)</li>
                                <li>You <strong>don't have to</strong> stay in bed. (Yatakta kalmak zorunda değilsin.) - Gerek yok</li>
                            </ul>
                            <p>💡 <strong>Fark:</strong></p>
                            <ul>
                                <li><strong>Must:</strong> Kişisel görüş ("Bence yapmalısın!")</li>
                                <li><strong>Have to:</strong> Dışardan gelen kural ("Kurallara göre yapmalısın.")</li>
                            </ul>
                        </div>

                        <h3>🩺 Sağlık Kelimeleri (Vocabulary)</h3>
                        
                        <p><strong>Vücut Bölümleri (Body Parts):</strong></p>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>head</strong></td><td>baş</td><td>My <strong>head</strong> hurts. (Başım ağrıyor.)</td></tr>
                            <tr><td><strong>throat</strong></td><td>boğaz</td><td>I have a sore <strong>throat</strong>. (Boğazım ağrıyor.)</td></tr>
                            <tr><td><strong>stomach</strong></td><td>mide</td><td>My <strong>stomach</strong> aches. (Midem ağrıyor.)</td></tr>
                            <tr><td><strong>back</strong></td><td>sırt</td><td>I hurt my <strong>back</strong>. (Sırtımı incittim.)</td></tr>
                            <tr><td><strong>arm</strong></td><td>kol</td><td>I broke my <strong>arm</strong>. (Kolumu kırdım.)</td></tr>
                            <tr><td><strong>leg</strong></td><td>bacak</td><td>My <strong>leg</strong> is swollen. (Bacağım şişti.)</td></tr>
                        </table>

                        <p><strong>Belirtiler (Symptoms):</strong></p>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>fever</strong></td><td>ateş</td><td>I have a high <strong>fever</strong>. (Yüksek ateşim var.)</td></tr>
                            <tr><td><strong>cough</strong></td><td>öksürük</td><td>I can't stop <strong>coughing</strong>. (Öksürüğü durduramıyorum.)</td></tr>
                            <tr><td><strong>cold</strong></td><td>soğuk algınlığı</td><td>I caught a <strong>cold</strong>. (Soğuk algınlığına yakalandım.)</td></tr>
                            <tr><td><strong>flu</strong></td><td>grip</td><td>She has the <strong>flu</strong>. (Gribi var.)</td></tr>
                            <tr><td><strong>headache</strong></td><td>baş ağrısı</td><td>I have a terrible <strong>headache</strong>. (Berbat bir baş ağrım var.)</td></tr>
                        </table>

                        <p><strong>Doktorda (At the Doctor's):</strong></p>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Örnek Cümle</th></tr>
                            <tr><td><strong>appointment</strong></td><td>randevu</td><td>I'd like to make an <strong>appointment</strong>. (Randevu almak istiyorum.)</td></tr>
                            <tr><td><strong>prescription</strong></td><td>reçete</td><td>The doctor gave me a <strong>prescription</strong>. (Doktor reçete verdi.)</td></tr>
                            <tr><td><strong>medicine</strong></td><td>ilaç</td><td>Take this <strong>medicine</strong> twice a day. (Bu ilacı günde iki kez al.)</td></tr>
                            <tr><td><strong>treatment</strong></td><td>tedavi</td><td>What <strong>treatment</strong> do you recommend? (Hangi tedaviyi önerirsiniz?)</td></tr>
                        </table>
                    </div>
                `
            },
            exercise: {
                type: "fill-in-the-blank",
                instructions: "Lücken mit der richtigen Verbform ausfüllen (Past Simple)",
                questions: [
                    {
                        question: "Last week, I ___ (feel) terrible, so I ___ (go) to see the doctor.",
                        answer: "felt, went",
                        options: ["felt, went", "feel, go", "feeled, goed", "felt, go"],
                        correct: 0,
                        explanation: "Unregelmäßige Verben: feel → felt, go → went"
                    },
                    {
                        question: "The doctor said I ___ rest and ___ drink plenty of water.",
                        answer: "should, should",
                        options: ["should, should", "must, must", "can, can", "will, will"],
                        correct: 0,
                        explanation: "'Should' für Ratschläge/Empfehlungen"
                    },
                    {
                        question: "She ___ (break) her leg and ___ (have) to stay in hospital.",
                        answer: "broke, had",
                        options: ["broke, had", "broken, have", "breaked, had", "broke, has"],
                        correct: 0,
                        explanation: "break → broke, have → had (Past Simple)"
                    },
                    {
                        question: "You ___ take this medicine three times a day.",
                        answer: "must",
                        options: ["must", "can", "may", "could"],
                        correct: 0,
                        explanation: "'Must' für starke Empfehlungen/Pflicht"
                    },
                    {
                        question: "I ___ (hurt) my back while lifting heavy boxes.",
                        answer: "hurt",
                        options: ["hurt", "hurted", "hurting", "hurts"],
                        correct: 0,
                        explanation: "hurt → hurt (gleiche Form in Base und Past)"
                    }
                ]
            },
            reading: {
                title: "At the Doctor's Office",
                text: `
                    <div class="reading-text">
                        <p><strong>Sarah's Doctor Visit</strong></p>
                        <p>Last Monday, Sarah woke up feeling terrible. She had a high fever, a bad cough, and her throat was very sore. She decided to call the doctor's office and make an appointment.</p>
                        
                        <p>The receptionist answered: "Good morning, Dr. Smith's office. How can I help you?"</p>
                        
                        <p>Sarah explained her symptoms. The receptionist said: "We have an appointment available this afternoon at 3 PM. Does that work for you?"</p>
                        
                        <p>Sarah went to the doctor's office at 3 PM. Dr. Smith examined her and said: "You have the flu. You should rest for a few days. You must drink lots of water and take this medicine twice a day. You shouldn't go to work this week."</p>
                        
                        <p>Sarah thanked the doctor, got her prescription, and went to the pharmacy. She bought the medicine and went home to rest. After three days, she felt much better.</p>
                    </div>
                `,
                questions: [
                    {
                        question: "What symptoms did Sarah have?",
                        options: [
                            "High fever, cough, and sore throat",
                            "Broken leg and headache",
                            "Stomach ache and dizziness",
                            "Back pain and fever"
                        ],
                        correct: 0,
                        explanation: "Text: 'She had a high fever, a bad cough, and her throat was very sore.'"
                    },
                    {
                        question: "When was Sarah's appointment?",
                        options: [
                            "Monday afternoon at 3 PM",
                            "Tuesday morning at 10 AM",
                            "Monday morning at 9 AM",
                            "Wednesday at 2 PM"
                        ],
                        correct: 0,
                        explanation: "Text: 'We have an appointment available this afternoon at 3 PM.'"
                    },
                    {
                        question: "What did the doctor diagnose?",
                        options: [
                            "The flu",
                            "A cold",
                            "A broken bone",
                            "Food poisoning"
                        ],
                        correct: 0,
                        explanation: "Text: 'You have the flu.'"
                    },
                    {
                        question: "What did the doctor tell Sarah to do?",
                        options: [
                            "Rest, drink water, take medicine twice daily",
                            "Exercise more and eat vegetables",
                            "Go to the hospital immediately",
                            "Come back tomorrow"
                        ],
                        correct: 0,
                        explanation: "Text: 'You should rest... must drink lots of water... take this medicine twice a day.'"
                    },
                    {
                        question: "How long did it take Sarah to feel better?",
                        options: [
                            "Three days",
                            "One week",
                            "Two days",
                            "One month"
                        ],
                        correct: 0,
                        explanation: "Text: 'After three days, she felt much better.'"
                    }
                ]
            },
            game: {
                type: "conversation_simulator",
                title: "🏥 Beim Arzt - Konversations-Simulator",
                difficulty: "medium",
                avatar: "👨‍⚕️",
                nodes: {
                    start: {
                        npcText: "Good morning! I'm Dr. Schmidt. How can I help you today?",
                        choices: [
                            {
                                text: "I've been feeling sick since yesterday.",
                                correct: true,
                                feedback: "Perfekt! Klare Beschreibung des Problems.",
                                next: "symptoms",
                                npcResponse: "I see. Can you tell me more about your symptoms?"
                            },
                            {
                                text: "Hello! Nice weather today!",
                                correct: false,
                                feedback: "Zu informell. Beim Arzt sollte man direkt das Problem beschreiben.",
                                next: "symptoms",
                                npcResponse: "Well... Let's focus on your health. What symptoms do you have?"
                            },
                            {
                                text: "I need medicine immediately!",
                                correct: false,
                                feedback: "Zu direkt. Erst Symptome beschreiben, dann bekommt man Behandlung.",
                                next: "symptoms",
                                npcResponse: "First, I need to know what's wrong. What are your symptoms?"
                            }
                        ]
                    },
                    symptoms: {
                        npcText: null,
                        choices: [
                            {
                                text: "I have a high fever, a bad cough, and my throat hurts.",
                                correct: true,
                                feedback: "Ausgezeichnet! Detaillierte und klare Symptom-Beschreibung.",
                                next: "duration",
                                npcResponse: "I understand. When did these symptoms start?"
                            },
                            {
                                text: "Everything hurts everywhere!",
                                correct: false,
                                feedback: "Zu vage. Sei spezifisch bei Symptomen.",
                                next: "duration",
                                npcResponse: "Try to be more specific. When exactly did you start feeling unwell?"
                            },
                            {
                                text: "I'm dying!",
                                correct: false,
                                feedback: "Übertrieben. Bleib sachlich und beschreibe konkrete Symptome.",
                                next: "duration",
                                npcResponse: "Let's stay calm. When did you first notice these problems?"
                            }
                        ]
                    },
                    duration: {
                        npcText: null,
                        choices: [
                            {
                                text: "It started two days ago and has been getting worse.",
                                correct: true,
                                feedback: "Perfekt! Zeitangabe und Verlaufsbeschreibung.",
                                next: "examination",
                                npcResponse: "Alright. Let me examine you. Please sit on the examination table."
                            },
                            {
                                text: "I don't remember exactly.",
                                correct: false,
                                feedback: "Versuche dich zu erinnern - Zeitangaben sind wichtig für die Diagnose.",
                                next: "examination",
                                npcResponse: "That's okay. Let me examine you now."
                            },
                            {
                                text: "Long time ago... maybe.",
                                correct: false,
                                feedback: "Zu ungenau. Versuche eine ungefähre Zeitangabe zu machen.",
                                next: "examination",
                                npcResponse: "Let's proceed with the examination."
                            }
                        ]
                    },
                    examination: {
                        npcText: "After examination... You have the flu. You should rest for a few days and take medicine. Do you have any questions?",
                        choices: [
                            {
                                text: "How often should I take the medicine?",
                                correct: true,
                                feedback: "Sehr gute Frage! Wichtig für die richtige Behandlung.",
                                next: "prescription",
                                npcResponse: "Take it twice a day, morning and evening. Always take it with food."
                            },
                            {
                                text: "Can I go to work tomorrow?",
                                correct: true,
                                feedback: "Gute praktische Frage!",
                                next: "prescription",
                                npcResponse: "No, you shouldn't go to work for at least 3 days. You need to rest."
                            },
                            {
                                text: "Okay, bye!",
                                correct: false,
                                feedback: "Zu schnell! Stelle Fragen zur Behandlung.",
                                next: "prescription",
                                npcResponse: "Wait! Here's your prescription. Take it to the pharmacy."
                            }
                        ]
                    },
                    prescription: {
                        npcText: "Here's your prescription. Remember: Rest, drink lots of water, and come back if you don't feel better in 5 days.",
                        choices: [
                            {
                                text: "Thank you, doctor. I will follow your advice.",
                                correct: true,
                                feedback: "Perfekt! Höflich und zeigt, dass du die Anweisungen verstanden hast.",
                                next: "end",
                                npcResponse: "You're welcome! Take care and get well soon!"
                            },
                            {
                                text: "Thanks. See you.",
                                correct: true,
                                feedback: "Okay, aber etwas zu kurz. Ein bisschen mehr Höflichkeit wäre besser.",
                                next: "end",
                                npcResponse: "Goodbye. Take care!"
                            },
                            {
                                text: "Whatever.",
                                correct: false,
                                feedback: "Unhöflich! Zeige Dankbarkeit für die Behandlung.",
                                next: "end",
                                npcResponse: "...Please take care of yourself."
                            }
                        ]
                    },
                    end: {
                        type: "end",
                        npcText: "Consultation complete!"
                    }
                }
            }
        },
        
        8: {
            title: "Arbeitswelt & Karriere",
            level: "B1",
            grammar: ["present_perfect"],
            explanation: {
                title: "Beruf und Arbeitsleben",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Present Perfect:</strong> Geçmiş ile şimdiki zaman arasındaki bağlantı</li>
                            <li><strong>Kullanım:</strong> Deneyimler, özgeçmiş, şimdiki zamana etkisi olan geçmiş eylemler</li>
                            <li><strong>Sinyal Kelimeler:</strong> already, yet, just, ever, never, for, since</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Present Perfect Tense</h3>
                        <p><strong>Ne zaman kullanılır?</strong></p>
                        <ul>
                            <li>✅ Hayat deneyimleri: I have visited Paris (Paris'i ziyaret ettim - hayatımda)</li>
                            <li>✅ Henüz devam eden durumlar: She has worked here for 5 years (5 yıldır burada çalışıyor - hala)</li>
                            <li>✅ Yeni olan eylemler: He has just arrived (Az önce geldi)</li>
                            <li>✅ Şimdiye kadar olan/olmayan: I have never seen this (Bunu hiç görmedim)</li>
                        </ul>

                        <h4>🔧 YAPI: HAVE/HAS + PAST PARTICIPLE (3. HAL)</h4>
                        <table class="vocab-table">
                            <tr><th>Özne</th><th>Yardımcı Fiil</th><th>Geçmiş Ortaç</th><th>Örnek</th></tr>
                            <tr><td>I/You/We/They</td><td><strong>have</strong></td><td>worked</td><td>I have worked</td></tr>
                            <tr><td>He/She/It</td><td><strong>has</strong></td><td>worked</td><td>She has worked</td></tr>
                        </table>

                        <p><strong>💡 İpucu: Past Participle (3. Hal) nedir?</strong></p>
                        <ul>
                            <li>Düzenli fiillerde: fiil + ED (work → work<strong>ed</strong>, play → play<strong>ed</strong>)</li>
                            <li>Düzensiz fiillerde: özel form (go → <strong>gone</strong>, see → <strong>seen</strong>, do → <strong>done</strong>)</li>
                        </ul>

                        <h4>📋 Yaygın Past Participle Tablosu</h4>
                        <table class="vocab-table">
                            <tr><th>Yalın Hal</th><th>Past Simple</th><th>Past Participle</th><th>Türkçe</th></tr>
                            <tr><td>work</td><td>worked</td><td>work<strong>ed</strong></td><td>çalışmak</td></tr>
                            <tr><td>be</td><td>was/were</td><td><strong>been</strong></td><td>olmak</td></tr>
                            <tr><td>go</td><td>went</td><td><strong>gone</strong></td><td>gitmek</td></tr>
                            <tr><td>see</td><td>saw</td><td><strong>seen</strong></td><td>görmek</td></tr>
                            <tr><td>do</td><td>did</td><td><strong>done</strong></td><td>yapmak</td></tr>
                            <tr><td>have</td><td>had</td><td><strong>had</strong></td><td>sahip olmak</td></tr>
                            <tr><td>write</td><td>wrote</td><td><strong>written</strong></td><td>yazmak</td></tr>
                        </table>

                        <h4>✅ OLUMLU CÜMLE</h4>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>I/You/We/They + have + P.P.</td><td>I have worked here</td><td>Burada çalıştım</td></tr>
                            <tr><td>He/She/It + has + P.P.</td><td>She has finished</td><td>Bitirdi</td></tr>
                        </table>

                        <h4>❌ OLUMSUZ CÜMLE</h4>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>haven't + P.P.</td><td>I haven't seen him</td><td>Onu görmedim</td></tr>
                            <tr><td>hasn't + P.P.</td><td>She hasn't arrived</td><td>Varmadı (henüz)</td></tr>
                        </table>

                        <h4>❓ SORU CÜMLESI</h4>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Have + özne + P.P.?</td><td>Have you worked?</td><td>Çalıştın mı?</td></tr>
                            <tr><td>Has + özne + P.P.?</td><td>Has she finished?</td><td>Bitirdi mi?</td></tr>
                        </table>

                        <h4>⏰ Sinyal Kelimeler (Signal Words)</h4>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Kullanım</th><th>Örnek</th></tr>
                            <tr><td><strong>just</strong></td><td>az önce</td><td>Yeni biten eylem</td><td>I have <strong>just</strong> finished</td></tr>
                            <tr><td><strong>already</strong></td><td>zaten/çoktan</td><td>Beklentiden önce</td><td>She has <strong>already</strong> left</td></tr>
                            <tr><td><strong>yet</strong></td><td>henüz (olumsuz/soru)</td><td>Beklenen ama olmayan</td><td>Haven't you finished <strong>yet</strong>?</td></tr>
                            <tr><td><strong>ever</strong></td><td>hiç (soru)</td><td>Hayat deneyimi</td><td>Have you <strong>ever</strong> been?</td></tr>
                            <tr><td><strong>never</strong></td><td>hiç (olumsuz)</td><td>Hayatta hiç olmayan</td><td>I have <strong>never</strong> seen</td></tr>
                            <tr><td><strong>for</strong></td><td>...boyunca</td><td>Süre belirtir</td><td>for 3 years, for 2 hours</td></tr>
                            <tr><td><strong>since</strong></td><td>...beri</td><td>Başlangıç noktası</td><td>since 2020, since Monday</td></tr>
                        </table>

                        <p><strong>💡 FOR vs SINCE:</strong></p>
                        <ul>
                            <li><strong>FOR</strong> + süre: for 5 years, for 3 months, for 2 hours</li>
                            <li><strong>SINCE</strong> + başlangıç noktası: since 2020, since January, since Monday</li>
                        </ul>

                        <h4>🆚 Past Simple vs Present Perfect</h4>
                        <table class="vocab-table">
                            <tr><th>Past Simple</th><th>Present Perfect</th></tr>
                            <tr><td>Geçmişte bitti, şimdiyle ilgisi yok</td><td>Geçmiş, ama şimdiyle ilgili</td></tr>
                            <tr><td>I worked there <strong>last year</strong></td><td>I have worked there <strong>for 5 years</strong></td></tr>
                            <tr><td>Zaman belli: yesterday, last week</td><td>Zaman belirsiz veya devam eden</td></tr>
                            <tr><td>She finished <strong>yesterday</strong></td><td>She has <strong>just</strong> finished</td></tr>
                        </table>
                    </div>

                    <div class="explanation-box">
                        <h3>💼 Meslek Kelimeleri (Jobs & Professions)</h3>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Present Perfect Örnek</th></tr>
                            <tr><td><strong>accountant</strong></td><td>muhasebeci</td><td>She has worked as an accountant for 5 years</td></tr>
                            <tr><td><strong>engineer</strong></td><td>mühendis</td><td>I have been an engineer since 2018</td></tr>
                            <tr><td><strong>manager</strong></td><td>müdür</td><td>He has just become a manager</td></tr>
                            <tr><td><strong>secretary</strong></td><td>sekreter</td><td>Have you ever worked as a secretary?</td></tr>
                            <tr><td><strong>salesperson</strong></td><td>satış elemanı</td><td>She has never been a salesperson</td></tr>
                        </table>
                    </div>
                `
            },
            exercise: {
                type: "multiple-choice",
                instructions: "Wähle die richtige Form (Present Perfect)",
                questions: [
                    {
                        question: "I ___ in this company for five years.",
                        answer: "have worked",
                        options: ["have worked", "worked", "am working", "work"],
                        correct: 0,
                        explanation: "Present Perfect mit 'for' für Zeitdauer"
                    },
                    {
                        question: "She ___ the email yet.",
                        answer: "hasn't sent",
                        options: ["hasn't sent", "didn't send", "doesn't send", "isn't sending"],
                        correct: 0,
                        explanation: "'yet' = noch nicht → Present Perfect Negativ"
                    },
                    {
                        question: "___ you ever ___ in a team of more than 10 people?",
                        answer: "Have, worked",
                        options: ["Have, worked", "Did, work", "Do, work", "Are, working"],
                        correct: 0,
                        explanation: "'ever' = jemals → Present Perfect für Erfahrungen"
                    },
                    {
                        question: "He ___ just ___ promoted to manager.",
                        answer: "has, been",
                        options: ["has, been", "was, been", "is, been", "had, been"],
                        correct: 0,
                        explanation: "'just' = gerade eben → Present Perfect"
                    },
                    {
                        question: "We ___ the project already.",
                        answer: "have finished",
                        options: ["have finished", "finished", "are finishing", "finish"],
                        correct: 0,
                        explanation: "'already' = schon → Present Perfect"
                    }
                ]
            },
            reading: {
                title: "My Career Journey",
                text: `
                    <div class="reading-text">
                        <p><strong>My Career Journey - by Michael</strong></p>
                        <p>I have worked in marketing for over 10 years now. After university, I started as a junior marketing assistant in a small company. I have learned so much since then!</p>
                        
                        <p>Three years ago, I got promoted to Marketing Manager. Since my promotion, I have led many successful campaigns and have worked with amazing teams. I have already managed five major projects this year.</p>
                        
                        <p>Last month, I applied for a new position at an international company. I have just received an email - they want to interview me next week! I have never worked for an international company before, so I'm very excited.</p>
                        
                        <p>I have prepared my CV and practiced my interview skills. I haven't told my current employer yet because I want to wait until I get the job offer. Wish me luck!</p>
                    </div>
                `,
                questions: [
                    {
                        question: "How long has Michael worked in marketing?",
                        options: ["Over 10 years", "5 years", "3 years", "1 year"],
                        correct: 0,
                        explanation: "Text: 'I have worked in marketing for over 10 years now.'"
                    },
                    {
                        question: "When did Michael become Marketing Manager?",
                        options: ["Three years ago", "Last month", "This year", "10 years ago"],
                        correct: 0,
                        explanation: "Text: 'Three years ago, I got promoted to Marketing Manager.'"
                    },
                    {
                        question: "What happened last month?",
                        options: [
                            "He applied for a new job",
                            "He got promoted",
                            "He finished university",
                            "He got the new job"
                        ],
                        correct: 0,
                        explanation: "Text: 'Last month, I applied for a new position...'"
                    },
                    {
                        question: "Has Michael worked for an international company before?",
                        options: ["No, never", "Yes, once", "Yes, many times", "The text doesn't say"],
                        correct: 0,
                        explanation: "Text: 'I have never worked for an international company before'"
                    },
                    {
                        question: "Has Michael told his current employer about the interview?",
                        options: [
                            "No, not yet",
                            "Yes, he has",
                            "Yes, last week",
                            "He will tomorrow"
                        ],
                        correct: 0,
                        explanation: "Text: 'I haven't told my current employer yet'"
                    }
                ]
            },
            game: {
                type: "conversation_simulator",
                title: "💼 Job Interview - Vorstellungsgespräch",
                difficulty: "medium",
                avatar: "👔",
                nodes: {
                    start: {
                        npcText: "Good morning! Thank you for coming. Please, have a seat. Can you tell me about yourself?",
                        choices: [
                            {
                                text: "I have worked in marketing for 5 years and I'm passionate about digital campaigns.",
                                correct: true,
                                feedback: "Perfekt! Professionell und relevant.",
                                next: "experience",
                                npcResponse: "That's impressive! Can you tell me about a successful project you've managed?"
                            },
                            {
                                text: "I'm 30 years old and I like pizza.",
                                correct: false,
                                feedback: "Zu persönlich und irrelevant. Fokus auf berufliche Qualifikationen.",
                                next: "experience",
                                npcResponse: "Um... Let's talk about your professional experience instead."
                            },
                            {
                                text: "I need this job because I need money.",
                                correct: false,
                                feedback: "Zu direkt! Betone deine Fähigkeiten und Motivation.",
                                next: "experience",
                                npcResponse: "I see... Tell me about your professional skills."
                            }
                        ]
                    },
                    experience: {
                        npcText: null,
                        choices: [
                            {
                                text: "I have successfully launched three major campaigns that increased sales by 40%.",
                                correct: true,
                                feedback: "Ausgezeichnet! Konkrete Erfolge mit Zahlen.",
                                next: "strengths",
                                npcResponse: "Very impressive! What would you say are your main strengths?"
                            },
                            {
                                text: "I've done many things. Everything went okay.",
                                correct: false,
                                feedback: "Zu vage! Sei spezifisch mit Beispielen und Erfolgen.",
                                next: "strengths",
                                npcResponse: "Can you be more specific? What are your strengths?"
                            },
                            {
                                text: "I'm the best. Nobody can do it better than me.",
                                correct: false,
                                feedback: "Zu arrogant! Zeige Selbstvertrauen, aber bleibe bescheiden.",
                                next: "strengths",
                                npcResponse: "Confidence is good, but... what specific strengths do you have?"
                            }
                        ]
                    },
                    strengths: {
                        npcText: null,
                        choices: [
                            {
                                text: "I'm a creative problem-solver and I work well in teams.",
                                correct: true,
                                feedback: "Sehr gut! Relevante berufliche Stärken.",
                                next: "questions",
                                npcResponse: "Great! Do you have any questions for us?"
                            },
                            {
                                text: "I'm always on time.",
                                correct: false,
                                feedback: "Das ist Grundvoraussetzung, keine besondere Stärke. Nenne spezifische Fähigkeiten.",
                                next: "questions",
                                npcResponse: "That's... expected. Do you have questions about the position?"
                            },
                            {
                                text: "I don't have any weaknesses.",
                                correct: false,
                                feedback: "Unrealistisch! Jeder hat Schwächen. Zeige Selbstreflexion.",
                                next: "questions",
                                npcResponse: "I see... Do you have any questions for me?"
                            }
                        ]
                    },
                    questions: {
                        npcText: null,
                        choices: [
                            {
                                text: "Yes, what are the opportunities for professional development?",
                                correct: true,
                                feedback: "Perfekt! Zeigt Interesse an Weiterentwicklung.",
                                next: "end",
                                npcResponse: "We offer many training programs. We'll be in touch soon. Thank you!"
                            },
                            {
                                text: "How many holidays do I get?",
                                correct: false,
                                feedback: "Zu direkt in der ersten Runde. Erst Interesse am Job zeigen.",
                                next: "end",
                                npcResponse: "We'll discuss that if we make an offer. Thank you for coming."
                            },
                            {
                                text: "No, I'm fine.",
                                correct: false,
                                feedback: "Verpasste Chance! Stelle immer Fragen - zeigt Interesse.",
                                next: "end",
                                npcResponse: "Alright. We'll contact you soon. Goodbye."
                            }
                        ]
                    },
                    end: {
                        type: "end",
                        npcText: "Interview complete!"
                    }
                }
            }
        },

        9: {
            title: "Meinungen & Diskussionen",
            level: "B1",
            grammar: ["connectors", "opinion_phrases"],
            explanation: {
                title: "Meinungen ausdrücken und argumentieren",
                content: `
                    <div class="grammar-focus">
                        <h3>🎯 Bu Bölümde Öğreneceklerimiz</h3>
                        <ul>
                            <li><strong>Connectors (Bağlaçlar):</strong> because, although, however, therefore</li>
                            <li><strong>Opinion Phrases (Görüş İfadeleri):</strong> I think, In my opinion, I believe</li>
                            <li><strong>Agreement/Disagreement (Katılma/Katılmama):</strong> I agree, I disagree</li>
                        </ul>
                    </div>

                    <div class="explanation-box">
                        <h3>📌 Basit Açıklama: Görüş Bildirme (Expressing Opinions)</h3>
                        
                        <h4>💭 Görüş İfadeleri</h4>
                        <table class="vocab-table">
                            <tr><th>İngilizce</th><th>Türkçe</th><th>Kullanım</th><th>Örnek</th></tr>
                            <tr><td><strong>I think (that)...</strong></td><td>Bence...</td><td>En yaygın</td><td>I think technology is important</td></tr>
                            <tr><td><strong>In my opinion...</strong></td><td>Bana göre...</td><td>Resmi</td><td>In my opinion, education is key</td></tr>
                            <tr><td><strong>I believe (that)...</strong></td><td>İnanıyorum ki...</td><td>Güçlü görüş</td><td>I believe we can solve this</td></tr>
                            <tr><td><strong>From my point of view...</strong></td><td>Benim açımdan...</td><td>Kişisel bakış</td><td>From my point of view, it's fair</td></tr>
                            <tr><td><strong>I feel (that)...</strong></td><td>Hissediyorum ki...</td><td>Duygusal</td><td>I feel that we need change</td></tr>
                        </table>

                        <p><strong>💡 İpucu:</strong> "I think" ve "In my opinion" cümlenin başında veya ortasında kullanılabilir:</p>
                        <ul>
                            <li>I think <strong>technology is important</strong></li>
                            <li><strong>Technology</strong>, I think, <strong>is important</strong></li>
                        </ul>

                        <h4>✅ Katılma (Agreement)</h4>
                        <table class="vocab-table">
                            <tr><th>İfade</th><th>Türkçe</th><th>Güç</th><th>Örnek</th></tr>
                            <tr><td><strong>I agree</strong></td><td>Katılıyorum</td><td>Güçlü</td><td>I completely agree with you</td></tr>
                            <tr><td><strong>Exactly!</strong></td><td>Kesinlikle!</td><td>Çok güçlü</td><td>Exactly! That's my point too</td></tr>
                            <tr><td><strong>You're right</strong></td><td>Haklısın</td><td>Kabul</td><td>You're absolutely right</td></tr>
                            <tr><td><strong>I see your point</strong></td><td>Ne demek istediğini anlıyorum</td><td>Anlayış</td><td>I see your point, and I agree</td></tr>
                            <tr><td><strong>That's true</strong></td><td>Bu doğru</td><td>Onay</td><td>That's true, I hadn't thought of that</td></tr>
                        </table>

                        <h4>❌ Katılmama (Disagreement)</h4>
                        <table class="vocab-table">
                            <tr><th>İfade</th><th>Türkçe</th><th>Kibarlık</th><th>Örnek</th></tr>
                            <tr><td><strong>I disagree</strong></td><td>Katılmıyorum</td><td>Direkt</td><td>I'm afraid I disagree</td></tr>
                            <tr><td><strong>I don't think so</strong></td><td>Öyle düşünmüyorum</td><td>Nazik</td><td>I don't think so because...</td></tr>
                            <tr><td><strong>I see your point, but...</strong></td><td>Anlıyorum ama...</td><td>Çok nazik</td><td>I see your point, but I think differently</td></tr>
                            <tr><td><strong>On the contrary...</strong></td><td>Aksine...</td><td>Karşı çıkma</td><td>On the contrary, it helps us</td></tr>
                            <tr><td><strong>I'm not sure about that</strong></td><td>Bundan emin değilim</td><td>Yumuşak</td><td>I'm not sure about that idea</td></tr>
                        </table>

                        <h4>🔗 Bağlaçlar (Connectors)</h4>
                        
                        <p><strong>1. BECAUSE (çünkü) - SEBEP</strong></p>
                        <p>Bir şeyin neden olduğunu açıklar:</p>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Sonuç + <strong>because</strong> + Sebep</td><td>I agree <strong>because</strong> it's logical</td><td>Katılıyorum çünkü mantıklı</td></tr>
                            <tr><td></td><td>She's happy <strong>because</strong> she passed</td><td>Mutlu çünkü geçti</td></tr>
                        </table>

                        <p><strong>2. ALTHOUGH / THOUGH (rağmen) - KARŞITLIK</strong></p>
                        <p>Beklenmeyen bir durum gösterir:</p>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td><strong>Although</strong> + karşıt durum + sonuç</td><td><strong>Although</strong> it's expensive, it's worth it</td><td>Pahalı olmasına rağmen, değer</td></tr>
                            <tr><td></td><td><strong>Although</strong> I'm tired, I'll help you</td><td>Yorgun olmama rağmen, yardım edeceğim</td></tr>
                        </table>

                        <p><strong>3. HOWEVER (ancak, fakat) - KARŞITLIK</strong></p>
                        <p>İki cümle arasında karşıtlık kurar (virgülle ayrılır):</p>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Cümle 1. <strong>However,</strong> Cümle 2</td><td>I like it. <strong>However,</strong> it's too expensive</td><td>Beğendim. Ancak çok pahalı</td></tr>
                            <tr><td></td><td>He's nice. <strong>However,</strong> I don't trust him</td><td>Nazik. Ama güvenmiyorum</td></tr>
                        </table>

                        <p><strong>4. THEREFORE (bu yüzden, dolayısıyla) - SONUÇ</strong></p>
                        <p>Mantıksal sonuç gösterir:</p>
                        <table class="vocab-table">
                            <tr><th>Yapı</th><th>Örnek</th><th>Türkçe</th></tr>
                            <tr><td>Sebep. <strong>Therefore,</strong> Sonuç</td><td>It's important. <strong>Therefore,</strong> we should act</td><td>Önemli. Bu yüzden harekete geçmeliyiz</td></tr>
                            <tr><td></td><td>She studied hard. <strong>Therefore,</strong> she passed</td><td>Çok çalıştı. Dolayısıyla geçti</td></tr>
                        </table>

                        <h4>📋 Bağlaç Karşılaştırma Tablosu</h4>
                        <table class="vocab-table">
                            <tr><th>Bağlaç</th><th>Anlamı</th><th>Kullanım</th><th>Örnek</th></tr>
                            <tr><td><strong>because</strong></td><td>çünkü</td><td>Sebep</td><td>I agree <strong>because</strong> it makes sense</td></tr>
                            <tr><td><strong>although</strong></td><td>rağmen</td><td>Karşıtlık</td><td><strong>Although</strong> it's hard, I'll try</td></tr>
                            <tr><td><strong>however</strong></td><td>ancak</td><td>Karşıtlık (cümle arası)</td><td>It's good. <strong>However,</strong> it's expensive</td></tr>
                            <tr><td><strong>therefore</strong></td><td>bu yüzden</td><td>Sonuç</td><td>It's late. <strong>Therefore,</strong> we must go</td></tr>
                        </table>

                        <p><strong>⚠️ ÖNEMLİ FARKLAR:</strong></p>
                        <ul>
                            <li><strong>because</strong> ile <strong>although</strong> cümle içinde kullanılır (virgül gerekmez)</li>
                            <li><strong>however</strong> ve <strong>therefore</strong> cümleler arasında kullanılır (virgül gerekir)</li>
                        </ul>
                    </div>
                `
            },
            exercise: {
                type: "sentence_constructor",
                title: "🔧 Satz-Konstruktor: Meinungen & Argumente",
                difficulty: "medium",
                sentences: [
                    {
                        instruction: "Bilde einen Satz mit 'I think'",
                        words: ["I", "think", "technology", "is", "very", "important"],
                        correct: "I think technology is very important",
                        explanation: "Meinungen: I think + Subjekt + Verb"
                    },
                    {
                        instruction: "Verwende 'because' für den Grund",
                        words: ["I", "agree", "because", "it", "makes", "sense"],
                        correct: "I agree because it makes sense",
                        explanation: "'because' verbindet Meinung mit Begründung"
                    },
                    {
                        instruction: "Drücke einen Kontrast mit 'although' aus",
                        words: ["Although", "it's", "difficult", "we", "can", "do", "it"],
                        correct: "Although it's difficult we can do it",
                        explanation: "'Although' am Satzanfang für Kontrast"
                    },
                    {
                        instruction: "Nutze 'however' für Gegensatz",
                        words: ["I", "understand", "However", "I", "disagree"],
                        correct: "I understand However I disagree",
                        explanation: "'However' trennt zwei gegensätzliche Aussagen"
                    },
                    {
                        instruction: "Verwende 'In my opinion'",
                        words: ["In", "my", "opinion", "education", "is", "the", "key"],
                        correct: "In my opinion education is the key",
                        explanation: "'In my opinion' am Anfang für persönliche Meinung"
                    }
                ]
            },
            reading: {
                title: "Should Students Use Smartphones in School?",
                text: `
                    <div class="reading-text">
                        <p><strong>A Debate: Smartphones in Schools</strong></p>
                        
                        <p><strong>Maria:</strong> I think students should be allowed to use smartphones in school. In my opinion, smartphones are useful learning tools. Students can use them for research and educational apps. Although some people think they're distracting, I believe the benefits outweigh the negatives.</p>
                        
                        <p><strong>John:</strong> I disagree with Maria. I don't think smartphones should be allowed in school because they distract students from learning. However, I see her point about educational benefits. Therefore, I suggest students should only use them in specific lessons with teacher supervision.</p>
                        
                        <p><strong>Emma:</strong> I see both points, but I think John's idea is the best. Although smartphones can be educational, students often use them for games and social media. From my point of view, we need clear rules about when and how to use them.</p>
                    </div>
                `,
                questions: [
                    {
                        question: "What is Maria's opinion?",
                        options: [
                            "Students should use smartphones",
                            "Smartphones should be banned",
                            "No clear opinion",
                            "Only teachers should use them"
                        ],
                        correct: 0,
                        explanation: "Maria: 'I think students should be allowed to use smartphones in school.'"
                    },
                    {
                        question: "Why does Maria think smartphones are good?",
                        options: [
                            "They're useful for research and learning apps",
                            "They're fun",
                            "Everyone has one",
                            "Teachers like them"
                        ],
                        correct: 0,
                        explanation: "Maria: 'smartphones are useful learning tools... for research and educational apps'"
                    },
                    {
                        question: "What is John's main concern?",
                        options: [
                            "Smartphones distract students",
                            "They're too expensive",
                            "They break easily",
                            "Parents don't like them"
                        ],
                        correct: 0,
                        explanation: "John: 'they distract students from learning'"
                    },
                    {
                        question: "What solution does John suggest?",
                        options: [
                            "Use them only in specific lessons with supervision",
                            "Ban them completely",
                            "Let students decide",
                            "Use them all the time"
                        ],
                        correct: 0,
                        explanation: "John: 'students should only use them in specific lessons with teacher supervision'"
                    },
                    {
                        question: "What does Emma think about the debate?",
                        options: [
                            "John's compromise is the best idea",
                            "Maria is completely right",
                            "Both are wrong",
                            "We need more smartphones"
                        ],
                        correct: 0,
                        explanation: "Emma: 'I think John's idea is the best'"
                    }
                ]
            },
            game: {
                type: "conversation_simulator",
                title: "💭 Diskussion: Sollten wir mehr Homeoffice haben?",
                difficulty: "hard",
                avatar: "🤔",
                nodes: {
                    start: {
                        npcText: "I believe companies should offer more home office options. What do you think?",
                        choices: [
                            {
                                text: "I agree because it saves commuting time and increases productivity.",
                                correct: true,
                                feedback: "Perfekt! Klare Meinung mit Begründung.",
                                next: "counterargument",
                                npcResponse: "That's a good point. However, some people say it reduces team collaboration. What would you say to that?"
                            },
                            {
                                text: "Whatever you say.",
                                correct: false,
                                feedback: "Keine Meinung! Drücke deine eigene Meinung aus.",
                                next: "counterargument",
                                npcResponse: "But what's YOUR opinion? Consider this: home office might reduce teamwork."
                            },
                            {
                                text: "You're wrong!",
                                correct: false,
                                feedback: "Zu unhöflich! Respektiere andere Meinungen.",
                                next: "counterargument",
                                npcResponse: "Let's have a respectful discussion. What about the issue of team collaboration?"
                            }
                        ]
                    },
                    counterargument: {
                        npcText: null,
                        choices: [
                            {
                                text: "I see your point. However, we can use video calls and online tools to stay connected.",
                                correct: true,
                                feedback: "Ausgezeichnet! Kontrast mit Lösung.",
                                next: "compromise",
                                npcResponse: "True! Maybe a hybrid model would work? Part home, part office?"
                            },
                            {
                                text: "That's not important.",
                                correct: false,
                                feedback: "Ignoriert das Argument! Gehe darauf ein.",
                                next: "compromise",
                                npcResponse: "But it IS important to many. What about a mixed approach?"
                            },
                            {
                                text: "I don't care about teamwork.",
                                correct: false,
                                feedback: "Zu negativ! Zeige, dass du verschiedene Perspektiven verstehst.",
                                next: "compromise",
                                npcResponse: "Teamwork matters. Perhaps a hybrid system could help?"
                            }
                        ]
                    },
                    compromise: {
                        npcText: null,
                        choices: [
                            {
                                text: "Exactly! I think 2-3 days home, 2-3 days office is ideal because it balances both needs.",
                                correct: true,
                                feedback: "Perfekt! Kompromiss mit Begründung.",
                                next: "end",
                                npcResponse: "I completely agree! That's a balanced solution."
                            },
                            {
                                text: "No, it must be 100% home office!",
                                correct: false,
                                feedback: "Zu starr! In Diskussionen Kompromisse finden.",
                                next: "end",
                                npcResponse: "Well, we have different views. Let's agree to disagree."
                            },
                            {
                                text: "Maybe.",
                                correct: false,
                                feedback: "Zu vage! Drücke eine klare Meinung aus.",
                                next: "end",
                                npcResponse: "Alright... It was nice talking to you."
                            }
                        ]
                    },
                    end: {
                        type: "end",
                        npcText: "Discussion complete!"
                    }
                }
            }
        }
    }
};

// Explizit global verfügbar machen
window.learningData = learningData;
console.log('data.js loaded, chapters:', Object.keys(learningData.chapters).length);
