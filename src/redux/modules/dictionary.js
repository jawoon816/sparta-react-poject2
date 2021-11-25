// Actions

const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';


//초기값
const initialState = {
    list: [
        {word: "word", meaning:"단어, 낱말", example:"Do not write more than 200 words."},
        {word: "hello", meaning:"인사, 여보세요", example:"Hello John, how are you?"},
        {word: "voyage", meaning:"여행, 항해", example:"an around-the-world voyage"},
    ]
};


// Action Creators

export function createDictionary(dictionary) {
  console.log("액션 생성")
  return { type: CREATE, dictionary };
};


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "dictionary/CREATE": {
        console.log("이제 값을 바꿀거야")
          const new_dic = [...state.list, action.dictionary];
          return { list: new_dic };
      }
      default: return state;
    }
  }