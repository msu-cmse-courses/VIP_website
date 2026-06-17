---
layout: page
title: Advisors
permalink: /advisors/
nav: true
nav_order: 4
---

<div class="advisors">

{% assign sorted_projects = site.projects | sort: "importance" %}

{% for project in sorted_projects %}

  {% if project.advisors %}
    
    {% for advisor in project.advisors %}
      <div class="advisor-card">


        {% if advisor.img %}
          <img src="{{ advisor.img | relative_url }}"
               alt="{{ advisor.name }}"
               class="advisor-img">
        {% endif %}

        <div class="advisor-info">
          <strong>{{ advisor.name }}</strong><br>
          <em>{{ advisor.title }}</em><br>
          {% if advisor.email %}
            <a href="mailto:{{ advisor.email }}">{{ advisor.email }}</a><br>
          {% endif %}
          <br>
          <em>Link to VIP Team page</em>: <a href="{{ project.url | relative_url }}">{{ project.title }}</a><br>
          <p>{{ advisor.bio }}</p>
        </div>
      </div>

    {% endfor %}

  {% endif %}

{% endfor %}

</div>