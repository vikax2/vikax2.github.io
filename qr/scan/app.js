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

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16)+" ";
    }
    return hex;
}

function DoTo4(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        let cc=str.charCodeAt(i).toString(16);

        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
	
	function utf8_to_str(a) {
		let s = ''; 
		let last_h=0;
		for(let i=0 ; i<a.length; i++) { 
			let h = a.charCodeAt(i); 
			if (( h == 0xd0 ) || (h == 0xd1) || (h == 0xc2))  {
				if (h == 0xd0) last_h = 0xd0;
				if (h == 0xd1) last_h = 0xd1;
				if (h == 0xc2) last_h = 0xc2;
			} else {	
				if ((last_h == 0xd0 ) || (last_h == 0xd1 ) || (last_h == 0xc2 )) {
					if (last_h == 0xd0 )  s += String.fromCharCode(0x400 + (h & 0x3f));
					if (last_h == 0xd1 )  s += String.fromCharCode(0x440 + (h & 0x3f));
					if (last_h == 0xc2 )  s += String.fromCharCode(0x00 + (h));
				} else {
					s += a[i];
				}
				last_h = h;
			}
			// alert("h="+h);
		} 


//let s0="&#x41f&#x410&#x41e &#x411&#x410&#x428&#x418&#x041d&#x424&#x41e&#x420&#x41c&#x421&#x412&#x42f&#x417&#x42c";
//alert(" s0="+s0);
//document.getElementById("info_qr_scan").innerHTML = s0;
//alert(" hex s0="+convertToHex(s0));


//alert(" s="+s);
//document.getElementById("info_qr_scan").innerHTML = s;
		return s; 
	} 


function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16)+" ";
    }
    return hex;
}

function DoTo4(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        let cc=str.charCodeAt(i).toString(16);

        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}

//document.getElementById("info_qr_scan").innerHTML = content;

//  alert("111 "+content);

        content =   utf8_to_str(content);
//  alert("222 "+content);

//	document.getElementById("info_qr_scan").innerHTML = content;
//        content =   convertToHex(content);

//alert(content);
//alert("ПРИВЕТ");	
//alert(convertToHex("ПРИВЕТ"));	 // 41f 420 418 412 415 422
//alert((encodeURIComponent(content)));	
//alert(decodeURIComponent(encodeURIComponent(content)));	

	let ff1 =  content.split("&");
	let ff2 =  content.split("|");
	if (ff1.length >1 ) {
		alert("content:"+ ff1.join("&\n<br>"));
//      		self.scans.unshift({ date: +(Date.now()), content: ff1.join("&\n<br>") });
	}

	if (ff2.length >1 ) {
		alert("content:"+ ff2.join("|\n<br>"));
//      		self.scans.unshift({ date: +(Date.now()), content: ff2.join("|\n<br>") });
	}

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