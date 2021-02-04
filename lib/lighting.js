var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
var renderer = new THREE.WebGLRenderer({ antialias: true });

scene.background = new THREE.Color('0x0a0a0a');

renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.z += 15;
document.body.appendChild( renderer.domElement );

var box = new THREE.BoxGeometry(1,1,1);
var boxMat = new THREE.MeshPhongMaterial( {
    color: 0xff0000
});

var boxMesh = new THREE.Mesh(box, boxMat);
scene.add( boxMesh );

var plane = new THREE.PlaneGeometry(1000,1000,500,500);
var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xaaffaa
});

var planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.position.set(0,-1,0);
planeMesh.rotation.x += -Math.PI/2;
scene.add(planeMesh);


window.addEventListener('resize', function() {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    camera.aspect = this.window.innerWidth/this.window.innerHeight;
    camera.updateProjectionMatrix();
});

function animate() {
    boxMesh.rotation.z += 0.01;
    boxMesh.rotation.x += 0.01;
	renderer.render( scene, camera );
    requestAnimationFrame( animate );
}
animate();

