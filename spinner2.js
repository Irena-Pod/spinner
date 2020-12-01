const array = ['\r|    ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ',
 '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'    ]

array.forEach((char, i) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, i * 200);
});






