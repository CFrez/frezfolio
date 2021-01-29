---
layout: default
title: Personal Projects
permalink: /projects
---


# Various Assortment of Personal Projects
## most are driven by "how is there no good app for this in existence!?!"
{: #title }

{% for project in site.projects %}
[{{ project.title }}]( {{ project.url }} )
{% endfor %}

