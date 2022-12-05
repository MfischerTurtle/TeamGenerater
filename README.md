# TeamGenerater  

  ## Description
The user is able to enter information about different employees to build a team profile. The team profile is generated in an html file and displays each team member as a card with their name, role, ID, email, and other information specific to their role.

  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Screenshots](#screen-shots)

## Installation
  Jest and inquirer

## Usage
 The user initializes the application in the command line with node app.js. The user is prompted to choose what type of employee they would like to create first. The options are intern, manager, and engineer.

The intern option requires the user to input the name, ID, email, and school.

The manager option requires the user to input the name, ID, email, and office number.

The engineer option requires the user to input the name, ID, email, and github username.

Once all the information is collected, the user chooses to create another employee or not by selection "Yes" or "No".

If they choose "Yes", the employee type question appears and they go through the same process.

If they choose "No", the html page is generated with all the employees created.
## Screen shots
![Node Code Line](./Screenshots/app.png)
![Finished Html](./Screenshots/Finished.png)

## Test
  Npm run test
