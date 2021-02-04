const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const box = new THREE.BoxGeometry(1,1,1);
const boxMat = new THREE.MeshBasicMaterial( {
    color: 0xff0000,
    wireframe: true
});
// const boxMat = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const boxMesh = new THREE.Mesh(box, boxMat);
scene.add( boxMesh );
camera.position.z = 5;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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

