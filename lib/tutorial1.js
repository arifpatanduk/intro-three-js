const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const box = new THREE.BoxGeometry();
const boxMat = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const boxMesh = new THREE.Mesh(box, boxMat);
scene.add( boxMesh );
camera.position.z = 5;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();