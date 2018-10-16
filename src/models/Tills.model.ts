import {Entity, model, property} from '@loopback/repository'

@model({
	name: "tills"
})
export class Tills extends Entity {

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

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "description",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	description: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 1,
		scale: 0,
		mssql: {
			columnName: "enabled",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 1,
			dataScale: 0,
			nullable: "NO",
		}
	})
	enabled: Number;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes1",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes1: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grupo_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	grupoId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Operador_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	operadorId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Clients_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	clientsId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Ubicacio_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	ubicacioId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Empresa_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	empresaId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grup_Clients_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	grupClientsId: Number;

	constructor(data?: Partial<Tills>) {
		super(data);
	}
}