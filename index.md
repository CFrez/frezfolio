---
layout: default
title: Home
---

<div class="header-line" markdown="1">

# Hello World!

Welcome to my Wonderous World of Design!
{: .sub-header}

</div>

<!-- If you think any aspect of software development doesn't involve design, 
then you might doing something wrong.
{: .ui .grey .stacked .padded .segment}

When you come across a well written piece of code, 
it is truly a work of art to be admired.
{: .ui .grey .stacked .padded .segment}
 -->
<br/>

---

<br/>

<div class="segment" markdown="1">

### Design comes in many shapes and forms, a few that I engage in include:

{% for type in site.data.category %}
<h4>
    <i class="{{type.icon}} icon"></i>
    {{ type.name }}
</h4>
{% endfor %}

</div>

---

<div class="contact-me">
    <h3>Places you can find me:</h3>
    <a href="https://www.linkedin.com/in/cfrezynski/">
        <i class="linkedin icon"></i>
    </a>
    <a href="https://github.com/RedFrez/">
        <i class="github icon"></i>
    </a>
    <a href="https://www.thingiverse.com/redfrez/designs">
        Thingiverse
    </a>
</div>