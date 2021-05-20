
// get canvas
const canvas2 = document.getElementById('apt-e');

// create Babylon engine
const engine2 = new BABYLON.Engine(canvas2,true);

function createScene(){
    // create scene
    const scene = new BABYLON.Scene(engine2);
    
    // create camera
    const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0,0,-8),scene);


    // enable mouse/arrow key control for movement of camera
    camera.attachControl(canvas2, true);
    // camera.attachControl(htmlElement, Boolean for whether or not camera is attached )
    
    
    // create light
    const light = new BABYLON.HemisphericLight('light', /*light appears above camera on Y axis*/ new BABYLON.Vector3(0,-1,0), scene);
    
    // create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        size:1
    }, scene);
   
    // Scaling and Rotation can be set either on an individual axes or in a Vector3 as seen on the sphere
    box.scaling = new BABYLON.Vector3(5,5,0.025)
    box.rotation = new BABYLON.Vector3(0,0.25,0.125)




    // create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        diameter:2
    }, scene);
    sphere.position = new BABYLON.Vector3(5,0,0);

    // Scaling set via Vector3
    sphere.scaling = new BABYLON.Vector3(1,0.1,1);
    // squashing that sphere on the y axis

    sphere.rotation = new BABYLON.Vector3(0.5,2,0);


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

 

    // crete a texture
    const material2 = new BABYLON.StandardMaterial('material2', scene);

    
   // applying material to box
   box.material = material2;
    
    // applying an image as a texture
    material2.diffuseTexture = new BABYLON.Texture('img/apt-e.jpeg', scene)

    sphere.material = material2;
    return scene; 
    // provides ambient light, affects shading of 3D objects
}

// create scene
const mainScene2 = createScene();

// Scenes get rendered into the render loop
engine2.runRenderLoop(()=>{
    mainScene2.render();
});
