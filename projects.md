---
layout: default
title: Personal Projects
permalink: /projects
---

<div class="header" markdown="1">

## Various Assortment of Personal Projects

most are driven by "how is there no good option for this in existence!?!"

</div>

---

<!-- ![progress bar for reference](/assets/images/process/full-line.png)
{: .bar} -->

<div class="masonry-grid">

{% for project in site.projects %}
{% capture title %}{{ project.title }}{% endcapture %}
{% capture url %}{{ project.url }}{% endcapture %}
{% capture description %}{{ project.description }}{% endcapture %}
{% capture image %}{{ project.image }}{% endcapture %}
{% capture alt %}{{ project.alt }}{% endcapture %}
{% capture ribbon %}{{ project.process | split: "," | last | strip }}{% endcapture %}

{% include card.html 
    title=title
    url=url
    description=description
    image=image
    alt=alt
    ribbon=ribbon
%}
{% endfor %}

</div>
