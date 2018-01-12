function death_rate(){
    window.counted = false;
    window.rate = 0;
    window.cause = 'neoplazm';
}

function set_counter(year){
    console.log(year)
    var format = d3.format("d");
    if (!counted){
        //counted = !counted;
        d3.select('#test')
        .transition()
        .duration(1000)
            .tween("text", function() {
                var that = d3.select(this),
                    i = d3.interpolateNumber(that.text(), Math.round(rate / summ_death * 100));
                    return (function(t) {
                        that.text(format(i(t)));
                    });
            })
        d3.select('#Cause').text(cause)
        d3.select('#Year').text(year)
        }
}