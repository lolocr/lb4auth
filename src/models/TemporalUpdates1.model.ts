import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_Updates1"
})
export class TemporalUpdates1 extends Entity {

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
		type: String,
		required: true,
		length: 15,
		precision: null,
		scale: null,
		mssql: {
			columnName: "update",
			dataType: "varchar",
			dataLength: 15,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	update: String;

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
			columnName: "RAZON",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	razon: String;

	constructor(data?: Partial<TemporalUpdates1>) {
		super(data);
	}
}