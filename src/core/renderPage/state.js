const separations = {
  row1: [
    {
      id: 1,
      class: 'calc__butt memory-operation',
      data: 'mr',
      value: 'mr'
    },
    {
      id: 2,
      class: 'calc__butt operation',
      data: '10x',
      value: '10 '
    },
    {
      id: 3,
      class: 'calc__butt operation',
      data: 'log',
      value: 'log '
    },
    {
      id: 4,
      class: 'calc__butt undo',
      data: 'undo',
      value: 'C'
    },
    {
      id: 5,
      class: 'calc__butt clear',
      data: 'AC',
      value: 'AC'
    },
    {
      id: 6,
      class: 'calc__butt operation',
      data: '%',
      value: '%'
    },
    {
      id: 7,
      class: 'calc__butt operation expr',
      data: '/',
      value: ''
    }
  ],
  row2: [
    {
      id: 8,
      class: 'calc__butt memory-operation',
      data: 'm-',
      value: 'm-'
    },
    {
      id: 9,
      class: 'calc__butt operation',
      data: 'exp',
      value: 'e '
    },
    {
      id: 10,
      class: 'calc__butt operation',
      data: 'ln',
      value: 'ln'
    },
    {
      id: 11,
      class: 'calc__butt num',
      data: '7',
      value: '7'
    },
    {
      id: 12,
      class: 'calc__butt num',
      data: '8',
      value: '8'
    },
    {
      id: 13,
      class: 'calc__butt num',
      data: '9',
      value: '9'
    },
    {
      id: 14,
      class: 'calc__butt operation expr',
      data: '*',
      value: 'x'
    }
  ],
  row3: [
    {
      id: 15,
      class: 'calc__butt memory-operation',
      data: 'm+',
      value: 'm+'
    },
    {
      id: 16,
      class: 'calc__butt operation',
      data: '^',
      value: 'x '
    },
    {
      id: 17,
      class: 'calc__butt operation',
      data: '^(1/',
      value: '√x'
    },
    {
      id: 18,
      class: 'calc__butt num',
      data: '4',
      value: '4'
    },
    {
      id: 19,
      class: 'calc__butt num',
      data: '5',
      value: '5'
    },
    {
      id: 20,
      class: 'calc__butt num',
      data: '6',
      value: '6'
    },
    {
      id: 21,
      class: 'calc__butt operation expr',
      data: '-',
      value: '-'
    }
  ],
  row4: [
    {
      id: 22,
      class: 'calc__butt memory-operation',
      data: 'mc',
      value: 'mc'
    },
    {
      id: 23,
      class: 'calc__butt operation',
      data: 'x3',
      value: 'x '
    },
    {
      id: 24,
      class: 'calc__butt operation',
      data: '3x',
      value: '√x'
    },
    {
      id: 25,
      class: 'calc__butt num',
      data: '1',
      value: '1'
    },
    {
      id: 26,
      class: 'calc__butt num',
      data: '2',
      value: '2'
    },
    {
      id: 27,
      class: 'calc__butt num',
      data: '3',
      value: '3'
    },
    {
      id: 28,
      class: 'calc__butt operation expr',
      data: '+',
      value: '+'
    }
  ],
  row5: [
    {
      id: 29,
      class: 'calc__butt operation frame-left',
      data: '1/x',
      value: '1/x'
    },
    {
      id: 30,
      class: 'calc__butt operation',
      data: 'x2',
      value: 'x '
    },
    {
      id: 31,
      class: 'calc__butt operation',
      data: '2x',
      value: '√x'
    },
    {
      id: 32,
      class: 'calc__butt num',
      data: '0',
      value: '0'
    },
    {
      id: 33,
      class: 'calc__butt negative-operation',
      data: '+/-',
      value: '+/-'
    },
    {
      id: 34,
      class: 'calc__butt num',
      data: '.',
      value: ','
    },
    {
      id: 35,
      class: 'calc__butt equels expr frame-right',
      data: '=',
      value: '='
    }
  ]
};

const additions = {
  2: {
    class: 'sup',
    data: '10x',
    value: 'x'
  },
  3: {
    class: 'sub',
    data: 'log',
    value: '10'
  },
  7: {
    class: 'div__size',
    data: '/',
    value: '÷'
  },
  9: {
    class: 'sup',
    data: 'exp',
    value: 'x'
  },
  16: {
    class: 'sup',
    data: 'exp',
    value: 'y'
  },
  17: {
    class: 'sup',
    data: 'exp',
    value: 'y'
  },
  23: {
    class: 'sup',
    data: 'x3',
    value: '3'
  },
  24: {
    class: 'sup',
    data: '3x',
    value: '3'
  },
  30: {
    class: 'sup',
    data: 'x2',
    value: '2'
  }
};

export { separations, additions };

