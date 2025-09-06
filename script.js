// Scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 300 / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(300, 300);
document.getElementById('bitcoin-container').appendChild(renderer.domElement);

// Cube simple avec texture Bitcoin
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Bitcoin texture
const loader = new THREE.TextureLoader();
loader.crossOrigin = '';
loader.load('https://cryptologos.cc/logos/bitcoin-btc-logo.png', function(texture){
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 3;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.02;
        cube.rotation.x += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
