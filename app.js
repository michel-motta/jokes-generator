document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(e) {
  const numberOfJokes = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const resp = JSON.parse(this.responseText);
      
      let output = '';

      if(resp.type === 'success') {
        
        resp.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += `<li>Something went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;

    }
  }

  xhr.send();

  e.preventDefault();
}