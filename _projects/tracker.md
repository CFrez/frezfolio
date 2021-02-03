---
layout: project
title: Project Tracker
image: /assets/images/projects/tracker/project-board.png
alt: sketch of project tracker design
description: New best friend of any maker.
categories: projects
process: planning, requirements
type: software
imageurl: /assets/images/projects/tracker/
---

This is an application I have dreamed of the most, but have yet to actually start building.

It will be application that is a maker's best friend, allowing for rating/ranking of projects that are on your "todo" list, and then use those rankings to help choose which project to do next. It will help maintain an inventory of supplies. Importantly it will have a knowledge center of techniques or skills that would be needed to execute the project. Then if by chance you don't finish the project in one shot.... it will help document progress to enable easier resuming.


<div class="masonry-grid">
    {% for image in site.data.tracker %}
        <figure class="card">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>