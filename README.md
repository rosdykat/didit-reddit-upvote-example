# Reflections

## Setup

- Set up was fine, really no errors!

## auth.js

- Was stuck on this for a while, recieving an error saying "The redirect_uri is not associated with this application." I read some documentation and was starting to think it was to do with my oAuth settings. I had the callback URL as the deployment url instead of the local url, which is what I was currently working on at the time !!

## Features

- With this I belive the application is running with all of the basic features listed in the readme, and will now start working on the potential future features!!

## Fixes

- Fix page titles on post pages to match the post title ✅ ? I can't tell automatically at the beginning, but it looks done

- Handle the error when you click to vote while not logged in to show a nice error message ✅
- Added an on brand error page, with a link to the login button.
- However, if you get redirected to this from the home page, the "didit" button will not be able to redirect you to the home page.

  - If you get redirected to this from a post, this works fine

- Try to make it so I can’t vote more than once (Fix could be done in the SQL with the constraints (ideally), or in-app code to check the db before adding a new row to the votes table) ✅

  - Unless i'm misunderstanding, this is already being done through an if statement

- Users can vote an infinite number of times on the same post. We’d like to prevent this happening. It should be enforced at the Schema level with the UNIQUE constraint but it isn’t working. We’d like you to try and fix this, either by correcting the schema (preferable) or if not by implementing the restriction in the application code when the user tries to upvote. ✅

  - This was already implemented

  - When adding css to comments, such as background colour, you'll notice that it's rendering an empty comment box which can be annoying if you have applied a bg colour to all comment boxes.
  - I added this to stop rendering comments if the row in the database doesn't exist.
  - if (comments.rows.length === 0) {
    return null;
    }

## Future Features

- Profile page: When clicking on a post username, it will lead to their profile page that shows all of their posts made ✅
  - I created a new component called UsePostList and adapted the code to show posts that matched the logged in users ID. I did this by passing the userId as a param on the postId dynamic page.
  - Using the PostList as a template made it really easy, I didn't have to change much of the SQL and i also kept most of the styling!!

## Additional additions

- I played around with the CSS alot, this was mainly just putting things in boxes and applying flexbox
- I find it quite difficult working with tailwind, I've used it in the past where it has been useful but it gets complicated when there is both tailwind css and regular css. I'll probably just stick to one when making apps myself
