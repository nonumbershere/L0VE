var af = document.createElement('div');
af.innerHTML = "<p style='color: red; font-weight: bolder;'>By Lapide</p><button style='color: lightblue; background: darkblue; border-radius: 20px; font-weight: bold; cursor: pointer;' onclick='home();'>Start</button>"
document.querySelector("#buildingsMaster").append(af);
document.querySelector("#buildingsMaster").style.height = "50px"

function install() {
    window.prefix = "!";
    window.us = prompt('Enter ' + prefix + ' then the command.');
    window.args = us.substring(prefix.length).split(" ");
}

function comf() {
    var m = confirm('Is this all?')
    if (m == false) {
        home();
    } else {

    }
}

class AutoClicker {
    element = null;
    cps = 1000;
    start = function(element, cps) {
        window.auty = setInterval(()=>{
            element.click();
        }, cps)
    }
    end = function(el) {
        clearTimeout(el);
    }
}

function home() {
    install();
    var modules = {
        other: {
            console: {
                success: function (msg) {
                    console.log("%c[" + "%c!" + "%c] " + "%c" + msg, "color: lightgreen;", "color: red;", "color: lightgreen", "color: blue");
                }
            }
        },
        misc: {
            cookie: {
                prompt: {
                    removeCookies: function () {
                        var cookies = parseInt(args[1]);
                        Game.cookies -= cookies;
                        alert("I removed " + cookies + "!");
                        modules.other.console.success("Successfuly added " + cookies + " cookies");
                        comf();
                    },
                    addCookies: function () {
                        var cookies = parseInt(args[1]);
                        Game.cookies += cookies;
                        alert("I added " + cookies + "!");
                        modules.other.console.success("Successfuly added " + cookies + " cookies");
                        comf();
                    },
                    cookieChanger: function () {
                        var cookies = parseInt(args[1]);
                        Game.cookies = cookies;
                        alert("I set your cookies to " + cookies + "!");
                        modules.other.console.success("Successfuly changed cookies to " + cookies);
                        comf();
                    }
                }
            }
        },
        exploit: {
            prompt: {
                autoCookieClicker: function() {
                    alert("")
                },
                endAutoClicker: function() {
                    window.autoclicker.end();
                    comf();
                },
                autoClicker: function () {
                    var cps = args[2];
                    var CPS = parseInt(cps);
                    var id = args[1];
                    var elem = document.getElementById(id);
                    window.autoclicker = {
                        pointedID: id,
                        element: elem,
                        cps: CPS,
                        cpsString: cps,
                        start: function () {
                            window.atu = setInterval(() => {
                                autoclicker.element.click()
                            }, autoclicker.cps + 000)
                        },
                        end: function () {
                            clearInterval(atu)
                        }
                    }
                    autoclicker.start();
                    comf();
                }
            }
        },
        fun: {},
        special: {},
        jokes: {},
        helper: {},
        cookie: {
            cookie: document.getElementById('bigCookie'),
            cookies: Game.cookies
        },
        tools: {},
        apis: {
            modules: {
                autoclicker: new AutoClicker
            }
        }
    }
    switch (args[0]) {
        case "cookies":
            modules.misc.cookie.prompt.cookieChanger();
            break;
        case "addcookies":
            modules.misc.cookie.prompt.addCookies();
            break;
        case "removecookies":
            modules.misc.cookie.prompt.removeCookies();
            break;
        case "autoclicker":
            modules.exploit.prompt.autoClicker();
            break;
        case "endautoclicker":
            modules.exploit.prompt.endAutoClicker();
            break;
        case "autocookie":
            modules.apis.modules.autoclicker.start(modules.cookie.cookie, args[1]+000);
            break;
        case "endautocookie":
            modules.apis.modules.autoclicker.end(auty);
            break;
        case "developer":
            switch (args[1]) {
                case "exec":
                    for (var i = 2; i < args.length; i++) {
                        eval(args[i]);
                    }
                    break;
                case "script":
                    switch (args[2]) {
                        case "remove":
                            window.document.location.reload();
                            break;
                    }
                    break;
            }
            break;
    }
}
