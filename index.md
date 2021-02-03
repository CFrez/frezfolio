---
layout: default
title: Home
---

# Hello World!

## Welcome to my Wonderous World of Design!

<!-- If you think any aspect of software development doesn't involve design, 
then you might doing something wrong.
{: .ui .grey .stacked .padded .segment}

When you come across a well written piece of code, 
it is truly a work of art to be admired.
{: .ui .grey .stacked .padded .segment}
 -->

---

<div class="segment" markdown="1">

### Design comes in many shapes and forms, a few that I engage in include:

{% for type in site.data.category %}
<div class="icon-label">
    <span class="material-icons outlined">{{type.icon}}</span>
    {{ type.name }}
</div>
{% endfor %}

</div>

---

<div class="contact-me">
    <h3>Places you can find me:</h3>
    <a href="https://www.linkedin.com/in/cfrezynski/">
        <img src="/assets/images/linkedin.png">
    </a>
    <a href="https://github.com/RedFrez/">
        <img src="/assets/images/github.svg">
    </a>
    <a href="https://www.thingiverse.com/redfrez/designs">
        Thingiverse
    </a>
</div>