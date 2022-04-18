const generatePage = (manager, engineer, intern) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="container bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </header>

        <main class="container">
            ${generateCards(manager)}
            ${generateCards(engineer)}
            ${generateCards(intern)}
        </main>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

const generateCards = data => {
    return `
    ${data.map(({ name, id, email }) => {
        return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle">Manager</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${id}</li>
                        <li class="list-group-item">${email}</li>
                    </ul>
                </div>
            </div>
        `;
    }).join('')}
    `;
};

module.exports = generatePage;