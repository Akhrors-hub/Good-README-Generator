const fs = require("fs");

// const questions = [
var inquirer = require('inquirer');
.prompt([

])


// function writeToFile(fileName, data) {}
fs.writeFile("README.md", 'utf8', function (err, fileContent) {
    if (err)
        throw err;
    console.log(fileContent);

})

ffunction init() {
    inquirer.prompt(question).then((response) => {


        // this is what will be created the first line and the main header for the repo ( that is the '#' is for) using the users response to RepoName
        fs.appendFileSyn("README.md", ("#" + response.repoName) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Success");
            }
        })
        // this is what will be created on the 2nd line of README describing  the application was devoloped by the users response to githubname
        fs.appendFileSyn("README.md", ("This application was devoloped by : " + response.gitHubName + '\n') + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Success");
            }
        })
        // adds the description of the project that the user entered 
        fs.appendFileSyn("README.md", (response.description) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Success");
            }
        })
        // creates a sub header for installation and adds the instructions the users entered
        fs.appendFileSyn("README.md", ("## Installation" + '\n' + response.installApp) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Success");
            }
        })
    })
}