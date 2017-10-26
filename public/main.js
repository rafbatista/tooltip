const getTips = () => {
  fetch('http://localhost:3000/tips')
    .then(res => res.json())
}
