document.addEventListener('copy', (event) => {
  event.preventDefault();
  const text = window.getSelection().toString();
  if (video) {
    navigator.clipboard.writeText(text);
  }
});
