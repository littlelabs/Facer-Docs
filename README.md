# Facer Creator Documentation Source 

To preview your changes locally, you'll want to run the site on your desktop:
1. Fork the repo, then clone your fork locally
2. Open your command line interface, and cd into the directory where you cloned your repo
3. Run any subsequent commands from this directory
---
#### Mac Users: We recommend a couple of optional extra steps if you are on a Mac.
* First you'll need xcode development tools:
```$ xcode-select --install```

* Then install Homebrew (this is optional but makes Jekyll easier)
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

* Now install Ruby
```brew install ruby```
---
## Install Jekyll:
```$ sudo gem install jekyll bundler```
## To Build the Site:
```$ jekyll build --watch```
## To Serve the Site Locally:
```$ jekyll serve```
(By default, the site will be available at http://127.0.0.1:4000)