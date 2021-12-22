export default {
  firebaseKeys: {
    apiKey: "AIzaSyACOg0r9cGLp0AB_JXjoArf1gFQOhH9LcI",
    authDomain: "wordswipe-test.firebaseapp.com",
    databaseURL: "https://wordswipe-test-default-rtdb.firebaseio.com",
    projectId: "wordswipe-test",
    storageBucket: "wordswipe-test.appspot.com",
  },
  home: {
    title: "Rapid Online Assessment of Reading",
    tagline: "Are the words real or fake?",
  },
  shufflingMethod: "random",
  // shufflingMethod: "leastSeen",
  needsTutorial: true,
  manifestUrl: "",
  widgetType: "WordSwipe",
  mode: "Assessment", // "Data Annotation"
  widgetProperties: {
    baseUrlTemplate: "",
    delimiter: "__",
    showFixationCross: true,
    leftSwipe: {
      label: "Fake Word",
      value: -1,
    },
    rightSwipe: {
      label: "Real Word",
      value: 1,
    },
    timing: {
      stimulusDuration: 10_000,
      timeoutValue: 0,
      interStimuliDuration: 2000,
      stimulusFadeIn: false,
    },
  },
  iconAttribute: {
    name: "openmoji",
    url: "http://openmoji.org",
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 20,
      max: 50,
      character: "fish",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true",
    },
    2: {
      level: 2,
      min: 51,
      max: 100,
      character: "frog",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true",
    },
    3: {
      level: 3,
      min: 101,
      max: 150,
      character: "duck",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true",
    },
    4: {
      level: 4,
      min: 151,
      max: 200,
      character: "koala",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true",
    },
    5: {
      level: 5,
      min: 201,
      max: 250,
      character: "cat",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true",
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: "lion",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true",
    },
  },
  tutorial: {},
  play: {
    question: "Are these words real or fake?",
    swipeRightLabel: "Swipe right for real words",
    swipeLeftLabel: "Swipe left for fake words",
  },
};
