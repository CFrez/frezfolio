---
layout: project
title: Goal Accomplishments Log
image: /assets/images/projects/goals/goals-design.png
alt: goal notes page
description: a pretty app for tracking different types of goals and thoughts
tags: design planning mockup
categories: projects
process: planning, requirements, analysis, development
type: software
imageurl: /assets/images/projects/goals/
---

While this app in many forms does exist, the goal was to have one that easily integrated with my other apps.


<div class="masonry-grid">
    {% for image in site.data.goals %}
        <figure class="grid-item">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>