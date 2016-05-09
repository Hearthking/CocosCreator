module.exports ="precision mediump float;\n"
				+"varying vec2 v_texCoord;\n"
				+"uniform float time;\n"
				+"uniform vec2 mouse_touch;\n"
				+"uniform vec2 resolution;\n"
				+"\n"
				+"void main( void ) {\n"
				+"  float t=time;\n"
				+"  vec2 touch=mouse_touch;\n"
				+"  vec2 resolution2s=resolution;\n"
				+"  vec2 position = ((gl_FragCoord.xy / resolution.xy) * 2. - 1.) * vec2(resolution.x / resolution.y, 1.0);\n"
				+"  float d = abs(0.1 + length(position) - 0.5 * abs(sin(time))) * 5.0;\n"
				+"  vec3 sumColor = vec3(0.0, 0.0, 0.0);\n"
				+"	sumColor += texture2D(CC_Texture0, v_texCoord).rgb;\n"
				+"	gl_FragColor = vec4(sumColor.r/d, sumColor.g, sumColor.b, mouse_touch.x/800.0 );\n"
				+"\n"
				+"}\n"