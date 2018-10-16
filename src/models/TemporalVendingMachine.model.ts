import {Entity, model, property} from '@loopback/repository'

@model({
	name: "temporal_vending_machine"
})
export class TemporalVendingMachine extends Entity {

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "MAQUINA",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	maquina: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 0,
		mssql: {
			columnName: "N_C",
			dataType: "smallint",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 0,
			nullable: "YES",
		}
	})
	nC: Number;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ARTICLE",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	article: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PREU",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	preu: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ins",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ins: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "prim",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	prim: Number;

	constructor(data?: Partial<TemporalVendingMachine>) {
		super(data);
	}
}