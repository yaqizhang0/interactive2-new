var a = 1, b = 2, c = 3;
(function firstFunction(){
    var b = 5, c = 6;
    (function secondFunction(){
        var b = 8;
        (function thirdFunction(){
            console.log("a: "+a+", b: "+b+", c: "+c);
            (function fourthFunction(){
                var a = 1, c = 8;
            })();
        })();
    })();
})();