# SHOT-Application
This is the repository for team 6 the SHOT Application

## Local Installation

1. Download this repo. The easiest way is using [GitHub for Desktop app](https://desktop.github.com/).
1. Duplicate the `keys.example.php` located in the *SHOT_System* folder and rename it into just `keys.php`. Notice that it won't appear in Git's dirty files as it is already gitignored.
1. Move it 3 folders up (to match the parent path in the `SHOT_System/app/php/SessionStart.php` require command)
1. Enter your local DB credentials into this new `keys.php`.
1. Test the app by running [localhost/test.php](http://localhost/test.php) (replace *localhost* with your environment's name and path as necessary)

If you set up everything ok, then you should see something like this:

![DB test OK](/docs/db-test-ok.png?raw=true)
