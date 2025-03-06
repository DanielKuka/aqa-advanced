const fetchTodo = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка отримання ToDo");
            }
            return response.json();
        })
        .catch(error => console.error("Помилка в fetchTodo:", error));
};

const fetchUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка отримання User");
            }
            return response.json();
        })
        .catch(error => console.error("Помилка в fetchUser:", error));
};

Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log("Promise.all:", { todo, user });
    })
    .catch(error => console.error("Помилка у Promise.all:", error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => console.log("Promise.race:", result))
    .catch(error => console.error("Помилка у Promise.race:", error));