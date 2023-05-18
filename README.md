# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/Screenshot%202023-05-17%20193719.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/componentwithsignupform-2oQ-KKFVlu](https://www.frontendmentor.io/solutions/componentwithsignupform-2oQ-KKFVlu)
- Live Site URL: [https://tahobbit11.github.io/component-with-signup-form/](https://tahobbit11.github.io/component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to check user inputs to see if everything is good or not. If it isn't that is where the code detects that and shows and error mesage just below the input box.

To see how you can add code snippets, see below:

```html
      <div class="input-wrapper">
        <div class="deal">
          <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <div class="information">
          <div class="input-info">
            <input type="text" id="first-name" placeholder="First Name">
            <p class="first-name-error hide">First Name cannot be empty</p>
          </div>
          <div class="input-info">
            <input type="text" id="last-name" placeholder="Last Name">
            <p class="last-name-error hide">Last Name cannot be empty</p> 
          </div>
          <div class="input-info">
            <input type="text" id="email" placeholder="Email Address">
            <p class="email-error hide">Looks like this is not an email</p>
          </div>
          <div class="input-info">
            <input type="text" id="password" placeholder="Password">
            <p class="password-error hide">Password cannot be empty</p>
          </div>
          <div>
            <button class="trial-button">Claim your free trial</button>
          </div>
          <div class="terms-services">
            <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
          </div>
```
```css
     .deal {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(248, 32%, 49%);
        box-shadow: 0 8px #db6466;
        border-radius: 10px;
        padding: 5px 50px;
        margin-bottom: 20px;
     }
```
```js
button.addEventListener("click", function(e){
    e.preventDefault();

    if(e) {
        firstNameError.style.display = 'none';
        lastNameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        firstName.style.border = '1px solid lightgrey';
        lastName.style.border = '1px solid lightgrey';
        email.style.border = '1px solid lightgrey';
        password.style.border = '1px solid lightgrey';
    };

    let first = firstNameCheck();
    let last = lastNameCheck();
    let mail = emailCheck();
    let pass = passwordCheck();

    if(!first || !last || !mail || !pass){
        return
    };
});
```

### Continued development

I could come back and do something with the names to make sure I get confirmation that its a real name and not just numbers etc.

## Author
- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
