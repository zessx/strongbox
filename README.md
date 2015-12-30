> :exclamation: This repository is no longer maintained and could present various security holes. You are encouraged to check the [2Keys](https://github.com/zessx/2keys) project.

Strongbox
=========

Generate secured passwords, based on a public and a private key.

Installation
------------
- Clone this repository in the wanted folder.
- If there's a subfolder in the URL used to access to Strongbox, you need to update `startto` value in `app.js`:
    - `var startto = 0;` for an URL without subfolder (ex. `http://strongbox.domain.tld/`)
    - `var startto = 1;` for an URL with one subfolder (ex. `http://domain.tld/strongbox/`)
    - `var startto = 2;` for an URL with two subfolder (ex. `http://domain.tld/security/strongbox/`)
    - ...

Usage
-----
![Usage](https://raw.githubusercontent.com/zessx/strongbox/master/assets/img/usage.png)

Access to Strongbox page, adding a public key to your URL: 
    
    http://strongbox.domain.tld/publickey

Strongbox will ask you to enter a private key. Once this key is entered, Strongbox will use both keys to generate you a secured password.

Please note that you can specify the password length desired, appending it to your URL:

    http://strongbox.domain.tld/publickey/8

**A public/private keys couple will always outputs the same password.** This means you can easily generate multiple passwords from a single one (which needs to be secured), using a service name as the public key. That said, you can use Strongbox the way you want!

Legals
------

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

- Author : [zessx](https://github.com/zessx)
- Licence : [MIT](http://opensource.org/licenses/MIT) 
- Contact : [@zessx](https://twitter.com/zessx)
- Link  : [http://smarchal.com/strongbox](http://smarchal.com/strongbox)

Donations
---------

[![Buy me a coffee !](http://doc.smarchal.com/bmac)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KTYWBM9HJMMSE&lc=FR&item_name=Buy%20a%20coffee%20to%20zessx%20%28Samuel%20Marchal%29&currency_code=EUR&bn=PP%2dDonationsBF%3abmac%3aNonHosted) [![Buy me a tea !](http://doc.smarchal.com/bmat)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KTYWBM9HJMMSE&lc=FR&item_name=Buy%20a%20tea%20to%20zessx%20%28Samuel%20Marchal%29&currency_code=EUR&bn=PP%2dDonationsBF%3abmac%3aNonHosted)

                
TODO
----
- Remove folder dependency
- Add wget access
