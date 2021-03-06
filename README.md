# Team Profile Generator
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
An application that will generate an HTML file displaying team profiles based on user input.

## Built With
* Node.js
* Inquirer
* Jest
* Boostrap CSS

## Installation
You must have Node.js installed. Once the repo has been cloned, run "npm install" for all the required modules.

## Usage
To use, run "node index" in the command line from the root folder. The application will ask a series of questions regarding the team profile. The team manager input is required and the application can be terminated at the menu by selecting "Finish". The application will then close and generate an HTML file in the /dist folder based on user input.

![Application Screenshot](./assets/images/application-screenshot.jpg?raw=tru "Application Screenshot")

Sample HTML file can be found in the /dist folder, named "profile.html":
![HTML Screenshot](./assets/images/html-screenshot.jpg?raw=tru "HTML Screenshot")

Video: https://drive.google.com/file/d/11ziUEM81HL71UyJxN9rsM7XsQOHaoSpd/view?usp=sharing

## Tests
Tests are available for the Employee, Manager, Engineer, and Intern classes. Tests can be found under the /__tests__ folder and are executed via Jest. Run "npm run test" in the command line. Available tests will check for proper object and method generation for each class.

## Credits
Made by Jonathan Kim

## License
Copyright &copy; 2022 Jonathan Kim

Licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.