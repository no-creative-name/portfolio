export const setupImprint = () => {
  let imprintVisible = false;
  const imprintContainer: HTMLElement = document.querySelector('#imprint-container');
  const imprintTrigger = document.querySelector('#imprint-trigger');
  const imprint: HTMLElement = document.querySelector('.imprint');

  imprintTrigger.addEventListener('click', () => {
    if (imprintVisible) {
      imprintTrigger.classList.remove('headline-2');
      imprintTrigger.classList.add('headline-3');
      
      imprintContainer.classList.remove('visible');
      imprint.classList.remove('visible');
      imprintVisible = false;
    } else {
      imprintTrigger.classList.remove('headline-3');
      imprintTrigger.classList.add('headline-2');

      imprintContainer.classList.add('visible');
      imprint.classList.add('visible');
      imprintVisible = true;

      window.scroll({
        top: document.body.clientHeight,
      });
    }
  });
}