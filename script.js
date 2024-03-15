const chestionarContent = document.getElementById('chestionarContent');
const submitButton = document.getElementById('submitButton');

const startingMinutes = 30;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

const questions = [
    {
    question: '1. În situația în care polițistul se află cu fața la un autovehicul care se apropie, având brațul drept întins orizontal, conducătorul auto trebuie:',
    options: [
        'A: să continue deplasarea, deoarece semnalul nu i se adresează',
        'B: să schimbe direcția de mers spre stânga', 
        'C: să oprească, deoarece semnalul i se adresează'
    ],
    correctAnswer: 
    'A: să continue deplasarea, deoarece semnalul nu i se adresează',
    },
    {
    question: '2. Precizați când sunt scutiți instructorii auto de purtarea centurii de siguranță:',
    options: [
        'A: legal, nu este prevăzut', 
        'B: în permanență, când se află în autovehiculele cu inscripția „ȘCOALA“', 
        'C: în timpul orelor de pregătire a cursanților'
    ],
    correctAnswer: 
    'C: în timpul orelor de pregătire a cursanților',
    },
    {
    question: '3. Unde veți parca vehiculul la întâlnirea acestui indicator?',
    options: [
        'A: pe direcția indicată, în parcarea special amenajată',
        'B: pe trotuar, în lungul acestuia',
        'C: pe trotuar, perpendicular pe acesta'
    ],
    correctAnswer:
    'A: pe direcția indicată, în parcarea special amenajată',
    },
    {
    question: '4. La trecerile pentru pietoni nesemaforizate, semnalizate corespunzător, când drumul are cel mult o bandă pe sens, iar pietonii aflați pe trotuar, în imediata apropiere a părții carosabile, intenționează să se angajeze în traversare, trebuie:',
    options: [
        'A: nu aveți nicio obligație legală și nici vreo răspundere în cazul unui eventual accident',
        'B: să circulați cu o viteză care să nu depășească 30 km/h în localități sau 50 km/h în afara acestora',
        'C: să reduceți brusc viteza și să acordați prioritate de trecere pietonilor care au acest drept'
    ],
    correctAnswer:
    'B: să circulați cu o viteză care să nu depășească 30 km/h în localități sau 50 km/h în afara acestora',
    },
    {
    question: '5. În care dintre următoarele situații sunteți obligat să circulați cu viteză redusă?',
    options: [
        'A: pe drumurile județene și comunale',
        'B: la trecerea la nivel cu calea ferată curentă',
        'C: când sunteți obosit și autovehiculul are sistemul de frânare defect.'
    ],
    correctAnswer:
    'B: la trecerea la nivel cu calea ferată curentă',
    },
    {
    question: '6. Care este ordinea de trecere a autovehiculelor prin intersectie?',
    options: [
        'A: motocicleta, bicicleta, autoturismul',
        'B: autoturismul, motocicleta, bicicleta',
        'C: bicicleta, autoturismul, motocicleta'
    ],
    correctAnswer:
    'B: autoturismul, motocicleta, bicicleta',
    },
    {
    question: '7. Panoul adițional semnifică:',
    options: [
        'A: o trecere la nivel cu calea ferată cu bariere, prevăzută cu instalație de semnalizare luminoasă automată',
        'B: urmează un sector de drum îngustat',
        'C: prioritate pentru circulația din sens invers'
    ],
    correctAnswer:
    'A: o trecere la nivel cu calea ferată cu bariere, prevăzută cu instalație de semnalizare luminoasă automată',
    },
    {
    question: '8. Viteza maximă cu care pot să conducă un autoturism, pe drumurile naționale, altele decât cele europene (E), persoanele care au mai puțin de un an de practică de conducere, este de:',
    options: [
        'A: 70 km/h',
        'B: 90 km/h',
        'C: 80 km/h'
    ],
    correctAnswer:
    'A: 70 km/h',
    },
    {
    question: '9. De la ce distanță față de vehiculul care circulă din sens opus, pe timp de noapte, conducătorul unui autovehicul/tractor este obligat să folosească lumina de întâlnire?',
    options: [
        'A: de la cel putin 100 m',
        'B: de la cel putin 150 m',
        'C: de la cel putin 200 m'
    ],
    correctAnswer:
    'C: de la cel putin 200 m',
    },
    {
    question: '10. Semnalul agenților căilor ferate, executat cu un fanion roşu, aflați la trecerea la nivel cu o cale ferată industrială din oraşe, vă obligă:',
    options: [
        'A: să reduceți viteza, să vă asigurați, iar dacă trenul este la mai mult de 50 m de pasaj, să treceți cu atenție',
        'B: să opriți',
        'C: nu aveți nicio obligație, deoarece agentul dirijează manevrele garniturii de tren'
    ],
    correctAnswer:
    'B: să opriți',
    },
    {
    question: '11. Aţi selectat corect banda de circulație pentru a vira la stânga în intersecția care urmează?',
    options: [
        'A: da',
        'B: nu',
        'C: sunteți obligat să circulați numai înainte'
    ],
    correctAnswer:
    'A: da',
    },
    {
    question: '12. Este permisă staționarea vehiculelor în zona de acțiune a indicatorului "Drum îngustat"',
    options: [
        'A: da',
        'B: nu',
        'C: legea nu prevede nimic cu privire la acest aspect'
    ],
    correctAnswer:
    'B: nu',
    },
    {
    question: '13. Pe o autostradă cu trei benzi, s-a blocat circulația. Pe unde vor circula vehiculele de intervenție?',
    options: [
        'A: pe banda de urgenta',
        'B: intre banda din stanga si banda din mijloc',
        'C: intre banda din dreapta si banda din mijloc'
    ],
    correctAnswer:
    'A: pe banda de urgenta',
    },
    {
    question: '14. Ce semnifica indicatorul?',
    options: [
        'A: urmează un sector de drum pe care se execută lucrări pe partea carosabilă',
        'B: urmează un sector de drum pe care există pericolul de împroşcare cu pietriş',
        'C: presemnalizarea unui sector de drum cu circulație alternantă'
    ],
    correctAnswer:
    'A: urmează un sector de drum pe care se execută lucrări pe partea carosabilă',
    },
    {
    question: '15. Cu ce viteză se poate circula în apropierea unei intersecţii?',
    options: [
        'A: limita maximă de viteză va fi respectată doar în cazul intersecţiilor dirijate',
        'B: cu o viteză care să permită oprirea, pentru a acorda prioritate de trecere participanţilor la trafic care au acest drept',
        'C: limita maximă de viteză în localităţi va fi de 50 km/h, iar în afara localităţilor de 130 km/h'
    ],
    correctAnswer:
    'B: cu o viteză care să permită oprirea, pentru a acorda prioritate de trecere participanţilor la trafic care au acest drept',
    },
    {
    question: '16. Poate staționa noaptea, pe un drum public, remorca unui autovehicul?',
    options: [
        'A: nu',
        'B: da, daca drumul este iluminat',
        'C: da, daca aceasta este semnalizata cu triunghiuri reflectorizante'
    ],
    correctAnswer:
    'A: nu',
    },
    {
    question: '17. Ce trebuie să verificaţi la un autoturism cu rulotă, înainte de a porni la drum?',
    options: [
        'A: dacă sistemul de alimentare cu apă al rulotei funcționează',
        'B: dacă vizibilitatea în spate, prin oglinzile retrovizoare, este asigurată',
        'C: dacă persoanele transportate în rulotă poartă centura de siguranţă'
    ],
    correctAnswer:
    'B: dacă vizibilitatea în spate, prin oglinzile retrovizoare, este asigurată',
    },
    {
    question: '18. Certificatul de înmatriculare se reţine:',
    options: [
        'A: dacă sistemul de frânare este defect',
        'B: dacă pneurile nu sunt umflate la presiunea minimă admisă',
        'C: dacă sistemul de închidere centralizată a uşilor este defect'
    ],
    correctAnswer:
    'A: dacă sistemul de frânare este defect',
    },
    {
    question: '19. În această situație constatați că părăsiți autostrada în mod eronat. Cum procedați?',
    options: [
        'A: reintrati imediat pe autostrada',
        'B: va continuati drumul',
        'C: opriti, va asigurati si reintrati pe autostrada'
    ],
    correctAnswer:
    'B: va continuati drumul',
    },
    {
    question: '20. Care dintre vehicule au prioritate de trecere?',
    options: [
        'A: autobuzul si autoturismul verde',
        'B: autoturismul verde si autocamionul',
        'C: motocicleta si autocamionul'
    ],
    correctAnswer:
    'A: autobuzul si autoturismul verde',
    },
    {
    question: '21. Semnificația indicatoarelor "Oprire" şi "Cedează trecerea", instalate în intersecțiile semaforizate, trebuie respectată:',
    options: [
        'A: atunci când traficul este redus',
        'B: atunci când semafoarele nu funcționează',
        'C: atunci când indicatoarele sunt instalate împreună cu semaforul pe acelaşi suport'
    ],
    correctAnswer:
    'B: atunci când semafoarele nu funcționează',
    },
    {
    question: '22. În care dintre următoarele situații sunteți obligat să circulați cu o viteză care să nu depăşească 30 km/h în localități?',
    options: [
        'A: într-o zonă rezidențială, semnalizată ca atare',
        'B: la trecerea prin intersecțiile cu circulație nedirijată',
        'C: într-o zonă pietonală, semnalizată ca atare'
    ],
    correctAnswer:
    'B: la trecerea prin intersecțiile cu circulație nedirijată',
    },
    {
    question: '23. Care este semnalizarea specifică mersului înapoi?',
    options: [
        'A: claxonatul intermitent, pentru a-i atenţiona pe participanții la trafic din spatele vehiculului',
        'B: semnalizarea cu luminile de mers înapoi din dotarea autovehiculului',
        'C: folosirea luminilor de avarie'
    ],
    correctAnswer:
    'B: semnalizarea cu luminile de mers înapoi din dotarea autovehiculului',
    },
    {
    question: '24. Se interzice oprirea voluntara:',
    options: [
        'A: la mai putin de 100 m de calea ferata industriala',
        'B: pe trotuar',
        'C: in zona de actiune a indicatorului "Prioritate fata de circulatia din sens invers"'
    ],
    correctAnswer:
    'C: in zona de actiune a indicatorului "Prioritate fata de circulatia din sens invers"',
    },
    {
    question: '25. Poate fi reţinut de către poliţistul rutier certificatul de înmatriculare al unui vehicul?',
    options: [
        'A: nu, deoarece legea prevede o asemenea măsură numai pentru permisul de conducere',
        'B: da, dacă autovehiculul sau remorca prezintă defecţiuni tehnice care pun în pericol siguranţa circulaţiei',
        'C: da, dar numai pentru o perioadă de 15 zile'
    ],
    correctAnswer:
    'B: da, dacă autovehiculul sau remorca prezintă defecţiuni tehnice care pun în pericol siguranţa circulaţiei',
    },
    {
    question: '26. Cum asigurați un autoturism cu schimbător de viteză, pentru ca acesta să nu se deplaseze din pantă?',
    options: [
        'A: acţionaţi frâna de serviciu',
        'B: aduceţi maneta în "punctul mort"',
        'C: introduceţi maneta într-o treaptă inferioară şi acţionaţi frâna de ajutor sau staționare'
    ],
    correctAnswer:
    'C: introduceţi maneta într-o treaptă inferioară şi acţionaţi frâna de ajutor sau staționare',
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
    const questionData = questions[currentQuestionIndex];
    chestionarContent.innerHTML = `<p class="question">${questionData.question}</p>`;
    
    questionData.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `<input type="radio" name="q${currentQuestionIndex + 1}" value="${option}"> ${option}`;
        chestionarContent.appendChild(label);
    });
    } else {
    chestionarContent.innerHTML = `<p class="question">Chestionarul s-a încheiat. Scorul tău: ${score} din ${questions.length} întrebări.</p>`;
    submitButton.disabled = true;
    }
}

displayQuestion();

submitButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (selectedAnswer) {
    if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
        score++;
        alert("Vă rugăm să selectați un răspuns.");
        return;
    }
    currentQuestionIndex++;
    displayQuestion();
    }
});

// de adaugat imagine la intrebarile: 3, 6, 7, 11, 14, 19, 20.