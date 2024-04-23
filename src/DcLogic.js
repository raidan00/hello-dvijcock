import * as t from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ammoTmp, defaultLights, MoveController, ArrowHelper } from 'dvijcock';

export default class{
	constructor(){}
	init(){
		//get dcWorld to scoped variable
		let dcWorld = this.dcWorld;
		//Three.js camera. Aspect will be updated by dvijcock when dom element size changed
		dcWorld.camera = new t.PerspectiveCamera( 65, 1/*dc will set acpect*/, 0.1, 30000 );
		//Set camera position
		dcWorld.camera.position.set(20,7,0);
		//Three.js orbit controls for camera rotation by user
		this.controls = new OrbitControls(dcWorld.camera, dcWorld.renderer.domElement);
		//dvijcock have default lights
		dcWorld.scene.add(defaultLights);

		//Creation of Three.js object
		const platform = new t.Mesh( new t.BoxGeometry(), new t.MeshStandardMaterial({color: 0xa15c03}) );
		platform.scale.set(10, 1, 10);
		platform.rotation.x = 0.3
		//Inform Dvijok this is static physics object. Shape this object will get from Three.js object by geometry and scale
		platform.dcData = {
			btShape: true,
			mass: 0,
		};
		//add physics object to physics world
		dcWorld.addObj(platform);
		
		this.ballInterval = setInterval(()=>{
			const ball = new t.Mesh( new t.SphereGeometry(), new t.MeshStandardMaterial({color: "grey"}) );
			ball.position.set(0,10,0);
			//Dynamic physics object have mass
			ball.dcData = {
				btShape: true,
				mass: 1,
			};
			dcWorld.addObj(ball);
		}, 700);
	}
	//free resources
	destroy(){
		this.controls.dispose()
		clearInterval(this.ballInterval);
	}
};
