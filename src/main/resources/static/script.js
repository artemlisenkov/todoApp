fetch('/api/tasks')
    .then(response => response.json())
    .then(data => console.log(data));
