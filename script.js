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
     answer.textContent = 'Loading...'
     fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(p => {
        const parts = ['<ul style="list-style:none;padding:0;margin:0">']
        parts.push(
          '<li style="border:1px solid #ddd;padding:8px;margin:8px 0;border-radius:4px">' +
          '<h3 style="margin:0 0 6px 0">' + p.title + ' <small style="color:#666">#' + p.id + '</small></h3>' +
          '<p style="margin:0 0 6px 0">' + p.body + '</p>' +
          '<div style="font-size:12px;color:#444">User: ' + p.userId + '</div>' +
          '</li>'
        )
        parts.push('</ul>')
        answer.innerHTML = parts.join('')
      })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
