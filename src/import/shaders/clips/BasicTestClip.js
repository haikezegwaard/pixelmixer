/**
 * Basic test shader in ap clip harness
 */


ap.clips.BasicTestClip = {

	id: 4,

	fragmentMain: [
		

		"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" // Output RGB Red

		].join("\n")

};