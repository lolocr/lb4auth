import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_ActuTill1"
})
export class TemporalActutill1 extends Entity {

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "id_maquina",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	idMaquina: String;

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

	constructor(data?: Partial<TemporalActutill1>) {
		super(data);
	}
}