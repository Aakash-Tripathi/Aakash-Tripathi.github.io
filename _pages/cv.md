---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Doctor of Philosophy in Electrical Engineering, University of South Florida (Expected 2025)
* B.S. in Electrical and Computer Engineering with Honors Concentration, Rowan University, 2018–2022

Work experience
======
* Graduate Researcher (Aug 2022 – Present)
  * Moffitt Cancer Center, University of South Florida
  * Developed a multimodal database and transformer foundational model for oncology data.
  
Skills
======
* Programming and Development
  * Python
  * C++
  * MATLAB
  * Flask
  * React
  * Docker
  * AWS
* Machine Learning Frameworks 
  * PyTorch
  * RAPIDS
  * Scikit-learn
* Data Solutions
  * MySQL
  * Delta Lake
  * Pandas

Honors and Awards
======
* Certification in Fundamentals of Deep Learning for Computer Vision
* Dean's List, Rowan University College of Engineering
* KEEN Lawrence Technological University Design Award (2019)

Activities
======
* Member, IEEE Eta Kappa Nu Honors Society
* Volunteer, American Red Cross

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>