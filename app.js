const fs = require('fs');
const readline = require('readline');

const commands = {
  P(args) {
    const value = args[0];
    console.log(`${value}번 펜을 선택한다`);
  },
  D() {
    console.log(`펜을 종이에 가져다 댄다`);
  },
  W(args) {
    const value = args[0];
    console.log(`서쪽으로 ${value}cm 이동하며 그린다`);
  },
  N(args) {
    const value = args[0];
    console.log(`북쪽으로 ${value}cm 이동하며 그린다`);
  },
  E(args) {
    const value = args[0];
    console.log(`서쪽으로 ${value}cm 이동하며 그린다`);
  },
  S(args) {
    const value = args[0];
    console.log(`남쪽 ${value}cm 이동하며 그린다`);
  },
  U() {
    console.log(`펜을 종이에서 뗀다`);
  },
}

const parse = (input) => {
  const [command, ...args] = input.split(' ').filter((it) => it);
  return {
    command,
    args,
  };
}

(async () => {
  const [, , path] = process.argv;
  if (!path) {
    console.log('파일경로를 입력해 주세요.');
    return;
  }

  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const { command, args } = parse(line);
    commands[command](args);
  })
})();
