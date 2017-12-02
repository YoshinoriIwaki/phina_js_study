phina.globalize();

phina.define('MainScene', {
    superClass: 'CanvasScene',

    init: function(){
        this.superInit();
        var cs = this.cursor = Cursor().addChildTo(this);
        this.on('enterframe', function(e){
            this.addChild(cs);
            e.app.pointers.forEach(function(p){
                cs.position.set(p.x, p.y);
            });
        });
        var shape = Button().addChildTo(this);
        shape.x = this.gridX.center();
        shape.y = this.gridY.center();
    },
});

prina.main(function(){
    var app = GameApp({
        startLabel: 'main',
    });
    app.interactive.cursor.normal = 'none';
    app.interactive.cursor.hover = 'none';
    app.run();
});

phina.define('Cursor', {
    superClass:CanvasElement,
    init:function(){
        this.superInit();
        var s = CursorSprite();
        this.addChild(s);
        s.setPosition(s.width/2 - 8, s.height/2 - 8);
    }    
});

phina.define('CursorSprite', {
    superClass:Sprite,
    init:function(){
        var s = TriangleShape({
            fill: 'skyblue',
            stroke: 'blue'
        });
        s.prerender(s.canvas);
        s.render(s.canvas);
        this.superInit(s.canvas);
        this.rotation = -40;
        this.tweener.to({
            scaleX:-0.5
        }, 500, 'easeInOutCirc')
        .to({
            scaleX:0.5            
        }, 500, 'easeInOutCirc').setLoop(true);
        this.scaleX = 0.5;
    },
});