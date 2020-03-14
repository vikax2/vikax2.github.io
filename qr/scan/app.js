var app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function () {
    var self = this;
    self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });
    self.scanner.addListener('scan', function (content, image) {
	let ff =  content.split("&");
alert("content:"+ ff.join("&\n<br>"));

      self.scans.unshift({ date: +(Date.now()), content: ff.join("&\n<br>") });
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      self.cameras = cameras;
      if (cameras.length > 0) {
        self.activeCameraId = cameras[cameras.length-1].id;
        self.scanner.start(cameras[cameras.length-1]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  },
  methods: {
    formatName: function (name) {
      return name || '(unknown)';
    },
    selectCamera: function (camera) {
      this.activeCameraId = camera.id;
      this.scanner.start(camera);
    }
  }
});

/*

//alert(" window.addEventListener('devicelight'");
//window.addEventListener('devicelight', function(event) {

window.ondevicelight = (event) => {
  var html = document.getElementsByTagName('html')[0];

  if (event.value < 50) {
	alert(" devicelight() event.value < 50");
    html.classList.add('darklight');
    html.classList.remove('brightlight');
  } else {
	alert(" devicelight() event.value >= 50");
    html.classList.add('brightlight');
    html.classList.remove('darklight');
  }
};



//alert("window.ondevicelight="+window.ondevicelight);


if (typeof Gyroscope === "function") {
    // run in circles...
//   alert('Gyroscope='+Gyroscope );


let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => {
  alert("Angular velocity = " + gyroscope.x+","+gyroscope.y+","+gyroscope.z);
});

gyroscope.start();

}

if ("ProximitySensor" in window) {
    // watch out!
   alert("ProximitySensor in  window");
}

if (window.AmbientLightSensor) {
   alert("window.AmbientLightSensor");
}



*/


/*
var scene = new THREE.Scene();

alert("111");
let torusGeometry = new THREE.TorusGeometry(7, 1.6, 4, 3, 6.3);
let material = new THREE.MeshBasicMaterial({ color: 0x0071C5 });
let torus = new THREE.Mesh(torusGeometry, material);
scene.add(torus);
alert("222");

// Update mesh rotation using quaternion.
const sensorAbs = new AbsoluteOrientationSensor();
sensorAbs.onreading = () => torus.quaternion.fromArray(sensorAbs.quaternion);
sensorAbs.start();
alert("333 sensorAbs="+sensorAbs);

// Update mesh rotation using rotation matrix.
const sensorRel = new RelativeOrientationSensor();
let rotationMatrix = new Float32Array(16);
alert("444 sensorRel="+sensorRel);

try {
sensorRel.onreading = () => {
     //alert("777 rotationMatrix"+rotationMatrix);
    sensorRel.populateMatrix(rotationMatrix);
    torus.matrix.fromArray(rotationMatrix);
     //alert("888 rotationMatrix"+rotationMatrix);
}

alert("555");

sensorRel.start();

alert("666");

} catch (e) {
 	alert("999 error e.code="+e.code);
}
*/