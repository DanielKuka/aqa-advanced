const fetchTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("Помилка отримання TODO");
        }
        return await response.json();
    } catch (error) {
        console.error("Помилка в fetchTodo:", error);
    }
};

const fetchUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Помилка отримання USER");
        }
        return await response.json();
    } catch (error) {
        console.error("Помилка в fetchUser:", error);
    }
};

const getAllData = async () => {
    try {
        const results = await Promise.all([fetchTodo(), fetchUser()]);
        const [todo, user] = results;
        console.log("Promise.all:", { todo, user });
    } catch (error) {
        console.error("Помилка у Promise.all:", error);
    }
};

const getFirstResponse = async () => {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Promise.race:", result);
    } catch (error) {
        console.error("Помилка у Promise.race:", error);
    }
};

getAllData();
getFirstResponse();