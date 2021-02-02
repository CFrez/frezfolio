---
layout: default
title: Home
---

<div class="ui center aligned header line" markdown="1">

# Hello World!

Welcome to my Wonderous World of Design!
{: .sub .header}

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

<div class="ui basic segment" markdown="1">

Design comes in many shapes and forms, a few that I engage in include:

{% for type in site.data.category %}
<i class="{{type.icon}} icon"></i> {{ type.name }}

{% endfor %}

</div>

<div class="ui basic segment" markdown="1">

Other places you can find me:
[<i class="linkedin icon"></i>](https://www.linkedin.com/in/cfrezynski/)
[<i class="github icon"></i>](https://github.com/RedFrez/)
[Thingiverse](https://www.thingiverse.com/redfrez/designs)

</div>