---
title: Welcome Address
layout: content
---

{% include titlebar.html title="Welcome Address" %}

{{ site.data.paragraphs.welcome_address }}

<div id="signoff">
Yours sincerely,<br>
<img src="{{ site.baseurl }}/assets/img/signature.png" />
{{ site.data.paragraphs.welcome_address_signoff | markdownify }}
</div>

<style>
    #signoff {
        text-align-last: right;
        align-self: flex-end;
    }
</style>