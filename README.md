sudoku.
===
A basic sudoku app with a gentle, clean aesthetic. Enter numbers with the keyboard to guess, and when the board is complete, you'll be shown what you got right and what you got wrong.

You can play it [here](http://aesprice.github.io/sudoku/).

===
###Tech
A handful of technologies are at the core of this app and its workflow:

#####jQuery
I chose to use jQuery because of the ease it affords in manipulating the DOM. The page, as loaded by the browser, includes very little HTML, and most elements are created and added afterwards. jQuery also made modifying styles easy, allowing me to size elements and text in proportion to the available screen space in the user's browser (this also works on mobile browsers).

#####Jade
As a templating engine, Jade has powerful tools for composing markup, but I mostly used it to make my HTML easier to read and write. I hadn't used Jade before, so it was a nice syntax exercise for me.

#####Sass
Aside from having a really fun name, Sass was incredibly useful in making my styles manageable. Using variables and mixins made it easy to edit values, since they needed to exist in only one place. This was especially useful when creating and modifying animations, as I needed to render browser-specific versions of each animation for full compatibility, and writing values 4 or more times for every small tweak is a pain. For instance, each row of numbers fades in shortly after the previous row, which requires separate animations for each row, each with a different delay, written 4 times for browser compatibility. Thanks to Sass, when I want to modify the sequential fade, I only have to edit one line instead of 36.

#####Grunt
Grunt automation was essential to my workflow, largely because of my use of Sass and Jade, which required me to compile them frequently. I also leveraged grunt to `lint` my JavaScript, `concatenate` so only one JS file needs to be downloaded, and `uglify` my code for faster download. I set these processes on my `grunt watch` task so that I could simply concentrate on my code.

===
###Structure
My client app is divided into two (mostly) symmetrical folders: `dev` and `compile`. As these names suggest, development work is done in subfolders within the `dev` folder, and compiled code is sent to the corresponding subfolder in the `compile` directory. The `styles` folder containes Sass/CSS, `scripts` contains JavaScript (compiled into a single `app.js`), and `templates` contains Jade, which is compiled into `index.html`. I have already included jQuery in the `lib' folder, and Grunt takes care of the rest.

The `scripts` include `main.js`, which simply scales and initializes the app on page load, `board.js` which houses all logic relating to the board as a whole and as a collection of tiles, and `tile.js` which handles all logic relating to individual tiles. Each of the latter two are instantiated in pseudoclassical style, and contains a `.element` property that references their corresponding jQuery object.

===
###Postmortem

#####Game Logic
I decided to hold off on much of the Sudoku board-building logic in the interest of focusing on interface and style. With more time, I'd like to do things like generating solutions randomly (currently there's one solution that's hardcoded), and validating the solvability of the board while hiding tiles (currently I'm randomly hiding tiles).

#####Feedback
While I'm largely happy with the feedback loop of completing a board and getting color-coded results, I would have also liked to include some more specific feedback If I had significantly more time, I might have implemented things like a modal that congratulates you for completing the board and prompts you for another, and perhaps even conflict indicators showing why incorrect tiles are incorrect.

#####Animations
While making CSS animations in Sass with mixins was fun, I had also considered doing this with jQuery animations, which could save on load time by reducing the compiled CSS. In the end I chose to stick with CSS for higher rendering performance.
