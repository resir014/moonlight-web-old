moonlightradio.ddns.net
=======================

> Source code for moonlightradio.ddns.net

Adding stuff
------------

All posts go to the `_posts` directory. The file names should
go as follows: `yyyy-mm-dd-post-title-here.md`.

The following header is required for posts:

```
---
category: logs # can be `updates` or `logs`
layout: logs
title: "Title here"
stardate: 12031 # optional, only for log posts
---
```

To enable syntax highlighting, logs should be placed inside the following Liquid tags:

```
{% highlight irc %}
# paste your chat logs here
{% endhighlight %}
```

Developing
----------

Requirements:
* Git
* Ruby (v2.0.0+)
* Bundler
  (included from within Rails (`gem install rails`) or `gem install bundler`)
* Jekyll <http://jekyllrb.com/>
  (install from within Ruby: `gem install jekyll`)

Clone it. ( `git clone https://github.com/resir014/moonlight-web.git` )

Then install all the bundled plugins.

```bash
$ bundle install
```

After the plugins are installed, we can now run a local server from within our computer.

```bash
$ bundle exec jekyll serve
```

Deploy process
--------------

**NOTE:** The deploy script included in this repository *only* works from within the server! You should ssh into the server and clone the project there before running the deploy script.

To deploy the site, run this command.

```bash
# Run this command from the server
$ sudo tasks/deploy
```

Special thanks
--------------

* Poole: [@mdo](https://twitter.com/mdo)
* Hosting: [@AT_745](https://twitter.com/AT_745)
* Design: [@hexdefined](https://twitter.com/hexdefined), [@resir014](https://twitter.com/resir014)
