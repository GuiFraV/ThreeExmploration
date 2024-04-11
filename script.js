import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

for(let i = 0; i < 100; i++){


    const color = new THREE.Color(Math.random(), Math.random(), Math.random())

    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: color })
    )


    cube.position.x = (Math.random() - 0.5) * 10
    cube.position.y = (Math.random() - 0.5) * 10
    cube.position.z = (Math.random() - 0.5) * 10

    group.add(cube)


}

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 7
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


const clock = new THREE.Clock()

const tick = () => {


    const elapsedTime = clock.getElapsedTime()

    group.children.forEach((c) => {
        c.rotation.y = elapsedTime
    })

    group.rotation.z = elapsedTime

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
    
}

tick();
