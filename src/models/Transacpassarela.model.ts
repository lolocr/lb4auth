import {Entity, model, property} from '@loopback/repository'

@model({
	name: "transacPASSARELA"
})
export class Transacpassarela extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "id",
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
		scale: 2,
		mssql: {
			columnName: "webload",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	webload: Number;

	@property({
		type: String,
		required: true,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	cardNum: String;

	@property({
		type: String,
		required: true,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "description",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	description: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "carregat",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	carregat: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "datacarrega",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	datacarrega: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "data",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	data: Date;

	constructor(data?: Partial<Transacpassarela>) {
		super(data);
	}
}