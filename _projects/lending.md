---
layout: project
title: Lending Library
image: /assets/images/projects/lending/book.png
alt: book picture
description: A quick and easy way to track what books are on my shelf and which have been leant to a friend.
categories: projects
process: planning
type: software
imageurl: /assets/images/projects/lending/
---

I have envisioned a Library App that allows for tracking what books I have, what I thought about them, and then others I want. The most important aspect of this app will be the ability to share this information with friends, and track books that I have leant and to whom.


<div class="masonry-grid">
    {% for image in site.data.lending %}
        <figure class="grid-item">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>