class TodoService {
    static async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!response.ok) {
                throw new Error("Помилка отримання TODO");
            }
            return await response.json();
        } catch (error) {
            console.error("Помилка в fetchTodo:", error);
        }
    }
}

class UserService {
    static async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) {
                throw new Error("Помилка отримання USER");
            }
            return await response.json();
        } catch (error) {
            console.error("Помилка в fetchUser:", error);
        }
    }
}

class DataFetcher {
    static async getAllData() {
        try {
            const results = await Promise.all([TodoService.fetchTodo(), UserService.fetchUser()]);
            const [todo, user] = results;
            console.log("Promise.all:", { todo, user });
        } catch (error) {
            console.error("Помилка у Promise.all:", error);
        }
    }

    static async getFirstResponse() {
        try {
            const result = await Promise.race([TodoService.fetchTodo(), UserService.fetchUser()]);
            console.log("Promise.race:", result);
        } catch (error) {
            console.error("Помилка у Promise.race:", error);
        }
    }
}

DataFetcher.getAllData();
DataFetcher.getFirstResponse();