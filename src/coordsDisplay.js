const wrapper = document.querySelector(".wrapper");

// Named export:
export const displayMouseCoords = ({ x, y }) => {
  wrapper.textContent = `Your X mouse coord: ${x}, your Y mouse coord: ${y}`;
};
