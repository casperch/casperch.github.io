---
# layout: single
# classes: wide
# title:
# date:   2019-01-04 10:12:17 +0900
categories: job
---

`No directory, logging in with HOME=/`

Having same issue to get rid of this error i did the following

Stop MYSQL service:

{% highlight bash %}
sudo service mysql stop
{% endhighlight %}

Change home directory of mysql from nonexistent to original directory where it is supposed to be:

{% highlight bash %}
sudo usermod -d /var/lib/mysql/ mysql
{% endhighlight %}

Now start mysql server again with:

{% highlight bash %}
sudo service mysql start
{% endhighlight %}
The error message has disappeared. Still why this happen is unknown.

