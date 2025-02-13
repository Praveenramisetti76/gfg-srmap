
    function calculateLove() {
      const name1 = document.getElementById('name1').value.trim();
      const name2 = document.getElementById('name2').value.trim();
      if (name1 && name2) {
        const loveScore = Math.floor(Math.random() * 100) + 1;
        document.getElementById('love-result').textContent = `${name1} and ${name2} have a love score of ${loveScore}%!`;
      } else {
        document.getElementById('love-result').textContent = 'Please enter both names!';
      }
    }

    function generatePoem() {
        const poems = [
        "Roses are red, violets are blue,\nMy heart beats only for you.",
        "Your smile is the sun, bright and true,\nA love so deep, it feels brand new.",
        "Forever in my arms, you’ll stay,\nTogether, come what may.",
        "A thousand stars in the sky above,\nNone shine as bright as our love.",
        "With every breath, my love will grow,\nThrough all the seasons, come rain or snow."
      ];
      const randomIndex = Math.floor(Math.random() * poems.length);
      document.getElementById('poem-output').textContent = poems[randomIndex];
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }
    
    // document.addEventListener('mousemove', (e) => {
    //     const heart = document.createElement('span');
    //     heart.textContent = '❤️';
    //     heart.style.position = 'absolute';
    //     heart.style.left = `${e.pageX}px`;
    //     heart.style.top = `${e.pageY}px`;
    //     heart.style.fontSize = '20px';
    //     heart.style.animation = 'fade-out 2s ease forwards';
    //     document.body.appendChild(heart);
      
    //     setTimeout(() => heart.remove(), 2000);
    //   });
      
 //love comptability quiz
      let score = 0;
let questionIndex = 0;
const questions = [
  "Do you enjoy the same movies?",
  "Do you share the same hobbies?",
  "Do you often finish each other's sentences?",
  "Do you support each other's dreams?"
];

function answerQuestion(answer) {
  if (answer === 'Yes') score++;
  questionIndex++;
  if (questionIndex < questions.length) {
    document.getElementById('quiz-questions').innerHTML = `
      <p>${questions[questionIndex]}</p>
      <button class="btn btn-outline-danger" onclick="answerQuestion('Yes')">Yes</button>
      <button class="btn btn-outline-secondary" onclick="answerQuestion('No')">No</button>
    `;
  } else {
    document.getElementById('quiz-result').textContent = `Your compatibility score is ${score}/${questions.length}!`;
    document.getElementById('quiz-questions').style.display = 'none';
  }
}

function launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  function generateFortune() {
    const fortunes = [
      "A romantic surprise is in your future!",
      "Your love life is about to take an exciting turn!",
      "Someone special is thinking about you right now.",
      "Your bond will grow even stronger in the coming days.",
      "Prepare for an unforgettable date night!"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('fortune-output').textContent = randomFortune;
  }
  
 // Add event listener to the entire document
document.addEventListener('mousemove', (e) => {
    // Check if the active element is an input or textarea
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
      return; // Skip adding hearts if typing
    }
  
    // Create a heart span element
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    heart.style.fontSize = '20px';
    heart.style.animation = 'fade-out 2s ease forwards';
    document.body.appendChild(heart);
  
    // Remove the heart after 2 seconds
    setTimeout(() => heart.remove(), 2000);
  });
  
  