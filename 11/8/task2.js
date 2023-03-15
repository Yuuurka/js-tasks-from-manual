class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    const status = response.status;
    if (status === 200) {
        return await response.json();
    }

    throw new HttpError(response);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let name = prompt("Введите логин?", "Yuuurka");
    const getUser = await loadJson(`https://api.github.com/users/${name}`);
    if (getUser){
        alert(`Полное имя: ${getUser.name}.`);
        return getUser;
    }

    throw new Error("Такого пользователя не существует, пожалуйста, повторите ввод.");
}

demoGithubUser();