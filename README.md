starlight.ddns.net
==================

The web files for starlight.ddns.net

Adding stuff
------------

All comics and log posts go to the `_posts` directory. The file names should
go as follows: `yyyy-mm-dd-comic-or-log-title-here.md`.

### Logs

The following header is required for logs:

```
---
category: logs
layout: logs
title: "Title here"
stardate: 12031
---
```

Then wrap the logs inside the following tags:

```
{% highlight irc %}
# paste your chat logs here
{% endhighlight %}
```

### Comic

The following header is required for comic posts:

```
---
category: comic
layout: comic
title: "Comic Title Here"
comic_id: 0 # filename inside /assets/comic, without the `.png`
---
```

Developing
----------

Requirements:
* Git
* Ruby (v2.0.0+)
* Bundler
  included from within Rails (`gem install rails`) or `gem install bundler`
* Jekyll <http://jekyllrb.com/>
  install from within Ruby: `gem install jekyll`

Clone the project to your local directory.

```bash
$ git clone https://github.com/resir014/moonlight-web.git
```

Then run this command to install all of the required Jekyll plugins:

```bash
$ bundle install
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
# Builds Jekyll site
$ jekyll build -d "C:/www-data/moonlight"
```

Special thanks
--------------

* Poole: @mdo
* Hosting: @faintshadows
* Design: @hexdefined, @resir014
