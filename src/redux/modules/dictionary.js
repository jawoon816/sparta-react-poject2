import { db } from "../../firebase";
import { collection, dpc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "@firebase/firestore";

// Actions
const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';


//초기값
const initialState = {
  list: [
    { word: "word", meaning: "단어, 낱말", example: "Do not write more than 200 words." },
    { word: "hello", meaning: "인사, 여보세요", example: "Hello John, how are you?" },
    { word: "voyage", meaning: "여행, 항해", example: "an around-the-world voyage" },
  ]
};


// Action Creators

export function loadDictionary(dictionary_list) {
  return { type: LOAD, dictionary_list };
}

export function createDictionary(dictionary) {
  return { type: CREATE, dictionary };
};


//middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));

    let dictionary_list = [];

    dictionary_data.forEach((d) => {
      dictionary_list.push({ id: d.id, ...d.data() });
    });

    console.log(dictionary_list);

    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: _dictionary.id, ..._dictionary.data() }
    console.log(dictionary_data);

    dispatch(createDictionary(dictionary_data));
  }
}

export const updateDictionaryFB = () => {
  return function (dispatch) {

  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.dictionary_list };
    }
    case "dictionary/CREATE": {
      const new_dic = [...state.list, action.dictionary];
      return { list: new_dic };
    }
    default: return state;
  }
}