---
layout: project
title: Animal Tracking
image: /assets/images/projects/animal/quick.png
alt: dog picture
description: an app to assist in tracking of fostered cats & dogs and adoptions
tags: design planning mockup
categories: projects
process: planning, requirements
type: software
imageurl: /assets/images/projects/animal/
---

While volunteering and fostering with an Animal Resucue in Las Vegas, it became evident that their use of paper and google spreadsheets to manage data was not ideal. I worked through some of the requirements to generate a design option, but I didn't have the chance to implement it prior to moving away.


<div class="masonry-grid">
    {% for image in site.data.animals %}
        <figure class="card">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>