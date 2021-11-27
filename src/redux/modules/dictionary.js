import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "@firebase/firestore";

// Actions
const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';
const UPDATE = 'dictionary/UPDATE';
const DELETE = 'dictionary/DELETE';


//초기값
const initialState = {
  list: [
    // { word: "word", meaning: "단어, 낱말", example: "Do not write more than 200 words." },
    // { word: "hello", meaning: "인사, 여보세요", example: "Hello John, how are you?" },
    // { word: "voyage", meaning: "여행, 항해", example: "an around-the-world voyage" },
  ]
};


// Action Creators

export function loadDictionary(dictionary_list) {
  return { type: LOAD, dictionary_list };
}

export function createDictionary(dictionary) {
  return { type: CREATE, dictionary };
};

export function updateDictionary(dictionary_list){
  return {type: UPDATE, dictionary_list};
}


//middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));

    let dictionary_list = [];

    dictionary_data.forEach((d) => {
      dictionary_list.push({ id: d.id, ...d.data() });
    });

    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: _dictionary.id, ..._dictionary.data() }

    dispatch(createDictionary(dictionary_data));
  }
}

export const updateDictionaryFB = (dictionary) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dictionary.id);
    await updateDoc(docRef, {word: dictionary.word, meaning: dictionary.meaning, example: dictionary.example});

    const _dic_list = getState().dictionary.list;
    const dic_index = _dic_list.findIndex((d)=>{
        return d.id === dictionary.id;
    })

    // 기존에 있던 리덕스 데이터를 수정 값으로 변경
    _dic_list[dic_index].word = dictionary.word
    _dic_list[dic_index].meaning = dictionary.meaning
    _dic_list[dic_index].example = dictionary.example

    dispatch(updateDictionary(_dic_list));
  }
}


export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch, getstate) {
    if(!dictionary_id){
      window.alert("아이디가 없습니다!")
      return;
    }
    const docRef = doc(db, "dictionary", dictionary_id);
    await deleteDoc(docRef);
  }
}

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

    case "dictionary/UPDATE": {
      // const new_dictionary_list = state.list.map((l,idx)=>{
          
      //     if (parseInt(action.dictionary_index) === idx){
      //         return {...l, completed: true};
      //     } else {
      //         return l;
      //     }
      // });

      // 수정된 리스트를 새 배열로 리턴
      return {list: [...action.dictionary_list]};
  }
    default: return state;
  }


}