(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
      answer.textContent = 'Processing...'
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ title: 'Nowy post', body: 'Treść nowego posta', userId: 1 })
    })
      .then(response => response.json())
      .then(data => {
        answer.textContent = 'Dodano nowy post o ID = ' + data.id
      })
  })

  cw2.addEventListener("click", function () {
    answer.textContent = 'Loading...'
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const parts = ['<div style="display:flex;flex-wrap:wrap;gap:12px">']
        posts.slice(0, 12).forEach(p => {
          parts.push(
            '<article style="flex:1 1 30%;border:1px solid #ccc;padding:10px;border-radius:8px;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,0.05)">' +
            '<h4 style="margin:0 0 6px 0;font-size:1rem">' + p.title + '</h4>' +
            '<p style="margin:0 0 8px 0;color:#333">' + p.body + '</p>' +
            '<div style="font-size:12px;color:#666">User: ' + p.userId + ' · ID: ' + p.id + '</div>' +
            '</article>'
          )
        })
        parts.push('</div>')
        answer.innerHTML = parts.join('')
      })
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
