/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */

THREE.LuminosityShader = {

	uniforms: {

		"tDiffuse": { value: null }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"#include <common>",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv ) ;",
			"texel.r = clamp( texel.r, 0.25, 0.7 );",
			"texel.g = clamp( texel.g, 0.25, 0.7 );",
			"texel.b = clamp( texel.b, 0.25, 0.7 );",

	//		"texel.r = texel.r > 0.8 ? texel.r : texel.r/1.5;",
	//		"texel.g = texel.g > 0.8 ? texel.g : texel.g/1.5;",
	//		"texel.b = texel.b > 0.8 ? texel.b : texel.b/1.5;;",
			                                                                                          

		//	"vec3 luma = vec3( 0.599, 0.187, 0.0064 );",

		//	"float l = dot( texel.xyz, luma );",


			"float l1 = linearToRelativeLuminance( texel.rgb * vec3(0.55,0., 0.)) ;",
			"float l2 = linearToRelativeLuminance( texel.rgb * vec3(0.,0.9,0.)) ;",
			"float l3 = linearToRelativeLuminance( texel.rgb * vec3(0.,0.,0.9)) ;",


			"float l = linearToRelativeLuminance( texel.rgb ) ;",
			"gl_FragColor =  vec4(l1, l2, 0, l1+l2 )   ;",
//			"gl_FragColor =  vec4((texel.r+texel.g)/2., (texel.r+texel.g)/2., (texel.r+texel.g)/2., texel.w)   ;",


		"}"

	].join( "\n" )

};
