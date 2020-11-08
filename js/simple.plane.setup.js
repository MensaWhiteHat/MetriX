/* Load */
setTimeout(function()
{
document.querySelector('#loading').classList.add('stop')
}, 4000);

/* ########## 100vh Solution ############# */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});
/* ########## END 100vh Solution ############# */

    var smoothScroll
    
setTimeout(function()
{
    smoothScroll = new LocomotiveScroll
    ({
        el: document.querySelector('#page-wrap'),
        smooth: true,
        inertia: 0.5,
        smoothMobile:true
    });
        
    window.addEventListener('resize', function()
    {
    smoothScroll.update();    
    })

    /* Variabile Scritta SVG */
    var par=0;
    var textPath = document.querySelector('#text-path');
    var textContainer = document.querySelector('#text-container');
    var path = document.querySelector( textPath.getAttribute('href') );
    var pathLength = path.getTotalLength();
    var wid=window.innerWidth;
    
    function updateTextPathOffset(offset)
    {
    textPath.setAttribute('startOffset', offset); 
    }
    /* END Variabile Scritta SVG */  
    
    /* .on scroll --> locomotive funzione */
    smoothScroll.on('scroll', function(obj)
    {
        
        const wer         = window.innerHeight;
        const winScroll   = obj.scroll.y;
        var height_cont = document.querySelector("#page-wrap").offsetHeight;
        height_cont -= wer;
        const scrolled    = (winScroll / height_cont) * 100;
        
    
        /* Change line width to SCROLL */
        
        
        document.querySelector("#line span").style.width = scrolled+"%";
        
        /* MY CODE - Attiva voce menu */
        const top_bar = document.querySelector("#top_bar");

        /* scritta SVG */
        par = document.querySelector('#cont_p').getBoundingClientRect();
        par = par.top + window.scrollY
        
        if(wid>414)
        {
        par=par/3;
        }
        else
        {
        par=0;   
        }
        
        updateTextPathOffset(pathLength);

        requestAnimationFrame(function()
        {
            var rect = textContainer.getBoundingClientRect();
            var scrollPercent = rect.y / window.innerHeight;

            updateTextPathOffset( scrollPercent * 1 * pathLength );
        });
        /* END scritta SVG */

        if(!top_bar.classList.contains("close"))
        {
            
            const menu_div = document.querySelectorAll(".menu div");

            var arrayVariable = [ ];
            
            menu_div.forEach(function(element, i)
            {
            arrayVariable[i]=element.querySelector('a').getAttribute('href');
            });

            for (var i = 0; i < arrayVariable.length; i++) 
            {
                var theID = arrayVariable[i];

                if(theID!=null)
                {
                    if (theID.length) 
                    {
                        const elem=document.querySelector(theID);
                        var secPosition = elem.getBoundingClientRect();
                        secPosition = secPosition.top + window.scrollY
                        
                        var divHeight = elem.offsetHeight;
                        
                        if (winScroll>=secPosition && winScroll < (secPosition+divHeight)) 
                        {
                            document.querySelector('.menu div').classList.remove('active');
                            document.querySelector("a[href='" + theID + "']").parentNode.classList.add('active');
                        } 
                        else 
                        {
                            document.querySelector("a[href='" + theID + "']").parentNode.classList.remove('active');
                        }
                    }
                }
            }
        }
        /* END MY CODE - Attiva voce menu */
    });
    
    /* ####### Scroll to #div ###### */
    var nav_lin=document.querySelectorAll('#navigation a');

    [].forEach.call(document.querySelectorAll('#navigation a'),function(el, obj){
        el.addEventListener("click",function(e)
        {
            const href=el.getAttribute("href");
            smoothScroll.scrollTo(href, 50, 10);
            
            const rem_class = document.querySelectorAll(".menu div");
            
            rem_class.forEach(function(element)
            {
            element.classList.remove('active');
            });

            el.parentNode.classList.add('active');
            
            setTimeout (function()
            {
            document.getElementById("navigation").classList.remove("open", "active");
            document.getElementById("top_bar").classList.remove("close");
            }, 1500);
                
            e.preventDefault();
        });
      });

    /* ############ END ############*/



    

/* ########## Scroll Magic GENERAL ########## */ 
var controller = new ScrollMagic.Controller();
    
var w=window.innerWidth;


if(w>1366)
{
new ScrollMagic.Scene({triggerElement: "#titolo", offset: 1000, duration:3500})
.setClassToggle("#line", "active")
.addTo(controller);

// Univers scale
var universe_scale = new TimelineMax ()
.add([
TweenMax.to("#univers", 2, {width: '4500vw', ease: Linear}),
TweenMax.to("#univers", 2, {y: '-1200vw', ease: Linear}),
TweenMax.to("#univers", 2, {x: '-130vw', ease: Linear})
]);

new ScrollMagic.Scene({triggerElement: "#titolo", offset: 800, duration: 8000})
.setTween(universe_scale)
.addTo(controller); 

/*var universe_scale_2 = new TimelineMax ()
.add([
    TweenMax.to("#fru_tit", 1, {opacity: '0', ease: Linear})
]);

new ScrollMagic.Scene({triggerElement: "#titolo", offset: 1300, duration: 900})
.setTween(universe_scale_2)
.addTo(controller); */

// end Univers scale

var national = new TimelineMax ()
.add([
TweenMax.to("#nationalPark>div>svg", 1, {scale: '200', ease: Linear}),
TweenMax.to("#nationalPark>div>svg", 1, {x: '110%', ease: Linear}),
]);

new ScrollMagic.Scene({triggerElement: "#nationalPark", offset: 800, duration: 3000})
.setTween(national)
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#nationalPark", offset: 3000, duration:1300})
.setTween("#nationalPark>div>img", 1, {scale: '0.5', ease: Linear})
.addTo(controller);
}


    new ScrollMagic.Scene({triggerElement: "#cont_p", offset: 0,    duration:2500})
    .setTween("#sea_filter", 1, {attr:{"baseFrequency":"0.01"}, ease: Linear})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#cont_p", offset: 2500,    duration:2500})
    .setTween("#sea_filter", 1, {attr:{"baseFrequency":"0.001"}, ease: Linear})
    .addTo(controller);


// Bauhaus

var bau = new TimelineMax ()
.add([
TweenMax.to("#bautitle", 1, {scale: '1.02', ease: Linear}),
TweenMax.to("#bautitle", 1, {x: '0', ease: Linear})
]);

new ScrollMagic.Scene({triggerElement: "#chap_part", offset: 200, duration: 2200})
.setTween(bau)
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#chap_part", offset: 2000})
.setTween("#bauhausEdificio", 1, {opacity: '0', ease: Linear})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#part_2", offset: 0, duration:2200})
.setClassToggle("#line", "active2")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#part_2", offset: 0, duration:1600})
.setClassToggle("#line", "active2")
.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#deer", offset: 1000, duration:1000})
.setTween("#cont_deer #img_deer img:first-child", 1, {opacity: '0', ease: Linear})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#deer", offset: 1600})
.setClassToggle("#cont_deer", "active")
.addTo(controller);

var map = new TimelineMax ()
.add([
TweenMax.to("#unigridMap>div>img:first-child", 1, {y: '-250px', ease: Linear}),
TweenMax.to("#unigridMap>div>img:first-child", 1, {rotation: '106', ease: Linear}),
TweenMax.to("#unigridMap>div>img:first-child", 1, {x: '-100px', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(2)", 1, {y: '-100px', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(2)", 1, {rotation: '50', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(2)", 1, {x: '300px', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(3)", 1, {y: '300px', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(3)", 1, {rotation: '-41', ease: Linear}),
TweenMax.to("#unigridMap>div>img:nth-child(3)", 1, {x: '-250px', ease: Linear})
]);

 new ScrollMagic.Scene({triggerElement: "#unigridMap", offset: 500, duration: 1000})
.setTween(map)
.addTo(controller);

 new ScrollMagic.Scene({triggerElement: "#unigridMap", offset: 500, duration:4000})
.setTween("#unigridMap H3", 1, {x: '-5000px', ease: Linear})
.addTo(controller);



var circle_r = new TimelineMax ()
.add([
TweenMax.to("#road>div>div>div>div>img:first-child", 1, {rotation: 360, ease: Linear}),
TweenMax.to("#road>div>div>div>div>img:last-child", 1, {rotation: -360, ease: Linear})
]);

new ScrollMagic.Scene({triggerElement: "#road", offset:0, duration: 5000})
.setTween(circle_r)
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#road", offset:0, duration: 2000})
.setTween("#circle_r", 1, {scale: 1, ease: Linear})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#double_g", offset:300, duration: "130%"})
.setTween("#second_g", 1, {height: '100%', ease: Linear})
.addTo(controller);

var arrow = new TimelineMax ()
.add([
TweenMax.to("#arrow>div>div>img", 1, {rotation: 240, ease: Linear}),
TweenMax.to("#arrow>div>div>img", 1, {x: "150vw", ease: Linear}),
TweenMax.to("#arrow>div>div>img", 1, {scale: 5, ease: Linear})
]);

 new ScrollMagic.Scene({triggerElement: "#arrow", offset:-500, duration: 4000})
.setTween(arrow)
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#arrow", offset:400, duration:1500})
.setClassToggle("#line", "active")
.addTo(controller);
/* ##### END Scrollmagic menu */

},3000);   
    

/* ##### open/close menu */
document.querySelector('#botton_nav').addEventListener("click",function(e)
{
    document.querySelector('#top_bar').classList.toggle('close');
    document.querySelector('#navigation').classList.toggle('open');
    e.preventDefault();
    
    setTimeout (function()
    {
    document.querySelector('#navigation').classList.toggle('active');
    }, 1500);
    
})
/* ##### end open/close menu */

/* ##### Script effetto navigazione mouse */
{
    const body = document.body;
    const docEl = document.documentElement;

    const lineEq = (y2, y1, x2, x1, currentVal) => {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    };

    const lerp = (a,b,n) => (1 - n) * a + n * b;
    
    const distance = (x1,x2,y1,y2) => {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.hypot(a,b);
    };
    
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) 	{
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x : posx, y : posy }
    }
    
    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    const feDisplacementMapEl = document.querySelector('feDisplacementMap');

    class Menu {
        constructor() {
            this.DOM = {
                svg: document.querySelector('svg.distort'),
                menu: document.querySelector('nav.menu')
            };
            this.DOM.imgs = [...this.DOM.svg.querySelectorAll('g > image')];
            this.DOM.menuLinks = [...this.DOM.menu.querySelectorAll('.menu__link')];
            this.mousePos = {x: winsize.width/4, y: winsize.height/2};
            this.lastMousePos = {
                translation: {x: winsize.width/4, y: winsize.height/2},
                displacement: {x: 0, y: 0}
            };
            this.dmScale = 0;

            this.current = -1;
            
            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));

            this.DOM.menuLinks.forEach((item, pos) => {
                //charming(item);
                const letters = [...item.querySelectorAll('span')];

                const mouseenterFn = () => {
                    if ( this.current !== -1 ) {
                       TweenMax.set(this.DOM.imgs[this.current], {opacity: 0});
                    }
                    this.current = pos;

                    if ( this.fade ) {
                        TweenMax.to(this.DOM.imgs[this.current], 0.5, {ease: Quad.easeOut, opacity: 1});
                        this.fade = false;
                    }
                    else {
                        TweenMax.set(this.DOM.imgs[this.current], {opacity: 1});
                    }
                };
                item.addEventListener('mouseenter', mouseenterFn);
            });

            const mousemenuenterFn = () => this.fade = true;
            const mousemenuleaveFn = () => TweenMax.to(this.DOM.imgs[this.current], .2, {ease: Quad.easeOut, opacity: 0});
            
            this.DOM.menu.addEventListener('mouseenter', mousemenuenterFn);
            this.DOM.menu.addEventListener('mouseleave', mousemenuleaveFn);
        }
        render() {
            this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.1);
            this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.1);
            this.DOM.svg.style.transform = `translateX(${(this.lastMousePos.translation.x-winsize.width/7)}px) translateY(${this.lastMousePos.translation.y-winsize.height/2}px)`;
            
            // Scale goes from 0 to 100 for mouseDistance values between 0 to 100
            this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.1);
            this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.1);
            const mouseDistance = distance(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y);
            this.dmScale = Math.min(mouseDistance, 100);  
            feDisplacementMapEl.scale.baseVal = this.dmScale;

            requestAnimationFrame(() => this.render());
        }
    }
    new Menu();
}