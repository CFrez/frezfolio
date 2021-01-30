---
layout: default
title: Personal Projects
permalink: /projects
---

*note* add tools, languages, etc.

<div class="ui header">
    Various Assortment of Personal Projects
    <div class="sub header">
        most are driven by "how is there no good app for this in existence!?!"
    </div>
</div>

<div container relaxed columns="equal">
    <div class="ui raised stackable link three cards">

{% for project in site.projects %}
{% capture title %}{{ project.title }}{% endcapture %}
{% capture url %}{{ project.url }}{% endcapture %}
{% capture description %}{{ project.description }}{% endcapture %}
{% capture image %}{{ project.image }}{% endcapture %}
{% capture alt %}{{ project.alt }}{% endcapture %}
{% include card.html 
    title=title
    url=url
    description=description
    image=image
    alt=alt
%}
{% endfor %}

    </div>
</div>