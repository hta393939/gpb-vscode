/**
 * @file renderer.js
 */
// need threejs

(function(_global) {

class Renderer {
    constructor() {

    }

    async init(param) {
        const renderer = new THREE.WebGLRenderer({
            preserveDrawingBuffer: true,
            canvas: param.canvas,
        });
        this.renderer = renderer;

        const scene = new THREE.Scene();
        this.scene = scene;

        {
            const camera = new THREE.PerspectiveCamera(45, 16/9, 1, 1000);
            this.camera = camera;
            camera.position.set(1, 2, 5);
            camera.lookAt(new THREE.Vector3(0, 1, 0));
        }

        { // object, dom
            const control = new THREE.OrbitControls(this.camera, renderer.domElement);
            this.control = control;
        }
        
        if (false) { // object, dom
            const control = new THREE.TrackballControls(this.camera, param.canvas);
            this.control = control;
        }

        {
            const grid = new THREE.GridHelper(20, 10);
            grid.name = 'grid';
            scene.add(grid);
        }
    }

/**
 * 外部から呼ぶ
 */
    update() {
        if (this.control) {
            this.control.update();
        }

        if (this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

}

_global.Renderer = Renderer;

})(globalThis);


