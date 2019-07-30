let sentence = "hello there from lighthouse labs";
let delay = 0;
sentence += "\n";
for ( const char of sentence) {
  // console.log(char);
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 50;
}