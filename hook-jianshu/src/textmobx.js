import { observable } from 'mobx'

class TestStore {
  @observable name
  constructor() {
    this.name = '安东'
  }
}

const text = new TestStore()
export default text