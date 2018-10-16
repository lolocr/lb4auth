import {Entity, model, property} from '@loopback/repository'

@model({
	name: "permissions"
})
export class Permissions extends Entity {

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
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "route",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	route: String;

	@property({
		type: String,
		required: false,
		length: 4000,
		precision: null,
		scale: null,
		mssql: {
			columnName: "endpoint",
			dataType: "nvarchar",
			dataLength: 4000,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	endpoint: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "name",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	name: String;

	constructor(data?: Partial<Permissions>) {
		super(data);
	}
}