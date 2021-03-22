# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Owen Christensen

Time spent: 5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added button shadows/animation
- [x] Removed button borders for aesthetics
- [x] Put notes in the same key to make it sound better

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Normal operation/Win (gif framerate makes it difficult to see all button presses):
![](https://cdn.glitch.com/d0ec71b1-ca68-44bc-8fed-04748ae00ee0%2FnormalPLay.gif?v=1616371252318)
Strikes system/Loss:
![](https://cdn.glitch.com/d0ec71b1-ca68-44bc-8fed-04748ae00ee0%2Fstrike%3Aloss.gif?v=1616371259916)
Loss due to taking too much time:
![](https://cdn.glitch.com/d0ec71b1-ca68-44bc-8fed-04748ae00ee0%2Ftimer.gif?v=1616371259135)
Randomizer:
![](https://cdn.glitch.com/d0ec71b1-ca68-44bc-8fed-04748ae00ee0%2Frandomizer.gif?v=1616371258775)
Button animations:
![](https://cdn.glitch.com/d0ec71b1-ca68-44bc-8fed-04748ae00ee0%2Fbuttons.gif?v=1616371254012)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   w3schools.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

     One of the biggest challenges I faced was in the pattern randomization function. After drawing out some pseudocode, I proceeded to type 
   it into the file. In testing the program, I noticed that each time I started the game, it would create a random pattern, but it would not 
   give me a new one for the next round unless I refreshed the environment. In my first attempt at randomizing the array, I initialized it 
   to the randomizer function and then executed it every time the user pressed the start button. Whenever I run into issues, I go back and 
   visualize the program and the order in which it runs. I couldn't quite figure out my mistake right away so I implemented a console.log 
   into the randomizer. To my surprise, the console was displaying a new and random array each time the start button was pressed. After 
   thinking about the order in which the problem was running, I realized my error. Because I initialized the array to call the function and
   then re-called it every time the program started, this meant that it would be set to a randomized array once but if the user decided to 
   play again, a new array would be created but wouldn't be returned into the original initialization. To fix my error, I had to move the 
   assignment of the pattern to be nested inside of the startGame function. This allowed a new pattern to be created and assigned to the 
   variable called pattern each time a new round starts.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

      While JavaScript and CSS seem to be pretty similar to languages I am more familiar with, I would like to learn more about them in general.
    For example, the synthesizer function provided was very confusing at first, and I still am not sure I have a complete understanding of it.
    Along with this, I would love to learn more about how to properly and professionally organize a code file. Some of my classes have briefly
    gone over how to make comment blocks, in-line comments, and function comments but it has always seemed to be an afterthought. While I have
    been fortunate enough to work on some team projects in my classes, this project also made me wonder what a project like this would look like 
    in the professional world. Are all of the developers tasked with one function each? Do they all work collaboratively on the code? Do they each
    come up with their own file and compare in the end? I have been able to do a lot of coding, but I would love to learn more about how a team
    operates.
     

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
      While working on this project, I kept an ongoing list of features I would add and things I would go back to fix. One of the features I 
    thought about adding is a difficulty selector. When you visit the page, you would see the three new buttons labeled easy, medium, and hard. 
    I imagined that the levels of difficulty would be denoted by how long the pattern is, the speed at which the pattern is played, and how much 
    time the user has to guess. I believe the best way to do this is to turn most of the constants into variables and create a separate function 
    that is called when the user presses a difficulty button. This function would assign values to the variables based on the difficulty selected. 
    Once the difficulty has been selected, the user can go ahead and start the game. I also ran into an issue with the round timer. The way I 
    triggered the timer was with a button press, and then it would reset every time the user guesses an entire round correctly. This presents some
    issues because if the game hasn't been started and the user presses a button, the timer starts and the alert message will pop up. I believe this
    could be fixed with some conditional statements that only let it run while the game is playing. One final thing I found to fix is that there is a
    way to cheat. If the user presses the buttons while the sequence is displayed, they can cheat the system. I also believe this could be fixed by 
    conditional statements, that establishes that if the pattern is being presented, the user is given a strike, loses the game or the presses do not register.
   

## License

    Copyright [Owen Christensen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
