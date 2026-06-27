// ============================================
// SECURITY AUDIT GAME
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('#security-options .option');
  const submitBtn = document.getElementById('security-submit');
  const feedback = document.getElementById('security-feedback');
  const scoreDisplay = document.getElementById('security-score');
  const footerScore = document.getElementById('security-footer-score');

  let score = 0;
  let submitted = false;

  function updateScore() {
    const checked = document.querySelectorAll('#security-options .option input:checked');
    const correct = document.querySelectorAll('#security-options .option[data-correct="true"] input:checked');
    const wrong = document.querySelectorAll('#security-options .option[data-correct="false"] input:checked');

    // Only score if exactly 3 are checked
    if (checked.length !== 3) {
      feedback.textContent = 'Select exactly 3 risks (you selected ' + checked.length + ')';
      feedback.className = 'feedback';
      return;
    }

    // Calculate score: 100 per correct, -50 per wrong
    let newScore = 0;
    correct.forEach(el => { newScore += 100; });
    wrong.forEach(el => { newScore -= 50; });

    // Cap at 0
    if (newScore < 0) newScore = 0;

    score = newScore;
    scoreDisplay.textContent = score;
    footerScore.textContent = score;

    // Show results with visual feedback
    if (score === 300) {
      feedback.textContent = '✅ PERFECT! You identified all 3 critical security risks. Excellent audit skills!';
      feedback.className = 'feedback correct';
    } else if (score >= 200) {
      feedback.textContent = '✅ Good! You identified most risks. Review the ones you missed.';
      feedback.className = 'feedback correct';
    } else if (score > 0) {
      feedback.textContent = '⚠️ Partial. Review the security audit methodology.';
      feedback.className = 'feedback';
    } else {
      feedback.textContent = '❌ Review the scenario carefully. Think about the most critical vulnerabilities.';
      feedback.className = 'feedback wrong';
    }

    // Highlight correct/wrong answers
    document.querySelectorAll('#security-options .option').forEach(opt => {
      const checkbox = opt.querySelector('input');
      const isCorrect = opt.dataset.correct === 'true';

      if (checkbox.checked && isCorrect) {
        opt.classList.add('correct');
      } else if (checkbox.checked && !isCorrect) {
        opt.classList.add('wrong');
      } else if (!checkbox.checked && isCorrect && submitted) {
        // Highlight missed correct answers
        opt.style.borderColor = '#10B981';
        opt.style.background = 'rgba(16,185,129,0.05)';
      }
    });

    submitted = true;
  }

  // Enable clicking on the whole option label
  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      // Don't trigger if clicking the checkbox itself (it will toggle naturally)
      if (e.target.tagName === 'INPUT') return;

      const checkbox = opt.querySelector('input');
      checkbox.checked = !checkbox.checked;

      // If already submitted, reset visual state
      if (submitted) {
        submitted = false;
        options.forEach(o => {
          o.classList.remove('correct', 'wrong');
          o.style.borderColor = '';
          o.style.background = '';
        });
        feedback.textContent = 'Select the 3 correct risks and click "Submit"';
        feedback.className = 'feedback';
        // Don't reset score immediately — let them re-submit
      }
    });
  });

  submitBtn.addEventListener('click', () => {
    updateScore();
  });

  // Keyboard shortcut: Enter to submit
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.getElementById('security-game-body').contains(e.target)) {
      updateScore();
    }
  });
});