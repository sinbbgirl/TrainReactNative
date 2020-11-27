/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

import { action, observable, decorate } from 'mobx';

class CounterStore {
    @observable counter = [{ counterNum: 0 }];

    // 카운터 추가 버튼
    handleAddCounter = () => {
        this.counter.push({ counterNum: 0 });
        console.log(this.counter)
    }

    // 카운터 삭제 버튼
    handleRemoveCounter = () => {
        this.counter.pop();
    }

    // + 버튼
    handleIncrement = (index) => {

    }

    // - 버튼
    handleDecrement = (index) => {

    }
}

// decorate(CounterStore, {
//     counter: observable,
//     handleAddCounter: action,
//     handleRemoveCounter: action,
// })

export default new CounterStore();