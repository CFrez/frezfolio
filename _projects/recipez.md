---
layout: project
title: RecipEZ
image: /assets/images/projects/recipez/Recipe-Main.png
alt: mockup of recipe page
description: version control recipe tracker that knows your pantry and tells you what to cook
process: planning, requirements, analysis, development
type: software
imageurl: /assets/images/projects/recipez/
---

version control recipe tracker that knows your pantry and tells you what to cook


<div class="masonry-grid">
    {% for image in site.data.recipez %}
        <figure class="card">
            <img src="{{ page.imageurl }}{{ image.src }}.png" alt="{{ image.alt }}">
            <figcaption>{{ image.alt }}</figcaption>
        </figure>
    {% endfor %}
</div>