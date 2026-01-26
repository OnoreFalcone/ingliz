// Global state management
let currentChapter = 1;
let currentTab = 'explanation';
let userProgress = {
    completedChapters: [],
    exerciseScores: {}
};

// DOM Elements - will be initialized after DOM loads
let sidebar;
let menuToggle;
let chapterButtons;
let tabButtons;
let explanationTab;
let exerciseTab;
let readingTab;
let gameTab;
let checkExerciseBtn;
let checkReadingBtn;
let mobileAccordionTrigger;
let mobileAccordionContent;
let mobileChapterItems;
let currentChapterIndicator;
let mobileProgressFill;
let mobileProgressText;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements after DOM is loaded
    sidebar = document.getElementById('sidebar');
    menuToggle = document.getElementById('menuToggle');
    chapterButtons = document.querySelectorAll('.chapter-btn');
    tabButtons = document.querySelectorAll('.tab-btn');
    explanationTab = document.getElementById('explanationTab');
    exerciseTab = document.getElementById('exerciseTab');
    readingTab = document.getElementById('readingTab');
    gameTab = document.getElementById('gameTab');
    checkExerciseBtn = document.getElementById('checkExercise');
    checkReadingBtn = document.getElementById('checkReading');
    mobileAccordionTrigger = document.getElementById('mobileAccordionTrigger');
    mobileAccordionContent = document.getElementById('mobileAccordionContent');
    mobileChapterItems = document.querySelectorAll('.mobile-chapter-item');
    currentChapterIndicator = document.getElementById('currentChapterIndicator');
    mobileProgressFill = document.getElementById('mobileProgressFill');
    mobileProgressText = document.getElementById('mobileProgressText');
    
    loadProgress();
    loadChapter(1);
    setupEventListeners();
    updateProgressBar();
});

// Event Listeners
function setupEventListeners() {
    // Menu toggle for mobile (only if exists)
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Chapter navigation
    chapterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const chapterId = parseInt(btn.dataset.chapter);
            loadChapter(chapterId);
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Tab navigation
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    // Exercise check button
    checkExerciseBtn.addEventListener('click', checkExercises);

    // Reading check button
    checkReadingBtn.addEventListener('click', checkReading);

    // Mobile accordion toggle
    if (mobileAccordionTrigger) {
        mobileAccordionTrigger.addEventListener('click', () => {
            mobileAccordionTrigger.classList.toggle('active');
            mobileAccordionContent.classList.toggle('active');
        });
    }

    // Mobile chapter selection
    mobileChapterItems.forEach(item => {
        item.addEventListener('click', () => {
            const chapterId = parseInt(item.dataset.mobileChapter);
            loadChapter(chapterId);
            
            // Close accordion after selection
            mobileAccordionTrigger.classList.remove('active');
            mobileAccordionContent.classList.remove('active');
        });
    });
}

// Load chapter content
function loadChapter(chapterId) {
    currentChapter = chapterId;
    const chapter = learningData.chapters[chapterId];
    
    if (!chapter) return;

    // Update active chapter button
    chapterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.chapter) === chapterId) {
            btn.classList.add('active');
        }
    });

    // Update mobile chapter items
    mobileChapterItems.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.mobileChapter) === chapterId) {
            item.classList.add('active');
        }
    });

    // Update current chapter indicator
    if (currentChapterIndicator) {
        currentChapterIndicator.textContent = chapterId;
    }

    // Load content for all tabs
    loadExplanation(chapter);
    loadExercises(chapter);
    loadReading(chapter);
    loadGame(chapter);

    // Switch to explanation tab
    switchTab('explanation');
}

// Load explanation content
function loadExplanation(chapter) {
    const titleEl = document.getElementById('chapterTitle');
    const contentEl = document.getElementById('explanationContent');
    
    titleEl.textContent = chapter.title;
    contentEl.innerHTML = chapter.explanation.content;
}

// Load exercises
function loadExercises(chapter) {
    const exerciseContent = document.getElementById('exerciseContent');
    exerciseContent.innerHTML = '';

    chapter.exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.dataset.index = index;

        if (exercise.type === 'dropdown') {
            exerciseDiv.innerHTML = `
                <p>${exercise.question}</p>
                <select class="exercise-select" data-correct="${exercise.correct}">
                    <option value="">Seçiniz...</option>
                    ${exercise.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
                <div class="feedback-message hidden" data-feedback="${exercise.feedback}"></div>
            `;
        } else if (exercise.type === 'yesno') {
            exerciseDiv.innerHTML = `
                <p>${exercise.question}</p>
                <div class="yes-no-buttons">
                    <button type="button" class="yes-no-btn" data-value="true">✓ Doğru</button>
                    <button type="button" class="yes-no-btn" data-value="false">✗ Yanlış</button>
                </div>
                <input type="hidden" class="yes-no-answer" data-correct="${exercise.correct}">
                <div class="feedback-message hidden" data-feedback="${exercise.feedback}"></div>
            `;

            // Add click handlers to yes/no buttons
            const yesNoButtons = exerciseDiv.querySelectorAll('.yes-no-btn');
            const hiddenInput = exerciseDiv.querySelector('.yes-no-answer');
            
            yesNoButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    yesNoButtons.forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    hiddenInput.value = btn.dataset.value;
                });
            });
        }

        exerciseContent.appendChild(exerciseDiv);
    });

    // Reset exercise result
    const resultDiv = document.getElementById('exerciseResult');
    resultDiv.className = 'hidden';
    resultDiv.innerHTML = '';
}

// Check exercises
function checkExercises() {
    const exerciseItems = document.querySelectorAll('.exercise-item');
    let correctCount = 0;
    let totalCount = exerciseItems.length;

    exerciseItems.forEach(item => {
        const select = item.querySelector('.exercise-select');
        const yesNoInput = item.querySelector('.yes-no-answer');
        const feedbackDiv = item.querySelector('.feedback-message');
        
        let isCorrect = false;

        if (select) {
            const userAnswer = select.value;
            const correctAnswer = select.dataset.correct;
            isCorrect = userAnswer === correctAnswer;
        } else if (yesNoInput) {
            const userAnswer = yesNoInput.value;
            const correctAnswer = yesNoInput.dataset.correct;
            isCorrect = userAnswer === correctAnswer;
        }

        // Update item styling
        item.classList.remove('correct', 'incorrect');
        feedbackDiv.classList.remove('hidden');

        if (isCorrect) {
            item.classList.add('correct');
            feedbackDiv.innerHTML = `✓ Aferin! Doğru cevap!`;
            feedbackDiv.style.background = 'var(--secondary-color)';
            correctCount++;
        } else {
            item.classList.add('incorrect');
            feedbackDiv.innerHTML = `✗ ${feedbackDiv.dataset.feedback}`;
            feedbackDiv.style.background = 'var(--warning-color)';
        }
    });

    // Show overall result
    const resultDiv = document.getElementById('exerciseResult');
    resultDiv.classList.remove('hidden', 'success', 'error');
    
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    if (percentage === 100) {
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `
            <div class="success-icon">🎉</div>
            <p><strong>Mükemmel!</strong> Tüm soruları doğru cevapladınız! (${correctCount}/${totalCount})</p>
        `;
        showConfetti();
        markChapterCompleted(currentChapter);
    } else if (percentage >= 70) {
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `
            <div class="success-icon">👍</div>
            <p><strong>Aferin!</strong> İyi gidiyorsunuz! (${correctCount}/${totalCount} doğru - %${percentage})</p>
        `;
    } else {
        resultDiv.classList.add('error');
        resultDiv.innerHTML = `
            <p><strong>Tekrar deneyin!</strong> Biraz daha pratik yapmalısınız. (${correctCount}/${totalCount} doğru - %${percentage})</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">💡 İpucu: Açıklama bölümünü tekrar okuyun.</p>
        `;
    }

    // Save score
    userProgress.exerciseScores[currentChapter] = percentage;
    saveProgress();
}

// Load reading comprehension
function loadReading(chapter) {
    const readingContent = document.getElementById('readingContent');
    const reading = chapter.reading;

    if (!reading) {
        readingContent.innerHTML = '<p>Bu bölüm için okuma metni henüz hazırlanmamıştır.</p>';
        return;
    }

    let html = `
        <div class="reading-text">
            <h3>${reading.title}</h3>
            ${reading.text}
        </div>
        <div class="reading-questions">
            <h3>Metin hakkında soruları cevaplayın:</h3>
    `;

    reading.questions.forEach((question, index) => {
        html += `
            <div class="reading-question" data-index="${index}">
                <h4>Soru ${index + 1}: ${question.question}</h4>
                <div class="reading-options">
        `;

        question.options.forEach((option, optIndex) => {
            const optionId = `reading-q${index}-opt${optIndex}`;
            html += `
                <div class="reading-option">
                    <input type="radio" id="${optionId}" name="reading-q${index}" value="${option}">
                    <label for="${optionId}">${option}</label>
                </div>
            `;
        });

        html += `
                </div>
                <div class="feedback-message hidden" data-feedback="${question.feedback}"></div>
            </div>
        `;
    });

    html += '</div>';
    readingContent.innerHTML = html;

    // Reset reading result
    const resultDiv = document.getElementById('readingResult');
    resultDiv.className = 'hidden';
    resultDiv.innerHTML = '';
}

// Check reading comprehension
function checkReading() {
    const chapter = learningData.chapters[currentChapter];
    const reading = chapter.reading;
    
    if (!reading) return;

    const questions = document.querySelectorAll('.reading-question');
    let correctCount = 0;
    let totalCount = reading.questions.length;

    questions.forEach((questionDiv, index) => {
        const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
        const feedbackDiv = questionDiv.querySelector('.feedback-message');
        const correctAnswer = reading.questions[index].correct;

        questionDiv.classList.remove('correct', 'incorrect');
        feedbackDiv.classList.remove('hidden');

        if (!selectedOption) {
            feedbackDiv.innerHTML = '⚠️ Lütfen bir cevap seçin!';
            feedbackDiv.style.background = 'var(--warning-color)';
            questionDiv.classList.add('incorrect');
            return;
        }

        const userAnswer = selectedOption.value;
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            questionDiv.classList.add('correct');
            feedbackDiv.innerHTML = '✓ Aferin! Doğru cevap!';
            feedbackDiv.style.background = 'var(--secondary-color)';
            correctCount++;
        } else {
            questionDiv.classList.add('incorrect');
            feedbackDiv.innerHTML = `✗ ${feedbackDiv.dataset.feedback}<br><small>Doğru cevap: <strong>${correctAnswer}</strong></small>`;
            feedbackDiv.style.background = 'var(--danger-color)';
        }
    });

    // Show overall result
    const resultDiv = document.getElementById('readingResult');
    resultDiv.classList.remove('hidden', 'success', 'error');
    
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    if (percentage === 100) {
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `
            <div class="success-icon">🎉</div>
            <p><strong>Mükemmel!</strong> Metni çok iyi anladınız! (${correctCount}/${totalCount})</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">📖 Okuma beceriniz harika!</p>
        `;
        showConfetti();
        markChapterCompleted(currentChapter);
    } else if (percentage >= 75) {
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `
            <div class="success-icon">👍</div>
            <p><strong>Aferin!</strong> Metni iyi anladınız! (${correctCount}/${totalCount} doğru - %${percentage})</p>
        `;
    } else {
        resultDiv.classList.add('error');
        resultDiv.innerHTML = `
            <p><strong>Tekrar okuyun!</strong> Metni daha dikkatli okumalısınız. (${correctCount}/${totalCount} doğru - %${percentage})</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">💡 İpucu: Metni tekrar okuyun ve soruları dikkatlice cevaplayın.</p>
        `;
    }
}

// Load game
function loadGame(chapter) {
    const gameContent = document.getElementById('gameContent');
    const game = chapter.game;

    if (game.type === 'memory') {
        loadMemoryGame(game, gameContent);
    } else if (game.type === 'wordSort') {
        loadWordSortGame(game, gameContent);
    } else if (game.type === 'speedQuiz') {
        loadSpeedQuiz(game, gameContent);
    } else if (game.type === 'conversation_simulator') {
        loadConversationSimulator(game, gameContent);
    } else if (game.type === 'sentence_constructor') {
        loadSentenceConstructor(game, gameContent);
    }
}

// Conversation Simulator Loader
function loadConversationSimulator(game, container) {
    container.innerHTML = `
        <div class="game-header">
            <h2>${game.title}</h2>
            <span class="difficulty-badge ${game.difficulty}">
                <span class="star">${game.difficulty === 'easy' ? '⭐' : game.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}</span>
                ${game.difficulty === 'easy' ? 'Einfach' : game.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
            </span>
        </div>
        <div id="conversationSimulatorContainer"></div>
    `;
    
    const simContainer = document.getElementById('conversationSimulatorContainer');
    new ConversationSimulator(simContainer, game);
}

// Sentence Constructor Loader  
function loadSentenceConstructor(game, container) {
    container.innerHTML = `
        <div class="game-header">
            <h2>${game.title}</h2>
            <span class="difficulty-badge ${game.difficulty}">
                <span class="star">${game.difficulty === 'easy' ? '⭐' : game.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}</span>
                ${game.difficulty === 'easy' ? 'Einfach' : game.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
            </span>
        </div>
        <div id="sentenceConstructorContainer"></div>
    `;
    
    const constructorContainer = document.getElementById('sentenceConstructorContainer');
    sentenceConstructorInstance = new SentenceConstructor(constructorContainer, game);
}

// Memory Game
function loadMemoryGame(game, container) {
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;

    // Create card array with pairs
    game.pairs.forEach(pair => {
        cards.push({ ...pair, type: 'content' });
        cards.push({ ...pair, type: 'match' });
    });

    // Shuffle cards
    cards = shuffleArray(cards);

    container.innerHTML = `
        <div class="game-container">
            <div class="game-info">
                <div>
                    <span>Hamle</span>
                    <strong id="moveCount">0</strong>
                </div>
                <div>
                    <span>Eşleşme</span>
                    <strong id="matchCount">0 / ${game.pairs.length}</strong>
                </div>
            </div>
            <div class="memory-grid" id="memoryGrid"></div>
            <button class="btn-primary" onclick="location.reload()">Yeniden Başla</button>
        </div>
    `;

    const grid = document.getElementById('memoryGrid');
    const moveCountEl = document.getElementById('moveCount');
    const matchCountEl = document.getElementById('matchCount');

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.id = card.id;
        cardEl.dataset.type = card.type;
        cardEl.dataset.index = index;
        cardEl.textContent = '?';

        cardEl.addEventListener('click', () => {
            if (flippedCards.length < 2 && !cardEl.classList.contains('flipped') && !cardEl.classList.contains('matched')) {
                flipCard(cardEl, card);
            }
        });

        grid.appendChild(cardEl);
    });

    function flipCard(cardEl, card) {
        cardEl.classList.add('flipped');
        cardEl.textContent = card.type === 'content' ? card.content : card.match;
        flippedCards.push({ element: cardEl, card: card });

        if (flippedCards.length === 2) {
            moves++;
            moveCountEl.textContent = moves;

            setTimeout(() => {
                checkMatch();
            }, 800);
        }
    }

    function checkMatch() {
        const [first, second] = flippedCards;

        if (first.card.id === second.card.id) {
            first.element.classList.add('matched');
            second.element.classList.add('matched');
            matchedPairs++;
            matchCountEl.textContent = `${matchedPairs} / ${game.pairs.length}`;

            if (matchedPairs === game.pairs.length) {
                setTimeout(() => {
                    showConfetti();
                    alert(`🎉 Tebrikler! ${moves} hamlede tamamladınız!`);
                    markChapterCompleted(currentChapter);
                }, 500);
            }
        } else {
            first.element.classList.remove('flipped');
            second.element.classList.remove('flipped');
            first.element.textContent = '?';
            second.element.textContent = '?';
        }

        flippedCards = [];
    }
}

// Word Sorting Game
function loadWordSortGame(game, container) {
    let currentSentenceIndex = 0;
    let selectedWords = [];

    function renderSentence() {
        const sentence = game.sentences[currentSentenceIndex];
        const words = shuffleArray([...sentence.words]);

        container.innerHTML = `
            <div class="word-sorting-container">
                <div class="game-info">
                    <div>
                        <span>Cümle</span>
                        <strong>${currentSentenceIndex + 1} / ${game.sentences.length}</strong>
                    </div>
                </div>
                <p><strong>Türkçesi:</strong> ${sentence.translation}</p>
                <div class="sentence-display" id="sentenceDisplay">Kelimeleri seçin...</div>
                <div class="word-tiles" id="wordTiles"></div>
                <div class="sorting-actions">
                    <button class="btn-reset" onclick="resetSentence()">Sıfırla</button>
                    <button class="btn-check" onclick="checkSentence()">Kontrol Et</button>
                </div>
                <div id="sentenceResult"></div>
            </div>
        `;

        const tilesContainer = document.getElementById('wordTiles');
        words.forEach(word => {
            const tile = document.createElement('div');
            tile.className = 'word-tile';
            tile.textContent = word;
            tile.addEventListener('click', () => selectWord(word, tile));
            tilesContainer.appendChild(tile);
        });
    }

    window.selectWord = (word, tile) => {
        if (tile.classList.contains('used')) return;

        selectedWords.push(word);
        tile.classList.add('used');
        updateDisplay();
    };

    window.resetSentence = () => {
        selectedWords = [];
        document.querySelectorAll('.word-tile').forEach(tile => {
            tile.classList.remove('used');
        });
        updateDisplay();
    };

    window.checkSentence = () => {
        const sentence = game.sentences[currentSentenceIndex];
        const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(sentence.correct);
        const resultDiv = document.getElementById('sentenceResult');

        if (isCorrect) {
            resultDiv.innerHTML = `
                <div class="feedback-message" style="background: var(--secondary-color);">
                    ✓ Aferin! Doğru cevap!<br>
                    <small>${sentence.explanation}</small>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    ${currentSentenceIndex < game.sentences.length - 1 ? 
                        '<button class="btn-primary" onclick="nextSentence()" style="flex: 1;">Devam →</button>' : 
                        '<button class="btn-primary" onclick="finishGame()" style="flex: 1;">Bitir ✓</button>'}
                </div>
            `;
            showConfetti();
        } else {
            resultDiv.innerHTML = `
                <div class="feedback-message" style="background: var(--danger-color);">
                    ✗ Yanlış sıralama! Tekrar deneyin.<br>
                    <small>Doğru sıra: ${sentence.correct.join(' ')}</small><br>
                    <small>${sentence.explanation}</small>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button class="btn-primary" onclick="resetSentence()" style="flex: 1; background: var(--warning-color);">Birdaha 🔄</button>
                    ${currentSentenceIndex < game.sentences.length - 1 ? 
                        '<button class="btn-primary" onclick="nextSentence()" style="flex: 1;">Atla →</button>' : ''}
                </div>
            `;
        }
    };

    window.nextSentence = () => {
        currentSentenceIndex++;
        selectedWords = [];
        renderSentence();
    };

    window.finishGame = () => {
        const resultDiv = document.getElementById('sentenceResult');
        resultDiv.innerHTML = `
            <div class="feedback-message" style="background: var(--secondary-color);">
                🎉 Tebrikler! Tüm cümleleri doğru sıraladınız!
            </div>
        `;
        markChapterCompleted(currentChapter);
    };

    function updateDisplay() {
        const display = document.getElementById('sentenceDisplay');
        display.textContent = selectedWords.length > 0 ? selectedWords.join(' ') : 'Kelimeleri seçin...';
    }

    renderSentence();
}

// Speed Quiz Game
function loadSpeedQuiz(game, container) {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let startTime = Date.now();

    function renderQuestion() {
        const question = game.questions[currentQuestionIndex];

        container.innerHTML = `
            <div class="game-container">
                <div class="game-info">
                    <div>
                        <span>Soru</span>
                        <strong>${currentQuestionIndex + 1} / ${game.questions.length}</strong>
                    </div>
                    <div>
                        <span>Doğru</span>
                        <strong id="correctCount">${correctAnswers}</strong>
                    </div>
                    <div>
                        <span>Süre</span>
                        <strong id="timer">0s</strong>
                    </div>
                </div>
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                </div>
                <div class="quiz-answers">
                    <button onclick="answerQuestion(true)">✓ True</button>
                    <button onclick="answerQuestion(false)">✗ False</button>
                </div>
                <div id="quizResult"></div>
            </div>
        `;

        updateTimer();
    }

    function updateTimer() {
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            timerEl.textContent = `${elapsed}s`;
            setTimeout(updateTimer, 1000);
        }
    }

    window.answerQuestion = (userAnswer) => {
        const question = game.questions[currentQuestionIndex];
        const isCorrect = userAnswer === question.answer;
        const resultDiv = document.getElementById('quizResult');

        if (isCorrect) {
            correctAnswers++;
            document.getElementById('correctCount').textContent = correctAnswers;
            resultDiv.innerHTML = `
                <div class="feedback-message" style="background: var(--secondary-color);">
                    ✓ Doğru! ${question.explanation}
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="feedback-message" style="background: var(--danger-color);">
                    ✗ Yanlış! ${question.explanation}
                </div>
            `;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < game.questions.length) {
                renderQuestion();
            } else {
                showFinalScore();
            }
        }, 1500);
    };

    function showFinalScore() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const percentage = Math.round((correctAnswers / game.questions.length) * 100);

        container.innerHTML = `
            <div class="quiz-result">
                <h2>🎮 Oyun Bitti!</h2>
                <p style="font-size: 2rem; margin: 1rem 0;">
                    ${correctAnswers} / ${game.questions.length}
                </p>
                <p><strong>Başarı:</strong> %${percentage}</p>
                <p><strong>Süre:</strong> ${elapsed} saniye</p>
                ${percentage === 100 ? '<p style="color: var(--secondary-color); font-size: 1.5rem;">🎉 Mükemmel!</p>' : ''}
                <button class="btn-primary" onclick="location.reload()" style="margin-top: 2rem;">Tekrar Oyna</button>
            </div>
        `;

        if (percentage >= 80) {
            showConfetti();
            markChapterCompleted(currentChapter);
        }
    }

    renderQuestion();
}

// Switch tabs
function switchTab(tabName) {
    currentTab = tabName;

    // Update tab buttons
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Show/hide content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    if (tabName === 'explanation') {
        explanationTab.classList.add('active');
    } else if (tabName === 'exercise') {
        exerciseTab.classList.add('active');
    } else if (tabName === 'reading') {
        readingTab.classList.add('active');
    } else if (tabName === 'game') {
        gameTab.classList.add('active');
    }
}

// Mark chapter as completed
function markChapterCompleted(chapterId) {
    if (!userProgress.completedChapters.includes(chapterId)) {
        userProgress.completedChapters.push(chapterId);
        
        const chapterBtn = document.querySelector(`[data-chapter="${chapterId}"]`);
        if (chapterBtn) {
            chapterBtn.classList.add('completed');
        }
        
        saveProgress();
        updateProgressBar();
    }
}

// Update progress bar
function updateProgressBar() {
    const totalChapters = Object.keys(learningData.chapters).length;
    const completedCount = userProgress.completedChapters.length;
    const percentage = Math.round((completedCount / totalChapters) * 100);

    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `%${percentage} Tamamlandı`;

    // Update mobile progress display
    if (mobileProgressFill && mobileProgressText) {
        mobileProgressFill.style.width = `${percentage}%`;
        mobileProgressText.textContent = `${percentage}%`;
    }
}

// Show confetti animation
function showConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#4A90E2', '#50C878', '#E74C3C', '#F39C12', '#9B59B6'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Utility: Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Save/Load progress
function saveProgress() {
    localStorage.setItem('englishLearningProgress', JSON.stringify(userProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('englishLearningProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        
        // Mark completed chapters
        userProgress.completedChapters.forEach(chapterId => {
            const btn = document.querySelector(`[data-chapter="${chapterId}"]`);
            if (btn) btn.classList.add('completed');
        });
    }
}

// ========================================
// B1 LEVEL - NEW GAME ENGINES
// ========================================

// Conversation Simulator Engine
class ConversationSimulator {
    constructor(container, conversationData) {
        this.container = container;
        this.data = conversationData;
        this.history = [];
        this.currentNode = 'start';
        this.score = { correct: 0, total: 0 };
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const node = this.data.nodes[this.currentNode];
        if (!node) return;

        let html = '<div class="conversation-container">';
        
        // Render conversation history
        html += '<div class="conversation-history">';
        this.history.forEach(entry => {
            html += this.createBubble(entry.speaker, entry.text);
        });
        html += '</div>';

        // Render current NPC message
        if (node.npcText) {
            html += this.createBubble('npc', node.npcText);
        }

        // Render choices or completion
        if (node.choices && node.choices.length > 0) {
            html += '<div class="conversation-choices">';
            node.choices.forEach((choice, index) => {
                html += `
                    <button class="choice-btn" data-choice="${index}">
                        ${choice.text}
                    </button>
                `;
            });
            html += '</div>';
        } else if (node.type === 'end') {
            html += this.renderCompletion();
        }

        html += '</div>';
        this.container.innerHTML = html;

        // Add event listeners
        this.container.querySelectorAll('.choice-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => this.handleChoice(index));
        });
    }

    createBubble(speaker, text) {
        const isUser = speaker === 'user';
        const avatar = isUser ? '👤' : '👨‍⚕️';
        
        return `
            <div class="conversation-bubble ${speaker}">
                <div class="bubble-avatar ${speaker}">${avatar}</div>
                <div class="bubble-content">${text}</div>
            </div>
        `;
    }

    handleChoice(choiceIndex) {
        const node = this.data.nodes[this.currentNode];
        const choice = node.choices[choiceIndex];

        // Add user's choice to history
        this.history.push({
            speaker: 'user',
            text: choice.text
        });

        // Track score
        this.score.total++;
        if (choice.correct) {
            this.score.correct++;
        }

        // Show feedback
        this.showFeedback(choice);

        // Move to next node after delay
        setTimeout(() => {
            this.currentNode = choice.next;
            if (choice.npcResponse) {
                this.history.push({
                    speaker: 'npc',
                    text: choice.npcResponse
                });
            }
            this.render();
        }, choice.correct ? 1500 : 2000);
    }

    showFeedback(choice) {
        const feedbackHTML = `
            <div class="choice-feedback ${choice.correct ? 'correct' : 'incorrect'}">
                <strong>${choice.correct ? '✓ Richtig!' : '✗ Nicht ganz...'}</strong><br>
                ${choice.feedback || ''}
            </div>
        `;
        
        const choicesContainer = this.container.querySelector('.conversation-choices');
        if (choicesContainer) {
            choicesContainer.insertAdjacentHTML('afterend', feedbackHTML);
        }
    }

    renderCompletion() {
        const percentage = Math.round((this.score.correct / this.score.total) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = '🎉 Ausgezeichnet! Du kommunizierst sehr gut!';
        } else if (percentage >= 60) {
            message = '👍 Gut gemacht! Du machst Fortschritte!';
        } else {
            message = '💪 Weiter üben! Du wirst besser!';
        }

        return `
            <div class="score-display">
                <div class="score-item">
                    <div class="score-value">${this.score.correct}/${this.score.total}</div>
                    <div class="score-label">Richtig</div>
                </div>
                <div class="score-item">
                    <div class="score-value">${percentage}%</div>
                    <div class="score-label">Genauigkeit</div>
                </div>
            </div>
            <div class="choice-feedback correct">
                ${message}
            </div>
            <button class="btn-primary" onclick="location.reload()">🔄 Nochmal versuchen</button>
        `;
    }
}

// Sentence Constructor Engine
class SentenceConstructor {
    constructor(container, exerciseData) {
        this.container = container;
        this.data = exerciseData;
        this.currentExercise = 0;
        this.placedWords = [];
        this.score = { correct: 0, total: exerciseData.sentences.length };
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        if (this.currentExercise >= this.data.sentences.length) {
            this.renderCompletion();
            return;
        }

        const sentence = this.data.sentences[this.currentExercise];
        
        let html = '<div class="sentence-constructor">';
        html += `<h3>Satz ${this.currentExercise + 1} von ${this.data.sentences.length}</h3>`;
        html += `<p class="grammar-focus"><strong>Aufgabe:</strong> ${sentence.instruction}</p>`;
        
        // Word bank
        html += '<div class="word-bank" id="wordBank">';
        const shuffledWords = this.shuffleArray([...sentence.words]);
        shuffledWords.forEach((word, index) => {
            html += `
                <span class="draggable-word" draggable="true" data-word="${word}" data-index="${index}">
                    ${word}
                </span>
            `;
        });
        html += '</div>';

        // Drop zone
        html += '<div class="sentence-drop-zone" id="dropZone">';
        html += '<p style="color: var(--text-light); font-style: italic;">Ziehe die Wörter hierher...</p>';
        html += '</div>';

        html += '<button class="btn-primary" id="checkSentenceBtn">Überprüfen</button>';
        html += '<div id="sentenceFeedback"></div>';
        html += '</div>';

        this.container.innerHTML = html;
        this.setupDragAndDrop();

        document.getElementById('checkSentenceBtn').addEventListener('click', () => {
            this.checkSentence();
        });
    }

    setupDragAndDrop() {
        const words = this.container.querySelectorAll('.draggable-word');
        const dropZone = document.getElementById('dropZone');

        words.forEach(word => {
            word.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.word);
                e.target.style.opacity = '0.5';
            });

            word.addEventListener('dragend', (e) => {
                e.target.style.opacity = '1';
            });

            // Mobile touch support
            word.addEventListener('click', () => {
                if (!word.classList.contains('placed')) {
                    this.addWordToSentence(word.dataset.word);
                    word.classList.add('placed');
                }
            });
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('drag-over');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            
            const word = e.dataTransfer.getData('text/plain');
            this.addWordToSentence(word);
            
            // Mark word as placed
            const wordElement = this.container.querySelector(`[data-word="${word}"]`);
            if (wordElement) wordElement.classList.add('placed');
        });
    }

    addWordToSentence(word) {
        this.placedWords.push(word);
        this.updateDropZone();
    }

    updateDropZone() {
        const dropZone = document.getElementById('dropZone');
        
        if (this.placedWords.length === 0) {
            dropZone.innerHTML = '<p style="color: var(--text-light); font-style: italic;">Ziehe die Wörter hierher...</p>';
        } else {
            let html = '';
            this.placedWords.forEach((word, index) => {
                html += `
                    <span class="draggable-word" onclick="sentenceConstructorInstance.removeWord(${index})">
                        ${word} <small>✕</small>
                    </span>
                `;
            });
            dropZone.innerHTML = html;
        }
    }

    removeWord(index) {
        const word = this.placedWords[index];
        this.placedWords.splice(index, 1);
        this.updateDropZone();
        
        // Unmark word in bank
        const wordElement = this.container.querySelector(`[data-word="${word}"].placed`);
        if (wordElement) wordElement.classList.remove('placed');
    }

    checkSentence() {
        const sentence = this.data.sentences[this.currentExercise];
        const userSentence = this.placedWords.join(' ');
        const correctSentence = sentence.correct;
        const isCorrect = userSentence === correctSentence;

        if (isCorrect) {
            this.score.correct++;
        }

        const feedback = document.getElementById('sentenceFeedback');
        feedback.innerHTML = `
            <div class="choice-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${isCorrect ? '✓ Perfekt!' : '✗ Nicht ganz richtig'}</strong><br>
                <p><strong>Dein Satz:</strong> ${userSentence}</p>
                <p><strong>Richtig:</strong> ${correctSentence}</p>
                ${sentence.explanation ? `<p><em>${sentence.explanation}</em></p>` : ''}
            </div>
        `;

        setTimeout(() => {
            this.currentExercise++;
            this.placedWords = [];
            this.render();
        }, 3000);
    }

    renderCompletion() {
        const percentage = Math.round((this.score.correct / this.score.total) * 100);
        
        this.container.innerHTML = `
            <div class="sentence-constructor">
                <h2>Abgeschlossen! 🎉</h2>
                <div class="score-display">
                    <div class="score-item">
                        <div class="score-value">${this.score.correct}/${this.score.total}</div>
                        <div class="score-label">Richtig</div>
                    </div>
                    <div class="score-item">
                        <div class="score-value">${percentage}%</div>
                        <div class="score-label">Genauigkeit</div>
                    </div>
                </div>
                <button class="btn-primary" onclick="location.reload()">🔄 Nochmal versuchen</button>
            </div>
        `;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Global instance for sentence constructor (for remove word function)
let sentenceConstructorInstance = null;

