
function startTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('date').innerHTML = hours + ":" + minutes + ":" + seconds;
    var time = setTimeout(startTime, 500);
}
function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}
//MainJS
$(document).ready(function(){
    var breakTime = 10;
    var workTime = 25;
    $('circle').html(workTime);
    $('#plusB').on('click', function(){
        if (breakTime == 60){
            alert("Can't go any higher!");;
        } else{
        breakTime++;
        $("#break").html(breakTime);
        $('text').html(breakTime + " : 00");
    }
    });
    $('#plusW').on('click', function(){
        if (workTime == 60){
            alert("Can't go any higher!");;
        } else{
        workTime++;
        $("#work").html(workTime);
        $('text').html(workTime + " : 00");
    }
    });
    $('#minusB').on('click', function(){
        if (breakTime == 0){
            alert("Can't go any lower!");
        } else{
        breakTime--;
        $("#break").html(breakTime);
        $('text').html(breakTime + " : 00");
    }
    });
    $('#minusW').on('click', function(){
        if (workTime == 0){
            alert("Can't go any lower!");;
        } else{
        workTime--;
        $("#work").html(workTime);
        $('text').html(workTime + " : 00");
    }
    });
    //timer code taken from https://codepen.io/yaphi1/pen/KpbRZL
$('circle').on('click', function(){
    var time_in_minutes = workTime;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
        if (t.seconds< 10){
            $('text').html(t.minutes+" : 0"+t.seconds);
        } else{
            $('text').html(t.minutes+" : "+t.seconds);
        }
		if(t.total<=0){
            var snd = new Audio("beep.wav");
            snd.play();
            $('text').html("Break!")
        }
	       }
	    update_clock(); // run function once at first to avoid delay
	    var timeinterval = setInterval(update_clock,1000);
        }
        run_clock('clockdiv',deadline);

    });

});
