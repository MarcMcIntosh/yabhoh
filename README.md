# yabhoh
Yet Another Blog Hosted On Here

## Usage
Markdown files in the public directory will be hosted and rendered by github automatically.

### Set-up
Fork this repository
Create your own branch
Delete or edit the file public/.gitignore

Copy example-travis.yml to .travis.yml
### GITHUB_TOKEN
Go to https://github.com/settings/tokens select Generate and in options tick repo scope.
Then go to https://travis-ci.org under the settings tab Add the token to the go to yabhoh/settings and under the environment create a viarable named GITHUB_TOKEN and set the value to the token generated on github.

## Directory layout
- __public__: is the hosted content. Your content :)
- __resources__: is a collection of resources organised by topics for blogging about or casual interest. Additions are most welcome.
