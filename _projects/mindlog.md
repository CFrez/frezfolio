---
layout: project
title: Mindful Logging
image: /assets/images/projects/mindlog/today.png
alt: today view of app
description: quickly track how time is used and the mindful benefit.
categories: projects
process: planning, requirements, analysis, development, testing, evaluation
type: software
imageurl: /assets/images/projects/mindlog/
---

A tool to help capture and understand the different states of mind, and when they are used.

[An article from Mindful](https://www.mindful.org/difference-between-being-and-doing/) provides good insight into the being and doing mind.

This is an app that I took from start to finish.


<div class="masonry-grid">
    {% for image in site.data.mindlog %}
        <figure class="card">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>