# Facer Creator Documentation Source 

To preview your changes locally, you can run the following commands:
## Initial Setup:
---
#### Mac Users: We recommend a couple of optional extra steps if you are on a Mac.
1. First you'll need xcode development tools:
```$ xcode-select --install```

2. Then install Homebrew (this is optional but makes Jekyll easier)
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

3. Now install Ruby
```brew install ruby```
---
Then you should be able to install Jekyll:
```$ sudo gem install jekyll bundler```
## To Build the Site:
```$ jekyll build --watch```
## To Serve the Site Locally:
```$ jekyll serve```
(By default, the site will be available at http://127.0.0.1:4000)