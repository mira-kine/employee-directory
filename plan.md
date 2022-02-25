# Plan for employee directory

## Views

- [x] Login (/login) -> Auth isSigningUp = false
- [x] Create Account (registering/sign up) -> Auth isSigningUp = true
- [x] Homepage with <Link> to /register and /login
- [x] Profile View
- [ ] Create Profile View - if they haven't created a profile yet, presented with "create profile" view with msg stating they need to create profile. -> ProfileForm View isCreating = true
  - should be a **form** with name: string, email: string, birthday: date (use <input type="date">), bio: text(use <textarea>)
- [ ] Edit Profile view (can reuse Create profile view with adjustments) -> ProfileForm View isCreating = false

## Components

- [x] AuthForm for Login/Create Account
- [x] Private Route
- [x] Header (displays username)
- [x] UserForm for Edit/Create Profile

## Context

- [x] User context
- [x] Profile context (because you need it in different parts of the app)

## Userflow

- User enters login page, if no account then sign up. Sign up leads to create an account, requring email confirmation.
- Once sign in, if have created profile then presented with profile view page with info from profile, and link to edit profile (same as create profile WITHOUT message stating they need to create profile)
- if they haven't created yet, they will be presented with create profile view with message stating they need to create a profile -> presented with profile form.
- Header should be displayed with "sign in" button if user is signed out, and a "you are signed in as ${email}" msg with sign out button if user is signed in
- app should have Home page with some intro content and links to sign in(nav to /login) and create (nav to /register)

## Things to still add

- [ ] clearForm on Auth view
- [x] functioning sign out on header
