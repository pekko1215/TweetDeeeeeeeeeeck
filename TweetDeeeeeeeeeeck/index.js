if (location.href == "https://tweetdeck.twitter.com/") {
    injectScript(function() {
        setTimeout(function() {
            console.log(window.TD)
            if (window.TD && TD.ready) {
                TD.services.TwitterClient.prototype.makeTwitterCall = function(b, e, f, g, c, d, h) {
                    c = c || function() {};
                    d = d || function() {};
                    b = this.request(b, { method: f, params: Object.assign(e, { weighted_character_count: !0 }), processor: g, feedType: h });
                    return b.addCallbacks(function(a) { c(a.data) }, function(a) { d(a.req, "", a.msg, a.req.errors) }), b
                };
                twttrTxt = Object.assign({}, twttr.txt, { isInvalidTweet: function() { return !1 }, getTweetLength: function() { return twttr.txt.getTweetLength.apply(this, arguments) - 140 } });
            } else {
                setTimeout(arguments.callee, 500)
            }
        }, 500)
    })
}

if(location.href == "https://twitter.com/"){
	
}


function injectScript(func) {
    var el = document.createElement('script');
    el.text = "(" + func.toString() + ")()";
    document.body.appendChild(el)
}