# Work-Planner
This webpage functions as a calendar app that can store events added to it by the user. Simply click into one of the text boxes with a corresponding time of your choice,
and type on what you have planned for that hour. The hours are from 9am to 5pm, fitting for employees that work a 9 to 5 job.

The hours are also colour coded:
>
>- Grey is for past hours.
>- Red is for the current hour.
>- Green is for future hours.

Whatever text you type in any given hour can be saved onto the client's local storage by clicking on the floopy disk icon. This text will not be lost if the page is closed or
refreshed, as any text that has been saved will appear in its respective hour.


## What was the motivation?

To test the skills I have learnt from studying jQuery, which involves studying the different notation that's used in jQuery compared to what I learned before, which was
JavaScript. Throughout the creation of this planner app, I've understood that jQuery is primarily used to simplifiy the amount of code needed to execute things.


## What problems does it solve?

Organising your work day can be difficult without writing or typing up a scheduel. The purpose of this app is to provide employees that work from 9 to 5, a scheduel that can
have events added to it, and the hour that they may occur in. The hour blocks are also colour coded so it's easy to tell what the current hour is, and what hours have or
haven't passed. The current day is also shown on the top of the page in large font, so the employee knows at first glance what day it is.

## What did you learn?

Here's a small list of what I've learnt while making this work planner:
>
>- saveButton.on is the jQuery equivalent to JS's addEventListener.
>- the $ symbol is used a lot in jQuery, and shortens the amount of code needed to be written.
>- $(this) can hold the last element that was requested in a function.
>- how to search and create elements with IDs dynamically using "i".
>- using dayjs and its different formats to display the current day on the page.
>- using dayjs to tell CSS which colours to apply to which hours, depending on the current time.

## Example Screenshots of Changes Made

![alt text](https://github.com/AnthonyBonanno/Work-Planner/blob/main/assets/images/Capture.PNG)

![alt text](https://github.com/AnthonyBonanno/Work-Planner/blob/main/assets/images/Capture1.PNG)

## Link to Deployed Application

https://anthonybonanno.github.io/Work-Planner/ 