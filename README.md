# Flag quiz

Flag quiz is a very short, easy game where a player can check his/her knowledge of country flags.

![Design is responsive](/assets/images/readme-img/Responsiv-jpg.jpg)

---

## Table of content

## [Users experience (UX)](#user-experience-ux)

### [User stories](#user-stories)

## [Features](#features)

### [Existing features](#existing-features)

### [Features left to implement](#features-left-to-implement)

## [Design](Design)

## [Techologies used](#technologies-used)

## [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

## [Testing](#testing)

### [Validation testing](#validation-testing)

### [Manual testing](#manual-testing)

## [Lighthouse report](#lighthouse-report)

### [Report on mobile devices](#report-on-mobile-devices)

### [Report on Desktops](#report-on-desktops)

## [Deployment](#deployment)

### [Github pages](#github-pages)

## [Credits](#credits)

### [Code](#code)

## [Content](#content)

### [Media](#media)

---

## User Experience (UX)

Game is create for very clear and easy understandable rules. A player is trying his knowledge of the flags. Game will show to player 10 diferent country flags, and for each of them there will be shoen 4 answers.
Player has to make his choice to test his knowledge.

### User stories

* First time visitor goal:
  * Try out the knowldge of flags

* Returning visitor goals:
  * free time spending in an entertaining way

---

## Features

Game page is created very simple, as there are not many features, everything is clear, simple and intuitive.

### Existing Features

* Heading
  * Heading in the page is used as a link to the starting page. At any moment of the game, player can push it and he will return to the beginning (index page)

![Heading](/assets/images/features/features-heading.JPG)

* Welcome and start
  * In the middle of the index page there is located 3 important things:
  * Welcome message to greet the player,
  * Start button, to approach the game,
  * Instruction button - which leads the player to the modal box element, where the layer can check the instructions - how to play.

![Welcome and start](/assets/images/features/features-welcome.JPG)

* Footer
  * On the fooer there is just general information about authors.

![Footer](/assets/images/features/features-footer.JPG)

* Modal box
  * Modal Box is an element that apears over the content of the index page. IN our game it is used to introduce the player with the rules. Player can do it at any moment before or during the game.

![Modal box](/assets/images/features/features-modal.JPG)

* Game zone
  * In the game zone there is showed a flag and 4 answer options.
  * After clicking one of the answers,
    * all the answer buttons will be deactivated,
    * buttons will be colored - red color wrong answers, and green color, right ones
    * new button "next question" will appear, by clicking which, player can move to next question

![Game Zone](/assets/images/features/features-game-zone.JPG)

* Footer (in game zone)
  * When player is playing the game, the bottom of the page there are indicated 3 parameters. Count of: wrong, right and total answers. Numbers are increased after clicking button "Next".  

![Footer in Game zone](/assets/images/features/features-footer-game-zone.JPG)

* Result
  * When player has cliked 10 times on the button "next question", the game has will end. New screen will appear, giving some message to player, depending on his success.
    * First message will be if player will get less than 5 (0 - 4 points)  
    * Another message, if 5 till 7 answers will be right
    * And the last version of message will be if there will be 8 and more
    * Below the message,

![Result](/assets/images/features/features-result.JPG)

### Features left to implement

* Additional country flags can be added
* Time limit for answering a question could be added

---

## Design

* Color scheme
  * In the game there are used 3 main colors: #2a70c0, #a4d4ed, #efeceb. Besides them there are used seperate colors, to indicate wrong and right answers, but they are not in color scheme, as symbols are small but they sould be good visible.

![color palletes](/assets/images/prtscreens/color-schemes.jpg)

* Fonts
  * As a font for the main game is us used Tektur, as fallback font sans-serif. Despite that Tektur oculd seem that has bad readability -  it is good enough for big sepearte words at the same time it is very appropriate for such a simple game.

  * Wireframes
  * For creating general structure, wireframes were created. Not only for location of objects but as well for color choices. But in the process it was changed.

![Wireframe](/assets/images/prtscreens/wireframe.jpg)

---

## Technologies used

* HTML5
* CSS
* Javascript

---

## Frameworks, Libraries & Programs Used

* [Codeanywhere](https://codeanywhere.com/) for writing code
* [GitHub](https://github.com/)for storage of the site
* [Inscape](<https://inkscape.org/>) for creating wireframes
* [Mockup](https://ui.dev/amiresponsive) used for the mockup picture of readme file
* [Google fonts](https://fonts.google.com/) for the used fonts in the website
* [Flags of the World](https://flagpedia.net/) as a source for flags
* [JS Fiddle](https://jsfiddle.net/) for testing seperate code parts

---

## Testing

* Testing was done in few ways: manualy, by testing page via developer tools to check the responsivnes. And as well the code was tested with using special elements.

### Validation testing

* Code from each of HTML, CSS and JavaScript pages were checked by validator.
* For the HTML files was used [W3C Markup Validator](https://validator.w3.org/), for CSS [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and for Javascript [JS Hint](https://jshint.com/)
* Results:
  * HTML validator found as error in document index.html, that button element appears between a tags. Meanwhile there was no found due this error, but it should be potentialy corrected replacing a button with other element.
  * In the file quiz HTML, validator found as error emtpy hidden strings, and an img elemt without src atribute, but in this partiuular case, elements are filled with help of Javascript.
  * Javascript validator noted that all the used "let" are available in ES6 or Mozilla extensions.
  * Recomeneded that file is containing a  loop inside of which is a function, but the variable is declered outside. THhi should be avoided.

<details>
<summary>index.html
</summary>

![Index page validation result](/assets/images/validate/index-html-valid.JPG)
</details>

<details>

<summary>quiz.html</summary>

![Quiz page validation result](/assets/images/validate/quiz-html-valid.JPG)
</details>

<details>
<summary>style.css</summary>

![CSS validation](/assets/images/validate/css-validator.JPG)
</details>

### Manual testing

* Web page was tested on 2 different devices - PC and an Iphone12.
* On different browsers Google chrome and Safari
* In paralel with opening the pageon different screens, devtools were used to double check the responsivnes of web page.

### Lighthouse report

#### Report on mobile devices

<details>
<summary>Index page </summary>

![Index page lighthouse report - mobile](/assets/images/lightning/lightning-index-mob.JPG)
</details>

<details>
<summary>Game page</summary>

![Game page lighthouse report - mobile](/assets/images/lightning/lightning-game-mob.JPG)
</details>

#### Report on Desktops

<details>
<summary>Index page </summary>

![Index page lighthouse report - desktop](/assets/images/lightning/lightning-index-desk.JPG)
</details>

<details>
<summary>Gallery page</summary>

![Game page lighthouse report - desktop](/assets/images/lightning/lightning-game-desk.JPG)
</details>

### Bugs Fixed

* During the last testing phase using [W3C Markup Validator](https://validator.w3.org/) a missing div closing tag was noticed in one of the recipe pages, so it had to be placed in all 10 of them
* Button in the heading with logo on it, was covering the heading in all width, had to be fixed.

---

## Deployment

### Github pages

The webpage wes deployed to GitHub pages. For that were done following steps:

* Open the GiHub
* In the repositories open "flag-quiz"
* On the top navigation find button "Settings"
* in the left side menu find pages (in section "code and automation")
* In the menu "Build and deplayment" select:
  * Source - "Deploy from a branch"
  * "main"
  * /(root)
  * Click "save"

Site can be found: (<https://jancimway.github.io/flag-quiz/>)

## Credits

### Code

* [Code instutute template](https://github.com/Code-Institute-Org/ci-full-template)
* [README](https://github.com/Thomas-Tomo/Lunar-Escape) by Thomas-Tomo
* Code instutute lecture materials
* Slack community
* [W3School](https://www.w3schools.com/) - modal box solution
* Not directly code, but the idea how similar problems could be solved:
  * [JS](https://github.com/Thomas-Tomo/Lunar-Escape) by Thomas-Tomo
  * [JS](https://github.com/portfolio-project-2) by Aleksandar Javorovic

---

## Content

* [Favicon](https://favicon.io/) - tool for creating favicon from image
* [Fontawsome](https://fontawesome.com/) - icon resource
* [Mycolor.space](https://mycolor.space/) - color pallete generator
* Great help and support of Mentor - Mitko Bachvarov!

### Media

* [Pixabay](https://pixabay.com/) - Royality free mage source*.jpg to*
* [Convertio](https://convertio.co/) - Tool for converting pictures from jpg to webp
* [FreeConvert](https://www.freeconvert.com/) - for converting pictures from jpg to webp
