## Developing a website for the South India Coffee Company

Goal: To develop a responsive website that lets coffee roasters connect with the South India Coffee Company.

The South India Coffee Company are 5th generation coffee planters from Coorg in India. Recently they have started trying to import coffee into the UK and European markets and needed a website to showcase their various crops to European coffee roasters. Founder Akshay Dashrath asked me to develop a responsive website from the initial desktop designs they already had.

> image of plantation?

### Finalising the designs

First, I went through the desktop designs and identified elements that would be problematic at small devices. One of the biggest problems was the navigation bar.

For mobile devices I designed a taller navigation bar that could fit all of the links, avoiding the dreaded hamburger menu. To avoid obscuring a large chunk of the viewport I engineered the nav bar to disappear when the user scrolled down but animate back in if the user scroll upwards to allow easy access to the navigation.

> gif of the navigation bar animation on mobile

Another issue was that the designs intended the ‘Order Samples’ call-to-action (CTA) to bring up an email prefilled with order details. Unfortunately this would cause frustration for many users who don’t use the default mail client, leading to this familar sight…

> image of the onboarding mail app

To solve this I instead added copy above the button instructing the user to get in touch if they wanted samples and all the CTA’s to link to the contact page where they are given multiple ways to get in touch.

> image of the new CTA on the coffee page


### Developing the website

The initial designs featured some nice editorial-style image arrangements. In order to recreate them I used a modified version of the Webflow Responsive Flexbox Grid which made building these awkward layouts a breeze.

> image of the image arrangements

Another requirement of the site was that it should be easy for Akshay (an Android engineer) to add new crops to the site.

To help with this I wrote my HTML and CSS in the style known as [fCSS (functional CSS)](https://marcelosomers.com/writing/rationalizing-functional-css/). This style favours composition of classes over writing one class per element. This means that when Akshay came to add a new coffee crop page and needed to change the colour of the navigation bar, all he needs to do is remove the class `g_blueBG` and add the class `g_redBG`.

This approach also means that developers who are new to the codebase can understand the layout from reading the classes in the HTML instead of having to dig through an over-sized CSS file.

> diptych for two colours of coffee cards and their css classes

The designs for the crop pages featured large imagery in the background showing the taste of the coffee. I built up an image library representing various flaours for Akshay so that he didn‘t have to go image hunting everytime he added a new crop.

> image of crop detail page

Want to see the live site? Visit sicc.coffee