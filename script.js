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
    alert('Loading')
    //answer.textContent = 'Loading...'
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        console.log(posts)
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
     fetch('https://my-json-server.typicode.com/Naverr510/LAB2/posts')
      .then(response => response.json())
      .then(posts => {
        fetch('https://my-json-server.typicode.com/Naverr510/LAB2/comments')
          .then(response => response.json())
          .then(comments => {
            const byPost = {}
            comments.forEach(c => {
              (byPost[c.postId] = byPost[c.postId] || []).push(c)
            })
            const parts = ['<div>']
            posts.forEach(p => {
              parts.push('<section style="border:1px solid #ddd;padding:8px;margin:8px 0;border-radius:6px">')
              parts.push('<h3 style="margin:0 0 6px 0">' + p.title + ' <small style="color:#666">#' + p.id + '</small></h3>')
              parts.push('<p style="margin:0 0 6px 0">' + p.body + '</p>')
              const comms = byPost[p.id] || []
              if (comms.length) {
                parts.push('<div style="margin-top:8px"><strong>Comments:</strong><ul style="margin:6px 0 0 18px">')
                comms.forEach(c => {
                  parts.push('<li style="margin-bottom:6px"><strong>' + c.name + '</strong> <em>(' + c.email + ')</em><div>' + c.body + '</div></li>')
                })
                parts.push('</ul></div>')
              }
              parts.push('</section>')
            })
            parts.push('</div>')
            answer.innerHTML = parts.join('')
          })
      })
  })

})();
