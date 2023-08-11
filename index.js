const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { sniffBytes } = require('sniff-bytes');

async function loadFixture(name) {
  return (await readFile(path.join('.', 'fixtures', name))).buffer;
}

async function test() {
  const jpg = await loadFixture('pit-droids.jpg');
  console.log(sniffBytes(jpg));

  const gif = await loadFixture('squirrel.gif');
  console.log(sniffBytes(gif));
}

test().then(() => {});
