import { VocabData } from './vocab-data';

describe('VocabData', () => {
  it('should create an instance', () => {
    expect(new VocabData()).toBeTruthy();
  });

  it('should add a new field with the given data', () => {
    let data = new VocabData();

    let fieldName = "test-field"
    expect(data.data[fieldName])
      .withContext("negative Test")
      .toBeFalsy();

    let d = ["1", "2", "3"]
    data.insertField(fieldName, d)

    expect(data.data[fieldName])
      .withContext("Test after insert of Field")
      .toBe(d);

  })

  it('should give you the data of the field', () => {
    let data = new VocabData();

    let fieldName = "test-field";
    let d = ["1", "2", "3"];

    data.insertField(fieldName, d)

    expect(data.getField(fieldName))
      .toBe(d)

  })

  it('should throw an error when requesting a non existing field', () => {
    let data = new VocabData();

    let threw_error: boolean = false
    try {
      data.getField("test")
    } catch (e) {
      threw_error = true
    }

    expect(threw_error)
      .withContext("has thrown error")
      .toBeTrue()
  })

})
