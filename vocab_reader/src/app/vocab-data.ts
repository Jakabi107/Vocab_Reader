export class VocabData {

  private _data:{ [fields: string]:string[] } = {}

  get data(): { [p: string]: string[] } {
    return this._data;
  }

  set data(value: { [p: string]: string[] }) {
    this._data = value;
  }


  public insertField( field:string, data:string[] ){
    this._data[field] = data
  }

  public getField( field:string ):string[] {
    if (this._data[field] == undefined) throw Error("No field with name " + field + "in data")
    return this._data[field]
  }

  public getFieldNames():string[] {
    return Object.keys(this._data)
  }
}
