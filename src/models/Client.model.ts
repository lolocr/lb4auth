import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Clients"
})
export class Client extends Entity {

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
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "descripcion",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	descripcion: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "operador_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	operadorId: Number;

	@property({
		type: String,
		required: true,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "codigo",
			dataType: "nvarchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	codigo: String;

	constructor(data?: Partial<Client>) {
		super(data);
	}
}
