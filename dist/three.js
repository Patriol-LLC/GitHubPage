import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'

const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
})

const cube = new THREE.Mesh(geometry, material)
cube.position.set(0,0,0)
scene.add(cube)

// BoilerPlate Code
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1,100)
camera.position.set(0,-0.5,3)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.z += 0.1
    renderer.render(scene, camera)
}

animate()