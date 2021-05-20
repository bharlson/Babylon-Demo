
// get canvas
const canvas = document.getElementById('renderCanvas');

// create Babylon engine
const engine = new BABYLON.Engine(canvas,true);
// links the Babylon engine with your canvas element

function createScene(){
    // create scene
    const scene = new BABYLON.Scene(engine);
    
    // create camera
    const camera = new BABYLON.FreeCamera(/*name*/ 'camera', /*position)*/ new BABYLON.Vector3(0,0,-25),scene);
    // the camera is your view into the 3D environment
    // new BABYLON.Vector3(x,y,z) : allows you to set 3D coordinates

    // enable mouse/arrow key control for movement of camera
    camera.attachControl(canvas, true);
    // camera.attachControl(htmlElement, Boolean for whether or not camera is attached )
    
    
    // create light
    const light = new BABYLON.HemisphericLight('light', /*light appears above camera on Y axis*/ new BABYLON.Vector3(0,1,0), scene);
    
    // create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        size:1
    }, scene);
    // MeshBuilder provides a variety of shape building functions for common shapes or more complex ones set by arguments
    // Create[Shape]('name', { options as key pairs}, scene)

    // Scaling and Rotation can be set either on an individual axes or in a Vector3 as seen on the sphere
    box.scaling.y = 2;


    // set box rotation 
    box.rotation.x = 2;
    box.rotation.y = 4;



    // create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        segments:24,
        diameter:2
        // segments are the number of horizontal pieces comprising a 3D shape, the default is 32
        // the fewer segments the more pixely/Halflife 1-esque it looks 

    }, scene);
    sphere.position = new BABYLON.Vector3(5,0,0);

    // Scaling set via Vector3
    sphere.scaling = new BABYLON.Vector3(1,0.5,1);
    // squashing that sphere on the y axis

    sphere.rotation = new BABYLON.Vector3(0.5,2,0);
    


    // create a plane
    const plane = BABYLON.MeshBuilder.CreatePlane('plane', {
        size:1
    }, scene);
    plane.position = new BABYLON.Vector3(-5,0,0);

    // create a line
    const linePoints = [
        new BABYLON.Vector3(2,0,0),
        new BABYLON.Vector3(2,1,1),
        new BABYLON.Vector3(2,1,0)
    ];

    // setting endpoints for lines to be drawn between
    const lines = BABYLON.MeshBuilder.CreateLines('lines', {
        points:linePoints
    }, scene);

    // create a material
    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1,0,0);
    // material: the color, 

    // There are four possible ways that a material can react to light.
    // https://doc.babylonjs.com/divingDeeper/materials/using/materials_introduction
    // Diffuse - the basic color or texture of the material as viewed under a light;
    // Specular - the highlight given to the material by a light;
    // Emissive - the color or texture of the material as if self lit;
    // Ambient - the color or texture of the material lit by the environmental background lighting.
    
    // BABYLON.Color3(r,g,b);
    material.emissiveColor = new BABYLON.Color3(0,2,0);

    // applying material to box
    box.material = material;

    // crete a texture
    const material2 = new BABYLON.StandardMaterial('material2', scene);


    // applying an image as a texture
    material2.diffuseTexture = new BABYLON.Texture('img/verma-sam.jpg', scene)

    sphere.material = material2;
    return scene; 
    // provides ambient light, affects shading of 3D objects
}

// create scene
const mainScene = createScene();

// Scenes get rendered into the render loop
engine.runRenderLoop(()=>{
    mainScene.render();
});
