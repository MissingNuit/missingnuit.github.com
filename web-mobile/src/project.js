require=function t(n,e,i){function s(o,r){if(!e[o]){if(!n[o]){var h="function"==typeof require&&require;if(!r&&h)return h(o,!0);if(c)return c(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var a=e[o]={exports:{}};n[o][0].call(a.exports,function(t){var e=n[o][1][t];return s(e?e:t)},a,a.exports,t,n,e,i)}return e[o].exports}for(var c="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({bgSwitch:[function(t,n,e){"use strict";cc._RFpush(n,"3b5f7r4JIJIH4XeLyxIT3CO","bgSwitch"),cc.Class({"extends":cc.Component,properties:{bg:{type:cc.Node,"default":[]}},onLoad:function(){this.now=0,this.ne=1;var t=function(){this.ne=Math.round(cc.random0To1()*(this.bg.length-1)),this.ne===this.now&&(this.ne===this.bg.length-1?this.ne--:0===this.ne?this.ne++:this.ne++),this.bg[this.now].runAction(cc.fadeOut(2)),this.bg[this.ne].runAction(cc.fadeIn(2)),this.now=this.ne};this.schedule(t,10)}}),cc._RFpop()},{}],btnEffect:[function(t,n,e){"use strict";cc._RFpush(n,"d3464Q2ZUhCLrAJSzlAFnKg","btnEffect"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){function t(t){this.stopAllActions(),this.runAction(e.scaleDownAction)}function n(t){this.stopAllActions(),this.runAction(e.scaleUpAction)}var e=this;this.pressedScale=.85,this.transDuration=.1,e.initScale=this.node.scale,e.button=e.getComponent(cc.Button),e.scaleDownAction=cc.scaleTo(e.transDuration,e.pressedScale),e.scaleUpAction=cc.scaleTo(e.transDuration,e.initScale),this.node.on("touchstart",t,this.node),this.node.on("touchend",n,this.node),this.node.on("touchcancel",n,this.node)}}),cc._RFpop()},{}],btn:[function(t,n,e){"use strict";cc._RFpush(n,"9d136R8lCFBMoMhkEJjXpZ9","btn"),cc.Class({"extends":cc.Component,properties:{menu:cc.Node},onLoad:function(){this.on=!1,this.act=cc.moveTo(.5,-230,this.menu.y)},show:function(){return this.on?(this.menu.runAction(cc.moveTo(.5,-500,this.menu.y)),void(this.on=!1)):(this.menu.runAction(this.act),void(this.on=!0))},hide:function(){}}),cc._RFpop()},{}],ctrl:[function(t,n,e){"use strict";cc._RFpush(n,"5a784T9kmVHB7eFYD0I+jsr","ctrl");var i=t("lsj"),s=t("menu");cc.Class({"extends":cc.Component,properties:{music:{"default":[],url:cc.AudioClip},lsj:i,menu:s},onLoad:function(){this.menu.init(this),this.lsj.init(this),console.log("ok"),this.id=cc.audioEngine.play(this.music[3],!0),this.volume=cc.audioEngine.getVolume(this.id)},resumeMusic:function(){cc.audioEngine.resume(this.id),cc.audioEngine.setVolume(this.id,1),this.volume=1},volumeCtrl:function(){return this.volume<=.2?(cc.audioEngine.pause(this.id),void this.unschedule(this.volumeCtrl)):(this.volume-=.1,void cc.audioEngine.setVolume(this.id,this.volume))},closeVolum:function(){this.schedule(this.volumeCtrl,.3)},changeMusic:function(t){cc.audioEngine.uncacheAll(),cc.audioEngine.stopAll(),this.lsj.engine=0,this.id=cc.audioEngine.play(this.music[t-1],!0),this.pauseMusic()},pauseMusic:function(){cc.audioEngine.pause(this.id)}}),cc._RFpop()},{lsj:"lsj",menu:"menu"}],lsj:[function(t,n,e){"use strict";cc._RFpush(n,"925e9H7dshHzp3MQ0/0JCJx","lsj"),cc.Class({"extends":cc.Component,properties:{canvas:cc.Node,text:cc.Label,engineBar:cc.ProgressBar,days:cc.Sprite,lsj:cc.Node,help:cc.Node},init:function(t){this.ctrl=t},setBar:function(){this.engineBar.progress=this.engine/150},onLoad:function(){this.hideOn=!1,console.log(this.node.x+" "+this.node.y),this.helpOn=!1,this.engine=25,this.setBar(),this.schedule(this.engineCtrl,1),this.act=cc.rotateBy(2,360).repeatForever(),this.actEnd=cc.rotateBy(3,360),this.actLast=cc.rotateBy(1,60),this.node.runAction(this.act);var t,n,e,i,s,c,o=this;o.canvas.on(cc.Node.EventType.TOUCH_START,function(e){var i=e.getTouches(),c=i[0].getLocation();s=o.lsj.parent.convertToNodeSpaceAR(c),t=s.x,n=s.y},o.node),o.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(t){var n=t.getTouches();n[0].getLocation()},o.node),o.canvas.on(cc.Node.EventType.TOUCH_END,function(s){var r=s.getTouches(),h=r[0].getLocation();c=o.lsj.parent.convertToNodeSpaceAR(h),e=c.x,i=c.y,(e>t+100&&n>o.lsj.y&&i>o.lsj.y||e<t-100&&n<o.lsj.y&&i<o.lsj.y||i>n+100&&t<o.lsj.x&&e<o.lsj.x||i<n-100&&t>o.lsj.x&&e>o.lsj.x)&&(o.engine+=1,o.setText(),this.engine>3&&(o.node.stopAllActions(),o.node.runAction(this.act)),o.setBar())},o.node)},engineCtrl:function(){var t=cc.audioEngine.getState(this.ctrl.id);this.engine-=1,this.engine<0&&(this.engine=0,2!==t&&this.ctrl.pauseMusic()),this.setText(),this.setBar(),3==this.engine&&(this.node.stopAllActions(),this.node.runAction(this.actEnd),this.ctrl.closeVolum()),1==this.engine&&(this.node.stopAllActions(),this.node.runAction(this.actLast)),2==t&&this.engine>3&&(this.ctrl.resumeMusic(),this.node.runAction(this.act))},setText:function(){this.text.string=this.engine},stopAll:function(){this.node.stopAllActions()},click:function(t,n){return this.node.stopAllActions(),"jiangnan"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/jiangnan.png")),void this.ctrl.changeMusic(1)):"hua"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/hua.png")),void this.ctrl.changeMusic(2)):"sanshi"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/sanshi.png")),void this.ctrl.changeMusic(3)):"days"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/days.png")),void this.ctrl.changeMusic(4)):"snow"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/snow.png")),void this.ctrl.changeMusic(5)):void 0},dianfei:function(){this.engine=50},clickHelp:function(){this.helpOn?(this.help.active=!1,this.helpOn=!1):(this.help.active=!0,this.helpOn=!0)},clickHide:function(){this.hideOn?(this.hideOn=!1,this.lsj.opacity=255):(this.lsj.opacity=20,this.hideOn=!0)}}),cc._RFpop()},{}],menu:[function(t,n,e){"use strict";cc._RFpush(n,"ea65amyMCdO/ahUL9ujsg1N","menu"),cc.Class({"extends":cc.Component,properties:{days:cc.Sprite},onLoad:function(){},init:function(t){this.ctrl=t,console.log("init ok")},click:function(t,n){return"jiangnan"==n?(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/jiangnan.png")),void this.ctrl.changeMusic(1)):"sanshi"==n?void(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/sanshi.png"))):void("days"==n&&(this.days.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/days.png"))))}}),cc._RFpop()},{}]},{},["bgSwitch","ctrl","lsj","btn","btnEffect","menu"]);