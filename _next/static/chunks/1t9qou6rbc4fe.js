(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17669,e=>{"use strict";var a=e.i(43476),t=e.i(71645);let r={equilibrio:{titulo:"En equilibrio",texto:"Seis cuerdas sostienen una sola carga. Ninguna la lleva entera: el peso se reparte, y las del centro de los lados cargan más que las esquinas."},tension:{titulo:"La tensión cambia",texto:"Al subir o bajar un apoyo, el peso no desaparece: se desplaza. Las cuerdas vecinas lo recogen y la carga busca el punto más bajo de la tela."},desequilibrio:{titulo:"Desequilibrio",texto:"Una cuerda suelta deja su parte a las demás. La tela cede, la carga se recoloca y el conjunto encuentra otro equilibrio, más frágil."},restaurado:{titulo:"Equilibrio restaurado",texto:"Todas las cuerdas vuelven a su largo y la tela recupera, poco a poco, la forma del principio."}},o=[[0,0],[16,0],[32,0],[32,22],[16,22],[0,22]],l=1/60/10,i=1/60/10*(1/60/10),n=1/7,s=379,c=(e,a)=>33*a+e,u=(e,a)=>[(e-16)*.11,0,(a-11)*.11];class d{p=new Float32Array(2283);normal=new Float32Array(2277);cavidad=new Float32Array(759);cuerdas;q=new Float32Array(2283);v=new Float32Array(2283);w=new Float32Array(761);par;largo;blando;eje=1;freno=1.5;inicial=null;recuerdo=0;cabeza=new Int32Array(4096);siguiente=new Int32Array(759);foto=null;cuenta=0;quietud=0;constructor(){let e=[],a=[],t=[],r=(r,o,l)=>{e.push(r,o),t.push(l/i);let[n,,s]=u(r%33,Math.floor(r/33)),[c,,d]=u(o%33,Math.floor(o/33));a.push(Math.hypot(n-c,s-d))};for(let e=0;e<23;e++)for(let a=0;a<33;a++)a<32&&r(c(a,e),c(a+1,e),0),e<22&&r(c(a,e),c(a,e+1),0),a<32&&e<22&&(r(c(a,e),c(a+1,e+1),4e-5),r(c(a+1,e),c(a,e+1),4e-5)),a<31&&r(c(a,e),c(a+2,e),6e-4),e<21&&r(c(a,e),c(a,e+2),6e-4);this.par=Int32Array.from(e),this.largo=Float32Array.from(a),this.blando=Float32Array.from(t),this.cuerdas=o.map(([e,a])=>{let t=u(e,a),r=16===e,o=[t[0]*(r?1:1.12),3.6,t[2]*(r?1.08:1.2)],l=Math.hypot(o[0]-t[0],o[1]-t[1],o[2]-t[2])+.3*!!r;return{idx:c(e,a),ancla:o,l0:l,l:l,meta:l,suelta:!1,volviendo:!1,e:[...t],ev:[0,0,0],fuerza:0,acc:0}}),this.reiniciar()}reiniciar(){let{p:e,q:a,v:t,w:r}=this;for(let t=0;t<23;t++)for(let o=0;o<33;o++){let l=3*c(o,t),i=u(o,t);e[l]=a[l]=i[0],e[l+1]=a[l+1]=i[1],e[l+2]=a[l+2]=i[2],r[c(o,t)]=50}let o=2277,l=2280;for(let i of(e[2277]=a[o]=-.4643323177882551,e[o+1]=a[o+1]=.45,e[o+2]=a[o+2]=-.18546023470649134,e[l]=a[l]=.4643323177882551,e[l+1]=a[l+1]=.45,e[l+2]=a[l+2]=.18546023470649134,r[759]=r[760]=n,t.fill(0),this.cuerdas))i.l=i.meta=i.l0,i.suelta=i.volviendo=!1,i.fuerza=i.acc=0;this.quietud=0}asentar(e,a=7){let t=this.freno;this.freno=a;for(let a=0;a<e;a++)this.avanzar();this.freno=t}fijarInicial(){this.inicial=this.p.slice()}restaurar(){this.cuerdas.forEach((e,a)=>{e.meta=e.l0,this.atar(a)}),this.recuerdo=2.4*!!this.inicial,this.quietud=0}get restaurando(){return this.recuerdo>0}puedeSoltar(e){let a=this.cuerdas.length,t=e=>this.cuerdas[e].suelta&&!this.cuerdas[e].volviendo;return!(this.cuerdas[e].suelta||t((e+1)%a)||t((e+a-1)%a))&&this.cuerdas.filter((e,a)=>t(a)).length<2}altura(e,a){let t=this.cuerdas[e];t.meta=t.l0-Math.min(1,Math.max(-.8,a)),this.quietud=0}soltar(e){let a=this.cuerdas[e];if(a.suelta)return;let t=3*a.idx;a.e=[this.p[t],this.p[t+1],this.p[t+2]],a.ev=[0,0,0],a.suelta=!0,a.volviendo=!1,this.quietud=0}atar(e){let a=this.cuerdas[e];a.suelta&&(a.volviendo=!0),this.quietud=0}avanzar(){let{p:e,q:a,v:t,par:r,largo:o,blando:n}=this,s=Math.max(0,1-this.freno*l);for(let e of this.cuerdas)e.acc=0;for(let i=0;i<10;i++){for(let r=0;r<761;r++){let o=3*r;a[o]=e[o],a[o+1]=e[o+1],a[o+2]=e[o+2],t[o+1]-=9.8*l,e[o]+=t[o]*l,e[o+1]+=t[o+1]*l,e[o+2]+=t[o+2]*l}for(let a=0,t=o.length;a<t;a++){let t=3*r[2*a],l=3*r[2*a+1],i=e[l]-e[t],s=e[l+1]-e[t+1],c=e[l+2]-e[t+2],u=Math.sqrt(i*i+s*s+c*c);if(u<1e-9)continue;let d=50*(-(u-o[a])/(100+n[a]))/u;e[t]-=i*d,e[t+1]-=s*d,e[t+2]-=c*d,e[l]+=i*d,e[l+1]+=s*d,e[l+2]+=c*d}if(this.carga(),i%5==4&&this.autocolision(),this.recuerdo>0&&this.inicial){let a=1-this.recuerdo/2.4,t=Math.min(1,a*a*(3-2*a)*5*l),r=this.inicial;for(let a=0;a<2283;a++)e[a]+=(r[a]-e[a])*t}for(let a of this.cuerdas){if(a.suelta)continue;let t=3*a.idx,r=e[t]-a.ancla[0],o=e[t+1]-a.ancla[1],l=e[t+2]-a.ancla[2],i=Math.sqrt(r*r+o*o+l*l),n=i-a.l;if(n<=0)continue;let s=-n/50.4,c=50*s/i;e[t]+=r*c,e[t+1]+=o*c,e[t+2]+=l*c,a.acc+=-(-o/i*s)}for(let a=0;a<761;a++){let t=3*a+1,r=a<759?-2.89:-2.62;e[t]<r&&(e[t]=r)}for(let r=0;r<761;r++){let o=3*r,i=(e[o]-a[o])/l,n=(e[o+1]-a[o+1])/l,c=(e[o+2]-a[o+2])/l,u=Math.hypot(i,n,c),d=u>8?8/u:1;i*=s*d,n*=s*d,c*=s*d,t[o]=i,t[o+1]=n,t[o+2]=c}}this.recuerdo>0&&!this.cuerdas.some(e=>e.volviendo)&&(this.recuerdo=Math.max(0,this.recuerdo-1/60));let c=this.recuerdo>0;for(let e of this.cuerdas){let a=e.meta-e.l;Math.abs(a)>1e-5&&(e.l+=Math.sign(a)*Math.min(Math.abs(a),.7/60),c=!0),e.suelta&&(this.extremo(e),(e.volviendo||Math.hypot(...e.ev)>.02)&&(c=!0));let t=e.suelta?0:e.acc/(10*i);e.fuerza+=(t-e.fuerza)*.18}let u=0;for(let e=0;e<761;e++){let a=3*e;u=Math.max(u,Math.abs(t[a])+Math.abs(t[a+1])+Math.abs(t[a+2]))}if(c||u>1)this.quietud=0,this.foto=null,this.cuenta=0;else if(++this.cuenta>=30){if(this.foto){let a=0;for(let t=0;t<e.length;t++)a=Math.max(a,Math.abs(e[t]-this.foto[t]));this.quietud=a<.004?this.quietud+30:0}this.foto=e.slice(),this.cuenta=0}return u}autocolision(){let{p:e,cabeza:a,siguiente:t}=this;a.fill(-1);let r=(e,a,t)=>(0x466f45d*e^0x127409f*a^0x4f9ffb7*t)&4095;for(let o=0;o<759;o++){let l=r(Math.floor(e[3*o]/.12),Math.floor(e[3*o+1]/.12),Math.floor(e[3*o+2]/.12));t[o]=a[l],a[l]=o}for(let o=0;o<759;o++){let l=3*o,i=o%33,n=o/33|0,s=Math.floor(e[l]/.12),c=Math.floor(e[l+1]/.12),u=Math.floor(e[l+2]/.12);for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)for(let m=a[r(s+d,c+h,u+f)];m>=0;m=t[m]){if(m<=o||2>=Math.abs(m%33-i)&&2>=Math.abs((m/33|0)-n))continue;let a=3*m,t=e[a]-e[l],r=e[a+1]-e[l+1],s=e[a+2]-e[l+2],c=t*t+r*r+s*s;if(c>=.0144||c<1e-12)continue;let u=Math.sqrt(c),d=.5*(.12-u)/u;e[l]-=t*d,e[l+1]-=r*d,e[l+2]-=s*d,e[a]+=t*d,e[a+1]+=r*d,e[a+2]+=s*d}}}carga(){let{p:e,q:a}=this,t=2277,r=2280;{let a=e[r]-e[t],o=e[r+1]-e[t+1],l=e[r+2]-e[t+2],i=Math.sqrt(a*a+o*o+l*l),n=.5*(i-this.eje)/i;e[t]+=a*n,e[t+1]+=o*n,e[t+2]+=l*n,e[r]-=a*n,e[r+1]-=o*n,e[r+2]-=l*n}{let a=3*s,o=(e[t]+e[r])/2-e[a],l=(e[t+1]+e[r+1])/2-e[a+1],i=(e[t+2]+e[r+2])/2-e[a+2],n=Math.sqrt(o*o+l*l+i*i);if(n>.95){let a=(.95-n)/n;for(let n of[t,r])e[n]+=o*a,e[n+1]+=l*a,e[n+2]+=i*a}}let o=.28+.035,l=.5+(.28+.035)+.11,i=e[r]-e[t],c=e[r+1]-e[t+1],u=e[r+2]-e[t+2],d=i*i+c*c+u*u,h=(e[t]+e[r])/2,f=(e[t+1]+e[r+1])/2,m=(e[t+2]+e[r+2])/2;for(let s=0;s<759;s++){let v,p=3*s;if(Math.abs(e[p]-h)>l||Math.abs(e[p+2]-m)>l||Math.abs(e[p+1]-f)>l)continue;i=e[r]-e[t],c=e[r+1]-e[t+1],u=e[r+2]-e[t+2];let x=((e[p]-e[t])*i+(e[p+1]-e[t+1])*c+(e[p+2]-e[t+2])*u)/d;x=x<0?0:x>1?1:x;let b=e[t]+i*x,g=e[t+1]+c*x,M=e[t+2]+u*x,y=e[p]-b,z=e[p+1]-g,E=e[p+2]-M,T=Math.sqrt(y*y+z*z+E*E);if(T>=o||T<1e-7)continue;if(z>0){let e=y*y+E*E;if(e>=o*o)continue;v=-(z+Math.sqrt(o*o-e)),y=0,z=-1,E=0}else y/=T,z/=T,E/=T,v=T-o;let R=50+(1-x)*(1-x)*n+x*x*n,A=-v/R;e[p]+=50*A*y,e[p+1]+=50*A*z,e[p+2]+=50*A*E;let P=(1-x)*n*A,w=x*n*A;e[t]-=P*y,e[t+1]-=P*z,e[t+2]-=P*E,e[r]-=w*y,e[r+1]-=w*z,e[r+2]-=w*E;let F=e[p]-a[p]-((e[t]-a[t])*(1-x)+(e[r]-a[r])*x),j=e[p+1]-a[p+1]-((e[t+1]-a[t+1])*(1-x)+(e[r+1]-a[r+1])*x),L=e[p+2]-a[p+2]-((e[t+2]-a[t+2])*(1-x)+(e[r+2]-a[r+2])*x),S=F*y+j*z+L*E,N=Math.sqrt((F-=S*y)*F+(j-=S*z)*j+(L-=S*E)*L);if(N<1e-9)continue;let q=Math.min(1,-(.35*v)/N)/R;e[p]-=50*q*F,e[p+1]-=50*q*j,e[p+2]-=50*q*L;let C=(1-x)*n*q,_=x*n*q;e[t]+=C*F,e[t+1]+=C*j,e[t+2]+=C*L,e[r]+=_*F,e[r+1]+=_*j,e[r+2]+=_*L}}extremo(e){let a=3*e.idx,t=[this.p[a],this.p[a+1],this.p[a+2]];if(e.volviendo){let a=1-Math.exp(-.1);for(let r=0;r<3;r++)e.e[r]+=(t[r]-e.e[r])*a;e.ev=[0,0,0],.03>Math.hypot(t[0]-e.e[0],t[1]-e.e[1],t[2]-e.e[2])&&(e.suelta=e.volviendo=!1,e.l=Math.hypot(t[0]-e.ancla[0],t[1]-e.ancla[1],t[2]-e.ancla[2]));return}let r=1/60;e.ev[1]-=9.8*r;let o=Math.max(0,1-1.6*r);for(let a=0;a<3;a++)e.ev[a]*=o,e.e[a]+=e.ev[a]*r;let l=e.e[0]-e.ancla[0],i=e.e[1]-e.ancla[1],n=e.e[2]-e.ancla[2],s=Math.hypot(l,i,n);if(s>e.l){let a=e.l/s,t=e.ancla[0]+l*a,r=e.ancla[1]+i*a,o=e.ancla[2]+n*a;e.ev=[e.ev[0]+(t-e.e[0])*60,e.ev[1]+(r-e.e[1])*60,e.ev[2]+(o-e.e[2])*60],e.e=[t,r,o]}}derivar(){let{p:e,normal:a,cavidad:t}=this;for(let r=0;r<23;r++)for(let o=0;o<33;o++){let l=3*c(o,r),i=3*c(Math.min(32,o+1),r),n=3*c(Math.max(0,o-1),r),s=3*c(o,Math.min(22,r+1)),u=3*c(o,Math.max(0,r-1)),d=e[i]-e[n],h=e[i+1]-e[n+1],f=e[i+2]-e[n+2],m=e[s]-e[u],v=e[s+1]-e[u+1],p=e[s+2]-e[u+2],x=v*f-p*h,b=p*d-m*f,g=m*h-v*d,M=Math.hypot(x,b,g)||1;x/=M,b/=M,g/=M,a[l]=x,a[l+1]=b,a[l+2]=g;let y=(e[i]+e[n]+e[s]+e[u])/4-e[l],z=(e[i+1]+e[n+1]+e[s+1]+e[u+1])/4-e[l+1],E=(e[i+2]+e[n+2]+e[s+2]+e[u+2])/4-e[l+2];t[c(o,r)]=Math.abs(y*x+z*b+E*g)/.11}}carga3(){let{p:e}=this,a=2277,t=2280;return{centro:[(e[2277]+e[t])/2,(e[a+1]+e[t+1])/2,(e[a+2]+e[t+2])/2],eje:[e[t]-e[a],e[t+1]-e[a+1],e[t+2]-e[a+2]]}}lugarCarga(){let{centro:e}=this.carga3(),a=this.p,t=0,r=0,o=0;for(let l=0;l<759;l++){let i=(a[3*l]-e[0])**2+(a[3*l+1]-e[1])**2+(a[3*l+2]-e[2])**2;if(i>(.28+.2)**2)continue;let n=1/(i+1e-4),s=u(l%33,Math.floor(l/33));t+=s[0]*n,r+=s[2]*n,o+=n}return o?[t/o,r/o]:[0,0]}centro(){let e=this.p,a=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(let r=0;r<759;r++)for(let o=0;o<3;o++){let l=e[3*r+o];l<a[o]&&(a[o]=l),l>t[o]&&(t[o]=l)}return[(a[0]+t[0])/2,(a[1]+t[1])/2,(a[2]+t[2])/2]}punto(e){let a=3*e;return[this.p[a],this.p[a+1],this.p[a+2]]}reparto(){let e=this.cuerdas.map(e=>Math.max(0,e.fuerza)),a=e.reduce((e,a)=>e+a,0)||1;return e.map(e=>e/a)}sostenido(){return this.cuerdas.reduce((e,a)=>e+Math.max(0,a.fuerza),0)}pesoTotal(){return(15.18+2/n)*9.8}}let h=(e,a)=>[e[0]-a[0],e[1]-a[1],e[2]-a[2]],f=e=>{let a=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/a,e[1]/a,e[2]/a]},m=(e,a)=>[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]],v=(e,a)=>e[0]*a[0]+e[1]*a[1]+e[2]*a[2];function p(e,a,t,r){let o=1/Math.tan(e/2),l=1/(t-r);return new Float32Array([o/a,0,0,0,0,o,0,0,0,0,(t+r)*l,-1,0,0,2*t*r*l,0])}function x(e,a){let t=f(h(e,a)),r=f(m([0,1,0],t)),o=m(t,r);return new Float32Array([r[0],o[0],t[0],0,r[1],o[1],t[1],0,r[2],o[2],t[2],0,-v(r,e),-v(o,e),-v(t,e),1])}function b(e,a){let t=new Float32Array(16);for(let r=0;r<4;r++)for(let o=0;o<4;o++)t[4*r+o]=e[o]*a[4*r]+e[4+o]*a[4*r+1]+e[8+o]*a[4*r+2]+e[12+o]*a[4*r+3];return t}function g(e,a){let t=p(e.fov,a,.1,60);return{vp:b(t,x(e.ojo,e.obj)),focal:t[5]}}function M(e,a,t,r){let o=e[0]*a[0]+e[4]*a[1]+e[8]*a[2]+e[12],l=e[1]*a[0]+e[5]*a[1]+e[9]*a[2]+e[13],i=e[2]*a[0]+e[6]*a[1]+e[10]*a[2]+e[14],n=e[3]*a[0]+e[7]*a[1]+e[11]*a[2]+e[15];return n<=0?[0,0,2]:[(o/n*.5+.5)*t,(.5-l/n*.5)*r,i/n]}let y=[-3.6,7.8,3.1],z=[.25,-.9,-.15],E=f(h(z,y)),T=Math.hypot(...h(z,y)),R=[Math.cos(17*Math.PI/180),Math.cos(8*Math.PI/180)],A=b(p(56*Math.PI/180,1,4,18),x(y,z)),P=`
precision highp float;
precision highp sampler2DShadow;
uniform vec3 uCam;
uniform mat4 uLuzVP;
uniform vec3 uLuzPos, uLuzDir;
uniform vec2 uCono, uRes;
uniform sampler2DShadow uSombra;
uniform float uTexel, uExpo;
uniform int uPasos;
const vec3 LUZ = vec3(1.0, 0.86, 0.69) * 3.0;
const vec3 CONTRA = vec3(0.30, 0.39, 0.55);
const vec3 CONTRA_DIR = vec3(0.57, 0.40, -0.72);
const vec3 NEGRO = vec3(0.0055, 0.0042, 0.0036);
const float D0 = ${T.toFixed(4)};
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float ruido(vec2 p) {
  vec2 i = floor(p), q = fract(p);
  q = q * q * (3.0 - 2.0 * q);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), q.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), q.x), q.y);
}
float cono(vec3 p) {
  vec3 d = p - uLuzPos;
  float l = length(d);
  return smoothstep(uCono.x, uCono.y, dot(d, uLuzDir) / l) * (D0 * D0) / (l * l);
}
float sombra(vec3 p, float radio) {
  vec4 q = uLuzVP * vec4(p, 1.0);
  q.xyz = q.xyz / q.w * 0.5 + 0.5;
  if (q.x < 0.0 || q.x > 1.0 || q.y < 0.0 || q.y > 1.0 || q.z > 1.0) return 1.0;
  if (radio <= 0.0) return texture(uSombra, q.xyz);
  // Rejilla de 4 \xd7 4 muestras con filtrado bilineal, desplazada al azar por p\xedxel para que la
  // penumbra no forme escalones
  float s = 0.0, paso = radio * 0.5;
  vec2 j0 = vec2(hash(gl_FragCoord.xy), hash(gl_FragCoord.yx + 7.0)) - 0.5;
  for (int j = 0; j < 4; j++)
    for (int i = 0; i < 4; i++) s += texture(uSombra, vec3(q.xy + (vec2(i, j) - 1.5 + j0) * paso * uTexel, q.z));
  return s / 16.0;
}
/** El haz del foco en el aire, entre la c\xe1mara y la superficie, con las sombras dentro. */
vec3 haz(vec3 ro, vec3 rd, float tFin) {
  if (uPasos == 0) return vec3(0.0);
  vec3 o = ro - uLuzPos;
  float c2 = uCono.x * uCono.x, dD = dot(rd, uLuzDir), oD = dot(o, uLuzDir);
  float A = dD * dD - c2, B = 2.0 * (dD * oD - c2 * dot(rd, o)), C = oD * oD - c2 * dot(o, o);
  float disc = B * B - 4.0 * A * C;
  vec2 tr = vec2(0.0, -1.0);
  if (disc > 0.0 && abs(A) > 1e-6) {
    float s = sqrt(disc), t1 = (-B - s) / (2.0 * A), t2 = (-B + s) / (2.0 * A);
    if (t1 > t2) { float x = t1; t1 = t2; t2 = x; }
    for (int k = 0; k < 3; k++) {
      vec2 iv = k == 0 ? vec2(0.0, t1) : k == 1 ? vec2(t1, t2) : vec2(t2, tFin);
      iv = vec2(max(iv.x, 0.0), min(iv.y, tFin));
      if (iv.y > iv.x) {
        vec3 m = o + rd * (0.5 * (iv.x + iv.y));
        if (dot(m, uLuzDir) > uCono.x * length(m)) { tr = iv; break; }
      }
    }
  }
  if (tr.y <= tr.x) return vec3(0.0);
  float dt = (tr.y - tr.x) / float(uPasos), t = tr.x + dt * hash(gl_FragCoord.xy + 17.0), acc = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= uPasos) break;
    vec3 p = ro + rd * t;
    // M\xe1s denso cerca del suelo, como el polvo de una sala
    acc += cono(p) * sombra(p, 0.0) * (1.0 + 1.2 * smoothstep(1.0, -2.9000, p.y));
    t += dt;
  }
  float mu = dot(uLuzDir, -rd), g = 0.5;
  float fase = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * mu, 1.5) * 0.0796;
  return LUZ * acc * dt * fase * 0.014;
}
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec4 acabar(vec3 col, float dist, vec3 h) {
  col = mix(col, NEGRO, 1.0 - exp(-max(0.0, dist - 11.0) * 0.16)) + h;
  vec2 q = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - 0.45 * smoothstep(0.3, 0.95, length(q * vec2(uRes.x / uRes.y, 1.0) * 0.85));
  col = pow(aces(col * uExpo), vec3(1.0 / 2.2));
  return vec4(col + (hash(gl_FragCoord.xy + 3.1) - 0.5) * 0.012, 1.0);
}
`,w=`#version 300 es
precision highp float;
uniform highp sampler2D uTela;
uniform mat4 uVP;
layout(location = 0) in vec2 aUV;
out vec3 vPos;
out vec3 vN;
out vec2 vUV;
out float vCav;
const ivec2 REJ = ivec2(32, 22);
vec4 T(ivec2 c) {
  ivec2 k = clamp(c, ivec2(0), REJ);
  vec4 s = texelFetch(uTela, k, 0);
  ivec2 o = c - k;
  // Fuera de la rejilla se extrapola: el borde conserva su pendiente
  if (o != ivec2(0)) s = 2.0 * s - texelFetch(uTela, clamp(k - o, ivec2(0), REJ), 0);
  return s;
}
void pesos(float t, out vec4 w, out vec4 d) {
  float t2 = t * t, t3 = t2 * t;
  w = 0.5 * vec4(-t3 + 2.0 * t2 - t, 3.0 * t3 - 5.0 * t2 + 2.0, -3.0 * t3 + 4.0 * t2 + t, t3 - t2);
  d = 0.5 * vec4(-3.0 * t2 + 4.0 * t - 1.0, 9.0 * t2 - 10.0 * t, -9.0 * t2 + 8.0 * t + 1.0, 3.0 * t2 - 2.0 * t);
}
void main() {
  vec2 g = aUV * vec2(REJ);
  vec2 b = min(floor(g), vec2(REJ) - 1.0);
  vec2 fr = g - b;
  vec4 wu, du, wv, dv;
  pesos(fr.x, wu, du);
  pesos(fr.y, wv, dv);
  vec4 P = vec4(0.0);
  vec3 Pu = vec3(0.0), Pv = vec3(0.0);
  ivec2 ib = ivec2(b);
  for (int j = 0; j < 4; j++)
    for (int i = 0; i < 4; i++) {
      vec4 s = T(ib + ivec2(i - 1, j - 1));
      P += s * wu[i] * wv[j];
      Pu += s.xyz * du[i] * wv[j];
      Pv += s.xyz * wu[i] * dv[j];
    }
  vN = normalize(cross(Pv, Pu));
  vPos = P.xyz;
  vCav = P.w;
  vUV = aUV * vec2(3.5200, 2.4200);
  gl_Position = uVP * vec4(P.xyz, 1.0);
}`,F=`#version 300 es
${P}
in vec3 vPos;
in vec3 vN;
in vec2 vUV;
in float vCav;
out vec4 color;
void main() {
  vec3 n = normalize(vN);
  vec3 V = uCam - vPos;
  float dist = length(V);
  V /= dist;
  // La normal suavizada puede invertirse de golpe en los pliegues: se orienta con la normal
  // geom\xe9trica del p\xedxel, que siempre mira a la c\xe1mara
  vec3 ng = normalize(cross(dFdx(vPos), dFdy(vPos)));
  if (dot(ng, V) < 0.0) ng = -ng;
  vec3 nf = dot(n, ng) >= 0.0 ? n : -n;
  float lado = dot(nf, n);
  // Tejido: urdimbre y trama visibles solo de cerca, y la irregularidad del lino a lo largo
  vec2 hilo = vUV * 150.0;
  vec2 fw = fwidth(hilo);
  float vis = 1.0 - smoothstep(0.2, 0.55, max(fw.x, fw.y));
  float tej = sin(hilo.x * 6.2832) * sin(hilo.y * 6.2832) * vis;
  float slub = ruido(vec2(vUV.x * 2.5, vUV.y * 46.0)) * 0.55 + ruido(vUV * 7.0) * 0.45;
  vec3 alb = vec3(0.80, 0.72, 0.60) * (0.93 + 0.1 * slub) * (1.0 + 0.035 * tej);
  // Dobladillo: una franja doble de 3 cm y su pespunte
  float borde = min(min(vUV.x, 3.5200 - vUV.x), min(vUV.y, 2.4200 - vUV.y));
  float largo = abs(vUV.x - 1.7600) > abs(vUV.y - 1.2100) * ${(3.52/2.42).toFixed(4)} ? vUV.y : vUV.x;
  alb *= 1.0 - 0.08 * (1.0 - smoothstep(0.028, 0.034, borde));
  float punt = step(0.45, fract(largo * 55.0)) * (1.0 - smoothstep(0.0015, 0.004, abs(borde - 0.04)));
  alb *= 1.0 - 0.18 * punt * vis;

  vec3 L = normalize(uLuzPos - vPos);
  float ndl = dot(nf, L);
  // La sombra se consulta un poco por delante, a lo largo del rayo de luz: la tela es fina y, rasante
  // al foco, se sombrear\xeda a s\xed misma a parches. Vista por detr\xe1s, la luz llega difundida por el
  // lino y su sombra se ve m\xe1s borrosa.
  vec3 nl = dot(n, L) > 0.0 ? n : -n;
  float sh = sombra(vPos + L * 0.06 + nl * 0.012, ndl < 0.0 ? 6.0 : 2.2);
  vec3 directa = LUZ * cono(vPos) * sh;
  // La cara iluminada y la luz que atraviesa a la otra tienden a cero juntas en el rasante:
  // as\xed no hay saltos cuando una ondulaci\xf3n cambia de lado respecto al foco
  float difusa = max(0.0, ndl);
  float trans = max(0.0, -ndl);
  vec3 col = alb * directa * (difusa * 0.95 + vec3(1.0, 0.72, 0.46) * trans * 0.4);
  float fres = pow(1.0 - max(dot(nf, V), 0.0), 4.0);
  col += directa * fres * 0.16 * smoothstep(0.0, 0.3, ndl) * vec3(1.0, 0.95, 0.88);
  float nc = dot(nf, CONTRA_DIR);
  col += alb * CONTRA * max(0.0, (nc + 0.3) / 1.3) * 0.22 + CONTRA * fres * 0.2;
  float ao = clamp(1.0 - vCav * lado * 4.0, 0.3, 1.0);
  col += alb * (vec3(0.016, 0.013, 0.011) + vec3(0.05, 0.034, 0.024) * max(0.0, -nf.y)) * ao;
  // Rebote: la tela iluminada se ilumina a s\xed misma; las sombras de los pliegues no son negras
  col += alb * alb * LUZ * cono(vPos) * 0.1 * ao;
  col *= mix(1.0, ao, 0.65);
  color = acabar(col, dist, haz(uCam, -V, dist));
}`,j=`#version 300 es
precision highp float;
uniform mat4 uVP, uModelo;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aN;
out vec3 vPos;
out vec3 vN;
out vec3 vObj;
void main() {
  vec4 w = uModelo * vec4(aPos, 1.0);
  vPos = w.xyz;
  vN = mat3(uModelo) * aN;
  vObj = aPos;
  gl_Position = uVP * w;
}`,L=`#version 300 es
${P}
uniform float uPatina;
in vec3 vPos;
in vec3 vN;
in vec3 vObj;
out vec4 color;
float r3(vec3 p) {
  vec3 i = floor(p), q = fract(p);
  q = q * q * (3.0 - 2.0 * q);
  float n = i.x + i.y * 57.0 + i.z * 113.0;
  #define H(o) fract(sin(n + o) * 43758.5453)
  return mix(mix(mix(H(0.0), H(1.0), q.x), mix(H(57.0), H(58.0), q.x), q.y),
             mix(mix(H(113.0), H(114.0), q.x), mix(H(170.0), H(171.0), q.x), q.y), q.z);
}
float fbm(vec3 p) { return 0.5 * r3(p) + 0.3 * r3(p * 2.1 + 3.7) + 0.2 * r3(p * 4.3 + 9.1); }
void main() {
  vec3 n = normalize(vN);
  vec3 V = uCam - vPos;
  float dist = length(V);
  V /= dist;
  // Martillado: facetas peque\xf1as en la superficie
  vec3 q = vObj * 9.0;
  float e = 0.05;
  vec3 gr = vec3(r3(q + vec3(e, 0, 0)) - r3(q - vec3(e, 0, 0)), r3(q + vec3(0, e, 0)) - r3(q - vec3(0, e, 0)), r3(q + vec3(0, 0, e)) - r3(q - vec3(0, 0, e))) / (2.0 * e);
  n = normalize(n - (gr - n * dot(gr, n)) * 0.02);
  float pat = smoothstep(0.6, 0.9, fbm(vObj * 5.0) + 0.12 * (1.0 - n.y)) * uPatina;
  vec3 F0 = mix(vec3(0.62, 0.42, 0.23), vec3(0.03), pat);
  vec3 alb = vec3(0.05, 0.055, 0.04) * pat;
  float rug = mix(0.3, 0.7, pat) + 0.08 * r3(vObj * 26.0);

  vec3 L = normalize(uLuzPos - vPos), H = normalize(L + V);
  float ndl = max(dot(n, L), 0.0), ndv = max(dot(n, V), 1e-3), ndh = max(dot(n, H), 0.0), vdh = max(dot(V, H), 0.0);
  float a2 = pow(rug, 4.0), dd = ndh * ndh * (a2 - 1.0) + 1.0;
  float D = a2 / (3.14159 * dd * dd);
  float k = (rug + 1.0) * (rug + 1.0) / 8.0;
  float G = ndv / (ndv * (1.0 - k) + k) * ndl / (ndl * (1.0 - k) + k);
  vec3 F = F0 + (1.0 - F0) * pow(1.0 - vdh, 5.0);
  vec3 directa = LUZ * cono(vPos) * sombra(vPos + n * 0.02, 2.0);
  vec3 col = directa * (alb * ndl + D * G * F / (4.0 * ndv + 1e-3));
  // Reflejo: abajo la tela iluminada, arriba la oscuridad, a un lado la contra fr\xeda
  vec3 R = reflect(-V, n);
  vec3 env = mix(vec3(0.004, 0.0035, 0.004), vec3(0.42, 0.34, 0.24) * 0.32, smoothstep(0.05, -0.55, R.y));
  env += CONTRA * pow(max(dot(R, CONTRA_DIR), 0.0), 8.0) * 0.5;
  vec3 Fe = F0 + (max(vec3(1.0 - rug), F0) - F0) * pow(1.0 - ndv, 5.0);
  col += env * Fe * (1.0 - 0.55 * rug) + alb * 0.03;
  color = acabar(col, dist, haz(uCam, -V, dist));
}`,S=`#version 300 es
precision highp float;
uniform mat4 uVP;
uniform vec2 uRes;
uniform float uFocal, uGrosor, uMinPx;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aTan;
layout(location = 2) in float aLado;
layout(location = 3) in float aS;
layout(location = 4) in float aTen;
out vec3 vPos;
out vec3 vTan;
out float vLado;
out float vS;
out float vCov;
out float vTen;
out float vAncho;
void main() {
  vec4 c = uVP * vec4(aPos, 1.0), c2 = uVP * vec4(aPos + aTan * 0.05, 1.0);
  vec2 d = (c2.xy / c2.w - c.xy / c.w) * uRes;
  d = length(d) > 1e-5 ? normalize(d) : vec2(1.0, 0.0);
  vec2 perp = vec2(-d.y, d.x);
  float px = 2.0 * uGrosor * uFocal * 0.5 * uRes.y / c.w;
  vCov = clamp(px / uMinPx, 0.0, 1.0);
  px = max(px, uMinPx) + 1.0;
  c.xy += perp * aLado * px / uRes * c.w;
  vPos = aPos;
  vTan = aTan;
  vLado = aLado;
  vS = aS;
  vTen = aTen;
  vAncho = px;
  gl_Position = c;
}`,N=`#version 300 es
${P}
in vec3 vPos;
in vec3 vTan;
in float vLado;
in float vS;
in float vCov;
in float vTen;
in float vAncho;
out vec4 color;
void main() {
  vec3 V = uCam - vPos;
  float dist = length(V);
  V /= dist;
  vec3 T = normalize(vTan);
  vec3 B = normalize(cross(T, V)), Nn = cross(B, T);
  float s = clamp(vLado * vAncho / max(vAncho - 1.0, 1.0), -1.0, 1.0);
  vec3 n = normalize(B * s + Nn * sqrt(max(0.0, 1.0 - s * s)));
  // Cuerda torcida: los cabos dan la vuelta cada 1,8 cm
  float fibra = 0.5 + 0.5 * sin((vS * 55.0 + s * 0.9) * 6.2832);
  vec3 alb = vec3(0.05, 0.04, 0.032) * (0.7 + 0.6 * fibra);
  vec3 L = normalize(uLuzPos - vPos), H = normalize(L + V);
  vec3 directa = LUZ * cono(vPos) * sombra(vPos, 0.0);
  float th = dot(T, H), sth = sqrt(max(0.0, 1.0 - th * th));
  // Cuanto m\xe1s tensa, m\xe1s brilla la l\xednea de luz a lo largo de la cuerda
  float esp = pow(sth, 90.0) * (0.12 + 0.88 * vTen) * (0.6 + 0.4 * fibra);
  vec3 col = directa * (alb * max(dot(n, L), 0.0) + vec3(1.0, 0.9, 0.74) * esp * 0.4);
  col += CONTRA * pow(sth, 24.0) * 0.04 + alb * 0.03;
  float a = vCov * (1.0 - smoothstep(1.0 - 1.5 / max(vAncho, 1.5), 1.0, abs(vLado)));
  // Las cuerdas suben hasta perderse en la oscuridad: los apoyos no se ven
  a *= 1.0 - smoothstep(0.9, 2.6, vPos.y);
  vec4 o = acabar(col, dist, haz(uCam, -V, dist));
  color = vec4(o.rgb, a);
}`,q=`#version 300 es
${P}
in vec3 vPos;
in vec3 vN;
in vec3 vObj;
out vec4 color;
void main() {
  vec3 V = uCam - vPos;
  float dist = length(V);
  V /= dist;
  float piedra = ruido(vPos.xz * 1.1) * 0.55 + ruido(vPos.xz * 4.7) * 0.3 + ruido(vPos.xz * 19.0) * 0.15;
  vec3 alb = vec3(0.022, 0.019, 0.017) * (0.7 + 0.6 * piedra);
  vec3 L = normalize(uLuzPos - vPos), H = normalize(L + V);
  vec3 directa = LUZ * cono(vPos) * sombra(vPos + vec3(0.0, 0.03, 0.0), 11.0);
  vec3 col = alb * directa * max(L.y, 0.0) + directa * pow(max(H.y, 0.0), 60.0) * 0.03 * (0.6 + 0.8 * piedra);
  col += alb * 0.012;
  color = acabar(col, dist, haz(uCam, -V, dist));
}`,C=`#version 300 es
layout(location = 0) in vec2 aQ;
out vec2 vQ;
void main() {
  vQ = aQ;
  gl_Position = vec4(aQ, 1.0, 1.0);
}`,_=`#version 300 es
${P}
uniform vec3 uFwd, uDer, uArr;
uniform vec2 uTan;
in vec2 vQ;
out vec4 color;
void main() {
  vec3 rd = normalize(uFwd + vQ.x * uTan.x * uDer + vQ.y * uTan.y * uArr);
  float t = 30.0;
  if (rd.y < 0.0) t = min(t, (-2.9000 - uCam.y) / rd.y);
  vec3 col = NEGRO * (0.8 + 0.6 * smoothstep(-0.2, 0.5, rd.y));
  color = acabar(col, 0.0, haz(uCam, rd, t));
}`,D=`#version 300 es
precision mediump float;
void main() {}`;function U(e,a,t){let r=e.createShader(a);if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??"shader");return r}function I(e,a,t){let r=e.createProgram();if(e.attachShader(r,U(e,e.VERTEX_SHADER,a)),e.attachShader(r,U(e,e.FRAGMENT_SHADER,t)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(e.getProgramInfoLog(r)??"link");let o=new Map;return{p:r,u:a=>(o.has(a)||o.set(a,e.getUniformLocation(r,a)),o.get(a))}}let V=["I","II","III","IV","V","VI"],$=(e,a,t)=>Math.min(t,Math.max(a,e)),O=e=>`${Math.round(100*e)}\xa0%`,k=e=>`${Math.round(100*Math.abs(e))}\xa0cm`;function B(e){let a=e<.9;return{az:a?1.02:.52,el:a?.58:.5,fov:(a?38:29)*Math.PI/180}}e.s(["Gravedad",0,function(){let[e,l]=(0,t.useState)(null),[i,n]=(0,t.useState)(null),[s,c]=(0,t.useState)(()=>o.map(()=>0)),[u,v]=(0,t.useState)(()=>o.map(()=>!1)),[p,x]=(0,t.useState)({estado:"equilibrio",dato:""}),[b,z]=(0,t.useState)(!1),T=(0,t.useRef)(null),P=(0,t.useRef)([]),U=(0,t.useRef)([]),H=(0,t.useRef)([]),X=(0,t.useRef)(null),G=(0,t.useRef)({e:null,inicio:[0,0],alt:o.map(()=>0),obj:[0,-.9,0],az:0,azMeta:0,raf:0,visible:!1,quieto:!1,escala:1,lentos:0,ultimo:0,restaurando:!1,accion:0,arrastre:null,giro:null,ultimoReparto:""});(0,t.useEffect)(()=>{let e=G.current,a=T.current,t=matchMedia("(prefers-reduced-motion: reduce)");e.quieto=t.matches;let r=function(e){let a,t=e.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!t)return null;try{a={tela:I(t,w,F),telaS:I(t,w,D),bronce:I(t,j,L),bronceS:I(t,j,D),suelo:I(t,j,q),cuerda:I(t,S,N),cuerdaS:I(t,S,D),fondo:I(t,C,_)}}catch{return null}let r=[],o=[],l=(e,a)=>{let l=t.createVertexArray();o.push(l),t.bindVertexArray(l);let i=e.map(e=>{let a=t.createBuffer();return r.push(a),t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,e.data,e.dinamico?t.DYNAMIC_DRAW:t.STATIC_DRAW),t.enableVertexAttribArray(e.loc),t.vertexAttribPointer(e.loc,e.size,t.FLOAT,!1,0,0),a});if(a){let e=t.createBuffer();r.push(e),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e),t.bufferData(t.ELEMENT_ARRAY_BUFFER,a,t.STATIC_DRAW)}return t.bindVertexArray(null),{v:l,bs:i,n:a?a.length:0}},i=function(){let e=new Float32Array(12998);for(let a=0;a<67;a++)for(let t=0;t<97;t++)e[(97*a+t)*2]=t/96,e[(97*a+t)*2+1]=a/66;let a=new Uint16Array(38016),t=0;for(let e=0;e<66;e++)for(let r=0;r<96;r++){let o=97*e+r,l=o+1,i=o+97,n=i+1;a.set([o,i,l,l,i,n],t),t+=6}return{uv:e,ind:a}}(),n=l([{data:i.uv,size:2,loc:0}],i.ind),s=function(){let e=[];for(let a=0;a<=40;a++){let t=-1+2*a/40,r=.28*Math.pow(Math.max(0,1-Math.pow(Math.abs(t),2.6)),1/2.6)*(1+.04*t);e.push([Math.max(r,1e-4*(0!==a&&40!==a)),.78*t])}return function(e){let a=[],t=[],r=[];for(let r=0;r<e.length;r++){let[o,l]=e[r],i=e[Math.max(0,r-1)],n=e[Math.min(e.length-1,r+1)],s=n[1]-i[1],c=n[0]-i[0],u=Math.hypot(s,c)||1,d=-c/u,h=s/u;for(let e=0;e<=48;e++){let r=e/48*Math.PI*2,i=Math.cos(r),n=Math.sin(r);a.push(l,o*i,o*n),t.push(d,h*i,h*n)}}for(let a=0;a<e.length-1;a++)for(let e=0;e<48;e++){let t=49*a+e,o=t+1,l=t+48+1,i=l+1;r.push(t,o,l,o,i,l)}return{pos:new Float32Array(a),nor:new Float32Array(t),ind:new Uint16Array(r)}}(e)}(),c=l([{data:s.pos,size:3,loc:0},{data:s.nor,size:3,loc:1}],s.ind),u=function(){let e=[],a=[],t=[];for(let t=0;t<=28;t++){let r=t/28*Math.PI*2,o=Math.cos(r),l=Math.sin(r);for(let t=0;t<=10;t++){let r=t/10*Math.PI*2,i=Math.cos(r),n=Math.sin(r);e.push((.05+.013*i)*o,.013*n,(.05+.013*i)*l),a.push(i*o,n,i*l)}}for(let e=0;e<28;e++)for(let a=0;a<10;a++){let r=11*e+a,o=r+10+1;t.push(r,o,r+1,r+1,o,o+1)}return{pos:new Float32Array(e),nor:new Float32Array(a),ind:new Uint16Array(t)}}(),d=l([{data:u.pos,size:3,loc:0},{data:u.nor,size:3,loc:1}],u.ind),v=l([{data:new Float32Array([-18,-2.9,-18,18,-2.9,-18,-18,-2.9,18,18,-2.9,18]),size:3,loc:0},{data:new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0]),size:3,loc:1}],new Uint16Array([0,2,1,1,2,3])),p=l([{data:new Float32Array([-1,-1,3,-1,-1,3]),size:2,loc:0}]),x=new Float32Array(1116),b=new Float32Array(1116),M=new Float32Array(372),z=new Float32Array(372),T=new Float32Array(372);for(let e=0;e<372;e++)M[e]=e%2?1:-1;let P=l([{data:x,size:3,loc:0,dinamico:!0},{data:b,size:3,loc:1,dinamico:!0},{data:M,size:1,loc:2},{data:z,size:1,loc:3,dinamico:!0},{data:T,size:1,loc:4,dinamico:!0}]),U=t.createTexture();t.bindTexture(t.TEXTURE_2D,U),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,33,23,0,t.RGBA,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);let V=new Float32Array(3036),$=Math.min(t.getParameter(t.MAX_TEXTURE_SIZE),e.clientWidth<700?1024:2048),O=t.createTexture();t.bindTexture(t.TEXTURE_2D,O),t.texStorage2D(t.TEXTURE_2D,1,t.DEPTH_COMPONENT24,$,$),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_FUNC,t.LEQUAL);let k=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,k),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0),t.drawBuffers([t.NONE]),t.readBuffer(t.NONE),t.bindFramebuffer(t.FRAMEBUFFER,null),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL);let B=10,H=(e,a,t,r)=>new Float32Array([...e,0,...a,0,...t,0,...r,1]),X=(e,a)=>{for(let r of(t.uniform1f(e.u("uPatina"),.9),t.uniformMatrix4fv(e.u("uModelo"),!1,a.mCarga),t.bindVertexArray(c.v),t.drawElements(t.TRIANGLES,c.n,t.UNSIGNED_SHORT,0),t.uniform1f(e.u("uPatina"),.35),t.bindVertexArray(d.v),a.mallas))t.uniformMatrix4fv(e.u("uModelo"),!1,r),t.drawElements(t.TRIANGLES,d.n,t.UNSIGNED_SHORT,0)},G=()=>{t.bindVertexArray(P.v);for(let e=0;e<6;e++)t.drawArrays(t.TRIANGLE_STRIP,31*e*2,62)},Y=(a,r)=>{t.useProgram(a.p),t.uniform3fv(a.u("uCam"),r),t.uniformMatrix4fv(a.u("uLuzVP"),!1,A),t.uniform3fv(a.u("uLuzPos"),y),t.uniform3fv(a.u("uLuzDir"),E),t.uniform2f(a.u("uCono"),R[0],R[1]),t.uniform2f(a.u("uRes"),e.width,e.height),t.uniform1i(a.u("uSombra"),1),t.uniform1f(a.u("uTexel"),1/$),t.uniform1f(a.u("uExpo"),1),t.uniform1i(a.u("uPasos"),B),t.uniform1i(a.u("uTela"),0)};return{medir(a){let t=Math.max(1,Math.round(e.clientWidth*a)),r=Math.max(1,Math.round(e.clientHeight*a));(e.width!==t||e.height!==r)&&(e.width=t,e.height=r),B=a<.9?6:t*r>9e5?8:10},pintar(r,o){let l=(e=>{for(let a=0;a<759;a++)V[4*a]=e.p[3*a],V[4*a+1]=e.p[3*a+1],V[4*a+2]=e.p[3*a+2],V[4*a+3]=e.cavidad[a];let a=e.pesoTotal();e.cuerdas.forEach((t,r)=>{let o=t.suelta?t.e:e.punto(t.idx),l=t.ancla,i=Math.hypot(...h(l,o)),n=t.suelta?0:Math.min(1.1,Math.sqrt(3*i*Math.max(0,t.l-i)/8)),s=t.suelta?0:Math.min(1,t.fuerza/(.3*a)),c=0;for(let e=0;e<=30;e++){let a=Math.pow(e/30,1.6),t=[o[0]+(l[0]-o[0])*a,o[1]+(l[1]-o[1])*a-4*n*a*(1-a),o[2]+(l[2]-o[2])*a],u=f([l[0]-o[0],l[1]-o[1]-4*n*(1-2*a),l[2]-o[2]]);e&&(c=a*i);for(let a=0;a<2;a++){let o=(31*r+e)*2+a;x.set(t,3*o),b.set(u,3*o),z[o]=c,T[o]=s}}}),t.bindBuffer(t.ARRAY_BUFFER,P.bs[0]),t.bufferSubData(t.ARRAY_BUFFER,0,x),t.bindBuffer(t.ARRAY_BUFFER,P.bs[1]),t.bufferSubData(t.ARRAY_BUFFER,0,b),t.bindBuffer(t.ARRAY_BUFFER,P.bs[3]),t.bufferSubData(t.ARRAY_BUFFER,0,z),t.bindBuffer(t.ARRAY_BUFFER,P.bs[4]),t.bufferSubData(t.ARRAY_BUFFER,0,T),t.bindTexture(t.TEXTURE_2D,U),t.texSubImage2D(t.TEXTURE_2D,0,0,0,33,23,t.RGBA,t.FLOAT,V);let{centro:r,eje:o}=e.carga3(),l=f(o),i=f(m(l,Math.abs(l[1])>.95?[1,0,0]:[0,1,0])),n=m(i,l);return{mCarga:H(l,n,i,r),mallas:[...e.cuerdas.map(a=>{let t=[e.normal[3*a.idx],e.normal[3*a.idx+1],e.normal[3*a.idx+2]],r=f(m(t,[0,0,1]));return H(r,t,m(r,t),e.punto(a.idx))}),...e.cuerdas.filter(e=>e.suelta).map(e=>{let a=f(h(e.ancla,e.e)),t=f(m(a,[0,0,1]));return H(a,t,m(a,t),[e.e[0],e.e[1]-.05,e.e[2]])})]}})(r);t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,U),t.bindFramebuffer(t.FRAMEBUFFER,k),t.viewport(0,0,$,$),t.clear(t.DEPTH_BUFFER_BIT),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1.6,2.5),t.useProgram(a.telaS.p),t.uniformMatrix4fv(a.telaS.u("uVP"),!1,A),t.uniform1i(a.telaS.u("uTela"),0),t.bindVertexArray(n.v),t.drawElements(t.TRIANGLES,n.n,t.UNSIGNED_SHORT,0),t.useProgram(a.bronceS.p),t.uniformMatrix4fv(a.bronceS.u("uVP"),!1,A),X(a.bronceS,l),t.useProgram(a.cuerdaS.p),t.uniformMatrix4fv(a.cuerdaS.u("uVP"),!1,A),t.uniform2f(a.cuerdaS.u("uRes"),$,$),t.uniform1f(a.cuerdaS.u("uFocal"),0===A[5]?1:1/Math.tan(28*Math.PI/180)),t.uniform1f(a.cuerdaS.u("uGrosor"),.011),t.uniform1f(a.cuerdaS.u("uMinPx"),2.5),G(),t.disable(t.POLYGON_OFFSET_FILL),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,e.width,e.height),t.clearColor(.006,.0045,.004,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,O),t.activeTexture(t.TEXTURE0);let i=e.width/Math.max(1,e.height),{vp:s,focal:c}=g(o,i);Y(a.tela,o.ojo),t.uniformMatrix4fv(a.tela.u("uVP"),!1,s),t.bindVertexArray(n.v),t.drawElements(t.TRIANGLES,n.n,t.UNSIGNED_SHORT,0),Y(a.bronce,o.ojo),t.uniformMatrix4fv(a.bronce.u("uVP"),!1,s),X(a.bronce,l),Y(a.suelo,o.ojo),t.uniformMatrix4fv(a.suelo.u("uVP"),!1,s),t.uniformMatrix4fv(a.suelo.u("uModelo"),!1,H([1,0,0],[0,1,0],[0,0,1],[0,0,0])),t.bindVertexArray(v.v),t.drawElements(t.TRIANGLES,v.n,t.UNSIGNED_SHORT,0),Y(a.fondo,o.ojo);let u=f(h(o.obj,o.ojo)),d=f(m(u,[0,1,0])),M=m(d,u);t.uniform3fv(a.fondo.u("uFwd"),u),t.uniform3fv(a.fondo.u("uDer"),d),t.uniform3fv(a.fondo.u("uArr"),M),t.uniform2f(a.fondo.u("uTan"),Math.tan(o.fov/2)*i,Math.tan(o.fov/2)),t.bindVertexArray(p.v),t.drawArrays(t.TRIANGLES,0,3),Y(a.cuerda,o.ojo),t.uniformMatrix4fv(a.cuerda.u("uVP"),!1,s),t.uniform2f(a.cuerda.u("uRes"),e.width,e.height),t.uniform1f(a.cuerda.u("uFocal"),c),t.uniform1f(a.cuerda.u("uGrosor"),.011),t.uniform1f(a.cuerda.u("uMinPx"),1.3),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.depthMask(!1),G(),t.depthMask(!0),t.disable(t.BLEND),t.bindVertexArray(null)},liberar(){r.forEach(e=>t.deleteBuffer(e)),o.forEach(e=>t.deleteVertexArray(e)),t.deleteTexture(U),t.deleteTexture(O),t.deleteFramebuffer(k),Object.values(a).forEach(e=>t.deleteProgram(e.p)),t.getExtension("WEBGL_lose_context")?.loseContext()}}}(a);l(!!r),r||(r=function(e){let a=e.getContext("2d");if(!a)return null;let t=1,r=new Int32Array(704),o=new Float32Array(704),l=new Float32Array(1518),i=Math.hypot(...y),n=[y[0]/i,y[1]/i,y[2]/i];return{medir(a){t=Math.min(2,a),e.width=Math.max(1,Math.round(e.clientWidth*t)),e.height=Math.max(1,Math.round(e.clientHeight*t))},pintar(i,s){let c=e.width,u=e.height,{vp:d}=g(s,c/Math.max(1,u)),h=a.createRadialGradient(.45*c,.42*u,0,.45*c,.42*u,.75*Math.max(c,u));h.addColorStop(0,"#1c1611"),h.addColorStop(1,"#050302"),a.fillStyle=h,a.fillRect(0,0,c,u);let f=s.ojo,m=e=>(e[0]-f[0])**2+(e[1]-f[1])**2+(e[2]-f[2])**2;for(let e=0;e<759;e++){let[a,t]=M(d,[i.p[3*e],i.p[3*e+1],i.p[3*e+2]],c,u);l[2*e]=a,l[2*e+1]=t}for(let e=0,a=0;e<22;e++)for(let t=0;t<32;t++,a++){let l=(33*e+t+33+1)*3;o[a]=m([(i.p[(33*e+t)*3]+i.p[l])/2,(i.p[(33*e+t)*3+1]+i.p[l+1])/2,(i.p[(33*e+t)*3+2]+i.p[l+2])/2]),r[a]=a}r.sort((e,a)=>o[a]-o[e]);let{centro:v,eje:p}=i.carga3(),x=m(v),b=!1,y=()=>{let e=M(d,[v[0]-.6474*p[0],v[1]-.6474*p[1],v[2]-.6474*p[2]],c,u),t=M(d,[v[0]+.6474*p[0],v[1]+.6474*p[1],v[2]+.6474*p[2]],c,u),r=M(d,v,c,u),o=M(d,[v[0],v[1]+.28,v[2]],c,u),l=Math.max(2,Math.abs(r[1]-o[1]));a.save();let i=a.createLinearGradient(r[0],r[1]-l,r[0],r[1]+l);i.addColorStop(0,"#c99560"),i.addColorStop(.45,"#6b4a2a"),i.addColorStop(1,"#22170e"),a.strokeStyle=i,a.lineCap="round",a.lineWidth=1.9*l,a.beginPath(),a.moveTo(e[0],e[1]),a.lineTo(t[0],t[1]),a.stroke(),a.restore()};a.lineWidth=.6*t;for(let e=0;e<704;e++){let t=r[e];!b&&o[t]<x&&(y(),b=!0);let s=t%32,c=33*Math.floor(t/32)+s,u=c+1,d=c+33,h=d+1,m=i.p,v=m[3*h]-m[3*c],p=m[3*h+1]-m[3*c+1],g=m[3*h+2]-m[3*c+2],M=m[3*d]-m[3*u],z=m[3*d+1]-m[3*u+1],E=m[3*d+2]-m[3*u+2],T=p*E-g*z,R=g*M-v*E,A=v*z-p*M,P=Math.hypot(T,R,A)||1;(f[0]-m[3*c])*T+(f[1]-m[3*c+1])*R+(f[2]-m[3*c+2])*A<0&&([T,R,A]=[-T,-R,-A]);let w=.5+.5*((T*n[0]+R*n[1]+A*n[2])/P),F=.16+.84*w*w;a.fillStyle=a.strokeStyle=`rgb(${Math.round(245*F)},${Math.round(232*F)},${Math.round(208*F)})`,a.beginPath(),a.moveTo(l[2*c],l[2*c+1]),a.lineTo(l[2*u],l[2*u+1]),a.lineTo(l[2*h],l[2*h+1]),a.lineTo(l[2*d],l[2*d+1]),a.closePath(),a.fill(),a.stroke()}for(let e of(b||y(),a.lineCap="butt",i.cuerdas)){let r=M(d,e.suelta?e.e:i.punto(e.idx),c,u),o=M(d,e.ancla,c,u),l=a.createLinearGradient(r[0],r[1],o[0],o[1]);l.addColorStop(0,"rgba(214,196,168,0.75)"),l.addColorStop(.6,"rgba(214,196,168,0)"),a.strokeStyle=l,a.lineWidth=1.3*t,a.beginPath(),a.moveTo(r[0],r[1]),a.lineTo(o[0],o[1]),a.stroke(),a.strokeStyle="#a8794a",a.lineWidth=1.5*t,a.beginPath(),a.arc(r[0],r[1],3.2*t,0,2*Math.PI),a.stroke()}},liberar(){}}}(a));let i=()=>a.clientWidth/Math.max(1,a.clientHeight);e.az=e.azMeta=B(i()).az;let n=()=>Math.min(Math.min(devicePixelRatio||1,2),Math.sqrt(7e5/Math.max(1,a.clientWidth*a.clientHeight)));e.escala=n();let s=()=>(function(e,a,t){let{el:r,fov:o}=B(a),l=2*Math.atan(Math.tan(o/2)*a),i=Math.max(2.35/Math.tan(o/2),2.2/Math.tan(l/2));return{ojo:[t[0]+i*Math.sin(e)*Math.cos(r),t[1]+i*Math.sin(r),t[2]+i*Math.cos(e)*Math.cos(r)],obj:t,fov:o}})(e.az,i(),e.obj),c=()=>{e.e&&r&&(e.e.derivar(),r.pintar(e.e,s()),(()=>{let t=e.e;if(!t)return;let r=a.clientWidth,o=a.clientHeight,{vp:l}=g(s(),r/Math.max(1,o));t.cuerdas.forEach((e,a)=>{let i=P.current[a];if(!i)return;let[n,s,c]=M(l,t.punto(e.idx),r,o);i.style.transform=`translate(${n.toFixed(1)}px, ${s.toFixed(1)}px)`,i.style.visibility=c>1||n<-20||n>r+20||s<-20||s>o+20?"hidden":"visible"});let i=t.reparto(),n=i.map(e=>Math.round(100*e)).join();n!==e.ultimoReparto&&(e.ultimoReparto=n,i.forEach((e,a)=>{let t=U.current[a],r=H.current[a];t&&(t.style.transform=`scaleY(${Math.min(1,e/.4).toFixed(3)})`),r&&(r.textContent=O(e))}))})())},u=a=>{let t=e.e;t&&(x({estado:t.cuerdas.some(e=>e.suelta)?"desequilibrio":e.alt.some(e=>Math.abs(e)>.01)?"tension":e.restaurando?"restaurado":"equilibrio",dato:a?function(e,a){let t=e.reparto(),r=0;t.forEach((e,a)=>e>t[r]&&(r=a));let[l,i]=e.lugarCarga(),n=l-a[0],s=i-a[1],c=Math.hypot(n,s),u=`La cuerda ${V[r]} es la m\xe1s cargada: sostiene el ${O(t[r])} del peso.`;if(c>.08){let e=0,a=0;o.forEach(([t,r],o)=>{let l=(t-16)*.11,i=(r-11)*.11,u=(l*n+i*s)/(Math.hypot(l,i)*c);u>e&&([e,a]=[u,o])}),u+=` Sobre la tela, la carga se ha desplazado ${k(c)} hacia el apoyo ${V[a]}.`}else u+=" La carga sigue en el centro de la tela.";let d=e.cuerdas.filter(e=>e.suelta).length;return d&&(u+=1===d?" Una cuerda está suelta.":" Dos cuerdas están sueltas."),u}(t,e.inicio):"La tela todavía se mueve: el peso se está repartiendo."}),v(t.cuerdas.map(e=>e.suelta&&!e.volviendo)))},p=a=>{e.raf=0;let t=e.e;if(!t)return;let o=e.ultimo?Math.min(.1,(a-e.ultimo)/1e3):1/60;if(e.ultimo=a,e.quieto&&!e.arrastre)for(let e=0;e<12&&t.quietud<30;e++)t.avanzar();else t.avanzar();e.az+=(e.azMeta-e.az)*(e.quieto?1:1-Math.exp(-(6*o)));let l=t.centro(),i=e.quieto?1:1-Math.exp(-(1.6*o)),n=0;for(let a=0;a<3;a++){let t=l[a]-.3*(1===a)-e.obj[a];e.obj[a]+=t*i,n=Math.max(n,Math.abs(t))}let s=Math.abs(e.azMeta-e.az)>1e-4||n>.004,d=t.quietud<30&&a-e.accion<14e3||s||!!e.arrastre;o>.03&&!e.quieto?++e.lentos>10&&e.escala>.55&&(e.escala*=.85,e.lentos=0,r?.medir(e.escala)):e.lentos=Math.max(0,e.lentos-1),e.quieto&&d&&!e.arrastre||c(),d&&e.visible?e.raf=requestAnimationFrame(p):d||u(!0)},b=(a=!0)=>{a&&(e.accion=performance.now()),!e.raf&&e.visible&&e.e&&(e.ultimo=0,e.raf=requestAnimationFrame(p))};X.current={despertar:b,resumir:u,vista:s,tam:()=>[a.clientWidth,a.clientHeight]};let $=!1,Y=()=>{e.escala=n(),r?.medir(e.escala),c()};Y();let W=new ResizeObserver(Y);W.observe(a);let Q=new IntersectionObserver(([a])=>a.isIntersecting&&(()=>{if(e.e||$)return;let a=new d,t=0,r=()=>{if($)return;if(a.asentar(3),(t+=3)<240)return void setTimeout(r,0);a.fijarInicial(),e.inicio=a.lugarCarga();let o=a.centro();e.obj=[o[0],o[1]-.3,o[2]],e.e=a,z(!0),c(),u(!0)};r()})(),{rootMargin:"120% 0px"});Q.observe(a);let K=new IntersectionObserver(([a])=>{e.visible=a.isIntersecting,e.visible&&b(!1)});K.observe(a);let Z=()=>{e.quieto=t.matches,b()};t.addEventListener("change",Z);let J=e=>{e.preventDefault(),l(!1)};return a.addEventListener("webglcontextlost",J),()=>{$=!0,W.disconnect(),Q.disconnect(),K.disconnect(),t.removeEventListener("change",Z),a.removeEventListener("webglcontextlost",J),cancelAnimationFrame(e.raf),e.raf=0,X.current=null,r?.liberar()}},[]);let Y=(e,a)=>{let t=G.current;if(!t.e||t.e.cuerdas[e].suelta)return;let r=$(Math.round(100*a)/100,-.8,1);t.alt[e]=r,t.restaurando=!1,t.e.altura(e,r),X.current?.despertar()},W=()=>{c([...G.current.alt]),X.current?.resumir(!1)},Q=e=>{let a=G.current.e;if(a){if(G.current.restaurando=!1,a.cuerdas[e].suelta)a.atar(e);else{if(!a.puedeSoltar(e))return;a.soltar(e)}X.current?.resumir(!1),X.current?.despertar()}},K=e=>{let a=G.current.arrastre;if(!a)return;let t=e.clientY-a.y0;Math.abs(t)>4&&(a.movido=!0),a.movido&&Y(a.k,a.d0-t*a.mpp)},Z=()=>{G.current.arrastre&&(G.current.arrastre=null,W(),X.current?.despertar())},J=u.filter(Boolean).length,ee=null===i||u[i]?null:u[(i+1)%6]||u[(i+5)%6]?"No se pueden soltar dos cuerdas vecinas: un lado entero de la tela quedaría colgando.":J>=2?"Ya hay dos cuerdas sueltas: ata una antes de soltar otra.":null,ea=r[p.estado];return(0,a.jsxs)("section",{id:"gravedad-invisible",className:"gv-sala","data-gl":!1===e?"no":"si","data-listo":b,"aria-labelledby":"gv-titulo","aria-roledescription":"instalación",children:[(0,a.jsxs)("header",{className:"gv-cabeza",children:[(0,a.jsx)("p",{className:"gv-ante",children:"Instalación de MANIFESTO"}),(0,a.jsx)("h2",{id:"gv-titulo",children:"La gravedad invisible"})]}),(0,a.jsxs)("div",{className:"gv-escena",role:"group",tabIndex:0,"aria-label":"La escultura: una tela sostenida por seis cuerdas, con una carga de bronce encima. Flechas izquierda y derecha para girar alrededor.",onKeyDown:e=>{if(e.target!==e.currentTarget||!X.current)return;let[a,t]=X.current.tam(),r=B(a/Math.max(1,t)).az,o=G.current;if("ArrowLeft"===e.key)o.azMeta=$(o.azMeta+.15,r-.75,r+.75);else if("ArrowRight"===e.key)o.azMeta=$(o.azMeta-.15,r-.75,r+.75);else{if("Home"!==e.key)return;o.azMeta=r}e.preventDefault(),X.current.despertar()},...{onPointerDown:e=>{if("touch"===e.pointerType){var a;return a=e,void(G.current.giro={x0:a.clientX,az0:G.current.azMeta})}G.current.giro={x0:e.clientX,az0:G.current.azMeta};try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}},onPointerMove:e=>{let a=G.current.giro;if(!a||!X.current)return;let[t,r]=X.current.tam(),o=B(t/Math.max(1,r)).az;G.current.azMeta=$(a.az0-(e.clientX-a.x0)*.006,o-.75,o+.75),X.current.despertar()},onPointerUp:()=>G.current.giro=null,onPointerCancel:()=>G.current.giro=null},children:[(0,a.jsx)("canvas",{ref:T,className:"gv-lienzo","aria-hidden":"true"}),(0,a.jsx)("div",{className:"gv-capa",children:o.map((e,t)=>(0,a.jsx)("div",{ref:e=>{P.current[t]=e},className:"gv-apoyo",role:"slider",tabIndex:b?0:-1,"data-sel":i===t,"data-suelta":u[t],"aria-label":`Apoyo ${V[t]}`,"aria-orientation":"vertical","aria-valuemin":-80,"aria-valuemax":100,"aria-valuenow":Math.round(100*s[t]),"aria-valuetext":u[t]?"Cuerda suelta. Intro para volver a atarla.":0===s[t]?"A su altura inicial":`${s[t]>0?"Sube":"Baja"} ${k(s[t])}`,onKeyDown:e=>{let a=G.current.alt[t],r="PageUp"===e.key||"PageDown"===e.key?.3:.1,o=null;if("ArrowUp"===e.key||"ArrowRight"===e.key||"PageUp"===e.key)o=a+r;else if("ArrowDown"===e.key||"ArrowLeft"===e.key||"PageDown"===e.key)o=a-r;else if("Home"===e.key)o=0;else{if("Enter"!==e.key&&" "!==e.key)return;e.preventDefault(),Q(t);return}e.preventDefault(),n(t),Y(t,o),W()},onFocus:()=>n(t),onPointerDown:e=>{e.stopPropagation();let a=G.current;if(n(t),!a.e||!X.current)return;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}let[r,o]=X.current.tam(),{vp:l}=g(X.current.vista(),r/Math.max(1,o)),i=a.e.punto(a.e.cuerdas[t].idx),s=M(l,i,r,o),c=M(l,[i[0],i[1]+1,i[2]],r,o);a.arrastre={k:t,y0:e.clientY,d0:a.alt[t],mpp:1/Math.max(40,Math.abs(s[1]-c[1])),movido:!1}},onPointerMove:K,onPointerUp:Z,onPointerCancel:Z,children:(0,a.jsx)("span",{"aria-hidden":"true",children:V[t]})},t))})]}),(0,a.jsxs)("div",{className:"gv-pie",children:[(0,a.jsxs)("div",{className:"gv-texto","aria-live":"polite",children:[(0,a.jsx)("h3",{children:ea.titulo}),(0,a.jsx)("p",{children:ea.texto}),p.dato?(0,a.jsx)("p",{className:"gv-dato",children:p.dato}):null]}),(0,a.jsxs)("div",{className:"gv-reparto","aria-hidden":"true",children:[(0,a.jsx)("p",{children:"El peso, cuerda a cuerda"}),(0,a.jsx)("div",{children:o.map((e,t)=>(0,a.jsxs)("span",{"data-suelta":u[t],"data-sel":i===t,children:[(0,a.jsx)("span",{className:"gv-reparto__via",children:(0,a.jsx)("span",{ref:e=>{U.current[t]=e}})}),(0,a.jsx)("b",{children:V[t]}),(0,a.jsx)("span",{ref:e=>{H.current[t]=e}})]},t))})]}),(0,a.jsxs)("div",{className:"gv-acciones",children:[null!==i?(0,a.jsx)("button",{type:"button",onClick:()=>Q(i),disabled:!!ee,children:u[i]?`Atar la cuerda ${V[i]}`:`Soltar la cuerda ${V[i]}`}):null,(0,a.jsxs)("button",{type:"button",className:"gv-restaurar",onClick:()=>{let e=G.current;e.e&&(e.alt=o.map(()=>0),e.restaurando=!0,e.azMeta=B(X.current?X.current.tam()[0]/Math.max(1,X.current.tam()[1]):1.6).az,e.e.restaurar(),c([...e.alt]),n(null),X.current?.resumir(!1),X.current?.despertar())},children:[(0,a.jsx)("span",{"aria-hidden":"true",children:"↺"})," Restaurar el equilibrio"]})]}),(0,a.jsx)("p",{className:"gv-pista",children:ee??"Arrastra un anillo hacia arriba o hacia abajo para mover su apoyo. Tócalo para poder soltar su cuerda."}),(0,a.jsx)("p",{className:"gv-nota",children:"Escultura imaginada por MANIFESTO, no una obra de Rubens. La tela, las cuerdas y el reparto del peso son una simulación aproximada que se calcula en esta página."})]}),(0,a.jsx)("div",{className:"gv-nojs",children:Object.keys(r).map(e=>(0,a.jsxs)("p",{children:[(0,a.jsxs)("strong",{children:[r[e].titulo,"."]})," ",r[e].texto]},e))})]})}],17669)},43807,e=>{"use strict";var a=e.i(43476),t=e.i(71645);let r=[{id:"pano",titulo:"El paño entre los dientes",x:.74,y:.11,texto:"Arriba, un hombre sujeta el sudario con la boca y apoya una mano en el travesaño. Desde aquí arranca la bajada."},{id:"brazo",titulo:"El brazo caído",x:.62,y:.27,texto:"El brazo cuelga casi recto: el cuerpo parece pender de la tela, no de sí mismo."},{id:"cabeza",titulo:"La cabeza",x:.51,y:.354,texto:"La cabeza ladeada, de ojos cerrados, es el punto donde la línea gira hacia la izquierda."},{id:"torso",titulo:"El torso",x:.58,y:.46,texto:"El torso se arquea sobre el paño; la cadera y la pierna doblada lo llevan hacia el suelo."},{id:"pies",titulo:"Los pies",x:.42,y:.645,texto:"La diagonal termina en los pies, recogidos por manos de mujer: el peso llega a tierra."}],o=[{id:"arriba",titulo:"Las manos de arriba",x:.52,y:.265,zoom:2.2,texto:"Desde la escalera, un hombre agarra el paño con una mano y alarga la otra hacia el cuerpo para guiarlo."},{id:"anciano",titulo:"El anciano de la túnica dorada",x:.352,y:.447,zoom:2.2,texto:"Con una mano recoge la punta del sudario, justo donde la tela roza el brazo de la Virgen."},{id:"virgen",titulo:"La Virgen",x:.415,y:.475,zoom:2.2,texto:"De azul, la Virgen alza una mano hacia el paño y mantiene la otra abierta, a la altura del pecho."},{id:"cristo",titulo:"La mano que ya no sostiene",x:.49,y:.535,zoom:2.4,texto:"La mano de Cristo cuelga abierta, sin agarrar nada, entre las que sí sostienen."},{id:"juan",titulo:"San Juan",x:.62,y:.55,zoom:2.2,texto:"De rojo y de espaldas, se inclina bajo el cuerpo para recibir su peso. Su manto es la mancha de color más fuerte del cuadro."},{id:"magdalena",titulo:"Las manos de abajo",x:.45,y:.63,zoom:2.2,texto:"Una mujer rubia (tradicionalmente, la Magdalena) sostiene los pies con las dos manos, a la altura del suelo."}],l=[{id:"claro",titulo:"Solo lo claro",filtro:"brightness(0.62) contrast(2.3)",x:.74,y:.27,texto:"Al subir el contraste sobreviven sobre todo el cuerpo y el paño blanco: la luz del cuadro cabe en una franja estrecha."},{id:"valores",titulo:"Valores",filtro:"grayscale(1) contrast(1.15)",x:.55,y:.42,texto:"Sin color se ve la estructura: una diagonal clara que cruza un fondo casi negro."},{id:"sombra",titulo:"Levantar sombras",filtro:"brightness(2.1) contrast(0.8) saturate(0.9)",x:.88,y:.6,texto:"Si se levantan las sombras aparece lo que el negro esconde: la escalera, las figuras de la derecha y los pliegues."}],i=`/manifesto-san-pedro-preview/descendimiento/descendimiento-${1400}.webp`,n=["La diagonal","Las manos","El claroscuro"],s=["I","II","III"],c=r.length-1,u=(e,a,t)=>Math.min(t,Math.max(a,e)),d=[{id:"natural",titulo:"Luz",filtro:"none"},...l],h=136,f=(()=>{let e=r.map(e=>[100*e.x,e.y*h]),a=`M${e[0][0].toFixed(2)},${e[0][1].toFixed(2)}`;for(let t=0;t<e.length-1;t++){let r=e[Math.max(0,t-1)],o=e[t],l=e[t+1],i=e[Math.min(e.length-1,t+2)];a+=` C${(o[0]+(l[0]-r[0])/6).toFixed(2)},${(o[1]+(l[1]-r[1])/6).toFixed(2)} ${(l[0]-(i[0]-o[0])/6).toFixed(2)},${(l[1]-(i[1]-o[1])/6).toFixed(2)} ${l[0].toFixed(2)},${l[1].toFixed(2)}`}return a})();function m(e){let a=Math.min(c-1e-6,Math.max(0,e*c)),t=Math.floor(a),o=a-t,l=e=>r[Math.min(c,Math.max(0,e))],i=l(t-1),n=l(t),s=l(t+1),u=l(t+2),d=(e,a,t,r)=>.5*(2*a+(t-e)*o+(2*e-5*a+4*t-r)*o*o+(3*a-e-3*t+r)*o*o*o);return[d(i.x,n.x,s.x,u.x),d(i.y,n.y,s.y,u.y)]}let v=(()=>{let e=[0],a=m(0);for(let t=1;t<=200;t++){let r=m(t/200);e.push(e[t-1]+Math.hypot(r[0]-a[0],(r[1]-a[1])*1.36)),a=r}return e.map(a=>a/e[200])})();function p(e){let[a,t]=m(e),r=Math.pow(Math.sin(Math.PI*e),.8);return{x:.5+(a-.5)*r,y:.5+(t-.5)*r,z:1+.75*r}}let x={x:.5,y:.5,z:1};e.s(["PesoDeLaLuz",0,function(){let[e,b]=(0,t.useState)(0),[g,M]=(0,t.useState)(0),[y,z]=(0,t.useState)(null),[E,T]=(0,t.useState)(0),[R,A]=(0,t.useState)(!1),P=(0,t.useRef)(null),w=(0,t.useRef)(null),F=(0,t.useRef)(null),j=(0,t.useRef)(null),L=(0,t.useRef)(null),S=(0,t.useRef)(null),N=(0,t.useRef)(null),q=(0,t.useRef)(null),C=(0,t.useRef)(null),_=(0,t.useRef)(null),D=(0,t.useRef)(!1),U=(0,t.useRef)(null),I=(0,t.useRef)({w:0,h:0,ex:0,ey:0,bw:0,bh:0,ox:0,oy:0,zw:0,zh:0,cam:{...x},camM:{...x},t:0,tM:0,osc:1,oscM:.88,foco:{x:.55,y:.42,r:0},focoM:{x:.55,y:.42,r:0},cortina:0,acto:0,actoVis:0,mano:null,lectura:0,lecturaFoco:0,limpio:!1,quieto:!1,visible:!1,raf:0,ultimo:0});(0,t.useEffect)(()=>{let e=I.current,a=L.current,t=P.current,r=w.current,i=a.getContext("2d"),n=matchMedia("(prefers-reduced-motion: reduce)");e.quieto=n.matches;let s=()=>{if(0===e.acto)e.oscM=.84,e.camM=p(e.tM);else if(1===e.acto){let a=null===e.mano?null:o[e.mano];e.camM=a?{x:a.x,y:a.y,z:a.zoom}:{...x},e.oscM=a?.84:.5,e.focoM=a?{x:a.x,y:a.y,r:.18}:{...e.focoM,r:0}}else{e.camM={...x},e.oscM=.9;let a=l[e.lectura-1];a&&e.lectura!==e.lecturaFoco?e.focoM={x:a.x,y:a.y,r:1}:e.focoM.r=1,e.lecturaFoco=e.lectura}e.limpio&&(e.camM={...x})},c=()=>{let a,t,r=e.bw*e.cam.z,o=e.bh*e.cam.z,l=e.ex-e.cam.x*r,n=e.ey-e.cam.y*o;l=r>=e.w?u(l,e.w-r,0):u(l,0,e.w-r),n=o>=e.h?u(n,e.h-o,0):u(n,0,e.h-o),Object.assign(e,{ox:l,oy:n,zw:r,zh:o});let s=`translate3d(${l.toFixed(2)}px, ${n.toFixed(2)}px, 0) scale(${e.cam.z.toFixed(4)})`;F.current.style.transform=s,j.current.style.transform=s,j.current.style.setProperty("--z",e.cam.z.toFixed(3)),q.current?.style.setProperty("stroke-dashoffset",String(1-((t=Math.floor(a=u(e.t,0,1)*(v.length-1)))>=v.length-1?1:v[t]+(v[t+1]-v[t])*(a-t)))),C.current&&(C.current.style.left=`${100*e.t}%`),_.current&&(_.current.style.transform=`scaleX(${e.t})`);let c=u(.2*e.bw,70,150),d=l+e.foco.x*r,h=n+e.foco.y*o,f=S.current,p=N.current,x=2===e.actoVis&&e.lectura>0&&!e.limpio;if(f.style.opacity=x?String(1-e.cortina):"0",x&&(f.style.width=f.style.height=`${2*c}px`,f.style.transform=`translate3d(${(d-c).toFixed(1)}px, ${(h-c).toFixed(1)}px, 0)`,p.style.width=`${r}px`,p.style.height=`${o}px`,p.style.transform=`translate3d(${(l-d+c).toFixed(1)}px, ${(n-h+c).toFixed(1)}px, 0)`),!i||(i.setTransform(.5,0,0,.5,0,0),i.globalCompositeOperation="source-over",i.clearRect(0,0,e.w,e.h),e.limpio))return;let b=Math.min(1,e.osc+e.cortina*(1-e.osc));i.fillStyle=`rgba(7, 4, 3, ${b.toFixed(3)})`,i.fillRect(0,0,e.w,e.h);let g=1-e.cortina;if(g<.01)return;i.globalCompositeOperation="destination-out";let M=(e,a,t,r)=>{let o=i.createRadialGradient(e,a,0,e,a,t);o.addColorStop(0,`rgba(0,0,0,${r})`),o.addColorStop(.3,`rgba(0,0,0,${.85*r})`),o.addColorStop(.65,`rgba(0,0,0,${.35*r})`),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(e-t,a-t,2*t,2*t)};if(0===e.actoVis){for(let a=0;a<e.t;a+=.04){let[e,t]=m(a);M(l+e*r,n+t*o,.13*r,.36*g)}let[a,t]=m(e.t);M(l+a*r,n+t*o,.23*r,g)}else 1===e.actoVis?e.foco.r>.002&&M(d,h,e.foco.r*r,g):M(d,h,c*e.foco.r*1.45,g)},d=a=>{e.raf=0;let t=e.ultimo?Math.min(.1,(a-e.ultimo)/1e3):1/60;e.ultimo=a;let r=e.quieto?1:1-Math.exp(-(3*t)),o=e.quieto?1:1-Math.exp(-(16*t)),l=0,i=(e,a,t)=>{let r=a-e;return 1e-4>Math.abs(r)?a:(l=Math.max(l,Math.abs(r)),e+r*t)};e.actoVis!==e.acto?(e.cortina=e.quieto?1:i(e.cortina,1,1-Math.exp(-(9*t))),e.cortina>.97&&(e.actoVis=e.acto,e.cam={...e.camM},e.foco={...e.focoM},e.quieto&&(e.cortina=0)),l=Math.max(l,1)):e.cortina=i(e.cortina,0,1-Math.exp(-(2.4*t))),e.t=i(e.t,e.tM,e.quieto?1:1-Math.exp(-(4*t))),0!==e.acto||e.limpio||(e.camM=p(e.t)),e.cam.x=i(e.cam.x,e.camM.x,r),e.cam.y=i(e.cam.y,e.camM.y,r),e.cam.z=i(e.cam.z,e.camM.z,r),e.osc=i(e.osc,e.oscM,e.quieto?1:1-Math.exp(-(1.6*t)));let n=2===e.acto?o:r;e.foco.x=i(e.foco.x,e.focoM.x,n),e.foco.y=i(e.foco.y,e.focoM.y,n),e.foco.r=i(e.foco.r,e.focoM.r,r),c(),l>0&&e.visible&&(e.raf=requestAnimationFrame(d))},h=()=>{!e.raf&&e.visible&&(e.ultimo=0,e.raf=requestAnimationFrame(d))},f=()=>{let o=t.getBoundingClientRect(),l=r.getBoundingClientRect();for(let a of(e.w=o.width,e.h=o.height,e.bw=Math.min(l.width,l.height/1.36),e.bh=1.36*e.bw,e.ex=l.left-o.left+l.width/2,e.ey=l.top-o.top+l.height/2,[F.current,j.current]))a.style.width=`${e.bw}px`,a.style.height=`${e.bh}px`;a.width=Math.max(1,Math.round(.5*e.w)),a.height=Math.max(1,Math.round(.5*e.h)),c()};U.current={sincronizar:()=>{s(),h()},despertar:h},s(),e.cam={...e.camM},f();let b=new ResizeObserver(f);b.observe(t),b.observe(r);let g=new IntersectionObserver(([a])=>{e.visible=a.isIntersecting,e.visible&&h()});g.observe(t);let M=()=>{e.quieto=n.matches,h()};return n.addEventListener("change",M),()=>{b.disconnect(),g.disconnect(),n.removeEventListener("change",M),cancelAnimationFrame(e.raf),e.raf=0,U.current=null}},[]),(0,t.useEffect)(()=>{Object.assign(I.current,{acto:e,mano:y,lectura:E,limpio:R}),U.current?.sincronizar()},[e,y,E,R]);let V=e=>{let a=u(e,0,c);I.current.tM=a/c,M(a),U.current?.sincronizar()},$=e=>{let a=e.currentTarget.getBoundingClientRect(),t=u((e.clientX-a.left)/a.width,0,1);I.current.tM=t,M(Math.round(t*c)),U.current?.sincronizar()},O=e=>{let a=I.current,t=e.currentTarget.getBoundingClientRect(),r="touch"===e.pointerType?72:24*("pen"===e.pointerType);a.focoM.x=u((e.clientX-t.left-a.ox)/a.zw,0,1),a.focoM.y=u((e.clientY-t.top-r-a.oy)/a.zh,0,1),U.current?.despertar()},k=(()=>{if(0===e){let e=r[g];return{n:`${g+1} / ${r.length}`,titulo:e.titulo,texto:e.texto}}if(1===e){if(null===y)return{n:`${o.length} manos`,titulo:"¿Quién sostiene el peso?",texto:"Unas manos agarran, otras reciben y una ya no sostiene nada. Elige una sobre el cuadro."};let e=o[y];return{n:`${y+1} / ${o.length}`,titulo:e.titulo,texto:e.texto}}if(0===E)return{n:"Luz",titulo:"La luz natural",texto:"Lleva la luz por la tabla y deja que el resto vuelva a la sombra."};let a=l[E-1];return{n:`Lectura ${E} / ${l.length}`,titulo:a.titulo,texto:a.texto}})();return(0,a.jsxs)("section",{id:"peso-de-la-luz",className:"pz-sala","data-acto":e,"data-limpio":R,"aria-labelledby":"pz-titulo","aria-roledescription":"instalación",onKeyDown:a=>{"Escape"===a.key&&1===e&&null!==y&&(z(null),a.preventDefault())},children:[(0,a.jsxs)("header",{className:"pz-cabeza",children:[(0,a.jsx)("p",{className:"pz-ante",children:"Instalación de MANIFESTO"}),(0,a.jsx)("h2",{id:"pz-titulo",children:"El peso de la luz"}),(0,a.jsxs)("button",{type:"button",className:"pz-limpio","aria-pressed":R,onClick:()=>A(!R),children:[(0,a.jsx)("span",{"aria-hidden":"true",children:"◐"})," Sin efectos"]}),(0,a.jsx)("div",{className:"pz-actos",role:"group","aria-label":"Momento",children:n.map((t,r)=>(0,a.jsxs)("button",{type:"button","aria-pressed":e===r,onClick:()=>{r!==e&&(1===r&&z(null),b(r))},children:[(0,a.jsx)("span",{"aria-hidden":"true",children:s[r]})," ",t]},t))})]}),(0,a.jsx)("div",{ref:w,className:"pz-encuadre","aria-hidden":"true"}),(0,a.jsxs)("div",{ref:P,className:"pz-vista",role:"group","aria-label":2===e?"La tabla en penumbra. Mueve la luz con las flechas.":"La tabla de Rubens",tabIndex:2===e?0:-1,onKeyDown:a=>{if(2!==e)return;let t={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]}[a.key];if(!t)return;a.preventDefault();let r=I.current;r.focoM.x=u(r.focoM.x+.04*t[0],0,1),r.focoM.y=u(r.focoM.y+.03*t[1],0,1),U.current?.despertar()},onPointerDown:a=>{if(2===e){D.current=!0;try{a.currentTarget.setPointerCapture(a.pointerId)}catch{}O(a)}},onPointerMove:a=>{2===e&&("mouse"===a.pointerType||D.current)&&O(a)},onPointerUp:()=>D.current=!1,onPointerCancel:()=>D.current=!1,children:[(0,a.jsxs)("div",{ref:F,className:"pz-lienzo",children:[(0,a.jsx)("img",{src:i,width:1400,height:1904,alt:"",loading:"lazy",decoding:"async",draggable:!1}),(0,a.jsx)("svg",{viewBox:`0 0 100 ${h}`,preserveAspectRatio:"none","aria-hidden":"true",children:(0,a.jsx)("path",{ref:q,d:f,pathLength:1})})]}),(0,a.jsx)("canvas",{ref:L,className:"pz-velo","aria-hidden":"true"}),(0,a.jsx)("div",{ref:S,className:"pz-lente","aria-hidden":"true",children:(0,a.jsx)("img",{ref:N,src:i,width:1400,height:1904,alt:"",loading:"lazy",decoding:"async",draggable:!1,style:{filter:d[E].filtro}})}),(0,a.jsxs)("div",{ref:j,className:"pz-capa",children:[0===e?r.map((e,t)=>(0,a.jsx)("button",{type:"button",className:"pz-hito","data-on":t===g,tabIndex:-1,"aria-hidden":"true",style:{left:`${100*e.x}%`,top:`${100*e.y}%`},onClick:()=>V(t)},e.id)):null,1===e?o.map((e,t)=>(0,a.jsx)("button",{type:"button",className:"pz-mano","aria-pressed":y===t,"aria-label":e.titulo,style:{left:`${100*e.x}%`,top:`${100*e.y}%`},onClick:()=>z(y===t?null:t)},e.id)):null]})]}),(0,a.jsxs)("div",{className:"pz-pie",children:[(0,a.jsxs)("div",{className:"pz-texto","aria-live":"polite",children:[(0,a.jsxs)("p",{className:"pz-texto__n",children:[(0,a.jsxs)("span",{"aria-hidden":"true",children:[s[e]," · "]}),k.n]}),(0,a.jsx)("h3",{children:k.titulo}),(0,a.jsx)("p",{children:k.texto}),2===e?(0,a.jsxs)("p",{className:"pz-dato",children:["En la reproducción, ",55," ","% de la superficie es casi negra y solo ",7," ","% es clara."]}):null]}),(0,a.jsxs)("div",{className:"pz-accion",children:[0===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"pz-hilo",role:"slider",tabIndex:0,"aria-label":"Bajar el cuerpo por la diagonal","aria-valuemin":1,"aria-valuemax":r.length,"aria-valuenow":g+1,"aria-valuetext":`${g+1} de ${r.length}: ${r[g].titulo}`,onKeyDown:e=>{let a={ArrowRight:1,ArrowDown:1,PageDown:1,ArrowLeft:-1,ArrowUp:-1,PageUp:-1}[e.key];if(a)V(g+a);else if("Home"===e.key)V(0);else{if("End"!==e.key)return;V(c)}e.preventDefault()},onPointerDown:e=>{D.current=!0;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}$(e)},onPointerMove:e=>D.current&&$(e),onPointerUp:()=>{D.current=!1,V(Math.round(I.current.tM*c))},onPointerCancel:()=>D.current=!1,children:[(0,a.jsx)("span",{className:"pz-hilo__via",children:(0,a.jsx)("span",{ref:_,className:"pz-hilo__lleno"})}),r.map((e,t)=>(0,a.jsx)("span",{className:"pz-hilo__marca","data-on":t<=g,style:{left:`${t/c*100}%`}},e.id)),(0,a.jsx)("span",{ref:C,className:"pz-hilo__asa"})]}),(0,a.jsxs)("p",{className:"pz-pista","aria-hidden":"true",children:[(0,a.jsx)("span",{children:"Arriba"})," Arrastra para bajar el cuerpo ",(0,a.jsx)("span",{children:"Tierra"})]})]}):null,1===e?null===y?(0,a.jsx)("p",{className:"pz-pista",children:"Toca uno de los seis círculos sobre la tabla."}):(0,a.jsxs)("div",{className:"pz-pasos",children:[(0,a.jsx)("button",{type:"button",onClick:()=>z((y+o.length-1)%o.length),"aria-label":"Mano anterior",children:"←"}),(0,a.jsx)("button",{type:"button",onClick:()=>z((y+1)%o.length),"aria-label":"Mano siguiente",children:"→"}),(0,a.jsx)("button",{type:"button",className:"pz-todo",onClick:()=>z(null),children:"Todo el cuadro"})]}):null,2===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"pz-lecturas",role:"group","aria-label":"Lectura de la luz",children:d.map((e,t)=>(0,a.jsx)("button",{type:"button","aria-pressed":E===t,onClick:()=>T(t),children:e.titulo},e.id))}),(0,a.jsx)("p",{className:"pz-pista","aria-hidden":"true",children:"Arrastra sobre la tabla para llevar la luz."})]}):null]}),(0,a.jsx)("p",{className:"pz-nota",children:"La penumbra, la luz y los filtros son una capa de esta página sobre la reproducción; «Sin efectos» la retira."})]}),(0,a.jsx)("div",{className:"pz-nojs",children:[{titulo:n[0],items:r},{titulo:n[1],items:o},{titulo:n[2],items:l}].map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{children:[s[t]," · ",e.titulo]}),(0,a.jsx)("ol",{children:e.items.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{children:[e.titulo,"."]})," ",e.texto]},e.id))})]},e.titulo))})]})}],43807)}]);