# Employee Tracker

## Description

In the course of business, it is a common occurance to need to add employees, departments, and managers to the overall company. Otherwise, it can become difficult to keep track of everyone at the company when they join and when they leave, or if they move departments. Because of this, a node.js app that stores employees, departments, and managers in a database, and allows you to manipulate them in the command line was built. This app allows you to keep track of everyone in the company and their hierarchy within the company.

## Installation

Once the project files are downloaded the user must install inquirer, mysql2, and the console table package. These allow for navigation of the node.js app using prompts, storing information using sql, and use of the console as a menu.

## Usage

Run npm start in the command line to initialize the app. This will show the formatted table showing names and ids. Navigate through the menu and select any option that you want to change employee or department info, or add an employee. This saves the information in the sequel database as well for long term storage.

## Credits

The completion of this project was aided by the efforts and assets of the rutgers computer science bootcamp. The lessons and challenges from the javascript, html, and api sections of the of the class served as a backbone for the construction of this project. The app was also created with the technologies of mysql, inquirer, and console table.

## License

This project was completed using the MIT license.

## Features

This app features information storage in a sql database, and then it is conveyed in the node.js formatted using console table. The information can be changed around using the inquirer prompts insode of the node.js command line.