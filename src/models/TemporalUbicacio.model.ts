import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_Ubicacio"
})
export class TemporalUbicacio extends Entity {

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "code",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	code: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Clients_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	clientsId: Number;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Clients",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	clients: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ubicacio_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ubicacioId: Number;

	constructor(data?: Partial<TemporalUbicacio>) {
		super(data);
	}
}