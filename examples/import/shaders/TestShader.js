/**
 * Basic test shader in ap clip harness
 */


PX.clips.TestShader = {

	fragmentMain: [
        	"gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);" // Output RGB Green for now
		].join("\n")

};
