import {Entity, model, property} from '@loopback/repository'

@model({
	name: "MaquinesBonificades"
})
export class Maquinesbonificades extends Entity {

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
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "code",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	code: Number;

	constructor(data?: Partial<Maquinesbonificades>) {
		super(data);
	}
}