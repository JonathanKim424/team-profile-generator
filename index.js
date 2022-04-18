const Prompt = require('./lib/Prompt');

console.log("An HTML file will be generated based on the following user inputs. The file will be generated in the /dist folder.")

new Prompt().managerPrompt();