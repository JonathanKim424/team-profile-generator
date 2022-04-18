// Prompt class containing the primary logic for the application
const Prompt = require('./lib/Prompt');

// Simple header for directions on how to use the application
console.log("An HTML file will be generated based on the following user inputs. The file will be generated in the /dist folder.")

// Application initialization
new Prompt().managerPrompt();