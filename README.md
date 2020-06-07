# Triviator
Triviator is an opensource, self hosted platform for,
1. Create and play trivia quizes (the thing that kahoot and mentimeter do, but without paying anyone)
2. Ask questions and do polls during an online meeting.
## How it Works ?
* We create a web app with two main routes, `/create` and `/play`.
* Creator can go to `/create`to create the quiz and generate a link/number for players/participants to join.
* Players/participants can join using a link or going to `/play`.
* Questions will appear for players/participants as creator click a next button.
* Scores (and correct answers) will be shown in between or in the end 

## Libraries used
- [Responder](https://responder.kennethreitz.org/en/latest/) - async http framework in python
- [Vue.js](https://vuejs.org) - for building the frontend.

## How to configure
Instructions for setting up project
## How to Run
Instructions for running
## How to Test 
Run,
```bash
pytest tests
```
## Contributors
- [Gopikrishnan Sasikumar](https://github.com/GopikrishnanSasikumar)
