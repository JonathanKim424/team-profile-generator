const generatePage = (employees) => {
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
            ${generateCards(employees)}
        </main>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

const generateCards = data => {
    if (!data) {
        return ``;
    }

    if (data.length === 1) {
        return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data[0].getName()}</h5>
                <h6 class="card-subtitle">${data[0].getRole()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[0].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a></li>
                    <li class="list-group-item">${generateEmployeeInfo(data[0])}</li>
                </ul>
            </div>
        </div>
    `;
    }

    const htmlArr = [];

    data.forEach(employee => {
        const htmlCard = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle">${employee.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">${generateEmployeeInfo(employee)}</li>
                    </ul>
                </div>
            </div>
        `;
        htmlArr.push(htmlCard);
    });

    return htmlArr.join('');
};

const generateEmployeeInfo = employeeInfo => {
    const employeeRole = employeeInfo.getRole();
    switch(employeeRole) {
        case 'Manager':
            return `Office Number: ${employeeInfo.getOfficeNumber()}`;
        case 'Engineer':
            return `GitHub: <a href="https://github.com/${employeeInfo.getGitHub()}" target="_blank" rel="noopener noreferrer">${employeeInfo.getGitHub()}</a>`;
        case 'Intern':
            return `School: ${employeeInfo.getSchool()}`;
        default:
            return `MISSING INFO`;
    }
}

module.exports = generatePage;