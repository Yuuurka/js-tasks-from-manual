if (!Function.prototype.defer) {

    Function.prototype.defer = function(ms) {
        setTimeout(this, ms)
    };
}

function f() {
    console.log("Hello!");
}

function d() {
    console.log("Hello2!");
}
f.defer(1000);
d.defer(5000);