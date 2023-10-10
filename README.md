# Newsletter Subscription Overlay (Popup)
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## Description

In this exercise, you will create a popup that asks the user to subscribe to a newsletter when the user moves the mouse vertically more than 100 pixels from the top of the viewport.

## Instructions

- Work in the `index.html` file provided.
- Your form (popup) should have an input field and a submit button.

### Task 1

- Create a form with an input field for email and a submit button.
- Provide an appropriate label for the input field indicating the user subscribes to the newsletter.
- By default, the form should be invisible

### Task 2

- Write a Javascript function that triggers the form to appear when the user moves the mouse vertically greater than 100 pixels from the top of the viewport

> Hint: You can use the `MouseEvent.clientY` property to check the distance of mouse from the top of the viewport.

**Optional:**

Style to your pleasing :)

> Hint: Refer to the representation below and watch the mouse behaviour, for an idea of what your result should look like.

![demo](demo.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Popup/form

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Page should contain an input field |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Page should contain a button |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Popup/form shouldn't be visible by default |

### On mousemove

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Popup/form should be visible on mouse vertical move > 100 pixels from top |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-NewsletterSubscription)


[//]: # (autograding info end)