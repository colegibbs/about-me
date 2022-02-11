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

## Lab 04

### About Me 04

In this lab my pair programming partner, Marcus Hartwig, and I refractors eachothers code. In this projects I Navigated Marcus to put both greeting and exiting messages in functions as well as putting all my questions from the guessing game in their own functions. At the bottom of the JS I instructed Marcus to call all of the functions in the appropriate order. Marcus then submited a pull request, I merged the pull request, pulled to my computer, and now all edits are on my machine. I did the same for Marcus.

Authors: Cole Gibbs and Marcus Hartwig

#### Links and Resources 04

- The class repo
- Navigator/Driver Marcus Hartwig

#### Reflections and Comments 04

- Pair Programming is done in the industry
- pair programming can be stressful especially as the navigator (I suspect this would go away as you get to know the other person better)
- working on another persons repo and dealing with pushing and pulling can be stressful too
- more practice = more relaxation

Journal Entry 04:

Today we did lab 4 which is the pair programming lab. I found it much more tedious than I expected. I'm sure that if I were to use the same partner over and over again, we would get in sync and it would flow very nicely. I felt a bit of stress being the navigator. I wasn't sure how much to say or how much detail I need to describe. This is were I could imagine if I had worked with the person before, I would know where they tend to miss certain things like syntax for example. I hope that we continue to do pair programming. I am curious about how often it is used in the industry. My first thought is that it would be less efficient than having to people working on different things at the same time. Although, I'm sure there are times when it is very useful or it wouldn't be practice.

I found being the driver was much more enjoyable for me. I could feel how it could become such a flow state for the driver. As the driver you don't have to think many complex thoughts. All you have to do it type what you're told. I'm sure that this is related to the pair programming efficiency. Maybe having one person do the mental aspect of coding and the other do the physical results in less errors than if two people were doing both aspects at once. Also, pair programming ensures that both the commands being prompted by the Navigator and the code being written by the Driver are filter by the other person in real time.

My motivation for learning is to become the best programmer and problem solver that I can be. One the reasons that I like programming is that it teaches problem solving. That mentality, the mentality of a problem solver, can be taken to any area of life. That true logic is a tool and it has its place in life.

Another thing that motivates me is the availability of information in the programming world. I love to learn and have always been extremely curious. Programming provides me with a practically never ending rabbit hole of information that I can forever learn from. I have to be careful to make sure that I perfect my skills before moving on to the next topic because I tend to jump from topic to topic before the time is right.
