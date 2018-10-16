import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Proveidor"
})
export class Proveidor extends Entity {

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
		required: true,
		length: 30,
		precision: null,
		scale: null,
		id: true,
		mssql: {
			columnName: "Codigo",
			dataType: "nvarchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	codigo: String;

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

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Address",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	address: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grupo_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	grupoId: Number;

	constructor(data?: Partial<Proveidor>) {
		super(data);
	}
}