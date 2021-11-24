// Actions

const CREATE = 'dictionary/CREATE';

//초기값
const initialState = {
    list: [
        {word: "word", meaning:"단어, 낱말", example:"Do not write more than 200 words."},
        {word: "hello", meaning:"인사, 여보세요", example:"Hello John, how are you?"}
    ]
};


// Action Creators

export function createDictionary(dictionary) {
  return { type: CREATE, dictionary };
};


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "dictionary/CREATE": {
          const new_dic = [{}];
          return { list: new_dic };
      }
      default: return state;
    }
  }