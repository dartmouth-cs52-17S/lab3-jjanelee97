# Collaborative Notes App made from React
Made by Jane Lee

CS52 - Tim Tregubov

Lab 3

## Description
I made a web app using React that lets the user create, drag, edit, and delete notes.  It pushes to Firebase in real time so other users can share the same notes and edit them as well!  It's basically a collaborative notes website.  

### Check it out at
https://dartmouth-cs52-17s.github.io/lab3-jjanelee97/

## What worked and didn't worked
I think SA4 really helped with this lab.  Adding and deleting notes worked well because they were just functions.  When it came to dragging x and y positions and editing the note, I had a trouble understanding the update function before I could use it.  Firebase was easy enough to understand so I didn't run into major problems with the database, and I am now a fan of using it.  
I think the part I had most trouble with was understanding the connections between how dumb components and smart components worked together, but now I have a clearer picture upon completing this lab.  

## Extra Credit
* I made it so that the notes do not go out of bounds.  I found that when someone dragged the notes to the top, there would be no way to get it back except going into the actual firebase database and deleting it from there.  I made it so that update doesn't work if the note is outside of the screen, and the note just snaps back to the position it was at before being dragged.

* I also made the notes responsive to size.  If the user ends up putting a lot of text or a big image in these notes, the note increases in size to accommodate this instead of hiding the text that is out of bounds.  
