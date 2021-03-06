#version 120

varying vec2 texCoord;
uniform sampler2D sampler;
uniform vec3 tint;
uniform vec3 ambientLight;

void main() {
    vec4 color = vec4(tint * ambientLight, 1.0);
    vec4 texColor = texture2D(sampler, texCoord);
    if(texColor != vec4(0.0, 0.0, 0.0, 1.0))
        color *= texColor;
    gl_FragColor = color;
}