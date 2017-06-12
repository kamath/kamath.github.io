$("#tiles").hide()
$("#explore").click(function() {
    $("#main").animate({
        opacity: 0,
        height: 0
    }, 1000, function() {
        $("#tiles").fadeIn(1000)
    })
})

var factor = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 2 : 4

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

eventFire(document.getElementById('info'), 'click');

$(".card-image").trigger('click')

var start = -1;

var img = ['me1.jpg', 'neu.jpg', 'counteract.png', 'biogen.png', 'counteract.png', 'gllass.png', 'eagle.png', 'jcl.jpg'];
var title = ['Andy Kamath', 'Education', 'CounteractIO', 'DR Research', 'CounteractIO (again)', 'Gllass', 'Non-CS Activities', 'Non-CS Part II'];
var desc = ['Hey! I\'m an 18 year old with a strong interest in data science and full stack development.<br><br>Click the green arrow to learn more about me!',
    'I\'m studying Data Science at Northeastern University as a part of the class of 2021. With my strong interest in machine learning and artificial intelligence, NEU was one of the few colleges that allowed me to explore my interests in a niche undergraduate major like data science.',
    'Colorectal cancer doesn\'t show up on nearly 25% of prescreen tests.<br><br>What if you combined current stool tests with our patent pending machine learning algorithms to achieve 92% sensitivity?<br><br>Built May 2017. <a href="http://counteract.io">Check it out</a>',
    'I built a prescreening test for diabetic retinopathy that went up to 97% sensitivity in March 2017.<br><br>This research won me the Intel Excellence in Computer Science award, a silver medal from the US Army, the Founder\'s Award for Excellence in Public Health from the SSSI, and a 3rd place award from the NC Biogen Foundation',
    'What if there was a way to use social media analytics to detect patterns of violent behavior? Is there anything we can do about it?<br><br>I worked alongside the UN Counterterrorism Committee Executive Directorate and the Office of Information and Communications Technology to do just that. This project won the UN H4H competition and was a national finalist in the Technology Students Association<br><br>Built Fall 2016. <a href="http://github.com/counteractio/counteract">Check it out</a>.',
    'Analyze your images on social media like never before. Be able to tell what exactly makes your images popular. Predict how much attention an image will get you.<br><br>Built August 2016. <a href="http://gllass.com">Check it out</a>.',
    'I\m currently in the final stages of earning the Eagle Scout rank, becoming one of less than 5% of Boy Scouts who reach this achievement, demonstrating years of hard work, leadership, and service, also earning me three Presidential Volunteer Service Awards along the way.',
    'I also have a fascination for ancient languages. I am proficient in Latin and Sanskrit and am trying to learn Attic Greek. I held a state-level vice presidentship in the NC Junior Classical League - the 2nd largest student-led organization in the nation (the 1st being the Boy Scouts of America).'
]

$(".pink-text").hide()

function next() {
    start++;
    change();
}

function prev() {
    start--;
    change();
}

function change() {
    $(".card").animate({
        opacity: 0
    }, function() {
        console.log(start)
        $(".cardtitle").html(title[start])
        $(".activator").attr('src', 'img/' + img[start])
        $("#desc").html(desc[start]);
        if (start >= img.length - 1) $(".green-text").hide();
        if (start == 0) $(".pink-text").hide();
        if (start > 0) $(".pink-text").show();
        if (start < img.length - 1) $(".green-text").show();
        $(".card").animate({
        	opacity: 1
        })
    })
}

next()
