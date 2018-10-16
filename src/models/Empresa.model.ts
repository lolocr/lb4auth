import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Empresa"
})
export class Empresa extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "ID",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	id: Number;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Descripcion",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	descripcion: String;

	constructor(data?: Partial<Empresa>) {
		super(data);
	}
}