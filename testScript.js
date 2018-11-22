
        document.write('<span id="Jincz"><marquee behavior="alternate" width="200px" id="picka" scrollamount = "30"><img src="https://i.imgur.com/0m59JtD.png" width="100px" height="100px"/></marquee></span>');
        var delta = 1;
        function speedUp() {
            
            var marquee = document.getElementById("picka");
            
            marquee.setAttribute("scrollamount", (parseInt(marquee.getAttribute("scrollamount"), 10) + delta).toString());
            if(marquee.getAttribute("scrollamount") == "100"  || marquee.getAttribute("scrollamount") == "30") delta = -delta;
            console.log(marquee.getAttribute("scrollamount"));
}
        setInterval(speedUp, 100);
    