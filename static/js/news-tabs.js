document.addEventListener('DOMContentLoaded', () => {
  const tutorialCloseBtn = document.getElementById('tutorial-close');
  const tutorialWindow = document.getElementById('tutorial-window');

  tutorialCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tutorialWindow.style.display = 'none';
  });

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabButtons.forEach(t => t.classList.remove('selected'));
      tab.classList.add('selected');
    });
  });
});