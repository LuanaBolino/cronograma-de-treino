function fetchData() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('api').innerHTML = data.value;
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }

  window.onload = fetchData;