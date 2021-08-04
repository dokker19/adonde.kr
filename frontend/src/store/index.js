import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// import axios from 'axios'
// import {BASE_URL} from '@/api.js'
export default new Vuex.Store({
    state:{
        //data
        isSubmitValueChange:false,
        searchDisabled:true,
        disabled:true,
        checkCurrentDisabled: true,
        submitValue:null,
        currentAdd:"",
        clickItemNum: null,
        searchResults: [],
        positions :[
            {
                title: '부산', 
                lat: 35.1795543,
                lng: 129.0756416,
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            },
            {
                title: '대구', 
                lat: 35.8714354,
                lng: 128.6014450,
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'

            },
            {
                title: '인천', 
                lat: 37.4562557,
                lng: 126.7052062,
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'

            },
            {
                title: '광주',
                lat: 35.1595454,
                lng: 126.8526012,
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            }
        ],
    },
    mutations:{
    updateCurrentAdd(state, start){
        state.currentAdd = start
    },
    updateClickItemNum(state , val){
        state.clickItemNum = val
    },
    updateSubmitValue(state , val){
        state.isSubmitValueChange = true
        console.log('update submit value: ', val)
        state.submitValue = val
    },
    updateSearchResults(state, val){
        state.searchResults = val
    },
    updateCheckCurrentDisabled(state, val){
        state.checkCurrentDisabled = val
    },
    updateDisabled(state, val){
        state.disabled = val
    },
    updateSearchDisabled(state, val){
        state.searchDisabled = val
    },
    updateSearchLoading(state, val){
        state.searchLoading = val
    },
    updateisSubmitValueChange(state, val){
        state.isSubmitValueChange = val
    }
     //데이터를 실질적으로 바꿔줌
    },
    actions:{
        //methods
        //비동기적인 함수
        //server 의 db update
        
    },
    // getters:{
    //     //computed
    //     //computed와 비슷하다
    //     getSubmitValue(state){
    //         return state.submitValue
    //     }
    // }
});