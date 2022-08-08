export interface DialItem {
    chars: Array<string>;
    num: number;
};

const DIAL_DATA : Array<DialItem> = [
    { num: 1, chars: []},
    { num: 2, chars: ['a', 'b', 'c']},
    { num: 3, chars: ['d', 'e', 'f']},
    { num: 4, chars: ['g', 'h', 'i']},
    { num: 5, chars: ['j', 'k', 'l']},
    { num: 6, chars: ['m', 'n', 'o']},
    { num: 7, chars: ['p', 'q', 'r', 's']},
    { num: 8, chars: ['t', 'u', 'v']},
    { num: 9, chars: ['w', 'x', 'y', 'z']},
];

export default DIAL_DATA;