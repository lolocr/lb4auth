import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_ActuTill2"
})
export class TemporalActutill2 extends Entity {

	@property({
		type: String,
		required: true,
		length: 10,
		precision: null,
		scale: null,
		mssql: {
			columnName: "MAQUINA",
			dataType: "varchar",
			dataLength: 10,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	maquina: String;

	@property({
		type: String,
		required: true,
		length: 6,
		precision: null,
		scale: null,
		mssql: {
			columnName: "CLIENTE",
			dataType: "varchar",
			dataLength: 6,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	cliente: String;

	@property({
		type: String,
		required: false,
		length: 6,
		precision: null,
		scale: null,
		mssql: {
			columnName: "EMPRESA",
			dataType: "varchar",
			dataLength: 6,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	empresa: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "RAZON",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	razon: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "EMPLASAM",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	emplasam: String;

	@property({
		type: String,
		required: false,
		length: 100,
		precision: null,
		scale: null,
		mssql: {
			columnName: "POBLACION",
			dataType: "varchar",
			dataLength: 100,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	poblacion: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "DIRMAQ",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dirmaq: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "existeix",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	existeix: Number;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "possibleclient",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	possibleclient: String;

	constructor(data?: Partial<TemporalActutill2>) {
		super(data);
	}
}