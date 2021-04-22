var CameraMove=pc.createScript("cameraMove");CameraMove.prototype.initialize=function(){this.f_click=!1,this.cameraEntity=this.entity,this.pos=this.cameraEntity.getPosition(),this.app.mouse.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this),this.app.mouse.on(pc.EVENT_MOUSEUP,this.onMouseUp,this),this.app.mouse.on(pc.EVENT_MOUSEMOVE,this.onMouseMove,this)},CameraMove.prototype.update=function(t){},CameraMove.prototype.onMouseDown=function(t){t.button===pc.MOUSEBUTTON_LEFT&&(this.f_click=!0),t.button,pc.MOUSEBUTTON_MIDDLE,t.button,pc.MOUSEBUTTON_RIGHT},CameraMove.prototype.onMouseUp=function(t){t.button===pc.MOUSEBUTTON_LEFT&&(this.f_click=!1),t.button,pc.MOUSEBUTTON_MIDDLE,t.button,pc.MOUSEBUTTON_RIGHT},CameraMove.prototype.onMouseMove=function(t){if(this.f_click){var o=t.dx/500,i=t.dy/500,e=this.pos.x-o,s=this.pos.z-i;this.cameraEntity.setPosition(e,this.pos.y,s)}};var Hotspot=pc.createScript("hotspot");Hotspot.attributes.add("cameraEntity",{type:"entity",title:"Camera Entity"}),Hotspot.attributes.add("radius",{type:"number",title:"Radius"}),Hotspot.prototype.initialize=function(){this.hitArea=new pc.BoundingSphere(this.entity.getPosition(),this.radius),this.ray=new pc.Ray,this.directionToCamera=new pc.Vec3,this.app.mouse.on(pc.EVENT_MOUSEMOVE,this.onMouseHover,this),this.app.mouse.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this)},Hotspot.prototype.doRayCast=function(t){this.hitArea.intersectsRay(this.ray)&&(console.log("click!!",this.entity.tags._list[0]),globalPc.scene=this.entity.tags._list[0].replace(/[^0-9]/g,""))},Hotspot.prototype.onMouseHover=function(t){this.cameraEntity.camera.screenToWorld(t.x,t.y,this.cameraEntity.camera.farClip,this.ray.direction),this.ray.origin.copy(this.cameraEntity.getPosition()),this.ray.direction.sub(this.ray.origin).normalize(),this.hitArea.intersectsRay(this.ray)&&console.log("hover")},Hotspot.prototype.onMouseDown=function(t){t.button==pc.MOUSEBUTTON_LEFT&&this.doRayCast(t)};var container,Addhtml=pc.createScript("addhtml");function btnClose(e){e.preventDefault(),globalPc.scene=0,container.classList.remove("is-open");for(var t=document.getElementsByClassName("section"),s=0;s<t.length;s++)t[s].classList.contains("is-current")&&t[s].classList.remove("is-current")}Addhtml.attributes.add("css",{type:"asset",assetType:"css",title:"CSS Style"}),Addhtml.attributes.add("header",{type:"asset",assetType:"html",title:"HTML Header"}),Addhtml.attributes.add("scene1",{type:"asset",assetType:"html",title:"HTML Scene1"}),Addhtml.attributes.add("scene2",{type:"asset",assetType:"html",title:"HTML Scene2"}),Addhtml.attributes.add("scene3",{type:"asset",assetType:"html",title:"HTML Scene3"}),Addhtml.prototype.initialize=function(){globalPc.scene=0;for(var e=[],t=Addhtml.attributes.index,s=0;s<Object.keys(t).length;s++)Object.keys(t)[s].indexOf("scene")||e.push(Object.keys(t)[s]);var a=document.getElementsByTagName("head")[0],n=document.getElementsByTagName("body")[0],c=document.createElement("div");c.className="wrapper",n.appendChild(c),(container=document.createElement("main")).className="container",c.appendChild(container);var l=document.createElement("style");c.insertAdjacentHTML("afterbegin",this.header.resource),l.append(this.css._resources[0]),a.appendChild(l);for(var i=0;i<e.length;i++)container.insertAdjacentHTML("beforeend",this[e[i]].resource)},globalPc={},Addhtml.prototype.update=function(e){if(Number(globalPc.scene)>0&&!container.classList.contains("is-open")){container.classList.add("is-open");for(var t=document.getElementsByClassName("section"),s=0;s<t.length;s++)t[s].classList.contains("is-current")&&t[s].classList.remove("is-current");t[globalPc.scene-1].classList.add("is-current"),document.getElementsByClassName("section_close")[globalPc.scene-1].addEventListener("click",btnClose,!1)}};