async function loadJson(url) {
    const response = await fetch(url);
    const status = response.status;
    if (status === 200) {
        return await response.json();
    }

    throw new Error(`${status}`);
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404