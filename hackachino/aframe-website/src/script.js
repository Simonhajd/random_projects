document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');

  const shapes = [
    () => {
      const shape = document.createElement('a-box');
      shape.setAttribute('color', '#4CC3D0');
      return shape;
    },
    () => {
      const shape = document.createElement('a-sphere');
      shape.setAttribute('radius', '1.25');
      shape.setAttribute('color', '#EF2D5E');
      return shape;
    },
    () => {
      const shape = document.createElement('a-cylinder');
      shape.setAttribute('radius', '0.5');
      shape.setAttribute('height', '1.5');
      shape.setAttribute('color', '#FFC65D');
      return shape;
    },
    () => {
      const shape = document.createElement('a-cone');
      shape.setAttribute('color', '#7BC8A4');
      shape.setAttribute('radius-bottom', '0.8');
      shape.setAttribute('radius-top', '0.1');
      shape.setAttribute('height', '1.5');
      return shape;
    },
    () => {
      const shape = document.createElement('a-torus');
      shape.setAttribute('color', '#F16745');
      shape.setAttribute('radius', '1');
      shape.setAttribute('radius-tubular', '0.2');
      return shape;
    },
    () => {
      const shape = document.createElement('a-octahedron');
      shape.setAttribute('color', '#763D8B');
      shape.setAttribute('radius', '1');
      return shape;
    },
    () => {
      const shape = document.createElement('a-dodecahedron');
      shape.setAttribute('color', '#FFD700');
      shape.setAttribute('radius', '1');
      return shape;
    },
    () => {
      const shape = document.createElement('a-tetrahedron');
      shape.setAttribute('color', '#00BFFF');
      shape.setAttribute('radius', '1');
      return shape;
    },
    () => {
      const shape = document.createElement('a-plane');
      shape.setAttribute('color', '#A3A3A3');
      shape.setAttribute('width', '1');
      shape.setAttribute('height', '1');
      shape.setAttribute('rotation', '-90 0 0');
      return shape;
    },
    () => {
      const shape = document.createElement('a-ring');
      shape.setAttribute('color', '#FF69B4');
      shape.setAttribute('radius-inner', '0.5');
      shape.setAttribute('radius-outer', '1');
      return shape;
    },
    () => {
      const shape = document.createElement('a-circle');
      shape.setAttribute('color', '#228B22');
      shape.setAttribute('radius', '1');
      return shape
    }
  ];

  setInterval(() => {
    const x = (Math.random() - 0.5) * 200;
    const y = Math.random() * 4 + 0.5;
    const z = (Math.random() - 0.5) * 200;

    const entity = shapes[Math.floor(Math.random() * shapes.length)]();
    entity.setAttribute('position', `${x} ${y} ${z}`);
    scene.appendChild(entity);
  }, 3);
});