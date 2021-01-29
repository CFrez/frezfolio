---
layout: default
title: Personal Projects
permalink: /projects
---

<div class="title">
    <h1> Various Assortment of Personal Projects </h1>
    <h2> most are driven by "how is there no good app for this in existence!?!" </h2>
</div>

{% for project in site.projects %}
[{{ project.title }}]( {{ project.url }} )
{% endfor %}

