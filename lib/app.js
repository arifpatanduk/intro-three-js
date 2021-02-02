// let scene = new THREE.scene();
// let cam = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
// );

// cam.position.z += 5;
// scene.background = new THREE.Color(0x0a0a0a);
// let renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// let cGeo = new THREE.BoxGeometry(1,1,1);
// let cMat = new THREE.MeshBasicMaterial({color:0xff0000});
// let cMesh = new THREE.Mesh(cGeo, cMat);
// scene.add(cMesh);

// let planeGeo = new THREE.PlaneGeometry(100,100);
// let planeMesh = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({color:0xffffff}));
// planeMesh.rotation.x -= Math.PI/2;
// planeMesh.position.y -= 0.5;
// scene.add(planeMesh);

// function update() {
//     renderer.render(scene, cam);
//     requestAnimationFrame(update);
// }

// update();