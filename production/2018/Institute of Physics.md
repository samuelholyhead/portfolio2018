# Institute of Physics

## Overview

Institute of Physics are a membership organisation aiming to help advance of the physics. They started working with us to help them become more digitally focused as an organisation.

Our first step was to run several Google Venture style design sprints to get to know the organisation, teach design thinking processes to its staff and start to identify areas where we could make the biggest difference.

Read more about IOP design sprints

These sprints showed us that one of the areas where the IOP helps its members is by facilitating events so we created an events system for them that allows members to both discover, register and create events. The aim was for this to be a flagship project that introduced the IOP staff to modern software development practices such as Scrum, Progressive Enchancement, Responsive Design and aligning with GDPR.

Read more developing the events system

After this we started thinking about how to scale this work across the organisation in a consistent way. We created a Service Manual for IOP Digital Services and as part of this created a UI Kit featuring style guides and common design components and patterns to help align designers working on projects for the IOP. The next challenge is to help align front-end development across the organisation…

Read more about scaling design paradigms across the IOP

## Design Sprint: Design thinking in action

When we started working with the IOP we decided to run several Google Venture style design sprints to get to know the organisation, teach design thinking processes to its staff and start to identify areas where we could make the biggest difference.

Our first sprint goal was ‘To maximise membership engagement with physics’. After interviewing various IOP members (the first-time some of the IOP staff had ever spoken to their members?!) and drawing out the current state of the system we honed in the area of ‘Finding relevant events & content’ to focus our efforts on.

After our sketching sessions we chose to combine two ideas, an events discovery system and a user-focused home page that displays content tailored to them.

On the prototyping day I initially chose to build the prototype in keynote to keep it simple and allow non-designers in the team to build pages using some template components. However, we realised at at points of the prototype we wanted to observe the users inputting data naturally. So I opted to export the screens from keynote and build the prototype in proto.io a more complex piece of software that allows for data input, variables, scrolling, etc.

After user-testing it was clear the finding events was a well liked idea and something that the current IOP events calendar didn‘t serve well. 

We then run several more prototyping sprints focused more specifically on events to learn more about members organise & discover events as well as verifying that this was something we should put into development.

## Events system: A Flagship project to teach agile development

After identifying in that we wanted to improve member engagement with events through our GV design sprints we set out to run a series of two week long development sprints based on the Scrum methodology.

We included IOP staff members in the process so they would get to grips with working in an agile way and also so they get to work through problems alongside us that they would probably encounter in any future digital projects they took part in.

My role within these generally fell into UI/UX design, testing proposed designs with high-fidelity prototypes and then implementing the web front-end (HTML rendered from Clojure/Hiccup, CSS and some JS).

### Sprint 1: Event detail pages

Our first focus was on the detail pages for the events themselves. Design-wise the aim for these pages was to be clear and clean on any device. To this end they were designed mobile first and implemented in a responsive way.

The other important factor for these pages is that we wanted them to be as shareable as possible, so I spend a lot of time implementing all the proper metatag information used by platforms like Facebook, Twitter, etc for their previews. We also put in a feature where anyone could quickly copy the link to these pages to their clipboard to make them easily shareable.

### Sprint 2: Event discovery pages

Once we had the pages we felt like the next thing we had to do was give them a home to live in. As the amount of events in future never tended to be more than 150 we decided to display them in a time sorted list and let users search through them if they specifically knew what they were looking for.

The IOP wants to enchance physics for all so to that end we wanted to build all these pages in the most accessible way possible. To that end we started designing and implmenting them according to the Progressive Enhancement principles.

These state that a page must be functional as pure HTML without any styling from CSS or extra Javascript functionality. Next the page can be dressed in CSS but all its functions should work without Javascript. This ensures that even if you are in the middle of the highlands with intermitant internet the pages should still be usable.

### Sprint 3: Event Creation

During our user interviews in the design sprints we had discovered that some people who held physics events didn’t even know you could have the IOP advertise your event. 

Due to this we decided to make anyone able to add an event to the new system and create a simple moderation flow for the IOP staff.

The other issue we discovered during our research is that there is a really wide range of events supported by the IOP so our input forms had be very flexible. This led to design decisions like intergrating a WYSIWYG editor so that event creators could easily format their event descriptions to include all sorts of information.


### Sprint 4: Registration & GDPR

The final sprint aimed to let users sign up for the events. As part of this flow the IOP wanted to collect details on any special requirements that user might need at the event.

As this meant we were collecting personal data we wanted to make sure the system was complient with the new European data protection laws coming into force May 2018.

After reading through the policies and collaborating with the IOP‘s lawyers we decided on these principles.

- Respect seperation of concerns and never tie together two opt-ins to one opt-in method.
- Limit the amount of data that is people collected to the bare minimum required.

Also we agreed that before May 2018 we would implement a global control center for registered users where they can view and opt-out of anything they have given consent for.

## Service manual: A scaling these principles

While including IOP staff members on a live project with us worked well we needed to record all these learnings for future IOP digital projects we aren’t building ourselves.

To solve this we started work on a digital service manual for the whole organisation.

To help align designers working on future IOP digital projects I created a live UI kit. This is a style guide containing both basic elements such as type, colours but also more advanced modules and flows such as navigation bars, data capture forms for different kinds of data, etc.

To try and avoid this becoming a dusty document that is forgotten about I opted to make a it a sketch file so that designers can copy elements from it into their own designs, making consistency easier.

We established a rule where new elements can’t be added to the kit unless they have been implmented and tested to ensure quality.
