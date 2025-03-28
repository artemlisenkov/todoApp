fetch('/api/tasks')
    .then(res => res.json())
    .then(tasks => {
        const list = document.getElementById('task-list');
        list.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.title} ${task.completed ? '✅' : '❌'}`;
            list.appendChild(li);
        });
    })
    .catch(err => {
        console.error('Error loading tasks:', err);
    });
