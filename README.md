# yabhoh
Yet Another Blog Hosted On Here

## Usage
Markdown files in the public directory will be hosted and rendered by github automatically.

### Set-up
Fork this repository
Create your own branch,
Delete or edit the file public/.gitignore
Copy example-travis.yml to .travis.yml
### Travis
Go to https://travis-ci.org and login
find the repository, and select your branch.
***note*** if you can not find your branch you may have to enable travis on your copy the master first.
### Git-hub token
Generate a token here https://github.com/settings/tokens
and add it to the environment variables on https://travis-ci.org under the yabhoh/settings tab.


## Directory layout
- __public__: is the hosted content. Your content :)
- __resources__: is a collection of resources organised by topics for blogging about or casual interest. Additions are most welcome.
