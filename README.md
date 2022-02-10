# Week 1

## Lab 02

### About Me

The html of this website is an about me page. There is minimal CSS at the moment. The JS for this site is a guessing game the user plays before accessing the html. The game consists of 5  yes or no questions. The user can answer with 'yes', 'y', 'no', 'y'. The string entered will be lowecased and trimmed, so there is more usability. If the user enters and invalid answer, an error message will appear and the questions will continue.

Author: Cole Gibbs

#### Links and Resources

I didn't use any resources other than:

- The class repo

#### Reflections and Comments

I didn't learn much new using this lab. I got a lot of good review. I did realize how useful functions will be when we start using them. I wrote so many if/else statements that could have been replaced with a function that takes parameters. I did learn/realize how useful comments can be. It made my code so much more readable and more appealing to look at. It was really good for me to review these concepts. I had forgot how to link the different files together. I suppose I did learn a few things this lab. I didn't know that you could create an invisible file. I also didn't know that you could create rules using the .json file. I also learned that you need to reset the CSS so you can remove the browser defaults. I thought it was very interesting that we had to do that. I wonder how useful it will be later on. I also like using the tree command on my terminal. That's not something new for me. I just think it's cool.

## Lab 03

### About Me 03

The html of this website is an about me page. I added a top ten foods list and made my education and work histories lists as well. . The JS for this site is a guessing game the user plays before accessing the html. The game consists of 5  yes or no questions, one qeustion that requires you to guess a number with four attempts, and one question where you have to guess one of my favorite genres of music. The user can answer with 'yes', 'y', 'no', 'y' in the yes or no questions. The user can answer with a number in the number guessing question and a string in the music guessing question. The string entered will be lowecased and trimmed, so there is more usability in both questions 1 through 5 and question 7. In question 6, where you must guess numbers, the string returned by the user is converted to a string.  If the user enters and invalid answer, an error message will appear and the questions/guess attempts will continue.

Author: Cole Gibbs

#### Links and Resources 03

- The class repo
- [CSS Cheat Sheet](https://overapi.com/css)
- [JS Number() MDN Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [CSS listy-style-type MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
- Help from a TA

#### Reflections and Comments 03

- When you reset css everything is reset. There are no heading sizes or list markings.
- `Number()` is a good way to convert a string to a number
- `break;` will only break you out of the current loop. As in if you are in a nested loop, it will break you out of the nested loop and not the nested and the parent loop.

Before I started at Code Fellows I was a Chemistry major in college and before that I was an Engineering major. Although you don't need great math skill to code, I find that the feeling I get while doing both are very similar. They both require logic which puts a particular pressure on the mind. Logic is very powerful and I am finding that Chemistry, Engineering, and Coding to be all very logical. For me, Chemistry and coding are and have unfolded for me in my mind very nicely. Today I did have a few thinks that I didn't expect.

The first was using the `break;` command in a loop. I noticed that you can't break from both a nested and parent loop at the same time or at least I couldn't figure out how to. I ended up using a variable in the condition of if statements that were nested inside of a for loop. This way when I implemented the nested for loop I could change the value of that variable. This caused the other if statements in the parent for loop not to run and for the loop to terminate by a final if statement with the inverse of the current variable value in the condition. In this if statement was a `break;` that caused the loop to stop because it was not inside of another nested loop.

The second thing that surprised me was how much of the css is reset with the reset.css file. There is absolutely no css at all. Not even header sizes or list markers are present after the rest. I was surprised to learn that this is an industry standard. Although, when I think about it it makes sense. I'm sure there are inconsistencies in the way browsers render content and resetting it gives the developer full control.

I enjoyed using for loops. I particularly liked if statements and loops nested inside of loops. I did notice that it's best to use a different variable name in a nested for loop than you did in the parent on. In the parent for loop I used `i` and in the nested, child for loop I used `j`.

I'm excited to use functions next. I think it will clean up the code I have written a lot. There is a lot of repeats that I'm sure functions will eliminate and make it much more readable and practical.  

I also learned that I am not fond of CSS. The styling of a web page doesn't excite me very much. It's the logic and functionality that I really am excited about writing and learning. I'm hoping that there are tools that allow me to used less CSS than I otherwise would.
