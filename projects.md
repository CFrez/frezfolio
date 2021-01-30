---
layout: default
title: Personal Projects
permalink: /projects
---

{% include math.html %}

# Various Assortment of Personal Projects
## most are driven by "how is there no good app for this in existence!?!"
{: #title }

<div class="ui raised link horizontal cards">

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