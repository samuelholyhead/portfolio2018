### Redesigning the Henle Library for Android 

G. Henle Verlag are a sheet music publisher who specialised in publishing Urtext scores. These scores are considered to be the closest to the intended vision of the original composer and are the result of hours of research through the many different transciptions of sheet music that have occured over the years.

> Picture of physical henle scores

With the introduction of the iPad, Henle wanted to take the step into providing their scores to their customers digitally. Not content just to mirror their physical counterparts, Henle wanted to take advantage of these new techonologies to improve interactivity, portability and flexibility for the musician.

> Picture of score on iPad

The result was the Henle Library, both an advanced score reader and an online store for Henle’s customers to purhcase Urtext scores. After the success of the iOS app Henle decided to develop an android version to make the app avaible to a wider audience. I was tasked with re-designing the app to feel natural to an Android user.

> Picture of user using the android app? (Photoshop daniel hope?)

One of the major aims was to try and align the app closer to Google’s material design guidelines so that Android users would have an experience closer to the the apps they normally use. The most obvious example of this was combining the navigation bar and bottom bar into one action bar as the guidelines as that point discouraged the use of bottom bars as they conflicted with the three navigation buttons on the device.

> Side by side of the iOS navigation compared to the Android version

Another issue that we encounted is that the store and library on iOS used a tab switcher to switch between the two modes. Unfortunately Android’s stack based memory management system doesn’t easily allow for this parallel page management. 

> Illustration of how androids memory works

To work around this we created a custom action bar featuring a tab switcher at the home level of the store and the library, then if the user navigated deeper the tab switcher was replaced with the traditional back button which let the user navigate back up the stack to the home level where they could switch.

> Image of the tab switcher and diving down into the store

