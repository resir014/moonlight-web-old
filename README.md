moonlightradio.ddns.net
=======================

The web files for starlight.ddns.net

Adding stuff
------------

All log posts go to the `_posts` directory. The file names should
go as follows: `yyyy-mm-dd-log-title-here.md`.

The following header is required for logs:

```
---
category: logs
layout: logs
title: "Title here"
stardate: 12031 # optional
---
```

Then wrap the logs inside the following Liquid tags:

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

Clone the project to your local directory.

```bash
$ git clone https://github.com/resir014/moonlight-web.git
```

Then run this command to install all of the required Jekyll plugins:

```bash
$ bundle
```

Then we can run a local server from within your computer.

```bash
$ jekyll serve
```

It is **highly recommended** to make & commit your changes to your own branch.
Branch names follow the naming convention of `username/feature-name`.

Deploy process
--------------

NOTE: For now it is *highly recommended* to manually deploy from the server.

```bash
# Run this command from the server
$ tasks/deploy
```

Special thanks
--------------

* Poole: [@mdo](https://twitter.com/mdo)
* Hosting: [@AT_745](https://twitter.com/AT_745)
* Design: [@hexdefined](https://twitter.com/hexdefined), [@resir014](https://twitter.com/resir014)
