# Project 3: Design Journey

**For each milestone, complete only the sections that are labeled with that milestone.** Refine all sections before the final submission.

You are graded on your design process. If you later need to update your plan, **do not delete the original plan, leave it in place and append your new plan _below_ the original.** Then explain why you are changing your plan. Any time you update your plan, you're documenting your design process!

**Replace ALL _TODOs_ with your work.** (There should be no TODOs in the final submission.)

Be clear and concise in your writing. Bullets points are encouraged.

Place all design journey images inside the "design-plan" folder and then link them in Markdown so that they are visible in Markdown Preview.

**Everything, including images, must be visible in _Markdown: Open Preview_.** If it's not visible in the Markdown preview, then we can't grade it. We also can't give you partial credit either. **Please make sure your design journey should is easy to read for the grader;** in Markdown preview the question _and_ answer should have a blank line between them.


## Existing Project (Milestone 1)

**Tell us about the project you'll be using for Project 3.**

### Project (Milestone 1)
> Which project will you add interactivity to enhance the site's functionality?

Project 2


### Audience (Milestone 1)
> Briefly explain your site's audience. (1-2 sentences)
> Be specific and justify why this audience is a **cohesive** group.

The target audience comprises individuals in Ithaca during the festival, seeking details about the event's logistics, enjoyable activities, and essential information for their attendance. They would be people eager to gather all the necessary details to ensure a seamless and enjoyable festival experience, assuming they are in the vicinity during the festival dates.


### Audience's Goals (Milestone 1)
> List the audience's goals that you identified in Project 1 or 2.
> Simply list each goal. No need to include the "Design Ideas and Choices", etc.
> You may adjust the goals if necessary.

- Goal 1: To identify logistics before attending the festival (transportation, dates)
- Goal 2: To identify how to enjoy the festival (events, what it's about)
- Goal 3: To find information that would be good to have in mind before visiting (precautions, warnings, prohibitions)


## Interactivity Design (Milestone 1)

### Modal Interactivity Brainstorm (Milestone 1)
> Using the audience goals you identified, brainstorm possible options for **modal** interactivity to enhance the functionality of the site while also assisting the audience with their goals.
> Briefly explain each idea and provide a brief rationale for how the interactivity enhances the site's functionality for the audience. (1 sentence)
> Note: You may find it easier to sketch for brainstorming. That's fine too. Do whatever you need to do to explore your ideas.

- Enlarging the map image (This ensures better accessibility of overall location information, more visibility.)
- Enlarging images of events and goods (This ensures better visibility of the details of the activities at the festival, providing the audience a more through idea of the festival.)
- Magnified information of contact information and guidelines (This allows the user to feel more accessibility in reaching out to the staff to gain more information regarding the festival.)


### Interactivity Design Ideation (Milestone 1)
> Explore the possible design solutions for the interactivity.
> Sketch at least two iterations of the modal and at least two iterations of the hamburger menu interactivity.
> Annotate each sketch explaining what happens when a user takes an action. (e.g. When user clicks this, something else appears.)

1. <Modal Sketch 1>
    ![Modal Sketch 1](modal1.jpg)
2. <Modal Sketch 2>
    ![Modal Sketch 2](modal2.png)
3. <Hamburger Sketch 1>
    ![Hamburger Sketch 1](hamburger1.jpg)
4. <Hamburger Sketch 2>
    ![Hamburger Sketch 2](hamburger2.jpg)


### Final Interactivity Design Sketches (Milestone 1)
> Create _polished_ sketch(es) (it's still a sketch, but with a little more care taken to communicate ideas clearly to the graders) to plan your interactivity.
> **Sketch out the entire page where your interactivity will go.**
> Include your interactivity to the sketch(es).
> Add annotations to explain what happens when the user takes an action.
> Include as many sketches as necessary to communicate your design (ask yourself, could another 1300 take these sketches an implement my design?)

**Modal design sketches:**

![Modal Final Sketch](modal_final.png)

**Hamburger drop-down navigation menu design sketches:**

![Hamburger Final Sketch](hamburger_final.png)


### Interactivity Rationale (Milestone 1)
> Describe the purpose of your proposed interactivity.
> Provide a brief rationale explaining how your proposed interactivity addresses the goals of your site's audience.
> This should be about a paragraph. (2-4 sentences)

The modal provides a larger image of the map, which isn't really visible in the thumbnail view. This means that the audience will be provided a layout that presents location information better, which will help them to enjoy the festival more effectively. The hamburger menu will provide more visibility on narrower screens so that the user can both navigate to designated pages easily and have a good view of the content on each page.


## Interactivity Implementation Plan (Milestone 1)

### Interactivity Planning Sketches (Milestone 1)
> Produce planning sketches that include all the details another 1300 student would need to implement your interactivity design.
> Your planning sketches should include _all_ HTML elements needed for the interactivity; _annotations_ for the element types, their unique IDs, and CSS classes; and lastly the initial CSS classes.

**Modal planning sketches:**

![Modal Planning Sketch](modal_plan.png)

**Hamburger drop-down navigation menu planning sketches:**

![Hamburger Final Sketch](hamburger_plan.png)


### Interactivity Pseudocode Plan (Milestone 1)
> Write your interactivity pseudocode plan here.
> Pseudocode is not JavaScript. Do not put JavaScript code here.

**Modal pseudocode:**

Open the modal:

```
when #map-img is clicked:
    remove .hidden from #modal
```

Close the modal:

```
when #close is clicked:
    add .hidden to #modal
```

**Hamburger menu pseudocode:**

Pseudocode to show/hide (toggle) the navigation menu (narrow screens):

```
when #menu is clicked (event):
    if #link is .hidden:
        remove .hidden from #link
    else:
        add .hidden to #link
```

Pseudocode to hide the hamburger button and show the navigation bar when the window is resized too wide:

```
when #navbar2 is resized (min width: 900px):
    add .hidden to #navbar2
    remove .hidden from #navbar1
```

Pseudocode to show the hamburger button and hide the navigation menu when the window is resized too narrow:

```
when #navbar1 is resized (max width: 900px):
    add .hidden to #navbar1
    remove .hidden from #navbar2
```

Pseudocode to show/hide the hamburger button and show/hide the navigation menu when page loads

```
when window is narrow (< 900px):
    add .hidden to #navbar1
    remove .hidden from #navbar2

when window is wide (> 900px):
    add .hidden to #navbar2
    remove .hidden from #navbar1
```

## Grading (Final Submission)

### Interactivity Usability Justification (Final Submission)
> Explain how your design effectively uses affordances, visibility, feedback, and familiarity.
> Write a paragraph (3-5 sentences)

The design implements visual affordances that signal the user where to click in order to find the information they need for Apple Fest. It also provides visual feedback of hovering effects in order to signal to the user that they are successfully interacting with the website. It implements familiar web designing practices in regards of the navigation bar, the hamburger menu, and the modal so that the user can follow familiar processes to interact with the website. The interactivity of the website is also responsive so that the user can easily navigate through the website regardless of what device they are using.


### Tell Us What to Grade (Final Submission)
> We aren't re-grading your Project 1 or 2.
> We are only grading the interactivity you added.
> Tell us where (what pages) we can find your interactivity and how to use it.
> **We will only grade what you list here;** if it's not listed, we won't grade it.

About Page - navigation bar and hamburger menu
Directions Page - navigation bar and hamburger menu, modal (click on map-image)
Things to Enjoy Page - navigation bar and hamburger menu
FAQs Page - navigation bar and hamburger menu


### Collaborators (Final Submission)
> List any persons you collaborated with on this project.

This is solely my work.


### Reference Resources (Final Submission)
> Please cite any external resources you referenced in the creation of your project.
> (i.e. W3Schools, StackOverflow, Mozilla, etc.)

Mozilla


### Self-Reflection (Final Submission)
> This was the first project in this class where you coded some JavaScript. What did you learn from this experience?

I learned how ids and classes are different and how they are utilized in JavaScript. I also learned how to successfully implement basic interactivity features in the website, and how to coordinate their visuals so that they are aesthetically and functionally pleasing and effective.


> Take some time here to reflect on how much you've learned since you started this class. It's often easy to ignore our own progress. Take a moment and think about your accomplishments in this class. Hopefully you'll recognize that you've accomplished a lot and that you should be very proud of those accomplishments!

Compared to when I started in this course, it's nice to see that I can implement an entire website out of scratch, even with interactivity features that I usually see on most websites that are currently available. 
