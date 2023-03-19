const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let time = -100;
// displays each index of animation at a set time interval
for (let i = 0; i < animation.length; i++) {
  if (time <= 1700) {
    setTimeout(() => {
      process.stdout.write(animation[i]);
    }, time += 200);
  }
}
// puts the cursor on a new line after the animation has finished
setTimeout(() => {
  process.stdout.write('\n');
}, 1701);