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
<center>![Usage](assets/img/usage.png)</center>

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

<a class="donate" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=KTYWBM9HJMMSE&amp;lc=FR&amp;item_name=Buy%20a%20coffee%20to%20zessx%20%28Samuel%20Marchal%29&amp;currency_code=EUR&amp;bn=PP%2dDonationsBF%3abmac%3aNonHosted" onclick="_gaq.push(['_trackEvent', 'Donate', 'Donate', 'Paypal', 1, true]);" target="_blank"><img src="data:image/png;base64,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" alt="Buy me a coffee!" onmouseover="this.style.boxShadow='0 0 5px #00335e'" onmouseout="this.style.boxShadow=null"></a>
<a class="donate" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=KTYWBM9HJMMSE&amp;lc=FR&amp;item_name=Buy%20a%20tea%20to%20zessx%20%28Samuel%20Marchal%29&amp;currency_code=EUR&amp;bn=PP%2dDonationsBF%3abmat%3aNonHosted" onclick="_gaq.push(['_trackEvent', 'Donate', 'Donate', 'Paypal', 1, true]);" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAgCAMAAAAIToc+AAAC01BMVEX///9vkin///////////////////////////////////////////////////////////////////8lSgAnTQApTQIqTwAtUQAuUQAuUgAvUgAvUwAwUgAwUwAwVAAxUwAxVAAxVQcyVAA0VgA0VwA2WAI3WAA4WQA4WgA5WQg5WgA7WgA8XAA9XAM+XQA+XgA/XgA/XwdAXgBAYAxAYBBBXwBCYhFCYhNDYgtEZBRKZxZLaBtRbiRSbCVSbh5TbSZTbx5UcB9VcixYcylZdSZeeC1kekFkekJkfTJogTxpgTdpgj5pgkVqgz1rg0JthT1thT5vkilwhj1wkytyiER0h1h4jlh5jk16kFF6kFh7kFB7mkF7m0J8kVV+klaCllqClluDk2uDl1yDmWGFmV6FmV+Ho1aIm2aInGOKnGOKnGaKnmWOoWqPoWqPoWuQomuRn32Rom6SpG+Sq2iSq2mUpnCVpnSWpnKWpnOYqHWYqHiZqnmZqnuZqnyaqneaqn+bqnibq3mcrHucrH2drH2ds3ids3meqo2erX2ern6fr4Chr4Sks4anuoenu4iotYmpt4upt4+puJKqtJuqtJyruZCsupKtuY+tuZ2uu5KuvJewvZqxvpexwpezv5q2v6q2wZy4w6C6yaO7xKG7xqa7yaO7yaS+yarBybjBy6vBzK7E0bDE0bHM0sXN1bvN2L3Q2MDR2cDV2sXV3MjW3snX3NHX3cnX3svZ383a4M7e5NTf5dXg5dbh5Nvh5Nzh5dTh5dfh5tbh59ji5d3i5tfi59rj59vn69/n6+Dn7ODo7OHp7ePs7unv8unv8urw8uvx8+vx8+zz9e7z9fD09vD09vL09vP19vT29/L29/P29/T3+fX3+fb4+PT4+fT4+fX4+fb5+vb5+vf5+/f6+/n7/Pn7/Pr8/Pr8/fv8/fz9/fz9/vz+/v7+//7///3///7////JasSWAAAAE3RSTlMAf+rr7O3u7/Dx8vP09fb3+Pn6lWHs8wAABONJREFUeAHEzUESgDAIQ9FqIQnUy3n/yyhl7dq3/ZnJGOP+y1HnOL/MaQ4qcpXMCImkpIgsq13dX7EngJvNZuYOgEUb2RkP8eX93EYRhmEmxJSfKZAQU2IgFOMsphcwPXT4gFDgIDbl6EHA0QuEIoXCUSJCAWEweDFozVEuFEw3hYNwdAwIYjomxPj7E3j39mKdNJIczWjGj2dPK/tWz7fF742OhbyJJ4smWo2m8GSxeqn94zc++mey7J+eedSh53zNPPxcaQk2AcWNZ2rC/tvJl7z6+ifovHbEMCc5he66lWiA60RZqo59f+pUXH6588rbj758jBMMwIzms2aMR8d4lQiJPK7NGgn71YuZV1x73E1XLP6xdA5EhRzReygAReTJ4sDU4pBDlM4T5TBPfdV4ep9cXTNQvr6jwKry3q2ZsF/1KPMPp73C5cAMPI8oVGThpeCSzQDGNJGdJkvpKxVMqa5NaebQIVviZoz28TdZyb5Wwn7x/cxfnfgSl4MPw1g3RxYKSesFNVMfQA+yIEe2RcAxFeXQtMhBD1qKCvYGKh2ctRP2h59l/um+D7kc/WEuOWnMyCaJtxZ6wIvKcaCBJCd9BgEkRhQNw51SMVYsajXtf4xwJfSBCzF/i6TEJKL5BAy02TZTJVKho/WBWefQ9LSd4ScrsMmubS/yHyfIE4jGA3hRgmRNbNZTdQgUxrPBMkumywV+QBq3mv3fu8+/cP78Cy66rPN07uycN+/4G/7kcQIJFHMopS/h7SEbHqAkSpEhfo8+OgzMXYoBbg7Zw1vdVQqvVU7dr3uvu0mzZvpG3Nw8Y8Y6ezxx8x0fcEU+sxoXe+Y/7vN9tpqtaROChaZtg2nr7fkOV8DWS9goTNp8ue82wsCRvnX7c595YMfzuBxFaSU9ZrdYQUaALCfxCCBi4iHWREn7/QGz2o1c097esv8XzMccvIJLgdVC6gXReYvpEl0pIbpLa7Tl+AohDCZ6yiw/ZPOdinYhNj3yZx4+8AQuJ5C+TrxkgnfAPEekOIEOBh1NESh0wifs2RuX2JvPGuUnN3uEIwpEgSQqODo0FQFc0nEBg0L0o4JMSkR0c0rMtUiiAnvlrWpC+2MzRdHe2tryEL+w237fFO020UD0UX6UXrDbZmn7hBjsFmBOCk1kUc2DuDGwKM72mk/mKcb+/u5bFu1tbbMOO2mLnZ8vJi0mjeYqbLtJOxNyICMMHUu7RUdGpDB1jzSOyfbEoRurav/rjGmiSOuuO2x9+ItctJufwCU7ynALuRqvaJeYm832p0SXPn4oQIglECKd4mzHDqyUV7fzy7u0tMXM3na7p999exmPcymR66Axdl4/62H2oyriQ8d6s5cIkUETqejQMcfZjiFsGOXqdr535obNhunrX8clwB6k0RgXx5ykMF7RN4Xow0u3OXJD2IEhtiJhnO0Y0suav3+vZV/++PXXLFhwy8KFt914zzIuwevJsxclfa8M8z09Qa9iHw18uyg7xFqf7c9mlw5hJUz8A2R7XvphnP+jIyM17A0hIw7iumigvU+Ivd6q397EDWEwu+i7+r9J1fwWObXp/7FxcHLz8PHx8/Hx8fLy8HDz8PDwQgAPkAcEYBGgAgEBQUEhQSEhIUEBAX6QWlCvEtb95AB1HJmZUU1nA1rOwBg4UICBAQAzZYSk/kmIKwAAAABJRU5ErkJggg==" alt="Buy me a tea!" onmouseover="this.style.boxShadow='0 0 5px #3f5e00'" onmouseout="this.style.boxShadow=null"></a>
                
TODO
----
- Remove folder dependency
- Add wget access