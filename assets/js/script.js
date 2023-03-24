let log = new Log(document.querySelector('.log'))
let char = new Sorcerer('Michel');
let monster = new LittleMoster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'), 
    document.querySelector('#monster'),
    log

);

stage.start();