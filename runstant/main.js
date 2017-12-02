phina.globalize();

phina.define('MainScene', {
    superClass: 'CanvasScene',

    init: function() {
        this.superInit();

        var star = StarShape({radius:100}).addChildTo(this).setPosition(100, 100);

        var tweeners = [
            Tweener()
            .to({x:500},1000,'easeInOutBounce')
            .to({scaleY:2}, 400),

            Tweener()
            .wait(400)
            .set({fill:'green'})
            .to({
                rotation:360,
                sides:30
            },800,'easeInBack')
            .set({fill:'red'}),

            Tweener().wait(500)
            .set({stroke:'yellow', lineWidth:1})
            .to({
                scaleX:2,
            },500,'easeInCirc'),

            Tweener().wait(200).to({y:800},1000,'easeInOutElastic')
        ];

        tweeners.forEach(function(tweener){
            star.attach(tweener);
        });
    },
});

phina.main(function() {
    var app = GameApp({
        startLabel: 'main',
    });
    app.fps = 60;
    app.backgroundcolor = 'silver';
    app.run();
});